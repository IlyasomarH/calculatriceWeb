
let nombres= document.querySelectorAll('ul > div.ligne li, div.Zero li')
let operation = document.querySelectorAll('div.operation> ul > div.oper > div >li')

let champ1=document.querySelector('div.container> div.ecran >div.calcul > input:first-child')

let champ2=document.querySelector('div.container> div.ecran >div.calcul > input:first-child +  input')
let champ3=document.querySelector('div.container> div.ecran >div.calcul > input:last-child')
let resultat= document.querySelector('div.container> div.ecran >div.resultat > input')


let egale= document.querySelector('div.egale')


for(let i=0; i<nombres.length; i++){
    nombres[i].addEventListener('click', (e)=>{
        if (champ1.value==''){
              champ1.value= nombres[i].textContent
            
        }else{
            champ3.value=nombres[i].textContent
        }

        e.stopPropagation()
     

    })
}


operation.forEach((valeurCourante)=>{

    valeurCourante.addEventListener('click', (e)=>{
        champ2.value=valeurCourante.textContent
        e.stopPropagation()
    })

})

egale.addEventListener('click', ()=>{

    if(champ2.value=="+"){
        resultat.value="= "+((Number(champ1.value) + Number(champ3.value)))
    }else if(champ2.value=="-"){
        resultat.value="= "+((Number(champ1.value)-Number(champ3.value)))
    }else if(champ2.value=="*"){
        resultat.value="= "+((Number(champ1.value)*Number(champ3.value)))
    }
    else if(champ3.value!=0){
        resultat.value="= "+((Number(champ1.value)/Number(champ3.value)))
    }
    
})

// nombres.forEach((valeurCourante)=>{
//     valeurCourante.addEventListener('click', (e)=>{
//         champ3.value= valeurCourante.textContent
//         e.stopPropagation()
//     })

// })

