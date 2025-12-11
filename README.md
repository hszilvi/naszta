# naszta

bash: sass assets/css/index.scss assets/css/index.css --style=expanded


sass --watch assets/css/index.scss:assets/css/index.css --style=expanded

function setCookie(cName, cValue, expDays) {
    const date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${cName}=${cValue}; ${expires}; path=/`;
}

function getCookie(cName) {
    const name = cName + "=";
    const decoded = decodeURIComponent(document.cookie);
    const arr = decoded.split(";");

    for (let val of arr) {
        val = val.trim(); // remove leading spaces
        if (val.indexOf(name) === 0) return val.substring(name.length);
    }
    return null;
}

// --- LOAD GOOGLE ANALYTICS ---
function loadGoogleAnalytics() {
    if (window.gtagLoaded) return; // prevent loading twice
    window.gtagLoaded = true;

    const gaScript = document.createElement("script");
    gaScript.async = true;
    gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-9KBP4WHMR2";
    document.head.appendChild(gaScript);

    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-9KBP4WHMR2');
}

// --- BUTTON CLICK HANDLER ---
cookieSubmitBtn.addEventListener('click', () => {
    setCookie('cookieConsent', 'accepted', 365);
    cookieBanner.style.display = 'none';
    loadGoogleAnalytics();
});

// --- SHOW BANNER OR LOAD GA ---
function cookieMessage() {
    const consent = getCookie('cookieConsent');
    if (!consent) {
        cookieBanner.style.display = 'block'; 
    } else {
        loadGoogleAnalytics();
    }
}

window.addEventListener('load', cookieMessage);
