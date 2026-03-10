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
// const list=document.createElement('ul');
// list.id='list';
// document.body.appendChild(list);

// const data=['A','B','C'];

// data.forEach(text =>{
//     const li=document.createElement('li');
//     li.className='item';
//     li.innertext=text;
//     list.appendChild(li);
// });
// const item1=document.querySelectorAll('.item');
// item1.forEach(item =>{
//     item.style.color='red';
// })

// const newDiv=document.createElement('div');
// newDiv.textContent='hello from js';
// document.body.appendChild(newDiv);

// document.body.prepend(newDiv);
// const parent = document.querySelector("#list");
// const ref = document.querySelector("#item2");
// const newItem = document.createElement("li");
// newItem.textContent = "Inserted Item";
// parent.insertBefore(newItem, ref);


// // parent.removerChild(ref);
// // document.querySelector('#item2').remove();

// const element=document.createElement('element');
// element.addEventListener("mouseenter", () => {
//   console.log("Mouse entered");
// });

// element.addEventListener("mouseleave", () => {
//   console.log("Mouse left");
// });

// document.addEventListener("keydown", e => {
//   console.log(e.key);
// });

// document.addEventListener('keydown' , e =>{
//     console.log(e.key);
// })


// document.addEventListener('keydown' , e =>{
//     if(e.key==='enter'){
//         console.log('Enter pressed');
//     }
// })
 
const h1=document.createElement('h1');
h1.className='text';
h1.id='title';
document.body.appendChild(h1);

const title=document.getElementById('title');
console.log(title);


const p=document.createElement('p');
p.className='item';
p.id='p-item';
p.textContent=`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, nemo? Delectus, eum, ea mollitia voluptatem quo, aspernatur reprehenderit ipsa itaque rem soluta officia nesciunt qui expedita! Doloremque quam similique tempora.`;

document.body.appendChild(p);

document.getElementById('p-item');
document.getElementsByClassName('item');
document.querySelector('#p-item');
document.querySelectorAll('.p-item');
console.log('hello world');
console.log(p.parentElement);


const box=document.createElement('box');
box.id='box1';
document.body.appendChild(box);
console.log(box.children);

console.log(p.nextElementSibling);
console.log(p.previousElementSibling);


const element=document.createElement('element');

console.log(element.innerHTML='<b>Hello Nafisa</b>');



















