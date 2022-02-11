//alert("oops");




function Triangle(t){
    
  var t= Math.floor(Math.random() * 400);
  this.monConstructeur = document.createElement("div");
 

  this.monConstructeur.flech = document.createElement("div");
  this.monConstructeur.flech.class = "flech";
  this.monConstructeur.flech.setAttribute("style", "position:absolute;left:500px;  width: 0; height: 0;border-top: 25px solid transparent;border-right: 50px solid black;border-bottom: 25px solid transparent;top:" +t+'px');
 // this.monConstructeur.flech.classList.add("mamamia");
  this.monConstructeur.appendChild(this.monConstructeur.flech);
 
     // console.log(this.monConstructeur);
      return(this.monConstructeur);
  
}


  let collection = document.getElementsByClassName('flech');

  for (let i = 0; i < collection.length; i++) {
    console.log(collection[i]);
    
  }


  //var triangle = new Triangle();
  var g =  monTriangle.style.marginLeft;
  console.log(g, "ca c'est G") 
  g=g-10;
     setInterval(function(){
    
      if( g<490){
        var btnLeft =  monTriangle.style.left = g+'px';
            
      }
      g += 5;
     },2000);
        
   /******************************************************************** */ 
   
   /*var triangle = new Triangle();
         
   document.getElementById("cadre").appendChild(triangle);

   function deplacerTriangle(){
     //let numero = parseInt( triangle.style.left);
     let numero = 1;
     setInterval(() => {
      triangle.style.marginRight = numero + "px";
      numero-- ;
     }, 500);
   }
   deplacerTriangle();*/
   

 
 

/*************************************************  esssayons la collision */


document.getElementById('up').addEventListener('click',function() {
    var t = parseInt(document.getElementById('rond').style.top);
     t=t-10;
    
     if(t>0){
         document.getElementById('rond').style.top = t+'px';
     }
     
  });
  
  document.getElementById('down').addEventListener('click',function() {
     var t = parseInt(document.getElementById('rond').style.top);/*top est la position de départ du rond*/
      t=t+10;
      if(t<480){
      document.getElementById('rond').style.top = t+'px';
      }
  });
  
  document.getElementById('left').addEventListener('click',function() {
     var t = parseInt(document.getElementById('rond').style.left);
      t=t-10;
      if(t>0){
      document.getElementById('rond').style.left = t+'px';
      }
  });
  document.getElementById('right').addEventListener('click',function() {
     var t = parseInt(document.getElementById('rond').style.left);/*left est la position de base du rond */
      t=t+10;
      if(t<480){
      document.getElementById('rond').style.left = t+'px';
      }
  
  });



/*function deplacerTriangle(){
  console.log(document.getElementsByClassName('flech'));
  var t = parseInt(document.getElementsByClassName('flech').style.left);
 t=t-10;
 
 if(t<495){
    var btnLeft = document.getElementById('flech').style.left = t+'px';
    console.log("left:",btnLeft);
 }
}

deplacerTriangle();*/

  


     
  /********************************************************************** */
  function isCollapsed() {
     
    var rond = document.getElementById('rond');
    var laFleche= document.getElementById("flechet");
   var t = parseInt(document.getElementById("rond").style.left);
     t=t+10;
    var g = parseInt( laFleche.style.left);
     g=g-10;
        var btnLeft =  laFleche.style.left = g+'px';
        var btnRight = document.getElementById('rond').style.left = t+'px';
       
            
     if(g>0 || t<480){
           
            var object_1 =  rond.getBoundingClientRect();
            var object_2 = laFleche.getBoundingClientRect();
          
    
    if (object_1.left < object_2.left + object_2.width  && object_1.left + object_1.width  > object_2.left &&
   object_1.top < object_2.top + object_2.height && object_1.top + object_1.height > object_2.top) {

alert("IL L A TUEEEE!");
//document.getElementById("flech").style.left= 500+'px';
document.getElementById('rond').style.left = 0 +'px';
document.getElementById("flechet").style.visibility= "hidden";

        
   }

  }  
       
       
      
}   

