---
title: "【GatsbyJS + Contentful】サイトにGoogleタグマネージャーでGoogleアナリティクスを導入する方法"
excerpt: "【GatsbyJS + Contentful】サイトにGoogleタグマネージャーでGoogleアナリティクスを導入する方法"
coverImage: "https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg/1f3f7.svg"
date: "2020/09/11"
ogImage:
  url: "https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg/1f3f7.svg"
---

この記事では

- GatsbyJS + Contentful で作成した、サイトに Google タグマネージャーで Google アナリティクスを導入する方法

について紹介します。

前提として以下は登録済みの想定として説明していきます。

まだ設定していない方は先に設定をお願いします。

- Google タグマネージャー登録済み
- Google タグマネージャーで Google アナリティクス設定済み

手順としては以下のようになります。

- プラグインのインストール
- プラグイン設定
- Netlify に環境変数追加
- Google タグマネージャーで公開前の確認
- Google タグマネージャーで公開

## プラグインのインストール

まずは、必要となる`gatsby-plugin-google-tagmanager`というプラグインをインストールしていきます。

[gatsby-plugin-google-tagmanager](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-tagmanager/)

以下のコマンドでインストールします。

```shell
$ yarn add gatsby-plugin-google-tagmanager
```

または、以下のコマンドでインストールします。

```shell
$ npm install -S gatsby-plugin-google-tagmanager
```

## プラグインの設定

インストールが終わったら、プラグインの設定をしていきます。

`gatsby-config.js`に`gatsby-plugin-google-tagmanager`の設定を追加します。

`options`の id の部分には、Google タグマネージャーの ID（GTM から始まる ID）を記載します。

自分の場合は、Netlify に設定した環境変数を使用するために以下のような設定にしました。

```javascript:gatsby-config.js
{
  resolve: `gatsby-plugin-google-tagmanager`,
    options: {
      id: process.env.SITE_GTM_ID,
        defaultDataLayer: { platform: "gatsby" },
    },
}
```

環境変数の設定方法に関しては、以下の記事を参考にしてみてください。

[GatsbyJS + Netlify で環境変数を設定する方法](https://nochi-log.netlify.app/blog/post/gatsbyjs-env/)

## Netlify に環境変数追加

次に Neitlify に Google タグマネージャーの ID（GTM から始まる ID）を登録していきます。

Netlify の`Build & deploy`の項目に`Environment variables`という環境変数を追加できる部分があるので、Gatsby で設定した環境変数`SITE_GTM_ID`を追加します。

![Netlify環境変数設定画面](//images.ctfassets.net/fyfghbp5soh0/2IuFMJZjclV4RnBpPXtIBI/580268e482d32ef29d76f3942e550982/netlify-env.jpg)

## Google タグマネージャーで公開前の確認

次に Google タグマネージャーでタグがサイトに設定されているかの確認をしていきます。

Google タグマネージャーにあるプレビューボタンを押し、タグを設定したサイトを確認します。

![Googleタグマネージャー スクリーンショット1](//images.ctfassets.net/fyfghbp5soh0/5LBKetjsf6SERBhH4jvG7c/8be30fb4dc998c6fe80d300a8ad2cb0c/gtm-1.jpg)

プレビューボタンを押すと、以下のようにオレンジ色になりプレビュー中となります。

![Googleタグマネージャー スクリーンショット2](//images.ctfassets.net/fyfghbp5soh0/77qFLWl1ij4pHYwlKzSlwL/40bc426615e6534ab4a2cad8fcf6148a/gtm-2.jpg)

タグを設定したサイトを確認すると、ページ下部に以下のように Google タグマネージャーの画面が表示されているかと思います。

![Googleタグマネージャー スクリーンショット3](//images.ctfassets.net/fyfghbp5soh0/2xDlpQYootlZsegkiHxO1g/844ff54ff4029012a902ce4af534dd65/gtm-3.jpg)

`Tags Fired`をクリックすると、Google タグマネージャーで設定した Google アナリティクスが確認できると思います。

![Googleタグマネージャー スクリーンショット4](//images.ctfassets.net/fyfghbp5soh0/39UqKrjLQKt2Dh3zdull4G/47e2966c17b209a0b033279309cab84d/gtm-4.jpg)

以上で公開前の確認は終わりです！

## Google タグマネージャーで公開

公開前の確認ができたら、Google タグマネージャーを公開していきます。

Google タグマネージャー右上の**公開**ボタンを押し、公開します。

![Googleタグマネージャー スクリーンショット5](//images.ctfassets.net/fyfghbp5soh0/4VJCDVb6PVAHC14iWePWod/397ce433de2ecdeb31dc7dc90dc8e764/gtm-5.jpg)

以上で作業が完了しました！

サイトに Google アナリティクスが設定されているか、Google アナリティクスの画面で確認してみてください。

## おわりに

今回は GatsbyJS で作ったサイトに Google タグマネージャーを導入してみました。

今までは Google アナリティクスのプラグインを使用していたのですが、Google アナリティクス以外のタグを追加する場合などに便利そうです！

簡単に導入できるので、ぜひ追加してみてください。
