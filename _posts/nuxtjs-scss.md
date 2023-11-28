---
title: "【Nuxt.js】SCSSの導入方法とスタイル環境構築例"
excerpt: "【Nuxt.js】SCSSの導入方法とスタイル環境構築例"
coverImage: "https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg/1f3a8.svg"
date: "2020/09/17"
ogImage:
  url: "https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg/1f3a8.svg"
---

今回は Nuxt.js での SCSS の導入方法とスタイル環境の構築例について
備忘録も兼ねてご紹介したいと思います。

## インストール

今回は Dart Sass を導入します。
以前は LibSass を使用していましたが 2020 年 10 月に非推奨となり今後は新機能の追加が行われないようです。
Dart Sass は開発が盛んで公式としても使用を推奨しています。

[Dart Sass](https://sass-lang.com/dart-sass)

### 下記コマンドで必要ライブラリをインストール

```bash
yarn add --dev sass sass-loader fibers
```

### nuxt.config.js に追加

インストールが終わったら`nuxt.confing.js`に以下のような形でモジュールの読み込みと SCSS のオプションを追加します。

```jsx
// モジュール読み込みを追加
const Sass = require("sass");
const Fiber = require("fibers");

export default {
  // SCSSオプションを追加
  build: {
    loaders: {
      scss: {
        implementation: Sass,
        sassOptions: {
          fiber: Fiber,
        },
      },
    },
  },
};
```

## サイト共通のスタイルシート作成

サイト全体で使用したいスタイルがある場合、
**サイト全体で使える**SCSS ファイルを用意しておくと便利です。

`assets`の下に`scss`というディレクトリを作成し、その中にサイト全体で使用する
スタイルシートを作成します。

### サイト全体のスタイル用

`assets/scss/common.scss`

```scss
@import "core/variables";
@import "core/mixin";

// サイト全体のスタイル
```

### サイト全体の変数用

全コンポーネントファイルで変数を使用するためのファイルを作成します。

`assets/scss/core/_variables.scss`

```scss
// font
$base-font-size: 16px;

$base-font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN",
  "Hiragino Sans", Meiryo, sans-serif;

// Color
$white: #fff;
$black: #000;
$default-color: #231815;
```

### サイト全体のミックスイン用

`assets/scss/core/_mixin.scss`

```scss
@mixin lg-icon-btn(
  $width: 515px,
  $color: #fff,
  $font-size: 20px,
  $sp-font-size: 18px,
  $icon-size: 25px,
  $sp-icon-size: 22px
) {
  .v-btn {
    width: $width;
    color: $color;
    font-size: $font-size;
    @media screen and (max-width: 960px) {
      width: 100%;
      font-size: $sp-font-size;
    }
  }

  .v-icon {
    font-size: $icon-size;
    @media screen and (max-width: 960px) {
      font-size: $sp-icon-size;
    }
  }
}
```

### ライブラリインストール

```bash
yarn add --dev @nuxtjs/style-resources
```

### nuxt.config.js に追加

`nuxt.config.js`の`modules`にライブラリを追加し、
`styleResources`に今回追加したサイト全体で使用する SCSS ファイルを追加します。

```jsx
modules: [
  '@nuxtjs/style-resources',
],
styleResources: {
  scss: ['~/assets/scss/common.scss'],
},
```

以上で設定は完了です。
