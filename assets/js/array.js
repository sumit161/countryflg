let cl = console.log;


//================================SearchBox keyup event=============================================
const SearchBox = document.getElementById("SearchBox");
const MessegeInfo = document.getElementById("MessegeInfo");
cl(MessegeInfo)

// cl(countries.filter(ele => ele.capital))
const onkeyupSearchBox = (eve) => {
    const userString = eve.target.value.toLowerCase();
    eve.target.style.border = "2px solid orange";
    cl(userString)
    let searchname = countries.filter(ele => ele.name.toLowerCase().trim().includes(userString));
    let searchCapital = countries.filter(ele => ele.capital).filter(ele => ele.capital.toLowerCase().trim().includes(userString))
    let searchLanguages = countries.filter(ele => ele.languages.join(",").toLowerCase().trim().includes(userString))
    let AddDuplicatesArray = searchLanguages.concat(searchname).concat(searchCapital)
    let CapitalAchive = [...new Set(AddDuplicatesArray)]

    if (userString.length > 0) {
        MessegeInfo.classList.remove("invisible")

        MessegeInfo.innerText = "This text include in " + `${searchname.length}` + " country name, " + `${searchCapital.length}` + " city name and " + `${searchLanguages.length}` + " languages"

    } else {
        MessegeInfo.classList.add("invisible")
  
    }
    CapiTal.firstElementChild.classList.remove("fa-arrow-up")
    CapiTal.firstElementChild.classList.remove("fa-arrow-down")
    Population.firstElementChild.classList.remove("fa-arrow-up")
    Population.firstElementChild.classList.remove("fa-arrow-down")
    TwoInOne.firstElementChild.classList.remove("fa-arrow-up")
    TwoInOne.firstElementChild.classList.remove("fa-arrow-down")
    
    templating(CapitalAchive)

}

//EVENT HANDLER
SearchBox.addEventListener("keyup", onkeyupSearchBox)
//================================COUNTRY NAME sort click event=============================================

//DOM declaration
const TwoInOne = document.getElementById("Alphabet");
//callback function
function TwoInOneclick(eve) {
    
    CapiTal.firstElementChild.classList.remove("fa-arrow-up")
    CapiTal.firstElementChild.classList.remove("fa-arrow-down")
    Population.firstElementChild.classList.remove("fa-arrow-up")
    Population.firstElementChild.classList.remove("fa-arrow-down")
    // let AtoZ = TwoInOne.className//btn-info
    // cl(AtoZ)
    cl(TwoInOne.firstElementChild.classList)
    if (eve.target.firstElementChild.getAttribute("class").includes("fa-arrow-down")) {
        // TwoInOne.innerText = "NAME-";
         TwoInOne.firstElementChild.classList.add("fa-arrow-up")
        TwoInOne.firstElementChild.classList.remove("fa-arrow-down")
       
        let AtoZ = countries.sort((c1, c2) => c1.name > c2.name ? 1 : -1)
        cl("AtoZ", AtoZ)
        templating(AtoZ)

    } else {
        // TwoInOne.innerText = "NAME+";
              TwoInOne.firstElementChild.classList.remove("fa-arrow-up")
        TwoInOne.firstElementChild.classList.add("fa-arrow-down")
  
        let ZtoA = countries.sort((c1, c2) => c1.name < c2.name ? 1 : -1)
        cl("ZtoA", ZtoA)
        templating(ZtoA)

    }

}
//event handling
TwoInOne.addEventListener("click", TwoInOneclick)
//================================Capital ALPHABETI click event=============================================
//DOM declaration
const CapiTal = document.getElementById("CapiTal");
//callback function
function TwoInOneclickOncapital(eve) {
    // let AtoZ = TwoInOne.className//btn-info
    // cl(AtoZ)
    
    TwoInOne.firstElementChild.classList.remove("fa-arrow-up")
    TwoInOne.firstElementChild.classList.remove("fa-arrow-down")
    Population.firstElementChild.classList.remove("fa-arrow-up")
    Population.firstElementChild.classList.remove("fa-arrow-down")
    if (eve.target.firstElementChild.getAttribute("class").includes("fa-arrow-down")) {
        // CapiTal.innerText = "capital-";
        CapiTal.firstElementChild.classList.add("fa-arrow-up")
        CapiTal.firstElementChild.classList.remove("fa-arrow-down")
        let capAtoZ = countries.filter(ele=>ele.capital).sort((c1, c2) => c1.capital > c2.capital ? 1 : -1).concat(countries.filter(ele=>!ele.capital))
        cl("capAtoZ", capAtoZ)
        templating(capAtoZ)

    } else {
        // CapiTal.innerText = "capital+";
        CapiTal.firstElementChild.classList.remove("fa-arrow-up")
        CapiTal.firstElementChild.classList.add("fa-arrow-down")
        let capZtoA = countries.filter(ele=>ele.capital).sort((c1, c2) => c1.capital < c2.capital ? 1 : -1).concat(countries.filter(ele=>!ele.capital))
        cl("capZtoA", capZtoA)
        templating(capZtoA)

    }

}
//event handling
CapiTal.addEventListener("click", TwoInOneclickOncapital)
//================================ Population sort click event=============================================
//DOM declaration
const Population = document.getElementById("Population");
//callback function
function TwoInOneclickOnPopulation(eve) {

    TwoInOne.firstElementChild.classList.remove("fa-arrow-up")
    TwoInOne.firstElementChild.classList.remove("fa-arrow-down")
    CapiTal.firstElementChild.classList.remove("fa-arrow-up")
    CapiTal.firstElementChild.classList.remove("fa-arrow-down")
    // let AtoZ = TwoInOne.className//btn-info
    // cl(AtoZ)
    if (eve.target.firstElementChild.getAttribute("class").includes("fa-arrow-down")) {
        // Population.innerText = "population-";

        let popuMiniTOMax = countries.sort((c1, c2) => c1.population > c2.population ? 1 : -1)
        cl("popuMiniTOMax", popuMiniTOMax)
        Population.firstElementChild.classList.add("fa-arrow-up")
        Population.firstElementChild.classList.remove("fa-arrow-down")
        templating(popuMiniTOMax)

    } else {
        // Population.innerText = "population+";
        Population.firstElementChild.classList.remove("fa-arrow-up")
        Population.firstElementChild.classList.add("fa-arrow-down")
        let popuAtoZ = countries.sort((c1, c2) => c1.population < c2.population ? 1 : -1)
        cl("popuAtoZ", popuAtoZ)
        templating(popuAtoZ)

    }
   

}
//event handling
Population.addEventListener("click", TwoInOneclickOnPopulation)


let icon = document.querySelector("a");
cl(icon)
const hello = () =>{
    const OnclickIcon = (ele)=>{

    let WorldPopulation = countries.reduce((acc, cur) => acc + cur.population, 0);
    cl(WorldPopulation)
    let CountryPopulation = countries.map(ele => ({ name: ele.name, population: ele.population })).sort((c1, c2) => c2.population > c1.population ? 1 : -1).slice(0, 10);
    cl(CountryPopulation)
    let addTitle = CountryPopulation.unshift({ name: "world", population: WorldPopulation })
    cl(CountryPopulation)
    createStatistics(CountryPopulation)
    calculationForSkill(CountryPopulation,WorldPopulation)
    localStorage.setItem("TencountryObj",JSON.stringify(CountryPopulation))
    
}
icon.addEventListener("click",OnclickIcon)
}
hello()
//=====================================population graph==============================

const countryDetails = document.getElementById("countryDetails");
const populationChartBtn = document.getElementById("populationChartBtn");
const langChartBtn = document.getElementById("langChartBtn");
const popCountry = document.getElementById("popCountry");
const langWorld = document.getElementById("langWorld");
let popgraph = document.getElementById("graph")

const createStatistics = (arr) => {
    let result = ``;
    arr.forEach(ele => {
        result += `
                <div class="skillbox">
                    <p class="mx-5 text-uppercase py-1">${ele.name}</p>
                    <div class="skill text-center">
                        <div class="skill_level"></div>
                    </div>
                    <p class="ml-5 py-1">${ele.population}</p>
                </div>
        `;
    });
    popgraph.innerHTML = result;
};


const calculationForSkill = (array,total) => {
    let allSkillEle = document.querySelectorAll("#graph .skill_level");
    array.forEach((ele, i) => {
        cl(ele)
        cl(ele.population)
        allSkillEle[i].style.width= `${(ele.population / total) * 100}%`;
        allSkillEle[i].innerText= `${Math.ceil((ele.population / total) * 100)}%`

        
        
    });
};

const onPopChartHandler = (eve) => {
    let TenCountryPop =localStorage.getItem("TencountryObj")
    let PopuLationdata = JSON.parse(TenCountryPop)
    cl(PopuLationdata)
    createStatistics(PopuLationdata)
    calculationForSkill(PopuLationdata,PopuLationdata[0].population)
    if (popCountry.className.includes("d-none")) {
        popCountry.classList.remove('d-none');
        langWorld.classList.add("d-none");
    }
};


//=========================================language graph================================
const lang = (arr) => {
    let result = ``;
    arr.forEach(ele => {
        result += `
                <div class="skillbox">
                    <p class="mx-5 text-uppercase py-1">${ele.v1}</p>
                    <div class="skill text-center">
                        <div class="skill_level"></div>
                    </div>
                    <p class="ml-5 py-1">${ele.num1}</p>
                </div>
        `;
    });
    popgraph.innerHTML = result;
};

const langCal = (array,total) => {
    let allSkillEle = document.querySelectorAll("#graph .skill_level");
    array.forEach((ele, i) => {
        cl(ele)
        cl(ele.population)
        allSkillEle[i].style.width= `${(ele.num1 / total) * 100}%`;
        allSkillEle[i].innerText= `${Math.ceil((ele.num1 / total) * 100)}%`

        
        
    });
};

const onLangChartHandler = (eve) => {
    let element = [];
   
    for (let i = 0; i < countries.length; i++) {
        countries[i].languages.forEach(num => element.push(num));
    }

    cl(element, typeof element)

    let KeyValue = [];
    element.forEach(num => KeyValue[num] = (KeyValue[num] || 0) + 1);
    cl(KeyValue)

    let sortable = [];
    for (var parameter in KeyValue) {
        sortable.push([parameter, KeyValue[parameter]]);
    }
    cl(sortable)
    let TopTenLang = sortable.sort((a, b) => b[1] - a[1]).slice(0,10);
    cl(TopTenLang)

    let ArrayFlat = TopTenLang.reduce((acc,curr)=>{
         return acc.concat(curr)
    },[])
    cl(ArrayFlat)

    let finalData = [];
    for (n = 0; n < ArrayFlat.length; n++) {
        finalData.push({ v1: ArrayFlat[n], num1: ArrayFlat[++n] })
}
cl(finalData)
lang(finalData);
langCal(finalData,countries.length)



    if (langWorld.className.includes("d-none")) {
        langWorld.classList.remove('d-none');
        popCountry.classList.add("d-none");
    }

}
//icon.addEventListener("click",OnclickIcon)
populationChartBtn.addEventListener("click", onPopChartHandler);
langChartBtn.addEventListener("click", onLangChartHandler);




