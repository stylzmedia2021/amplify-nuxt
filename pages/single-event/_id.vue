<template>
  <div>
    <breadcumb :link="link" :name="`${event.title}`"/>

    <section class=" bg-gray-100 py-20">
      <div class="container">
        <!-- full-width event -->
        <div class="primary-bg p-5 md:grid md:grid-cols-2 md:gap-10">
          <div class=" overflow-hidden" v-if="event.type == 1">
            <img class=" h-full w-full object-cover transform duration-1000 hover:scale-110" :src="event.image" alt="">
          </div>
          <div class="">
              <h2 class="primary-font-color text-2xl font-bold py-5">{{ event.title }}</h2>
              <p class=" text-base text-black font-normal font-montserrat" v-html="event.short_description"></p>
              <div class="flex justify-between mt-5 font-montserrat">
                <div class="flex space-x-5">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span class="text-xs font-semibold">{{ event.date }}</span>
                  </div>
                </div>
                <div class="">
                  <div class="flex space-x-5">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <span class="text-xs font-semibold">{{ event.location }}</span>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div v-html="event.description"></div>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
import Breadcumb from '../../components/Breadcumb.vue';

export default {
  components: { Breadcumb },
  name:'eventDetails',
  data() {
    return {
      event: {},
      link: {
        name: 'Event',
        url: '/event'
      }
    }
  },
  async mounted() {
    await this.init();
  },
  methods:{
      async init(){
         await this.$axios.get(`get/single-event/${this.$route.params.id}`)
         .then((response) => {
              this.event = response.data.data
          })
          .catch(() => {
            this.event = {}
          })
      },
  }
}
</script>

<style>

</style>
