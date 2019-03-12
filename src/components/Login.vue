<template>
  <form>
    <div class="row">
      <div class="col-sm-4 offset-4">
        <div class="card border-primary mb-3">
          <div class="card-header">Login</div>
          <div class="card-body">
            <div class="row">
              <label for="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                class="form-control"
                v-model="username"
              >
            </div>
            <div class="row">
              <label for="username">Password</label>
              <input type="password" id="password" class="form-control" v-model="password">
            </div>
            <div>
              <button
                type="submit"
                class="btn btn-primary btn-block"
                @click.prevent="handleSubmit()"
              >Login</button>
            </div>
          </div>
        </div>
      </div>
      {{ this.$store.state.user }}
    </div>
  </form>
</template>

<script>

export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    handleSubmit() {
      this.$store.dispatch('logUserIn', {
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


