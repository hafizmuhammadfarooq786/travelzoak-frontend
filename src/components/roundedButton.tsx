import { CandidatePortalcolors } from '@/constants/colorConstants';
import Image from 'next/image';
import React, { useState } from 'react';
import Loader from './loader';

interface RoundedButtonProps {
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
  icon?: string;
  hoverIcon?: string;
  iconHeight?: number;
  iconWidth?: number;
}

const RoundedButton: React.FC<RoundedButtonProps> = ({
  onClick,
  buttonText,
  width,
  height,
  padding,
  cursor,
  buttonRef,
  loading,
  loaderHeight,
  loaderWidth,
  backgroundColor,
  fontColor,
  border,
  type,
  icon,
  hoverIcon,
  iconHeight,
  iconWidth,
}) => {
  const [isHover, setHover] = useState<boolean>(false);

  return (
    <button
      ref={buttonRef}
      type={type ? type : 'submit'}
      style={{
        backgroundColor: isHover ? fontColor : backgroundColor,
        width: width,
        height: height,
        minHeight: height,
        padding: padding,
        borderRadius: 24,
        cursor: cursor,
        border: border,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
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
        <div className="flex items-center justify-center space-x-2">
          {icon && hoverIcon && (
            <Image
              src={isHover ? hoverIcon : icon}
              alt="button icon"
              height={iconHeight}
              width={iconWidth}
            />
          )}
          <p
            className="text-sm font-medium"
            style={{ color: isHover ? backgroundColor : fontColor }}
          >
            {buttonText}
          </p>
        </div>
      )}
    </button>
  );
};

export default RoundedButton;
