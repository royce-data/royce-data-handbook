var analyticsScript = document.createElement('script');
analyticsScript.setAttribute('src', 'https://cdn.jsdelivr.net/gh/manucaralmo/GlowCookies@3.1.7/src/glowCookies.min.js');
document.head.appendChild(analyticsScript);

var analyticsSettings = document.createElement('script');
analyticsSettings.setAttribute('type', 'text/javascript')
analyticsSettings.text = 
"glowCookies.start(\'en\', {\n" +
"    style: 2,\n" +
"    analytics: \'G-2G7RY380CY\',\n" +
"    hideAfterClick: true,\n" +
"    border: \'none\',\n" +
"    position: 'right',\n" +
"    bannerDescription: 'banner desc',\n" +
"    bannerLinkText: 'banner link text',\n" +
"    bannerBackground: '#000',\n" +
"    bannerColor: '#fafafa',\n" +
"    bannerHeading: '<h2>Cookies</h2>',\n" +
"    acceptBtnText: 'accept btn text',\n" +
"    acceptBtnColor: 'green',\n" +
"    acceptBtnBackground: 'red',\n" +
"    rejectBtnText: 'reject btn text',\n" +
"    rejectBtnBackground: 'lightblue',\n" +
"    rejectBtnColor: 'blue',\n" +
"    manageColor: 'white',\n" +
"    manageBackground: 'blue',\n" +
"    manageText: 'cookies text'\n" +
"});\n";
document.head.appendChild(analyticsSettings);