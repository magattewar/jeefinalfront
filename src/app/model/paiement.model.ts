import { IFacture } from './facture.model';


export interface IPaiement {
  id?: number;
  date?: string;
  montant?: number;
  facture?: IFacture;
}

export class Paiement implements IPaiement {
  constructor(public id?: number, public date?: string, public montant?: number, public facture?: IFacture) {}
}
