(function () {
  // URL de l'API REST de WordPress
  //let url = "https://gftnth00.mywhc.ca/tim04/wp-json/wp/v2/posts?categories=4";
  let categorySlug = 'cours';
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

        afficherCoursSession(4);
      });
    })
    .catch(function (error) {
      // Gérer les erreurs
      console.error("Erreur lors de la récupération des données :", error);
    });

  let btnSession1 = document.querySelector('.session1');
  let btnSession2 = document.querySelector('.session2');
  let btnSession3 = document.querySelector('.session3');
  let btnSession4 = document.querySelector('.session4');
  let btnSession5 = document.querySelector('.session5');
  let btnSession6 = document.querySelector('.session6');
  let btnAfficherPlus = document.querySelector('.bouton');
  let divCours = document.querySelector('.contenu');
  //let divContenu = document.querySelector('.contenu');
  /*let lesCours;

  function insererTitre(titre) {
    lesCours = document.createElement('p');
    lesCours.classList.add('afficher');
    lesCours.innerHTML = titre;
    //console.log(lesCours);
    divCours.appendChild(lesCours);
  }*/

  btnSession1.addEventListener("click", function(){
    afficherCoursSession(4);
    
  })

  btnSession2.addEventListener("click", function(){
    afficherCoursSession(9);
  })

  btnSession3.addEventListener("click", function(){
    afficherCoursSession(11);
  })

  btnSession4.addEventListener("click", function(){
    afficherCoursSession(13);
  })

  btnSession5.addEventListener("click", function(){
    afficherCoursSession(14);
  })

  btnSession6.addEventListener("click", function(){
    afficherCoursSession(15);
  })

  btnAfficherPlus.addEventListener("click", function(){
    
  })

  function afficherCoursSession(id) {
    let urlSession = "http://localhost:8080/5w5/wp-json/wp/v2/posts?categories=" + id;
    

    fetch(urlSession)
      .then(response => response.json())
      .then(data => {
        // Clear the articleContainer
        divCours.innerHTML = "";
  
        // Loop through the data and create article elements
        data.forEach(article => {
          const coursSession = document.createElement("div");
          coursSession.className = "article";
          coursSession.innerHTML = `
            <h4>${article.title.rendered}</h4>
            <div class="ligne"></div>
            <div class="contenu-partiel">${article.excerpt.rendered}</div>
            <button class="bouton"><span class="material-symbols-rounded">expand_more</span></button>
          `;
          divCours.appendChild(coursSession);
        });
      })
    .catch(error => console.log(error));
  }
  
})();
