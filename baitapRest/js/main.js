let sum = (...nums) => {
    let tong = 0;
    nums.map((num) => {
        tong += num;
    })

    // console.log(tong)
    // console.log(nums.length)
    // console.log(tong/(nums.length))
    return tong/(nums.length)

}

let dtbKhoi1 = () => {
    toan = Number(document.querySelector('#inpToan').value);
    ly = Number(document.querySelector('#inpLy').value);
    hoa = Number(document.querySelector('#inpHoa').value);

    document.querySelector('#tbKhoi1').innerHTML = sum(toan, ly, hoa)
   
}


let dtbKhoi2 = () => {
    van = Number(document.querySelector('#inpVan').value);
    su = Number(document.querySelector('#inpSu').value);
    dia = Number(document.querySelector('#inpDia').value);
    english = Number(document.querySelector('#inpEnglish').value);
    document.querySelector('#tbKhoi2').innerHTML = sum(van, su, dia, english)
    
}

document.querySelector('#btnKhoi1').onclick = dtbKhoi1;
document.querySelector('#btnKhoi2').onclick = dtbKhoi2;