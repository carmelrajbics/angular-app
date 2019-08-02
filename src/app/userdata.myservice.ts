import { Injectable } from '@angular/core';

@Injectable() 
export class UserData{

    loadUser():string[]{

        return ['admin','Manger','Guest'];
    }
}