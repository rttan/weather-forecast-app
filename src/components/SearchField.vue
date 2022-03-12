<template>
  <div class="py-10">
    <div class="py-10">
      <div class="md:text-3xl text-center text-3xl font-bold">
        {{ $auth.user.name }}
      </div>
      <div class="text-center font-thin ">https://github.com/{{ $auth.user.nickname }}</div>
    </div>
    <div class="w-full flex justify-center md:px-24">
      <input
        class="w-full px-4 py-2 rounded-full border border-gray-700"
        type="text"
        placeholder="City"
        v-model="city"
      />
    </div>
    <div class="flex justify-center py-4">
      <button
        v-text="btn"
        class="
          bg-blue-500
          hover:bg-blue-700
          focus:bg-blue-500
          py-2
          px-4
          text-white
          rounded-md
        "
        @click="searchBtn"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: [],
      city: null,
      btn: "Display Weather",

      emptyMessage: "Please key in the city",
    };
  },
  methods: {
    searchBtn() {
      if (!this.city) {
        this.$alert(this.emptyMessage.toUpperCase());
      } else {
        this.$router.push({
          name: "Search Result",
          query: {
            city: this.city,
          },
        });
        // reference URL: api.openweathermap.org/data/2.5/weather?q=London,uk&callback=test&appid={API key}
      }
    },
  },
};
</script>

