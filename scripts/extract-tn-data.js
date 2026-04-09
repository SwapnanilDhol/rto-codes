#!/usr/bin/env node
/**
 * TNSTA PDF Data Extractor
 * Extracts structured RTO and transport data from the Tamil Nadu State Transport Authority PDF
 *
 * Usage: node scripts/extract-tn-data.js
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const PDF_PATH = path.join(__dirname, "../tmp/tnsta-2023-07-20.pdf");
const OUTPUT_PATH = path.join(__dirname, "../src/data/tnsta-extracted.json");

// Ensure tmp directory exists
const tmpDir = path.join(__dirname, "../tmp");
if (!fs.existsSync(tmpDir)) {
  fs.mkdirSync(tmpDir, { recursive: true });
}

// Extract text from PDF
function extractPdfText(pdfPath) {
  try {
    const text = execSync(`pdftotext "${pdfPath}" - 2>/dev/null`, {
      encoding: "utf-8",
    });
    return text;
  } catch (e) {
    console.error("Failed to extract PDF text:", e.message);
    return null;
  }
}

// Parse zonal offices from text
function parseZonalOffices(text) {
  const zones = [];

  const zonePatterns = [
    /Chennai\s*\(?North/gi,
    /Chennai\s*\(?South/gi,
    /Villupuram/gi,
    /Vellore/gi,
    /Salem/gi,
    /Erode/gi,
    /Coimbatore/gi,
    /Thanjavur/gi,
    /Trichy|Tiruchirapalli/gi,
    /Madurai/gi,
    /Tirunelveli/gi,
    /Virudhunagar/gi,
  ];

  // More detailed parsing based on actual content
  const lines = text.split("\n");

  let currentZone = null;
  let currentRTOs = [];
  let currentUnitOffices = [];
  let currentCheckPosts = [];

  for (const line of lines) {
    const trimmed = line.trim();

    // Zone headers
    const zoneMatch = trimmed.match(/^(.+?)\s+Zone$/i);
    if (zoneMatch) {
      if (currentZone) {
        zones.push({
          name: currentZone,
          rtos: currentRTOs,
          unitOffices: currentUnitOffices,
          checkPosts: currentCheckPosts,
        });
      }
      currentZone = zoneMatch[1];
      currentRTOs = [];
      currentUnitOffices = [];
      currentCheckPosts = [];
      continue;
    }

    // RTO matches
    const rtoMatch = trimmed.match(/^(\d+)\.\s*RTO\s*[-–]?\s*(.+)/i);
    if (rtoMatch) {
      currentRTOs.push(rtoMatch[2].trim());
      continue;
    }

    // Unit office matches
    const uoMatch = trimmed.match(/^U\.O\.\s*[-–]?\s*(\d+)/i);
    if (uoMatch) {
      continue;
    }

    // Check post matches
    const cpMatch = trimmed.match(/C\.P\.\s*[-–]?\s*(\d+)/i);
    if (cpMatch) {
      continue;
    }
  }

  // Push last zone
  if (currentZone) {
    zones.push({
      name: currentZone,
      rtos: currentRTOs,
      unitOffices: currentUnitOffices,
      checkPosts: currentCheckPosts,
    });
  }

  return zones;
}

// Parse RTO office directory (phone numbers section)
function parseRTOOfficeDirectory(text) {
  const offices = [];

  // Match patterns like "RTO, Chennai (North West)" followed by phone numbers
  const rtoPattern = /RTO[,]?\s*(.+?)(?:\n|$)/gi;
  let match;

  while ((match = rtoPattern.exec(text)) !== null) {
    const name = match[1].trim();
    if (name.length > 2 && name.length < 100) {
      offices.push({ name: `RTO, ${name}` });
    }
  }

  return offices;
}

// Parse vehicle registration statistics
function parseVehicleStatistics(text) {
  const stats = {
    totalVehicles: null,
    year: null,
    categories: {},
  };

  // Look for total vehicle numbers
  const totalMatch = text.match(/Total[:\s]+(\d[\d,]+)/gi);
  if (totalMatch) {
    stats.totalVehicles = totalMatch[totalMatch.length - 1].replace(/[^\d]/g, "");
  }

  // Parse permit data by zone
  const permitSection = text.match(/SURRENDER PERMIT ISSUED.*?GRAND TOTAL\s+([\d,\s]+)/is);
  if (permitSection) {
    stats.permitData = permitSection[1]
      .trim()
      .split(/\s+/)
      .filter((n) => n.match(/^\d+$/))
      .map((n) => parseInt(n.replace(/,/g, ""), 10));
  }

  return stats;
}

// Main extraction function
function extractTNData() {
  console.log("Extracting data from TNSTA PDF...");

  if (!fs.existsSync(PDF_PATH)) {
    console.log(
      `PDF not found at ${PDF_PATH}. Downloading...`
    );
    // Download the PDF
    try {
      execSync(
        `curl -s -o "${PDF_PATH}" "https://tnsta.gov.in/pdfpage/pdfpage_tn_4QJezuj_2023_07_20.pdf"`,
        { stdio: "inherit" }
      );
    } catch (e) {
      console.error("Failed to download PDF");
      process.exit(1);
    }
  }

  const text = extractPdfText(PDF_PATH);
  if (!text) {
    console.error("No text extracted from PDF");
    process.exit(1);
  }

  console.log(`Extracted ${text.split("\n").length} lines of text`);

  const data = {
    metadata: {
      source: "tnsta.gov.in",
      url: "https://tnsta.gov.in/pdfpage/pdfpage_tn_4QJezuj_2023_07_20.pdf",
      extractedAt: new Date().toISOString(),
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
    zones: parseZonalOffices(text),
    rtoOfficeDirectory: parseRTOOfficeDirectory(text),
    vehicleStatistics: parseVehicleStatistics(text),
  };

  // Write output
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(data, null, 2));
  console.log(`Data written to ${OUTPUT_PATH}`);

  return data;
}

// Run if executed directly
if (require.main === module) {
  extractTNData();
}

module.exports = { extractTNData, parseZonalOffices, parseRTOOfficeDirectory, parseVehicleStatistics };
