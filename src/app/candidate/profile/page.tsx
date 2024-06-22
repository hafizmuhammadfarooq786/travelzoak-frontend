'use client';
import EducationAndExperienceForm from '@/components/candidateForm/educationAndExperienceForm';
import PersonalForm from '@/components/candidateForm/personalForm';
import ProfessionalForm from '@/components/candidateForm/professionalForm';
import { setStep } from '@/redux/slice/candidateSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Profile: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const { step } = useSelector((state: any) => state.candidateReducer);
  // const dispatch = useDispatch();
  // dispatch(setStep(0));
  useEffect(() => {
    if (step) {
      setCurrentStep(step);
    } else {
      setCurrentStep(0);
    }
  }, []);

  switch (currentStep) {
    case 0:
      return (
        <PersonalForm
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
        />
      );
    case 1:
      return (
        <ProfessionalForm
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
        />
      );
    case 2:
      return (
        <EducationAndExperienceForm
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
        />
      );
    default:
      return null;
  }
};

export default Profile;
