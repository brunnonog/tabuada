function tabuada(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('selTab')

    if(num.value.length == 0){
        window.alert('Digite um número!')
    } else {
        var n = Number(num.value)//a linha abaixo poderia ser feita utilizando "for". porém como foi utilizado no exercicio anterior, vou usar while
        var c = 1 //o contador da multiplicação
        tab.innerHTML = " "//antes de mostrar uma nova tabuada, a anterior será apagada
        while (c <= 10){
            var item = document.createElement('option')//o option pode ser criado diretamente dentro do html. aqui, ele será criado de forma dinamica.
            item.text = `${n} x ${c} = ${n*c}` //aqui estamos definindo o que vai ser a parte de dentro da tag option, que no caso é a var item. o conteúdo da tabuada
            tab.appendChild(item)//appenChild para adicionar a var item como elemento filho da tabuada
            c++//para adicionar ao valor do contador c
        }
        
    }

}