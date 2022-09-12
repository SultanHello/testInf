let check = document.querySelector('.war')
let check2 = document.querySelector('.war2')
let check3 = document.querySelector('.war3')
let check4 = document.querySelector('.war4')
let check5 = document.querySelector('.war5')
let check6 = document.querySelector('.war6')
let check7 = document.querySelector('.war7')
let check8 = document.querySelector('.war8')
let check9 = document.querySelector('.war9')
let check10 = document.querySelector('.war10')

let num = document.querySelector('.num')

let qu1 = document.querySelector('.qu1')
let qu2 = document.querySelector('.qu2')
let qu3 = document.querySelector('.qu3')
let qu4 = document.querySelector('.qu4')
let qu5 = document.querySelector('.qu5')
let qu6 = document.querySelector('.qu6')
let qu7 = document.querySelector('.qu7')
let qu8 = document.querySelector('.qu8')
let qu9 = document.querySelector('.qu9')
let qu10 = document.querySelector('.qu10')

let m1 = document.querySelector('.mistake1')
let m2 = document.querySelector('.mistake2')
let m3 = document.querySelector('.mistake3')
let m4 = document.querySelector('.mistake4')
let m5 = document.querySelector('.mistake5')
let m6 = document.querySelector('.mistake6')
let m7 = document.querySelector('.mistake7')
let m8 = document.querySelector('.mistake8')
let m9 = document.querySelector('.mistake9')
let m10 = document.querySelector('.mistake10')
let m11 = document.querySelector('.mistake11')
let m12 = document.querySelector('.mistake12')
let m13 = document.querySelector('.mistake13')
let m14 = document.querySelector('.mistake14')
let m15 = document.querySelector('.mistake15')
let m16 = document.querySelector('.mistake16')
let m17 = document.querySelector('.mistake17')
let m18 = document.querySelector('.mistake18')
let m19 = document.querySelector('.mistake19')
let m20 = document.querySelector('.mistake20')

let i = 0
let res = document.querySelector('.res')
let result = document.querySelector('.result')
let elem = document.createElement('div')

elem.className = 'resu'
function oneBox(){
    qu1.style.display = 'none'
    qu2.style.display ='block'
    num.innerText = `2 / 10`

}
function twoBox(){
    qu2.style.display = 'none'
    qu3.style.display ='block'
    num.innerText = `3 / 10`
    
}
function threeBox(){
    qu3.style.display = 'none'
    qu4.style.display ='block'
    num.innerText = `4 / 10`
}
function fourBox(){
    qu4.style.display = 'none'
    qu5.style.display ='block'
    num.innerText = `5 / 10`
}
function fiveBox(){
    qu5.style.display = 'none'
    qu6.style.display ='block'
    num.innerText = `6 / 10`

}
function sixBox(){
    qu6.style.display = 'none'
    qu7.style.display ='block'
    num.innerText = `7 / 10`
    
}
function sevenBox(){
    qu7.style.display = 'none'
    qu8.style.display ='block'
    num.innerText = `8 / 10`
}
function eigthBox(){
    qu8.style.display = 'none'
    qu9.style.display ='block'
    num.innerText = `9 / 10`
}
function nineBox(){
    qu9.style.display = 'none'
    qu10.style.display ='block'
    num.innerText = `10 / 10`
}
function tenBox(){
    qu5.style.display = 'none'
    qu2.style.display ='block'
    num.innerText = `5 / 5`
}



qu1.style.display = 'block'









check.addEventListener('click',function(event){
    event.preventDefault()
    m1.setAttribute('disabled',true)
    m2.setAttribute('disabled',true)
    check.setAttribute('disabled',true)
    oneBox()
    i++

})
m1.addEventListener('click',function(){
    m1.setAttribute('disabled',true)
    m2.setAttribute('disabled',true)
    check.setAttribute('disabled',true)
    oneBox()
})
m2.addEventListener('click',function(){
    m1.setAttribute('disabled',true)
    m2.setAttribute('disabled',true)
    check.setAttribute('disabled',true)
    oneBox()
})






check2.addEventListener('click',function(event){
    event.preventDefault()
    m3.setAttribute('disabled',true)
    m4.setAttribute('disabled',true)
    check2.setAttribute('disabled',true)
    twoBox()
    i++
})
m3.addEventListener('click',function(){
    m3.setAttribute('disabled',true)
    m4.setAttribute('disabled',true)
    check2.setAttribute('disabled',true)
    twoBox()
})
m4.addEventListener('click',function(){
    m3.setAttribute('disabled',true)
    m4.setAttribute('disabled',true)
    check2.setAttribute('disabled',true)
    twoBox()
})




check3.addEventListener('click',function(event){
    event.preventDefault()
    m5.setAttribute('disabled',true)
    m6.setAttribute('disabled',true)
    check3.setAttribute('disabled',true)
    threeBox()
    i++
})
m5.addEventListener('click',function(){
    m5.setAttribute('disabled',true)
    m6.setAttribute('disabled',true)
    check3.setAttribute('disabled',true)
    threeBox()
})
m6.addEventListener('click',function(){
    m5.setAttribute('disabled',true)
    m6.setAttribute('disabled',true)
    check3.setAttribute('disabled',true)
    threeBox()
})

check4.addEventListener('click',function(event){
    event.preventDefault()
    m7.setAttribute('disabled',true)
    m2.setAttribute('disabled',true)
    check.setAttribute('disabled',true)
    fourBox()
    i++

})
m7.addEventListener('click',function(){
    m1.setAttribute('disabled',true)
    m2.setAttribute('disabled',true)
    check.setAttribute('disabled',true)
    fourBox()
})
m8.addEventListener('click',function(){
    m1.setAttribute('disabled',true)
    m2.setAttribute('disabled',true)
    check.setAttribute('disabled',true)
    fourBox()
})






check5.addEventListener('click',function(event){
    event.preventDefault()
    m3.setAttribute('disabled',true)
    m4.setAttribute('disabled',true)
    check2.setAttribute('disabled',true)
    fiveBox()
    i++
})
m9.addEventListener('click',function(){
    m3.setAttribute('disabled',true)
    m4.setAttribute('disabled',true)
    check2.setAttribute('disabled',true)
    fiveBox()
})
m10.addEventListener('click',function(){
    m3.setAttribute('disabled',true)
    m4.setAttribute('disabled',true)
    check2.setAttribute('disabled',true)
    fiveBox()
})




check6.addEventListener('click',function(event){
    event.preventDefault()
    m5.setAttribute('disabled',true)
    m6.setAttribute('disabled',true)
    check3.setAttribute('disabled',true)
    sixBox()
    i++
})
m11.addEventListener('click',function(){
    m5.setAttribute('disabled',true)
    m6.setAttribute('disabled',true)
    check3.setAttribute('disabled',true)
    sixBox()
})
m12.addEventListener('click',function(){
    m5.setAttribute('disabled',true)
    m6.setAttribute('disabled',true)
    check3.setAttribute('disabled',true)
    sixBox()
})




check7.addEventListener('click',function(event){
    event.preventDefault()
    check.setAttribute('disabled',true)
    sevenBox()
    i++
})
m13.addEventListener('click',function(){
    m1.setAttribute('disabled',true)
    sevenBox()
})
m14.addEventListener('click',function(){
    m1.setAttribute('disabled',true)
    sevenBox()
})





check8.addEventListener('click',function(event){
    event.preventDefault()
    check.setAttribute('disabled',true)
    eigthBox()
    i++
})
m15.addEventListener('click',function(){
    m1.setAttribute('disabled',true)
    eigthBox()
})
m16.addEventListener('click',function(){
    m1.setAttribute('disabled',true)
    eigthBox()
})


check9.addEventListener('click',function(event){
    event.preventDefault()
    check.setAttribute('disabled',true)
    nineBox()
    i++
})
m17.addEventListener('click',function(){
    m1.setAttribute('disabled',true)
    nineBox()
})
m18.addEventListener('click',function(){
    m1.setAttribute('disabled',true)
    nineBox()
})




check10.addEventListener('click',function(event){
    event.preventDefault()
    check.setAttribute('disabled',true)
    
    result.append(elem)

    elem.textContent = `Дұрыс жауап : ${i+ 1} / 10`
    
    
})
m19.addEventListener('click',function(){
    m1.setAttribute('disabled',true)
    result.append(elem)
    elem.textContent = `Дұрыс жауап : ${i+ 1} / 10`
    
})
m20.addEventListener('click',function(){
    m1.setAttribute('disabled',true)
    result.append(elem)
    elem.textContent = `Дұрыс жауап : ${i+ 1} / 10`
    
})



// res.addEventListener('click',function(event){
//     event.preventDefault()
//     result.append(elem)
//     check.style.background = "greenyellow"
//     check2.style.background = "greenyellow"
//     check3.style.background = "greenyellow"
//     check4.style.background = "greenyellow"
//     check5.style.background = "greenyellow"

//     elem.textContent = `${i} из 5`


// })