import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '../services/message.service';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { PersonalInfoModel } from '../models/personal-info-model';
import { BasicInfoModel } from '../models/basic-info-model';
import { AdvanceInfoModel } from '../models/advance-info-model';
import { AddressInfoModel } from '../models/address-info-model';
@Injectable({
  providedIn: 'root'
})
export class PersonalInfomationService {
  private persionalUrl = "api/personalInfo"
  private basicInfoUrl = "api/personalInfo/basic"
  private advanceInfoUrl = "api/personalInfo/advance"
  private addressInfoUrl = "api/personalInfo/address"

  private personalInfo: PersonalInfoModel;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) {
    this.personalInfo = Object.create(null);
    
    if (this.personalInfo.basicInfo == undefined)
      this.personalInfo.basicInfo = this.initiateBasicInfo();
    if (this.personalInfo.advanceInfo == undefined)
      this.personalInfo.advanceInfo = this.initiateAdvanceInfo();
    if (this.personalInfo.addressInfo == undefined)
      this.personalInfo.addressInfo = this.initiateAddressInfo();
  }

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
   * Add new basic info
   * @param hero 
   */
  addAdvanceInfo(addAdvanceInfo: AdvanceInfoModel): Observable<AdvanceInfoModel> {
    return this.http.post<AdvanceInfoModel>(this.advanceInfoUrl, addAdvanceInfo, this.httpOptions).pipe(
      tap((newInfo: AdvanceInfoModel) => this.log(`added basic info w/ id=${newInfo.id}`)),
      catchError(this.handleError<AdvanceInfoModel>('addAdvanceInfo'))
    );
  }

  /**
   * Add new advance info
   * @param hero 
   */
  addBasicInfo(basicInfo: BasicInfoModel): Observable<BasicInfoModel> {
    return this.http.post<BasicInfoModel>(this.basicInfoUrl, basicInfo, this.httpOptions).pipe(
      tap((newInfo: BasicInfoModel) => this.log(`added basic info w/ id=${newInfo.id}`)),
      catchError(this.handleError<BasicInfoModel>('addBasicInfo'))
    );
  }

  /**
   * Add new adress info
   * @param hero 
   */
  addAddressInfo(addressInfo: AddressInfoModel): Observable<AddressInfoModel> {
    var s = true;


    if (!s == true) {
      return this.http.post<AddressInfoModel>(this.addressInfoUrl, addressInfo, this.httpOptions).pipe(
        tap((newInfo: AddressInfoModel) => this.log(`added address info w/ id=${newInfo.id}`)),
        catchError(this.handleError<AddressInfoModel>('addAddressInfo'))
      );
    }
    else
      return;
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

  setAddressInfo(addressInfo: AddressInfoModel) {
    this.personalInfo.addressInfo = addressInfo;
  }

  setBasicInfo(basicInfo: BasicInfoModel) {
    this.personalInfo.basicInfo = basicInfo;
  }

  setAdvanceInfo(advanceInfo: AdvanceInfoModel) {
    this.personalInfo.advanceInfo = advanceInfo;
  }

  getPersonalInfoLocal(): PersonalInfoModel {
    return this.personalInfo;
  }

  /**
   * Initiate basic info
   */
  public initiateBasicInfo(): BasicInfoModel {
    let basicInfo: BasicInfoModel = {
      id: 0,
      firstName: "",
      middleName: "",
      lastName: "",
      nickName: "",
      gender: "",
      nationality: "",
      nation: "",
      relationshipStatus: "",
      religion: "",
      homeTown: "",
      birthPlace: "",
      note: "",
      dayOfBirth: 1,
      monthOfBirth: 1,
      yearOfBirth: 1990
    }

    return basicInfo;
  }

  /**
   * Intiate advance info
   */
  public initiateAdvanceInfo(): AdvanceInfoModel {
    let advanceInfo: AdvanceInfoModel = {
      id: 0,

      identityCardNumber: "",
      identityCardDate: "",
      expireIdentityCardDate: "",
      identityCardIssueBy: "",

      identityNumber: "",
      identityDate: "",
      expireIdentityDate: "",

      taxNumber: "",
      registrationDate: "",
      registrationPlace: "",

      passportNumber: "",
      passportDate: "",
      expiredPassportDate: "",
      visaIssuedBy: "",
      passportType: "",

      visaNumber: "",
      visaDate: "",
      expiredVisaDate: "",
      nation: "",
    }

    return advanceInfo;
  }

  /**
   * Intiate address info
   */
  public initiateAddressInfo(): AddressInfoModel {
    let addressInfo: AddressInfoModel = {
      id: 0,

      permanentAddress: "",
      permanentAddressNote: "",

      temporaryAddress: "",
      homeAddress: "",
      temporaryAddressNote: "",
    }

    return addressInfo;
  }
}
