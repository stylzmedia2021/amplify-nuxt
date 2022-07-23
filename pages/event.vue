<template>
  <div>
    <!-- Breadcumb section start -->
    <div class="breadcumb pb-20 pt-36">
      <div class="container">
        <div class="text-center pb-5">
          <h2 class="uppercase text-xl font-medium text-white">Event</h2>
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
                <a href="#" class="ml-1 text-xs font-normal text-white md:ml-2">Event</a>
              </div>
            </li>
          </ol>
        </nav>
      </div>
    </div>
    <!-- breadcumb section end -->

    <!-- freature section start -->
    <section class=" bg-gray-100 py-20">
      <div class="container">
        <!-- full-width event -->
        <div class="primary-bg p-5 md:grid md:grid-cols-2 md:gap-10">
          <!-- image -->
          <div class=" overflow-hidden">
            <img class=" h-full w-full object-cover transform duration-1000 hover:scale-110" src="~/assets/images/joy.png" alt="">
          </div>
          <!-- content -->
          <div class="">
              <h2 class="primary-font-color text-2xl font-bold py-5">Golden Jubilee of Bangladesh</h2>
              <p class=" text-base text-black font-normal font-montserrat">The Father of the Nation Bangabandhu Sheikh Mujibur Rahman, under whose leadership we've got an independent sovereign Bangladesh. In 2021, we're celebrating 50 years of independence. After nine (9) months of war with the Pakistani aggressors in 1971, Bangladesh became independent and was born as an independent nation.</p>
              <div class="flex justify-between mt-5 font-montserrat">
                <!-- date -->
                <div class="flex space-x-5">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span class="text-xs font-semibold">24 Mar 2022</span>
                  </div>
                </div>
                <!-- location -->
                <div class="">
                  <div class="flex space-x-5">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <span class="text-xs font-semibold">Bangladesh</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- read-more button -->
              <div class="pt-5 md:float-right font-montserrat">
                <a class="read-more text-base font-bold inline" href="">
                  Read More
                  <font-awesome-icon :icon="['fas', 'arrow-right']"/>
                </a>
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
          <div class="primary-bg lg:flex space-y-5 lg:space-y-0 lg:space-x-5 p-5 border border-gray-400 rounded-md">
            <div class="lg:w-2/5 w-full overflow-hidden">
              <img class=" h-full w-full object-cover transform duration-1000 hover:scale-110" src="~/assets/images/event-1.png" alt="">
            </div>
            <!-- event content -->
            <div class="lg:w-3/5 w-full">
              <h2 class=" text-lg font-bold primary-font-color">Audio Visual "An Elegy Eternal" on the occasion of National Mourning Day</h2>
              <div class="flex justify-between mt-5 font-montserrat">
                <!-- date -->
                <div class="flex space-x-2">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span class=" text-xs font-normal italic">24 Mar 2022</span>
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
                      <span class="text-xs font-normal italic">Bangladesh</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- read-more button -->
              <div class="pt-5 md:float-right font-montserrat">
                <a class="read-more text-sm font-bold inline" href="">
                  Read More
                  <font-awesome-icon :icon="['fas', 'arrow-right']"/>
                </a>
              </div>
            </div>
          </div>

          <!-- single event -->
          <div class="primary-bg lg:flex space-y-5 lg:space-x-0 lg:space-x-5 p-5 border border-gray-400 rounded-md">
            <div class="lg:w-2/5 w-full overflow-hidden">
              <img class=" h-full w-full object-cover transform duration-1000 hover:scale-110" src="~/assets/images/event-2.png" alt="">
            </div>
            <!-- event content -->
            <div class="lg:w-3/5 w-full">
              <h2 class=" text-lg font-bold primary-font-color">Bangabandhu's spech at UNGA</h2>
              <div class="flex justify-between mt-5 font-montserrat">
                <!-- date -->
                <div class="flex space-x-2">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span class=" text-xs font-normal italic">24 Mar 2022</span>
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
                      <span class="text-xs font-normal italic">Bangladesh</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- read-more button -->
              <div class="pt-5 md:float-right font-montserrat">
                <a class="read-more text-sm font-bold inline" href="">
                  Read More
                  <font-awesome-icon :icon="['fas', 'arrow-right']"/>
                </a>
              </div>
            </div>
          </div>

          <!-- single event -->
          <div class="primary-bg lg:flex space-y-5 lg:space-y-0 lg:space-x-5 p-5 border border-gray-400 rounded-md">
            <div class="lg:w-2/5 w-full overflow-hidden">
              <img class=" h-full w-full object-cover transform duration-1000 hover:scale-110" src="~/assets/images/event-1.png" alt="">
            </div>
            <!-- event content -->
            <div class="lg:w-3/5 w-full">
              <h2 class=" text-lg font-bold primary-font-color">Audio Visual "An Elegy Eternal" on the occasion of National Mourning Day</h2>
              <div class="flex justify-between mt-5 font-montserrat">
                <!-- date -->
                <div class="flex space-x-2">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span class=" text-xs font-normal italic">24 Mar 2022</span>
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
                      <span class="text-xs font-normal italic">Bangladesh</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- read-more button -->
              <div class="pt-5 md:float-right font-montserrat">
                <a class="read-more text-sm font-bold inline" href="">
                  Read More
                  <font-awesome-icon :icon="['fas', 'arrow-right']"/>
                </a>
              </div>
            </div>
          </div>

          <!-- single event -->
          <div class="primary-bg lg:flex space-y-5 lg:space-x-0 lg:space-x-5 p-5 border border-gray-400 rounded-md">
            <div class="lg:w-2/5 w-full overflow-hidden">
              <img class=" h-full w-full object-cover transform duration-1000 hover:scale-110" src="~/assets/images/event-2.png" alt="">
            </div>
            <!-- event content -->
            <div class="lg:w-3/5 w-full">
              <h2 class=" text-lg font-bold primary-font-color">Bangabandhu's spech at UNGA</h2>
              <div class="flex justify-between mt-5 font-montserrat">
                <!-- date -->
                <div class="flex space-x-2">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span class=" text-xs font-normal italic">24 Mar 2022</span>
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
                      <span class="text-xs font-normal italic">Bangladesh</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- read-more button -->
              <div class="pt-5 md:float-right font-montserrat">
                <a class="read-more text-sm font-bold inline" href="">
                  Read More
                  <font-awesome-icon :icon="['fas', 'arrow-right']"/>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
     <!-- all event end -->
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
