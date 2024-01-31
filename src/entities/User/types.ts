interface GeoLocation {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoLocation;
}

interface Company {
  name: string;
  bs: string;
  catchPhrase: string;
}

interface UserBase {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface User extends UserBase {
  phone: string;
  website: string;
  address: Address;
  company: Company;
}

export interface UserTableData extends UserBase {
  company: string;
}
