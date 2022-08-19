let jumpText = () => {
    let text = document.querySelector('.heading').innerHTML;
    let textArray = [...text];
    // console.log(textArray)
    for (let i of textArray) {
        document.querySelector('.heading').innerHTML += `<span>${i}</span>` 
    }
}

jumpText();