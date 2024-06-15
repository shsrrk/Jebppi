const wboxf = document.querySelector(".wboxf");
const header = document.querySelector(".header");
let lastX = 0;
let lastY = 0; 
let startX = 0; 
let startY = 0; 

// Header 부분 드래그 및 이동
header.addEventListener('mousedown', function(e){
  e.preventDefault(); 
  startX = e.clientX; 
  startY = e.clientY; 
	
  header.classList.add('active');
  
  document.addEventListener('mouseup', onRemoveEventHeader); 
  document.addEventListener('mousemove', onMoveHeader); 
});

function onRemoveEventHeader() { 
  header.classList.remove('active');
  document.removeEventListener('mouseup', onRemoveEventHeader); 
  document.removeEventListener('mousemove', onMoveHeader); 
} 

function onMoveHeader(e) { 
  e.preventDefault(); 
  lastX = startX - e.clientX; 
  lastY = startY - e.clientY; 

  startX = e.clientX; 
  startY = e.clientY; 

  wboxf.style.top = `${wboxf.offsetTop - lastY}px`;
  wboxf.style.left = `${wboxf.offsetLeft - lastX}px`;
}

// 메뉴 부분 드래그 및 이동
const mma = document.querySelector(".main-menu-area");
const mmah = document.querySelector(".menu-header");
let lastmX = 0;
let lastmY = 0; 
let startmX = 0; 
let startmY = 0; 

mmah.addEventListener('mousedown', function(e){
  e.preventDefault(); 
  startmX = e.clientX; 
  startmY = e.clientY; 
	
  mmah.classList.add('active');
  
  document.addEventListener('mouseup', onRemoveEventMenu); 
  document.addEventListener('mousemove', onMoveMenu); 
});

function onRemoveEventMenu() { 
  mmah.classList.remove('active');
  document.removeEventListener('mouseup', onRemoveEventMenu); 
  document.removeEventListener('mousemove', onMoveMenu); 
} 

function onMoveMenu(e) { 
  e.preventDefault(); 
  lastmX = startmX - e.clientX; 
  lastmY = startmY - e.clientY; 

  startmX = e.clientX; 
  startmY = e.clientY; 

  mma.style.top = `${mma.offsetTop - lastmY}px`;
  mma.style.left = `${mma.offsetLeft - lastmX}px`;
}




// document.addEventListener('DOMContentLoaded', function() {
//   const hiddenDelete = document.querySelector('.hidden-delete');
//   const informationDetail = document.querySelector('.information-detail');

//   hiddenDelete.addEventListener('click', function() {
//     // Toggle visibility of information detail
//     informationDetail.classList.toggle('visible');

//     // Change text of hidden-delete based on visibility
//     if (informationDetail.classList.contains('visible')) {
//       hiddenDelete.textContent = 'HIDDEN 컷 숨기기 <<';
//     } else {
//       hiddenDelete.textContent = 'HIDDEN 컷 보기 >>';
//     }
//   });
// });



const inform = document.querySelector(".information");
const informh = document.querySelector(".information-header");
let lastiX = 0;
let lastiY = 0; 
let startiX = 0; 
let startiY = 0; 

informh.addEventListener('mousedown', function(e){
  e.preventDefault(); 
  startiX = e.clientX; 
  startiY = e.clientY; 
	
  informh.classList.add('active');
  
  document.addEventListener('mouseup', onRemoveEventinform); 
  document.addEventListener('mousemove', onMoveinform); 
});

function onRemoveEventinform() { 
  informh.classList.remove('active');
  document.removeEventListener('mouseup', onRemoveEventinform); 
  document.removeEventListener('mousemove', onMoveinform); 
} 

function onMoveinform(e) { 
  e.preventDefault(); 
  lastiX = startiX - e.clientX; 
  lastmY = startiY - e.clientY; 

  startiX = e.clientX; 
  startiY = e.clientY; 

  inform.style.top = `${inform.offsetTop - lastiY}px`;
  inform.style.left = `${inform.offsetLeft - lastiX}px`;
}

