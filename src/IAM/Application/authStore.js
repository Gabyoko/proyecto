import { defineStore } from 'pinia';
import { apiAuthRepository } from '../infrastructure/ApiAuthRepository.js';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: localStorage.getItem('authToken') || null,
        user: null,
        isAuthenticated: !!localStorage.getItem('authToken')
    }),

    actions: {
        async login(username, password) {
            try {
                // Llamamos a infra
                const result = await apiAuthRepository.login(username, password);

                // Guardamos en el estado
                this.token = result.token;
                this.user = result.user; // ¡Aquí ya tenemos el rol!
                this.isAuthenticated = true;

                return true;
            } catch (error) {
                console.error(error);
                throw error;
            }
        },

        logout() {
            apiAuthRepository.logout();
            this.user = null;
            this.token = null;
            this.isAuthenticated = false;
        }
    }
});