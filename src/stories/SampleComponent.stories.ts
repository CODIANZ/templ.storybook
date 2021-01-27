import Vue from "vue";
import VueCompositionApi from '@vue/composition-api'
Vue.use(VueCompositionApi)

import { storiesOf } from "@storybook/vue";
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions'

import SampleComponent from "../components/SampleComponent.vue";

storiesOf("サンプルコンポーネント", module)
.add("default", () => ({
  components: { SampleComponent },
  props: {
    value: {
      default: text("文字列値", "hello")
    }
  },
  methods: {
    gotevent: action("got the event")
  },
  template: `<SampleComponent :value="value" @sampleevent="gotevent" />`
}));
