let input = document.querySelector("#comm");



 let divCard_body = document.querySelector(".card-body");
    
     divCard_body.addEventListener("click",function(e){


      //this.style.borderBottom = "2px solid red";

      

      let input = document.querySelector("input");
      let button = document.querySelector("button");


         //input.style.borderBottom = "2px solid #1d1d1d";
         if(e.target === input){
            input.style.borderBottom = "2px solid #1d1d1d";

            button.style.backgroundColor = "#1d1d1d";
            
            
         }else{
            input.style.borderBottom = "0.1px solid rgb(87, 86, 86)";
            button.style.backgroundColor = "rgb(100,100,100)";
        
         }
        
        

     })


     let button = document.querySelector("#submit");

         button.addEventListener("click",function(e){

            
            
           let ul = document.querySelector("ul");
              

          let li = document.createElement("li");

            
             

         

            
              

          let text = document.createTextNode(input.value);

              li.appendChild(text);
          let cancel = document.createElement("button");
              cancel.id = "cancel"
         

          let eX = document.createTextNode("X");

            cancel.appendChild(eX);

          
         

          li.appendChild(cancel)
         

            
         

             
            
              ul.appendChild(li);

              console.log(ul)
          

              setTimeout(() => {
                 input.value = "";
              },00)
            

              let card = document.querySelector(".card");



            
            cancel.addEventListener("click",function(e){
               if(e.target){
                  li.textContent = "";
               }
            })
              

            
             if(ul.childElementCount > 2){
                let card = document.querySelector(".card");
                console.log(card.offsetHeight);

                card.style.offsetHeight++;

                  
                
             }
         })
 

         window.addEventListener("DOMContentLoaded",function(e){
            

            
            


         })

      




     
     
     



