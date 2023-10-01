import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ApiUploadService} from "../service/api-upload.service";

@Component({
  selector: 'app-formupload',
  templateUrl: './formupload.component.html',
  styleUrls: ['./formupload.component.scss']
})
export class FormuploadComponent {
  userPictureUrl: string | ArrayBuffer = 'favicon.ico';
  pictureFile: File | null = null;

  constructor(
    private router:Router,
    private apiUpload: ApiUploadService
  ) {
  }

  onUserChangePictureFile(files: FileList | null): void {
    if(files){
      this.pictureFile = files.item(0);
      if(this.pictureFile){
        const fileReader = new FileReader();
        fileReader.readAsDataURL(this.pictureFile);
        fileReader.onload = (event) => {
          if(fileReader.result){
            console.log("\nNom du pictureFile = "+this.pictureFile?.name);
            console.log("\nType du pictureFile = "+this.pictureFile?.type);
            this.userPictureUrl = fileReader.result;
            if(this.pictureFile){
              this.uploadPicture(this.pictureFile);
            }
          }
        };
      }
    }
  }

  uploadPicture(file: File){
    // let formParams = new FormData();
    // formParams.append('fileName', file);
    console.log("le upload se lance donc");
    if(file){
      console.log("Et il appel le service ");
      this.apiUpload.pushFileToStorage(file)
        .subscribe({
          next: data => {
            console.log("data = "+JSON.stringify(data));
          },
          error: err => {
            console.log("error = "+JSON.stringify(err));
          }
        })
    }
    else{
      console.log("file is not present");
    }
  }


}
