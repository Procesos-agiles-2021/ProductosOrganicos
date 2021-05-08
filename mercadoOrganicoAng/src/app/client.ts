export interface Client {
  username: string;
  password: string;
  password2: string;
  email: string;
  firstname: string;
  lastname: string;
  clientprofile: number;
}

export interface Rol {
  id: number;
  nombre: string;
}


export interface Model {
  roles: Array<Rol>;

}
