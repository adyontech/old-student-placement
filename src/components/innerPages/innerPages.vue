<template>
    <v-app>
        <div class="green">
            <navbar></navbar>
            <router-view></router-view>
            <footers></footers>
        </div>
    </v-app>
</template>

<script>
import navbar from '../shared/navbar.vue';
import footers from '../shared/footer.vue';
export default {
  components: {
    navbar: navbar,
    footers: footers,
  },
};
</script>
