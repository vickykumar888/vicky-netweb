let countryList = [
    {
        sn: 1,
        country: "Afghanistan",
        population: "42,239,854",
        landarea: "652,860	",
        density: "65",
    },
    {
        sn: 2,
        country: "Albania",
        population: "	2,832,439",
        landarea: "27,400",
        density: "103",
    },
    {
        sn: 3,
        country: "Argentina",
        population: "45,773,884",
        landarea: "2,736,690",
        density: "17",
    },
    {
        sn: 4,
        country: "Australia",
        population: "26,439,111	",
        landarea: "7,682,300",
        density: "3",
    },
    {
        sn: 5,
        country: "Bangladesh",
        population: "172,954,319",
        landarea: "130,170",
        density: "1329",
    },
    {
        sn: 6,
        country: "Belgium",
        population: "11,686,140",
        landarea: "30,280	",
        density: "386",
    },
    {
        sn: 7,
        country: "Bhutan",
        population: "787,424",
        landarea: "38,117",
        density: "21",
    },
    {
        sn: 8,
        country:  "Canada",
        population: "38,781,291",
        landarea: "9,093,510",
        density: "4",
    },
    {
        sn: 9,
        country: "Colombia",
        population: "52,085,168",
        landarea: "1,109,500",
        density: "47",
    },
    {
        sn: 10,
        country: "Denmark",
        population: "5,910,913",
        landarea: "42,430	",
        density: "139",
    },
    {
        sn: 11,
        country: "Egypt",
        population: "112,716,598",
        landarea: "995,450	",
        density: "113",
    },
    {
        sn: 12,
        country: "India",
        population: "1,428,627,663",
        landarea: "2,973,190",
        density: "481",
    },
    {
        sn: 13,
        country: "Indonesia",
        population: "277,534,122",
        landarea: "1,811,570	",
        density: "153",
    },
    {
        sn: 14,
        country: "Luxembourg",
        population: "654,768",
        landarea: "2,590	",
        density: "253",
    },
    {
        sn: 15,
        country: "Maldives",
        population: "521,021",
        landarea: "300	",
        density: "1737",
    }
]
//console.log(countryList);
let list = countryList.map((country) => {
    console.log(country)
})

function countryData(country) {
    return countryList.filter((itme) => itme.country === country)
}

// console.log(countryData("Australia"));
// console.log(countryData("India"));
// console.log(countryData("Belgium"));
// console.log(countryData("Maldives"));
