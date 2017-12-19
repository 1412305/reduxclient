import { connect } from 'react-redux'
import TransactionList from '../components/TransactionList'
import { getAllTransactions } from '../actions'


const getVisibleTransactions = (transactions, filter) => {
  switch (filter) {
    case 'SHOW_RECENT':
      return transactions
    case 'SHOW_ALL':
      return getAllTransactions()
    default:
      return transactions
  }
}

const mapStateToProps = state => {
  return {
    transactions: getVisibleTransactions(state.transactions, state.visibilityFilter)
  }
}

const VisibleTransactionList = connect(
  mapStateToProps,
  null
)(TransactionList)

export default VisibleTransactionList