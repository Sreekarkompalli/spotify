var famous = [
    ["marina", "charminar", "camelsafari", "gatewayofindia","onam"],
    ["idlidosa", "biryani", "hawamahal", "pavbhaji","jatayu"],
    ["chennisuperkings", "sunrisershyd", "rajasthanroyals", "mumbaiindians","kathakali"],
    ["adiyogishivastatue", "Golconda", "costume", "",""],
    ["tamil", "telugu", "rajasthani", "marati","malayalam"]
]

//var state = ["tamilnadu", "telengana", "rajasthan", "maharashtra"];

// var tamilNadu = {
//     food: "Idli_Dosa",
//     beach: "Marina",
//     place: "Adiyogi_shiva_statue",
//     team: "Chenni_super_kings",
//     language: "Tamil"
// }


// var telangana = {
//     food: "Biryani",
//     place1: "Charminar",
//     place2: "Golconda",
//     team: "Sunrisers_hyd",
//     language: "Telugu"
// }


// var rajasthan = {
//     lace1: "Camel_Safari",
//     place2: "hawa_mahal",
//     shopping: "Jewellary",
//     place3: "Jantar_mantar",
//     "language": "Rajasthani"
// }

// var maharashtra = {
//     Cricket_team: "Mumbai Indians",
//     place1: "Gateway_of_india",
//     food: "av_bhaji",
//     place2: "Marine_drive",
//     language: "Marati"
// }

/*var place = window.prompt("Enter the place");
var fame = window.prompt("Enter the famous thing");

var i;
for (i = 0; i < state.length; i++) {
    if (place === state[i]) {
        break;
    }
}

console.log(i);
console.log(checkFamous(i, fame));

function checkFamous(i, fame) {
    var k= 0;
    for (let j = 0; j <famous.length; j++) {
        
        if (famous[j][i] == fame) {
            k = 1;
            return true;
        }
    }
    if (k== 0) {
        return false;
    }
}*/
var place_value;

function myFunction1() {
    place_value = document.getElementById("myStateBtn").value;
}


function myFunction2() {
    var fam = document.getElementById("myImgBtn").value;
    console.log(checkFamous(place_value, fam));
}
var k = 0;

function checkFamous(place_value, fam) {
    for (let i = 0; i < famous.length; i++) {

        if (famous[i][place_value] === fam) {
            k = 1;
           // console.log("Place value is " + k);
           // console.log(place_value);
            return true;
        }
    }
    return false;
}









// const timeoutId = setTimeout(callback, 60000);
// clearTimeout(timeoutId);