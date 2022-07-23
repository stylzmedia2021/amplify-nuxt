<template>
  <div>
    <!-- Breadcumb section start -->
    <div class="breadcumb pb-20 pt-36">
      <div class="container">
        <div class="text-center pb-5">
          <h2 class="uppercase text-xl font-medium text-white">News</h2>
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
                <a href="#" class="ml-1 text-xs font-normal text-white md:ml-2">News</a>
              </div>
            </li>
          </ol>
        </nav>
      </div>
    </div>
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
        <div class="">
          <div class="overflow-hidden">
            <img class="h-full w-full object-cover transform duration-1000 hover:scale-110" src="~/assets/images/news.png" alt="">
          </div>
          <div class="bg-white px-5 py-5">
            <div>
              <span class="text-xs mb-5 color-sub-title">Bangladesh Awami League</span>
              <h2 class="text-black text-lg font-bold mb-5">বঙ্গবন্ধুর স্বাধীনতার ঘোষণা, আমাদের মুক্তিযুদ্ধ ও স্বাধীন বাংলাদেশ</h2>
              <p class="color-sub-title text-base font-normal mb-5">সর্বস্তরের মানুষের অপরিসীম ত্যাগ ও জীবনের বিনিময়ে ১৯৭১ সালে বিশ্ব-মানচিত্রে অভ্যুদয় ঘটে স্বাধীন সার্বভৌম গণপ্রজাতন্ত্রী বাংলাদেশের। ত্রিশ লক্ষ মানুষের জীবনদানসহ এ দেশের স্বাধীনতার ত্রিশ লক্ষ মানুষের জীবনদানসহ এ দেশের স্বাধীনতার </p>
              <a class="read-more text-black font-semibold text-base" href="">
                Read More
                <font-awesome-icon :icon="['fas', 'arrow-right']"/>
              </a>
            </div>
          </div>
        </div>

        <!-- single news -->
        <div>
          <div class="overflow-hidden">
            <img class="h-full w-full object-cover transform duration-1000 hover:scale-110" src="~/assets/images/news2.png" alt="">
          </div>
          <div class="bg-white px-5 py-5">
            <div>
              <span class="text-xs mb-5 color-sub-title">Bangladesh Awami League</span>
              <h2 class="text-black text-lg font-bold mb-5">Awami League vows to build Sonar Bangla thwarting all</h2>
              <p class="color-sub-title text-base font-normal mb-5">{Put some overview here about the title that quickly tell what’s the articles is about. Put some overview here about the title that quickly tell what’s the articles is about.}</p>
              <a class="read-more text-black font-semibold text-base" href="">
                Read More
                <font-awesome-icon :icon="['fas', 'arrow-right']"/>
              </a>
            </div>
          </div>
        </div>

        <!-- single news -->
        <div>
          <div class="overflow-hidden">
            <img class="h-full w-full object-cover transform duration-1000 hover:scale-110" src="~/assets/images/news3.png" alt="">
          </div>
          <div class="bg-white px-5 py-5">
            <div>
              <span class="text-xs mb-5 color-sub-title">Bangladesh Awami League</span>
              <h2 class="text-black text-lg font-bold mb-5">Awami League's rebel candidates won't get party tickets for polls</h2>
              <p class="color-sub-title text-base font-normal mb-5">{Put some overview here about the title that quickly tell what’s the articles is about. Put some overview here about the title that quickly tell what’s the articles is about.}</p>
              <a class="read-more text-black font-semibold text-base" href="">
                Read More
                <font-awesome-icon :icon="['fas', 'arrow-right']"/>
              </a>
            </div>
          </div>
        </div>

        <!-- single news -->
        <div class="">
          <div class="overflow-hidden">
            <img class="h-full w-full object-cover transform duration-1000 hover:scale-110" src="~/assets/images/news.png" alt="">
          </div>
          <div class="bg-white px-5 py-5">
            <div>
              <span class="text-xs mb-5 color-sub-title">Bangladesh Awami League</span>
              <h2 class="text-black text-lg font-bold mb-5">বঙ্গবন্ধুর স্বাধীনতার ঘোষণা, আমাদের মুক্তিযুদ্ধ ও স্বাধীন বাংলাদেশ</h2>
              <p class="color-sub-title text-base font-normal mb-5">সর্বস্তরের মানুষের অপরিসীম ত্যাগ ও জীবনের বিনিময়ে ১৯৭১ সালে বিশ্ব-মানচিত্রে অভ্যুদয় ঘটে স্বাধীন সার্বভৌম গণপ্রজাতন্ত্রী বাংলাদেশের। ত্রিশ লক্ষ মানুষের জীবনদানসহ এ দেশের স্বাধীনতার ত্রিশ লক্ষ মানুষের জীবনদানসহ এ দেশের স্বাধীনতার </p>
              <a class="read-more text-black font-semibold text-base" href="">
                Read More
                <font-awesome-icon :icon="['fas', 'arrow-right']"/>
              </a>
            </div>
          </div>
        </div>

        <!-- single news -->
        <div>
          <div class="overflow-hidden">
            <img class="h-full w-full object-cover transform duration-1000 hover:scale-110" src="~/assets/images/news2.png" alt="">
          </div>
          <div class="bg-white px-5 py-5">
            <div>
              <span class="text-xs mb-5 color-sub-title">Bangladesh Awami League</span>
              <h2 class="text-black text-lg font-bold mb-5">Awami League vows to build Sonar Bangla thwarting all</h2>
              <p class="color-sub-title text-base font-normal mb-5">{Put some overview here about the title that quickly tell what’s the articles is about. Put some overview here about the title that quickly tell what’s the articles is about.}</p>
              <a class="read-more text-black font-semibold text-base" href="">
                Read More
                <font-awesome-icon :icon="['fas', 'arrow-right']"/>
              </a>
            </div>
          </div>
        </div>

        <!-- single news -->
        <div>
          <div class="overflow-hidden">
            <img class="h-full w-full object-cover transform duration-1000 hover:scale-110" src="~/assets/images/news3.png" alt="">
          </div>
          <div class="bg-white px-5 py-5">
            <div>
              <span class="text-xs mb-5 color-sub-title">Bangladesh Awami League</span>
              <h2 class="text-black text-lg font-bold mb-5">Awami League's rebel candidates won't get party tickets for polls</h2>
              <p class="color-sub-title text-base font-normal mb-5">{Put some overview here about the title that quickly tell what’s the articles is about. Put some overview here about the title that quickly tell what’s the articles is about.}</p>
              <a class="read-more text-black font-semibold text-base" href="">
                Read More
                <font-awesome-icon :icon="['fas', 'arrow-right']"/>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
  <!-- news section end -->
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
