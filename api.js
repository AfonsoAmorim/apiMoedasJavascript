const from_currency = document.getElementById('from_currency');
const input_from_ammount = document.getElementById('from_ammount');
const to_currency = document.getElementById('to_currency');
const input_to_ammount = document.getElementById('to_ammount');

const tax_info = document.getElementById('tax_info');
const swap = document.getElementById('swap');

from_currency.addEventListener('change',caculate);
input_to_ammount.addEventListener('change',caculate);
to_currency.addEventListener('change',caculate);
input_to_ammount.addEventListener('change',caculate);

