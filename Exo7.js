function jourDeLaSemaine(){

    var date;
     date = new Date();

    switch (date.getDay()) {
        case 0:
            alert("Nous sommes Lundi");
        break;
        
        case 1:
            alert("Nous somme Mardi");
        break;
        
        case 3:
            alert("Nous somme Mercredi");
        break;

        case 4:
            alert("Nous somme Jeudi");
        break;

        case 5:
            alert("Nous somme Vendredi");
        break;

        case 6:
            alert("Nous somme Samedi");
        break;

        case 7:
            alert("Nous somme Dimanche");
        break;

    }

}