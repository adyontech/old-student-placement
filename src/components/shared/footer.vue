 <template>
    <div class="py-5" style="background-color: #f2f3f4 ;borde: 1px solid black ">
        <v-card flat style="background-color: #f2f3f4">
            <v-layout>
                <v-flex xs12>
                    <router-link class="mx-3 body-2 " style="text-decoration: none; " to="home ">Home</router-link>
                    <router-link class="mx-3 body-2 " style="text-decoration: none; " to="home ">Help</router-link>
                    <router-link class="mx-3 body-2 " style="text-decoration: none; " to="home ">T & C</router-link>
                    <router-link class="mx-3 body-2 " style="text-decoration: none; " to="home "> Privacy Policy & Cookies</router-link>
                </v-flex>
            </v-layout>
        </v-card>
    </div>

</template>
<style>
</style>


<script>
// <v-footer
//     height="auto"
//     color="primary lighten-1"
//   >
//     <v-layout
//       justify-center
//       row
//       wrap
//     >
//       <v-btn
//         v-for="link in links"
//         :key="link"
//         color="white"
//         flat
//         round
//       >
//         {{ link }}
//       </v-btn>
//       <v-flex
//         primary
//         lighten-2
//         py-3
//         text-xs-center
//         white--text
//         xs12
//       >
//         &copy;2018 — <strong>Vuetify</strong>
//       </v-flex>
//     </v-layout>
//   </v-footer>
</script>