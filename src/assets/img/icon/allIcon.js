export const DeleteBtn = ({
  className,
  height = '3.2rem',
  width = '3.2rem',
  fill = 'currentColor'
}) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    width={width}
    fill={fill}
    viewBox="0 96 960 960"
  >
    <path d="m330 768 150-150 150 150 42-42-150-150 150-150-42-42-150 150-150-150-42 42 150 150-150 150 42 42Zm150 208q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-83 31.5-156t86-127Q252 239 325 207.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 82-31.5 155T763 858.5q-54 54.5-127 86T480 976Zm0-60q142 0 241-99.5T820 576q0-142-99-241t-241-99q-141 0-240.5 99T140 576q0 141 99.5 240.5T480 916Zm0-340Z" />
  </svg>
);

export const PrimaryShortLogo = ({
  className,
  height = '4rem',
  width
  // fill = 'currentColor'
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 190.24 81.52"
    className={className}
    height={height}
    width={width}
  >
    <defs>
      <linearGradient id="a" y1={40.76} x2={190.24} y2={40.76} gradientUnits="userSpaceOnUse">
        <stop offset={0} stopColor="#90cea1" />
        <stop offset={0.56} stopColor="#3cbec9" />
        <stop offset={1} stopColor="#00b3e5" />
      </linearGradient>
    </defs>
    <g data-name="Layer 2">
      <path
        d="M105.67 36.06h66.9a17.67 17.67 0 0017.67-17.66A17.67 17.67 0 00172.57.73h-66.9A17.67 17.67 0 0088 18.4a17.67 17.67 0 0017.67 17.66zm-88 45h76.9a17.67 17.67 0 0017.67-17.66 17.67 17.67 0 00-17.67-17.67h-76.9A17.67 17.67 0 000 63.4a17.67 17.67 0 0017.67 17.66zm-7.26-45.64h7.8V6.92h10.1V0h-28v6.9h10.1zm28.1 0h7.8V8.25h.1l9 27.15h6l9.3-27.15h.1V35.4h7.8V0H66.76l-8.2 23.1h-.1L50.31 0h-11.8zm113.92 20.25a15.07 15.07 0 00-4.52-5.52 18.57 18.57 0 00-6.68-3.08 33.54 33.54 0 00-8.07-1h-11.7v35.4h12.75a24.58 24.58 0 007.55-1.15 19.34 19.34 0 006.35-3.32 16.27 16.27 0 004.37-5.5 16.91 16.91 0 001.63-7.58 18.5 18.5 0 00-1.68-8.25zM145 68.6a8.8 8.8 0 01-2.64 3.4 10.7 10.7 0 01-4 1.82 21.57 21.57 0 01-5 .55h-4.05v-21h4.6a17 17 0 014.67.63 11.66 11.66 0 013.88 1.87A9.14 9.14 0 01145 59a9.87 9.87 0 011 4.52 11.89 11.89 0 01-1 5.08zm44.63-.13a8 8 0 00-1.58-2.62 8.38 8.38 0 00-2.42-1.85 10.31 10.31 0 00-3.17-1v-.1a9.22 9.22 0 004.42-2.82 7.43 7.43 0 001.68-5 8.42 8.42 0 00-1.15-4.65 8.09 8.09 0 00-3-2.72 12.56 12.56 0 00-4.18-1.3 32.84 32.84 0 00-4.62-.33h-13.2v35.4h14.5a22.41 22.41 0 004.72-.5 13.53 13.53 0 004.28-1.65 9.42 9.42 0 003.1-3 8.52 8.52 0 001.2-4.68 9.39 9.39 0 00-.55-3.18zm-19.42-15.75h5.3a10 10 0 011.85.18 6.18 6.18 0 011.7.57 3.39 3.39 0 011.22 1.13 3.22 3.22 0 01.48 1.82 3.63 3.63 0 01-.43 1.8 3.4 3.4 0 01-1.12 1.2 4.92 4.92 0 01-1.58.65 7.51 7.51 0 01-1.77.2h-5.65zm11.72 20a3.9 3.9 0 01-1.22 1.3 4.64 4.64 0 01-1.68.7 8.18 8.18 0 01-1.82.2h-7v-8h5.9a15.35 15.35 0 012 .15 8.47 8.47 0 012.05.55 4 4 0 011.57 1.18 3.11 3.11 0 01.63 2 3.71 3.71 0 01-.43 1.92z"
        fill="url(#a)"
        data-name="Layer 1"
      />
    </g>
  </svg>
);

export const FacebookIcon = ({
  className,
  height = '3.2rem',
  width = '3.2rem',
  fill = 'currentColor'
}) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 448 512"
  >
    <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
  </svg>
);

export const TwitterIcon = ({
  className,
  height = '3.2rem',
  width = '3.2rem',
  fill = 'currentColor'
}) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 448 512"
  >
    <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z" />
  </svg>
);

export const InstagramIcon = ({
  className,
  height = '3.2rem',
  width = '3.2rem',
  fill = 'currentColor'
}) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 448 512"
  >
    <path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z" />
  </svg>
);

export const ImdbIcon = ({
  className,
  height = '3.2rem',
  width = '3.2rem',
  fill = 'currentColor'
}) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 448 512"
  >
    <path d="M89.5 323.6H53.93V186.2H89.5V323.6zM156.1 250.5L165.2 186.2H211.5V323.6H180.5V230.9L167.1 323.6H145.8L132.8 232.9L132.7 323.6H101.5V186.2H147.6C148.1 194.5 150.4 204.3 151.9 215.6L156.1 250.5zM223.7 323.6V186.2H250.3C267.3 186.2 277.3 187.1 283.3 188.6C289.4 190.3 294 192.8 297.2 196.5C300.3 199.8 302.3 203.1 303 208.5C303.9 212.9 304.4 221.6 304.4 234.7V282.9C304.4 295.2 303.7 303.4 302.5 307.6C301.4 311.7 299.4 315 296.5 317.3C293.7 319.7 290.1 321.4 285.8 322.3C281.6 323.1 275.2 323.6 266.7 323.6H223.7zM259.2 209.7V299.1C264.3 299.1 267.5 298.1 268.6 296.8C269.7 294.8 270.4 289.2 270.4 280.1V226.8C270.4 220.6 270.3 216.6 269.7 214.8C269.4 213 268.5 211.8 267.1 210.1C265.7 210.1 263 209.7 259.2 209.7V209.7zM316.5 323.6V186.2H350.6V230.1C353.5 227.7 356.7 225.2 360.1 223.5C363.7 222 368.9 221.1 372.9 221.1C377.7 221.1 381.8 221.9 385.2 223.3C388.6 224.8 391.2 226.8 393.2 229.5C394.9 232.1 395.9 234.8 396.3 237.3C396.7 239.9 396.1 245.3 396.1 253.5V292.1C396.1 300.3 396.3 306.4 395.3 310.5C394.2 314.5 391.5 318.1 387.5 320.1C383.4 324 378.6 325.4 372.9 325.4C368.9 325.4 363.7 324.5 360.2 322.9C356.7 321.1 353.5 318.4 350.6 314.9L348.5 323.6L316.5 323.6zM361.6 302.9C362.3 301.1 362.6 296.9 362.6 290.4V255C362.6 249.4 362.3 245.5 361.5 243.8C360.8 241.9 357.8 241.1 355.7 241.1C353.7 241.1 352.3 241.9 351.6 243.4C351 244.9 350.6 248.8 350.6 255V291.4C350.6 297.5 351 301.4 351.8 303C352.4 304.7 353.9 305.5 355.9 305.5C358.1 305.5 360.1 304.7 361.6 302.9L361.6 302.9zM418.4 32.04C434.1 33.27 447.1 47.28 447.1 63.92V448.1C447.1 464.5 435.2 478.5 418.9 479.1C418.6 479.1 418.4 480 418.1 480H29.88C29.6 480 29.32 479.1 29.04 479.9C13.31 478.5 1.093 466.1 0 449.7L.0186 61.78C1.081 45.88 13.82 33.09 30.26 31.1H417.7C417.9 31.1 418.2 32.01 418.4 32.04L418.4 32.04zM30.27 41.26C19 42.01 10.02 51.01 9.257 62.4V449.7C9.63 455.1 11.91 460.2 15.7 464C19.48 467.9 24.51 470.3 29.89 470.7H418.1C429.6 469.7 438.7 459.1 438.7 448.1V63.91C438.7 58.17 436.6 52.65 432.7 48.45C428.8 44.24 423.4 41.67 417.7 41.26L30.27 41.26z" />{' '}
  </svg>
);

export const WebsiteIcon = ({
  className,
  height = '3.2rem',
  width = '3.2rem',
  fill = 'currentColor'
}) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 640 512"
  >
    <path d="M562.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L405.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C189.5 251.2 196 330 246 380c56.5 56.5 148 56.5 204.5 0L562.8 267.7zM43.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C57 372 57 321 88.5 289.5L200.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C416.5 260.8 410 182 360 132c-56.5-56.5-148-56.5-204.5 0L43.2 244.3z" />
  </svg>
);

export const MaleIcon = ({
  className,
  height = '3.2rem',
  width = '3.2rem',
  fill = 'currentColor'
}) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 48 48"
  >
    <path d="M17.7 28.85q-1.15 0-1.925-.775Q15 27.3 15 26.15t.775-1.925q.775-.775 1.925-.775t1.925.775q.775.775.775 1.925t-.775 1.925q-.775.775-1.925.775Zm12.65 0q-1.15 0-1.925-.775-.775-.775-.775-1.925t.775-1.925q.775-.775 1.925-.775t1.925.775q.775.775.775 1.925t-.775 1.925q-.775.775-1.925.775ZM24 41q7.1 0 12.05-4.95Q41 31.1 41 24q0-1.3-.2-2.55-.2-1.25-.5-2.3-1 .25-2.175.35-1.175.1-2.425.1-4.85 0-9.175-2-4.325-2-7.375-5.7-1.7 4.05-4.875 7.075Q11.1 22 7 23.65V24q0 7.1 4.95 12.05Q16.9 41 24 41Zm0 3q-4.15 0-7.8-1.575-3.65-1.575-6.35-4.275-2.7-2.7-4.275-6.35Q4 28.15 4 24t1.575-7.8Q7.15 12.55 9.85 9.85q2.7-2.7 6.35-4.275Q19.85 4 24 4t7.8 1.575q3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24t-1.575 7.8q-1.575 3.65-4.275 6.35-2.7 2.7-6.35 4.275Q28.15 44 24 44ZM19.4 7.65q4.4 5.15 8.125 7.05 3.725 1.9 8.175 1.9 1.2 0 1.9-.05t1.55-.3Q36.9 12.2 33.025 9.6 29.15 7 24 7q-1.35 0-2.55.2-1.2.2-2.05.45ZM7.45 20.1q2.4-.9 5.475-4.075Q16 12.85 17.3 8.35q-4.35 1.95-6.575 4.975Q8.5 16.35 7.45 20.1ZM19.4 7.65Zm-2.1.7Z" />{' '}
  </svg>
);

export const FemaleIcon = ({
  className,
  height = '3.2rem',
  width = '3.2rem',
  fill = 'currentColor'
}) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 48 48"
  >
    <path d="M24 37q7.1 0 12.05-4.975Q41 27.05 41 20q0-1.95-.425-3.75T39.4 12.8q-1.4 1.05-3.025 1.625T33 15q-2.75 0-5.075-1.4T24 9.95q-1.6 2.25-3.925 3.65Q17.75 15 15 15q-1.75 0-3.375-.575T8.6 12.8q-.75 1.65-1.175 3.475Q7 18.1 7 20q0 7.05 4.975 12.025Q16.95 37 24 37Zm-6.3-12.15q1.15 0 1.925-.775.775-.775.775-1.925t-.775-1.925q-.775-.775-1.925-.775t-1.925.775Q15 21 15 22.15t.775 1.925q.775.775 1.925.775Zm12.65 0q1.15 0 1.925-.775.775-.775.775-1.925t-.775-1.925q-.775-.775-1.925-.775t-1.925.775q-.775.775-.775 1.925t.775 1.925q.775.775 1.925.775ZM15 12q3.15 0 5.325-2.175Q22.5 7.65 22.5 4.5V3.05q-3.85.35-7.05 2.225-3.2 1.875-5.3 4.875 1 .85 2.25 1.35 1.25.5 2.6.5Zm18 0q1.35 0 2.6-.5t2.25-1.35q-2.1-3-5.3-4.875Q29.35 3.4 25.5 3.05V4.5q0 3.15 2.175 5.325Q29.85 12 33 12ZM3.3 44q-1.3 0-2.2-.975-.9-.975-.8-2.275L2.2 19.9q.4-4.2 2.275-7.85 1.875-3.65 4.8-6.325 2.925-2.675 6.7-4.2Q19.75 0 24 0t8.025 1.525q3.775 1.525 6.7 4.2 2.925 2.675 4.8 6.325Q45.4 15.7 45.8 19.9l1.9 20.85q.1 1.3-.8 2.275Q46 44 44.7 44ZM24 40q-6.9 0-12.225-4.15Q6.45 31.7 4.7 25.3L3.3 41h41.4l-1.4-15.7q-1.75 6.4-7.05 10.55T24 40Zm1.5-36.95Zm-3 0ZM24 41h20.7H3.3 24Z" />
  </svg>
);
