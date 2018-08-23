<template>
</template>
<style>
</style>
<script>
import { mapMutations, mapActions, mapGetters } from 'vuex';
import store from '@/store/store';
export default {
  methods: {
    ...mapMutations(['removeTokenForUser']),
    logout() {
      this.removeTokenForUser();
      this.$router.push({ path: '/' });
    },
  },
};
</script>
