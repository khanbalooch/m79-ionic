export class User {
  public constructor(
    private _fname: string,
    private _lname: string,
    private _email: string,
    private _phone: string,
    private _gender: string,
    private _pictureUrl: string){}


  public get fullName() {
    return this._fname + ' ' + this._lname;
  }

  public get email(){
    return this._email;
  }

  public get phone(){
    return this._phone;
  }

  public get gender(){
    return this._gender;
  }

  public get pictureUrl(){
    return this._pictureUrl;
  }

}
