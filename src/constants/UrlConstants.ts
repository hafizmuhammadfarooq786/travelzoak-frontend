export enum UrlPaths {
  Auth = '/auth',
  Verify = '/verify',
  Resend = '/resend',
}

export enum AdminPaths {
  Trips = '/trips',
}

export enum ApiMethod {
  Post = 'POST',
  Get = 'GET',
  Patch = 'PATCH',
  Put = 'PUT',
  Delete = 'DELETE',
}

export const baseUrl = process.env.BACKEND_URL;
export const appUrl = process.env.APP_URL;
