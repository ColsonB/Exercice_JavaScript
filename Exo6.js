var tab=[-2, 1, 4];

function soustrait(x){

    var résultat;

    if(x=>0){
      return résultat = x-2;
    }
    else{
        return résultat = "Nombre négatif!"
    }
}

function affiche(){

    alert(soustrait(tab[0]));
    alert(soustrait(tab[tab.length-1]));

}