export  class Annonce{
  titre!:String
id!:number
  discipline!:String

  prix!:Number

  type!:String
  rue!:String
  codePostal!: String
  ville!:String
  description!: String
  image!: String
  capacite!:Number

  dateDebut!: Date
  dateFin!: Date

  fk_idcoach!:Number

}
