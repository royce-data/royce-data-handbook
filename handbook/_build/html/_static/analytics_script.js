// var analyticsScript = document.createElement('script');
// analyticsScript.setAttribute('src', 'https://cdn.jsdelivr.net/gh/manucaralmo/GlowCookies@3.1.7/src/glowCookies.min.js');
// document.head.appendChild(analyticsScript);

var analyticsSettings = document.createElement('script');
analyticsSettings.async = true;
analyticsSettings.text = 
"glowCookies.start(\'en\', {\n" +
"    style: 2,\n" +
"    analytics: \'G-2G7RY380CY\',\n" +
"    hideAfterClick: false,\n" +
"    border: \'none\',\n" +
"    position: 'right',\n" +
"    bannerDescription: 'We use third-party cookies to personalize content and to analyze web traffic.',\n" +
// "    bannerLinkText: 'banner link text',\n" +
// "    bannerBackground: '#000',\n" +
"    bannerColor: '#707071',\n" +
// "    bannerHeading: '<h2>Cookies</h2>',\n" +
// "    acceptBtnText: 'Accept Analytics Cookies',\n" +
"    acceptBtnColor: '#FFFFFF',\n" +
"    acceptBtnBackground: '#00a19a',\n" +
// "    rejectBtnText: 'Reject Cookies',\n" +
"    rejectBtnBackground: '#ffd100',\n" +
"    rejectBtnColor: '#707071',\n" +
"    manageColor: '#707071',\n" +
"    manageBackground: '#ffffff',\n" +
"    manageText: 'Manage cookies'\n" +
"});\n";
document.head.appendChild(analyticsSettings);

// #707071 // Royce Grey
// #ffd100 //Royce Yellow
// #00a19a // Royce turquoise