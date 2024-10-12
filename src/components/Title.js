
import React from 'react';

import WithHoverAnim from './WithHoverAnim';

const Title = () => {
  return (
    <h1>welcome to web diary</h1>
  );
};

export default Title;
export const TitleWithHoverAnim = WithHoverAnim(Title);
