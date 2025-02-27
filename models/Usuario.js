const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombre: String,
  email: { type: String, required: true, unique: true },
  edad: Number
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
