import React from 'react';
import '../App.css';

const DepartmentsTable = ({departments}) => {
  return (
    <div className="table-container">
      <h3>Departamentos</h3>
      <table className="table-style">
        <tbody>
          <tr>
            <th>Código</th>
            <th>Nombre</th> 
            <th>Código Padre</th>
            <th>Descripción Padre</th>
          </tr>
          {
            Object.keys(departments).map((key) => {
              const departmentId = key;
              const departmentName = departments[key].name;
              
              return (
                <tr key={key}>
                  <td>{departmentId}</td>
                  <td>{departmentName}</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default DepartmentsTable;