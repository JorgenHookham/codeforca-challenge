import csv from "csvtojson";
import fs from "fs";

interface BuildingCodeViolation {
  violation_id: number;
  inspection_id: number;
  violation_category: string;
  violation_date: string;
  violation_date_closed: string;
  violation_type: string;
}

interface HashedViolationCategory {
  count: number;
  first_incident: string;
  last_incident: string;
}

interface HashedViolations {
  [key: string]: HashedViolationCategory
}

async function getDataFromCsv (): Promise<BuildingCodeViolation[]> {
  const csvPath = "./data.csv";
  const csvConverter = csv();

  return await csvConverter
    .fromFile(csvPath)
    .then((json) => { return json; });
}

async function generateHashMap (): Promise<HashedViolations> {
  const dataAsJson = await getDataFromCsv();
  const hashedData: HashedViolations = {};
  for (let i = 0; i < dataAsJson.length; i++) {
    let violation = dataAsJson[i];
    let category = violation.violation_category;
    let date = new Date(violation.violation_date);
    let hashedViolation: HashedViolationCategory;

    if (hashedData.hasOwnProperty(category)) {
      hashedViolation = hashedData[category];
      hashedViolation.count++;
      let first_incident = new Date(hashedViolation.first_incident);
      let last_incident = new Date(hashedViolation.last_incident);
      hashedViolation.first_incident = (first_incident < date) ? first_incident.toString() : date.toString();
      hashedViolation.last_incident = (last_incident > date) ? last_incident.toString() : date.toString();
    } else {
      hashedViolation = {
        count: 1,
        first_incident: date.toString(),
        last_incident: date.toString()
      }
    }
    hashedData[category] = hashedViolation;
  }
  return hashedData;
}

generateHashMap().then((hashedData) => {
  const output = JSON.stringify(hashedData, null, 4);
  fs.writeFile("./hashed-data.json", output, () => {});
  console.log(output);
});