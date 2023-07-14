<template>
  <v-app>
    <div class="backgruond"></div>
    <v-main class="d-flex justify-center align-center">
      <v-col cols="10" lg="4" class="mx-auto">
        <v-card class="pa-4">
          <div class="text-center">
            <v-avatar size="100" color="indigo lighten-4">
              <v-icon size="40" color="indigo">mdi-account</v-icon>
            </v-avatar>
            <h2 class="indigo--text">
              Welcome <br />Please sign in to your account below.
            </h2>
          </div>
          <v-form @submit.prevent="submitHandler" ref="form">
            <v-card-text>
              <v-text-field
                type="text"
                name="username"
                required
                v-model="email"
                :rules="emailRules"
                label="Email"
                placeholder="Email"
                prepend-inner-icon="mdi-account"
              />
              <v-text-field
                name="password"
                v-model="password"
                required
                :rules="passwordRules"
                :type="passwordShow ? 'text' : 'password'"
                label="Password"
                placeholder="Password"
                prepend-inner-icon="mdi-key"
                :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="passwordShow = !passwordShow"
              />
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn
                @click="doLogin"
                :loading="loading"
                type="submit"
                color="indigo"
              >
                <span class="white--text px-8">Login</span>
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  data: () => ({
    loading: false,
    snackbar: false,
    passwordShow: false,
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length >= 6) || "Password must be 6  characters or more!",
    ],
  }),
  methods: {
    ...mapActions("login", {
      login: "login",
    }),
    reset() {
      this.$refs.form.reset();
    },
    doLogin() {
      const { username, password } = this;
      if (this.username != "" && this.password != "") {
        this.login({ username, password });
      } else {
        alert("Please fill the text!");
      }
    },
  },
};
</script>
<style>
.backgruond {
  /* background-image: url(./assets/Order-Banner.jpg) !important; */
  height: 300px;
  width: 100%;
  display: block;
  position: absolute;
  top: 0;
  background-size: cover;
}
</style>
