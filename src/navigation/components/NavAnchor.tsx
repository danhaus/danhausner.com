// Hidden anchor offset by navigation bar height to serve as navigation target

import { AnchorHTMLAttributes } from 'react';
import { NAV_BAR_HEIGHT } from '../constants';

interface NavAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  id: string;
}

const NavAnchor = ({ id }: NavAnchorProps) => {
  return (
    <a
      id={id}
      style={{
        display: 'block',
        position: 'relative',
        top: `-${NAV_BAR_HEIGHT}px`,
        visibility: 'hidden',
      }}
    />
  );
};

export default NavAnchor;
