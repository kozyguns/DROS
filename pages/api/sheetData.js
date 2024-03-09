import { google } from 'googleapis';
import { SheetRow } from '../types/types';

export default async function handler(req, res) {
  // Extract the 'range' query parameter from the request URL
  // If no range is provided, default to 'List!A:A'
  const range = req.query.range || 'Drops!A:H';

  try {
    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_CLIENT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        },
        scopes: [
            'https://www.googleapis.com/auth/spreadsheets',
        ],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID; // Ensure your .env has this value

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const rows = response.data.values;

    if (rows.length) {
      // Flatten the array of arrays to a simple array of values for easier consumption
      res.status(200).json(rows);
    } else {
      res.status(404).send('No data found');
    }
  } catch (err) {
    console.error('The API returned an error:', err);
    res.status(500).send('Error accessing the Google Sheet');
  }
}
