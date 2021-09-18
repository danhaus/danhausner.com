import { useEffect, useState } from 'react';
import { ExternalLink } from './Links';

const Email = () => {
  const [part1, setPart1] = useState('');
  const [part2, setPart2] = useState('');
  const [part3, setPart3] = useState('');
  const [part4, setPart4] = useState('');
  useEffect(() => {
    setPart1('hello');
    setPart2(String.fromCharCode(Math.pow(2, 6)));
    setPart3('danhausner.');
    setPart4('?subject=Hello');
  }, []);
  return (
    <ExternalLink href={'mai' + 'lto' + ':' + part1 + part2 + part3 + 'com' + part4}>
      {part1 + part2 + part3 + 'com'}
    </ExternalLink>
  );
};

export default Email;
