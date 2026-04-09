/**
 * Types for State Transport Authority data extracted from official PDFs
 */

export interface TransportMetadata {
  source: string;
  url: string;
  extractedAt: string;
  asOfDate?: string;
  dataYear?: number;
}

export interface TransportOrganization {
  zonalOffices?: number;
  enforcementOffices?: number;
  rtoOffices: number;
  unitOffices?: number;
  checkPosts?: number;
  totalOffices: number;
}

export interface TransportZone {
  name: string;
  rtos: number;
  unitOffices?: number;
  checkPosts?: number;
}

export interface VehicleStatistics {
  fleetStrength?: number;
  busesOwned?: number;
  scheduledServices?: number;
  dailyKmLakhs?: number;
  totalStaff?: number;
  drivingSchools?: number;
  registeredVehicles?: number;
  year?: number;
  type?: string;
}

export interface STCPerformance {
  corporations: number;
  fleetStrength: number;
  scheduledServices: number;
  dailyKmOperated: number;
  staffStrength: number;
}

export interface PermitData {
  [zone: string]: number;
}

export interface VehiclePopulation {
  year: number;
  asOfDate: string;
  regions?: string[];
  totalVehicles: string;
  twoWheelers: string;
  cars: string;
}

export interface TopRegion {
  name: string;
  twoWheelers: number;
  cars: number;
  total: number;
}

export interface StateTransportData {
  metadata: TransportMetadata;
  organization: TransportOrganization;
  zones?: TransportZone[];
  vehicleStatistics?: VehicleStatistics;
  stcPerformance?: STCPerformance;
  permitData?: PermitData;
  vehiclePopulation?: VehiclePopulation;
  topRegions?: TopRegion[];
  rtoDirectory?: Array<{ name: string; email: string | null }>;
}
