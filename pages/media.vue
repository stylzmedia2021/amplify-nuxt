<template>
  <div>
    <!-- Breadcumb section start -->
    <div class="breadcumb pb-20 pt-36">
      <div class="container">
        <div class="text-center pb-5">
          <h2 class="uppercase text-xl font-medium text-white">Media</h2>
        </div>
        <nav class="flex justify-center" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-3 uppercase">
            <li class="inline-flex items-center">
              <a href="/" class="inline-flex items-center text-xs font-normal text-white">
                <svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                Home
              </a>
            </li>
            <li>
              <div class="flex items-center">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                <a href="#" class="ml-1 text-xs font-normal text-white md:ml-2">Media</a>
              </div>
            </li>
          </ol>
        </nav>
      </div>
    </div>
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
                <li class=" px-3 py-4 border-b border-gray-200">
                  <nuxt-link class="flex space-x-3" to="">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <span>Photo Gallery</span>
                  </nuxt-link>
                </li>

                <li class=" px-3 py-4">
                  <nuxt-link class="flex space-x-3" to="">
                     <span>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <span>Video Gallery</span>
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
          <!-- sidebar menu end -->

          <!-- page content start -->
          <div class=" md:w-9/12 w-full">
            <div class="md:grid lg:grid-cols-3 md:grid-cols-2 space-y-5 md:space-y-0 md:gap-5">
              <!-- single gallery start -->
              <div class="single-gallery bg-white border border-gray-100 rounded-md shadow-lg">
                <div class="">
                  <img class="" src="~/assets/images/gallery-1.jpg" alt="">
                </div>
                <div class=" text-center py-5">
                  <nuxt-link class="text-lg font-semibold s-text-color" to="/single-media">SOCIAL WORKS & ALUMNI</nuxt-link>
                </div>
              </div>
              <!-- single gallery end -->

              <!-- single gallery start -->
              <div class="single-gallery bg-white border border-gray-100 rounded-md shadow-lg">
                <div class="">
                  <img class="" src="~/assets/images/gallery-2.jpg" alt="">
                </div>
                <div class=" text-center py-5">
                  <nuxt-link class="text-lg font-semibold s-text-color" to="/single-media">BANGLADESH STUDENT LEAGUE (BSL)</nuxt-link>
                </div>
              </div>
              <!-- single gallery end -->

              <!-- single gallery start -->
              <div class="single-gallery bg-white border border-gray-100 rounded-md shadow-lg">
                <div class="">
                  <img class="" src="~/assets/images/gallery-3.jpg" alt="">
                </div>
                <div class=" text-center py-5">
                  <nuxt-link class="text-lg font-semibold s-text-color" to="/single-media">CSSAGOR-PUBLICITY</nuxt-link>
                </div>
              </div>
              <!-- single gallery end -->

              <!-- single gallery start -->
              <div class="single-gallery bg-white border border-gray-100 rounded-md shadow-lg">
                <div class="">
                  <img class="" src="~/assets/images/gallery-4.jpg" alt="">
                </div>
                <div class=" text-center py-5">
                  <nuxt-link class="text-lg font-semibold s-text-color" to="/single-media">AL: RELIEF AND SOCIAL WELFARE</nuxt-link>
                </div>
              </div>
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
export default {

}
</script>

<style>

</style>
