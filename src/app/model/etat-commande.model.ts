export interface IEtatCommande {
  id?: number;
  libelle?: string;
}

export class EtatCommande implements IEtatCommande {
  constructor(public id?: number, public libelle?: string) {}
}
