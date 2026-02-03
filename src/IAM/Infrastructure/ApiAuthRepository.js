import axios from 'axios';
import { User } from '@/IAM/Domain/User.js';

// Apuntamos al backend de tu compañero
const api = axios.create({
    baseURL: 'http://127.0.0.1:5000'
});

export const apiAuthRepository = {

    async login(username, password) {
        try {
            // PASO 1: Loguearse (Solo nos dan el token)
            const response = await api.post('/login', { username, password });
            const token = response.data.token;

            // PASO 2: Usar ese token para preguntar "¿Quién soy?"
            // Intentamos entrar a /dashboard que solo deja pasar a admins
            let role = 'user'; // Asumimos que es normal por defecto

            try {
                const dashboardResponse = await api.get('/dashboard', {
                    headers: { Authorization: `Bearer ${token}` }
                });

                // Si entramos, confirmamos el rol que nos diga el backend
                // Tu endpoint /dashboard devuelve: { username, role, message }
                role = dashboardResponse.data.role;

            } catch (error) {
                // Si nos da error 403, es que el token sirve pero NO es admin
                console.log("Login correcto, pero no es admin");
            }


            const user = new User({
                username: username,
                role: role
            });

            // Guardamos el token (necesario para futuras peticiones)
            localStorage.setItem('authToken', token);

            return { user, token };

        } catch (error) {
            throw new Error("Usuario o contraseña incorrectos");
        }
    },

    logout() {
        localStorage.removeItem('authToken');
    }
};