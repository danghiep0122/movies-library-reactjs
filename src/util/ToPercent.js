export default function ToPercentage(value) {
  let percentage = Math.floor(value.children * 10);
  return <span>{percentage}</span>;
}
