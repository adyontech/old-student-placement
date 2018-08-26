const Dashboard = () => import('./dashboard/dashboard.vue')
const AllCompanies = () => import('./company/allCompanies.vue')
const Jobs = () => import('./jobs/jobs.vue')
export default [
  {
    path: 'home',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: 'company',
    name: 'AllCompanies',
    component: AllCompanies
  },
  {
    path: 'jobs',
    name: 'Jobs',
    component: Jobs
  }
]
