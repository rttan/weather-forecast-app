<template>
    <div>
        <div class="py-10 flex justify-center text-xl">
           <div class="md:px-24 w-full">
                {{ loginTitle }}
                <div class="flex justify-center py-10">
                    <button  @click="routeTo" class="hover:bg-blue-500 focus:border focus:border-gray-700 bg-blue-400 px-4 py-2 text-white rounded-full w-full md:w-1/2">
                        LOGIN
                    </button>
                </div>
           </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            loginTitle:"Welcome to the weather forecast web application. Please login with your Github user to use the application and view the weather in your city"
        }
    },
    methods:{
        routeTo(){
            this.$router.push("/search")
        }
    }
}
</script>