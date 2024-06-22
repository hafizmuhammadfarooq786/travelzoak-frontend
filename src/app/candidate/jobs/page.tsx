'use client';
import AdminJobDetails from '@/components/adminJobDetails';
import ScreenLoader from '@/components/screenLoader';
import CandidateController from '@/controllers/CandidateController';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const JobDetailsForm = dynamic(() => import('@/components/jobDetailsForm'), {
  ssr: false,
});

const JobListing = dynamic(() => import('@/components/jobListing'), {
  ssr: false,
});

const JobOpenings: React.FC = () => {
  const dispatch = useDispatch();
  const candidateController = new CandidateController(dispatch);

  const { authenticatedUser } = useSelector((state: any) => state.authReducer);
  const { jobs, jobDetails } = useSelector((state: any) => state.adminReducer);
  const { loading } = useSelector((state: any) => state.candidateReducer);
  const [openPopup, setOpenPopup] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const handleClose = () => setOpenPopup(false);
  const handleOpen = () => setOpenPopup(true);
  const [sideJobDetails, setSideJobDetails] = useState(false);

  useEffect(() => {
    const fetchJobListing = async (candidateId: string) =>
      await candidateController.getCandidateJobListing(candidateId);
    const getMeResponse = async () =>
      await candidateController.getMe(authenticatedUser);
    if (authenticatedUser) {
      if (authenticatedUser.candidateId) {
        fetchJobListing(authenticatedUser.candidateId);
      } else {
        getMeResponse();
      }
    }
  }, []);

  return loading ? (
    <ScreenLoader />
  ) : (
    <div className="flex flex-col p-4 space-y-5 h-screen overflow-y-auto">
      {openPopup && (
        <div className="fixed -inset-y-10 -inset-x-10 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <JobDetailsForm onClose={handleClose} isEdit={isEdit} />
        </div>
      )}

      {sideJobDetails ? (
        <div className="flex w-full space-x-4">
          <div className="w-1/3">
            <JobListing
              data={jobs}
              editPopup={handleOpen}
              setIsEdit={setIsEdit}
              openSideView={setSideJobDetails}
              sideJobDetails={sideJobDetails}
              jobDetails={jobDetails}
              showEllipses={false}
              isCandidate={true}
            />
          </div>
          <div className="w-2/3">
            <AdminJobDetails data={jobDetails} showCopyURL={false} />
          </div>
        </div>
      ) : (
        <JobListing
          data={jobs}
          openSideView={setSideJobDetails}
          editPopup={handleOpen}
          setIsEdit={setIsEdit}
          sideJobDetails={sideJobDetails}
          jobDetails={jobDetails}
          showEllipses={false}
          isCandidate={true}
        />
      )}
    </div>
  );
};

export default JobOpenings;
