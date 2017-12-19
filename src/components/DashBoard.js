import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow
  } from 'material-ui/Table';
import VisibleTransacionList from '../containers/VisibleTransactionList'
import FilterLink from '../containers/FilterLink'

const DashBoard = () => (
    <div>
        <FilterLink filter="SHOW_ALL" > All </FilterLink>
        <FilterLink filter="SHOW_RECENT" > Recent </FilterLink>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHeaderColumn>Height</TableHeaderColumn>
                    <TableHeaderColumn>Time</TableHeaderColumn>
                    <TableHeaderColumn>Relayed By</TableHeaderColumn>
                    <TableHeaderColumn>Amount</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody>
                <VisibleTransacionList />
            </TableBody>
        </Table>
    </div>
)

export default DashBoard