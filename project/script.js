const menus=[
    {name:'Home', content:'this is the home tab'},
    {name:'contact', content:'this is the contact tab'},
    {name:'About', content:'this is the about  tab'},
    {name:'visit', content:'this is the visit tab'},
];


const menu=document.createElement('div');
nenu.style.display='flex';
nemu.style.background='#e9e9e9';
nemu.style.padding='5px';
document.body.appendChild(menu);

const content=document.createElement('div');
content.style.height='120px';
content.style.border='1px soild #ccc';
content.style.marginTop='50px';
content.style.padding='10px';
document.body.appendChild(content);


const tabs=[];
menus.forEach(tabobj ,i){
    const tab=document.createElement('div');
    tabs.innerText=tabobj.name;
    tab.classList.add('tab');
    tab.style.padding='8px 16px';
    
}

