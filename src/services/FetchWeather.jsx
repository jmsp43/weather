export default async function FetchWeather(zipCode, countryCode) {
  // let apiKey = process.env.REACT_APP_API_KEY;

  let apiKey = 'f87a5ae1e988dd4acbf60c8e0169c840'
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${countryCode}&appid=${apiKey}`
    // `api.openweathermap.org/data/2.5/forecast?id=${cityID}&appid=${apiKey}`
    );
  const jsonResponse = await response.json();
  let zipInvalid = false
  if (jsonResponse.cod == 404) {
    console.log('zip not found!')
    zipInvalid = true
  }
    return (jsonResponse);
  }

