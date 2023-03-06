//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title = "sai";
//console.log(document.title);
//console.log(document.doctype);

//console.log(document.head);
//console.log(document.body);
//console.log(document.all[11]);
// document.all[10].textContent = 'hello';
//console.log(document.forms);
//console.log(document.links);
//console.log(document.forms[0]);
//console.log(document.images);

//selectors get elements
//console.log(document.getElementById("header-title"));
//var header = document.getElementById("header-title");
//var headerdiv = document.getElementById("main-header");
//console.log(header);
//header.textContent="hello";
//header.innerText="goodbye";
//console.log(header.innerText);
//header.innerHTML='<h3>hello</h3>'
//header.style.borderBottom = 'solid 3px #000';
//headerdiv.style.borderBottom = 'solid 3px #000';
//var items= document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[2]);
//items[1].textContent = 'hello';
//items[1].style.fontWeight = 'bold';
//items[1].style.backgroundColor = 'white';
//items[1].style.color = 'green';

// var items = document.getElementsByClassName('list-group-item');
// console.log(items[2]);
// items[2].textContent = 'hello 2';
// items[2].style.backgroundColor = "green";
// //items.style.fontWeight = "bold";
// for(i=0;i<items.length;i++){
//     items[i].style.fontWeight = 'bold';
// }


// var li = document.getElementsByTagName('li');
// console.log(li[2]);
// li[2].textContent = 'hello 2';
// li[2].style.backgroundColor = "green";
// //li.style.fontWeight = "bold";
// for(i=0;i<li.length;i++){
//     li[i].style.fontWeight = 'bold';
// }

// var libytag = document.getElementsByTagName('li');
// console.log(libytag);
// libytag[2].textContent = 'hello 2';
// libytag[2].style.backgroundColor = "green";
//queryselector

// var header = document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #111';
// var input = document.querySelector('input ');
// input.value = 'hello'
// var submit = document.querySelector('input[type="submit"]');
// submit.value='send';
// var item = document.querySelector('.list-group-item');
// item.style.color='red';
// var itemlast = document.querySelector('.list-group-item:last-child');
// itemlast.style.color='red';

//Make the 2nd item have green background color
//nth child
// var itemnth = document.querySelector('.list-group-item:nth-child(2)');
// itemnth.style.backgroundColor='green';
//Make the 3rd item invisible
// var item3 = document.querySelector('.list-group-item:nth-child(3)');
// item3.style.display='None';

//query selector all
// var titles = document.querySelectorAll('.title');
// titles[1].textContent="hello";
//Using QuerySelectorALL change the font color to green for 2nd item in the item list
// var items = document.querySelectorAll('li');
// items[1].style.color="green";
 //Choose all the odd elements and make their background green using QuerySelectorALL﻿
// var odd = document.querySelectorAll('li:nth-child(odd)');
// for (var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor = 'green';
// }

//traverse dom
var itemlist = document.querySelector('#items');
//parent
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor = 'red';
// console.log(itemlist.parentNode.parentNode);
//parent element
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor = 'green';
// console.log(itemlist.parentElement.parentElement);

//child node
// console.log(itemlist.childNodes);

//children
// console.log(itemlist.children);
// console.log(itemlist.children[2]);
// itemlist.children[2].style.backgroundColor='yellow';

//first child
// console.log(itemlist.firstChild);

//firstelementchild
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent="hai";

//lastelementchild
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent="hai";

//sibling
//console.log(itemlist.nextSibling);
//next element sibling
//console.log(itemlist.nextelementSibling);
//previous sibling
//console.log(itemlist.previousSibling);
//previouselemnetsibling
// console.log(itemlist.previousElementSibling);
// itemlist.previousElementSibling.style.color='green';

//create element
//div
var newdiv=document.createElement('div');
console.log(newdiv);
//add class
newdiv.className='hello';
//add id
// newdiv.id="hai";
// //add attr
// newdiv.setAttribute('title','hello dom');
// //create text node
// var newdivtext = document.createTextNode('hello sai');
// //add dic text
// newdiv.appendChild(newdivtext);

// var conatiner=document.querySelector('header .container');
// var h1=document.querySelector('header h1');
  
// conatiner.insertBefore(newdiv,h1);

  //adding them to ui
parentnode = document.getElementById("items");
parentnode.innerHTML = '<li>hello</li>'+parentnode.innerHTML










