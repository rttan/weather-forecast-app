<template>
  <div class="md:px-10">
    <div v-html="title" class="text- text-3xl text-center py-10"></div>
    <div class="flex border-2 border-gray-500">
      <div class="flex-1 border-r border-gray-500">Date (mm/dd/yyyy)</div>
      <div class="flex-1 border-r border-gray-500">Temp (F)</div>
      <div class="hidden md:block flex-1 border-r border-gray-500">
        Description
      </div>
      <div class="hidden md:block flex-1 border-r border-gray-500">Main</div>
      <div class="hidden md:block flex-1 border-r border-gray-500">
        Pressure
      </div>
      <div class="hidden md:block flex-1 border-r border-gray-500">
        Humidity
      </div>
    </div>
    <!-- data content  -->
    <div class="flex border-2 border-gray-500">
      <TableCell :text="dt"></TableCell>
      <TableCell :text="main"></TableCell>
      <TableCell :hideMobile="true" :text="temp"></TableCell>
      <TableCell :hideMobile="true" :text="description"></TableCell>
      <TableCell :hideMobile="true" :text="pressure"></TableCell>
      <TableCell :hideMobile="true" :text="humidity"></TableCell>
    </div>
  </div>
</template>

<script>
import TableCell from "@/components/TableCell";
import Axios from "axios";
export default {
  data() {
    return {
      myApi: "64bb5f6f2a82ee784b144d397d552aac",
      limit: 5,
      dt: null,
      temp: null,
      description: null,
      humidity: null,
      pressure: null,
      main: null,
      title: "Search Result",
      headers: [
        {
          title: "Date (mm/dd/yyyy)",
          display: "all",
        },
        {
          title: "Temp (F)",
          display: "all",
        },
        {
          title: "Description",
          display: "mobile",
        },
        {
          title: "Main",
          display: "mobile",
        },
        {
          title: "Pressure",
          display: "mobile",
        },
        {
          title: "Humidity",
          display: "mobile",
        },
      ],
    };
  },
  components: {
    TableCell,
  },
  watch: {
    "$route.query.country": {
      handler(country) {
        if (country) {
          this.getWeatherForecast(country).then((res) => {
            console.log("watch e", res.data);
            this.temp = res.data.main.temp;
            this.description = res.data.weather[0].description;
            this.main = res.data.weather[0].main;
            this.humidity = res.data.main.humidity;
            this.pressure = res.data.main.pressure;
            this.dt = res.data.dt;
          });
        }
      },
      immediate: true,
    },
  },

  methods: {
    getWeatherForecast(country) {
      return Axios.get(
        "http://api.openweathermap.org/data/2.5/weather?q=" +
          country +
          "&limit=" +
          this.limit +
          "&appid=" +
          this.myApi
      ).catch((error) => {
        console.log("error", error.response.data);
        if (error.response.data.cod == 404) {
          this.$alert(error.response.data.message.toUpperCase());
        }
      });
    },
  },
};
</script>