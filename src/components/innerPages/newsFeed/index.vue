<template>
    <div class="mt-3">
        <v-layout justify-center>
            <v-flex style="height:200px" xs11 md2 v-bind:class="{white: $vuetify.breakpoint.mdAndUp}" class="pb-5 elevation-3">

                <profileCard/>
            </v-flex>
            <v-flex xs11 md6 v-bind:class="{}" class="">
                <v-layout transition="scale-transition" v-for="i in 1" :key="i" align-center justify-center>
                    <v-flex xs10 md12 align-content-start text-xs-left>
                        <newsFeed/>
                    </v-flex>
                </v-layout>

            </v-flex>
            <v-flex xs11 md3 v-bind:class="{white: $vuetify.breakpoint.mdAndUp}" class="pb-5 elevation-3 ml-4">

                <statusCard/>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import Vue from 'vue';
import profileCard from './profileCard';
import statusCard from './statusCard';
import newsFeed from './newFeed';
export default {
  components: {
    profileCard,
    statusCard,
    newsFeed,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
