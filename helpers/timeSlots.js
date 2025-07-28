export const generateTimeSlots = () =>{

    const slots = [];
    let start = new Date();
    start.setHours(8, 0, 0, 0);   //ce qui veut dire 08:00

    const endLimit = new Date(16, 45, 0, 0);   
    endLimit.setHours(16, 45, 0, 0)           //16:45

    while(start <= endLimit){
        const end = new Date(start.getTime() + 45 * 60000);    //+45 minutes

        if(end > endLimit) break;

        const formattedStart = formatTime(start);
        const formattedEnd = formatTime(end);

        slots.push({
            startTime: formattedStart,
            endTime: formattedEnd,
        });

        //on ajoute 45 minute + 15 munite pause =  60 min au total
        start = new Date(end.getTime() + 15 * 60000);
    }

   return slots;
};

const formatTime =  (date) =>{
    return date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
};