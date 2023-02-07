import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/compat/functions';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private fns: AngularFireFunctions) {}

  sendGMail(name: string, email: string, message: string) {
    let callable = this.fns.httpsCallable('sendGMail');
    let data = { 
      "name": name,
      "email": email,
      "message": message 
    };
    return callable(data);
    // https://us-central1-mm-portfolio-3c551.cloudfunctions.net/sendGMail
    // http://localhost:5000/mm-portfolio-3c551/us-central1/sendGMail
  }
}
