function getMinusTemperature() {
    let numberTemperature = parseInt(prompt('Введіть кількість показників, які ви маєте', '1'))
    let sumIndicators = 0

    for (let i = 1; i <= numberTemperature; i++) {
        let indicatorTemperature = parseFloat(prompt(`Введіть температуру показників ${i}`))
        let enumerator = 0

        if(indicatorTemperature < 0)
        enumerator = enumerator + 1
        sumIndicators = sumIndicators + enumerator
    }
        document.write(`Кількість відʼємних показників температури -> ${sumIndicators}`)
    return numberTemperature
    
}

const sumIndicators = getMinusTemperature()
