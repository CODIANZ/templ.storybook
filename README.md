# Vue2 + composition-api + TypeScript + Storybook のテンプレート

## 既存の Vue プロジェクトに追加する流れ

### 1. Storybook の追加
下記のコマンドを実行する。
```sh
$ npx -p @storybook/cli sb init 
```

### 2. Storybook の addon を追加
```sh
$ npm i @storybook/addon-knobs --save-dev
```
他にも、いろんな addon があるけど、knobsがあればコンポーネントへの入力パラメータの設定が楽にできる。

### 3. Storybookの設定

#### 3-1 .storybook/main.js を編集する。
```js
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    /* 削除 "@storybook/addon-essentials", */
    /* essentials は option 指定して controls を非表示とする */
    {
      name: "@storybook/addon-essentials",
      options: {
        controls: false
      }
    },
    /* knobs を追加 */
    "@storybook/addon-knobs"
  ]
}
```

#### 3-2 .storybook/preview.js を編集する。
```js
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

/* composition-api を使用する場合、ここでuse()する */
import Vue from "vue";
import VueCompositionApi from "@vue/composition-api";
Vue.use(VueCompositionApi);
```


## Storybook の実行

```sh
$ npm run storybook
```

## stories ファイルの作成

Storybook でコンポーネント一覧に表示させるために、storiesフォルダに ```(任意名称).stories.ts``` を作成する。

```ts
import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";

/* パラメータのtypeによって適宜importを追加する */
import { text } from "@storybook/addon-knobs";

/* 表示したいコンポーネントを importする */
import SampleComponent from "../components/SampleComponent.vue";

/* ここから定義開始 */
storiesOf("サンプルコンポーネント", module)
.add("default", () => ({
  /* 'template' で使用するコンポーネントを指定 */
  components: { SampleComponent },
  /* コンポーネントの入力プロパティを定義する */
  props: {
    propval: {
      default: text("文字列値", "hello")
    }
  },
  /* コンポーネントから発行されるイベントを受け取る関数を定義 */
  methods: {
    gotevent: action("got the event")
  },
  /* レンダリングする templateを記述 */
  template: `<SampleComponent :value="propval" @sampleevent="gotevent" />`
}));
```