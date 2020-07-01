import { IFacture } from './facture.model';
import { IEtatCommande } from './etat-commande.model';
import { ILigneCommande } from './ligne-commande.model';
import { IClient } from './client.model';

export interface ICommande {
  id?: number;
  date?: string;
  facture?: IFacture;
  etat?: IEtatCommande;
  lignescommandes?: ILigneCommande[];
  client?: IClient;
}

export class Commande implements ICommande {
  constructor(
    public id?: number,
    public date?: string,
    public facture?: IFacture,
    public etat?: IEtatCommande,
    public lignescommandes?: ILigneCommande[],
    public client?: IClient
  ) {}
}
