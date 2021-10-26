import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent implements OnInit {
  showFiller = false;
  @ViewChild('drawer', { static: true }) public drawer!: MatDrawer;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}

  ngOnInit(): void {}
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }
}
