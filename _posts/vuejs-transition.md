---
title: "Vue.js transitionの基本的な使い方"
excerpt: "Vue.js transitionの基本的な使い方"
coverImage: "https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg/1f4a8.svg"
date: "2022/01/13"
ogImage:
  url: "https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg/1f4a8.svg"
---

Vue.js にはテンプレート要素に対してアニメーションの効果を与える transition 機能があり、JS と CSS を使用してクラスを切り替えてアニメーションをしなくても手軽にアニメーションを実装することができます。

今回はその Vue.js の transition の基本的な使い方についてご紹介します。

# h1 テスト

## transition を追加できる要素

- 条件付きの描画 (`v-if` を使用)
- 条件付きの表示 (`v-show` を利用)
- 動的コンポーネント
- コンポーネントルートノード (Component root nodes)

## 使い方

### transition タグで囲む

transition を適用させたい要素を`transition`タグで囲みます。

```jsx
<transition>
  <p v-if="show">トランジション</p>
</transition>
```

### スタイルの追加

transition ラッパーコンポーネントでは以下のクラスが適用されるので、このクラスに**Enter の開始時終了時**、**Leave の開始時終了時**の状態をスタイルとして定義することでアニメーションをつけていきます。

### Enter 関係

消えていたものが画面に表示される時のトランジションで以下のクラスが用意されています。

| クラス         | 状態                     | 説明                                                                                                                                |
| -------------- | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| v-enter        | enter の開始状態         | 要素が挿入される前に適用され、要素が挿入された 1 フレーム後に削除されます。                                                         |
| v-enter-active | enter のアクティブ状態。 | トランジションに入るフェーズ中に適用されます。要素が挿入される前に追加され、トランジション/アニメーションが終了すると削除されます。 |
| v-enter-to     | enter の終了状態。       | 要素が挿入された 1 フレーム後に追加され (同時に v-enter が削除されます)、トランジション/アニメーションが終了すると削除されます。    |

### Leave 関係

Enter とは逆で画面にあるものが消える時のトランジションで、以下のクラスが用意されています。

| クラス         | 状態                     | 説明                                                                                                                                                            |
| -------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| v-leave        | leave の開始状態。       | トランジションの終了がトリガされるとき、直ちに追加され、1 フレーム後に削除されます。                                                                            |
| v-leave-active | leave のアクティブ状態。 | トランジションが終わるフェーズ中に適用されます。leave トランジションがトリガされるとき、直ちに追加され、トランジション/アニメーションが終了すると削除されます。 |
| v-leave-to     | leave の終了状態。       | leave トランジションがトリガされた 1 フレーム後に追加され (同時に v-leave が削除されます)、トランジション/アニメーションが終了すると削除されます。              |

各クラスの状態を図で表すと以下ようになります。

![vue transition](/assets/blog/vuejs-transition/screenshot-1.png)

[Enter/Leave とトランジション一覧 — Vue.js](https://jp.vuejs.org/v2/guide/transitions.html) より引用

### アニメーションの例（フェードインフェードアウト）

```scss
// アクティブ時の設定（アニメーション中）
// 要素が表示される時のトランジション
.v-enter-active {
  transition: opacity 0.5s;
}
// 要素が消える時のトランジション
.v-leave-active {
  transition: opacity 0.5s;
}

// Enterの設定（要素が表示される時）
.v-enter {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}

// Leaveの設定（要素が消える時）
.v-leave {
  opacity: 1;
}
.v-leave-to {
  opacity: 0;
}
```

## トランジションを複数箇所で使う

同じトランジションを複数箇所で使用したい場合は以下のように transition タグの`name属性`を設定することで、トランジションを使い回すことが出来ます。

name 属性を設定すると`v-`だったクラスが`name属性-`になります。
以下の例の場合`v-`が`fade-`になります。

```jsx
<transition name="fade">
  <p v-if="show">トランジション</p>
</transition>
```

```scss
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}

.fade-leave {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
```

## 初期描画時のトランジション

初期描画時にトランジションを適用させたい場合は以下のように appear 属性を transition タグに追加します。

```jsx
<transition appear>
  <p v-if="show">トランジション</p>
</transition>
```

## 参考

[Enter/Leave とトランジション一覧 - Vue.js](https://jp.vuejs.org/v2/guide/transitions.html)
