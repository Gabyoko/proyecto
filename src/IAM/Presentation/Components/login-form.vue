<script setup lang="ts">

</script>

<template>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
<h2 class="titulo">Log In</h2>
  <div class="yoko">
  <form class="form">
  <div class="form-group">

    <input
        type="text"
        id="username1"
        v-model="usuario"
        placeholder="Username"
        class="username-input"
    />
    <input
        type="password"
        id="username"
        v-model="password"
        placeholder="Password"
        class="username-input"
    />
  </div>
  <div class="button">
    <button type="submit">Log In

    </button>
  </div>
  </form>
    <div class="register-link">
      <p>¿No tienes cuenta?</p>
      <router-link to="/register" class="link">Regístrate aquí</router-link>
    </div>
  </div>
</template>

<style scoped>
.titulo {
  font-family: 'Poppins', sans-serif;
}

.form{
  display: flex;
  flex-direction: column;
  gap: 1rem;


}
.form-group{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

}
.username-input {
width: 100%;
  height: 40px;

  border: 1px solid #ccc ;
  outline: none;
  border-radius: 10px;

}
.username-input::placeholder {
  color: #b8b8b8;
  font-family: 'Poppins', sans-serif;
}

.button button{
  background-color: #4E57F5;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 10px;
  color: white;
  font-family: 'Poppins', sans-serif;
}
.yoko{
  width: 350px;
  height: 500px;
}

</style>