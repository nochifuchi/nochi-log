---
title: "Vuetify ブレークポイントサービス使い方"
excerpt: "Vuetify ブレークポイントサービス使い方"
coverImage: "https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg/1f4cf.svg"
date: "2021/11/02"
ogImage:
  url: "https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg/1f4cf.svg"
---

Vuetify にはブレークポイントサービスというものがあり、ブレークポイントに応じて表示の出し分けや、プロパティの値を変更することができます。

そのサービスでよく使用したものを紹介します。

## \$vuetify.breakpoint.name

\$vuetify.breakpoint の `name`  プロパティは、現在アクティブなブレークポイントの名前（xs、sm、md、lg、xl）を受け取ることができます。

```jsx
name: string;
```

### 使い方

ブレークポイントによってプロパティの値を変更

```jsx
<template>
  <v-card :height="height">
    ...
  </v-card>
</template>

<script>
  export default {
    computed: {
      height () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 220
          case 'sm': return 400
          case 'md': return 500
          case 'lg': return 600
          case 'xl': return 800
      },
    },
  }
</script>
```

## \$vuetify.breakpoint.ブレークポイント名（xs、sm、md、lg、xl）

ビューポートに応じて、各ブレークポイントがアクティブな状態かを判定します。

```jsx
xs: boolean;
sm: boolean;
md: boolean;
lg: boolean;
xl: boolean;
```

### 使い方

ブレークポイントが`lg`だったら要素を表示、それ以外は非表示

```jsx
<h2 v-show="$vuetify.breakpoint.lg">Title</h2>
```

ブレークポイントが`xs`だったら height を 100 に、それ以外は height を 200 に設定

```jsx
<v-card :height="$vuetify.breakpoint.xs ? 100 : 200">
	Title
</v-card>
```

## \$vuetify.breakpoint.mobile

現在のビューポートが mobile-breakpoint オプション（md 以下）よりも大きいか小さいかに応じて、true または false が返ります。

### 使い方

モバイル時に要素を表示

```html
<h2 v-show="$vuetify.breakpoint.mobile">
  mobile
</h2>
```

画面サイズに応じてプロパティの値を変更

```html
<v-carousel
  :hide-delimiters="$vuetify.breakpoint.mobile ? true : false"
></v-carousel>
```

## \$vuetify.breakpoint.ブレークポイント名 AndDown

現在のビューポートが指定のブレークポイント以下であれば`true` それ以外は`false` が返ります。

```jsx
smAndDown: boolean;
mdAndDown: boolean;
lgAndDown: boolean;
```

### 使い方

ブレークポイントが md 以下の時に要素を表示

```jsx
<h2 v-show="$vuetify.breakpoint.mdAndDown">Title</h2>
```

## \$vuetify.breakpoint.ブレークポイント名 AndUp

現在のビューポートが指定のブレークポイント以上であれば`true` それ以外は`false` が返ります。

```jsx
smAndUp: boolean;
mdAndUp: boolean;
lgAndUp: boolean;
```

### 使い方

ブレークポイントが md 以上の時に要素を表示

```jsx
<h2 v-show="$vuetify.breakpoint.mdAndDown">Title</h2>
```

## 参考

[Display Breakpoints](https://vuetifyjs.com/ja/features/breakpoints/#section-30d630ec30fc30af30dd30a430f330c830b530fc30d330b9)
