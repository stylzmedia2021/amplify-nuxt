<template>
  <div>
    <!-- Breadcumb section start -->
    <breadcumb
        :name="`News`"
      />
    <!-- breadcumb section end -->

    <!-- news section start -->
  <section class="primary-bg py-20">
    <div class="container">
      <!-- section Heading -->
      <div class=" text-center">
        <h2 class=" primary-font-color text-4xl font-semibold mb-10">Political News</h2>
      </div>
      <div class=" lg:grid lg:grid-cols-3 lg:gap-5 space-y-8 lg:space-y-0 font-montserrat">
        <!-- single news -->
        <div class="" v-for="(singleNews, index) in news" :key="index">

          <div class="overflow-hidden" v-if="singleNews.type == 1">
            <img style="height: 250px; min-width: 100%;" class="max-w-full object-cover transform duration-1000 hover:scale-110" :src="singleNews.image" alt="">
          </div>

          <div class="overflow-hidden" v-if="singleNews.type == 2">
            <video style="height: 250px;" width="320" height="300" controls class="w-full object-cover transform duration-1000">
              <source :src="singleNews.video" type="video/mp4">
              <source :src="singleNews.video" type="video/ogg">
            Your browser does not support the video tag.
            </video>
          </div>

          <div class="overflow-hidden" v-if="singleNews.type == 3">
            <!-- <template>
              <LazyYoutube style="height: 250px;" :src="singleNews.video_url" />
            </template> -->

              <template v-if="galleryItem.type == 3 && isYoutubeVideo(singleNews.video_url) != 1">

                <LazyYoutube style="height: 250px;" :src="singleNews.video_url" />

              </template>

              <template v-if="singleNews.type == 3 && isYoutubeVideo(singleNews.video_url) == -1">

                <LazyVimeo style="height: 250px;" :src="singleNews.video_url" />

              </template>

          </div>

          <div class="overflow-hidden" v-if="singleNews.type == 4">
            <div style="height: 250px;" v-html="singleNews.embedded_code"></div>
          </div>

          <div class="bg-white px-5 py-5">
            <div>
              <span class="text-xs mb-5 color-sub-title">{{ singleNews.tags.map(item => item.name).join(', ') }}</span>
              <h2 style="height: 50px;" class="text-black text-lg font-bold mb-5">{{ singleNews.title.substring(0, 50) }}</h2>
              <p style="height: 70px;" class="color-sub-title text-base font-normal mb-5">{{ singleNews.short_description.substring(0, 120) }}</p>
              <nuxt-link class="read-more text-black font-semibold text-base" :to="`/single-news/${singleNews.id }`">
                Read More
                <font-awesome-icon :icon="['fas', 'arrow-right']"/>
              </nuxt-link>
            </div>
          </div>
        </div>



      </div>

      <infinite-loading @distance="1" @infinite="infiniteHandler">
                <div slot="spinner"><p style="text-align: center; padding: 20px;">Loading.....</p></div>
                <div slot="no-more"><p style="text-align: center; padding: 20px;">No more mews available</p></div>
              </infinite-loading>

    </div>
  </section>
  <!-- news section end -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      news: []
    }
  },

  mounted() {
    //await this.getNews();
    this.infiniteHandler();
  },

  methods: {
    isYoutubeVideo(url) {
      return url.search("youtube");
    },

    onPageChange() {
        this.getNews()
    },
    async getNews(){
      await this.$axios.get(`/get/news?page=${this.current}`)
      .then((response) => {
        this.news = response.data.data;
      }).catch((error) => {
        console.log(error);
      }).finally(() => {
        //
      })
    },

    infiniteHandler($state) {
        this.$axios.get(`get/news?page=${this.page}`)
        .then(({ data }) => {
              console.log(data.data);
        if (data.data.length) {
          this.page += 1;
          this.news.push(...data.data);
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
