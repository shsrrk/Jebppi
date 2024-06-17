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





// 정보창 지우기
document.addEventListener('DOMContentLoaded', function() {
  const close = document.getElementById('close-button');
  const information = document.getElementById('information-w');

  close.addEventListener('click', function() {
    // Toggle display property of the div
    if (information.style.display === 'none') {
      information.style.display = 'block'; // or 'flex', depending on your layout
    } else {
      information.style.display = 'none';
    }
  });
});




//메뉴 창 옮기기
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
  lastiY = startiY - e.clientY; 

  startiX = e.clientX; 
  startiY = e.clientY; 

  inform.style.top = `${inform.offsetTop - lastiY}px`;
  inform.style.left = `${inform.offsetLeft - lastiX}px`;
}






//방명록
document.addEventListener('DOMContentLoaded', function() {
  const chatclose = document.getElementById('chat-close-area');
  const chat = document.getElementById('chat-wboxf');

  chatclose.addEventListener('click', function() {
    // Toggle display property of the div
    if (chat.style.display === 'none') {
      chat.style.display = 'flex'; // or 'flex', depending on your layout
    } else {
      chat.style.display = 'none';
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const mchat = document.getElementById('menu-chat');
  const chat = document.getElementById('chat-wboxf');

  mchat.addEventListener('click', function() {
    // Toggle display property of the div
    if (chat.style.display === 'none') {
      chat.style.display = 'flex'; // or 'flex', depending on your layout
    } else {
      chat.style.display = 'flex';
    }
  });
});





const chat = document.getElementById("chat-wboxf");
const chath = document.querySelector(".chat-header");
let lastcX = 0;
let lastcY = 0; 
let startcX = 0; 
let startcY = 0; 

chath.addEventListener('mousedown', function(e){
  e.preventDefault(); 
  startcX = e.clientX; 
  startcY = e.clientY; 
	
  chath.classList.add('active');
  
  document.addEventListener('mouseup', onRemoveEventchat); 
  document.addEventListener('mousemove', onMovechat); 
});

function onRemoveEventchat() { 
  chath.classList.remove('active');
  document.removeEventListener('mouseup', onRemoveEventchat); 
  document.removeEventListener('mousemove', onMovechat); 
} 

function onMovechat(e) { 
  e.preventDefault(); 
  lastcX = startcX - e.clientX; 
  lastcY = startcY - e.clientY; 

  startcX = e.clientX; 
  startcY = e.clientY; 

  chat.style.top = `${chat.offsetTop - lastcY}px`;
  chat.style.left = `${chat.offsetLeft - lastcX}px`;
}