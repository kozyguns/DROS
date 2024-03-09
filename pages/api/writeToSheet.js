import { google } from 'googleapis';

export default async function handler(req, res) {
  if (req.method === 'POST') {
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

    // Assuming your POST request's body contains the data you want to append
    const { range = 'Audits!A:I', values } = req.body; // Default range set to 'Audits!A:I'

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED', // Allows users to enter data as they would in the Google Sheets UI
      insertDataOption: 'INSERT_ROWS', // Inserts new rows for the data being appended
      resource: {
        values,
      },
    });

    res.status(200).json({ success: true, data: response.data });
  } catch (err) {
    console.error('The API returned an error:', err);
    res.status(500).send('Error writing to the Google Sheet');
  }
} else {
  // Respond with method not allowed if the request is not a POST
  res.setHeader('Allow', ['POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
}