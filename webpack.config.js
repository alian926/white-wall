const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/js/index.js',
	output: {
		path: path.resolve(__dirname, 'docs'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					// 将 JS 字符串生成为 style 节点
					'style-loader',
					// 将 CSS 转化成 CommonJS 模块
					'css-loader',
					// 将 Sass 编译成 CSS
					'sass-loader',
				],
			},
		],
	},
	plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
  target: 'web',
	mode: 'production',
};
