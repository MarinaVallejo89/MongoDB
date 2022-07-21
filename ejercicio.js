// variables globales
const manufacturers = require('./modules/manufacturers');
const mongo = require("mongodb");
const cliente = mongo.MongoClient;

const user = "MarinaV";
const passwd = "contramongo89";

const mydb = "Prueba";
const coleccion = "Quiz";

const url = `mongodb+srv:${user}:${passwd}@marinacluster.iwfzh75.mongodb.net/?retryWrites=true&w=majority`;
//  creación colección manufacturers
cliente.connect(url, (err, database) => {
  if (err) throw err;
  const db = database.db(mydb);
  db.createCollection("manufacturers", function (err, res) {
    if (err) throw err;
    console.log("Colección creada con éxito");
    database.close();
  });
});

//  + un documento a la colección
const myObj = {
  name: "SEAT",
  cif: "B60258512",
  address: "C. de Mayor, 7, 28055. Madrid",
};
cliente.connect(url, (err, database)=> {
  if (err) throw err;
  const db = database.db(mydb);
  db.collection("manufacturers").insertOne(myObj, (err, database) => {
    if (err) throw err;
    console.log("Documento añadido con éxito");
    database.close();
  });
});

// + conjunto de documentos a la colección
cliente.connect(url, (err, database) => {
  if (err) throw err;
  const db = database.db(mydb);
  db.collection("manufacturers").insertMany(manufacturers, (err, res) => {
    if (err) throw err;
    console.log("Coleccion rellena");
    database.close();
  });
});

//- un documento de la coleccion products
cliente.connect(url, (err, database) => {
  if (err) throw err;
  const db = database.db(mydb);
  const myquery = { color: "red" };
  db.collection("products").deleteOne(myquery, (err, res) => {
      if (err) throw err;
      console.log("Documento eliminado");
      database.close();
    });
});

//- una coleccion
cliente.connect(url, (err, database) => {
    if (err) throw err;
    const db = database.db(mydb);
    db.collection("products").drop((err, ok) => {
        if (err) throw err;
        if (ok) console.log("Coleccio bborrada con éxito");
        database.close();
    });
});

//Actualizar un documento
cliente.connect(url, (err, database)=>{
    if (err) throw err;
    const db = database.db(mydb);
    const myquery = { color: "red" };
    const newValues = { $set: {'color': 'purple', 'price': 5000}};
    db.collection('Quiz').updateOne(myquery, newValues, (err, res)=>{
        if (err) throw err;
        console.log('Documento actualizado');
        database.close();
    })
})

//Creación BBDD nueva
cliente.connect(url, (err, database)=>{
    if (err) throw err;
    console.log('Base de datos creada');
    database.close();
})