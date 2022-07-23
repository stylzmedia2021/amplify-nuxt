<template>
  <div v-if="sliders && sliders.length > 0">
    <vue-slick-carousel class="slider-area" v-bind="settings" :arrows="false" :dots="true">
        <div class="overflow-hidden" v-for="slider in sliders" :key="slider.id">
          <img class="w-full object-cover" :src="slider.image" alt="">
        </div>
    </vue-slick-carousel>
  </div>
</template>


<script>
export default {
  name: 'Carousel',
  data(){
    return{
      sliders: [],
      settings: {
          autoplay: true,
          autoplaySpeed: 5000,
        }
    }
  },

  async mounted() {
    await this.getSliders();
  },

  methods: {
    async getSliders(){
      await this.$axios.get(`/get/sliders`)
      .then((response) => {
        this.sliders = response.data.data;
      }).catch((error) => {
        console.log(error);
      }).finally(() => {
        //
      })
    }
  }
}
</script>

