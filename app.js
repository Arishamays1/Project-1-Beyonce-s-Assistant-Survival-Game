class Tomogatchi{
    constructor(name,hunger,sleepiness,happiness, age, patience){
    this.name= name;
    this.hunger= hunger;
    this.sleepines= sleepiness;
    this.happiness= happiness;
    this.age= age;
    this.patience;
    }
}

const beyonce={
hunger: 4,
sleepiness: 2,
happiness: 4,
age: 40,
patience: 5
};

//Global Variables
let currentImg =document.querySelector(".img")
let start=document.querySelector(".start")
let hungerStat=document.querySelector("#hungry")
let sleepyStat= document.querySelector("#sleepy")
let happyStat= document.querySelector("#happy")
let ageStat=document.querySelector("#aging")
let patienceStat= document.querySelector("#patiences")
let btnElement=document.querySelector("#option-btns")
let prompt= document.querySelector(".prompt")
let gameActive= true
let beyState= {}

hungerStat.innerHTML= beyonce.hunger
sleepyStat.innerHTML=beyonce.sleepiness
happyStat.innerHTML=beyonce.happiness
ageStat.innerHTML=beyonce.age
patienceStat.innerHTML=beyonce.patience

console.log(prompt)

start.addEventListener('click', ()=>{
 btnElement.classList.remove('rm')
 start.classList.add("rm")
 startgame()
}
)

function startgame(){
    if(startgame)
    gameActive= true
    beyonce,
 showTextNode(1)
  }

function showTextNode(textNodeIndex){
    const textNode= textNodes.find(textNode => textNode.id === textNodeIndex)
    prompt.innerText=textNode.text
    while (btnElement.firstChild){
        btnElement.removeChild(btnElement.firstChild)
       
    }
    textNode.options.forEach(option => {
        if(showOption(option)){
            const button = document.createElement("button")
            button.innerText= option.text
             button.classList.add("btn")
             button.addEventListener('click',() =>selectOption(option))
             btnElement.appendChild(button)
        }
    });
}

//function decreaseHunger (option){
   // if(option===textNodes[0].options[0].text){
   //     beyonce.hunger--
//console.log(beyonce.hunger)
//hungerStat.innerHTML= beyonce.hunger
 //   }


//}

function showOption(option){
    return true
}

hungerStat.innerHTML= beyonce.hunger
sleepyStat.innerHTML=beyonce.sleepiness
happyStat.innerHTML=beyonce.happiness
ageStat.innerHTML=beyonce.age
patienceStat.innerHTML=beyonce.patience

// function for the options
function selectOption(option){
    console.log("this should be checked for hunger --")
    console.log("this is button.innertext", option)
    if(option===textNodes[0].options[0].text){
       beyonce.hunger -=2,
       hungerStat.innerHTML= beyonce.hunger
       console.log('it worked')
       console.log(beyonce.hunger)
    }
    if(option===textNodes[0].options[1].text){
        beyonce.hunger -=2,
        hungerStat.innerHTML= beyonce.hunger
       beyonce.happiness += 1,
        console.log('it worked')
        console.log(beyonce.hunger)
}
}
//}


/*function hunger(2,1, 1){
                beyonce.hunger-= 2,
                beyonce.happiness+ 1 , 
                beyonce.patience= + 1
               }
*/
//function options1(){
   // textNodes[0].options
  //  if(gameActive=== true){
 //       if(textNodes[0].options[0]){
    //        currentImg.src = img.src.replace("https://pbs.twimg.com/media/D9tPHLlUwAEQKbM?format=jpg&name=small")
        //}
  //  }
//}



//Below is the coding used to allow the multiple scenarios to
// pop up when the play button is clicked
const textNodes = [
    {
        id: 1,
        text: "You're starting your first day off at her house, make sure to assist all her needs and demands, she's going to an event today what are you having her prepared for breakfast?",
        options: [
            {
                text: "Granola with berries and yogurt",

                nextText: 2.0,
               
                
            
            
            },
                
            
            {
                text: "Tuna Fish Sandwhich",
                //$hungerStat: - 4, $happyStat: + 3 , $patienceStat:+ 3,
                nextText: 2.1,
            },
            {
                text: "All Star Breakfast"
            },
        ]
    },
    {
        id: 2.0,
        text: "She nods at you for choosing the healthy breakfast, then ask you to FaceTime her daughter who are you FaceTiming, Blue Or Rumi?",
        options: [
            {
                text: "Call Blue Ivy",
                nextText: 3.0,
                //decreaseHunger: //decreaseHunger(selectOption)

            },
            {
                text: "Call Rumi",
                nextText: 3.1
            }
        ]
    },
    {
        id: 2.1,
        text: "She smiles and says, 'How did you know that was my favorite girl??' She then asks you toFaceTime her daughter who are you FaceTiming, Blue Or Rumi?",
        options: [
            {
                text: "Call Blue Ivy",
                nextText: 3.0,

            },
            {
                text: "Call Rumi",
                nextText: 3.1
            }
        ]
    }
]


console.log(option===textNodes[0].options[0].text)

