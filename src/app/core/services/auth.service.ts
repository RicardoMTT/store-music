import { Injectable } from '@angular/core';
import { AuthApi } from './auth.api';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  responseObservable: Observable<any>;
  private auth$: BehaviorSubject<string> = new BehaviorSubject<string>(
    localStorage.getItem('token')
  );

  public authPublic = this.auth$.asObservable();

  constructor(private authApi: AuthApi, private router: Router) {
    console.log('constructor auth');
  }

  login(email: string, password: string) {
    this.responseObservable = this.authApi.loginFirebase(email, password);
    this.responseObservable.subscribe((token) => {
      localStorage.setItem('token', token);
      this.updateAuthSessionObs();
      this.router.navigate(['']);
    });
  }
  updateAuthSessionObs() {
    const token = localStorage.getItem('token');
    this.auth$.next(token);
  }
  // async login(email, password) {
  //   this.authApi
  //     .login(email, password)
  //     .pipe(
  //       tap(({ jwt }) => {
  //         localStorage.setItem('token', jwt);
  //       }),
  //       //switchMap((loginResponse:any) =>{}
  //       //OBTENER PROFILE
  //       // this.authApi.getMyProfile().pipe(
  //         //   map((profileResponse) => {
  //         //     console.log('profile', profileResponse);
  //         //     return {
  //         //       user: loginResponse,
  //         //       profile: profileResponse,
  //         //     };
  //         //   })
  //         // )
  //       //

  //       // ),
  //       tap((result) => {
  //         // const profile = result.profile;
  //         // const user = result.user;
  //         // const resultId = user.user.id;
  //         // this.sessionStore.update({
  //         //   loggedUserId: resultId,
  //         //   isLoadUserDone: true,
  //         //   customer: {
  //         //     id: profile.id,
  //         //     names: profile.name,
  //         //     lastnames: profile.lastName,
  //         //     documentNumber: profile.documentNumber,
  //         //     documentType: {
  //         //       id: profile.documentType.id,
  //         //       name: profile.documentType.name,
  //         //     } as DocumentType,
  //         //     phone: profile.phone,
  //         //     country: {
  //         //       id: profile.country.id,
  //         //       code: profile.country.code,
  //         //     } as Country,
  //         //   } as Customer,
  //         // });
  //       })
  //     )
  //     .subscribe(
  //       (data) => {},
  //       (error) => {
  //         console.log('error', error);
  //       }
  //     );
  // }
}
