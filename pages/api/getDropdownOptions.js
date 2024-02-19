// pages/api/dropdownOptions.js
import { getDropdownOptions } from "../../services/GoogleSheetsService";

export default async function handler(req, res) {
  try {
    const options = await getDropdownOptions();
    res.status(200).json(options);
  } catch (error) {
    console.error('Failed to fetch dropdown options', error);
    res.status(500).json({ error: 'Failed to fetch dropdown options' });
  }
}