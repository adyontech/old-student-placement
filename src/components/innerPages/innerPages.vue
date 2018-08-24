<template>
    <v-app>
        <div style="background-color: #f2f3f4">
            <!--<navbar></navbar>
            <router-view></router-view>
            <footers></footers>
        </div> -->
            <v-navigation-drawer v-model="drawer" clipped fixed app>
                <v-list dense>
                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon>dashboard</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Dashboard</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon>settings</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Settings</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-navigation-drawer>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <navbar></navbar>
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
};
</script>
