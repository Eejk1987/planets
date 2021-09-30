class Planet {
    constructor (name, diameter, mass, distanceToSun, yearLenght, dayLenght){
    this.name = name;
    this.diameter = diameter;
    this.mass = mass;
    this.distanceToSun = distanceToSun;
    this.yearLenght = yearLenght;
    this.dayLenght = dayLenght;
    }
    name;
    diameter;
    mass;
    distanceToSun;
    yearLenght;
    dayLenght;
}

let startBlock = document.getElementById("startBlock");
let header2 = document.getElementById("header2");
let suns = document.getElementById("suns");
let planets = document.getElementById("planets");
let sunsTable = document.getElementById("sunsTable");
let planetsTable = document.getElementById("planetsTable");

let planet1 = new Planet("Merkurius", 0.39, 0.06, 0.39, 0.24, 58.64);
let planet2 = new Planet("Venus", 0.95, 0.82, 0.72, 0.62, 243.02);
let planet3 = new Planet("Maa", 1, 1, 1, 1, 0.997);
let planet4 = new Planet("Mars", 0.53, 0.11, 1.52, 1.88, 1.03);
let planet5 = new Planet("Jupiter", 11.21, 317.8, 5.20, 11.86, 0.41);
let planet6 = new Planet("Saturnus", 9.21, 95.2, 9.54, 29.46, 0.43);
let planet7 = new Planet("Uranus", 3.98, 14.6, 19.22, 84.01, 0.72);
let planet8 = new Planet("Neptunus", 3.81, 17.2, 30.06, 164.8, 0.67);
var planeetat = [planet1,planet2,planet3,planet4,planet5,planet6,planet7,planet8];
var j = 7;

Start();

function Start(){
    header2.style.visibility = "hidden";
    suns.style.visibility = "hidden";
    planets.style.visibility = "hidden";
}

function ButtonIsPressed (){
    header2.style.visibility = "visible";
    suns.style.visibility = "visible";
    planets.style.visibility = "visible";
    startBlock.style.visibility = "hidden";
    PrintPlanets (planeetat);
}
function PrintPlanets (planeetat){
    planetsTable.innerHTML = "";
    for (let i = 0; i < j ; i++){
        planetsTable.innerHTML += "<tr>";
        planetsTable.innerHTML += "<th>Nimi: " + planeetat[i].name + "</th>";
        planetsTable.innerHTML += "</tr><th>tiedot maapalloon verrattuna:</th><tr>"
        planetsTable.innerHTML += "<td>Halkaisija: " + planeetat[i].diameter + "</td>";
        planetsTable.innerHTML += "<td>Massa: " + planeetat[i].mass + "</td>";
        planetsTable.innerHTML += "<td>Etäisyys aurinkoon: " + planeetat[i].distanceToSun + "</td>";
        planetsTable.innerHTML += "<td>Vuoden pituus: " + planeetat[i].yearLenght + "</td>";
        planetsTable.innerHTML += "<td>Päivän pituus: " + planeetat[i].dayLenght + "</td>";
        planetsTable.innerHTML += "</tr>";
    }
}

function AddPlanet (){
    let newParsedValues = ParseValues();
    let planetName = document.getElementById("planetName").value;
    let planetDiameter = newParsedValues[0];
    let planetMass = newParsedValues[1];
    let planetDistanceToSun = newParsedValues[2];
    let planetYearLenght = newParsedValues[3];
    let planetDayLenght = newParsedValues[4];
    let planet = new Planet(planetName,planetDiameter,planetMass,planetDistanceToSun,planetYearLenght,planetDayLenght);
    console.log(planet);
    planeetat.push(planet);
    j+=1;
    PrintPlanets();  
}

function ParseValues (){
    let planetDiameterParse = document.getElementById("planetDiameter").value;
    let planetMassParse = document.getElementById("planetMass").value;
    let planetDistanceToSunParse = document.getElementById("planetDistanceToSun").value;
    let planetYearLenghtParse = document.getElementById("planetYearLenght").value;
    let planetDayLenghtParse = document.getElementById("planetDayLenght").value;
    let parseValues = [planetDiameterParse,planetMassParse,planetDistanceToSunParse,planetYearLenghtParse,planetDayLenghtParse];
    let parsedValues = new String ();
    for (let k = 0; k < parseValues.length ; k++){
        parsedValues[k]=parseInt(parseValues[k]);
    }
    return parsedValues;
}

function PrintValuesMin(){
    let printMinValues = ParseValues();
    planetsTable.innerHTML = "";
    for (let i = 0; i < j ; i++){
        if (planeetat[i].diameter > printMinValues[0]&&planeetat[i].mass > printMinValues[1]){
            planeetat.splice(i, 1);
            j-=1;
        }
    }
    let planeetatSlised = planeetat;
    console.log(planeetatSlised);
    PrintPlanets(planeetatSlised);
}

function PrintValuesMax(){

}