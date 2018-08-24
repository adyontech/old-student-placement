<template>
    <v-app>
        <div style="background-color: #f2f3f4">

            <v-navigation-drawer right v-model="drawer" clipped fixed app v-if=" $vuetify.breakpoint.smAndDown">
                <v-toolbar flat>
                    <v-list>
                        <v-list-tile>
                            <v-list-tile-title class="title pl-3">
                                Placement Control
                            </v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-toolbar>
                <v-list text-xs-center>
                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon>home</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-title>Home</v-list-tile-title>
                    </v-list-tile>

                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon>book</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-title>Companies</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon>book</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-title>Jobs</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon>settings</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-title>Profile</v-list-tile-title>
                    </v-list-tile>
                </v-list>
                <v-divider />
                <div text-xs-center>
                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon>help</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-title>Help</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile class="ml-5 pr-2">
                        <v-btn color="info">Log Out</v-btn>
                    </v-list-tile>
                </div>
            </v-navigation-drawer>
            <navbar v-on:toggleDrawerValue="drawerSideToggle($event)"></navbar>
            <router-view></router-view>
            <footers></footers>
        </div>
    </v-app>
</template>

<script>
import navbar from '../shared/navbar.vue';
import footers from '../shared/footer.vue';
export default {
  data: () => ({
    drawer: true,
  }),
  components: {
    navbar: navbar,
    footers: footers,
  },
  methods: {
    drawerSideToggle(value) {
      this.drawer = !this.drawer;
    },
  },
};
</script>
