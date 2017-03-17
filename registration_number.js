//var addButoon = document.querySelector('.addButoon');
var ul =document.getElementById('box');
var text = document.getElementById('regNo')
var locations =document.querySelector('#mySelect');


function add(){
  var addButoon =document.getElementById('regNo').value;
  if(addButoon.length > 0 && list !== null){
var list =document.createElement('li');
  list.textContent=text.value;
  ul.appendChild(list);
  }
  document.getElementById('regNo').value = '';
};
function filter(){
var code = document.getElementById('towns').value;
    var Cape = document.getElementById('cape').innerHTML;
    var Paarl = document.getElementById('paarl').innerHTML;
    var Bell = document.getElementById('bellville').innerHTML;
    var Stell = document.getElementById('stellenbonsh').innerHTML;
    var all = document.getElementById('all').innerHTML;
    var output = document.getElementsByTagName('li');
    for(var i=0; i < output.length; i++){
      var town = output[i];
      var regTown =output[i].textContent.toUpperCase();
      if(code === all){
        town.style.display ="block";
      }
      else if(code === Cape && regTown.startsWith('CA')){
        town.style.display ="block";
      }
      else if(code === Paarl && regTown.startsWith('CJ')){
        town.style.display ="block";
      }
      else if(code === Bell && regTown.startsWith('CY')){
      town.style.display ="block";
      }
      else if(code === Stell && regTown.startsWith('CL')){
        town.style.display ="block";
      }
      else{
        town.style.display ="none"
      }
    }
  }
