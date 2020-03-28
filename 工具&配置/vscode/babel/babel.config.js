module.exports = {
    // plugins在presets前执行，插件从前往后执行
    plugins: [
        // 语法转换(此处是箭头函数)，若都引入，麻烦，所以预设@babel/preset-env

        // "@babel/plugin-transform-arrow-functions"

        // "@babel/plugin-transform-runtime" // 让帮助函数不重复注入 不污染全局环境

        [
            "@babel/plugin-transform-runtime", // 可简写成@babel/transform-runtime 开发时使用，运行时需要依赖@babel/runtime
            {

                // 加了之后 不仅处理帮助函数，也加载polyfill(不污染全局环境)。需要安装@babel/runtime-corejs3
                // 移除presets里useBuiltIns corejs的配置，不然重复引入了。require("regenerator-runtime/runtime")
                // "corejs": 3
            }
        ]
    ],
    // presets从后往前执行
    presets: [
        // 安装@babel/preset-env后 core-js-compat@^3.6.2 4 regenerator-runtime@^0.13.4 5 regenerator-transform@^0.14.2 4 @babel/runtime@^7.8.4 9.2 各种plugins 
        // 箭头函数、const-> var ... 

        // 但是单纯设置的话，即只是高版本语法转换成低版本语法。比如新的内置函数、实例方法includes Promise就无法转换
        // 再比如async await时ReferenceError: regeneratorRuntime is not defined 需import 'regenerator-runtime/runtime'
        // 因此需要polyfill @babel/polyfill(corejs+regenerator-runtime) 可这有性能问题是全部引入 因此配置useBuiltIns。另babel V7.4后已废弃

        // "@babel/preset-env",  // 可简写成@babel/env
        ["@babel/env", {
            targets: {
                "browsers": ["> 0.5%", "last 2 chrome versions", "not dead"] // 目标环境 有browserslistrc 也以这里为准
            },
            useBuiltIns: 'usage', // 设置为usage时，只会包含需要的polyfill。同时也就引入了相关polyfill。 指定一下corejs版本，不然有警告
            corejs: 3 // 需要useBuiltIns: 'usage'，默认是2，但是2不会再添加新特性，比如flat方法 就无法polyfill了。因此选择corejs 3，安装corejs3
        }]
    ]
}