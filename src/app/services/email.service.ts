import { Injectable } from '@angular/core';
import { FunctionsInstances } from '@angular/fire/functions'

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private fns: FunctionsInstances) { }

  sendEmail(nome: string, email: string, key: string) {
    let callable = this.fns.httpsCallable('sendMail');
    let data = { 
      nome: nome,
      dest: email,
      key: key 
    };
    console.log("data: ", data);
    return callable(data);
    // https://us-central1-mm-poker.cloudfunctions.net/sendMail
  }
}
