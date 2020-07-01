import { ICommande } from './commande.model';


export interface IClient {
  id?: number;
  nom?: string;
  prenom?: string;
  adresse?: string;
  telephone?: string;
  email?: string;
  commandes?: ICommande[];
}

export class Client implements IClient {
  constructor(
    public id?: number,
    public nom?: string,
    public prenom?: string,
    public adresse?: string,
    public telephone?: string,
    public email?: string,
    public commandes?: ICommande[]
  ) {}
}
