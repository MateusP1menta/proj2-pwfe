let clubes = []; //vetor para armazenar os nomes

function listaClubes(){
    return JSON.parse(localStorage.getItem('clubes')) || [];
}
function salvarLista(lista){
    localStorage.setItem('clubes', JSON.stringify(lista));
}
let listaClube = listaClubes();

function addListaClubes(){
    let nomec = document.getElementById("cl").value;
    if(nomec != ""){                                  //serve para se o input não estiver vazio 
        listaClube.push({nomec});                           //usado para adicionar o valor ao vetor   
        document.getElementById("cl").value = "";     // ele limpa o campo
        salvarLista(listaClube);
    }else{
        alert('Campo vazio!!!');                      //alerta de se o campo estiver vazio
    }
}
function mostrarLista(){
    let listarClube = listaClubes();
        let listaClubesElement = document.getElementById("lista-clubes");
        listaClubesElement.innerHTML = "";
        listarClube.forEach((club) => {                        //limpa o vetor
            let listaItem = document.createElement("li"); //cria o elemento
            listaItem.textContent = club.nomec;                 //modificar o conteudo para texto
            listaClubesElement.appendChild(listaItem);                 // Adiciona cada clube como um elemento de lista à lista HTML
        });    
}
function mostrarTabela(){
    let c1 = clubes[0];
    let c2 = clubes[clubes.length - 1];               //length -1 traz o ultimo elemento da array
    let c3 = clubes[1];
    let c4 = clubes[clubes.length - 2];
    let c5 = clubes[2];
    let c6 = clubes[clubes.length - 3];
    document.getElementById("jogos").innerHTML = c1.nomec + " " + "X" + " "
    + c2.nomec +" " + "<br>" + c3.nomec + " " + "X" + " " + c4.nomec + "<br>" + c5.nomec + " " + "X" + " " + c6.nomec;

}