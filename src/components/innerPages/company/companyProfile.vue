<template fill-height>
    <div class="mt-3">
        <v-layout justify-center row>
            <v-flex xs11 md10 v-bind:class="{white: $vuetify.breakpoint.mdAndUp}" class=" elevation-3">
                <!-- Navbar component here -->
                <Navbar/>
                <v-layout row align-center justify-center fill-height>
                    <v-flex xs10>

                        <About/>
                        <v-divider></v-divider>
                        <MoreInfo/>

                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </div>
</template>
<script>
import Navbar from "./navbar";
import About from "./about";
import MoreInfo from "./moreInfo";
export default {
  components: {
    About,
    Navbar,
    MoreInfo
  }
};
</script>
