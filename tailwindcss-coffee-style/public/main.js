

const topMenu = document.getElementById('tqd-top-menu');
const toggleTopMenuIcon = document.getElementById('tqd-toggle-top-menu-icon');

document.addEventListener('click', (e)=>{
   if(toggleTopMenuIcon.contains(e.target)){
      topMenu.classList.toggle('hidden');
      topMenu.classList.toggle('tqd-topmenu-expanded');
   }else{
      if(topMenu.classList.contains('tqd-topmenu-expanded')){ 
         // kiem tra neu dang mo thi remove
        topMenu.classList.remove('tqd-topmenu-expanded');
         topMenu.classList.add('hidden');
      }
   }
})