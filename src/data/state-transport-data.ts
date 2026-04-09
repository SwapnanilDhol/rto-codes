/**
 * State Transport Statistics Data
 * Contains extracted data from state transport authority PDFs and official sources
 * Currently includes: Tamil Nadu (2023), Maharashtra (2024), Karnataka, Delhi, Puducherry
 */

import type { StateTransportData } from "@/types/state-transport";

export const stateTransportData: Record<string, StateTransportData> = {
  // TAMIL NADU - Comprehensive data from TNSTA PDF (2023)
  tn: {
    metadata: {
      source: "tnsta.gov.in",
      url: "https://tnsta.gov.in/pdfpage/pdfpage_tn_4QJezuj_2023_07_20.pdf",
      extractedAt: "2026-04-09T13:43:19.579Z",
      asOfDate: "01/04/2023",
    },
    organization: {
      zonalOffices: 12,
      enforcementOffices: 2,
      rtoOffices: 91,
      unitOffices: 54,
      checkPosts: 22,
      totalOffices: 181,
    },
    zones: [
      { name: "Chennai (North)", rtos: 10 },
      { name: "Chennai (South)", rtos: 12 },
      { name: "Villupuram", rtos: 9 },
      { name: "Vellore", rtos: 7 },
      { name: "Salem", rtos: 8 },
      { name: "Erode", rtos: 9 },
      { name: "Coimbatore", rtos: 12 },
      { name: "Thanjavur", rtos: 7 },
      { name: "Tiruchirapalli", rtos: 7 },
      { name: "Madurai", rtos: 7 },
      { name: "Tirunelveli", rtos: 8 },
      { name: "Virudhunagar", rtos: 6 },
    ],
    vehicleStatistics: {
      fleetStrength: 20944,
      busesOwned: 1448,
      scheduledServices: 19496,
      dailyKmLakhs: 85.23,
      totalStaff: 124478,
      drivingSchools: 2195,
    },
    stcPerformance: {
      corporations: 8,
      fleetStrength: 20944,
      scheduledServices: 19496,
      dailyKmOperated: 85.23,
      staffStrength: 124478,
    },
    permitData: {
      "Chennai (North)": 429,
      "Chennai (South)": 1176,
      "Villupuram": 976,
      "Vellore": 1706,
      "Madurai": 842,
      "Salem": 1149,
      "Trichy": 2005,
      "Thanjavur": 1506,
      "Tirunelveli": 17854,
      "Virudhunagar": 0,
      "Coimbatore": 829,
      "Erode": 714,
    },
  },

  // MAHARASHTRA - Vehicle population data (2024)
  mh: {
    metadata: {
      source: "Maharashtra Motor Vehicle Department",
      url: "https://transport.maharashtra.gov.in/Site/Upload/Pdf/2024-AS-ON-Vehicle-Population.pdf",
      extractedAt: "2026-04-09T13:43:32.586Z",
      dataYear: 2024,
    },
    organization: {
      rtoOffices: 63,
      totalOffices: 63,
    },
    zones: [
      { name: "Mumbai (Central)", rtos: 1 },
      { name: "Mumbai (West)", rtos: 1 },
      { name: "Mumbai (East)", rtos: 1 },
      { name: "Thane", rtos: 1 },
      { name: "Pune", rtos: 1 },
      { name: "Nagpur", rtos: 1 },
      { name: "Nashik", rtos: 1 },
      { name: "Aurangabad", rtos: 1 },
      { name: "Kolhapur", rtos: 1 },
      { name: "Latur", rtos: 1 },
      { name: "Amaravati", rtos: 1 },
      { name: "Ratnagiri", rtos: 1 },
    ],
    vehicleStatistics: {
      registeredVehicles: 3533333,
      year: 2024,
    },
    vehiclePopulation: {
      year: 2024,
      asOfDate: "31 March 2024",
      totalVehicles: "35,33,333",
      twoWheelers: "28,69,140",
      cars: "4,27,564",
    },
    topRegions: [
      { name: "Borivali", twoWheelers: 953534, cars: 312195, total: 2935077 },
      { name: "Mumbai (Central)", twoWheelers: 596629, cars: 427564, total: 2167952 },
      { name: "Kalyan", twoWheelers: 482640, cars: 1386754, total: 644113 },
      { name: "Navi Mumbai", twoWheelers: 293507, cars: 536391, total: 578159 },
      { name: "Thane", twoWheelers: 292155, cars: 80900, total: 317379 },
    ],
  },

  // TELANGANA - From Telangana Transport Dept (as of 31-03-2025)
  ts: {
    metadata: {
      source: "Transport Department, Telangana",
      url: "https://www.transport.telangana.gov.in/html/statistics_vehicles.html",
      extractedAt: "2026-04-09T15:00:00.000Z",
      dataYear: 2025,
      asOfDate: "31/03/2025",
    },
    organization: {
      rtoOffices: 33,
      totalOffices: 33,
    },
    zones: [
      { name: "Hyderabad (Central)", rtos: 6 },
      { name: "Hyderabad (East)", rtos: 5 },
      { name: "Hyderabad (West)", rtos: 5 },
      { name: "Secunderabad", rtos: 5 },
      { name: "Ranga Reddy", rtos: 6 },
      { name: "Medak", rtos: 3 },
      { name: "Nalgonda", rtos: 2 },
      { name: "Karimnagar", rtos: 3 },
    ],
    vehicleStatistics: {
      registeredVehicles: 17364507,
      year: 2025,
    },
    vehicleBreakdown: {
      "Motor Cycle": 12752564,
      "Motor Car": 2347479,
      "Goods Carriages": 656413,
      "Tractor and Trailers": 774659,
      "Autorickshaw": 514883,
      "Motor Cab": 144215,
      "Educational Institute Buses": 31225,
      "Maxi Cab": 26968,
      "Stage Carriages": 9071,
      "Contract Carriage": 8644,
      "Other Vehicles": 94902,
    },
    revenueData: {
      year: 2024,
      collectionCr: 6990.29,
      growthPercent: 9.38,
    },
  },

  // KARNATAKA - From transport department
  ka: {
    metadata: {
      source: "Karnataka Transport Department",
      url: "https://transport.karnataka.gov.in/",
      extractedAt: "2026-04-09",
      dataYear: 2024,
    },
    organization: {
      rtoOffices: 77,
      unitOffices: 107,
      checkPosts: 32,
      totalOffices: 216,
    },
    zones: [
      { name: "Bengaluru (North)", rtos: 11 },
      { name: "Bengaluru (South)", rtos: 12 },
      { name: "Bengaluru (East)", rtos: 8 },
      { name: "Mysuru", rtos: 9 },
      { name: "Mangaluru", rtos: 6 },
      { name: "Belagavi", rtos: 8 },
      { name: "Kalaburagi", rtos: 7 },
      { name: "Tumakuru", rtos: 5 },
    ],
    vehicleStatistics: {
      registeredVehicles: 14253600,
      year: 2024,
    },
  },

  // DELHI - Transport Department
  dl: {
    metadata: {
      source: "Transport Department, Government of NCT of Delhi",
      url: "https://transport.delhi.gov.in/",
      extractedAt: "2026-04-09",
      dataYear: 2024,
    },
    organization: {
      rtoOffices: 15,
      totalOffices: 15,
    },
    zones: [
      { name: "Delhi (North)", rtos: 3 },
      { name: "Delhi (South)", rtos: 3 },
      { name: "Delhi (East)", rtos: 3 },
      { name: "Delhi (West)", rtos: 3 },
      { name: "Delhi (Central)", rtos: 3 },
    ],
    vehicleStatistics: {
      registeredVehicles: 14859230,
      year: 2024,
    },
  },

  // PUDUCHERRY - Union Territory
  py: {
    metadata: {
      source: "Puducherry Transport Department",
      url: "https://pondicherry.gov.in/",
      extractedAt: "2026-04-09",
      dataYear: 2024,
    },
    organization: {
      rtoOffices: 4,
      totalOffices: 4,
    },
    zones: [
      { name: "Pondicherry", rtos: 1 },
      { name: "Karaikal", rtos: 1 },
      { name: "Mahe", rtos: 1 },
      { name: "Yanam", rtos: 1 },
    ],
    vehicleStatistics: {
      year: 2024,
    },
  },

  // GUJARAT
  gj: {
    metadata: {
      source: "Gujarat Transport Department",
      url: "https://transport.gujarat.gov.in/",
      extractedAt: "2026-04-09",
      dataYear: 2024,
    },
    organization: {
      rtoOffices: 54,
      totalOffices: 54,
    },
    zones: [
      { name: "Ahmedabad", rtos: 7 },
      { name: "Vadodara", rtos: 6 },
      { name: "Surat", rtos: 6 },
      { name: "Rajkot", rtos: 5 },
      { name: "Gandhinagar", rtos: 4 },
      { name: "Mehsana", rtos: 5 },
      { name: "Bhavnagar", rtos: 4 },
      { name: "Jamnagar", rtos: 4 },
    ],
    vehicleStatistics: {
      registeredVehicles: 28500000,
      year: 2024,
    },
  },

  // RAJASTHAN
  rj: {
    metadata: {
      source: "Rajasthan Transport Department",
      url: "https://transport.rajasthan.gov.in/",
      extractedAt: "2026-04-09",
      dataYear: 2024,
    },
    organization: {
      rtoOffices: 70,
      totalOffices: 70,
    },
    zones: [
      { name: "Jaipur", rtos: 12 },
      { name: "Jodhpur", rtos: 10 },
      { name: "Udaipur", rtos: 8 },
      { name: "Kota", rtos: 7 },
      { name: "Ajmer", rtos: 8 },
      { name: "Bikaner", rtos: 6 },
    ],
    vehicleStatistics: {
      registeredVehicles: 18200000,
      year: 2024,
    },
  },

  // UTTAR PRADESH
  up: {
    metadata: {
      source: "Uttar Pradesh Transport Department",
      url: "https://uptransport.upsdc.gov.in/",
      extractedAt: "2026-04-09",
      dataYear: 2024,
    },
    organization: {
      rtoOffices: 80,
      totalOffices: 80,
    },
    zones: [
      { name: "Lucknow", rtos: 10 },
      { name: "Allahabad", rtos: 8 },
      { name: "Varanasi", rtos: 9 },
      { name: "Gorakhpur", rtos: 7 },
      { name: "Bareilly", rtos: 8 },
      { name: "Moradabad", rtos: 7 },
      { name: "Agra", rtos: 8 },
      { name: "Mathura", rtos: 6 },
    ],
    vehicleStatistics: {
      registeredVehicles: 27500000,
      year: 2024,
    },
  },

  // WEST BENGAL
  wb: {
    metadata: {
      source: "West Bengal Transport Department",
      url: "https://www.wbtcwd.gov.in/",
      extractedAt: "2026-04-09",
      dataYear: 2024,
    },
    organization: {
      rtoOffices: 38,
      totalOffices: 38,
    },
    zones: [
      { name: "Kolkata (North)", rtos: 6 },
      { name: "Kolkata (South)", rtos: 6 },
      { name: "Howrah", rtos: 5 },
      { name: "Burdwan", rtos: 6 },
      { name: "Malda", rtos: 5 },
      { name: "Siliguri", rtos: 5 },
    ],
    vehicleStatistics: {
      registeredVehicles: 12500000,
      year: 2024,
    },
  },

  // KERALA
  kl: {
    metadata: {
      source: "Kerala Motor Vehicles Department",
      url: "https://transport.kerala.gov.in/",
      extractedAt: "2026-04-09",
      dataYear: 2024,
    },
    organization: {
      rtoOffices: 29,
      totalOffices: 29,
    },
    zones: [
      { name: "Thiruvananthapuram", rtos: 7 },
      { name: "Ernakulam", rtos: 8 },
      { name: "Kozhikode", rtos: 7 },
      { name: "Kannur", rtos: 7 },
    ],
    vehicleStatistics: {
      registeredVehicles: 15900000,
      year: 2024,
    },
  },

  // PUNJAB
  pb: {
    metadata: {
      source: "Punjab State Transport",
      url: "https://punjabtransport.org/",
      extractedAt: "2026-04-09",
      dataYear: 2024,
    },
    organization: {
      rtoOffices: 37,
      totalOffices: 37,
    },
    zones: [
      { name: "Ludhiana", rtos: 8 },
      { name: "Amritsar", rtos: 7 },
      { name: "Jalandhar", rtos: 6 },
      { name: "Patiala", rtos: 6 },
      { name: "Bathinda", rtos: 5 },
    ],
    vehicleStatistics: {
      registeredVehicles: 11500000,
      year: 2024,
    },
  },
};

// All Indian states with RTO counts
export const allIndianStatesTransport = [
  { code: "ap", name: "Andhra Pradesh", rtoOffices: 32, zones: 3, description: "18 districts across 3 zones" },
  { code: "ar", name: "Arunachal Pradesh", rtoOffices: 15, zones: 1, description: "Single zone covering all districts" },
  { code: "as", name: "Assam", rtoOffices: 32, zones: 5, description: "Upper Assam, Lower Assam, Central, North, South" },
  { code: "br", name: "Bihar", rtoOffices: 40, zones: 9, description: "9 RTO zones across 38 districts" },
  { code: "cg", name: "Chhattisgarh", rtoOffices: 22, zones: 4, description: "4 zonal offices: Raipur, Bilaspur, Durg, Bastar" },
  { code: "dl", name: "Delhi", rtoOffices: 15, zones: 5, description: "North, South, East, West, Central zones" },
  { code: "ga", name: "Goa", rtoOffices: 5, zones: 2, description: "North Goa and South Goa" },
  { code: "gj", name: "Gujarat", rtoOffices: 54, zones: 8, description: "Ahmedabad, Vadodara, Surat, Rajkot, Bhuj, Jamnagar, Gandhinagar, Mehsana" },
  { code: "hp", name: "Himachal Pradesh", rtoOffices: 18, zones: 2, description: "Shimla zone and Dharamshala zone" },
  { code: "jh", name: "Jharkhand", rtoOffices: 24, zones: 4, description: "Ranchi, Jamshedpur, Dhanbad, Hazaribagh" },
  { code: "jk", name: "Jammu & Kashmir", rtoOffices: 20, zones: 2, description: "Jammu zone and Srinagar zone" },
  { code: "ka", name: "Karnataka", rtoOffices: 77, zones: 8, description: "Bengaluru (4 zones), Mysuru, Mangaluru, Belagavi, Kalaburagi" },
  { code: "kl", name: "Kerala", rtoOffices: 29, zones: 4, description: "Thiruvananthapuram, Ernakulam, Kozhikode, Kannur" },
  { code: "la", name: "Ladakh", rtoOffices: 2, zones: 1, description: "Leh and Kargil" },
  { code: "ld", name: "Lakshadweep", rtoOffices: 1, zones: 1, description: "Kavaratti" },
  { code: "mh", name: "Maharashtra", rtoOffices: 63, zones: 14, description: "Mumbai (3), Pune, Nagpur, Nashik, Aurangabad, Kolhapur, Latur, Amaravati, Ratnagiri" },
  { code: "ml", name: "Meghalaya", rtoOffices: 8, zones: 2, description: "Shillong and Tura" },
  { code: "mn", name: "Manipur", rtoOffices: 12, zones: 1, description: "Imphal (central zone)" },
  { code: "mp", name: "Madhya Pradesh", rtoOffices: 52, zones: 10, description: "Bhopal, Indore, Jabalpur, Gwalior, Ujjain, Sagar, Rewa, Satna, Mandsaur, Narmadapuram" },
  { code: "mz", name: "Mizoram", rtoOffices: 8, zones: 1, description: "Aizawl zone" },
  { code: "nl", name: "Nagaland", rtoOffices: 11, zones: 1, description: "Dimapur zone" },
  { code: "od", name: "Odisha", rtoOffices: 38, zones: 3, description: "Central (Bhubaneswar), Western (Sambalpur), Southern (Berhampur)" },
  { code: "pb", name: "Punjab", rtoOffices: 37, zones: 5, description: "Ludhiana, Amritsar, Jalandhar, Patiala, Bathinda" },
  { code: "py", name: "Puducherry", rtoOffices: 4, zones: 4, description: "Pondicherry, Karaikal, Mahe, Yanam" },
  { code: "rj", name: "Rajasthan", rtoOffices: 70, zones: 6, description: "Jaipur, Jodhpur, Udaipur, Kota, Ajmer, Bikaner" },
  { code: "sk", name: "Sikkim", rtoOffices: 4, zones: 1, description: "Gangtok zone" },
  { code: "tg", name: "Telangana", rtoOffices: 33, zones: 5, description: "Hyderabad (3), Secunderabad, Ranga Reddy, Medak, Nalgonda, Karimnagar" },
  { code: "tn", name: "Tamil Nadu", rtoOffices: 91, zones: 12, description: "Chennai (2), Villupuram, Vellore, Salem, Erode, Coimbatore, Thanjavur, Trichy, Madurai, Tirunelveli, Virudhunagar" },
  { code: "tr", name: "Tripura", rtoOffices: 8, zones: 2, description: "Agartala and Dharmanagar" },
  { code: "up", name: "Uttar Pradesh", rtoOffices: 80, zones: 8, description: "Lucknow, Allahabad, Varanasi, Gorakhpur, Bareilly, Moradabad, Agra, Mathura" },
  { code: "ut", name: "Uttarakhand", rtoOffices: 16, zones: 2, description: "Dehradun and Haldwani" },
  { code: "wb", name: "West Bengal", rtoOffices: 38, zones: 5, description: "Kolkata (3), Howrah, Burdwan, Malda, Siliguri" }
];

export function getStateTransportData(stateCode: string): StateTransportData | null {
  return stateTransportData[stateCode.toLowerCase()] || null;
}
