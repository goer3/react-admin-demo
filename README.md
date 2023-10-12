<h1 align="center">Chang'e（嫦娥） 开发手册</h1>
<h3 align="center">一个通过 Go / Gin / Gorm 实现的运维管理系统后端</h3>
<p align="center">
<a href="https://github.com/goer3/chang-e/fork" target="blank">
<img src="https://img.shields.io/github/forks/goer3/chang-e?style=flat-square" alt="github-profile-readme-generator forks"/>
</a>
<a href="https://github.com/goer3/chang-e/stargazers" target="blank">
<img src="https://img.shields.io/github/stars/goer3/chang-e?style=flat-square" alt="github-profile-readme-generator stars"/>
</a>
<a href="https://github.com/goer3/chang-e/issues" target="blank">
<img src="https://img.shields.io/github/issues/goer3/chang-e?style=flat-square" alt="github-profile-readme-generator issues"/>
</a>
</p>

<hr>


### 🤔 技术栈

- [x] Vite：新型前端构建工具，能够显著提升前端开发体验。 [:octocat:](https://github.com/vitejs/vite)
- [x] React：由 Facebook 开源的一个进行创建用户界面的一款 JavaScript 库。
- [x] Antd：基于 React 的前端 UI 组件库，由蚂蚁金服开发并提供维护。

<br>

### 🎯 依赖安装

MiSans 字体引入：

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/misans@3.1.1/lib/misans-400-regular.min.css"
/>
```

其它开发依赖：

```bash
# 安装 cnpm
npm i -g cnpm

# 自动格式化代码
cnpm i --save-dev --save-exact prettier
cnpm i --save-dev @types/node 

# 基础开发依赖
cnpm i antd@4.24.14
cnpm i @ant-design/icons
cnpm i react-router
cnpm i react-router-dom
cnpm i less less-loader
cnpm i axios
cnpm i valtio
cnpm i moment
```

<br>