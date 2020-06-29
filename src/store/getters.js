import state from './state'
export default {
  animalsCount: (state) => {
    return state.cats.length + state.dogs.length
  },
  getAllCats: () => {
    return state.cats.filter((pet) => {
      return pet.species === 'cat'
    })
  }
}
