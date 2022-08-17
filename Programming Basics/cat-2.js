


function catfood(inputArray) {

    let fatsPercentage = Number(inputArray[0])
    let proteinsPercentage = Number(inputArray[1])
    let carbsPercentage = Number(inputArray[2])

    let calories = Number(inputArray[3])
    let waterPercentage = Number(inputArray[4])

    let fatsCalories = calories * (fatsPercentage/100)
    let proteinsCalories = calories * (proteinsPercentage/100)
    let carbsCalories = calories * (carbsPercentage/100)

    let fatsGrams = fatsCalories / 9
    let proteinsGrams = proteinsCalories / 4
    let carbsGrams = carbsCalories / 4

    let totalGrams = fatsGrams + proteinsGrams + carbsGrams
    let gramCalories = calories / totalGrams
    let gramCaloriesWithoutWater = gramCalories - (gramCalories * (waterPercentage/100))

    console.log(gramCaloriesWithoutWater.toFixed(4))
}


catfood(['60', '25', '15', '2500', '60'])