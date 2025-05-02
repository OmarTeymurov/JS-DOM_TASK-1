//TAsk1
/*<h1>GeForce 20</h1>
<ul>
  <li>GTX 1650</li>
  <li>GTX 1660</li>
  <li class="primary">GTX 1660 Ti</li>
  <li>RTX 2070</li>
  <li>RTX 2080</li>
  <li class="primary">RTX 2080 Ti</li> 
  */
/*
const firstItem = document.querySelector('ul li');
console.log(firstItem.textContent);
*/

//Task2
/*<ul id="gpu-list">
<li>RTX 3080</li>
<li>RTX 3090</li>
<li>RTX 4070</li>
</ul>
*/
/*
const heading = document.querySelector("h1"); 
if (heading) {
  heading.remove();
}

const list = document.querySelector("ul"); 
if (list) {
  const newItem = document.createElement("li");
  newItem.textContent = "TITAN RTX";
  list.appendChild(newItem);
}*/

//Task3
/*
document.querySelector("h1").textContent = "GeForce 20 Series";

const primaryElements = document.querySelectorAll(".primary");
primaryElements.forEach(el => {
  el.style.backgroundColor = "#ebebeb";
});
*/

//Task4
/*const primaryItems = document.querySelectorAll('li.primary');

primaryItems.forEach(item => {
  console.log(item.textContent);
});
*/
//Task5
/*const allItems = document.querySelectorAll('li');

allItems.forEach(item => {
  // Hamısına 'item' sinifi əlavə et
  item.classList.add('item');

  // Əgər 'primary' sinfi yoxdursa, 'secondary' sinfi əlavə et
  if (!item.classList.contains('primary')) {
    item.classList.add('secondary');
  }
});
*/
