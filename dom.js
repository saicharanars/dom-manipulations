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

var libytag = document.getElementsByTagName('li');
libytag[2].textContent = 'hello 2';
libytag[2].style.backgroundColor = "green";
//queryselector