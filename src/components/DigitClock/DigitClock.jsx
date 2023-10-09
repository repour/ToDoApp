import { useEffect, useState } from 'react';

const DigitClock = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      let h = date.getHours();
      let m = date.getMinutes();
      let s = date.getSeconds();
      let amPm = 'AM';

      if (h >= 12) {
        h = h - 12;
        amPm = 'PM';
      }
      h = h === 0 ? 12 : h;
      h = h < 10 ? '0' + h : h;
      m = m < 10 ? '0' + m : m;
      s = s < 10 ? '0' + s : s;

      const newTime = `${h}:${m}:${s} ${amPm}`;
      setTime(newTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [setTime]);

  return (
    <p className='text-right text-gray-500 text-sl'>{time}</p>
  );
};


export default DigitClock;
