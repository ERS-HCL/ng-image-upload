import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public url;
  @Input('fileSize') public fileSize;
  public isValidSize: boolean = false;
  errorMsg;

  public onFileChange(event: any, fileType: string) {
    if (event) {
      this.url = '';
      this.errorMsg = '';
      console.log(event);
      var render = new FileReader();
      let fileData;
      if (fileType === 'drag') {
        fileData = event[0];
      } else if (fileType === 'input') {
        fileData = event.target.files[0];
      }
      if (this.validateFileType(fileData)) {
        if (!this.validateFileSize(fileData)) {
          render.readAsDataURL(fileData);
          render.onload = (event: any) => {
            this.url = event.target.result;
          }
        } else {
          this.errorMsg = `Allowed maximum file size is ${this.fileSize}Mb.`;
        }
      } else {
        this.errorMsg = `Images only allowed.`;
      }
    }
  }

  private validateFileSize(fileSizeInfo) {
    var fileSizeinMB = fileSizeInfo.size / (1024 * 1000);
    var size = Math.round(fileSizeinMB * 100) / 100; // convert upto 2 decimal place
    console.log(size);
    if (this.fileSize > size) {
      console.log('smaller image');
      return false;
    } else {
      console.log('big image');
      return true;
    }
  }

  private validateFileType(fileData) {
    const fileType: string = fileData.type;
    if (fileType.indexOf('image') > -1) {
      return true;
    } else {
      return false;
    }
  }

}
