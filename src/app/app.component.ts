import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  signupModel:any={cvFile:'',name:''};
  selectCvFile(event){
    console.log(event)
  }
  save(f,cvFile){
    if(f.valid){
       console.log('saved',f,cvFile)
    }else {
    this.markAsTouched(f.form)
    }
  }

  /**
   * Marks all controls in a form group as touched
   * @param formGroup - The form group to touch
   */
  private markAsTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        this.markAsTouched(control);
      }
    });
  }
}
