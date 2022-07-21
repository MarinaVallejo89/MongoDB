// variables globales
const manufacturers = require('./modules/manufacturers');
const mongo = require('mongodb');
const cliente = mongo.MongoClient;
​
const user = 'MarinaV';
const passwd = 'contramongo89';
​
const mydb = 'Prueba';
const coleccion = 'Quiz';
​
const url = `mongodb+srv://${user}:${passwd}@marinacluster.iwfzh75.mongodb.net/?retryWrites=true&w=majority`;
​
//  creación colección manufacturers
cliente.connect(url, (err, database) => {
  if (err) throw err;
  const db = database.db(mydb);
  db.createCollection('manufacturers', (err, res) => {
    if (err) throw err;
    console.log('Colección creada con éxito');
    database.close();
  });
});
​
// // + conjunto de documentos a la colección
// cliente.connect(url, (err, database) => {
//   if (err) throw err;
//   const db = database.db(mydb);
//   //Importamos el contenido de manufacturers.js ...
//   const manufacturers = require('./modules/manufacturers');
//   //... para meterlo como el contenido de la nueva colección 'manufacturers'
//   db.collection('manufacturers')
//   .insertMany(manufacturers, (err, res) => {
//         if (err) throw err;
//         console.log('Coleccion rellena');
//         database.close();
//     });
// });
// ​
// //  + un documento a la colección, lo tenemos que crear
// const myObj = {
//   name: 'HYUNDAI',
//   cif: 'B60335212',
//   address: 'C. de Menor, 17, 38055. Caceres',
// };
// cliente.connect(url, (err, database) => {
//   if (err) throw err;
//   const db = database.db(mydb);
//   //...y luego lo insertamos
//   db.collection('manufacturers')
//     .insertOne(myObj, (err, database) => {
//         if (err) throw err;
//         console.log('Documento añadido con éxito');
//         database.close();
//     });
// });
// ​
// //Econtrar primer producto
// client.connect(url, (err, database) => {
//   if (err) throw err;
//   const db = database.db(mydb);
//   //Objeto vacío  {}  para indicar que nos vale cualquiera: no hay parámetros de búsqueda a.k.a. QUERY
//   db.collection(coleccion)
//   .findOne({}, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     database.close();
//   });
// });
// ​
// //Ordenar todos los productos por precio, de - a +
// cliente.connect(url, (err, database) => {
//   if (err) throw err;
//   const db = database.db(mydb);
//   //Si fuera 1, sería de mayor a menor
//   const mysort = { price: -1 };
//   db.collection(coleccion)
//     .find({})
//     .limit(10)
//     .sort(mysort)
//     .toArray((err, result) => {
//       if (err) throw err;
//       console.log(result);
//       database.close();
//     });
// });
// //Todos los coches de color azul
// //Ordenados de menor a mayor
// cliente.connect(url, (err, database) => {
//   if (err) throw err;
//   const db = database.db(mydb);
//   const myquery = { color: 'blue' };
//   const mysort = { price: -1 };
//   db.collection(coleccion)
//     .find(myquery)
//     .sort(mysort)
//     .toArray((err, result) => {
//       if (err) throw err;
//       console.log(result);
//       database.close();
//     });
// });
// ​
// //Todos los coches de color rojo  y  precio de 53900
// cliente.connect(url, (err, database) => {
//   if (err) throw err;
//   const db = database.db(mydb);
//   const myquery = { color: 'red', price: 53900 };
//   db.collection(coleccion)
//     .find(myquery)
//     .toArray((err, result) => {
//       if (err) throw err;
//       console.log(result);
//       database.close();
//     });
// });
// ​
// //Actualizar los coches azules con precio de 53500 a
// //coches rojos con precio de 53900
// cliente.connect(url, (err, database) => {
//   if (err) throw err;
//   const db = database.db(mydb);
//   const myquery = { color: 'blue', price: 53500 };
//   const newValues = { $set: { color: 'red', price: 70000 } };
//   db.collection(coleccion)
//     .toArray()
//     .updateMany(myquery, newValues), (err, res) => {
//         if (err) throw err;
//         console.log('Documento actualizado');
//         database.close();
//       };
// });
// ​
// // Modificar coches BMW (Q60174112) para que cuesten 33000
// cliente.connect(url, (err, database) => {
//   if (err) throw err;
//   const db = database.db(mydb);
//   const myquery = { name: 'BMW' };
//   const newValues = { $set: { price: 33000 } };
//   db.collection(coleccion)
//     .toArray()
//     .updateMany(myquery, newValues), (err, res) => {
//       if (err) throw err;
//       console.log('Documento actualizado');
//       database.close();
//     };
// });
// ​
// //Borrar un documento de la coleccion que sea azul
// cliente.connect(url, (err, database) => {
//   if (err) throw err;
//   const db = database.db(mydb);
//   const myquery = { color: 'blue' };
//   db.collection(coleccion)
//     .deleteOne(myquery, (err, res) => {
//         if (err) throw err;
//         console.log('Documento eliminado');
//         database.close();
//     });
// });
// //Borrar documentos de la coleccion que sean rojos
// cliente.connect(url, (err, database) => {
//   if (err) throw err;
//   const db = database.db(mydb);
//   const myquery = { color: 'red' };
//   db.collection(coleccion)
//     .deleteMany(myquery, (err, res) => {
//         if (err) throw err;
//         console.log('Documento eliminado');
//         database.close();
//     });
// });
// ​
// //Borrar coleccion Manufacturers
// cliente.connect(url, (err, database) => {
//   if (err) throw err;
//   const db = database.db(mydb);
//   db.collection('manufacturers')
//     .drop((err, ok) => {
//         if (err) throw err;
//         if (ok) console.log('Coleccion borrada con éxito');
//         database.close();
//     });
// });