function addSeries() {
    var input = document.getElementById("seriesInput");
    var seriesName = input.value.trim();
    
    if (seriesName !== "") {
      var ul = document.getElementById("seriesList");
      var li = document.createElement("li");
      li.textContent = seriesName;
      
      li.addEventListener("click", function() {
        ul.removeChild(li);
      });
      
      var deleteIcon = document.createElement("span");
      deleteIcon.textContent = "❌"; 
      deleteIcon.classList.add("delete-icon");
      
      li.appendChild(deleteIcon);
      ul.appendChild(li);
      input.value = "";
    } else {
      alert("Please enter a series name!");
    }
  }
  