<template>
  <div>
    <!-- Breadcumb section start -->
    <div class="breadcumb pb-20 pt-36">
      <div class="container">
        <div class="text-center pb-5">
          <h2 class="uppercase text-xl font-medium text-white">Login</h2>
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
                <a href="#" class="ml-1 text-xs font-normal text-white md:ml-2">Login</a>
              </div>
            </li>
          </ol>
        </nav>
      </div>
    </div>
    <!-- breadcumb section end -->
    <section class="primary-bg py-20">
      <div class="container">
          <div class="flex items-center justify-center p-5">
            <h4 style="font-family: 'montserrat regular';" class="text-3xl font-black text-black">
                Log in
            </h4>
        </div>
        <!-- Login section start -->
        <div class="flex flex-col items-center justify-center">
            <form action="#" class="space-y-4">
                <div class="email">
                    <div class="relative mt-1">
                        <input type="email" id="emailInp"
                        class="w-96 px-5 py-3 rounded pl-12 text-sm focus:outline-none border border-gray-200 focus:border-blue-900 font-light" placeholder="email address">

                        <svg class="w-4 h-4 absolute top-0 m-3 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clip-rule="evenodd"></path></svg>
                    </div>
                </div>

                <div class="password">
                      <div class="relative mt-1 mb-2">
                          <input type="password"  id="passwordInp" class="w-96 px-5 py-3 rounded pl-12 text-sm focus:outline-none border border-gray-200 focus:border-blue-900 font-light" placeholder="password">
                          <svg class="w-4 h-4 absolute top-0 m-3 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clip-rule="evenodd"></path></svg>
                      </div>
                </div>

                <button class="focus:outline-none bg-blue-900 focus:bg-blue-900 focus:ring w-96 px-5 py-3 font-semibold hover:bg-blue-800 duration-1000 text-white rounded">Log in</button>
            </form>
        </div>

        <div class="flex flex-col items-center justify-center space-y-4">
          <h2 class="text-gray-400 mt-5"><span> or login with</span></h2>
            <div>
                <ul class="">
                    <a href="#">
                        <li class="border mb-3 border-red-400 rounded flex items-center justify-center w-96 space-x-3 px-5 py-3 text-red-500 hover:bg-red-400 hover:text-white duration-500">
                            <font-awesome-icon :icon="['fab', 'google']"/>
                            <span>Login with Google</span>
                        </li>
                    </a>

                    <a href="#">
                        <li class="border mb-3 border-blue-800 w-96 space-x-3 px-5 py-3 rounded flex items-center justify-center text-blue-900 hover:bg-blue-800 hover:text-white duration-500">
                            <font-awesome-icon :icon="['fab', 'facebook']"/>
                            <span>Login with Facebook</span>
                        </li>
                    </a>

                    <a href="#">
                        <li class="border border-blue-600 w-96 space-x-3 px-5 py-3 rounded flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white duration-500">
                            <font-awesome-icon :icon="['fab', 'linkedin']"/>
                            <span>Login with Linkedin</span>
                        </li>
                    </a>
                </ul>
            </div>

            <div class="sign_up_link space-x-1">
                <span class="text-sm font-light">Don't have an account?</span> <nuxt-link class="text-blue-900 hover:text-blue-700 text-sm font-light hover:underline" to="/signup">Sign up</nuxt-link>
            </div>
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
