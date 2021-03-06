import { stocks } from '../../data/data'
import Vue from 'vue'
const state = {
  stocks: stocks,
  fund: 10000,
  myStocks: []
}

const changePrice = (price) => {
  let change = Number((Math.random() * 1.900 + 0.100).toFixed(3))
  change = change * (Math.floor(Math.random() * 2) === 1 ? 1 : -1)
  price = price + change
  if (price < 0) {
    return 0.01
  }
  return price
}
const dayEnd = (stocks) => {
  stocks.map(stock => {
    stock.price = changePrice(stock.price)
  })
  return stocks
}

const mutations = {
  'REFRESH_DATA' (state, payload) {
    state.stocks = payload
  },

  'BUY' (state, data) {
    const stock = state.myStocks.find(element => element.id === data.id)
    if (stock) {
      stock.quantity += data.quantity
    } else {
      state.myStocks.push({
        id: data.id,
        quantity: data.quantity
      })
    }
    state.fund -= data.quantity * data.price
  },

  'SELL' (state, data) {
    const stock = state.myStocks.find(element => element.id === data.id)
    if (stock.quantity === data.quantity) {
      state.myStocks.splice(state.myStocks.indexOf(stock), 1)
    } else {
      stock.quantity -= data.quantity
    }
    state.fund += data.quantity * data.price
  },

  'LOAD' (state, payload) {
    state.myStocks = payload.myStocks
    state.fund = payload.fund
  }
}

const actions = {
  dayEnd: ({state, commit}) => {
    commit('REFRESH_DATA', dayEnd(state.stocks))
  },
  buyStock: ({commit}, data) => {
    commit('BUY', data)
  },
  sellStock: ({commit}, data) => {
    commit('SELL', data)
  },
  save: ({state}) => {
      const data = {
        myStocks: state.myStocks,
        fund: state.fund
      }
      Vue.http.put('https://vuedata-f8fba.firebaseio.com/kunalPortfolio.json', data).then(res => {
        console.info('Data saved', res);
      }, error => {
        console.info('Some error', error);
      })
  },
  load: ({commit}) => {
    Vue.http.get('https://vuedata-f8fba.firebaseio.com/kunalPortfolio.json').then(res => {
        res.json().then(data => {
          if (data.myStocks && data.fund) {
            commit('LOAD', data)
            console.info('Data Loaded', res);
          } else {
            console.info('Some error', res);
          }
        })
      }, res => {
        console.info('Some error', res);
      })
  }
}
const getters = {
  stocks: (state) => {
    return state.stocks
  },
  portfolio: (state, getters) => {
    return state.myStocks.map(purchasedStock => {
      const stock = getters.stocks.find(element => element.id === purchasedStock.id)
      stock.quantity = purchasedStock.quantity
      return stock
    })
  },
  funds: (state) => {
    return state.fund
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
