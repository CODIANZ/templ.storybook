<template>
  <div>
    <p>sample</p>
    <p>value: {{ value }}</p>
    <button @click="handleClick">ボタン</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

interface Props {
  value: string;
}

export default defineComponent<Props>({
  name: "SampleComponent",
  props: {
    value: {
      type: String
    }
  },
  setup: (props, ctx) => {
    return {
      handleClick() {
        ctx.emit("sampleevent", props.value);
      }
    };
  }
})
</script>