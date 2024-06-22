// Generic API response model
export interface ApiResponse<T> {
  message: string | string[];
  code: number;
  status: string;
  error?: string;
  data: T;
}

export function getFirstApiResponseMessage(response: ApiResponse<any>): string {
  // get the first non empty message
  if (Array.isArray(response.message)) {
    for (let i = 0; i < response.message.length; i++) {
      if (response.message[i].length > 0) {
        return response.message[i];
      }
    }
  }

  // else check message singular
  if (response.message?.length > 0) {
    return response.message as string;
  }

  return '';
}
