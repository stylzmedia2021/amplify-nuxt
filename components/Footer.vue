<template>
  <div>
    <!-- footer section start -->
    <footer v-if="footer && footer.length > 0">
      <!-- footer top section start  -->
      <div class="footer-bg py-36 relative" :style="{ backgroundImage: 'url(' + footer[0].bg_image + ')'}">
        <div class="footer-overlay"></div>
        <div class=" md:w-1/2 md:mx-auto px-10 md:px-0">
          <div class="relative z-10">
            <div v-if="get_setting_val('general','logo')" class="flex justify-center mb-5">
              <nuxt-link to="/">
                <img class=" h-20 w-auto" :src="($config.apiResource + get_setting_val('general','logo'))" alt="">
              </nuxt-link>
            </div>
            <div class="text-center">
              <p style="color: #fff;" class=" text-base font-bold text-gray-500 md:text-white font-montserrat" v-html="footer[0].short_description"></p>
            </div>
             <div v-show="hasError" class="md:mt-10 mt-16 flex space-x-5 justify-center">
                <span style="color: red;">Invalid email address! Please enter a valid email address.</span>
            </div>
            <div class="md:mt-10 mt-16 flex space-x-5 justify-center">
              <input v-model="form.email" class=" bg-transparent border-b-2 border-white text-center md:py-3 py-2 px-3 text-white md:px-5" type="text" name="" id="" placeholder="write your email here!">
              <button type="button" @click.prevent="subscribe" class="bg-black px-1 py-1 text-sm md:px-3 md:py-3 md:text-base font-bold text-white uppercase" style="color: #fff;">Subscribe</button>
            </div>
            <div class="mt-10">
              <h2 class=" text-white text-base md:text-2xl font-normal text-center font-montserrat">{{ footer[0].subscription_title }}</h2>
              <div class="flex space-x-5 justify-center mt-5">
                <!-- facebook -->
                <a class="h-8 w-8 md:h-12 md:w-12 bg-white rounded-full flex items-center justify-center" :href="get_setting_val('social', 'facebook')">
                  <img class="h-4 md:h-5 w-auto" src="~/assets/images/facebook.png" alt="">
                </a>
                <!-- twitter -->
                <a class=" h-8 w-8 md:h-12 md:w-12 bg-white rounded-full flex items-center justify-center" :href="get_setting_val('social', 'twitter')">
                  <img class="h-4 md:h-5 w-auto" src="~/assets/images/twitter.png" alt="">
                </a>
                <!-- youtube -->
                <a class=" h-8 w-8 md:h-12 md:w-12 bg-white rounded-full flex items-center justify-center" :href="get_setting_val('social', 'youtube')">
                  <img class="h-4 md:h-5 w-auto" src="~/assets/images/youtube.png" alt="">
                </a>
                <!-- linkdin -->
                <a class=" h-8 w-8 md:h-12 md:w-12 bg-white rounded-full flex items-center justify-center" :href="get_setting_val('social', 'linkdin')">
                  <img class="h-4 md:h-5 w-auto" src="~/assets/images/linkdin.png" alt="">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- footer top section end -->

      <!-- footer bottom section start -->
      <div class=" bg-black py-3">
        <div class="container">
          <div class="md:flex font-montserrat">
            <div class="md:w-1/2 w-full">
              <p class="text-sm font-bold text-white md:text-left">© {{ new Date().getFullYear() }} {{ get_setting_val('general', 'copyright') }}</p>
            </div>
            <div class="md:w-1/2 w-full">
              <p class="text-sm font-bold text-white md:text-right mt-5 md:mt-0">website by <a href="https://stylezworld.net/">styleZworld.com</a></p>
            </div>
          </div>
        </div>
      </div>
      <!-- footer bottom section end -->
    </footer>
    <!-- footer section end -->
    <div id="fb-root"></div>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v13.0" nonce="gY39BqqB"></script>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
    data() {
      return {
        footer: [],
        form: {
          email: ''
        },
        isDisabled: true,
        hasError: false
      }
    },

    mounted() {
      this.getSections();
      this.$store.dispatch('public/settings/generalSetting/getSettings');
    },

    computed:{
    ...mapGetters('public/settings/generalSetting',['settings','get_setting_val']),
  },

  methods: {
    subscribe() {
      let check = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.form.email)

      if (check == false) {
        //this.hasError = true;
        this.$toaster.error('Please enter a valid email address.');
        return;
      }

      this.$axios.post(`/subscribe`, this.$generateFormData(this.form))
      .then((response) => {
        this.$toaster.success(response.data.message);
        this.form.email = '';
      }).catch((error) => {
        console.log(error.response.data.errors.email);
        if (error.response.status === 422) {
          // this.$toaster.error(error.response.data.errors.email[0]);

          Object.keys(error.response.data.errors).map((field) => {
            this.$toaster.error(error.response.data.errors[field][0]);
          });
        }
      }).finally(() => {
        //
      })
    },

    async getSections(){
      await this.$axios.get(`/get/home/sections`)
      .then((response) => {
        this.sections = response.data.data;
        this.footer = response.data.data.filter((section,index) => section.section_design_type_id == 9);
      }).catch((error) => {
        console.log(error);
      }).finally(() => {
        //
      })
    },
  }

}
</script>

<style>

</style>
