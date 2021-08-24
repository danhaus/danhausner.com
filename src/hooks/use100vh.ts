import React from 'react';
import { useWindowSize } from 'react-use';

// 100vh is broken on mobile (Chrome, Safari):
// https://chanind.github.io/javascript/2019/09/28/avoid-100vh-on-mobile-web.html

export default function use100vh() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = React.useRef<React.DetailedHTMLProps<any, any>>();
  const { height } = useWindowSize();

  React.useEffect(() => {
    if (!ref.current) {
      return;
    }
    ref.current.style.height = height + 'px';
  }, [height]);

  return ref;
}
