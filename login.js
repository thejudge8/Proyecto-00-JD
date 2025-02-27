// LOGIN DE USUARIO
const mongoose = require("./database");
const Usuario = require("./models/Usuario");

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  // Enviar datos al backend
  const res = await fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (res.ok) {
    localStorage.setItem("token", data.token); // Guardar token en el navegador
    alert("✅ Inicio de sesión exitoso");
    window.location.href = "index.html"; // Redirige al usuario
  } else {
    alert(`❌ Error: ${data.error}`);
  }
});
