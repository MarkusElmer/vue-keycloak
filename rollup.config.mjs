// rollup.config.js
import { defineConfig } from 'rollup';

export default defineConfig({
  /* your config */
  input: 'dist-transpiled/index.js',
  output: [
    {
      dir: 'dist/',
      entryFileNames: '[name].esm.js',
      chunkFileNames: '[name]-[hash].esm.js',
      format: 'es',
      sourcemap: true,
    },
    {
      dir: 'dist/',
      format: 'commonjs',
      preferConst: true,
      sourcemap: true,
    },
  ],
  external: ['keycloak-js', 'jwt-decode', 'vue'],
});
