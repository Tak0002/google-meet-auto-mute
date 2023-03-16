document.getElementById("muteAll").addEventListener("click", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "muteAll" }, function(response) {
            if (response && response.success) {
                window.close();
            }
        });
    });
});
