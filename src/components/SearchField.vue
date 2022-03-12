<template>
  <div class="py-10">
    <div class="w-full flex justify-center md:px-24">
      <input
        class="w-full px-4 py-2 rounded-full border border-gray-700"
        type="text"
        placeholder="Type the city"
        v-model="country"
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
import Axios from "axios";
export default {
  data() {
    return {
      result: [],
      country: null,
      btn: "Display Weather",
      myApi: "64bb5f6f2a82ee784b144d397d552aac",
      limit: 5,
      emptyMessage: "Please key in the city",
    };
  },
  methods: {
    searchBtn() {
      if (!this.country) {
        this.$alert(this.emptyMessage.toUpperCase());
      } else {
        this.$router.push({
          name: "Search Result",
          query: {
            country: this.country,
          },
        });
        // reference URL: api.openweathermap.org/data/2.5/weather?q=London,uk&callback=test&appid={API key}
        Axios.get(
          "http://api.openweathermap.org/data/2.5/weather?q=" +
            this.country +
            "&limit=" +
            this.limit +
            "&appid=" +
            this.myApi
        )
          .then((res) => {})
          .catch((error) => {
            console.log("error", error.response.data);
            if (error.response.data.cod == 404) {
              this.$alert(error.response.data.message.toUpperCase());
            }
          });
      }
    },
  },
};
</script>

