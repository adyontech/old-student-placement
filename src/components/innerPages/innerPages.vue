<template>
    <v-app>
        <div class="green">
            <navbar></navbar>
            <router-view></router-view>
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
