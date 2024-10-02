let selectedItems = [];

function addItem(itemName, itemPrice) {
    selectedItems.push({ name: itemName, price: itemPrice });
    alert(`${itemName} adicionado ao pedido!`);
}

function sendOrder() {
    if (selectedItems.length === 0) {
        alert("Você ainda não selecionou nenhum item!");
        return;
    }

    let orderText = "Pedido: \n";
    let totalPrice = 0;

    selectedItems.forEach(item => {
        orderText += `${item.name} - R$ ${item.price.toFixed(2)}\n`;
        totalPrice += item.price;
    });

    orderText += `\nTotal: R$ ${totalPrice.toFixed(2)}`;

    const whatsappLink = `https://wa.me/SEU_NUMERO_DE_WHATSAPP?text=${encodeURIComponent(orderText)}`;
    window.open(whatsappLink, '_blank');
}