<template>
  <div>
      <!-- main title  -->
    <div v-html="title" class="text- text-3xl text-center py-10">
    </div>
    <!-- search result in table view  -->
    <!-- header titles using v-for for scalability in future -->
    <div class="flex border-2 border-gray-500 md:mx-10">
        <div v-for="(item,i) in headers" :key="i" class="md:bg-gray-100 w-full border border-gray-700 md:px-10 px-4">
           {{ item.title }}
        </div>
    </div>
  </div>
</template>

<script>
export default {
   data(){
       return{
            title:"Search Result",
            headers:[
                {
                    title:"Date (mm/dd/yyyy)"
                },
                {
                    title:"Description"
                },
                {
                    title:"Main"
                },
                {
                    title:"Pressure"
                },
                {
                    title:"Humidity"
                }
            ]
       }
   },
}
</script>

<style>

</style>