module.exports = {
  presets: [
    [
      '@babel/preset-env', // 转译 es6+ 的语法
      {
        modules: 'commonjs',
      },
    ],
  ],
  plugins: [['@babel/plugin-transform-runtime']],
};
