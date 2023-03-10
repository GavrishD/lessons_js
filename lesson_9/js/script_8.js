let allNumberPlates = ["СВ6768ЕЕ", "СВ6890ЕЕ", "AB345", "AC5678ВВ", "KA4567КА"]

let newAllNumberPlates = allNumberPlates.filter(
    (plate, index, baseArrRef) => plate[0] === 'A'
)

document.write(`Номери авто - ${allNumberPlates}<br>Новий масив тих, які починаються на "А" -> ${newAllNumberPlates}`)