import Image from 'next/image';
import React, { useState } from 'react';

interface LinkButtonProps {
  onClick?: () => void;
  buttonText?: string;
  width?: string;
  height?: string;
  padding?: string;
  cursor?: string;
  loading?: boolean;
  buttonRef?: React.RefObject<HTMLButtonElement>;
  loaderHeight?: number;
  loaderWidth?: number;
  backgroundColor?: string;
  fontColor?: string;
  type?: any;
  icon?: string;
  hoverIcon?: string;
  iconHeight?: number;
  iconWidth?: number;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  onClick,
  buttonText,
  width,
  height,
  padding,
  cursor,
  buttonRef,
  fontColor,
  type,
  icon,
  iconHeight,
  iconWidth,
}) => {
  const [isHover, setHover] = useState<boolean>(false);

  return (
    <button
      ref={buttonRef}
      type={type ? type : 'submit'}
      style={{
        width: width,
        height: height,
        minHeight: height,
        padding: padding,
        borderRadius: 24,
        cursor: cursor,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      <div className="flex items-center justify-center space-x-2">
        {icon && (
          <Image
            src={icon}
            alt="button icon"
            height={iconHeight}
            width={iconWidth}
          />
        )}
        <h2
          className="text-sm font-bold"
          style={{
            color: fontColor,
          }}
        >
          {buttonText}
        </h2>
      </div>
    </button>
  );
};

export default LinkButton;
