'use client';
import Button from '@/components/button';
import Form from '@/components/form';
import { FormType, GetButtonStatus, Text } from '@/constants/appConstants';
import { CandidatePortalcolors } from '@/constants/colorConstants';
import { PlaceHolder } from '@/constants/placeholderConstants';
import AuthController from '@/controllers/AuthControllers';
import { isValidEmailFormat } from '@/util/globalFunctions';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Resend: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const auth = useSelector((state: any) => state.authReducer);
  const authController = AuthController(dispatch, auth, router);
  const [email, setEmail] = useState<string>('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isMagicLinkSent, setIsMagicLinkSent] = useState(false);
  const [loader, setLoader] = useState(false);

  const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsEmailValid(isValidEmailFormat(value));
  };

  const handleClick = async () => {
    if (isEmailValid) {
      setLoader(true);
      const response = await authController.onSendMagicLink({
        email,
      });
      setIsEmailValid(false);
      setEmail('');
      setLoader(false);
      if (response) {
        setIsMagicLinkSent(true);
      }
    }
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      {isMagicLinkSent ? (
        <div className="flex flex-col justify-center items-center">
          <p className="text-black text-xl">We have sent you a magic link at</p>
          <p className="text-blue-500 text-xl">{auth.email}</p>
          <p className="text-black mt-4 text-xl">
            Click on the link to
            <span
              className="text-blue-500 cursor-pointer text-xl"
              onClick={() => setIsMagicLinkSent(false)}
            >
              {' '}
              Sign In
            </span>
          </p>
        </div>
      ) : (
        <>
          <h1 className="loginTextStyle">{Text.ResendMagicLink}</h1>
          <div className="flex flex-col mt-10 mb-8 items-start">
            <label className="emailTextStyle my-4">{Text.EmailAddress}</label>
            <Form
              placeholder={PlaceHolder.Email}
              onChange={handleEmailChange}
              type={FormType.Email}
              width="772px"
              height="77px"
              border="1px solid"
              formState={email}
              borderColor={CandidatePortalcolors.Gray}
              onSubmit={handleClick}
              borderRadius="10px"
            />
          </div>
          <Button
            buttonStatus={GetButtonStatus(isEmailValid)}
            onClick={handleClick}
            width="772px"
            height="70px"
            padding="10px 20px"
            borderRadius="5px"
            cursor="pointer"
            buttonText={Text.ResendMagicLink}
            loading={loader}
          />
        </>
      )}
    </div>
  );
};

export default Resend;
