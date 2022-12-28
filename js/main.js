let schet = document.querySelector(`#schet`);
let pText = document.querySelector(`#p_text`).textContent.replace(/(\r\n|\n|\r)/gm, "").replace(/\s+/g, ' ');
let pText1 = document.querySelector(`#p_text`);


const simvols = document.querySelector(`#simvols`);
const error = document.querySelector(`#error`);
const speed = document.querySelector(`#speed`);

const modal = document.querySelector(`#modal`);
const btnCLose = document.querySelector(`#btn_close`);
const pStModal1 = document.querySelector(`#p_st_modal`);
const pVvedModal = document.querySelector(`#p_vved_modal`);
const pcountModal1 = document.querySelector(`#p_count_modal`);


let counter = 0;
let counter_error = 0;
let sch = 0;

str = pText.split('');
str[0] = '<span style="background-color: aqua;  border-radius: 20px;">' + pText[0] + '</span>';
str = str.join('');
pText1.innerHTML = str





document.onkeypress = function (e) {
    e = e || window.event;

    if (e.key == pText[counter]) {

        str = pText.split('');
        str[counter + 1] = '<span style="background-color: aqua; border-radius: 20px;">' + pText[counter + 1] + '</span>';
        str = str.join('');

        pText1.innerHTML = str
        counter++

        simvols.innerHTML = `Кол-во символов: ${counter}`;

    }
    else if (e.key != pText[counter]) {
        str = pText.split('');
        str[counter] = '<span style="background-color: red; border-radius: 20px;">' + pText[counter] + '</span>';
        str = str.join('');
        pText1.innerHTML = str

        counter_error++
        error.innerHTML = `Количесво ошибок: ${counter_error}`;
    }
    if (counter == pText.length - 1) {

        clearInterval(helloEverySecond);
        modal.classList.add(`modal_active`)
    }
};



const helloEverySecond = setInterval(function () {
    schet.innerHTML = Number(schet.innerHTML) - 1;
    sch += 1;
    speed.innerHTML = `Скорость печати: ${Math.floor((counter - counter_error) / (sch / 60))}`;
    if (sch == 600) {
        clearInterval(helloEverySecond);

        pStModal1.innerHTML = `Скорость печати: ${Math.floor((counter - counter_error) / (sch / 60))}`;
        pVvedModal.innerHTML = `Кол-во символов: ${counter}`;
        pcountModal1.innerHTML = `Количесво ошибок: ${counter_error}`;

        modal.classList.add(`modal_active`)
    }
    //clearInterval(helloEverySecond);
}, 1000);



btnCLose.addEventListener('click', function () {
    modal.classList.remove(`modal_active`)
    window.location.href = "../index.html";
})
