<template fill-height>
    <div class="mt-3">
        <v-layout justify-center row>
            <v-flex xs11 fill-height md10 v-bind:class="{white: $vuetify.breakpoint.mdAndUp}" class=" elevation-3">
                <!-- Navbar component here -->
                <Navbar/>
                <v-layout row align-center justify-center fill-height>
                    <v-flex xs10>

                        <About/>
                        <v-divider class="my-4"></v-divider>
                        <MoreInfo/>
                        <v-divider class="my-4"></v-divider>
                        <Jobs/>
                        <v-divider class="my-4"></v-divider>
                        <Info/>
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
import Jobs from "./jobs";
import Info from "./info";
export default {
  components: {
    About,
    Navbar,
    MoreInfo,
    Jobs,
    Info
  }
};
</script>
