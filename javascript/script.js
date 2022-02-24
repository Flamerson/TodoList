const txt = document.querySelector("#texto");
const btn = document.querySelector("#btn");
let lista = document.querySelector("#lista");

var id = 0;

function adicionar(){
    var newTxt = txt.value;
    if(newTxt != ""){
        var oldList = document.querySelector("#lista").innerHTML;
        newList = "<li class='item' id='"+ id + "'>" + newTxt +" <button type='button' class='btn-ex' onclick='excluir("+id+")'><i class='fa-solid fa-trash-can'></i></button> </li>" + oldList;
    
        lista.innerHTML = newList;
        id += 1;
        txt.value = "";
    }
}

function excluir(num){
    let pdt = document.getElementById(num);
    pdt.remove();
}

btn.addEventListener("click" , adicionar);