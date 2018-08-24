<template fillHeight >
    <div>
        <v-layout justify-center>
            <v-flex xs12 md10 class="pink">

                <v-layout justify-center class="mt-5">
                    <v-flex xs12 md10 class="white" align-content-start text-sm-left>
                        <v-menu offset-y class="ml-3 mb-2">
                            <v-btn slot="activator" color="primary" dark>
                                List by
                            </v-btn>
                            <v-list>
                                <v-list-tile v-on:click="setFilterType('all')">
                                    All
                                </v-list-tile>
                                <v-list-tile v-on:click="setFilterType('stared')">
                                    Started
                                </v-list-tile>
                            </v-list>
                        </v-menu>
                        <div class="body-1 ml-3">Searching for {{listTypeModel}} companies</div>
                        <v-text-field class="mx-3" flat label="Search" prepend-inner-icon="search" outline></v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout align-center wrap row class="mt-3  px-5">
                    <v-flex xs6 sm5 md3 px-1 text-sm-left>
                        <div class="body-1 ml-3">Type</div>
                        <v-overflow-btn :items="dropdown_type" label="Editable Btn" editable item-value="text"></v-overflow-btn>
                    </v-flex>
                    <v-flex xs6 sm5 md3 px-1 text-sm-left>
                        <div class="body-1 ml-3">Location</div>
                        <v-overflow-btn :items="dropdown_edit" label="Editable Btn" editable item-value="text"></v-overflow-btn>
                    </v-flex>
                    <v-flex xs6 sm5 md3 px-1 text-sm-left>
                        <div class="body-1 ml-3">Market</div>
                        <v-overflow-btn :items="dropdown_edit" label="Editable Btn" editable item-value="text"></v-overflow-btn>
                    </v-flex>
                    <v-flex xs6 sm5 md3 text-sm-left px-5>
                        <div class="body-1 ml-3">Range</div>
                        <div class="body-1 ml-3">
                            {{range[0] }}K- {{range[1]}}K
                        </div>
                        <v-range-slider class="pt-4" v-model="range" :max="max" :min="min"></v-range-slider>
                    </v-flex>
                </v-layout>
                <div class="mdscreen mt-3 px-5">
                    <v-layout>
                        <v-flex column>
                            <v-layout row>
                                <v-flex md3>
                                    <div class="title">Company </div>
                                    <v-flex md3>
                                        <div class="title">Location </div>
                                    </v-flex>
                                    <v-flex md2>
                                    </v-flex>
                                    <v-flex md2>
                                        <div class="title">Type </div>
                                    </v-flex>
                                    <div class="title">Market </div>
                                </v-flex>
                                <v-flex md2>
                                    <div class="title">Avg Salary</div>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                    <v-layout class="mt-3">
                        <v-flex column>
                            <v-layout class="my-4" style="border-bottom: 1px solid #383838  " row v-for="(item, index) in companyData" :key="index">
                                <v-flex class="d-flex" md3 text-xs-left>
                                    <div class="ml-3">
                                        <img class="text-sm-right" style="height:25px; width:25px" src="./../../../assets/images/outer-img/favicon-32x32.png" alt="" srcset="">
                                    </div>
                                    <div class="body-1 text-sm-left">{{item.companyName}} </div>
                                </v-flex>
                                <v-flex md3>
                                    <div class="body-1">{{item.location}} </div>
                                </v-flex>
                                <v-flex md2>
                                    <div class="body-1">{{item.market}}</div>
                                </v-flex>
                                <v-flex md2>
                                    <div class="body-1">{{item.market}}</div>
                                </v-flex>
                                <v-flex class="d-flex" md2>
                                    <div class="body-1 text-xs-right">{{item.avgSalary}}</div>
                                    <v-icon class="pb-3">star</v-icon>
                                </v-flex>
                                <!-- <v-flex md2>
                                    <v-icon>star</v-icon>
                                    <v-icon>star</v-icon>
                                </v-flex> -->
                            </v-layout>
                        </v-flex>
                    </v-layout>
                </div>

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
    companyData: [
      {
        logoImg: './../../../assets/images/outer-img/favicon-32x32.png',
        companyName: 'BeeOcean',
        location: 'jaipur, chennai',
        market: 'Gst',
        avgSalary: '45K-60k',
      },
      {
        logoImg: './../../../assets/images/outer-img/favicon-32x32.png',
        companyName: 'Skylim',
        location: 'jaipur, chennai',
        market: 'saas',
        avgSalary: '90K-120k',
      },
      {
        logoImg: './../../../assets/images/outer-img/favicon-32x32.png',
        companyName: 'Aerodite',
        location: 'jaipur, chennai',
        market: 'Airplane',
        avgSalary: '150k-160k',
      },
      {
        logoImg: './../../../assets/images/outer-img/favicon-32x32.png',
        companyName: 'commutauts',
        location: 'jaipur, chennai',
        market: 'web',
        avgSalary: '20k-30k',
      },
      {
        logoImg: './../../../assets/images/outer-img/favicon-32x32.png',
        companyName: 'BeeOcean',
        location: 'jaipur, chennai',
        market: 'Gst',
        avgSalary: '45K-60k',
      },
      {
        logoImg: './../../../assets/images/outer-img/favicon-32x32.png',
        companyName: 'BeeOcean',
        location: 'jaipur, chennai',
        market: 'Gst',
        avgSalary: '45K-60k',
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
