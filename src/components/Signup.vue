<template>
  <form>
    <div class="row">
      <div class="col-sm-4 offset-4">
        <div class="card border-primary mb-3">
          <div class="card-header">Sign Up</div>
          <div class="card-body">
            <div class="row">
              <label for="username">Email</label>
              <input
                type="text"
                id="username"
                placeholder="Email"
                class="form-control"
                v-model="username"
              >
            </div>
            <div class="row">
              <label for="username">Password</label>
              <input type="password" id="password" class="form-control" v-model="password">
            </div>
            <!-- <div class="row">
              <label for="username">Confirm Password</label>
              <input type="password" id="password" class="form-control" v-model="password">
            </div> -->
            <div>
              <button
                type="submit"
                class="btn btn-primary btn-block"
                @click.prevent="handleSubmit()"
              >Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import firebase from "firebase/app";

export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    handleSubmit() {
      this.$store.dispatch('createUser', {
          username: this.username,
          password: this.password
      })
    }
  }
};
</script>

<style>
.row {
  margin-bottom: 30px;
}
</style>


