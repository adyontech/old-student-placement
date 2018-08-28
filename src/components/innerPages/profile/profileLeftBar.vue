<template>
    <v-card>
        <v-navigation-drawer width="100%" height="550px" permanent>
            <v-toolbar flat class="transparent">
                <v-list class="pa-0">
                    <v-list-tile avatar>
                        <v-list-tile-avatar size="34">
                            <img src="http://www.srmuniv.ac.in/sites/all/themes/srmuniversity/main_layout/images/logo.png" alt="John ">
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-layout class="pt-0" row>
                                <v-list-tile-title class="mt-3">Edit Profile</v-list-tile-title>

                            </v-layout>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-toolbar>

            <v-list class="pt-0" dense>
                <v-divider></v-divider>

                <v-list-tile v-for="(item, index) in anchorTagLink" :key="index">
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                        <v-list-tile-title>{{item.title}}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </v-card>
</template>
<script>
export default {
  data: () => ({
    items: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' },
    ],
    anchorTagLink: [
      {
        title: 'asd',
        link: 'das',
      },
      {
        title: 'asd',
        link: 'das',
      },
      {
        title: 'asd',
        link: 'das',
      },
      {
        title: 'asd',
        link: 'das',
      },
      {
        title: 'asd',
        link: 'das',
      },
      {
        title: 'asd',
        link: 'das',
      },
    ],
    itemss: [
      { title: 'Home', icon: 'dashboard' },
      { title: 'About', icon: 'question_answer' },
    ],
    right: null,
  }),
};
</script>