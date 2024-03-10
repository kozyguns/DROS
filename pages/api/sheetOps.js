// pages/api/sheetOps.js
import { google } from 'googleapis';

export default async function handler(req, res) {
  const { operation, sheetName, values, range } = req.body || req.query;

  const sheetIdMap = {
    DEFAULT: process.env.GOOGLE_SHEET_ID,
    AUDITS: process.env.GOOGLE_SHEET_ID_AUDITS,
    DEPOSITS: process.env.GOOGLE_SHEET_ID_DEPOSITS,
    ORDERS: process.env.GOOGLE_SHEET_ID_ORDERS,
    GUIDE: process.env.GOOGLE_SHEET_ID_GUIDE,
  };

  const sheetId = sheetIdMap[sheetName];

  if (!sheetId) {
    return res.status(400).json({ error: 'Invalid or missing sheet name' });
  }

  if (!range) {
    return res.status(400).json({ error: 'Range is required' });
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });

  if (operation === 'append') {
    try {
      const response = await sheets.spreadsheets.values.append({
        spreadsheetId: sheetId,
        range, // Use the range from the request
        valueInputOption: 'USER_ENTERED',
        resource: { values: values },
      });
      res.status(200).json({ success: true, data: response.data });
    } catch (error) {
      console.error('Error appending to sheet:', error);
      res.status(500).json({ error: 'Failed to append data to the sheet' });
    }
  } else if (operation === 'read') {
    try {
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: sheetId,
        range, // Use the range from the request
      });
      res.status(200).json({ success: true, data: response.data.values });
    } catch (error) {
      console.error('Error reading from sheet:', error);
      res.status(500).json({ error: 'Failed to read data from the sheet' });
    }
  } else {
    res.status(400).json({ error: 'Unsupported operation' });
  }
}
