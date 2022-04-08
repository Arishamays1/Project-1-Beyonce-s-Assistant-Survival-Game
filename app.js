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

let beyonce={
hunger: 4,
sleepiness: 2,
happiness: 4,
age: 40,
patience: 5
};

//Global Variables
let currentImg =document.querySelector(".img")
let start=document.querySelector(".start")
let restart= document.querySelector(".restart")
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
    console.log("this is button.innertext", option.text)
    const nextTextNodeId = option.nextText
    showTextNode(nextTextNodeId)
    //level 1 if granola is picked
    if(option.text===textNodes[0].options[0].text){
       beyonce.hunger -=1,
       hungerStat.innerHTML= beyonce.hunger
       console.log('it worked')
       console.log(beyonce.hunger)
       beyonce.happiness += 1
       happyStat.innerHTML=beyonce.happiness
       beyonce.patience += 1
       patienceStat.innerHTML=beyonce.patience
    } // if tuna is picked
    if(option.text===textNodes[0].options[1].text && gameActive===true){
        beyonce.hunger -=3,
        hungerStat.innerHTML= beyonce.hunger
        beyonce.happiness += 3
        happyStat.innerHTML=beyonce.happiness
        beyonce.patience += 2
        patienceStat.innerHTML=beyonce.patience
        console.log('it worked')
        console.log(beyonce.hunger)
        //I need to create the function to not allow any other button to be clicked unless 
}
    if(option.text===textNodes[0].options[2].text && gameActive===true){
        console.log('it worked')
        console.log(beyonce)
        stopGame()
    }
    //end of Level 1
//I need to create the function to not allow any other button to be clicked unless
    //Level 2 if granola is picked
        //calling blue
    if(option.text===textNodes[1].options[0].text && gameActive===true){
            beyonce.happiness += 1
            happyStat.innerHTML=beyonce.happiness
            beyonce.patience += 1
            patienceStat.innerHTML=beyonce.patience
            console.log('it worked')
            console.log(textNodes[1].options[0].text)
    }
    //calling rumi
    if(option.text===textNodes[1].options[1].text && gameActive===true){
        console.log('it worked')
        console.log(beyonce)
        beyonce.patience = 0
        patienceStat.innerHTML=beyonce.patience
        stopGame()

}
//Level 2.1 if tuna is picked
        //calling blue
        if(option.text===textNodes[2].options[0].text && gameActive===true){
            beyonce.happiness += 1
            happyStat.innerHTML=beyonce.happiness
            beyonce.patience += 1
            patienceStat.innerHTML=beyonce.patience
            console.log('it worked')
            console.log(textNodes[1].options[0].text)
            
             
    }
    //calling rumi
    if(option.text===textNodes[2].options[1].text && gameActive===true){
        console.log('it worked')
        console.log(beyonce)
        beyonce.patience = 0
        patienceStat.innerHTML=beyonce.patience
        stopGame()
    }//if swimming pool is picked
    if(option.text===textNodes[4].options[0].text && gameActive===true){
        beyonce.patience+=1
        patienceStat.innerHTML=beyonce.patience
        beyonce.happiness += 1
        happyStat.innerHTML=beyonce.happiness
        
    }
    {//if painting picked
        if(option.text===textNodes[4].options[1].text && gameActive===true){
            beyonce.patience+=1
            patienceStat.innerHTML=beyonce.patience
            beyonce.happiness += 1
            happyStat.innerHTML=beyonce.happiness 
            beyonce.sleepiness+= 2
            sleepyStat.innerHTML=beyonce.sleepiness
        }
    }
    {//if gossiping and drinking is picked
        if(option.text===textNodes[4].options[2].text && gameActive===true){
            console.log('it worked')
            console.log(beyonce)
            beyonce.patience = 0
            patienceStat.innerHTML=beyonce.patience
            stopGame()
        }
    }
    {//if chlorine pool is picked
        if(option.text===textNodes[6].options[0].text && gameActive===true){
            beyonce.happiness += 1
            happyStat.innerHTML=beyonce.happiness 
            beyonce.sleepiness+= 2
            sleepyStat.innerHTML=beyonce.sleepiness
            beyonce.hunger +=2,
            hungerStat.innerHTML= beyonce.hunger
        }
    }
    {// if mineral pool is picked
        if(option.text===textNodes[6].options[1].text && gameActive===true){
            beyonce.happiness += 1
            happyStat.innerHTML=beyonce.happiness 
            beyonce.sleepiness+= 2
            sleepyStat.innerHTML=beyonce.sleepiness
            beyonce.hunger +=2,
            hungerStat.innerHTML= beyonce.hunger
        }
    }
    { //if sandastles is picked
        if(option.text===textNodes[7].options[0].text && gameActive===true){
            console.log('it worked')
            console.log(beyonce)
            beyonce.patience = 0
            patienceStat.innerHTML=beyonce.patience
            stopGame()
        }
    }    
    {//if All Night is picked
        if(option.text===textNodes[7].options[1].text && gameActive===true){
            beyonce.happiness += 2
            happyStat.innerHTML=beyonce.happiness 
        }
    }
    {//if chlorine is picked and you shower
        if(option.text===textNodes[9].options[0].text && gameActive===true){
            console.log('it worked')
            console.log(beyonce)
            beyonce.patience = 0
            patienceStat.innerHTML=beyonce.patience
            stopGame()
        }
    }//pat dry afte chlorine
    {
        if(option.text===textNodes[9].options[1].text && gameActive===true){
        console.log('it worked')
        console.log(beyonce)
        beyonce.patience = 0
        patienceStat.innerHTML=beyonce.patience
       // stopGame()
        }
    }
    {//if mineral water is picked and shower
        if(option.text===textNodes[10].options[0].text && gameActive===true){
            beyonce.happiness+=1
            happyStat.innerHTML=beyonce.happiness
            beyonce.patience += 1
            patienceStat.innerHTML=beyonce.patience
        }
    } 
}


function stopGame(){
    gameActive= false
    btnElement.classList.add('rm')
}

restart.addEventListener('click', ()=>{
    //stopGame() 
    //startgame()
    beyonce.hunger= 4
    beyonce.sleepiness=2
    beyonce.happiness=4
    beyonce.age=40
    beyonce.patience=5
    hungerStat.innerHTML= beyonce.hunger
    sleepyStat.innerHTML=beyonce.sleepiness
    happyStat.innerHTML=beyonce.happiness
    ageStat.innerHTML=beyonce.age
    patienceStat.innerHTML=beyonce.patience
    console.log("this is working")
    prompt.innerText= "After lying on your resume and hacking the Parkwood Entertainment database you landed the highest demanding jobs as one of 4 of Beyoncé’s assistants!"
    start.classList.remove('rm')
    
})



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
         //this is textnodes[0]
        id: 1,
        text: "You're starting your first day off at her house, make sure to assist all her needs and demands, she's going to an event today what are you having her prepared for breakfast?",
        options: [
            {
                text: "Granola with berries and yogurt",

                nextText: 2.0,
               
                
            
            
            },
                
            
            {
                text: "Tuna Fish Sandwhich",
               
                nextText: 2.1,
            },
            {
                text: "All Star Breakfast",
                nextText: 2.3
            },
        ]
    },
     //this is textnodes[1]
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
     //this is textnodes[2]
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
    },
    //this is textnodes[3]
    {
        id:2.3,
        text: "She side eyes you and says, 'Are you trying to make me fat???' She asks you to leave and has her layers send you a temination letter."
    },

      //this is textnodes[4]
    {
        id: 3.0,
        text: "Beyonce Facetimes Blue Ivy. Bey now needs something to do while waiting for her hair and makeup team. What do you suggest?",
        options: [
            {
                text: "Swimming",
                nextText: 4.0
            },
            {
                text: "Painting",
                nextText: 4.1

            },
            {
                text: "Gossiping and Drinking",
                nextText: 4.2
            }
        ]
    },
    
    { //this is textnodes[5]
        id: 3.1,
        text: "Beyoncé is silent and gives you a dirty look... She then says 'she's only two', then has her team of lawyers send you a termination letter. You're fired"
    },

   
    {  //this is textnodes[6]
        id: 4.0,
        text: "Beyoncé goes and gets ready to go swimming, Beyoncé has two different types of pools, which pool should Beyoncé swim in?",
        options: [
            {
                text:"Chlorine Pool",
                nextText: 5.0
            },
            {
                text: "Mineral Pool",
                nextText: 5.1
            }
        ]
    },
     
     { //this is textnodes[7]
          id: 4.1,
         text:"Beyonce Paints. Beyoncé is anxious and tells you to play that song from Lemonade that she loves. Which song are you playing Sandcastles Or All Night?",
         options: [
             {
                 text:"Sandcastles",
                 nextText: 6.0
             },
             {
                 text: "All Night",
                 nextText: 6.1
             }
         ]
     },
     
     {  //this is textnodes[8]
        id: 4.2,
        text: "Beyoncé says 'I’m not drinking an gossiping with you peasant...!' You’ve been FIRED!"
         
     },
     
     
     {  //this is textnodes[9]
        id: 5.0,
        text:"Beyonce swims in the chlorine infinity pool.... Beyoncé is done swimming! Her hair and makeup has arrived! Do you suggest she takes a shower and makes her stylist team wait or just dry off?",
        options: [
            {
                text:"Take shower.",
                nextText: 7.0
            },
            {
                text: " Simply dry off.",
                nextText: 7.1
            }
        ]
     },
     
     {  //this is textnodes[10]
         id: 5.1,
         text: "Beyonce swims in the mineral infinity pool.... Beyoncé is done swimming! Her hair and makeup team has arrived! Do you suggest she takes a shower and makes her stylist team wait or just dry off?",
         options: [
            {
                text:"Take shower.",
                nextText: 8.0
            },
            {
                text: " Simply dry off.",
                nextText: 8.1
            }
        ]
     },
     
     
     {  //this is textnodes[11]
        id: 6.0,
         text: "Beyoncé burst out in tears then fires you after 3:03 minutes and tells you to the get out!!! FIRED."
     },
     
     {  //this is textnodes[12]
         id: 6.1,
         text: "Beyoncé says, 'Oh yes that's the one!' and sings along while painting. Beyoncé's makeup artist is running late. Beyoncé doesn't know, what are you doing?",
        options: [
            {
                text:"Do her makeup yourself.",
                nextText: 9.0
            },
            {
                text:"Tell her Sir John is running late.",
                nextText: 9.1
            }

        ]
     },
    
     {  //this is textnodes[13]
        id: 7.0,
         text:"Beyonce takes a shower....Beyoncé's hair is too discolored from the chlorine to fix in time. You’ve been fired!",
     },
     {   //this is textnodes[14]
        id: 7.1,
         text:"Beyonce simply pats dry....The application for Beyoncé's makeup and body glo is ruined from the chlorine as well as her hair! You're FIRED!"
     },
     
     
     {  //this is textnodes[15]
         id: 8.0,
         text:"Beyonce takes a shower....All clean! Her make up team is working quickly. Beyonce is hungry. What are you bringing her?",
         options: [
             {
                 text : "Oat cakes",
                 nextText: 10.0
             },
             {
                 text: "Hot Cheetohs",
                 nextText: 10.1
             }
         ]
     },
    
     { 
         //this is textnodes[16]
          id: 8.1,
         text: "Beyonce simply pats dry.... Beyonce comes out incredibly ashy and throws a bottle of Jergens at you. You're fired!!"
     },
     {  id: 9.0,
        text: "You actually do a great job. Beyonce is shocked and says, 'This is great work baby... This is for your own good because you need to pursue being a makeup artist instead of an assistant..' AND FIRES YOU."
    },
    {//this is textnodes[17]
        id: 9.1,
        text: "Beyoncé says 'Oh baby they’re not running late, we're just ahead of schedule.!' Sir John arrives, should Beyoncé finish getting styled in the car or risk being late and have him finish at home?",
        options: [
            {
                text: "Finish getting ready in the car.",
                nextText: 11.0
            },
            {
                text: "Finish at home and risk being late.",
                nextText: 11.1
            }
        ]
    },
    {  //this is textnodes[18]
        id: 10.0,
        text: "You bring her oat cakes. She smiles and tells you how much she loves oat cakes! Sir John arrives, should Beyoncé finish getting styled in the car or risk being late and have him finish at home?",
        options: [
            {
                text: "Finish getting ready in the car.",
                nextText: 11.0
            },
            {
                text: "Finish at home and risk being late.",
                nextText: 11.1
            }
        ]
    },
    {  //this is textnodes[19]
        id: 10.1,
        text: "You bring her Hot Cheetohs and they upset her stomach and she is unable to leave the house. You're fired, love."
    }
     /*
     
     */
]


console.log(textNodes)

