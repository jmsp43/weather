export default async function FetchForecast(zipCode, countryCode) {
    // let apiKey = process.env.REACT_APP_APIKEY;
    let apiKey = "cebbe6c721d8eaada101e16d907eadac"
    const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},${countryCode}&appid=${apiKey}`
    );
  const jsonResponse = await response.json();
  console.log(jsonResponse)
    return jsonResponse;
}
