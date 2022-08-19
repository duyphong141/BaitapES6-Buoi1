const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];

let loadColor = () => {
    for (let i in colorList) {
        document.querySelector('#colorContainer').innerHTML += `
            <button class="color-button ${colorList[i]}" onclick="clickColor(${i})"></button>   
        `
    }
}

loadColor();

let clickColor = (param) => {
    colorList.forEach((element) => {
        document.querySelector('#house').classList.remove(element);
    })

    document.querySelector('#house').classList.add(colorList[param])
}