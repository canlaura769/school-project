
const greet = () => {
    const time = new Date().getHours();
    if (time < 12) {
        console.log("Good morning!");
    } else if (time < 18) {
        console.log("Good afternoon!");
    } else {
        console.log("Good evening!");
    }
};