import { useContext } from 'react'
import PropTypes from 'prop-types'
import { AppData } from '../AppDataProvider';

const DigitClock = () => {
    const {currentTime , setCurrentTime} = useContext(AppData)

    setInterval(() => {
        let date = new Date();
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();
        let amPm = "AM";
    
        if (h >= 12) {
            h = h - 12;
            amPm = "PM";
        }
        h = h == 0 ? h = 12 : h;
        h = h < 10 ? "0" + h : h;
        m = m < 10 ? "0" + m : m;
        s = s < 10 ? "0" + s : s;
        setCurrentTime (`${h}:${m}:${s} ${amPm}`);
    
        // if (alarmTime == `${h}:${m} ${amPm}`) {
        //     ringtone.play();
        //     ringtone.loop = true;
        // }
    }, 1000);

  return (
    <p className='text-xl text-right text-gray-500'>{currentTime}</p>
  )
}

DigitClock.propTypes = {
    currentTime: PropTypes.string.isRequired,
    setCurrentTime: PropTypes.func.isRequired
}

export default DigitClock