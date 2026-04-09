import { RTOGeoJSON } from "@/types/rto";

// Comprehensive Indian RTO Data with accurate RTO codes and district/region names
// RTO format: StateCode-Number (e.g., TN-07, DL-05)

export const sampleRTOData: RTOGeoJSON = {
  type: "FeatureCollection",
  features: [
    // DELHI
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[77.0, 28.4], [77.0, 28.88], [77.52, 28.88], [77.52, 28.4], [77.0, 28.4]]]
      },
      properties: {
        id: "dl-01",
        name: "DL-01 - North Delhi",
        state: "Delhi",
        description: "North Delhi: Narela, Bawana, Model Town, Sarai Rohilla"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[77.0, 28.4], [77.0, 28.88], [77.52, 28.88], [77.52, 28.4], [77.0, 28.4]]]
      },
      properties: {
        id: "dl-02",
        name: "DL-02 - South Delhi",
        state: "Delhi",
        description: "South Delhi: Hauz Khas, Saket, Greater Kailash, Malviya Nagar"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[77.0, 28.4], [77.0, 28.88], [77.52, 28.88], [77.52, 28.4], [77.0, 28.4]]]
      },
      properties: {
        id: "dl-03",
        name: "DL-03 - East Delhi",
        state: "Delhi",
        description: "East Delhi: Mayur Vihar, Patparganj, Laxmi Nagar, Preet Vihar"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[77.0, 28.4], [77.0, 28.88], [77.52, 28.88], [77.52, 28.4], [77.0, 28.4]]]
      },
      properties: {
        id: "dl-04",
        name: "DL-04 - West Delhi",
        state: "Delhi",
        description: "West Delhi: Rajouri Garden, Tilak Nagar, Janakpuri, Punjabi Bagh"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[77.0, 28.4], [77.0, 28.88], [77.52, 28.88], [77.52, 28.4], [77.0, 28.4]]]
      },
      properties: {
        id: "dl-05",
        name: "DL-05 - Central Delhi",
        state: "Delhi",
        description: "Central Delhi: Karol Bagh, Paharganj, Connaught Place, Daryaganj"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[77.0, 28.4], [77.0, 28.88], [77.52, 28.88], [77.52, 28.4], [77.0, 28.4]]]
      },
      properties: {
        id: "dl-06",
        name: "DL-06 - New Delhi",
        state: "Delhi",
        description: "New Delhi: Lajpat Nagar, South Extension, Defense Colony, Vasant Vihar"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[77.0, 28.4], [77.0, 28.88], [77.52, 28.88], [77.52, 28.4], [77.0, 28.4]]]
      },
      properties: {
        id: "dl-07",
        name: "DL-07 - Rohini",
        state: "Delhi",
        description: "Rohini: Sector 1-24, Rithgold, Begumpur"
      }
    },

    // MAHARASHTRA
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[72.77, 18.89], [72.77, 19.28], [73.05, 19.28], [73.05, 18.89], [72.77, 18.89]]]
      },
      properties: {
        id: "mh-01",
        name: "MH-01 - Mumbai (South)",
        state: "Maharashtra",
        description: "South Mumbai: Colaba, Fort, CST, Dadar (South)"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[72.77, 18.89], [72.77, 19.28], [73.05, 19.28], [73.05, 18.89], [72.77, 18.89]]]
      },
      properties: {
        id: "mh-02",
        name: "MH-02 - Mumbai (West)",
        state: "Maharashtra",
        description: "West Mumbai: Andheri, Bandra, Santacruz, Vile Parle"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[72.77, 18.89], [72.77, 19.28], [73.05, 19.28], [73.05, 18.89], [72.77, 18.89]]]
      },
      properties: {
        id: "mh-03",
        name: "MH-03 - Mumbai (East)",
        state: "Maharashtra",
        description: "East Mumbai: Kurla, Ghatkopar, Mulund, Bhandup"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[72.77, 18.89], [72.77, 19.28], [73.05, 19.28], [73.05, 18.89], [72.77, 18.89]]]
      },
      properties: {
        id: "mh-04",
        name: "MH-04 - Thane",
        state: "Maharashtra",
        description: "Thane District: Thane City, Navi Mumbai, Dombivli, Kalyan"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[73.68, 18.43], [73.68, 18.85], [74.02, 18.85], [74.02, 18.43], [73.68, 18.43]]]
      },
      properties: {
        id: "mh-12",
        name: "MH-12 - Pune (North)",
        state: "Maharashtra",
        description: "Pune North: Pune City (Kothrud, Shivajinagar, Deccan)"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[73.68, 18.43], [73.68, 18.85], [74.02, 18.85], [74.02, 18.43], [73.68, 18.43]]]
      },
      properties: {
        id: "mh-14",
        name: "MH-14 - Pune (South)",
        state: "Maharashtra",
        description: "Pune South: Pimpri-Chinchwad, Hinjewadi, Wagholi"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[73.80, 19.95], [73.80, 20.15], [74.00, 20.15], [74.00, 19.95], [73.80, 19.95]]]
      },
      properties: {
        id: "mh-18",
        name: "MH-18 - Nashik (East)",
        state: "Maharashtra",
        description: "Nashik East: Nashik City, Panchvati, CBS"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[73.70, 19.95], [73.70, 20.15], [73.90, 20.15], [73.90, 19.95], [73.70, 19.95]]]
      },
      properties: {
        id: "mh-50",
        name: "MH-50 - Nashik (West)",
        state: "Maharashtra",
        description: "Nashik West: Malegaon, Sinnar, Yeola"
      }
    },

    // TAMIL NADU
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[80.15, 12.92], [80.15, 13.10], [80.35, 13.10], [80.35, 12.92], [80.15, 12.92]]]
      },
      properties: {
        id: "tn-01",
        name: "TN-01 - Chennai (North)",
        state: "Tamil Nadu",
        description: "North Chennai: Tondiarpet, Royapuram, Washermanpet"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[80.15, 12.92], [80.15, 13.10], [80.35, 13.10], [80.35, 12.92], [80.15, 12.92]]]
      },
      properties: {
        id: "tn-02",
        name: "TN-02 - Chennai (South)",
        state: "Tamil Nadu",
        description: "South Chennai: Adyar, Guindy, Velachery, Tambaram"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[80.15, 12.92], [80.15, 13.10], [80.35, 13.10], [80.35, 12.92], [80.15, 12.92]]]
      },
      properties: {
        id: "tn-03",
        name: "TN-03 - Chennai (West)",
        state: "Tamil Nadu",
        description: "West Chennai: Anna Nagar, Maduravoyal, Ambattur, Porur"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[80.15, 12.92], [80.15, 13.10], [80.35, 13.10], [80.35, 12.92], [80.15, 12.92]]]
      },
      properties: {
        id: "tn-04",
        name: "TN-04 - Chennai (Central)",
        state: "Tamil Nadu",
        description: "Central Chennai: Broadway, George Town, Purusawalkam"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[80.15, 12.92], [80.15, 13.10], [80.35, 13.10], [80.35, 12.92], [80.15, 12.92]]]
      },
      properties: {
        id: "tn-05",
        name: "TN-05 - Kanchipuram",
        state: "Tamil Nadu",
        description: "Kanchipuram District: Kanchipuram, Sriperumbudur, Chengalpattu"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[79.70, 12.50], [79.70, 12.85], [80.00, 12.85], [80.00, 12.50], [79.70, 12.50]]]
      },
      properties: {
        id: "tn-07",
        name: "TN-07 - Chengalpattu",
        state: "Tamil Nadu",
        description: "Chengalpattu District: Chengalpattu, Tambaram, Maraimalai Nagar"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[80.15, 12.92], [80.15, 13.10], [80.35, 13.10], [80.35, 12.92], [80.15, 12.92]]]
      },
      properties: {
        id: "tn-09",
        name: "TN-09 - Chennai (East)",
        state: "Tamil Nadu",
        description: "East Chennai: Kodambakkam, Nungambakkam, Chetpet"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[80.15, 12.92], [80.15, 13.10], [80.35, 13.10], [80.35, 12.92], [80.15, 12.92]]]
      },
      properties: {
        id: "tn-10",
        name: "TN-10 - Chennai (North East)",
        state: "Tamil Nadu",
        description: "North East Chennai: Manali, Madhavaram, Korukkupet"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[80.15, 12.92], [80.15, 13.10], [80.35, 13.10], [80.35, 12.92], [80.15, 12.92]]]
      },
      properties: {
        id: "tn-11",
        name: "TN-11 - Vellore",
        state: "Tamil Nadu",
        description: "Vellore District: Vellore City, Gudiyatham, Tirupattur"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[79.15, 11.95], [79.15, 12.55], [79.65, 12.55], [79.65, 11.95], [79.15, 11.95]]]
      },
      properties: {
        id: "tn-14",
        name: "TN-14 - Kanchipuram (South)",
        state: "Tamil Nadu",
        description: "South Kanchipuram: Sholinganallur, Kelambakkam, Mahabalipuram"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.90, 11.05], [76.90, 11.55], [77.60, 11.55], [77.60, 11.05], [76.90, 11.05]]]
      },
      properties: {
        id: "tn-18",
        name: "TN-18 - Krishnagiri",
        state: "Tamil Nadu",
        description: "Krishnagiri District: Krishnagiri, Hosur, Dharmapuri"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[78.10, 10.30], [78.10, 10.95], [78.70, 10.95], [78.70, 10.30], [78.10, 10.30]]]
      },
      properties: {
        id: "tn-22",
        name: "TN-22 - Madurai",
        state: "Tamil Nadu",
        description: "Madurai District: Madurai City, Dindigul, Theni"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[77.40, 8.90], [77.40, 9.60], [78.20, 9.60], [78.20, 8.90], [77.40, 8.90]]]
      },
      properties: {
        id: "tn-25",
        name: "TN-25 - Tirunelveli",
        state: "Tamil Nadu",
        description: "Tirunelveli District: Tirunelveli, Tuticorin, Kanyakumari"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[78.80, 10.30], [78.80, 11.20], [79.50, 11.20], [79.50, 10.30], [78.80, 10.30]]]
      },
      properties: {
        id: "tn-28",
        name: "TN-28 - Tiruchirappalli",
        state: "Tamil Nadu",
        description: "Tiruchirappalli District: Tiruchirappalli, Thanjavur, Nagapattinam"
      }
    },

    // KARNATAKA
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[77.35, 12.95], [77.35, 13.10], [77.60, 13.10], [77.60, 12.95], [77.35, 12.95]]]
      },
      properties: {
        id: "ka-01",
        name: "KA-01 - Bangalore (Central)",
        state: "Karnataka",
        description: "Central Bangalore: MG Road, Indiranagar, Koramangala, HAL"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[77.35, 12.95], [77.35, 13.10], [77.60, 13.10], [77.60, 12.95], [77.35, 12.95]]]
      },
      properties: {
        id: "ka-02",
        name: "KA-02 - Bangalore (East)",
        state: "Karnataka",
        description: "East Bangalore: Whitefield, Marathahalli, Electronic City"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[77.35, 12.95], [77.35, 13.10], [77.60, 13.10], [77.60, 12.95], [77.35, 12.95]]]
      },
      properties: {
        id: "ka-03",
        name: "KA-03 - Bangalore (West)",
        state: "Karnataka",
        description: "West Bangalore: Mysore Road, Magadi Road, Rajajinagar"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[77.35, 12.95], [77.35, 13.10], [77.60, 13.10], [77.60, 12.95], [77.35, 12.95]]]
      },
      properties: {
        id: "ka-04",
        name: "KA-04 - Bangalore (North)",
        state: "Karnataka",
        description: "North Bangalore: Hebbal, Yelahanka, Devanahalli, Bangalore International Airport"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[77.35, 12.95], [77.35, 13.10], [77.60, 13.10], [77.60, 12.95], [77.35, 12.95]]]
      },
      properties: {
        id: "ka-05",
        name: "KA-05 - Bangalore (South)",
        state: "Karnataka",
        description: "South Bangalore: JP Nagar, Banashankari, Kumaraswamy Layout"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.90, 17.30], [76.90, 17.75], [77.20, 17.75], [77.20, 17.30], [76.90, 17.30]]]
      },
      properties: {
        id: "ka-08",
        name: "KA-08 - Kalaburagi (Gulbarga)",
        state: "Karnataka",
        description: "Kalaburagi District: Gulbarga, Yadgir, Osmanabad"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[74.70, 14.85], [74.70, 15.50], [75.40, 15.50], [75.40, 14.85], [74.70, 14.85]]]
      },
      properties: {
        id: "ka-17",
        name: "KA-17 - Mangalore",
        state: "Karnataka",
        description: "Dakshina Kannada District: Mangalore, Puttur, Belthangady"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.10, 12.30], [76.10, 13.00], [76.70, 13.00], [76.70, 12.30], [76.10, 12.30]]]
      },
      properties: {
        id: "ka-29",
        name: "KA-29 - Mysore",
        state: "Karnataka",
        description: "Mysore District: Mysore City, Chamarajanagar, Mandya"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.80, 15.35], [75.80, 16.15], [76.50, 16.15], [76.50, 15.35], [75.80, 15.35]]]
      },
      properties: {
        id: "ka-30",
        name: "KA-30 - Belagavi (Belgaum)",
        state: "Karnataka",
        description: "Belagavi District: Belagavi, Dharwad, Haveri, Bagalkot"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[77.00, 13.20], [77.00, 14.00], [77.70, 14.00], [77.70, 13.20], [77.00, 13.20]]]
      },
      properties: {
        id: "ka-31",
        name: "KA-31 - Tumkur",
        state: "Karnataka",
        description: "Tumkur District: Tumkur, Shimoga, Chitradurga, Davanagere"
      }
    },

    // KERALA
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.25, 9.90], [76.25, 10.15], [76.60, 10.15], [76.60, 9.90], [76.25, 9.90]]]
      },
      properties: {
        id: "kl-01",
        name: "KL-01 - Thiruvananthapuram",
        state: "Kerala",
        description: "Thiruvananthapuram District: Thiruvananthapuram City, Neyyattinkara, Varkala"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.15, 9.55], [76.15, 9.90], [76.45, 9.90], [76.45, 9.55], [76.15, 9.55]]]
      },
      properties: {
        id: "kl-02",
        name: "KL-02 - Kollam",
        state: "Kerala",
        description: "Kollam District: Kollam City, Punalur, Karunagappally"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.20, 9.55], [76.20, 9.90], [76.60, 9.90], [76.60, 9.55], [76.20, 9.55]]]
      },
      properties: {
        id: "kl-07",
        name: "KL-07 - Pathanamthitta",
        state: "Kerala",
        description: "Pathanamthitta District: Pathanamthitta, Adoor, Konni"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.30, 9.55], [76.30, 10.00], [76.75, 10.00], [76.75, 9.55], [76.30, 9.55]]]
      },
      properties: {
        id: "kl-09",
        name: "KL-09 - Kottayam",
        state: "Kerala",
        description: "Kottayam District: Kottayam, Pala, Ettumanoor"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.30, 9.55], [76.30, 10.00], [76.75, 10.00], [76.75, 9.55], [76.30, 9.55]]]
      },
      properties: {
        id: "kl-17",
        name: "KL-17 - Kottayam (East)",
        state: "Kerala",
        description: "Kottayam East: Erattupetta, Kanjirappally, Poonjar"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.25, 9.90], [76.25, 10.25], [76.65, 10.25], [76.65, 9.90], [76.25, 9.90]]]
      },
      properties: {
        id: "kl-18",
        name: "KL-18 - Alappuzha",
        state: "Kerala",
        description: "Alappuzha District: Alappuzha, Cherthala, Kayamkulam"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.18, 10.02], [76.18, 10.25], [76.55, 10.25], [76.55, 10.02], [76.18, 10.02]]]
      },
      properties: {
        id: "kl-40",
        name: "KL-40 - Ernakulam",
        state: "Kerala",
        description: "Ernakulam District: Kochi City, Fort Kochi, Mattancherry"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.20, 10.02], [76.20, 10.35], [76.60, 10.35], [76.60, 10.02], [76.20, 10.02]]]
      },
      properties: {
        id: "kl-43",
        name: "KL-43 - Thodupuzha",
        state: "Kerala",
        description: "Thodupuzha District: Thodupuzha, Muvattupuzha, Kothamangalam"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.90, 10.50], [75.90, 11.15], [76.60, 11.15], [76.60, 10.50], [75.90, 10.50]]]
      },
      properties: {
        id: "kl-47",
        name: "KL-47 - Thrissur",
        state: "Kerala",
        description: "Thrissur District: Thrissur City, Chalakudy, Kunnamkulang"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.80, 11.00], [75.80, 11.45], [76.45, 11.45], [76.45, 11.00], [75.80, 11.00]]]
      },
      properties: {
        id: "kl-48",
        name: "KL-48 - Palakkad",
        state: "Kerala",
        description: "Palakkad District: Palakkad City, Ottapalam, Chittur"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.50, 11.10], [75.50, 11.90], [76.40, 11.90], [76.40, 11.10], [75.50, 11.10]]]
      },
      properties: {
        id: "kl-49",
        name: "KL-49 - Malappuram",
        state: "Kerala",
        description: "Malappuram District: Malappuram, Perinthalmanna, Tirur"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.80, 11.10], [75.80, 11.65], [76.30, 11.65], [76.30, 11.10], [75.80, 11.10]]]
      },
      properties: {
        id: "kl-50",
        name: "KL-50 - Kozhikode",
        state: "Kerala",
        description: "Kozhikode District: Kozhikode City, Feroke, Koyilandy"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.30, 11.40], [75.30, 12.00], [76.00, 12.00], [76.00, 11.40], [75.30, 11.40]]]
      },
      properties: {
        id: "kl-51",
        name: "KL-51 - Wayanad",
        state: "Kerala",
        description: "Wayanad District: Kalpetta, Sultan Bathery, Mananthavady"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.05, 11.45], [75.05, 12.30], [75.95, 12.30], [75.95, 11.45], [75.05, 11.45]]]
      },
      properties: {
        id: "kl-52",
        name: "KL-52 - Kannur",
        state: "Kerala",
        description: "Kannur District: Kannur City, Thalassery, Kasaragod"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[74.90, 12.00], [74.90, 12.50], [75.50, 12.50], [75.50, 12.00], [74.90, 12.00]]]
      },
      properties: {
        id: "kl-56",
        name: "KL-56 - Kasaragod",
        state: "Kerala",
        description: "Kasaragod District: Kasaragod, Kanhangad, Payyanur"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.15, 9.30], [76.15, 10.00], [76.85, 10.00], [76.85, 9.30], [76.15, 9.30]]]
      },
      properties: {
        id: "kl-58",
        name: "KL-58 - Kottarakara",
        state: "Kerala",
        description: "Kottarakara District: Kottarakara, Kunnathur, Pathanapuram"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.45, 9.45], [76.45, 10.00], [77.00, 10.00], [77.00, 9.45], [76.45, 9.45]]]
      },
      properties: {
        id: "kl-59",
        name: "KL-59 - Mavelikkara",
        state: "Kerala",
        description: "Mavelikkara District: Mavelikkara, Chengannur, Haripad"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.15, 9.75], [76.15, 10.20], [76.50, 10.20], [76.50, 9.75], [76.15, 9.75]]]
      },
      properties: {
        id: "kl-63",
        name: "KL-63 - Kunnamkulang",
        state: "Kerala",
        description: "Kunnamkulang District: Kunnamkulang, Chavakkad, Mannuthy"
      }
    },

    // GUJARAT
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[72.50, 22.95], [72.50, 23.15], [72.85, 23.15], [72.85, 22.95], [72.50, 22.95]]]
      },
      properties: {
        id: "gj-01",
        name: "GJ-01 - Ahmedabad (Central)",
        state: "Gujarat",
        description: "Central Ahmedabad: Ellisbridge, Navrangpura, Ambawadi"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[72.50, 22.95], [72.50, 23.15], [72.85, 23.15], [72.85, 22.95], [72.50, 22.95]]]
      },
      properties: {
        id: "gj-02",
        name: "GJ-02 - Ahmedabad (East)",
        state: "Gujarat",
        description: "East Ahmedabad: Naroda, Bapnagar, Nikol"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[72.50, 22.95], [72.50, 23.15], [72.85, 23.15], [72.85, 22.95], [72.50, 22.95]]]
      },
      properties: {
        id: "gj-03",
        name: "GJ-03 - Ahmedabad (West)",
        state: "Gujarat",
        description: "West Ahmedabad: Satellite, Bodakdev, Gota"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[72.12, 21.75], [72.12, 21.95], [72.50, 21.95], [72.50, 21.75], [72.12, 21.75]]]
      },
      properties: {
        id: "gj-04",
        name: "GJ-04 - Surat (East)",
        state: "Gujarat",
        description: "East Surat: Surat City, Umra, Palanpur"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[72.75, 21.10], [72.75, 21.55], [73.20, 21.55], [73.20, 21.10], [72.75, 21.10]]]
      },
      properties: {
        id: "gj-05",
        name: "GJ-05 - Navsari",
        state: "Gujarat",
        description: "Navsari District: Navsari, Vapi, Daman"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[72.85, 22.60], [72.85, 22.90], [73.20, 22.90], [73.20, 22.60], [72.85, 22.60]]]
      },
      properties: {
        id: "gj-06",
        name: "GJ-06 - Vadodara (East)",
        state: "Gujarat",
        description: "East Vadodara: Alkapuri, Fatehgunj, Akota"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[72.85, 22.60], [72.85, 22.90], [73.20, 22.90], [73.20, 22.60], [72.85, 22.60]]]
      },
      properties: {
        id: "gj-07",
        name: "GJ-07 - Vadodara (West)",
        state: "Gujarat",
        description: "West Vadodara: Manjalpur, Gorwa, Tandalja"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[69.80, 22.25], [69.80, 22.75], [70.40, 22.75], [70.40, 22.25], [69.80, 22.25]]]
      },
      properties: {
        id: "gj-08",
        name: "GJ-08 - Rajkot",
        state: "Gujarat",
        description: "Rajkot District: Rajkot City, Gondal, Jetpur"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[70.40, 21.80], [70.40, 22.50], [71.20, 22.50], [71.20, 21.80], [70.40, 21.80]]]
      },
      properties: {
        id: "gj-09",
        name: "GJ-09 - Jamnagar",
        state: "Gujarat",
        description: "Jamnagar District: Jamnagar, Dwarka, Khambhalia"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[72.00, 23.50], [72.00, 24.30], [73.00, 24.30], [73.00, 23.50], [72.00, 23.50]]]
      },
      properties: {
        id: "gj-10",
        name: "GJ-10 - Bhavnagar",
        state: "Gujarat",
        description: "Bhavnagar District: Bhavnagar, Palitana, Botad"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[72.55, 22.25], [72.55, 22.90], [73.30, 22.90], [73.30, 22.25], [72.55, 22.25]]]
      },
      properties: {
        id: "gj-11",
        name: "GJ-11 - Anand",
        state: "Gujarat",
        description: "Anand District: Anand, Khambhat, Borsad"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[72.90, 22.70], [72.90, 23.20], [73.50, 23.20], [73.50, 22.70], [72.90, 22.70]]]
      },
      properties: {
        id: "gj-12",
        name: "GJ-12 - Panchmahals",
        state: "Gujarat",
        description: "Panchmahals District: Godhra, Dahod, Kalol"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[72.60, 23.30], [72.60, 24.00], [73.30, 24.00], [73.30, 23.30], [72.60, 23.30]]]
      },
      properties: {
        id: "gj-13",
        name: "GJ-13 - Sabarkantha",
        state: "Gujarat",
        description: "Sabarkantha District: Himatnagar, Modasa, Prantij"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[72.12, 21.75], [72.12, 21.95], [72.50, 21.95], [72.50, 21.75], [72.12, 21.75]]]
      },
      properties: {
        id: "gj-27",
        name: "GJ-27 - Surat (West)",
        state: "Gujarat",
        description: "West Surat: Bardoli, Mandvi, Songadh"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[72.50, 22.95], [72.50, 23.15], [72.85, 23.15], [72.85, 22.95], [72.50, 22.95]]]
      },
      properties: {
        id: "gj-18",
        name: "GJ-18 - Ahmedabad (Rural)",
        state: "Gujarat",
        description: "Ahmedabad Rural: Dholka, Sanand, Bavla"
      }
    },

    // RAJASTHAN
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.70, 26.80], [75.70, 27.10], [76.00, 27.10], [76.00, 26.80], [75.70, 26.80]]]
      },
      properties: {
        id: "rj-01",
        name: "RJ-01 - Jaipur (South)",
        state: "Rajasthan",
        description: "South Jaipur: Sanganer, Phagi, Chaksu"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.70, 26.80], [75.70, 27.10], [76.00, 27.10], [76.00, 26.80], [75.70, 26.80]]]
      },
      properties: {
        id: "rj-02",
        name: "RJ-02 - Jaipur (North)",
        state: "Rajasthan",
        description: "North Jaipur: Chaksu, Phulera, Sambhar"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.70, 26.80], [75.70, 27.10], [76.00, 27.10], [76.00, 26.80], [75.70, 26.80]]]
      },
      properties: {
        id: "rj-11",
        name: "RJ-11 - Jaipur (Central)",
        state: "Rajasthan",
        description: "Central Jaipur: MI Road, Johari Bazaar, Bapu Bazaar"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.70, 26.80], [75.70, 27.10], [76.00, 27.10], [76.00, 26.80], [75.70, 26.80]]]
      },
      properties: {
        id: "rj-45",
        name: "RJ-45 - Jaipur (East)",
        state: "Rajasthan",
        description: "East Jaipur: Chitrakoot, Vaishali Nagar, Sodala"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.70, 26.80], [75.70, 27.10], [76.00, 27.10], [76.00, 26.80], [75.70, 26.80]]]
      },
      properties: {
        id: "rj-46",
        name: "RJ-46 - Jaipur (West)",
        state: "Rajasthan",
        description: "West Jaipur: Jhotwara, Amer, Manoharpura"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[74.60, 26.30], [74.60, 27.00], [75.40, 27.00], [75.40, 26.30], [74.60, 26.30]]]
      },
      properties: {
        id: "rj-14",
        name: "RJ-14 - Ajmer",
        state: "Rajasthan",
        description: "Ajmer District: Ajmer City, Kishangarh, Beawar"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[73.30, 24.80], [73.30, 25.60], [74.20, 25.60], [74.20, 24.80], [73.30, 24.80]]]
      },
      properties: {
        id: "rj-19",
        name: "RJ-19 - Jodhpur (South)",
        state: "Rajasthan",
        description: "South Jodhpur: Jodhpur City, Bilara, Osian"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[73.30, 24.80], [73.30, 25.60], [74.20, 25.60], [74.20, 24.80], [73.30, 24.80]]]
      },
      properties: {
        id: "rj-20",
        name: "RJ-20 - Jodhpur (North)",
        state: "Rajasthan",
        description: "North Jodhpur: Jodhpur North, Pali, Marwar Junction"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[73.00, 25.10], [73.00, 25.60], [73.60, 25.60], [73.60, 25.10], [73.00, 25.10]]]
      },
      properties: {
        id: "rj-43",
        name: "RJ-43 - Pali",
        state: "Rajasthan",
        description: "Pali District: Pali City, Marwar, Sumerpur"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[71.80, 25.10], [71.80, 25.70], [72.60, 25.70], [72.60, 25.10], [71.80, 25.10]]]
      },
      properties: {
        id: "rj-21",
        name: "RJ-21 - Barmer",
        state: "Rajasthan",
        description: "Barmer District: Barmer, Balotra, Siwana"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.10, 27.00], [76.10, 28.00], [76.90, 28.00], [76.90, 27.00], [76.10, 27.00]]]
      },
      properties: {
        id: "rj-30",
        name: "RJ-30 - Kota",
        state: "Rajasthan",
        description: "Kota District: Kota City, Bundi, Jhalawar"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.50, 24.80], [75.50, 25.50], [76.30, 25.50], [76.30, 24.80], [75.50, 24.80]]]
      },
      properties: {
        id: "rj-37",
        name: "RJ-37 - Udaipur",
        state: "Rajasthan",
        description: "Udaipur District: Udaipur City, Nathdwara, Salumber"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[74.30, 26.50], [74.30, 27.20], [75.10, 27.20], [75.10, 26.50], [74.30, 26.50]]]
      },
      properties: {
        id: "rj-38",
        name: "RJ-38 - Rajsamand",
        state: "Rajasthan",
        description: "Rajsamand District: Rajsamand, Kumbhalgarh, Deogarh"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.90, 28.40], [76.90, 29.10], [77.70, 29.10], [77.70, 28.40], [76.90, 28.40]]]
      },
      properties: {
        id: "rj-44",
        name: "RJ-44 - Bharatpur",
        state: "Rajasthan",
        description: "Bharatpur District: Bharatpur, Dholpur, Karauli"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[74.80, 26.90], [74.80, 27.70], [75.70, 27.70], [75.70, 26.90], [74.80, 26.90]]]
      },
      properties: {
        id: "rj-52",
        name: "RJ-52 - Bhilwara",
        state: "Rajasthan",
        description: "Bhilwara District: Bhilwara, Mandal, Asind"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[74.40, 25.30], [74.40, 26.00], [75.10, 26.00], [75.10, 25.30], [74.40, 25.30]]]
      },
      properties: {
        id: "rj-53",
        name: "RJ-53 - Chittorgarh",
        state: "Rajasthan",
        description: "Chittorgarh District: Chittorgarh, Nimbahera, Begun"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.50, 26.20], [76.50, 26.80], [77.10, 26.80], [77.10, 26.20], [76.50, 26.20]]]
      },
      properties: {
        id: "rj-55",
        name: "RJ-55 - Dholpur",
        state: "Rajasthan",
        description: "Dholpur District: Dholpur, Bari, Basai"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.10, 26.30], [76.10, 27.00], [76.80, 27.00], [76.80, 26.30], [76.10, 26.30]]]
      },
      properties: {
        id: "rj-56",
        name: "RJ-56 - Karauli",
        state: "Rajasthan",
        description: "Karauli District: Karauli, Hindaun, Todabhim"
      }
    },

    // UTTAR PRADESH
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[77.40, 28.55], [77.40, 29.00], [77.80, 29.00], [77.80, 28.55], [77.40, 28.55]]]
      },
      properties: {
        id: "up-13",
        name: "UP-13 - Lucknow (North)",
        state: "Uttar Pradesh",
        description: "North Lucknow: Alambagh, Amausi, Kakori"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[77.40, 28.55], [77.40, 29.00], [77.80, 29.00], [77.80, 28.55], [77.40, 28.55]]]
      },
      properties: {
        id: "up-14",
        name: "UP-14 - Lucknow (South)",
        state: "Uttar Pradesh",
        description: "South Lucknow: Indiranagar, Jankipuram, Vrindavan"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[77.40, 28.55], [77.40, 29.00], [77.80, 29.00], [77.80, 28.55], [77.40, 28.55]]]
      },
      properties: {
        id: "up-32",
        name: "UP-32 - Lucknow (Central)",
        state: "Uttar Pradesh",
        description: "Central Lucknow: Hazratganj, Charbagh, Kaiserbagh"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[77.40, 28.55], [77.40, 29.00], [77.80, 29.00], [77.80, 28.55], [77.40, 28.55]]]
      },
      properties: {
        id: "up-33",
        name: "UP-33 - Lucknow (East)",
        state: "Uttar Pradesh",
        description: "East Lucknow: Gomtinagar, Vastukhand, Lohia Nagar"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[77.40, 28.55], [77.40, 29.00], [77.80, 29.00], [77.80, 28.55], [77.40, 28.55]]]
      },
      properties: {
        id: "up-40",
        name: "UP-40 - Lucknow (West)",
        state: "Uttar Pradesh",
        description: "West Lucknow: Mahanagar, Niralanagar, Banthra"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[77.20, 28.95], [77.20, 29.30], [77.60, 29.30], [77.60, 28.95], [77.20, 28.95]]]
      },
      properties: {
        id: "up-15",
        name: "UP-15 - Gautam Buddha Nagar (Noida)",
        state: "Uttar Pradesh",
        description: "Noida: Sector 1-62, Greater Noida, Expressway"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[77.20, 28.95], [77.20, 29.30], [77.60, 29.30], [77.60, 28.95], [77.20, 28.95]]]
      },
      properties: {
        id: "up-16",
        name: "UP-16 - Gautam Buddha Nagar (Greater Noida)",
        state: "Uttar Pradesh",
        description: "Greater Noida: Alpha, Beta, Gamma, Zeta sectors"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[77.40, 28.68], [77.40, 28.85], [77.75, 28.85], [77.75, 28.68], [77.40, 28.68]]]
      },
      properties: {
        id: "up-25",
        name: "UP-25 - Ghaziabad (North)",
        state: "Uttar Pradesh",
        description: "North Ghaziabad: Ghaziabad City, Muradnagar"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[77.40, 28.68], [77.40, 28.85], [77.75, 28.85], [77.75, 28.68], [77.40, 28.68]]]
      },
      properties: {
        id: "up-26",
        name: "UP-26 - Ghaziabad (South)",
        state: "Uttar Pradesh",
        description: "South Ghaziabad: Modinagar, Dasna, BABURIBAD"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[77.40, 28.68], [77.40, 28.85], [77.75, 28.85], [77.75, 28.68], [77.40, 28.68]]]
      },
      properties: {
        id: "up-27",
        name: "UP-27 - Ghaziabad (East)",
        state: "Uttar Pradesh",
        description: "East Ghaziabad: Indirapuram, Vasundhara, Shafipur"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[77.40, 28.68], [77.40, 28.85], [77.75, 28.85], [77.75, 28.68], [77.40, 28.68]]]
      },
      properties: {
        id: "up-28",
        name: "UP-28 - Ghaziabad (West)",
        state: "Uttar Pradesh",
        description: "West Ghaziabad: Vijay Nagar, Crossing Republik, Raj Nagar Extension"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[77.40, 28.68], [77.40, 28.85], [77.75, 28.85], [77.75, 28.68], [77.40, 28.68]]]
      },
      properties: {
        id: "up-29",
        name: "UP-29 - Ghaziabad (Central)",
        state: "Uttar Pradesh",
        description: "Central Ghaziabad: Kaushambi, Paharganj, Navyug Market"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[78.00, 28.30], [78.00, 28.70], [78.50, 28.70], [78.50, 28.30], [78.00, 28.30]]]
      },
      properties: {
        id: "up-35",
        name: "UP-35 - Meerut",
        state: "Uttar Pradesh",
        description: "Meerut District: Meerut City, Modinagar, Mawana"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[77.40, 28.90], [77.40, 29.50], [78.20, 29.50], [78.20, 28.90], [77.40, 28.90]]]
      },
      properties: {
        id: "up-36",
        name: "UP-36 - Muzaffarnagar",
        state: "Uttar Pradesh",
        description: "Muzaffarnagar District: Muzaffarnagar, Shamli, Kairana"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[79.00, 25.20], [79.00, 26.00], [79.80, 26.00], [79.80, 25.20], [79.00, 25.20]]]
      },
      properties: {
        id: "up-41",
        name: "UP-41 - Kanpur (Central)",
        state: "Uttar Pradesh",
        description: "Central Kanpur: Kanpur City, Swadeshi Market, Gumti"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[79.00, 25.20], [79.00, 26.00], [79.80, 26.00], [79.80, 25.20], [79.00, 25.20]]]
      },
      properties: {
        id: "up-42",
        name: "UP-42 - Kanpur (East)",
        state: "Uttar Pradesh",
        description: "East Kanpur: Kakadeo, Shyam Nagar, Panki"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[79.00, 25.20], [79.00, 26.00], [79.80, 26.00], [79.80, 25.20], [79.00, 25.20]]]
      },
      properties: {
        id: "up-43",
        name: "UP-43 - Kanpur (West)",
        state: "Uttar Pradesh",
        description: "West Kanpur: Juhi, Yashoda Nagar, Barra"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[80.90, 25.30], [80.90, 26.10], [81.70, 26.10], [81.70, 25.30], [80.90, 25.30]]]
      },
      properties: {
        id: "up-70",
        name: "UP-70 - Varanasi (South)",
        state: "Uttar Pradesh",
        description: "South Varanasi: Varanasi City, Godowlia, Dashashwamedh"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[80.90, 25.30], [80.90, 26.10], [81.70, 26.10], [81.70, 25.30], [80.90, 25.30]]]
      },
      properties: {
        id: "up-71",
        name: "UP-71 - Varanasi (North)",
        state: "Uttar Pradesh",
        description: "North Varanasi: Cantonment, Maldah, Lohta"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[78.20, 26.90], [78.20, 27.40], [79.00, 27.40], [79.00, 26.90], [78.20, 26.90]]]
      },
      properties: {
        id: "up-78",
        name: "UP-78 - Allahabad (North)",
        state: "Uttar Pradesh",
        description: "North Allahabad: Allahabad City, Civil Lines, Georgetown"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[78.20, 26.90], [78.20, 27.40], [79.00, 27.40], [79.00, 26.90], [78.20, 26.90]]]
      },
      properties: {
        id: "up-79",
        name: "UP-79 - Allahabad (South)",
        state: "Uttar Pradesh",
        description: "South Allahabad: Kareli, Phaphamau, Naini"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[77.90, 28.95], [77.90, 29.35], [78.40, 29.35], [78.40, 28.95], [77.90, 28.95]]]
      },
      properties: {
        id: "up-80",
        name: "UP-80 - Agra (Central)",
        state: "Uttar Pradesh",
        description: "Central Agra: Tajganj, Sadar Bazaar, Sanjay Place"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[77.90, 28.95], [77.90, 29.35], [78.40, 29.35], [78.40, 28.95], [77.90, 28.95]]]
      },
      properties: {
        id: "up-81",
        name: "UP-81 - Agra (East)",
        state: "Uttar Pradesh",
        description: "East Agra: Fatehabad, Bah, Achleshwar"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[77.90, 28.95], [77.90, 29.35], [78.40, 29.35], [78.40, 28.95], [77.90, 28.95]]]
      },
      properties: {
        id: "up-82",
        name: "UP-82 - Agra (West)",
        state: "Uttar Pradesh",
        description: "West Agra: Firozabad, Shikohabad, Mainpuri"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[80.10, 26.80], [80.10, 27.30], [80.80, 27.30], [80.80, 26.80], [80.10, 26.80]]]
      },
      properties: {
        id: "up-94",
        name: "UP-94 - Prayagraj (East)",
        state: "Uttar Pradesh",
        description: "East Prayagraj: Phulpur, Handia, Meja"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[80.10, 26.80], [80.10, 27.30], [80.80, 27.30], [80.80, 26.80], [80.10, 26.80]]]
      },
      properties: {
        id: "up-95",
        name: "UP-95 - Prayagraj (West)",
        state: "Uttar Pradesh",
        description: "West Prayagraj: Karchana, Karari, Chaka"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[80.30, 26.40], [80.30, 26.70], [80.70, 26.70], [80.70, 26.40], [80.30, 26.40]]]
      },
      properties: {
        id: "up-96",
        name: "UP-96 - Pratapgarh",
        state: "Uttar Pradesh",
        description: "Pratapgarh District: Pratapgarh, Bela, RanMUM"
      }
    },

    // PONDICHERRY (PUDUCHERRY)
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[79.70, 11.90], [79.70, 12.10], [79.90, 12.10], [79.90, 11.90], [79.70, 11.90]]]
      },
      properties: {
        id: "py-01",
        name: "PY-01 - Pondicherry (Main)",
        state: "Pondicherry",
        description: "Pondicherry: Pondicherry Urban, Oupor, Nelli"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[79.90, 11.90], [79.90, 12.10], [80.00, 12.10], [80.00, 11.90], [79.90, 11.90]]]
      },
      properties: {
        id: "py-02",
        name: "PY-02 - Karaikal",
        state: "Pondicherry",
        description: "Karaikal District: Karaikal, Tirunallar, Nedungadu"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[79.30, 11.80], [79.30, 11.95], [79.50, 11.95], [79.50, 11.80], [79.30, 11.80]]]
      },
      properties: {
        id: "py-03",
        name: "PY-03 - Mahe",
        state: "Pondicherry",
        description: "Mahe District: Mahe, Palloor, Cheruvannur"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[79.60, 16.70], [79.60, 17.00], [79.80, 17.00], [79.80, 16.70], [79.60, 16.70]]]
      },
      properties: {
        id: "py-04",
        name: "PY-04 - Yanam",
        state: "Pondicherry",
        description: "Yanam District: Yanam, Dariyanagar, Kimmuvo"
      }
    },

    // WEST BENGAL
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[88.30, 22.50], [88.30, 22.75], [88.45, 22.75], [88.45, 22.50], [88.30, 22.50]]]
      },
      properties: {
        id: "wb-01",
        name: "WB-01 - Kolkata (North)",
        state: "West Bengal",
        description: "North Kolkata: Bagbazar, Shyambazar, Cossipur"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[88.30, 22.50], [88.30, 22.75], [88.45, 22.75], [88.45, 22.50], [88.30, 22.50]]]
      },
      properties: {
        id: "wb-02",
        name: "WB-02 - Kolkata (Central)",
        state: "West Bengal",
        description: "Central Kolkata: BBD Bagh, Dalhousie, Esplanade"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[88.30, 22.50], [88.30, 22.75], [88.45, 22.75], [88.45, 22.50], [88.30, 22.50]]]
      },
      properties: {
        id: "wb-03",
        name: "WB-03 - Kolkata (South)",
        state: "West Bengal",
        description: "South Kolkata: Ballygunge, Rashbehari, Garia"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[88.30, 22.50], [88.30, 22.75], [88.45, 22.75], [88.45, 22.50], [88.30, 22.50]]]
      },
      properties: {
        id: "wb-04",
        name: "WB-04 - Kolkata (East)",
        state: "West Bengal",
        description: "East Kolkata: Salt Lake, Rajarhat, New Town"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[88.30, 22.50], [88.30, 22.75], [88.45, 22.75], [88.45, 22.50], [88.30, 22.50]]]
      },
      properties: {
        id: "wb-05",
        name: "WB-05 - Kolkata (West)",
        state: "West Bengal",
        description: "West Kolkata: Howrah, Bally, Santragachi"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[88.30, 22.50], [88.30, 22.75], [88.45, 22.75], [88.45, 22.50], [88.30, 22.50]]]
      },
      properties: {
        id: "wb-06",
        name: "WB-06 - Howrah",
        state: "West Bengal",
        description: "Howrah District: Howrah City, Shibpur, Belur"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[88.40, 22.70], [88.40, 22.90], [88.75, 22.90], [88.75, 22.70], [88.40, 22.70]]]
      },
      properties: {
        id: "wb-10",
        name: "WB-10 - North 24 Parganas",
        state: "West Bengal",
        description: "North 24 Parganas: Barasat, Barrackpore, Basirhat"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[88.00, 22.20], [88.00, 22.60], [88.50, 22.60], [88.50, 22.20], [88.00, 22.20]]]
      },
      properties: {
        id: "wb-11",
        name: "WB-11 - South 24 Parganas",
        state: "West Bengal",
        description: "South 24 Parganas: Alipore, Diamond Harbour, Kakdwip"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[87.30, 22.90], [87.30, 23.50], [88.00, 23.50], [88.00, 22.90], [87.30, 22.90]]]
      },
      properties: {
        id: "wb-12",
        name: "WB-12 - Hooghly",
        state: "West Bengal",
        description: "Hooghly District: Chinsura, Chandannagar, Serampore"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[87.20, 23.00], [87.20, 23.80], [88.00, 23.80], [88.00, 23.00], [87.20, 23.00]]]
      },
      properties: {
        id: "wb-13",
        name: "WB-13 - Bardhaman",
        state: "West Bengal",
        description: "Bardhaman District: Bardhaman City, Asansol, Durgapur"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[88.40, 23.50], [88.40, 24.20], [89.20, 24.20], [89.20, 23.50], [88.40, 23.50]]]
      },
      properties: {
        id: "wb-14",
        name: "WB-14 - Darjeeling",
        state: "West Bengal",
        description: "Darjeeling District: Darjeeling, Siliguri, Kurseong"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[87.70, 24.30], [87.70, 25.00], [88.40, 25.00], [88.40, 24.30], [87.70, 24.30]]]
      },
      properties: {
        id: "wb-15",
        name: "WB-15 - Jalpaiguri",
        state: "West Bengal",
        description: "Jalpaiguri District: Jalpaiguri, Malbazar, Dhupguri"
      }
    },

    // TELANGANA
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[78.40, 17.30], [78.40, 17.50], [78.60, 17.50], [78.60, 17.30], [78.40, 17.30]]]
      },
      properties: {
        id: "ts-01",
        name: "TS-01 - Hyderabad (North)",
        state: "Telangana",
        description: "North Hyderabad: Koti, Chaderghat, Malakpet"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[78.40, 17.30], [78.40, 17.50], [78.60, 17.50], [78.60, 17.30], [78.40, 17.30]]]
      },
      properties: {
        id: "ts-02",
        name: "TS-02 - Hyderabad (Central)",
        state: "Telangana",
        description: "Central Hyderabad: Abids, Basheerbagh, Hyderguda"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[78.40, 17.30], [78.40, 17.50], [78.60, 17.50], [78.60, 17.30], [78.40, 17.30]]]
      },
      properties: {
        id: "ts-03",
        name: "TS-03 - Hyderabad (East)",
        state: "Telangana",
        description: "East Hyderabad: Tarnaka, Habsiguda, Uppal"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[78.40, 17.30], [78.40, 17.50], [78.60, 17.50], [78.60, 17.30], [78.40, 17.30]]]
      },
      properties: {
        id: "ts-04",
        name: "TS-04 - Hyderabad (West)",
        state: "Telangana",
        description: "West Hyderabad: Banjara Hills, Jubilee Hills, Film Nagar"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[78.40, 17.30], [78.40, 17.50], [78.60, 17.50], [78.60, 17.30], [78.40, 17.30]]]
      },
      properties: {
        id: "ts-05",
        name: "TS-05 - Hyderabad (South)",
        state: "Telangana",
        description: "South Hyderabad: LB Nagar, Vanasthalipuram, Saroornagar"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[78.45, 17.45], [78.45, 17.65], [78.65, 17.65], [78.65, 17.45], [78.45, 17.45]]]
      },
      properties: {
        id: "ts-06",
        name: "TS-06 - Hyderabad (Cyberabad)",
        state: "Telangana",
        description: "Cyberabad: Gachibowli, HITEC City, Kondapur"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[78.30, 17.20], [78.30, 17.60], [78.70, 17.60], [78.70, 17.20], [78.30, 17.20]]]
      },
      properties: {
        id: "ts-07",
        name: "TS-07 - Ranga Reddy (East)",
        state: "Telangana",
        description: "East Ranga Reddy: Shamshabad, Rajendranagar, Moinabad"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[78.30, 17.20], [78.30, 17.60], [78.70, 17.60], [78.70, 17.20], [78.30, 17.20]]]
      },
      properties: {
        id: "ts-08",
        name: "TS-08 - Ranga Reddy (West)",
        state: "Telangana",
        description: "West Ranga Reddy: Shankarpally, Chevella, Kandukur"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[77.50, 17.10], [77.50, 18.30], [78.80, 18.30], [78.80, 17.10], [77.50, 17.10]]]
      },
      properties: {
        id: "ts-09",
        name: "TS-09 - Medchal-Malkajgiri",
        state: "Telangana",
        description: "Medchal-Malkajgiri: Secunderabad, Medchal, Kompally"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[79.10, 18.00], [79.10, 19.50], [80.00, 19.50], [80.00, 18.00], [79.10, 18.00]]]
      },
      properties: {
        id: "ts-10",
        name: "TS-10 - Warangal (Urban)",
        state: "Telangana",
        description: "Warangal Urban: Warangal City, Hanamkonda, Kazipet"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[78.80, 17.80], [78.80, 18.50], [79.60, 18.50], [79.60, 17.80], [78.80, 17.80]]]
      },
      properties: {
        id: "ts-29",
        name: "TS-29 - Karimnagar",
        state: "Telangana",
        description: "Karimnagar District: Karimnagar, Ramagundam, Peddapalli"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[77.70, 16.80], [77.70, 17.50], [78.50, 17.50], [78.50, 16.80], [77.70, 16.80]]]
      },
      properties: {
        id: "ts-30",
        name: "TS-30 - Nizamabad",
        state: "Telangana",
        description: "Nizamabad District: Nizamabad City, Kamareddy, Armur"
      }
    },

    // HARYANA
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.80, 28.40], [76.80, 28.75], [77.30, 28.75], [77.30, 28.40], [76.80, 28.40]]]
      },
      properties: {
        id: "hr-01",
        name: "HR-01 - Gurgaon (North)",
        state: "Haryana",
        description: "North Gurgaon: Palam Vihar, Sector 14, Sector 17"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.80, 28.40], [76.80, 28.75], [77.30, 28.75], [77.30, 28.40], [76.80, 28.40]]]
      },
      properties: {
        id: "hr-02",
        name: "HR-02 - Gurgaon (South)",
        state: "Haryana",
        description: "South Gurgaon: Sector 56, Sohna Road, Golf Course Road"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.80, 28.40], [76.80, 28.75], [77.30, 28.75], [77.30, 28.40], [76.80, 28.40]]]
      },
      properties: {
        id: "hr-03",
        name: "HR-03 - Gurgaon (East)",
        state: "Haryana",
        description: "East Gurgaon: Pataudi, Farrukhnagar, Hailey Mandi"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.80, 28.40], [76.80, 28.75], [77.30, 28.75], [77.30, 28.40], [76.80, 28.40]]]
      },
      properties: {
        id: "hr-04",
        name: "HR-04 - Gurgaon (West)",
        state: "Haryana",
        description: "West Gurgaon: Manesar, Gwal Pahari, Bandhwari"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.75, 28.95], [76.75, 29.20], [77.20, 29.20], [77.20, 28.95], [76.75, 28.95]]]
      },
      properties: {
        id: "hr-05",
        name: "HR-05 - Faridabad (North)",
        state: "Haryana",
        description: "North Faridabad: Ballabgarh, Palwal, Hodal"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.75, 28.95], [76.75, 29.20], [77.20, 29.20], [77.20, 28.95], [76.75, 28.95]]]
      },
      properties: {
        id: "hr-06",
        name: "HR-06 - Faridabad (South)",
        state: "Haryana",
        description: "South Faridabad: Faridabad City, Greater Faridabad, Ajronda"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.90, 29.90], [76.90, 30.10], [77.20, 30.10], [77.20, 29.90], [76.90, 29.90]]]
      },
      properties: {
        id: "hr-07",
        name: "HR-07 - Ambala",
        state: "Haryana",
        description: "Ambala District: Ambala City, Ambala Cantt, Mullana"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.80, 29.70], [75.80, 30.30], [76.50, 30.30], [76.50, 29.70], [75.80, 29.70]]]
      },
      properties: {
        id: "hr-08",
        name: "HR-08 - Kurukshetra",
        state: "Haryana",
        description: "Kurukshetra District: Kurukshetra, Pehowa, Shahabad"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.10, 29.30], [76.10, 29.90], [76.80, 29.90], [76.80, 29.30], [76.10, 29.30]]]
      },
      properties: {
        id: "hr-09",
        name: "HR-09 - Karnal",
        state: "Haryana",
        description: "Karnal District: Karnal City, Panipat, Assandh"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.60, 28.80], [75.60, 29.60], [76.40, 29.60], [76.40, 28.80], [75.60, 28.80]]]
      },
      properties: {
        id: "hr-10",
        name: "HR-10 - Rohtak",
        state: "Haryana",
        description: "Rohtak District: Rohtak City, Jhajjar, Sonepat"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[74.60, 28.80], [74.60, 29.70], [75.50, 29.70], [75.50, 28.80], [74.60, 28.80]]]
      },
      properties: {
        id: "hr-11",
        name: "HR-11 - Hisar",
        state: "Haryana",
        description: "Hisar District: Hisar City, Fatehabad, Sirsa"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[74.20, 28.80], [74.20, 29.80], [75.20, 29.80], [75.20, 28.80], [74.20, 28.80]]]
      },
      properties: {
        id: "hr-12",
        name: "HR-12 - Sirsa",
        state: "Haryana",
        description: "Sirsa District: Sirsa City, Ellenabad, Dabwali"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.10, 28.80], [76.10, 29.40], [76.80, 29.40], [76.80, 28.80], [76.10, 28.80]]]
      },
      properties: {
        id: "hr-13",
        name: "HR-13 - Jind",
        state: "Haryana",
        description: "Jind District: Jind City, Narwana, Uchana"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.80, 29.10], [75.80, 29.70], [76.50, 29.70], [76.50, 29.10], [75.80, 29.10]]]
      },
      properties: {
        id: "hr-14",
        name: "HR-14 - Sonipat",
        state: "Haryana",
        description: "Sonipat District: Sonipat City, Gohana, Rai"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.30, 28.80], [75.30, 29.30], [76.00, 29.30], [76.00, 28.80], [75.30, 28.80]]]
      },
      properties: {
        id: "hr-15",
        name: "HR-15 - Jhajjar",
        state: "Haryana",
        description: "Jhajjar District: Jhajjar City, Bahadurgarh, Kosli"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.60, 28.30], [75.60, 28.90], [76.30, 28.90], [76.30, 28.30], [75.60, 28.30]]]
      },
      properties: {
        id: "hr-16",
        name: "HR-16 - Rewari",
        state: "Haryana",
        description: "Rewari District: Rewari City, Bawal, Koshi"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.10, 28.10], [76.10, 28.60], [76.70, 28.60], [76.70, 28.10], [76.10, 28.10]]]
      },
      properties: {
        id: "hr-17",
        name: "HR-17 - Mahendragarh",
        state: "Haryana",
        description: "Mahendragarh District: Narnaul, Mahendragarh, Kanina"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.80, 28.20], [75.80, 28.60], [76.40, 28.60], [76.40, 28.20], [75.80, 28.20]]]
      },
      properties: {
        id: "hr-18",
        name: "HR-18 - Narnaul",
        state: "Haryana",
        description: "Narnaul District: Narnaul City, Khetri, Singhana"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.50, 29.40], [76.50, 29.90], [77.10, 29.90], [77.10, 29.40], [76.50, 29.40]]]
      },
      properties: {
        id: "hr-19",
        name: "HR-19 - Panipat",
        state: "Haryana",
        description: "Panipat District: Panipat City, Samalkha, Israna"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.20, 28.20], [75.20, 28.80], [75.90, 28.80], [75.90, 28.20], [75.20, 28.20]]]
      },
      properties: {
        id: "hr-20",
        name: "HR-20 - Bhiwani",
        state: "Haryana",
        description: "Bhiwani District: Bhiwani City, Tosham, Charkhi Dadri"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[74.40, 29.00], [74.40, 29.60], [75.10, 29.60], [75.10, 29.00], [74.40, 29.00]]]
      },
      properties: {
        id: "hr-21",
        name: "HR-21 - Fatehabad",
        state: "Haryana",
        description: "Fatehabad District: Fatehabad City, Ratia, Tohana"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.50, 28.90], [75.50, 29.40], [76.10, 29.40], [76.10, 28.90], [75.50, 28.90]]]
      },
      properties: {
        id: "hr-22",
        name: "HR-22 - Kaithal",
        state: "Haryana",
        description: "Kaithal District: Kaithal City, Kaul, Pundri"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.30, 29.70], [76.30, 30.10], [76.90, 30.10], [76.90, 29.70], [76.30, 29.70]]]
      },
      properties: {
        id: "hr-26",
        name: "HR-26 - Yamunanagar",
        state: "Haryana",
        description: "Yamunanagar District: Yamunanagar City, Jagadhri, Bilaspur"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.90, 28.80], [76.90, 29.20], [77.40, 29.20], [77.40, 28.80], [76.90, 28.80]]]
      },
      properties: {
        id: "hr-27",
        name: "HR-27 - Rohtak (Rural)",
        state: "Haryana",
        description: "Rohtak Rural: Meham, Kalanaur, Sanghi"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.50, 28.50], [76.50, 29.00], [77.10, 29.00], [77.10, 28.50], [76.50, 28.50]]]
      },
      properties: {
        id: "hr-28",
        name: "HR-28 - Jhajjar (Rural)",
        state: "Haryana",
        description: "Jhajjar Rural: Badli, Bahadurgarh, Jhajjar Rural"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.40, 29.20], [75.40, 29.80], [76.10, 29.80], [76.10, 29.20], [75.40, 29.20]]]
      },
      properties: {
        id: "hr-29",
        name: "HR-29 - Karnal (Rural)",
        state: "Haryana",
        description: "Karnal Rural: Nilokheri, Indri, Kunjpura"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.90, 28.60], [75.90, 29.10], [76.50, 29.10], [76.50, 28.60], [75.90, 28.60]]]
      },
      properties: {
        id: "hr-30",
        name: "HR-30 - Kurukshetra (Rural)",
        state: "Haryana",
        description: "Kurukshetra Rural: Ladwa, Ismailabad, Shahabad"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[74.70, 29.40], [74.70, 30.00], [75.40, 30.00], [75.40, 29.40], [74.70, 29.40]]]
      },
      properties: {
        id: "hr-31",
        name: "HR-31 - Ambala (Rural)",
        state: "Haryana",
        description: "Ambala Rural: Saha, Barara, Narwana"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[74.40, 29.50], [74.40, 30.20], [75.20, 30.20], [75.20, 29.50], [74.40, 29.50]]]
      },
      properties: {
        id: "hr-32",
        name: "HR-32 - Hisar (Rural)",
        state: "Haryana",
        description: "Hisar Rural: Adampur, Balsamand, Narnaud"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[74.30, 28.50], [74.30, 29.20], [75.00, 29.20], [75.00, 28.50], [74.30, 28.50]]]
      },
      properties: {
        id: "hr-33",
        name: "HR-33 - Bhiwani (Rural)",
        state: "Haryana",
        description: "Bhiwani Rural: Tosham, Kairu, Bawani Khera"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.40, 28.60], [75.40, 29.20], [76.10, 29.20], [76.10, 28.60], [75.40, 28.60]]]
      },
      properties: {
        id: "hr-34",
        name: "HR-34 - Jind (Rural)",
        state: "Haryana",
        description: "Jind Rural: Uchana, Julana, Alewa"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.10, 28.40], [75.10, 28.90], [75.80, 28.90], [75.80, 28.40], [75.10, 28.40]]]
      },
      properties: {
        id: "hr-35",
        name: "HR-35 - Rewari (Rural)",
        state: "Haryana",
        description: "Rewari Rural: Bawal, Koshi, Dahina"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[74.50, 29.30], [74.50, 29.90], [75.20, 29.90], [75.20, 29.30], [74.50, 29.30]]]
      },
      properties: {
        id: "hr-36",
        name: "HR-36 - Sirsa (Rural)",
        state: "Haryana",
        description: "Sirsa Rural: Rania, Kalanwali, Nathusari Chopta"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.00, 29.10], [76.00, 29.60], [76.60, 29.60], [76.60, 29.10], [76.00, 29.10]]]
      },
      properties: {
        id: "hr-37",
        name: "HR-37 - Fatehabad (Rural)",
        state: "Haryana",
        description: "Fatehabad Rural: Bhattu Kalan, Ratia, Bhuna"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.80, 29.50], [75.80, 30.00], [76.40, 30.00], [76.40, 29.50], [75.80, 29.50]]]
      },
      properties: {
        id: "hr-38",
        name: "HR-38 - Kaithal (Rural)",
        state: "Haryana",
        description: "Kaithal Rural: Pundri, Rajound, Cheeka"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.70, 28.40], [75.70, 28.80], [76.30, 28.80], [76.30, 28.40], [75.70, 28.40]]]
      },
      properties: {
        id: "hr-39",
        name: "HR-39 - Mahendragarh (Rural)",
        state: "Haryana",
        description: "Mahendragarh Rural: Kanina, Nangal, Bawal"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.20, 28.50], [76.20, 28.80], [76.60, 28.80], [76.60, 28.50], [76.20, 28.50]]]
      },
      properties: {
        id: "hr-40",
        name: "HR-40 - Gurgaon (Rural)",
        state: "Haryana",
        description: "Gurgaon Rural: Pataudi, Farrukhnagar, Hailey Mandi"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.40, 29.10], [76.40, 29.40], [76.80, 29.40], [76.80, 29.10], [76.40, 29.10]]]
      },
      properties: {
        id: "hr-41",
        name: "HR-41 - Faridabad (Rural)",
        state: "Haryana",
        description: "Faridabad Rural: Ballabgarh, Palwal, Hodal"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.00, 28.80], [76.00, 29.20], [76.50, 29.20], [76.50, 28.80], [76.00, 28.80]]]
      },
      properties: {
        id: "hr-42",
        name: "HR-42 - Palwal",
        state: "Haryana",
        description: "Palwal District: Palwal City, Hodal, Hathin"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.20, 29.50], [75.20, 30.10], [75.90, 30.10], [75.90, 29.50], [75.20, 29.50]]]
      },
      properties: {
        id: "hr-43",
        name: "HR-43 - Hansi",
        state: "Haryana",
        description: "Hansi District: Hansi City, Barwala, Uklana"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.90, 29.00], [75.90, 29.40], [76.40, 29.40], [76.40, 29.00], [75.90, 29.00]]]
      },
      properties: {
        id: "hr-44",
        name: "HR-44 - Gohana",
        state: "Haryana",
        description: "Gohana District: Gohana City, Ganaur, Rai"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.30, 29.40], [75.30, 29.80], [75.90, 29.80], [75.90, 29.40], [75.30, 29.40]]]
      },
      properties: {
        id: "hr-45",
        name: "HR-45 - Narwana",
        state: "Haryana",
        description: "Narwana District: Narwana Town, Uchana, Kauh"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.80, 28.80], [75.80, 29.20], [76.30, 29.20], [76.30, 28.80], [75.80, 28.80]]]
      },
      properties: {
        id: "hr-46",
        name: "HR-46 - Safidon",
        state: "Haryana",
        description: "Safidon District: Safidon Town, Julana, Assandh"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.10, 29.10], [75.10, 29.50], [75.70, 29.50], [75.70, 29.10], [75.10, 29.10]]]
      },
      properties: {
        id: "hr-47",
        name: "HR-47 - Jind (East)",
        state: "Haryana",
        description: "East Jind: Safidon, Assandh, Kachhua"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[74.60, 28.50], [74.60, 29.00], [75.20, 29.00], [75.20, 28.50], [74.60, 28.50]]]
      },
      properties: {
        id: "hr-48",
        name: "HR-48 - Bhiwani (West)",
        state: "Haryana",
        description: "West Bhiwani: Kairu, Bawani Khera, Loharu"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[74.80, 29.30], [74.80, 29.80], [75.50, 29.80], [75.50, 29.30], [74.80, 29.30]]]
      },
      properties: {
        id: "hr-49",
        name: "HR-49 - Charkhi Dadri",
        state: "Haryana",
        description: "Charkhi Dadri District: Charkhi Dadri, Bhiwani Rural"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.50, 28.20], [75.50, 28.70], [76.20, 28.70], [76.20, 28.20], [75.50, 28.20]]]
      },
      properties: {
        id: "hr-50",
        name: "HR-50 - Rewari (South)",
        state: "Haryana",
        description: "South Rewari: Bawal, Dahina, Khol"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.50, 29.60], [76.50, 30.00], [77.10, 30.00], [77.10, 29.60], [76.50, 29.60]]]
      },
      properties: {
        id: "hr-51",
        name: "HR-51 - Jagadhri",
        state: "Haryana",
        description: "Jagadhri District: Jagadhri, Chhachhrauli, Bilaspur"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.30, 29.00], [75.30, 29.50], [75.90, 29.50], [75.90, 29.00], [75.30, 29.00]]]
      },
      properties: {
        id: "hr-52",
        name: "HR-52 - Rania",
        state: "Haryana",
        description: "Rania District: Rania Town, Kalanwali, Rania"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.60, 28.50], [75.60, 28.90], [76.20, 28.90], [76.20, 28.50], [75.60, 28.50]]]
      },
      properties: {
        id: "hr-53",
        name: "HR-53 - Kosli",
        state: "Haryana",
        description: "Kosli District: Kosli Town, Nahar, Rohari"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.60, 28.80], [76.60, 29.30], [77.20, 29.30], [77.20, 28.80], [76.60, 28.80]]]
      },
      properties: {
        id: "hr-54",
        name: "HR-54 - Bahadurgarh",
        state: "Haryana",
        description: "Bahadurgarh District: Bahadurgarh City, Jhajjar Rural"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.90, 29.20], [75.90, 29.60], [76.50, 29.60], [76.50, 29.20], [75.90, 29.20]]]
      },
      properties: {
        id: "hr-55",
        name: "HR-55 - Gohana (West)",
        state: "Haryana",
        description: "West Gohana: Gohana, Kathura, Munak"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.20, 29.60], [75.20, 30.10], [75.80, 30.10], [75.80, 29.60], [75.20, 29.60]]]
      },
      properties: {
        id: "hr-56",
        name: "HR-56 - Adampur",
        state: "Haryana",
        description: "Adampur District: Adampur Town, Balsamand, Sisai"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.80, 28.40], [75.80, 28.90], [76.50, 28.90], [76.50, 28.40], [75.80, 28.40]]]
      },
      properties: {
        id: "hr-57",
        name: "HR-57 - Mahendragarh (East)",
        state: "Haryana",
        description: "East Mahendragarh: Mahendragarh, Narnaul, Singhana"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.20, 28.80], [76.20, 29.20], [76.70, 29.20], [76.70, 28.80], [76.20, 28.80]]]
      },
      properties: {
        id: "hr-58",
        name: "HR-58 - Gurgaon (East)",
        state: "Haryana",
        description: "East Gurgaon: Farrukhnagar, Pataudi, Gwal Pahari"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.80, 28.60], [76.80, 29.00], [77.30, 29.00], [77.30, 28.60], [76.80, 28.60]]]
      },
      properties: {
        id: "hr-59",
        name: "HR-59 - Faridabad (East)",
        state: "Haryana",
        description: "East Faridabad: Palwal, Hodal, Farrukhnagar"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.40, 28.70], [75.40, 29.30], [76.10, 29.30], [76.10, 28.70], [75.40, 28.70]]]
      },
      properties: {
        id: "hr-60",
        name: "HR-60 - Jhajjar (West)",
        state: "Haryana",
        description: "West Jhajjar: Jhajjar, Bahadurgarh, Badli"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.30, 29.50], [76.30, 29.90], [76.90, 29.90], [76.90, 29.50], [76.30, 29.50]]]
      },
      properties: {
        id: "hr-61",
        name: "HR-61 - Sonipat (Rural)",
        state: "Haryana",
        description: "Sonipat Rural: Gohana, Rai, Ganaur"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.50, 29.30], [75.50, 29.80], [76.10, 29.80], [76.10, 29.30], [75.50, 29.30]]]
      },
      properties: {
        id: "hr-62",
        name: "HR-62 - Karnal (South)",
        state: "Haryana",
        description: "South Karnal: Indri, Kunjpura, Nilokheri"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.00, 29.50], [76.00, 29.90], [76.50, 29.90], [76.50, 29.50], [76.00, 29.50]]]
      },
      properties: {
        id: "hr-63",
        name: "HR-63 - Kurukshetra (North)",
        state: "Haryana",
        description: "North Kurukshetra: Shahabad, Ladwa, Ismailabad"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.10, 29.70], [76.10, 30.20], [76.80, 30.20], [76.80, 29.70], [76.10, 29.70]]]
      },
      properties: {
        id: "hr-64",
        name: "HR-64 - Ambala (South)",
        state: "Haryana",
        description: "South Ambala: Saha, Barara, Mullana"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[74.70, 29.10], [74.70, 29.70], [75.40, 29.70], [75.40, 29.10], [74.70, 29.10]]]
      },
      properties: {
        id: "hr-65",
        name: "HR-65 - Hisar (East)",
        state: "Haryana",
        description: "East Hisar: Adampur, Balsamand, Narnaud"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[74.90, 29.00], [74.90, 29.50], [75.60, 29.50], [75.60, 29.00], [74.90, 29.00]]]
      },
      properties: {
        id: "hr-66",
        name: "HR-66 - Fatehabad (North)",
        state: "Haryana",
        description: "North Fatehabad: Bhattu Kalan, Ratia, Bhuna"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.70, 29.00], [75.70, 29.50], [76.30, 29.50], [76.30, 29.00], [75.70, 29.00]]]
      },
      properties: {
        id: "hr-67",
        name: "HR-67 - Jind (West)",
        state: "Haryana",
        description: "West Jind: Julana, Alewa, Karruni"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.20, 28.70], [75.20, 29.30], [75.90, 29.30], [75.90, 28.70], [75.20, 28.70]]]
      },
      properties: {
        id: "hr-68",
        name: "HR-68 - Bhiwani (East)",
        state: "Haryana",
        description: "East Bhiwani: Tosham, Kairu, Bawani Khera"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.60, 28.20], [75.60, 28.70], [76.30, 28.70], [76.30, 28.20], [75.60, 28.20]]]
      },
      properties: {
        id: "hr-69",
        name: "HR-69 - Rewari (East)",
        state: "Haryana",
        description: "East Rewari: Rewari Urban, Bawal, Koshi"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[74.50, 29.00], [74.50, 29.60], [75.20, 29.60], [75.20, 29.00], [74.50, 29.00]]]
      },
      properties: {
        id: "hr-70",
        name: "HR-70 - Sirsa (West)",
        state: "Haryana",
        description: "West Sirsa: Rania, Kalanwali, Nathusari Chopta"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.90, 29.40], [75.90, 29.80], [76.40, 29.80], [76.40, 29.40], [75.90, 29.40]]]
      },
      properties: {
        id: "hr-71",
        name: "HR-71 - Kaithal (West)",
        state: "Haryana",
        description: "West Kaithal: Pundri, Rajound, Cheeka"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.40, 28.60], [76.40, 29.00], [76.90, 29.00], [76.90, 28.60], [76.40, 28.60]]]
      },
      properties: {
        id: "hr-72",
        name: "HR-72 - Palwal (Rural)",
        state: "Haryana",
        description: "Palwal Rural: Hodal, Hathin, Raini"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.20, 28.60], [76.20, 29.00], [76.70, 29.00], [76.70, 28.60], [76.20, 28.60]]]
      },
      properties: {
        id: "hr-73",
        name: "HR-73 - Faridabad (Rural)",
        state: "Haryana",
        description: "Faridabad Rural: Ballabgarh, Greater Faridabad"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.90, 29.00], [76.90, 29.40], [77.40, 29.40], [77.40, 29.00], [76.90, 29.00]]]
      },
      properties: {
        id: "hr-74",
        name: "HR-74 - Sonipat (East)",
        state: "Haryana",
        description: "East Sonipat: Gohana, Kathura, Munak"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.80, 29.30], [75.80, 29.70], [76.30, 29.70], [76.30, 29.30], [75.80, 29.30]]]
      },
      properties: {
        id: "hr-75",
        name: "HR-75 - Karnal (West)",
        state: "Haryana",
        description: "West Karnal: Nilokheri, Indri, Kunjpura"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.10, 29.20], [76.10, 29.60], [76.60, 29.60], [76.60, 29.20], [76.10, 29.20]]]
      },
      properties: {
        id: "hr-76",
        name: "HR-76 - Kurukshetra (South)",
        state: "Haryana",
        description: "South Kurukshetra: Ladwa, Shahabad, Ismailabad"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.50, 29.80], [76.50, 30.20], [77.10, 30.20], [77.10, 29.80], [76.50, 29.80]]]
      },
      properties: {
        id: "hr-77",
        name: "HR-77 - Ambala (East)",
        state: "Haryana",
        description: "East Ambala: Ambala City, Mullana, Saha"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[74.60, 29.50], [74.60, 30.10], [75.30, 30.10], [75.30, 29.50], [74.60, 29.50]]]
      },
      properties: {
        id: "hr-78",
        name: "HR-78 - Hisar (West)",
        state: "Haryana",
        description: "West Hisar: Hansi, Barwala, Uklana"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[74.80, 29.50], [74.80, 30.00], [75.50, 30.00], [75.50, 29.50], [74.80, 29.50]]]
      },
      properties: {
        id: "hr-79",
        name: "HR-79 - Fatehabad (West)",
        state: "Haryana",
        description: "West Fatehabad: Ratia, Bhuna, Bhattu Kalan"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.50, 29.60], [75.50, 30.00], [76.00, 30.00], [76.00, 29.60], [75.50, 29.60]]]
      },
      properties: {
        id: "hr-80",
        name: "HR-80 - Jind (North)",
        state: "Haryana",
        description: "North Jind: Narwana, Uchana, Kauh"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[74.90, 28.80], [74.90, 29.40], [75.60, 29.40], [75.60, 28.80], [74.90, 28.80]]]
      },
      properties: {
        id: "hr-81",
        name: "HR-81 - Bhiwani (North)",
        state: "Haryana",
        description: "North Bhiwani: Tosham, Bawani Khera, Loharu"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.70, 28.50], [75.70, 28.90], [76.30, 28.90], [76.30, 28.50], [75.70, 28.50]]]
      },
      properties: {
        id: "hr-82",
        name: "HR-82 - Rewari (North)",
        state: "Haryana",
        description: "North Rewari: Mahendragarh, Narnaul, Kanina"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[74.70, 29.20], [74.70, 29.80], [75.40, 29.80], [75.40, 29.20], [74.70, 29.20]]]
      },
      properties: {
        id: "hr-83",
        name: "HR-83 - Sirsa (North)",
        state: "Haryana",
        description: "North Sirsa: Ellenabad, Rania, Kalanwali"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.80, 29.50], [75.80, 29.90], [76.30, 29.90], [76.30, 29.50], [75.80, 29.50]]]
      },
      properties: {
        id: "hr-84",
        name: "HR-84 - Kaithal (North)",
        state: "Haryana",
        description: "North Kaithal: Pundri, Rajound, Cheeka"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.20, 29.20], [76.20, 29.60], [76.80, 29.60], [76.80, 29.20], [76.20, 29.20]]]
      },
      properties: {
        id: "hr-85",
        name: "HR-85 - Sonipat (North)",
        state: "Haryana",
        description: "North Sonipat: Gohana, Kathura, Munak"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.30, 29.40], [76.30, 29.80], [76.90, 29.80], [76.90, 29.40], [76.30, 29.40]]]
      },
      properties: {
        id: "hr-86",
        name: "HR-86 - Panipat (Rural)",
        state: "Haryana",
        description: "Panipat Rural: Samalkha, Israna, Panipat Rural"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.00, 29.60], [76.00, 30.00], [76.50, 30.00], [76.50, 29.60], [76.00, 29.60]]]
      },
      properties: {
        id: "hr-87",
        name: "HR-87 - Karnal (North)",
        state: "Haryana",
        description: "North Karnal: Indri, Kunjpura, Nilokheri"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.10, 29.40], [76.10, 29.80], [76.60, 29.80], [76.60, 29.40], [76.10, 29.40]]]
      },
      properties: {
        id: "hr-88",
        name: "HR-88 - Kurukshetra (East)",
        state: "Haryana",
        description: "East Kurukshetra: Ladwa, Ismailabad, Shahabad"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.40, 29.60], [76.40, 30.10], [77.00, 30.10], [77.00, 29.60], [76.40, 29.60]]]
      },
      properties: {
        id: "hr-89",
        name: "HR-89 - Ambala (West)",
        state: "Haryana",
        description: "West Ambala: Saha, Barara, Mullana"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[74.80, 29.30], [74.80, 29.80], [75.40, 29.80], [75.40, 29.30], [74.80, 29.30]]]
      },
      properties: {
        id: "hr-90",
        name: "HR-90 - Hisar (North)",
        state: "Haryana",
        description: "North Hisar: Adampur, Balsamand, Narnaud"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.10, 29.20], [75.10, 29.70], [75.70, 29.70], [75.70, 29.20], [75.10, 29.20]]]
      },
      properties: {
        id: "hr-91",
        name: "HR-91 - Fatehabad (East)",
        state: "Haryana",
        description: "East Fatehabad: Ratia, Bhuna, Bhattu Kalan"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.60, 29.40], [75.60, 29.80], [76.20, 29.80], [76.20, 29.40], [75.60, 29.40]]]
      },
      properties: {
        id: "hr-92",
        name: "HR-92 - Jind (South)",
        state: "Haryana",
        description: "South Jind: Julana, Alewa, Safidon"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.00, 28.80], [75.00, 29.30], [75.70, 29.30], [75.70, 28.80], [75.00, 28.80]]]
      },
      properties: {
        id: "hr-93",
        name: "HR-93 - Bhiwani (South)",
        state: "Haryana",
        description: "South Bhiwani: Tosham, Kairu, Bawani Khera"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.80, 28.50], [75.80, 28.90], [76.40, 28.90], [76.40, 28.50], [75.80, 28.50]]]
      },
      properties: {
        id: "hr-94",
        name: "HR-94 - Mahendragarh (South)",
        state: "Haryana",
        description: "South Mahendragarh: Narnaul, Mahendragarh, Singhana"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[74.70, 29.00], [74.70, 29.50], [75.30, 29.50], [75.30, 29.00], [74.70, 29.00]]]
      },
      properties: {
        id: "hr-95",
        name: "HR-95 - Sirsa (East)",
        state: "Haryana",
        description: "East Sirsa: Rania, Kalanwali, Nathusari Chopta"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[75.90, 29.10], [75.90, 29.50], [76.40, 29.50], [76.40, 29.10], [75.90, 29.10]]]
      },
      properties: {
        id: "hr-96",
        name: "HR-96 - Kaithal (East)",
        state: "Haryana",
        description: "East Kaithal: Pundri, Rajound, Cheeka"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.10, 28.90], [76.10, 29.30], [76.60, 29.30], [76.60, 28.90], [76.10, 28.90]]]
      },
      properties: {
        id: "hr-97",
        name: "HR-97 - Sonipat (West)",
        state: "Haryana",
        description: "West Sonipat: Gohana, Kathura, Munak"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.50, 29.20], [76.50, 29.60], [77.00, 29.60], [77.00, 29.20], [76.50, 29.20]]]
      },
      properties: {
        id: "hr-98",
        name: "HR-98 - Panipat (East)",
        state: "Haryana",
        description: "East Panipat: Samalkha, Israna, Panipat Rural"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[76.20, 29.30], [76.20, 29.70], [76.80, 29.70], [76.80, 29.30], [76.20, 29.30]]]
      },
      properties: {
        id: "hr-99",
        name: "HR-99 - Yamunanagar (Rural)",
        state: "Haryana",
        description: "Yamunanagar Rural: Jagadhri, Chhachhrauli, Bilaspur"
      }
    }
  ]
};
