async function fetchWeather(zip) {
  const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?zip=10029,us&units=imperial`;
  const API_KEY = `8aac04ebc33f3c51fa258b707bf5bd1a`;
  await fetch(`${BASE_URL}&appid=${API_KEY}`)
  .then(res => res.json())
  .then(data => console.log(data))
}

export default fetchWeather;
