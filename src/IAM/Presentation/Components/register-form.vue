<script setup lang="ts">
import { ref } from 'vue';

// Variables reactivas para conectar con el HTML
const usuario = ref('');
const password = ref('');
const role = ref('user'); // Valor por defecto 'user'

// Función para simular el envío (aquí conectarás tu Store después)
const handleRegister = () => {
  console.log("Enviando al backend:", {
    username: usuario.value,
    password: password.value,
    role: role.value // <--- ESTO ES LO NUEVO
  });
}
</script>

<template>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">

  <h2 class="titulo">Create Account</h2> <div class="yoko">
  <form class="form" @submit.prevent="handleRegister">
    <div class="form-group">

      <input
          type="text"
          id="username-reg"
          v-model="usuario"
          placeholder="Username"
          class="username-input"
          required
      />

      <input
          type="password"
          id="password-reg"
          v-model="password"
          placeholder="Password"
          class="username-input"
          required
      />

      <select v-model="role" class="username-input select-style">
        <option value="user">Usuario Normal</option>
        <option value="admin">Administrador</option>
      </select>

    </div>

    <div class="button">
      <button type="submit">Sign Up</button> </div>
  </form>
  <div class="login-link">
    <p>¿Ya tienes cuenta?</p>
    <router-link to="/login" class="link">Inicia sesión</router-link>
  </div>
</div>
</template>

<style scoped>
.titulo {
  font-family: 'Poppins', sans-serif;
  text-align: center; /* Centré el título para que se vea mejor */
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 1rem; /* Separación entre inputs */
  width: 100%;
}

.username-input {
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  outline: none;
  border-radius: 10px;
  padding-left: 10px; /* Para que el texto no pegue al borde */
  box-sizing: border-box; /* Importante para que el padding no rompa el ancho */
  font-family: 'Poppins', sans-serif;
}

/* Estilo específico para el Select para que se vea igual a los inputs */
.select-style {
  background-color: white;
  color: #555;
  cursor: pointer;
}

.username-input::placeholder {
  color: #b8b8b8;
  font-family: 'Poppins', sans-serif;
}

.button button {
  background-color: #4E57F5;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 10px;
  color: white;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  font-weight: 600;
  margin-top: 10px;
}

.button button:hover {
  background-color: #3b44c9; /* Efecto hover opcional */
}

.yoko {
  width: 350px;
  /* height: 500px;  <- Quité la altura fija para que se adapte al contenido extra */
  margin: 0 auto; /* Centrar el formulario en la pantalla */
}
</style>