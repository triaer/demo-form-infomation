import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '../services/message.service';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { PersonalInfoModel } from '../models/personal-info-model';
import { BasicInfoModel } from '../models/basic-info-model';
@Injectable({
  providedIn: 'root'
})
export class PersonalInfomationService {
  private persionalUrl = "api/personalInfo"

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) { }

  /**
   * Log a HeroService message with the MessageService
   * @param message 
   */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * @param operation 
   * @param result 
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /**
   * Get personal infos
   */
  getPersonalInfos(): Observable<PersonalInfoModel[]> {
    return this.http.get<PersonalInfoModel[]>(this.persionalUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<PersonalInfoModel[]>('getPersonalInfos', []))
      );
  }

  /**
   * Add new persional info
   * @param hero 
   */
  addPersonalInfo(personalInfo: PersonalInfoModel): Observable<PersonalInfoModel> {
    return this.http.post<PersonalInfoModel>(this.persionalUrl, personalInfo, this.httpOptions).pipe(
      tap((newInfo: PersonalInfoModel) => this.log(`added info w/ id=${newInfo.id}`)),
      catchError(this.handleError<PersonalInfoModel>('addInfo'))
    );
  }

  /**
   * Add new persional info
   * @param hero 
   */
  addBasicInfo(basicInfo: BasicInfoModel): Observable<BasicInfoModel> {
    return this.http.post<BasicInfoModel>(this.persionalUrl, basicInfo, this.httpOptions).pipe(
      tap((newInfo: BasicInfoModel) => this.log(`added basic info w/ id=${newInfo.id}`)),
      catchError(this.handleError<BasicInfoModel>('addInfo'))
    );
  }

  /**
   * Get personal info w/ id
   * @param id 
   */
  getPersonalInfo<Data>(id: number): Observable<PersonalInfoModel> {
    const url = `${this.persionalUrl}/?id=${id}`;
    return this.http.get<PersonalInfoModel[]>(url)
      .pipe(
        map(infos => infos[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} personal info w/ id=${id}`);
        }),
        catchError(this.handleError<PersonalInfoModel>(`getPersonalInfo id=${id}`))
      );
  }
}
