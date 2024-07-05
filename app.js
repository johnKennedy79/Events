
let count = 0
const p = document.getElementById("count")
const btn = document.getElementById("btn")
const resetbtn = document.getElementById("reset")

function countup() {
count = count + 1;
p.textContent = count;
}

btn.addEventListener("click", countup);

function resetCount() {
    count = 0;
    p.textContent = count;
    }
    
    resetbtn.addEventListener("click", resetCount);

    // what was the last movie you watched 
    // James Hunger Games the ballard of songbirdsbirds & snakes 
    // Jamie Beverly Hills Cop 
    // riley Mad Max Furiosa 
    // Khash The Great

    let hover = 0
    const h = document.getElementById("hover")
    function hcount() {
        hover = hover + 1;
        h.textContent = hover;
    }
    btn.addEventListener("mouseover", hcount);
    resetbtn.addEventListener("mouseover", hcount);