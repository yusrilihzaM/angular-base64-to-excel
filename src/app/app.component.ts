import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isHidden: boolean = true;
  formGroup;
  rawDataBase64;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      dataBase64: '',
    });
  }

  ngOnInit() {}

  onSubmit(formData) {
    this.rawDataBase64 = formData['dataBase64'];
    this.isHidden = false;
  }

  onKeyTextArea() {
    this.isHidden = true;
  }
}
