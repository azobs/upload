/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { upload } from '../fn/file-controller/upload';
import { Upload$Params } from '../fn/file-controller/upload';

@Injectable({ providedIn: 'root' })
export class FileControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `upload()` */
  static readonly UploadPath = '/uploadimage';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `upload()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  upload$Response(params?: Upload$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return upload(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `upload$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  upload(params?: Upload$Params, context?: HttpContext): Observable<void> {
    return this.upload$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
