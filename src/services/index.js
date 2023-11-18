export function* getCountryService(name) {
  const res = yield fetch(`https://restcountries.eu/rest/v2/name/${name}`, {
    method: "GET",
    headers: {
      ContentType: "application/json"
    }
  });

  return yield res.json();
}

export function* getWeatherService(capital) {
  const res = yield fetch(
    `http://api.weatherstack.com/current?access_key=5c9c0db53a5f7cbe4e320a169eea794e&query=${capital}`,
    {
      method: "GET",
      headers: {
        ContentType: "application/json"
      }
    }
  );

  return yield res.json();
}
