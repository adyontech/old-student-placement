<template>
    <!-- <v-card class="grey lighten-5" flat>
                            <v-btn largre outline> Star Editing profile.</v-btn>
                        </v-card> -->
    <v-card class=" pt-4">
        <v-layout>
            <v-flex xs4>
                <v-card flat>
                    <img style="height:205px" src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John ">
                    <v-btn class="ml-3" outline large width="100%">Edit Photo</v-btn>
                </v-card>
            </v-flex>
            <v-flex xs8 text-xs-center class="pr-3">
                <v-card class="px-4 py-2">
                    <v-layout row>
                        <div class="title font-weight-light">Profile </div>
                        <v-spacer></v-spacer>
                        <v-icon>edit</v-icon>
                    </v-layout>
                </v-card>
                <v-card flat class="mt-2">
                    <div class="headline">JPG Paradise</div>
                    <v-layout class="pt-0" row justify-center>
                        <v-subheader>Mba</v-subheader>
                        <v-subheader>Communication electrical and engineering</v-subheader>
                    </v-layout>
                    <v-layout class="pt-0" row justify-center>
                        <v-subheader class="body-2">Department of computer science and engineering.</v-subheader>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </v-card>
</template>
