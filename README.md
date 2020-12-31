# CSS Houdini

## Usage
Check each project's README.md.

## Development

### Setup
If you develops at first, Run this:

```bash
sh tools/scripts/setup
```

### Website

```bash
npm run website
```
start website site with webpack-sev-server

### Create Package

```bash
npx nx g @nrwl/node:library <packageName> --publishable --importPath="@tyankatsu0105/<packageName>"
```

## Build

```bash
npm run build css-houdini-ripple
```

```bash
npm run build:all
```

## Memo
- CSS Houdiniとは、ピクセルパイプラインの各ステップにhookしてCSSの拡張を可能にするAPI郡のこと
  - CSSOMにアクセスできるAPIは、どれもレンダリングが終わったあとの操作
  - しかし、Houdiniでレンダリングまで待たずに各プロセスにフックとして機能を登録して、CSSの拡張ができる
- PaintWorklet.registerPaint()で処理を書いた class を登録して、CSS.PaintWorklet.addModule()で PaintWorklet に登録した class を追加して使えるようにするっぽい
  - registerPaintに渡す引数は、`(name, paintCtrl)`らしい https://drafts.css-houdini.org/css-paint-api-1/
- paintWorklet.addModuleでnameの指定ができないので、インストールしたモジュール間で命名のバッティングが起こりそう
  - registerPaintの第一引数の名称
  - registerPropertyで登録したCSS変数の名称

### CSS.registerProperty
- https://developer.mozilla.org/ja/docs/Web/API/CSS/RegisterProperty
- https://csstree.github.io/docs/syntax/

## Links

- [\(6\) Extending CSS with Houdini \- YouTube](https://www.youtube.com/watch?v=5eBar5TI71M)
- [CSS Houdini \| MDN](https://developer.mozilla.org/ja/docs/Web/Houdini)
- [CSS\.paintWorklet \(静的プロパティ\) \- Web API \| MDN](https://developer.mozilla.org/ja/docs/Web/API/CSS/paintWorklet)
- [una/extra\.css: A CSS Houdini Paint library for those who want to make their sites a little extra 💁🏻‍♀️](https://github.com/una/extra.css#readme)
- [CSS\.registerProperty\(\) \- Web API \| MDN](https://developer.mozilla.org/ja/docs/Web/API/CSS/RegisterProperty)
- [Houdini – CSS の秘密を解き明かすもの  \|  Web  \|  Google Developers](https://developers.google.com/web/updates/2016/05/houdini?hl=ja)
- [Exploring the CSS Paint API \| Bobrov Dev](https://bobrov.dev/blog/exploring-the-css-paint-api/)
- [CSS Houdini: Properties, Values, and the Paint API \| Aysha Anggraini](https://aysha.me/2019/08/css-houdini-properties-values-and-the-paint-api/)