function muteAll() {
    const muteButtons = document.querySelectorAll(
        'div[data-is-muted="false"][role="button"]'
    );

    for (const button of muteButtons) {
        button.click();
    }
}

// Google Meetページが完全に読み込まれた瞬間に自動的にミュートする
window.onload = () => {
    setTimeout(muteAll, 1000);
};

// ポップアップからのメッセージをリッスン
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'muteAll') {
        muteAll();
    }
});
