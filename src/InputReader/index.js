import React, { useState } from 'react';
import DepartmentsTable from '../DepartmentsTable';
import PronvicesTable from '../ProvincesTable';
import DistrictsTable from '../DistrictsTable';
import utils from '../utils';

const InputReader = () => {
  const departmentsObject = {};
  const provincesObject = {};
  const [departments, setDepartments] = useState({});
  const [provinces, setProvinces] = useState({});

  const updateEntityObject = (stateObject, entity, childEntity) => {
    if (entity) {
      const entityId = entity.id;
      const entityName = entity.name;
      const childId = childEntity.id;
      const childName = childEntity.name;

      if (!stateObject[entityId]) {
        stateObject[entityId] = {};
      }
      stateObject[entityId].name = entityName;
      if (stateObject[entityId] && !stateObject[entityId].children)
        stateObject[entityId].children = {};
      if (childName)
        stateObject[entityId].children[childId] = ({ name: childName });
    }
  }

  const handleFileRead = (e) => {
    const contentFile = e.target.result;
    const fileLines = contentFile.split("\n");
  
    fileLines.forEach((fileLine) => {
      const lineWithoutQuotes = fileLine.replace(/["]+/g, '').trim();
      const line = lineWithoutQuotes.split('/');
      const department = utils.getEntityKeys(line[0]);
      const province = utils.getEntityKeys(line[1]);
      const district = utils.getEntityKeys(line[2]);

      updateEntityObject(departmentsObject, department, province);
      updateEntityObject(provincesObject, province, district);
    });

    setDepartments(departmentsObject);
    setProvinces(provincesObject);
  }

  const handleFileUpload = (file) => {
    const reader = new FileReader();
    reader.onload = handleFileRead;
    reader.readAsText(file);
  }

  return (
    <div>
      <input 
        type="file"
        id="file"
        className="input-file"
        onChange={e => handleFileUpload(e.target.files[0])}
      />
      <DepartmentsTable departments={departments}/>
      <PronvicesTable departments={departments} />
      <DistrictsTable provinces={provinces} />
    </div>
  )
}

export default InputReader;