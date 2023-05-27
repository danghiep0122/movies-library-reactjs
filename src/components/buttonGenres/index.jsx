import { useState } from 'react';

export default function ButtonGenres({ setListActive, id, name }) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
    if (!active) {
      setListActive((listActive) => listActive.concat(id));
    }
    if (active) {
      setListActive((listActive) =>
        listActive.filter(function (item) {
          return item !== id;
        })
      );
    }
  };
  return (
    <button className={active ? 'genre-item active' : 'genre-item'} onClick={() => handleClick()}>
      {name}
    </button>
  );
}
