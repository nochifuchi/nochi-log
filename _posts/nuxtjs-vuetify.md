---
title: "Nuxt.jsで使えるUIフレームワーク Vuetifyの導入方法とカスタマイズ"
excerpt: "Nuxt.jsで使えるUIフレームワーク Vuetifyの導入方法とカスタマイズ"
coverImage: "https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg/1f3a9.svg"
date: "2020/10/01"
ogImage:
  url: "https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg/1f3a9.svg"
---

今回は Vuetify の導入方法とカスタマイズ方法についてご紹介します。

## Vuetify とは？

Vuetify とは、Vue.js で使用できるマテリアルデザインの UI フレームワークです。
レイアウトを構築するグリッドシステムやボタンなどの細かいパーツなど幅広く UI が用意されています。
デザインの知識がなくても、簡単に UI を作ることができるため非常に便利なフレームワークです。

## Nuxt プロジェクト作成時に導入

新規で Nuxt のプロジェクトを作成する際に Vuetify の導入が決まっている場合は、
`create-nuxt-app` コマンド時に Choose UI framework の項目で `Vuetify` を選択します。

![nuxt vuetify ターミナルスクリーンショット](/assets/blog/nuxtjs-scss/screenshot-1.png)

## Nuxt プロジェクトの途中で導入

プロジェクトの途中で Vuetify を使用したいという場合は以下の手順でインストールしていきます。

### ライブラリのインストール

```bash
yarn add --dev @nuxtjs/vuetify
```

### nuxt.config.js に追記

```jsx
{
  buildModules: ["@nuxtjs/vuetify"];
}
```

## Vuetify のカスタマイズ方法

Vuetify を使っている時にサイトのフォントを変えたり、ボタンのサイズなどを変更したい場面があると思います。
Vuetify には SASS 変数が用意されており、その SASS 変数をカスタマイズすることが出来るようになっています。
そのカスタマイズ方法についてご紹介します。

### SCSS ファイルの作成

SASS 変数上書き用の SCSS ファイルを作成します。
SASS ファイルには以下のようにカスタマイズしたい SASS 変数を追加していきます。

`assets/scss/variables.scss`

```scss
// Globals
$body-font-family: "メイリオ", Meiryo, "ヒラギノ角ゴ Pro W3",
  "Hiragino Kaku Gothic Pro", "ＭＳ Ｐゴシック", "MS PGothic", arial, helvetica,
  sans-serif;

// color
$grey: (
  "base": #c7c7c7,
);
$blue: (
  "base": #3879d9,
);
$light-blue: (
  "base": #00b4ff,
);

// btn
$btn-font-weight: bold;
$btn-sizes: (
  "default": 45,
  "large": 50,
  "x-large": 60,
);
$btn-font-sizes: (
  "default": 0.15px,
  "large": 16px,
  "x-large": 17px,
);
```

## nuxt.config.js でスタイルシート読み込み

最後に nuxt.config.js で作成したスタイルシートのパスを追記します。
`treeShake`はデフォルトでは本番環境のみ有効になりますが、開発環境でもカスタマイズを有効にするために`true`を選択します。

`nuxt.config.js`

```jsx
// VuetifyのSASS変数上書き用のスタイルシート読み込み
vuetify: {
  treeShake: true,
  customVariables: ['~/assets/scss/variables.scss'],
},
```

これで Vuetify のカスタムができるようになりました。
