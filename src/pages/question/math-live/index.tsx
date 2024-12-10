import React, { useEffect, useRef } from 'react';

import { MathfieldElement } from 'mathlive';

interface MathLiveInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const MathLiveInput: React.FC<MathLiveInputProps> = ({ value, onChange }) => {
  const mathFieldRef = useRef<MathfieldElement | null>(null);

  useEffect(() => {
    if (mathFieldRef.current) {
      mathFieldRef.current.setValue(value);
    }
  }, [value]);

  const handleInput = (event: React.FormEvent<HTMLDivElement>): void => {
    event.stopPropagation();
    const target = event.currentTarget as unknown as MathfieldElement;

    onChange(target.getValue());
  };

  const handleFocus = (): void => {
    if (mathFieldRef.current) {
      mathFieldRef.current.focus();
    }
  };

  return (
    <math-field
      ref={(el) => (mathFieldRef.current = el as unknown as MathfieldElement)}
      onInput={handleInput}
      onFocus={handleFocus}
      style={{ width: '100%', border: '1px solid #ccc', borderRadius: '4px', padding: '8px' }}
    >
      {value}
    </math-field>
  );
};

export default MathLiveInput;
