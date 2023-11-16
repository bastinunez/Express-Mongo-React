db = db.getSiblingDB('mongo_db')

db.createUser({
  user: "user",
  pwd: "user",  // Cambia esto a tu contraseña
  roles: [{ role: "readWrite", db: "mongo_db" }]
})

db.createCollection('messages');  // Usa 'messages' en lugar de 'Message'

db.messages.insertMany([
  {
    nombre:"Bastian",
    nota: "7"
  },
  {
    nombre:"Alonso",
    nota: "2"
  },
  {
    nombre:"Carlos",
    nota: "3"
  },
]);