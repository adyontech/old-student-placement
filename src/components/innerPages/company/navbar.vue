<template>
    <div>
        <v-toolbar :height="45" flat :ripple="false" color="grey ligten-2 white--text" :class="{'': $vuetify.breakpoint.mdAndUp}">

            <v-toolbar-title class="blue--text pt-3" :class="{'ml-5': $vuetify.breakpoint.mdAndUp}">
                <router-link color="primary--text" to="/" style="text-decoration:none" exact>
                    <v-icon>face</v-icon>
                </router-link>
                <router-link color="primary--text" to="/" style="text-decoration:none" exact>
                    <v-icon>face</v-icon>
                </router-link>
                <router-link color="primary--text" to="/" style="text-decoration:none" exact>
                    <v-icon>face</v-icon>
                </router-link>
                <router-link color="primary--text" to="/" style="text-decoration:none" exact>
                    <v-icon>face</v-icon>
                </router-link>
                <router-link color="primary--text" to="/" style="text-decoration:none" exact>
                    <v-icon>face</v-icon>
                </router-link>
            </v-toolbar-title>

            <v-spacer></v-spacer>
            <v-toolbar-items class="mr-2">
                <v-btn flat>Home</v-btn>
                <v-btn flat>About</v-btn>
                <v-btn flat>Jobs</v-btn>
                <v-btn flat>Culture</v-btn>
                <v-btn flat>Info</v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>
