# FLOW

## 认识

facebook出品，js静态类型检查工具

## 为什么用

* js是动态类型语言，灵活之余，存在隐患代码，运行时报出
* 静态类型检查，就是编译期间，尽早发现由类型引发的bug。利于大型项目的开发和维护
* babel和eslint都有对应插件支持flow语法

## 工作方式

* 类型推断--通过变量的使用上下文，推断出变量类型
* 类型注释--事先注释好期待类型

## 在vuejs源码中

* 配置文件.flowconfig
* 自定义 [libs]--flow文件夹
  * compiler.js ->编译相关 
  * component.js->组件数据结构
  * global-api.js->全局api结构
  * modules.js->第三方库定义
  * options.js->选项相关
  * ssr.js->服务器渲染相关
  * vnode.js->虚拟node相关





