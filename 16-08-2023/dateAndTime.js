function getTimeZone() {
    const now = new Date();
    const dateAndTime = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return dateAndTime;
}
const currentTimeZone = getTimeZone();
console.log(currentTimeZone);