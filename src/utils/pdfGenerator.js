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


  let yOffset = 40;
  cartItems.forEach((item) => {
    doc.text(`${item.title}: $${item.price.toFixed(2)}`, 10, yOffset);
    yOffset += 10;
  });

  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const total = subtotal;

  doc.text(`Subtotal: $${subtotal.toFixed(2)}`, 10, yOffset + 10);
  doc.text(`Total: $${total.toFixed(2)}`, 10, yOffset + 20);

  doc.save('purchase.pdf');
};

export default generatePdf;
