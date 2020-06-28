<template>
    <div>
        {{ $route.params.species }}
        {{ $route.params.id }}
    </div>
</template>
<script>
// import cats from '@/data/cats'
import { mapState } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    /* or doing this >
    /cats() {
        return this.$store.state.cats
    } */
    ...mapState([
      'cats',
      'dogs'
    ])
  }
}
</script>
