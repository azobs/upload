/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { loadResourceById } from '../fn/load-controller/load-resource-by-id';
import { LoadResourceById$Params } from '../fn/load-controller/load-resource-by-id';

@Injectable({ providedIn: 'root' })
export class LoadControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `loadResourceById()` */
  static readonly LoadResourceByIdPath = '/loadresource/bm/v1/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loadResourceById()` instead.
   *
   * This method doesn't expect any request body.
   */
  loadResourceById$Response(params: LoadResourceById$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return loadResourceById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `loadResourceById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  loadResourceById(params: LoadResourceById$Params, context?: HttpContext): Observable<Blob> {
    return this.loadResourceById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}
