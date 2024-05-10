declare module 'papaparse' {
    export interface ParseResult<T> {
      data: T[];
      errors: any[];
      meta: {
        delimiter: string;
        linebreak: string;
        aborted: boolean;
        fields: string[];
        truncated: boolean;
    };
}
  
export function parse<T>(input: string, config: {
    complete: (results: ParseResult<T>) => void;
    header?: boolean;
    skipEmptyLines?: boolean;
}): void;
}
  