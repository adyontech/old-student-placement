<template>
    <div class="mt-3">
        <v-layout justify-center>
            <v-flex xs11 md10 v-bind:class="{white: $vuetify.breakpoint.mdAndUp}" class="pb-5 px-5 elevation-3">
                <v-card flat>
                    <v-layout column class="pt-2  mt-5 white">
                        <v-layout row wrap>
                            <div class="headline">Cloud Expert Microsoft</div>
                            <v-spacer></v-spacer>
                            <div>
                                <v-icon>bookmark</v-icon>
                            </div>
                        </v-layout>
                        <v-layout row>
                            <v-avatar class="mt-3 ">
                                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John ">
                            </v-avatar>
                            <div class="text-xs-left">
                                <div class="title mt-3 ml-4 grey--text text--darken-1"> TCS PvT LTD</div>
                                <div class="body-2 ml-4 mt-1 grey--text text--darken-1"> Chennai (+2 other)</div>
                            </div>
                        </v-layout>
                    </v-layout>
                    <v-card flat class="mt-2 grey--text text--darken-5 text-xs-left">
                        <div class="subheading">You've applied for the company.</div>
                        <div class="body-2">2-Nov-2018.</div>
                    </v-card>
                    <v-card flat class="my-2 grey lighten-3">
                        <v-divider></v-divider>
                        <v-btn depressed ripple color="success" flat>process going on</v-btn>
                        <v-divider></v-divider>
                    </v-card>
                    <v-divider></v-divider>
                    <v-card flat class="font-weight-medium title black--text text-xs-left mt-3">
                        Round details and venue.
                    </v-card>
                    <v-card class="mt-4 pa-3 elevation-3  text-xs-left">
                        <v-chip small color="green" text-color="white">Cleared</v-chip>
                        <div class="font-weight-medium headline black--text">Company Screening</div>
                        <div class="subheading my-2 font-weight-thin"> Date of round - 10-21-8787</div>
                        <div class="subheading my-2 font-weight-thin"> Reporting Time - 10:30 AM</div>
                        <div class="subheading font-weight-thin">Venue - TP Ganeshan Auditorium.</div>
                        <v-divider></v-divider>
                        <div class="title my-2 font-weight-medium">Description</div>
                        <div class="body-2 font-weight-thin">The following round is for Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blahBlah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blahBlah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blahBlah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blahBlah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah</div>
                        <v-divider class="my-2"></v-divider>
                        <v-layout row wrap>
                            <div class="body-2 font-weight-regular">Total Applied - 1234</div>
                            <div class="body-2 ml-3 font-weight-regular">Total Selected - 1000</div>
                        </v-layout>
                    </v-card>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>



<script>
export default {
  data: () => ({
    roundData: [
      {
        roundName: './../../../../assets/images/outer-img/favicon-32x32.png',
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
  }),
};
</script>