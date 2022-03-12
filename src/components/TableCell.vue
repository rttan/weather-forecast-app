<template>
  <div :class="{hidden:hideMobile?true:false}" class="md:block flex-1 md:bg-gray-100 border border-gray-700">
    {{text}}
  </div>
</template>

<script>
export default {
  props: ["text", "hideMobile"],
};
</script>

