<template>
  <div class="grey lighten-4">
    <v-toolbar :height="75" flat :ripple="false" color="white " class="pl-5 py-3 grey lighten-4">
      <v-toolbar-title class="blue--text ml-5">
        <router-link color="primary--text" to="/" style="text-decoration:none" exact>Skylim Services</router-link>
      </v-toolbar-title>
      <v-toolbar-title class="black--text ml-5">
        <router-link color="primary--text" to="/features" style="text-decoration:none" exact> Features </router-link>
      </v-toolbar-title>
      <v-toolbar-title class="black--text ml-5 font-weight-thin">
        <router-link color="primary--text" to="/pricing" style="text-decoration:none" exact> Pricing </router-link>
      </v-toolbar-title>
      <v-toolbar-title class="black--text ml-5">
        <router-link color="primary--text" to="/contact" style="text-decoration:none" exact> Support </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down mr-5">
        <span class="mt-1 mr-3">
          <v-btn flat outline color="blue" class="white--text mt-2 pa-3 pl-3 pr-3" v-if="!this.$store.getters.isTokenExists && this.showLogInBtn" :ripple="false" :to="{path:'/auth/login'}" exact>Login
          </v-btn>
        </span>
        <span class="mt-1">
          <v-btn color="blue" class="white--text mt-2 pa-3 pl-4 pr-4 elevation-0" v-if="!this.$store.getters.isTokenExists && this.showSignUpBtn" :ripple="false" :to="{path:'/auth/signup'}" exact>Signup
          </v-btn>
        </span>
        <span class="mt-1">
          <v-btn flat outline color="blue" class="white--text mt-2 pa-3 pl-3 pr-3" v-if="this.$store.getters.isTokenExists" :ripple="false" :to="{path:'/dashboard'}" exact>Dashboard
          </v-btn>
        </span>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>
<style>
/* .navBor{
        position: absolute;
        bottom: 0;
        background: blue;
        width: 100%;
        height: 15%;
        border-top-left-radius: 120px;
        border-top-right-radius: 120px;
        border-bottom-left-radius: 120px;
        border-bottom-right-radius: 120px;
    }
    */
/* .btn--active {
  border-bottom-width: 60% !important;
  border-bottom: blue 8px solid;
  font-weight: bold;
  background: white;
}

.btn--active:hover {
  background: #f5f5f5 !important;
}
.btn__content::before {
  background: white !important;
}
.navBtn:hover {
  box-shadow: 0;
} */
a {
  color: #424242;
}
.router-link-exact-active {
  color: #448aff !important;
}
</style>


<script>
export default {
  data() {
    return { showLogInBtn: true, showSignUpBtn: true };
  },
  created() {
    if (this.$route.path === '/auth/login') {
      this.showLogInBtn = false;
    }
    if (this.$route.path === '/auth/signup') {
      this.showSignUpBtn = false;
    }
  },
};
</script>