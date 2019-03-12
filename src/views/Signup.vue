<template>
  <div class="about">
    <div id="nav">
      <router-link to="/">Login</router-link> |
      <router-link to="/signup">Sign Up</router-link>
    </div>
    <Signup />
  </div>
</template>

<script>
// @ is an alias to /src
import Signup from '@/components/Signup.vue'

export default {
  name: 'signup',
  components: {
    Signup
  }
}
</script>