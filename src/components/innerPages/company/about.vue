<template>
    <div class="mt-3 mb-5">

        <v-card flat class="pa-3">
            <v-layout align-center justify-space-between>
                <v-flex>
                    <v-layout row>
                        <v-avatar class="mt-3 ">
                            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John ">
                        </v-avatar>
                        <div class="display-1 mt-3 ml-4 grey--text text--darken-1"> TCS </div>
                    </v-layout>
                </v-flex>
                <v-flex class="text-xs-right">
                    <v-btn large color="primary" style="cursor: pointer">Visit company</v-btn>
                </v-flex>
            </v-layout>
        </v-card>
        <v-card flat class="text-xs-center">
            <div class="display-1 font-weight-regular"> About us</div>
            <div class="my-3 subheading font-weight-medium grey--text text--darken-5">What is TCS?</div>
        </v-card>
        <v-layout row align-center justify-center fill-height>
            <v-flex xs6>
                <div> At tcs, we're building the infrastructure of the future. We're making it easy for startups to deploy their dApps in no-time. Work with the latest technologies and push yourself into new area’s of expertise. Join us in the open market of blockchain, where the sky is the limit.
                    <span class="blue--text">read more...</span>
                </div>
            </v-flex>
        </v-layout>
    </div>
</template>
