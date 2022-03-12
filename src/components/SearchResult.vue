<template>
  <div>
    <div v-html="title" class="text- text-3xl text-center py-10"></div>
    <div class="flex border-2 border-gray-500 md:mx-10">
      <div></div>
    </div>
    <!-- data content  -->
    <div class="flex border-2 border-gray-500 md:mx-10">
      <TableCell :text="result.dt"></TableCell>
      <TableCell :text="result.weather[0].main"></TableCell>
      <TableCell :text="result.main.temp"></TableCell>
      <TableCell :text="result.weather[0].description"></TableCell>
      <TableCell :text="result.main.pressure"></TableCell>
      <TableCell :text="result.main.humidity"></TableCell>
    </div>
  </div>
</template>

<script>
import TableCell from "@/components/TableCell";
export default {
  data() {
    return {
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
    "$route.params": {
      handler(e) {
        if (e.result) {
          this.result = e.result;
          console.log("watch e", e.result.main.temp);
          this.temp = e.result.main.temp;
          this.desc = e.result.weather.description;
          this.main = e.result.weather.main;
          this.humidity = e.result.main.humidity;
          this.pressure = e.result.main.pressure;
        }
      },
      immediate: true,
    },
  },
};
</script>