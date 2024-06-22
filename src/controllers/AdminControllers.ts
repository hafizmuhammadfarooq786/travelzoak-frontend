import { JobFormValues } from '@/redux/models/adminModels';
// import {
//   addJobDetails,
//   getAdminUsers,
//   updateJobDetails,
// } from '@/redux/services/adminApis';
import { AppDispatch } from '@/redux/store';

class AdminController {
  private dispatch: AppDispatch;

  constructor(dispatch: AppDispatch) {
    this.dispatch = dispatch;
  }

  getAdminUsers = async () => {
    // const result = await getAdminUsers();
    // if (isHttpSuccessCode(result.code)) {
    //   this.dispatch(setAdminUsers(result.data));
    // } else {
    //   LOGGER.error(`ERROR: GET ADMIN USERS, result=${JSON.stringify(result)}`);
    //   this.dispatch(setTypesError(result.message[0]));
    // }
  };

  addJobDetails = async (body: JobFormValues) => {
    // const result = await addJobDetails(body);
    // if (isHttpSuccessCode(result.code)) {
    //   await this.getAdminUsers();
    //   this.dispatch(setJobDetails(null));
    //   return true;
    // } else {
    //   LOGGER.error(`ERROR: ADD CANDIDATE, result=${JSON.stringify(result)}`);
    //   this.dispatch(setTypesError(result.message[0]));
    //   return false;
    // }
  };

  updateJobDetails = async (id: string, body: JobFormValues) => {
    // const result = await updateJobDetails(id, body);
    // if (isHttpSuccessCode(result.code)) {
    //   await this.getAdminUsers();
    //   this.dispatch(setJobDetails(null));
    // } else {
    //   LOGGER.error(`ERROR: ADD JOB DETAILS, result=${JSON.stringify(result)}`);
    //   this.dispatch(setTypesError(result.message[0]));
    //   return false;
    // }
  };
}

export default AdminController;
