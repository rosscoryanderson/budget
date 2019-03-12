<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  mounted() {
    this.$store.dispatch('readCashFlow', this.$store.state.user)
  }
}
</script>

<style>
</style>
