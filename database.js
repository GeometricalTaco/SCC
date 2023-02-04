import Realm from 'realm';

const ShipSchema = {
  name: 'Ship',
  properties: {
    name: 'string',
    manufacturer: 'string',
  }
};

const databaseOptions = {
  path: 'ships.realm',
  schema: [ShipSchema],
  schemaVersion: 0
};

const addShip = newShip => new Promise((resolve, reject) => {
  Realm.open(databaseOptions)
    .then(realm => {
      realm.write(() => {
        realm.create('Ship', newShip);
        resolve(newShip);
      });
    })
    .catch(error => reject(error));
});

const getShips = () => {
    return databaseOptions.objects("Ship").sorted("manufacturer, name");
};

export default { addShip, getShips };

// Add some ships to the database
addShip({ name: 'Cutlass Black', manufacturer: 'Drake Interplanetary' });
addShip({ name: 'Avenger Titan', manufacturer: 'Aegis Dynamics' });
addShip({ name: 'Gladius', manufacturer: 'Aegis Dynamics' });
addShip({ name: '300i', manufacturer: 'Origin Jumpworks' });
