import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { empty, from, of } from 'rxjs';
import { map, tap, catchError, switchMap } from 'rxjs/operators';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class AuthApi {
  constructor(private http: HttpClient, private afAuth: AngularFireAuth) {}
  login(email: string, password: string) {
    const passwordToLowerCase = password.toLowerCase();
    return this.http
      .post(
        // `${environment.backendUrl}/clientes/customLogin`,
        '',
        {
          identifier: email,
          password: passwordToLowerCase,
        }
      )
      .pipe(
        tap((result: any) => {
          return {
            jwt: result.jwt,
            user: {
              id: result.user.id,
              email: result.user.email,
            } as any,
          };
        }),
        catchError((err) => {
          console.log('ERRRI', err);
          const error = err.error.message[0].messages[0].message;
          if (error === 'Identifier or password invalid.') {
            console.log('CAPTURANDO ERROR');
          }
          return empty();
        })
      );
  }

  loginFirebase(email, password) {
    return from(this.afAuth.signInWithEmailAndPassword(email, password)).pipe(
      tap((val) => console.log('val', val)),
      switchMap((_: any) => firebase.default.auth().currentUser.getIdToken()),
      catchError((error: any) => of(false))
    );
  }
}
