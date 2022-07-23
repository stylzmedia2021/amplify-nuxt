<template>
  <div>
    <!-- slider section start -->
    <div>
      <vue-slick-carousel class="slider-area" v-bind="settings" :arrows="false" :dots="true">
        <!-- single slider -->
        <div class="overflow-hidden">
          <img class="w-full object-cover" src="~/assets/images/slider-1.jpg" alt="">
        </div>
        <!-- single slider -->
        <div class="overflow-hidden">
          <img class="w-full object-cover" src="~/assets/images/slider-1.jpg" alt="">
        </div>
      </vue-slick-carousel>
    </div>
    <!-- slider section end -->

    <!-- vision section start -->
     <section class="mission-bg">
        <div class="container">
            <div class="py-24">
                <h2 class="text-3xl text-white font-semibold mb-10 font-montserrat">Vision & Mission</h2>
                <p class=" text-xl text-white mb-10 font-montserrat">Relive the iconic moments that changed the course of history for our nation and witness the unfolding of momentous events as Bangabandhu Sheikh Mujibur Rahman makes his iconic and legendary speeches. Relive the iconic moments that changed the course of history for our nation and witness the unfolding of momentous events as Bangabandhu Sheikh Mujibur Rahman makes his iconic and legendary speeches. </p>
                <a class="btn-bg px-4 py-3 rounded-md text-white text-xl font-medium float-right duration-1000 font-montserrat" href="">Read More</a>
            </div>
        </div>
    </section>
  <!-- vision section end -->

  <!-- about section start -->
  <section class="primary-bg py-20">
      <div class="container">
          <div class="md:flex items-center space-y-5">
              <div class="md:w-7/12 timiline-content">
                  <div class="ml-5 pt-3 pb-5">
                    <h4 class="s-text-color text-xl font-bold mb-5">More About</h4>
                    <h2 class="s-text-color text-4xl font-normal">Chowdhury Saifunnobi Sagor</h2>
                  </div>
                  <ol class="relative border-l-2 ml-5 s-border-color">
                    <li class="mb-10 ml-4">
                        <div class="absolute w-4 h-4 s-border-bg rounded-full mt-1.5 -left-2 border-2 s-border-color"></div>
                        <div class="ml-5 font-montserrat">
                          <h4 class="mb-1  text-xl font-normal s-text-color">Publicity and Publication Secretary</h4>
                          <h3 class="text-2xl font-normal s-text-color my-3">Dhaka Metropolitan South Awami League</h3>
                          <!-- <p class="mb-4 text-xl font-normal text-gray-500">The quick brown fox jumps over the lazy dog. It is the goto line for learning touch tpying.</p> -->
                        </div>
                    </li>
                   <li class="mb-10 ml-4">
                        <div class="absolute w-4 h-4 s-border-bg rounded-full mt-1.5 -left-2 border-2 s-border-color"></div>
                        <div class="ml-5 font-montserrat">
                          <h4 class="mb-1 text-xl font-normal s-text-color">B.Sc (Hons) + M.Sc, Biochemistry And Molecular Biology</h4>
                          <h3 class="text-2xl font-normal s-text-color my-3">University of Dhaka</h3>
                          <!-- <p class="mb-4 text-xl font-normal text-gray-500">The quick brown fox jumps over the lazy dog. It is the goto line for learning touch tpying.</p> -->
                        </div>
                    </li>
                    <li class="mb-10 ml-4">
                        <div class="absolute w-4 h-4 s-border-bg rounded-full mt-1.5 -left-2 border-2 s-border-color"></div>
                        <div class="ml-5 font-montserrat">
                          <h4 class="mb-1 text-xl font-normal s-text-color">Director</h4>
                          <h3 class="text-2xl font-normal s-text-color my-3">Pure lab tech ltd.</h3>
                          <!-- <p class="mb-4 text-xl font-normal text-gray-500">The quick brown fox jumps over the lazy dog. It is the goto line for learning touch tpying.</p> -->
                        </div>
                    </li>
                    <li class="mb-10 ml-4">
                        <div class="absolute w-4 h-4 s-border-bg rounded-full mt-1.5 -left-2 border-2 s-border-color"></div>
                        <div class="ml-5 font-montserrat">
                          <h4 class="mb-1 text-xl font-normal s-text-color">Blood Group</h4>
                          <h3 class="text-2xl font-normal s-text-color my-3">O Positive</h3>
                          <!-- <p class="mb-4 text-xl font-normal text-gray-500">The quick brown fox jumps over the lazy dog. It is the goto line for learning touch tpying.</p> -->
                        </div>
                    </li>
                    <li class="mb-10 ml-4">
                        <div class="absolute w-4 h-4 s-border-bg rounded-full mt-1.5 -left-2 border-2 s-border-color"></div>
                        <div class="ml-5 font-montserrat">
                          <h4 class="mb-1 text-xl font-normal s-text-color">Joint General Secretary</h4>
                          <h3 class="text-2xl font-normal s-text-color my-3">Dhaka University Biochemist & Molecular Biology Alumni Association </h3>
                          <!-- <p class="mb-4 text-xl font-normal text-gray-500">The quick brown fox jumps over the lazy dog. It is the goto line for learning touch tpying.</p> -->
                        </div>
                    </li>
                </ol>
              </div>
              <div class="md:w-5/12 relative secondary-bg bg-cover overflow-hidden" style="height: 700px;">

                    <img class="duration-1000 transform cursor-pointer hover:scale-110 h-full object-cover absolute bottom-0 right-0"  src="~/assets/images/about.png" alt="">
              </div>
          </div>
      </div>
  </section>
  <!-- about section end -->

  <!-- event section start -->
  <section class="event-section-bg py-20">
    <ul class="circles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <div class="container">
      <!-- Event Heading -->
      <div class=" text-center">
        <h2 class=" text-white text-3xl font-semibold mb-10">Event</h2>
      </div>
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
      <!-- two column width event -->
      <div class=" md:grid md:grid-cols-2 md:gap-10 pt-8 space-y-10 md:space-y-0">
        <!-- single event -->
        <div class="primary-bg lg:flex space-y-5 lg:space-y-0 lg:space-x-5 p-5">
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
        <div class="primary-bg lg:flex space-y-5 lg:space-x-0 lg:space-x-5 p-5">
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
      <!-- viewall button -->
      <div class="my-10 flex justify-center">
        <a class=" bg-black px-5 py-4 rounded text-white text-base font-semibold duration-1000 hover:bg-blue-900" href="">View All</a>
      </div>
    </div>
  </section>
  <!-- event section end -->

  <!-- news section start -->
  <section class="primary-bg py-20">
    <div class="container">
      <!-- section Heading -->
      <div class=" text-center">
        <h2 class=" primary-font-color text-3xl font-semibold mb-10">Political News</h2>
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
      </div>
      <!-- viewall button -->
      <div class="my-10 flex justify-center">
        <a class=" bg-black px-5 py-4 rounded text-white text-base font-semibold duration-1000 hover:bg-blue-900" href="">View All</a>
      </div>
    </div>
  </section>
  <!-- news section end -->

  <!-- parallax section start -->
  <section class="parallax py-32">
    <div class="container">
      <div class="md:flex md:space-x-36 items-center space-y-5">
        <div class=" md:w-1/3 relative z-10">
          <div>
            <img class=" h-full w-full object-cover" src="~/assets/images/boat.png" alt="">
          </div>
        </div>
        <div class=" md:w-2/3 relative z-10">
          <div>
            <h2 class=" text-white text-5xl font-bold mb-8">Your Support make help us</h2>
            <p class=" text-sm font-bold text-white font-montserrat">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae magna nibh feugiat in rutrum tortor, cras. Turpis sem ornare dignissim vitae. Metus, in aenean amet, ornare viverra vulputate odio. Placerat faucibus in in nibh donec nibh venenatis malesuada tortor.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- parallax section end -->

  <!-- testimonial section start -->
  <section class="primary-bg py-20">
    <div class="container">
      <div class="lg:flex lg:space-x-24 space-y-10 lg:space-y-0">
        <!-- section image -->
        <div class="lg:w-1/2 w-full">
          <div class="relative">
            <img class="h-full w-full object-cover" src="~/assets/images/testimonial.png" alt="">
            <div class="image-bg-layout"></div>
            <div class="image-bottom-bg-layout"></div>
          </div>
        </div>
        <!-- section content -->
        <div class="lg:w-1/2 w-full">
          <div>
            <h2 class="text-5xl font-bold mb-5 s-text-color">Together we can make Better World</h2>
            <h4 class="testimonial-sub-title text-2xl font-bold text-black mb-8 ml-10">Vote for the best candidate</h4>
            <p class=" text-lg font-normal text-black font-montserrat">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra vel ut id facilisis arcu nisl cras. Blandit lectus lorem quis velit consequat rutrum. Tristique proin integer sollicitudin augue. Orci, purus in in pretium nibh. Magna fermentum, vitae eget enim. Id vel sed proin mi, tristique. Sed nec urna, eu ultrices turpis est. Rhoncus bibendum vestibulum imperdiet sit id ultrices enim congue.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- testimonial section end -->

  <!-- social media section start -->
  <section class="event-section-bg py-20">
    <ul class="circles social">
      <li><font-awesome-icon :icon="['fab', 'facebook']"/></li>
      <li><font-awesome-icon :icon="['fab', 'twitter']"/></li>
      <li><font-awesome-icon :icon="['fab', 'facebook']"/></li>
      <li><font-awesome-icon :icon="['fab', 'twitter']"/></li>
      <li><font-awesome-icon :icon="['fab', 'facebook']"/></li>
      <li><font-awesome-icon :icon="['fab', 'twitter']"/></li>
      <li><font-awesome-icon :icon="['fab', 'facebook']"/></li>
      <li><font-awesome-icon :icon="['fab', 'twitter']"/></li>
      <li><font-awesome-icon :icon="['fab', 'facebook']"/></li>
      <li><font-awesome-icon :icon="['fab', 'twitter']"/></li>
    </ul>
    <!-- Section Heading -->
      <div class=" text-center mb-10">
        <h2 class=" text-white text-3xl font-semibold">Social Media Feeds</h2>
      </div>
      <div class="container">
        <div class="lg:flex lg:space-x-10 space-y-10 lg:space-y-0">
          <div class="lg:w-1/2 w-full">
            <div class="fb-page" data-href="https://www.facebook.com/facebook" data-tabs="timeline" data-width="550" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/facebook" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/facebook">Meta</a></blockquote></div>
          </div>

          <div class="lg:w-1/2 w-full">
            <div class="fb-page" data-href="https://www.facebook.com/facebook" data-tabs="timeline" data-width="550" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/facebook" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/facebook">Meta</a></blockquote></div>
          </div>
        </div>
      </div>
  </section>
  <!-- social media section end -->

  <!-- Gallery section start -->
  <section class="primary-bg py-20">
    <div class="container">
       <!-- Event Heading -->
      <div class=" text-center mb-10">
        <h2 class=" primary-font-color text-3xl font-semibold">Gallery</h2>
      </div>
      <!-- media -->
      <div class="lg:flex">
        <!-- Gallery Iframe -->
        <div class="lg:w-2/3 w-full">
          <div>
            <iframe width="100%" height="416" src="https://www.youtube.com/embed/gtAerKxyL5s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
        <!-- Gallery Playlist -->
        <div class="lg:w-1/3 w-full bg-black font-montserrat">
          <!-- single playlist -->
          <div class="flex space-x-3 mb-5">
            <div class="mx-2 mt-3 border-2 border-white">
              <img class="h-12 w-24" src="~/assets/images/g1.jpg" alt="">
            </div>
            <div class="mt-3">
              <a href="" class=" text-white text-xs font-normal">মাননীয় প্রধানমন্ত্রী জননেত্রী শেখ হাসিনার নেতৃত্বে ডিজিটাল বাংলাদেশ এর এগিয়ে...</a>
            </div>
          </div>

          <!-- single playlist -->
          <div class="flex space-x-3 mb-5">
            <div class="mx-2 mt-3 border-2 border-white">
              <img class="h-12 w-24" src="~/assets/images/g2.jpg" alt="">
            </div>
            <div class="mt-3">
              <a href="" class=" text-white text-xs font-normal">শেখ রাসেলের জন্মদিনকে জাতীয় দিবস হিসেবে ঘোষণা করার দাবি জানাচ্ছি | Zunaid...</a>
            </div>
          </div>

          <!-- single playlist -->
          <div class="flex space-x-3 mb-5">
            <div class="mx-2 mt-3 border-2 border-white">
              <img class="h-12 w-24" src="~/assets/images/g3.jpg" alt="">
            </div>
            <div class="mt-3">
              <a href="" class=" text-white text-xs font-normal">Abar Elo Je Sondha | আবার এলো যে সন্ধ্যা | Tribute To Happy Aakhand...</a>
            </div>
          </div>

          <!-- single playlist -->
          <div class="flex space-x-3 mb-5">
            <div class="mx-2 mt-3 border-2 border-white">
              <img class="h-12 w-24" src="~/assets/images/g1.jpg" alt="">
            </div>
            <div class="mt-3">
              <a href="" class=" text-white text-xs font-normal">মাননীয় প্রধানমন্ত্রী জননেত্রী শেখ হাসিনার নেতৃত্বে ডিজিটাল বাংলাদেশ এর এগিয়ে...</a>
            </div>
          </div>

          <!-- single playlist -->
          <div class="flex space-x-3">
            <div class="mx-2 mt-3 border-2 border-white">
              <img class="h-12 w-24" src="~/assets/images/g2.jpg" alt="">
            </div>
            <div class="mt-3">
              <a href="" class=" text-white text-xs font-normal">শেখ রাসেলের জন্মদিনকে জাতীয় দিবস হিসেবে ঘোষণা করার দাবি জানাচ্ছি | Zunaid...</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
  <!-- Gallery section end -->
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return{
      settings: {
          autoplay: true,
          autoplaySpeed: 5000,
        }
    }
  }
}
</script>


