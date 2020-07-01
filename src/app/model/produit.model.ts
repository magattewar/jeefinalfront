export interface IProduit {
  id?: number;
  reference?: string;
  quantite?: number;
  prixNormal?: number;
  prixMinimum?: number;
}

export class Produit implements IProduit {
  constructor(
    public id?: number,
    public reference?: string,
    public quantite?: number,
    public prixNormal?: number,
    public prixMinimum?: number
  ) {}
}
