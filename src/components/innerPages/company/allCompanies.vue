<template fillHeight >
    <div>
        <v-layout justify-center>
            <v-flex xs10 class="pink">

                <v-layout justify-center class="mt-5">
                    <v-flex xs10 class="white" align-content-start text-sm-left>
                        <v-menu offset-y class="ml-3 mb-2">
                            <v-btn slot="activator" color="primary" dark>
                                List
                            </v-btn>
                            <v-list>
                                <v-list-tile v-for="(item, index) in listType" :key="index">
                                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                                </v-list-tile>
                            </v-list>
                        </v-menu>
                        <div class="body-1 ml-3">Searching for all companies</div>
                        <v-text-field class="mx-3" flat label="Search" prepend-inner-icon="search" outline></v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout align-center justify-space-between row class="mt-3">
                    <v-flex md-3 text-sm-left>
                        <div class="body-1 ml-5">Type</div>
                        <v-overflow-btn :items="dropdown_icon" label="Segmented Btn" segmented target="#dropdown-example"></v-overflow-btn>
                    </v-flex>
                    <v-flex md-3 text-sm-left>
                        <div class="body-1 ml-5">Location</div>
                        <v-overflow-btn :items="dropdown_icon" label="Segmented Btn" segmented target="#dropdown-example"></v-overflow-btn>
                    </v-flex>
                    <v-flex md-3 text-sm-left>
                        <div class="body-1 ml-5">Market</div>
                        <v-overflow-btn :items="dropdown_icon" label="Segmented Btn" segmented target="#dropdown-example"></v-overflow-btn>
                    </v-flex>
                    <v-flex md3 text-sm-left px-5>
                        <div class="body-1 ml-5">Range</div>
                        <v-range-slider class=" pt-4" v-model="range" :max="max" :min="min"></v-range-slider>
                        <div class="body-1">
                            {{range[0] }}- {{range[1]}}
                        </div>
                    </v-flex>
                </v-layout>

            </v-flex>
        </v-layout>
    </div>
</template>

<style>
</style>
<script>
export default {
  data: () => ({
    dropdown_font: ['Arial', 'Calibri', 'Courier', 'Verdana'],
    dropdown_icon: [
      { text: 'list', callback: () => console.log('list') },
      { text: 'favorite', callback: () => console.log('favorite') },
      { text: 'delete', callback: () => console.log('delete') },
    ],
    dropdown_edit: [
      { text: '100%' },
      { text: '75%' },
      { text: '50%' },
      { text: '25%' },
      { text: '0%' },
    ],
    listType: [{ title: 'All' }, { title: 'Started' }],
    slider: 45,
    volume: 10,
    price: [110, 440],
    min: 5000000,
    max: 9000000,
    range: [5000000, 70000000],
  }),
};
</script>
