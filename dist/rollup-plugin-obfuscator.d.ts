import { Plugin } from 'rollup';
import { ObfuscationResult, ObfuscatorOptions } from 'javascript-obfuscator';
type FilterOptions = string | RegExp | (string | RegExp)[];
export interface RollupPluginObfuscatorOptions {
    /**
     * Global options, applied when rendering chunks. Pass `false` to disable.
     */
    globalOptions: ObfuscatorOptions | false;
    /**
     * Per-file options, applied when transforming files, include/exclude works for this option. Pass `false` to disable.
     */
    fileOptions: ObfuscatorOptions | false;
    /**
     * Files to include when applying per-file obfuscation.
     */
    include: FilterOptions;
    /**
     * Files to exclude when applying per-file obfuscation. The priority is higher than `include`.
     */
    exclude: FilterOptions;
    /**
     * Overwrite the obfuscate method used.
     */
    obfuscate: (sourceCode: string, inputOptions?: ObfuscatorOptions) => ObfuscationResult;
}
declare const _default: (override: Partial<RollupPluginObfuscatorOptions>) => Plugin;
export default _default;
//# sourceMappingURL=rollup-plugin-obfuscator.d.ts.map