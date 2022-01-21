'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "f2f43598425351e9f8ad38fef569861d",
".git/config": "f49e7ce93fe39581e2c9898f90524e50",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ad603f6279fb031c9b9c9edc6deda5f6",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "dbd660e93d3f653bf52b6af051dd6a99",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "51e83c257f2fb227d1a748943e2e79a1",
".git/logs/refs/heads/main": "51e83c257f2fb227d1a748943e2e79a1",
".git/logs/refs/remotes/origin/main": "02828227b4f33f614a9d45b4419f3d83",
".git/objects/00/5ae8a029012eac12a17ec8aa91eb920ec1d8a2": "f0df17d22ca1d61550e63c7da5096480",
".git/objects/02/570f1bcc703aed6908767043f4b7c4bb15442c": "7f0cd04df8354c443a93b32b14d381dc",
".git/objects/04/60f97a35007b48edf44a32bf63c3f5c401e33d": "67bfe694b748fc29d1d58e40ba5ea85a",
".git/objects/09/acf7289bbff06b343ee99de6969cf9af6632de": "fec3e1f7293f2b2e3008da7f1263e93f",
".git/objects/17/e752cc15b4e48fd5d69a7a54262ce7111dbbfe": "8932cf9a9153c3132ca1b470bf62659b",
".git/objects/1c/17e95fb1d86efd4e4b6bca66c6d8d1c4d30928": "80f123dbe7d8c4e6d2460d4b19b8108b",
".git/objects/1e/9f6de704f059be118995f258a3c3bf9a06fb8e": "5341dea3f6e1ec966ee9fbab27f15368",
".git/objects/27/55f5ca523530e03fcb7de49b63bdf2bb9da06b": "58fc063a517f7adb41905efcd64e03ce",
".git/objects/29/fbb4d397ab7866778e1884459f159d36a3a073": "5928c5317e197c47104e6fa9a083c56a",
".git/objects/2c/76cb7f7f8bc4740fe95688dc36bad1fd70cca7": "0c5a111ba8b6709471a1cb036c4b0466",
".git/objects/30/2e1017872d48f256157286a2836e39aaecdd43": "1daa3e7b4f5090fabd1c0f423fba1fc2",
".git/objects/31/55715a34769990e98fc6fca2e8e5a4e1e537ad": "af99e23bb2376eb226b5409b80c7920e",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/55139fe96c4ce1b8b088cdeee27100d044a218": "e6f5650f4b31b2a22a327f319dee2f2f",
".git/objects/33/0081b2776fd64312c3b1cb97e21ecd3938c426": "878ca02353dc5972c58bac890f9fdaa5",
".git/objects/36/3eed5b66c20ea25f06bc8bfb17d3f060be58f6": "1ba5eef8589ab2db7ecc1e5196a0d6cd",
".git/objects/36/f575a991fd9501976d6596ede15539e5379939": "d74c473f5cbfb5a849d6b8afa2810da9",
".git/objects/37/c2e0da3acc9c74ae50456e1ca2b6420c52bf4b": "1e6339945e61add1cbeed588d43d72b6",
".git/objects/38/cb258f769ba4880f815f6527810b4e129fd7c6": "5f6ad55a4296745587cfc820a3d5539d",
".git/objects/39/c59214fc6f9703eae53e844daffe8f122a566c": "42681c9e80d19df3ba701a29960535ae",
".git/objects/3b/d65f4d74b7964c653b91c967ab38bc90025cb1": "062b4e9b34eb777b933ee6b400fd8c3b",
".git/objects/3e/432a152179956cfe12e2950b8ff174b71cc83e": "826b5cc9c80202498cefa215496978b0",
".git/objects/44/adb6fb9412cdb8a8625abe82545187313c339e": "721a6c0d93f5ad7d777c312f57abcce5",
".git/objects/47/ac506a443d2ccd71448d0f935a3155a8a82a0e": "ae8433f3b33fb2399de1f189bedfca82",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4d/66b5e345aeb849d15315fb590e312dddd54218": "41000d403df8ea88a9d7fda8fdf6e224",
".git/objects/4d/7c1441c42d36fee79be665529e19b979e195d5": "97094b43d63d5731b414ce0dbd6d81cc",
".git/objects/50/66cb5b8b7adb710373a0f1162e87b5b9a2348f": "4f63eb03b3f2df8962d490512b295a82",
".git/objects/50/8b0c26a643458b3e6aaa7dc0a4912d95d66bd8": "6ca2057730f4934c63040822e4b4a1ce",
".git/objects/53/a3801a80bd0d123a681e591d4f42b10f98c6cb": "b51ea666c226f6bd25dfa96f04dd708d",
".git/objects/54/8dd7ba01e13ae6cac610259cbdef1e4e5907c5": "cca67d858910faef793e9521841f1b5b",
".git/objects/58/52225888abebd6ead5d930bc1b4fc112220e24": "44c7790f9743644c83fb884346cc1014",
".git/objects/59/e53486bf95063d21f5d95d6d28fafe15498478": "b090c60f6772ba13676c416ad6871ff1",
".git/objects/5b/e089da8adb39d436ed757c1abca7ce2aa71b0b": "5dcbc9a768ecb3b29599e4eee7463c60",
".git/objects/5e/009fe3ad44d241fb69001daa998e030ba4bec5": "466c02704f206d3d9abad4f9fc2d1e70",
".git/objects/5f/0d118880f0f576b787948e2b881c6cbc1fb60d": "1f1c3938506271fb31565a95e2e70f35",
".git/objects/65/647fb5bcca55e208cb176be85c26cdd9315dc2": "1d19117857b7683440941fd0eeede76f",
".git/objects/67/a2c687d7550df13f32aa4d406180497ef317cf": "74c70b7483c7a6b477716f302bd4a531",
".git/objects/6e/aad11528a36b238df6f94c5130859a33c2f263": "8764856fa77a65dd5af49d76f939e461",
".git/objects/72/8bf4ff22f554dcd03c6542d844cc6fcd91d564": "1251e0b61cff99d72c911f2394f58864",
".git/objects/78/7f67cfff6960e1b8d80cd0b612f7143e509b7d": "aa566b5be57b592d94dc81e1ee363041",
".git/objects/78/bec7a1f1dfc6e1eed206953293d59b036340d4": "6af42fb7bd45c92f4d2b2f495b680435",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/101db60d07c5f6065a7034671679c19e57ba26": "fbae3f4b78c58767d87d736d83f1d008",
".git/objects/81/6127d1057bc3fed053d44560b4ac0601a2a3b0": "d0522fa35116dd331a8c33b36194e154",
".git/objects/82/2517f1369ee1ffd589da28b976a30eb5f4f6a5": "274294ef73bc2790b7b40309eaa8542c",
".git/objects/87/748811d9bdbffffa46bb959351dcefc851eef9": "f6ae000509c1c6189205c1dffee84fb3",
".git/objects/87/f054e04ed114946a8053f1e1af75ae02515ad8": "5564957db507df4c078a0fee4df56451",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/c39b958db02a08642a8f026a336daa270bf0f8": "2b21a14ed6f57af94558e497625cd204",
".git/objects/90/b7b8620f6b500c80e97541b4fa42d3fe988946": "f127876b5f4327d75ab96a6394a8c0b1",
".git/objects/91/72631824677093b7acc70567a9927db8748407": "ff58ad5c194ecb3b73894ad3933de13a",
".git/objects/94/9cb695cf42972c14637204533ed53ffb70e742": "8e52fdb81b70fb3cf2bf22ff0f891791",
".git/objects/9d/5db2761b56c60f149488b2b84873a64936084f": "b80b5d87094e8b61bb50bedef3b6ab3b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/77b4ce66885bbfb2dc266e319f4dfd576a8753": "4b834195548d04f72f05154e14e97cdd",
".git/objects/a6/6866229cfe25f54a22930d3cc8d1f0e0778f6e": "2e78b88bbbbfe54e03d12ca3b76656ec",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/aa/904d6c2b6ddd43fb452215104590b080e00d3b": "155f49aca36d5d08cf465838937e0eaf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/c93afeb1e6a3d125904b129d7b8e6255fcfe83": "c2c009a3ae774ef6dc2b753bc6648995",
".git/objects/ae/1cccc7ca6ebf26b1e4104baba791f1ee278785": "d6c9a4268f64077e9f6637d2afce5d73",
".git/objects/ae/a05aec64f4ef29fb3d4f3ea0d722b358eee452": "302c478303bffed88fe71e2c27e0b434",
".git/objects/b3/023ac912a20cff5d3ce47b4e31e763e4b67eb4": "33337a946c1801b01d74a9011734a128",
".git/objects/b7/354d6da8518192b5ce7d04d09c6f70128d3ddb": "3a61b2238b4d3296b010c404549aa141",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/feca2a69b906ae16be40bb4997f27262420c3e": "6bd05d7702237b476dcaf9e761f7e9f5",
".git/objects/c0/92067461802fb13d005c21d076421b64586c23": "25efa0ecf0ff548883601d6c019edbdb",
".git/objects/c8/6a979a5f99551e892833a8ac431ea43cf1ab75": "b76644530f9fa4ccee27327d807cc10c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/09a8de7525f284cb713e5f6cb64e11809e6b3a": "71f9dd9c7f00dd4cdd0a63b4fb1bb46b",
".git/objects/e3/cb4dbe1ba2059bfe0c95b8be5bb206db9e86fe": "b2593a4666394c8e82e51a85317e2b52",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/48c832c09283d98ed52677ce08924a33b1c11d": "7743d40ee87d700e1ff58d65cb365d96",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/a0f7ca75efe82bbec1a6cf432f3209798dcd48": "9e7d66abb69eb86129b899bab0f7c24a",
".git/objects/f0/18ff72e4124ea3c42c952ee8b407de79568ceb": "793f3954d727b6036292a9c85a263b77",
".git/objects/f2/e7904868d1b30f83f27b5e608339ae8446533a": "56cf1950e660d253e3897d4f9af89f3d",
".git/objects/f3/e9aaa391ad317cb53e7c62f91a72499ff75de0": "b804898d898c8abc4a5185f87b547c84",
".git/objects/f8/4b2f6ec0b2ab66c16fb7d6bf429d3542ca2128": "bfe3f525e8cacff3f8577e120866acd2",
".git/objects/f9/c04b47f49804057420f001b3e61fbbda11f315": "58625e60ecc123b4cc6a1245597d98c7",
".git/ORIG_HEAD": "399be7b28d541955bd64d760a03ea9bf",
".git/refs/heads/main": "7a59ca54b963ba7654445bafc10e575e",
".git/refs/remotes/origin/main": "7a59ca54b963ba7654445bafc10e575e",
"assets/AssetManifest.json": "11a1a2f3562e03843bfae768cf497d79",
"assets/assets/fonts/Consolas.ttf": "12d0936c98eced9ae9c8425e2ca02da7",
"assets/assets/icons/input.png": "4fd23601849d500a5fd0f533877fe866",
"assets/assets/images/chat_bg.gif": "399fe92db91fb7a461fca0278e17a013",
"assets/FontManifest.json": "0f3f0bb5aa7e6f215cc510bbacc32824",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "58e6994a3fa66f7338d34e297237a5c9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1baeab945390b55cdb8bd0421b4e198a",
"/": "1baeab945390b55cdb8bd0421b4e198a",
"main.dart.js": "4b371d413e72f7eff16d0606e2185c26",
"manifest.json": "12b85a08c83afb6191a23a98963e52a0",
"README.md": "1941310a3156fa705ef08e44e366f4b9",
"version.json": "a21e64fbca1af390f4b2b320b4b502a6"
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
