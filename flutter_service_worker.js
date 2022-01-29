'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
".git/config": "7cfa60a61cf73ffff94e19cd253ddac2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f4c048fa82c3611767ac2f304d7f1dbc",
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
".git/index": "0a7f922029dd0e9909ae41e763be798f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bf4810f9d24f113573561b9969e87897",
".git/logs/refs/heads/main": "bf4810f9d24f113573561b9969e87897",
".git/logs/refs/remotes/origin/main": "c25650ca466d0580405c3d230e3edb4a",
".git/objects/00/5ae8a029012eac12a17ec8aa91eb920ec1d8a2": "f0df17d22ca1d61550e63c7da5096480",
".git/objects/02/570f1bcc703aed6908767043f4b7c4bb15442c": "7f0cd04df8354c443a93b32b14d381dc",
".git/objects/04/60f97a35007b48edf44a32bf63c3f5c401e33d": "67bfe694b748fc29d1d58e40ba5ea85a",
".git/objects/06/e7df9d90639215476de970297d1250c35e3bae": "cfb8366c258f483d1b79bfc0eed9ee35",
".git/objects/09/acf7289bbff06b343ee99de6969cf9af6632de": "fec3e1f7293f2b2e3008da7f1263e93f",
".git/objects/0c/f10c99faf3d65e5676a31569375ac51530ba08": "284ea164cac979ddccef07ace033f4df",
".git/objects/0e/b784289c9e1291c30fc0cc9ca5ac83913692d9": "9b67cf2ede0a44d7e49e310b6080c94f",
".git/objects/0f/2aa67019d8381c98a2a728ff8ed223b6139a35": "ea651d32a399bed8e705d6267f2e4a4e",
".git/objects/13/69572b48397ea11d3974ffb745b1ab72b2581b": "46c77af2a195e419ea1122678f6a8c6d",
".git/objects/14/8474b498f95a7d8c7559df2697daeda8065d9a": "e5566f98e09c8b211ab168ff44c2c042",
".git/objects/16/9717c6fe92745a9f11a9c44d4b1d3c27f49500": "d06fa07af109415abb3d353e9fdc684e",
".git/objects/17/e752cc15b4e48fd5d69a7a54262ce7111dbbfe": "8932cf9a9153c3132ca1b470bf62659b",
".git/objects/1c/17e95fb1d86efd4e4b6bca66c6d8d1c4d30928": "80f123dbe7d8c4e6d2460d4b19b8108b",
".git/objects/1e/9f6de704f059be118995f258a3c3bf9a06fb8e": "5341dea3f6e1ec966ee9fbab27f15368",
".git/objects/23/ae86163f638e811f7b19a3be4142a684c766fb": "d84bf60021dbf55da89e92976b93a023",
".git/objects/23/b2efa011de3437bee1d10b3deb5a0fbda28e17": "7f60edea22a496a2232e6bb58a02411b",
".git/objects/27/55f5ca523530e03fcb7de49b63bdf2bb9da06b": "58fc063a517f7adb41905efcd64e03ce",
".git/objects/28/4671a8d8a1534cb49c4b3fe419b84eb17ad85f": "5f9f63c2d4492e8e1fb67a8b982605e2",
".git/objects/29/45b7926be4a0bd17b1046211f05c4b53a631c8": "9683369e4a31037835c669c90379c9c3",
".git/objects/29/fbb4d397ab7866778e1884459f159d36a3a073": "5928c5317e197c47104e6fa9a083c56a",
".git/objects/2c/76cb7f7f8bc4740fe95688dc36bad1fd70cca7": "0c5a111ba8b6709471a1cb036c4b0466",
".git/objects/30/2e1017872d48f256157286a2836e39aaecdd43": "1daa3e7b4f5090fabd1c0f423fba1fc2",
".git/objects/31/55715a34769990e98fc6fca2e8e5a4e1e537ad": "af99e23bb2376eb226b5409b80c7920e",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/55139fe96c4ce1b8b088cdeee27100d044a218": "e6f5650f4b31b2a22a327f319dee2f2f",
".git/objects/33/0081b2776fd64312c3b1cb97e21ecd3938c426": "878ca02353dc5972c58bac890f9fdaa5",
".git/objects/33/1b2b9fa2beb98b4d95c8f322e725422ef1b431": "be5a523df0675bca3f1013d91a5a6c88",
".git/objects/35/9f81cf6082e5bbe94ca19f0709e6581b5b7158": "4b928414c4fd43b28067f6a731759508",
".git/objects/36/3eed5b66c20ea25f06bc8bfb17d3f060be58f6": "1ba5eef8589ab2db7ecc1e5196a0d6cd",
".git/objects/36/f575a991fd9501976d6596ede15539e5379939": "d74c473f5cbfb5a849d6b8afa2810da9",
".git/objects/37/c2e0da3acc9c74ae50456e1ca2b6420c52bf4b": "1e6339945e61add1cbeed588d43d72b6",
".git/objects/38/cb258f769ba4880f815f6527810b4e129fd7c6": "5f6ad55a4296745587cfc820a3d5539d",
".git/objects/39/6cd0601d09f36d2c67aab1c8de9c703b5641e5": "ab621071b8fb74cf19f12d4a80805e80",
".git/objects/39/c59214fc6f9703eae53e844daffe8f122a566c": "42681c9e80d19df3ba701a29960535ae",
".git/objects/3b/a537653e26539148f224be794f24f344901391": "0182a5b525d81cb470e2d7c9ed4acb2e",
".git/objects/3b/d65f4d74b7964c653b91c967ab38bc90025cb1": "062b4e9b34eb777b933ee6b400fd8c3b",
".git/objects/3d/e4aacae515ba849bde24613039cc50c0b8aa0b": "0a15c866c145f8a9c3cbae06b363626d",
".git/objects/3e/432a152179956cfe12e2950b8ff174b71cc83e": "826b5cc9c80202498cefa215496978b0",
".git/objects/3e/7743201ad0a7b416555d8fc279cec5b44c9b10": "a638bb854e7c983d4618105cb43ab300",
".git/objects/41/36f0b9f309d928d5e251d128b47790687859f4": "6bcca4335c5a56ff2aa3514e8dac14c9",
".git/objects/41/3a2cce61e929bfd6d726adf13a2015ab6f814a": "4c3de97a1b6f2c9cb3c6c908d3257be3",
".git/objects/42/e76c1ec8aca88e58dc85fdf567dec406240fd5": "c6818e3c8def447335bafe139be88945",
".git/objects/44/adb6fb9412cdb8a8625abe82545187313c339e": "721a6c0d93f5ad7d777c312f57abcce5",
".git/objects/46/ec4745e9410cb810d02d89eb497de4df223096": "973f44e4d01bde54dd0a3b9ca5582507",
".git/objects/47/ac506a443d2ccd71448d0f935a3155a8a82a0e": "ae8433f3b33fb2399de1f189bedfca82",
".git/objects/48/7470933d750bbd58550f20975c17cb5c0563a0": "6fd8056a7a0c0139c5ab1b7896adabd5",
".git/objects/49/3e3b1c370c1a8b177473144da63164d2d6c4c5": "0923c7b7dd04b6ebcdfa589c9ced5130",
".git/objects/4a/99450af394f405b941335d787a241b7639a20b": "68f24e99b6ea8c6e26b7ce7ebeeb6fd4",
".git/objects/4a/f148e393ce58ad38750c7d63f6002e54f8bb89": "b79dd592f2b2ced05594118c70611449",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/05eb2871f9fa5591690b5d9deabd537223b8df": "7a5ef04126b41262f3c3b1aefccb5cd3",
".git/objects/4d/01c7eff2d2c8708614b2e00984cdd190f7f8b1": "73752cdebf1dd546b2eccb6ff3e31d70",
".git/objects/4d/13161ec300b699aa0b7b8e9a874f4aeed2dc7b": "df4bcd3b930291e4bcaf736746968df1",
".git/objects/4d/66b5e345aeb849d15315fb590e312dddd54218": "41000d403df8ea88a9d7fda8fdf6e224",
".git/objects/4d/7c1441c42d36fee79be665529e19b979e195d5": "97094b43d63d5731b414ce0dbd6d81cc",
".git/objects/4f/895254d2de541b493997e9733b3c4b77322399": "40c0383c9a275d0a15dcd5e07f6461fc",
".git/objects/50/66cb5b8b7adb710373a0f1162e87b5b9a2348f": "4f63eb03b3f2df8962d490512b295a82",
".git/objects/50/8b0c26a643458b3e6aaa7dc0a4912d95d66bd8": "6ca2057730f4934c63040822e4b4a1ce",
".git/objects/53/a1470588e3d72b30232c26468467e8513d0cc0": "b12e7c11ed3dd2d676971b12f0671a56",
".git/objects/53/a3801a80bd0d123a681e591d4f42b10f98c6cb": "b51ea666c226f6bd25dfa96f04dd708d",
".git/objects/54/8dd7ba01e13ae6cac610259cbdef1e4e5907c5": "cca67d858910faef793e9521841f1b5b",
".git/objects/55/248b25f95876447313cdf619a29922e20fcaf3": "425b71178f40c7dfa5d941e25b038e8e",
".git/objects/58/25c2b31521aa8bb6b5f1262371e018fb347151": "bd699de38c9240c674158d341e27a168",
".git/objects/58/52225888abebd6ead5d930bc1b4fc112220e24": "44c7790f9743644c83fb884346cc1014",
".git/objects/59/e53486bf95063d21f5d95d6d28fafe15498478": "b090c60f6772ba13676c416ad6871ff1",
".git/objects/5a/1fb0dd1e869f37e874602d90e78f5ee2c7f8d8": "ae23121171526008fa6f544eb7981f76",
".git/objects/5b/e089da8adb39d436ed757c1abca7ce2aa71b0b": "5dcbc9a768ecb3b29599e4eee7463c60",
".git/objects/5e/009fe3ad44d241fb69001daa998e030ba4bec5": "466c02704f206d3d9abad4f9fc2d1e70",
".git/objects/5f/0d118880f0f576b787948e2b881c6cbc1fb60d": "1f1c3938506271fb31565a95e2e70f35",
".git/objects/65/647fb5bcca55e208cb176be85c26cdd9315dc2": "1d19117857b7683440941fd0eeede76f",
".git/objects/67/a2c687d7550df13f32aa4d406180497ef317cf": "74c70b7483c7a6b477716f302bd4a531",
".git/objects/68/137b5e72727d59c9ad2d66ae20d862ac5dc6f8": "e7ba46e8bb09c484f7f44846219f42b6",
".git/objects/69/bb4a79568911f821a5948bb379dd9e164a6fe5": "fdbf23b43db6458d7ba73350861e0f18",
".git/objects/69/e5dc89092647560db7ff454a176bab85f68a4b": "39c6e5e5b7318ba0371c410b55b76825",
".git/objects/6c/4d542c4bd16dd491e9cc8708b8b64c23071667": "bde734ec179c2405d3f30eadc09ce9c3",
".git/objects/6d/386bcca15a05538ddcc688cea903980c800a02": "600ae352f4a1326092cb8b15164da6bf",
".git/objects/6e/48214a59ddb66bdee984687b655641f203bc45": "56e95df5454a48b7d797afc9cb2a1d27",
".git/objects/6e/aad11528a36b238df6f94c5130859a33c2f263": "8764856fa77a65dd5af49d76f939e461",
".git/objects/6f/328c26467522f76a264a4e806cda9d567f79a3": "59160296c34a9718bcb1fec0947d8e21",
".git/objects/72/8bf4ff22f554dcd03c6542d844cc6fcd91d564": "1251e0b61cff99d72c911f2394f58864",
".git/objects/73/f65125b3f78b38f08d20268437d22e43efc121": "571ad5316b3cf64c97215c2f713420c6",
".git/objects/76/f36091e84ea1400644847f90f72d3174cf5e27": "2d953fc12c5e31a39818fc7307f5578b",
".git/objects/78/2c4321a734733f4a2662a85627787215d1e35b": "6dabeafebe5a55956514b880bdd3bec3",
".git/objects/78/7f67cfff6960e1b8d80cd0b612f7143e509b7d": "aa566b5be57b592d94dc81e1ee363041",
".git/objects/78/bec7a1f1dfc6e1eed206953293d59b036340d4": "6af42fb7bd45c92f4d2b2f495b680435",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/dc02c6f2c006318fd71ab1292ad1870f99c4d6": "7e907d91fe3baaed21a9646e7aed7252",
".git/objects/7c/101db60d07c5f6065a7034671679c19e57ba26": "fbae3f4b78c58767d87d736d83f1d008",
".git/objects/7d/477194716decf70a0b1ff3d3199a40d8e2ed6b": "630ef70d3d9cda66a10fbad765288a6c",
".git/objects/7d/b01f20d6887a2043bee12a118803a716062592": "d26e18ef5fb50ee6d42faf9aec558794",
".git/objects/7e/3bedee789cefa3b65ab8c615c2f4b72932e7a4": "d30ea16a00495a62fb01c75fd57f8a96",
".git/objects/81/033782e851945f4b2fb9452f7a841347cee4b7": "092e73f03132d4689a7f99eb595237c8",
".git/objects/81/6127d1057bc3fed053d44560b4ac0601a2a3b0": "d0522fa35116dd331a8c33b36194e154",
".git/objects/82/2517f1369ee1ffd589da28b976a30eb5f4f6a5": "274294ef73bc2790b7b40309eaa8542c",
".git/objects/83/a75832817d27521aef3de504c2146edcb935cf": "1d73edfc16e2c362e70da43028467324",
".git/objects/86/290727f8136beaeccb9e19d5ec08eb6a17ad83": "9335d3e001a96e6ebc58b3df439495f4",
".git/objects/87/748811d9bdbffffa46bb959351dcefc851eef9": "f6ae000509c1c6189205c1dffee84fb3",
".git/objects/87/f054e04ed114946a8053f1e1af75ae02515ad8": "5564957db507df4c078a0fee4df56451",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/1c8b63c03344a486e9b81769fb933a7357b40d": "3bb2d254568c326fb1c713c987e444be",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3d67893006fc9d7d9785e506a8b9cc4bfdfad2": "5be761e6ba27a5e00dc67209ec3fb343",
".git/objects/8e/c39b958db02a08642a8f026a336daa270bf0f8": "2b21a14ed6f57af94558e497625cd204",
".git/objects/90/b7b8620f6b500c80e97541b4fa42d3fe988946": "f127876b5f4327d75ab96a6394a8c0b1",
".git/objects/91/3d81afc5bc43277de32114d45b83e74f54d314": "71e457f94e85dadd72b503d313e164da",
".git/objects/91/72631824677093b7acc70567a9927db8748407": "ff58ad5c194ecb3b73894ad3933de13a",
".git/objects/94/9cb695cf42972c14637204533ed53ffb70e742": "8e52fdb81b70fb3cf2bf22ff0f891791",
".git/objects/95/7977e3927be53c31af26d3d2729118b9e81a32": "f569ac8cc911cb6d9ba48dde87900fb1",
".git/objects/96/4ec4ea5c76a3f0787096bab888ad54f2dd7f43": "891b88c8b06ebefa1ce5fc090915db1d",
".git/objects/9c/b8799c09deb9a5a9c846d91240f170f5e86bee": "6b4f470e2a09b10372fa807d0a480d3b",
".git/objects/9d/5db2761b56c60f149488b2b84873a64936084f": "b80b5d87094e8b61bb50bedef3b6ab3b",
".git/objects/9d/5e009a3c5a01d2a2a52267ea5035d9c8bdd748": "fd2ee1b9958d24404bee282740511998",
".git/objects/9f/768f3e2aecf4a88b05c5cc05c9fa588cb8299d": "8f2a3b00b49bd4386686caa55202e924",
".git/objects/a0/21f9c663e8e446b3df3fadd196497976c75886": "101a860e5e7c29940fd62ed43ef62193",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/77b4ce66885bbfb2dc266e319f4dfd576a8753": "4b834195548d04f72f05154e14e97cdd",
".git/objects/a2/7ebce28def952025ba4afc759478f7f223cf26": "413b2665729f91e9000d2a1252c3bce4",
".git/objects/a3/bc2ee7747e87c0b788a7ce27c853c2946f40b7": "5e69949383e2cda2917a5dae8880a5e2",
".git/objects/a6/6866229cfe25f54a22930d3cc8d1f0e0778f6e": "2e78b88bbbbfe54e03d12ca3b76656ec",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/0b239447efba65199d4e8ed49b542c5e19d15b": "1814bfd92a3c3cd802aa833b235b586c",
".git/objects/a9/436350a85fc3a4c22a09d9b52117919e13dae7": "a397fae06e90c43fa731dd7c06ec7c95",
".git/objects/aa/3e198eeed03bec0b5f92e0bbab090bf42c0ad0": "a3225fd0d61022dd34b71dab2e8c39ed",
".git/objects/aa/53d6820da58ff89a96cefe790be6d349e2749b": "8df0839beb6121c715e7834d500a6b9d",
".git/objects/aa/904d6c2b6ddd43fb452215104590b080e00d3b": "155f49aca36d5d08cf465838937e0eaf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/c93afeb1e6a3d125904b129d7b8e6255fcfe83": "c2c009a3ae774ef6dc2b753bc6648995",
".git/objects/ab/ca03bd7523e3e57a05632b10dc52a0bb1e5fcd": "9dfbdaa5dd2599aba2e5f6eb7889e05c",
".git/objects/ae/1cccc7ca6ebf26b1e4104baba791f1ee278785": "d6c9a4268f64077e9f6637d2afce5d73",
".git/objects/ae/a05aec64f4ef29fb3d4f3ea0d722b358eee452": "302c478303bffed88fe71e2c27e0b434",
".git/objects/b0/151a0058c560ae171eb3a2ef3ea89de6c6fe44": "fd6b397a858b659c41fe5a14b60f4160",
".git/objects/b0/1db8118515de7f972c7c0401ad7a82bfcc9fcb": "5e1762be1b29a21dd2884319c333f5ea",
".git/objects/b2/926404971d660f9e5a5777fdafa3bd71416af6": "4d54ccc4a291f93e79b115f848a8c3d9",
".git/objects/b3/023ac912a20cff5d3ce47b4e31e763e4b67eb4": "33337a946c1801b01d74a9011734a128",
".git/objects/b4/252bd97781d8f513ff5155c72278923dc03322": "4e21b1a54c38a99f76d11dd439b406f5",
".git/objects/b7/2f8321fafd6262f7a1bd5bd9321fa898081fed": "e9a1f196068b1764916d9be33d43c388",
".git/objects/b7/354d6da8518192b5ce7d04d09c6f70128d3ddb": "3a61b2238b4d3296b010c404549aa141",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/57c4eebf8bd1d0758bd359f657641c8f1f6f92": "e61e620bde34ba1ff2016ecae072096f",
".git/objects/b7/a7911de2de2ab090bf69dbfc932d26dd2e02b0": "80c7ed2a661b1309823786847912f8ac",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/42feff138832102cfdae324510d0650da8e1fe": "f52f2272dbd9c84bbda28389886aaed3",
".git/objects/ba/5998fc7442a0d6ff9eab36285841973dd787c7": "6c363942cb18facb54a84790eb8df1f1",
".git/objects/bb/feca2a69b906ae16be40bb4997f27262420c3e": "6bd05d7702237b476dcaf9e761f7e9f5",
".git/objects/bf/0a9adf51cdc27b46a07694083a11a516e4c123": "e811fc32e9a4467caf486601217c7397",
".git/objects/bf/472e65f569ae9a5cf5c146c989a664e764af88": "7b4fd985282ba600d29e832be80d6b20",
".git/objects/c0/92067461802fb13d005c21d076421b64586c23": "25efa0ecf0ff548883601d6c019edbdb",
".git/objects/c3/23b2c2abe7b70419fc4233a6657bb5253ba30c": "91e37731c27ea0c4480de1ba31399f3d",
".git/objects/c3/68e469aa612a514ead8a67a11245c8dbdb747d": "4926d805780a659f9593d591f34c5a2e",
".git/objects/c5/3d7b1a88fc6cb3e06bffc24af62c39615de827": "fc9241be2312d8fe1fccd02240e7d409",
".git/objects/c6/0419e30a1c4205e38f26b445bd31b2a75c65f6": "1debd4347e4233fea8f8f5d4a81a6eb3",
".git/objects/c6/40f242dde735359ef94b9ffc0c8410e88f9135": "01932ed4e7aed571ccb740ac51a2d7a7",
".git/objects/c6/7f2ad84aea840352832aace67a12c6c4f53bb1": "dc1eccd678623c0aa845032623a6ff18",
".git/objects/c7/18ec8dcb985c1a2b6d79d320224216821e5acd": "400cb278b94d57c2f86f695f52ec764b",
".git/objects/c7/8992f68e0fceaec77e174d749fbb5289654324": "db3d6f25c35259844644880e899c2c72",
".git/objects/c8/6a979a5f99551e892833a8ac431ea43cf1ab75": "b76644530f9fa4ccee27327d807cc10c",
".git/objects/c9/61d76164aeb6464204deb378f659814a23960a": "9e3fd17c452705cfabc526fffc922a62",
".git/objects/cc/17f2c3a9c3c48a6ec9e6371ea963ec2abefd4b": "502624c25f8e8daa3b9958eb2bb41d17",
".git/objects/cd/790aa7d50b3ab5b1e275844cc36f130ff26550": "10a634903945528a210c6980cedc8e80",
".git/objects/d1/e225b76940208f0e0965df2cdfbe9d87060960": "45d8898f26d444242456cd04956c70f7",
".git/objects/d3/5f9b586a80775b6e6e20cfa4f040cc11f82227": "138de3f73685994eaffd669314ac6938",
".git/objects/d3/f4c8b96cb0865b14123271e68f310580b3c4ff": "07b151ebf5bd64fb60bd9822cac6af5f",
".git/objects/d5/c6a0ef4a6c870645026fbf9d702eb3a16607aa": "36e42f7969d1345630a8d06256efa944",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/09a8de7525f284cb713e5f6cb64e11809e6b3a": "71f9dd9c7f00dd4cdd0a63b4fb1bb46b",
".git/objects/da/4fcac182d9ffcbe5ec80b947510d590ce41138": "860bd83bf0f7d6d6bba60b488b14a307",
".git/objects/da/5c02c59bd00ab93ae2612930e030e41c41ab9c": "e9f31c67b0df40f5093190be4088a006",
".git/objects/da/c4e0ca7f221ce8ba4cc88d353daac495b5006b": "ba6bdd6113cdd9e3f7c496ae1b547a14",
".git/objects/da/d4703db74cb08129b2e4fabd91347bb131c8d8": "73442867b18c427021087b87741f9357",
".git/objects/e2/c29945f0f7ea213b0ef8d07527830833f41de6": "bca5d598822b7ab595e0ca6d8418a637",
".git/objects/e3/cb4dbe1ba2059bfe0c95b8be5bb206db9e86fe": "b2593a4666394c8e82e51a85317e2b52",
".git/objects/e4/48d86f6c8a6617e8ea1e434fdf85497ebaab16": "66f2696975f1ec71e7fad38948c7fce4",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/ece0f1dabe6ba17570c6835e5a781a8278e2b5": "527747621b30a20e39ba0a090fa7ba74",
".git/objects/e9/7948f7a5d2c6ec2035682b8221fa46628775d7": "f13c38d1dac9d3baebd751c055f20e11",
".git/objects/ea/48c832c09283d98ed52677ce08924a33b1c11d": "7743d40ee87d700e1ff58d65cb365d96",
".git/objects/eb/5d3679cc7874a77d354a1efb93915b98e19900": "e31fe8f869f8c9d5ae8abf2a4de76e93",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/bf4ebc00cd90198c1653a5cdeecb1b3bbc0ce0": "b9e0e9ef379d6e1a43c73598ebab129d",
".git/objects/ec/55f99920fad79fd184e9d0e15801023370c40d": "a633d986b16e51016e8a8e1d7cb47ef3",
".git/objects/ec/99f4b0a77059316cfb091733e6895384b34240": "d0f79e8a6a71a8fc1711b18babeff339",
".git/objects/ee/a0f7ca75efe82bbec1a6cf432f3209798dcd48": "9e7d66abb69eb86129b899bab0f7c24a",
".git/objects/f0/18ff72e4124ea3c42c952ee8b407de79568ceb": "793f3954d727b6036292a9c85a263b77",
".git/objects/f2/e7904868d1b30f83f27b5e608339ae8446533a": "56cf1950e660d253e3897d4f9af89f3d",
".git/objects/f3/e9aaa391ad317cb53e7c62f91a72499ff75de0": "b804898d898c8abc4a5185f87b547c84",
".git/objects/f4/5a595c91b39647e83bad8d5ec409fbc01fd8f3": "826cb0e9c4c735362b62c6cce442a344",
".git/objects/f7/fb00d350a0793f5bbf8375a15c03ea4c0e34e8": "6e8aa30ab86acb1398cd61efbcaa972e",
".git/objects/f8/0abf59b4e157c38585b8fa6cba1af9adeb0415": "02e3ca2e9d71d483cc7a1bf136e367d1",
".git/objects/f8/4b2f6ec0b2ab66c16fb7d6bf429d3542ca2128": "bfe3f525e8cacff3f8577e120866acd2",
".git/objects/f9/c04b47f49804057420f001b3e61fbbda11f315": "58625e60ecc123b4cc6a1245597d98c7",
".git/objects/fc/00b4e6f7d637aed369286c1081ac26777225b7": "8d2f421e396a66c1230eb36b7a6e3f97",
".git/objects/fc/fa7c569b8c6baaea05046edcb76c72c0e081dc": "a5c835d5dfc8848fdf064959f69465e0",
".git/objects/fd/e9389e382668affba47ea4f9951354e33cc03e": "8438d8894197c943c95e0daed3eaf695",
".git/objects/fe/63d24ef605b591b807b896217179045aa5c888": "d5e0c614864faefa365a0e660ddb913a",
".git/objects/ff/2e5b8a2b5fd8ca637ccd045741126814c3ef73": "1869cdb04b95991f23c6da486d28901d",
".git/ORIG_HEAD": "5ef904fb83d57c6ae87bcc50d366ba5b",
".git/refs/heads/main": "fbd9eeafd560ad374358f88a7414134b",
".git/refs/remotes/origin/main": "fbd9eeafd560ad374358f88a7414134b",
"assets/AssetManifest.json": "11a1a2f3562e03843bfae768cf497d79",
"assets/assets/fonts/Consolas.ttf": "12d0936c98eced9ae9c8425e2ca02da7",
"assets/assets/icons/input.png": "4fd23601849d500a5fd0f533877fe866",
"assets/assets/images/chat_bg.gif": "399fe92db91fb7a461fca0278e17a013",
"assets/FontManifest.json": "0f3f0bb5aa7e6f215cc510bbacc32824",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "43bd5df446bd4a0f8f516a533e2f2886",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e07966e388fd4f7e9c111c69d5de2fb5",
"/": "e07966e388fd4f7e9c111c69d5de2fb5",
"input.png": "4fd23601849d500a5fd0f533877fe866",
"main.dart.js": "7fa3a8aed1c0faa25d040c461e711764",
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
