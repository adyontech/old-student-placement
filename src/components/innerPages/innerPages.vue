<template>
    <v-app>
        <div style="background-color: #f2f3f4">
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
