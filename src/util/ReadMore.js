import { useState } from 'react';

export const ReadMore = ({ children }) => {
  const text = children;
  const [isMore, setIsMore] = useState(true);
  const toggleReadMore = () => {
    setIsMore(!isMore);
  };
  return (
    <span style={{ lineHeight: 1.4, fontSize: 'medium' }}>
      {isMore ? text.slice(0, 256) : text}
      <br />
      {text.length > 255 && (
        <span
          style={
            isMore
              ? { cursor: 'pointer', color: '#0078ae', fontWeight: 600 }
              : { cursor: 'pointer', color: '#0078ae' }
          }
          onClick={toggleReadMore}
        >
          {isMore ? 'Read more 🔻' : 'Show less'}
        </span>
      )}
    </span>
  );
};
