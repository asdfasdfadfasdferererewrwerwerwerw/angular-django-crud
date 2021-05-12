import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseURL = 'https://localhost:8080/api/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<any> {
    return this.httpClient.get(baseURL);
  }

  getProducts(id: any): Observable<any> {
    return this.httpClient.get(`${baseURL}/${id}`);
  }

  createProducts(data: any): Observable<any> {
    return this.httpClient.post(baseURL, data);
  }

  updateProducts(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${baseURL}/${id}`, data);
  }

  deleteProducts(id: any): Observable<any> {
    return this.httpClient.delete(`${baseURL}/${id}`);
  }

  deleteAllProducts(): Observable<any> {
    return this.httpClient.delete(baseURL);
  }

  getProductsByName(name: any): Observable<any> {
    return this.httpClient.delete(`${baseURL}?name=${name}`);
  }
}
