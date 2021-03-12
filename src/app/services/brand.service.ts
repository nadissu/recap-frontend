import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BrandResponseModel } from '../models/brandResponseModel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl="https://localhost:44345/api/brands/getall"
  constructor(private httpClient:HttpClient) { }
  getBrands():Observable<BrandResponseModel>{
    return this.httpClient.get<BrandResponseModel>(this.apiUrl);
    }
  }
