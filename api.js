const from_currency = document.getElementById('from_currency');
const input_from_ammount = document.getElementById('from_ammount');
const to_currency = document.getElementById('to_currency');
const input_to_ammount = document.getElementById('to_ammount');

const tax_info = document.getElementById('tax_info');
const swap = document.getElementById('swap');

 from_currency.addEventListener('change',caculate);
 input_to_ammount.addEventListener('input',caculate);
to_currency.addEventListener('change',caculate);
 input_to_ammount.addEventListener('input',caculate);

swap.addEventListener('click', infoSwap);

main();

function main(){
    let currency = {
        "BRL":"Real",
        "EUR":"Euro",
        "USD":"Dollar"
    }
    options = [];
    for (let [key,value]of Object.entries(currency)){
        options.push(`<option value='${key}'>${value}</option>`);
    }
    from_currency.innerHTML=options.join('\n'); 
    to_currency.innerHTML=options.join('\n'); 
    
    calculate();

}

function infoSwap(){
    let temp = from_currency.value;
    from_currency.value=to_currency.value;
    to_currency.value=temp;
    calculate();
}

async function getURL(url){
    return (await fetch(url)).json();
}

function getInfoSelect(select){
    return select.options[select.selectedIndex].text;


}

async function calculate(){
    let from = from_currency.value;
    let to = to_currency.value;

    let {}=await getURL(`https://api.exchangerate-api.com/v4/latest/${from}`);

    let rate = rates[to];
    tax_info.innerText=``
}