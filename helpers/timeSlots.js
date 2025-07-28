export const generateTimeSlots = (start = "08:00", end = "16:30", duration = 45) =>{
    const slots = [];
    let [hour, minute] = start.split(":").map(Number);
    let [endHour, endMinute] = end.split(":").map(Number);

    while(hour < endHour || (hour === endHour && minute <= endMinute - duration)){
        const startTime = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
        minute += duration;

        if(minute >= 60){
            hour += Math.floor(minute / 60);
            minute = minute % 60;
        }

        const endTime = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
        slots.push({start: startTime, end: endTime});
    }
    
   return slots;
}