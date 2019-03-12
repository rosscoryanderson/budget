<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">Login</router-link> |
      <router-link to="/signup">Sign Up</router-link>
    </div>
    <Login/>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'

export default {
  name: 'login',
  components: {
    Login
  }
}
</script>
