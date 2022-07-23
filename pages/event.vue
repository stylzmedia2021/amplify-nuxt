<template>
  <div>
    <!-- Breadcumb section start -->
    <breadcumb
        :name="`Event`"
      />
    <!-- breadcumb section end -->

    <!-- freature section start -->
    <section class=" bg-gray-100 py-20">
      <div class="container">
        <!-- full-width event -->
        <div v-if="featuredEvents && featuredEvents.length > 0" class="primary-bg p-5 md:grid md:grid-cols-2 md:gap-10">
          <div class=" overflow-hidden" v-if="featuredEvents['0'].type == 1">
            <img class=" h-full w-full object-cover transform duration-1000 hover:scale-110" :src="featuredEvents['0'].image" alt="">
          </div>
          <div class="">
              <h2 class="primary-font-color text-2xl font-bold py-5">{{ featuredEvents['0'].title }}</h2>
              <p class=" text-base text-black font-normal font-montserrat" v-html="featuredEvents['0'].short_description"></p>
              <div class="flex justify-between mt-5 font-montserrat">
                <div class="flex space-x-5">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span class="text-xs font-semibold">{{ featuredEvents['0'].date }}</span>
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
                      <span class="text-xs font-semibold">{{ featuredEvents['0'].location }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="pt-5 md:float-right font-montserrat">
                <nuxt-link class="read-more text-base font-bold inline" :to="`/single-event/${featuredEvents[0].id }`">
                  Read More
                  <font-awesome-icon :icon="['fas', 'arrow-right']"/>
                </nuxt-link>
              </div>
          </div>
        </div>
      </div>
    </section>
    <!-- freature event section end -->

    <!-- all event start -->
    <section class=" bg-gray-200 py-20">
      <div class="container">
        <!-- two column width event -->
        <div class=" md:grid md:grid-cols-2 md:gap-10 pt-8 space-y-10 md:space-y-0">
          <!-- single event -->
          <div v-for="(event, index) in events" :key="index" class="primary-bg lg:flex space-y-5 lg:space-y-0 lg:space-x-5 p-5 border border-gray-400 rounded-md">


            <div class="lg:w-2/5 w-full overflow-hidden">
              <!-- <img class=" h-full w-full object-cover transform duration-1000 hover:scale-110" :src="event.image" alt=""> -->

              <div class="overflow-hidden" v-if="event.type == 1">
                <img style="height: 164px; min-width: 100%;" class="max-w-full object-cover transform duration-1000 hover:scale-110" :src="event.image" alt="">
              </div>

              <div class="overflow-hidden" v-if="event.type == 2">
                <video style="height: 164px;" width="320" height="300" controls class="w-full object-cover transform duration-1000">
                  <source :src="event.video" type="video/mp4">
                  <source :src="event.video" type="video/ogg">
                Your browser does not support the video tag.
                </video>
              </div>

              <div class="overflow-hidden" v-if="event.type == 3">
                <!-- <template>
                  <LazyYoutube style="height: 250px;" :src="event.video_url" />
                </template> -->

                  <template v-if="galleryItem.type == 3 && isYoutubeVideo(event.video_url) != 1">

                    <LazyYoutube style="height: 164px;" :src="event.video_url" />

                  </template>

                  <template v-if="event.type == 3 && isYoutubeVideo(event.video_url) == -1">

                    <LazyVimeo style="height: 164px;" :src="event.video_url" />

                  </template>

              </div>

              <div class="overflow-hidden" v-if="event.type == 4">
                <div style="height: 164px;" v-html="event.embedded_code"></div>
              </div>

            </div>


            <!-- event content -->
            <div class="lg:w-3/5 w-full">
              <h2 class=" text-lg font-bold primary-font-color">{{ event.title }}</h2>
              <div class="flex justify-between mt-5 font-montserrat">
                <!-- date -->
                <div class="flex space-x-2">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span class=" text-xs font-normal italic">{{ event.date }}</span>
                  </div>
                </div>
                <!-- location -->
                <div class="">
                  <div class="flex space-x-2">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <span class="text-xs font-normal italic">{{ event.location }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- read-more button -->
              <div class="pt-5 md:float-right font-montserrat">
                <nuxt-link class="read-more text-sm font-bold inline" :to="`/single-event/${event.id }`">
                  Read More
                  <font-awesome-icon :icon="['fas', 'arrow-right']"/>
                </nuxt-link>
              </div>
            </div>
          </div>


        </div>

        <infinite-loading @distance="1" @infinite="infiniteHandler">
                <div slot="spinner"><p style="text-align: center; padding: 20px;">Loading.....</p></div>
                <div slot="no-more"><p style="text-align: center; padding: 20px;">No more events available</p></div>
              </infinite-loading>

      </div>
    </section>
     <!-- all event end -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      events: [],
      featuredEvents: [],
    }
  },

   mounted() {
    this.infiniteHandler();
  },

  methods: {
    isYoutubeVideo(url) {
      return url.search("youtube");
    },

    async getEvents(){
      await this.$axios.get(`/get/events?per_page=3`)
      .then((response) => {
        this.events = response.data.data.filter((event,index) => index > 0);
        this.featuredEvents = response.data.data.filter((event,index) => index == 0);
      }).catch((error) => {
        console.log(error);
      }).finally(() => {
        //
      })
    },

     infiniteHandler($state) {
         this.$axios.get(`get/events?page=${this.page}`)
        .then(({ data }) => {
              console.log(data.data);
        if (data.data.length) {
          this.page += 1;
          this.events.push(...data.data);
          $state.loaded();
        } else {
          $state.complete();
        }
      });
    },
  }
}
</script>

<style>

</style>
