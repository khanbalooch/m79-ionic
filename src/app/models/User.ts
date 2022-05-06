export interface IUser{
  name : IName;
  email : string;
  phone : string;
  gender: string;
  picture: IPicture;
}

interface IName{
  title: string;
  first: string;
  last: string;
}

interface IPicture{
  thumbnail : string;
}
