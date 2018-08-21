<template>
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
