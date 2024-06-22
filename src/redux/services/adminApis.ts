// export const addJobDetails = async (
//   body: JobFormValues,
// ): Promise<JobOpeningResponse> => {
//   const response: JobOpeningResponse = await getApiHandler().post(
//     ApiEndPoints.JOBS,
//     body,
//   );
//   return response;
// };

// export const getJobListing = async (): Promise<any> => {
//   const url = `${ApiEndPoints.JOBS}`;
//   const response: any = await getApiHandler().get(url);
//   return response;
// };

// export const getJobById = async (id: string): Promise<any> => {
//   const url = `${ApiEndPoints.JOBS}/${id}`;
//   const response: any = await getApiHandler().get(url);
//   return response;
// };

// export const updateJobDetails = async (
//   id: string,
//   body: JobFormValues,
// ): Promise<JobOpeningResponse> => {
//   const response: JobOpeningResponse = await getApiHandler().patch(
//     `${ApiEndPoints.JOBS}/${id}`,
//     body,
//   );
//   return response;
// };
