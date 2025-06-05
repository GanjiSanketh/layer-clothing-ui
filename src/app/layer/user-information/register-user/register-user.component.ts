import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserInformationService } from '../../../../core/services/user-information.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.scss',
  standalone: false
})
export class RegisterUserComponent {
  registerForm!: FormGroup;

  constructor(private readonly formBuilder: FormBuilder, private readonly userInformationService: UserInformationService) {
    this.registerForm = this.formBuilder.group({
      FullName: ['', Validators.required],
      MobileNumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      RoleId: [2],
      StatusId: [1]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      let saveValue = this.registerForm.value;
      this.userInformationService.registerUserInformation(saveValue).subscribe({
        next: (data: any) => {
          if (data) {

          }
        },
        error: (error: any) => console.error('Error during registration', error)
      });
    }
  }
}
