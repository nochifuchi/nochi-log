---
title: "Stylelintの導入方法"
excerpt: "Stylelintの導入方法"
coverImage: "https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg/1f454.svg"
date: "2024/05/13"
ogImage:
  url: "https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg/1f454.svg"
---

## はじめに

今回は Stylelint の導入方法と VS Code でファイルをフォーマットするまでの流れについてご紹介します

## Stylelint とは

スタイルシート用のリンターでスタイルシートのエラーの検知や自動修正、チームのコードの一貫性を高めるためのツールになります。

## Stylelint のインストール

pnpm の場合

```bash
pnpm add -D stylelint
```

yarn の場合

```bash
yarn add -D stylelint
```

## ルールの追加

Stylelint はデフォルトではルールが設定されていないので、お好みのルールを追加します
私は以下のルールを追加しました

pnpm の場合

```bash
pnpm add -D stylelint-scss stylelint-config-standard-scss stylelint-prettier stylelint-order
```

yarn の場合

```bash
yarn add -D stylelint-scss stylelint-config-standard-scss stylelint-prettier stylelint-order
```

### `stylelint-scss`

SCSS 用の設定

[npm: stylelint-scss](https://www.npmjs.com/package/stylelint-scss)

### `stylelint-config-standard-scss`

SCSS 対応のルールセット

[npm: stylelint-config-standard-scss](https://www.npmjs.com/package/stylelint-config-standard-scss)

### `stylelint-prettier`

Prettier と設定がコンフリクトしないようにするプラグイン

[npm: stylelint-prettier](https://www.npmjs.com/package/stylelint-prettier)

### `stylelint-order`

プロパティを並び替えてくれるプラグイン（プロパティの並び替えをする場合は追加）

[npm: stylelint-order](https://www.npmjs.com/package/stylelint-order)

## .stylelintrc.json の作成・設定

.stylelintrc.json の作成

```bash
touch .stylelintrc.json
```

.stylelintrc.json の設定

```jsx
{
  "extends": ["stylelint-config-standard-scss"],
  "plugins": ["stylelint-scss", "stylelint-order", "stylelint-prettier"],
  "rules": {
    "prettier/prettier": true,
    "at-rule-no-unknown": null,
    "color-no-invalid-hex": true,
    "declaration-block-no-duplicate-properties": true,
    "declaration-colon-newline-after": null,
    "declaration-block-no-redundant-longhand-properties": [
      true,
      {
        "ignoreShorthands": ["inset"]
      }
    ],
    "font-family-no-missing-generic-family-keyword": null,
    "no-descending-specificity": null,
    "selector-class-pattern": null,
    "selector-id-pattern": null,
    "value-no-vendor-prefix": [true, { "ignoreValues": ["box"] }],
    "scss/at-extend-no-missing-placeholder": null,
    "scss/at-rule-no-unknown": true,
    "scss/no-global-function-names": null,
    "scss/percent-placeholder-pattern": null,
    "order/order": ["custom-properties", "declarations"],
    /* stylelint-orderを追加した場合はお好みのカスタムオーダーを追加 */
    "order/properties-order": [

    ]
  }
}
```

## VS Code でファイル保存時に Stylelint を実行する設定を追加

VS Code に stylelint の拡張機能追加

[](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

`.vscode/settings.json` に追記（Prettier を併用しているため Prettier の設定も入っています）

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "stylelint.snippet": ["scss"],
  "stylelint.validate": ["scss"],
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": "explicit"
  }
}
```
