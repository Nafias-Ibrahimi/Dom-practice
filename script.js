const title=document.getElementById('title');
const items=document.getElementsByClassName('text');
const el=document.getElementsByTagName('p');
const els=document.querySelector('.text');
els.forEach(e=>console.log(e));

// تغییر محتوا (Changing Content)
// innerText

element.innertext='new Text';


// innerHTML innerHTML تمام HTML داخل یک عنصر را می‌خواند یا تغییر می‌دهد.
 const box=document.getElementsByClassName('box');
 box.innerHtml='<b>Hello</b>'