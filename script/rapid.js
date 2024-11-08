function selectSeat(button, seatClass, price) {
    // Get seat value from button
    const seatValue = button.innerText;

    // Append seat value to seatList
    const seatList = document.getElementById("seatList");
    const seatItem = document.createElement("li");
    seatItem.textContent = seatValue;
    seatItem.className = "font-semibold";
    seatList.appendChild(seatItem);

    // Append seat class to seatQuality
    const seatQuality = document.getElementById("seatQuality");
    const classItem = document.createElement("li");
    classItem.textContent = seatClass;
    seatQuality.appendChild(classItem);

    // Append price to ticketPrice
    const ticketPrice = document.getElementById("ticketPrice");
    const priceItem = document.createElement("li");
    priceItem.textContent = price;
    ticketPrice.appendChild(priceItem);

    const totalCost = document.getElementById("totalCost");
    const perTicketCost = priceItem;
    totalCost.textContent = parseInt(totalCost.textContent) + parseInt(perTicketCost.textContent);
    
}
