import React, { useState } from 'react'
import axios from 'axios';
// import DataTable from 'react-data-table-component';


function Tables() {
  const [getResult, setResult] = useState()
  const getUser = async () => {
    let result = await axios.get('https://6662bdaf62966e20ef09d089.mockapi.io/api/v1/users')
    console.log(result.data)
    return result.data
  }
  const handleClick = async () => {
    const data = await getUser();
    setResult(data);
    return data;
  }
  // const columns = handleClick().map((item) => {
  //   return {
  //     name: "ID",
  //     selector: item.id,
  //   }
  // })
  // const rows = handleClick().map((item) => {
  //   return {
  //     id: item.id,
  //     name: item.name,
  //   }
  // })
  return (
    <div>

    </div>
  )
}

export default Tables