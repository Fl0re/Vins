import { App } from "./App";
import { Product } from "./Product";
import { Vendor } from "./Vendor";

var app:App = new App();
var div = $("#form");  
div.animate({left: '50%'}, "slow");
div.animate({fontSize: '2em'}, "slow");

app.$conn.submit(function(event){
    event.preventDefault();
   
    app.readVendor();

   
    
        app.$categorie.animate({height: '360px', opacity: '0.4'}, "slow");
        
        app.$categorie.animate({width: '360px', opacity: '0.8'}, "slow");
    
})

$(document).on("click", ".container-cat", function(){
    let idcat = parseInt($(this).data("category"));
    app.readProduct(idcat);
    app.$product.show();
    app.$secprod.show();
    app.$secat.hide();
    var div = $("#product");  
    div.animate({left: '50%'}, "slow");
    div.animate({fontSize: '2em'}, "slow");
    
})     

$(document).on("click", "#croix", function(){
    app.$categorie.show();
    app.$secat.show();
    app.$product.hide();
    app.$secprod.hide();
    app.$categorie.animate({height: '360px', opacity: '0.4'}, "slow");
    
    app.$categorie.animate({width: '360px', opacity: '0.8'}, "slow");
    
})     

