import React from 'react';

type Props = {
  name?: string;
};

const Greet = ({ name = 'Greet' }: Props) => {
  return <div>{name}</div>;
};

export default Greet;
