//not in use for 5/2/23 deadline

export default async function CurrentWeatherFetch(lat, long) {
    // let apiKey = process.env.REACT_APP_API_KEY;
  // let apiKey = 'f87a5ae1e988dd4acbf60c8e0169c840'
  // let apiKey = 'cebbe6c721d8eaada101e16d907eadac'
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`
    // `api.openweathermap.org/data/2.5/forecast?id=${cityID}&appid=${apiKey}`
    );
  const jsonResponse = await response.json();
  console.log(jsonResponse)
    return jsonResponse;
  }