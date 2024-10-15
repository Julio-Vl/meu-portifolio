let selectedItems = {};

function updateQuantity(itemName, change) {
    if (!selectedItems[itemName]) {
        selectedItems[itemName] = { name: itemName, price: 0, quantity: 0 };
    }

    const item = selectedItems[itemName];
    item.quantity += change;

    if (item.quantity < 0) {
        item.quantity = 0; // Evitar números negativos
    }

    document.getElementById(`quantity-${itemName}`).textContent = item.quantity;
}

function addItem(itemName, itemPrice) {
    const item = selectedItems[itemName];

    if (!item || item.quantity === 0) {
        alert(`Selecione a quantidade de ${itemName}!`);
        return;
    }

    item.price = itemPrice;
    alert(`${itemName} adicionado ao pedido! Quantidade: ${item.quantity}`);
}

function sendOrder() {
    const orderItems = Object.values(selectedItems).filter(item => item.quantity > 0);

    if (orderItems.length === 0) {
        alert("Você ainda não selecionou nenhum item!");
        return;
    }

    let orderText = "Pedido: \n";
    let totalPrice = 0;

    orderItems.forEach(item => {
        orderText += `${item.name} - Quantidade: ${item.quantity} - R$ ${(item.price * item.quantity).toFixed(2)}\n`;
        totalPrice += item.price * item.quantity;
    });

    orderText += `\nTotal: R$ ${totalPrice.toFixed(2)}`;

    const whatsappLink = `https://wa.me/SEU_NUMERO_DE_WHATSAPP?text=${encodeURIComponent(orderText)}`;
    window.open(whatsappLink, '_blank');
}
