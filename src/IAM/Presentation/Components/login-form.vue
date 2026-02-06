<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '@/IAM/Application/authStore.js'; // (Revisa mayúsculas/minúsculas)
// 1. Instanciamos el Store (El cerebro)
const authStore = useAuthStore();

// 2. Variables reactivas para los inputs
const usuario = ref('');
const password = ref('');
const mensaje = ref(''); // Para mostrar feedback visual

// 3. La función que se ejecuta al dar click
const handleLogin = async () => {
  if (!usuario.value || !password.value) {
    alert("Por favor, llena ambos campos");
    return;
  }

  mensaje.value = "Conectando con el servidor...";

  try {
    // Llamamos a la acción 'login' del Store
    // (Esto activará el repositorio -> axios -> backend -> doble salto -> guardará usuario)
    await authStore.login(usuario.value, password.value);

    // Si llegamos aquí, ¡es que funcionó!
    mensaje.value = "";

    // Mostramos la alerta triunfal con los datos que recuperamos del backend
    alert(`🎉 ¡ACCESO CONCEDIDO! \n\nBienvenido: ${authStore.user.username}\nRol detectado: ${authStore.user.role}`);

    // AQUÍ es donde redirigirías si tuvieras más pantallas:
    // router.push('/dashboard');

  } catch (error) {
    console.error(error);
    mensaje.value = ""; // Limpiamos mensaje de carga
    alert("❌ Error: Usuario o contraseña incorrectos (o el servidor no responde)");
  }
}
</script>

<template>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">


  <div class="container">

     <div class="LOGIN">
       <div>
  <h2 class="titulo">Log In</h2>

  <div class="yoko">
    <form class="form" @submit.prevent="handleLogin">
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
            id="password"
            v-model="password"
            placeholder="Password"
            class="username-input"
        />
      </div>

      <div class="button">
        <button type="submit" :disabled="!!mensaje">
          {{ mensaje ? 'Cargando...' : 'Log In' }}
        </button>
      </div>
    </form>
  </div>

</div>
     </div>
    <div class="imagen">
      <img src="@/assets/fotro.jpg">
    </div>

  </div>
</template>

<style scoped>
/* Tus estilos se mantienen IGUALES */
.titulo {
  font-family: 'Poppins', sans-serif;
  text-align: center;
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
  padding-left: 10px; /* Agregué esto para que el texto no pegue al borde */
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
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
  cursor: pointer; /* Para que salga la manito */
  font-weight: 600;
}
.button button:disabled {
  background-color: #9ea3f0;
  cursor: not-allowed;
}
.yoko{

  width: 400px;
  /* height: 500px; Quité la altura fija para evitar problemas si crece el contenido */
  margin:  auto;
}

.LOGIN{
flex: 1;
  width: fit-content;
  margin:  20rem 0px 0px 11rem;
display: flex;

}
.container{
  display: flex;

  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.imagen{
flex: 2;

}
.imagen img{
  width: 100%;
  height: 100%;
  object-fit: cover;      /* Rellena el espacio sin deformarse */
  display: block;

}
</style>