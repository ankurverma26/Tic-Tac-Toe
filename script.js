let btns = [".btn1", ".btn2", ".btn3", ".btn4", ".btn5", ".btn6", ".btn7", ".btn8", ".btn9"];
let btnx = [];
let btno = [];
const win = [
    [".btn1", ".btn2", ".btn3"],
    [".btn1", ".btn4", ".btn7"],
    [".btn1", ".btn5", ".btn9"],
    [".btn2", ".btn5", ".btn8"],
    [".btn3", ".btn5", ".btn7"],
    [".btn3", ".btn6", ".btn9"],
    [".btn4", ".btn5", ".btn6"],
    [".btn7", ".btn8", ".btn9"]
]
let click = (evt) => {
    document.querySelector(evt).innerText = "X";
    document.querySelector(evt).disabled = true;
    let a = 0;
    for (let i = 0; i < btns.length; i++) {
        if (btns[i] === evt) {
            break;
        }
        else {
            a++;
        }
    }
    btnx.push(btns[a]);
    btns.splice(a, 1);
    for (let j = 0; j < win.length; j++) {
        let count = 0;

        for (let k = 0; k < 3; k++) {
            if (btnx.includes(win[j][k])) {
                count++;
            }
        }

        if (count === 3) {
            alert("You won :)");
            setTimeout(() => {
                window.location.reload();
            }, 1000);
            return;
        }
    }
    setTimeout(() => {
        let rand = Math.floor(Math.random() * btns.length)
        document.querySelector(btns[rand]).innerText = "O";
        btno.push(btns[rand]);
        document.querySelector(btns[rand]).disabled = true
        btns.splice(rand, 1);
        for (let j = 0; j < win.length; j++) {
            let count = 0;

            for (let k = 0; k < 3; k++) {
                if (btno.includes(win[j][k])) {
                    count++;
                }
            }

            if (count === 3) {
                alert("You lost :(");
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
                return;
            }
        }
    }, 300);
    setTimeout(() => {
        if (btns.length == 0) {
            alert("No one won -_-");

            window.location.reload();
        }

    }, 500)

}
btns.forEach((e) => {
    document.querySelector(e).addEventListener("click", () => { click(e) });
});
document.querySelector(".reset").addEventListener("click", () => {
    window.location.reload();
});