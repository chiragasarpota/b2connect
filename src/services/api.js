const baseLink = "http://ip-api.com/json/";

export default async function getGeoLocation(ipAddress) {
  const finalLink = baseLink + ipAddress;
  try {
    const res = await fetch(finalLink);
    const data = await res.json();
    return data;
  } catch (err) {
    return null;
  }
}
