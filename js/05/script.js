const cityInput = document.getElementById("city-input");

async function searchCity(){
    const city = cityInput.value;

    const data = await fetch (
        https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/pune/2024-11-26?key=MA85H3QBHK3FGLU79LG3XRJM7
    );

    const res = await data.json();

    console.log(res);
}