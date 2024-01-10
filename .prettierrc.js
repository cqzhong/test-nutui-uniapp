module.exports = {
  tabWidth: 2, // tab缩进大小,默认为2
  useTabs: false,
  semi: false,
  semi: false, // 使用分号, 默认true
  quoteProps: 'as-needed',
  endOfLine: 'auto',
  proseWrap: "never",
  eslintIntegration: true,
  singleQuote: true, // 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
  bracketSpacing: true, // 对象中的空格 默认true
  jsxBracketSameLine: false, // JSX标签闭合位置 默认false
  arrowParens: 'avoid', // 箭头函数参数括号 默认avoid 可选 avoid| always
  printWidth: 130,
  htmlWhitespaceSensitivity: 'ignore', // html标签 > 不会被换行
  eqeqeq: [2, 'allow-null'], // 要求使用 ===和 !==
  trailingComma: 'none'
}
