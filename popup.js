chrome.tabs.query({ active: true, lastFocusedWindow: true }, function(tabs) {
  var url = tabs[0].url;
  url_full = "";
  if (url.includes("https://nbviewer.jupyter.org")) {
    document.getElementById("card_body").innerText =
      "You're already viewing through Notebook Viewer.";
  } else if (url.includes(".ipynb") && !url.includes("http://localhost")) {
    url_full = "https://nbviewer.jupyter.org/github" + url.slice(18);
    var win = window.open(url_full, "_blank");
    if (win) {
      //Browser has allowed it to be opened
      win.focus();
    } else {
      //Browser has blocked it
      alert("Please allow popups for this website");
    }
  }
});
