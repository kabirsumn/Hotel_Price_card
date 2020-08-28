(function () {
  //PART ONE: CREATE HOTEL OBJECT AND WRITE OUT OFFER DETAILS

  // Create hotel objec using object literal syntax
  let hotel = {
    name: `Park Inn by Radisson 
    Berlin Alexanderplatz`,
    roomRate: 288, //AMOUNT IN DOLLARS
    discount: 15, //PERCENTAGE DISCOUNT
    offerPrice: function () {
      let offerRate = this.roomRate * ((100 - this.discount) / 100);
      return offerRate;
    },
  };
  // Write out hotel name, standard rate and special rate
  let hotelName, roomRate, specialRate; //Variables

  hotelName = document.getElementById("hotelName"); //Get Elements
  roomRate = document.getElementById("roomRate");
  specialRate = document.getElementById("specialRate");

  hotelName.innerText = hotel.name; //write hotel name
  roomRate.textContent = `$${hotel.roomRate.toFixed(2)}`; //Write room rate
  specialRate.textContent = `$${Math.floor(hotel.offerPrice()).toFixed(2)}`; //write offer price

  // PART TWO: CALCULATE AND WRITE OUT THE EXPIRY DETAILS FOR THE OFFER
  let expiryMsg; // Massage displayed to the user
  let today; // Today's date
  let offerEndsEl; // The Element that shows the massage about offer ending

  let offerExpires = (today) => {
    // Declare variables within the function for local scope
    let day, date, month, year, weekFromToday, dayNames, monthNames;
    // Add 7 days time (added in milliseconds)
    weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    // Create arrays to hold the names of days / months
    dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    // Collect the parts of date to show on the page
    date = weekFromToday.getDate();
    day = dayNames[weekFromToday.getDay()];
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();
    // Create expiry massage
    expiryMsg = `Offer expires next ${day}`;
    offerEndsEl.setAttribute("title", `${date} ${month} ${year}`);
    return expiryMsg;
  };
  today = new Date(); // put today's date in today variable
  offerEndsEl = document.getElementById("offerEnds");
  offerEndsEl.innerText = offerExpires(today);
})();
