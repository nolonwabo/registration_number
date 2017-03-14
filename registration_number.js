//var addButoon = document.querySelector('.addButoon');
var ul =document.getElementById('box');
var text = document.getElementById('regNo');
//var addButton = document.getElementsByName('addButton');
var regeNumber =[];
for(i =0; i <regeNumber.length; i++){

}
function add(){
  var addButoon =document.getElementById('regNo').value;
  if(addButoon.length > 0 && list !== null){
  var list =document.createElement('li');
  list.textContent=text.value;
  ul.appendChild(list);
  localStorage.setItem('reg' , addButoon);
}
document.getElementById('regNo').value="";
}
console.log(localStorage);
