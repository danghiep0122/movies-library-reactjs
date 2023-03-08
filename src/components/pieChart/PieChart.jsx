const cleanPercentage = (percentage) => {
  const notRated = typeof percentage !== 'number';
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  return notRated ? '0' : tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Circle = ({ colour, pct }) => {
  const r = 20;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct) * circ) / 100;
  return (
    <circle
      r={r}
      cx={50}
      cy={50}
      fill="#293462"
      stroke={strokePct !== circ ? colour : ''} // remove colour as 0% sets full circumference
      strokeWidth={'4px'}
      strokeDasharray={circ}
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
      fill="#ECF9FF"
      fontSize={fontSize}
      fontWeight={700}
    >
      {typeof percentage !== 'number' ? 'NR' : percentage.toFixed(0)}
    </text>
  );
};

const Pie = ({ percentage = 0, fontSize = '1.2rem' }) => {
  const pct = cleanPercentage(percentage);
  return (
    <svg width={100} height={100}>
      <g transform={`rotate(-90 ${'50 50'})`}>
        <Circle colour="transparent" />
        <Circle
          // rInput={size}
          colour={percentage < 36 ? '#FF1700' : percentage < 76 ? '#FFE400' : '#06FF00'}
          pct={pct}
        />
      </g>
      <Text fontSize={fontSize} percentage={pct} />
    </svg>
  );
};

export default Pie;
