/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { uploadPictureofPerson } from '../fn/upload-controller/upload-pictureof-person';
import { UploadPictureofPerson$Params } from '../fn/upload-controller/upload-pictureof-person';

@Injectable({ providedIn: 'root' })
export class UploadControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `uploadPictureofPerson()` */
  static readonly UploadPictureofPersonPath = '/upload/bm/v1/person';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadPictureofPerson()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadPictureofPerson$Response(params?: UploadPictureofPerson$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return uploadPictureofPerson(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `uploadPictureofPerson$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadPictureofPerson(params?: UploadPictureofPerson$Params, context?: HttpContext): Observable<string> {
    return this.uploadPictureofPerson$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
