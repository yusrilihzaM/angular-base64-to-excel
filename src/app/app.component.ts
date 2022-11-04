import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isHidden: boolean = true;
  formGroup;
  rawDataBase64;
  sorrySwallError = 'Sorry';
  textSwallError = 'You must enter the correct Base64 script!';
  base64Steam = 'data:application/octet-stream;base64,';
  filename = 'result.xls';

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      dataBase64: '',
    });
  }

  ngOnInit() {}

  onSubmit(formData) {
    this.rawDataBase64 = formData['dataBase64'];
    if (this.rawDataBase64 <= 0) {
      swal({
        title: this.sorrySwallError,
        text: this.textSwallError,
        type: 'error',
        showConfirmButton: true,
        showCancelButton: false,
      });
    } else {
      const linkSource = this.base64Steam + this.rawDataBase64;
      const downloadLink = document.createElement('a');
      const fileName = this.filename;

      downloadLink.href = linkSource;
      downloadLink.download = fileName;
      downloadLink.click();
    }
  }

  onKeyTextArea() {
    this.isHidden = true;
  }
}
