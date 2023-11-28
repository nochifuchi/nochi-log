---
title: "【GatsbyJS + Contentful】マークダウンブログにコードシンタックスハイライト導入方法"
excerpt: "【GatsbyJS + Contentful】マークダウンブログにコードシンタックスハイライト導入方法"
coverImage: "https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg/1f4dc.svg"
date: "2020/09/06"
ogImage:
  url: "https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg/1f4dc.svg"
---

この記事では

- GatsbyJS + Contentful のマークダウンブログにコードシンタックスハイライトを導入する方法

について紹介します。

Contentful のマークダウンは、コードのシンタックスハイライトに対応していないので、自分で設定する必要があります。

具体的には以下のように書けば、、

````
```javascript
const test = "hoge"
console.log(test);
```
````

以下のように表示されるようにしていきたいと思います。

```javascript
const test = "hoge";
console.log(test);
```

導入の際に詰まってしまい、なかなか出来なかったので他の方の参考になればと思います。

## プラグインのインストール

まずは、必要となる Prismjs というライブラリをインストールしていきます。

[gatsby-remark-prismjs](https://www.gatsbyjs.com/plugins/gatsby-remark-prismjs/)

以下のコマンドでインストールします。

```shell
$ yarn add gatsby-remark-prismjs prismjs
```

または、以下のコマンドでインストールします。

```shell
$ npm install -S prismjs gatsby-remark-prismjs
```

## プラグインの設定

次に Prismjs の設定を**gatsby-config.js**に追加していきます。

Contentful のマークダウンを**gatsby-transformer-remark**で HTML で変換しています。

そのため、**gatsby-transformer-remark**の中の plugins に今回導入する**gatsby-remark-prismjs**を追加します。

実際のコードは以下のようになりました。

```javascript:gatsby-config.js
resolve: `gatsby-transformer-remark`,
  options: {
    plugins: [
      {
        resolve: `gatsby-source-contentful`,
        options: {
          spaceId: process.env.CONTENTFUL_SPACE_ID,
          accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
          host: process.env.CONTENTFUL_HOST,
        }
      },
      {
        resolve: `gatsby-remark-prismjs`,
        options: {
          classPrefix: "language-",
          inlineCodeMarker: null,
          aliases: {},
          showLineNumbers: true,
          noInlineHighlight: false,
        },
      },
    ],
  },
```

## テーマのインポート

**gatsby-config.js**の設定が終わったら、Prismjs のテーマの CSS をインポートしていきます。

**gatsby-browser.js**に Prismjs のテーマをインポートします。

Prismjs のテーマは何種類かあるので、好きなものを選んでみてください。

[Prismjs](https://prismjs.com/)

**gatsby-browser.js**ファイルが無ければ、**gatsby-config.js**と同じ階層に、**gatsby-browser.js**というファイルを作成しておきます。

実際のコードは以下のようになりました。

```js:gatsby-browser.js
require("prismjs/themes/prism-tomorrow.css");
```

これでプラグインの設定が終わり、マークダウンのシンタックスハイライトが表示されるようになります。

## コードブロックにタイトルを表示できるようにする

コードブロックのシンタックスハイライトを表示することはできましたが、コードブロックにファイル名などタイトルを入れたい場合などは**gatsby-remark-code-titles**というプラグインを追加でインストールします。

```shell
$ yarn add gatsby-remark-code-titles
```

または、以下のコマンドでインストールします。

```shell
$ npm install -S gatsby-remark-code-titles
```

先ほどの**gatsby-config.js**ファイルに以下を追加します。

```js:gatsby-config.js
resolve: `gatsby-transformer-remark`,
  options: {
    plugins: [
      `gatsby-remark-code-titles`,
      {
        resolve: `gatsby-source-contentful`,
        options: {
          spaceId: process.env.CONTENTFUL_SPACE_ID,
          accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
          host: process.env.CONTENTFUL_HOST,
        }
      },
      {
        resolve: `gatsby-remark-prismjs`,
        options: {
          classPrefix: "language-",
          inlineCodeMarker: null,
          aliases: {},
          showLineNumbers: true,
          noInlineHighlight: false,
        },
      },
    ],
  },
```

私はタイトル部分のスタイルを編集したかったので、以下のように CSS を追加しました。

```css
.gatsby-code-title {
  background: #999;
  color: #fff;
  margin-bottom: -0.65em;
  padding: 0.7rem 1.05rem;
  font-size: 0.8em;
  line-height: 0.4;
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier
      New, monospace;
  font-weight: 600;
  border-radius: 8px 8px 0 0;
  display: table;
}
```

### 使い方

マークダウンでコードブロックの 1 行目に:title=タイトル名のように記載します。

````
```javascript:title=test.js
const test = "hoge"
console.log(test);
```
````

すると以下のように表示されます。

```javascript:test.js
const test = "hoge";
console.log(test);
```

これでコードブロックにタイトルを入れることができるようになりました。

## おわりに

gatsby-config.js のプラグインの設定で、少し詰まってしまいましたが無事シンタックスハイライトをブログに導入することができました。

コードが断然見やすくなり、導入して良かったです。

Prismjs はかなり簡単に、おしゃれなテーマのシンタックスハイライトを導入することができるのでおすすめです。

ぜひみなさんも導入してみてください！
