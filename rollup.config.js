import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";
import nodeResolve from "rollup-plugin-node-resolve";
import svelte from "rollup-plugin-svelte";
import serve from 'rollup-plugin-serve';

const isDev = process.env.NODE_ENV === 'development';

const plugins = [
    nodeResolve(),
    commonjs(),
    svelte(),
    replace({
      "process.env.NODE_ENV": JSON.stringify("development")
    })
];

if(isDev) {
  plugins.push(
    serve({
      contentBase: './dist',
      port: '9001',
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
  );
}

export default {
  input: "pages.js",
  output: {
    name: 'pages',
    file: "dist/home.min.js",
    format: "iife"
  },
  plugins,
};
