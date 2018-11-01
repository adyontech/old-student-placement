<template>
    <div class="mt-3">
        <v-layout justify-center>
            <v-flex xs11 md10 v-bind:class="{white: $vuetify.breakpoint.mdAndUp}" class="pb-5 elevation-3">
                <v-layout align-center justify-center class="pt-2  mt-5 white">
                    <v-flex xs10 md8 class="white" align-content-start text-xs-left>
                        <v-layout>
                            <v-flex xs12 row class="mb-0">
                                <v-text-field hide-details class="mx-3" flat label="Search" prepend-inner-icon="search" outline></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout align-center justify-end row fill-height>

                            <v-flex xs2 mt-0>
                                <v-btn outline>Search</v-btn>
                            </v-flex>
                        </v-layout>

                    </v-flex>
                </v-layout>
                <v-card flat class="mdscreen mt-3 px-5" v-if="$vuetify.breakpoint.mdAndUp">
                    <v-layout class="layout pt-4 pb-3 grey lighten-3 elevation-3">
                        <v-flex column>
                            <v-layout row>
                                <v-flex md3 class=pl-1>
                                    <div class="subheading">Job </div>
                                </v-flex>
                                <v-flex md3>
                                    <div class="subheading">Date </div>
                                </v-flex>
                                <v-flex md2>
                                    <div class="subheading">Company </div>
                                </v-flex>
                                <v-flex md2>
                                    <div class="subheading">Status </div>
                                </v-flex>
                                <!-- <v-flex md2>
                                    <div class="subheading">Avg Salary</div>
                                </v-flex> -->
                            </v-layout>
                        </v-flex>
                    </v-layout>
                    <v-layout class="pt-2">
                        <v-flex column>
                            <v-layout class="my-4" style="border-bottom: 1px solid #383838  " row v-for="(item, index) in companyData" :key="index">
                                <v-flex class="d-flex" md3 offset-md1 text-xs-left>
                                    <div class="ml-3">
                                        <img class="text-xs-right" style="height:25px; width:25px" src="./../../../../assets/images/outer-img/favicon-32x32.png" alt="" srcset="">
                                    </div>
                                    <router-link class="mx-3 body-2 blue--text" style="text-decoration: none; " to="applied/124">
                                        <div class="body-1">{{item.job}}</div>
                                    </router-link>
                                </v-flex>
                                <v-flex md3>
                                    <div class="body-1">{{item.location}} </div>
                                </v-flex>
                                <v-flex md2>
                                    <div class="body-1 text-xs-left">{{item.companyName}} </div>
                                </v-flex>
                                <v-flex md2>
                                    <div class="body-1" v-bind:class="{green: item.status=='Selected', yellow: item.status=='On going', red: item.status=='Not selected', }">{{item.status}}</div>
                                </v-flex>
                                <!-- <v-flex class="d-flex" md2>
                                    <div class="body-1 text-xs-right">{{item.avgSalary}}</div>
                                    <v-icon class="pb-3">star</v-icon>
                                </v-flex> -->
                            </v-layout>
                            <v-divider></v-divider>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>


<script>
export default {
  data: () => ({
    searchTypeCheckbox: false,

    companyData: [
      {
        logoImg: './../../../../assets/images/outer-img/favicon-32x32.png',
        companyName: 'BeeOcean',
        location: 'jaipur, chennai',
        job: 'SDE',
        status: 'Selected',
      },
      {
        logoImg: './../../../../assets/images/outer-img/favicon-32x32.png',
        companyName: 'Skylim',
        location: 'jaipur, chennai',
        job: 'CEO',
        status: 'On going',
      },
      {
        logoImg: './../../../../assets/images/outer-img/favicon-32x32.png',
        companyName: 'Aerodite',
        location: 'jaipur, chennai',
        job: 'driver',
        status: 'On going',
      },
      {
        logoImg: './../../../../assets/images/outer-img/favicon-32x32.png',
        companyName: 'commutauts',
        location: 'jaipur, chennai',
        job: 'manger',
        status: 'Not selected',
      },
      {
        logoImg: './../../../../assets/images/outer-img/favicon-32x32.png',
        companyName: 'Hamppys',
        location: 'jaipur, chennai',
        job: 'Designer',
        status: 'On going',
      },
      {
        logoImg: './../../../../assets/images/outer-img/favicon-32x32.png',
        companyName: 'Nansei',
        location: 'jaipur, chennai',
        job: 'SDE',
        status: 'Not selected',
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
  }),
};
</script>
