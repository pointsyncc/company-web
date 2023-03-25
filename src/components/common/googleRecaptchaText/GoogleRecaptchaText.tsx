import React from 'react';

const GoogleRecaptchaText = () => {
  return (
    <p className='text-muted fs-sm'>
      This site is protected by reCAPTCHA and the Google{' '}
      <a  href='https://policies.google.com/privacy' target='_blank'>
      Privacy Policy
      </a>{' '}
      and{' '}
      <a  href='https://policies.google.com/terms' target='_blank'>
         Terms of Service
      </a>{' '}
      apply.
    </p>
  );
};

export default GoogleRecaptchaText;
