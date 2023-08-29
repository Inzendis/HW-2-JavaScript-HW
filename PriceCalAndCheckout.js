// Assuming a sales tax of 10% for demonstration
const SALES_TAX = 0.1;

function calculatePrice() {
  try {
    let price = 0;

    // Get the value of the processor and convert it to a number
    let processorPrice = Number(document.getElementById("processor").value);
    if (isNaN(processorPrice)) throw new Error("Invalid processor selection.");
    price += processorPrice;

    // Get the value of the memory
    let memoryPrice = Number(document.getElementById("memory").value);
    if (isNaN(memoryPrice)) throw new Error("Invalid memory selection.");
    price += memoryPrice;

    // ... add similar lines for other components ...

    // Update the displayed price
    document.getElementById("price").innerText = `$${price.toFixed(2)}`;
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
}

function checkout() {
  try {
    // First, calculate the price
    let basePrice = Number(
      document.getElementById("price").innerText.replace("$", "")
    );
    if (isNaN(basePrice) || basePrice <= 0)
      throw new Error("Please calculate the price before checking out.");

    // Calculate tax and total
    let tax = basePrice * SALES_TAX;
    let total = basePrice + tax;

    // Generate the invoice details
    let invoiceContent = `
            <h2>Invoice</h2>
            <p>Base Price: $${basePrice.toFixed(2)}</p>
            <p>Sales Tax: $${tax.toFixed(2)}</p>
            <p>Total: $${total.toFixed(2)}</p>
        `;

    // Display the invoice
    let invoiceSection = document.getElementById("invoice");
    invoiceSection.innerHTML = invoiceContent;
    invoiceSection.style.display = "block";
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
}
