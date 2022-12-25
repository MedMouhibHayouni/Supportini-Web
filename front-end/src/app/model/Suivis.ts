export class Suivis{
  id!:number;
  nom!:string;
  prenom!:string;
  age!:number;
  poids!:number;
  taille!:number;
  imc!:number;
  date_suivi!:Date;
  fk_id_entr!:number;
  fk_id_coach!:number;
}
