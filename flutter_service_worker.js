'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "90df5bd986a47a01e94e7f5a31701094",
"version.json": "635e75eea39e2ad1cf00fc11a3cbee4a",
"index.html": "257c605d9d8167feb193d5d183fb839a",
"/": "257c605d9d8167feb193d5d183fb839a",
"main.dart.js": "10f8f620382c8c12b4b7a8a4db8b981d",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1daae8dbe2eea2a31c72f36fd48872b8",
"md": "d41d8cd98f00b204e9800998ecf8427e",
".git/config": "620c22734e4a0331f33852b36910f59a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/e4/6a9ab0de69af946ae08e82a4fd1eacaca84a70": "96c0eee9048b5d53c92576a638d8c22d",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/f0/fbec78ed9841b9da20f764b07d27faf35db1c7": "af32e0f1fc50910be3253d0427fd82d2",
".git/objects/1b/6654b10ed63e78350411541e51b3d2f6c37a09": "34d11d59955797a87d8f1376e3d10106",
".git/objects/25/7b5ad7e0e33f6755612ab01dbb48259854626e": "f0db92a49983e80a4d810d05610858dc",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "31fa258a65678b994a48dfb225e77228",
".git/logs/refs/heads/main": "bbce9f82e10f83b909d31376deef798f",
".git/logs/refs/remotes/origin/main": "038228267dac0a523e7fa147b0692a7c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "9d9e224534cc6ad2fd154afa3c25956a",
".git/refs/remotes/origin/main": "9d9e224534cc6ad2fd154afa3c25956a",
".git/index": "58d7ece805e2578265be41b883716016",
".git/COMMIT_EDITMSG": "eb260e9ae827821beceeed4104f0ad89",
"assets/AssetManifest.json": "a2a7571e04f8549d411672237a70bf7f",
"assets/NOTICES": "927298761e8a4a89f5c5fd3e801db462",
"assets/FontManifest.json": "f2447fb471118ed17adb95219e04be73",
"assets/AssetManifest.bin.json": "496865cd8f3b1fa90de565c8025db31c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/media_kit/assets/web/hls1.4.10.js": "bd60e2701c42b6bf2c339dcf5d495865",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "37b57863f51a9466c510be7908c30f8c",
"assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/fonts/MaterialIcons-Regular.otf": "7c93ea37c45556960873d899e36ac5bf",
"assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/images/info.png": "f34c5375f021c873b824c7cc67c160a2",
"assets/assets/images/men.png": "a245c4611ff3f646f66f2f7ea40b86ba",
"assets/assets/images/stop.png": "4d2b52b0566063873d976b5cc6a33678",
"assets/assets/images/support.png": "d96251e54b1ae6a87c86fcd351e4f138",
"assets/assets/images/micicon.png": "0903cbc7acf54ba389363571e9f87b48",
"assets/assets/images/emp_registration.png": "2a46354946085c2b2ee46236bcdbcace",
"assets/assets/images/store.png": "663ac33c283e83ef6b6ff14a59774d44",
"assets/assets/images/ic_barcode.png": "a5dda6a13a78e8e15998dbeabc8e18ca",
"assets/assets/images/availability.png": "24ec0d56371b39ce023e11bf16048e7a",
"assets/assets/images/review.png": "d4ea1fd01cc4ec7454c568f2d6482083",
"assets/assets/images/footfall_icon.png": "2ab514ccaafd671008e3d8993442525c",
"assets/assets/images/accuracy.png": "df67bdf526b833cc7ff16dbdb363ef95",
"assets/assets/images/comments.png": "e4f1aafd3ad151688a47cb19d3b27f64",
"assets/assets/images/audit.png": "a981a7441f11a1a265ee8888569bbec9",
"assets/assets/images/back_arrow.png": "06004848f8160fd40e24eb924ba98304",
"assets/assets/images/cancel.png": "a9850fcc65565e2447f6056cd50ff937",
"assets/assets/images/sections.png": "2ccddf8cfd55df57760c95f7a4ccf6eb",
"assets/assets/images/logout.png": "05418665ff917a17543d005971cca85f",
"assets/assets/images/designation.png": "1f81068c69263adbfa4dae6646023c2c",
"assets/assets/images/dummy.jpeg": "f5f9613734d1e68b82c562827b9256c2",
"assets/assets/images/queue.png": "935e886b7e5569780fd425cd47fdb84d",
"assets/assets/images/management.png": "3eaeac9cfeb079054b189df2ce82a8ff",
"assets/assets/images/mic.gif": "d6e6892f9d5cd9096fa1c7848b0f6154",
"assets/assets/images/password_visible.png": "41da6dd3dd36efab1b76a92daff49dc2",
"assets/assets/images/timespent.png": "2f21aa81fdc8d994cb828d7c5c96d088",
"assets/assets/images/menu.png": "34ee9b3de3e6352d544ce7bcb4adfbbe",
"assets/assets/images/password.png": "543cbdf905d50ed38c0a54a7b9ef2178",
"assets/assets/images/camerano.png": "5e774cde297f4fa19a9a70cd2391705d",
"assets/assets/images/green.png": "073d912ee948beb18cca7e159f5b1cd8",
"assets/assets/images/emp.png": "c9d511a683ca5dc251e7c492cf34d258",
"assets/assets/images/my_profile.png": "79d30764853d6446d06d9b3756ef0e6e",
"assets/assets/images/login.gif": "a52fc36a28b7e3a860bccf4dd9484ab6",
"assets/assets/images/placement.png": "ea2011661d2be6898f67b11a55657527",
"assets/assets/images/splash_screen.png": "df3f0a368cf0d5ab1d535b370994cfcc",
"assets/assets/images/videos.png": "6f126a520e434ff44694c85ed4fe5d93",
"assets/assets/images/command_center.png": "758981e6762fc3ab0b5ce85c27114f9c",
"assets/assets/images/dropdown.png": "74024a5d01c9815f8bc4aa254dfdf7cc",
"assets/assets/images/share.png": "6a269e4a5ca97a401681e17076db3f4e",
"assets/assets/images/change_password.png": "9932acdcfb6b0394c14f99c8f8066d62",
"assets/assets/images/zone.png": "4f40524c65e1e619ac9d13eb5acb41be",
"assets/assets/images/woman.png": "2dd24901c5da0e4a532ebbb3d658e46f",
"assets/assets/images/capture.png": "d579ece89efaf965d2b18cbadc9ff4cc",
"assets/assets/images/date_icon.png": "3f0a8691826e456ffe5847a939cc13dd",
"assets/assets/images/footfall.png": "7b9fb27a544c5dc77f69171c42a4e02c",
"assets/assets/images/camera.png": "9033d4c099b43844d90ad04734b39897",
"assets/assets/images/chat.png": "a083c3e2cd345764794f67c03dd328fb",
"assets/assets/images/Registration.png": "9a404deed4736b3c9f46c07462745cdc",
"assets/assets/images/login_header_image.png": "0d581ca351308aa09cafd86cc90ec603",
"assets/assets/images/weekly_report.png": "0707d265f03d4b2d098515ee00b8cdab",
"assets/assets/images/Report.png": "926a9544e50ffc029010d2c9cf89cfce",
"assets/assets/images/red.png": "925fcfc9c4e48031b3cbf43e786b15e5",
"assets/assets/images/bg.png": "849370c18ccb3ca3cd132fd458b47c59",
"assets/assets/images/people.png": "c6d84322a12b09341b6eb6277d3d139c",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
