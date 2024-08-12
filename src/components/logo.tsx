import { SVGProps } from 'react';

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export const Logo: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    fill="currentColor"
    height={size || height}
    viewBox="0 0 800 800"
    width={size || width}
    {...props}
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="2"
  >
    <g transform="matrix(1.19828,0,0,1.19822,-79.329,-116.207)">
      <path d="M381.5,717.733C392.679,725.192 407.321,725.192 418.5,717.733L658.5,527.733C667.775,521.575 673.365,511.154 673.365,500.02C673.365,492.797 671.013,485.768 666.667,480L426.667,150.894C414.1,134.094 385.9,134.094 373.333,150.894L133.333,480C129.005,485.769 126.664,492.791 126.664,500.003C126.664,511.135 132.24,521.556 141.5,527.733L381.5,717.733ZM432.499,629.369L433.333,255.037L592.167,491.8L432.499,629.369ZM368.336,255.037L366.667,627.7L207.833,491.8L368.336,255.037Z" fillRule="nonzero" stroke="currentColor" strokeWidth="0.67px"/>
    </g>
  </svg>
);