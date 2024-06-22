import { ApiResponse } from './commonModels';

export interface JobFormValues {
  id?: string;
  slug?: string;
  identifier?: string;
  position: string;
  location: string;
  aboutUs: string;
  aboutRole: string;
  mission: string;
  qualificationsAndSkills: string;
  benefits: string;
  salaryRange: string;
  note: string;
  closingAtMillis: string | number;
  employment: string;
  type: string;
  isShowSalary: boolean;
  applicantsCount?: number;
  updatedAtMillis?: number;
}

export interface JobFormBDValues {
  id: string;
  slug: string;
  identifier: string;
  position: string;
  location: string;
  aboutUs: string;
  aboutRole: string;
  mission: string;
  qualificationsAndSkills: string;
  benefits: string;
  salaryRange: string;
  note: string;
  closingAtMillis: string | number;
  employment: string;
  type: string;
  isShowSalary: boolean;
  applicantsCount: number;
  updatedAtMillis: number;
  isApplied:boolean;
}

export interface JobOpeningResponse extends ApiResponse<JobFormValues> {}
