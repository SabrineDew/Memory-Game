
// recuperation de l'ensemble des carte
// console.log(document.querySelectorAll("div.cellule"));

let img,imgp;
let precedente = -1;
let attente = 0;

document.querySelectorAll("div.cellule").forEach(function(elm,index){
    elm.addEventListener('click',function(e){

        if(attente !=1 && this.firstElementChild.dataset.affichage !="true" && this!=document.querySelector("div#n" + precedente)){
            //this = la cellule en cours ; firstelementchild c'est l'image
            console.log(this);
            img = this.firstElementChild;
            img.style.display = "block";
            if(precedente<0){
                //SLICE PERMET DE SEGMENTER UNE CHAINE
                precedente = (this.id).slice(1,3);
                console.log("Valeur précedente : " + precedente);
            }else{
                //PERMET DE RECUPERER L'IMAGE PRECEDENTE
                imgp = document.querySelector("div#n"+precedente+" img");
                console.log(imgp.src,img.src);
                
                if(imgp.src == img.src){
                    //LES DEUX IMAGES SONT IDENTIQUES
                    console.log("image trouvé");
                    img.dataset.affichage = true;
                    imgp.dataset.affichage = true;
                } else{
                    attente = 1;
                    // IMAGE NON IDENTIQUE
                    setTimeout(cachePhotos,1500);
                    console.log('perdu');

                }
                //REMETTRE PRECEDENTE A -1 ME PERMET DE RE-INITIALISER LE COUPLE IMGP IMG CAR SINON
                //IL CONSIDERE QUE IMGP C'EST TOUJOURS LA 1er IMAGE
                precedente = -1;
            }
        } else {
            console.log("ATTENTE = 1 ou image déjà trouvée ou meme case cliquée");
        }
    })
})

//PERMET de cacher les images
function cachePhotos(){
    img.style.display ="none";
    imgp.style.display ="none";
    attente = 0;
}




function initGame(){

    console.log("--DEPART--");
    
    for(var i=0;i<1000;i++){
        //Math.random() donne une variable aleatoire entre 0 et 1 sortant *16   
        //Math ceil -> arrondi entier sup 
        const N1 = Math.ceil(12*Math.random());
        const N2 = Math.ceil(12*Math.random());
        // Recupère enfant
        let img1 = document.querySelector("div#n"+N1 +" img");
        let img2 = document.querySelector("div#n"+N2 +" img");
        //INVERSION DE img 1 vers img 2
        const SRC1 = img1.src;
        const SRC2 = img2.src;
        img1.src = SRC2;
        img2.src = SRC1;
       
        
        }
    
}





// function clickCarte(){


//     document.querySelector(".board");
//     var carteSelect = document.querySelector(".cellule");
//     carteSelect.addEventListener("click",function essai(e){ 
//     console.log('carte cliqué', e); 
//     var image = document.querySelector("img");
//     image.setAttribute("style","display:initial;");
//     console.log(this); 

    
//     });  
    
// }

// clickCarte()








////ESSAIS

////Code qui marche
// var cartes = document.querySelectorAll("div.cellule");

//     cartes.forEach(carte => {
//       carte.addEventListener('click', function ClickCarte(e) {
//         img = this.firstElementChild;
//         console.log(img)
//         img.style.display="block";
//       });
//     });


//     console.log('test2');
//     function clickCarte() {
//           var carteSelect = document.querySelector(".board");
//           carteSelect.addEventListener('click', function CarteTwist(event) {
//           console.log('carte cliqué', event); 
//           console.log(carteSelect); 
//           var image = document.querySelector("img");
//           console.log(image);
//           image.setAttribute("style","display:initial;");

//         });
//     }
//     clickCarte();

// }


    // 
    //     const CARTE = document.querySelectorAll(".cellule");
    //     console.log(CARTE);
    

    //     document.querySelector(".cellule").addEventListener("click",function(e){
    //             this.src = "";
    //             CARTE.event.setAttribute("src","https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive-960x540.jpg");
            
    //         //EQUIVALENT
            
    //         this.removeEventListener('click',e);
    //     console.log("Existe")
    //     document.getElementsByClassName("cellule").addEventListener("click",function imageClick(e){
    //     console.log(e.target);
    //     this.src = "";
    //     //EQUIVALENT
    //     this.setAttribute("src","https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive-960x540.jpg");
        
    //     this.removeEventListener('click',evenement)
    // });
    
    //    });
    // }




