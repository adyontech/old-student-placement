<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Montserrat, 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.headline,
.title,
.subheading,
.display-1 {
  font-family: Montserrat !important;
}
</style>

<script>
import axios from 'axios';

export default {
  name: 'app',
  // beforeCreate() {
  //   let token = this.$store.getters.getToken;
  //   if (this.$store.getters.isTokenExists) {
  //     //if token
  //     let getURL = `${
  //       this.$store.getters.getBaseURL
  //     }/api/token/check?token=${token}`;
  //     axios.get(getURL).then(response => {
  //       console.log(response);
  //       if (!response.data.success) {
  //         this.$store.commit('removeTokenForUser');
  //         this.$store.commit('denyTokenValidity');
  //       } else {
  //         this.$store.commit('regainTokenValidity');
  //       }
  //     });
  //   }
  // },
  // Made this code for testing api calls to handle http error code before axios get called.
  // created: function() {
  //   axios.interceptors.response.use(undefined, function(err) {
  //     return new Promise(function(resolve, reject) {
  //       console.log(err);
  //       if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
  //         // if you ever get an unauthorized, logout the user
  //         this.$store.removeTokenForUser;
  //         this.$router.push('/');
  //         // you can also redirect to /login if needed !
  //       }
  //       throw err;
  //     });
  //   });
  // },
};
</script>
