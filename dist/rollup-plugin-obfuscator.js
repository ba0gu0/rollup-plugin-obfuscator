"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var pluginutils_1 = require("@rollup/pluginutils");
var javascript_obfuscator_1 = require("javascript-obfuscator");
var defaultOptions = {
    globalOptions: {},
    fileOptions: {},
    include: ['**/*.js', '**/*.ts'],
    exclude: ['node_modules/**'],
    obfuscate: javascript_obfuscator_1.obfuscate,
};
exports.default = (function (override) {
    var options = __assign(__assign({}, defaultOptions), override);
    var filter = (0, pluginutils_1.createFilter)(options.include, options.exclude);
    return {
        name: 'rollup-plugin-obfuscator',
        transform: options.fileOptions === false ? undefined : function (code, id) {
            if (!filter(id))
                return null;
            var obfuscationResult = options.obfuscate(code, __assign(__assign({}, options.fileOptions), { inputFileName: id, sourceMap: true }));
            return {
                code: obfuscationResult.getObfuscatedCode(),
                map: obfuscationResult.getSourceMap(),
            };
        },
        renderChunk: options.globalOptions === false ? undefined : function (code, _a) {
            var fileName = _a.fileName;
            if (!filter(fileName))
                return null;
            var obfuscationResult = options.obfuscate(code, __assign(__assign({}, options.globalOptions), { inputFileName: fileName, sourceMap: true }));
            return {
                code: obfuscationResult.getObfuscatedCode(),
                map: obfuscationResult.getSourceMap(),
            };
        }
    };
});
//# sourceMappingURL=rollup-plugin-obfuscator.js.map