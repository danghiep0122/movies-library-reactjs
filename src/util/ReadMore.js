import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const ReadMore = ({ children = '' }) => {
  const text = children;
  const { t } = useTranslation();
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
          {isMore ? t('read_more') : t('show_less')}
        </span>
      )}
    </span>
  );
};
