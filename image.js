let model = document.querySelector(".Container_Module");
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

let All_cards_active;
let storedcardid = [];
let filteredArray;

let clickcurrent;

function Manage_click(e, index) {
  let id;
  
  
  //  btn جلو گیری کردن از اضافی زدن کلیک  
  
  if(clickcurrent!==index){
    
    
    if(storedcardid.length<2){
      e.target.closest(".flip-box").classList.add("active");
      id = e.target.closest(".flip-box").id;
      storedcardid.push({ idelement: id, indexelement: index });
      clickcurrent=index;
    }
    else{
      return
    }

    
  }
  
  

  
  


  

  setTimeout(() => {
    filteredArray = storedcardid.filter((item, index, array) => {
      return array.some(
        (otherItem) =>
          otherItem.idelement === item.idelement &&
          otherItem.indexelement !== item.indexelement
      );
    });
  
    
    let btn=document.querySelector('.btn')
    All_cards_active=document.querySelectorAll('.flip-box.active_Select');
    Time_is_over(e);
    if(All_cards_active.length==11){

      console.log(All_cards_active) 
      model.style.display='block'
   
      btn.addEventListener('click',()=>{
        
        Array.from(All_cards_active).forEach(item=>{
          item.classList.remove('active_Select');
        })
        setTimeout(()=>{
          Btn_Start()

        },500)
      })
    }
  }, 500);
  
    

}

function Time_is_over(e) {
  setTimeout(() => {
    e.target.closest(".flip-box").classList.remove("active");
    storedcardid = [];
  }, 1000);
  if (filteredArray.length) {
    cards_Similar(filteredArray);
  }

  
}

function cards_Similar(value) {
    
   
  let All_cards = document.querySelectorAll(".flip-box");
  value.forEach((item) => {
    All_cards[item.indexelement].classList.remove("active");
    All_cards[item.indexelement].classList.add("active_Select");
  
  });
}

let getcard;
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
  });
  
}
