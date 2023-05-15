import React, { useState } from 'react';

interface UseDarkenOnPressReturnType {
  isPressed: boolean;
  buttonPressed: () => void;
  buttonNotPressed: () => void;
}

const useDarkenOnPress = (): UseDarkenOnPressReturnType => {
  const [isPressed, setIsPressed] = useState(false);

  const buttonPressed = () => {
    setIsPressed(true);
  };

  const buttonNotPressed = () => {
    setIsPressed(false);
  };

  return { isPressed, buttonPressed, buttonNotPressed };
};

export default useDarkenOnPress;

