let time = {
    day: 8,
    hour: "00",
    minutes: "00"
}
var countDownDate = new Date(`Nov ${time.day}, 2022 ${time.hour}:${time.minutes}:00`).getTime();
// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    let string = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
    document.getElementById("contain").innerHTML = `<h1>${string}</h1>`;

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("contain").innerHTML = `
        <h1>Happy birthday to you 3</h1>
        <p style="font-size:30px">( Bat full am thanh -> An nut tam giac nho ben duoi nghenn )</p>
        `;
        document.querySelector(".audioInHere").innerHTML = `
        <audio id="audio" controls autoplay>
        <source src="./audio/hpbd.mp3">
        </audio>
        <a target=_blank id="redirect" href="./redirect.html" style="display: none">This link is not in show</a>
        `
        document.getElementById("audio").addEventListener('play', (e) => {
            console.log(1);
            document.getElementById("redirect").click();
            console.log(e);
        })
    }
}, 1000);



// document.onmousemove = (e) => {
//     let x = e.pageX;
//     let y = e.pageY;
//     console.log(x,y);
// }
