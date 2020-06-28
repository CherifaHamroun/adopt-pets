# adopt-pets
Vuex and Vue-Router App
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Bootstap vue 
npm install bootstrap-vue
then to main.js =>  import {BootstrapVue} from 'bootstrap-vue'
                    Vue.use(BootstrapVue)
                    import 'bootstrap/dist/css/bootstrap.css'
                    import 'bootstrap-vue/dist/bootstrap-vue.css'
### Principe du router 
call an action that calls a mutation which updates a state for u 
actions u call is where you are also api calls 

### What about Vuex
mapState and mapActions are added to methods to watch changes (not to computed,watch bcz they are static methods )