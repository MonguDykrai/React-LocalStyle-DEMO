# README

## css-loader 笔记 (局部、全局样式 webpack 配置）React 中应用

没配置 modules 和 localIdentName 时

```js
// webpack.config.dev.js
{
  loader: require.resolve('css-loader'),
  options: {
    importLoaders: 1,
  },
},
```

```css
/* ./src/components/Greeting/index.css */
:local(.red) { color: red; }

/*
 * When declaring a local classname you can
 * compose a local class from another local classname.
 * <https://github.com/webpack-contrib/css-loader>
 */
:local(.green) {
  composes: red;
  color: green;
}

:local(.btnGoodbye) {
  composes: bye hi from '../Goodbye/index.css';
  color: crimson;
}

:local(h2) {
  color: chocolate;
}

.blue {
  color: blue;
}

/* styles.css */
.App {
  font-family: sans-serif;
  text-align: center;
}
```

![css-loader without modules localIdentName](https://upload-images.jianshu.io/upload_images/12334242-6b11dbf67b3796a4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


配置了  modules 和 localIdentName 时

```js
{
  loader: require.resolve('css-loader'),
  options: {
    importLoaders: 1,
    modules: true,
    localIdentName: '[path][name]__[local]--[hash:base64:5]'
  },
},
```

```css
/* ./src/components/Greeting/index.css */
:local(.red) { color: red; }

/*
 * When declaring a local classname you can
 * compose a local class from another local classname.
 * <https://github.com/webpack-contrib/css-loader>
 */
:local(.green) {
  composes: red;
  color: green;
}

:local(.btnGoodbye) {
  composes: bye hi from '../Goodbye/index.css';
  color: crimson;
}

:local(h2) {
  color: chocolate;
}

/* 全局样式需要 + :global，否则不起作用 */
:global(.blue) {
  color: blue;
}

/* styles.css */
:global(.App) {
  font-family: sans-serif;
  text-align: center;
}
```

![css-loader config modules localIdentName](https://upload-images.jianshu.io/upload_images/12334242-c7b78e215c34ebee.gif?imageMogr2/auto-orient/strip)

![css-loader config modules localIdentName-02.png](https://upload-images.jianshu.io/upload_images/12334242-e9301baa9db33684.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

参考资料：
<https://github.com/webpack-contrib/css-loader>