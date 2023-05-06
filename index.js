let daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function solution(D) {
    let res = { "Mon": 0, "Tue": 0, "Wed": 0, "Thu": 0, "Fri": 0, "Sat": 0, "Sun": 0 };
    for (const [key, value] of Object.entries(D)) {
        let d = new Date(key);
        res[daysOfWeek[d.getDay()]] = res[daysOfWeek[d.getDay()]] + value;

    }

    let prevday = 5;
    let nextday;
    for (const [key, value] of Object.entries(res)) {
        prevday = (prevday + 1) % 7;
        nextday = (prevday + 2) % 7;
        while (res[daysOfWeek[nextday]] === 0) {
            nextday = (nextday + 1);
        }
        nextday = nextday%7;
        if (value === 0) {
            res[key] = parseInt((res[daysOfWeek[prevday]] + res[daysOfWeek[nextday]]) / 2);
            console.log(res[daysOfWeek[prevday]]);
            console.log(res[daysOfWeek[nextday]]);
        }
        
    }
    return res;
}

module.exports = solution
