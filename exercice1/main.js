homme = {
  prenom :"jules",
  nom :"dupont",
  age : 34,
  pays : "lybie",
  paiement :"mastercard",
  gethomme: function(){
  alert(this.prenom +" "+ this.nom );
  alert(2017-this.age);

  }
};




detail = {
  pays : ["france","maroc","algerie","tunisie","tchad"],
  paiement : ["visa","mastercard","american express"],
  ageMin : 21,

 ageRequis : function (homme){
   console.log(homme);
   if (homme.age< this.ageMin){
     alert ("accés refusé");
   }
   else {
     alert ("tu as l'age requis");
   }
 },

  paysAutorise : function (homme){
  if(this.pays.indexOf(homme.pays) != -1)
       {
    alert ("tu est du bon pays");
       }
  else {
    alert ('zone interdite');
       }

       },

  paiementAutorise : function (homme){
    if(this.paiement.indexOf(homme.paiement) != -1)
         {
        alert ('tu as la bonne carte');
         }
      else {
        alert ('ramene, une bonne carte stp');
          }
  }
      },

homme.gethomme();
detail.ageRequis(homme);
detail.paysAutorise(homme);
detail.paiementAutorise(homme);
