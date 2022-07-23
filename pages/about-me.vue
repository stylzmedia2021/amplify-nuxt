<template>
  <div>
    <!-- Breadcumb section start -->
    <div class="breadcumb pb-20 pt-36">
      <div class="container">
        <div class="text-center pb-5">
          <h2 class="uppercase text-xl font-medium text-white">About Me</h2>
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
                <a href="#" class="ml-1 text-xs font-normal text-white md:ml-2">About Me</a>
              </div>
            </li>
          </ol>
        </nav>
      </div>
    </div>
    <!-- breadcumb section end -->

    <!-- about section start -->
    <section class="primary-bg py-20">
        <div class="container">
            <div class="lg:grid lg:grid-cols-2 lg:gap-10">
                <div class="">
                    <div class="ml-5 pt-3 pb-5">
                      <h4 class="s-text-color text-xl font-bold mb-5">More About</h4>
                      <h2 class="s-text-color text-4xl font-normal">Chowdhury Saifunnobi Sagor</h2>
                    </div>
                    <ol class="relative border-l-2 s-border-color">
                      <li class="mb-10 ml-4">
                          <div class="absolute w-4 h-4 s-border-bg rounded-full mt-1.5 -left-2 border-2 s-border-color"></div>
                          <div class="ml-5 font-montserrat">
                            <h4 class="mb-1 text-2xl font-normal s-text-color">Publicity and Publication Secretary</h4>
                            <h3 class="text-4xl font-normal s-text-color my-5">Publicity and Publication Secretary</h3>
                            <p class="mb-4 text-xl font-normal text-gray-500">The quick brown fox jumps over the lazy dog. It is the goto line for learning touch tpying.</p>
                          </div>
                      </li>
                    <li class="mb-10 ml-4">
                          <div class="absolute w-4 h-4 s-border-bg rounded-full mt-1.5 -left-2 border-2 s-border-color"></div>
                          <div class="ml-5 font-montserrat">
                            <h4 class="mb-1 text-2xl font-normal s-text-color">Publicity and Publication Secretary</h4>
                            <h3 class="text-4xl font-normal s-text-color my-5">Publicity and Publication Secretary</h3>
                            <p class="mb-4 text-xl font-normal text-gray-500">The quick brown fox jumps over the lazy dog. It is the goto line for learning touch tpying.</p>
                          </div>
                      </li>
                      <li class="mb-10 ml-4">
                          <div class="absolute w-4 h-4 s-border-bg rounded-full mt-1.5 -left-2 border-2 s-border-color"></div>
                          <div class="ml-5 font-montserrat">
                            <h4 class="mb-1 text-2xl font-normal s-text-color">Publicity and Publication Secretary</h4>
                            <h3 class="text-4xl font-normal s-text-color my-5">Publicity and Publication Secretary</h3>
                            <p class="mb-4 text-xl font-normal text-gray-500">The quick brown fox jumps over the lazy dog. It is the goto line for learning touch tpying.</p>
                          </div>
                      </li>
                  </ol>
                </div>
                <div class="">
                    <div class="secondary-bg mt-16 overflow-hidden">
                      <img class=" h-full w-auto object-cover mx-auto duration-1000 transform cursor-pointer hover:scale-110" src="~/assets/images/about.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- about section end -->
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
