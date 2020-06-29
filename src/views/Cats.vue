<template>
  <div>
   <petTable
    species = "cat"
    :pets ="cats"
   />
  </div>
</template>
<script>
// import cats from '@/data/cats'
import { mapState } from 'vuex'
import petTable from '@/components/petTable.vue'
export default {
  components: {
    petTable
  },
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
