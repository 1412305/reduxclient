import React from 'react'
import PropTypes from 'prop-types'
import Transaction from './Transaction'

const TransactionList = ({ transactions }) => (
    <ul>
      {transactions.map(transaction => (
        <Transaction key={transaction.id} {...transaction}  />
      ))}
    </ul>
  )
  
TransactionList.propTypes = {
    transactions: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number.isRequired,
          }).isRequired
        ).isRequired,
    }

export default TransactionList