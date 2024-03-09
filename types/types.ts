// types/types.ts

export type SheetForm = {
    cancel: string;
    dros: string;
    salesrep: string;
    error: string;
    details: string;
    notes: string;
    options: string;
    sheetName: string;
};

export interface SheetRow {
    salesRep: string;
    auditType: string;
    errorLocation: string;
    errorDetails: string;
    // Add more fields as necessary
  }