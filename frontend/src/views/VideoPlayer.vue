<template>
  <div class="main">
    <Header></Header>
    <div class="main-body">
      <Player></Player>
    </div> 
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Player from '@/components/Player'
import Footer from '@/components/Footer'
import { mapState } from 'vuex'

export default {
  name: 'VideoPlayer',
  components: {
    Header,
    Player,
    Footer
  },
  computed: mapState(['user']),
  created() {
    this.$store.dispatch('getUser', 3);
  }
}
</script>

<style lang="scss">
  .main-body {
    padding: 6.25rem 3.125rem 0;
    width: calc(100% - 6.25rem);
  }
</style>
