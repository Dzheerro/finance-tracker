import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  userService: UserService = inject(UserService);
  router: Router = inject(Router);

  accountForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required])
  });

  createAccount() {
    console.log('clicked');
    this.userService.addUserAccount(this.accountForm.value);
    this.router.navigateByUrl('/home');
  }
}
