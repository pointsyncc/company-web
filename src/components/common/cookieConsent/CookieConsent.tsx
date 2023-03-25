import { Link } from '@/components/ui/link/Link';
import { classNames } from '@/utils/classNames';
import React from 'react';
import CookieConsent, { Cookies } from 'react-cookie-consent';
import classes from './cookieConsent.module.scss';

export const CookieBanner = () => {
  return (
    <CookieConsent
      enableDeclineButton
      acceptOnScroll={true}
      acceptOnScrollPercentage={10}
      debug={false}
      style={{
        background: 'red',
        maxWidth: '430px',
      }}
      contentStyle={{ margin: 0, flexBasis: 'auto' }}
      containerClasses={classNames(
        classes['cookie-consent'],
        'p-3 flex-column border border-white rounded text-light bg-black',
      )}
      buttonClasses='btn btn-outline-light bg-transparent m-0 border border-white text-white rounded d-block ms-auto'
      declineButtonText='Opt-out'
      buttonWrapperClasses='d-flex w-100'
      declineButtonClasses='btn-link bg-transparent m-0 p-0 text-white'
      buttonStyle={{
        width: '120px',
      }}
    >
      <p className='text-white mb-3'>
        This site uses cookies to measure and improve your experience. Please read our {' '}
        <Link className='text-decoration-underline text-primary' href='/privacy-policy' >
          Privacy Policy.
        </Link>
        {' '} to learn more about how we use cookies and how you can control them.
      </p>
    </CookieConsent>
  );
};
