let FirstNum = Number(prompt('Digite o primeiro numero: '))
let SecondNum = Number(prompt('Digite o segundo numero: '))
let som = FirstNum+SecondNum
let sub = FirstNum-SecondNum
let mult = FirstNum*SecondNum
let div = FirstNum/SecondNum
let rest = FirstNum%SecondNum
alert(`A soma dos dois número é ${som}`)
alert(`A subtração dos dois números é ${sub}`)
alert(`A Multiplicação dos dois números é ${mult} `)
alert(`A divisão do primeiro número pelo segundo é ${div.toFixed(2)}`)
alert(`O resto da divisão do primeiro número pelo segundo é ${rest.toFixed(2)}`)

if(som%2==0){
  alert("A soma dos números tem como resultado um número par")
}else{
  alert("A soma dos números tem como resultado um número ímpar")
}

if(FirstNum==SecondNum){
  alert("Os números são iguais")
}else{
  alert("Os números são diferentes")
}