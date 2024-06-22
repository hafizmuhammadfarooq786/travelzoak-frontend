import { ButtonStatus } from '@/constants/appConstants';
import { CandidatePortalcolors } from '@/constants/colorConstants';
import React from 'react';
import Loader from './loader';

interface ButtonProps {
  onClick?: () => void;
  buttonText?: string;
  buttonStatus?: string;
  width?: string;
  height?: string;
  padding?: string;
  borderRadius?: string;
  cursor?: string;
  loading?: boolean;
  buttonRef?: React.RefObject<HTMLButtonElement>;
  loaderHeight?: number;
  loaderWidth?: number;
  backgroundColor?: string;
  fontColor?: string;
  border?: string;
  type?: any;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  buttonStatus,
  buttonText,
  width,
  height,
  padding,
  borderRadius,
  cursor,
  buttonRef,
  loading,
  loaderHeight,
  loaderWidth,
  backgroundColor,
  fontColor,
  border,
  type,
}) => {
  const ButtonTextStyle = {
    color: fontColor,
  };
  return (
    <button
      disabled={buttonStatus === ButtonStatus.Active ? false : true}
      ref={buttonRef}
      type={type ? type : 'submit'}
      className={`
      ${buttonStatus === ButtonStatus.Active
          ? 'ActiveButtonStyle'
          : 'InactiveButtonStyle'
        }`}
      style={{
        backgroundColor: backgroundColor,
        width: width,
        height: height,
        minHeight: height,
        padding: padding,
        borderRadius: borderRadius,
        cursor: cursor,
        border: border,
      }}
      onClick={onClick}
    >
      {loading ? (
        <div className="flex justify-center">
          <Loader
            color={CandidatePortalcolors.Black}
            secondaryColor={CandidatePortalcolors.Gray}
            height={loaderHeight}
            width={loaderWidth}
          />
        </div>
      ) : (
        <p className="text-md text-white" style={ButtonTextStyle}>
          {buttonText}
        </p>
      )}
    </button>
  );
};

export default Button;
