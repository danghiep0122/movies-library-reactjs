import { useState } from 'react';

export const ReadMore = ({ children }) => {
  const text = children;
  const [isMore, setIsMore] = useState(true);
  const toggleReadMore = () => {
    setIsMore(!isMore);
  };
  return (
    <p style={{ lineHeight: 1.4, fontSize: 'medium' }}>
      {isMore ? text.slice(0, 256) : text}
      <span
        style={
          isMore
            ? { cursor: 'pointer', color: '#25395ccc', fontWeight: 600 }
            : { cursor: 'pointer', color: '#25395ccc' }
        }
        onClick={toggleReadMore}
      >
        {isMore ? '...read more' : 'show less'}
      </span>
    </p>
  );
};
