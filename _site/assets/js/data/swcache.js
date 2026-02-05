const resource = [
    /* --- CSS --- */
    '/sheetblog/assets/css/style.css',

    /* --- PWA --- */
    '/sheetblog/app.js',
    '/sheetblog/sw.js',

    /* --- HTML --- */
    '/sheetblog/index.html',
    '/sheetblog/404.html',

    
        '/sheetblog/categories/',
    
        '/sheetblog/tags/',
    
        '/sheetblog/archives/',
    
        '/sheetblog/about/',
    
        '/sheetblog/news/',
    

    /* --- Favicons & compressed JS --- */
    
    
        '/sheetblog/assets/img/favicons/android-chrome-192x192.png',
        '/sheetblog/assets/img/favicons/android-chrome-512x512.png',
        '/sheetblog/assets/img/favicons/apple-touch-icon.png',
        '/sheetblog/assets/img/favicons/favicon-16x16.png',
        '/sheetblog/assets/img/favicons/favicon-32x32.png',
        '/sheetblog/assets/img/favicons/favicon.ico',
        '/sheetblog/assets/img/favicons/mstile-150x150.png',
        '/sheetblog/assets/js/dist/categories.min.js',
        '/sheetblog/assets/js/dist/commons.min.js',
        '/sheetblog/assets/js/dist/misc.min.js',
        '/sheetblog/assets/js/dist/page.min.js',
        '/sheetblog/assets/js/dist/post.min.js'
];

/* The request url with below domain will be cached */
const allowedDomains = [
    

    'localhost:4001',

    

    'fonts.gstatic.com',
    'fonts.googleapis.com',
    'cdn.jsdelivr.net',
    'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
    
];

