import React,{useEffect, useState, useMemo} from 'react';
// import { useTable } from 'react-table'
import USERS from '../../Data/userData.json';
// import {COLUMNS} from '../Table/Columns';

const List = () => {
    // const columns = useMemo(()=> COLUMNS, []);
    // const data = useMemo(()=> USERS, []);

    // const {
    //     getTableProps,
    //     getTableBodyProps,
    //     headerGroups,
    //     rows,
    //     prepareRow
    //   } = useTable({
    //     columns,
    //     data
    //   })

    const [randomUser, setRandomUser] = useState([]);
    const [rendomData, setRandomData] = useState([]);

    // console.log('Json Users: ', users);
    // if (rendomData) {
    //     var unique = rendomData.filter( (ele, ind) =>  ele.email === users.email);
    //     console.log('Unique: ', unique);
    // }
    let updateUsers = [];
    if (rendomData) {
        for (let i = 0; i < rendomData.length; i++) {
            const element = rendomData[i];
            updateUsers = [...updateUsers, {
                    name: rendomData[i].name,
                    gender: rendomData[i].gender,
                    email: rendomData[i].email,
                    phone: rendomData[i].phone
                }];
        }

    }
    useEffect(()=> {
        const fetchMyAPI = (async () => {
                let result = await fetch(`https://randomuser.me/api/?results=20`);
                result = await result.json();
                setRandomData(result.results);
          });
      
        fetchMyAPI();
        setRandomUser(updateUsers);
        console.log('Length: ', randomUser.length);
        if (randomUser.length === 20) {
            for (let j = 0; j < randomUser.length; j++) {
                const element = randomUser[j];
                
                const requestOptions = {
                    method: 'POST',
                    headers: { 
                        'Content-Type': 'application/json'},
                    body: JSON.stringify(element)
                };
                fetch('http://localhost:8000/users', requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        console.log('Data: ', data);
                    })
                    .catch(err => console.log('Error:', err))
            }
      }
    }, []);




    return (
        <>
        <div className="d-flex align-items-center justify-content-center h-100">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <h1>List</h1>
                    {/* <div className="table-responsive">
                    <table {...getTableProps()} className="table" >
                        <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                            </tr>
                        ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                        {rows.map(row => {
                            prepareRow(row)
                            return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                            )
                        })}
                        </tbody>
                    </table>
                    </div> */}
                </div>
            </div>
        </div>  
        </>
    );
};

export default List;