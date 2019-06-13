import React from 'react';
import '../App.css';

const PronvicesTable = ({departments}) => {
  return (
    <div className="table-container">
      <h3>Provincias</h3>
      <table className="table-style">
        <tbody>
          <tr>
            <th>Código</th>
            <th>Nombre</th> 
            <th>Código Padre</th>
            <th>Descripción Padre</th>
          </tr>
          {
            Object.keys(departments).map((idDepartment) => {
              const departmentId = idDepartment;
              const departmentName = departments[idDepartment].name;

              return Object.keys(departments[idDepartment].children).map((idProvince) => {
                const provinceId = idProvince;
                const provinceName = departments[idDepartment].children[idProvince].name;

                return (
                  <tr key={idProvince}>
                    <td>{provinceId}</td>
                    <td>{provinceName}</td>
                    <td>{departmentId}</td>
                    <td>{departmentName}</td>
                  </tr>
                )
              })
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default PronvicesTable;