let allFilters = document.querySelectorAll(".filter");
let ticketsContainer = document.querySelector(".tickets-container");

let openModal = document.querySelector(".open-modal");
let closeModal = document.querySelector(".close-modal");

let ticketModalOpen = false;
let isTextInTicketText = false;

for (let i = 0; i < allFilters.length; i++) {
  allFilters[i].addEventListener("click", selectFilter);
}

openModal.addEventListener("click", openTicketModal);
closeModal.addEventListener("click", closeTicketModal);

function selectFilter(e) {
  let filterSelected = e.target.classList[1];

  if (ticketsContainer.classList.length > 1) {
    ticketsContainer.classList.remove(ticketsContainer.classList[1]);
  }

  ticketsContainer.classList.add(filterSelected);
}

function openTicketModal(e) {
  if (ticketModalOpen) {
    return;
  }
  let ticketModal = document.createElement("div");
  ticketModal.classList.add("ticket-modal");
  ticketModal.innerHTML = `<div class="ticket-text" contentEditable="true">Enter Your Text!!</div>
    <div class="ticket-filters">
        <div class="ticket-filter red selected-filter"></div>
        <div class="ticket-filter blue"></div>
        <div class="ticket-filter green"></div>
        <div class="ticket-filter yellow"></div>
        <div class="ticket-filter black"></div>
    </div>`;
  document.querySelector("body").append(ticketModal);

  let ticketFilters = document.querySelectorAll(".ticket-filter");
  for (let i = 0; i < ticketFilters.length; i++) {
    ticketFilters[i].addEventListener("click", filterclick);
  }
  let ticketText = document.querySelector(".ticket-text");
  ticketText.addEventListener("keypress", handlekeypress);
  ticketModalOpen = true;
}
function filterclick(e) {
  if (!e.target.classList.contains("selected-filter")) {
    let alreadyselected = document.querySelector(".selected-filter");
    alreadyselected.classList.remove("selected-filter");
    e.target.classList.add("selected-filter");
  }
}
function handlekeypress(e) {
  if (e.key == "Enter") {
    isTextInTicketText = false;
    let selectedcolour =
      document.querySelector(".selected-filter").classList[1];
    appendticket(e.target.textContent, selectedcolour);
    closeTicketModal();
    return;
  }
  if (!isTextInTicketText) {
    e.target.textContent = "";
    isTextInTicketText = true;
  }
}
function closeTicketModal(e) {
  if (ticketModalOpen) {
    document.querySelector(".ticket-modal").remove();
    ticketModalOpen = false;
  }
}
function appendticket(text, color) {
  console.log(text, color);
  let carddiv = makeCard(text, color);
  // console.log(carddiv);
  add(carddiv);
}
function makeCard(text, color) {
  let createdCardDiv = document.createElement("div");
  createdCardDiv.classList.add("ticket");
  createdCardDiv.innerHTML = `
  <div class="ticket_color_head `+color+`"></div>
  <div class="ticket_code_delete">
      <div class="code">#121213123</div>
      <div class="delete_ticket">
          <i class="fas fa-trash-alt"></i>
      </div>
  </div>
  <div class="show-ticket-content">`+text+`</div>
</div>`;
// console.log(createdCardDiv);
  return createdCardDiv;
}
function add(carddiv) {
  console.log(carddiv);
  let tc = document.querySelector(".tickets-container");
  console.log(tc);
  
  tc.append(carddiv);
}
