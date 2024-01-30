---
title: "vite-plugin-handlebarsの使い方"
excerpt: "vite-plugin-handlebarsの使い方"
coverImage: "https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg/1f3cb-fe0f-200d-2642-fe0f.svg"
date: "2024/01/30"
ogImage:
  url: "https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg/1f3cb-fe0f-200d-2642-fe0f.svg"
---

## vite-plugin-handlebars とは

`vite-plugin-handlebars` とは `HTML` を `ejs` のようにコンポーネント毎に分けることができる `vite` のプラグインになります

ページ共通のヘッダーやフッター、またはコンポーネント毎にファイルを分けることができるので見やすく、管理しやすくなります

## vite-plugin-handlebars のインストール

```bash
yarn add -D vite-plugin-handlebars
```

## コンポーネントを管理するディレクトリを追加

コンポーネント用のディレクトリ（例：components）を `src/`内に作成します

今回はテスト用として `header.html` を作成しました

![vscode スクショ1](/assets/blog/vite-plugin-handlebars/screenshot-1.png)

## vite.config.js に設定追加

`vite.config.js`に`vite-plugin-handlebars`を使用するための設定を追加します

```jsx
import { defineConfig } from "vite";
// importを追記
import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  // vite-plugin-handlebarsの設定追加
  plugins: [
    handlebars({
      // コンポーネントのディレクトリ
      partialDirectory: resolve(__dirname, "./src/components"),
    }),
  ],
});
```

## 使い方

### コンポーネントの読み込み方法

以下のようにして作成したコンポーネントを読み込むことができます

```html
<!-- headerの読み込み -->
{{> header}}
```

ディレクトリを作成してコンポーネントを読み込む場合は以下のようにして読み込みます

例：`head/meta.html` を読み込む場合

```html
{{> head/meta}}
```

### コンポーネントに変数を渡す

コンポーネントの読み込みの際に変数を記載するとそのコンポーネントで変数を使用できます

`index.html`側での記述

```html
{{> header test="テスト"}}
```

`header.html`（コンポーネント）側での記述

```html
<header>header {{test}}</header>
```

### その他 handlebars の機能

**プロパティの出力**

```html
{{プロパティ名}}
```

**条件分岐**

```html
{{#if 条件}}
  hoge
{{else}}
  hogehoge
{{/if}}
```

**コメントアウト**

```html
{{!コメント}}
```

他の機能については公式ページを見てみてください

[Expressions | Handlebars](https://handlebarsjs.com/guide/expressions.html)

## ページ毎に設定した情報を読み込む

ページ毎にタイトルや現在のページがトップページなのかなどの情報を設定し、各ページで読み込むことができます

まずはページ情報を記載しておくファイルを作成し、ページ毎（パス毎）に設定したい情報を記載します

```jsx:pageData.js
// ページ情報
export const pageData = {
  "/index.html": {
    title: "トップページ",
    isTop: true,
  },
  "/about.html": {
    title: "アバウトページ",
    isTop: false,
  },
};
```

先ほどの`vite.config.js`で上記ファイルの読み込みと `handlebars` の設定を追記します

```jsx
import { defineConfig } from "vite";
// importを追記
import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";
// ページ情報の読み込み
import { pageData } from "./pageData";

export default defineConfig({
  // vite-plugin-handlebarsの設定追加
  plugins: [
    handlebars({
      // コンポーネントのディレクトリ
      partialDirectory: resolve(__dirname, "./src/components"),
      // ページ情報の読み込み
      context(pagePath) {
        return pageData[pagePath];
      },
    }),
  ],
});
```

コンポーネントで読み込む際は以下のようにして変数を読み込みます

```html
<!doctype html>
<html lang="ja">
  <head>
    <!-- pageDataのtitleを読み込み -->
    <title>{{title}}</title>
  </head>
  <body>
    <!-- headerの読み込み -->
    {{> header}}

    <!-- pageDataのisTopを読み込んでif文で出し分け -->
    {{#if isTop}}
      トップページ
    {{else}}
      アバウトページ
    {{/if}}
  </body>
</html>
```
