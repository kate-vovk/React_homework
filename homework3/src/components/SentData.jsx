import React from 'react'
import PropTypes from 'prop-types'
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';

import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
export const SentData = ({data}) => {
    return (
        <TableContainer>
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell>Seconds</TableCell>
                        <TableCell>Login</TableCell>
                        <TableCell>Password</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Date of Birth</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, index)=> (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">{row.seconds}</TableCell>
                            <TableCell component="th" scope="row">{row.login}</TableCell>
                            <TableCell component="th" scope="row">{row.password}</TableCell>
                            <TableCell component="th" scope="row">{row.name}</TableCell>
                            <TableCell component="th" scope="row">{row.email}</TableCell>
                            <TableCell component="th" scope="row">{row.phone}</TableCell>
                            <TableCell component="th" scope="row">{row.birthday}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

SentData.propTypes = {
    data: PropTypes.array.isRequired,
}