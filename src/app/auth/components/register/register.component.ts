import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { BackendErrorsInterface } from "src/app/shared/types/backend-error.interface";

import { registerAction } from "../../store/actions/register.action";
import { isSubmittingSelector, validationErrorsSelector } from "../../store/selectors";
import { RegisterRequestInterface } from "../../types/register-request.interface";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorsInterface|null>;

  constructor(
      private fb: FormBuilder, 
      private store: Store,
      ) {
    //this.initializeForm();
  }

  ngOnInit(): void {
    this.initializeValue();
    this.initializeForm();
  }

  initializeValue() {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }

  initializeForm() {
    console.log("initialization");
    this.registrationForm = this.fb.group({
      username: ["", Validators.required],
      email: ["", Validators.email],
      password: ["", Validators.minLength(3)],
    });
  }

  onSubmit(): void {
    console.log(
      "submit",
      this.registrationForm.value,
      this.registrationForm.valid
    );

    const request: RegisterRequestInterface = {
      user: this.registrationForm.value 
    }

    this.store.dispatch(registerAction({request}));
         

  }
}
