import { Injectable } from '@angular/core';
import {httpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private httpSvc: httpClient) { }
}
