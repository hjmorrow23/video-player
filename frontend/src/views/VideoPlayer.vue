<template>
  <div class="main">
    <Header></Header>
    <div class="main-body">
      <Player></Player>
    </div> 
  </div>
</template>

<script>
import Header from '@/components/Header'
import Player from '@/components/Player'
import { mapState } from 'vuex'

export default {
  name: 'VideoPlayer',
  components: {
    Header,
    Player
  },
  computed: mapState(['user']),
  created() {
    this.$store.dispatch('getUser', 3);
  }
}
</script>

<style lang="scss">
  .main-body {
    padding: 6.25rem 3.125rem;
    width: calc(100% - 6.25rem);
  }
</style>
