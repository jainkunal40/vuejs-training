import Vue from 'vue';
import Vuex from 'vuex';
import stockmarketData from './module/stockmarketData'
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        stockmarketData,
      }
});