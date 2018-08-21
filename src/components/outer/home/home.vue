<template>
  <div style="overflow-x:hidden">
    <navbar></navbar>
    <outerFooter></outerFooter>
  </div>
</template>

<script>
import navbar from './../../shared/outerNavbar.vue';
import outerFooter from './../../shared/outerFooter.vue';
export default {
  components: {
    navbar: navbar,
    outerFooter: outerFooter,
  },
};
</script>

<style scoped>
.display-1,
.title,
.headline {
  font-family: Montserrat !important;
}
.transBack,
.transBack1,
.transBack2 {
  position: relative;
}
.transBack::before,
.transBack1::before,
.transBack2::before {
  content: '';
  position: absolute;
  width: 200%;
  height: 200%;
  top: -20%;
  left: -50%;
  transform: rotate(5deg);
  background: #f5f5f5;
  z-index: -1;
}
.transBack1::before {
  height: 96%;
}
.transBack2::before {
  height: 100%;
  top: 0;
  transform: rotate(-5deg);
}
</style>
