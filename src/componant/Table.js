import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import axios from 'axios';
import '../App.css';

import {EditOutlined, DeleteOutlined} from '@ant-design/icons';

function Table() {
  const [getResult, setResult] = useState([]);
  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "NAME",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "CREATED AT",
      selector: (row) => row.createdAt,
      sortable: true,
    },
    {
      name: "ACTION",
      selector: () => (
        <div className="btn-action">
          <EditOutlined />
          &nbsp;
          <DeleteOutlined />
        </div>
      ),
      sortable: true,
    },
  ];
  const rows = getResult.map((item) => ({
    id: item.id,
    name: item.name,
    createdAt: item.createdAt,
  }));
  
  const fetchData = async () => {
    try {
      const response = await axios.get('https://6662bdaf62966e20ef09d089.mockapi.io/api/v1/users');
      console.log(response.data);
      setResult(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <DataTable
        columns={columns}
        data={rows}
        fixedHeader
        title={<h3 style={{ textAlign: "center"}}>show data from api</h3>}
        pagination
        selectableRows
      />
    </>
  );
}

export default Table;
