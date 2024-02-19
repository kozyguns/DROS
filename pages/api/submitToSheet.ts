// pages/api/submitToSheet.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { submitToGoogleSheets } from '../../services/GoogleSheetsService';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const result = await submitToGoogleSheets(req.body);
    res.status(200).json({ message: 'Success', result });
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    res.status(500).json({ message: 'Error submitting to Google Sheets', error });
  }
}
