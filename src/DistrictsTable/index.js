import React from 'react';
import '../App.css';

const DistrictsTable = ({provinces}) => {
  return (
    <div className="table-container">
      <h3>Distritos</h3>
      <table className="table-style">
        <tbody>
          <tr>
            <th>Código</th>
            <th>Nombre</th> 
            <th>Código Padre</th>
            <th>Descripción Padre</th>
          </tr>
          {
            Object.keys(provinces).map((idProvince) => {
              const provinceId = idProvince;
              const provinceName = provinces[idProvince].name;

              return Object.keys(provinces[idProvince].children).map((idDistrict) => {
                const districtId = idDistrict;
                const districtName = provinces[idProvince].children[idDistrict].name;

                return (
                  <tr key={idDistrict}>
                    <td>{districtId}</td>
                    <td>{districtName}</td>
                    <td>{provinceId}</td>
                    <td>{provinceName}</td>
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

export default DistrictsTable;