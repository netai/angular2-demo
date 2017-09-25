import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServerService {
    
    private headers: Headers = new Headers({ 'Content-Type': 'application/json' });
    
    constructor (private http: Http) {}
    
    public fetchData(): Observable<any>  {
        return this.http.get(this.fetch_record_url)
            .map((response: Response) => {
                try {
                    return response.json();
                } catch (e) {
                    console.log(e);
                }
            })
            .catch((serverError: Response) => {
                try {
                    return Observable.throw(`${serverError._body}`)
                } catch (e) {
                    return Observable.throw(`${serverError}`)
                }
            })
    }
    
    /*
    this.serverServices.getPatientDocuments(this.modalServices.documentViewerMRN)
      .subscribe(
        returnedDocuments => {
          for (var key in returnedDocuments) {
            if (!!returnedDocuments[key]['creationDate']) {
             returnedDocuments[key]['creationDate'] = this.helperServices.convertDate(returnedDocuments[key]['creationDate']);
            }
            if (!!returnedDocuments[key]['documentDate']) {
               returnedDocuments[key]['documentDate'] = this.helperServices.convertDate(returnedDocuments[key]['documentDate']);
            }
            this.documents.push(returnedDocuments[key])
            this.filteredDocuments.push(returnedDocuments[key])
          }
          this.getFilters(this.documents);
          this.handleSortClick('documentDate')
        },
        error => {
          this.helperServices.displayErrorModal('Error fetching patient documents.', error);
        }
      )
      */
    
}