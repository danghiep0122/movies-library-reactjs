export default function PageList(page) {
  const list = [];
  let i = 0;
  while (i < page) {
    i++;
    list.push(i);
  }
  return list;
}
