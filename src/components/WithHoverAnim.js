import React, { useState } from 'react';

const WithHoverAnim = WrappedComponent => {
  const WithHoverAnimComponent = () => {
    const [isHover, setHover] = useState(false);

    const handleMouseEnter = () => {
      setHover(true);
    };

    const handleMouseLeave = () => {
      setHover(false);
    };

    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={isHover ? { backgroundColor: "green" } : {}}
      >
        <WrappedComponent />
      </div>
    );
  };

  return WithHoverAnimComponent;
};

export default WithHoverAnim;
