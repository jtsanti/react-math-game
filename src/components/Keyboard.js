import {useEffect} from 'react';

function Keyboard({setUserAnswer}) {
  
  useEffect(() => {
    const handleKeyUp = (e) => {
      e.preventDefault(); 
      if (e.keyCode === 32 || e.keyCode === 13) { 
        setUserAnswer('');
      } else if (e.keyCode === 8) { 
        setUserAnswer(prevUserAnswer =>
          prevUserAnswer.substring(0, prevUserAnswer.length - 1));
      } else if (!isNaN(e.key)) {
        setUserAnswer(prevUserAnswer =>
          String(Number(prevUserAnswer + e.key)));
      }
    }
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    }
  }, []); 

  return null;
}
export default Keyboard;