function getAverageTemperature() {
    let numberTemperature = parseInt(prompt('Введіть кількість показників, які ви маєте', '1'))
    let sumIndicators = 0
    let sumTemperature = 0 
    let averageScore

    for(let i = 1; i <= numberTemperature; i++){
        let indicatorTemperature = parseFloat(prompt(`Введіть температуру показників ${i}`))
        let enumerator = 0

        if(indicatorTemperature > 0){
            enumerator = enumerator + 1
            sumIndicators = sumIndicators + enumerator
            sumTemperature = sumTemperature + indicatorTemperature
            averageScore = sumTemperature / sumIndicators
        }
    }
    document.write(`Кількість додатних показників температури -> ${sumIndicators}.<br>Сума додатних показників температури -> ${sumTemperature}.<br>Середнє значення додатних показників температури -> ${averageScore}`)

    return averageScore
}

const averageScore = getAverageTemperature()