(function () {
  // URL de l'API REST de WordPress
  let url = "http://localhost:8080/5w5/wp-json/wp/v2/posts?categories=25&per_page=30";

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
      //console.log("Variable data", data);

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
  let divCours = document.querySelector('.contenu');
  let extrait = document.querySelector('.extrait');

  function modificationsMobile() {
    if (window.innerWidth < 768) {
      btnSession1.textContent = "1ère";
      btnSession2.textContent = "2e";
      btnSession3.textContent = "3e";
      btnSession4.textContent = "4e";
      btnSession5.textContent = "5e";
      btnSession6.textContent = "6e";
    } else {
      btnSession1.textContent = "Session 1";
      btnSession2.textContent = "Session 2";
      btnSession3.textContent = "Session 3";
      btnSession4.textContent = "Session 4";
      btnSession5.textContent = "Session 5";
      btnSession6.textContent = "Session 6";
    }
  }
  
  // Call the function on page load and whenever the window is resized
  window.addEventListener('load', modificationsMobile);
  window.addEventListener('resize', modificationsMobile);

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
            <h5>${article.title.rendered}</h5>
            <div class="ligne"></div>
            <div class="extrait">${article.excerpt.rendered}</div>
            <div class="complet">${article.content.rendered}</div>
            <button class="fleche-plus"><span class="material-symbols-rounded">expand_more</span></button>
          `;
          divCours.appendChild(coursSession);
        });
      })
    .catch(error => console.log(error));
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("click", function (e) {
      //Vérifie que le bouton a été cliqué
      if (e.target && e.target.classList.contains("material-symbols-rounded")) {
        const article = e.target.closest(".article");
        const extrait = article.querySelector(".extrait");
        const complet = article.querySelector(".complet");
        const fleche = article.querySelector(".fleche-plus");
    
        if (window.innerWidth > 768) {
          // Permet d'afficher l'extrait ou les infos au complet du cours
          if (extrait.style.display === "none") {
            extrait.style.display = "flex";
            complet.style.display = "none";
            fleche.style.transform = "rotate(0deg)";
            //e.target.textContent = "Afficher plus";
          } else {
            extrait.style.display = "none";
            complet.style.display = "flex";
            fleche.style.transform = "rotate(180deg)";
            //e.target.textContent = "Afficher moins";
          }
        } else if (window.innerWidth <= 767) {
          if (complet.style.display = "none") {
            complet.style.display = "flex";
            fleche.style.transform = "rotate(0deg)";
            //e.target.textContent = "Afficher plus";
          } else if (complet.style.display = "flex") {
            complet.style.display = "none";
            fleche.style.transform = "rotate(180deg)";
            //e.target.textContent = "Afficher moins";
          }
        }
      }
    });
  });
  
})();
