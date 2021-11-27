'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "fed2c0f3c45002d4290181eefb1810aa",
"index.html": "57ee77e60afc26baf945f10dc4fd8237",
"/": "57ee77e60afc26baf945f10dc4fd8237",
"main.dart.js": "25f88ea797526bab0ae11f2fded0cd81",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b3c2b1e3f2d075cf88ff80605a8e68c4",
".git/config": "3a868010cdb7de6bed5f77772698c74f",
".git/objects/bd/73102eaf51800a23eddd9cc80e844749f5e8a8": "1cd87f7d9f48f08a337eafda9c8d4a4c",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/44/55ec37b383c4685cda0a1b83f318c5376f160a": "8e0746cffd127f17f06923e62399de3f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/91/fa7be03d6069a1276dbae3a77fcaadfd86510d": "fc38b00f0ca8bf49e06d19bb76d84e92",
".git/objects/a9/77a0e11a53cf908fea6a4d50821d292bed472f": "cf7db29a7418e27dd924b8406abed3ef",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ff/e078debaf5ee8dbe3fef28cc543bfbc76f6659": "4a0acc3a2410007c52f385f00977682a",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "63bc5a47edec3cd78d0a1103e8c80a98",
".git/logs/refs/heads/master": "63bc5a47edec3cd78d0a1103e8c80a98",
".git/logs/refs/remotes/origin/master": "11e07d13d267c9b5008c828082deb54a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "66f26dc015a5d6b82d5c03ae7a5cf3c5",
".git/refs/remotes/origin/master": "4639eb117fd126f2074ce3f22dd4718a",
".git/index": "270db6365b4ff0fed7f1cf71a00a1a9f",
".git/COMMIT_EDITMSG": "d77a94b55190dbe4e00acbc62f0b7022",
"assets/AssetManifest.json": "dc507e77f3084345111f2712e338e0ab",
"assets/NOTICES": "e406d2664f42aec2e3ed9e9eb0a1a5f1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/lib/assets/pngs/work1bg_stars%2520previous.jpg": "25268e777de6e39f5011f88e83252fed",
"assets/lib/assets/pngs/developers_responsibilities.png": "f7e0beeebad7364b62ee5e8a3f593ee7",
"assets/lib/assets/pngs/work1bg_stars.jpg": "b31f0d6510968dcec71ef11e0bbdf855",
"assets/lib/assets/pngs/seo.png": "74425d3077c7db54cffa0a8963bbaae8",
"assets/lib/assets/pngs/skillset.png": "be1d57796e7e75b1cf760f5b9eff08b0",
"assets/lib/assets/pngs/work1bg_stars%2520copy.jpg": "25268e777de6e39f5011f88e83252fed",
"assets/lib/assets/pngs/web.png": "57723faf4e938fbb5d0fa379e51fea5f",
"assets/lib/assets/pngs/computer.png": "ef3be15d28a5752d477d900fee8e1906",
"assets/lib/assets/pngs/developer_softskills.png": "526bc4a9a2bd6b7f009b2fcd7a292aff",
"assets/lib/assets/pngs/socialMedia_pngs/spotify.png": "d9c5cea17095f83aacc662fefe6c062e",
"assets/lib/assets/pngs/socialMedia_pngs/linkedinIcon.png": "1faec980de2dc3f2693fe5d9d0aef8b3",
"assets/lib/assets/pngs/socialMedia_pngs/phoneIcon.png": "e3c7e865b81197c822bf03a6cb428c85",
"assets/lib/assets/pngs/socialMedia_pngs/instagramIcon.png": "cd8f75af30dae1deb48eb24f4230e3d2",
"assets/lib/assets/pngs/socialMedia_pngs/instagram.png": "08ba344d58a1ac46821556c7d93f655b",
"assets/lib/assets/pngs/socialMedia_pngs/behanceIcon.png": "43b24faf9d719c70111dfda3e536805b",
"assets/lib/assets/pngs/socialMedia_pngs/github.png": "5cb79cd43638a5e4b22caf2a8be07642",
"assets/lib/assets/pngs/socialMedia_pngs/telegramIcon.png": "ae828cc6fce77e6d92c6f5ea71f6b210",
"assets/lib/assets/pngs/socialMedia_pngs/behance.png": "7c83476f56512a1d2aa451cc6b7e9264",
"assets/lib/assets/pngs/socialMedia_pngs/twitterIcon.png": "1f7a880050f426a5e157bfa626b1f590",
"assets/lib/assets/pngs/socialMedia_pngs/twitter.png": "813617e9766ecb741f8b1f9246c936c9",
"assets/lib/assets/pngs/socialMedia_pngs/linkedin.png": "ba52b5b4ba09f4c0f398cbe2a5499b24",
"assets/lib/assets/pngs/socialMedia_pngs/dribbble.png": "b248a29404c2594713d412aeeadf1948",
"assets/lib/assets/pngs/socialMedia_pngs/youtube.png": "93786507543a81e03ec21bdf04fadbd8",
"assets/lib/assets/pngs/socialMedia_pngs/githubIcon.png": "4a1213483700446d82272fcc1bae15a4",
"assets/lib/assets/pngs/socialMedia_pngs/whatsapp.png": "d3703e6391ff3a44abcdf1470f9e89e9",
"assets/lib/assets/pngs/socialMedia_pngs/facebook.png": "7373c9691352b5c1ba5da3ed51b72e8c",
"assets/lib/assets/pngs/socialMedia_pngs/emailIcon.png": "e07919a49267ce25fff7ea7152255eac",
"assets/lib/assets/pngs/socialMedia_pngs/youtubeIcon.png": "2d3770705827c586822899c65163d19d",
"assets/lib/assets/pngs/work1bg_stars_result.jpg": "ea654d4c5b182cfb9bdab489d0492827",
"assets/lib/assets/pngs/coding.png": "013663a91e315505b72835c8c5ec3bab",
"assets/lib/assets/animations/18123-developer.json": "b6a331a54f98cd1745bd6a91a2541a48",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/myPortraits/portraitDistortion.png": "581fa07b5d09eac3f14cd82b0161dffe",
"assets/assets/images/travelParallax/parallax2.png": "d46a08bf68af1579c5b0b0630218f33a",
"assets/assets/images/travelParallax/parallax3.png": "593ad9aacb4dc1bfaf81c895a8326fc0",
"assets/assets/images/travelParallax/parallax1.png": "31a5683dcc7605a340276a9ae87771ac",
"assets/assets/images/travelParallax/parallax0.png": "be707754a3aa266310794ba4398bcaf4",
"assets/assets/images/travelParallax/parallax4.png": "6e92451ec0d1749f0ea6d0a1b11fb94c",
"assets/assets/images/travelParallax/parallax5.png": "5c7154b20703f8da323333185f7e2b16",
"assets/assets/images/travelParallax/parallax7.png": "ee94b31807b7571ff08dfa83d8bf09d2",
"assets/assets/images/travelParallax/parallax6.png": "8d1657c6f5eeb1c9c2affad92b11e768",
"assets/assets/images/travelParallax/parallax8.png": "ccf5d16dfbbb047add70d86c3546dcf6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
