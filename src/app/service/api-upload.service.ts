import { Injectable } from '@angular/core';
import {UploadControllerService} from "../../../api/services/upload-controller.service";
import {UploadPictureofPerson$Params} from "../../../api/fn/upload-controller/upload-pictureof-person";

@Injectable({
  providedIn: 'root'
})
export class ApiUploadService {

  constructor(
    private uploadService: UploadControllerService
  ) { }


  pushFileToStorage(file: File){
    console.log("Preparation des donnees de la requete Http ");//+JSON.stringify(file)
    localStorage.setItem('toConsumes','multipart/form-data');

    const params: UploadPictureofPerson$Params = {
      body:{
        fileName: new Blob([file])
        //fileName: file
      }
    };

    return this.uploadService.uploadPictureofPerson(params);

  }


}
