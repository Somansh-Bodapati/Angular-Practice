import { Directive, effect, inject, input } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {
  userType = input .required<Permission>({alias: 'appAuth'});
  private authService = inject(AuthService);

  constructor() { 
    effect(() => {
      if (this.authService.activePermission() === this.userType()) {
        console.log('User is authorized');
      } else {
        console.log('User is not authorized');
      }
  });
}

}
