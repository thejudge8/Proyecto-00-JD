const mongoose = require("./database");
const Usuario = require("./models/Usuario");

const apiUrl = "http://localhost:5000/auth"; // URL del backend

// REGISTRO DE USUARIO
document
  .getElementById("registerForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault(); // Evita que la página se recargue

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Enviar los datos al backend
    const res = await fetch(`${apiUrl}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json(); // Recibe la respuesta del backend

    if (res.ok) {
      alert("✅ Registro exitoso, ahora inicia sesión");
    } else {
      alert(`❌ Error: ${data.error}`);
    }
  });
