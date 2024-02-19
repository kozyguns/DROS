import {google} from "googleapis";
const { GoogleSpreadsheet } = require('google-spreadsheet');

export type SheetForm = {
    name: string
    email: string
    phone: string
    message: string
    whateva: string
    options: string
    fruit: string
    selectedDynamicOption: any []
}

export async function submitToGoogleSheets(values: SheetForm) {
    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_CLIENT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY
        },
        scopes: [
            'https://www.googleapis.com/auth/drive',
            'https://www.googleapis.com/auth/drive.file',
            'https://www.googleapis.com/auth/spreadsheets'
        ]
    })

    const sheets = google.sheets({
        auth,
        version: 'v4'
    });

    return await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: 'Save!A1:H',
        valueInputOption: 'FORM_SUBMITTED',
        requestBody: {
            values: [
                [values.name, values.email, values.phone, values.message, values.whateva, values.options, values.fruit, values.selectedDynamicOption]
            ]
        }
    });
}


interface Row {
  A: any; // Replace with the actual type of the 'A' property
  // Add other properties as needed
}

export async function getDropdownOptions() {
  // Initialize the sheet - doc ID is the long id in the sheets URL
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

  // Initialize Auth
  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  });

  await doc.loadInfo(); // loads document properties and worksheets

  // Get the sheet by name
  const sheetName = "Bomb"; // Replace with your actual sheet name
  const sheet = doc.sheetsByTitle[sheetName];

  if (!sheet) {
    console.error("Sheet not found: " + sheetName);
    return []; // or handle this situation as appropriate
  }

  // Fetch rows from the sheet
  const rows = await sheet.getRows(); // This fetches all rows, adjust if needed

  // Specify the column name you want to reference
  const columnName = 'A'; // Replace 'A' with the actual column name/header

  // Extract values from the specified column
  const dropdownOptions = rows.map((row: Row) => row.A); // Replace A with the column containing dropdown options

  return dropdownOptions;
}
