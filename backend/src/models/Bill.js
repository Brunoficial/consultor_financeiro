class Bill {
    id; 
    description
    due_date;
    payment_date;
    paid;
    category;
    account_type;
    user_id;

    constructor(data) {
        this.id = data.id;
        this.description = data.description || "";
        this.due_date = data.due_date || null;
        this.payment_date = data.payment_date || null;
        this.paid = data.paid || false;
        this.category = data.category || "";
        this.account_type = data.account_type || "";
        this.user_id = data.user_id || null;
    }

    get_id() {
        return this.id;
    }

    get_description() {
        return this.description;
    }

    get_due_date() {
        return this.due_date;
    }

    get_payment_date() {
        return this.payment_date;
    }

    is_paid() {
        return this.paid;
    }

    get_category() {
        return this.category;
    }

    get_account_type() {
        return this.account_type;
    }

    get_user_id() {
        return this.user_id;
    }

    set_description(description) {
        this.description = description;
    }

    set_due_date(due_date) {
        this.due_date = due_date;
    }

    set_payment_date(payment_date) {
        this.payment_date = payment_date;
    }

    set_paid(paid) {
        this.paid = paid;
    }

    set_category(category) {
        this.category = category;
    }

    set_account_type(account_type) {
        this.account_type = account_type;
    }

    set_user_id(user_id) {
        this.user_id = user_id;
    }
}

export default User 