(function () {
  // URL de l'API REST de WordPress
  //let url = "https://gftnth00.mywhc.ca/tim04/wp-json/wp/v2/posts?categories=4";
  let url = "http://localhost:8080/5w5/wp-json/wp/v2/posts?categories=25&per_page=30";

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
  let lesCours;

  function insererTitre(titre) {
    lesCours = document.createElement('p');
    lesCours.classList.add('afficher');
    lesCours.innerHTML = titre;
    //console.log(lesCours);
    divCours.appendChild(lesCours);
  }

  btnSession1.addEventListener("click", function(){
    afficherCoursSession1();
  })

  function afficherCoursSession1() {
    let urlSession1 = "http://localhost:8080/5w5/wp-json/wp/v2/posts?categories=4";
  
    fetch(urlSession1)
      .then(response => response.json())
      .then(data => {
        // Clear the articleContainer
        divCours.innerHTML = "";
  
        // Loop through the data and create article elements
        data.forEach(article => {
          const coursSession1 = document.createElement("div");
          coursSession1.innerHTML = `
            <h5>${article.title.rendered}</h5>
            <div>${article.content.rendered}</div>
          `;
          divCours.appendChild(coursSession1);
        });
      })
      .catch(error => console.log(error));
  }
  
})();
