const addProthesisForm = document.getElementById('addProthesisForm'); 
const prosthesisList = document.getElementById('prosthesis-list'); 
 
const prostheses = [];  // This array will store prosthesis data 
 
addProthesisForm.addEventListener('submit', function(event) { 
  event.preventDefault(); 
 
  const patientName = document.getElementById('patientName').value; 
  const type = document.getElementById('type').value; 
  const orderDate = document.getElementById('orderDate').value; 
  const deliveryDate = document.getElementById('deliveryDate').value; 
  const prosthetist = document.getElementById('prosthetist').value; 
 
  // Add the new prosthesis to the prostheses array 
  prostheses.push({ 
    patientName, 
    type, 
    orderDate, 
    deliveryDate, 
    prosthetist 
  }); 
 
  // Clear the form 
  addProthesisForm.reset(); 
 
  // Display the updated prosthesis list 
  displayProstheses(); 
}); 
 
function displayProstheses() { 
  prosthesisList.innerHTML = '';  // Clear the existing list 
 
  prostheses.forEach((prosthesis, index) => { 
    const prosthesisItem = document.createElement('div'); 
    prosthesisItem.classList.add('prosthesis-item'); 
    prosthesisItem.innerHTML = ` 
      <p><strong>Patient:</strong> ${prosthesis.patientName}</p> 
      <p><strong>Type de Prothèse:</strong> ${prosthesis.type}</p> 
      <p><strong>Date de Commande:</strong> ${prosthesis.orderDate}</p> 
      <p><strong>Date de Livraison:</strong> ${prosthesis.deliveryDate}</p> 
      <p><strong>Prothésiste:</strong> ${prosthesis.prosthetist}</p> 
      <hr> 
    `; 
    prosthesisList.appendChild(prosthesisItem); 
  }); 
} 
 
// Filter logic 
document.getElementById('searchType').addEventListener('input', filterProstheses); 
document.getElementById('searchPatient').addEventListener('input', filterProstheses); 
document.getElementById('searchStatus').addEventListener('input', filterProstheses); 
 
function filterProstheses() { 
  const typeFilter = document.getElementById('searchType').value.toLowerCase(); 
  const patientFilter = document.getElementById('searchPatient').value.toLowerCase(); 
  const statusFilter = document.getElementById('searchStatus').value.toLowerCase(); 
 
  const filteredProstheses = prostheses.filter(prosthesis => { 
    return ( 
      prosthesis.type.toLowerCase().includes(typeFilter) && 
      prosthesis.patientName.toLowerCase().includes(patientFilter) && 
      prosthesis.status.toLowerCase().includes(statusFilter) 
    ); 
  }); 
 
  displayFilteredProstheses(filteredProstheses); 
} 
 
function displayFilteredProstheses(prosthesesToDisplay) { 
  prosthesisList.innerHTML = '';  // Clear the existing list 
 
  prosthesesToDisplay.forEach((prosthesis) => { 
    const prosthesisItem = document.createElement('div'); 
    prosthesisItem.classList.add('prosthesis-item'); 
    prosthesisItem.innerHTML = ` 
      <p><strong>Patient:</strong> ${prosthesis.patientName}</p> 
      <p><strong>Type de Prothèse:</strong> ${prosthesis.type}</p> 
      <p><strong>Date de Commande:</strong> ${prosthesis.orderDate}</p> 
      <p><strong>Date de Livraison:</strong> ${prosthesis.deliveryDate}</p> 
      <p><strong>Prothésiste:</strong> ${prosthesis.prosthetist}</p> 
      <hr> 
    `; 
    prosthesisList.appendChild(prosthesisItem); 
  }); 
} 
addProthesisForm.addEventListener('submit', function(event) { 
    event.preventDefault(); 
   
    const patientName = document.getElementById('patientName').value; 
    const type = document.getElementById('type').value; 
    const orderDate = document.getElementById('orderDate').value; 
    const deliveryDate = document.getElementById('deliveryDate').value; 
    const prosthetist = document.getElementById('prosthetist').value; 
   
    // Add the new prosthesis to the prostheses array 
    prostheses.push({ 
      type, 
      statut: 'En attente', 
      patient: patientName, 
      dentiste: 'Dentiste Nom',  // Add logic to get the dentist name, if needed 
      date: orderDate, 
      cost: 'Non défini', // Default cost, update if needed 
    }) ;
    // Clear the form 
    addProthesisForm.reset(); 
   
    // Call function to refresh the displayed prostheses 
    displayProstheses(); 
  });
