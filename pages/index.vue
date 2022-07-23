<template>
  <div>
    <!-- slider section start -->
    <homeCarousel></homeCarousel>
    <!-- slider section end -->


    <div v-for="section in sections" :key="section.id">
     <!-- vision section start -->
     <section v-if="section.section_design_type_id == '1'" :style="{ backgroundImage: 'url(' + section.bg_image + ')', backgroundColor:  section.bg_color  }" class="mission-bg">
        <div class="container">
            <div class="py-24">
                <h2 v-if="section.section_name_is_show == '1'" class="text-3xl text-white font-semibold mb-10 font-montserrat">{{section.section_name}}</h2>
                <p class=" text-xl text-white mb-10 font-montserrat" v-html="section.short_description"></p>
                <a class="btn-bg px-4 py-3 rounded-md text-white text-xl font-medium float-right duration-1000 font-montserrat" :href="section.button_rul">{{section.button_name}}</a>
            </div>
        </div>
    </section>
    <!-- vision section end -->

    <!-- about section start -->
    <section class="primary-bg py-20" v-if="section.section_design_type_id == '2'">
        <div class="container">
            <div class="md:flex items-center space-y-5">
                <div class="md:w-7/12 timiline-content">
                    <div class="ml-5 pt-3 pb-5">
                      <h4 v-if="section.section_name_is_show == '1'" class="s-text-color text-xl font-bold mb-5">{{section.section_name}}</h4>
                      <h2 class="s-text-color text-4xl font-normal">{{section.title}}</h2>
                    </div>
                    <ol class="relative border-l-2 ml-5 s-border-color">
                      <li class="mb-10 ml-4">
                          <div class="absolute w-4 h-4 s-border-bg rounded-full mt-1.5 -left-2 border-2 s-border-color"></div>
                          <div class="ml-5 font-montserrat">
                            <h4 class="mb-1  text-xl font-normal s-text-color">{{section.political_position_one}}</h4>
                            <h3 class="text-2xl font-normal s-text-color my-3">{{section.political_position_one_organization_name}}</h3>
                            <!-- <p class="mb-4 text-xl font-normal text-gray-500">The quick brown fox jumps over the lazy dog. It is the goto line for learning touch tpying.</p> -->
                          </div>
                      </li>
                    <li class="mb-10 ml-4">
                          <div class="absolute w-4 h-4 s-border-bg rounded-full mt-1.5 -left-2 border-2 s-border-color"></div>
                          <div class="ml-5 font-montserrat">
                            <h4 class="mb-1 text-xl font-normal s-text-color">{{section.education}}</h4>
                            <h3 class="text-2xl font-normal s-text-color my-3">{{section.education_institution_name}}</h3>
                            <!-- <p class="mb-4 text-xl font-normal text-gray-500">The quick brown fox jumps over the lazy dog. It is the goto line for learning touch tpying.</p> -->
                          </div>
                      </li>
                      <li class="mb-10 ml-4">
                          <div class="absolute w-4 h-4 s-border-bg rounded-full mt-1.5 -left-2 border-2 s-border-color"></div>
                          <div class="ml-5 font-montserrat">
                            <h4 class="mb-1 text-xl font-normal s-text-color">{{section.professional_position}}</h4>
                            <h3 class="text-2xl font-normal s-text-color my-3">{{section.company_name}}</h3>
                            <!-- <p class="mb-4 text-xl font-normal text-gray-500">The quick brown fox jumps over the lazy dog. It is the goto line for learning touch tpying.</p> -->
                          </div>
                      </li>
                      <li class="mb-10 ml-4">
                          <div class="absolute w-4 h-4 s-border-bg rounded-full mt-1.5 -left-2 border-2 s-border-color"></div>
                          <div class="ml-5 font-montserrat">
                            <h4 class="mb-1 text-xl font-normal s-text-color">Blood Group</h4>
                            <h3 class="text-2xl font-normal s-text-color my-3">{{section.blood_group}}</h3>
                            <!-- <p class="mb-4 text-xl font-normal text-gray-500">The quick brown fox jumps over the lazy dog. It is the goto line for learning touch tpying.</p> -->
                          </div>
                      </li>
                      <li class="mb-10 ml-4">
                          <div class="absolute w-4 h-4 s-border-bg rounded-full mt-1.5 -left-2 border-2 s-border-color"></div>
                          <div class="ml-5 font-montserrat">
                            <h4 class="mb-1 text-xl font-normal s-text-color">{{section.political_position_two}}</h4>
                            <h3 class="text-2xl font-normal s-text-color my-3">{{section.political_position_two_organization_name}}</h3>
                            <!-- <p class="mb-4 text-xl font-normal text-gray-500">The quick brown fox jumps over the lazy dog. It is the goto line for learning touch tpying.</p> -->
                          </div>
                      </li>
                  </ol>
                </div>
                <div class="md:w-5/12 relative secondary-bg bg-cover overflow-hidden" style="height: 700px;">

                      <img class="duration-1000 transform cursor-pointer hover:scale-110 h-full object-cover absolute bottom-0 right-0"  :src="section.image" alt="">
                </div>
            </div>
        </div>
    </section>
    <!-- about section end -->

    <!-- parallax section start -->
    <section class="parallax py-32" v-if="section.section_design_type_id == '5'" :style="{ backgroundImage: 'url(' + section.bg_image + ')'}">
      <div class="container">
        <div class="md:flex md:space-x-36 items-center space-y-5">
          <div class=" md:w-1/3 relative z-10">
            <div>
              <img class=" h-full w-full object-cover" :src="section.image" alt="">
            </div>
          </div>
          <div class=" md:w-2/3 relative z-10">
            <div>
              <h2 class=" text-white text-5xl font-bold mb-8">{{ section.title }}</h2>
              <p class=" text-sm font-bold text-white font-montserrat" v-html="section.short_description"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- parallax section end -->

    <!-- testimonial section start -->
  <section class="primary-bg py-20" v-if="section.section_design_type_id == '6'">
    <div class="container">
      <div class="lg:flex lg:space-x-24 space-y-10 lg:space-y-0">
        <!-- section image -->
        <div class="lg:w-1/2 w-full">
          <div class="relative">
            <img class="h-full w-full object-cover" :src="section.image" alt="">
            <div class="image-bg-layout"></div>
            <div class="image-bottom-bg-layout"></div>
          </div>
        </div>
        <!-- section content -->
        <div class="lg:w-1/2 w-full">
          <div>
            <h2 class="text-5xl font-bold mb-5 s-text-color">{{ section.title}}</h2>
            <h4 class="testimonial-sub-title text-2xl font-bold text-black mb-8 ml-10">{{ section.sub_title}}</h4>
            <p class=" text-lg font-normal text-black font-montserrat" v-html="section.short_description"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- testimonial section end -->

    <!-- event section start -->
  <section class="event-section-bg py-20" v-if="section.section_design_type_id == '3'">
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
    <div class="container" v-if="events && events.length > 0">
      <!-- Event Heading -->
      <div class=" text-center">
        <h2 class=" text-white text-3xl font-semibold mb-10">Event</h2>
      </div>
      <div>

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
                <a class="read-more text-base font-bold inline" href="">
                  Read More
                  <font-awesome-icon :icon="['fas', 'arrow-right']"/>
                </a>
              </div>
          </div>
        </div>

        <!-- two column width event -->
        <div class=" md:grid md:grid-cols-2 md:gap-10 pt-8 space-y-10 md:space-y-0">
          <div v-for="(event, index) in events" :key="index" class="primary-bg lg:flex space-y-5 lg:space-y-0 lg:space-x-5 p-5">

            <div class="lg:w-2/5 w-full overflow-hidden" v-if="event.type == 1">
              <img class=" h-full w-full object-cover transform duration-1000 hover:scale-110" :src="event.image" alt="">
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
                <nuxt-link class="read-more text-sm font-bold inline" :to="`single-event/${event.id}`">
                  Read More
                  <font-awesome-icon :icon="['fas', 'arrow-right']"/>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- view all button -->
      <div class="my-10 flex justify-center">
        <nuxt-link class=" bg-black px-5 py-4 rounded text-white text-base font-semibold duration-1000 hover:bg-blue-900" to="/event">View All</nuxt-link>
      </div>
    </div>
  </section>
  <!-- event section end -->

  <!-- news section start -->
  <section class="primary-bg py-20" v-if="section.section_design_type_id == '4'">
    <div class="container">
      <!-- section Heading -->
      <div class=" text-center">
        <h2 class=" primary-font-color text-3xl font-semibold mb-10">Political News</h2>
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
            <template>
              <!-- Youtube Embed -->
              <LazyYoutube style="height: 250px;" :src="singleNews.video_url" />

              <!-- Vimeo Embed -->
              <!-- <LazyVimeo src="https://player.vimeo.com/video/64654583" /> -->
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
              <nuxt-link class="read-more text-black font-semibold text-base" :to="`/single-news/${singleNews.id}`">
                Read More
                <font-awesome-icon :icon="['fas', 'arrow-right']"/>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <!-- viewall button -->
      <div class="my-10 flex justify-center">
        <nuxt-link class=" bg-black px-5 py-4 rounded text-white text-base font-semibold duration-1000 hover:bg-blue-900" to="/news">View All</nuxt-link>
      </div>
    </div>
  </section>
  <!-- news section end -->

  <!-- social media section start -->
  <section class="event-section-bg py-20" v-if="section.section_design_type_id == '7'" :style="{ backgroundColor:  section.bg_color  }">
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
            <div class="fb-page" :data-href="`${section.fb_page_link1}`" data-tabs="timeline" data-width="550" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote :cite="`${section.fb_page_link1}`" class="fb-xfbml-parse-ignore"><a :href="`${section.fb_page_link1}`">Meta</a></blockquote></div>
          </div>

          <div class="lg:w-1/2 w-full">
            <div class="fb-page" :data-href="`${section.fb_page_link2}`" data-tabs="timeline" data-width="550" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote :cite="`${section.fb_page_link2}`" class="fb-xfbml-parse-ignore"><a :href="`${section.fb_page_link2}`">Meta</a></blockquote></div>
          </div>
        </div>
      </div>
  </section>
  <!-- social media section end -->
  </div>



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
            <template v-if="defaultGallery">
              <!-- Youtube Embed -->
              <LazyYoutube style="height: 416px; min-width: 100%;" :src="defaultGallery" :autoplay="true" />

              <!-- Vimeo Embed -->
              <!-- <LazyVimeo src="https://player.vimeo.com/video/64654583" /> -->
            </template>
            <!-- <iframe width="100%" height="416" src="https://www.youtube.com/embed/gtAerKxyL5s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
        </div>
        <!-- Gallery Playlist -->
        <div style="height: 416px;" v-if="galleries && galleries.length > 0" class="lg:w-1/3 w-full bg-black font-montserrat">
          <!-- single playlist -->
          <div v-for="(gallery, index) in galleries" :key="index" class="flex space-x-3 mb-5">
            <div class="mx-2 mt-3 border-2 border-white">
              <img style="max-width: 6rem; height: 3rem;" :src="gallery.videoDetails.url" alt="">
            </div>
            <div class="mt-3">
              <a href="" @click.prevent="replaceUrl(gallery.videoDetails.url)" class=" text-white text-xs font-normal">{{ gallery.videoDetails.title }}</a>
            </div>
          </div>

         <!-- <div class="flex space-x-3 mb-5">
            <div class="mx-2 mt-3 border-2 border-white">
              <img class="h-12 w-24" src="~/assets/images/g2.jpg" alt="">
            </div>
            <div class="mt-3">
              <a href="" class=" text-white text-xs font-normal">শেখ রাসেলের জন্মদিনকে জাতীয় দিবস হিসেবে ঘোষণা করার দাবি জানাচ্ছি | Zunaid...</a>
            </div>
          </div> -->

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
      sections: [],
      events: [],
      featuredEvents: [],
      footer: [],
      news: [],
      galleries: [],
      defaultGallery: ''
    }
  },

  async mounted() {
    await this.getSections();
    await this.getEvents();
    await this.getNews();
    await this.getGalleries();
  },

  methods: {
    replaceUrl(url) {
      this.defaultGallery = url;
    },
    async getSections(){
      await this.$axios.get(`/get/home/sections`)
      .then((response) => {
        this.sections = response.data.data;
        this.footer = response.data.data.filter((section,index) => section.section_design_type_id == 9);
      }).catch((error) => {
        console.log(error);
      }).finally(() => {
        //
      })
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

    async getNews(){
      await this.$axios.get(`/get/news?per_page=3`)
      .then((response) => {
        this.news = response.data.data;
      }).catch((error) => {
        console.log(error);
      }).finally(() => {
        //
      })
    },



    async getGalleries(){
      await this.$axios.get(`/get/gallery-items`)
      .then((response) => {
        this.galleries = response.data.data;
        let featuredGallery = response.data.data.filter((item,index) => index == 0);
        this.defaultGallery = featuredGallery[0].video_url;
      }).catch((error) => {
        console.log(error);
      }).finally(() => {
        //
      })
    }
  }
}
</script>


