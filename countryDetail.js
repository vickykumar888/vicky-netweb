const countries = [
    { serialNo: 1, country: 'Afghanistan', population: 42239854, landArea: 652860, density: 65 },
    { serialNo: 2, country: "Albania", population: 2832439, landArea: 27400, density: 103 },
    { serialNo: 3, country: "Algeria", population: 45606480, landArea: 2381740, density: 19 },
    { serialNo: 4, country: "Andorra", population: 80088, landArea: 470, density: 170 },
    { serialNo: 5, country: "Angola", population: 36684202, landArea: 1246700, density: 29 },
    { serialNo: 6, country: "Antigua and Barbuda", population: 94298, landArea: 440, density: 214 },
    { serialNo: 7, country: "Argentina", population: 45773884, landArea: 2736690, density: 17 },
    { serialNo: 8, country: "Armenia", population: 2777970, landArea: 28470, density: 98 },
    { serialNo: 9, country: "Australia", population: 26439111, landArea: 7682300, density: 3 },
    { serialNo: 10, country: "Austria", population: 8958960, landArea: 82409, density: 109 },
    { serialNo: 11, country: "Azerbaijan", population: 10412651, landArea: 82658, density: 126 },
    { serialNo: 12, country: "Bahamas", population: 412623, landArea: 10010, density: 41 },
    { serialNo: 13, country: "Bahrain", population: 1485509, landArea: 760, density: 1955 },
    { serialNo: 14, country: "Bangladesh", population: 172954319, landArea: 130170, density: 1329 },
    { serialNo: 15, country: "Barbados", population: 281995, landArea: 430, density: 656 },
    { serialNo: 16, country: "Belarus", population: 9498238, landArea: 202910, density: 47 },
]

const newArr = countries.map((item) => item)
console.log(newArr)



countries.forEach((countryDetail) => {
    let sentence = `serialNo:${countryDetail.serialNo} country:${countryDetail.country} population:${countryDetail.population} 
  landArea:${countryDetail.landArea} density:${countryDetail.density}`
    console.log(sentence)
})

