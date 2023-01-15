import { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';


export default function NewTrip() {

    
    const handleSubmit = (e) => {
        
        console.log("Reached");
        const user = {
            userID: 1,
            trip : {
                location : location,
                days : []
            }
        };
        var currentDate = new Date(startDate);
        var stopDate = new Date(endDate);
        console.log(startDate,endDate,currentDate,stopDate);
        while (currentDate <= stopDate) {

            const dayDate = new Date(currentDate);
            dayDate.setDate(currentDate.getDate() + 1);
            console.log("Reached Dates",currentDate, dayDate);
            user.trip.days.push({
                date : dayDate,
                location : location,
                activities : []
            });
            currentDate.setDate(currentDate.getDate() + 1);
        };
        console.log({user});
        e.preventDefault();
        return <p>Hello</p>;
      }
    const [startDate,setStartDate] = useState(new Date());
    const [endDate,setEndDate] = useState(new Date());
    const [location,setLocation] = useState('');
    const style = css({
        display:"flex",
        flexDirection:"column",
        "label" : {
            width:180,
            clear: "left",
            "textAlign": "left",
            "paddingRight":10,
            float: "left",
        },
        
        "input" : {
            float: "left"
        },
        "button" : {
            "padding": 10,
        }
    })
    return (
        <div >
            <form css = {style}>
                <label>
                    Where to?: 
                    <input type="text" value={location} onChange={e => setLocation(e.target.value)} name="location" />
                </label>
                <label css={css({justifyContent:"space-around"})}>
                    Start date: 
                    <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} name="startDate" />
                </label>
                <label>
                    End date: 
                    <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} name="endDate" />
                </label>
                <button type="submit" value="Submit" onClick={handleSubmit}>Submit </button>
            </form>
        </div>
    );
}