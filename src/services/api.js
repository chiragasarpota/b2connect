const geoBaseLink = "https://ipinfo.io";
const cryptoLink = "https://api.coingecko.com/api/v3/exchange_rates";
const loginLink = "https://login-b2connect-qhrhp7hd0wmj.runkit.sh/login";

const tickers = ["usd", "gbp", "eur", "aed", "hkd"];

export async function getGeoLocation(ipAddress) {
  const finalLink =
    (ipAddress === "" ? geoBaseLink : "/" + ipAddress) +
    "/geo?token=d18ff58adf9696";
  try {
    const res = await fetch(finalLink);
    const data = await res.json();
    if (data.status == null) data.status = "success";
    return data;
  } catch (err) {
    return { status: "failure" };
  }
}

export async function getCryptoPrices() {
  try {
    let filteredData = [];
    const res = await fetch(cryptoLink);
    const data = await res.json();
    for (let [key, value] of Object.entries(data.rates)) {
      if (tickers.indexOf(key) > -1) {
        filteredData.push(value);
      }
    }
    return filteredData;
  } catch (err) {
    return null;
  }
}

export async function CheckLogin(creds) {
  try {
    const res = await fetch(loginLink, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(creds),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return { status: "Failure" };
  }
}
