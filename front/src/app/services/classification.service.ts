import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { createClassification } from '../models/classification';
import { modifyClassification } from '../models/classification';

@Injectable({
  providedIn: 'root'
})
export class ClassificationService {

  private apiUrl = environment.api;
  // private authToken: string;
  private formData: any;

  constructor(private http: HttpClient) { }

  createClassification(creatingRequest: createClassification):Observable<any>{
    return this.http.post(`${this.apiUrl}/classification/createClassification`, creatingRequest);
  }
  
  getOneClassification(id: string): Observable<any>{
    return this.http.get(`${this.apiUrl}/classification/getOneClassification/` + id);
  }

  modifyClassification(id: string, modifyingRequest: modifyClassification): Observable<any>{
    return this.http.put(`${this.apiUrl}/classification/modifyClassification/` + id, modifyingRequest);
  }

}
