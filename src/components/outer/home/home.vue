<template>
  <div>
    <navbar></navbar>
    <!-- <outerFooter></outerFooter> -->
  </div>
</template>

<script>
import navbar from './../../shared/navbar.vue';
import outerFooter from './../../shared/outerFooter.vue';
export default {
  components: {
    navbar: navbar,
    outerFooter: outerFooter,
  },
};
</script>

<style scoped>
</style>
