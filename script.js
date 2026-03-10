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
 
// const h1=document.createElement('h1');
// h1.className='text';
// h1.id='title';
// document.body.appendChild(h1);

// const title=document.getElementById('title');
// console.log(title);


// const p=document.createElement('p');
// p.className='item';
// p.id='p-item';
// p.textContent=`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, nemo? Delectus, eum, ea mollitia voluptatem quo, aspernatur reprehenderit ipsa itaque rem soluta officia nesciunt qui expedita! Doloremque quam similique tempora.`;

// document.body.appendChild(p);

// document.getElementById('p-item');
// document.getElementsByClassName('item');
// document.querySelector('#p-item');
// document.querySelectorAll('.p-item');
// console.log('hello world');
// console.log(p.parentElement);


// const box=document.createElement('box');
// box.id='box1';
// document.body.appendChild(box);
// console.log(box.children);

// console.log(p.nextElementSibling);
// console.log(p.previousElementSibling);


// const element=document.createElement('element');

// console.log(element.innerHTML='<b>Hello Nafisa</b>');
// console.log(element.innerText='hello');
// console.log(element.textContent='hello my friends');


// element.setAttribute('href', 'https://google.com');
// console.log(element);

// // element.removeAttribute('href');

// element.classList.add('active');

// console.log(element.classList.remove('active'));

// console.log(element.classList.toggle('active'));

// element.style.color='red';
// element.style.background='black';
// element.style.fontSize='20px';

 const div=document.createElement('div');
 div.innerText='Hello';
 div.className='div1';
 div.id='text';
 document.body.appendChild(div);


const button = document.createElement('button');
button.textContent = 'Click Me';
button.setAttribute('style', 'padding:20px; margin:20px; background:red;');
document.body.appendChild(button);

// ساخت parent و child
const parent = document.createElement('div');
parent.textContent = 'Parent';
parent.style.border = '1px solid black';
parent.style.padding = '20px';

const child = document.createElement('div');
child.textContent = 'Child';
child.style.background = 'lightblue';
child.style.padding = '10px';

parent.appendChild(child);
document.body.appendChild(parent);

// رویدادها
button.addEventListener('click', () => {
  console.log('button clicked');
});

document.addEventListener('keydown', e => {
  console.log('key pressed:', e.key);
});

child.addEventListener('click', () => {
  console.log('child clicked');
});

parent.addEventListener('click', () => {
  console.log('parent clicked');
});

button.addEventListener('click', e => {
  console.log('event type:', e.type);
  console.log('mouse X:', e.clientX); 
  e.stopPropagation();
});


// 3️⃣ Event Delegation
// یک event برای parent تعریف می‌کنیم.

const list=document.createElement('ul');
list.id='list';
document.body.appendChild(list);

for(let i=1; i<=3; i++){
    const li=document.createElement('li');
    li.textContent='Item ' +i;
    list.appendChild(li);
}

document.querySelector('#list').addEventListener('click', e =>{
    if(e.target.tagName === 'LI'){
        console.log('item clicked');
    }
});

const fragment=document.createDocumentFragment();
for(let i=0; i<10; i++){
    const li=document.createElement('li');
    fragment.appendChild(li);
}
list.appendChild(fragment);


const newdiv=document.createElement('div');
newdiv.textContent='hello from js';
document.body.appendChild(newdiv);

document.body.prepend(newdiv);


window.addEventListener('scroll' , ()=>{
    console.log('page is scrolling...');
})















