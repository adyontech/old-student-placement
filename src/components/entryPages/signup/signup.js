import axios from "axios";
import {
    mapMutations
} from "vuex";
import store from "@/store/store";
import {
    emailRegex,
    passwordRegex,
    nameRegex,
    phoneRegex
} from "@/utils/commonRegex";
import navbar from "./../../shared/outerNavbar.vue";
import outerFooter from "./../../shared/outerFooter.vue";

export default {
    data() {
        return {
            user: {
                email: "",
                password: "",
                phnum: "",
                username: ""
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
                phnum: value => {
                    return phoneRegex.test(value) || "Invalid Password";
                },
                password: value => {
                    return passwordRegex.test(value) || "Invalid phone number";
                },
                username: value => {
                    return nameRegex.test(value) || "Invalid Password";
                }
            }
        };
    },
    components: {
        navbar: navbar,
        outerFooter: outerFooter
    },
    mounted() {
        window.document.title = "Signup";
    },
    methods: {
        validateAllFields() {
            if (!nameRegex.test(this.user.username) ||
                !passwordRegex.test(this.user.password)
            ) {
                return false;
            } else {
                return true;
            }
        },

        displayMessage(messageType, message) {
            this.snackBarType = messageType;
            this.displaySnackBar = true;
            this.snackBarMessage = message;
        },

        handleUserRegistration() {
            let username = this.user.username;
            let password = this.user.password;
            let phnum = this.user.phnum;
            let email = this.user.email;

            if (!this.validateAllFields()) {
                this.displayMessage("warning", "Invalid Fields Format Entered");
                return;
            }

            this.loading = true;

            let userData = new Object();
            userData = {
                username: username,
                password: password,
                phnum: phnum,
                email: email
            };
            axios
                .post(`${store.getters.getBaseURL}/auth/register`, userData)
                .then(response => {
                    return response.data;
                })
                .then(data => {
                    if (data.error === undefined) {
                        if (data.success) {
                            this.displayMessage("success", data.message);
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
