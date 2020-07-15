import {Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {AuthService} from '../../../core/auth/auth.service';
import {Router} from '@angular/router';
import {ILogin} from '../../../interfaces/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  public md: ILogin = {
    login: '',
    password: ''
  };

  constructor(
    private cdRef: ChangeDetectorRef,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.cdRef.markForCheck();
    }, 1);
  }

  onSubmit() {
    this.auth.login({...this.md}).subscribe((v) => {
      this.router.navigate(['/document']);
    });
  }
}
