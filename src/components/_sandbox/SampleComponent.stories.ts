import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";

/* コンポーネントにバインドするプロパティのtypeによって適宜importを追加する（現在textのみ） */
import { text } from "@storybook/addon-knobs";

/* 表示したいコンポーネントを importする */
import SampleComponent from "./SampleComponent.vue";

/* ここから定義開始 */
storiesOf("sandbox/サンプルコンポーネント", module).add("default", () => ({
  /* 'template' で使用するコンポーネントを指定 */
  components: { SampleComponent },
  /* コンポーネントの入力プロパティを定義する */
  props: {
    propval: {
      default: text("文字列値", "hello"),
    },
  },
  /* コンポーネントから発行されるイベントを受け取る関数を定義 */
  methods: {
    gotevent: action("got the event"),
  },
  /* レンダリングする templateを記述 */
  template: `<SampleComponent :value="propval" @sampleevent="gotevent" />`,
}));
