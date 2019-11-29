

// your code here

// DATA는 이미 작성된 트윗을 표시합니다.


//console.log(DATA);
let hide= document.querySelector('#hide');
hide.style.display='none';//---------------------back 버튼 속성값 추가 


for (i=0; i<DATA.length; i++){ //=========기본 5개 트윗들 생성--
let tbox=[]
let ul = document.querySelector('ul')
let nic = document.createElement('li')
let bic = document.createElement('div')
let mic = document.createElement('div')
let time = document.createElement('span')


mic.innerText = DATA[i].user
bic.innerText = DATA[i].message
time.innerText = DATA[i].created_at
mic.className = 'user'
bic.className = 'message'
time.className = 'time'

 d= nic.appendChild(mic)
 r= nic.appendChild(bic)
 s = bic.appendChild(time)

 ul.appendChild(d);
 ul.appendChild(r);

 
};



let tw = document.querySelector('#tw')




// generateNewTweet을 호출할 때마다 새로운 트윗을 생성합니다.

let b = document.getElementById('tweet') //랜덤 트윗 생성

b.onclick = function (){

   let ul = document.querySelector('ul')
let nic = document.createElement('li')
let bic = document.createElement('div')
let mic = document.createElement('div')
let time = document.createElement('span')


mic.innerText = generateNewTweet().user
bic.innerText = generateNewTweet().message
time.innerText = generateNewTweet().created_at
mic.className = 'user'
bic.className = 'message'
time.className = 'time'

 d= nic.appendChild(mic)
 r= nic.appendChild(bic)
 s = bic.appendChild(time)

 ul.prepend(r);
 ul.prepend(d);

 

  let ur = document.querySelectorAll('.user');
  let message = document.querySelectorAll('.message');

 for(let i=0;i<ur.length;i++){   //----필터링
   ur[i].addEventListener('click',filter)
   };


function filter(event){   // 필터링 함수 
   let targetuser = event.target;
   let tauser = targetuser.innerText;   
   for(let i=0;i<ur.length;i++){
      if(tauser !== ur[i].innerText){
         ur[i].style.display='none';   //---디스플레이 효과로 감추기 
         message[i].style.display='none';
      }
   
   }
   let front = document.querySelector('#tweet');//-----버튼 감추기 and 뒤로가기 버튼 생성
   front.style.display='none';
  
   hide.removeAttribute('style');


   hide.onclick = function(){    //-------- 뒤로가기 버튼 클릭시 디스플레이 속성 제거로 원상복구 
      for(let i=0; i<ur.length;i++){
      ur[i].removeAttribute('style');
     message[i].removeAttribute('style');
   };}
   

   
}
};
   //.innerText = generateNewTweet();



let enter = document.querySelector('.enter'); // ----입력값 받기 

enter.onclick = function(){
   let user = document.querySelector('.box').value;
   let message = document.querySelector('.block1').value;


   let ul = document.querySelector('ul')
   let nic = document.createElement('li')
   let bic = document.createElement('div')
   let mic = document.createElement('div')
   let time = document.createElement('span')

  mic.innerText = user;
  bic.innerText = message;
  time.innerText = new Date().format();

  mic.className = 'user'
  bic.className = 'message'
  time.className = 'time'
  


  d= nic.appendChild(mic)
 r= nic.appendChild(bic)
 s = bic.appendChild(time)

 ul.prepend(r);
 ul.prepend(d);

 



 let ur = document.querySelectorAll('.user');
 let ms = document.querySelectorAll('.message');

for(let i=0;i<ur.length;i++){
  ur[i].addEventListener('click',filter)
  };


function filter(event){
  let targetuser = event.target;
  let tauser = targetuser.innerText;   
  for(let i=0;i<ur.length;i++){
     if(tauser !== ur[i].innerText){
        ur[i].style.display='none';
        ms[i].style.display='none';
     }
  
  }
  let front = document.querySelector('#tweet');
  front.style.display='none';
   hide.removeAttribute('style');

   hide.onclick = function(){
      for(let i=0; i<ur.length;i++){
      ur[i].removeAttribute('style');
     ms[i].removeAttribute('style');
   };}
   



}};

  


let ur = document.querySelectorAll('.user');//-----초기 5개에도 필터링 적용
  let message = document.querySelectorAll('.message');

 for(let i=0;i<ur.length;i++){
   ur[i].addEventListener('click',filter)
   };


function filter(event){
   let targetuser = event.target;
   let tauser = targetuser.innerText;   
   for(let i=0;i<ur.length;i++){
      if(tauser !== ur[i].innerText){
         //tw.removeChild(ur[i]);
         //tw.removeChild(message[i]);
         ur[i].style.display='none';
         message[i].style.display='none';

   
   }
   let front = document.querySelector('#tweet');
   //let back = document.querySelector('#hide');
   front.style.display='none';
   hide.removeAttribute('style');
   
   }


 hide.onclick = function(){
   for(let i=0; i<ur.length;i++){
   ur[i].removeAttribute('style');
  message[i].removeAttribute('style');
};}

 


}








