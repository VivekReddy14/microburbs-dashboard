import axios from "axios";

const BASE_URL = "https://www.microburbs.com.au/report_generator/api/property";

// ✅ Fallback sample if API fails
const sampleFallback = {
  summary: {
    summary_short: "No live API, showing sample summary.",
    summary_points: "No data\nNo data\nNo data",
  },
  suburb_insight: [],
  demographics: {
    age_brackets: [],
    income: [],
  },
};

const propertyAPI = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    Authorization: "Bearer test",
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const PropertyAPI = async (id, endpoint) => {
  try {
    const res = await propertyAPI.get(`/${endpoint}`, { params: { id } });

    // ✅ If response comes as string → parse
    if (typeof res.data === "string") {
      try {
        return JSON.parse(res.data);
      } catch {
        console.warn("JSON parse failed, returning raw string");
        return res.data;
      }
    }

    // ✅ If response is already JSON object
    return res.data;

  } catch (error) {
    console.error(`Property API Error (${endpoint}):`, error);

    // ✅ return safe fallback
    return sampleFallback[endpoint] || {};
  }
};
