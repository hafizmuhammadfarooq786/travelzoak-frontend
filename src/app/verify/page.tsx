'use client';
import Loader from '@/components/loader';
import { Text } from '@/constants/appConstants';
import { CandidatePortalcolors } from '@/constants/colorConstants';
import { MAX_AUTH_CODE_LENGTH } from '@/constants/placeholderConstants';
import AuthController from '@/controllers/AuthControllers';
import { getDeviceId } from '@/util/globalFunctions';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Verify: React.FC = () => {
  const router = useRouter();
  const code = useSearchParams().get('code');
  const auth = useSelector((state: any) => state.authReducer);
  const dispatch = useDispatch();
  const authController = AuthController(dispatch, auth, router);

  // Send
  useEffect(() => {
    const onVerifyCode = async (code: string) => {
      await authController.onVerifyCode({
        email: auth.email,
        code: code,
        deviceId: getDeviceId(),
      });
    };

    if (code && code.length <= MAX_AUTH_CODE_LENGTH && auth.email) {
      onVerifyCode(code);
    }
  }, []);

  return (
    <div className="flex flex-col space-y-14 justify-center items-center p-32 h-screen w-full">
      <div className="loginTextStyle">{Text.MagicLinkVerification}</div>
      <Loader
        color={CandidatePortalcolors.Black}
        secondaryColor={CandidatePortalcolors.Gray}
      />
    </div>
  );
};

export default Verify;
