<template>
    <v-app>
        <div class="grey lighten-4">
            <v-container class="pt-0">
                <navbar></navbar>
                <v-layout justify-center>
                    <v-flex xs12 md10>
                        <router-view></router-view>
                    </v-flex>
                </v-layout>
            </v-container>
        </div>
    </v-app>
</template>

<script>
import navbar from './../shared/navbar.vue';
export default {
  components: {
    navbar: navbar,
  },
};
</script>
