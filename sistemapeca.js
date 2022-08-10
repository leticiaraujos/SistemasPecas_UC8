//peça com peso superior a 100
let peso = 40
if(peso< 100){
    console.log("Peça não permitida, necessário pelo menos 100g")
}else{
    console.log("Peça permitida!")
}

//caixa com capacidade de 10 peças, caso superior imprimir uma mensagem informando não ser permitido 
var listaPecas = ['volante','motor','freio']
if(listaPecas.length <10){
    console.log("Possível cadastrar mais peças, com limite de 10 peças")
}else{
    console.log("Quantidade excede ao permitido")
}

//Peças com nome com quantidade inferior a 3 caracteres informar erro
var nomePeca = "motor"
if[nomePeca.length <3]{
    console.log("Nome cadastrado!")
}else{
    console.log("Nome inválido")
}