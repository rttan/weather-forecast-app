<template>
  <div class="md:px-10">
    <div
      v-html="title"
      class="text- text-3xl font-thin text-center py-10"
    ></div>
    <div class="flex border-2 border-gray-500">
      <div class="pl-2 py-2 font-extrabold flex-1 border-r border-gray-500">
        Date (mm/dd/yyyy)
      </div>
      <div class="pl-2 py-2 font-extrabold flex-1 border-r border-gray-500">
        Temp (F)
      </div>
      <div
        class="
          pl-2
          py-2
          font-extrabold
          hidden
          md:block
          flex-1
          border-r border-gray-500
        "
      >
        Description
      </div>
      <div
        class="
          pl-2
          py-2
          font-extrabold
          hidden
          md:block
          flex-1
          border-r border-gray-500
        "
      >
        Main
      </div>
      <div
        class="
          pl-2
          py-2
          font-extrabold
          hidden
          md:block
          flex-1
          border-r border-gray-500
        "
      >
        Pressure
      </div>
      <div
        class="
          pl-2
          font-extrabold
          py-2
          hidden
          md:block
          flex-1
          border-r border-gray-500
        "
      >
        Humidity
      </div>
    </div>
    <!-- data content  -->
    <!-- component can be found in components/TableCell.vue  -->
    <div class="flex border-2 border-gray-500">
      <TableCell :text="formatDate(dt)"></TableCell>
      <TableCell :text="main"></TableCell>
      <TableCell :hideMobile="true" :text="temp"></TableCell>
      <TableCell :hideMobile="true" :text="description"></TableCell>
      <TableCell :hideMobile="true" :text="pressure"></TableCell>
      <TableCell :hideMobile="true" :text="humidity"></TableCell>
    </div>
    <div class="flex justify-end py-10">
      <button @click="back" class="bg-blue-500 hover:bg-blue-700 focus:bg-blue-800 rounded-md px-4 py-2 text-white" >BACK</button>
    </div>
  </div>
</template>

<script>
import TableCell from "@/components/TableCell";
import Axios from "axios";
import moment from "moment";
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
    "$route.query.city": {
      handler(city) {
        if (city) {
          this.getWeatherForecast(city).then((res) => {
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
    formatDate(d){
      return moment.unix(d).format("L")
    }, 
    back(){
      this.$router.push({name:"Search"})
    },
    getWeatherForecast(city) {
      return Axios.get(
        "http://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&limit=" +
          this.limit +
          "&appid=" +
          this.myApi
      ).catch((error) => {
        console.log("error", error.response.data);
        if (error.response.data.cod == 404) {
          this.$alert(error.response.data.message.toUpperCase());
          this.$router.push({ name: "Search" });
        }
      });
    },
  },
};
</script>