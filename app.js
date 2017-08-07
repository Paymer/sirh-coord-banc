var API_COLLABS = "http://localhost:8080/sgp/api/collaborateurs";

// TODO Récupérer le tableau des collaborateurs 
 var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4) {
        //console.log(this.responseText);
        var collabs = JSON.parse(this.responseText);
        var htmlLines = "";
        collabs.forEach(function(col) {
            htmlLines +="<tr id="+col.matricule+"><td>"+col.matricule+"</td><td>"+col.nom+"</td><td>"+col.prenom+"</td></tr>";

        });
        document.getElementById("body-collabs").innerHTML = htmlLines;

    }
};
xhttp.open("GET", API_COLLABS, true);
xhttp.send();



