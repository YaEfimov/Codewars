function humanReadable (seconds) {

    let hours, min;
    
    hours = Math.floor(seconds / 3600); 
    
    seconds -= hours * 3600;

    min = Math.floor(seconds / 60);

    seconds -= min * 60;

    console.log(hours);
    console.log(min);
    console.log(seconds);

    return '';
}


humanReadable(359999);