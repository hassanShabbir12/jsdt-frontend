import React, { useEffect, useRef } from 'react';

import { MathfieldElement } from 'mathlive';

interface MathLiveInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const MathLiveInput: React.FC<MathLiveInputProps> = ({ value, onChange, placeholder }) => {
  const mathFieldRef = useRef<MathfieldElement>(null);

  useEffect(() => {
    if (mathFieldRef.current) {
      mathFieldRef.current.value = value; // Set the initial value
    }
  }, [value]);

  const handleInput = (event: Event): void => {
    event.stopPropagation(); // Prevent the event from bubbling up
    const target = event.currentTarget as MathfieldElement; // Type assertion

    onChange(target.value); // Call the onChange prop with the new value
  };

  const handleFocus = (): void => {
    if (mathFieldRef.current) {
      mathFieldRef.current.focus(); // Ensure the math field retains focus
    }
  };

  return (
    <math-field
      ref={mathFieldRef}
      onInput={handleInput}
      onFocus={handleFocus} // Ensure focus is managed
      placeholder={placeholder}
      style={{ width: '100%', border: '1px solid #ccc', borderRadius: '4px', padding: '8px' }}
    >
      {value}
    </math-field>
  );
};

export default MathLiveInput;
