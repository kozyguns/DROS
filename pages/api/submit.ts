import type { NextApiRequest, NextApiResponse } from 'next';
import { google } from "googleapis"; 

type SheetForm = {
    cancel: string;
    dros: string;
    salesrep: string;
    error: string;
    details: string;
    notes: string;
    options: string;
    sheetName: string;
};

// Define an interface for your expected error structure
interface ErrorResponse extends Error {
    response?: {
        status?: number;
        data?: any;
    };
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).send({ message: 'Only POST requests allowed' });
    }

    const body = req.body as SheetForm;

    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets',
            ],
        });

        const sheets = google.sheets({ auth, version: 'v4' });

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: `${body.sheetName}!A1:G`, // Dynamically set sheet name and range
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [body.cancel, body.dros, body.salesrep, body.error, body.details, body.notes, body.options],
                ],
            },
        });

        return res.status(201).json({ data: response.data });
    } catch (e) {
        const error = e as ErrorResponse; // Type assertion

        if (error.response && error.response.status) {
            // Now TypeScript knows `error.response` and `error.response.status` might exist
            const status = error.response.status;
            const message = error.message || 'An unexpected error occurred';
            return res.status(status).send({ message });
        } else {
            // Fallback error handling for when the error does not match the expected structure
            return res.status(500).send({ message: 'An unexpected error occurred' });
        }
    }
}
