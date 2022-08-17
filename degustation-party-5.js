

function degustation(array){

    let i = 0
    let carrierObject = {}
    let dislikedMeals = 0

    while(array[i] !== 'Stop'){
        let element = array[i]
        let initialSplit = element.split('-')
        let command = initialSplit[0]
        let person = initialSplit[1]
        let food = initialSplit[2]

        if(command === 'Like'){
            if(!carrierObject.hasOwnProperty(person)){
                carrierObject[person] = new Array()
            } 

            if(!carrierObject[person].includes(food)){
                carrierObject[person].push(food)
            } 
        } else if(command === 'Dislike'){
            if(!carrierObject.hasOwnProperty(person)){
                console.log(`${person} is not at the party.`)
            } else {

                if(carrierObject[person].includes(food)){
                    let index = carrierObject[person].indexOf(food)
                    carrierObject[person].splice(index, 1)
                    dislikedMeals += 1
                    console.log(`${person} doesn't like the ${food}.`)
                } else {
                    console.log(`${person} doesn't have the ${food} in his/her collection.`)
                }
            }
        }

        i += 1
    }

    for(let guest of Object.keys(carrierObject)){
        let meals = carrierObject[guest].join(', ')
        console.log(`${guest}: ${meals}`)
    }
    console.log(`Unliked meals: ${dislikedMeals}`)
}


degustation(["Like-Krisi-shrimps",
"Like-Krisi-soup",
"Like-Penelope-dessert",
"Like-Misho-salad",
"Stop"]
)


// degustation(["Like-Krisi-shrimps",
// "Dislike-Vili-carp",
// "Dislike-Krisi-salad",
// "Stop"]
// )

// degustation(["Like-Katy-fish",
// "Dislike-Katy-fish",
// "Stop"])

