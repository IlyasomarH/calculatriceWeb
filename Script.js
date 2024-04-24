
let nombres= document.querySelectorAll('ul > div.ligne li, div.Zero li')
let operation = document.querySelectorAll('div.operation> ul > div.oper > div >li')

let champ1=document.querySelector('div.container> div.ecran >div.calcul > input:first-child')

let champ2=document.querySelector('div.container> div.ecran >div.calcul > input:first-child +  input')
let champ3=document.querySelector('div.container> div.ecran >div.calcul > input:last-child')
let resultat= document.querySelector('div.container> div.ecran >div.resultat > input')

let effacer= document.querySelector('div.last > button')
let egale= document.querySelector('div.egale')


for(let i=0; i<nombres.length; i++){
    nombres[i].addEventListener('click', (e)=>{
        if (champ2.value==''){
              champ1.value+= nombres[i].textContent
            
        }else if (champ2.value!='' & resultat.value==''){
            champ3.value+=nombres[i].textContent
        }else if (resultat.value!=''){
            champ1.value=nombres[i].textContent
            champ2.value=''
            champ3.value=""
            resultat.value=""
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
    }else{
        
       resultat.value="Math ereur"

       resultat.style.color="red"
    }
    
})



effacer.addEventListener('click', ()=>{
    location.reload()
})


let tab


champ1.addEventListener('keydown',(e)=>{

           

            if(e.code=="Enter"){
                tab= champ1.value.split('+')
                tabs=champ1.value.split('-')
                tabm=champ1.value.split('*')
                tabd=champ1.value.split('/')
                if(tab.length>=2){
                    //  tab= champ1.value.split('+')
                    resultat.value=(Number(tab[0])+ Number(tab[1]))
                    
                

                    
                  
                }else if(tabs.length>=2){
                    resultat.value=(Number(tabs[0])- Number(tabs[1]))
                }else if(tabm.length>=2){
                    resultat.value=(Number(tabm[0])* Number(tabm[1]))
                }else{
                    resultat.value=(Number(tabd[0])/Number(tabd[1]))
                }
                
               

                


                
            }


            // if(e.code=='NumpadAdd'){

            //     champ2.value= "+"

            // }else if (e.code=='NumpadDivide'){
            //     champ2.value="/"
            // }else if(e.code=="NumpadMultiply"){
            //     champ2.value=="*"
            // }else if(e.code=="NumpadSubtract"){
            //     champ2.value='-'
            // }else{

            // }

     


})
