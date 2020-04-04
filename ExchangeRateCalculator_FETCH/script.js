const currency_1 = document.getElementById('currency-one');
const currency_2 = document.getElementById('currency-two');

const amount_1 = document.getElementById('amount-one');
const amount_2 = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

//eventListeners
currency_1.addEventListener('change', calculate);
amount_1.addEventListener('input', calculate);
currency_2.addEventListener('change', calculate);
amount_2.addEventListener('input', calculate);

swap.addEventListener('click', () => {
	const temp = currency_1.value;
	currency_1.value = currency_2.value;
	currency_2.value = temp;
	calculate();
});

function calculate() {
	const currency_1_value = currency_1.value;
	const currency_2_value = currency_2.value;

	fetch(`https://api.exchangerate-api.com/v4/latest/${currency_1_value}`)
		.then(res => res.json())
		.then(data => {
			// console.log(data);
			const rate = data.rates[currency_2_value];

			rateEl.innerText = `1 ${currency_1_value} = ${rate} ${currency_2_value}`;

			amount_2.value = (amount_1.value * rate).toFixed(2);
		});
}

calculate();
