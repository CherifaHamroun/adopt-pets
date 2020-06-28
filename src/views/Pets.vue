<template>
    <div>
        <h1>{{ animal.name }} ({{ $route.params.species }})</h1>
        <p>{{ animal.age }} yo</p>
        <p>{{ animal.breed }}</p>
    </div>
</template>
<script>
// import cats from '@/data/cats'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      animal: {}
    }
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
  },
  mounted () {
    const animal = this[this.$route.params.species + 's'][this.$route.params.id]
    this.animal = animal
  }
}
</script>
