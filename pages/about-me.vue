<template>
  <div>
    <!-- Breadcumb section start -->
    <breadcumb
        :name="`About Me`"
      />
    <!-- breadcumb section end -->

    <!-- about section start -->
    <section class="primary-bg py-20">
        <div class="container">
            <div class="lg:grid lg:grid-cols-2 lg:gap-10">
                <div class="">
                    <div class="ml-5 pt-3 pb-5">
                      <h4 class="s-text-color text-xl font-bold mb-5">{{ aboutSection.section_name }}</h4>
                      <h2 class="s-text-color text-4xl font-normal">{{ aboutSection.title }}</h2>
                    </div>
                    <ol class="relative border-l-2 s-border-color">
                      <li class="mb-10 ml-4">
                          <div class="absolute w-4 h-4 s-border-bg rounded-full mt-1.5 -left-2 border-2 s-border-color"></div>
                          <div class="ml-5 font-montserrat">
                            <h4 class="mb-1 text-2xl font-normal s-text-color">{{ aboutSection.political_position_one }}</h4>
                            <h3 class="text-4xl font-normal s-text-color my-5">{{ aboutSection.political_position_one_organization_name }}</h3>
                            <!-- <p class="mb-4 text-xl font-normal text-gray-500">The quick brown fox jumps over the lazy dog. It is the goto line for learning touch tpying.</p> -->
                          </div>
                      </li>
                    <li class="mb-10 ml-4">
                          <div class="absolute w-4 h-4 s-border-bg rounded-full mt-1.5 -left-2 border-2 s-border-color"></div>
                          <div class="ml-5 font-montserrat">
                            <h4 class="mb-1 text-2xl font-normal s-text-color">{{ aboutSection.education }}</h4>
                            <h3 class="text-4xl font-normal s-text-color my-5">{{ aboutSection.education_institution_name }}</h3>
                            <!-- <p class="mb-4 text-xl font-normal text-gray-500">The quick brown fox jumps over the lazy dog. It is the goto line for learning touch tpying.</p> -->
                          </div>
                      </li>
                      <li class="mb-10 ml-4">
                          <div class="absolute w-4 h-4 s-border-bg rounded-full mt-1.5 -left-2 border-2 s-border-color"></div>
                          <div class="ml-5 font-montserrat">
                            <h4 class="mb-1 text-2xl font-normal s-text-color">{{ aboutSection.professional_position }}</h4>
                            <h3 class="text-4xl font-normal s-text-color my-5">{{ aboutSection.company_name }}</h3>
                            <!-- <p class="mb-4 text-xl font-normal text-gray-500">The quick brown fox jumps over the lazy dog. It is the goto line for learning touch tpying.</p> -->
                          </div>
                      </li>
                      <li class="mb-10 ml-4">
                          <div class="absolute w-4 h-4 s-border-bg rounded-full mt-1.5 -left-2 border-2 s-border-color"></div>
                          <div class="ml-5 font-montserrat">
                            <h4 class="mb-1 text-2xl font-normal s-text-color">Blood Group</h4>
                            <h3 class="text-4xl font-normal s-text-color my-5">{{ aboutSection.blood_group }}</h3>
                            <!-- <p class="mb-4 text-xl font-normal text-gray-500">The quick brown fox jumps over the lazy dog. It is the goto line for learning touch tpying.</p> -->
                          </div>
                      </li>
                      <li class="mb-10 ml-4">
                          <div class="absolute w-4 h-4 s-border-bg rounded-full mt-1.5 -left-2 border-2 s-border-color"></div>
                          <div class="ml-5 font-montserrat">
                            <h4 class="mb-1 text-2xl font-normal s-text-color">{{ aboutSection.political_position_two }}</h4>
                            <h3 class="text-4xl font-normal s-text-color my-5">{{ aboutSection.political_position_two_organization_name }}</h3>
                            <!-- <p class="mb-4 text-xl font-normal text-gray-500">The quick brown fox jumps over the lazy dog. It is the goto line for learning touch tpying.</p> -->
                          </div>
                      </li>
                  </ol>
                </div>
                <div class="">
                    <div class="secondary-bg mt-16 overflow-hidden">
                      <img class=" h-full w-auto object-cover mx-auto duration-1000 transform cursor-pointer hover:scale-110" :src="aboutSection.image" alt="">
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
  data() {
    return {
      aboutSection: {}
    }
  },

  async mounted() {
    await this.getSections();
  },

  methods: {
    async getSections(){
      await this.$axios.get(`/get/home/sections?type=2`)
      .then((response) => {
        console.log(response.data.data);
        this.aboutSection = response.data.data;
      }).catch((error) => {
        console.log(error);
      }).finally(() => {
        //
      })
    },
  }
}
</script>

<style>

</style>
