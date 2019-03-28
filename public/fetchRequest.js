var xhr = new XMLHttpRequest();

function fetch(callback) {
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
    //   console.log(xhr.responseText);
      callback(JSON.parse(xhr.responseText));
    }
  };
  xhr.open("GET", "/src/.js", true);
  xhr.send();
}

