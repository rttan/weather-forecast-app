<template>
  <div
    class="
      flex
      py-2
      text-center
      md:text-left md:text-md
      font-bold
      border-b border-gray-700
    "
  >
    <!-- dynamic title  -->
    <div class="text-left w-1/2 text-2xl">
      {{ mainTitle }}
    </div>

    <!-- logout | shown when not login -->
    <div class="justify-end flex w-1/2">
      <button
        v-if="$route.name != 'Login'"
        @click="logout"
        class="hover:bg-gray-300 focus:bg-gray-400 rounded-md px-4"
      >
        Log out
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mainTitle: "Weather Forecast",
    };
  },
  methods: {
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
  },
};
</script>