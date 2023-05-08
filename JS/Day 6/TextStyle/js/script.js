window.onload = function getData() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "../rockbands.json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        var data = JSON.parse(xhr.responseText);
        console.log(data);
        var bandSelect = document.getElementById("band");
        var artistSelect = document.getElementById("artist");
        for (var band in data) {
          var option = document.createElement("option");
          option.text = band;
          bandSelect.add(option);
        }
        bandSelect.addEventListener("change", function () {
          artistSelect.innerHTML = "";
          var selectedBand = bandSelect.options[bandSelect.selectedIndex].text;
          for (var i = 0; i < data[selectedBand].length; i++) {
            var option = document.createElement("option");
            option.text = data[selectedBand][i].name;
            option.value = data[selectedBand][i].value;
            artistSelect.add(option);
          }
        });
        artistSelect.addEventListener("change", function () {
          window.open(artistSelect.options[artistSelect.selectedIndex].value);
        });
      } else {
        //error
      }
    }
  };
  xhr.send();
};
