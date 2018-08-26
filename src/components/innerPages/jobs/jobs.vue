<template fill-height>
    <div class="mt-3">
        <v-layout justify-center>
            <v-flex xs11 md10 v-bind:class="{white: $vuetify.breakpoint.mdAndUp}" class=" elevation-3">

                <v-layout align-center justify-center class="pt-2 mt-5 white">
                    <v-flex xs10 md8 class="white" align-content-start text-xs-left>
                        <v-layout>
                            <v-flex xs10>
                                <v-layout class="mx-3" align-start justify-start row wrap fill-height>
                                    <v-flex>
                                        <v-chip outline label color="grey lighten-3" text-color="black">#
                                            <span v-if="!searchTypeCheckbox">All </span>
                                            <span v-if="searchTypeCheckbox">Stared</span>
                                        </v-chip>
                                    </v-flex>
                                    <v-flex>
                                        <v-chip outline label color="grey lighten-3" text-color="black">#{{range[0]}}k-{{range[1]}}k </v-chip>
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
                        <v-layout>
                            <v-flex xs12 row class="mb-0">
                                <v-text-field hide-details class="mx-3" flat label="Search" prepend-inner-icon="search" outline></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout class="mx-3 pl-3 mb-3 mt-0  grey lighten-5">
                            <v-flex mt-3>
                                <v-checkbox class="mt-1" :label="`Stared`" v-model="searchTypeCheckbox"></v-checkbox>
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

                            <v-flex class="mt-3">
                                Range
                                <v-menu offset-y :close-on-content-click="false">

                                    <v-icon slot="activator" color="primary" class="ml-2">
                                        keyboard_arrow_down
                                    </v-icon>
                                    <v-list>
                                        <v-subheader>{{range[0]}}k-{{range[1]}}k </v-subheader>
                                        <v-list-tile>
                                            <v-list-tile-title>
                                                <v-range-slider v-model="range" :max="max" :min="min"></v-range-slider>
                                            </v-list-tile-title>
                                        </v-list-tile>
                                    </v-list>
                                </v-menu>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
                <v-layout align-center justify-center class="pt-2 mt-5 white">
                    <v-flex xs10 md8 class="white" align-content-start text-xs-left>
                        <v-card flat v-if="$vuetify.breakpoint.mdAndUp">

                        </v-card>
                    </v-flex>
                </v-layout>

            </v-flex>
        </v-layout>
    </div>
</template>

<script>
export default {
  data: () => ({
    searchTypeCheckbox: false,
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
    min: 100,
    max: 200,
    slider: 40,
    range: [100, 200],
  }),
  methods: {
    setFilterType: value => {
      this.listTypeModel = value;
    },
  },
};
</script>
