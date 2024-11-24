const stockData = [
  { produit: "Gants", quantité: 5, catégorie: "Hygiène", date: "2024-11-15", fournisseur: "MediCare" },
  { produit: "Masques", quantité: 100, catégorie: "Hygiène", date: "2024-11-18", fournisseur: "HealthPro" },
  { produit: "Anesthésiques", quantité: 8, catégorie: "Médical", date: "2024-11-10", fournisseur: "PharmaPlus" },
  { produit: "Bistouris", quantité: 15, catégorie: "Chirurgie", date: "2024-11-05", fournisseur: "SurgicalTools" },
];

// Function to render the stock table
function renderStockTable(data) {
  const tableBody = document.querySelector("#stockTable tbody");
  tableBody.innerHTML = ""; // Clear existing rows
  data.forEach((item) => {
    const row = document.createElement("tr");
    // Create table cells
    for (const key in item) {
      const cell = document.createElement("td");
      cell.textContent = item[key];
      row.appendChild(cell);
    }
    tableBody.appendChild(row);
  });
}

// Function to filter stock based on input
function filterStock() {
  const typeInput = document.getElementById("searchType").value.toLowerCase();
  const statusInput = document.getElementById("searchStatus").value.toLowerCase();
  const filteredData = stockData.filter((item) => {
    const matchesType = item.produit.toLowerCase().includes(typeInput);
    const matchesStatus =
      statusInput === "disponible" ? item.quantité > 0
        : statusInput === "épuisé"  ? item.quantité === 0
        : true;
    return matchesType && matchesStatus;
  });
  renderStockTable(filteredData);
}
const alertButton = document.querySelector(".alert-button");
const alertMessages = document.getElementById("alertMessages");
//show alerts
alertButton.addEventListner("mouseover" , () => {
    alertMessages.style.display ="block";
});
//hide alerts 
alertButton.addEventListener("mouseout",() => {
    alertMessages.style.display = "none";
});
// Function to check and display alerts for low stock
function checkAlerts() {
  const alertContainer = document.getElementById("alertMessages");
  alertContainer.innerHTML = ""; // Clear existing alerts
  stockData.forEach((item) => {
    if (item.quantité < 10) {
      const alert = document.createElement("p");
      alert.textContent =
        "Attention : Stock faible pour " +
        item.produit +
        " (" +
        item.quantité +
        " restants)";
      alert.style.color = "red";
      alertContainer.appendChild(alert);
    }
  });
}


// Event listeners for filtering inputs
document.getElementById("searchType").addEventListener("input", filterStock);
document.getElementById("searchStatus").addEventListener("input", filterStock);
renderStockTable(stockData);
checkAlerts();
