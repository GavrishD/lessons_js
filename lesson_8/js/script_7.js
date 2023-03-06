// Платежі за рік
let monthOfYears = 12
function getPay(numMonths) {
    let allPay = []
    for (let i = 0; i < numMonths; i++) {
        const pay = 10 + Math.floor(Math.random() * 1000)
        allPay.push(pay)
    }
    return allPay
}
let allPayments = getPay(monthOfYears)

// Кількість грошей за період
function getAmountMoney(paymentAll, payStart, payEnd) {
    let sumMoney = 0
    for (let i = payStart; i <= payEnd; i++) {
        sumMoney += paymentAll[i - 1]
    }
    return sumMoney
}
let amountYear = getAmountMoney(allPayments, 1, 12)
let amountFirstHalf = getAmountMoney(allPayments, 1, 6)
let amountSecondHalf = getAmountMoney(allPayments, 7, 12)
let amountSummer = getAmountMoney(allPayments, 6, 8)
let amountQuarter = getAmountMoney(allPayments, 4, 6)


// Кількість грошей за декілька місяців
function getAmountMonths(allPaymant) {
    let sum = allPaymant[2] + allPaymant[5] + allPaymant[8] + allPaymant[11]
    return sum
}
let amountMonths = getAmountMonths(allPayments)
let amountFirstSpring = getAmountMonths(allPayments, 3, 3)
let amountFirstSummer = getAmountMonths(allPayments, 6, 6);


// Кількість грошей за парні місяці
function getPairedMonths(allPaymant) {
    let sum = 0
    for (let i = 1; i <= allPaymant.length; i++) {
        if (i % 2 === 0) sum += allPaymant[i - 1]
    }
    return sum
}
let pairedMonths = getPairedMonths(allPayments)


document.write(`Платежі протягом року - ${allPayments}<br>Сума платежів за рік - ${amountYear}<br>Сума платежів за першу половину року - ${amountFirstHalf}<br>Сума платежів за другу половину року - ${amountSecondHalf}<br>Сума платежів за літо - ${amountSummer}<br>Сума платежів за ІІ квартал - ${amountQuarter}<br>Сума платежів за місяці, які є початковими - весна, літо, осінь, зима -> ${amountMonths}<br>Сума платежів за місяць, який є початковим - весна -> ${amountFirstSpring}<br>Сума платежів за місяць, який є початковим - літо -> ${amountFirstSummer}<br>Сума платежів за парні місяці - ${pairedMonths}`)
