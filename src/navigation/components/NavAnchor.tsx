// Hidden anchor offset by navigation bar height to serve as navigation target

import { AnchorHTMLAttributes, useEffect, useState } from 'react';

interface NavAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  id: string;
}

const NavAnchor = ({ id }: NavAnchorProps) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setOffset(-window.innerHeight / 2);
  }, []);
  return (
    <a
      id={id}
      style={{
        display: 'block',
        position: 'relative',
        top: offset,
        visibility: 'hidden',
      }}
    />
  );
};

export default NavAnchor;
