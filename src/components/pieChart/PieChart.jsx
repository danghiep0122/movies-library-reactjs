const cleanPercentage = (percentage) => {
  const notRated = typeof percentage !== 'number';
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  return notRated ? '0' : tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Circle = ({ colour, pct, rInput, width }) => {
  const circ = 2 * Math.PI * rInput;
  const strokePct = ((100 - pct) * circ) / 100;
  return (
    <circle
      r={rInput}
      cx={50}
      cy={50}
      fill="var(--primary-color)"
      stroke={strokePct !== circ ? colour : ''} // remove colour as 0% sets full circumference
      strokeWidth={width}
      strokeDasharray={Number(circ) || 0}
      strokeDashoffset={pct ? strokePct : 0}
      strokeLinecap="round"
    ></circle>
  );
};

const Text = ({ percentage, fontSize }) => {
  return (
    <text
      x="50%"
      y="50%"
      dominantBaseline="central"
      textAnchor="middle"
      fill="var(--text-light-color)"
      fontSize={fontSize}
      fontWeight={700}
    >
      {typeof percentage === 'number' && percentage !== 0 ? percentage.toFixed(0) : 'NR'}
    </text>
  );
};

const Pie = ({ percentage = 0, fontSize = '1.2rem', size = '1rem', width = '6px' }) => {
  const pct = cleanPercentage(percentage);
  return (
    <svg width={100} height={100}>
      <g transform={`rotate(-90 ${'50 50'})`}>
        <Circle
          width={width}
          rInput={size}
          colour={
            percentage < 36
              ? 'var(--red-color)'
              : percentage < 76
              ? 'var(--yellow-color)'
              : 'var(--green-color)'
          }
          pct={pct}
        />
      </g>
      <Text fontSize={fontSize} percentage={pct} />
    </svg>
  );
};

export default Pie;
