import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UploadInfo';

  onFileChange(event) {
    if(event.target.files.length > 0) {
      let file = event.target.files[0];
      // this.form.get('avatar').setValue(file);
      console.log(event);
    }
  }
}
