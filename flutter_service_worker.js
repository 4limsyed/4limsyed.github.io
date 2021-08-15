'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "fed2c0f3c45002d4290181eefb1810aa",
"index.html": "75f0c4f560fff4db4e05749609cfaca0",
"/": "75f0c4f560fff4db4e05749609cfaca0",
"main.dart.js": "e01d36908d56f9299e50fd4486a53487",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b3c2b1e3f2d075cf88ff80605a8e68c4",
".git/ORIG_HEAD": "a3f5b20e06be9da27bf4eba9966bc39c",
".git/config": "3a868010cdb7de6bed5f77772698c74f",
".git/objects/59/60d62548c802afb166ca6470057f9aef38551d": "3b20ac4abd27492e1c0e8079c029591d",
".git/objects/0c/7ff74d8e6c980d1ce4cf600cd3520431187a53": "df3e6dc8a72b77b539c3b1bfab1948ae",
".git/objects/3e/11dce0a88e64ce4adabade9895c712c7d5b79c": "52b9ffccecbb1786f62439cdab916b46",
".git/objects/68/7dac740397677614b93e6ca1e160c7f9aa9291": "c292b43857e8811fdb6596c0d0de440e",
".git/objects/03/69225a46c83609c2e5c0c2879aa70964200c6a": "f4512c7f26fa3ca058199df57f87a9a8",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/69/de9b3bf0aa686aabcb2565a36f5b76ca572dfd": "e97d42381f4335d7b458f40611c00bc2",
".git/objects/3c/d13f4928f62175cd62aab3309b7ddce1e1a240": "02f6219b43c61ecdcccbec479707f481",
".git/objects/56/cb34b7f8bb9dfda46cb113ab3ed7677518d641": "e428c355ab4ee88e955cdd6288a897d4",
".git/objects/51/15e1c76c410fe0a9d4b945039587d4438d54ed": "6e9cbaf8bbefedf0b5325089924a8409",
".git/objects/3d/4ae5943f4f7dba29eb9d47f813ce4e487a6602": "a91bb04707c5542bbcdad63ab7b0651f",
".git/objects/67/9b36c9e2295c635b5f67d0e60f10667baf77e0": "9525f15084561079f7073fee30d0d480",
".git/objects/33/a0bec6b6a9ab33776f3043c01322b8a569b2a7": "cea7afbba51f2c09685586f6d69880a9",
".git/objects/05/b08d48aa59f24b775b56e1636aa8a95bddfbae": "8e7a513990699e60b5905a13ab654e3e",
".git/objects/05/c5203e9a6fc3fbb30f3c08b677c22976dc91a6": "9d5fa3bc08fcd546dd4af436132f01e8",
".git/objects/d9/a2d3ae41b42640313515b4233ecab62b4e1e48": "a91cbb4be575ea409dfe4201ca1bbf7a",
".git/objects/ad/b1f87a122548f0f2ead9def60469624756b29c": "730c36ef7ac9b923ecf073d091063d21",
".git/objects/d7/64c03ae31f087afe63a4250f81e0072e71f4d3": "adcd280e8ae740e41c81af0d99aa7651",
".git/objects/d0/4cee783fd5221ebc2ee355932d7c45c00d1da1": "209ac84d62ab106fb298f1652a51ecc9",
".git/objects/be/eb0cf531012a377221286def4e50895d517cfd": "e7bb89f7c24f44c49af331e852bebf28",
".git/objects/a5/ae5896ce8fbf80d5f6ff6bfe520b0970dc5689": "a6108f75470a66e8e2e8c2218b1cea29",
".git/objects/bd/73102eaf51800a23eddd9cc80e844749f5e8a8": "1cd87f7d9f48f08a337eafda9c8d4a4c",
".git/objects/d1/ab72e8a53c5e654610501633935aeeee6efa9a": "32a52908290401f0e0855d2ea343137a",
".git/objects/d1/f5f25c519a754e0f11077f1dab9ba6b04e0dd8": "961e267fe74c0c24b72aac71f61491cf",
".git/objects/d1/ffb573f3b01b626e97267dccff30126f3d720a": "73ca00d182f30b4c326ae64e7c5336c8",
".git/objects/d6/08aca461094b0f89f9a907ff1738e23008e65d": "833988a5483eefad3198a502636d77e1",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ee/677bacb97524808ecba336d9ff93b090e90a21": "caf8361d20380608f1b1180abdc02fac",
".git/objects/ee/29e01701868ed6f6a98cc5247306c4ae25fea6": "3aada77f18da816e1ff8cbabc1bf88c2",
".git/objects/fd/198f387819170ac0a38a22f7a8e4f03b3178dd": "7c16d90522a7a11c37b600f59ae469dc",
".git/objects/fd/e7001227e3235b662d47ed4a5121b7bf380fb6": "fae689dec00d024733eed3f6a8c1d384",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/ca/8176f70e2ec7a44c5002b5ff6bb5dfc7c3d812": "7008b77ae95f071791352d3b11b3ab6b",
".git/objects/ca/b89d592c1f08c6305c7c5f60980c012067b35b": "f657050b5edebf608a489ee0aeeae7d4",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/18/a1b3870f8727d2f6d809d20095ae37451fdffc": "ed0482b2a5eb25a9e3191f5627c61dc9",
".git/objects/18/b667495ec09faee994f385023ce7dbf91f2750": "833be6dec28af0a4e28c3c81b3d746d9",
".git/objects/4b/45a3ab9e106b226f4c51d478b2dae5c85a3ec6": "9a3885931bb714254f72f3cff50d9db1",
".git/objects/pack/pack-a111f8e9715c391c0f8d99ea89150c98e952d516.pack": "cc157d5c92fc0b79a0b0d86619d0536f",
".git/objects/pack/pack-a111f8e9715c391c0f8d99ea89150c98e952d516.idx": "38c53de1101e43fec99b01657b503e37",
".git/objects/89/149c94900e2df45e05301b77a24e5779bc83dd": "cee19e9e83c8846998c4f07652f8fc30",
".git/objects/1f/f4fc2c2bebeda02ae362063418cc1179559921": "aa5e81ce6178adcd7c886258dff934c3",
".git/objects/1f/d3b279eb0bd8a32046e48c410c7e5517ff00e5": "5c7551e9f1b948966e6bf0948b2e107a",
".git/objects/87/b4bde9d85dcba47eb4550175ce124989917b18": "7e6a9bfed30b3c2c319b2ab90344f48c",
".git/objects/87/9a0c35c338782f08cb4cc21beec9ed113d633c": "b9dedc736832b1bde07d197cdfa86c64",
".git/objects/7b/045f55d343ab6cc41ca927fa4263a3b470798e": "853ace8a8b2c29f5d91e33d8a3110e91",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/82fd61e8f275a7ca6f82884840f1a7335c86c3": "3aa710c6e1b1aaaa2e7f9ad5f14565b2",
".git/objects/19/1317293e2e981f3f257280b3180c776cb4cfea": "817422268994764ae990b13323800d82",
".git/objects/4c/874c1c6c73333342e4a2d07eac86887cf0c265": "e5e4cb1b5e99199a37013a5b0d995830",
".git/objects/86/fe58bd117bb4b2fa1e57bd8068d00ba1b6019c": "492b51d135c2834fdc6c785ed6ea4fc4",
".git/objects/72/4425729d5fb015563df2fa4dc86ae3fd4c1655": "feea926d78ac34ccf8368e15c0d23045",
".git/objects/44/55ec37b383c4685cda0a1b83f318c5376f160a": "8e0746cffd127f17f06923e62399de3f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6e/1079f73332e2af734a0198898d91b29b6bdb4a": "bbb4cc96502c2ec2ef031299054ea567",
".git/objects/36/5c1f91f01ee889c416ceb8f2f68a317622ed2a": "2255a9c060f512130625380680669938",
".git/objects/5c/4dc425854ee8173d644c566229e2a68dac3f9a": "db9dc21a246eed3ae3c92ae2f9e68f6b",
".git/objects/09/398f25db5c5b061d19b3712388a5f32b255e29": "6bb2536ba32ffe33b87fc9c3a6eb0c7b",
".git/objects/31/535e7cd3e7ab0390d5fa1695851d960354780c": "ab289a7e090ac352d7e581e1bb5231bb",
".git/objects/31/b9b3b8f20349317923fbbb190bd9d06496a390": "6cd7ceac45171f4e5375a0dfc7a3bb6d",
".git/objects/91/fa7be03d6069a1276dbae3a77fcaadfd86510d": "fc38b00f0ca8bf49e06d19bb76d84e92",
".git/objects/62/177a68c16d47d142ae4bf785568135f5e86f09": "e142545dbd0243eb841dafcc6b0caef3",
".git/objects/30/2179a46e082bd49282ec6fae38faefc8fe5192": "95e85961ad8ce9d750dd0dda53153764",
".git/objects/5b/2b7a47814a221bb198e8c76d8bea366afc52e4": "da7710c507f7bb718dd1dce086f2f5a2",
".git/objects/08/7509a3ed2c03cbd7df131f4797329357ed83e8": "2d1c687cb43dcb2af75c8717d563edbe",
".git/objects/01/4004507398c7201d305f91e79f4e57964b8a5e": "3e942bf3c4c437239b688ce44f181780",
".git/objects/06/ac475e55c9a5b821f9877ee06e6ed0a70d5322": "54069e4ba1cb82c9301188c3c8c68da3",
".git/objects/6c/106a5b7e5aeca9286dfe7019bff6d2e4787581": "46efbd334ab8cb7d8fe8b93b374e8dee",
".git/objects/99/930cc735864b8d379d364fccde1d2483183fec": "b07b1a4aa0958dfcddbc8bf4dd4c7dff",
".git/objects/55/48cfb75d361a7705320fa8f4c1da90d7cade7b": "61a175be567d8d602d3529f1e779a149",
".git/objects/d4/564b5007b841614f43503bc5e0a83c1c3e81c9": "2e959264262803bcf89541d2573da86e",
".git/objects/d4/0c4cf537c2178e32c002ef3421d9b536dc1de7": "a295511805482ae8cb06df94c2dc2329",
".git/objects/a7/a83010cceda32806c1a0fabcfeb5123b44bb06": "fe2eddcdecac18fa7d81fba5c24b2671",
".git/objects/b8/2bfb1f0b34ca7ffe7cb44395183eff2bdcd72e": "abbc32acf658c3413f305370e83b58df",
".git/objects/dd/863d4e0aeac44a0878bcf325a787774dcffe20": "bd007ad04f43bbb1891496fd1aa2f0ab",
".git/objects/a9/77a0e11a53cf908fea6a4d50821d292bed472f": "cf7db29a7418e27dd924b8406abed3ef",
".git/objects/af/3ef273842f0c8285b7b6073bd9f688e44199ad": "cd86e9cb7c8353dddfffdd7bd697287b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/91838bf50eb730756ff16fb8745d1d25669e36": "76f843868dc2006090f6a03ce1893fcc",
".git/objects/ea/082d92130fe5449a9f9f1145ccf749225cf8e6": "976b1fab546a38afd440d24db3d4c11d",
".git/objects/cd/be4842b6ecd602b1f89fa04c51273feb4a51c9": "a88a9448706339e7ca03a1211cae9d94",
".git/objects/cc/77e1f7191423b990551aa8223e127d0a0f1046": "9e11ec6cf0492f2c5a212303a8360c3f",
".git/objects/f9/1465fb966b657d919f23ab30b00afbae9dc49b": "ac14f0766b9003786ad3f854a9139ecb",
".git/objects/f0/0099115ea72aa8ab184bc07e3dc9a34116b5ec": "3d23d0af9fedee0f170b483a6aef77af",
".git/objects/e8/35068012679012e04395a9d9fa33c81e33bf1c": "fcb157b71fc2f10888267a91f2198273",
".git/objects/fa/98b3e2b354bb4fb162eff82f160970ff1de965": "c3361cf5208741e47167b42b3964705a",
".git/objects/c5/54dce8e9c4123a143c360db5590ffa9029b975": "6734b8a5959f888a8e4b986e6dc5de46",
".git/objects/c2/1095c3d06f85892783da0387a037c048797ad7": "85b375a79d5259ef0c8e81bf6ab4b02a",
".git/objects/f6/51a37db2cd148f3ae7efd176897ec227475ab9": "584deb2de2d5943e4c6768118b0616c2",
".git/objects/e9/0e4ad7471b38f6ad1d9368e9acfaacbfef6ce3": "a58a8977fdf00246914b28f722b1fb02",
".git/objects/cb/2ea6945e37a1a98b37b7b581c3739776b1493c": "a35deb3344e3349ca3947894dccf0cd8",
".git/objects/cb/19ae23c46bf278e1543de88257574ecb2a491b": "c9d46ffd545648b853a935965c01209a",
".git/objects/ce/909428e0fe77e553aeed0ab7ed3dd4a3a2a244": "7370eed9f09b52653375ad67bb4fd2b7",
".git/objects/e0/dff7c1c1493087e21c712f0e2e094907e9e9f9": "2de8dbbeb926d24dcb23da58c8add5fa",
".git/objects/46/8b46bf652022f7d6f3d8cd2173e0d249931952": "c27b0be8115bea839d07497e01ba01ef",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/201497101c29badb78751c1c1bc1e4f5d3edb3": "f5bab7d05b7924e55b437053631c0d48",
".git/objects/46/652e89ad94887184c45b7bca5a7b1cbee76ffc": "60a8620ee9f1b9c7cd02d73598a17e44",
".git/objects/79/6111bd5b8f0d0e46bc780818bad1dcdd8413b5": "2133dad2c877c379f459c6c6ddc74e32",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/665c52d6ace47dd25512ab844229794c660da1": "c0fc14a172070c9f4cf38a04f5bf0e46",
".git/objects/41/dae4b91ed1ddafd0d12399b21f3eb64f725d66": "57b60e491b1822e2a934282a8bff8395",
".git/objects/1c/bcba92627533b0e4118a0c4a21a2bc41f7d86e": "4d5b69063f375bdabe11c4d7ac4804d0",
".git/objects/40/1678ed992e5abe02c7ff0ef12296f4d4986c04": "776f05c9b415be2139fe4c79257754a2",
".git/objects/40/7d6243550dc84638c3484d382592cbd99f9bc4": "69ca26e4de598a333efab386472f3c58",
".git/objects/2e/412a90cba07848dd2f94c5b37d97bc218703e7": "a9e72450d847552eb9431114b73dbb7b",
".git/objects/2b/edbe8793840e2fa6a1a9b9c9f5ca41a18cd290": "87363b979b1c9dc8b291ffe650e2cd82",
".git/objects/7f/237dc14639bf712f56d30c299694c1a1bc922d": "f03c76d14d953ac3c90556873ead3dcd",
".git/objects/7f/38e4d72db76ff227637eacc00ac067f99d8f07": "f50b92ab49bde29da29b51eb27a10ea9",
".git/objects/8e/0e7b6802b0418f7ed36005c732fab970d5124f": "d90a4a6321b16fd012abd4685cb20ef7",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "63bc5a47edec3cd78d0a1103e8c80a98",
".git/logs/refs/heads/master": "63bc5a47edec3cd78d0a1103e8c80a98",
".git/logs/refs/remotes/origin/master": "464b012c1abbbdb6b992595c93aa0c7c",
".git/logs/refs/remotes/origin/main": "8f0df1122f5725496599805bd39099cd",
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
".git/refs/remotes/origin/master": "2515a97516613cc5d76ffb93d4ecc71a",
".git/refs/remotes/origin/main": "3c83f355be4fcb4f2f81207a14c80190",
".git/index": "270db6365b4ff0fed7f1cf71a00a1a9f",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "d77a94b55190dbe4e00acbc62f0b7022",
".git/FETCH_HEAD": "a087e9c0f1ba8de283c50c43c2c35f69",
"assets/AssetManifest.json": "1e20a2eee62210db15e96e082fa0e809",
"assets/NOTICES": "0bbe55b369a3ccae2ed0b2d81805e78c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/lib/assets/pngs/developers_responsibilities.png": "f7e0beeebad7364b62ee5e8a3f593ee7",
"assets/lib/assets/pngs/work1bg_stars.jpg": "25268e777de6e39f5011f88e83252fed",
"assets/lib/assets/pngs/seo.png": "74425d3077c7db54cffa0a8963bbaae8",
"assets/lib/assets/pngs/skillset.png": "be1d57796e7e75b1cf760f5b9eff08b0",
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
"assets/lib/assets/pngs/coding.png": "013663a91e315505b72835c8c5ec3bab",
"assets/lib/assets/animations/18123-developer.json": "b6a331a54f98cd1745bd6a91a2541a48",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/myPortraits/portraitDistortion.png": "5614af9159377d815696876ca65c9a3f"
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
