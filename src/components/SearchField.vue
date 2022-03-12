<template>
   <div class="py-10">
    <div class="w-full flex justify-center md:px-24">
        <input class="w-full px-4 py-2 rounded-full border border-gray-700" type="text" placeholder="Type the city" v-model="searchCity">
    </div>
    <div class="flex justify-center py-4">
        <button v-text="btn" class="bg-blue-500 hover:bg-blue-700 focus:bg-blue-500 py-2 px-4 text-white rounded-md" @click="searchBtn">
        </button>
    </div>
   </div>
</template>

<script>
export default {
    data(){
        return{
            searchCity:null,
            btn: "Display Weather"
        }
    },
    methods:{
        searchBtn(){
            if(!this.searchCity){
                alert("Please key in the city")
            }else{
                this.$router.push({name:"Search Result"})
            }
        }
    }
}
</script>

