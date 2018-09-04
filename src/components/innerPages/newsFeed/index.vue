<template>
    <div class="mt-3">
        <v-layout justify-center>
            <v-flex xs11 md2 v-bind:class="{white: $vuetify.breakpoint.mdAndUp}" class="pb-5 elevation-3">

            </v-flex>
            <v-flex xs11 md8 v-bind:class="{white: $vuetify.breakpoint.mdAndUp}" class="pb-5 elevation-3 ml-4">

                <v-layout align-center justify-center class="pt-2  mt-5 white">
                    <v-flex xs10 md8 class="white" align-content-start text-xs-left>
                        <!-- <v-layout>
                            <v-flex xs10>
                                <v-layout class="mx-3" align-start justify-start row wrap fill-height>
                                    <v-flex>
                                        <v-chip outline label color="grey lighten-3" text-color="black">#
                                            <span v-if="!searchTypeCheckbox">All </span>
                                            <span v-if="searchTypeCheckbox">Stared</span>
                                        </v-chip>
                                    </v-flex>
                                    <v-flex>
                                        <v-chip outline label color="grey lighten-3" text-color="black">#{{range[0]}}k-{{range[1]}}k </v-chip>
                                    </v-flex>
                                    <v-flex v-for="(item, i) in filterBarList" :key="i">
                                        <v-chip outline label color="grey lighten-3" text-color="black">#{{item}}
                                            <v-icon small @click="removeFromTopBar(item)" right>clear</v-icon>
                                        </v-chip>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                            <v-flex xs2 mt-0>
                                <v-btn outline>Search</v-btn>
                            </v-flex>
                        </v-layout>
                        <v-layout>
                            <v-flex xs12 row class="mb-0">
                                <v-text-field hide-details class="mx-3" flat label="Search" prepend-inner-icon="search" outline></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout class="mx-3 pl-3 mb-3 mt-0  grey lighten-5">
                            <v-flex mt-3>
                                <v-checkbox class="mt-1" :label="`Stared`" v-model="searchTypeCheckbox"></v-checkbox>
                            </v-flex>
                            <v-flex class="mt-4"> Type
                                <v-menu offset-y :close-on-content-click=false max-width="200">
                                    <v-icon slot="activator" color="primary">
                                        keyboard_arrow_down
                                    </v-icon>
                                    <v-list>
                                        
                                        <v-list-tile v-for="(item, index) in typeItems" :key="index" @click="addToTopBar(item.title)">
                                            <v-list-tile-title> {{ item.title }}</v-list-tile-title>
                                        </v-list-tile>
                                    </v-list>
                                </v-menu>
                            </v-flex>
                            <v-flex class="mt-4">Location
                                <v-menu offset-y :close-on-content-click=false max-width="200">
                                    <v-icon slot="activator" color="primary">
                                        keyboard_arrow_down
                                    </v-icon>
                                    <v-list>
                                        <v-overflow-btn loading icon :items="fullLocationItems" depressed flat @input="addToTopBar" label="Editable Btn" editable item-value="text"></v-overflow-btn>
                                        <v-list-tile v-for="(item, index) in locationItems" :key="index" @click="addToTopBar(item.title)">
                                            <v-list-tile-title> {{ item.title }}</v-list-tile-title>
                                        </v-list-tile>
                                    </v-list>
                                </v-menu>
                            </v-flex>
                            <v-flex>Market
                                <v-icon slot="activator" color="primary" class="mt-3 ml-2">
                                    keyboard_arrow_down
                                </v-icon>
                            </v-flex>

                            <v-flex class="mt-3">
                                Range
                                <v-menu offset-y :close-on-content-click="false">

                                    <v-icon slot="activator" color="primary" class="ml-2">
                                        keyboard_arrow_down
                                    </v-icon>
                                    <v-list>
                                        <v-subheader>{{range[0]}}k-{{range[1]}}k </v-subheader>
                                        <v-list-tile>
                                            <v-list-tile-title>
                                                <v-range-slider v-model="range" :max="max" :min="min"></v-range-slider>
                                            </v-list-tile-title>
                                        </v-list-tile>
                                    </v-list>
                                </v-menu>
                            </v-flex>
                        </v-layout> -->
                    </v-flex>
                </v-layout>
                <v-layout transition="scale-transition" v-for="i in 5" :key="i" align-center justify-center class="pt-2 mt-5 white">
                    <v-flex xs10 md8 class="white" align-content-start text-xs-left>
                        <!-- <v-card>
                            <v-layout @click="togglePanel(i-1)" class="px-4 pt-3 grey lighten-4">
                                <v-flex xs1>
                                    <img src="./../../../assets/images/outer-img/favicon-32x32.png" alt="" srcset="">
                                </v-flex>
                                <v-flex xs10>
                                    <div class="title font-weight-medium">Company name</div>
                                    <div class="subheading font-weight-regular py-1">The dumb description</div>
                                    <v-layout column class="px-4 pb-3" v-if="!panelStateArray[i-1]">

                                        <v-layout row>
                                            <div class="font-weight-bold caption"> Job-1 </div>
                                            <v-spacer></v-spacer>
                                            <div class="font-weight-regular caption"> 425k-654k </div>
                                        </v-layout>
                                        <v-layout row>
                                            <div class="font-weight-bold caption"> Job-2 </div>
                                            <v-spacer></v-spacer>
                                            <div class="font-weight-regular caption"> 425k-654k </div>
                                        </v-layout>
                                        <v-layout row>
                                            <div class="font-weight-bold caption"> Job-3 </div>
                                            <v-spacer></v-spacer>
                                            <div class="font-weight-regular caption"> 425k-654k </div>
                                        </v-layout>

                                    </v-layout>
                                    <v-layout v-if="!panelStateArray[i-1]">
                                        <v-layout row class="pb-4">
                                            <v-flex class="body-2 font-weight-thin">
                                                <v-icon small>alarm</v-icon>
                                                Last date: 21 Aug
                                            </v-flex>
                                            <v-flex class="body-2 font-weight-thin">
                                                <v-icon small> supervisor_account</v-icon> 21 Total Applicants
                                            </v-flex>
                                            <v-flex class="body-2 font-weight-thin">
                                                <v-icon small> work</v-icon>
                                                Total jobs: 5
                                            </v-flex>
                                        </v-layout>
                                    </v-layout>
                                </v-flex>
                            </v-layout>
                        </v-card>
                        <v-slide-y-transition>
                            <v-card class="px-5 py-3" v-if="panelStateArray[i-1]">
                                <v-layout class="px-4 pt-3 grey lighten-4">
                                    <div class="subheading">Jobs:</div>
                                    <v-layout column class="pl-3">
                                        <div v-for="i in 5" :key="i">
                                            <v-layout row>
                                                <div class="subheading blue--text">Job-{{i}}
                                                </div>
                                                <v-spacer></v-spacer>
                                                <div class="green--text">
                                                    Applicable
                                                </div>
                                            </v-layout>
                                            <v-layout class="pl-2 py-1" row justify-start>
                                                <v-flex class="body-2 font-weight-thin">
                                                    <v-icon small>alarm</v-icon>
                                                    Last date: 21 Aug
                                                </v-flex>
                                                <v-flex class="body-2 font-weight-thin">
                                                    <v-icon small> supervisor_account</v-icon> 21 Total Applicants
                                                </v-flex>
                                            </v-layout>
                                            <div class="body-1 pl-3">456k-545k</div>
                                            <div class="body-1 pl-3 py-1">The description</div>
                                        </div>
                                    </v-layout>
                                </v-layout>
                            </v-card>
                        </v-slide-y-transition> -->
                    </v-flex>
                </v-layout>

            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
      searchTypeCheckbox: false,
      panelStateArray: [false, false, false, false, false],
      dropdown_type: [
        { text: "Start-up", callback: () => console.log("list") },
        { text: "VC Firm", callback: () => console.log("list") },
        { text: "Incubators", callback: () => console.log("list") },
        { text: "Private company" },
        { text: "SaaS" },
        { text: "Others" }
      ],
      dropdown_edit: [
        { text: "Start-up", callback: () => console.log("list") },
        { text: "VC Firm", callback: () => console.log("list") },
        { text: "Incubators", callback: () => console.log("list") },
        { text: "Private company" },
        { text: "SaaS" },
        { text: "Others" }
      ],
      listTypeModel: "all",
      typeItems: [
        { title: "Full time" },
        { title: "Internship" },
        { title: "Training program" }
      ],
      locationItems: [
        { title: "Chennai" },
        { title: "Jaipur" },
        { title: "Andhra" }
      ],
      fullLocationItems: [
        { text: "Chennai" },
        { text: "Jaipur" },
        { text: "Andhra" },
        { text: "Chesnnai" },
        { text: "Jaiapur" },
        { text: "Andhara" },
        { text: "Cshennai" },
        { text: "Jsaipur" },
        { text: "Asndhra" }
      ],
      filterBarList: [],
      min: 100,
      max: 200,
      slider: 40,
      range: [100, 200]
    };
  },
  methods: {
    togglePanel(value) {
      var self = this;
      console.log(this.panelStateArray[value]);
      let crr = this.panelStateArray[value];
      Vue.set(self.panelStateArray, value, !crr);
      console.log(this.panelStateArray[value]);
    },
    addToTopBar(val) {
      console.log(val);
      this.filterBarList.push(val);
      this.filterBarList = [...new Set(this.filterBarList)];
    },
    removeFromTopBar(val) {
      console.log(val);
      this.filterBarList.map(el => {
        if (el === val) {
          this.filterBarList.splice(val);
        }
      });
    }
  }
};
</script>
