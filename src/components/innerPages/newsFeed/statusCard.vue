<template>
    <div>
        <div>
            <v-card flat>
                <v-layout row wrap class="text-xs-left grey--text text--darken-2 py-3 px-4">

                    <div class="title">Today</div>
                    <v-spacer></v-spacer>
                    <div class="caption">10/04/2018</div>
                </v-layout>
                <v-divider></v-divider>
            </v-card>
            <div class="mt-3 text-xs-left" v-for="(i) in 3" :key="i">
                <v-card flat class="mx-3 px-2  grey lighten-3">
                    <v-layout row wrap>
                        <v-icon small> work</v-icon>
                        <div class="subheading ml-3 blue--text">Morgan delight</div>
                    </v-layout>
                    <v-layout row wrap class="ml-3">
                        <!-- <v-icon small> work</v-icon> -->
                        <div class="body-1 ml-3">software developer</div>
                    </v-layout>
                </v-card>
            </div>
        </div>
        <v-divider class="mt-3"></v-divider>
        <div>
            <v-card flat>
                <v-layout row wrap class="text-xs-left grey--text text--darken-2 py-3 px-4">
                    <v-layout column wrap>

                        <div class="title">Applied</div>
                        <div class="caption mt-2">Sort By Last Applied</div>
                    </v-layout>
                    <v-spacer></v-spacer>
                    <div class="caption blue--text">See All</div>
                </v-layout>
                <v-divider></v-divider>
            </v-card>
            <div class="mt-3 text-xs-left" v-for="(i) in 3" :key="i">
                <v-card flat class="mx-3 px-2  grey lighten-3">
                    <v-layout row wrap>
                        <v-icon small> work</v-icon>
                        <div class="subheading ml-3 blue--text">Morgan delight</div>
                    </v-layout>
                    <v-layout row wrap class="ml-3">
                        <!-- <v-icon small> work</v-icon> -->
                        <div class="body-1 ml-3">software developer</div>
                    </v-layout>
                </v-card>
            </div>
        </div>
    </div>
</template>
