<template>
  <div>
    <!-- footer section start -->
    <footer>
      <!-- footer top section start -->
      <div class="footer-bg py-36 relative">
        <div class="footer-overlay"></div>
        <div class=" md:w-1/2 md:mx-auto px-10 md:px-0">
          <div class="relative z-10">
            <div class="flex justify-center mb-5">
              <img class=" h-20 w-auto" src="~/assets/images/logo.png" alt="">
            </div>
            <div class="text-center">
              <p class=" text-base font-bold text-gray-500 md:text-white font-montserrat">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae magna nibh feugiat in rutrum tortor, cras. Turpis sem ornare dignissim vitae. Metus, in aenean amet, ornare viverra vulputate odio. Placerat faucibus in in nibh donec nibh venenatis malesuada tortor.</p>
            </div>
             <div class="md:mt-10 mt-16 flex space-x-5 justify-center">
              <input class=" bg-transparent border-b-2 border-white text-center md:py-3 py-2 px-3 text-white md:px-5" type="text" name="" id="" placeholder="write your email here!">
              <button type="button" class="bg-black px-1 py-1 text-sm md:px-3 md:py-3 md:text-base font-bold text-white uppercase">Subscribe</button>
            </div>
            <div class="mt-10">
              <h2 class=" text-white text-base md:text-2xl font-normal text-center font-montserrat">Get subscribed to be notified of latest events</h2>
              <div class="flex space-x-5 justify-center mt-5">
                <!-- facebook -->
                <a class="h-8 w-8 md:h-12 md:w-12 bg-white rounded-full flex items-center justify-center" href="">
                  <img class="h-4 md:h-5 w-auto" src="~/assets/images/facebook.png" alt="">
                </a>
                <!-- twitter -->
                <a class=" h-8 w-8 md:h-12 md:w-12 bg-white rounded-full flex items-center justify-center" href="">
                  <img class="h-4 md:h-5 w-auto" src="~/assets/images/twitter.png" alt="">
                </a>
                <!-- youtube -->
                <a class=" h-8 w-8 md:h-12 md:w-12 bg-white rounded-full flex items-center justify-center" href="">
                  <img class="h-4 md:h-5 w-auto" src="~/assets/images/youtube.png" alt="">
                </a>
                <!-- linkdin -->
                <a class=" h-8 w-8 md:h-12 md:w-12 bg-white rounded-full flex items-center justify-center" href="">
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
              <p class="text-sm font-bold text-white md:text-left">© {{ new Date().getFullYear() }} Chowdhury Saifunnobi Sagor</p>
            </div>
            <div class="md:w-1/2 w-full">
              <p class="text-sm font-bold text-white md:text-right mt-5 md:mt-0">website by <a href="">styleZworld.com</a></p>
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
export default {

}
</script>

<style>

</style>
