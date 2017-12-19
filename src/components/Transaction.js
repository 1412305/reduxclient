import React from 'react'
import PropTypes from 'prop-types'
import {
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

const Transaction = (transaction, index) => (
    <TableRow>
        <TableRowColumn>{index}</TableRowColumn>
        <TableRowColumn>{transaction.time}</TableRowColumn>
        <TableRowColumn>{transaction.relayedBy}</TableRowColumn>
        <TableRowColumn>{transaction.amount}</TableRowColumn>
    </TableRow>
)

Transaction.propTypes = {
    transaction: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
}

export default Transaction