function showSidebar(){
const sidebar = document.querySelector('.sideBar')
sidebar.style.display = 'flex'

}
function hideSidebar(){
    const sidebar = document.querySelector('.sideBar')
sidebar.style.display = 'none'
}

const targetCounts = [70, 19, 22, 34];
const counters = [];

targetCounts.forEach((targetCount, index) => {
    let upto = 0;
    const countElement = document.querySelectorAll('.counter')[index];

    counters.push(setInterval(() => {
        countElement.innerHTML = ++upto;
        if (upto === targetCount) {
            clearInterval(counters[index]);
        }
    }, 100));
});
