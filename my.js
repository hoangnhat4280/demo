function score() {
    let math = + document.getElementById("math").value;
    let literature = + document.getElementById("literature").value;
    let english = + document.getElementById("english").value;

    let total = math + literature + english;
    let average = total / 3;
    let content = "";

    if (average < 5) {
        content = "Khong dat";
    } else if (average <= 7) {
        content = "Dat";
    } else if (average < 8) {
        content = "Kha";
    } else if (average >= 8) {
        content = "Tot";
    } else {
        content = "Xuat Sac"
    }
    document.getElementById("result").innerHTML = content;
}


