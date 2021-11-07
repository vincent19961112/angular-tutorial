import { Upload } from './../models/upload.model';
import { UploadService } from './../services/upload.service';
import { Component } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent  {

  files: FileList;
  upload: Upload;

  constructor(private uploadService: UploadService) { }

  handleFiles(event){
    this.files = event.target.files;
  }

  uploadFiles(){
    const filesToUpload = this.files;
    // console.log(_.range(filesToUpload.length))
    const filesIdx = _.range(filesToUpload.length);
    _.each(filesIdx,(idx) => {
      // console.log(filesToUpload[idx]);
      this.upload = new Upload(filesToUpload[idx]);

      this.uploadService.UploadFile(this.upload);
    })
  }


}
