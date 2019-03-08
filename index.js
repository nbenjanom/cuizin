var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var exphbs = require('express-handlebars');
app.use(express.static('public'));
//configuration handlebars//
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
    //config du dossier public



//******** ROUTE 1 ******
app.get('/',function(req,res){
    res.render('home', {
        title: "Cui'Zine - Le Mag Cuisine",
        css: "homepage.css",
        subtitle:"Cui'Zine",
        subtitle2:"Le Mag Cuisine",
        isActiveHome: true
    });
});
//*********************

//******** ROUTE 2 ******
app.get('/recette/',function(req,res){
    res.render('recette', {
        title: "Paëlla, le plat familial de votre été 2019 | Cui'Zine",
        css: "paella.css",
        isActivePost: true
    });
});
//*********************

//******** ROUTE 3 ******
app.get('/post/',function(req,res){
    res.render('post', {
        title: "Chez Suzette, la nouvelle crêperie qui fait parler d'elle | Cui'Zine",
        css: "post.css",
        isActivePost: true
    });
});
//*********************

//******** ROUTE 4 ******
app.get('/team/',function(req,res){
    res.render('team', {
        title:"Equipe | Cui'Zine",
        css: "team.css",
        isActiveTeam: true
    });
});
//*********************

//******** ROUTE 4 ******
app.get('/antoine/',function(req,res){
    res.render('antoine', {
        title:"Antoine | Cui'Zine",
        css: "antoine.css",
        subtitle:"Antoine",
        subtitle2:"Goûteur professionnel",
        isActiveTeam: true
    });
});
//*********************

//******** ROUTE 4 ******
app.get('/contact/',function(req,res){
    res.render('contact', {
        title:"Contact | Cui'zine",
        css: "contact.css",
        subtitle: "Nous contacter",
        isActiveContact: true
    });
});
//*********************

// //******** ROUTE ERROR ******
// app.get('*',function(req,res){
//     res.render("Cette page n'existe pas");
// });
// //*********************


// test listen serveur
app.listen(port, function(){
    console.log('Serveur lancé sur le port ' + port);
});