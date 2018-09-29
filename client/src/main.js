import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'

import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';


Vue.use(VueApollo);

//Setup ApolloClient
const defaultClient = new ApolloClient({
  uri: 'http://localhost:4000/gql',

})

const apolloProvider= new VueApollo({ defaultClient });



Vue.use(Buefy, {
  defaultIconPack: 'fas',
})

Vue.config.productionTip = false

new Vue({
  provide: apolloProvider.provide(),
  router,
  store,
  render: h => h(App)
}).$mount('#app')
