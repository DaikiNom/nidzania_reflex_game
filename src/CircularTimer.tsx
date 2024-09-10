import { useEffect, useState } from 'react';
import './CircularTimer.css';

interface CircularTimerProps {
    duration: number; // `duration` の型を指定
    onComplete: () => void; // `onComplete` は引数なしで何も返さない関数
}

const CircularTimer: React.FC<CircularTimerProps> = ({ duration, onComplete }) => {
    const [timeLeft, setTimeLeft] = useState(duration);

    useEffect(() => {
        if (timeLeft === 0) {
            onComplete();
            return;
        }
        const timerId = setInterval(() => {
            setTimeLeft(timeLeft - 0.25);
        }, 250);

        return () => clearInterval(timerId);
    }, [timeLeft, onComplete]);

    return (
        <div className="circular-timer">
            <div className="circle">
                <div className="time">{timeLeft}</div>
            </div>
        </div>
    );
};

export default CircularTimer;