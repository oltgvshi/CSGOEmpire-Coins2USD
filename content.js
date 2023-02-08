// const response = await fetch(`https://openexchangerates.org/api/latest.json?app_id=&base=USD&symbols=EUR`);
// const data = await response.json();
// const conversionRate = data.rates.EUR;
// async function getExchangeRate() {
//     const response = await fetch(`https://openexchangerates.org/api/latest.json?app_id=8c2b8bc7df6743709268076b1a390a92&base=USD&symbols=EUR`);
//     const data = await response.json();
//     return data.rates.EUR;
//   }

async function updateText() {
    // const conversionRate = await getExchangeRate();
    var divs = document.querySelectorAll("div[data-v-21e2a871='']:not([id])");
    var filteredDivs = [];
    for (var i = 0; i < divs.length; i++) {
    var parent = divs[i].parentElement;
    if (parent.hasAttribute("data-v-cb76ec44")) {
        filteredDivs.push(divs[i]);
    }
    }


  
    for (var i = 0; i < filteredDivs.length; i++) {
      // Set an id for the div with the current inner text only if it doesn't have a current ID
      if (!filteredDivs[i].id) {
        filteredDivs[i].id = filteredDivs[i].innerText;
      }
      // Get the value of the id
      var idValue = parseFloat(filteredDivs[i].id);
      // Store the updated value in a separate variable
    //   var updatedValue = idValue * conversionRate;
      var updatedValue = idValue * 0.614;

      // Update the inner text with the original value and the updated value
      filteredDivs[i].innerHTML = "<div style='display:flex; align-items:center;'>" + filteredDivs[i].id + "<span><img src='https://i.imgur.com/1z6DZwG.png' style='margin-right:4px; margin-left:8px;'></img></span>" + updatedValue.toFixed(2) + " </div>";
    }
  }
  
  (async function() {
    updateText();
    
  })();
  
  setInterval(updateText, 100);
  