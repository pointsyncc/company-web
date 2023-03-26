import { useTranslation } from 'react-i18next';

const GoogleRecaptchaText = () => {
  const { t } = useTranslation();

  return (
    <p className='text-muted fs-sm'>
      {t('google-recaptcha.info-text', {
        privacyLink: 'Politika privatnosti',
        termsLink: 'Uvjeti korištenja usluge. ',
      })}
    </p>
  );
};

export default GoogleRecaptchaText;
