<template>
    <div>
        <v-toolbar :height="45" flat :ripple="false" color="blue white--text" :class="{'': $vuetify.breakpoint.mdAndUp}">

            <v-toolbar-title class="blue--text pt-3" :class="{'ml-5': $vuetify.breakpoint.mdAndUp}">
                <router-link color="blue--text" to="/" style="text-decoration:none" exact>
                    <v-icon class="icons white--text">fab fa-facebook</v-icon>
                </router-link>
                <router-link color="blue--text" to="/" style="text-decoration:none" exact>
                    <v-icon>face</v-icon>
                </router-link>
                <router-link color="blue--text" to="/" style="text-decoration:none" exact>
                    <v-icon>face</v-icon>
                </router-link>
                <router-link color="blue--text" to="/" style="text-decoration:none" exact>
                    <v-icon>face</v-icon>
                </router-link>
                <router-link color="blue--text" to="/" style="text-decoration:none" exact>
                    <v-icon>face</v-icon>
                </router-link>
            </v-toolbar-title>

            <v-spacer></v-spacer>
            <v-toolbar-items class="mr-2">
                <v-btn flat>Home</v-btn>
                <v-btn flat>About</v-btn>
                <v-btn flat>Jobs</v-btn>
                <v-btn flat>Culture</v-btn>
                <v-btn flat>Info</v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script>
import axios from 'axios';
// import footer from './../../footer.vue'

export default {
  components: {},
  data() {
    return {
      icons: ['fab fa-facebook', 'fab fa-twitter', 'fas fa-at', 'fab fa-linkedin'],
    };
  },
};
</script>