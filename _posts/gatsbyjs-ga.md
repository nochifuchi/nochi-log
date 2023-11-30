---
title: "GatsbyJSにGoogleアナリティクスを導入する方法"
excerpt: "GatsbyJSにGoogleアナリティクスを導入する方法"
coverImage: "https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg/1f4ca.svg"
date: "2020/08/30"
ogImage:
  url: "https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg/1f4ca.svg"
---

この記事では

- GatsbyJS に Google アナリティクスを導入する方法

について紹介します。

とても簡単に導入できるので、GatsbyJS をお使いの方はおすすめです。

## プラグインのインストール

まずは、GatsbyJS のプラグインである **gatsby-plugin-google-analytics**をインストールしていきます。

以下のコマンドでインストールします。

```shell
$ yarn add gatsby-plugin-google-analytics
```

または、以下のコマンドでインストールします。

```shell
$ npm install --save gatsby-plugin-google-analytics
```

[gatsby-plugin-google-analytics](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-analytics/)

## トラッキング ID を追加

次に **gatsby-config.js**にプラグインの設定と Google アナリティクスのトラッキング ID を追加していきます。

gatsby-config.js に以下のコードを追加します。

**trackingId**の部分にご自身の Google アナリティクスのトラッキング ID を入れます。

```javascript:title=gatsby-config.js
plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-XXXXXXXXXX-X`,
        head: true,
      },
    },
 ],
```

また、options では Google アナリティクスの様々な設定をすることができます。

options の詳細は GatsbyJS プラグインサイトを見てみてください！

[gatsby-plugin-google-analytics](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-analytics/)

## おわりに

今回は GatsbyJS に Google アナリティクスを導入する方法についてご紹介しました。

かなり簡単に Google アナリティクスを導入することができるので、GatsbyJS でサイトを作成した方はぜひ入れてみてください！

私も Google アナリティクスでサイトの分析・解析していこうと思います。
