<template>
  <div>
    <!-- Breadcumb section start -->
    <breadcumb :link="link" :name="`Single Media`"/>
    <!-- breadcumb section end -->

    <!-- single image section -->
    <section class="primary-bg py-20">
      <div class="container">
        <div class="">
          <!-- page content start -->
            <div v-if="galleryItems && galleryItems.length > 0" class="md:grid lg:grid-cols-3 md:grid-cols-2 md:gap-5 space-y-5 md:space-y-0">
              <!-- single gallery start -->
              <div v-for="(galleryItem, index) in galleryItems" :key="index" class="single-gallery bg-white border border-gray-100 rounded-md shadow-lg">
                <div class="">
                  <template v-if="galleryItem.type == 1">
                    <img :src="galleryItem.image" alt=""/>
                  </template>

                  <template v-if="galleryItem.type == 2">
                    <video controls>
                        <source :src="galleryItem.video" type="video/mp4">
                        <source :src="galleryItem.video" type="video/ogg">
                      Your browser does not support the video tag.
                    </video>
                  </template>

                  <template v-if="galleryItem.type == 3 && isYoutubeVideo(galleryItem.video_url) != 1">

                    <LazyYoutube :src="galleryItem.video_url" />

                  </template>

                  <template v-if="galleryItem.type == 3 && isYoutubeVideo(galleryItem.video_url) == -1">

                    <LazyVimeo :src="galleryItem.video_url" />

                  </template>

                </div>
              </div>
              <!-- single gallery end -->



            </div>

            <infinite-loading @distance="1" @infinite="infiniteHandler">
                <div slot="spinner"><p style="text-align: center; padding: 20px;">Loading.....</p></div>
                <div slot="no-more"><p style="text-align: center; padding: 20px;">No more items available</p></div>
              </infinite-loading>
          <!-- page content end -->
        </div>
      </div>
    </section>
    <!-- single image section end -->
  </div>
</template>

<script>
import Breadcumb from '../../components/Breadcumb.vue';

export default {
  components: { Breadcumb },
  name:'MediaDetails',
  data() {
    return {
      galleryItems: [],
      page: 1,
      link: {
        name: 'Media',
        url: '/media'
      }
    }
  },
  async mounted() {
    await this.infiniteHandler();
  },
  methods:{
      async init(){
         await this.$axios.get(`get/media-items/${this.$route.params.id}`)
         .then((response) => {
          // console.log(response.data.data);
              this.galleryItems = response.data.data
          })
          .catch(() => {
            this.galleryItems = {}
          })
      },

      infiniteHandler($state) {
        this.$axios.get(`get/media-items/${this.$route.params.id}?page=${this.page}`)
        .then(({ data }) => {
            //  console.log(data.data);
        if (data.data.length) {
          this.page += 1;
          this.galleryItems.push(...data.data);
          $state.loaded();
        } else {
          $state.complete();
        }
      });
    },

    isYoutubeVideo(url) {
      return url.search("youtube");
    }

  }
}
</script>

<style>

</style>
