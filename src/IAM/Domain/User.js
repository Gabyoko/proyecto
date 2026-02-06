export class User {
    // Solo nos importa el username y el rol
    constructor({ username, role }) {
        this.username = username;
        this.role = role;
    }

   isAdmin() {
        return this.role === 'admin';
    }
}