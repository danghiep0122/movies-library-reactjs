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
