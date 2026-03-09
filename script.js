// const title=document.getElementById('title');
// const items=document.getElementsByClassName('text');
// const el=document.getElementsByTagName('p');
// const els=document.querySelector('.text');
// // els.forEach(e=>console.log(e));

// // تغییر محتوا (Changing Content)
// // innerText

// // element.innertext='new Text';


// // innerHTML innerHTML تمام HTML داخل یک عنصر را می‌خواند یا تغییر می‌دهد.
//  const box=document.getElementsByClassName('box');
//  box.innerHtml='<b>Hello</b>'

// // innerText
// // innerText فقط متن ساده را می‌خواند یا تغییر می‌دهد.

// box.innertext='<b>Hello World</b>';
// console.log(box);

// // textContent
// const item=document.getElementsByClassName('text');

// console.log(item);
// for(let i=0; i<item.length; i++){
//     console.log(item[i]);
// }

// getElementsByTagName

// const paragraphs=document.getElementsByTagName('p');

// const element=document.querySelector('.text');

// document.querySelector("#title")
// document.querySelector(".text")
// document.querySelector("p")
// const elements=document.querySelectorAll('.text');
// elements.forEach(el=>{
//     console.log(el);
// })

// document.getElementById()

// document.getElementsByClassName()

// document.getElementsByTagName()

// document.querySelector()

// document.querySelectorAll()


// today's use the modern seletors
// querySelector
// querySelectorAll
const list=document.createElement('ul');
list.id='list';
document.body.appendChild(list);

const data=['A','B','C'];

data.forEach(text =>{
    const li=document.createElement('li');
    li.className='item';
    li.innertext=text;
    list.appendChild(li);
});
const item1=document.querySelectorAll('.item');
item1.forEach(item =>{
    item.style.color='red';
})


