import React from 'react';
import NextLink, { LinkProps } from 'next/link';

import { useRouter } from 'next/router';
import { ComponentAttrs } from '@/types/general';

export interface IProps extends ComponentAttrs, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  activeClassName?: string;
  asButton?: boolean;
  applyLinkStyles?:boolean;
}

export const Link = ({
  children,
  href = '',
  className,
  activeClassName = 'active',
  applyLinkStyles = true,
  onClick,
  asButton = false,
  ...rest
}: IProps) => {
  const router = useRouter();

  const classes = [
    className ? className : '',
    router.pathname === href.toString() || router.asPath === href.toString() ? activeClassName : '',
    applyLinkStyles ? 'link' : '',
  ].join(' ');

  let normalAnchorTag = (
    <a
      onClick={onClick}
      target='_blank'
      href={href.toString()}
      rel='noreferrer'
      className={classes}
    >
      {children}
    </a>
  );

  let link = (
    <NextLink className={classes} onClick={onClick} href={href} {...rest} passHref={true}>
      {children}
    </NextLink>
  );

  if (typeof href === 'string' && href.startsWith('http')) {
    link = normalAnchorTag;
  } else if (asButton && onClick) {
    link = (
      <button onClick={onClick} className={classes}>
        {children}
      </button>
    );
  }

  return link;
};
