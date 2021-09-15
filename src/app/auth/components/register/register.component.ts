import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { registerAction } from "../../store/action";
import { isSubmittingSelector } from "../../store/selectors";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  isSubmitting$: Observable<boolean>;

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

    this.store.dispatch(registerAction(this.registrationForm.value));
         

  }
}
