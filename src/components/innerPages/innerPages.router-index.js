const AllCompanies = () => import('./company/allCompanies.vue');
const CompanyProfile = () => import('./company/companyProfile.vue');
const Jobs = () => import('./jobs/jobs.vue');
const JobsInfo = () => import('./jobs/jobInfo.vue');
const Profile = () => import('./profile/profile.vue');
const NewsFeed = () => import('./newsFeed/index.vue');
const Applied = () => import('./Applied/appliedList/index.vue');
const AppliedFullInfo = () => import('./Applied/fullInfo/index.vue');
export default [
  {
    path: 'home',
    name: 'NewsFeed',
    component: NewsFeed,
  },
  // NOTE: hold on for company page now.
  {
    path: 'company',
    name: 'AllCompanies',
    component: AllCompanies,
  },
  {
    path: 'company/:compmanyId',
    name: 'CompanyProfile',
    component: CompanyProfile,
  },
  {
    path: 'jobs',
    name: 'Jobs',
    component: Jobs,
  },
  {
    path: 'jobs/:jobId',
    name: 'JobsInfo',
    component: JobsInfo,
  },
  {
    path: 'profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: 'applied',
    name: 'Applied',
    component: Applied,
  },
  {
    path: 'applied/:jobId',
    name: 'AppliedFullInfo',
    component: AppliedFullInfo,
  },
];
