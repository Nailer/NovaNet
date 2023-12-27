const WC_PROJECT_ID = '261c01d907d24173daf1bb72a631d052' //YOUR_WALLET_CONNECT_PROJECT_ID

const ua = navigator.userAgent.toLowerCase();
const isAndroid = ua.indexOf('android') > -1;
const isApple = ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1;

const isMobile = isAndroid || isApple;

if (!window.ic?.plug && isMobile) {
    Provider.exposeProviderWithWalletConnect({ 
    window, 
    wcProjectId: WC_PROJECT_ID,
    debug: isDev 
});
}

export const plug = window.ic?.plug;