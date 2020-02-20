import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppConfiguration } from '../../../core/models';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  constructor(private http: HttpClient) {}

  getConfig(fileName: string): Observable<AppConfiguration> {
    return this.http.get<AppConfiguration>(`${environment.localUrl}/${fileName}.json`);
  }
}
