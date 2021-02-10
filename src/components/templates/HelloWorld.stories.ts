import { storiesOf } from "@storybook/vue";

/* コンポーネントにバインドするプロパティのtypeによって適宜importを追加する（現在textのみ） */
import { text } from "@storybook/addon-knobs";

/* 表示したいコンポーネントを importする */
import HelloWorld from "./HelloWorld.vue";

/* ここから定義開始 */
storiesOf("templates/HelloWorld", module).add("default", () => ({
  /* 'template' で使用するコンポーネントを指定 */
  components: { HelloWorld },
  /* コンポーネントの入力プロパティを定義する */
  props: {
    message: {
      default: text("メッセージ文字列", "こんにちは世界！"),
    },
  },
  /* コンポーネントから発行されるイベントを受け取る関数を定義 */
  methods: {},
  /* レンダリングする templateを記述 */
  template: `<HelloWorld :msg="message" />`,
}));
