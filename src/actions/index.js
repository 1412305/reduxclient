import axios from 'axios'

export const addTransaction = (relayedBy, amount) => {
    return {
      type: 'ADD_TRANSACTION',
      payload: {
        time: new Date(),
        relayedBy,
        amount
      }
    }
  }

export const setVisibilityFilter = filter => {
    return {
      type: 'SET_VISIBILITY_FILTER',
      filter
    }
  }
  
export const addSession = (username, password) => {
  var data = {
    username: username, 
    password: password
  }

  axios.post('https://luongbuiblockchain.herokuapp.com/login', data)
  .then(function (response) {
      console.log(response);
  })
  .catch(function (error) {
      console.log(error);
  });
  return {
    type: 'ADD_SESSION',
    username
  }
}

export const getAllTransactions = (transactions) => {
    axios.get('https://luongbuiblockchain.herokuapp.com/history')
    .then(function (response) {
      transactions = response
    })
    .catch(function (error) {
        console.log(error);
    });
    return {
      type: 'GET_ALL_HISTORY',
      transactions
    }
}