<template>
    <div>
        <div v-for="i in 3" :key="i" class="ml-4 elevation-3">
            <div class="white mb-4 pa-3">
                <v-card class="pa-3 elevation-3 ">
                    <div class="caption font-weight-regular green--text">Application open</div>
                    <div class="subheading font-weight-regular">KIND ATTENTION NCR STUDENTS- ADDITIONAL LIST FOR TCS KIND ATTENTION NCR STUDENTS- ADDITIONAL LIST FOR TCSKIND ATTENTION NCR STUDENTS- ADDITIONAL LIST FOR TCS</div>
                    <div class="mt-1 caption grey--text text--darken-3 font-weight-regular">Shawn Majoski ~ 2 hours ago</div>
                </v-card>
                <v-divider></v-divider>
                <v-card flat class="mt-3 pa-3">
                    <div>
                        Dear Candidates, The list contains first batch of additional shortlisted(NCR campus) for TCS interview process. </br> The attached list of students are requested to be present at TCS premises as per the schedule below; </br>Venue - ATL Building ,500 seater Auditorium,Siruseri (Gate 4 Entry) Time - 11.00.A.M .tomorrow(10/09/2018). </br>Also the candidates are required to bring the following documents (in the same order) for the interview process. - TCS Application form - Resume - 10th, 12th Marksheet (photocopy) - UG / P </br>G Marksheet - photocopy - Experience Letter - photocopy (as applicable) - Copy of College ID card Note - Rest of the students who got 'Congratulations mail' from TCS but could not find their </br>name in the list are requested be available in chennai tomorrow. The interviews may be scheduled tomorrow itself. With regards, Vivekanandan.M.S. Placement officer.
                    </div>
                </v-card>
                <v-divider></v-divider>
                <v-card flat class="pa-3">
                    <div class="caption font-weight-regular blue--text">Links</div>
                    <div v-for="(i) in 2" :key="i">
                        <div class="subheading font-weight-regular">The following link is for blah-blah-blah</div>
                        <div class="mb-1 caption blue--text text--darken-3 font-weight-regular">tinyurl.com/pingpong</div>
                    </div>
                </v-card>
            </div>
        </div>
    </div>
</template>
