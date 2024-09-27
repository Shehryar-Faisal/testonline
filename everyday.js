var container = document.getElementById("container1");
var container2 = document.getElementById("container2");
var container3 = document.getElementById("container3");
var container4 = document.getElementById("container4");
var container5 = document.getElementById("container5");
var container6 = document.getElementById("container6");





var everydayvalue = {
  loi: ['./everyday/bur.png','./everyday/bg1.png','./everyday/bg2.png','./everyday/bg3.png','./everyday/bg4.png','./everyday/bg5.png','./everyday/burgir.png','./everyday/chawal.png'],
  heads: ['Zingeratha','Krunch Burger + Drink ','Krunch With Fries N Drink','Chicken N chips ','3 Piece chicken','Krunch chicken combo','Krunch Burger','Rice N Spice'],
  content:['Crispy chicken, sliced onions tangy imli chutney, mint mayo wrapped in a soft paratha','1 Krunch burger + 1 pc of Hot and Crispy Fried Chicken + 1 regular drink','Krunch + 1 regular Fries + 1 regular Drink','2 pieces of Hot and Crispy Fried Chicken+ fries+ dinner roll+ signature Vietnamese Sauce','3 pieces of Hot and Crispy Fried Chicken','1 Krunch burger + 1 pc of Hot and Crispy Fried Chicken + 1 regular drink','Krunch fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun','Spiced and buttery rice with 6 pcs of Hot Shots topped with our signature Vietnamese sauce'],
  price: ["Rs 560","Rs 560","Rs 560","Rs 560","Rs 560","Rs 560","Rs 560","Rs 560"],
};


function pagecreation(parent,noofcards,pname) {
  var listofcards=[]
  var cart = [];
  for (let index = 0; index < noofcards; index++) {

    var ptag = document.createElement("div");
    var card = document.createElement("div");
    var imgcont = document.createElement("div");
  var imgs = document.createElement("img");
  var cname = document.createElement("p");
  var cont = document.createElement("p");
  var button = document.createElement("button");
  var bcon = document.createElement("p");
  var pr = document.createElement("p");
  
  card.setAttribute('id', `card${index + 1}`);
  imgs.src = pname.loi[index];
  card.appendChild(imgcont);
  card.appendChild(cname);
  card.appendChild(cont);
  card.appendChild(ptag);
  ptag.appendChild(pr);
  ptag.appendChild(button);
  button.appendChild(bcon);
  imgcont.appendChild(imgs);
  bcon.innerHTML = "Add to Bucket";
  pr.innerHTML = pname.price[index];
  cont.innerHTML = pname.content[index];
  cname.innerHTML = pname.heads[index];
  cname.style.color = 'black';
  cont.style.color = 'black';
  cont.style.textAlign = 'center';
  cont.style.width = '90%';
  cont.style.height = "80px";
  card.style.display = 'flex';
  ptag.style.display = 'flex';
  ptag.style.alignItems = 'center';
  ptag.style.marginTop = '20px';
  parent.style.backgroundColor="rgba(245, 0, 0, 0.8)"
  ptag.style.justifyContent = 'space-around';
  pr.style.color = 'black';
  pr.style.fontSize = '24px';
  
  card.style.backgroundColor = 'white';
  cname.style.fontSize = '24px';
  cont.style.fontSize = '20px';

  card.style.flexDirection = 'column';
  card.style.alignItems = 'center';
  
  card.style.justifyContent = 'center';
  card.style.width = "324.392px";
  card.style.gap = "10px";
  ptag.style.width = "100%";
  
  card.style.height = "513.968px";
  
  card.style.borderRadius = "50px";
  button.style.width = "120px";
  button.style.height = "40px";
  button.style.borderRadius = "15px";
  button.style.backgroundColor = "#FFB737";
  button.style.border = "none";
  button.style.color = "white";
  
  button.style.fontSize = "14px";
  
  imgs.style.width = '250px';
  imgs.style.height = '225px';
  imgcont.style.marginBottom = '30px';
  imgcont.style.marginTop = '-13px';
  
  imgcont.style.borderRadius = '50px';
  imgcont.style.backgroundColor = 'rgba(245, 0, 0, 0.8)';
  imgcont.style.width = '300px';
  imgcont.style.height = '250px';
  imgcont.style.display = 'flex';
  imgcont.style.alignItems = 'center';
  imgcont.style.justifyContent = 'center';
  parent.appendChild(card);
  listofcards.push(card); 
  button.onclick = function () {
    addToCart(pname.heads[index], pname.price[index]);
  };
}



function enter(card) {
  var clickedCard = card.currentTarget; // Use currentTarget to refer to the card element
  var selectedimg = clickedCard.getElementsByTagName("img")[0]; // Get the image element inside the card
  
  clickedCard.style.transform = "scale(1.05)";
  selectedimg.style.transform = "scale(1.2)";
  selectedimg.style.padding = "scale(1.1)";
  clickedCard.style.cursor = "pointer";
  
  clickedCard.style.transition=".1s ease .1s";
  selectedimg.style.transition=".1s ease .1s";
  
  
  clickedCard.style.boxShadow = "5px 5px 15px grey";
}

function leave(card) {
    var clickedCard = card.currentTarget; // Use currentTarget to refer to the card element
    var selectedimg = clickedCard.getElementsByTagName("img")[0]; // Get the image element inside the card

    clickedCard.style.transform = "scale(1)";
    clickedCard.style.boxShadow = "0px 0px 0px";
    selectedimg.style.transform = "scale(1)";
  }
  
  
  listofcards.forEach(function(card) {
    card.addEventListener("mouseenter", enter);
    card.addEventListener("mouseleave", leave);
  });
  
  
  
}


pagecreation(container,5,everydayvalue);
pagecreation(container2,7,everydayvalue);
pagecreation(container3,5,everydayvalue); 
pagecreation(container4,3,everydayvalue); 
pagecreation(container5,5,everydayvalue); 
pagecreation(container6,4,everydayvalue); 

// navs for different itemlists

var valuebtn = document.getElementById('Everydayvalue')



function valuepage() {
  container.style.display='flex'
    container2.style.display='none'
    container3.style.display='none'
    container4.style.display='none'
    container5.style.display='none'
    container6.style.display='none'
    valuebtn.style.border='2px solid white'
    alcartebtn.style.border='none'
    sboxbtn.style.border='none'
    sharingbtn.style.border='none'
    mnightbtn.style.border='none'
    snacksbtn.style.border='none'
  }

  valuebtn.addEventListener("click",valuepage)
  
  var alcartebtn = document.getElementById('alacarte')
  
  function arlcartepage() {
    container2.style.display='flex'
    container.style.display='none'
    container3.style.display='none'
    container4.style.display='none'
    container5.style.display='none'
    container6.style.display='none'
    
    alcartebtn.style.border='2px solid white'
    sboxbtn.style.border='none'
    sharingbtn.style.border='none'
    mnightbtn.style.border='none'
    valuebtn.style.border='none'
    snacksbtn.style.border='none'
    
    
  }
  
  alcartebtn.addEventListener("click",arlcartepage)
  
var sboxbtn = document.getElementById('sbox')


function sboxpage() {
    container3.style.display='flex'
    container2.style.display='none'
    container.style.display='none'
    container4.style.display='none'
    container5.style.display='none'
    container6.style.display='none'
    
    sboxbtn.style.border='2px solid white'
    sharingbtn.style.border='none'
    mnightbtn.style.border='none'
    valuebtn.style.border='none'
    alcartebtn.style.border='none'
    snacksbtn.style.border='none'
    
    
  }
  
  sboxbtn.addEventListener("click",sboxpage)
  
  var sharingbtn = document.getElementById('sharing')
  
  
  function sharingpage() {
    container4.style.display='flex'
    container2.style.display='none'
    container3.style.display='none'
    container.style.display='none'
    container5.style.display='none'
    container6.style.display='none'
    
    sharingbtn.style.border='2px solid white'
    mnightbtn.style.border='none'
    valuebtn.style.border='none'
    sboxbtn.style.border='none'
    alcartebtn.style.border='none'
    snacksbtn.style.border='none'
    
  }
  
  sharingbtn.addEventListener("click",sharingpage)
  
  
  var snacksbtn = document.getElementById('snacks')
  
  function snackspage() {
    container5.style.display='flex'
    container2.style.display='none'
    container3.style.display='none'
    container4.style.display='none'
    container.style.display='none'
    container6.style.display='none'
    
    mnightbtn.style.border='none'
    valuebtn.style.border='none'
    sboxbtn.style.border='none'
    alcartebtn.style.border='none'
    sharingbtn.style.border='none'
    snacksbtn.style.border='2px solid white'
    
  }

snacksbtn.addEventListener("click",snackspage)


var mnightbtn = document.getElementById('mnight')

function mnightpage() {
  container6.style.display='flex'
    container2.style.display='none'
    container3.style.display='none'
    container4.style.display='none'
    container5.style.display='none'
    container.style.display='none'
    
    mnightbtn.style.border='2px solid white'
    valuebtn.style.border='none'
    sboxbtn.style.border='none'
    alcartebtn.style.border='none'
    sharingbtn.style.border='none'
    snacksbtn.style.border='none'
    
    
}

mnightbtn.addEventListener("click",mnightpage)






















































// everydayvalue
// var heads=['Zingeratha','Krunch Burger + Drink ','Krunch With Fries N Drink','Chicken N chips ','3 Piece chicken','Krunch chicken combo','Krunch Burger','Rice N Spice']
// var loi=['./everyday/bur.png','./everyday/bg1.png','./everyday/bg2.png','./everyday/bg3.png','./everyday/bg4.png','./everyday/bg5.png','./everyday/burgir.png','./everyday/chawal.png']
// var content=['Crispy chicken, sliced onions tangy imli chutney, mint mayo wrapped in a soft paratha','1 Krunch burger + 1 pc of Hot and Crispy Fried Chicken + 1 regular drink','Krunch + 1 regular Fries + 1 regular Drink','2 pieces of Hot and Crispy Fried Chicken+ fries+ dinner roll+ signature Vietnamese Sauce','3 pieces of Hot and Crispy Fried Chicken','1 Krunch burger + 1 pc of Hot and Crispy Fried Chicken + 1 regular drink','Krunch fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun','Spiced and buttery rice with 6 pcs of Hot Shots topped with our signature Vietnamese sauce']
// var listofcards=[]
// var price =["Rs 560","Rs 560","Rs 560","Rs 560","Rs 560","Rs 560","Rs 560","Rs 560"]
// var cart=[];










// for (let index = 0; index < cardno; index++) {
//     var ptag= document.createElement("div")
//     var card = document.createElement("div")
//     var imgcont= document.createElement("div")
//     var imgs= document.createElement("img")

//     var cname = document.createElement("p")
//     var cont = document.createElement("p")
//     var button = document.createElement("button")
//     var bcon =document.createElement("p")
//     var pr =document.createElement("p")

//     card.setAttribute('id', `card${index + 1}`);
//     imgs.src=loi[index]
//     card.appendChild(imgcont)
//     card.appendChild(cname)
//     card.appendChild(cont)
//     card.appendChild(ptag)
//     ptag.appendChild(pr)
//     ptag.appendChild(button)
//     button.appendChild(bcon)
//     imgcont.appendChild(imgs)
//     bcon.innerHTML= "Add to Bucket";
//     pr.innerHTML=price[index]
//     cont.innerHTML=content[index]
//     cname.innerHTML=heads[index]
//     cname.style.color='black'
//     cont.style.color='black'
//     cont.style.color='black'

//     cont.style.textAlign='center'
//     cont.style.width='90%'
    
    
//     cont.style.height="80px"
//     container.appendChild(card)
//     card.style.display='flex'
//     ptag.style.display='flex'
//     ptag.style.alignItems='center'
//     ptag.style.marginTop='20px'

//     ptag.style.justifyContent='space-around'
//     pr.style.color='black'
//     pr.style.fontSize='24px'





//     card.style.backgroundColor='white'
//     cname.style.fontSize='24px'
//     cont.style.fontSize='20px'
    
//     card.style.flexDirection='column'
//     card.style.alignItems='center'
    


//     card.style.justifyContent='center'
//     card.style.width= "324.392px";
//     card.style.gap= "10px";
//     ptag.style.width= "100%";

//     card.style.height= "513.968px";

//     card.style.borderRadius= "50px";
//     button.style.width= "120px";
//     button.style.height= "40px";
//     button.style.borderRadius= "15px";
//     button.style.backgroundColor= "#FFB737";
//     button.style.border= "none";
//     button.style.color= "white";
    
//     button.style.fontSize= "14px";


    
//     imgs.style.width='250px'
//     imgs.style.height='225px'
//     imgcont.style.marginBottom='30px'
//     imgcont.style.marginTop='-13px'



//     imgcont.style.borderRadius='50px'
//     imgcont.style.backgroundColor='rgba(245, 0, 0, 0.8)'
//     imgcont.style.width='300px'
//     imgcont.style.height='250px'
//     imgcont.style.display='flex'
//     imgcont.style.alignItems='center'
//     imgcont.style.justifyContent='center'






    
//     listofcards.push(card); 
// }



// // onclick (()=>{cardclicked(index)})
// //card click (index)
// //


// function enter(card) {
//     var clickedCard = card.currentTarget; // Use currentTarget to refer to the card element
//     var selectedimg = clickedCard.getElementsByTagName("img")[0]; // Get the image element inside the card

//     clickedCard.style.transform = "scale(1.05)";
//     selectedimg.style.transform = "scale(1.2)";
//     selectedimg.style.padding = "scale(1.1)";
//     clickedCard.style.cursor = "pointer";

//     clickedCard.style.transition=".1s ease .1s";
//     selectedimg.style.transition=".1s ease .1s";


//     clickedCard.style.boxShadow = "5px 5px 15px grey";
// }

// function leave(card) {
//     var clickedCard = card.currentTarget; // Use currentTarget to refer to the card element
//     var selectedimg = clickedCard.getElementsByTagName("img")[0]; // Get the image element inside the card

//     clickedCard.style.transform = "scale(1)";
//     clickedCard.style.boxShadow = "0px 0px 0px";
//     selectedimg.style.transform = "scale(1)";
// }

// function clicked(card) {
//     var clickedCard = card.Target; 
//     cart.push(clickedCard); 
// }







// listofcards.forEach(function(card) {
//     card.addEventListener("mouseenter", enter);
//     card.addEventListener("mouseleave", leave);
//     card.addEventListener("click",clicked);


// });    
// console.log(cart)











// // alcarte


// var container2 = document.getElementById("container2");
// var cardno = 10;
// var heads2 = ['Zinger Stacker Combo', 'Kentucky Burger', 'Kentucky Combo', 'Mighty Zinger', 'Twister', 'Twister Combo', 'Zinger Burger', 'Zinger Combo', 'Zinger Stacker', 'Stacker Combo'];
// var content2 = ['Crispy chicken, sliced onions tangy imli chutney, mint mayo wrapped in a soft paratha', '1 Krunch burger + 1 pc of Hot and Crispy Fried Chicken + 1 regular drink', 'Krunch + 1 regular Fries + 1 regular Drink', '2 pieces of Hot and Crispy Fried Chicken+ fries+ dinner roll+ signature Vietnamese Sauce', '3 pieces of Hot and Crispy Fried Chicken', '1 Krunch burger + 1 pc of Hot and Crispy Fried Chicken + 1 regular drink', 'Krunch fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun', 'Spiced and buttery rice with 6 pcs of Hot Shots topped with our signature Vietnamese sauce','Tender chicken strips, black  pepper mayo, diced tomatoes and lettuce-wrapped in a tortilla','Crispy chicken, sliced onions tangy imli chutney, mint mayo wrapped in a soft paratha'];
// var loi2 = ['./alcarte/1.png', './alcarte/2.png', './alcarte/3.png', './alcarte/4.png', './alcarte/5.png', './alcarte/6.png', './alcarte/7.png', './alcarte/8.png', './alcarte/9.png', './alcarte/10.png'];
// var listofcards2 = [];
// var price2 = ["Rs 560", "Rs 560", "Rs 560", "Rs 560", "Rs 560", "Rs 560", "Rs 560", "Rs 560", "Rs 560", "Rs 560"];

// for (let index = 0; index < cardno; index++) {
//     var ptag2 = document.createElement("div");
//     var card2 = document.createElement("div");
//     var imgcont2 = document.createElement("div");
//     var imgs2 = document.createElement("img");
//     var cname2 = document.createElement("p");
//     var cont2 = document.createElement("p");
//     var button2 = document.createElement("button");
//     var bcon2 = document.createElement("p");
//     var pr2 = document.createElement("p");

//     card2.setAttribute('id', `card${index + 1}`);
//     imgs2.src = loi2[index]; // Use loi2 array for image source
//     card2.appendChild(imgcont2);
//     card2.appendChild(cname2);
//     card2.appendChild(cont2);
//     card2.appendChild(ptag2);
//     ptag2.appendChild(pr2);
//     ptag2.appendChild(button2);
//     button2.appendChild(bcon2);
//     imgcont2.appendChild(imgs2);
//     bcon2.innerHTML = "Add to Bucket";
//     pr2.innerHTML = price2[index]; // Use price2 array for price
//     cont2.innerHTML = content2[index]; // Use content2 array for content
//     cname2.innerHTML = heads2[index]; // Use heads2 array for headings
//     cname2.style.color = 'black';
//     cont2.style.color = 'black';
//     cont2.style.textAlign = 'center';
//     cont2.style.width = '90%';
//     cont2.style.height = "80px";

//     container2.appendChild(card2);
//     card2.style.display = 'flex';
//     ptag2.style.display = 'flex';
//     ptag2.style.alignItems = 'center';
//     ptag2.style.marginTop = '20px';
//     ptag2.style.justifyContent = 'space-around';
//     pr2.style.color = 'black';
//     pr2.style.fontSize = '24px';

//     card2.style.backgroundColor = 'white';
//     cname2.style.fontSize = '24px';
//     cont2.style.fontSize = '20px';
//     card2.style.flexDirection = 'column';
//     card2.style.alignItems = 'center';
//     card2.style.justifyContent = 'center';
//     card2.style.width = "324.392px";
//     card2.style.gap = "10px";
//     ptag2.style.width = "100%";

//     card2.style.height = "513.968px";

//     card2.style.borderRadius = "50px";
//     button2.style.width = "120px";
//     button2.style.height = "40px";
//     button2.style.borderRadius = "15px";
//     button2.style.backgroundColor = "#FFB737";
//     button2.style.border = "none";
//     button2.style.color = "white";
//     button2.style.fontSize = "14px";

//     imgs2.style.width = '300px';
//     imgs2.style.height = '250px';
//     imgcont2.style.marginBottom = '30px';
//     imgcont2.style.marginTop = '-13px';
//     imgcont2.style.borderRadius = '50px';
//     imgcont2.style.backgroundColor = 'rgba(245, 0, 0, 0.8)';
//     imgcont2.style.width = '300px';
//     imgcont2.style.height = '250px';
//     imgcont2.style.display = 'flex';
//     imgcont2.style.alignItems = 'center';

//     listofcards2.push(card2);
// }


// function enter(card) {
//     var clickedCard = card.currentTarget;
//     var selectedimg = clickedCard.getElementsByTagName("img")[0];
//     clickedCard.style.transform = "scale(1.05)";
//     selectedimg.style.transform = "scale(1.2)";
//     selectedimg.style.padding = "scale(1.1)";
//     clickedCard.style.transition = ".1s ease .1s";
//     selectedimg.style.transition = ".1s ease .1s";
//     clickedCard.style.boxShadow = "5px 5px 15px grey";
//     clickedCard.style.cursor = "pointer";

// }

// function leave(card) {
//     var clickedCard = card.currentTarget;
//     var selectedimg = clickedCard.getElementsByTagName("img")[0];
//     clickedCard.style.transform = "scale(1)";
//     clickedCard.style.boxShadow = "0px 0px 0px";
//     selectedimg.style.transform = "scale(1)";
// }

// listofcards2.forEach(function (card) {
//     card.addEventListener("mouseenter", enter);
//     card.addEventListener("mouseleave", leave);
// });



// // end elcarte


// // signature boxes

// var container3 = document.getElementById("container3"); // Change container2 to container3
// var cardno = 5;
// var heads3 = ['Zingeratha', 'Krunch Burger + Drink', 'Krunch With Fries N Drink', 'Chicken N chips', '3 Piece chicken', 'Krunch chicken combo', 'Krunch Burger', 'Rice N Spice']; // Use heads3 for the third set
// var loi3 = ['./everyday/bur.png', './everyday/bg1.png', './everyday/bg2.png', './everyday/bg3.png', './everyday/bg4.png', './everyday/bg5.png', './everyday/burgir.png', './everyday/chawal.png']; // Use loi3 for image sources
// var content3 = ['Crispy chicken, sliced onions tangy imli chutney, mint mayo wrapped in a soft paratha', '1 Krunch burger + 1 pc of Hot and Crispy Fried Chicken + 1 regular drink', 'Krunch + 1 regular Fries + 1 regular Drink', '2 pieces of Hot and Crispy Fried Chicken+ fries+ dinner roll+ signature Vietnamese Sauce', '3 pieces of Hot and Crispy Fried Chicken', '1 Krunch burger + 1 pc of Hot and Crispy Fried Chicken + 1 regular drink', 'Krunch fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun', 'Spiced and buttery rice with 6 pcs of Hot Shots topped with our signature Vietnamese sauce']; // Use content3 for content
// var listofcards3 = [];
// var price3 = ["Rs 560", "Rs 560", "Rs 560", "Rs 560", "Rs 560", "Rs 560", "Rs 560", "Rs 560"]; // Use price3 for price

// for (let index = 0; index < cardno; index++) {
//     var ptag3 = document.createElement("div"); // Use ptag3 for the third set
//     var card3 = document.createElement("div"); // Use card3 for the third set
//     var imgcont3 = document.createElement("div"); // Use imgcont3 for the third set
//     var imgs3 = document.createElement("img"); // Use imgs3 for the third set
//     var cname3 = document.createElement("p"); // Use cname3 for the third set
//     var cont3 = document.createElement("p"); // Use cont3 for the third set
//     var button3 = document.createElement("button"); // Use button3 for the third set
//     var bcon3 = document.createElement("p"); // Use bcon3 for the third set
//     var pr3 = document.createElement("p"); // Use pr3 for the third set

//     card3.setAttribute('id', `card${index + 1}`);
//     imgs3.src = loi3[index]; // Use loi3 for the third set
//     card3.appendChild(imgcont3);
//     card3.appendChild(cname3);
//     card3.appendChild(cont3);
//     card3.appendChild(ptag3);
//     ptag3.appendChild(pr3);
//     ptag3.appendChild(button3);
//     button3.appendChild(bcon3);
//     imgcont3.appendChild(imgs3);
//     bcon3.innerHTML = "Add to Bucket";
//     pr3.innerHTML = price3[index]; // Use price3 for the third set
//     cont3.innerHTML = content3[index]; // Use content3 for the third set
//     cname3.innerHTML = heads3[index]; // Use heads3 for the third set
//     cname3.style.color = 'black';
//     cont3.style.color = 'black';
//     cont3.style.textAlign = 'center';
//     cont3.style.width = '90%';
//     cont3.style.height = "80px";

//     container3.appendChild(card3);
//     card3.style.display = 'flex';
//     ptag3.style.display = 'flex';
//     ptag3.style.alignItems = 'center';
//     ptag3.style.marginTop = '20px';
//     ptag3.style.justifyContent = 'space-around';
//     pr3.style.color = 'black';
//     pr3.style.fontSize = '24px';

//     card3.style.backgroundColor = 'white';
//     cname3.style.fontSize = '24px';
//     cont3.style.fontSize = '20px';
//     card3.style.flexDirection = 'column';
//     card3.style.alignItems = 'center';
//     card3.style.justifyContent = 'center';
//     card3.style.width = "324.392px";
//     card3.style.gap = "10px";
//     ptag3.style.width = "100%";

//     card3.style.height = "513.968px";

//     card3.style.borderRadius = "50px";
//     button3.style.width = "120px";
//     button3.style.height = "40px";
//     button3.style.borderRadius = "15px";
//     button3.style.backgroundColor = "#FFB737";
//     button3.style.border = "none";
//     button3.style.color = "white";
//     button3.style.fontSize = "14px";

//     imgs3.style.width = '300px';
//     imgs3.style.height = '250px';
//     imgcont3.style.marginBottom = '30px';
//     imgcont3.style.marginTop = '-13px';
//     imgcont3.style.borderRadius = '50px';
//     imgcont3.style.backgroundColor = 'rgba(245, 0, 0, 0.8)';
//     imgcont3.style.width = '300px';
//     imgcont3.style.height = '250px';
//     imgcont3.style.display = 'flex';
//     imgcont3.style.alignItems = 'center';

//     listofcards3.push(card3);
// }


// function enter(card) {
//     var clickedCard = card.currentTarget;
//     var selectedimg = clickedCard.getElementsByTagName("img")[0];
//     clickedCard.style.transform = "scale(1.05)";
//     selectedimg.style.transform = "scale(1.2)";
//     selectedimg.style.padding = "scale(1.1)";
//     clickedCard.style.transition = ".1s ease .1s";
//     selectedimg.style.transition = ".1s ease .1s";
//     clickedCard.style.boxShadow = "5px 5px 15px grey";
//     clickedCard.style.cursor = "pointer";

// }

// function leave(card) {
//     var clickedCard = card.currentTarget;
//     var selectedimg = clickedCard.getElementsByTagName("img")[0];
//     clickedCard.style.transform = "scale(1)";
//     clickedCard.style.boxShadow = "0px 0px 0px";
//     selectedimg.style.transform = "scale(1)";
// }

// listofcards3.forEach(function (card) {
//     card.addEventListener("mouseenter", enter);
//     card.addEventListener("mouseleave", leave);
// });


// // end of signature box



// // sharing
// var container4 = document.getElementById("container4"); // Change container3 to container4
// var cardno = 4;
// var heads4 = ['Family 1','Family 2','Family 3','Value bucket']; // Use heads4 for the fourth set
// var loi4 = ['./sharing/sharing (1).png', './sharing/sharing (2).png', './sharing/sharing (3).png', './sharing/sharing (4).png']; // Use loi4 for image sources
// var content4 = ["An ultimate meal for the fam. It includes 4 Zinger burgers + 4 pieces Hot and Crispy Chicken","An ultimate meal for the fam. It includes 4 Zinger burgers + 4 pieces Hot and Crispy Chicken","An ultimate meal for the fam. It includes 4 Zinger burgers + 4 pieces Hot and Crispy Chicken","Our pride and joy. 9 pcs of Colonel’s Signature Crispy Fried Chicken. It's finger lickin' good. "]; // Use content4 for content
// var listofcards4 = [];
// var price4 = ["Rs 560", "Rs 560", "Rs 560", "Rs 560", "Rs 560", "Rs 560", "Rs 560", "Rs 560"]; // Use price4 for price

// for (let index = 0; index < cardno; index++) {
//     var ptag4 = document.createElement("div"); // Use ptag4 for the fourth set
//     var card4 = document.createElement("div"); // Use card4 for the fourth set
//     var imgcont4 = document.createElement("div"); // Use imgcont4 for the fourth set
//     var imgs4 = document.createElement("img"); // Use imgs4 for the fourth set
//     var cname4 = document.createElement("p"); // Use cname4 for the fourth set
//     var cont4 = document.createElement("p"); // Use cont4 for the fourth set
//     var button4 = document.createElement("button"); // Use button4 for the fourth set
//     var bcon4 = document.createElement("p"); // Use bcon4 for the fourth set
//     var pr4 = document.createElement("p"); // Use pr4 for the fourth set

//     card4.setAttribute('id', `card${index + 1}`);
//     imgs4.src = loi4[index]; // Use loi4 for the fourth set
//     card4.appendChild(imgcont4);
//     card4.appendChild(cname4);
//     card4.appendChild(cont4);
//     card4.appendChild(ptag4);
//     ptag4.appendChild(pr4);
//     ptag4.appendChild(button4);
//     button4.appendChild(bcon4);
//     imgcont4.appendChild(imgs4);
//     bcon4.innerHTML = "Add to Bucket";
//     pr4.innerHTML = price4[index]; // Use price4 for the fourth set
//     cont4.innerHTML = content4[index]; // Use content4 for the fourth set
//     cname4.innerHTML = heads4[index]; // Use heads4 for the fourth set
//     cname4.style.color = 'black';
//     cont4.style.color = 'black';
//     cont4.style.textAlign = 'center';
//     cont4.style.width = '90%';
//     cont4.style.height = "80px";

//     container4.appendChild(card4);
//     card4.style.display = 'flex';
//     ptag4.style.display = 'flex';
//     ptag4.style.alignItems = 'center';
//     ptag4.style.marginTop = '20px';
//     ptag4.style.justifyContent = 'space-around';
//     pr4.style.color = 'black';
//     pr4.style.fontSize = '24px';

//     card4.style.backgroundColor = 'white';
//     cname4.style.fontSize = '24px';
//     cont4.style.fontSize = '20px';
//     card4.style.flexDirection = 'column';
//     card4.style.alignItems = 'center';
//     card4.style.justifyContent = 'center';
//     card4.style.width = "324.392px";
//     card4.style.gap = "10px";
//     ptag4.style.width = "100%";

//     card4.style.height = "513.968px";

//     card4.style.borderRadius = "50px";
//     button4.style.width = "120px";
//     button4.style.height = "40px";
//     button4.style.borderRadius = "15px";
//     button4.style.backgroundColor = "#FFB737";
//     button4.style.border = "none";
//     button4.style.color = "white";
//     button4.style.fontSize = "14px";

//     imgs4.style.width = '300px';
//     imgs4.style.height = '250px';
//     imgcont4.style.marginBottom = '30px';
//     imgcont4.style.marginTop = '-13px';
//     imgcont4.style.borderRadius = '50px';
//     imgcont4.style.backgroundColor = 'rgba(245, 0, 0, 0.8)';
//     imgcont4.style.width = '300px';
//     imgcont4.style.height = '250px';
//     imgcont4.style.display = 'flex';
//     imgcont4.style.alignItems = 'center';

//     listofcards4.push(card4);
// }


// function enter(card) {
//     var clickedCard = card.currentTarget;
//     var selectedimg = clickedCard.getElementsByTagName("img")[0];
//     clickedCard.style.transform = "scale(1.05)";
//     selectedimg.style.transform = "scale(1.2)";
//     selectedimg.style.padding = "scale(1.1)";
//     clickedCard.style.transition = ".1s ease .1s";
//     selectedimg.style.transition = ".1s ease .1s";
//     clickedCard.style.boxShadow = "5px 5px 15px grey";
//     clickedCard.style.cursor = "pointer";

// }

// function leave(card) {
//     var clickedCard = card.currentTarget;
//     var selectedimg = clickedCard.getElementsByTagName("img")[0];
//     clickedCard.style.transform = "scale(1)";
//     clickedCard.style.boxShadow = "0px 0px 0px";
//     selectedimg.style.transform = "scale(1)";
// }

// listofcards4.forEach(function (card) {
//     card.addEventListener("mouseenter", enter);
//     card.addEventListener("mouseleave", leave);
// });
// // end share


// // snacks and beverages
// var container5 = document.getElementById("container5"); // Change container4 to container5
// var cardno = 10;
// var loi5 = ['./alcarte/1.png', './alcarte/2.png', './alcarte/3.png', './alcarte/4.png', './alcarte/5.png', './alcarte/6.png', './alcarte/7.png', './alcarte/8.png', './alcarte/9.png', './alcarte/10.png'];
// var heads5 = ['Zinger Stacker Combo', 'Kentucky Burger', 'Kentucky Combo', 'Mighty Zinger', 'Twister', 'Twister Combo', 'Zinger Burger', 'Zinger Combo', 'Zinger Stacker', 'Stacker Combo'];
// var content5 = ['Crispy chicken, sliced onions tangy imli chutney, mint mayo wrapped in a soft paratha', '1 Krunch burger + 1 pc of Hot and Crispy Fried Chicken + 1 regular drink', 'Krunch + 1 regular Fries + 1 regular Drink', '2 pieces of Hot and Crispy Fried Chicken+ fries+ dinner roll+ signature Vietnamese Sauce', '3 pieces of Hot and Crispy Fried Chicken', '1 Krunch burger + 1 pc of Hot and Crispy Fried Chicken + 1 regular drink', 'Krunch fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun', 'Spiced and buttery rice with 6 pcs of Hot Shots topped with our signature Vietnamese sauce','Tender chicken strips, black  pepper mayo, diced tomatoes and lettuce-wrapped in a tortilla','Crispy chicken, sliced onions tangy imli chutney, mint mayo wrapped in a soft paratha'];

// var listofcards5 = [];
// var price5 = ["Rs 560", "Rs 560", "Rs 560", "Rs 560", "Rs 560", "Rs 560", "Rs 560", "Rs 560"]; // Use price5 for price

// for (let index = 0; index < cardno; index++) {
//     var ptag5 = document.createElement("div"); // Use ptag5 for the fifth set
//     var card5 = document.createElement("div"); // Use card5 for the fifth set
//     var imgcont5 = document.createElement("div"); // Use imgcont5 for the fifth set
//     var imgs5 = document.createElement("img"); // Use imgs5 for the fifth set
//     var cname5 = document.createElement("p"); // Use cname5 for the fifth set
//     var cont5 = document.createElement("p"); // Use cont5 for the fifth set
//     var button5 = document.createElement("button"); // Use button5 for the fifth set
//     var bcon5 = document.createElement("p"); // Use bcon5 for the fifth set
//     var pr5 = document.createElement("p"); // Use pr5 for the fifth set

//     card5.setAttribute('id', `card${index + 1}`);
//     imgs5.src = loi5[index]; // Use loi5 for the fifth set
//     card5.appendChild(imgcont5);
//     card5.appendChild(cname5);
//     card5.appendChild(cont5);
//     card5.appendChild(ptag5);
//     ptag5.appendChild(pr5);
//     ptag5.appendChild(button5);
//     button5.appendChild(bcon5);
//     imgcont5.appendChild(imgs5);
//     bcon5.innerHTML = "Add to Bucket";
//     pr5.innerHTML = price5[index]; // Use price5 for the fifth set
//     cont5.innerHTML = content5[index]; // Use content5 for the fifth set
//     cname5.innerHTML = heads5[index]; // Use heads5 for the fifth set
//     cname5.style.color = 'black';
//     cont5.style.color = 'black';
//     cont5.style.textAlign = 'center';
//     cont5.style.width = '90%';
//     cont5.style.height = "80px";

//     container5.appendChild(card5);
//     card5.style.display = 'flex';
//     ptag5.style.display = 'flex';
//     ptag5.style.alignItems = 'center';
//     ptag5.style.marginTop = '20px';
//     ptag5.style.justifyContent = 'space-around';
//     pr5.style.color = 'black';
//     pr5.style.fontSize = '24px';

//     card5.style.backgroundColor = 'white';
//     cname5.style.fontSize = '24px';
//     cont5.style.fontSize = '20px';
//     card5.style.flexDirection = 'column';
//     card5.style.alignItems = 'center';
//     card5.style.justifyContent = 'center';
//     card5.style.width = "324.392px";
//     card5.style.gap = "10px";
//     ptag5.style.width = "100%";

//     card5.style.height = "513.968px";

//     card5.style.borderRadius = "50px";
//     button5.style.width = "120px";
//     button5.style.height = "40px";
//     button5.style.borderRadius = "15px";
//     button5.style.backgroundColor = "#FFB737";
//     button5.style.border = "none";
//     button5.style.color = "white";
//     button5.style.fontSize = "14px";

//     imgs5.style.width = '300px';
//     imgs5.style.height = '250px';
//     imgcont5.style.marginBottom = '30px';
//     imgcont5.style.marginTop = '-13px';
//     imgcont5.style.borderRadius = '50px';
//     imgcont5.style.backgroundColor = 'rgba(245, 0, 0, 0.8)';
//     imgcont5.style.width = '300px';
//     imgcont5.style.height = '250px';
//     imgcont5.style.display = 'flex';
//     imgcont5.style.alignItems = 'center';

//     listofcards5.push(card5);
// }


// function enter(card) {
//     var clickedCard = card.currentTarget;
//     var selectedimg = clickedCard.getElementsByTagName("img")[0];
//     clickedCard.style.transform = "scale(1.05)";
//     selectedimg.style.transform = "scale(1.2)";
//     selectedimg.style.padding = "scale(1.1)";
//     clickedCard.style.transition = ".1s ease .1s";
//     selectedimg.style.transition = ".1s ease .1s";
//     clickedCard.style.boxShadow = "5px 5px 15px grey";
//     clickedCard.style.cursor = "pointer";
// }

// function leave(card) {
//     var clickedCard = card.currentTarget;
//     var selectedimg = clickedCard.getElementsByTagName("img")[0];
//     clickedCard.style.transform = "scale(1)";
//     clickedCard.style.boxShadow = "0px 0px 0px";
//     selectedimg.style.transform = "scale(1)";
// }


// listofcards5.forEach(function (card) {
//     card.addEventListener("mouseenter", enter);
//     card.addEventListener("mouseleave", leave);
// });


// // end snacks n bevs


// // midnight
// var container6 = document.getElementById("container6"); // Change container5 to container6
// var cardno = 3;
// var heads6 = ['midnight 1','midnight 2','midnight 3']; // Use heads6 for the sixth set
// var loi6 = ['./everyday/bg3.png', './everyday/bg1.png', './everyday/bg2.png']; // Use loi6 for image sources
// var content6 = ['Crispy chicken, sliced onions tangy imli chutney, mint mayo wrapped in a soft paratha', '1 Krunch burger + 1 pc of Hot and Crispy Fried Chicken + 1 regular drink', 'Krunch + 1 regular Fries + 1 regular Drink', '2 pieces of Hot and Crispy Fried Chicken+ fries+ dinner roll+ signature Vietnamese Sauce', '3 pieces of Hot and Crispy Fried Chicken', '1 Krunch burger + 1 pc of Hot and Crispy Fried Chicken + 1 regular drink', 'Krunch fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun', 'Spiced and buttery rice with 6 pcs of Hot Shots topped with our signature Vietnamese sauce']; // Use content6 for content
// var listofcards6 = [];
// var price6 = ["Rs 560", "Rs 560", "Rs 560", "Rs 560", "Rs 560", "Rs 560", "Rs 560", "Rs 560"]; // Use price6 for price

// for (let index = 0; index < cardno; index++) {
//     var ptag6 = document.createElement("div"); // Use ptag6 for the sixth set
//     var card6 = document.createElement("div"); // Use card6 for the sixth set
//     var imgcont6 = document.createElement("div"); // Use imgcont6 for the sixth set
//     var imgs6 = document.createElement("img"); // Use imgs6 for the sixth set
//     var cname6 = document.createElement("p"); // Use cname6 for the sixth set
//     var cont6 = document.createElement("p"); // Use cont6 for the sixth set
//     var button6 = document.createElement("button"); // Use button6 for the sixth set
//     var bcon6 = document.createElement("p"); // Use bcon6 for the sixth set
//     var pr6 = document.createElement("p"); // Use pr6 for the sixth set

//     card6.setAttribute('id', `card${index + 1}`);
//     imgs6.src = loi6[index]; // Use loi6 for the sixth set
//     card6.appendChild(imgcont6);
//     card6.appendChild(cname6);
//     card6.appendChild(cont6);
//     card6.appendChild(ptag6);
//     ptag6.appendChild(pr6);
//     ptag6.appendChild(button6);
//     button6.appendChild(bcon6);
//     imgcont6.appendChild(imgs6);
//     bcon6.innerHTML = "Add to Bucket";
//     pr6.innerHTML = price6[index]; // Use price6 for the sixth set
//     cont6.innerHTML = content6[index]; // Use content6 for the sixth set
//     cname6.innerHTML = heads6[index]; // Use heads6 for the sixth set
//     cname6.style.color = 'black';
//     cont6.style.color = 'black';
//     cont6.style.textAlign = 'center';
//     cont6.style.width = '90%';
//     cont6.style.height = "80px";

//     container6.appendChild(card6);
//     card6.style.display = 'flex';
//     ptag6.style.display = 'flex';
//     ptag6.style.alignItems = 'center';
//     ptag6.style.marginTop = '20px';
//     ptag6.style.justifyContent = 'space-around';
//     pr6.style.color = 'black';
//     pr6.style.fontSize = '24px';

//     card6.style.backgroundColor = 'white';
//     cname6.style.fontSize = '24px';
//     cont6.style.fontSize = '20px';
//     card6.style.flexDirection = 'column';
//     card6.style.alignItems = 'center';
//     card6.style.justifyContent = 'center';
//     card6.style.width = "324.392px";
//     card6.style.gap = "10px";
//     ptag6.style.width = "100%";

//     card6.style.height = "513.968px";

//     card6.style.borderRadius = "50px";
//     button6.style.width = "120px";
//     button6.style.height = "40px";
//     button6.style.borderRadius = "15px";
//     button6.style.backgroundColor = "#FFB737";
//     button6.style.border = "none";
//     button6.style.color = "white";
//     button6.style.fontSize = "14px";

//     imgs6.style.width = '300px';
//     imgs6.style.height = '250px';
//     imgcont6.style.marginBottom = '30px';
//     imgcont6.style.marginTop = '-13px';
//     imgcont6.style.borderRadius = '50px';
//     imgcont6.style.backgroundColor = 'rgba(245, 0, 0, 0.8)';
//     imgcont6.style.width = '300px';
//     imgcont6.style.height = '250px';
//     imgcont6.style.display = 'flex';
//     imgcont6.style.alignItems = 'center';

//     listofcards6.push(card6);
// }


// function enter(card) {
//     var clickedCard = card.currentTarget;
//     var selectedimg = clickedCard.getElementsByTagName("img")[0];
//     clickedCard.style.transform = "scale(1.05)";
//     selectedimg.style.transform = "scale(1.2)";
//     selectedimg.style.padding = "scale(1.1)";
//     clickedCard.style.transition = ".1s ease .1s";
//     selectedimg.style.transition = ".1s ease .1s";
//     clickedCard.style.boxShadow = "5px 5px 15px grey";
//     clickedCard.style.cursor = "pointer";

// }

// function leave(card) {
//     var clickedCard = card.currentTarget;
//     var selectedimg = clickedCard.getElementsByTagName("img")[0];
//     clickedCard.style.transform = "scale(1)";
//     clickedCard.style.boxShadow = "0px 0px 0px";
//     selectedimg.style.transform = "scale(1)";
// }

// listofcards6.forEach(function (card) {
//     card.addEventListener("mouseenter", enter);
//     card.addEventListener("mouseleave", leave);
// });
// // end mid night



// function of pages
