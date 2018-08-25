<template fillHeight >
    <div class="mt-3">
        <v-layout justify-center>
            <v-flex xs11 md10 v-bind:class="{white: $vuetify.breakpoint.mdAndUp}">

                <v-layout align-center justify-center class="pt-2 mt-5 white">
                    <v-flex xs10 md8 class="white" align-content-start text-xs-left>
                        <v-layout>
                            <v-flex xs10>
                                <v-layout class="mx-3" align-start justify-start row wrap fill-height>
                                    <v-flex>
                                        <v-chip outline label color="grey lighten-3" text-color="black">#Star </v-chip>
                                    </v-flex>
                                    <v-flex>
                                        <v-chip outline label color="grey lighten-3" text-color="black">#Jaipur
                                            <v-icon right>clear</v-icon>
                                        </v-chip>
                                    </v-flex>
                                    <v-flex>
                                        <v-chip outline label color="grey lighten-3" text-color="black">#Chenai
                                            <v-icon right>clear</v-icon>
                                        </v-chip>
                                    </v-flex>
                                    <v-flex>
                                        <v-chip outline label color="grey lighten-3" text-color="black">#Start-up
                                            <v-icon right>clear</v-icon>
                                        </v-chip>
                                    </v-flex>
                                    <v-flex>
                                        <v-chip outline label color="grey lighten-3" text-color="black">#78k-87k
                                            <v-icon right>clear</v-icon>
                                        </v-chip>
                                    </v-flex>
                                    <v-flex>
                                        <v-chip outline label color="grey lighten-3" text-color="black">#Star
                                            <v-icon right>clear</v-icon>
                                        </v-chip>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                            <v-flex xs2 mt-0>
                                <v-btn outline>Search</v-btn>
                            </v-flex>
                        </v-layout>
                        <div class=" grey lighten-3 pt-3">
                            <v-layout>
                                <v-flex xs12 row class="mb-0">
                                    <v-text-field hide-details class="mx-3" flat label="Search" prepend-inner-icon="search" outline></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout class="mx-3 mb-3 mt-0">
                                <v-flex mt-3>
                                    <v-checkbox class="mt-1" :label="`Stared`" v-model="checkbox"></v-checkbox>
                                </v-flex>
                                <v-flex> Type
                                    <v-icon slot="activator" color="primary" class="mt-3 ml-2">
                                        keyboard_arrow_down
                                    </v-icon>
                                </v-flex>
                                <v-flex>Location
                                    <v-icon slot="activator" color="primary" class="mt-3 ml-2">
                                        keyboard_arrow_down
                                    </v-icon>
                                </v-flex>
                                <v-flex>Market
                                    <v-icon slot="activator" color="primary" class="mt-3 ml-2">
                                        keyboard_arrow_down
                                    </v-icon>
                                </v-flex>

                                <v-flex>Range
                                    <v-icon slot="activator" color="primary" class="mt-3 ml-2">
                                        keyboard_arrow_down
                                    </v-icon>
                                </v-flex>
                            </v-layout>
                        </div>
                    </v-flex>

                </v-layout>
                <!-- <v-layout align-center wrap row class="mt-3 pt-2 py-2 px-5">
                    <v-flex xs6 sm5 md3 px-1 text-xs-left>
                        <div class="body-1 ml-3">Type</div>
                        <v-overflow-btn :items="dropdown_type" label="Editable Btn" editable item-value="text"></v-overflow-btn>
                    </v-flex>
                    <v-flex xs6 sm5 md3 px-1 text-xs-left>
                        <div class="body-1 ml-3">Location</div>
                        <v-overflow-btn :items="dropdown_edit" label="Editable Btn" editable item-value="text"></v-overflow-btn>
                    </v-flex>
                    <v-flex xs6 sm5 md3 px-1 text-xs-left>
                        <div class="body-1 ml-3">Market</div>
                        <v-overflow-btn :items="dropdown_edit" label="Editable Btn" editable item-value="text"></v-overflow-btn>
                    </v-flex>
                    <v-flex xs6 sm5 md3 text-xs-left px-5>
                        <div class="body-1 ml-3">Range</div>
                        <div class="body-1 ml-3">
                            {{range[0] }}K- {{range[1]}}K
                        </div>
                        <v-range-slider class="pt-4" v-model="range" :max="max" :min="min"></v-range-slider>
                    </v-flex>
                </v-layout> -->
                <v-card flat class="mdscreen mt-3 px-5" v-if="$vuetify.breakpoint.mdAndUp">
                    <v-layout class="layout pt-4 pb-3 grey lighten-3">
                        <v-flex column>
                            <v-layout row>
                                <v-flex md3 class=pl-1>
                                    <div class="subheading">Company </div>
                                </v-flex>
                                <v-flex md3>
                                    <div class="subheading">Location </div>
                                </v-flex>
                                <v-flex md2>
                                    <div class="subheading">Market </div>
                                </v-flex>
                                <v-flex md2>
                                    <div class="subheading">Type </div>
                                </v-flex>
                                <v-flex md2>
                                    <div class="subheading">Avg Salary</div>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                    <v-layout class="pt-2" style="border: 1px solid #eeeeee">
                        <v-flex column>
                            <v-layout class="my-4" style="border-bottom: 1px solid #383838  " row v-for="(item, index) in companyData" :key="index">
                                <v-flex class="d-flex" md3 text-xs-left>
                                    <div class="ml-3">
                                        <img class="text-xs-right" style="height:25px; width:25px" src="./../../../assets/images/outer-img/favicon-32x32.png" alt="" srcset="">
                                    </div>
                                    <div class="body-1 text-xs-left">{{item.companyName}} </div>
                                </v-flex>
                                <v-flex md3>
                                    <div class="body-1">{{item.location}} </div>
                                </v-flex>
                                <v-flex md2>
                                    <div class="body-1">{{item.market}}</div>
                                </v-flex>
                                <v-flex md2>
                                    <div class="body-1">{{item.type}}</div>
                                </v-flex>
                                <v-flex class="d-flex" md2>
                                    <div class="body-1 text-xs-right">{{item.avgSalary}}</div>
                                    <v-icon class="pb-3">star</v-icon>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                </v-card>

                <v-card flat class="smscreen mt-3" v-if="$vuetify.breakpoint.smAndDown">
                    <v-layout fill-height row v-for="(item, index) in companyData" :key="index" style="border-bottom: 1px solid #383838">
                        <v-flex sm12>
                            <!-- top header of card -->
                            <div class="company grey lighten-2 py-3">
                                <v-layout row>
                                    <v-flex xs3>
                                        <img class="text-xs-right" style="max-height:37px; max-width:37px" src="./../../../assets/images/outer-img/favicon-32x32.png" alt="" srcset="">
                                    </v-flex>
                                    <v-flex xs7 offset-xs1 class="mt-2">
                                        <v-layout row>
                                            <div class="body-2 font-weight-regular">{{item.companyName}} </div>
                                            <v-spacer></v-spacer>
                                            <v-icon>star</v-icon>
                                            <v-icon>star</v-icon>

                                        </v-layout>
                                    </v-flex>
                                </v-layout>
                            </div>
                            <!-- body of card -->
                            <div class="company white pt-1">
                                <v-container>
                                    <v-layout row class="pb-2">
                                        <div class="ml-2 grey--text text--darken-1">Market</div>
                                        <v-spacer></v-spacer>
                                        <div class="mr-3  grey--text text--darken-3">{{item.market}}</div>
                                    </v-layout>
                                    <v-layout row class="pb-2">
                                        <div class="ml-2 grey--text text--darken-1">Location</div>
                                        <v-spacer></v-spacer>
                                        <div class="mr-3  grey--text text--darken-3">{{item.location}}</div>
                                    </v-layout>
                                    <v-layout row class="pb-2">
                                        <div class="ml-2 grey--text text--darken-1">Type</div>
                                        <v-spacer></v-spacer>
                                        <div class="mr-3  grey--text text--darken-3">{{item.type}}</div>
                                    </v-layout>
                                    <v-layout row class="pb-2">
                                        <div class="ml-2 grey--text text--darken-1">avgSalary</div>
                                        <v-spacer></v-spacer>
                                        <div class="mr-3  grey--text text--darken-3">{{item.avgSalary}}</div>
                                    </v-layout>
                                </v-container>
                            </div>
                        </v-flex>
                    </v-layout>
                </v-card>

                <v-card flat class="py-1">
                    Load More
                </v-card>

            </v-flex>
        </v-layout>
    </div>
</template>

<style>
</style>
<script>
export default {
  data: () => ({
    checkbox: true,
    companyData: [
      {
        logoImg: './../../../assets/images/outer-img/favicon-32x32.png',
        companyName: 'BeeOcean',
        location: 'jaipur, chennai',
        market: 'Gst',
        avgSalary: '45K-60k',
        type: 'Start-up',
        star: false,
      },
      {
        logoImg: './../../../assets/images/outer-img/favicon-32x32.png',
        companyName: 'Skylim',
        location: 'jaipur, chennai',
        market: 'saas',
        avgSalary: '90K-120k',
        type: 'GLobalcompany',
        star: true,
      },
      {
        logoImg: './../../../assets/images/outer-img/favicon-32x32.png',
        companyName: 'Aerodite',
        location: 'jaipur, chennai',
        market: 'Airplane',
        avgSalary: '150k-160k',
        type: 'Vc firm',
        star: true,
      },
      {
        logoImg: './../../../assets/images/outer-img/favicon-32x32.png',
        companyName: 'commutauts',
        location: 'jaipur, chennai',
        market: 'web',
        avgSalary: '20k-30k',
        type: 'Incubators',
        star: false,
      },
      {
        logoImg: './../../../assets/images/outer-img/favicon-32x32.png',
        companyName: 'Hamppys',
        location: 'jaipur, chennai',
        market: 'Gst',
        avgSalary: '45K-60k',
        type: 'saas',
        star: true,
      },
      {
        logoImg: './../../../assets/images/outer-img/favicon-32x32.png',
        companyName: 'Nansei',
        location: 'jaipur, chennai',
        market: 'Gst',
        avgSalary: '45K-60k',
        type: 'Private company',
        star: false,
      },
    ],
    dropdown_type: [
      { text: 'Start-up', callback: () => console.log('list') },
      { text: 'VC Firm', callback: () => console.log('list') },
      { text: 'Incubators', callback: () => console.log('list') },
      { text: 'Private company' },
      { text: 'SaaS' },
      { text: 'Others' },
    ],
    dropdown_edit: [
      { text: 'Start-up', callback: () => console.log('list') },
      { text: 'VC Firm', callback: () => console.log('list') },
      { text: 'Incubators', callback: () => console.log('list') },
      { text: 'Private company' },
      { text: 'SaaS' },
      { text: 'Others' },
    ],
    listTypeModel: 'all',
    slider: 45,
    volume: 10,
    price: [110, 440],
    min: 5000000,
    max: 9000000,
    range: [500, 700],
  }),
  methods: {
    setFilterType: value => {
      this.listTypeModel = value;
    },
  },
};
</script>
