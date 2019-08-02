import { InMemoryDbService } from 'angular-in-memory-web-api'

export class UserDataFromDB implements InMemoryDbService {
    createDb() {

        let userData = [{
            id: 1,
            name: 'Carmel Raj',
            email: 'carmelbiit@gmail.com',
            income: 3235,
            address: 'Chennai, TamilNadu'
        }];

        return { userDataFromDb: userData };
    }
}