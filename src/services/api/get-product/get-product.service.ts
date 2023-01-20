import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResProductData } from './interfaces/productGetData';

@Injectable({
  providedIn: 'root'
})
export class GetProductService {

  constructor(private http: HttpClient) { }

  getDataFromFakeJsonParam(productId: number): Observable<ResProductData> {
    return this.http.get<ResProductData>(
      `https://fakestoreapi.com/products/${productId}`,
    );
  }
}