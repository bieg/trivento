import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

//import { User } from './User';

@Injectable()
export class UserService {
  private userUrl = './assets/user_list.json';

  constructor(private httpService: Http) { }

  getAll(): Promise<User[]> {
    return this.httpService.get(this.userUrl)
      .toPromise()
      .then(response => response.json() as User[])
      .catch(this.handleError);
  }

  private handleError(error:any): Promise<any> {
    console.error('Oops - again?', error);
    return Promise.reject(error.message || error);
  }

}

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  address: string;
  job_role: string;
  show: boolean
}

