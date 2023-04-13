import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  fireauth: any;
  router: any;

  constructor() {}

  googleSignIn() {
    return this.fireauth.signInWithPopup(new GoogleAuthProvider()).then(
      (res: any) => {
        this.router.navigate(['/homepage']);
        localStorage.setItem('token', JSON.stringify(res.user?.uid));
      },
      (err: any) => {
        alert(err.message);
      }
    );
  }
}
