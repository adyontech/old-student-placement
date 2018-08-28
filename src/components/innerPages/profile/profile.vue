<template>
    <div class="mt-3">
        <v-layout justify-center>
            <v-flex xs11 md10 class="white pb-5 elevation-3">
                <!-- align-center justify-center -->
                <v-layout row fill-height>
                    <v-flex xs12 md3 class="green">
                        <profileLeftBar/>
                    </v-flex>
                    <v-flex xs12 md9 class="green">
                        <headerCard/>
                        <aboutCard />
                    </v-flex>
                </v-layout>
            </v-flex>

        </v-layout>
    </div>
</template>
<script>
import headerCard from './headerCard';
import profileLeftBar from './profileLeftBar';
import aboutCard from './aboutCard';
export default {
  components: {
    profileLeftBar,
    headerCard,
    aboutCard,
  },
};
</script>

