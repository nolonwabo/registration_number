//var addButoon = document.querySelector('.addButoon');
var ul =document.getElementById('box');
var text = document.getElementById('regNo');
//var addButton = document.getElementsByName('addButton');
function add(){
  var addButoon =document.getElementById('regNo').value;
  if(addButoon.length > 0 && list !== null){
  var list =document.createElement('li');
  list.textContent=text.value;
  ul.appendChild(list);

  }
document.getElementById('regNo').value="";
}
//addButoon.addEventListener ('click', add());
