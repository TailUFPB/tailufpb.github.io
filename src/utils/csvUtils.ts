import Papa from 'papaparse';
import { ParseResult } from 'papaparse';  

export const parseCsv = async <T>(filePath: string): Promise<T[] | null> => {
  try {
    const response = await fetch(filePath);
    const reader = response.body?.getReader(); 
    const result = await reader?.read(); 
    const decoder = new TextDecoder('utf-8');
    const csv = decoder.decode(result?.value); 

    return new Promise((resolve) => {
      Papa.parse<T>(csv, {
        header: true,
        skipEmptyLines: true,
        complete: (results: ParseResult<T>) => {  
          resolve(results.data);
        }
      });
    });
  } catch (error) {
    console.error("Error reading CSV:", error);
    return null;
  }
};
