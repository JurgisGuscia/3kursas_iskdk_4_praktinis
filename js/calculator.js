export function initCalculator() {
  const slider = document.getElementById('carPrice');
  const output = document.getElementById('priceValue');
  const paymentValue = document.getElementById('paymentValue');
  const leaseTerm = document.getElementById('leaseTerm');
  slider.addEventListener('input', () => {
    output.textContent = Number(slider.value).toLocaleString('lt-LT') + ' €';
  });

  function updatePayment() {
    const monthly = (Number(slider.value) * 0.9) / Number(leaseTerm.value);
    paymentValue.textContent =
      monthly.toLocaleString('lt-LT', {
        maximumFractionDigits: 0,
      }) + ' €';
  }
  slider.addEventListener('input', updatePayment);
  leaseTerm.addEventListener('change', updatePayment);
  updatePayment();
}
