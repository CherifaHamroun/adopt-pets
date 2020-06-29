<template>
  <div>
   <petTable
   species="dogs"
   :pets = "dogs"
   />
  </div>
</template>
<script>
// import dogs from '@/data/dogs'
import { mapState } from 'vuex'
import petTable from '@/components/petTable.vue'
export default {
  components: {
    petTable
  },
  data () {
    return {
      // dogs
    }
  },
  computed: {
    ...mapState([
      'dogs'
    ])
  }
}
</script>
