export default async function FetchWeather(zipCode, countryCode) {
    // let apiKey = env.process.apiKey;
    let apiKey = "cebbe6c721d8eaada101e16d907eadac"
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${countryCode}&appid=${apiKey}`
    );
      const jsonResponse = await response.json();
      console.log(jsonResponse)
    return jsonResponse;
  }
//FetchWeather();
