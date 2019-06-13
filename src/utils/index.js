const getEntityKeys = (line) => {
  if (line) {
    const entity = line.trim()
    const entityId = entity.split(' ')[0];
    return {
      id: entityId,
      name: entity.substr(entityId.length + 1)
    }
  }
  return false;
}

export default {
  getEntityKeys
}