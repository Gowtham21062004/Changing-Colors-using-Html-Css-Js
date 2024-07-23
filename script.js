var index=0
function change(){
    let colors=['red','green','brown','black','yellow','blue']

   let box= document.getElementById("box")
   document.getElementById("para").innerHTML="BackGroundColor: "+colors[index]
   box.style.backgroundColor=colors[index++];
   if(index==colors.length-1){
    index=0;
   }
}