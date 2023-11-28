---
title: "Adobe Font サイトへの追加と設定方法"
excerpt: "Adobe Font サイトへの追加と設定方法"
coverImage: "https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg/1f520.svg"
date: "2020/10/18"
ogImage:
  url: "https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg/1f520.svg"
---

## Adobe Font とは

[Adobe Fonts](https://fonts.adobe.com/?locale=ja-JP)は Adobe が提供するフォントライブラリサービスです。

Adobe CC 会員なら追加料金なしで無料で利用することができます！
Adobe の Photoshop や Illustrator で使えるのはもちろんですが、Google Fonts のようにサイトに読み込んで Web フォントして使用することもできます。

今回はその Adobe Font のサイトへの追加方法についてご紹介します。

## Web サイトに追加

[Adobe Fonts](https://fonts.adobe.com/)

上記のサイトから使いたいフォントを探し、以下のコードのアイコンをクリックし、
自分のプロジェクトに追加していきます。

![adobe font スクショ01](/assets/blog/abode-font/screenshot-1.png)
![adobe font スクショ02](/assets/blog/abode-font/screenshot-2.png)

プロジェクトを追加するとコードが表示させるので Script タグは HTML の`head`タグ内に追加します。
下の CSS コードは以下のように`mixin` で設定すると便利です。

フォントによっては`font-weight`で太さを調整できるものもあるので、
mixin は**引数**で font-weight を変更できるように設定しました。

```scss
// デフォルトのfont-weightを700に設定
@mixin FOT-Chiaro($weight: 700) {
  font-family: fot-chiaro-std, sans-serif;
  font-weight: $weight;
  font-style: normal;
}
```

mixin の呼び出し

```scss
h1 {
  @include FOT-Chiaro;
}

h2 {
  // font-weightを500で指定したい時
  @include FOT-Chiaro(500);
}
```

以上で設定は完了になります。
