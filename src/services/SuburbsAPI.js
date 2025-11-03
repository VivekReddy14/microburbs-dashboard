import axios from "axios";

const BASE_URL = "https://www.microburbs.com.au/report_generator/api/suburb";


const sampleres={
  "info":{
  "information": {
    "area_level": "suburb",
    "area_name": "Belmont North",
    "geo_divisions": {
      "ced": "Shortland",
      "cr": "Newcastle and Lake Macquarie",
      "gccsa": "Rest of NSW",
      "lga": "Lake Macquarie",
      "poa": "2280",
      "region": "Newcastle",
      "sa2": "Belmont - Bennetts Green",
      "sa3": "Lake Macquarie - East",
      "sa4": "Newcastle and Lake Macquarie",
      "sal": "Belmont North",
      "sed": "Swansea",
      "state": "New South Wales"
    },
    "postcode": "2280",
    "state": "New South Wales",
    "state_abr": "NSW"
  }
} ,
"summary": {
  "results": [
    {
      "adjectives": [
        "temperate",
        "breezy",
        "mild"
      ],
      "area_level": "suburb",
      "area_name": "Belmont North",
      "comment": " Average climate and weather",
      "id": "climate-score",
      "name": "Climate Score",
      "summary": [
        "Belmont North enjoys a temperate climate with pleasant sea breezes common due to its proximity to Lake Macquarie and the Pacific coastline. Summers are warm but rarely extreme, thanks to the coastal influence. Occasional offshore winds and mild winters make outdoor activities viable year-round."
      ],
      "value": "68/100"
    },
    {
      "adjectives": [
        "connected",
        "welcoming",
        "active"
      ],
      "area_level": "suburb",
      "area_name": "Belmont North",
      "comment": "Very strong community",
      "id": "community-score",
      "name": "Community Score",
      "summary": [
        "Local sporting clubs, such as those around Belmont North Football Field, bring neighbours together and reinforce a strong sense of belonging. Annual street festivals and long-standing community events reflect the high engagement between residents. Friendly interactions, volunteer groups, and active local committees make this an extremely cohesive suburb."
      ],
      "value": "90/100"
    },
    {
      "adjectives": [
        "open-minded",
        "inclusive",
        "progressive"
      ],
      "area_level": "suburb",
      "area_name": "Belmont North",
      "comment": "Below average",
      "id": "conservatism-score",
      "name": "Conservatism Score",
      "summary": [
        "Belmont North's demographic skews progressive, evidenced by support for community initiatives and cultural diversity. The prevalence of creative arts workshops and progressive school programs fosters inclusivity, making it a forward-thinking suburb."
      ],
      "value": "33/100"
    },
    {
      "adjectives": [
        "accessible",
        "practical",
        "well-situated"
      ],
      "area_level": "suburb",
      "area_name": "Belmont North",
      "comment": "Above Average quality of location and access to amenities",
      "id": "convenience-score",
      "name": "Convenience Score",
      "summary": [
        "Shops along Wommara Avenue, proximity to Belmont Hospital, and easy access to major bus routes enhance living ease. Local markets, essential services, and nearby schools ensure day-to-day needs are met with minimal travel."
      ],
      "value": "76/100"
    },
    {
      "adjectives": [
        "dependable",
        "local",
        "steady"
      ],
      "area_level": "suburb",
      "area_name": "Belmont North",
      "comment": "Average",
      "id": "education-score",
      "name": "Education Score",
      "summary": [
        "Public schools like Belmont North Primary provide steady educational options within the suburb. Although education facilities are solid, most advanced programs or selective schooling require a short commute to neighbouring areas."
      ],
      "value": "5/10"
    },
    {
      "adjectives": [
        "nurturing",
        "secure",
        "community-oriented"
      ],
      "area_level": "suburb",
      "area_name": "Belmont North",
      "comment": "Above Average",
      "id": "family-score",
      "name": "Family Score",
      "summary": [
        "Family-friendly parks such as Rawson Park and safe bike paths along the Fernleigh Track make Belmont North attractive for households with children. A variety of playgrounds and active school communities foster a strong environment for young families."
      ],
      "value": "80/100"
    },
    {
      "adjectives": [
        "up-and-coming",
        "casual",
        "artsy"
      ],
      "area_level": "suburb",
      "area_name": "Belmont North",
      "comment": "Average",
      "id": "hip-score",
      "name": "Hip Score",
      "summary": [
        "The suburb features a handful of edgy cafés and creative spaces, particularly along the Charlestown Road fringe. While there’s a growing music and arts scene, it's still quietly emerging compared to trendier neighbours."
      ],
      "value": "59/100"
    },
    {
      "adjectives": [
        "vibrant",
        "healthy",
        "relaxed"
      ],
      "area_level": "suburb",
      "area_name": "Belmont North",
      "comment": "Above Average",
      "id": "lifestyle-score",
      "name": "Lifestyle Score",
      "summary": [
        "Residents enjoy coastal walking tracks, weekend sailing on Lake Macquarie, and a variety of local eateries. Outdoor fitness groups meet at sunrise along the coast, capturing the relaxed yet active lifestyle that defines Belmont North."
      ],
      "value": "78/100"
    },
    {
      "adjectives": [
        "reassuring",
        "secure",
        "orderly"
      ],
      "area_level": "suburb",
      "area_name": "Belmont North",
      "comment": "Extremely low crime levels",
      "id": "safety-score",
      "name": "Safety Score",
      "summary": [
        "Statistics reflect consistently low crime rates, with neighbourhood watch groups active near Belmont North Community Centre. Well-lit streets and engaged residents contribute to a strong sense of safety day and night."
      ],
      "value": "86/100"
    },
    {
      "adjectives": [
        "peaceful",
        "leafy",
        "restful"
      ],
      "area_level": "suburb",
      "area_name": "Belmont North",
      "comment": "High",
      "id": "tranquility-score",
      "name": "Tranquility Score",
      "summary": [
        "Nestled beside bushland reserves, many pockets of Belmont North offer quiet streets and peaceful surroundings. Morning birdsong and low traffic around side roads enhance the suburb’s calming atmosphere."
      ],
      "value": "83/100"
    }
  ]
}
}

const microburbsAPI = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Authorization": "Bearer test", // test token for sandbox
    "Content-Type": "application/json",
  },
});

export const SuburbsAPI = async (suburb, endpoint) => {
  try {
    const response = await microburbsAPI.get(`/${endpoint}`, {
      params: { suburb },
    });
    return response.data;
  } catch (error) {
    console.log("API Error:", error);
    debugger
    return sampleres[endpoint];
  }
};
