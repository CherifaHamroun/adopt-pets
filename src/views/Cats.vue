<template>
  <div>
    <h1>Cats for Adoption</h1>
    <b-table striped hover :items="cats">
        <template v-slot:cell(name)="data">
        <router-link :to="`/pets/cat/${data.index}`">{{ data.value }}</router-link>
      </template>
    </b-table>
  </div>
</template>
<script>
// import cats from '@/data/cats'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      // cats
    }
  },
  computed: {
    ...mapState([
      'cats'
    ])
  }
}
</script>
