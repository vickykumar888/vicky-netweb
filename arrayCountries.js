let countriesData = [
    {country: "Afghanistan" , population: 42239854 , landarea:652860 ,density:65},
    {country: "Albania" , population: 2832439 , landarea:27400	,density:103},
    {country: "Algeria" , population: 45606480 , landarea:2381740 ,density:19},
    {country: "Andorra" , population: 80088 , landarea:470,density:170},
    {country: "Angola" , population: 36684202	 , landarea:1246700 ,density:29},
    {country: "Antigua and Barbuda" , population:94298	  , landarea:440 ,density:214},
    {country: "Armenia" , population: 45773884	, landarea:28470,density:98},
    {country: "	Australia" , population: 26439111	 , landarea:26439111	 ,density:3},
    {country: "Austria" , population: 8958960 , landarea:82409 ,density:109},
    {country: "Azerbaijan" , population: 10412651 , landarea:82658 ,density:126},
    
]
//  to extract entire data in console ,we can also use map to get same result
 countriesData.forEach((elem)=>{
   console.log(elem);
});
// by using map method
let conclusion = countriesData.map((element)=>{
    return element;
  })
  console.log(conclusion)
  


// to just get name of all countires in console ,similary we can get population ,landarea ,density
// to get name of all countries
let result = countriesData.map((name)=>{
    return name.country;
})
console.log(result);

// to get polulation of all countries
let concl = countriesData.map((rel)=>{
    return rel.population;
})
console.log(concl);

// to get landrea:
let rellandArea = countriesData.map((area)=>{
    return area.landarea;
})
console.log(rellandArea);



// to get density;
let relDensity = countriesData.map((den)=>{
    return den.density;
})
console.log(relDensity);
