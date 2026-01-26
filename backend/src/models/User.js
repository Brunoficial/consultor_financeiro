class User {
    id; 
    name; 
    email; 
    password; 

    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    get_id() {
        return this.id;
    }

    get_name() {
        return this.name;
    }

    get_email() {
        return this.email;
    }

    check_password(password) {
        return this.password === password;
    }

    set_name(name) {
        this.name = name;
    }

    set_email(email) {
        this.email = email;
    }

    set_password(password) {
        this.password = password;
    }
} 