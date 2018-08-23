import axios from "axios";
import {
    mapMutations
} from "vuex";
import store from "@/store/store";
import {
    emailRegex,
    passwordRegex
} from "@/utils/commonRegex";
import navbar from "./../../shared/outerNavbar.vue";
import outerFooter from "./../../shared/outerFooter.vue";

export default {
    components: {
        navbar: navbar,
        outerFooter: outerFooter
    },
    data() {
        return {
            user: {
                email: "",
                password: ""
            },
            snackBarMessage: "",
            displaySnackBar: false,
            snackBarType: "info",
            loading: false,

            rules: {
                required: value => !!value || "Required.",
                email: value => {
                    return emailRegex.test(value) || "Invalid email";
                },
                password: value => {
                    return passwordRegex.test(value) || "Invalid phone number";
                }
            }
        };
    },
    mounted() {
        window.document.title = "Login";
    },
    methods: {
        ...mapMutations(["setTokenForUser"]),
        validateAllFields() {
            if (!emailRegex.test(this.user.email) ||
                !passwordRegex.test(this.user.password)
            )
                return false;
            else return true;
        },

        displayMessage(messageType, message) {
            this.snackBarType = messageType;
            this.displaySnackBar = true;
            this.snackBarMessage = message;
        },

        handleUserLogin() {
            let email = this.user.email;
            let password = this.user.password;

            if (!this.validateAllFields()) {
                this.displayMessage("warning", "Invalid Fields Format Entered");
                return;
            }

            this.loading = true;
            let userData = new Object();
            userData = {
                email: email,
                password: password
            };
            axios
                .post(`${store.getters.getBaseURL}/auth/login`, userData)
                .then(response => {
                    console.log(response)
                    return response.data;
                })
                .then(data => {
                    if (data.error === undefined) {
                        if (data.success) {
                            this.setTokenForUser({
                                token: data.token
                            });
                            this.$router.push({
                                path: "/dashboard"
                            });
                        } else {
                            this.displayMessage("error", data.message);
                        }
                    } else {
                        this.displayMessage("error", data.error);
                    }
                    this.loading = false;
                });
        }
    }
};
