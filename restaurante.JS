const yearElement = document.getElementById('year');
const orderStatus = document.getElementById('order-status');

yearElement.textContent = String(new Date().getFullYear());

document.querySelectorAll('.add-button').forEach((button) => {
  button.addEventListener('click', () => {
    const dishName = button.closest('.menu-card').querySelector('h3').textContent;
    orderStatus.textContent = `${dishName} agregado a tu pedido.`;
  });
});
