<template>
  <div class="px-5 mx-4" style="border-bottom:2px solid black">
    <div class="white">
      <v-toolbar :height="56" flat :ripple="false" color="white " class="pl-5">
        <v-toolbar-title class="blue--text ml-5">
          <router-link color="primary--text" to="/" style="text-decoration:none" exact> <img src="./../../assets/images/outer-img/favicon-32x32.png" alt="" srcset=""> </router-link>
        </v-toolbar-title>
        <v-toolbar-title class="black--tex ml-4 pt-2" style="height: 55px" :class="{'border-bott': isHome}">
          <router-link color="primary--text" to="/" class="caption pc_nav" style="text-decoration:none;" exact> HOME </router-link>
        </v-toolbar-title>
        <v-toolbar-title class="black--tex ml-4 pt-2" style="height: 55px" :class="{'border-bott': isProfile}">
          <router-link color="primary--text" to="/features" class="caption pc_nav" style="text-decoration:none;" exact> PROFILE </router-link>
        </v-toolbar-title>
        <v-toolbar-title class="black--text ml-4 pt-2" style="height: 55px" :class="{'border-bott': isJob}">
          <router-link color="primary--text" to="/pricing" class="caption" style="text-decoration:none" exact> JOBS </router-link>
        </v-toolbar-title>
        <v-toolbar-title class="black--text ml-4 pt-2" style="height: 55px" :class="{'border-bott': isCompany}">
          <router-link color="primary--text" to="/contact" class="caption" style="text-decoration:none" exact> COMPANIES </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="mr-5">
          <span class="pt-3 mr-4">
            <div class="" style="border: 1px solid #d3cfcf">
              <v-badge color="red">
                <span slot="badge">2</span>
                <v-icon medium color="grey">
                  notification_important
                </v-icon>
              </v-badge>
            </div>
          </span>

          <!-- <v-avatar size="34" tile>
                  <img src="https://cdn.vuetifyjs.com/images/john.jpg " alt="John ">
                </v-avatar> -->
          <span class="pt-3 mr-4">
            <div class="">
              <v-menu>
                <v-avatar size="34" tile slot="activator">
                  <img src="https://cdn.vuetifyjs.com/images/john.jpg " alt="John ">
                </v-avatar>
                <v-list>
                  <v-list-tile v-for="(item, index) in items" :key="index">
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>
            </div>
          </span>

        </v-toolbar-items>
      </v-toolbar>
    </div>
  </div>

</template>
<style>
a {
  color: #424242;
}
.border-bott {
  border-bottom: #999999 2px solid !important;
}
.nav-right {
  background-color: #e5e5e5;
}
</style>


<script>
export default {
  data() {
    return {
      isHome: false,
      isProfile: false,
      isJob: false,
      isCompany: false,
      showLogInBtn: true,
      showSignUpBtn: true,

      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    };
  },
  created() {
    console.log(this.$route);
    switch (this.$route.path) {
      case '/':
        this.isHome = true;
        console.log(this.isHome);
        break;

      default:
        break;
    }
    if (this.$route.path === '/auth/login') {
      this.showLogInBtn = false;
    }
    if (this.$route.path === '/auth/signup') {
      this.showSignUpBtn = false;
    }
  },
};
</script>