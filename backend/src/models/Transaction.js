class Transaction {
    id; 
    description;
    date;
    amount;
    type;
    category;
    account_type; 
    user_id;

    constructor(id, description, date, amount, type, category, account_type, user_id) {
        this.id = id;
        this.description = description;
        this.date = date;
        this.amount = amount;
        this.type = type;
        this.category = category;
        this.account_type = account_type;
        this.user_id = user_id;
    }

    get_id() {
        return this.id;
    }

    get_description() {
        return this.description;
    }

    get_date() {
        return this.date;
    }

    get_amount() {
        return this.amount;
    }

    get_type() {
        return this.type;
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

    set_date(date) {
        this.date = date;
    }

    set_amount(amount) {
        this.amount = amount;
    }

    set_type(type) {
        this.type = type;
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

export default Transaction 