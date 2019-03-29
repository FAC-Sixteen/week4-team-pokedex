
let input = document.getElementById("inputBox");

input.addEventListener("input", function(e) {
  const dataList = document.getElementsByClassName("plant_names")[0];
  const inputValue = e.target.value;
  const sendUrl = `/query=${inputValue}`;
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.response);
        for (var i = 0; i < response.length;i++){
          const optionElem = document.createElement("option");
          // console.log(response);
          optionElem.textContent = response[i];
          optionElem.setAttribute(
            "aria-label",
            "list option: " + optionElem.textContent
          );
          dataList.appendChild(optionElem);
        }
      }
    }
  };

  xhr.open("GET", sendUrl, true);
  xhr.send(inputValue);
});

