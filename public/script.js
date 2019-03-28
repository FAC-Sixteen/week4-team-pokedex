let input = document.getElementById("inputBox");

input.addEventListener("change", function(e) {
  const inputValue = e.target.value;

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(xhr);
      }
    }
  };

  xhr.open("GET", "/jungle", true);
  xhr.send(inputValue);
});
