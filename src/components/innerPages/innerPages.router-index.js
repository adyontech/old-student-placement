const Dashboard = () =>
    import ('./dashboard/dashboard.vue')
// const AllCompanies = () =>
//     import ('./company/allCompanies.vue')
const Jobs = () =>
    import ('./jobs/jobs.vue')
const JobsInfo = () =>
    import ('./jobs/jobInfo.vue')
const Profile = () =>
    import ('./profile/profile.vue')
export default [{
        path: 'home',
        name: 'Dashboard',
        component: Dashboard
    },
    // NOTE: hold on for company page now.
    // {
    //   path: 'company',
    //   name: 'AllCompanies',
    //   component: AllCompanies
    // },
    {
        path: 'jobs',
        name: 'Jobs',
        component: Jobs
    },
    {
        path: 'jobs/:jobId',
        name: 'JobsInfo',
        component: JobsInfo
    },
    {
        path: 'profile',
        name: 'Profile',
        component: Profile
    }
]
