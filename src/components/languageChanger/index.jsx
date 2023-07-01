import { useTranslation } from 'react-i18next';

import './styles.scss';

export function LanguageChangerLarge() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const handleChangeLanguage = (e) => {
    if (i18n.language === e.target.value) {
      return;
    } else {
      const href = window.location.pathname;
      window.location.href = `${href}?lng=${e.target.value}`;
    }
  };
  return (
    <section>
      <div className="language-changer-large">
        <p>{t('lang')}</p>
        <button className="language-button eng" value="en" onClick={handleChangeLanguage}></button>
        <button className="language-button vie" value="vi" onClick={handleChangeLanguage}></button>
      </div>
    </section>
  );
}

export function LanguageChangerSmall() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const handleChangeLanguage = (e) => {
    if (i18n.language === e.target.value) {
      return;
    } else {
      const href = window.location.pathname;
      window.location.href = `${href}?lng=${e.target.value}`;
    }
  };
  return (
    <section>
      <div className="language-changer-small">
        <p>{t('lang')}</p>
        <button className="language-button eng" value="en" onClick={handleChangeLanguage}></button>
        <button className="language-button vie" value="vi" onClick={handleChangeLanguage}></button>
      </div>
    </section>
  );
}
