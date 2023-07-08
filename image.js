let model = document.querySelector(".Container_Module");
let Timeout; // privent of start timeout 
let timout2;
let Path_image = [
  "./image/Apple(1).jpg",
  "./image/cherry(1).jpg",
  "./image/grap(1).jpg",
  "./image/Orange(1).jpg",
  "./image/Peach(1).jpg",
  "./image/Strawberry(1).jpg",
];

let Array_random_src = [];
let Array_random_src2 = [];
window.onload = () => {
  Start();
};

function Start() {
  
  Array_random_src=[]; 
  Array_random_src2=[]
  storedcardid=[]
  Set_up_random_image();
  setTimeout(() => {
    Show_cards();
  }, 2000);
}

let New_photo;
let resulte_new_photo;
let index_photo = [0, 1, 2, 3, 4, 5];
function Set_up_random_image() {

  Path_image.forEach((item, index) => {
    Generate_random_numbers(Array_random_src);
  });
  match_card(Array_random_src);
  Path_image.forEach((item, index) => {
    Generate_random_numbers(Array_random_src2);
  });

  match_card(Array_random_src2);

  Generate_element(Array_random_src.concat(Array_random_src2));
}

function match_card(Array) {
  index_photo.forEach((item, index) => {
    if (!Array.includes(item)) {
      Array.push(item);
    }
 

  });

  return;
}

function Btn_Start() {
    model.style.display='none'
  Container.innerHTML='';
  console.log('ali')
  Start()
}

function Generate_random_numbers(Array) {
  let random = Math.floor(Math.random() * Path_image.length);
 
  Find_repeated_number(Array, random);
}

function Find_repeated_number(Array, random) {
  if (Array.includes(random)) {
  } else if (!Array.includes(random)) {
    Array.push(random);
  }
}

let Container = document.querySelector(".Container");

function Generate_element(value) {
  value.forEach((item, index) => {
    Container.innerHTML += `
        <div class="flip-box"   id="${item}">
        <div class="flip-box-inner" onclick="Manage_click(event,${index})">
        <div class="flip-box-front">
       
        </div>
        <div class="flip-box-back">
        <img src="${Path_image[item]}" alt="">
        </div>
        </div>
                </div>
                `;
  });
}
let id;

let All_cards_active; // همه کارت های اکتیو
let storedcardidone=[]
let storedcardid = []; // دخیره کردن کارت های مشابه
let filteredArray;

let clickcurrent;

let count_index=[]  //ایندکس ایتم های کیلک شده

function Manage_click(e, index) {


  
  if(storedcardid.length==0){
    console.log('reza kiani')
    storedcardid.push({id:e.target.closest('.flip-box').id , index:index})
    show_card(storedcardid)
    Time_is_over_one_Select(storedcardid)
    console.log(storedcardid)
  }
  else if(storedcardid.length>0 && storedcardid.length<2){
    clearTimeout(Timeout)
    Prevent_repeated_clicks_on_the_button(e,index, storedcardid);
  }
  


 let number_card= document.querySelectorAll('.flip-box').length;
 let active_card=document.querySelectorAll('.flip-box.active_Select')
 if(active_card.length==number_card){
   model.style.display='block';
 }
 

}





function Time_is_over_one_Select(value) {
  
 Timeout= setTimeout(() => {
    console.log('mohsen kiani')
    value.forEach((item,index)=>{
   document.querySelectorAll('.flip-box')[item.index].classList.remove('active')  
   storedcardid=[]
   })
  }, 2000);
  
 
}


function Time_Over_All(value){
 timout2= setTimeout(() => {
    value.forEach((item,index)=>{
      document.querySelectorAll('.flip-box')[item.index].classList.remove('active');
    })

    storedcardid=[]
  }, 1000);
}





function show_card(value){
  
  
console.log(value)
  value.forEach((item,index)=>{
    
    document.querySelectorAll('.flip-box')[item.index].classList.add('active');
  })

 
}

  




function cards_Similar() {
    



filteredArray = storedcardid.filter((item, index, array) => {
        return array.some(
          (otherItem) =>
            otherItem.id === item.id &&
            otherItem.index !== item.index
        );
      });

      console.log(filteredArray + ' fitelrarra')
      
  let All_cards = document.querySelectorAll(".flip-box");
  filteredArray.forEach((item) => {
    All_cards[item.index].classList.remove("active");
    All_cards[item.index].classList.add("active_Select");
  });

  

}
function clearselectcard(){

}

function Prevent_repeated_clicks_on_the_button(e,index,value){
console.log('reza')

  let itemnew=e.target.closest('.flip-box').id;

  value.forEach((item,index_for)=>{
    if(item.id===itemnew && item.index===index){
      e.target.closest('.flip-box').classList.remove('active');
      storedcardid=[]
    }
    else{
      storedcardid.push({id:itemnew,index:index});
      show_card(storedcardid);
      cards_Similar()
      Time_Over_All(storedcardid)
    
    }
  })
}









function Show_cards() {
  getcard = document.querySelectorAll(".flip-box");
  Array.from(getcard).forEach((item) => {
    item.classList.remove("active");
  });
  Array.from(getcard).forEach((item) => {
    item.classList.add("active");

    setTimeout(() => {
      item.classList.remove("active");
    }, 3000);
  })
}