<template>
  <div id="app">
    <router-view></router-view>
    <ul>
      <li>
        <router-link to="/index"></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
     
    }
  }
}
</script>

<style>

</style>
