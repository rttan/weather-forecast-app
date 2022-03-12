<template>
  <div>
    <div class="py-10 flex justify-center text-center text-xl md:text-3xl">
      <div class="md:px-24 w-full font-thin">
        {{ loginTitle }}
        <div class="flex justify-center py-10">
          <button
            @click="login"
            class="
              hover:bg-blue-500
              focus:border focus:border-gray-700
              focus:bg-blue-900
              bg-blue-400
              px-4
              py-2
              text-white
              rounded-full
              w-full
              md:w-1/2
            "
          >
            {{ btnLoginTitle }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      btnLoginTitle:"LOGIN",
      loginTitle:
        "Welcome to the weather forecast web application. Please login with your Github user to use the application and view the weather in your city",
    };  
  },
  watch: {
    "$auth.user": {
      handler(u) {
        if(u){
          this.$router.replace({name:"Search"})
        }
      },
      immediate: true,
    },
  },
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
  },
};
</script>