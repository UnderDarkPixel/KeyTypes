const keyCode = document.querySelector(".code");
const EventCode = document.querySelector(".eventcode");
const EventKey = document.querySelector(".eventkey");
const EventLocation = document.querySelector(".eventlocation");
const EventWhich = document.querySelector(".eventwhich");


window.addEventListener("keydown", (e) => {
  keyCode.textContent = e.keyCode;
  EventCode.textContent = e.keyCode;

  if (e.key === " ") {
    EventKey.textContent = "Space";
  } else {
    EventKey.textContent = e.key;
  }

  if (e.location === 0) {
    EventLocation.textContent = "General Keys";
  } else if (e.location === 1) {
    EventLocation.textContent = "Left-Side Keys";
  } else {
    EventLocation.textContent = "Right-Side Keys";
  }

  EventWhich.textContent = e.which;
  
  if(e.key === "Control" && e.key === "Alt" && e.key === "l"){
    document.body.classList.remove("dark-theme")
    localStorage.setItem("theme", "light")
  }
    
  if(e.key === "Alt"){
    document.body.classList.add("dark-theme")
    localStorage.setItem("theme", "dark")
  }

  
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.remove("dark-theme");
    }
});

});
