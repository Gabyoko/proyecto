// src/modules/iam/domain/AuthRepository.js

export class AuthRepository {

    // Iniciar sesión
    async login(username, password) {
        throw new Error("El método LOGIN no ha sido implementado todavía");
    }

    // Registrarse (Añadí 'role' porque tu backend Flask actual lo pide)
    async register(username, password, role) {
        throw new Error("El método REGISTER no ha sido implementado todavía");
    }

    // Cerrar sesión
    logout() {
        throw new Error("El método LOGOUT no ha sido implementado todavía");
    }
}