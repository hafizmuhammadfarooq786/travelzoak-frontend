'use client';
import { Text } from '@/constants/appConstants';
import Image from 'next/image';
import React from 'react';
import LinkButton from './linkButton';
import RoundedButton from './roundedButton';

const WebHeader: React.FC = () => {
  const handleClick = (link: string) => window.open(link, '_blank');

  return (
    <div className="header">
      <div className="container">
        <div className="flex items-center space-x-4">
          <Image src="/logo.png" alt="logo" height={50} width={70} />
          <h1 className="font-bold text-xl">Travelzoak</h1>
        </div>

        <div className="flex items-center space-x-4">
          <LinkButton
            width="140px"
            height="32px"
            cursor="pointer"
            backgroundColor="#FFFFFF"
            type="button"
            fontColor="#000000"
            icon="/planners.svg"
            iconHeight={20}
            iconWidth={20}
            onClick={() => handleClick('tours')}
            buttonText={Text.TourPlanners}
          />
          <LinkButton
            width="160px"
            height="32px"
            cursor="pointer"
            backgroundColor="#FFFFFF"
            type="button"
            fontColor="#000000"
            icon="/partners.svg"
            iconHeight={20}
            iconWidth={20}
            onClick={() => handleClick('planners')}
            buttonText={Text.VerifiedPartners}
          />
          <RoundedButton
            width="100px"
            height="32px"
            cursor="pointer"
            backgroundColor="#FFFFFF"
            type="button"
            fontColor="#000000"
            border="2px solid #000000"
            icon="/signin.svg"
            hoverIcon="/signin-light.svg"
            iconHeight={20}
            iconWidth={20}
            buttonText={Text.SignIn}
          />
          <RoundedButton
            width="110px"
            height="32px"
            cursor="pointer"
            backgroundColor="#FFFFFF"
            type="button"
            fontColor="#000000"
            border="2px solid #000000"
            icon="/register.svg"
            hoverIcon="/register-light.svg"
            iconHeight={20}
            iconWidth={20}
            buttonText={Text.SignUp}
          />
        </div>
      </div>
    </div>
  );
};

export default WebHeader;
