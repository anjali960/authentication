<template>
  <div id="home">
    {{ info }}

    <v-btn @click="doLogout">
      Logout
    </v-btn>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "home",
  data() {
    return {
      info: "You are logged in and this is Home Page",
    };
  },
  methods: {
    ...mapActions("login", {
      logout: "logout",
    }),
    reset() {
      this.$refs.form.reset();
    },
    doLogout() {
      this.logout();
    },
  },
};
</script>
