import { useState, useEffect } from "react";

export default function Header(){

    const [currentDate, setCurrentDate] = useState(new Date());
    const dayName = currentDate.toLocaleDateString(undefined, { weekday: 'long' });
    const monthName = currentDate.toLocaleDateString(undefined, { month: 'long' });
    const yearNumber = currentDate.toLocaleDateString(undefined, { year: 'numeric' });
    const dateNumber = currentDate.toLocaleDateString(undefined, { day: 'numeric' });

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date()); // Update date
        }, 86400000); 
        
        return () => clearInterval(interval); // Cleanup the interval on component unmount

    }, []);

    return(
        <>
         <div className='todo-list-header'>
            <div className='todo-list-header-left'>
                <div className='todo-list-date'>{dateNumber}</div>
                <div>{monthName.toUpperCase()} <br />{yearNumber}</div>
            </div>
            <div>{dayName}</div>
        </div>
        </>
    )
}