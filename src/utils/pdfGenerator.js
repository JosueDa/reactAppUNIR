import jsPDF from 'jspdf';

const generatePdf = (customerInfo, cartItems, creditCard) => {
  const doc = new jsPDF();

  doc.setFont('helvetica');
  doc.setFontSize(12);

  doc.setProperties({
    marginLeft: 10,
    marginTop: 10,
    marginRight: 10,
    marginBottom: 10,
  });

  doc.text(`Customer Name: ${customerInfo.name}`, 10, 20);
  doc.text(`Email: ${customerInfo.email}`, 10, 30);
  doc.text(`Address: ${customerInfo.address}`, 10, 40);

  let yOffset = 60;
  cartItems.forEach((item) => {
    doc.text(`${item.title}`, 10, yOffset);
    doc.text(`Price: $${item.price.toFixed(2)} each`, 80, yOffset);
    doc.text(`Quantity: ${item.quantity}`, 140, yOffset);
    const itemTotal = item.price * item.quantity;
    doc.text(`Total: $${itemTotal.toFixed(2)}`, 160, yOffset);
    yOffset += 20;
  });

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.12; // Example tax calculation
  const total = subtotal + tax;

  doc.text(`Subtotal: $${subtotal.toFixed(2)}`, 10, yOffset + 10);
  doc.text(`Tax (12%): $${tax.toFixed(2)}`, 10, yOffset + 20);
  doc.text(`Total: $${total.toFixed(2)}`, 10, yOffset + 30);

  doc.save('purchase.pdf');
};

export default generatePdf;
