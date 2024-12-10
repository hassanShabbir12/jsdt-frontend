import { useEffect, useRef } from 'react';

import katex from 'katex';
// eslint-disable-next-line no-restricted-syntax
import 'katex/dist/katex.min.css';

interface MathFormulaDisplayProps {
  formula: string;
}

const MathFormulaDisplay: React.FC<MathFormulaDisplayProps> = ({ formula }) => {
  const mathRef = useRef(null);

  useEffect(() => {
    if (mathRef.current) {
      katex.render(formula, mathRef.current, {
        throwOnError: false,
      });
    }
  }, [formula]);

  return <div ref={mathRef}></div>;
};

export default MathFormulaDisplay;
