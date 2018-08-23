const Dashboard = () =>
    import ('./dashboard/dashboard.vue')
const AllCompanies = () =>
    import ('./company/allCompanies.vue')
export default [{
    path: 'home',
    name: 'Dashboard',
    component: Dashboard
}, {
    path: 'company',
    name: 'AllCompanies',
    component: AllCompanies
}]
