if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let o={};const r=e=>a(e,n),f={module:{uri:n},exports:o,require:r};s[n]=Promise.all(i.map((e=>f[e]||r(e)))).then((e=>(t(...e),o)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts("fallback-v0R0nQLPX6_SPRRNpJqf_.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/218-9ad5435a5e0b32a6.js",revision:"9ad5435a5e0b32a6"},{url:"/_next/static/chunks/260.663958c20e3d63e5.js",revision:"663958c20e3d63e5"},{url:"/_next/static/chunks/267.d0affe5b41d15024.js",revision:"d0affe5b41d15024"},{url:"/_next/static/chunks/315.1f0b1befdef0629b.js",revision:"1f0b1befdef0629b"},{url:"/_next/static/chunks/397-c9c108ed6ab70ab8.js",revision:"c9c108ed6ab70ab8"},{url:"/_next/static/chunks/434.bc8dfb2807950101.js",revision:"bc8dfb2807950101"},{url:"/_next/static/chunks/481.2ff20e7ed3150301.js",revision:"2ff20e7ed3150301"},{url:"/_next/static/chunks/589-1727904fbdf4dca0.js",revision:"1727904fbdf4dca0"},{url:"/_next/static/chunks/664-93d71103cca4880e.js",revision:"93d71103cca4880e"},{url:"/_next/static/chunks/674-4251269fa59d3140.js",revision:"4251269fa59d3140"},{url:"/_next/static/chunks/675-1d6a659fc9fa6d12.js",revision:"1d6a659fc9fa6d12"},{url:"/_next/static/chunks/678.1a807fd8ab6e8d4e.js",revision:"1a807fd8ab6e8d4e"},{url:"/_next/static/chunks/718.6404c4d7627b557c.js",revision:"6404c4d7627b557c"},{url:"/_next/static/chunks/760-27901a47846af7ed.js",revision:"27901a47846af7ed"},{url:"/_next/static/chunks/794-bc3025d631a50442.js",revision:"bc3025d631a50442"},{url:"/_next/static/chunks/807-8e9765f0cf5c1e5e.js",revision:"8e9765f0cf5c1e5e"},{url:"/_next/static/chunks/90-5bb1e3edcac65c55.js",revision:"5bb1e3edcac65c55"},{url:"/_next/static/chunks/910-c159db797aacfb76.js",revision:"c159db797aacfb76"},{url:"/_next/static/chunks/ea88be26.23d0fcd5556dee2d.js",revision:"23d0fcd5556dee2d"},{url:"/_next/static/chunks/framework-4556c45dd113b893.js",revision:"4556c45dd113b893"},{url:"/_next/static/chunks/main-e37b1cff1b3e2251.js",revision:"e37b1cff1b3e2251"},{url:"/_next/static/chunks/pages/404-20b36207d98d74aa.js",revision:"20b36207d98d74aa"},{url:"/_next/static/chunks/pages/500-02f7a78561cea69b.js",revision:"02f7a78561cea69b"},{url:"/_next/static/chunks/pages/_app-eb6794f0155faf60.js",revision:"eb6794f0155faf60"},{url:"/_next/static/chunks/pages/_error-0a004b8b8498208d.js",revision:"0a004b8b8498208d"},{url:"/_next/static/chunks/pages/_offline-84fa29cf76204244.js",revision:"84fa29cf76204244"},{url:"/_next/static/chunks/pages/after-payment-594008868230b616.js",revision:"594008868230b616"},{url:"/_next/static/chunks/pages/after-payment-no-e9553c7efe09c3ef.js",revision:"e9553c7efe09c3ef"},{url:"/_next/static/chunks/pages/after-payment-submit-df0624ae061c92f0.js",revision:"df0624ae061c92f0"},{url:"/_next/static/chunks/pages/auth/login-c5403499481c76ad.js",revision:"c5403499481c76ad"},{url:"/_next/static/chunks/pages/auth/signup-982d7ca90ca5a578.js",revision:"982d7ca90ca5a578"},{url:"/_next/static/chunks/pages/complete-payment-5a73676e0df3c5d3.js",revision:"5a73676e0df3c5d3"},{url:"/_next/static/chunks/pages/index-3d44b7332928e51b.js",revision:"3d44b7332928e51b"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-ea09cca857bfd24c.js",revision:"ea09cca857bfd24c"},{url:"/_next/static/css/6575321112d5af86.css",revision:"6575321112d5af86"},{url:"/_next/static/css/7f47b9549bf34fb2.css",revision:"7f47b9549bf34fb2"},{url:"/_next/static/css/8b55c0b4a7033e5a.css",revision:"8b55c0b4a7033e5a"},{url:"/_next/static/media/ajax-loader.0b80f665.gif",revision:"0b80f665"},{url:"/_next/static/media/roslindale-decknarrowsemibold-testing-webfont.4ed288f4.ttf",revision:"4ed288f4"},{url:"/_next/static/media/roslindale-decknarrowsemibold-testing-webfont.70025004.woff",revision:"70025004"},{url:"/_next/static/media/roslindale-decknarrowsemibold-testing-webfont.7c210281.eot",revision:"7c210281"},{url:"/_next/static/media/roslindale-decknarrowsemibold-testing-webfont.b8a67631.woff2",revision:"b8a67631"},{url:"/_next/static/media/roslindale-decknarrowsemibolditalic-testing-webfont.8bcc9e74.woff2",revision:"8bcc9e74"},{url:"/_next/static/media/roslindale-decknarrowsemibolditalic-testing-webfont.d0486e13.ttf",revision:"d0486e13"},{url:"/_next/static/media/roslindale-decknarrowsemibolditalic-testing-webfont.d9b78549.woff",revision:"d9b78549"},{url:"/_next/static/media/roslindale-decknarrowsemibolditalic-testing-webfont.fa211a9e.eot",revision:"fa211a9e"},{url:"/_next/static/media/roslindale-displaynarrowbold-testing-webfont.3e7ec742.woff2",revision:"3e7ec742"},{url:"/_next/static/media/roslindale-displaynarrowbold-testing-webfont.7e38d5f3.ttf",revision:"7e38d5f3"},{url:"/_next/static/media/roslindale-displaynarrowbold-testing-webfont.c9a8ed5f.woff",revision:"c9a8ed5f"},{url:"/_next/static/media/roslindale-displaynarrowbold-testing-webfont.e0e5fa54.eot",revision:"e0e5fa54"},{url:"/_next/static/media/roslindale-displaynarrowlight-testing-webfont.3023e786.woff",revision:"3023e786"},{url:"/_next/static/media/roslindale-displaynarrowlight-testing-webfont.5e7f246b.eot",revision:"5e7f246b"},{url:"/_next/static/media/roslindale-displaynarrowlight-testing-webfont.606e9952.woff2",revision:"606e9952"},{url:"/_next/static/media/roslindale-displaynarrowlight-testing-webfont.a9555cf3.ttf",revision:"a9555cf3"},{url:"/_next/static/media/roslindale-displaysemibold-testing-webfont.132c171d.woff",revision:"132c171d"},{url:"/_next/static/media/roslindale-displaysemibold-testing-webfont.44743213.ttf",revision:"44743213"},{url:"/_next/static/media/roslindale-displaysemibold-testing-webfont.c8091246.woff2",revision:"c8091246"},{url:"/_next/static/media/roslindale-displaysemibold-testing-webfont.feffaa1b.eot",revision:"feffaa1b"},{url:"/_next/static/media/roslindale-textmedium-testing-webfont.18b17fc1.ttf",revision:"18b17fc1"},{url:"/_next/static/media/roslindale-textmedium-testing-webfont.1e34fdd7.eot",revision:"1e34fdd7"},{url:"/_next/static/media/roslindale-textmedium-testing-webfont.a923df25.woff2",revision:"a923df25"},{url:"/_next/static/media/roslindale-textmedium-testing-webfont.dbedad28.woff",revision:"dbedad28"},{url:"/_next/static/media/roslindale-textregular-testing-webfont.2b17d76b.woff",revision:"2b17d76b"},{url:"/_next/static/media/roslindale-textregular-testing-webfont.7b5904bb.woff2",revision:"7b5904bb"},{url:"/_next/static/media/roslindale-textregular-testing-webfont.9653d9a4.eot",revision:"9653d9a4"},{url:"/_next/static/media/roslindale-textregular-testing-webfont.9fcd7c42.ttf",revision:"9fcd7c42"},{url:"/_next/static/media/roslindale-textsemibold-testing-webfont.370c9381.ttf",revision:"370c9381"},{url:"/_next/static/media/roslindale-textsemibold-testing-webfont.c444c820.woff",revision:"c444c820"},{url:"/_next/static/media/roslindale-textsemibold-testing-webfont.cb2d6e16.woff2",revision:"cb2d6e16"},{url:"/_next/static/media/roslindale-textsemibold-testing-webfont.daeee3a5.eot",revision:"daeee3a5"},{url:"/_next/static/media/slick.25572f22.eot",revision:"25572f22"},{url:"/_next/static/media/slick.653a4cbb.woff",revision:"653a4cbb"},{url:"/_next/static/media/slick.6aa1ee46.ttf",revision:"6aa1ee46"},{url:"/_next/static/media/slick.f895cfdf.svg",revision:"f895cfdf"},{url:"/_next/static/v0R0nQLPX6_SPRRNpJqf_/_buildManifest.js",revision:"7ff1e17d91b8e507c7c9c4166d84f6da"},{url:"/_next/static/v0R0nQLPX6_SPRRNpJqf_/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_offline",revision:"v0R0nQLPX6_SPRRNpJqf_"},{url:"/assets/fonts/corbel-demo.html",revision:"e12b317cf74e0697f502cd9fd6cd1b7b"},{url:"/assets/fonts/corbel-webfont.eot",revision:"be0eaa9f3aa52b1e8ca4fc9eeedfb606"},{url:"/assets/fonts/corbel-webfont.svg",revision:"8d7a6499f60e4f462af276b21d063ced"},{url:"/assets/fonts/corbel-webfont.ttf",revision:"4d97026343ee754d81c964b9affaacd6"},{url:"/assets/fonts/corbel-webfont.woff",revision:"b2893732c1bcf56ded072129713fcc83"},{url:"/assets/fonts/corbel-webfont.woff2",revision:"8d6858e40351a6f2778647eb86f811e0"},{url:"/assets/fonts/corbel_bold-demo.html",revision:"4102225006c1bf02a9e8cf6828bb3cc8"},{url:"/assets/fonts/corbel_bold-webfont.eot",revision:"73437dff94669488115ef433d1c04ac7"},{url:"/assets/fonts/corbel_bold-webfont.svg",revision:"28763cedcf5cd6da265016a8fd85051e"},{url:"/assets/fonts/corbel_bold-webfont.ttf",revision:"a69965de4e60235b10304958b2311820"},{url:"/assets/fonts/corbel_bold-webfont.woff",revision:"87c8365b6978413a46300217ee1240db"},{url:"/assets/fonts/corbel_bold-webfont.woff2",revision:"00a7bdf278eb7b2a15021a0ec12568c7"},{url:"/assets/fonts/corbel_bold_italic-demo.html",revision:"62c522459246c731c266c13aebde93e2"},{url:"/assets/fonts/corbel_bold_italic-webfont.eot",revision:"f5a80612c4ec900e5d5d29125ce6e255"},{url:"/assets/fonts/corbel_bold_italic-webfont.svg",revision:"d1d1ecfb8de947b8cac06169714b1840"},{url:"/assets/fonts/corbel_bold_italic-webfont.ttf",revision:"38810c0d5956da44a5b9f6ee79d1b366"},{url:"/assets/fonts/corbel_bold_italic-webfont.woff",revision:"6d657edce82ad68f70e892e8875adc4b"},{url:"/assets/fonts/corbel_bold_italic-webfont.woff2",revision:"4a0115675f9588df3ed971f77770d159"},{url:"/assets/fonts/corbel_italic-demo.html",revision:"faf7c5655e9ed88f3dbd0621f3ce48b9"},{url:"/assets/fonts/corbel_italic-webfont.eot",revision:"d9a93043f85a6302aa42d93d55973cb7"},{url:"/assets/fonts/corbel_italic-webfont.svg",revision:"2b6965a20ca440a36e10d0bd72690463"},{url:"/assets/fonts/corbel_italic-webfont.ttf",revision:"f037a9afa729a774c8f5eb5cee634d7e"},{url:"/assets/fonts/corbel_italic-webfont.woff",revision:"8b9a128f32fb038bf7395c073cbb9c21"},{url:"/assets/fonts/corbel_italic-webfont.woff2",revision:"1d0b38fdf8ff4c1c26361564880df068"},{url:"/assets/fonts/corbelb-demo.html",revision:"eca943339d37bf704c4c49a79454ecf6"},{url:"/assets/fonts/corbelb-webfont.eot",revision:"f2b40577defe99d7aca831d38eed136a"},{url:"/assets/fonts/corbelb-webfont.svg",revision:"ef761ed0628b620f6d4adcf69f61a362"},{url:"/assets/fonts/corbelb-webfont.ttf",revision:"38b6295f927143224de8bde1a188bc67"},{url:"/assets/fonts/corbelb-webfont.woff",revision:"7bf29a143f619fda0a3b897e4cde201b"},{url:"/assets/fonts/corbelb-webfont.woff2",revision:"86cd3e820ee4437393277711a4f06fdf"},{url:"/assets/fonts/corbeli-demo.html",revision:"a5fd1892902a703a77806ff97ccfbffa"},{url:"/assets/fonts/corbeli-webfont.eot",revision:"8622b330d62792abf47ab6d2869082f6"},{url:"/assets/fonts/corbeli-webfont.svg",revision:"5823f93f878837bd3159d7a8f5e0084e"},{url:"/assets/fonts/corbeli-webfont.ttf",revision:"f4c1c787f3dae909e6a911951c371370"},{url:"/assets/fonts/corbeli-webfont.woff",revision:"c426ecb13301450c6754a1fc381fd5e3"},{url:"/assets/fonts/corbeli-webfont.woff2",revision:"1f6ec86a6ef2ce13d6fc1da96efa6d69"},{url:"/assets/fonts/corbelz-demo.html",revision:"e737c0f7943f75ed3ec7b6798fde802e"},{url:"/assets/fonts/corbelz-webfont.eot",revision:"45a82f69fcf2bf1fcb97bdd3690ec708"},{url:"/assets/fonts/corbelz-webfont.svg",revision:"b8cc38cdc0308285c1c18e3ba6ccf05e"},{url:"/assets/fonts/corbelz-webfont.ttf",revision:"f53e125b885524b4f5d618b4b28de6ce"},{url:"/assets/fonts/corbelz-webfont.woff",revision:"3815196014a23d1a0996ad8c3582c916"},{url:"/assets/fonts/corbelz-webfont.woff2",revision:"2f95e6eb3c6e7a413711b162ed55b325"},{url:"/assets/fonts/roslindale-decknarrowsemibold-testing-webfont.eot",revision:"6f27bed89bcfd248d6d73436f16ecae8"},{url:"/assets/fonts/roslindale-decknarrowsemibold-testing-webfont.ttf",revision:"cc624089d0a8030976a3a8fc6f73ec49"},{url:"/assets/fonts/roslindale-decknarrowsemibold-testing-webfont.woff",revision:"e59dfef4e8e2594f66ad1f090671c808"},{url:"/assets/fonts/roslindale-decknarrowsemibold-testing-webfont.woff2",revision:"11ba3a5da37c755ecf2786ba53479aa0"},{url:"/assets/fonts/roslindale-decknarrowsemibolditalic-testing-webfont.eot",revision:"b6a1b0a1e99ac654522f0da4b7f03a3f"},{url:"/assets/fonts/roslindale-decknarrowsemibolditalic-testing-webfont.ttf",revision:"5801d54059d7a9725274298a064a1a9e"},{url:"/assets/fonts/roslindale-decknarrowsemibolditalic-testing-webfont.woff",revision:"586439a69c408a5e630e8116f7067172"},{url:"/assets/fonts/roslindale-decknarrowsemibolditalic-testing-webfont.woff2",revision:"881fb3d7da97002acdd4d1f21e845967"},{url:"/assets/fonts/roslindale-displaynarrowbold-testing-webfont.eot",revision:"58e9609260972eedc78d7b21afd874be"},{url:"/assets/fonts/roslindale-displaynarrowbold-testing-webfont.ttf",revision:"169b20a51eda15f04305b57b334ebae5"},{url:"/assets/fonts/roslindale-displaynarrowbold-testing-webfont.woff",revision:"045c9a2c9f1b41b0a6245690ed09d828"},{url:"/assets/fonts/roslindale-displaynarrowbold-testing-webfont.woff2",revision:"788cc6ae346529da221020c9625dcae7"},{url:"/assets/fonts/roslindale-displaynarrowlight-testing-webfont.eot",revision:"0528f9bfeb6f44bb98977f10adb07afb"},{url:"/assets/fonts/roslindale-displaynarrowlight-testing-webfont.ttf",revision:"f5f20a92f43325583d9a0a78d72d0f64"},{url:"/assets/fonts/roslindale-displaynarrowlight-testing-webfont.woff",revision:"72b31eafe807111d9c98c6e24282b155"},{url:"/assets/fonts/roslindale-displaynarrowlight-testing-webfont.woff2",revision:"5581bceebb761445b5c23da592809891"},{url:"/assets/fonts/roslindale-displaysemibold-testing-webfont.eot",revision:"d3dd7cf9a9bcd946457e08a41ec07b99"},{url:"/assets/fonts/roslindale-displaysemibold-testing-webfont.ttf",revision:"9dd721d36ed4466b579d4e323a9107a4"},{url:"/assets/fonts/roslindale-displaysemibold-testing-webfont.woff",revision:"eb047fefff950e7eeb2275abc68cc921"},{url:"/assets/fonts/roslindale-displaysemibold-testing-webfont.woff2",revision:"82e8b30abd88917c024cabca5e79054f"},{url:"/assets/fonts/roslindale-textmedium-testing-webfont.eot",revision:"e899b6c93baa70128b1e19624f930177"},{url:"/assets/fonts/roslindale-textmedium-testing-webfont.ttf",revision:"db8fa35f95a517257858d36abc3b5dde"},{url:"/assets/fonts/roslindale-textmedium-testing-webfont.woff",revision:"8a17182a98af7b9cc531db4883fd3dd9"},{url:"/assets/fonts/roslindale-textmedium-testing-webfont.woff2",revision:"f870a69d597c047b8fafc74c0feb3d0e"},{url:"/assets/fonts/roslindale-textregular-testing-webfont.eot",revision:"fe33627f56af839e6480bb0973df6d9a"},{url:"/assets/fonts/roslindale-textregular-testing-webfont.ttf",revision:"94aadf20a49117dc9913724c7b7c8a12"},{url:"/assets/fonts/roslindale-textregular-testing-webfont.woff",revision:"992f40899562a7e1cc3f7d462ff8e90c"},{url:"/assets/fonts/roslindale-textregular-testing-webfont.woff2",revision:"b3dc103aa1acb2e63cb0fb4e7c67a514"},{url:"/assets/fonts/roslindale-textsemibold-testing-webfont.eot",revision:"8317015f9facc6fb32877749713b9921"},{url:"/assets/fonts/roslindale-textsemibold-testing-webfont.ttf",revision:"44db766fd27ac5515314b7e22526ab25"},{url:"/assets/fonts/roslindale-textsemibold-testing-webfont.woff",revision:"f908faccb84798c0462f8a65745df9a5"},{url:"/assets/fonts/roslindale-textsemibold-testing-webfont.woff2",revision:"7f6630137bbf27975c9ce14657713a94"},{url:"/assets/icons/2082.png",revision:"65ada0ff471d1e8183b3b10deb5ec9d1"},{url:"/assets/icons/icon-192x192.png",revision:"ae6f521329304d4806aa5e23db04c71a"},{url:"/assets/icons/icon-256x256.png",revision:"cf43e20b526340564d41f8c16ea74595"},{url:"/assets/icons/icon-384x384.png",revision:"a389bbec381b2590af7cd0cd2b0eb487"},{url:"/assets/icons/icon-512x512.png",revision:"0bfd110606f188a25f48d83f4ea136ea"},{url:"/assets/images/404.svg",revision:"228e4ee9247e1cceb504ad2281f14458"},{url:"/assets/images/Group 292.svg",revision:"c6c84ca24046e551a8054929420fc530"},{url:"/assets/images/btm_shape_d.png",revision:"2005c68d7003c83d7ec44839995a156d"},{url:"/assets/images/card_box.svg",revision:"eeb13135aef240f4ab745d1be7969021"},{url:"/assets/images/consult_doctor_img1.jpg",revision:"57efa7c5a7da29046cd61416139027eb"},{url:"/assets/images/consult_doctor_img2.jpg",revision:"a2d53c1b0a0d4866c3ce33591b33c63c"},{url:"/assets/images/consult_doctor_img3.jpg",revision:"cc103e4744e118e54cb419ba8c778b07"},{url:"/assets/images/consult_doctor_img4.jpg",revision:"62d9af3f7df8dc73fcb43c837369e4c4"},{url:"/assets/images/consult_doctor_img5.jpg",revision:"6f51560b95aaed2ee9e64b1344684e8a"},{url:"/assets/images/consult_doctor_img6.jpg",revision:"9ddb448482f748fa5466ce0beabb7009"},{url:"/assets/images/consult_doctor_img7.jpg",revision:"7f4292d0d4b5ea66c4cd66a3fb869b3b"},{url:"/assets/images/consult_doctor_img8.jpg",revision:"7f7ecb47a57344c56f2584ef067f77c9"},{url:"/assets/images/consultant_work_img1.svg",revision:"2e1658df0a0a979958a5503b0009cc09"},{url:"/assets/images/consultant_work_img2.svg",revision:"0df1268da9383db9d89f89068211babc"},{url:"/assets/images/consultant_work_img3.svg",revision:"263a10a4ce282d5e4e87e32cea03e144"},{url:"/assets/images/consultant_work_img4.svg",revision:"f1641e03b8b066d3c86495afc6d1b25f"},{url:"/assets/images/consultant_work_img5.svg",revision:"a5ef82c096419bd3713a29b53ce374c8"},{url:"/assets/images/down_Arrow.svg",revision:"aa90c3fb67354449e313b4e51ae6aacf"},{url:"/assets/images/down_type_arrow.svg",revision:"36383d2bf427824384f435a9201940dd"},{url:"/assets/images/excl_prgm1.svg",revision:"dae6ec28e2db13d5e4629c60ed37e018"},{url:"/assets/images/excl_prgm2.svg",revision:"d5d74c30aafd771109d44ca179f60bc8"},{url:"/assets/images/excl_prgm3.svg",revision:"0f9126bc474d19513e8e4d9ce1e4e8ee"},{url:"/assets/images/excl_prgm4.svg",revision:"256ec6a6d3a46cb82ca65971d6b3d730"},{url:"/assets/images/excl_prgm5.svg",revision:"c4dbcb46e361ae5bbd653600b7083416"},{url:"/assets/images/eye.svg",revision:"856a6b6e638e23bdfa59a369449c4ebb"},{url:"/assets/images/facebook.svg",revision:"338ba50d0d1364d456dd5ef21660ced4"},{url:"/assets/images/female_gr.svg",revision:"6d5439ff8ece70c0448ebf3bd38b4c1e"},{url:"/assets/images/instagram.svg",revision:"0e6ffa754b0de3049787ff4a7ddde309"},{url:"/assets/images/left_back_Arrow.svg",revision:"bf61bdcd426e18dad17135da14c15d80"},{url:"/assets/images/lines.svg",revision:"2929b3bbced53b909e83352b41e9c99a"},{url:"/assets/images/logo_img.png",revision:"8164bae33d427ecb48c9e672b7fddd1d"},{url:"/assets/images/logo_trim.svg",revision:"bdfd774df6d2d6f047bfe01483f688e3"},{url:"/assets/images/male_gr.svg",revision:"f699c89aa7dcb891e1e60ee29092aaed"},{url:"/assets/images/payment_graphics.svg",revision:"c6c84ca24046e551a8054929420fc530"},{url:"/assets/images/payment_graphics2.svg",revision:"086041457c249d46f14b8626bb614434"},{url:"/assets/images/programme_image1.jpg",revision:"a3fe3901d5c43c5d8aaccb65fea6be59"},{url:"/assets/images/programme_image2.jpg",revision:"79d3c66f3d710dac4ca3d8bfd712b19d"},{url:"/assets/images/programme_image3.jpg",revision:"6daea0140a88df7309d7c2e3cbffc1dc"},{url:"/assets/images/programme_image4.jpg",revision:"e793c2f35202132614bd8c7dca038344"},{url:"/assets/images/shape_before_in.png",revision:"97a7059e2691536f9246a5c842eafda5"},{url:"/assets/images/story_img.png",revision:"5a3d6f061360f3df645754982bde1131"},{url:"/assets/images/succ_prg_img1.svg",revision:"9c6ee3bf5c36613d8f94fd8043f90cfd"},{url:"/assets/images/succ_prg_img2.svg",revision:"614bb78ca529cf5551eec8d51478fa47"},{url:"/assets/images/succ_prg_img3.svg",revision:"b366a5fd1b475865b304eeded119006b"},{url:"/assets/images/sucss_prgm_back.png",revision:"97a7059e2691536f9246a5c842eafda5"},{url:"/assets/images/support_img1.svg",revision:"5b3ebaa0c4d570483c300ff319c4c4c5"},{url:"/assets/images/support_img2.svg",revision:"cad78df6e06ce79eb52956afc1f039a1"},{url:"/assets/images/tfav.png",revision:"94ba83ff17362eb8fbd486101707fa4f"},{url:"/assets/images/thank_you_icon.svg",revision:"37992ff7395a5bd45cd0e635b03e5d39"},{url:"/assets/images/tickIcon.svg",revision:"f7b2c4be711a2d78debd726311eeb32f"},{url:"/assets/images/up_type_arrow.svg",revision:"a4db4547a8615fa790da17c9c209fc14"},{url:"/assets/images/visa_card1.svg",revision:"36fe1580e8c236a05de6c0e408c64b0b"},{url:"/assets/images/visa_card2.png",revision:"fe0f7a4742f01971a8fe92a011374960"},{url:"/assets/images/vuesax/linear/arrow-down.svg",revision:"ea6d7085e359293955325a5c9de7887e"},{url:"/assets/images/zip_logo.png",revision:"3830eb481f44ebf22622fb43336b2374"},{url:"/favicon.ico",revision:"e00a28a993287cf6010e540608f2bb2c"},{url:"/manifest.json",revision:"37e9309189ad052ba86f4095b53b0dd5"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));