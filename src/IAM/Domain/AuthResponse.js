// src/modules/iam/domain/AuthResponse.js
import { User } from './User.js';

export class AuthResponse {
    /**
     * @param {string} token - El JWT string
     * @param {Object} userData - Los datos crudos del usuario (json)
     */
    constructor(token, userData) {
        this.token = token;

        // AQUÍ OCURRE LA MAGIA:
        // Convertimos los datos sueltos en una Clase User real.
        // Así el resto de tu app recibe un objeto con poderes (como .isAdmin())
        this.user = new User(userData);
    }
}