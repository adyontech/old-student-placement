// const AllCompanies = () =>
//     import ('./company/allCompanies.vue')
const Jobs = () =>
    import ('./jobs/jobs.vue')
const JobsInfo = () =>
    import ('./jobs/jobInfo.vue')
const Profile = () =>
    import ('./profile/profile.vue')
const NewsFeed = () =>
    import ('./newsFeed/index.vue')
export default [{
        path: 'feed',
        name: 'NewsFeed',
        component: NewsFeed
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
