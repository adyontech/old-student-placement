const login = () =>
    import ("./login/login.vue");
const signup = () =>
    import ("./signup/signup.vue");
export default [{
        path: "/",
        redirect: "/auth/login"
    },
    {
        path: "login",
        name: "login",
        component: login
    },
    {
        path: "signup",
        name: "signup",
        component: signup
    },

];
