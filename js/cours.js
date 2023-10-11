(function () {
  // URL de l'API REST de WordPress
  //let url = "https://gftnth00.mywhc.ca/tim04/wp-json/wp/v2/posts?categories=4";
  let url = "http://localhost:8080/5w5/wp-json/wp/v2/posts?categories=25";

  let titre;

  // Effectuer la requête HTTP en utilisant fetch()
  fetch(url)
    .then(function (response) {
      // Vérifier si la réponse est OK (statut HTTP 200)
      if (!response.ok) {
        throw new Error(
          "La requête a échoué avec le statut " + response.status
        );
      }

      // Analyser la réponse JSON
      return response.json();
      console.log(response.json());
    })
    .then(function (data) {
      // La variable "data" contient la réponse JSON
      console.log("Variable data", data);

      // Maintenant, vous pouvez traiter les données comme vous le souhaitez
      // Par exemple, extraire les titres des articles comme dans l'exemple précédent
      data.forEach(function (article) {
        titre = article.title.rendered;
        //console.log(titre);

        insererTitre(titre);
      });
    })
    .catch(function (error) {
      // Gérer les erreurs
      console.error("Erreur lors de la récupération des données :", error);
    });

    let btnSession1 = document.querySelector('.session1');
    let divCours = document.querySelector('.paragraphe');

    function insererTitre(titre) {
      let coursSession1 = document.createElement('p');
      coursSession1.classList.add('session1P');
      coursSession1.innerHTML = titre;
      console.log(coursSession1);
      divCours.appendChild(coursSession1);
    }

    btnSession1.addEventListener("click", function(){
      
    })
  
})();
