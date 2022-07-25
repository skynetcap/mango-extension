let pattern = "https://country-code.mangomarkets.workers.dev/*";

function redirect(requestDetails) {
    return {
        redirectUrl: "https://raw.githubusercontent.com/skynetcap/mango-access/main/country"
    };
}

chrome.webRequest.onBeforeRequest.addListener(
    redirect,
    {urls: [pattern]},
    ["blocking"]
);