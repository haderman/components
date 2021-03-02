import typescript from "rollup-plugin-typescript2";
import svg from 'rollup-plugin-svg';
import autoprefixer from 'autoprefixer';
import postcss from 'rollup-plugin-postcss';
import pkg from "./package.json";

export default {
  preserveModules: true,
  input: './src/index.ts',
  output: [
    { file: pkg.main, format: 'cjs', exports: 'named' },
    { file: pkg.module, format: 'es', exports: 'named' },
  ],
  preserveModules: true,
  input: './src/index.ts',
  output: [
    {
      dir: './dist',
      format: 'cjs'
    }
  ],
  plugins: [
    typescript({
      typescript: require('typescript'),
    }),
    svg({
      base64: true,
    }),
    postcss({
      plugins: [autoprefixer()],
      sourceMap: true,
      extract: true,
      minimize: true
    }),
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
};
