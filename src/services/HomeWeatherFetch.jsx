export default async function CurrentWeatherFetch(lat, long) {
    // let apiKey = process.env.REACT_APP_APIKEY;
  let apiKey = '7826f4d54f1b1b5175bc8034019fe5c7'
  // let apiKey = 'cebbe6c721d8eaada101e16d907eadac'
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`
    // `api.openweathermap.org/data/2.5/forecast?id=${cityID}&appid=${apiKey}`
    );
  const jsonResponse = await response.json();
  console.log(jsonResponse)
    return jsonResponse;
  }