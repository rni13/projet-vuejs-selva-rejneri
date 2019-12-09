window.onload=init;

let apiURL = "http://localhost:8080/api/restaurants";


function init() {
    new Vue({
        el: "#app",
        data: {
            restaurants: [],
            nbRestaurants:0,
            nom: '',
            cuisine: '',
            page:0,
            pagesize:0,
            nomRecherche:''
        },
        mounted(){
            console.log("AVANT AFFICHAGE");
            this.getDataFromServer();
        },
        methods: {
            getDataFromServer(){
            // ici on fait un fetch pour récuperer des restaurants sur le serveur
                let url = apiURL + "?page=" + this.page + "&pagesize=" + this.pagesize + "&name=" + this.nomRecherche;
                fetch(url)
                .then(reponseJSON => {
                    return reponseJSON.json();
                })
                .then(reponseJS => {
                    // ici on a la reponse sous la forme d'un objet js
                    this.restaurants = reponseJS.data;
                    this.nbRestaurants = reponseJS.count;
                }).catch(err => {
                    console.log("erreur dans fetch : " + err.msg);
                })
            },
            supprimerRestaurant(index) {
                this.restaurants.splice(index, 1);
            },
            ajouterRestaurant(event) {
                // eviter le comportement par defaut
                event.preventDefault();

                this.restaurants.push(
                    {
                        nom: this.nom,
                        cuisine: this.cuisine
                    }
                );
                this.nom = "";
                this.cuisine = "";
            },
            getColor(index) {
                return (index % 2) ? 'lightBlue' : 'pink';
            },
            pageSuivante(){
                console.log("page suivante");
                this.page++;
                this.getDataFromServer();
            },
            pagePrecedente(){
                console.log("page precedente");
                this.page--;
                this.getDataFromServer();
            },
            changePagesize(){
                console.log("Change page size" + this.pagesize);
                this.getDataFromServer();

            },
        }
    })
}
