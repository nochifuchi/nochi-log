---
title: "GatsbyJS + Netlifyで環境変数を設定する方法"
excerpt: "GatsbyJS + Netlifyで環境変数を設定する方法"
coverImage: "https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg/1f516.svg"
date: "2020/09/09"
ogImage:
  url: "https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg/1f516.svg"
---

この記事では

- GatsbyJS + Netlify で環境変数を設定する方法

について紹介します。

Netlify で登録している本番の環境変数の設定はできていたのですが、開発環境の環境変数の設定がまだだったので今回設定してみました。

今回の手順は以下のようになります。

- プラグインのインストール
- .env ファイル作成
- 環境変数読み込み

## プラグインのインストール

まずは、**dotenv**というプラグインをインストールしていきます。

### dotenv とは？

dotenv とは、開発環境のルートに環境変数を記載した**.env ファイル**を作成しておくと、process.env 経由で参照してくれるプラグインになります。

[dotenv](https://www.npmjs.com/package/dotenv)

### インストール

以下のコマンドでインストールします。

```shell
$ yarn add dotenv
```

または、以下のコマンドでインストールします。

```shell
$ npm install --save dotenv
```

## .env ファイル作成

次に環境変数を記載しておく**.env ファイル**を作成していきます。

ルートに**.env ファイル**を作成し、任意の環境変数を登録します。

自分の場合は、Contetful の情報を登録しているので、以下のようになりました。

こちらは自分の環境に合わせて変数名や値を変えてみてください。

```javascript:.env
CONTENTFUL_SPACE_ID = XXXXXXXX;
CONTENTFUL_ACCESS_TOKEN = XXXXXXXX;
CONTENTFUL_HOST = XXXXXXXX;
```

## 環境変数読み込み

次に作成した、**.env ファイル**を**gatsby-config.js**ファイルで読み込んでいきます。

[公式サイト](https://www.npmjs.com/package/dotenv)にある通り、以下のコードを追加していきます。

```javascript:gatsby-config.js
require("dotenv").config();
```

これで process.env 経由で.env ファイルの環境変数を呼び出すことができました。

実際に呼び出している部分は以下のようになります。

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
    ],
  },
```

これで開発環境での環境変数の設定が環境しました！

本番の環境変数は Netlify で登録できるので、その環境変数を使っています。

以上になります。

読んでいただきありがとうございました。

### 参考記事

[GatsbyJS + Netlify で環境変数を利用するのに迷った話](https://qiita.com/xrxoxcxox/items/4e337b96fc9017b3771c)

[環境変数の代わりに .env ファイルを使用する (dotenv)](https://maku77.github.io/nodejs/env/dotenv.html)
