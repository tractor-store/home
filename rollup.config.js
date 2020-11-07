import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";
import nodeResolve from "rollup-plugin-node-resolve";
import svelte from "rollup-plugin-svelte";

export default {
  input: "pages.js",
  output: {
    name: 'pages',
    file: "pages.min.js",
    format: "iife"
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    svelte(),
    replace({
      "process.env.NODE_ENV": JSON.stringify("development")
    })
  ]
};
