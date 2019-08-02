export class UserModel {
    name: string;
    email: string;
    income: number;
    address: string;

    constructor(name: string, email: string, income: number, address: string) {
        this.name = name;
        this.email = email;
        this.income = income;
        this.address = address;
    }
}