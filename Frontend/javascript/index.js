const btn = document.getElementById("playChessButton")

count = 0

btn.addEventListener("click", () => {
    count++
    console.log(`Button clicked ${count} times`)
 
});