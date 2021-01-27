/* composition-api を使用する場合、ここでuse()する */
import Vue from "vue";
import VueCompositionApi from '@vue/composition-api'
Vue.use(VueCompositionApi)

import { storiesOf } from "@storybook/vue";
import { action } from '@storybook/addon-actions'

/* パラメータのtypeによって適宜importを追加する */
import { text } from '@storybook/addon-knobs';

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