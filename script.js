addEventListener('click', e => {
    // console.log(e.target.value);
    display(e);
})

const displayField = document.getElementsByName('display');

const display = e => {
    // console.log(e.target.value);
    if (e.target.value == 'AC') {
        displayField[0].value = '';
    }
    else if (e.target.value == 'DE') {
        displayField[0].value = displayField[0].value.slice(0, -1);
    }
    else if (e.target.value == '=') {
        displayField[0].value = eval(displayField[0].value);
    }
    else {
        displayField[0].value += e.target.value;
    }
}