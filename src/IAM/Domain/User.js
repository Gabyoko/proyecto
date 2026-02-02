export class User {
    // Solo nos importa el username y el rol
    constructor({ username, role }) {
        this.username = username;
        this.role = role;
    }

    // Método para saber si tiene permisos
    isAdmin() {
        return this.role === 'admin';
    }
}