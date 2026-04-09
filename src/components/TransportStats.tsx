"use client";

import { stateTransportData } from "@/data/state-transport-data";
import { getStateSlug } from "@/lib/state-content";

interface TransportStatsProps {
  stateCode: string;
  stateName: string;
}

function formatNumber(num?: number): string {
  if (!num) return "N/A";
  return num.toLocaleString("en-IN");
}

function formatLargeNumber(num?: number): string {
  if (!num) return "N/A";
  if (num >= 10000000) return `${(num / 10000000).toFixed(2)} Cr`;
  if (num >= 100000) return `${(num / 100000).toFixed(2)} L`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)} K`;
  return num.toLocaleString("en-IN");
}

export default function TransportStats({ stateCode, stateName }: TransportStatsProps) {
  const data = stateTransportData[stateCode.toLowerCase()];

  if (!data) {
    return null;
  }

  const { organization, zones, vehicleStatistics, stcPerformance, permitData, vehicleBreakdown, revenueData } = data;

  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-2">
      {/* Organization Overview */}
      <div className="rounded-[28px] border border-emerald-200/80 bg-emerald-50/60 p-7 dark:border-emerald-400/20 dark:bg-emerald-400/8">
        <h3 className="text-xl font-semibold tracking-[-0.03em] text-emerald-700 dark:text-emerald-300">
          Transport Department Structure
        </h3>
        <p className="mt-2 text-sm text-emerald-600/80 dark:text-emerald-400/70">
          {data.metadata.source} · Data: {data.metadata.dataYear || data.metadata.asOfDate || "N/A"}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {organization.zonalOffices && (
            <div className="rounded-[18px] border border-emerald-200/60 bg-white/70 p-4 dark:border-emerald-400/20 dark:bg-emerald-950/30">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-400">
                Zonal Offices
              </p>
              <p className="mt-1 text-xl font-semibold tracking-[-0.02em] text-emerald-700 dark:text-emerald-300">
                {organization.zonalOffices}
              </p>
            </div>
          )}
          <div className="rounded-[18px] border border-emerald-200/60 bg-white/70 p-4 dark:border-emerald-400/20 dark:bg-emerald-950/30">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-400">
              RTO Offices
            </p>
            <p className="mt-1 text-xl font-semibold tracking-[-0.02em] text-emerald-700 dark:text-emerald-300">
              {organization.rtoOffices}
            </p>
          </div>
          {organization.unitOffices && (
            <div className="rounded-[18px] border border-emerald-200/60 bg-white/70 p-4 dark:border-emerald-400/20 dark:bg-emerald-950/30">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-400">
                Unit Offices
              </p>
              <p className="mt-1 text-xl font-semibold tracking-[-0.02em] text-emerald-700 dark:text-emerald-300">
                {organization.unitOffices}
              </p>
            </div>
          )}
          {organization.checkPosts && (
            <div className="rounded-[18px] border border-emerald-200/60 bg-white/70 p-4 dark:border-emerald-400/20 dark:bg-emerald-950/30">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-400">
                Check Posts
              </p>
              <p className="mt-1 text-xl font-semibold tracking-[-0.02em] text-emerald-700 dark:text-emerald-300">
                {organization.checkPosts}
              </p>
            </div>
          )}
          <div className="rounded-[18px] border border-emerald-200/60 bg-white/70 p-4 dark:border-emerald-400/20 dark:bg-emerald-950/30">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-400">
              Total Offices
            </p>
            <p className="mt-1 text-xl font-semibold tracking-[-0.02em] text-emerald-700 dark:text-emerald-300">
              {organization.totalOffices}
            </p>
          </div>
        </div>
      </div>

      {/* Zonal Breakdown */}
      {zones && zones.length > 0 && (
        <div className="rounded-[28px] border border-violet-200/80 bg-violet-50/60 p-7 dark:border-violet-400/20 dark:bg-violet-400/8">
          <h3 className="text-xl font-semibold tracking-[-0.03em] text-violet-700 dark:text-violet-300">
            RTO Distribution by Zone
          </h3>
          <p className="mt-2 text-sm text-violet-600/80 dark:text-violet-400/70">
            {zones.length} zones · {organization.rtoOffices} total RTOs
          </p>

          <div className="mt-4 max-h-[280px] overflow-y-auto">
            <div className="grid gap-2">
              {zones.slice(0, 12).map((zone) => (
                <div
                  key={zone.name}
                  className="flex items-center justify-between rounded-[14px] border border-violet-200/50 bg-white/60 px-3 py-2 dark:border-violet-400/20 dark:bg-violet-950/30"
                >
                  <span className="text-sm font-medium text-violet-700 dark:text-violet-300">
                    {zone.name}
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="rounded-full bg-violet-100 px-2 py-0.5 text-xs font-semibold text-violet-700 dark:bg-violet-900/50 dark:text-violet-300">
                      {zone.rtos} RTOs
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Vehicle Statistics */}
      {vehicleStatistics && (
        <div className="rounded-[28px] border border-blue-200/80 bg-blue-50/60 p-7 dark:border-blue-400/20 dark:bg-blue-400/8">
          <h3 className="text-xl font-semibold tracking-[-0.03em] text-blue-700 dark:text-blue-300">
            Vehicle & Fleet Statistics
          </h3>
          <p className="mt-2 text-sm text-blue-600/80 dark:text-blue-400/70">
            {vehicleStatistics.year ? `FY ${vehicleStatistics.year}` : "Latest available data"}
          </p>

          <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {vehicleStatistics.registeredVehicles && (
              <div className="rounded-[18px] border border-blue-200/60 bg-white/70 p-4 dark:border-blue-400/20 dark:bg-blue-950/30">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-400">
                  Registered Vehicles
                </p>
                <p className="mt-1 text-lg font-semibold tracking-[-0.02em] text-blue-700 dark:text-blue-300">
                  {formatLargeNumber(vehicleStatistics.registeredVehicles)}
                </p>
              </div>
            )}
            {vehicleStatistics.fleetStrength && (
              <div className="rounded-[18px] border border-blue-200/60 bg-white/70 p-4 dark:border-blue-400/20 dark:bg-blue-950/30">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-400">
                  Fleet Strength
                </p>
                <p className="mt-1 text-lg font-semibold tracking-[-0.02em] text-blue-700 dark:text-blue-300">
                  {formatNumber(vehicleStatistics.fleetStrength)}
                </p>
              </div>
            )}
            {vehicleStatistics.drivingSchools && (
              <div className="rounded-[18px] border border-blue-200/60 bg-white/70 p-4 dark:border-blue-400/20 dark:bg-blue-950/30">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-400">
                  Driving Schools
                </p>
                <p className="mt-1 text-lg font-semibold tracking-[-0.02em] text-blue-700 dark:text-blue-300">
                  {formatNumber(vehicleStatistics.drivingSchools)}
                </p>
              </div>
            )}
            {vehicleStatistics.scheduledServices && (
              <div className="rounded-[18px] border border-blue-200/60 bg-white/70 p-4 dark:border-blue-400/20 dark:bg-blue-950/30">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-400">
                  Scheduled Services
                </p>
                <p className="mt-1 text-lg font-semibold tracking-[-0.02em] text-blue-700 dark:text-blue-300">
                  {formatNumber(vehicleStatistics.scheduledServices)}
                </p>
              </div>
            )}
            {vehicleStatistics.dailyKmLakhs && (
              <div className="rounded-[18px] border border-blue-200/60 bg-white/70 p-4 dark:border-blue-400/20 dark:bg-blue-950/30">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-400">
                  Daily KM Operated
                </p>
                <p className="mt-1 text-lg font-semibold tracking-[-0.02em] text-blue-700 dark:text-blue-300">
                  {vehicleStatistics.dailyKmLakhs} L
                </p>
              </div>
            )}
            {vehicleStatistics.totalStaff && (
              <div className="rounded-[18px] border border-blue-200/60 bg-white/70 p-4 dark:border-blue-400/20 dark:bg-blue-950/30">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-400">
                  Total Staff
                </p>
                <p className="mt-1 text-lg font-semibold tracking-[-0.02em] text-blue-700 dark:text-blue-300">
                  {formatNumber(vehicleStatistics.totalStaff)}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* STC Performance */}
      {stcPerformance && (
        <div className="rounded-[28px] border border-orange-200/80 bg-orange-50/60 p-7 dark:border-orange-400/20 dark:bg-orange-400/8">
          <h3 className="text-xl font-semibold tracking-[-0.03em] text-orange-700 dark:text-orange-300">
            State Transport Corporation Performance
          </h3>
          <p className="mt-2 text-sm text-orange-600/80 dark:text-orange-400/70">
            {stcPerformance.corporations} corporations · {stcPerformance.fleetStrength.toLocaleString("en-IN")} buses
          </p>

          <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-[18px] border border-orange-200/60 bg-white/70 p-4 dark:border-orange-400/20 dark:bg-orange-950/30">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-600 dark:text-orange-400">
                Corporations
              </p>
              <p className="mt-1 text-xl font-semibold tracking-[-0.02em] text-orange-700 dark:text-orange-300">
                {stcPerformance.corporations}
              </p>
            </div>
            <div className="rounded-[18px] border border-orange-200/60 bg-white/70 p-4 dark:border-orange-400/20 dark:bg-orange-950/30">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-600 dark:text-orange-400">
                Fleet
              </p>
              <p className="mt-1 text-xl font-semibold tracking-[-0.02em] text-orange-700 dark:text-orange-300">
                {formatLargeNumber(stcPerformance.fleetStrength)}
              </p>
            </div>
            <div className="rounded-[18px] border border-orange-200/60 bg-white/70 p-4 dark:border-orange-400/20 dark:bg-orange-950/30">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-600 dark:text-orange-400">
                Daily Services
              </p>
              <p className="mt-1 text-xl font-semibold tracking-[-0.02em] text-orange-700 dark:text-orange-300">
                {formatLargeNumber(stcPerformance.scheduledServices)}
              </p>
            </div>
            <div className="rounded-[18px] border border-orange-200/60 bg-white/70 p-4 dark:border-orange-400/20 dark:bg-orange-950/30">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-600 dark:text-orange-400">
                Staff
              </p>
              <p className="mt-1 text-xl font-semibold tracking-[-0.02em] text-orange-700 dark:text-orange-300">
                {formatLargeNumber(stcPerformance.staffStrength)}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Permit Data by Zone */}
      {permitData && Object.keys(permitData).length > 0 && (
        <div className="rounded-[28px] border border-rose-200/80 bg-rose-50/60 p-7 dark:border-rose-400/20 dark:bg-rose-400/8 lg:col-span-2">
          <h3 className="text-xl font-semibold tracking-[-0.03em] text-rose-700 dark:text-rose-300">
            Permit Distribution by Zone
          </h3>
          <p className="mt-2 text-sm text-rose-600/80 dark:text-rose-400/70">
            Total permits issued across zones
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(permitData)
              .filter(([, count]) => count > 0)
              .sort(([, a], [, b]) => b - a)
              .map(([zone, count]) => (
                <div
                  key={zone}
                  className="flex items-center justify-between rounded-[16px] border border-rose-200/50 bg-white/70 px-4 py-3 dark:border-rose-400/20 dark:bg-rose-950/30"
                >
                  <span className="text-sm font-medium text-rose-700 dark:text-rose-300">
                    {zone}
                  </span>
                  <span className="rounded-full bg-rose-100 px-3 py-1 text-sm font-semibold text-rose-700 dark:bg-rose-900/50 dark:text-rose-300">
                    {formatNumber(count)}
                  </span>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Vehicle Breakdown */}
      {vehicleBreakdown && Object.keys(vehicleBreakdown).length > 0 && (
        <div className="rounded-[28px] border border-cyan-200/80 bg-cyan-50/60 p-7 dark:border-cyan-400/20 dark:bg-cyan-400/8 lg:col-span-2">
          <h3 className="text-xl font-semibold tracking-[-0.03em] text-cyan-700 dark:text-cyan-300">
            Vehicle Category Breakdown
          </h3>
          <p className="mt-2 text-sm text-cyan-600/80 dark:text-cyan-400/70">
            As of {data.metadata.asOfDate || data.metadata.dataYear} · Total: {formatLargeNumber(data.vehicleStatistics?.registeredVehicles)}
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(vehicleBreakdown)
              .sort(([, a], [, b]) => b - a)
              .map(([category, count]) => (
                <div
                  key={category}
                  className="flex items-center justify-between rounded-[16px] border border-cyan-200/50 bg-white/70 px-4 py-3 dark:border-cyan-400/20 dark:bg-cyan-950/30"
                >
                  <span className="text-sm font-medium text-cyan-700 dark:text-cyan-300">
                    {category}
                  </span>
                  <span className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-semibold text-cyan-700 dark:bg-cyan-900/50 dark:text-cyan-300">
                    {formatNumber(count)}
                  </span>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Revenue Data */}
      {revenueData && (
        <div className="rounded-[28px] border border-amber-200/80 bg-amber-50/60 p-7 dark:border-amber-400/20 dark:bg-amber-400/8">
          <h3 className="text-xl font-semibold tracking-[-0.03em] text-amber-700 dark:text-amber-300">
            Transport Revenue Collection
          </h3>
          <p className="mt-2 text-sm text-amber-600/80 dark:text-amber-400/70">
            FY {revenueData.year}
          </p>

          <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="rounded-[18px] border border-amber-200/60 bg-white/70 p-4 dark:border-amber-400/20 dark:bg-amber-950/30">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-600 dark:text-amber-400">
                Total Collection
              </p>
              <p className="mt-1 text-xl font-semibold tracking-[-0.02em] text-amber-700 dark:text-amber-300">
                ₹{revenueData.collectionCr.toLocaleString("en-IN")} Cr
              </p>
            </div>
            <div className="rounded-[18px] border border-amber-200/60 bg-white/70 p-4 dark:border-amber-400/20 dark:bg-amber-950/30">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-600 dark:text-amber-400">
                YoY Growth
              </p>
              <p className="mt-1 text-xl font-semibold tracking-[-0.02em] text-amber-700 dark:text-amber-300">
                {revenueData.growthPercent > 0 ? "+" : ""}{revenueData.growthPercent}%
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
