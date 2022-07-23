<template>
  <div>
    <!-- Breadcumb section start -->
    <breadcumb
        :name="`Media`"
      />
    <!-- breadcumb section end -->

    <!-- Media Section start -->
    <section class="primary-bg py-20">
      <div class="container">
        <div class="md:flex md:space-x-5 space-y-5 md:space-y-0">
          <!-- sidebar menu -->
          <div class="md:w-1/4 w-full bg-white shadow-lg border border-gray-200 rounded-md">
            <div class="">
              <h2 class=" text-xl font-semibold border-b border-gray-200 px-3 py-5">Media Center</h2>
              <ul class="media-menu">

                <li v-for="(category, index) in galleryCategories" :key="index" class=" px-3 py-4 border-b border-gray-200">
                  <a class="flex space-x-3" href="" @click.prevent="changeCategory(category.id)">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <span>{{ category.title }}</span>
                  </a>
                </li>

                <!-- <li class=" px-3 py-4">
                  <nuxt-link class="flex space-x-3" to="">
                     <span>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <span>Video Gallery</span>
                  </nuxt-link>
                </li> -->
              </ul>
            </div>
          </div>
          <!-- sidebar menu end -->

          <!-- page content start -->
          <div class=" md:w-9/12 w-full">
            <div class="md:grid lg:grid-cols-3 md:grid-cols-2 space-y-5 md:space-y-0 md:gap-5">

            <!-- single gallery start -->
            <template v-if="galleries && galleries.length > 0">
              <div v-for="(gallery, index) in galleries" :key="index" class="single-gallery bg-white border border-gray-100 rounded-md shadow-lg">
                <div class="">
                  <img class="" :src="gallery.image" alt="">
                </div>
                <div class=" text-center py-5">
                  <nuxt-link class="text-lg font-semibold s-text-color" :to="`/single-media/${gallery.id}`">{{ gallery.name }}</nuxt-link>
                </div>
              </div>
              </template>
              <template v-else>
                <div class="single-gallery bg-white border border-gray-100 rounded-md shadow-lg">
                <div class=" text-center py-5">
                  <p>No data available</p>
                </div>
              </div>
              </template>
              <!-- single gallery end -->
            </div>
          </div>
          <!-- page content end -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  data() {
    return {
      galleryCategories: [],
      galleries: [],
    }
  },

  async mounted() {
    await this.getGalleryCategory();

    let defaultGallery  =  this.galleryCategories.filter((category, index) => index == 0);

    this.getGalleries(defaultGallery[0].id);
  },

  methods: {
    async getGalleryCategory(){
        await this.$axios.get(`/get/gallery-category`)
        .then((response) => {
          this.galleryCategories = response.data.data
        }).catch((error) => {
          console.log(error);
        }).finally(() => {
          //
        })
    },
    async getGalleries(id){
        await this.$axios.get(`/get/gallery/${id}`)
        .then((response) => {
          this.galleries = response.data.data
          console.log(sdfsdfdf);
          console.log(this.galleries);
        }).catch((error) => {
          console.log(error);
        }).finally(() => {
          //
        })
    },
    changeCategory(id) {
      this.getGalleries(id);
    }
  }
}
</script>

<style>

</style>
