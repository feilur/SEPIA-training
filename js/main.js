var compteur = 0;

$(document).ready(function() {
    console.log( "ready!" );

    //fTest();

});


function fTest(){
    setTimeout(function(){
        console.log(compteur);
        if(compteur < 4){
            fTest();
        }

        compteur++;
    }, 2000);
}