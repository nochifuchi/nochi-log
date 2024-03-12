---
title: "Prettierの導入方法"
excerpt: "Prettierの導入方法"
coverImage: "https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg/1fa84.svg"
date: "2024/03/12"
ogImage:
  url: "https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg/1fa84.svg"
---

## はじめに

今回は Prettier の導入方法と VSCode でファイルをフォーマットするまでの流れについてご紹介します

## Prettier とは

- コードのフォーマットを自動整形するツール
- 手動でコードを整形する手間を省き、一貫したスタイルでコードを書くことができる
- プロジェクト単位でコードフォーマットを統一できる

## prettier のインストール

pnpm の場合

```bash
pnpm add -D prettier
```

yarn の場合

```bash
yarn add -D prettier
```

## `.prettierrc.json`（設定ファイル）の作成

```bash
touch .prettierrc.json
```

## `.prettierrc.json`に設定追加

今回私は以下のような設定にしました

```json
{
  "tabWidth": 2,
  "printWidth": 100,
  "semi": true,
  "singleQuote": true,
  "overrides": [
    {
      "files": ["*.scss"],
      "options": {
        "tabWidth": 4
      }
    }
  ]
}
```

Prettier のオプションについては以下のサイトを参考に設定してみてください
[Options · Prettier](https://prettier.io/docs/en/options.html)

## VSCode でファイル保存時に Prettier を実行する設定を追加

まず VSCode の拡張機能で Prettier を追加します

[](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

拡張機能追加後に`.vscode/settings.json`を作成し、以下を追加します

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

これで VSCode のファイル保存時に Prettier でファイルをフォーマットすることが出来るようになります

参考記事
[VSCode でファイル保存時に Prettier を実行する方法](https://zenn.dev/cordelia/articles/c5a8a68444e7d8)
