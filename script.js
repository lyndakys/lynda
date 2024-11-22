
const prostheses = [ 
    { type: 'Couronne', statut: 'En fabrication', patient: 'lynda', dentiste: 'Dr. Ali', date: '2024-11-17', cost: '1000 DA' }, 
    { type: 'Bridge', statut: 'Livré', patient: 'Ahmed', dentiste: 'Dr. Kader', date: '2024-11-16', cost: '2000 DA' } ,
    {type:'Facette',statut:'Livré',patient:'Meriem',dentiste:'Dr.Keciour',date:'2024-11-04',cost:'3500 DA'},
    {type:'Pont sur implants',statut:'En fabrication',patient:'ryane',dentiste:'Dr.Belhdid',date:'2024-11-29',cost:'8500 DA'}
  ]; 
  const payments = [ 
    { amountPaid: '1000 DA', date: '2024-11-10' }, 
    { amountPaid: '1000 DA', date: '2024-11-15' } 
  ]; 
   
  const alertMessages = [ 
    { message: 'Prothèse de lynda en fabrication, livraison prévue pour le 20/11/2024.' }, 
    { message: 'Bridge d\'Ahmed livré, paiement complet reçu.' } 
  ]; 
   
  // Afficher la liste des prothèses 
  function displayProstheses() { 
    const tableBody = document.querySelector('#prosthesisTable tbody'); 
    tableBody.innerHTML = ''; 
    prostheses.forEach(prosthesis => { 
      const row = document.createElement('tr'); 
      row.innerHTML = ` 
        <td>${prosthesis.type}</td> 
        <td>${prosthesis.statut}</td> 
        <td>${prosthesis.patient}</td> 
        <td>${prosthesis.dentiste}</td> 
        <td>${prosthesis.date}</td> 
        <td>${prosthesis.cost}</td> 
      `; 
      tableBody.appendChild(row); 
    }); 
  } 
   
  // Afficher le suivi des paiements 
  function displayPayments() { 
    const tableBody = document.querySelector('#paymentTrackingTable tbody'); 
    tableBody.innerHTML = ''; 
    payments.forEach(payment => { 
      const row = document.createElement('tr'); 
      row.innerHTML = ` 
        <td>${payment.amountPaid}</td> 
        <td>${payment.date}</td> 
      `; 
      tableBody.appendChild(row); 
    }); 
  } 
   
  // Afficher les alertes et l'historique 
  function displayAlerts() { 
    const alertContainer = document.getElementById('alertMessages'); 
    alertContainer.innerHTML = ''; 
    alertMessages.forEach(alert => { 
      const alertElement = document.createElement('p'); 
      alertElement.textContent = alert.message; 
      alertContainer.appendChild(alertElement); 
    }); 
  } 
   
  // Ajouter une prothèse - page suivante 
  document.getElementById('addProthesisBtn').addEventListener('click', function() { 
    window.location.href = 'ajouterProthese.html'; // Redirige vers la page d'ajout de prothèse 
  }); 
   
  // Fonction de filtrage 
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
        prosthesis.patient.toLowerCase().includes(patientFilter) && 
        prosthesis.statut.toLowerCase().includes(statusFilter) 
      ); 
    }); 
   
    displayFilteredProstheses(filteredProstheses); 
  } 
   
  function displayFilteredProstheses(prosthesesToDisplay) { 
    const tableBody = document.querySelector('#prosthesisTable tbody'); 
    tableBody.innerHTML = ''; 
    prosthesesToDisplay.forEach(prosthesis => { 
      const row = document.createElement('tr'); 
      row.innerHTML = ` 
        <td>${prosthesis.type}</td> 
        <td>${prosthesis.statut}</td> 
        <td>${prosthesis.patient}</td> 
        <td>${prosthesis.dentiste}</td> 
        <td>${prosthesis.date}</td> 
        <td>${prosthesis.cost}</td> 
      `; 
      tableBody.appendChild(row); 
    }); 
  } 
   
  // Initialisation 
  displayProstheses(); 
  displayPayments(); 
  displayAlerts(); 
  document.addEventListener('DOMContentLoaded', function() { 
    displayProstheses();  // Call function to populate the table when the page loads 
  });
