 <template>
  <div class="white" :class="{'px-5': $vuetify.breakpoint.mdAndUp}">

    <v-toolbar :height="56" flat :ripple="false" color="white " :class="{'pl-5': $vuetify.breakpoint.mdAndUp}">

      <v-toolbar-title class="blue--text pt-3" :class="{'ml-5': $vuetify.breakpoint.mdAndUp}">
        <router-link color="primary--text" to="/" style="text-decoration:none" exact> <img src="./../../assets/images/outer-img/favicon-32x32.png" alt="" srcset=""> </router-link>
      </v-toolbar-title>
      <v-toolbar-title class="black--tex ml-4 pt-3" v-if="$vuetify.breakpoint.mdAndUp" style="height: 55px" :class="{'border-bott': isHome}">
        <router-link color="primary--text" to="/" class="caption pc_nav" style="text-decoration:none;" exact> HOME </router-link>
      </v-toolbar-title>
      <v-toolbar-title class="black--tex ml-4 pt-3" v-if="$vuetify.breakpoint.mdAndUp" style="height: 55px" :class="{'border-bott': isProfile}">
        <router-link color="primary--text" to="/profile" class="caption pc_nav" style="text-decoration:none;" exact> PROFILE </router-link>
      </v-toolbar-title>
      <v-toolbar-title class="black--text ml-4 pt-3" v-if="$vuetify.breakpoint.mdAndUp" style="height: 55px" :class="{'border-bott': isJob}">
        <router-link color="primary--text" to="/jobs" class="caption" style="text-decoration:none" exact> JOBS </router-link>
      </v-toolbar-title>
      <v-toolbar-title class="black--text ml-4 pt-3" v-if="$vuetify.breakpoint.mdAndUp" style="height: 55px" :class="{'border-bott': isCompany}">
        <router-link color="primary--text" to="/company" class="caption" style="text-decoration:none" exact> COMPANIES </router-link>
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

        <v-toolbar-side-icon @click="toggleDrawer" v-if=" $vuetify.breakpoint.smAndDown"></v-toolbar-side-icon>

        <span class="pt-3 mr-4" v-if=" $vuetify.breakpoint.mdAndUp">
          <div class="">
            <v-menu absolute offset-y>
              <v-avatar size="34" tile slot="activator">
                <img src="https://cdn.vuetifyjs.com/images/john.jpg " alt="John ">
              </v-avatar>
              <v-list class="py-0 px-0">
                <v-list-tile :to="{path:'/edit/profile'}">
                  <v-list-tile-avatar class="pr-2">
                    <v-icon>person</v-icon>
                  </v-list-tile-avatar>
                  Profile
                </v-list-tile>
                <v-list-tile :to="{path:'/edit/profile'}">
                  <v-list-tile-avatar class="pr-2">
                    <v-icon>person</v-icon>
                  </v-list-tile-avatar>
                  Help
                </v-list-tile>
                <v-divider></v-divider>
                <v-list-tile class="red--text text--accent-2" @click="logout()">
                  <v-list-tile-avatar class="pr-2">
                    <v-icon color="red accent-2">power_settings_new</v-icon>
                  </v-list-tile-avatar>
                  Logout
                </v-list-tile>
              </v-list>
            </v-menu>
          </div>
        </span>
      </v-toolbar-items>
    </v-toolbar>
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
      drawerState: false,
      isHome: false,
      isProfile: false,
      isJob: false,
      isCompany: false,
      showLogInBtn: true,
      showSignUpBtn: true,

      items: [{ title: 'Help' }, { title: 'Log Out' }],
    };
  },
  created() {
    // console.log(this.$route.path);
    switch (this.$route.path) {
      case '/':
        this.isHome = true;
        break;
      case '/company':
        this.isCompany = true;
        break;
      case '/jobs':
        this.isJob = true;
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
  methods: {
    toggleDrawer() {
      this.drawerState = !this.drawerState;
      this.$emit('toggleDrawerValue', this.drawerState);
    },
  },
};
</script>