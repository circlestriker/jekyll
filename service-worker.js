                        importScripts("/assets/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/2022/05/20/wechaty-ai-antigenbot/","revision":"086643852c2a5365e6cd9d71ca25a9b1"},{"url":"/2022/05/05/wechaty-huggingface-proposal/","revision":"aeede8b4d429f669c00c16ed35172c45"},{"url":"/2022/04/28/a-wechaty-bot-with-some-plugins/","revision":"112f8ae0865519ad72948da17951eed7"},{"url":"/2022/04/22/how-to-start-puppet-walnut/","revision":"cca868380c4785a09bd72d5cfadae577"},{"url":"/2022/04/21/coin-price-robot/","revision":"2f625fe281b0b644dac86de86e5fde22"}];
            // set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
    prefix: 'Wechaty',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.skipWaiting();
workbox.clientsClaim();

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// use `networkFirst` strategy for `*.html`, like all my posts
workbox.routing.registerRoute(
    /\.html$/,
    workbox.strategies.networkFirst()
);

// use `cacheFirst` strategy for images
workbox.routing.registerRoute(
    /assets\/(img|icons)/,
    workbox.strategies.cacheFirst()
);

// third party files
workbox.routing.registerRoute(
    /^https?:\/\/cdn.staticfile.org/,
    workbox.strategies.staleWhileRevalidate()
);
