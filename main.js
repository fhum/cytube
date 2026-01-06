/* ----- STARTING CONFIGURATION - USER INTERFACE (UI) ----- */

var UI_Favicon = 1;				// [&] channel favicon
var UI_MiniLogo = 0;			// [&] small channel logo/avatar in the top navbar
var UI_ChannelName = 1;			// [&] channel custom brand name
var UI_CustomThemeMenu = 1;		// [&] enable custom themes
var UI_RemoveHomeMenu = 1;		// removing 'Home' menu from the header
var UI_TitleBarDescription = 1;	// [&] custom title bar description
var UI_UserCommands = 1;		// [&] additional commands in the chat window
var UI_Func = 1;				// anti-AFK and auto chat clearing panel
var UI_AutoScroll = 1;			// auto scroll chat
var UI_WC = 0;					// [&] random background image for empty playlist row corner
					// [ REQUIRES: UI_Pixel enabled ]
var UI_Pixel = 0;				// [&] special signs preceding messages in the chat window for selected users
var UI_PixelChange = 0;			// [&] change img link when a certain img link is posted
var UI_Lottery = 1;				// [&] text added to random chat messages
var UI_JoinText = 0;			// [&] chat message after user joining
var UI_LeaveText = 0;			// [&] chat message after user leaving
var UI_PlayerOptions = 1;		// [&] additional player options
var UI_TransformationBtns = 1;	// player transformation buttons
var UI_FontsBtn = 1;			// button displaying box with clickable chat fonts
					// [ REQUIRES: INSTALLATION (see above) ]
var UI_UnicodeChars = 1;		// [&] additional buttons in the fonts panel with unicode characters
					// [ REQUIRES: UI_FontsBtn enabled ]
var UI_EmotesBtn = 1;			// button displaying box with clickable chat emotes
var UI_CommandsBtn = 1;			// button displaying modal window with chat commands help
var UI_ExtendedGetURLs = 1;		// extended 'Get URLs' function
var UI_DisplayModeSel = 0;		// selector with player display modes
var UI_QuickCommandsBtns = 1;	// buttons with '/clear' and '/afk' functions
var UI_FlagCounter = 0;			// [&] channel right-sided footer box
var UI_UserStatistics = 1;		// displaying in the footer user visits number and current online time
var UI_EmbeddingMedia = 1;		// [&] possibility to embedding (displaying) images and .webm videos on the chat
var UI_MediaControls = 1;		// embedded video preloaded controls
					// [ REQUIRES: UI_EmbeddingMedia enabled ]
var UI_ColorAdmins = 1;			// [&] change the color of admin names
var UI_Schedule = 1;			// [&] add schedule to MOTD
var UI_OpenPlaylist = 1;		// [&] change playlist permissions on toggle
var UI_Shortcuts = 0;			// [&] keyboard shortcuts to insert text

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- DETAILED BASIC CONFIGURATION ----- */

var Usercount_Text = "Jon Stewart";

var Mod_HexColor = ' #33FFB2';

var Blueberry_HexColor = '#6D68D8';

var FruitBowl = {};

var SpoilerImg = 'http://i.imgur.com/xzD4vqc.png';

var Favicon_URL = 'https://dl.dropboxusercontent.com/scl/fi/43t6yg71ym0kflp7i8rs7/aa-icon.png?rlkey=jtmd2nxkluagboblb6x4qh5sv&st=bccztpxl&dl=0';

var MiniLogo_URL = 'http://i.imgur.com/OCidf8n.gif';

var ChannelName_Caption = 'Loliconia';

var CustomThemeMenu_Title = 'Change Icon';

var CustomThemeMenu_Items = [  // Nonowa is the default one
    'Azusa',
    'Tsukiko',
    'Akane',
    'Aoi',
    'Zundamon',
    'Kiritan',
    'Akari',
    'Yukari',
    'Usagi',
    'Shinobu',
    'Hachikuji',
    'Nadeko',
    'Ougi',
    'Yotsugi',
    'Hachiroku',
    'Rika',
    'Hanyuu',
    'Arisu',
    'Murasame',
    'Sora',
    'Lum',
    'Liru',
    'Dokuro',
    'Sabato',
    'Komugi',
    'Koyori',
    'Dejiko',
    'Puchiko',
    'Usada',
    'K1',
    'Takuji',
    'Matsuken',
    'Jun',
    'Fernandeath',
	'DokuganP',
	'Nonowa'
];

var UserlistBackgrounds = {
    'Azusa': 'url(https://dl.dropboxusercontent.com/scl/fi/si1psqqjo46klx46uay08/aa-chatboxv2.png?rlkey=qrfs4zpu1n8vikvaieu7q197i&st=71nkw3bm&dl=0)',
	'Tsukiko': 'url(https://dl.dropboxusercontent.com/scl/fi/c0c2oq9g61c3oakrrj0s3/ts-chatbox.png?rlkey=9j1p4oxub7pmq3bno2pji93vs&st=bh6hd1dg&dl=0)',
	'Akane': 'url(https://dl.dropboxusercontent.com/scl/fi/wopvaczyup983cmrngqko/akane-chatbox.png?rlkey=xkevs2qg7lafoqiu3fu5wjk2c&st=gdwobr5g&dl=0)',
	'Aoi': 'url(https://dl.dropboxusercontent.com/scl/fi/92tpfmvm0kx9ey1v7nah1/aoi-chatbox.png?rlkey=513i8hlg40y6wql96y7fbqi4b&st=4y3hy18v&dl=0)',
	'Zundamon': 'url(https://dl.dropboxusercontent.com/scl/fi/jj40dqmfr9xi7qgfdnfjm/z-chatbox.png?rlkey=4xnvj7fek5m32ofkhmqqab4b3&st=i3ripe8k&dl=0)',
	'Kiritan': 'url(https://dl.dropboxusercontent.com/scl/fi/73doqzzofer4t514phogq/kiri-chatbox.png?rlkey=9irfjm68xd1svaedrhbrbp84d&st=oxn8zuof&dl=0)',
	'Akari': 'url(https://dl.dropboxusercontent.com/scl/fi/l06b6bdv5b1sdav074ukx/akari-chatbox.png?rlkey=q41qsni96bkjg6vk2q1ouk5cs&st=0zpgd0zo&dl=0)',
	'Yukari': 'url(https://dl.dropboxusercontent.com/scl/fi/tv6sliropid65t3c9k33c/yuk-chatbox.png?rlkey=1qw523cj5kdobg7577waj3y75&st=hhv7gzyh&dl=0)',
	'Usagi': 'url(https://dl.dropboxusercontent.com/scl/fi/lt51hn2br2e06n02byo58/usagi-chatbox.png?rlkey=fe2a96a0ym3axz3wwtizfhd21&st=5m8t38rm&dl=0)',
	'Shinobu': 'url(https://dl.dropboxusercontent.com/scl/fi/nd77ii3bq52ohjchh2ojr/shi-chatbox.png?rlkey=tzfj4dkokln11lxfwpl0gwkua&st=td0p1lfh&dl=0)',
	'Hachikuji': 'url(https://dl.dropboxusercontent.com/scl/fi/czwfy1qvffvh72bieju9e/89ji-chatbox.png?rlkey=icxkvp86olcbcwchtb1rkkyds&st=2m4hyg8r&dl=0)',
	'Nadeko': 'url(https://dl.dropboxusercontent.com/scl/fi/x9vxa8uhohg05zg21apy3/ndk-chatbox.png?rlkey=nmpmmb9kim5sdn6h5od8owq4k&st=gr29szr6&dl=0)',
	'Ougi': 'url(https://dl.dropboxusercontent.com/scl/fi/cwyfut5d6jzp32sjhitoo/ou-chatbox.png?rlkey=c3ybvdql941n21ecdwecw5wnu&st=3fbxivi0&dl=0)',
	'Yotsugi': 'url(https://dl.dropboxusercontent.com/scl/fi/rekd7grurvvdy6ckq6htm/ytg-chatbox.png?rlkey=1ggps97rbxtpdzcw244nos11k&st=tmzfhe8x&dl=0)',
    'Hachiroku': 'url(https://dl.dropboxusercontent.com/scl/fi/kzspq2nadbm6oftchu4ws/86-chatbox.png?rlkey=tfcn5cet8mumtv3g20v3onpja&st=r1jgpxnw&dl=0)',
	'Rika': 'url(https://dl.dropboxusercontent.com/scl/fi/w1mgxjw4wsans9jw54vct/rika-chatbox.png?rlkey=lqmf7u30gr262br2a1rvsgj3h&st=sb7wytan&dl=0)',
    'Hanyuu': 'url(https://dl.dropboxusercontent.com/scl/fi/3yvuqwq30trnatcuzgezx/h-chatbox.png?rlkey=x5lgphuuxusbb2rqmkj6z5afl&st=vaxvcgzs&dl=0)',
	'Arisu': 'url(https://dl.dropboxusercontent.com/scl/fi/h5aafw7np3tj2crlfoqg2/sa-chatbox.png?rlkey=186xvik4gaxn82odtqg0rn5vz&st=3s6zbau8&dl=0)',
	'Murasame': 'url(https://dl.dropboxusercontent.com/scl/fi/ml8w4ju4d5ekoy0gcimed/m-chatbox.png?rlkey=8pz29d2g26k4m0yez1grygnia&st=aicnf9go&dl=0)',
	'Sora': 'url(https://dl.dropboxusercontent.com/scl/fi/yb4z6axq0wzyxv1qf60rn/ks-chatbox.png?rlkey=l8jzy7tojwfha1y7g8v71dvte&st=5iz5v3gp&dl=0)',
	'Lum': 'url(https://dl.dropboxusercontent.com/scl/fi/rergcc2pb7lo496qvboul/uy-chatbox.png?rlkey=eurwbefusmqfqrg7o2xliqbqy&st=fio5q0bg&dl=0)',
	'Liru': 'url(https://dl.dropboxusercontent.com/scl/fi/cclemtephjncw1503wtxf/liru-chatbox.png?rlkey=dviprfn6sfa7cc2f964h4tbow&st=t11qfndo&dl=0)',
	'Dokuro': 'url(https://dl.dropboxusercontent.com/scl/fi/brdk34ev3o76hqavm011m/dk-chatbox.png?rlkey=l8ub9kbs9fz368i3jckstmw35&st=y9ni8f36&dl=0)',
	'Sabato': 'url(https://dl.dropboxusercontent.com/scl/fi/4bpfit8sepru12oh8z44q/sab-chatbox.png?rlkey=zfdnr75i9893ia8ubcfja50jp&st=nnp7rs8h&dl=0)',
	'Komugi': 'url(https://dl.dropboxusercontent.com/scl/fi/mq1hg0pqfj4lnni21aawo/kom-chatbox.png?rlkey=ppneje7f6z5qpk4ceci2ru83h&st=1ehx7pmf&dl=0)',
	'Koyori': 'url(https://dl.dropboxusercontent.com/scl/fi/5p22kgotztj4c3a7s84hw/koy-chatbox.png?rlkey=xiubcqk3fa4bpkzh9gswtw8wn&st=649q2lv3&dl=0)',
	'Dejiko': 'url(https://dl.dropboxusercontent.com/scl/fi/k3qyvnp3bag5jgv2dbm87/dej-chatbox.png?rlkey=l0w67898ecgwlxp7oj9zkx5o3&st=gd1w9ma2&dl=0)',
	'Puchiko': 'url(https://dl.dropboxusercontent.com/scl/fi/w12tq0xy9yj04b2n9v2v4/pu-chatbox.png?rlkey=421byqp7nuozp1ebeqofhlhkg&st=3qjtsnl7&dl=0)',
	'Usada': 'url(https://dl.dropboxusercontent.com/scl/fi/0jbtsmwx3w7d0ljlgdpre/us-chatbox.png?rlkey=qb9tnbyztmymmrudfryynj1dl&st=bbu38erh&dl=0)',
	'K1': 'url(https://dl.dropboxusercontent.com/scl/fi/ke4krkaoq5nft6iwa7liu/k1-chatbox.png?rlkey=0ysk8jco1k5j7v5mdjq232rgo&st=fedzfcle&dl=0)',
	'Takuji': 'url(https://dl.dropboxusercontent.com/scl/fi/aspib28olmcigbt7pirix/tkj-chatbox.png?rlkey=ni5p7u79sna91u7n08mver5b5&st=zysm9ihd&dl=0)',
	'Matsuken': 'url(https://dl.dropboxusercontent.com/scl/fi/h1dbqte0h2j8wfq6hdi41/matsuken-chatbox.png?rlkey=vevcx6of1i42dudboyp6vr3qu&st=mfic7u0w&dl=0)',
    'Jun': 'url(https://dl.dropboxusercontent.com/scl/fi/lo48sbm2triv5b84x7r5x/jun.png?rlkey=287w0ev2wcbjts7lxji7as847&st=2hdqqxbm&dl=0)',
	'Fernandeath': 'url(https://dl.dropboxusercontent.com/scl/fi/jy8gcfgzjsnjxsmw7j3vh/f-chatbox.png?rlkey=g57r9omivi4gkir5hznze8esp&st=z71dllfh&dl=0)',
	'DokuganP': 'url(https://dl.dropboxusercontent.com/scl/fi/r2f8sctyw463tbrv1z4jc/masamune-chatbox.png?rlkey=kmabeciiz7buvrqz83jvkpj6g&st=a39pwpn1&dl=0)',
	'Nonowa': 'url(https://dl.dropboxusercontent.com/scl/fi/a0wq3era6auip9f3aa1s7/nnw-chatbox.png?rlkey=wkoqsr9zppjvjqsxkiuhb02e0&st=91f6rhjg&dl=0)'
};

var UserIcons = {
	'Azusa': 'url(https://dl.dropboxusercontent.com/scl/fi/187l9yqa7079bstz0kn5o/azusa.png?rlkey=eu8h4tvc76mgpgqt6vvzzaxfh&st=nfiil482&dl=0)',
	'Tsukiko': 'url(https://dl.dropboxusercontent.com/scl/fi/psemdq0wpvgwr29a3cuap/tsukiko.png?rlkey=0w575urf18s5pfgi4vruhwerz&st=ncdigwvw&dl=0)',
	'Akane': 'url(https://dl.dropboxusercontent.com/scl/fi/btu2ruzppvvwsct2by9w4/akane.png?rlkey=tu5ofsnr7wup5umowmlribn6e&st=tbeknrtg&dl=0)',
	'Aoi': 'url(https://dl.dropboxusercontent.com/scl/fi/r2cjcpjtidzmebx0lb1wh/aoi.png?rlkey=ux6z08syhm4ilri4be1gw4gug&st=whfqre9o&dl=0)',
	'Zundamon': 'url(https://dl.dropboxusercontent.com/scl/fi/6l5btp6877xv9q9z5v3bv/zundamon.png?rlkey=rw9g4ejsgbqy616896rhshcs9&st=gaj8phaw&dl=0)',
	'Kiritan': 'url(https://dl.dropboxusercontent.com/scl/fi/u0f1uzrn7t00cr3ctqvd7/kiritan.png?rlkey=2y9q4xh8h1ifds8mfx75k0pa8&st=tndpc4t9&dl=0)',
	'Akari': 'url(https://dl.dropboxusercontent.com/scl/fi/92v6vegvlx2sqpe04irkn/akari.png?rlkey=ufogjng0cptuof12qoo7j85og&st=z7e6g3zr&dl=0)',
	'Yukari': 'url(https://dl.dropboxusercontent.com/scl/fi/3f0ab49d0iqfv1w5jchi4/yukari.png?rlkey=c4sbjgwyx7mtigon1bvx4ne72&st=qetejil2&dl=0)',
	'Usagi': 'url(https://dl.dropboxusercontent.com/scl/fi/oukaii8aejxf9d098ef66/usagi.png?rlkey=iro15oylrrt30ro63rj3wl34o&st=vbc4ax6c&dl=0)',
	'Shinobu': 'url(https://dl.dropboxusercontent.com/scl/fi/ehrfkhjevm5xuhm64ah38/shinobu.png?rlkey=5rmgfnkeont78w8etj1m6tutx&st=gjd07bjy&dl=0)',
	'Hachikuji': 'url(https://dl.dropboxusercontent.com/scl/fi/vu6zbdddby5clyrg0j2gk/hachikuji.png?rlkey=n5yamf5rwxpdf2nx829bix26n&st=73dxg8nn&dl=0)',
	'Nadeko': 'url(https://dl.dropboxusercontent.com/scl/fi/kd595jmz45fydc979jcnb/nadeko.png?rlkey=5zxfj72c3bn3dqdcqog1fd9a1&st=rghaylji&dl=0)',
	'Ougi': 'url(https://dl.dropboxusercontent.com/scl/fi/7fik5zc7t6ileocqevkwi/ougi.png?rlkey=m2ht38l0bjsubqgbsw07z8qmm&st=5enomds1&dl=0)',
	'Yotsugi': 'url(https://dl.dropboxusercontent.com/scl/fi/wm7yvadympj60lrzy7r19/ononoki.png?rlkey=slqpynapchr1ouk82xi4q2gpl&st=8h08az70&dl=0)',
    'Hachiroku': 'url(https://dl.dropboxusercontent.com/scl/fi/jurohdddlblzq5xuqr125/hachiroku.png?rlkey=j4ht6aeqbokhpoy9hofo66n3o&st=ztdqw5oz&dl=0)',
	'Rika': 'url(https://dl.dropboxusercontent.com/scl/fi/e65hyekvcdfnjtjwl7wua/rika.png?rlkey=ah2kv0igvp6kpc9wrcneydgnx&st=lamnms32&dl=0)',
    'Hanyuu': 'url(https://dl.dropboxusercontent.com/scl/fi/5kyv7mhce8a2fidjls9ii/hanyuu.png?rlkey=riv27au2r3o2hktyxacecbqq1&st=0sp7kvx7&dl=0)',
	'Arisu': 'url(https://dl.dropboxusercontent.com/scl/fi/rh7l5llipr7tva212wyuv/arisu.png?rlkey=37dr3ev408qo2j4v8pynv3q4i&st=udyni8xl&dl=0)',
	'Murasame': 'url(https://dl.dropboxusercontent.com/scl/fi/45ch12nu35c9vsxjzpks6/murasame.png?rlkey=4pphkw2p5mwytzoh61pmnjens&st=bmch1vop&dl=0)',
	'Sora': 'url(https://dl.dropboxusercontent.com/scl/fi/yljgwtv7siztjk5dzibon/sora.png?rlkey=n216glz8nv25djfo8vh6hf8nf&st=n20plc2x&dl=0)',
	'Lum': 'url(https://dl.dropboxusercontent.com/scl/fi/9hphvc1qxlmmb3czbgje4/lum.png?rlkey=l3h76nvtt2ve00n60p4dvy9yk&st=y0p7twkg&dl=0)',
	'Liru': 'url(https://dl.dropboxusercontent.com/scl/fi/h8dn67rxmboowgmd8aay0/liru.png?rlkey=tjjcyincetb4nv903uhl7qzmq&st=5stq4dp1&dl=0)',
	'Dokuro': 'url(https://dl.dropboxusercontent.com/scl/fi/j8uyay6u0go37sdujxcrq/dokuro.png?rlkey=esqjjfr6nwrgz5zb2ln27rzxq&st=xxpf78o4&dl=0)',
	'Sabato': 'url(https://dl.dropboxusercontent.com/scl/fi/wv66i1zjhoffm39wslgpy/sabato.png?rlkey=vhrvk28h1ds99vma1fsw93pr9&st=yyzyhehp&dl=0)',
	'Komugi': 'url(https://dl.dropboxusercontent.com/scl/fi/sugic905cfxl57kpo2pad/komugi.png?rlkey=4mq4g6txpetf1mkd58s46f889&st=yaqre69z&dl=0)',
	'Koyori': 'url(https://dl.dropboxusercontent.com/scl/fi/cprvt94p4qbzuzsra606c/koyori.png?rlkey=ruyisel6euytu7zqfuwe77q0n&st=onasrthb&dl=0)',
	'Dejiko': 'url(https://dl.dropboxusercontent.com/scl/fi/9kefl7x7ho54nvvup2qlg/dejiko.png?rlkey=4fnvsrn2vtta3ufv1cfcfp5ic&st=c9w7anqf&dl=0)',
	'Puchiko': 'url(https://dl.dropboxusercontent.com/scl/fi/aiq7dq6broeuk7kwpxaz4/puchiko.png?rlkey=w565ei2qlij0mqb70od91an9s&st=bmzous4s&dl=0)',
	'Usada': 'url(https://dl.dropboxusercontent.com/scl/fi/13g4gdgim2ktswvflkg22/usada.png?rlkey=f5mtvdot9wcr914npwrv2es1e&st=wj40m5tk&dl=0)',
	'K1': 'url(https://dl.dropboxusercontent.com/scl/fi/zjfdxmt2eqriyarrkkb7p/k1.png?rlkey=kzqcap96apzbdea1078zvmegd&st=2suvmlmv&dl=0)',
	'Takuji': 'url(https://dl.dropboxusercontent.com/scl/fi/afkukfly6a2mfa5ckqqnc/takuji.png?rlkey=viuap962htiebwtedabhlqhqo&st=hsgp61ks&dl=0)',
	'Matsuken': 'url(https://dl.dropboxusercontent.com/scl/fi/b65vbfjcxpu1umwlveyvr/matsuken.png?rlkey=qke57i0bm368zguk1mckcijqt&st=nj54ifmf&dl=0)',
    'Jun': 'url(https://dl.dropboxusercontent.com/scl/fi/e6fr3cer9ffeupz5a7whn/jun.png?rlkey=nnj5cmdckkl6mcygxma7110u9&st=k1wg625t&dl=0)',
	'Fernandeath': 'url(https://dl.dropboxusercontent.com/scl/fi/blpynt85z9futg2fnlak0/fernandeath.png?rlkey=2ctc45gsnl1x9k6xmmgv6tc83&st=klvds179&dl=0)',
	'DokuganP': 'url(https://dl.dropboxusercontent.com/scl/fi/yaouih80pwz4zf3or2j5c/dokuganP.png?rlkey=7hkgwcnphgb0k7hu07zxccw2v&st=qgrz8tyk&dl=0)',
	'Nonowa': 'url(https://dl.dropboxusercontent.com/scl/fi/fkgf9lmurzg7qe3h9hsgs/nonowa.png?rlkey=kbi5yd5alukj27fi54wtw4ob5&st=2y1lxdky&dl=0)'
}

var CustomBackgrounds = [
	['Checkers (Blue)', 'https://dl.dropboxusercontent.com/scl/fi/z6ambmuuwx0fv9b3uksti/hm2.png?rlkey=mrt88r6lp9zjvtywgqz226d9k&st=nbukqohj&dl=0'],
	['Checkers (Brown)', 'https://dl.dropboxusercontent.com/scl/fi/2z1nq34u46q6hu2mhjrbz/hm1.png?rlkey=03po5gxdtrfb887pywy3ks18h&st=zkgnxc0d&dl=0'],
    ['Henneko', 'https://dl.dropboxusercontent.com/scl/fi/ob1nan7rm7vcbxfmxdn0i/henneko.jpg?rlkey=jkj0ssrvrr4xypwluivq32m41&st=u4bzg8ct&dl=0'],
    ['Odorobo', 'https://dl.dropboxusercontent.com/scl/fi/g8n9x4h6oguzirvnr6wvj/odorobo.jpg?rlkey=8k18y5a7kn5vb0f1w5le13slq&st=tie5rx1u&dl=0'],
    ['Kiritan', 'https://dl.dropboxusercontent.com/scl/fi/ils51xfl3oosp428b4u74/kiritan.jpg?rlkey=kjd8znuta2p67qyqipwrb8xb0&st=9xnclbuy&dl=0'],
    ['Yukari & Akari', 'https://dl.dropboxusercontent.com/scl/fi/y055xenesfglpvobl8moa/yuzuaka.jpg?rlkey=a298bquqew8580lrmh9198m3l&st=pqojwg4l&dl=0'],
    ['Monogatari (Summer)', 'https://dl.dropboxusercontent.com/scl/fi/03f2ymhu185wlzor7gp70/monogatari.jpg?rlkey=2f3m89dk5t9t8789zkwqs56dg&st=58oyldxv&dl=0'],
    ['Nadeko', 'https://dl.dropboxusercontent.com/scl/fi/3s59slz04tftivr7dn2nw/nadeko.jpg?rlkey=dpthdfccn8pe6dqlzrwfzb2ji&st=s9p7q87p&dl=0'],
    ['Yotsugi', 'https://dl.dropboxusercontent.com/scl/fi/dlgxovegiczeuru9o70k2/yotsugi.jpg?rlkey=tvbqcb3zotcqw7zjuveeri2f7&st=xcimoskk&dl=0'],
    ['Hachiroku', 'https://dl.dropboxusercontent.com/scl/fi/pjjeloomclysdflkntuvw/86.png?rlkey=0v6nspkwable94wssoap162qz&st=6xmxi1jx&dl=0'],
    ['Rika', 'https://dl.dropboxusercontent.com/scl/fi/0e84ggwvfrol54ee1m2lu/rika.png?rlkey=at0f475q78yo5thbb7ov978m8&st=h83w7pw0&dl=0'],
    ['Hanyuu', 'https://dl.dropboxusercontent.com/scl/fi/pih0t5zrs0sd5iu388btf/hanyuu.jpg?rlkey=rgk3lzlp3k51616h1do6ruts4&st=tpvjsqtp&dl=0'],
    ['Arisu', 'https://dl.dropboxusercontent.com/scl/fi/s2wahvgrm48v8zgu1kf6l/arisu.jpg?rlkey=20urnrj7kyo2yv983vl13858w&st=ksihmxoe&dl=0'],
    ['Murasame', 'https://dl.dropboxusercontent.com/scl/fi/u7kt4fs02bvn9wbod7oj8/murasame.jpg?rlkey=1jk2t8bhhrcxy1rzz7j50br3y&st=80uxnlky&dl=0'],
    ['Sora', 'https://dl.dropboxusercontent.com/scl/fi/9bhdq3gxxu27emsbuwn6x/sora.png?rlkey=pjn2h0auz8ttmkmi2c1cupi3n&st=g8m6o3jc&dl=0'],
	['Yoshinoya', 'https://dl.dropboxusercontent.com/scl/fi/9qo9aw5rdomv75zbw7ha9/yoshinoya.jpg?rlkey=71pg0jy255lb8z4kaqhuocx1q&st=pleta8gd&dl=0'],
    ['Lum', 'https://dl.dropboxusercontent.com/scl/fi/40zuia2yhvipl5gabg6px/lum.jpg?rlkey=8weroos9k3545ajjl3i74p19w&st=h4ccdc95&dl=0'],
    ['Liru', 'https://dl.dropboxusercontent.com/scl/fi/4hkxy4wy3qv2awho92whg/liru2.png?rlkey=dc6gvn7jahjgody821spaesrq&st=nrxcit1z&dl=0'],
	['Dokuro', 'https://dl.dropboxusercontent.com/scl/fi/s5h97tk6fuo51eocl0hft/dokuro.jpg?rlkey=t67w8od3cccxwtm9mmmwi6fq6&st=c3s5j672&dl=0'],
    ['Komugi & Koyori', 'https://dl.dropboxusercontent.com/scl/fi/uqjk9q6h7tv385zoqrydl/komugi.jpg?rlkey=2tzdl428z4cggm7r719ujhemb&st=cndd09j5&dl=0'],
    ['Di Gi Charat', 'https://dl.dropboxusercontent.com/scl/fi/v73pwx5nr0c3d6rgwxdel/digicharat.png?rlkey=v1ivq9khyjcdlcthtpy2lirzz&st=eqwa3s5u&dl=0'],
    ['Hinamizawa (Sunset)', 'https://dl.dropboxusercontent.com/scl/fi/8lnp6kg86nf6scihitx53/k1.png?rlkey=iy7wj2unxok6hyo22axu822o9&st=ocyz9eig&dl=0'],
    ['Last Supper (Subahibi)', 'https://dl.dropboxusercontent.com/scl/fi/h5rc8kyx1s2q1stsb8inj/takuji.jpg?rlkey=u8dom40q6tsesf6dalhix4drl&st=hjvdpo4g&dl=0'],
    ['Matsuken Samba II', 'https://dl.dropboxusercontent.com/scl/fi/theyvsggomomr17okvm1m/matuken.jpg?rlkey=if06f3rw64uqsatxs5umnpunh&st=r7h7dprd&dl=0'],
    ['Jun', 'https://dl.dropboxusercontent.com/scl/fi/l4ib85kakvgb3zy3ybhgd/jun_bg.jpg?rlkey=15nl9a52rpsilme38t25hrmdg&st=u3kl3evt&dl=0'],
	['Gensokyo (Day)','https://dl.dropboxusercontent.com/scl/fi/wt7j3m0s27wh4dmnwofq7/sanae2.jpg?rlkey=tt6c9qvahdl03uow9teh2kksi&st=p5rgwqkd&dl=0'],
	['Gensokyo (Night)', 'https://dl.dropboxusercontent.com/scl/fi/m70djdpjjspalqr2d5s3t/gensokyo_night.jpg?rlkey=3ihpfo5mns6fhokt1fb2nb0mb&st=ce64pwwz&dl=0'],
	['Udonge', 'https://dl.dropboxusercontent.com/scl/fi/1a244y2qh80jtse1samid/gensokyo.jpg?rlkey=1w5tqlllq19z8meg5tz6uy058&st=dmh2ku4s&dl=0'],
	['Cave Story', 'https://dl.dropboxusercontent.com/scl/fi/vuz59y9b7u7j17ta921th/doumon.png?rlkey=iiwv3ale12jvfdndhlo4l86d9&st=beypbl0z&dl=0']
];

var userColors = {
    "azusa": "#30e7a1",
    "tsukiko": "#30cce7",
    "akane": "#fca8c4",
    "aoi": "#8ed2f1",
    "zundamon": "#73ff7f",
    "kiritan": "#c07272",
    "akari": "#ffc558",
    "yukari": "#99769c",
    "usagi": "#db3131",
    "shinobu": "#fff34b",
    "hachikuji": "#267e2d",
	"nadeko": "#ffc0b0ff",
    "ougi": "#ffffff",
	"yotsugi": "#00b679",
    "hachiroku": "#dd858e",
	"sora": "#fff1c2",
    "rika": "#5d93f8",
    "hanyuu": "#c1a7e4",
    "arisu": "#d8c89f",
    "murasame": "#a0e6a3",
    "lum": "#67c4b4",
    "liru": "#e7ad6b",
    "dokuro": "#848cfd",
    "sabato": "#f3f2c4",
    "komugi": "#ff79b8",
    "koyori": "#2546ff",
    "dejiko": "#7ec07b",
    "puchiko": "#d39437",
    "usada": "#ff008c",
	"k1": "#af4d5a",
	"takuji": "#6beeff",
	"matsuken": "#e2bd18",
    "jun": "#89b6da",
	"fernandeath": "#000000",
	"dokuganp": "#f6f7ff",
	"nonowa": "#e33830"
}

var ScheduleTabs_Array = [
	['Compact Schedule', 'If you see this, Google has probably shat itself or it\'s still loading.'],
	['Full Schedule', '<iframe id="scheduleBox" src="https://docs.google.com/spreadsheets/d/1Ye0mzOVODl2IAo3MWjvZOtqSXq-KK_JR5RYbzjUmOY4/pubhtml?gid=9190525&single=true" width="100%" height="' + $(window).height() + '"></iframe>']
];

var TitleBarDescription_Caption = 'Playing:';

var RandomQuotes = [
	'Always trying to take all the cocks for themselves. They are so selfish and rude.',
    'Big Brother Battler Absolute Bottom" was a huge success!',
    'It\'s very easy to see your imperfections if you stare at them. Nobody else is looking that hard, I promise.', 
	'First up is the piss drinking diet!',
    'I\'ll be in middle school in the spring! I\'m practically an adult.',
	'That\'s not true! If I wasn\'t happy or satisfied with my life with you, I wouldn\'t have written a story like this. That\'s why... I\'m sorry for forgetting it.',
    'There are many things a person can think about, such as what to draw when you get home? How to draw?',
	'Love knows no age.',
    'Girls can\'t love girls',
    'I mean, to begin with, this stage is not even NTR yet, just mob humiliation. In other words, it\'s the furthest thing from my proclivities and interests!',
    'Your taste is shit!',
	'So... If we can be together... I don\'t mind becoming a kidnapper.' ,
    'Being stupid is my speciality.',
    'For someone that pretty to still be so human and to fart like that... It drives me fucking crazy.' ,
	'Melons melons~' ,
	'It seems she wanted to see a crab lose at Rock-Paper-Scissors.' ,
    '...To cum, or to keep fapping, that is the question...',
	'Ecchi nano wa ikenai to omoimasu!',
    'I dun geddit...',
    'The world gently breathes a sigh—— in its chest, in its eyes... and in its heart.' ,
	'I\'ve given up on studying. My muscles will get me into university.' ,
    'Please understand my feeling as someone who got called an ambulance because he had a morning wood!' ,
    'Do you know Oyashiro-sama',
    'A visual novel. The original game is 18+, but I played the console version.' ,
	'It feels like an endless ejaculation',
    'Thanks #anime-supreme',
    'You looked so festive, like a carriage horse in heat galloping off to a stable full of mares.' ,
    'OMOCHIKAERI'
];
RandomQuotes = [
	'Always trying to take all the cocks for themselves. They are so selfish and rude.',
    'Big Brother Battler Absolute Bottom" was a huge success!',
    'It\'s very easy to see your imperfections if you stare at them. Nobody else is looking that hard, I promise.', 
	'First up is the piss drinking diet!',
    'I\'ll be in middle school in the spring! I\'m practically an adult.',
	'That\'s not true! If I wasn\'t happy or satisfied with my life with you, I wouldn\'t have written a story like this. That\'s why... I\'m sorry for forgetting it.',
    'There are many things a person can think about, such as what to draw when you get home? How to draw?',
	'Love knows no age.',
    'Girls can\'t love girls',
    'I mean, to begin with, this stage is not even NTR yet, just mob humiliation. In other words, it\'s the furthest thing from my proclivities and interests!',
    'Your taste is shit!',
	'So... If we can be together... I don\'t mind becoming a kidnapper.' ,
    'Being stupid is my speciality.',
    'For someone that pretty to still be so human and to fart like that... It drives me fucking crazy.' ,
	'Melons melons~' ,
	'It seems she wanted to see a crab lose at Rock-Paper-Scissors.' ,
    '...To cum, or to keep fapping, that is the question...',
	'Ecchi nano wa ikenai to omoimasu!',
    'I dun geddit...',
    'The world gently breathes a sigh, in its chest, in its eyes... and in its heart.' ,
	'I\'ve given up on studying. My muscles will get me into university.' ,
    'Please understand my feeling as someone who got called an ambulance because he had a morning wood!' ,
    'Do you know Oyashiro-sama',
    'A visual novel. The original game is 18+, but I played the console version.' ,
	'It feels like an endless ejaculation',
    'Thanks #anime-supreme',
    'You looked so festive, like a carriage horse in heat galloping off to a stable full of mares.' ,
    'OMOCHIKAERI'
];
RandomImages = 
[
	'https://dl.dropboxusercontent.com/scl/fi/b735omcjyv36vv1bb1kl5/000000000.jpg?rlkey=1midjyrbsn7pwk1l6wyl1bvj2&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/zpovz0uco2fmc4wuxw2b9/1743167798370166.jpg?rlkey=ghtl8y8dlh2cus052dlim8rxd&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/hc7td0rrkacdbn89djizl/n4q0r3dbpleb1.png?rlkey=ql9nrne5vx3vrtcl96mwm59ee&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/3iisad4tld8px9ljrvp3j/https___x.com_manzokumen1_status_1888268620427633110-img1.jpg?rlkey=zqs1o6cp6yocbjznzs01480ty&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/xvjgt2n3u6gmburchegp3/1738964113078979.jpg?rlkey=74wsr8n7kd6mp28j6eshtex2m&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/cbueumojhodek2y6u933y/https___x.com_NEKOMANMA8123_status_1880450651467182480-img2.jpg?rlkey=nqm7nxwly1uvbkmiz23j5393l&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/1s20alglvjl7jki2xb297/1733508424865348.png?rlkey=wz5qe4lm1rz508ggrztwhaf5w&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/mmvy3jsrnyenu3uwe56v2/1704308948860963.jpg?rlkey=nt1mc1m7qxi4a6wyhwhq23xqw&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/680irhcj8avskds3xf3j0/35294832.020000085_1648402398960.jpg?rlkey=c4o3p0hgayo2ja6w54qzcc14g&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/01aysyv0ghg1r49kq94uc/1633746435636.jpg?rlkey=3eo3ragu78nju39isifn3qowx&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/wp9i09on3znbe4zmb1rar/1545814344344.jpg?rlkey=taxir8zr3iyjvahtvxjp4sda0&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/e7kjouah3gpi2y5iok6d5/cawawawawfeeeefefefe.jpg?rlkey=p2vfh96ntpvca7ssjtjw46cgj&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/q6qbzhaimss0bo2tdnpnz/1712549793473315.png?rlkey=rlsqclv53dfze31haaodq5nvf&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/bldn5u1p43tldgiivgzn5/1645277588641.jpg?rlkey=odwux3s5jvy6335902h2i9gs5&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/fzxc3hvtxlxh6jkjuiz10/1643607051780.jpg?rlkey=kg8xndhkjxpf3g1p1qlpl2ssn&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/r59rix9yrayf65de4g20g/1526849483826.jpg?rlkey=84f9a3ufpd9pmd5infs79656t&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/4h16elvsxfr53wb9ptmpc/1521424865360.gif?rlkey=qo41uskwzl6x0vfmp0e5w5gbz&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/jvktddw5u62isxb4wh39o/1571067650151.jpg?rlkey=mg4iio0ycr9ah8lljq35cabf8&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/on2o7da5yqvfgzm7tttxd/1570136863021.png?rlkey=vn1z198qc2emtm0oi5jb5qjoy&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/lyhtaetlqm91009y2yjjc/1589048268974.jpg?rlkey=4xmkknjdtd6m2xvhgmpruw3mq&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/ky5olkeotu15pu0fbd13y/1582021635888.jpg?rlkey=rrjrl88gm34xvnzxd2n0rh9vf&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/0ph6t7007ag1nqi0jw5qz/__shimada_arisu_and_boko_girls_und_panzer_drawn_by_fuguno__55692b96401081188de4c358669fb6e6.jpg?rlkey=p5ubygyw5gh1xi2m6t311f9ao&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/fsoeoulhq5tcg8ydbj4uz/1678044826592055.jpg?rlkey=8ocpjputbx6989v9f19ulwwrv&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/b4uq6ued24b0fkjl8u38b/1614552624988.jpg?rlkey=yhq96i0isjye0kbnye29kayl0&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/jgpg2hzt79qchap108hyk/1729487771895.jpg?rlkey=tt8h12zu0jnl9faov2ojsw67p&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/9xzuirw0309i3iy1gn5c6/1742191957208809.jpg?rlkey=33pipz423egkkfbqbr7lawl1l&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/91661vlxt7wk64s0rsibk/https___x.com_Lupusk72_status_574440349952671744-img3.jpg?rlkey=9pxzw99o662j5a7a8qdes96mq&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/mshhx0mp56gqqxjp6n0jq/1568397478974.png?rlkey=zxvbbaqquhfpsb8zpowfc5wtv&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/bev0389kq3zobgrgn2moh/1631821631459.png?rlkey=2b1y2s7da0rfzyuew245gcvpo&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/pq6ifswr92nkrdssnql23/1634089087814.png?rlkey=eyj1bj1ado9b4r6gsblxw0zgh&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/e4cjis32njmvp6s4z8n9l/1630580236033.jpg?rlkey=zdmrnrq30n49jjrm83p1c8c8h&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/3tvm5i3bij6fhg2awsvu1/1738962541234063.jpg?rlkey=olmymajk2emp954x1si97ld4n&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/hnmqroeiyaqeblmmtiolb/1734730298811264.png?rlkey=0qudavq9tq3svin5uwihnrku8&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/vc3v5zj9ic89r4hdr1xbw/1738771747607127.jpg?rlkey=ff25en9cgouf381c98xehk7aa&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/3v94znb9rhf20xy8zsh7h/__kousaka_tamaki_komaki_manaka_and_komaki_ikuno_to_heart_and_1_more_drawn_by_amazuyu_tatsuki__33f0cc2a315034b4962183fcabbf8a57.jpg?rlkey=rlp6ssvq46yjmorogi7olaur8&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/8lpzdqp6j538vh5x5dg7c/1693736325420150.jpg?rlkey=1l16caakszet196ie4y8p5n55&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/fhwzqhllpb1korm9jawon/1682817220796979.jpg?rlkey=ihzlompj68zl44v8626p9qqet&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/nw5glmsb3bvqaj0xu3547/__kousaka_tamaki_to_heart_and_2_more_drawn_by_amazuyu_tatsuki__ca54f700dac3f205a73583003d4f11a7.jpg?rlkey=g5mnajgbh9wf4rxwi0rrz8vmd&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/95ag1kktjtn6dfwsg2okm/1736038120263758.jpg?rlkey=1t0msiualhp2q42d6d9yuinr9&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/7qdupw5qqynotvw0vycc1/1736034189960716.jpg?rlkey=ctzztjh9uauig0rym2ixshot5&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/7wyxbnkjfkaf2j7s9lrvv/1736042436251413.gif?rlkey=8v5pwxe4wgz4xhzhusonk7dwc&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/dklukboxj0y4e6xsum24f/1581905254459.jpg?rlkey=50t7mdpdezn3jig10gjs62u5g&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/0ca4g9kgouxxvqey29oo5/deb4c83f39fff9cc634430dc4dbde846.jpg?rlkey=ycdc8pz64bwkmeedrk7w22fuj&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/gy0phmb4ue203vdx20pxv/1733526079424805.png?rlkey=j5pigx5ozhczadbwo9rd5plda&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/ufsh0o71ovykqgw6lk4fu/__asari_nanami_idolmaster_and_1_more_drawn_by_lunch_lunchicken__c7cd14af4c1e418d6114e126c2bf4a45.png?rlkey=8q74ayp7kfgw0llj9ym7z21x3&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/68z0ir7qvktjnfinyk3gk/FCPGdReVgAIvhum-orig.jpg?rlkey=h8twfe2zi6giv1t87l8ankai7&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/2i86ati6aq3ltgpozufk9/1742646080986777.jpg?rlkey=rbf9wqfb6651uj3mieadw7qu5&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/ryob2enkkjeuxatbij3a0/1742477101595270.png?rlkey=zn2jlzr6f64tjdl52kr3eb22p&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/j4j3p3nyod4pgw1lfb1kn/__kaname_madoka_and_ultimate_madoka_mahou_shoujo_madoka_magica_drawn_by_aubz__ea701582de6578220420d0ba028cc0c4.jpg?rlkey=o2r60pifcxos63uckgq4prl0k&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/28qqfis7r2dk3qw6obgya/1545689228209.jpg?rlkey=v955361v7g3fed7mu9g16panr&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/ad1x4ok8zgg1a2kxpzejr/1624906669378.png?rlkey=e7rz8z02nwp9apt1u8i2qxwe9&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/ajly5df49qitv62fe0rx7/1739762328437282.png?rlkey=oo5slzs82kgnr7hd6moafebq9&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/x7cdn2ng07fgvc4771rvx/9794fee922fa7fd12cb883eba46719af04be8631.png?rlkey=gr9938g3tb05fbhi7o7qy7ytu&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/1hfu9pm4kqwwe4lnl10cm/1677463468018040.png?rlkey=9jabetlfmbtme92tptheaqzll&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/g5rl4by8b33qu6w1mxwot/s.png?rlkey=tqs25ha93khkkp0b45xzp829a&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/1d6uq93ntknvc7dyav13m/1629503845739.jpg?rlkey=usfsrtv3kjbn6kyp4i7eu4crj&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/o6q7lfiddmobkerv2ejl0/1629503235091.png?rlkey=vk3fyajhe8978t2tahcanqm38&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/0z5rydsszriumkfloji5a/1629502965864.gif?rlkey=7sgh41ubrv76n3xwd19ov3q8l&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/xor6f19wyzpfpi3bgwnuy/1628465588199.jpg?rlkey=gh740zay2a39xb2zj278q5r2u&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/w7cdh5uqc7myi7bztjhji/1705320874915746.png?rlkey=omb9n863g10aibqyj4jzs7w1z&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/jp3r09y91uo111g98vrx1/1704069132362823.png?rlkey=75y2vny3buipxdis1tj1xu99i&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/l6g5jsod576ige52pukdh/1711332857489900.jpg?rlkey=dlrh0zgn3iyfzuwy8ywf1aj76&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/hvfs0mwo7u5tumte6kzo9/1545811065804.png?rlkey=103ecxwcnlywweud14ybkeiyh&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/a6rxplg05gdpkktuocqzu/tansincossin-1479569560051527680-img1.jpg?rlkey=lwtf60mqax0dkkpz3l5z26ab8&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/65ns9udkeglnrzihch2f0/5f62ff087716bc48984078eca73bf844.gif?rlkey=9k520jnosqjlg7m2azp2mlmv0&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/vjzb6jyad1c8kxnxgs5ed/1682050950669615.png?rlkey=baacsvmy4yr3duiuwttfkns5w&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/x154qpfq3seuc2qitr31q/1650390245933.png?rlkey=v3i6jcc1wslhsy6dy6k9t0ejc&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/pzd5g7pbhybid5w5aishj/1631216227633.jpg?rlkey=68x8ft9jb8ia4tx5v5zbado3u&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/q76dj2p5owompzdxcojsw/1631052210476.jpg?rlkey=vne0l4n7l4yoe7v7yv01vk7mc&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/a6z8tixabcpmqfirnk1o9/1631054804353.gif?rlkey=mslxmxsadlbmj39tctgmyiwu0&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/iqkd1k34mq2mzgz4utsu2/61465326d1bca47295eea6df0f5bdf21.jpg?rlkey=6ak1g7f1q0fb1arn4b20lqmyc&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/elnozapz9djwn7q60cbzu/1742678900011509.jpg?rlkey=t435emdxk6csz4wwqehluetij&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/kg47k5ujf6mvg4fedy4ka/1682665369053059.png?rlkey=g5dl0hokfzvibtq26oxwnwa7u&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/8v5nu6mcl29np8hw1jtwg/jun_a12n_01.png?rlkey=jxfswexcaqfektzumglzdmejt&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/cgiucqzi8avpg8o0gu1eu/baldr_catbox.jpg?rlkey=4d89vhbnhamnt8s17uoijvk68&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/54vkce384sk67g0utt293/1460039145368.jpg?rlkey=gmsbz2yxu0ub3wyj7kcab2yx8&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/rg4t4gejha9uevf0obf09/1717033765206.png?rlkey=8qb076djnbsequ4mpadkec08m&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/dy4pinj67os33wa8wgpky/l69ZzpL.jpeg?rlkey=m4dcw8snc0kquld0thcssjk16&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/kcit7ljlfl8c1fte93h1d/1447117409054.jpg?rlkey=syek4ljw4d0yi6fjpyc94402m&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/cjubygio9fpd4ezd5dmvn/1737252566012007.jpg?rlkey=7e4vb8el9siqtk8n4lu6z38al&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/d125i6kh016sw92ega1su/1737043931028867.png?rlkey=jv7538wrxyet3g2x9rga0oekr&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/y2ujcs0y21779m3th9t8j/1630607126173.png?rlkey=zqgvmndg7isonw4q7r0tdamrt&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/2nbsrpsgiuw2gjsp63l3n/patchouli_pic_005_by_naudaed7yfi55.jpg?rlkey=ua07x2slbl31jmwoiglepfdqm&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/6w20ap21j0un5zjqpeyl3/kanmari.jpg?rlkey=1ch3ysqo01h539nam1lq7fdyc&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/luaym8db7kd87oftie25m/1723757927891779.png?rlkey=e879635hlaftwdmepzcfxqan1&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/dnqjtlk6mbwk5767v8osw/749006b8-44bd-4cfe-b0eb-680f7b626353.jpg?rlkey=k2ak57x5q4deogzjyej6z6019&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/46awchgtmxsuorxq3mhad/patch1.jpg?rlkey=syzklfrb0cxnkm2h1vvfffr1v&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/e7mia1mpu9a7598xs442t/143209.png?rlkey=sdp8sreykxiv46dzrokp5b5ju&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/t8zxpx5rhu7gzo1b9c1ck/__prinny_aikawa_ayumu_and_majima_junji_disgaea_and_1_more_drawn_by_sanpo__db6a069160545f6aa5222131fad298b4.jpg?rlkey=ow7rae1sakmckz99lp1wgp6ry&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/u23ae6iavpi4y6mkqdhod/__serval_lucky_beast_and_liru_kemono_friends_and_1_more_drawn_by_moyasiwhite__9b17ee73d92771d01290cd97e15b66b9.png?rlkey=ntjkiqwsg2901gh7z7tzt99iu&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/thqqaa7js1r694aoyuuaf/1670039347710.gif?rlkey=ovpiqdvfpcacj870mtklrd4ob&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/wzlfr6483n42v3uz58mre/FightIppatsuJuudenChan1.jpg?rlkey=oaiml8u7vv6i0h8qu44hn89ak&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/5ifjm1lfe4ifmz32s72oh/__liru_pachira_uma_aiko_and_nyainyai_galaxy_angel_and_2_more__d4cb3f7db68beef9eafdd3459245a746.jpg?rlkey=c3b291xhc5xbahpzqbj2ve3d5&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/ksz1evdy4ovjd5vi2nfz0/EMUuKGfH.jpg?rlkey=a99mi14d9rmuprkkx4vesawwu&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/xbhx0fa3px5dmx8hyh553/1507218092758.jpg?rlkey=n8hx24u3kyms9aph50p9v46ch&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/5kfvfplwotpa28fmtu5xs/reply_count.jpg?rlkey=t7cmu0d7fjajgx93ymo4mdyi9&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/l175lc7r4n6624tdqny2t/gsLEFOj.png?rlkey=ijp9ulviwgifnw4ormy63tcm3&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/db0h4afi06sh1tomc9kyv/alice-shimada-girls-und-panzer.gif?rlkey=2j4a7fgby8f63p5ej29w102te&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/al9cxbo9z5m0dva597kwm/1712017655275.jpg?rlkey=6kdhpxb6tumufmxxh235fzvzs&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/z668qsmffmp1ym8uu48cw/1545695206891.png?rlkey=71lm2zqd4oe680cd4al0ouher&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/hzypnwix3dbemms5dcmak/1681697567576804.png?rlkey=4d2zousk66o16zq8aewxth0ib&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/hyjk5fjqod2232f88adpz/1681818042688934.jpg?rlkey=nxeetp5o5wpj4qj06x6yons82&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/pz6demyh2wywki0vnoa15/IMG_6690.jpg?rlkey=982b9yqott05ydhh7iq8r6hu7&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/mokprg3j6eze377svacze/1564398992052.jpg?rlkey=vj5my73733rb3azju81sztqbm&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/0dzrdacfm6q2ii0zhg7gw/1502086106851.jpg?rlkey=sexcheq5035f3i1mkof7yd6ac&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/81j5yqbacs9y2j70ggh0l/1528512632293.png?rlkey=uhubimwj7rebukcc4tpy40ih6&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/4sbem9c28o4f0e529o7l0/1742632733832704.png?rlkey=5o2ap6fmxznd5ijc54zicutul&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/48abz1a48yqicalrifu08/a4973d716d65df930dddc7a4b57c7fd9.jpg?rlkey=z87u0ahkzaenong61pcn0r7x4&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/8ai583axwv78rcbj4au4c/1517679381658.jpg?rlkey=tqzwykjfmkjc4vkmwuu2uwymx&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/lqysvfj8t4vbapqo007xf/__akagi_shigeru_matsumi_yuu_koizumi_jun_ichirou_and_ryuu_saki_and_5_more_drawn_by_kiyobeii__1801e9b351d446bcf1b4aef7f5d4d20e.jpg?rlkey=lohl5mxdouesdnn7pjcanrpt1&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/x1tmdhf845v3v7uka90oc/1671917855691981.png?rlkey=poo4i786gq2pkb05dt33zjccz&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/xmoc72a0m60cye6tel09o/1705093261745173.png?rlkey=pkn9rn0rqs3vl252vprut7mjh&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/2wu5yaigdkgoir8dpfyp9/1543950581947.gif?rlkey=h698eiuuhus2v93wfc2fn4ts2&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/flknbzvq9ud6748brolw3/1528577483013.png?rlkey=bu698man9fz6ygacmxpjp1pmd&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/4x0ng1ttg5mn18otz04eo/bcd826b519324ee5c4177762ae8b75a934f4da6f.gif?rlkey=r3uj2xk5fvz2mddxdlg84gwse&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/oyza92jjqw0ccysquxcfa/1735084054937450.jpg?rlkey=7k6b5xu0qlp2v5e3udxpehyr6&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/09hk5ln3tngna32mm2bjl/1733906477214377.png?rlkey=e2lmkltneig63ktf30ls6usmg&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/8nrlh7z63zg79ytpm2ib4/__hoshimi_miyabi_zenless_zone_zero_drawn_by_dryegen__eb72248c97b8f6ec8b8917880795cf3b.jpg?rlkey=llfca1yvz6qmuk9s4doc5b0pq&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/v9e67xx3o5c6xbnuc5vzg/1715725491568035.jpg?rlkey=3sczy5p28eb0t9egkmgni22bm&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/09nno8svwk7kn8blaw60l/1708593058948914.png?rlkey=7i78eyu5yt80skeu16iilqfq0&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/ot93fedz48kvra7mei7qe/1706148112488446.jpg?rlkey=2xu4u0ftcjzzbdb2hhokcnht9&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/m3ww94ii9rzpjwzk3xgl1/1705201266752861.jpg?rlkey=mscopv7islvv0vm6wh9trl0pt&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/bjla2uuamnanrz9wz64mo/1706589842679360.jpg?rlkey=l7qoj46tqz71ni07d7xky28ig&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/ofmrlyt6yrs87lr9w9bhe/1688795733463975.jpg?rlkey=8xqqr5iw1l6gkbagb1yweidin&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/zdmh9a772gfkien8gnrvz/1682816447290951.jpg?rlkey=dpsku9q99jz3kwmwwtk3jazu7&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/acm9jdxx0tgkfjguf9rsn/1586135267449.png?rlkey=pxdcp14eowybswfky3bxzqgmj&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/2k5qyvz61tducsk4wggqd/1582397203973.gif?rlkey=n6imocee146n0jvjgeuuz8rfv&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/0sgqez70p6cx3fme4frxg/1577308701728.jpg?rlkey=kjobi02wtc14iraprde8se21r&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/wsyl8px4b5ekowavz2pbq/1545810513070.gif?rlkey=0kbu2v4rw6c1uen5j6hf7tmvs&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/nlndfeslufzdgvkz10vph/1545688995694.jpg?rlkey=7g8nmny4kle4p9jr0n09teorc&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/gp1gfhrcrkj5dspmnv3w5/1527800788067.jpg?rlkey=dfiz7as7vkc5f43j65hyd1dqd&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/3o9cz415pfcu2aolnc0kp/1520700024480.png?rlkey=er2roc7njsztypxgaa0alrrn2&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/hl66gy7se6iupiw5whgza/1534866739625.jpg?rlkey=1hokmwhg2lzpgbwbxpmaplwty&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/w3uepwf0f1itdoyy6t5a2/__dejiko_nakahara_komugi_and_mugimaru_di_gi_charat_and_1_more__1c9bbfae4f453f7fa50615696f09cdbb.gif?rlkey=fe4xmtg8xzyt8rc118on9bbzk&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/799rxitt06d2ob5mfu08n/__nakahara_komugi_and_mugimaru_nurse_witch_komugi_chan_drawn_by_watanabe_akio__01b3a20ec0e9004b74756fcd8046bdc1.jpg?rlkey=byl0mfipcntjvqgsv5re7b5ya&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/gin7cn2flf5id64vweqga/__nakahara_komugi_and_mugimaru_nurse_witch_komugi_chan_drawn_by_watanabe_akio__e9bad47763aca0b339c0689c3f88abd0.jpg?rlkey=bdcvkres1ncfszqqoqlzwd7bu&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/9sv1202pr4vytpeqelkqy/14.jpg?rlkey=34tuylgi17ei79veuv8e9wlhe&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/i15qv175qi0xotw9sqcsv/__hazuki_tsukuyomi_moonphase__f1c827b527b5ea30fa9ffc51288267c3.jpg?rlkey=ly8kth7bd8trsb7g8y80qkb6a&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/8ue4rmsv63vg4o6l7gub4/__hazuki_artemis_midou_kaoru_morioka_kouhei_midou_hikaru_and_2_more_tsukuyomi_moonphase_drawn_by_yagumo_kengou__5e871977e66ae2b73651ad5cf09cbca0.png?rlkey=b84eqtemq4o9clegfrl11ginu&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/ldbnr809tw4oq8k8sbbvm/1514015422913.png?rlkey=4iyu4rskole9imywj1f2cqxgm&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/0swszjt9dl6rq87oxuygv/1525342214852.jpg?rlkey=jr8j2nxadkp6nnxlwt48gna2h&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/2ght6m1ssaw6jbn743nn1/24BA966B5D2F4D0DB0031F862219B8FA.png?rlkey=ayctl5wo9ifn1gza7mnco98m6&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/b2m2o1oizz37lilsk1fv3/1509371371018.jpg?rlkey=817yagwg2w7ad9fvinvsddns7&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/f7d6osrll3w3vw8u4x1bb/1582031804533.png?rlkey=00r39dmnmw5wa5nlco9pnrbxx&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/a39tbutzsf09jt5pm9ctw/1558770122431.jpg?rlkey=1jv1bpzrqaslaf03t7snwkvgi&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/9c35ibnojjlnok14aodgv/1670485217863406.png?rlkey=3ogufjhjkylibe70nrhymp6j1&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/2pc2af06haywheqph3oq9/__saya_and_myaku_myaku_saya_no_uta_and_1_more_drawn_by_fua_yuu__e6173bbfc5eb25742d4b95111103b200.png?rlkey=fb73ftzg6bm6sp2il27r9gi6t&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/oxdfi8dvad7uhrfr0wj41/__saya_saya_no_uta_drawn_by_hirai_yukio__b2347e537155844b768c4cdcd45848dd.jpg?rlkey=uz85bi4j37ob0y2kfo7qabf45&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/wh0f9u0suknful9dtkfsd/1704576173105077.jpg?rlkey=3mx7a4a90oekxqald3oxihpbz&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/wlcjrje6ukcfkhhyvn619/3aff871ad723ee7df55d8ab70e5639b89051bc77.gif?rlkey=hcv1jh9fn8tg3i2treye56nqt&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/n3a87a5ni9i4vq2cbz6ie/__yoshida_yuuko_and_lilith_machikado_mazoku_drawn_by_kikukawa00__039868ed712fd9a213e42303c7481b35.jpg?rlkey=dru09pxt9w2eos8dz1aivymvd&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/2r33k9d9v1w4xqzmc05d6/1b3dc327a1aeff37aa82d621e30acf1de87f8acd.jpg?rlkey=yhmcjx3wq9vajulryxahk0gvb&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/9zw8kzeu456iuugtwg8g2/1564268137577.jpg?rlkey=3l6pczrb8iiqijpstg4vw395a&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/fkdtwkrubeet9guwa4arc/1564402846100.png?rlkey=usfzsb0uute36s815re8t82fr&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/sgdrwlpgqaywfblfi39lp/1652250215781.jpg?rlkey=8nbwznmh45wx1x47j0nybecp7&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/oljb2ejpuek6rzkiq6n2i/1703136844698417.jpg?rlkey=7ih3si9ntgmxfu87pzs5e8fjx&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/m5sqfwhjxdr7za1msn6v9/1688671290515718.png?rlkey=58sxdigk65s72uwjqly03erd3&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/78ydl6lgnf0v777kxo2j3/edafe312461a09661058342947a0d307a60c6578.png?rlkey=3lnj23z1n0pa121htowu34qjk&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/te3ssd7fnh2b6ibc2s2hh/1578262862616.jpg?rlkey=3b9wdzmyqe46cbc85a1zq3f6s&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/uik3dv1ajyfu3522zgp5f/1585517837745.jpg?rlkey=8xvpv0dzto80ur1e369yld7po&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/vvkq7mbzxpfeg3aekk9uh/EzqDeghVcAEGhBV-orig.jpg?rlkey=18jnskfsx11gajbspc5w3zodo&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/svh1gbbhqzpdhcy5ld05d/1646615891056.gif?rlkey=h4ij4cm5q22awwjfa4gm8uypf&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/sm2knvlqxwen9oii93641/1741400344132087.jpg?rlkey=ynuhhekhqwa8c9oh16um1jbll&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/ofpksccyj2vzx0h04q7qe/98b94b172f7e2ef6465755855ab175138c4b8b51.png?rlkey=blcv6j8djc44xb3vgro2fadm7&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/9kcahdkob8si1hkud1xwa/Tsundere-Renkin-San-Kyuu-Magical-Pokaan-09-DVDRip-h264-768x576-FLAC-EC148D52-.mkv_snapshot_19.36.050.jpg?rlkey=0chc75xbje3acgz5m8x5b7jns&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/638ha5crk5jrk7zr44x8e/Tsundere-Renkin-San-Kyuu-Magical-Pokaan-09-DVDRip-h264-768x576-FLAC-EC148D52-.mkv_snapshot_08.30.567.jpg?rlkey=filjhvbmwvlwegj227k46f8x2&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/jfzzq9idwe0iwxmdkhkns/Tsundere-Renkin-San-Kyuu-Magical-Pokaan-02-DVDRip-h264-768x576-FLAC-5EBB2FF0-.mkv_snapshot_19.55.224.jpg?rlkey=h9a6nv6s1fg7o94rtdralkyew&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/wg6znhpv2cx6nwvsloosf/JacobSwaggedUp-Kami-nomi-zo-Shiru-Sekai-Megami-hen-03-BD-1280x720-.mp4_snapshot_15.54.320.jpg?rlkey=zvvzp3tfvbkxvskh1n6h6lho3&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/btgaaxmqegljt2657fxws/__yuzuki_yukari_touhoku_kiritan_kotonoha_akane_kotonoha_aoi_and_otomachi_una_voiceroid_drawn_by_microa__sample-e7d40fe7efb211c81cf57464554fadb9.jpg?rlkey=1bnqrfmwb2i2qi5vmqq9mzaup&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/5j1yf7852mx1s8yh68hpa/__kotonoha_akane_and_kotonoha_aoi_voiceroid_drawn_by_corn_kuten__51100a197575357d7435361eaae1eff4.jpg?rlkey=b3zbc53lnz3cnt23ke0mim90g&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/pdhxmlxbxdq4zzvnc3kb1/__kotonoha_akane_voiceroid_drawn_by_torisan__b0de74bef5a183f3fe55464bc417ab69.jpg?rlkey=ajbardm054zvnku0trdkaswz5&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/68oxqgfvcmp1cw9e2qf07/1736041531176567.gif?rlkey=o27v3x3gnnq361m8ykxh5acch&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/l2wtl5iws9medo88bzeqs/1574132176869.jpg?rlkey=k2gzs8n40mtsb21dlnacop17a&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/8oqt4ufzzenjqbw8ov1s5/1575742056258.gif?rlkey=mlbz8ng6b4g5t0dgyyfv3t881&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/r0t501a18omrdz7w9a4z2/mugi.png?rlkey=r2a9wfq15ahzel8yjg739dmsa&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/iirwx9z4lcimja2iqxykp/__shimotsuki_potofu_original_drawn_by_kani_biimu__181085f85f6ff23055d083c18af26330.jpg?rlkey=onrzo9sqj1zqa9cepkgok4iem&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/4tvzkh4qykifdov66et0h/oops_he_did_it_again.jpg?rlkey=t4t48xvkkc8wucfjvdxnkdtmt&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/40rspiz84wz34nm8ketnp/1648358108209.png?rlkey=ikj6y6zy491punxqzmgoff30w&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/x2linsd65fk955yy0c3uh/IMG_4352.JPG?rlkey=lckk3lqgpdhg3r8iio9db0k82&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/14l17yl9rmz0o7oz9ls4m/2174c74e0ae9ae27de10c8d8ff1cb54e.jpg?rlkey=51kcznbgzxftlvak6ywho5tsn&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/vnjwyy5w4cgjxp88lgy8g/1565632_98472944_p0.jpg?rlkey=v7kh14i19fdjdddltvqc3sl5e&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/whaoawmvbu0aswgxd5khb/97b57c7a5099c7f96c858c1fb2e6533642a75368.jpg?rlkey=uiyq0zqjge8xnwrhug5w4a61p&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/8zf3y1xogmbwx5cyfx118/_53ccda0d9c76705f9bc08b9e0c5e373c.png?rlkey=al2gnw4cf9zbbixole8b48kt3&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/g2nu3zb823px48ax9raq3/nutbladder-hidamari-sketchc397honeycomb-06-3406f4cc_10-nov-2012-19-18-21.png?rlkey=icu9p79f6xrmw3m9uxia0xp2x&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/aq1vh3i5bjyi5i5vp25i9/1579738824998.png?rlkey=gci9q3a15gkp1r6cpwwio2vfv&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/o1mdkjoo3ob97po2f1wfw/1626713273364.jpg?rlkey=w1wsnhjy4dqsilxyslegcwrp7&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/2m5zi64s1wpslkgkcnntb/1626707638327.jpg?rlkey=fhpbzihz5ea8hu0u71twe82sh&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/mdlmcdpn1wylfbl36lr6o/__sawai_natsuha_monobeno_drawn_by_cura__21b9f418a505bf4b9f8e86eebe2cd5ae.jpg?rlkey=doda8gba0cwpj12q31t22iuov&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/36f9k66tpo3fw73uh45lk/PRIMAL-x-HEARTS-76.jpg?rlkey=l3rc3sap3t1x8colglhancrxw&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/p9h6c26mlaqax8gdjln00/u5rq2d.jpg?rlkey=gxxzftwm44pyg9ygwz1xwhrg7&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/zhr7afswz55u09t3ev0b8/61214525_p0.png?rlkey=yw0zfludalbqj5t3ch1wymhd7&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/h9n4yjs45bc6707q8zhef/1642651585712.jpg?rlkey=t74cktaextx2pregy3ft64mcv&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/c9svz4vnyoa8elrmupbh8/1645333131817.jpg?rlkey=ztkncjy4xv1zqevfc6k0l7isw&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/d3hiq1bk8ebsay2tz8jt3/1547340482609.jpg?rlkey=fnhz9mqb8h8ziqo0rg21jxxhn&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/n25kioj9ycdwnj7h63t7g/385932cad57d92b262f1453a3682ab1c46395b15.gif?rlkey=i9yn5rngpp8slzqlqbt2ntpxt&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/q20vocqk4hga3dci4p686/8fc.jpg?rlkey=3hxfrf10zl6z1gkwd299grxp2&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/n5739cw9ol69e6tx3ge32/1716578027356079.jpg?rlkey=a0v51l4hbhsxrydtrnvmfweev&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/c6xnmwx0ceswne2wpwhxr/22cccc3c4b4b9850448c7ae0e4a6075a5f4dab48.jpg?rlkey=xxs18r58c4zk6iwy3sjsa6vve&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/0ytob8v2v9wszrb9bu9zm/7473149625a27792d3a361cb6f3f970e2fccc9d0.png?rlkey=5k2gbq9lf6zxrk9x9zyo1lkxn&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/6sggghis7ik4rvx7amhkp/__yumemi_riamu_idolmaster_and_2_more_drawn_by_yukie_kusaka_shi__6391ab82da01e2606ac62baf4e909f5e.jpg?rlkey=6uex56nopsnaytjceut7dkzlj&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/bv32s8qiio15j0a95o606/https___x.com_tai_saka__status_1905238526611927515-img1.jpg?rlkey=hvd245po95ssobvmhpq8wbu8j&st=lj305wp0&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/tnxaj0kbrn65hzvpnle2n/kimo_ota_ku_kun-1708497063460376634-img1.jpg?rlkey=cu8m2a655tdhcyzvm4jfud5ub&st=0j94v1s8&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/dt9hrfcui1m5s4yb8ywpz/__justice_task_force_member_blue_archive_drawn_by_kunugi_miyaco__f5401350c0049169014371dd24ccccd2.png?rlkey=7hql4cluiasflistkcxq32dch&st=bmi5j2ju&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/8tcv0baoht68vdg98b2vs/1707961769078034.jpg?rlkey=p1rulmndl774kt2ltp8onqg4p&st=8pco2psd&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/xorvjxcurvlf2rodqdymc/__ibuki_blue_archive_drawn_by_gubbi_on__8db417ed222ba607cc2659939955b47f.jpg?rlkey=mm4ieu1ee63ejtqcrrz4gk6jn&st=f265xth7&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/33epx6amebzl9qcam7rf1/__mash_kyrielight_mash_kyrielight_and_atsuko_fate_and_2_more_drawn_by_kawa_mura__d2ed74e54ec6d6b2017e20ffed0636b2.jpg?rlkey=sroi88h7csfv3azr8l4bkqwsx&st=vccyxamy&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/ydloa8jgy1t8lagr6tr2f/1719256841971624.jpg?rlkey=jncoqpqryn3ah9whuyu565053&st=9twwq6wy&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/l7k71ia6k8guuyyjtyo13/__miyu_and_miyu_blue_archive_drawn_by_mountain_han__fb460dd94a89c5038474ef73097b9f44.jpg?rlkey=nvjk6flj04pl8wic7l9y9dzw3&st=p6mav63x&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/dfdh8hhqsgb2b87w59yvd/2cfe7fbd204d13c2c6f9435aa65e10cb.jpg?rlkey=jzz6n3hz1ewzpruydy3i483ox&st=34d3rbir&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/3xf3icv6vpvrf1ps3fldz/3_7.png?rlkey=zend0evw4sdeqc5m9t6e5a9tn&st=pw9utygf&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/7tpm3676k9dr213sa2f9s/__yuuka_hibiki_momoi_midori_hibiki_and_1_more_blue_archive_drawn_by_netural__310f9609ed95254cb9c5d6d65bb3702d.png?rlkey=rql6m0tw9uxchad3w074l7iqq&st=9ie83emd&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/l6aqnlzzcos09ll5x8wlk/6d58ccc40d225057f760424b03a676e1.jpg?rlkey=ekwzaw1qdqi0j27aesf9eteii&st=olhd41la&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/on6r031wt8kyfegyc6je0/10a3fc42d183426148a19bd4c5c70960.jpg?rlkey=u53isra756olp40f21997uf54&st=68ciwf82&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/cwvus6micvsj8k77j85xe/l5OszWQ.jpeg?rlkey=obe7jtkn206lchk71468j4fh2&st=f602x02z&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/m7r8pzv1omm73hn8fbmhn/GknqhFXWUAAGHx3.jpg?rlkey=om3890tcm7v2gg7dm1rhhfyat&st=facinczl&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/ob3yqapr38hesmdrojnl3/__seia_blue_archive_drawn_by_nanihatomoare__296af9f4befb012c32cfa84ec8158064.png?rlkey=di66vucrgv6uamzx1hddbhr18&st=fv7xwkyc&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/89pz7sc7nbogy5iyo8lim/https___x.com_kainownill_status_1913789726139519016-img1.jpg?rlkey=g7ubk92mtm4trz85529pbmdln&st=4firzdsh&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/cfdgdq0qt14razgs2tg95/128552330_p0.jpg?rlkey=eodkhu1xads2mdvyxdqi08k5b&st=4xzkoa4t&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/nkjd3lrazajhn7q775cw8/__hataya_misuzu_idolmaster_and_1_more_drawn_by_pulmo_artist__sample-84b2cb5d2aaaa7bb0edaf7d4beb4c60c.jpg?rlkey=f5z19zem8xxg1jv1ne6b4sj81&st=2wdvpmpf&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/gr2v55nztg3k9i1kaet4l/v9uddi.png?rlkey=dw42r1nr85taojfkw5pttw868&st=prltanzx&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/3ihp49car8lp9d4t2co1w/https___x.com_ice_0416_status_1915968061490008275-img1.jpg?rlkey=u961oaehqj7j3vmdnmyt9ejiw&st=6e249raf&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/p3739g7021n8k8l5jlidb/2777780.099999994_-_2021-02-18_060638.png?rlkey=8ucj9hi6mowopcqxe6ixcq5cb&st=fgtbk1bp&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/33vealpzwh72hfrtbh7mm/3441383.5_ed2667e3318dd46d8e014080dfa70fed.jpg?rlkey=7pp5q39flo42x8vd7ccci47io&st=nf9bmg24&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/k54wcfh5lme5c4jcatb67/4c1vcx.png?rlkey=eewq6yg1meee9o2cokz4qkj0b&st=6oaa7tjx&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/kxepepc1na281r8xhuwyh/ro_ro_sh-2005989555040837802_p0.jpg?rlkey=qasam2soxt4dv64c5xg306mqq&st=uma9t1vi&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/qoxuv6xllyd9k97ymeef8/__arle_nadja_and_carbuncle_puyopuyo_and_1_more_drawn_by_namori__3b7bc1d816a8849f5aeaac8ed4d2c584.jpg?rlkey=ssa20y7e4xieyrl1zqqbl7fsm&st=sef7lqhj&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/cslzx6ga6qnqqdiqkoonk/__arle_nadja_puyopuyo_and_1_more_drawn_by_unagiman__afd0f44150d72a96b46d21b05cbef219.jpg?rlkey=1z1kbk6pmxbda3pry9qc1q0yp&st=s5klcu6h&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/6kx1k9qw4xi6vao9ieq13/__hasegawa_kobato_boku_wa_tomodachi_ga_sukunai_drawn_by_sooon__93d1bafeda1aa7cfd168cb190e8261b3.jpg?rlkey=4x4saib0rv3r9vm5kwvxcq219&st=iqvcq8dx&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/381vmcvm4agc2gb6b95xu/nWDzJhtGl1Ys2TM3ZmPiSMjF.jpeg?rlkey=2j7u3iohhvjfmil2i21vebphl&st=edtco43z&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/effx2oyf80e8ekyj0hein/__liru_pachira_uma_and_aiko_renkin_san_kyuu_magical_pokaan_drawn_by_okamura_masahiro__a19c68ece3b2413025c5b5638b193cb4.jpg?rlkey=xknbxl52jv1pf6h16uwiqyn5c&st=j05fwke8&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/op6gbcnhytnb53byt2zv5/3563632.8999999985_58f639460a03e16ceb77369836ce5109.jpg?rlkey=ydory96ovkvmsptxp0d0mh16y&st=rs53vf20&dl=0',
	'https://dl.dropboxusercontent.com/scl/fi/lrlyg7giamwbdkuf3d8h7/38349344.7_image.png?rlkey=lg5hfymz8nlln8klaqpzi67jh&st=6ko8osgd&dl=0'
  ]

var AskAnswers = [
	'100% for sure.', 'Definitely yes.', 'Yes.', 'Probably.', 'Not any chance.', 'Definitely no.', 
	'A little chance.', 'No.', '50/50', 'Fairy is tired and will not answer.', 'I refuse to answer.', 'Your question is so stupid that you should just leave.',
	'...', 'What was the question?', 'Fuck you.'
];

AskAnswers = [
	'100% for sure.', 'Definitely yes.', 'Yes.', 'Probably.', 'Not any chance.', 'Definitely no.', 
	'A little chance.', 'No.', '50/50', 'Fairy is tired and will not answer.', 'I refuse to answer.', 'Your question is so stupid that you should just leave.',
	'...', 'What was the question?', 'Fuck you.'
];

var FoodArray = [
	'Through the Dark Lord, Amen.',
    'Eat a duck I must?',
    'Rub a dub, thanks for the grub!', 
	'DOWN THE HATCH',
	"Don't be a chicken and eat this chicken katsu! This one's on the house. Eat this chicken today and don't be a chicken tomorrow! Hoho! Chicken katsu is awesome!",
	'メンカタカラメヤサイダブルニンニクアブラマシマシ',
	'https://dl.dropboxusercontent.com/scl/fi/s34cqral6xpvf2hxj6y0r/averageblackmiddleschoolmeal.png?rlkey=kalxs2bueaqi3dl2l55xj31kn&st=i3t2l43g&dl=0:pic'
];

var AzukiAzusa = [
'https://dl.dropboxusercontent.com/scl/fi/em6uygl70h9vzsmhspjze/uMDq8xV.jpg?rlkey=mxn1t63cwx2q0268icsl1vktr&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/knonpbv07vykljb1v8vle/UJyxXQQ.jpg?rlkey=nd3avgmwy0rly8djqqr2xzihf&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/5pwphj2sb09c4jcmi7z5v/Vafqtae.jpg?rlkey=zv5g7lcaqo7dpst7ssx46qdxe&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/bb2t7buaksvnzos5l9rkp/VaR2Xhz.jpg?rlkey=9znhupae9gqh7d253bag7oibn&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/l5fnj8aktaxi9vhigliop/vbkze2C.jpg?rlkey=dqv74s7qp5l1lye0t7m4mqdvd&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/fjb6zbqho9y04f3no6qlv/VEk9wtj.jpg?rlkey=r2p5ngqclhz84351hceuz3bzq&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/gvsub34ty4n4go7u7czy5/Wb7KM6H.jpg?rlkey=69orme9xnqf0wfn3i61ixxgwz&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/9im2m9fvrwi8yoyyv8py4/wfHQwe0.jpg?rlkey=ulpo3ew5uk06l5zhej7yvdqs3&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/yaxf3psr2y5fx6ui0p9ki/WoB0M5r.jpg?rlkey=928sssr8ql5jkdiilofrq0dr8&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/km0b00lmhwt11gono3q9u/WSm2yfR.jpg?rlkey=wqwbxtzgs61azvw6hsspyhbwk&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/c9qphfmc0dis2f6yie9xu/vfY2ixD.jpg?rlkey=9jaftpf80qz34ct6dqqxhnzh7&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/glbqonang634z65xehhe8/WQbJ66H.jpg?rlkey=fkvu3oluq65ynnf7kr9825num&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/9sbbowghwd7fme6556t1k/WSNJrw7.jpg?rlkey=fzpsde4cymta57mue1wn6tro4&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/2duscanz39sgtz6au6qc4/xgBWd6G.jpg?rlkey=m26jp8ccvfl58b1w6r20adecw&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/jhji4mvpqjoojv1jddtmi/XHJ3qgR.jpg?rlkey=hhiv42rjum1cvotcpk5zwtish&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/ihkilma6f5ppxvy3jfjfj/XLKIDCB.jpg?rlkey=rql9t3img4w3a057fsgpojdd5&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/8ogd5nfgcbdcbq8yr2p6l/YztbzUP.jpg?rlkey=4t5hswcq0yc4tt5w3b3o4zdnq&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/lfe06trjdki9bls0qp052/zFQEMYE.jpg?rlkey=eu6b1xnetl23vbdj7sijffqun&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/hpjtirlkgxmeb58k3q1sj/1eRGaGn.jpg?rlkey=x1z8hmorogm0qdq4z3vvawtsu&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/k4p1pj7q9qcpwgtslpa64/1RMNmRk.jpg?rlkey=t8tozhu41ammzra28lmko02p9&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/uv9lht607xyozejn9uzt1/xodPRew.jpg?rlkey=vr3esy06ov3vq7h9ft1h0nr31&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/xdczkdus7wafkk0t6i4cz/z6HR59Y.jpg?rlkey=rss9zx9my11mbqbu1skvvvyk8&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/2le54a7sbpr2cl21b5qlv/z9U2dao.jpg?rlkey=b2y8kfefbdjjpcxi64kwos8i9&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/85q974t1o4geduw2oa3ws/zgQ4cA2.jpg?rlkey=5hnxdjdeumnja34ckpt4raiax&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/rogxkm5s7hetie6d2c0y0/zKLWSvd.jpg?rlkey=tk32hmflp5rw2x2t05pwavyvs&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/1nmbcksx4rxjc5m4x0g3b/zOeFk9B.jpg?rlkey=2pv6q3b9rseeu5j5561ft3l3v&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/jsjock4bo0xwp6dq0bhky/zzOwvhE.jpg?rlkey=27tpyfpz285o4ipxp0e424hau&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/eq9n8f8c3jbhfg0j6iojh/00BJARe.jpg?rlkey=opf0zo3p93ex5qvchwal6mdnm&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/7nqerau27yyz6x5g411jo/1CdA0Lk.jpg?rlkey=yh72z587wz1ngnr8fn908qd63&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/i9z542mqrpnh5cz60ncnt/1XtmTb1.jpg?rlkey=efpmrt32rwbhmobk2m8byle33&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/qo6g0gj51s9tqo1nw4y0r/1zXx6jJ.jpg?rlkey=qk2sgcuid4fsz7b5ghhhbh6sv&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/xo9b7z3khrhdeh9thkf6l/3cBwwxi.jpg?rlkey=gbwa0ya2gx5icqfm1f3ffi7nt&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/0n7q2kesneudn98u2atvp/3WzG4Gc.jpg?rlkey=o5cyg4apooudugggu7l8anv41&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/d8jg1o137nkwrfrvuzgv4/4DgGFqm.jpg?rlkey=xgf3smfeuakslymrdvswonxv8&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/ie8avh0s2zr4gyzmh6xx8/4Ovvue1.jpg?rlkey=7edj9uql3ae97fzfrbmv6tynd&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/a7tlel248r17qtebvn7ny/5Ng3LPH.jpg?rlkey=yvkx2ma9fzlsmlf0jxg8tvuj8&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/6jibwysip15ys4r6uzqnv/6Fmlkle.jpg?rlkey=qky9ese9g2dxi5skns6ujww8e&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/6tbwslpjapsrl8ff1r32b/7G2Nd5H.jpg?rlkey=4q84pdzzm818qas653mj8peuu&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/5mffxhwt6q2fztcuobo79/9B9UP9p.jpg?rlkey=pzdgo4rlwly8o57yc0vx6bv3h&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/i0i6ikpzsvnmtrhu1vt8n/ZsApbcv.jpg?rlkey=0h7ozdofvubcgwu2sjtc638f5&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/h7mx5jdethw464gav0pcv/18bnWzC.jpg?rlkey=ny8pxe9lnc60cud6lesxgm2ub&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/pq84t4q39nf01dj9sxddv/29FL9Rb.jpg?rlkey=pww8kod35e5b1xly8bnopvvz0&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/ou37ycl285t4lp02khmd7/36AcYzz.jpg?rlkey=27tyc2abh1mbqvtavjhdi0efp&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/xz99hscqzkcr181y9j5bv/50tjcTI.jpg?rlkey=qre3t0rvv0bzklu9gv61nlrbi&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/c1ixi57byq0095kiv81md/58DG0lq.jpg?rlkey=0n6n13moy1of1cgedc4bk3acz&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/16w2bw31plxdi72l87a0w/60UgzBa.jpg?rlkey=v0fxqyzkvu6j1jiu1p4tqg4n9&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/ndvdq75t49xdibmhl1866/6c8CXC4.jpg?rlkey=44vmyew13dzqcin1qy27ic13t&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/d8x5u2akg19mp8j9rvhud/8Gkdo0y.jpg?rlkey=0fd9pc7bhldxt9cize22gir8f&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/lxpufvuptoctgmqlfeg8u/9XVsfNO.jpg?rlkey=i3jzef49yduclbqvvxf5clf2f&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/r3zmb6w3i0niybzg74obd/AbcD3Nr.jpg?rlkey=hngjajw8oxqyc9gy77kxsqpqu&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/i8m9pg664hndr0grpz1ex/ASIB8T7.jpg?rlkey=c8w1l001mj13z2ik2hmxwc201&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/0hx2ksciwi7xlxj5jany1/41vt6UM.jpg?rlkey=wji7ff1wyk40riu7a85eymwid&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/giwg2xjd2mw9k4n0mo73g/ahVVm2s.jpg?rlkey=phi6py0mzj70i5fuqu5odt9ih&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/wjebhwymomv7gn0vz1q7z/avCtK3I.jpg?rlkey=wue5n6ragh18nmxpg7f2rueoc&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/jhvhf3b2u420bl2149han/aYjMzYp.jpg?rlkey=cd623v8tuawwwcl8k965obdie&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/1pclmu4j41seedoaenw3a/b2Dpt6Y.jpg?rlkey=j4e597vkwmm2q4x214dc1vz7p&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/g6dww6yxh4redjtjzwdzr/B7p70SE.jpg?rlkey=tbhz1l9cmpsp95j8q73j8hvxd&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/9iyl3tau1qsccg6qd5mcy/BTU1uVD.jpg?rlkey=5wfp5do4vj2tgygh3nzuhwx6k&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/ca5vksvxhc1q2j99xoh6u/cBXF7Iv.jpg?rlkey=0wgmroa3g5k4u7isrhmee3ig5&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/19ninjkd0vtdt86po5v46/cINMqMH.jpg?rlkey=d8qm4rqdyv2vaqaygze91u9vd&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/4k21l24zobjr6hyrmnmf3/b8dIh33.jpg?rlkey=pwrbvs2q6ptxcz6jkwukgvvkw&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/0kjsq7jnq9430ofty2lky/bcfj2IC.jpg?rlkey=lzpg2jtix01zmdh550mmfy7qo&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/9jtfomz07i1fxx8yhpfvf/BY5KUe8.jpg?rlkey=9wy4z1tf8ygse130bhmh7e6ey&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/erqk7ha5aro6767p95j2r/CNyw7k5.jpg?rlkey=vxceiwvuo8uq0hjxson1etzo2&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/d6lu02jq8k81u24i0q65j/crah1Zs.jpg?rlkey=8cpnu1yj0gabxkbblaq4mjlfj&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/r4mmj9matl0y6com9rmul/CrSAN6B.jpg?rlkey=e84cfl3y2l2mf6q4n71cpq33d&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/756xa66tk38wbaf79ogib/CsQ0ms8.jpg?rlkey=qany54oj5mbcmptk8jer7998g&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/na0dyrk0ucwo6tp1m0ezc/Cvi5LSU.jpg?rlkey=lmhc6iwigh3qhmlmj0ni633v2&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/bscsdi2ynvaailx3bi8t0/d8SD7wj.jpg?rlkey=8xu8auzr1emelspzxwhzlvkbe&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/7l8gc4k0gy3vpf3cvwwr3/Da8gnRZ.jpg?rlkey=x1cl8qm04u8g3ja4vfg9ih4qn&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/glmcfi29bgex05vcd9l6i/DaCr5iT.jpg?rlkey=lzwljz6po1j1or7v72gh9soyz&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/14e6dkjvhzll8lhhm0gkd/d2cLljG.jpg?rlkey=bfrckt3qpd57h58qt90k3i0nf&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/84r5du2oy943qts01q2bq/dFR1sB9.jpg?rlkey=upsjqnmmlpyicfr1lsnqvccom&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/0i1crfjqo55kipiw1hnt4/DGT9ygk.jpg?rlkey=n8tc5w8dx9e0cyxwtb8g9ma58&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/vnd0fae1rgkv5su6afous/DK90wqX.jpg?rlkey=n9wik7sut9icg5fkjj2lg2vzf&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/zkzy8l34uop01mgvhh5wr/dM0ug0M.jpg?rlkey=wq6lyybe4losy3c0wsefmf4dk&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/h2fw6bhex9ho8cle3lnjv/Dp1EkKh.jpg?rlkey=juvn21m6xd4zw1qvuqrybrvjk&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/3w6eaqmofu2s6o0e8qjzb/dtvbNdr.jpg?rlkey=199zjl4d1z2z45ey6muihzkda&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/hzbjkyehlaltr1uz8kr1n/DueWGEC.jpg?rlkey=5tl0pxyufgsyqa3ixtv0dcru2&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/j90htxs5o4jggmbwsp1kk/E0cLZhC.jpg?rlkey=ruzgnm2znlfusrja2bus6b79j&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/pxw1i6va7c7ych1rzf9cg/Eaod2z3.jpg?rlkey=q84isv699ti6x958txui2sr3q&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/2ymffluxyu73myzwjdxdm/DTf9oxO.jpg?rlkey=jmurgqebpoekdqlhhfub8dzaj&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/kmwg9eqxu9gnpcrnttfgk/DWip92W.jpg?rlkey=8cj2vyouqn6k2lincr5mx7zua&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/atsi5o77ggfi9rgyar339/eBIivre.jpg?rlkey=jknai4lisxh1uyhudpu6xg46k&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/0mqe6rwaz7yfn1ueynapl/EFMECVZ.jpg?rlkey=vg33syw4vhchgangdhppshoya&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/a7e294ng3ges4f8gup992/Eev1FBX.jpg?rlkey=vu6u83tzlrnlk0p30zpma98l9&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/xpi2ape2eyl8x9a3976ro/f7Opn58.jpg?rlkey=e2vfvm9w0sfeszt741j6nybms&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/lu1a9nzhk4helfw546t8l/G2hu96J.jpg?rlkey=n40arjger4qcfmsr6debz5qmu&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/5gk0rfnx3v1vtq3r55mha/GAIImr5.jpg?rlkey=8an2jcl11avmgbvr8qeg41g1y&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/2vxidulmggr3r2i9dera9/GHo7w6H.jpg?rlkey=vdg3wobfmewd8yyyqawd46k01&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/kiiu3y2hm015cvn7g22j5/GQZ76FH.jpg?rlkey=w5tye9k16noros7qjtu60gq0j&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/2ph5qea9psp9srbklz3ns/h9mA9xN.jpg?rlkey=g5xw5t4hwvyiv5o9k83bkh157&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/jbbm57dsj42bedbp9rxvq/gEASW0b.jpg?rlkey=znaqk6mewh1py8gwmhsats8bq&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/kvh50av3s380ekfzaqkke/gREBKRy.jpg?rlkey=1wy4ksw0hsjuoopbppkvzhvq0&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/np7lpq2phw6d2jubdhebq/gW81TYV.jpg?rlkey=f950mtj0p2l977j3tc8okd4gi&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/vig02rsid208g79xq1ird/Ha8zQfQ.jpg?rlkey=om5gknq02vdqjspbzoej1vkxm&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/8i00owi9wl3doicq3f9hd/I2vEWBy.jpg?rlkey=i9ilo8qwhz8v64yup4pvt8mvs&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/u0vtmvmbhc4x1pxf80y7v/i6mjlNf.jpg?rlkey=an1hm8qnerhmw1epwasi6na3v&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/viyiwsw6spegt24aloou5/iQblkFh.jpg?rlkey=wvwt9vqckyotojkw5owjb8psu&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/fa3w4eqre4k5vgsiyq2tf/JbI2cYz.jpg?rlkey=aq2r04ch6ey07xruaq10lgavq&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/0cuv05r1y5d4zwlzcto2h/jlTnRpx.jpg?rlkey=pe7guhtaleotck5zrhxlkfiv0&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/74dtujs9md699bf2ki6ly/IOgdils.jpg?rlkey=ufkqcm7qi585gwis5tcmqw6cx&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/2cq2poo7ivqgtufs2skxw/jcm6lnb.jpg?rlkey=h3vkrn30rvb88ptx16ckm5cmh&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/f2mjijyhrenxraaoes372/JegmD3d.jpg?rlkey=f8s7q43bm02fg5c9skmwyry5x&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/f64n4yj8pshb8s62cda4x/jonitTI.jpg?rlkey=3cad6xghpgk445fk4tir4ku5j&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/78u48i1cc7qj0bpwyx87x/JuKFFIE.jpg?rlkey=hi04li7ae4wqq8hy33mzt5lta&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/5k41t211lzfh9u3mtx77f/JxkVtAP.jpg?rlkey=n5ne2ybenhuzpbobdrl5hh96n&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/tc77ldnjcap4w4szspqag/KgNhQrT.jpg?rlkey=iavnyq0sgmur80bhn509ha5w2&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/qturtek5g5qnsxq0cm7ei/kMRYMZF.jpg?rlkey=ot1xrmbcjo6femruvux1grui8&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/8ngoknxvt71t8bc9kwm6y/KpkLLI4.jpg?rlkey=uim3xob3z9xf9j2v5pzkny61x&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/psz24w734qx6k6xmsqzml/L138zu5.jpg?rlkey=pchzwdkui1ufbykjaajc634en&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/aj7d3qflfe8fx0f4nmm9u/l69ZzpL.jpg?rlkey=it2mqf2zbue2ch1qirrp52i04&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/blet9i2joa4sg85zksm0h/LdsuPYw.jpg?rlkey=o45uexm0k5ppqrb7mh24w9tn6&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/gafykq1n00ztrn4dve11y/LllKx2I.jpg?rlkey=i4szult5hesin2ql03pgjixfw&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/gk05r2041a1v62si3zpa7/LZZ7TeO.jpg?rlkey=71zu3tlp3duhr3e7vo295phd4&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/9wvumpf4hqugej8e1ebg3/LDWn4yQ.jpg?rlkey=f52tgsjd9787q994ns79hg0l4&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/zrceqfyuo8dt0x9y0c8am/lLvHiZX.jpg?rlkey=tvy21ejmpb3744qy9u0yzkutj&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/sdfqh8jd4sfwq1vx4fwt3/m9FVaJl.jpg?rlkey=pmjqudkm2lt6b34g8dhyxfti0&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/ekccztdtttu2bsr11c5de/mLTJGCa.jpg?rlkey=arnx8rq1013njnsdoj9q5jmxv&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/khavu18qrlpwxfxn8xb6t/MnWhUlF.jpg?rlkey=i8rjwn94w9mnmleegt0asm9r7&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/tariivrmqgox609wlwd2w/NC2GLgk.jpg?rlkey=v7czw0mmwcf4ilk0qopswkgrq&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/5sjvbj2qmjdmbn8aohcsf/NiSnw1L.jpg?rlkey=7b0m5bs08v082fftablzzdnvk&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/lhe9vhwhd41iljuy8atpd/NL6Oh5I.jpg?rlkey=t9c2jz8it91baoaom5pvdyn3v&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/4orn3rx0egrvc5se29k7j/nUZ3IJB.jpg?rlkey=hyqsx5wpfrn1myd5wrnhvtjl0&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/okbnig4ic0b03s6wj88ku/PKTSK8K.jpg?rlkey=yrlckqk9hedhly5usj22r9huj&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/ouycuqonyspr9wcia0afv/pXHAq9B.jpg?rlkey=18c215qozcged1fqxp5xrlomz&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/ae4cojlxhazavbyag3mnl/pfJovgf.jpg?rlkey=ht4uexs5lv2os115kguizziz8&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/bhyh502vmyhux12xb75kv/PYcEiNs.jpg?rlkey=aabjyf6qndhk399gd73j0ht8a&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/nrf9vtyg6cvfagdslbcgx/q5nDRYk.jpg?rlkey=i34een9q5nknexnfgmb5ytsku&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/p0mr8goszkcrdt25x4p16/qFwKWoh.jpg?rlkey=u94l86t1x1wkdrrtn3bhfhhpd&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/7w3oxyx14a7fbemsfcws9/QHIAOmk.jpg?rlkey=9t6tj6za40l6flttdapuj0wh4&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/ngvgtnmjls66ek53b0c1s/qjdMD8U.jpg?rlkey=18fp5ulkrp3l0vzhfamp909lf&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/x85mahznvx5t39lam7n71/QocGcig.jpg?rlkey=g5gt9igo1rd0nabs1ca3tiffe&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/t7xbrasa966vjbrj2y4xx/rAjAhcl.jpg?rlkey=f8phz19ba3rzb5vgjcjt2p3db&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/cq1qg12jgj8lnt4lgq95e/RJdRQhu.jpg?rlkey=7kikvtxahc1s98j95i9afot6l&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/3w5psjkea1zevnw2y7oa0/ru2vx75.jpg?rlkey=byw5cbvu9ph8ibf0m4wn9nxr3&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/n9apfm5t91gmc6lye83qe/rlgVNWk.jpg?rlkey=61vb9kdkkpiszlhsjo16ujjtc&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/fbn56uo6rt8yxsz99skf1/RxxgOPt.jpg?rlkey=0itj12lq93pmi97c1pthrdgq4&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/nqdtmhqf20yuikklcb048/sG0lMve.jpg?rlkey=r76jwkikf0iplahvcvh7j687r&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/2o2xnv2f3xtn9valocwgv/SUx5kFW.jpg?rlkey=v5krmbeje8k1ijj4l8t0yj4ss&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/dalu1vqmosl2dxcspkiib/SzOpdWv.jpg?rlkey=0bda8zp3saaqxuscgeoma2y3f&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/lbb9i8ehpr869zagxwqo8/TcHGvKa.jpg?rlkey=tannpcmc9wx0o7n8tjr95ytzh&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/068klqjwwpo02wg3su1pw/tCsXNaZ.jpg?rlkey=uefyz6q1kwobyg2tr5mo5c8v9&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/ffuvc7rrrpmesnje55x3i/TGAEUjd.jpg?rlkey=38scanbyw070vptku6npqzvzd&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/dmucsuafrskmrd7dc08s1/TkJMgJs.jpg?rlkey=swybsfparr99jc84u3zljumc3&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/7jtn63ugytrqj95rgg5qi/TthiHy9.jpg?rlkey=xqxyhsfkezohckh2y457otrxz&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/zsny80x1rvf15x3ws7a7b/twNCpLN.jpg?rlkey=l6xdw1ra3gguj46aqcl5np9xy&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/5lkyfpzezl6yuxqmzxwxk/Ty9BRLd.jpg?rlkey=bbw29j3wuvop2j2syru76p01y&dl=0',
'https://dl.dropboxusercontent.com/scl/fi/668v4kn22c6wl1ifrkvq9/uiddZtZ.jpg?rlkey=0i1f5w8wvymx2u2rzjg446e2e&dl=0',
];

var Lottery = {
	click:'http://www.downloadmoreram.com/',
	image:'http://i.imgur.com/BS1Eehd.gif',
	text:"আৡঊসঠচঈ",
	chance:0.01
};

var JoinText_Message = 'joined.';

var LeaveText_Message = 'ragequit.';

var PlayerHiding_URL = [
	'https://files.catbox.moe/eyqtkb.jpg',
	'https://files.catbox.moe/zzz2dx.jpg',
	'https://files.catbox.moe/m7yzrf.gif',
	'https://files.catbox.moe/3mo8j1.jpg',
	'https://files.catbox.moe/ndsbwy.jpg'
];

var Memes_Array = [
	'pmff', 'smug', 'ffmp', 'ayy lmao', 'mug4', 'smig4', '!stat', '[@]', 'untz', ':@', '[m'
];

var UnicodeChars_Array = [
	'★', '☆', '▲', '▼', '♥', '♪', '♕', '✉', '☏', '♠', '→', 
	'☑', '☒', '✡', '☪', '✝', '☭', '☯', 'Ⓐ', '☕', '♨', '¥', '©', '∞', '™',
	'⊂二( ^ω^)二⊃', '♂', '♀', '👽', '🌀', '🔯', 'ῷ'
];

var FlagCounter_HTML = '<a href="http://info.flagcounter.com/U8NQ" target="_blank"><img src="http://s09.flagcounter.com/count/U8NQ/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_12/viewers_0/labels_0/pageviews_0/flags_0/" alt="Flag Counter" border="0"></a>';

var PCL = getOrDefault(CHANNEL.name + "_PCL", {});

var RedditChange_Links = {		// FORMAT:	'NAME':['LINK ONE','LINK TWO']}
	'fuckno':[
			'http://kudo.moe/fuckno.jpg',
			'http://i.imgur.com/Ud4cJUq.jpg'],	
};

let TEAMCOLORREGEX = /( |)<span style="display:none" class="teamColorSpan">.+/gi;

document.body.classList.add("retardblock");

var Shortcuts = {		// FORMAT: Keycode:'INSERT TEXT',	http://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
	ctrl:{
		49:'[m1]',		// 1
		50:'[@]',		// 2
		51:'[float]',	// 3
		52:'[lf]',		// 4
		53:'[hflip]',	// 5
		54:'[vflip]',	// 6
		66:'[b]',		// b
		73:'[i]',		// i
		83:'[spoiler]',		// s
		85:'[u]'		// u
	}, 
	alt:{
		83:'[/]'		// s
	},
	ctrlshift:{},
	ctrlalt:{},
	altshift:{}
};

$(document).keydown(function (event) {
    if (!event.ctrlKey || event.shiftKey)
      return true;
    if (typeof event.target.selectionStart == "undefined" || event.target.selectionStart == null)
      return true;
  
    // -- Shortcuts and their properties
    var tag = {}; tag.wrap = false; tag.braced = false;
    switch (event.which) {
      case 83:
        tag.code = 'spoiler';
        tag.wrap = true;
        tag.braced = true;
        break;
      default: return true;
    }
  
    // -- Grab targets complete contents and selection start and end
    var text = $(event.target).val();
    var start = event.target.selectionStart;
    var end = event.target.selectionEnd;
    var caret = text.length;
    var zero = (start == end);
  
    // -- Propagate the changes
    if (tag.wrap && tag.braced) {
      text = text.slice(0, start) + '[' + tag.code + ']' + text.slice(start, end) + '[/]' + text.slice(end);
    } else if (tag.wrap) {
      text = text.slice(0, start) + tag.code + text.slice(start, end) + tag.code + text.slice(end);
    } else {
      text = text.slice(0, start) + text.slice(start, end) + tag.code + text.slice(end);
    }
    $(event.target).val(text);
  
    // -- Place the caret where it should be
    if (zero) {
      caret = end + tag.code.length + function () { if (tag.braced) return 2; return 0 }()
    } else {
      caret = end + ($(event.target).val().length - caret);
    }
  
    event.target.setSelectionRange(caret, caret);
  
    return false;
  });

var ThemesCSS = [
	['Kobato', 'https://dl.dropboxusercontent.com/s/1r3twlb0loipybw/kobato.css']
];

var TopUserLogo = [
	['anime girl', 'https://dl.dropboxusercontent.com/s/knxd7dpup1u8lm3/azuki.png', 200],
	['cosmos', 'https://dl.dropboxusercontent.com/s/v6dx49yqk5e3i2d/cosmos.jpg', 200],
	['disco ball', 'https://dl.dropboxusercontent.com/s/ahpfm25pglc8j01/disco.jpg', 162],
	['japanese landscape', 'https://dl.dropboxusercontent.com/s/llylt832evxrp6e/japan.jpg', 200]
];

var WC = getOrDefault(CHANNEL.name + "_WC", {});

var UnlockedPlaylistPermissions = {
	oplaylistadd: 0,
	oplaylistnext: 0,
	oplaylistmove: 1,
	oplaylistdelete: 2,
	oplaylistjump: 2,
	oplaylistaddlist: 1.5,

	seeplaylist: -1,
	playlistadd: 1,
	playlistnext: 1.5,
	playlistmove: 1.5,
	playlistdelete: 1.5,
	playlistjump: 2,
	playlistaddlist: 1.5,
	playlistaddlive: 1,
	playlistaddcustom: 0,
	playlistaddrawfile: 0,
	exceedmaxlength: 1,
	exceedmaxitems: 1,
	addnontemp: 2,
	settemp: 2,
	playlistlock: 2,
	playlistshuffle: 3,
	playlistclear: 3,

	pollctl: 1.5,
	pollvote: 0,
	viewhiddenpoll: 1000000,
	voteskip: 1,
	viewvoteskip: 1.5,

	leaderctl: 2,
	mute: 1.5,
	kick: 1.5,
	ban: 2,
	motdedit: 3,
	filteredit: 3,
	filterimport: 3,
	emoteedit: 3,
	emoteimport: 3,

	drink: 1.5,
	chat: 0,
	chatclear: 2,
};

var LockedPlaylistPermissions = {
	oplaylistadd: 1.5,
	oplaylistnext: 1.5,
	oplaylistmove: 1.5,
	oplaylistdelete: 2,
	oplaylistjump: 2,
	oplaylistaddlist: 1.5,

	seeplaylist: -1,
	playlistadd: 0,
	playlistnext: 1.5,
	playlistmove: 1.5,
	playlistdelete: 1.5,
	playlistjump: 2,
	playlistaddlist: 1.5,
	playlistaddlive: 1.5,
	playlistaddcustom: 1.5,
	playlistaddrawfile: 1.5,
	exceedmaxlength: 1,
	exceedmaxitems: 1,
	addnontemp: 2,
	settemp: 2,
	playlistlock: 2,
	playlistshuffle: 3,
	playlistclear: 3,

	pollctl: 1.5,
	pollvote: 0,
	viewhiddenpoll: 1000000,
	voteskip: 1,
	viewvoteskip: 1.5,

	leaderctl: 2,
	mute: 1.5,
	kick: 1.5,
	ban: 2,
	motdedit: 3,
	filteredit: 3,
	filterimport: 3,
	emoteedit: 3,
	emoteimport: 3,

	drink: 1.5,
	chat: 0,
	chatclear: 2,
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- END OF CONFIGURATION, DO NOT CHANGE ANYTHING BELOW ----- */

/* ----- Initial channel options ----- */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- getting channel options ----- */

var defplayer = "right";
var defuserlist = "left";
var defqueue = "right";

var UCONF = {
	"player":getOrDefault(CHANNEL.name + "_player", defplayer),
	"userlist":getOrDefault(CHANNEL.name + "_userlist", defuserlist),
	"queue":getOrDefault(CHANNEL.name + "_queue", defqueue),
	"qsize":getOrDefault(CHANNEL.name + "_qsize", "wide"),
	"main":getOrDefault(CHANNEL.name + "_main", "top"),
	"motd":getOrDefault(CHANNEL.name + "_motd", "top"),
	"logo":getOrDefault(CHANNEL.name + "_logo", "no"),
	"logourl":getOrDefault(CHANNEL.name + "_logourl", ""),
	"logoht":getOrDefault(CHANNEL.name + "_logoht", "200"),
	"header":getOrDefault(CHANNEL.name + "_header", "detached"),
	"css":getOrDefault(CHANNEL.name + "_css", "no"),
	"csscode":getOrDefault(CHANNEL.name + "_csscode", ""),
	"showname":getOrDefault(CHANNEL.name + "_showname", "no"),
	"pixl":getOrDefault(CHANNEL.name + "_pixl", "before"),
	"pixh":getOrDefault(CHANNEL.name + "_pixh", 16),
	"upti":getOrDefault(CHANNEL.name + "_upti", 60),
	"ltim":getOrDefault(CHANNEL.name + "_ltim",getTZ())
};
var LOADED = false;
var STIMEZONE = getOrDefault(CHANNEL.name + "_STIMEZONE", (new Date().getMonth() > 2 && new Date().getMonth() < 11) ? -4 : -5);
var CTIMEZONE = getOrDefault(CHANNEL.name + "_CTIMEZONE", getTZ());
var USERTHEME = getOrDefault(CHANNEL.name + "_theme", "/css/themes/slate.css");
var USERVISITS = getOrDefault(CHANNEL.name + "_visits", 0);
var USERONLINE = 0;
var NOPLAYER = false;
var COMMAND = false;
var CHATSTAT = {"n":0, "l":0, "m":[]};
var FULLPL = false;
var FLUID = getOrDefault(CHANNEL.name + "_FLUID", true);
var LAYOUTBOX = getOrDefault(CHANNEL.name + "_LAYOUTBOX", true);
var MINIMIZED = false;
var PINNED = false;
var RELOADED = false;
var WEBKIT = "webkitRequestAnimationFrame" in window;
var MAXH = getOrDefault(CHANNEL.name + "_MAXH", "300");
var MAXW = getOrDefault(CHANNEL.name + "_MAXW", "300");
var PIXEL = getOrDefault(CHANNEL.name + "_PIXEL", true);
var HIDEBG = getOrDefault(CHANNEL.name + "_HIDEBG", false);
var HIDEHF = getOrDefault(CHANNEL.name + "_HIDEHF", false);
var HIDEPL = getOrDefault(CHANNEL.name + "_HIDEPL", false);
var HIDEANN = getOrDefault(CHANNEL.name + "_HIDEANN", false);
var HIDEMOTD = getOrDefault(CHANNEL.name + "_HIDEMOTD", false);
var HIDEPLAYER = getOrDefault(CHANNEL.name + "_HIDEPLAYER", false);
var HIDEIMG = getOrDefault(CHANNEL.name + "_HIDEIMG", false);
var UNTZ = getOrDefault(CHANNEL.name + "_UNTZ", true);
var EMBEDVID = getOrDefault(CHANNEL.name + "_EMBEDVID", true);
var AUTOVID = getOrDefault(CHANNEL.name + "_AUTOVID", true);
var LOOPWEBM = getOrDefault(CHANNEL.name + "_LOOPWEBM", true);
var TEMPORARY = true;
var CHATFUNC = false;		
var CLEARING = false;		
var ANTIAFK = false;		
var SPINTOG = true;
var MQTOG = true;
var ADDONESECOND = '';
var BLLINK = false;
var SPLITMSG = [];
var FAILEDEMOTES = ['The following 0 emotes failed to download: \n'];
var DOWNLOADING = false;
var LEFT = false;
var UPNEXT = '';
var SHORTLINK = '';
var UNTZINT = '';
var SPOILER = false;
var BGREMOVED = false;
var STREAMER = {name:"NONE",link:"",css:""};
var UPDATEOFFSET = -1;
var EMOTEBL = getOrDefault(CHANNEL.name + "_EMOTEBL", []);
var USEREMOTEBL = getOrDefault(CHANNEL.name + "_USEREMOTEBL", []);
var PLAYERHTML = '';
var JOINED = false;
var PINGLINK = getOrDefault(CHANNEL.name + "_PINGLINK", "");
var PINGVOL = getOrDefault(CHANNEL.name + "_PINGVOL", 1);
var UPDTOUT = '';
var MICHER = false;
var SHTML = '';
var RANDEMOTE = getOrDefault(CHANNEL.name + "_RANDEMOTE", 0);
var RANDDATE = getOrDefault(CHANNEL.name + "_RANDDATE", (new Date()).setDate((new Date()).getDate()+1));
var SHOWPROF = getOrDefault(CHANNEL.name + "_SHOWPROF", false);
var SHOWING = false;
var NEWREQUESTS = getOrDefault(CHANNEL.name + "_NEWREQUESTS", 0);
var ADDEDEPLINK = "";
var EVENT = {a:new Audio("http://kudo.moe/fairy_tail_wow_sound.mp3"),date:getOrDefault(CHANNEL.name + "_EVENT",0)};
var SUBCHAN = 3;
var SCNAMES = ["Shows","Off-topic","Regular"];
var MOTDCACHE = getOrDefault(CHANNEL.name + "_MOTDCACHE", "");
CHATMAXSIZE = getOrDefault(CHANNEL.name + "_CHATMAXSIZE", 150);	// Override Cytube's default limit

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- Global functions ----- */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Callbacks.usercount = function(count) {
	CHANNEL.usercount = count;
	var text = count + " " + Usercount_Text;
	if(count != 1) {
		text += "s";
	}
	$("#usercount").text(text);
}
Callbacks.usercount(CHANNEL.usercount);

function getTZ() {
	return new Date().getTimezoneOffset()/-60;
}
if (getTZ() !== CTIMEZONE) {
	var ctz = getTZ();
	if (confirm("The current local time zone is set to GMT" + (UCONF.ltim < 0 ? "" : "+") + UCONF.ltim + ".\n\nWould you like to set it to GMT" + (ctz < 0 ? "" : "+") + ctz + "?")) {
		UCONF.ltim = ctz;
		setOpt(CHANNEL.name + "_ltim",ctz);
	}
	setOpt(CHANNEL.name + "_CTIMEZONE", ctz);
}

//--------------------------------------------------------------

jQuery.loadScript = function (url, callback) {
    jQuery.ajax({
        url: url,
        dataType: 'script',
        success: callback,
        async: true,
        defer:true
    });
}
$.loadScript("https://apis.google.com/js/api.js", handleClientLoad);

function initClient() {
	var CLIENT_ID = "285352011800-obnsbp1gvnpljog3ljg936l43dsci57p.apps.googleusercontent.com";
	var API_KEY = "AIzaSyAMabOeS09Ll-T8AFgkF2QSFo_1HQrhv9I";
	var SCOPE = "https://www.googleapis.com/auth/spreadsheets.readonly";

	gapi.client.init({
		'apiKey': API_KEY,
		'clientId': CLIENT_ID,
		'scope': SCOPE,
		'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
	});
}

function handleClientLoad() {
	gapi.load('client:auth2', initClient);
}

function makeApiCallforJSON(updateRange) {
	var params = {
		// The ID of the spreadsheet to retrieve data from.
		spreadsheetId: '1Ye0mzOVODl2IAo3MWjvZOtqSXq-KK_JR5RYbzjUmOY4',  // TODO: Update placeholder value.

		// The A1 notation of the values to retrieve.
		range: updateRange,  // TODO: Update placeholder value.

		// How values should be represented in the output.
		// The default render option is ValueRenderOption.FORMATTED_VALUE.
		valueRenderOption: 'FORMATTED_VALUE',  // TODO: Update placeholder value.

		// How dates, times, and durations should be represented in the output.
		// This is ignored if value_render_option is
		// FORMATTED_VALUE.
		// The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
		dateTimeRenderOption: 'SERIAL_NUMBER',  // TODO: Update placeholder value.
	};

	return gapi.client.sheets.spreadsheets.values.get(params);
}

var JSONValue = [];

function updateCurrentlyAiring() {
	//updateEMOTEBL();
	if (UPDATEOFFSET*UCONF.upti > 300 || UPDATEOFFSET === -1) {
		updateWC();
		updatePixels();
		UPDATEOFFSET = 0;
	}
	UPDATEOFFSET++;
	var randdate = new Date();
	if (RANDDATE < randdate) {
		RANDEMOTE = 0;
		setOpt(CHANNEL.name + "_RANDEMOTE", RANDEMOTE);
		RANDDATE = randdate.setDate(randdate.getDate()+1);
		setOpt(CHANNEL.name + "_RANDDATE", RANDDATE);
	}
	// https://spreadsheets.google.com/feeds/worksheets/YOUR_SPREADSHEET_ID/private/full
	/*var url = "https://spreadsheets.google.com/feeds/cells/1ATO8oxAsWc9KlpTTBfBLL_hz5Zym6oFwtyMfVfCQJG8/o20mnpl/public/basic?alt=json";
	$.ajax({
		url:url,
		dataType:"jsonp",
		success:function(data) {
			$("#currentlyStreaming").html(data.feed.entry[0].content.$t);
			UPNEXT = data.feed.entry[1].content.$t;
			ScheduleTabs_Array[0][1] = data.feed.entry[2].content.$t;
			$("#streamtime").text(data.feed.entry[3].content.$t);
			STIMEZONE = data.feed.entry[5].content.$t === "EDT" ? -4 : -5;
			setOpt(CHANNEL.name + "_STIMEZONE", STIMEZONE);
			(function runBG() {
				if (Object.keys(WC).length > 0) {
					streamer = data.feed.entry[4].content.$t;
					if (streamer !== "NONE" && !HIDEBG && (STREAMER.name !== streamer || STREAMER.link !== WC[streamer].bg || STREAMER.css !== WC[streamer].css)) {
						if (WC[streamer] !== undefined && WC[streamer].bg !== "") {
							var bcss = 'background-image:url(' + WC[streamer].bg + ');' + WC[streamer].css;
							$("body").attr("style",bcss);
							STREAMER.link = WC[streamer].bg;
							STREAMER.css = WC[streamer].css;
							BGREMOVED = false;
						} else {
							$("body").removeAttr("style");
							STREAMER.link = "";
						}
					} else if (!BGREMOVED && !HIDEBG && streamer === "NONE") {
						$("body").removeAttr("style");
						STREAMER.link = "";
						BGREMOVED = true;
					}
					if (STREAMER.name !== streamer) {
						STREAMER.name = streamer;
						showProfiles();
					}
				} else {
					setTimeout(runBG,125);
				}
			})();
		}
	});
	autoMod();*/
	
	updateJSON();
	
	var checkInterval = setInterval(function () {
		//console.log("checking...");
		if (JSONValue.length !== 0) {
			clearInterval(checkInterval);
			
			$("#currentlyStreaming").html(JSONValue[0][0]);
			UPNEXT = JSONValue[1][0];
			ScheduleTabs_Array[0][1] = JSONValue[2][0];
			$("#streamtime").text(JSONValue[3][0]);
			STIMEZONE = JSONValue[5][0] === "EDT" ? -4 : -5;
			setOpt(CHANNEL.name + "_STIMEZONE", STIMEZONE);
			/*(function runBG() {
				if (Object.keys(WC).length > 0) {
					streamer = JSONValue[4][0];
					if (streamer !== "NONE" && !HIDEBG && (STREAMER.name !== streamer || STREAMER.link !== WC[streamer].bg || STREAMER.css !== WC[streamer].css)) {
						if (WC[streamer] !== undefined && WC[streamer].bg !== "") {
							var bcss = 'background-image:url(' + WC[streamer].bg + ');' + WC[streamer].css;
							$("body").attr("style",bcss);
							STREAMER.link = WC[streamer].bg;
							STREAMER.css = WC[streamer].css;
							BGREMOVED = false;
						} else {
							$("body").removeAttr("style");
							STREAMER.link = "";
						}
					} else if (!BGREMOVED && !HIDEBG && streamer === "NONE") {
						$("body").removeAttr("style");
						STREAMER.link = "";
						BGREMOVED = true;
					}
					if (STREAMER.name !== streamer) {
						STREAMER.name = streamer;
						showProfiles();
					}
				} else {
					setTimeout(runBG, 125);
				}
			})();*/
			
			UPDTOUT = setTimeout(updateCurrentlyAiring, UCONF.upti*1000);
		}
	}, 125);
}

var checkGAPI = setInterval(function () {
	if (typeof gapi !== "undefined") {
		if (typeof gapi.client !== "undefined") {
			if (typeof gapi.client.sheets !== "undefined") {
				clearInterval(checkGAPI);
				updateCurrentlyAiring();
			}
		}
	}
}, 25);

function updateJSON() {
	JSONValue = [];
	makeApiCallforJSON("JSON!A1:A6").then(function(response) {
	// TODO: Change code below to process the `response` object:
		JSONValue = response.result.values;
	}, function(reason) {
		console.error('error: ' + reason.result.error.message);
		JSONValue = ["ERROR","ERROR","ERROR","ERROR","ERROR","ERROR"];
	});
}

function updateWC() {
	/*var url = "https://spreadsheets.google.com/feeds/cells/1ATO8oxAsWc9KlpTTBfBLL_hz5Zym6oFwtyMfVfCQJG8/o8a98v8/public/basic?alt=json";
	$.ajax({
		url:url,
		dataType:"jsonp",
		success:function(data) {
			WC = JSON && JSON.parse(data.feed.entry[0].content.$t) || $.parseJSON(data.feed.entry[0].content.$t);
			PCL = JSON && JSON.parse(data.feed.entry[1].content.$t) || $.parseJSON(data.feed.entry[1].content.$t);
			setOpt(CHANNEL.name + "_WC", WC);
			setOpt(CHANNEL.name + "_PCL", PCL);
			updateStreamTitles();
		}
	});*/
	
	makeApiCallforJSON("JSON-WC!A1:A2").then(function(response) {
		WC = JSON && JSON.parse(response.result.values[0][0]) || $.parseJSON(response.result.values[0][0]);
		PCL = JSON && JSON.parse(response.result.values[1][0]) || $.parseJSON(response.result.values[1][0]);
		setOpt(CHANNEL.name + "_WC", WC);
		setOpt(CHANNEL.name + "_PCL", PCL);
		updateStreamTitles();
	}, function(reason) {
		console.error('error: ' + reason.result.error.message);
	});
}

/*function updateEMOTEBL() {
	var url = "https://spreadsheets.google.com/feeds/cells/1K90qG-BKgZ2oCu_ZCLpifTE1maubrDWYmpn54LzoIBo/ovyrtj0/public/basic?alt=json";
	$.ajax({
		url:url,
		dataType:"jsonp",
		success:function(data) {
			EMOTEBL = data.feed.entry[0].content.$t.split(",");
			setOpt(CHANNEL.name + "_EMOTEBL", EMOTEBL);
			removeImages();
			var requests = parseInt(data.feed.entry[1].content.$t);
			if (CLIENT.rank > 3) {
				if (requests < NEWREQUESTS) {
					NEWREQUESTS = requests;
					setOpt(CHANNEL.name + "_NEWREQUESTS", NEWREQUESTS);
				} else if (requests > NEWREQUESTS) {
					HIDEANN ? hideannbtn.click() : '';
					$("#sRequest").parent().parent().remove();
					makeAlert("New request/issue", '<a id="sRequest" href="https://docs.google.com/spreadsheets/d/1K90qG-BKgZ2oCu_ZCLpifTE1maubrDWYmpn54LzoIBo/edit#gid=991675752" target="_blank">There is currently a new request/issue.</a>').appendTo("#announcements")
					$("#sRequest").unbind("click").click(function() {
						NEWREQUESTS = requests;
						setOpt(CHANNEL.name + "_NEWREQUESTS", NEWREQUESTS);
						$(this).parent().parent().remove();
					});
				}
			}
		}
	});
}

function hereOrNot() {
	var slice3 = Array.prototype.slice;
	var list3 = slice3.call($("#userlist .userlist_item"));
	var checklist = Object.keys(FruitBowl);
	for (item2 in checklist) {
		for (item in list3) {
			NAME = $(list3[item]).data("name");
			RANK = $(list3[item]).data("rank");
			if (NAME === checklist[item2] && RANK > 3) {
				return NAME;
			}
		}
	}
	return "No one";
}

function autoMod() {
	if (CLIENT.rank > 3 && 1 == 2) {
		here = hereOrNot();
		console.log(here + " is the bot.");
		if (CLIENT.name === here && CHANNEL.js.indexOf("redirectToToradora(false)") > -1) {
			var json2 = "https://spreadsheets.google.com/feeds/cells/1ATO8oxAsWc9KlpTTBfBLL_hz5Zym6oFwtyMfVfCQJG8/o5faxkf/public/basic?alt=json";
			$.ajax({
				url:json2,
				dataType:"jsonp",
				success:function(data) {
					console.log(data);
					pixlked = data.feed.entry[2].content.$t;
					console.log(data.feed.entry[1].content.$t);
					checkRank(data.feed.entry[0].content.$t, data.feed.entry[1].content.$t, data.feed.entry[3].content.$t, data.feed.entry[4].content.$t);
					if (pixlked === "OPEN" && $("#qlockbtn").hasClass("btn-danger")) {
						$("#qlockbtn").click();
					} else if (pixlked === "LOCKED" && $("#qlockbtn").hasClass("btn-success")) {
						$("#qlockbtn").click();
					}
					(function autoAddEp() {
						if ($("#streamtime").text() !== "") {
							var eplink = data.feed.entry[5].content.$t;
							var timedif = parseInt($("#streamtime").text().split(":")[1].split(" ")[0])%30;
							if (ADDEDEPLINK !== eplink && eplink !== "NONE" && !$('a[href="' + eplink + '"]').hasClass("qe_title") && timedif < 5) {
								var parsed = parseMediaLink(eplink);
								ADDEDEPLINK = eplink;
								socket.emit("queue", {id:parsed.id, pos:"next", type:parsed.type, temp:true});
							}
						} else {
							setTimeout(autoAddEp,125);
						}
					})();
				}
			});
		}
	}
}*/

//------------------------------------------------------------------------

var q240480 = $('li[title="240"],li[title="480"]');
socket.on("mediaUpdate", function(data) {
	if (Math.abs(data.currentTime - CurrentVideoTime) > 5.1) {
		updateEndTimes(Math.floor(data.currentTime));
	}
	CurrentVideoTime = data.currentTime;
	if (PLAYER.mediaType == "gd") {
		q240480.hide();
	} else if (q240480.css("display") == "none") {
		q240480.show();
	}
});
socket.on("changeMedia", function(data) {
    updateEndTimes(Math.floor(data.currentTime));
	videoLength = data.seconds;
	changeTitle();
	// setModeAfterVideoChange();
	$("#findtime").text() !== 'Video Time' ? $("#findtime").click() : '';
	if (!$("#videowrap").length) {
		TitleBarDescription_Caption.length < 1 ? TitleBarDescription_Caption = 'Currently Playing:' : '';
		$("#currenttitle").text(TitleBarDescription_Caption + " " + data.title);
	}
});
function getCurrentPlayerTime() {
	try {
		if (typeof PLAYER.player !== "undefined") {
			return PLAYER.player.currentTime(); // "FilePlayer, Vimeo"
		} else if (typeof PLAYER.yt !== "undefined") { // "YouTube"
			return PLAYER.yt.getCurrentTime(); // "YouTube"
		} else if (typeof PLAYER.dm !== "undefined") {
			return PLAYER.dm.currentTime; // "Daily Motion"
		}
	} catch {
		return CurrentVideoTime;
	}
}
var CurrentVideoTime = 0;
socket.on("delete", function() {
	setTimeout(function() {
		updateEndTimes(getCurrentPlayerTime());
	}, 750); // hopefully this fixes the issue..
});

socket.on("moveVideo", function() {
	setTimeout(function() {
		updateEndTimes(getCurrentPlayerTime());
	}, 750);
});
function makeQueueEntry(item, addbtns) {
    var video = item.media;
    var li = $("<li/>");
    li.addClass("queue_entry");
    li.addClass("pluid-" + item.uid);
    li.data("uid", item.uid);
    li.data("media", video);
    li.data("temp", item.temp);
    if(video.thumb) {
        $("<img/>").attr("src", video.thumb.url)
            .css("float", "left")
            .css("clear", "both")
            .appendTo(li);
    }
    var title = $("<a/>").addClass("qe_title").appendTo(li)
        .text(video.title)
        .attr("href", formatURL(video))
        .attr("target", "_blank");
    var time = $("<span/>").addClass("qe_time").appendTo(li);
    time.text(video.duration);
    var userAdded = $("<span/>").addClass("qe_user").appendTo(li);
    userAdded.text(item.queueby + " | ");
	var endTime = $("<span/>").addClass("qe_endTime").appendTo(li);
    var clear = $("<div/>").addClass("qe_clear").appendTo(li);
    if(item.temp) {
        li.addClass("queue_temp");
    }

    if(addbtns)
        addQueueButtons(li);

	setTimeout(function() {
		updateEndTimes(getCurrentPlayerTime());
	}, 100);
    return li;
}

function updateEndTimesOnLoad() {
    var PLTimeList = Array.from(document.getElementsByClassName("qe_time")).forEach(function (PLCurrElement) {
        var qeEndTime = document.createElement("span");
        qeEndTime.classList.add('qe_endTime');

        PLCurrElement.parentElement.insertBefore(qeEndTime, PLCurrElement.nextSibling);

        var qeuser = document.createElement("span");
        qeuser.classList.add('qe_user');
        qeuser.textContent = PLCurrElement.parentElement.getAttribute("title").replace("Added by: ", "") + " | ";

        PLCurrElement.parentElement.insertBefore(qeuser, PLCurrElement.nextSibling);
    });
}

function updateEndTimes(CurrentVideoTime) {
    var currentTime = new Date().getTime();
    var activeItemPosition = Array.from(document.getElementById("queue").children).indexOf(document.getElementsByClassName("queue_active")[0]);

	if (activeItemPosition === -1) {
		setTimeout(function() {
			updateEndTimes(CurrentVideoTime);
		}, 250);
	} else {
		var PLTimeList = document.querySelectorAll("#queue .qe_time");
		var PLEndTimeList = document.getElementsByClassName("qe_endTime") || false;
		var PLSeconds = 0;

		if (PLTimeList.length !== 0) {
			if (PLEndTimeList.length === 0) {
				updateEndTimesOnLoad();
			}

			if (activeItemPosition > 0) {
				for (var j = 0; j < activeItemPosition; j++) {
					PLEndTimeList[j].textContent = "";
				}
			}

			var maxItems = 50;
			var maxPosition = 0;

			if (PLTimeList.length < activeItemPosition + maxItems) {
				maxPosition = PLTimeList.length;
			} else {
				maxPosition = activeItemPosition + maxItems;
				for (var j = maxPosition; j < PLTimeList.length; j++) {
					PLEndTimeList[j].textContent = "";
				}
			}

			var noTime = false;

			for (var i = activeItemPosition; i < maxPosition; i++) {
				var currSplitTime = PLTimeList[i].textContent.split(":");

				if (currSplitTime[0] !== "--" && !noTime) {
					if (currSplitTime.length === 3) {
						PLSeconds += parseInt(currSplitTime[0]) * 60 * 60;
					}
					PLSeconds += parseInt(currSplitTime[currSplitTime.length-2]) * 60;
					PLSeconds += parseInt(currSplitTime[currSplitTime.length-1]);
					PLSeconds += 3; //video player delay

					if (i === activeItemPosition) {
						PLSeconds = PLSeconds - CurrentVideoTime;
					}

					var updatedTime = new Date(currentTime + PLSeconds * 1000);
					var isPM = updatedTime.getHours() >= 12;
					var isMidday = updatedTime.getHours() == 12;

					var updatedHours = updatedTime.getHours() - (isPM && !isMidday ? 12 : 0);
					if (updatedHours === 0) {
						updatedHours = 12;
					}

					var updatedMins = updatedTime.getMinutes().toString();
					if (updatedMins.length === 1) {
						updatedMins = "0" + updatedMins;
					}
					var updatedSecs = updatedTime.getSeconds().toString();
					if (updatedSecs.length === 1) {
						updatedSecs = "0" + updatedSecs;
					}

					PLEndTimeList[i].textContent = "Ends at " + updatedHours + ":" + updatedMins + ":" + updatedSecs + (isPM ? ' PM' : ' AM') + " | ";
				} else {
					if (!noTime) {
						PLEndTimeList[i].textContent = "Never ends | ";
					} else {
						PLEndTimeList[i].textContent = "";
					}
					noTime = true;
				}
			}
		}
	}
}


function trimChatBuffer() {
	var maxSize = window.CHATMAXSIZE;
	if (!maxSize || typeof maxSize !== "number")
		maxSize = parseInt(maxSize || 100, 10) || 100;
	var buffer = document.getElementById("messagebuffer");
	var count = ($("#messagebuffer.linewrap div:visible").length - 1) - maxSize;
	
	for (var i = 0; i < count; i++) {
		buffer.firstChild.remove();
	}
}

// unbind queue lock button and add a permission changer
if (UI_OpenPlaylist === 1) {
	$("#qlockbtn").unbind("click").on("click", function() {
		socket.emit("togglePlaylistLock");
		$("#qlockbtn").hasClass('btn-danger') ? socket.emit("setPermissions", UnlockedPlaylistPermissions): socket.emit("setPermissions", LockedPlaylistPermissions);
	});
}

// check if temporary box is checked
function checktemporary() {
	$('.add-temp').is(':checked') ? TEMPORARY = true : TEMPORARY = false;
}

// toggle elements visibility
function toggleDiv(a) {
	$(a).css('display') == "none" ? $(a).show() : $(a).hide();
}

// add link to playlist
function addToPlaylist(link,position) {
	parsed = parseMediaLink(link);
	checktemporary();
	parsed["id"] != null ? socket.emit("queue", {id:parsed["id"], pos:position, temp:TEMPORARY, type:parsed["type"]}) : '';
}

// create modal window
function createModal(title) {
	//hidePlayer();
	outer=$('<div />').addClass('modal fade').appendTo($("body"));
	modal=$('<div />').addClass('modal-dialog').appendTo(outer);
	modal=$('<div />').addClass('modal-content').appendTo(modal);
	head=$('<div />').addClass('modal-header').appendTo(modal);
	$('<button />').addClass('close').attr('data-dismiss', 'modal').attr('aria-hidden', 'true').html('&times;')
		.appendTo(head);
	$('<h3 />').text(title).appendTo(head);
	body=$('<div />').addClass('modal-body').appendTo(modal);
	footer=$('<div />').addClass('modal-footer').appendTo(modal);
	outer.on("hidden.bs.modal", function() {
		//unhidePlayer();
		outer.remove();
	});
	outer.modal();
}
$.fn.insertAtCaret = function(text) {
	return this.each(function() {
		if (document.selection && this.tagName == 'TEXTAREA') {
			//IE textarea support
			this.focus();
			sel = document.selection.createRange();
			sel.text = text;
			this.focus();
		} else if (this.selectionStart || this.selectionStart == '0') {
			//MOZILLA/NETSCAPE support
			startPos = this.selectionStart;
			endPos = this.selectionEnd;
			scrollTop = this.scrollTop;
			this.value = this.value.substring(0, startPos) + text + this.value.substring(endPos, this.value.length);
			this.focus();
			this.selectionStart = startPos + text.length;
			this.selectionEnd = startPos + text.length;
			this.scrollTop = scrollTop;
		} else {
			// IE input[type=text] and other browsers
			this.value += text;
			this.focus();
			this.value = this.value;	// forces cursor to end
		}
	});
};
// insert code into chatline
function insertText(a) {
	$("#chatline").insertAtCaret(a);
}

// fit player height
function fitPlayer() {
	VWIDTH = $("#videowrap-header").width();
	VHEIGHT = Math.floor(VWIDTH * 9 / 16 + 1);
	$("#ytapiplayer").width(VWIDTH).height(VHEIGHT);
}

// fit chat height
function fitChat(a) {
	if (a === "auto") {
		VW = $("#messagebuffer").width();
		VH = (window.innerHeight * .75) - $("#chatheader").height() - $("#chatline").height();
	} else {
		VH = a;
	}
	$("#messagebuffer").height(VH);
	$("#userlist").height(VH);
}

function waaai(url, lastitem) {
	url = decodeURIComponent(url);
	url = encodeURIComponent(url);
	apiRequest = new XMLHttpRequest();
	apiRequest.onreadystatechange = function () {
		if (apiRequest.readyState === 4) { // request is done
			var serverResponse = JSON && JSON.parse(apiRequest.responseText) || $.parseJSON(apiRequest.responseText);
			if (apiRequest.status === 200) { // successfully response
				SHORTLINK += serverResponse.data.url + ';';
				if (lastitem === true) {
					links = SHORTLINK.split(';');
					links.pop();
					for (i in SPLITMSG) {
						if (SPLITMSG[i].indexOf("BLACKLISTED") > -1) {
							number = parseInt(SPLITMSG[i].slice(-1), 10);
							SPLITMSG[i] = links[number];
						}
						msg += SPLITMSG[i] + ' ';
					}
					socket.emit("chatMsg", {msg:msg});
				}
			}
		}
	};
	apiRequest.open("GET", "http://api.waa.ai/shorten?url=" + url);
	apiRequest.send();
}

// format chat messages
function prepareMessage(msg) {
	msg.indexOf(Lottery.text) > -1 ? msg = msg.replace(Lottery.text,"") : '';
	if (msg.search(new RegExp('http(.+?)\/r\/' + CHANNEL.name + '(.+?|):sp','gi')) > -1) {
		document.location.reload(true);
		return "";
	}
	if (UI_Lottery === 1) {
		if ((typeof Lottery.chance !== "number") || Lottery.chance < 0) {
			Lottery.chance = 10;
		}
		Math.random() < (Lottery.chance / 100) ? msg += ' ' + Lottery.text : '';
	}
	if (msg.toLowerCase().indexOf("fc2.com") > -1) {
		SHORTLINK = '';
		semicolonnum = (msg.match(/fc2\.com/gi) || []).length - 1;
		blnum = 0;
		SPLITMSG = msg.split(" ");
		msg = '';
		lastInArray = false;
		for (i in SPLITMSG) {
			if (SPLITMSG[i].indexOf("fc2.com") > -1) {
				lastInArray = true;
				waaai(SPLITMSG[i], lastInArray);
				SPLITMSG[i] = 'BLACKLISTED' + blnum;
				blnum++;
			}
		}
	}
	while (msg.search(/\.gifv|\[r\]/gi) > -1) {
		msg = msg.replace(/\[r\]/i, "[" + getRandomColor() + "]").replace(/\.gifv/gi, ".webm");
	}
	if (UI_UserCommands === 1 && msg.indexOf("!") === 0) {
		COMMAND = true;
		cmdcheck = msg.split(" ");
		cmdcheck[0] = cmdcheck[0].toLowerCase();
		cmdcheck[1] = cmdcheck.slice(1).join(' ');
		if (cmdcheck[0] === "!hpoll") {
			if (hasPermission("pollctl")) {
				polltitle = msg.split('"');
				duration = polltitle[2].split(";");
				duration[1] === undefined ? duration[1] = 600 : duration[1] = parseInt(duration[1], 10);
				realpoll = duration[0].split(",");
				choice = [];
				for (i = 0; i < 4; i++) {
					a = Math.round(Math.random() * (realpoll.length - 1));
					if (realpoll.length < 1) {
						break;
					} else if (realpoll[a].trim() === "") {
						i--;
					} else {
						choice[i] = realpoll[a].trim();
					}
					realpoll.splice(a, 1);
				}
				socket.emit("newPoll", {title: polltitle[1].trim(), opts: choice, obscured: true, timeout: duration[1]});
			}
			COMMAND = false;
		} else if (cmdcheck[0] === "!stat") {
			num = CHATSTAT['n'];
			len = CHATSTAT['l'];
			mem = 0;
			for (i = 0; i < num; i++) {
				for (j = 0; j < Memes_Array.length; j++) {
					CHATSTAT['m'][i].indexOf(Memes_Array[j]) > -1 ? occurences = CHATSTAT['m'][i].split(Memes_Array[j]).length - 1 : occurences = 0;
					occurences > -1 ? mem += occurences : '';
				}
			}
			d = (num !== 1) ? 's' : '';
			e = (mem !== 1) ? 's' : '';
			if (num > 0) {
				a = Math.round(Math.random() * (CHATSTAT['m'].length - 1));
				avg = Math.round(len / num * 10) / 10;
			} else {
				a = 0;
				avg = 0;
			}
			msg = CLIENT.name + ' has sent ' + num + ' message' + d + ' and used ' + mem + ' meme' + e + '. '
				+ 'Total length is ' + len + ' characters (' + avg + ' per message). '
				+ 'Random message: ' + CHATSTAT['m'][a];
		} else if (cmdcheck[0] === "!pick" && cmdcheck[1].length > 0) {
			arr = cmdcheck[1].split(",");
			a = Math.round(Math.random() * (arr.length - 1));
			msg = arr[a].trim();
		} else if (cmdcheck[0] === "!ask" && cmdcheck[1].length > 0) {
			AskAnswers.length < 1 ? AskAnswers = ['Yes', 'No'] : '';
			a = Math.round(Math.random() * (AskAnswers.length - 1));
			msg = AskAnswers[a];
		} else if (cmdcheck[0] === "!time") {
			var D = new Date();
			if (cmdcheck[1].length < 1) {
				timezone = D.getTimezoneOffset()/60 * -1;
				hour = D.getHours();
				minute = D.getMinutes();
				minute < 10 ? minute = '0' + minute : false;
			} else {
				timezone = parseFloat(cmdcheck[1]);
				isNaN(timezone) ? timezone = -5 : '';
				D.setMinutes(D.getUTCMinutes() + timezone * 60);
				hour = D.getUTCHours();
				minute = D.getMinutes();
				minute < 10 ? minute = '0' + minute : false;
			}
			if (hour > 12) {
				hour %= 12;
				AP = 'PM';
			} else {
				hour === 0 ? hour = 12 : '';
				AP = 'AM';
			}
			timezone >= 0 ? timezone = "+" + timezone : '';
			msg = 'Current time for UTC' + timezone + ': ' + hour + ':' + minute + ' ' + AP;
		} else if (cmdcheck[0] === "!dice") {
			a = Math.floor(Math.random() * 6) + 1;
			b = Math.floor(Math.random() * 6) + 1;
			msg = a + ' ' + b;
		} else if (cmdcheck[0] === "!roll") {
			cmdcheck[1] = cmdcheck[1].replace(/ /g,"");
			d6 = cmdcheck[1].toLowerCase().indexOf("d");
			psign = cmdcheck[1].indexOf("+");
			msign = cmdcheck[1].indexOf("*");
			ssign = cmdcheck[1].indexOf("-");
			dsign = cmdcheck[1].indexOf("/");
			xroll = xdice = xplus = xsub = max = a = roll = 0;
			xmulti = xdiv = 1;
			if (d6 > -1) {
				xdice = parseInt(cmdcheck[1].substr(0,d6));
				xroll = parseInt(cmdcheck[1].substr(d6 + 1,(psign > -1 ? psign : cmdcheck[1].length)));
				isNaN(xdice) ? xdice = 1 : "";
				isNaN(xroll) ? xroll = 6 : "";
				if (psign > -1) {
					for (var i = psign + 1; i <= cmdcheck[1].length; i++) {
						if (isNaN(cmdcheck[1][i])) {
							xplus = parseInt(cmdcheck[1].substr(psign + 1,i));
							break;
						}
					}
					isNaN(xplus) ? xplus = 0 : "";
				}
				if (ssign > -1) {
					for (var i = ssign + 1; i <= cmdcheck[1].length; i++) {
						if (isNaN(cmdcheck[1][i])) {
							xsub = parseInt(cmdcheck[1].substr(ssign + 1,i));
							break;
						}
					}
					isNaN(xsub) ? xsub = 0 : "";
				}
				if (msign > -1) {
					for (var i = msign + 1; i <= cmdcheck[1].length; i++) {
						if (isNaN(cmdcheck[1][i])) {
							xmulti = parseInt(cmdcheck[1].substr(msign + 1,i));
							break;
						}
					}
					isNaN(xmulti) ? xmulti = 1 : "";
				}
				if (dsign > -1) {
					for (var i = dsign + 1; i <= cmdcheck[1].length; i++) {
						if (isNaN(cmdcheck[1][i])) {
							xdiv = parseInt(cmdcheck[1].substr(dsign + 1,i));
							break;
						}
					}
					isNaN(xdiv) ? xdiv = 1 : "";
				}
			}
			d6test = d6 > -1 && !isNaN(xdice) && !isNaN(xroll);
			drolls = "";
			if (d6test) {
				for (var i = 0;i < xdice;i++) {
					roll = Math.ceil(Math.random() * xroll);
					a += roll;
					drolls += (drolls.length > 0 ? " + " : "") + roll;
				}
				a = a * xmulti / xdiv + xplus - xsub;
				max = xdice * xroll * xmulti / xdiv + xplus - xsub;
			} else {
				max = parseInt(cmdcheck[1]);
				isNaN(max) ? max = 100 : '';
				a = Math.ceil(Math.random() * max);
			}
			
			msg = a + ' out of ' + max + (!isNaN(cmdcheck[1]) ? "" : " (Rolled: " + drolls + ")");
		} else if (cmdcheck[0] === "!q") {
			RandomQuotes.length < 1 ? RandomQuotes = ['Error: No quotes available.'] : '';
			a = Math.round(Math.random() * (RandomQuotes.length - 1));
			msg = RandomQuotes[a];
		} else if (cmdcheck[0] === "!img") {
			RandomImages.length < 1 ? RandomImages = ['Error: No images available.'] : '';
			a = Math.round(Math.random() * (RandomImages.length - 1));
			msg = RandomImages[a] + ':pic';
		} else if (cmdcheck[0] === "!calc" && cmdcheck[1].length > 0) {
			try {
				msg = '' + eval(cmdcheck[1]);
			} catch (e) {
				msg = 'Please use a valid equation.'
			}
		} else if (cmdcheck[0] === "!vskip" && hasPermission("voteskip") && !$("#voteskip").is(':disabled')) {
			socket.emit("voteskip");
			msg = 'Voteskip sent for ' + $("#currenttitle").text().replace(new RegExp("(^Currently Playing: )|(^" + TitleBarDescription_Caption + " )", "g"), '');
		} else if (cmdcheck[0] === "!skip" && hasPermission("playlistjump")) {
			socket.once("changeMedia", function(data) {
				socket.emit("chatMsg", {msg: '➥ Skipped to ' + data.title});
			});
			socket.emit("playNext");
			COMMAND = false;
		} else if (cmdcheck[0] === "!bump" && hasPermission("playlistmove")) {
			a = $("#queue").children().length;
			b = $("#queue .queue_entry:nth-child(" + a + ")").data("uid");
			c = $("#queue .queue_entry:nth-child(" + a + ") .qe_title").html();
			socket.emit("moveMedia", {from:b, after:PL_CURRENT});
			msg = 'Bumped ' + c;
		} else if (cmdcheck[0] === "!add" && hasPermission("playlistadd") && cmdcheck[1].length > 0) {
			parsed = parseMediaLink(cmdcheck[1]);
			if (parsed["id"] === null) {
				msg = 'Error: Invalid video link.';
			} else {	
				checktemporary();
				socket.emit("queue", {id: parsed["id"], pos: "end", temp: TEMPORARY, type: parsed["type"]});
				msg = 'Video has been added.';
			}
		} else if (cmdcheck[0] === "!now") {
			TitleBarDescription_Caption.length < 1 ? TitleBarDescription_Caption = 'Currently Playing:' : '';
			msg = TitleBarDescription_Caption + ' ' + $(".queue_active a").html();
		} else if (cmdcheck[0] === "!next") {
			msg = UPNEXT;
		} else if (cmdcheck[0] === "!food") {
			FoodArray.length < 1 ? FoodArray = ['Error: No food available.'] : '';
			a = Math.round(Math.random() * (FoodArray.length - 1));
			msg = FoodArray[a];
		} else if (cmdcheck[0] === "!azukiazusa") {
			AzukiAzusa.length < 1 ? AzukiAzusa = ['Error: No Azusas available.'] : '';
			a = Math.round(Math.random() * (AzukiAzusa.length - 1));
			msg = AzukiAzusa[a] + ':pic';
		}
		else if (cmdcheck[0] === "!jun") {
			msg = 'https://dl.dropboxusercontent.com/scl/fi/tq9463re3lkfj18wpoa2d/where_there_are_lolis.jpg?rlkey=qu2ns8xi493oevp2pfya5x6xx&st=qmuof8ke&dl=0' + ':pic';
		} else {
			COMMAND = false;
		}
	}
	if (EMOTEBL.indexOf(CLIENT.name) > -1) {
		msg = msg.replace(/http(.+?):(pic|webm|sp|@|lf|float|\d+|-\d+)/gi,"http$1").split(" ");
		for (ebl in msg) {
			if (msg[ebl].indexOf(":") > -1 && arrayObjectIndexOf(CHANNEL.emotes, msg[ebl], "name") > -1) {
				msg[ebl] += "[/]";
			}
		}
		msg = msg.join(" ");
	}
	if (msg.search(/ :|: |^:/g) > -1) {
		msg = msg.split(" ");
		for (w in msg) {
			if (msg[w].indexOf(":") > -1 && arrayObjectIndexOf(CHANNEL.emotes, msg[w], "name") > -1) {
				Math.random() < Math.pow(RANDEMOTE++ / 10,2)/100 ? msg[w] = CHANNEL.emotes[Math.ceil(Math.random() * CHANNEL.emotes.length) - 1].name : '';
				setOpt(CHANNEL.name + "_RANDEMOTE",RANDEMOTE);
			}
		}
		msg = msg.join(" ");
	}
	for (iR in RedditChange_Links) {
		if (msg.search(iR) > -1) {
			msg = msg.split(" ");
			for (iRM in msg) {
				if (msg[iRM].search(iR) > -1) {
					Math.random() < .01 ? msg[iRM] = RedditChange_Links[iR][Math.ceil(Math.random() * RedditChange_Links[iR].length) - 1] + ":pic" : '';
				}
			}
			msg = msg.join(" ");
		}
	}
	/*if (msg.search(/\/|>/) === 0) { //SUBCHANNEL
		var sspace = msg.length > 50 ? 25 : msg.indexOf(" ");
		if (sspace === -1) {
			msg = msg += " [CH" + SUBCHAN + "]";
		} else {
			msg = msg.substring(0,sspace) + " [CH" + SUBCHAN + "]" + msg.substring(sspace+1,msg.length);
		}
	} else {
		msg = "[CH" + SUBCHAN + "] " + msg;
	}
	console.log(msg);*/
	return msg;
}

function emoteMuteBtns() {
	$(".user-dropdown").each(function() {
		var emutedname = $(this).children("strong").text();
		if ($(this).text().search(/Unmute Emotes|Mute Emotes/gi) < 0) {
			$('<button class="btn btn-xs btn-default"/>')
				.text((USEREMOTEBL.indexOf(emutedname) < 0 ? "Mute Emotes" : "Unmute Emotes"))
				.appendTo($(this).children(".btn-group-vertical"))
				.on("click", function() {
					if (USEREMOTEBL.indexOf(emutedname) < 0) {
						USEREMOTEBL[USEREMOTEBL.length] = emutedname;
						$(this).text("Unmute Emotes");
						removeImages();
					} else {
						USEREMOTEBL.splice(USEREMOTEBL.indexOf(emutedname),1);
						$(this).text("Mute Emotes");
						showImages();
					}
					setOpt(CHANNEL.name + "_USEREMOTEBL", USEREMOTEBL);
				});
		}
	});
}
emoteMuteBtns();

function arrayObjectIndexOf(myArray, searchTerm, property) {
	for(var i = 0, len = myArray.length; i < len; i++) {
		if (myArray[i][property] === searchTerm) return i;
	}
	return -1;
}

// refresh user chat statistics
function userChatStats(a) {
	if (a.trim().indexOf("!stat") !== 0) {
		CHATSTAT['n']++;
		CHATSTAT['l'] = CHATSTAT['l'] + a.length;
		CHATSTAT['m'].push(a);
	}
}

// get playlist helper functions
function formatRawList() {
	a = $("#queue .queue_entry").length + 1;
	list = [];
	for (i = 1; i < a; i++) {
		item = $("#queue .queue_entry:nth-child(" + i + ")").data("media");
		list.push(formatURL(item));
	}
	return list.join(",");
}

// format links from the get playlist link button
function formatPlainTextList() {
	a = $("#queue .queue_entry").length + 1;
	list = [];
	for (i = 1; i < a; i++) {
		item=$("#queue .queue_entry:nth-child(" + i + ")").data("media");
		list.push(i + '. ' + formatURL(item) + ' ' + item.title + ' [' + item.duration + ']');
	}
	return list.join('\n');
}
function formatHTMLList() {
	a = $("#queue .queue_entry").length + 1;
	list = [];
	for (i = 1; i < a; i++) {
		item = $("#queue .queue_entry:nth-child(" + i + ")").data("media");
		title = item.title;
		duration = item.duration;
		link = formatURL(item);
		list.push('<li>' + title + ' [' + duration + '] - <a href="' + link + '" target="_blank">' + link + '</a></li>');
	}
	return list.join('\n');
}
function formatOrderedList() {
	len = $("#queue .queue_entry").length + 1;
	var list = [];
	for (i = 1; i < len; i++) {
		item = $("#queue .queue_entry:nth-child("+i+")").data("media");
		link = formatURL(item);
		list.push(item.title + ' ■■  ' + link + ' ■■  [' + item.duration + ']');
		list.sort();
	}
	return list.join('\n');
}
function formatDBList() {
	len = $("#queue .queue_entry").length+1;
	var list = [];
	for (i = 1; i < len; i++) {
		item = $("#queue .queue_entry:nth-child("+i+")").data("media");
		re1 = new RegExp('\\\\', 'g');
		re2 = new RegExp('\'', 'g');
		title = item.title.replace(re1, '\\\\').replace(re2, '\\\'');
		list.push('[\'' + formatURL(item) + '\', \'' + title + '\'],');
	}
	return list.join('\n');
}

// toggle "/clear" button depends on rank
function toggleClearBtn() {
	!hasPermission("chatclear") ? $("#clear-btn, #spamclear").hide() : $("#clear-btn, #spamclear").show();
}

// layout elements settings
function playerLocation(a) {
	$("#pinup-btn").show();
	if (a === "left") {
		$("#videowrap").after($("#chatwrap").detach());
		normalPlayer();
		normalChat();
	} else if (a === "right") {
		$("#videowrap").before($("#chatwrap").detach());
		normalPlayer();
		normalChat();
	}
}

function userlistLocation(a) {
	a === "left" ? $("#userlist").css('float', 'left') : $("#userlist").css('float', 'right');
}

function queueLocation(a) {
	$("#pinup-btn").show();
	if (a === "right") {
		$("#rightpane").before($("#leftpane").detach());
	} else if (a === "left") {
		$("#rightpane").after($("#leftpane").detach());
	}
	b = (a === "right") ? "left" : "right";
	$("#playlistrow").css('background-position', b + ' bottom');
}

function queueSize(a) {
	if (a === "wide") {
		$("#leftpane").removeClass().addClass('col-lg-5 col-md-5');
		$("#rightpane").removeClass().addClass('col-lg-7 col-md-7');
	} else if (a === "narrow") {
		$("#leftpane").removeClass().addClass('col-lg-7 col-md-7');
		$("#rightpane").removeClass().addClass('col-lg-5 col-md-5');
	}
}

function mainLocation(a) {
	if (a === "top") {
		$("#main").before($("#titlerow").detach()).after($("#playlistrow").detach());
	} else if (a === "bottom") {
		$("#main").before($("#playlistrow").detach()).before($("#titlerow").detach());
	}
	$("#main").after($("#chatpanel").detach());
}

function motdLocation(a) {
	if (a === "top") {
		$("#zerorow").after($("#announcements").detach()).after($("#motdrow").detach());
	} else if (a === "bottom") {
		$("#resizewrap").before($("#motdrow").detach()).before($("#announcements").detach());
	}
}

function logoInsert(a) {
	if (a != "no") {
		link = (a != "user") ? TopUserLogo[a][1] : UCONF.logourl;
		ht = (a != "user") ? TopUserLogo[a][2] : UCONF.logoht;
		azukirow.css('min-height', ht + 'px').css('background-image', 'url(' + link + ')');
	} else if (a === "no") {
		azukirow.css('min-height', '5px').css('background-image', '');
	}
}

function headerMode(a) {
	$(".navbar-fixed-top").unbind();
	if (a === "fixed") {
		$(".navbar-fixed-top").css('position', 'fixed').css('top', '0px');
		$("#mainpage").css('margin-top', '0px');
	} else if (a === "detached") {
		$(".navbar-fixed-top").css('position', 'inherit');
		$("#mainpage").css('margin-top', '-72px');
	} else if (a === "mouseover") {
		$(".navbar-fixed-top").css('position', 'fixed').css('top', '-40px')
			.on("mouseover", function() {
				$(".navbar-fixed-top").css('top', '0px');
			})
			.on("mouseout", function() {
				$(".navbar-fixed-top").css('top', '-40px');
			});
		$("#mainpage").css('margin-top', '-40px');

	}
}

function customCSS(a) {
	$("#usercss").remove();
	a === "yes" ? $("head").append('<style id="usercss" type="text/css">' + UCONF.csscode + '</style>') : '';
}

// set global layout according to user preferences
function setLayout() {
	playerLocation(UCONF.player);
	userlistLocation(UCONF.userlist);
	queueLocation(UCONF.queue);
	queueSize(UCONF.qsize);
	mainLocation(UCONF.main);
	motdLocation(UCONF.motd);
	logoInsert(UCONF.logo);
	headerMode(UCONF.header);
	customCSS(UCONF.css);
	$("#queue").css("width","100%");
}

// display mode helper functions
function bigPlayer() {
	$("#videowrap").removeClass().addClass("col-lg-12 col-md-12");
	fitPlayer();
}

function bigChat() {
	$("#chatwrap").removeClass().addClass('col-lg-12 col-md-12');
	fitChat("auto");
}

function normalPlayer() {
	$("#videowrap").removeClass().addClass("col-lg-7 col-md-7");
	fitPlayer();
}

function normalChat() {
	c = (PINNED && UCONF.qsize=="wide") ? 'col-lg-7 col-md-7' : 'col-lg-5 col-md-5';
	$("#chatwrap").removeClass().addClass(c);
	VWIDTH = $("#videowrap").width();
	VHEIGHT = Math.floor(VWIDTH * 9 / 16 + 1);
	fitChat(VHEIGHT - $("#chatline").outerHeight() - 1);
}

// set display mode
function setMode(a) {
	if (NOPLAYER) {
		$("#videowrap").show();
		ytapiplayer = $('<div id="ytapiplayer" />').insertBefore("#playercontrols");
		$("#mediarefresh").click();
		NOPLAYER = false;
	}

	$("#main").show();
	pinupbtn.hide();
	expandbtn.hide();
	scrollbtn.hide();
	modesel.find("option[value='chMode'], option[value='rMode']").show();
	PINNED ? modesel.find("option[value='chMode']").hide() : '';

	switch (a) {
		case "syMode":
		$("#videowrap, #videowrap p, #videowrap div, #chatwrap, #rightpane, #pinup-btn").show();
		$("#config-btn, #configbtnwrap br, #pinup-btn").show();
		$("#min-layout").parent().show();
		normalPlayer();
		normalChat();
		playerLocation(UCONF.player);
		PINNED ? pinUp() : '';
		handleWindowResize();
		break;

		case "kMode":
		$("#videowrap").show();
		PINNED ? $("#rightpane").hide() : $("#chatwrap").hide();
		bigPlayer();
		$("#fontspanel, #emotespanel").hide();
		break;

		case "chMode":
		$("#chatwrap").show();
		if (WEBKIT) {
			$("#videowrap").hide();
		} else {
			$("#videowrap div, #videowrap p").hide();
			$("#ytapiplayer").width(1).height(1);
		}
		bigChat();
		break;

		case "sMode":
		$("#chatwrap").show();
		$("#videowrap").hide();
		$("#ytapiplayer").remove();
		bigChat();
		modesel.find("option[value='chMode'], option[value='rMode']").hide();
		$("#fontspanel, #emotespanel").hide();
		NOPLAYER = true;
		break;

		case "rMode":
		if (WEBKIT) {
			$("#main").hide();
		} else {
			PINNED ? $("#rightpane").hide() : $("#chatwrap").hide();
			$("#videowrap div, #videowrap p").hide();
			$("#ytapiplayer").width(1).height(1);
		}
		!PINNED ? $("#min-layout").parent().show() : '';
		break;
	}
}

// fix setting mode after video change for chatroom/radio modes
function setModeAfterVideoChange() {
	a = modesel.val();
	(a === "chMode" || a === "rMode") ? setMode(a) : '';
}

// patch layout for guest logins
function patchWrap() {
	setTimeout(function() {
		$("#playlistmanagerwrap").show();
	}, 1500);
}

// set user online time
function onlineTime() {
	USERONLINE++;
	hours = Math.floor(USERONLINE / 60);
	minutes = USERONLINE-hours * 60;
	minutes < 10 ? minutes = '0' + minutes : '';
	$("#onlinetime").html(hours + ":" + minutes);
}

// set user CSS
function setUserCSS() {
	$("#usertheme").attr('href', '/css/themes/slate.css');
	$("#usertheme-fix").remove();
	if (USERTHEME.indexOf("/css/themes/")>-1) {
		$("#usertheme").attr('href', USERTHEME);
	} else {
		$('<link id="usertheme-fix" rel="stylesheet" type="text/css" href="' + USERTHEME + '"></link>')
			.appendTo("head");
	}
	$("#usercss").remove();
	if (UCONF.css != "no") {
		$("head").append('<style id="usercss" type="text/css">' + UCONF.csscode + '</style>');
	}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- UI events functions ----- */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function prepareFilters() {
	str = '{"name":"Display webm","source":"http(.+?):webm","flags":"gi",'
		+ '"replace":"<a class=\\"webm\\" href=\\"http$1\\" target=\\"_blank\\">http$1</a>","active":true,"filterlinks":true},'
		+ '{"name":"Image","source":"http(.+?):pic","flags":"i",'
		+ '"replace":"<a class=\\"picturelink\\" href=\\"http$1\\" target=\\"_blank\\"><img src=\\"http$1\\" style=\\"max-width:300px; max-height:300px\\"></a>","active":true,"filterlinks":true},'
		+ '{"name":"Right float image","source":"http(.+?):float","flags":"gi",'
		+ '"replace":"<a class=\\"rightfloatpic\\" href=\\"http$1\\" target=\\"_blank\\"><img src=\\"http$1\\" style=\\"float:right; max-width:300px; max-height:300px\\"></a>","active":true,"filterlinks":true},'
		+ '{"name":"Left float image","source":"http(.+?):lf","flags":"gi",'
		+ '"replace":"<a class=\\"leftfloatpic\\" href=\\"http$1\\" target=\\"_blank\\"><img src=\\"http$1\\" style=\\"float:left; max-width:300px; max-height:300px\\"></a>","active":true,"filterlinks":true},'
		+ '{"name":"Spin image","source":"http(.+?):@","flags":"gi",' 
		+ '"replace":"<a class=\\"spinpic\\" href=\\"http$1\\" target=\\"_blank\\"><img class=\\"spin\\" src=\\"http$1\\" style=\\"max-width:300px; max-height:300px\\"></a>","active":true,"filterlinks":true},'
		+ '{"name":"Spoiler image","source":"http(.+?):sp","flags":"gi",'
		+ '"replace":"<a class=\\"spoilerpic\\" href=\\"http$1\\" target=\\"_blank\\"><img class=\\"spoilerpic\\" src=\\"'+SpoilerImg+'\\"></a>","active":true,"filterlinks":true},'
		+ '{"name":"Admin","source":"\\\\[admin\\\\]","flags":"gi",'
		+ '"replace":"<span style=\\"color:'+Mod_HexColor+'\\">","active":true,"filterlinks":false},'
		+ '{"name":"Spin Text","source":"\\\\[@\\\\]","flags":"gi",'
		+ '"replace":"<span class=\\"spin\\">","active":true,"filterlinks":false},'
		+ '{"name":"Untz color","source":"\\\\[untz\\\\]","flags":"gi",'
		+ '"replace":"<span class=\\"untz\\">","active":true,"filterlinks":false},'
		+ '{"name":"Colors","source":"\\\\[(orange|maroon|teal|olive|navy|purple|fuchsia|gray|black|silver|gold|aqua|blue|violet|yellow|green|pink|red|lime|brown|white)\\\\]","flags":"gi",'
		+ '"replace":"<span style=\\"color:$1\\">","active":true,"filterlinks":false},'
		+ '{"name":"> color","source":"\\\\[g\\\\]","flags":"gi",'
		+ '"replace":"<span style=\\"color:#789922\\">","active":true,"filterlinks":false},'
		+ '{"name":"White color on black","source":"\\\\[bw\\\\]","flags":"gi",'
		+ '"replace":"<span style=\\"color:white; background-color:black\\">","active":true,"filterlinks":false},'
		+ '{"name":"Right float text","source":"\\\\[float\\\\]","flags":"gi",'
		+ '"replace":"<span style=\\"float:right\\">","active":true,"filterlinks":false},'
		+ '{"name":"Left float text","source":"\\\\[lf\\\\]","flags":"gi",'
		+ '"replace":"<span style=\\"float:left\\">","active":true,"filterlinks":false},'
		+ '{"name":"Moving text","source":"\\\\[m(\\\\d+)\\\\]","flags":"gi",'
		+ '"replace":"<marquee scrollamount=\\"$1\\" behavior=\\"alternate\\">","active":true,"filterlinks":false},'
		+ '{"name":"Bold text","source":"\\\\[b\\\\]","flags":"gi",'
		+ '"replace":"<span style=\\"font-weight:bold\\">","active":true,"filterlinks":false},'
		+ '{"name":"Italics text","source":"\\\\[i\\\\]","flags":"gi",'
		+ '"replace":"<span style=\\"font-style:italic\\">","active":true,"filterlinks":false},'
		+ '{"name":"Underlined text","source":"\\\\[u\\\\]","flags":"gi",'
		+ '"replace":"<span style=\\"text-decoration:underline\\">","active":true,"filterlinks":false},'
		+ '{"name":"Striked text","source":"\\\\[s\\\\]","flags":"gi",'
		+ '"replace":"<span style=\\"text-decoration:line-through\\">","active":true,"filterlinks":false},'
		+ '{"name":"Distinguished text","source":"\\\\[d\\\\]","flags":"gi",'
		+ '"replace":"<span class=\\"dist\\">","active":true,"filterlinks":false},'
		+ '{"name":"Fire text","source":"\\\\[f\\\\]","flags":"gi",'
		+ '"replace":"<span style=\\"color:#FFFFFF; font-family:impact, sans-serif; padding-top:20px; '
		+ 'text-shadow:0px 0px 4px #000000, 0px -5px 4px #FFFF33, 2px -8px 6px #FFDD33, -2px -15px 10px #FF8800, '
		+ '2px -20px 18px #FF2200; letter-spacing:2px\\">","active":true,"filterlinks":false},'
		+ '{"name":"Shit text","source":"\\\\[shit\\\\]","flags":"gi",'
		+ '"replace":"<span style=\\"color:#691227; font-family:impact, sans-serif; padding-top:20px; '
		+ 'text-shadow:0px 0px 4px #000000, 0px -5px 4px #8FFF33, 2px -8px 6px #49BF2C, -2px -15px 10px #14730B, '
		+ '2px -20px 18px #204006; letter-spacing:2px\\">","active":true,"filterlinks":false},'
		+ '{"name":"Short spoiler","source":"\\\\[spoiler\\\\]","flags":"gi",'
		+ '"replace":"<span class=\\"spoiler\\">","active":true,"filterlinks":false},'
		+ '{"name":"Closing font style","source":"\\\\[\\\\/\\\\]","flags":"gi",'
		+ '"replace":"</span></marquee>","active":true,"filterlinks":false},'
		+ '{"name":"30 minute nap","source":"30 MinutE NaP","flags":"g",'
		+ '"replace":"<font color=\\"#789922\\">>30 minute nap</font>","active":true,"filterlinks":false},'
		+ '{"name":"Streaming","source":"StreaminG","flags":"g",'
		+ '"replace":"<font color=\\"#789922\\">>streaming</font>","active":true,"filterlinks":false},'
		+ '{"name":"Lottery","source":"'+Lottery.text+'","flags":"g",'
		+ '"replace":"<a class=\\"lotterypic\\" href=\\"'+Lottery.click+'\\" target=\\"_blank\\"><img class=\\"lotterypic\\" src=\\"'+Lottery.image+'\\"></a>","active":true,"filterlinks":false}]';

	callback = function(data) {
		socket.listeners("chatFilters").splice(
			socket.listeners("chatFilters").indexOf(callback)
		);
		temp = JSON.stringify(data);
		comma = (temp.length!="2") ? ',' : '';
		$("#cs-chatfilters-exporttext").val(temp.substring(0, temp.length-1) + comma + str);
	};

	socket.once("chatFilters", callback);
	socket.emit("requestChatFilters");
}

// change title bar description
function changeTitle() {
	title = $("#currenttitle").text();
	$("#currenttitle").text(title.replace(/^Currently Playing:/, TitleBarDescription_Caption));
}

// hide and show player with covering image
function coverPlayer() {
	n = Math.floor(Math.random() * PlayerHiding_URL.length);
	PlayerHiding_URL[n] === "" ? PlayerHiding_URL[n] = 'https://dl.dropboxusercontent.com/s/xz2o99scw5i7aai/stop.png' : '';
	$("#videowrap").addClass('relative');
	w = $("#videowrap-header").width() + 5;
	h = $("#videowrap").height() - $("#videowrap-header").height() - $("#playercontrols").height() - 1;
	coverpltempimg = $('<img id="coverpltempimg" src="' + PlayerHiding_URL[n] +'"/>')
		.insertAfter($("#ytapiplayer")).hide();
	coverpl = $('<div id="coverpl" />')
		.css({'margin-left':'-2px', 'width':w + 'px', 'height':h + 'px', 'background-image':'url(' + PlayerHiding_URL[n] + ')'})
		.insertAfter($("#ytapiplayer"));
	stopinterval = 0;
	fixsize = setInterval(function() {
		stopinterval++;
		imgw = coverpltempimg.width();
		imgh = coverpltempimg.height();
		imgratio = imgw/w*h;
		if (imgw !== 0 && imgh !== 0) {
			if (imgw > w && imgh > h && (imgratio > imgh || imgratio === imgh)) {
				coverpl.css('background-size', w + 'px auto');
			} else if (imgw > w && imgh > h && imgratio < imgh) {
				coverpl.css('background-size', 'auto ' + h + 'px');
			} else if (imgw > w && imgh < h) {
				coverpl.css('background-size', '100% auto');
			} else if (imgw < w && imgh > h) {
				coverpl.css('background-size', 'auto 100%');
			}
			stopinterval = 401;
		}
		if (stopinterval > 400) {
			$("#coverpltempimg").remove();
			clearInterval(fixsize);
		}
	}, 25);
	hideplayer.addClass('btn-danger').attr('title', 'Show player');
}

function showPlayer() {
	coverpl.remove();
	hideplayer.removeClass('btn-danger').attr('title', 'Hide player');
	$("#videowrap").removeClass('relative');
}

// pin-up playlist to player
function pinUp() {
	if (UCONF.player=="left") {
		$("#videowrap").after($("#rightpane").detach());
	} else if (UCONF.player=="right") {
		$("#videowrap").before($("#rightpane").detach());
	}
	if (UCONF.queue=="left") {
		$("#leftpane").before($("#chatwrap").detach());
	} else if (UCONF.queue=="right") {
		$("#leftpane").after($("#chatwrap").detach());
	}
	$("#rightpane").removeClass().addClass('col-lg-5 col-md-5');
	if (UCONF.qsize=="wide") {
		$("#chatwrap").removeClass().addClass('col-lg-7 col-md-7');
	} else {
		$("#chatwrap").removeClass().addClass('col-lg-5 col-md-5');
	}
	$("#pinup-btn").attr('title', 'Unpin playlist');
	$("#config-btn, #configbtnwrap br").hide();
	$("#min-layout").parent().hide();
	$("#mode-sel").find("option[value='chMode'], option[value='sMode']").hide();
	PINNED=true;
}

// un-pin playlist from player
function unPin() {
	if (UCONF.queue=="left") {
		$("#leftpane").before($("#rightpane").detach());
	} else if (UCONF.queue=="right") {
		$("#leftpane").after($("#rightpane").detach());
	}
	if (UCONF.player=="left") {
		$("#videowrap").after($("#chatwrap").detach());
	} else if (UCONF.player=="right") {
		$("#videowrap").before($("#chatwrap").detach());
	}
	$("#chatwrap").removeClass().addClass('col-lg-5 col-md-5');
	if (UCONF.qsize=="wide") {
		$("#rightpane").removeClass().addClass('col-lg-7 col-md-7');
	} else {
		$("#rightpane").removeClass().addClass('col-lg-5 col-md-5');
	}
	$("#pinup-btn").attr('title', 'Pinup playlist to player');
	$("#config-btn, #configbtnwrap br").show();
	$("#min-layout").parent().show();
	$("#mode-sel").find("option[value='chMode'], option[value='sMode']").show();
	PINNED=false;
}

// show chat commands modal window
function showChatHelp() {
	createModal('Chat Commands');
	if (UI_FontsBtn === 1) {
		body.append('<strong>Message formatting</strong><br /><br />');
		html='<li><code>[untz]</code>, <code>[white]</code>, <code>[yellow]</code>, <code>[orange]</code>, <code>[pink]</code>, '
			+ '<code>[red]</code>, <code>[lime]</code>, <code>[g]</code>, <code>[green]</code>, <code>[aqua]</code>, '
			+ '<code>[blue]</code>, <code>[violet]</code>, <code>[brown]</code>, <code>[silver]</code>, '
			+ '<code>[black]</code> - Colored text.</li>'
			+ '<li><code>[bw]</code> - White text on a black background.</li>'
			+ '<li><code>[b]</code>, <code>[i]</code>, <code>[u]</code>, <code>[s]</code> - '
			+ 'Starts bold, italic, underlined, underlined or striked text.</li>'
			+ '<li><code>[d]</code> - Distinguished text. (red on yelllow background)</li>'
			+ '<li><code>[f]</code> - Text with a fire effect.</li>'
			+ '<li><code>[shit]</code> - Text with a shit effect.</li>'
			+ '<li><code>[spoiler]</code> - An inline spoiler. <b>(Shortcut is ctrl + s)</b></li>'
			+ '<li><code>[float]</code> - Float text to the right.</li>'
			+ '<li><code>[lf]</code> - Float text to the left.</li>'
			+ '<li><code>[m<span style="background-color:yellow">#</span>]</code> - Move text side to side. Speed dependent on the number after <code>[m</code>.</li>'
			+ '<li><code>[@]</code> - Spin text.</li>'
			+ '<li><code>[hflip]</code> - Horizontally flip text.</li>'
			+ '<li><code>[vflip]</code> - Vertically flip text.</li>'
			+ '<li><code>[/]</code> - <b>Ends any color, style, float or spoiler.</b></li>';
		$('<ul />').html(html).appendTo(body);
	}
	if (UI_UserCommands === 1) {
		scrcmd = {
			'add':'Adds a link to the end of playlist. (e.g. <i>!add http://www.youtube.com/watch?v=YLNH_Fqj4DE</i>)',
			'ask':'Asks a question with a yes/no type answer. (e.g. <i>!ask Will this channel be popular?</i>)',
			'calc':'Calculates a math operation. (all JavaScript Math methods and constants allowed, e.g. <i>!calc Math.PI*10</i>)',
			'dice':'Rolls dice. (<i>!dice</i>)',
			'now':'Shows currently playing title. (<i>!now</i>)',
			'pick':'Chooses a random item from a list separated by commas. (e.g. <i>!pick japan,korea,china</i>)',
			'q':'Provides a random quote. (<i>!q</i>)',
			'img':'Provides a random image (<i>!img</i>)',
			'roll':'Rolls a number. (<i>!roll</i>)',
			'stat': 'Displays user chat statistics for the current session. (<i>!stat</i>)',
			'time':'Displays current local time. (<i>!time</i>)',
			'vskip':'Voteskips the current item. (<i>!skip</i>)',
			'food':'Random food quote. (<i>!food</i>)',
			'azukiazusa':'Random Azuki Azusa image. (<i>!azukiazusa</i>)',
			'jun':'??? (<i>!jun</i>)'
		};
		body.append('<br /><strong>Custom commands</strong><br /><br />');
		cmdlist = $('<ul />').appendTo(body);
		for (cmd in scrcmd) {
			cmdlist.append('<li><code>!' + cmd + '</code> - ' + scrcmd[cmd] + '</li>');
		}
	}
	if (UI_EmbeddingMedia === 1) {
		imgcmd = {
			'pic':'Add at the end of an image link to embed it. (e.g. <i>http://www.imgur.com/gayshit.png:pic</i>)',
			'webm':'Add at the end of webm link to embed it. (e.g. <i>http://www.imgur.com/gayshit.webm:webm</i>)',
			'@':'Add at the end of an image link to embed it spinning. (e.g. <i>http://www.imgur.com/gayshit.png:@</i>)'
		};
		body.append('<br /><strong>Image embedding</strong><br /><br />');
		imglist = $('<ul />').appendTo(body);
		for (cmd in imgcmd) {
			imglist.append('<li><code>:' + cmd + '</code> - ' + imgcmd[cmd] + '</li>');
		}
	}
	defcmd = {
		'me':'Shows an action-style message. (username does something, e.g. <i>/me is dancing</i>)',
		'sp':'Hides a message in a hover-to-show spoiler box. (e.g. <i>/sp This message is hidden</i>)',
		'afk':'Toggles AFK (Away From Keyboard) status. (<i>/afk</i>)',
		'clear':'Clears chat. (Admin only)',
		'reload':'Reloads page for all users. (Admin only)'
	};
	body.append('<br /><strong>Default CyTube commands</strong><br /><br />');
	cmdlist2=$('<ul />').appendTo(body);
	for (cmd in defcmd) {
		cmdlist2.append('<li><code>/' + cmd + '</code> - ' + defcmd[cmd] + '</li>');
	}
}

// show contributors list
function showContributors() {
	createModal("Contributors List");
	a = $("#queue li").length + 1;
	var list=[];
	for (i = 1; i < a; i++) {
		item = $("#queue li:nth-child(" + i + ")").attr('title');
		user = item.split("by: ")[1];
		user in list ? list[user]++ : list[user] = 1;
	}
	var list2 = [];
	for (key in list) {
		list2.push([key, list[key]]);
	}
	list2.sort(function(a,b) {return a[1] - b[1]});
	list2.reverse();
	var list3 = [];
	for (i in list2) {
		j = i * 1 + 1;
		list3.push(j + ". " + list2[i].join(": "));
	}
	html = '<strong>Number of added playlist items:</strong>'
		+ '<br /><br />' + list3.join("<br />");
	body.append(html);
}

// expand/collapse queue
function expandQueue() {
	if (!FULLPL) {
		$("#queue").css('max-height', '100000px');
		expandbtn.addClass('btn-success');
	} else {
		$("#queue").css('max-height', '500px');
		expandbtn.removeClass('btn-success');
		scrollQueue();
	}
	FULLPL = !FULLPL;
}

// get playlist URLS
function getPlaylistURLs() {
	createModal('Playlist URLs');
	data = $('<textarea rows="10" class="form-control" />').val(formatRawList()).appendTo(body);
	rlist = $('<button class="btn btn-default pull-left">Raw Links</button>').appendTo(footer);
	tlist = $('<button class="btn btn-default pull-left">Plain Text</button>').appendTo(footer);
	hlist = $('<button class="btn btn-default pull-left">HTML Code</button>').appendTo(footer);
	olist = $('<button class="btn btn-default pull-left">Ordered List</button>').appendTo(footer);
	dlist = $('<button class="btn btn-default pull-left">Database Format</button>').appendTo(footer);
	rlist.on("click", function() {
		data.val(formatRawList());
	});
	tlist.on("click", function() {
		data.val(formatPlainTextList());
	});
	hlist.on("click", function() {
		data.val('<ol>\n'+formatHTMLList()+'\n</ol>');
	});
	olist.on("click", function() {
		data.val(formatOrderedList());
	});
	dlist.on("click", function() {
		data.val(formatDBList());
	});
}

// toggle configuration panel
function toggleConfigPanel() {
	if (MINIMIZED) {
		if (!PINNED) {
			$("#rightpane-inner").show();
		} else {
			$("#chatwrap").show();
		}
		$("#azukirow, #leftpane-inner").show();
		!$("#hidemotd-btn").hasClass('btn-danger') ? $("#motdrow").show() : '';
		!$("#hideann-btn").hasClass('btn-danger') ? $("#announcements").show() : '';
		!$("#hidehf-btn").hasClass('btn-danger') ? $("footer").show() : '';
		pinupbtn.show();
		expandbtn.show();
		scrollbtn.show();
		layoutbtn.removeClass('btn-danger').addClass('btn-success')
			.html('<span class="glyphicon glyphicon-cog"></span> Layout');
		$("#min-layout").prop('checked', false);
		$("#plcontrol button, #db-btn, #newpollbtn").removeAttr('disabled');
		MINIMIZED=false;
	} else {
		toggleDiv(configwrap);
		if (configwrap.css('display')=="none") {
			layoutbtn.removeClass('btn-success');
		} else {
			layoutbtn.addClass('btn-success');
		}
		LAYOUTBOX = !LAYOUTBOX;
		setOpt(CHANNEL.name + "_LAYOUTBOX", LAYOUTBOX);
	}
}

// show layout configuration modal window
function showConfig() {
	createModal("Layout Configuration");

	form=$('<form />').addClass('form-horizontal').appendTo(body);

	function addOption(lbl, thing) {
		g=$('<div />').addClass('form-group').appendTo(form);
		$('<label />').addClass('control-label col-sm-4').text(lbl).appendTo(g);
		c=$('<div />').addClass('col-sm-8').appendTo(g);
		thing.appendTo(c);
	}

	playerlocation=$('<select />').addClass('form-control');
	$('<option />').attr('value', 'left').text('left').appendTo(playerlocation);
	$('<option />').attr('value', 'right').text('right').appendTo(playerlocation);
	playerlocation.val(UCONF.player);
	addOption('Player location', playerlocation);

	userlistlocation=$('<select />').addClass('form-control');
	$('<option />').attr('value', 'left').text('left').appendTo(userlistlocation);
	$('<option />').attr('value', 'right').text('right').appendTo(userlistlocation);
	userlistlocation.val(UCONF.userlist);
	addOption('Userlist location', userlistlocation);

	queuelocation=$('<select />').addClass('form-control');
	$('<option />').attr('value', 'left').text('left').appendTo(queuelocation);
	$('<option />').attr('value', 'right').text('right').appendTo(queuelocation);
	queuelocation.val(UCONF.queue);
	addOption('Playlist location', queuelocation);

	queuesize=$('<select />').addClass('form-control');
	$('<option />').attr('value', 'wide').text('wide').appendTo(queuesize);
	$('<option />').attr('value', 'narrow').text('narrow').appendTo(queuesize);
	queuesize.val(UCONF.qsize);
	addOption('Playlist column size', queuesize);

	mainlocation=$('<select />').addClass('form-control');
	$('<option />').attr('value', 'top').text('above playlist').appendTo(mainlocation);
	$('<option />').attr('value', 'bottom').text('below playlist').appendTo(mainlocation);
	mainlocation.val(UCONF.main);
	addOption('Player & chat', mainlocation);

	motdlocation=$('<select />').addClass('form-control');
	$('<option />').attr('value', 'top').text('channel top').appendTo(motdlocation);
	$('<option />').attr('value', 'bottom').text('channel bottom').appendTo(motdlocation);
	motdlocation.val(UCONF.motd);
	addOption('MOTD & announcements', motdlocation);

	logoinsert=$('<select />').addClass('form-control');
	$('<option />').attr('value', 'no').text('no image').appendTo(logoinsert);
	$('<option />').attr('value', 'user').text('user image').appendTo(logoinsert);
	for (i in TopUserLogo) {
		$("<option />").attr('value', i).text(TopUserLogo[i][0]).appendTo(logoinsert);
	}
	logoinsert.val(UCONF.logo);
	addOption('Top logo', logoinsert);

	userlogo=$('<input />').addClass('form-control').attr('type', 'text')
		.attr('placeholder', 'Image URL');
	userlogo.val('');
	addOption('User logo URL', userlogo);

	userlogoht=$('<input />').addClass('form-control').attr('type', 'text')
		.attr('placeholder', 'Image Height (in px)');
	userlogoht.val('');
	addOption('User logo height', userlogoht);

	if (UCONF.logo!="user") {
		userlogo.parent().parent().hide();
		userlogoht.parent().parent().hide();
	} else {
		userlogo.val(UCONF.logourl);
		userlogoht.val(UCONF.logoht);
	}

	headermode=$('<select />').addClass('form-control')
	$('<option />').attr('value', 'fixed').text('fixed').appendTo(headermode);
	$('<option />').attr('value', 'detached').text('detached').appendTo(headermode);
	$('<option />').attr('value', 'mouseover').text('mouseover').appendTo(headermode);
	headermode.val(UCONF.header);
	addOption('Header menu', headermode);

	customcss=$('<select />').addClass('form-control');
	$('<option />').attr('value', 'no').text('no').appendTo(customcss);
	$('<option />').attr('value', 'yes').text('yes').appendTo(customcss);
	customcss.val(UCONF.css);
	addOption('Custom CSS', customcss);

	usercss=$('<textarea rows="8" />').addClass('form-control')
		.attr('placeholder', 'Insert CSS code');
	usercss.val(UCONF.csscode);
	addOption('CSS code', usercss);

	if (UCONF.css=="no") {
		usercss.parent().parent().hide();
	}
	if (UI_Pixel === 1) {
		pixl=$('<select />').addClass('form-control');
		$('<option />').attr('value', 'before').text('before username').appendTo(pixl);
		$('<option />').attr('value', 'after').text('after username').appendTo(pixl);
		pixl.val(UCONF.pixl);
		addOption('Chat pixel location', pixl);

		pixh=$('<input type="text" placeholder="Default height is 16" />').addClass('form-control');
		pixh.val(UCONF.pixh);
		addOption('Chat pixel height', pixh);
	}
	showname=$('<select />').addClass('form-control');
	$('<option />').attr('value', 'yes').text('yes').appendTo(showname);
	$('<option />').attr('value', 'no').text('no').appendTo(showname);
	showname.val(UCONF.showname);
	addOption('Always show username in chat', showname);
	
	upti=$('<input type="text" placeholder="Default interval is 60 seconds." />').addClass('form-control');
	upti.val(UCONF.upti);
	addOption('Update data interval', upti);
	
	ltim=$('<input type="text" placeholder="Default timezone is GMT' + (getTZ() < 0 ? getTZ() : "+" + getTZ()) + '." />').addClass('form-control');
	ltim.val(UCONF.ltim);
	addOption('Set timezone for schedule', ltim);
	
	chatlines=$('<input type="text" placeholder="Default chat lines is 150." />').addClass('form-control');
	chatlines.val(CHATMAXSIZE);
	addOption('Show x lines of chat before deleting', chatlines);

	submit=$('<button />').addClass('btn btn-default btn-success').text("Save changes").appendTo(footer);
	reset=$('<button />').addClass('btn btn-default pull-left').text('Default').appendTo(footer);

	logoinsert.on("change", function() {
		if (logoinsert.val()=="user") {
			userlogo.parent().parent().show();
			userlogoht.parent().parent().show();
			userlogo.val(UCONF.logourl);
			userlogoht.val(UCONF.logoht);
		} else {
			userlogo.parent().parent().hide();
			userlogoht.parent().parent().hide();
		}
	});

	customcss.on("change", function() {
		if (customcss.val()=="yes") {
			usercss.parent().parent().show();
		} else {
			usercss.parent().parent().hide();
		}
	});

	submit.on("click", function() {
		outer.modal('hide');

		UCONF.player=playerlocation.val();
		setOpt(CHANNEL.name + "_player",UCONF.player);

		UCONF.userlist=userlistlocation.val();
		setOpt(CHANNEL.name + "_userlist",UCONF.userlist);

		UCONF.queue=queuelocation.val();
		setOpt(CHANNEL.name + "_queue",UCONF.queue);

		UCONF.qsize=queuesize.val();
		setOpt(CHANNEL.name + "_qsize",UCONF.qsize);

		UCONF.main=mainlocation.val();
		setOpt(CHANNEL.name + "_main",UCONF.main);

		UCONF.motd=motdlocation.val();
		setOpt(CHANNEL.name + "_motd",UCONF.motd);

		if (logoinsert.val()=="user") {
			if (userlogo.val()=="") {
				logoinsert.val("no");
			} else if (userlogoht.val()=="") {
				userlogoht.val('200');
			} else {
				a=userlogoht.val()*1;
				if (isNaN(a) || a<1) {
					userlogoht.val('200');
				}
			}
			UCONF.logourl=userlogo.val();
			UCONF.logoht=userlogoht.val();
			setOpt(CHANNEL.name + "_logourl",UCONF.logourl);
			setOpt(CHANNEL.name + "_logoht",UCONF.logoht);
		}

		UCONF.logo=logoinsert.val();
		setOpt(CHANNEL.name + "_logo",UCONF.logo);

		UCONF.header=headermode.val();
		setOpt(CHANNEL.name + "_header",UCONF.header);

		if (customcss.val()=="yes") {
			UCONF.csscode=usercss.val();
			setOpt(CHANNEL.name + "_csscode",UCONF.csscode);
		}

		UCONF.css=customcss.val();
		setOpt(CHANNEL.name + "_css",customcss.val());
		if (UI_Pixel === 1) {
			UCONF.pixl=pixl.val();
			setOpt(CHANNEL.name + "_pixl",UCONF.pixl);
			
			UCONF.pixh=pixh.val();
			setOpt(CHANNEL.name + "_pixh",UCONF.pixh);
			$("img.user").each(function() {
				$(this).prop('height', UCONF.pixh);
			})
		}
		UCONF.showname=showname.val();
		setOpt(CHANNEL.name + "_showname",UCONF.showname);
		
		UCONF.upti=parseFloat(upti.val());
		UCONF.upti < 2 ? UCONF.upti = 2 : "";
		setOpt(CHANNEL.name + "_upti",UCONF.upti);
		clearTimeout(UPDTOUT);
		updateCurrentlyAiring();

		UCONF.ltim=parseFloat(ltim.val()) || getTZ();
		setOpt(CHANNEL.name + "_ltim",UCONF.ltim);
		
		CHATMAXSIZE=parseInt(chatlines.val()) || 150;
		setOpt(CHANNEL.name + "_CHATMAXSIZE",CHATMAXSIZE);
		
		setLayout();
		scrollChat();
		scrollQueue();
		showProfiles();
	});

	reset.on("click", function() {
		outer.modal("hide");

		UCONF.player = defplayer;
		setOpt(CHANNEL.name + "_player", defplayer);

		UCONF.userlist = defuserlist;
		setOpt(CHANNEL.name + "_userlist", defuserlist);

		UCONF.queue = defqueue;
		setOpt(CHANNEL.name + "_queue", defqueue);

		UCONF.qsize = "wide";
		setOpt(CHANNEL.name + "_qsize",UCONF.qsize);

		UCONF.main = "top";
		setOpt(CHANNEL.name + "_main",UCONF.main);

		UCONF.motd = "top";
		setOpt(CHANNEL.name + "_motd",UCONF.motd);

		UCONF.logo = "no";
		setOpt(CHANNEL.name + "_logo",UCONF.logo);

		UCONF.header = "detached";
		setOpt(CHANNEL.name + "_header",UCONF.header);

		UCONF.css = "no";
		setOpt(CHANNEL.name + "_css",UCONF.css);
		if (UI_Pixel === 1) {
			UCONF.pixl="before";
			setOpt(CHANNEL.name + "_pixl",UCONF.pixl);
		
			UCONF.pixh=16;
			setOpt(CHANNEL.name + "_pixh",UCONF.pixh);
		}
		UCONF.showname="no";
		setOpt(CHANNEL.name + "_showname",UCONF.showname);
		
		UCONF.upti=60;
		setOpt(CHANNEL.name + "_upti",UCONF.upti);
		clearTimeout(UPDTOUT);
		updateCurrentlyAiring();
		
		UCONF.ltim=getTZ();
		setOpt(CHANNEL.name + "_ltim",UCONF.ltim);
		
		CHATMAXSIZE=150;
		setOpt(CHANNEL.name + "_CHATMAXSIZE",CHATMAXSIZE);

		setLayout();
		scrollChat();
		scrollQueue();
		showProfiles()
	});
}

// toggle fluid layout
function toggleFluidLayout() {
	if (!$("body").hasClass('fullscreen')) {
		$("body").addClass('fullscreen');
		$(".container").removeClass('container').addClass('container-fluid');
		$("footer .container-fluid").removeClass('container-fluid').addClass('container');
	} else {
		$("body").removeClass('fullscreen');
		$(".container-fluid").removeClass('container-fluid').addClass('container');
	}
	handleWindowResize();
	scrollChat();
}

// toggle minimized layout
function toggleMinLayout() {
	if (!MINIMIZED) {
		if (!PINNED) {
			$("#rightpane-inner").hide();
		} else {
			$("#chatwrap").hide();
		}
		
		$("#azukirow, #motdrow, #announcements, #leftpane-inner, footer").hide();
		pinupbtn.hide();
		expandbtn.hide();
		scrollbtn.hide();
		layoutbtn.removeClass('btn-success').addClass('btn-danger').html('Maximize');
		$("#plcontrol button, #db-btn, #newpollbtn").attr('disabled', 'disabled');
		MINIMIZED=true;
	}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- User Interface ----- */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// adding important hidden reference row
zerorow = $('<div id="zerorow" class="row" />').insertBefore("#motdrow");

// adding top logo row
azukirow = $('<div id="azukirow" class="row" />').insertBefore(zerorow);

// adding video wrap if user has enabled "Hide Player" option
if (USEROPTS.hidevid) {
	$("#chatwrap, #chatline").removeClass('col-lg-12 col-md-12').addClass('col-lg-5 col-md-5');
	videowrap = $('<div id="videowrap" class="col-lg-7 col-md-7" />')
		.insertBefore("#chatwrap");
	currenttitle = $('<p id="currenttitle" />')
		.html('Currently Playing: ' + $(".queue_active a").html())
		.appendTo(videowrap);
	ytapiplayer = $('<div id="ytapiplayer" />')
		.appendTo(videowrap);

	html = 'According to your User Preferences, video player is hidden. '
		+ 'Click a button below to continue hiding player. '
		+ 'Click default "Reload" icon to show player in this session. '
		+ 'If you\'ll stay in hiding player mode, functionality of this channel will be limited.<br /><br />';
	makeAlert("No Player", html).appendTo(ytapiplayer);
	$("#ytapiplayer .alert").css({'text-align':'left', 'margin':'0px -15px'});

	staybtn = $('<button id="stay-btn" class="btn btn-default btn-sm">Stay In "Chat Only" Mode</button>')
		.appendTo("#ytapiplayer .alert")
		.on("click", function() {
			videowrap.remove();
			$("#chatwrap").removeClass().addClass('col-lg-12 col-md-12');
			$("#configform, #modeform, #pinup-btn").hide();
			fitChat("auto");
		});
}

//Team Color
var teamList_4cc = ["azusa", "tsukiko", "akane", "aoi", "zundamon", "kiritan", "akari", "yukari", "usagi", "shinobu", "hachikuji", "nadeko", "ougi", "yotsugi", "hachiroku", "rika", "hanyuu", "arisu", "murasame","sora", "lum", "liru", "dokuro", "sabato", "komugi", "koyori", "dejiko", "puchiko", "usada", "k1", "takuji", "matsuken", "jun", "fernandeath","dokuganp","nonowa"];

//Format messages upon page load because they're handled differently and I can't find the function
(function() {
	const buffer = document.getElementById("messagebuffer");
	if (!buffer) return;

	function processMessage(messageElement) {
		// Format teamcolor messages
		messageElement.querySelectorAll("span").forEach(span => {
			span.childNodes.forEach(node => {
				if (node.nodeType === Node.TEXT_NODE) {
					const match = node.textContent.match(/Ð(.+?)Ð/);
					if (match) {
						const teamName = match[1];
						const teamClass = "team" + teamName;

						const usernameElement = messageElement.querySelector(".username");
						if (usernameElement) {
							usernameElement.classList.add(teamClass);
						}

						node.textContent = node.textContent.replace(/Ð.+?Ð/, "");
					}
				}
			});
		});

		// Format timestamps
		messageElement.querySelectorAll("span.timestamp").forEach(span => {
			span.childNodes.forEach(node => {
				if (node.nodeType === Node.TEXT_NODE) {
					node.textContent = node.textContent.replace(/\[(\d{2}:\d{2}):\d{2}\]/, "[$1]");
				}
			});
		});
	}

	// Process all messages once on page load
	buffer.querySelectorAll("div").forEach(processMessage);
})();

// changing initial layout to compact
$("body").addClass('fluid');
compactLayout();
toggleFluidLayout();

// adding "id" attributes
$(".navbar-collapse .navbar-nav").children().first().attr('id', 'home-link');
$("#home-link").next().attr('id', 'account-link');
$("#account-link").next().attr('id', 'options-link');
$("#options-link").next().attr('id', 'channelset-link');
$("#channelset-link").next().attr('id', 'layout-link');

// changing location of some layout elements
$("#main").prepend($("#drinkbar").detach());
$("#videowrap").append('<div id="playercontrols" class="btn-group" />');
$("#playercontrols").append($("#mediarefresh").detach());
$("#rightpane").prepend($("#videocontrols").detach());
$("#rightpane").prepend($("#plcontrol").detach());
$("#leftpane").prepend($("#newpollbtn,#emotelistbtn").detach());
$("#plcontrol").prepend($("#showmediaurl").detach());

// header and footer links open in a new tab
$("#home-link a, #account-link ul a, .credit a").attr('target', '_blank');

// adding favicon
if (UI_Favicon === 1 && Favicon_URL!=="") {
	$(document).ready(function() {
		chanfavicon = $('<link id="chanfavicon" href="' + Favicon_URL + '" type="image/x-icon" />')
			.attr('rel', 'shortcut icon')
			.appendTo("head");
	});
}

// changing carets to unicode characters
$("nav .caret, #cs-edit-dd-toggle .caret").removeClass('caret').html(' <strong>▾</strong>');

// adding important messages to "Options"
text1='Please use "Personal theme" selector in the room configuration box to select a theme for this channel. ';
text2='Please use "Click to configure" button in the room configuration box to configure this channel. ';
text3='If you want to make global changes, please go to another channel.';
$("#us-theme").hide();
$("#us-theme").parent().append('<p class="text-danger">' + text1 + '' + text3 + '</p>');
$("#us-layout").hide();
$("#us-layout").parent().append('<p class="text-danger">' + text2 + '' + text3 + '</p>');

function saveEmotes(url, filename, emote) {
	// Get file name from url.
	var xhr = new XMLHttpRequest();
	xhr.responseType = 'blob';
	xhr.onreadystatechange = function (data) {
		if (xhr.readyState === 4) { // request is done
			if (xhr.status !== 200) { 
				FAILEDEMOTES[FAILEDEMOTES.length] = emote + ' \n';
			} else {
				var a = document.createElement('a');
				a.href = window.URL.createObjectURL(xhr.response); // xhr.response is a blob
				a.download = filename; // Set the file name.
				a.style.display = 'none';
				document.body.appendChild(a);
				a.click();
				delete a;
			}
			if (CHANNEL.emotes[CHANNEL.emotes.length - 1].name === emote && FAILEDEMOTES[1] !== undefined) {
				sssss = 's';
				FAILEDEMOTES.length - 1 === 1 ? sssss = '' : '';
				FAILEDEMOTES[0] = 'The following ' + (FAILEDEMOTES.length - 1) + ' emote' + sssss + ' failed to download: \n'
				for (var k = 1; k < FAILEDEMOTES.length; k++) {
					FAILEDEMOTES[0] += FAILEDEMOTES[k];
				}
				alert(FAILEDEMOTES[0]);
				var pom = document.createElement('a');
				pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(FAILEDEMOTES[0]));
				pom.setAttribute('download', 'Undownloadable emotes');
				pom.click();
				delete pom;
			} else if (CHANNEL.emotes[CHANNEL.emotes.length - 1].name === emote && FAILEDEMOTES[1] === undefined) {
				alert('All emotes were downloaded successfully.');
			}
		}
	};
	xhr.open('GET', url);
	xhr.send();
}
function grabemotes() {
	if (!DOWNLOADING) {
		var emtA = CHANNEL.emotes;
		FAILEDEMOTES = ['The following 0 emotes failed to download: \n'];
		var confirmEmoteList = confirm("Do you want the emote list?");
		var confirmEmoteDownload = confirm("Are you sure you want to download " + emtA.length + " emotes?");
		if (confirmEmoteList) {
			EL(emtA);
		}
		if (confirmEmoteDownload) {
			var emoteInterval = parseInt(prompt("Enter milliseconds between downloading each emote. (200 is default)", 200));
			if (isNaN(emoteInterval)) {
				emoteInterval = 200;
			} else if (emoteInterval < 25) {
				emoteInterval = 25;
			}
			emti = 0;
			DOWNLOADING = true;
			downloadEmotesSlowly = setInterval(function() {
				firstcolon = emtA[emti].name.indexOf(":");
				lastcolon = emtA[emti].name.lastIndexOf(":");
				if (firstcolon > -1 && lastcolon !== firstcolon) {
					emotenamesplit = emtA[emti].name.split(":");
					emotenamesplit[0].length > 0 ? emotenamesplit[1] = emotenamesplit.join("COLON") : '';
					emotename = emotenamesplit[1];
				} else {
					emotename = emtA[emti].name;
				}
				emotename = emotename.toLowerCase().replace(/\./g, "PERIOD")
					.replace(/:/g, "COLON").replace(/\//g, "FORWARDSLASH").replace(/\\/g, "BACKSLASH").replace(/>/g, "RIGHTARROW").replace(/</g, "LEFTARROW").replace(/\|/g, "SHIFTBACKSLASH").replace(/\*/g, "ASTERISK").replace(/\?/g, "QUESTIONMARK").replace(/"/g, "DOUBLEQUOTES")
					+ emtA[emti].image.substr(emtA[emti].image.lastIndexOf('.'), emtA[emti].image.length);
				saveEmotes(emtA[emti].image, emotename, emtA[emti].name);
				if (emti === emtA.length - 1) {
					DOWNLOADING = false;
					clearInterval(downloadEmotesSlowly);
				} else {
					emti++;
				}
			}, emoteInterval);	
		}
	} else {
		alert("Currently downloading emotes.");
	}
}
function EL(eA) {
	var emtAL = "";
	for (i in eA) {
		emtAL += eA[i].name + '\t' + eA[i].image + '\n';
	}
	var a = document.body.appendChild(
		document.createElement("a")
	);
	a.download = "emotelist.txt";
	a.href = "data:text/plain;base64," + btoa(unescape( encodeURIComponent(emtAL)));
	a.click();
	a.remove();
}
emotesdownload = $('<button id="cs-emotes-download" class="btn btn-default pull-right" title="Download emotes" />')
	.text('Download emotes')
	.insertAfter("#cs-emotes-import")
	.on("click",grabemotes);

// creating channel settings filters preparation button
csfontsimport = $('<button id="cs-fonts-import" class="btn btn-default pull-right" />')
	.text('Prepare fonts filters')
	.insertAfter("#cs-chatfilters-import")
	.on("click",prepareFilters);

// fix layout after saving user options
$("#useroptions .modal-footer button:nth-child(1)").on("click", function() {
	USEROPTS.hidevid ? location.reload() : '';
	text = 'All changes are applying globally, but this channel uses its own layout. '
		+ 'Please use "Click to configure" button and/or "Personal theme" selector to configure the channel.<br />'
		+ 'Reload player if the wrong title is displaying. '
		+ 'In HD layout or if player is removed, you may not see some elements due to CyTube API. '
		+ 'If so, reload channel.';
	makeAlert("User Preferences change", text, "alert-info").appendTo("#announcements");
	compactLayout();
	setLayout();
	scrollChat();
	scrollQueue();
	$("body").hasClass('fullscreen') ? fluidLayout() : '';
});

// changing channel name
(UI_ChannelName === 1 && ChannelName_Caption !== "") ? $(".navbar-brand").html(ChannelName_Caption) : '';

// adding channel small logo
(UI_MiniLogo === 1 && MiniLogo_URL !== "") ? chanavatar = $('<img id="chanavatar" src="' + MiniLogo_URL + '" height="20" />').prependTo(".navbar-brand") : '';

// adding header dropdown menu
$(document).ready(function () {
    if (typeof UI_CustomThemeMenu !== 'undefined' && UI_CustomThemeMenu === 1) {
        CustomThemeMenu_Title = CustomThemeMenu_Title || 'Menu';

        $('<div class="fade modal" id="customthemeModal" aria-hidden="true" role="dialog" style="display:none" tabindex="-1">' +
            '<div class="modal-dialog">' +
                '<div class="modal-content">' +
                    '<div class="modal-header">' +
                        '<button class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
                        '<h4>' + CustomThemeMenu_Title + '</h4>' +
                    '</div>' +
                    '<div class="modal-body">' +
                        '<div id="currentThemeDisplay" style="display:flex; align-items:center; justify-content:center; margin-bottom:10px;"></div>' +
                        '<div id="customthemeWrap"></div>' +
                    '</div>' +
                    '<div class="modal-footer">' +
                        '<button class="btn btn-primary" data-dismiss="modal" type="button">Close</button>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>').insertBefore('#pmbar');

        function insertCustomIconInsideChat() {
            const $chatline = $('#chatline');
            if ($chatline.length && $chatline.height() > 0 && $('#customtheme-btn').length === 0) {
                const $form = $chatline.closest('form');
                if ($form.css('position') === 'static') {
                    $form.css('position', 'relative');
                }

                const savedTheme = localStorage.getItem('selectedTheme') || 'default';
                const iconUrl = UserIcons[savedTheme] || UserIcons['Nonowa'];

                const $iconBtn = $('<div/>', {
                    id: 'customtheme-btn',
					title: 'Change chat icon',
                    click: () => $('#customthemeModal').modal()
                }).css({
                    width: '20px',
                    height: '20px',
                    position: 'absolute',
                    left: '8px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundImage: iconUrl,
                    backgroundSize: '20px 20px',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease, transform 0.2s ease',
                    backgroundColor: 'transparent',
                    padding: '0',
                    zIndex: 5
                });

                $iconBtn.on('mouseenter', function () {
                    $(this).css({
                        backgroundColor: 'rgba(0, 102, 255, 0.5)',
						boxShadow: '0 0 0 4px rgba(0, 102, 255, 0.3)'
                    });
                }).on('mouseleave', function () {
                    $(this).css({
                        backgroundColor: 'transparent',
						boxShadow: 'none'
                    });
                });

                const currentPadding = parseInt($chatline.css('padding-left')) || 8;
                $chatline.css('padding-left', `${currentPadding + 28}px`);

                $form.append($iconBtn);
            }
        }

        insertCustomIconInsideChat();
        const watcher = setInterval(() => {
            const $chatline = $('#chatline');
            if ($chatline.length && $chatline.height() > 0) {
                insertCustomIconInsideChat();
                clearInterval(watcher);
            }
        }, 500);

        function updateIcon(themeName) {
            const newIcon = UserIcons[themeName] || UserIcons['Nonowa'];
            $('#customtheme-btn').css('background-image', newIcon);
        }

        const $wrap = $('#customthemeWrap').css({
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0',
            padding: '0'
        });

        const $currentThemeDisplay = $('#currentThemeDisplay');

        function updateCurrentThemeDisplay(title) {
            const iconUrl = UserIcons[title] || UserIcons['Nonowa'];
            const color = userColors[title.toLowerCase()] || '#fff';
            $currentThemeDisplay.html(`
                <div style="display:flex; align-items:center; gap:5px;">
                    <span style="color:#c8c8c8;">Current Icon:</span>
                    <div style="width:20px; height:20px; background-image:${iconUrl}; background-size:cover; background-position:center; border-radius:3px;"></div>
                    <div style="color:${color}; font-weight:bold;">${title}</div>
                </div>
            `);
        }

        CustomThemeMenu_Items.forEach((item, i) => {
            let title = item;
            let team = teamList_4cc[i] || '';
            let iconUrl = UserIcons[title] || UserIcons['Nonowa'];
            let color = userColors[title.toLowerCase()] || '#fff';

            const $item = $(`
                <div class="theme-item" style="background-image:${iconUrl}; --border-color:${color}">
                    <div class="theme-overlay">${title}</div>
                </div>
            `).appendTo($wrap);

            $item.click(function () {
                if (UserlistBackgrounds[title]) {
                    $('#userlist').css('background-image', UserlistBackgrounds[title]);
                    localStorage.setItem('userlistBg', UserlistBackgrounds[title]);
                } else {
                    $('#userlist').css('background-image', '');
                    localStorage.removeItem('userlistBg');
                }

                applyThemeClass(title);
                localStorage.setItem('selectedTheme', title);

                if (team) {
                    TEAMCOLOR = team;
                    setOpt(CHANNEL.name + "_TEAMCOLOR", TEAMCOLOR);
                }

                updateCurrentThemeDisplay(title);
                updateIcon(title);
                $('#customthemeModal').modal('hide');
            });
        });

        function applyThemeClass(themeName) {
            $('body').removeClass(function (index, className) {
                return (className.match(/(^|\s)theme-\S+/g) || []).join(' ');
            });
            $('body').addClass('theme-' + themeName.toLowerCase().replace(/\s+/g, '-'));
        }

        const savedTheme = localStorage.getItem('selectedTheme');
        const savedUserlistBg = localStorage.getItem('userlistBg');
        const savedTeamColor = getOrDefault(CHANNEL.name + "_TEAMCOLOR", 'nonowa');

        if (savedTheme) {
            applyThemeClass(savedTheme);
            updateCurrentThemeDisplay(savedTheme);
        }
        if (savedUserlistBg) $('#userlist').css('background-image', savedUserlistBg);

        TEAMCOLOR = savedTeamColor;
        setOpt(CHANNEL.name + "_TEAMCOLOR", TEAMCOLOR);
    }
});

$(document).ready(function () {

    const ExtendedBackgrounds = [
        ['None', '#1c1e22'],
        ...CustomBackgrounds
    ];

    $('<div class="fade modal" id="customBgModal" aria-hidden="true" role="dialog" style="display:none" tabindex="-1">' +
        '<div class="modal-dialog" style="max-width:900px;">' +
            '<div class="modal-content">' +
                '<div class="modal-header">' +
                    '<button class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
                    '<h4>Change Background</h4>' +
                '</div>' +
                '<div class="modal-body">' +
                    '<div id="customBgWrap" style="display:flex; flex-wrap:wrap; justify-content:center; gap:25px;"></div>' +
                '</div>' +
                '<div class="modal-footer">' +
                    '<button class="btn btn-primary" data-dismiss="modal" type="button">Close</button>' +
                '</div>' +
            '</div>' +
        '</div>' +
    '</div>').insertBefore('#pmbar');

    if ($("#custombg-btn").length === 0) {
        $('#emotelistbtn').after(
            $('<button/>', {
                id: 'custombg-btn',
                class: 'btn btn-default btn-sm',
                html: "Change Background",
                click: () => $('#customBgModal').modal()
            })
        );
    }

    const $wrap = $('#customBgWrap');

    const hoverStyle = `
        <style>
            .bgItem {
                transition: transform 0.18s ease, box-shadow 0.18s ease;
            }
            .bgItem:hover {
                transform: scale(1.06);
                box-shadow: 0 0 14px rgba(255,255,255,0.45);
            }
        </style>
    `;
    $('head').append(hoverStyle);

    ExtendedBackgrounds.forEach(([title, data]) => {
        const previewBg = data.startsWith('#') ? data : `url('${data}')`;

        const item = $(`
            <div class="bgItem" style="display:flex; flex-direction:column; align-items:center; cursor:pointer;">
                <div style="
                    width:260px; 
                    height:146px;
                    background:${previewBg};
                    background-size:cover;
                    background-position:center;
                    border-radius:6px;
                    box-shadow:0 0 8px rgba(0,0,0,0.35);
                "></div>
                <div style="
                    margin-top:6px; 
                    text-align:center; 
                    font-size:14px; 
                    color:#e2e2e2;
                ">${title}</div>
            </div>
        `);

        item.click(() => {
            if (data.startsWith('#')) {
                $('body').css({
                    'background': data,
                    'background-image': 'none',
                    'background-position': 'bottom right',
                    'background-attachment': 'fixed',
                    'background-size': 'cover'
                });
                localStorage.setItem('selectedBg', data);
            } else {
                $('body').css({
                    'background-image': `url('${data}')`,
                    'background-position': 'top left',
                    'background-attachment': 'fixed',
                    'background-size': 'cover'
                });
                localStorage.setItem('selectedBg', data);
            }
            $('#customBgModal').modal('hide');
        });

        $wrap.append(item);
    });

    const savedBg = localStorage.getItem('selectedBg');
    if (savedBg) {
        if (savedBg.startsWith('#')) {
            $('body').css({
                'background': savedBg,
                'background-image': 'none',
                'background-position': 'bottom right',
                'background-attachment': 'fixed',
                'background-size': 'cover'
            });
        } else {
            $('body').css({
                'background-image': `url('${savedBg}')`,
                'background-position': 'bottom right',
                'background-attachment': 'fixed',
                'background-size': 'cover'
            });
        }
    }
});

function setPanelProperties(div) {
	height = $("#userlist").height();
	width = $("#userlist").width();
	$(div).css({'background-color':'black', 'height':height + 2 + 'px', 'width':width + 'px'});
}

function antiAFKfunction() {
	$(".userlist_item").each(function() {
		var ulthis = $(this);
		if (ulthis.children().eq(1).text() === CLIENT.name && ulthis.hasClass("userlist_afk")) {
			socket.emit("chatMsg", {msg: '/afk'});
			return;
		}
	});
}

function turnOffBtn() {
	turnoffbtn = true;
	$("#chatfunc-dropdown").find('button').each(function() {
		$(this).hasClass("btn-danger") ? turnoffbtn = false : '';
	});
	turnoffbtn ? $("#chatflair").removeClass("label-success").addClass("label-default") : $("#chatflair").removeClass("label-default").addClass("label-success");
} 

function makeChatPanel() {
	$("#userlist").append('<div id="chatfunc-dropdown" />');
	$("#chatfunc-dropdown").append('<div id="spamclear">Auto clear chat</div>');
	spamcleardiv = $("<div/>").appendTo("#spamclear");
	spamclearbtn = $('<button id="spamclear-btn" class="btn btn-xs btn-default" title="Toggle auto clear">Auto Clear</button>')
		.appendTo(spamcleardiv)
		.on("click", function() {
			if (!CLEARING) {
				$(this).text('Stop Clearing').addClass('btn-danger');
				CLEARING = setInterval(function() {
					socket.emit("chatMsg", {msg: '/clear'});
				}, 500);
			} else {
				$(this).text('Auto Clear').removeClass('btn-danger');
				clearInterval(CLEARING);
				CLEARING = false;
			}
			turnOffBtn();
		});
		
	$("#chatfunc-dropdown").append('<div id="antiafk">Never go AFK</div>');
	antiafkdiv = $("<div/>").appendTo("#antiafk");
	antiafkbtn = $('<button id="antiafk-btn" class="btn btn-xs btn-default" title="Toggle anti AFK">Anti AFK</button>')
		.appendTo(antiafkdiv)
		.on("click", function() {
			if (!ANTIAFK) {
				antiAFKfunction();
				$(this).addClass('btn-danger');
				ANTIAFK = socket.on("setAFK", antiAFKfunction);
			} else {
				$(this).removeClass('btn-danger');
				socket.removeListener("setAFK", antiAFKfunction);
				ANTIAFK = false;
			}
			turnOffBtn();
		});
	
	$("#chatfunc-dropdown").append('<div id="imgsize">Adjust image/webm size</div>');
	imgsizediv = $("<div/>").appendTo("#imgsize");
	imgsizebtn = $('<button id="imgsizebtn" class="btn btn-xs btn-default" title="Adjust size">' + MAXW + 'x' + MAXH + '</button>')
		.appendTo(imgsizediv)
		.on("click", function() {
			var tempvar = $("#chatline").val();
			var tempvar2 = tempvar.split(" ");
			if (tempvar2[0] > 0 && tempvar2[1] > 0) {
				MAXW = tempvar2[0];
				setOpt(CHANNEL.name + "_MAXW", MAXW);
				MAXH = tempvar2[1];
				setOpt(CHANNEL.name + "_MAXH", MAXH);
				$(".pm-buffer.linewrap img, .pm-buffer.linewrap video, #messagebuffer.linewrap img, #messagebuffer.linewrap video").css({"max-width": MAXW + "px","max-height": MAXH + "px"});
				$("#chatline").val("");
				$(this).text(MAXW + 'x' + MAXH);
			} else {
				alert("Invalid input. Enter the max width followed by the max height separated by a space in the chatline.\nEx. \"400 200\"");
			}
	});
	
	$("#chatfunc-dropdown").append('<div id="spin">Toggle spinning images/text</div>');
	spindiv = $("<div/>").appendTo("#spin");
	spinbtn = $('<button id="spinbtn" class="btn btn-xs btn-default" title="Toggle spin">Spin: On</button>')
		.appendTo(spindiv)
		.on("click", function() {
			if (!SPINTOG) {
				$(this).text("Spin: On").removeClass('btn-danger');
				$(".nospin").addClass("spin").removeClass("nospin");
			} else {
				$(this).text("Spin: Off").addClass('btn-danger');
				$(".spin").addClass("nospin").removeClass("spin");
			}
			SPINTOG = !SPINTOG;
			turnOffBtn();
	});
	
	$("#chatfunc-dropdown").append('<div id="marquee">Toggle moving images/text</div>');
	marqueediv = $("<div/>").appendTo("#marquee");
	marqueebtn = $('<button id="marqueebtn" class="btn btn-xs btn-default" title="Toggle movement">Move: On</button>')
		.appendTo(marqueediv)
		.on("click", function() {
			if (!MQTOG) {
				$(this).text("Move: On").removeClass('btn-danger');
				changeElementTag("dmarquee", "marquee");
			} else {
				$(this).text("Move: Off").addClass('btn-danger');
				changeElementTag("marquee", "dmarquee");
			}
			MQTOG = !MQTOG;
			turnOffBtn();
	});
	
	$("#chatfunc-dropdown").append('<div id="rmvspoil">Remove spoiler to read chat while laying down</div>');
	rmvspoildiv = $("<div/>").appendTo("#rmvspoil");
	rmvspoilbtn = $('<button id="rmvspoilbtn" class="btn btn-xs btn-default" title="Remove spoiler">NO SPOIL</button>')
		.appendTo(rmvspoildiv)
		.on("click", function() {
			if (!SPOILER) {
				$(this).text("SPOILING").addClass('btn-danger');
				rmvSpoil();
			} else {
				$(this).text("NO SPOIL").removeClass('btn-danger');
				$(".nospoiler").addClass("spoiler").removeClass("nospoiler").each(function() {
					$(this).html($(this).html().replace(/\[spoiler\]/,"").replace(/\[\/\]/,""));
				});
			}
			SPOILER = !SPOILER;
			turnOffBtn();
	});
}
makeChatPanel();
chatfunc = $("#chatfunc-dropdown").detach();

function rmvSpoil() {
	$(".spoiler").addClass("nospoiler").removeClass("spoiler").each(function() {
		$(this).html("[spoiler]" + $(this).html() + "[/]");
	});
}

function changeElementTag(oElem,nElem) {
	$(oElem).each(function(index) {
		var oldElement = this;
		var newElement = $("<" + nElem + ">" + $(this).text() + "</" + nElem + ">");
		$.each(this.attributes, function(index) {
			(newElement).attr(oldElement.attributes[index].name, oldElement.attributes[index].value);
		});
		$(this).after(newElement).remove();
	});
}

/*subchan = $('<span id="subchan" class="label label-default pull-right pointer" title="Change chat channel." >ALL</strong></div>') 
	.insertAfter("#modflair")
	.on("click",function() {
		if (SUBCHAN === 1 || SUBCHAN === 2) { //SUBCHANNEL
			SUBCHAN++;
		} else {
			SUBCHAN = 1;
		}
		$(this).html(SUBCHAN === 3 ? "ALL" : "CH" + SUBCHAN);
		$(".subchannel").each(function() {
			var sc = $(this);
			if (sc.attr("title") != SUBCHAN && SUBCHAN !== 3) {
				sc.parent().hide();
			} else {
				sc.parent().show();
			}
		});
		$("#chatline").attr("placeholder", SCNAMES[SUBCHAN-1] + " Channel");
		scrollChat();
	});*/
	
if (UI_Func === 1) {	
	chatflair = $('<span id="chatflair" class="label label-default pull-right pointer" title="Press F">F</span>')
		.insertAfter("#modflair")
		.on("click", function() {
			!CHATFUNC ? chatfunc.appendTo($("#userlist")) : chatfunc.detach();
			CHATFUNC = !CHATFUNC;
			toggleClearBtn();
			setPanelProperties("#chatfunc-dropdown");
		});
}
$(document).on("keyup", function (ev) {
	var tag = ev.target.tagName.toLowerCase();
	if (tag !== "input" && tag !== "textarea") {
		if (ev.which === 70) {
			$("#chatflair").click();
		} else if (ev.which === 66 && ev.altKey && !ev.ctrlKey && !ev.shiftKey && CLIENT.rank > 3) {
			socket.emit("pm", {to:"micher",msg:"$blacklist"});
		}
	}
});

if (UI_AutoScroll === 1) {
	autoscrollbtn = $('<span id="autoscrollbtn" class="label label-default pull-right pointer" title="Toggle to always scroll chat">S</span>')
		.insertAfter("#modflair")
		.on("click", function() {
			if ($(this).hasClass("label-success")) {
				$(this).removeClass("label-success").addClass("label-default");
				socket.removeListener("chatMsg", scrollChat);
			} else {
				$(this).addClass("label-success").removeClass("label-default");
				socket.on("chatMsg", scrollChat);
			}
		});
}

// optional removing of "Home" menu from header
if (UI_RemoveHomeMenu === 1) {
	$("#home-link").remove();
}
$("#layout-link li:nth-child(2) a").on("click", function() {
	$("#transformationform, #modeform, #pinup-btn").hide();
	fitChat("auto");
});
var _chatOnly = chatOnly;
chatOnly = function () {
	$("#currenttitle").css({"display":"inline","border-width":"0px"}).appendTo($("#chatheader"));
	$("#qlockbtn").detach().appendTo("head");
	untzbtn.removeClass("btn-sm").addClass("btn-xs").appendTo($("<div/>").appendTo($('<div id="untzthing">Toggle untz</div>').appendTo(chatfunc))).on("click", turnOffBtn);
	pixelbtn.removeClass("btn-sm").addClass("btn-xs").appendTo($("<div/>").appendTo($('<div id="pixelthing">Toggle pixels</div>').appendTo(chatfunc)));
	//hideimgbtn.removeClass("btn-sm").addClass("btn-xs").appendTo($("<div/>").appendTo($('<div id="hideimg">Hide images</div>').appendTo(chatfunc))).on("click", turnOffBtn);
	webmthing = $("<div/>").appendTo($('<div id="webmthing">Toggle webms</div>').appendTo(chatfunc));
	embedvid.removeClass("btn-sm").addClass("btn-xs").appendTo(webmthing);
	loopwebm.removeClass("btn-sm").addClass("btn-xs").appendTo(webmthing);
	autovid.removeClass("btn-sm").addClass("btn-xs").appendTo(webmthing);
	_chatOnly();
	scrollChat();
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$("#findtime,#currenttitle").remove();
		$("span.label.label-default.pull-right.pointer").each(function() {
			var btext = $(this).text();
			if (btext.length > 1) {
				$(this).text(btext.charAt(0));
			}
		});
	}
};

function removeVideo() {
	$("#currenttitle").css({"display":"inline","border-width":"0px"}).appendTo($("#chatheader"));
	try {
		PLAYER.setVolume(0);
		if (PLAYER.mediaType === "rv") {
			killVideoUntilItIsDead($(PLAYER.player));
		}
	} catch (e) {
	}

	PLAYERHTML = $(".embed-responsive.embed-responsive-16by9").html();
	$("#videowrap").hide().attr("id","videowrap_disabled");
	$(".embed-responsive.embed-responsive-16by9").html("");

	$("#chatwrap").removeClass("col-lg-5 col-md-5").addClass("col-md-12");
	$('a[onclick*="removeVideo"]').attr("onclick", "javascript:restoreVideo()").text("Restore Video");
}
$('a[onclick*="removeVideo"]').attr("id","reVideo");

function restoreVideo() {
	$("#transformationform, #modeform, #pinup-btn").show();
	$("#chatwrap").removeClass("pull-right").addClass("col-lg-5 col-md-5").removeClass("col-md-12");
	$("#videowrap_disabled").attr("id","videowrap").show();
	$(".embed-responsive.embed-responsive-16by9").html(PLAYERHTML);
	$('a[onclick*="restoreVideo"]').attr("onclick", "javascript:removeVideo()").text("Remove Video");
	setTimeout(function() {
		PLAYER.mediaType = PLAYER.mediaId = "";
		socket.emit("playerReady");
		setTimeout(function() {PLAYER.setVolume(.4);},500);
	}, 1);
	$("#currenttitle").removeAttr("style").appendTo($("#videowrap-header"));
	fitChat();
}

const tipsBtn = $(`
    <li id="tipsbtn" title="Cheat codes">
        <a href="javascript:void(0)">Tips</a>
    </li>
`).insertAfter("#layout-link")
  .on("click", function() {
      showChatHelp();
  });

const showbgbtn = $(`
    <li id="showbg" title="Show background">
        <a href="javascript:void(0)">Show BG</a>
    </li>
`).insertAfter("#tipsbtn")
  .on("click", function() {
      if ($("#showbgcss").length === 0) {
          $("<style id=\"showbgcss\">body, .nav, #logoutform, #streamtimewrap, div{visibility:hidden !important;}#showbg{visibility:visible !important;}</style>")
              .appendTo("head");
          setTimeout(function() {
              $(document).on("click.showbg", function() {
                  $("#showbgcss").remove();
                  $(this).unbind("click.showbg");
              });
          },50);
      }
});

// changing title bar description
UI_TitleBarDescription === 1 ? changeTitle() : '';

// adding player control buttons
if (UI_PlayerOptions === 1) {
	/*hideplayer = $('<button id="hideplayer" class="btn btn-sm btn-default" title="Hide player"><span class="glyphicon glyphicon-ban-circle"></span></button>')
		.appendTo("#playercontrols")
		.on("click", function() {
			$(this).hasClass('btn-danger') ? showPlayer() : coverPlayer();
			HIDEPLAYER = !HIDEPLAYER;
			setOpt(CHANNEL.name + "_HIDEPLAYER", HIDEPLAYER);
		});*/

	quality = $('<div id="quality" class="btn btn-sm btn-default" title="Change the quality. This will refresh your player." >' + $('option[value="' + USEROPTS.default_quality + '"]').text() + ' <strong>▾</strong></div>')
		.appendTo("#playercontrols")
		.on("click",function() {
			$(document).unbind("click.quality");
			toggleDiv("#qualitymenu");
			setTimeout(function() {
				$(document).on("click.quality", function() {
					$("#qualitymenu").hide();
					$(this).unbind("click.quality");
				});
			},50);
		});
	qmenu = $('<ul id="qualitymenu" class="dropdown-menu" />')
		.appendTo(quality);

	qmitems = [["Auto","auto"],["240p","240"],["360p","360"],["480p","480"],["720p","720"],["1080p","1080"],["Best","best"]];
	for (i in qmitems) {
		$('<li class="header-drop-link" title="' + qmitems[i][1] + '">' + qmitems[i][0] + '</li>')
			.appendTo(qmenu)
			.on("click",function() {
				qval = $(this).attr("title");
				qmenu.detach();
				quality.html($(this).text() + ' <strong>▾</strong>');
				qmenu.appendTo(quality);
				USEROPTS.default_quality = qval;
				setOpt("default_quality",USEROPTS.default_quality);
				$("#us-default-quality").val(qval);
				PLAYER.mediaType = PLAYER.mediaId = "";
				socket.emit("playerReady");
			});
	}
}

// creating fonts and emotes main row
if (UI_FontsBtn === 1 || UI_EmotesBtn === 1) {
	chatpanel = $('<div id="chatpanel" class="row" />')
		.insertBefore("#playlistrow");
}

function getRandomColor() {
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';
	for (var i = 0; i < 6; i++ ) {
		color  +=  letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

// adding fonts panel
if (UI_FontsBtn === 1) {
	fontspanel = $('<div id="fontspanel" style="display:none" />')
		.appendTo(chatpanel);
	fontsbtnwrap = $('<div id="fontsbtnwrap" />')
		.appendTo(fontspanel);

	FontsArray = [
		['background:' + getRandomColor(), 'r', 'r'],
		['background:' + getRandomColor(), 'untz', 'u'],
		['background:#789922', 'g', '>'],
		['background:white', 'white', '■'],
		['background:yellow', 'yellow', '■'],
		['background:orange', 'orange', '■'],
		['background:pink', 'pink', '■'],
		['background:maroon', 'maroon', '■'],
		['background:red', 'red', '■'],
		['background:lime', 'lime', '■'],
		['background:teal', 'teal', '■'],
		['background:green', 'green', '■'],
		['background:olive', 'olive', '■'],
		['background:aqua', 'aqua', '■'],
		['background:blue', 'blue', '■'],
		['background:navy', 'navy', '■'],
		['background:violet', 'violet', '■'],
		['background:purple', 'purple', '■'],
		['background:fuchsia', 'fuchsia', '■'],
		['background:brown', 'brown', '■'],
		['background:silver', 'silver', '■'],
		['background:gray', 'gray', '■'],
		['background:black', 'black', '■'],
		['background:black; color:white', 'bw', 'a'],
		['background:white; float:right; color:black; margin-right:5px', 'float', 'f'],
		['background:white; float:left; color:black; margin-left:5px', 'lf', 'f'],
		['background:white; color:black; -webkit-animation: spin 5ms linear infinite; -moz-animation: spin 5ms linear infinite; animation: spin 5ms linear infinite;', '@', '@'],
		['background:white; color:black; display: inline-block; -moz-transform: scale(-1, 1); -webkit-transform: scale(-1, 1); -o-transform: scale(-1, 1); -ms-transform: scale(-1, 1); transform: scale(-1, 1);', 'hflip', 'h'],
		['background:white; color:black; display: inline-block; -moz-transform: scale(1, -1); -webkit-transform: scale(1, -1); -o-transform: scale(1, -1); -ms-transform: scale(1, -1); transform: scale(1, -1);', 'vflip', 'v'],
		['background:white; font-weight:bold; color:black', 'b', 'B'],
		['background:white; font-style:italic; color:black', 'i', 'I'],
		['background:white; text-decoration:underline; color:black', 'u', 'U'],
		['background:white; text-decoration:line-through; color:black', 's', 's'],
		['background:gold; color:red', 'd', 'D'],
		['background:black; color:gold; font-family:impact, sans-serif', 'f', 'F'],
		['background:#691227; color:#8FFF33; font-family:impact, sans-serif', 'shit', 'S'],
		['background:black; color:white', 'spoiler', 'spoiler'],
		['background:white; color:black; border:solid 2px red', '\\/', '\[\/\]']
	];

	for (i in FontsArray) {
		$('<button id="cbtn' + i + '" onclick="insertText(\'[' + FontsArray[i][1] + ']\')" />')
				.addClass('btn btn-default').attr('style', FontsArray[i][0]).text(FontsArray[i][2])
	 		.appendTo(fontsbtnwrap);
			i % 13 == 12 ? fontsbtnwrap.append('<br />') : false;
	}

	if (UI_UnicodeChars === 1 && UnicodeChars_Array.length > 0) {
		unibtnwrap = $('<div id="unibtnwrap" />')
			.appendTo(fontspanel);
		for (i in UnicodeChars_Array) {
			btn = $('<button onclick="insertText(\'' + UnicodeChars_Array[i] + '\')" />')
				.addClass('btn btn-default').text(UnicodeChars_Array[i]);
			unibtnwrap.append(btn);
			i % 13 == 12 ? unibtnwrap.append('<br />') : false;
		}
	}
}

// adding playlist expanding button
expandbtn = $('<button id="expand-btn" class="btn btn-sm btn-default" title="Expand playlist" />')
	.append('<span class="glyphicon glyphicon-resize-full"></span>')
	.prependTo("#videocontrols")
	.on("click",expandQueue);

// adding playlist scrolling button
scrollbtn = $('<button id="scroll-btn" class="btn btn-sm btn-default" title="Scroll playlist to current item" />')
	.append('<span class="glyphicon glyphicon-hand-right"></span>')
	.prependTo("#videocontrols")
	.on("click",scrollQueue);

// adding contributors button
contribbtn = $('<button id="contrib-btn" class="btn btn-sm btn-default" title="Contributors list" />')
	.append('<span class="glyphicon glyphicon-user"></span>')
	.prependTo("#videocontrols")
	.on("click",showContributors);

// adding pin-up button
pinupbtn = $('<button id="pinup-btn" class="btn btn-sm btn-default" title="Pin playlist to player" />')
	.append('<span class="glyphicon glyphicon-pushpin"></span>')
	.prependTo("#videocontrols")
	.on("click", function() {
		!PINNED ? pinUp() : unPin();
		scrollQueue();
		scrollChat();
		!pinupbtn.hasClass('btn-success') ? pinupbtn.addClass('btn-success') : pinupbtn.removeClass('btn-success');
	});

// extending 'Get URLs' function
if (UI_ExtendedGetURLs === 1) {
	$("#getplaylist").unbind()
		.on("click",getPlaylistURLs);
}

// adding background image to userlist
function loadWC() {
	while ((link = WC[Object.keys(WC)[Math.floor(Math.random() * Object.keys(WC).length)]].ul) === "") {
	}
	$("#userlist").css({'background-image':'url("' + link + '")', 'background-repeat':'no-repeat', 'background-position':'left bottom'});
}

function loadBackground() {
	while (WC[Object.keys(WC)[Math.floor(Math.random() * Object.keys(WC).length)]].bg === "") {
		var name = Object.keys(WC)[Math.floor(Math.random() * Object.keys(WC).length)];
	}
	var bcss = 'background-image:url(' + WC[name].bg + ');' + WC[name].css;
	$("body").attr("style",bcss);
}
// adding schedule button
function loadScheduleButtons() {
	ScheduleTabscontent = $('#ScheduleTabscontent').html(ScheduleTabs_Array[0][1]);
	$('#ScheduleTabscontent').hide();
	$('#motdcontent').width('500');
	for (i in ScheduleTabs_Array) {
		btn = $('<button class="btn btn-xs btn-default ScheduleTabs-btn" tab="' + i + '">')
			.text(ScheduleTabs_Array[i][0])
			.appendTo('#ScheduleTabsbuttons')
			.on("click", function() {
				var btntxt = $(this).text();
				var nr = $(this).attr('tab');
				if ($(this).hasClass('btn-success') && nr != 0) {
					$(".ScheduleTabs-btn").removeClass('btn-success');
					ScheduleTabscontent.hide();
					$('#motdcontent').width('500');
				} else {
					ScheduleTabscontent.show();
					$('#motdcontent').width('');
					SHTML = ScheduleTabs_Array[nr][1];
					$(".ScheduleTabs-btn").removeClass('btn-success');
					$('button[tab="0"]').text("Compact Schedule");
					$(this).addClass('btn-success');
					if (btntxt === "Compact Schedule") {
						SHTML = SHTML.replace(/\(/g,"<").replace(/\)/g,">");
						$(this).text("Convert to Local Time");
					} else if (btntxt === "Convert to Local Time") {
						SHTML = convertToTimeZone(SHTML).replace(/\(/g,"<").replace(/\)/g,">");
						$(this).text("Close Schedule");
					} else if (btntxt === "Close Schedule") {
						$(".ScheduleTabs-btn").removeClass('btn-success');
						ScheduleTabscontent.hide();
						$(this).text("Compact Schedule");
						$('#motdcontent').width('500');
					}
					ScheduleTabscontent.html(SHTML);
				}
		});
	}
}
function convertToTimeZone(data) {
	var sHTML = cHTML = data.replace(/</g,"(").replace(/>/g,")")
	sHTML = sHTML.match(/\(strong\)(.+?):\(\/strong\)/gi);
	for (i in sHTML) {
		sHTML[i] = sHTML[i].replace(/(\(|:\(\/)strong\)/gi,"");
		sHTML[i] = ((((parseInt(sHTML[i].split(":")[0]) + (sHTML[i].search(/PM|12(.+?)/) > -1 ? 12 : 0)) * 60 + parseInt(sHTML[i].split(":")[1].split(" ")[0]))/60 - STIMEZONE) + UCONF.ltim)%24;
		sHTML[i] < 0 ? sHTML[i] += 24 : '';
		cHTML = cHTML.replace(/\(strong\)(.+?):\(\/strong\)/,"<strong>" + (Math.floor(sHTML[i])%12 < 1 ? 12 : Math.floor(sHTML[i])%12) + ":" + sHTML[i]%1*60 + (sHTML[i]%1*60 < 10 ? "0" : "") + (sHTML[i] >= 12 ? " PM" : " AM") + ":</strong>");
	}
	return cHTML;
}
if (HIDEMOTD && $("#motd").html().length - MOTDCACHE.length > 20) {
	HIDEMOTD = false;
	MOTDCACHE = $("#motd").html();
	setOpt(CHANNEL.name + "_MOTDCACHE", MOTDCACHE);
}
UI_Schedule === 1 ? loadScheduleButtons() : '';

// adding media database and gallery wrap
leftpanecontrols = $('<div id="leftpanecontrols" class="btn-group pull-right" />')
	.prependTo("#leftpane");

$("#playlistmanagerwrap").show();

// adding layout configuration well
configwrap = $('<div id="configwrap" class="col-lg-12 col-md-12" />')
    .appendTo("#leftpane-inner");

const wellWrapper = $('<div id="config-well" class="well form-horizontal" />')
    .css({
        background: "rgba(30, 30, 30, 0.98)",
        padding: "20px",
		bordercolor: "rgba(68, 68, 68, 0.98)",
        borderRadius: "4px",
    })
    .appendTo(configwrap);

$('<h1>~本日のロリ~</h1>')
	.attr('title', 'Loli of the Day')
    .css({
        fontWeight: 'bold',
        textAlign: 'center',
        margin: '10px 0 20px 0'
    })
    .appendTo(wellWrapper);

const motdBox = $('<div id="motd-box" />')
    .css({
        backgroundImage: 'url("https://www.dropbox.com/scl/fi/9d563nixbo8zw7isuj1x6/checkers.jpg?rlkey=20sl7drmh2k2d8ymwir99ox0l&st=6wtxh0t2&dl=1")',
        backgroundSize: '250px 250px',
        backgroundPosition: '0 0',
        backgroundRepeat: 'repeat',
        animation: 'diagonalScroll 4s linear infinite',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        backgroundBlendMode: 'multiply',
        borderRadius: "0",
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px 15px 15px 15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    })
    .appendTo(wellWrapper);

// Placeholder for CSV content
$('<div id="motd-content" class="text-center" />').appendTo(motdBox);

// Load daily message from Google Sheet CSV
$(document).ready(function () {
    const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSGzeCDEKRxI2B5XXveHVetssLIuly6RhqYmt45PQtnPUAou8tVJv8e_ONGXwJId5Hpxpouzzoqw-Lv/pub?gid=0&single=true&output=csv";

    fetch(csvUrl)
        .then(response => response.text())
        .then(text => {
            const rows = text.trim().split("\n").slice(1);
            if (rows.length === 0) {
                $("#motd-content").html("<p>No data found in the sheet.</p>");
                return;
            }

            // UTC-based row selection
            const today = new Date();
            const seed = today.getUTCFullYear() * 10000 + (today.getUTCMonth() + 1) * 100 + today.getUTCDate();
            const row = rows[seed % rows.length].split(",");

            const image = row[3]?.trim();
            const title = row[1]?.trim();
            const description = row[2]?.trim();

            const content = `
                <img src="${image}" style="border-radius: 0px; max-height: 300px; height: auto; width: auto;" />
                <h3 class="fw-bold" style="margin-top: 10px;">${title}</h3>
                <p style="margin-top: 5px; margin-bottom: 5px">${description}</p>
            `;

            $("#motd-content").html(content);
        })
        .catch(err => {
            console.error("Failed to load daily message", err);
            $("#motd-content").html("<p>Error loading daily message.</p>");
        });
});

$('<a/>', {
    text: 'Full list',
    href: 'https://docs.google.com/spreadsheets/d/1Muwmm8bnllev8paJAKJbJT_efkDvehXuPWdmZoX34YQ/edit?gid=0#gid=0',
    target: '_blank',
    class: 'text-center',
    css: {
        display: 'block',
        marginTop: '10px',
        fontSize: '14px',
        color: '#aaddff',
        textDecoration: 'underline'
    }
}).appendTo(wellWrapper);

function toggleUNTZ() {
    setInterval(function() {
        if ($(".untz").length) {
            $(".untz").css("color", getRandomColor());
        }
    }, 60);
}

// adding embedding options
function createWEBM() {
	if (EMBEDVID && UI_EmbeddingMedia === 1) {
		$(".webm").each(function() {
			splitwebmlink = this.href;
			vid = $('<video class="embedvid" />').attr('src', splitwebmlink).prop('loop', LOOPWEBM).prop('muted', 'true').prop('autoplay', AUTOVID)
				.on("click", function() {
					$(this).get(0).paused ? $(this).get(0).play() : $(this).get(0).pause();
					return false;
				}).on("dblclick", function() {
					window.open(splitwebmlink, '_blank');
					return false;
				});
			UI_MediaControls === 1 ? vid.attr('controls', '') : '';
			SCROLLCHAT ? scrollChat() : '';
			$(this).before(vid).remove();
		});
		$(".pm-buffer.linewrap video, #messagebuffer.linewrap video").css({"max-width": MAXW + "px","max-height": MAXH + "px"});
	}
}

// rearranging footer
UI_FlagCounter === 1 ? rightfooter = $('<span id="rightfooter">' + FlagCounter_HTML + '</span>').appendTo("footer .container") : '';
UI_UserStatistics === 1 ? leftfooter = $('<span id="leftfooter"></span>').appendTo("footer .container") : '';

// updating user visits
USERVISITS++;
setOpt(CHANNEL.name + "_visits", USERVISITS);

if (UI_UserStatistics === 1) {
	$('<span>My visits: </span><span class="badge footer-badge">' + USERVISITS + '</span><span> / </span>')
		.appendTo(leftfooter);
	$('<span>Current online time: </span><span id="onlinetime" class="badge footer-badge">0:00</span>')
		.appendTo(leftfooter);
	setInterval(onlineTime, 60000);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- Chat and window extensions and events ----- */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

(function addStuffOnLogin() {
	$('div[class^="chat-msg"]').each(function() {
		var user = $(this).attr("class").replace("chat-msg-","");
		var children = $(this).children();
		/*var pixs = $('<span ' + (PIXEL ? '' : ' style="display:none"') + '/>').insertAfter(children.eq(0));
		if (WC[user] !== undefined) {
			pixs.html('<img class="user" src="' + WC[user].pix + '" title="' + user + '" height="16"> ');
		}*/
	});
	/*var sreg = /<span class="subchannel" title="(.+?)"><\/span>/; //SUBCHANNEL
	$(".subchannel").each(function() {
		var schan = $(this);
		var spar = schan.parent().parent();
		var schtml = spar.html();
		if (schtml.search(sreg) > -1) {
			smat = schtml.match(sreg);
			spar.html(smat[0] + schtml.replace(smat[0],""));
			if (smat[1] != SUBCHAN) {
				spar.hide();
			} else {
				spar.show();
			}
			spar.attr("title", spar.attr("class").replace(/chat-msg-| nick-hover/g,"") + " wrote this in the " + SCNAMES[parseInt(smat[1])-1] + " Channel (" + smat[1] + ").");
			//spar.children().eq(3).text(spar.children().eq(3).text().trim());
		}
	});
	$("#chatline").attr("placeholder",SCNAMES[SUBCHAN-1] + " Channel (" + SUBCHAN + ")");*/
})();

EVENT.a.volume = .1;
// add pixel before or after name, always show name or not
function formatChatMessage(data, last) {
	if (data.msg === '/reload') {
		$("#userlist").find('span[class$=userlist_owner],span[class$=userlist_siteadmin]').each(function() {
			if ($(this).text() === data.username) {
				location.reload();
				RELOADED = true;
			}
		});
		(CLIENT.rank > 2 && !RELOADED) ? socket.emit("chatMsg", {msg:'/kick ' + data.username + ' Quit trying to reload and enable javascript.'}) : RELOADED = false;
	}
	// Backwards compat
	if (!data.meta || data.msgclass) {
		data.meta = {
			addClass: data.msgclass,
			// And the award for "variable name most like Java source code" goes to...
			addClassToNameAndTimestamp: data.msgclass
		};
	}
	//4CC Team Colors
	var teamClass = data.msg.match(/(Ð.+Ð)/gi);
	if (teamClass){
		teamClass = 'team' + teamClass[0].replace(new RegExp('Ð','g'),'');
		data.msg = data.msg.replace(/Ð.+Ð/gi,'');
	} else {
		teamClass = '';
	}
	// Phase 1: Determine whether to show the username or not
	var skip = data.username === last.name;
	// Prevent impersonation by abuse of the bold filter
	if(data.msg.match(/^\s*<strong>\w+\s*:\s*<\/strong>\s*/))
		skip = false;
	if (UCONF.showname === "yes" || data.meta.forceShowName)
		skip = false;
	if(data.meta.addClass === "server-whisper")
		skip = true;

	data.msg = stripImages(data.msg);
	data.msg = execEmotes(data.msg);

	data.msg = data.msg.replace(TEAMCOLORREGEX,"").replace(/Ð.+Ð/,"").trim();
	
	if (data.msg.length === 0) {
		return;
	}
	if (data.msg.replace(/<.+?>| /gi,"").length > 25) {
		var greaterThanSign = 0;
		if (data.msg[0] === "<") {
			greaterThanSign = data.msg.indexOf(">");
		}

		var noHTMLMsg = data.msg.replace(/<.+?>/gi," ");
		var splitMsg = noHTMLMsg.split(" ");
	}

	last.name = data.username;
	var div = $("<div/>");
	/* drink is a special case because the entire container gets the class, not
	   just the message */
	if (data.meta.addClass === "drink") {
		div.addClass("drink");
		data.meta.addClass = "";
	}
	// Add timestamps (unless disabled)
	if (USEROPTS.show_timestamps) {
		var time = $("<span/>").addClass("timestamp").appendTo(div);
		var date = new Date(data.time);
		var hours = ("0" + date.getHours()).slice(-2);
		var minutes = ("0" + date.getMinutes()).slice(-2);
		var timestamp = hours + ":" + minutes;
		time.text("["+timestamp+"] ");
		if (data.meta.addClass && data.meta.addClassToNameAndTimestamp) {
			time.addClass(data.meta.addClass);
		}
	}
	// Add username
	var name = $('<span id="namespan"/>');
	if (!skip) {
		name.appendTo(div);
	}
	$("<strong/>").addClass("username " + teamClass).text(data.username + ": ").appendTo(name);
	if (data.meta.modflair) {
		name.addClass(getNameColor(data.meta.modflair));
	}
	if (data.meta.addClass && data.meta.addClassToNameAndTimestamp) {
		name.addClass(data.meta.addClass);
	}
	if (data.meta.superadminflair) {
		name.addClass("label")
			.addClass(data.meta.superadminflair.labelclass);
		$("<span/>").addClass(data.meta.superadminflair.icon)
			.addClass("glyphicon")
			.css("margin-right", "3px")
			.prependTo(name);
	}
	/*if (UI_Pixel === 1 && WC[data.username] !== undefined) {
		var pixel = '<span ' + (PIXEL ? '' : ' style="display:none"') + '><img class="user" src="' + WC[data.username].pix + '" title="' + data.username + '" height="' + UCONF.pixh + '"/> </span>';
		if (UCONF.showname === "no" && skip) {
			$(pixel).appendTo(div);
		} else {
			UCONF.pixl === "before" ? $(pixel).insertBefore(name) : $(pixel).insertAfter(name);
		}
	}*/
	/*var subregex = /<span class="subchannel" title="(.+?)"><\/span>/;
	if (data.msg.search(subregex) > -1) { //SUBCHANNEL
		var submatch = data.msg.match(subregex);
		data.msg = data.msg.replace(submatch[0],"").trim();
		$(submatch[0]).appendTo(div);
	}*/
	// Add the message itself
	var message = $("<span/>").appendTo(div);
	if (data.msg.indexOf("<marquee") > -1) {
		data.msg = data.msg.replace(/\[\/\]/g, "</span></marquee>");
		if (!MQTOG) {
			data.msg = data.msg.replace(/<marquee(.+?)>/g, "<dmarquee$1>");
		}
	} else {
		data.msg = data.msg.replace(/\[\/\]/g, "</span>");
	}
	if (!SPINTOG) {
		data.msg = data.msg.replace(/<(.+?)class="spin">/g, '<$1class="nospin">');
	}
	if ((HIDEIMG || (EMOTEBL.indexOf(data.username) > -1 || USEREMOTEBL.indexOf(data.username) > -1)) && data.msg.search(/<img(.+?)>/g) > -1 && (data.msg.match(/<img.*?title="(.*?)".*?>/g).indexOf(":") || 0) > -1) {
		data.msg = data.msg
			.replace(/<img class="channel-emote" src="(.+?)" title="(.+?)">/g,'<a class="channel-emote" target="_blank" href="$1" title="$2">$2</a>')
			.replace(/<img class="spoilerpic"(.+?)>/g,'SPOILER')
			.replace(/<img class="lotterypic"(.+?)>/g,'WINNER')
			.replace(/<img(.+?)src="(.+?)"(.+?)>/g,'$2');
	}
	data.msg = data.msg
		.replace(/<img(.+?)max-width:(.+?)>/g,'<img$1max-width: ' + MAXH + 'px; max-height: ' + MAXW + 'px;">')
		.replace(/<img(.+?)>/g,'<img$1style="max-width: ' + MAXH + 'px; max-height: ' + MAXW + 'px;">');
	message[0].innerHTML = data.msg;
	// For /me the username is part of the message
	if (data.meta.action) {
		name.remove();
		message[0].innerHTML = data.username + " " + data.msg;
	}
	if (data.meta.addClass) {
		message.addClass(data.meta.addClass);
	}
	if (data.meta.shadow) {
		div.addClass("chat-shadow");
	}

	div.find("img").load(function () {
		if (SCROLLCHAT) {
			scrollChat();
		}
	});
	timer = new Date();
	if (timer > EVENT.date && document.hasFocus() && data.msg.search(/(http|https):\/\/exhentai\.org\//gi) > -1) {
		EVENT.a.play();
		EVENT.date = timer.setSeconds(timer.getSeconds() + 3600);
		setOpt(CHANNEL.name + "_EVENT", EVENT.date);
	}
	return div;
}

setTimeout(function() {
    $(".teamColorSpan").remove();
}, 2500);

function formatUserlistItem(div) {
	var data = {
		name: div.data("name") || "",
		rank: div.data("rank"),
		profile: div.data("profile") || { image: "", text: ""},
		leader: div.data("leader") || false,
		icon: div.data("icon") || false,
		afk: div.data("afk") || false
	};
	var name = $(div.children()[1]);
	name.removeClass();
	name.css("font-style", "");
	name.addClass(getNameColor(data.rank));
	div.find(".profile-box").remove();

	if (data.afk) {
		div.addClass("userlist_afk");
	} else {
		div.removeClass("userlist_afk");
	}

	if (div.data("meta") && div.data("meta").muted) {
		div.addClass("userlist_muted");
	} else {
		div.removeClass("userlist_muted");
	}

	if (div.data("meta") && div.data("meta").smuted) {
		div.addClass("userlist_smuted");
	} else {
		div.removeClass("userlist_smuted");
	}

	var profile = null;
	/*
	 * 2015-10-19
	 * Prevent rendering unnecessary duplicates of the profile box when
	 * a user's status changes.
	 */
	name.unbind("mouseenter");
	name.unbind("mousemove");
	name.unbind("mouseleave");

	name.mouseenter(function(ev) {
		if (profile)
			profile.remove();

		var top = ev.clientY + 5;
		var horiz = ev.clientX;
		profile = $("<div/>")
			.addClass("profile-box linewrap")
			.css("top", top + "px")
			.appendTo(div);

		if(data.profile.image) {
			$("<img/>").addClass("profile-image")
				.attr("src", data.profile.image)
				.appendTo(profile);
		}
		$("<strong/>").text(data.name).appendTo(profile);

		/*if (WC[data.name] !== undefined && WC[data.name].title !== "") {
			$("<br/>").appendTo(profile);
			$('<strong style="color:green"/>').text(WC[data.name].title).appendTo(profile);
		}*/
		var meta = div.data("meta") || {};
		if (meta.ip) {
			$("<br/>").appendTo(profile);
			$("<em/>").text(meta.ip).appendTo(profile);
		}
		if (meta.aliases) {
			$("<br/>").appendTo(profile);
			$("<em/>").text("aliases: " + meta.aliases.join(", ")).appendTo(profile);
		}
		$("<hr/>").css("margin-top", "5px").css("margin-bottom", "5px").appendTo(profile);
		$("<p/>").text(data.profile.text).appendTo(profile);

		if ($("body").hasClass("synchtube")) horiz -= profile.outerWidth();
		profile.css("left", horiz + "px")
	});
	name.mousemove(function(ev) {
		var top = ev.clientY + 5;
		var horiz = ev.clientX;
		if (UCONF.userlist === "right") horiz -= $(".profile-box").outerWidth();
		profile.css("left", horiz + "px")
			.css("top", top + "px");
	});
	name.mouseleave(function() {
		profile.remove();
	});
	var icon = div.children()[0];
	icon.innerHTML = "";
	// denote current leader with a star
	if(data.leader) {
		$("<span/>").addClass("glyphicon glyphicon-star-empty").appendTo(icon);
	}
	if(data.afk) {
		name.css("font-style", "italic");
		$("<span/>").addClass("glyphicon glyphicon-time").appendTo(icon);
	}
	if (data.icon) {
		$("<span/>").addClass("glyphicon " + data.icon).prependTo(icon);
	}
}
function updateStreamTitles() {
	$(".userlist_item").each(function() {
		formatUserlistItem($(this));
	});
}
updateStreamTitles();

// fix userlist sorting due to pixels
function sortUserlist() {
	var slice = Array.prototype.slice;
	var list = slice.call($("#userlist .userlist_item"));
	list.sort(function (a, b) {
		var r1 = $(a).data("rank");
		var r2 = $(b).data("rank");
		var afk1 = $(a).find(".glyphicon-time").length > 0;
		var afk2 = $(b).find(".glyphicon-time").length > 0;
		var name1 = a.children[1].innerHTML.toLowerCase();
		var name2 = b.children[1].innerHTML.toLowerCase();
		if (name1.indexOf('>') > -1) {
			name1 = name1.substr(name1.indexOf('>')+1);
		}
		if (name2.indexOf('>') > -1) {
			name2 = name2.substr(name2.indexOf('>')+1);
		}
		if (USEROPTS.sort_afk) {
			if (afk1 && !afk2)
				return 1;
			if (!afk1 && afk2)
				return -1;
		}

		if (USEROPTS.sort_rank) {
			if (r1 < r2)
				return 1;
			if (r1 > r2)
				return -1;
		}

		return name1 === name2 ? 0 : (name1 < name2 ? -1 : 1);
	});

	list.forEach(function (item) {
		$(item).detach();
	});
	list.forEach(function (item) {
		$(item).appendTo($("#userlist"));
	});
	showProfiles();
}

// fix auto name complete sorting due to pixels
function chatTabComplete() {
	var words = $("#chatline").val().split(" ");
	var current = words[words.length - 1];
	if (current.indexOf("http://") > -1 || current.indexOf("https://") > -1) {
		if (current.indexOf(":pic") > -1) {
			current = current.replace(":pic", ":sp");
		} else if (current.indexOf(":sp") > -1) {
			current = current.replace(":sp", ":webm");
		} else if (current.indexOf(":webm") > -1) {
			current = current.replace(":webm", ":float");
		} else if (current.indexOf(":float") > -1) {
			current = current.replace(":float", ":lf");
		} else if (current.indexOf(":lf") > -1) {
			current = current.replace(":lf", ":@");
		} else if (current.indexOf(":@") > -1) {
			current = current.replace(":@", "");
		} else {
			current += ":pic";
		}
	} else if (current.indexOf("[m") > -1 && current.indexOf("]") > -1) {
		instances = current.split("[m");
		for (i = 1; i < instances.length; i++) {
			otherpart = instances[i].split("]");
			number = parseInt(otherpart[0], 10);
			if (typeof number === "number") {
				replacement = '[m' + (number + 1) + ']' + otherpart[1];
				current = current.replace('[m' + number + ']' + otherpart[1], replacement);
			}
		}
	} else {
		current = words[words.length - 1].toLowerCase();
		if (!current.match(/^[\w-]{1,20}$/)) {
			return;
		}
		var __slice = Array.prototype.slice;
		var usersWithCap = __slice.call($("#userlist").children()).map(function (elem) {
			var formatName = elem.children[1].innerHTML;
			if (formatName.indexOf('>') > -1) {
				formatName = formatName.substr(formatName.indexOf('>')+1);
			}
			return formatName;
		});
		var users = __slice.call(usersWithCap).map(function (user) {
			return user.toLowerCase();
		}).filter(function (name) {
			return name.indexOf(current) === 0;
		});
	
		// users now contains a list of names that start with current word
		if (users.length === 0) {
			return;
		}
	
		// trim possible names to the shortest possible completion
		var min = Math.min.apply(Math, users.map(function (name) {
			return name.length;
		}));
		users = users.map(function (name) {
			return name.substring(0, min);
		});
	
		// continually trim off letters until all prefixes are the same
		var changed = true;
		var iter = 21;
		while (changed) {
			changed = false;
			var first = users[0];
			for (var i = 1; i < users.length; i++) {
				if (users[i] !== first) {
					changed = true;
					break;
				}
			}
	
			if (changed) {
				users = users.map(function (name) {
					return name.substring(0, name.length - 1);
				});
			}
	
			// In the event something above doesn't generate a break condition, limit
			// the maximum number of repetitions
			if (--iter < 0) {
				break;
			}
		}
	
		current = users[0].substring(0, min);
		for (var i = 0; i < usersWithCap.length; i++) {
			if (usersWithCap[i].toLowerCase() === current) {
				current = usersWithCap[i] + " ";
				break;
			}
		}
	}
	words[words.length - 1] = current;
	$("#chatline").val(words.join(" "));
}

// fix formatting and sending chat messages
$("#chatline, #chatbtn").unbind();

$("#chatline").on("keydown", function(ev) {
	if (ev.which == 13) {
		if (CHATTHROTTLE) {
			return;
		}
		msg0 = $("#chatline").val();
		msg = $("#chatline").val();
		if (msg0 === '/reload' && CLIENT.rank < 3) {
			alert('You have no permission to reload the channel.');
			return;
		}
		if (msg.trim()) {
			msg.indexOf('fc2.com') > -1 ? BLLINK = true : '';
			msg = prepareMessage(msg.trim());
			if (CLIENT.guest) {
				msg += " nano desu~";
			}
			meta = {};
			if (COMMAND) {
				socket.emit("chatMsg", {msg:msg0});
				msg = '➥ ' + msg;
				COMMAND = false;
			}
			if (USEROPTS.adminhat && CLIENT.rank >= 255) {
				msg = '/a ' + msg;
			} else if (USEROPTS.modhat && CLIENT.rank >= Rank.Moderator) {
				meta.modflair = CLIENT.rank;
			}
			if (CLIENT.rank >= 2 && msg.indexOf("/m ") === 0) {
				meta.modflair = CLIENT.rank;
				msg = msg.substring(3);
			} else {
				var t = msg.trim();
				if (TEAMCOLOR && t.indexOf("/") !== 0) {
					t = t + ' Ð' + TEAMCOLOR + 'Ð';
				}
				socket.emit("chatMsg", {
					msg: t,
					meta: meta
				});
			}
			BLLINK ? userChatStats(msg) : userChatStats(msg0);
			BLLINK = false;
			CHATHIST.push($("#chatline").val());
			CHATHISTIDX = CHATHIST.length;
			$("#chatline").val('');
		}
		return;
	} else if (ev.which == 9) {
		chatTabComplete();
		ev.preventDefault();
		return false;
	} else if (ev.which == 38) {
		if (CHATHISTIDX == CHATHIST.length) {
			CHATHIST.push($("#chatline").val());
		}
		if (CHATHISTIDX > 0) {
			CHATHISTIDX--;
			$("#chatline").val(CHATHIST[CHATHISTIDX]);
		}
		ev.preventDefault();
		return false;
	} else if (ev.which == 40) {
		if (CHATHISTIDX < CHATHIST.length - 1) {
			CHATHISTIDX++;
			$("#chatline").val(CHATHIST[CHATHISTIDX]);
		}
		ev.preventDefault();
		return false;
	} else if (UI_Shortcuts === 1) {
		if (Shortcuts.ctrl[ev.which] !== undefined && ev.ctrlKey && !ev.shiftKey && !ev.altKey) {
			insertText(Shortcuts.ctrl[ev.which]);
			ev.preventDefault();
			return false;
		} else if (Shortcuts.alt[ev.which] !== undefined && !ev.ctrlKey && !ev.shiftKey && ev.altKey) {
			insertText(Shortcuts.alt[ev.which]);
			ev.preventDefault();
			return false;
		} else if (Shortcuts.ctrlshift[ev.which] !== undefined && ev.ctrlKey && ev.shiftKey && !ev.altKey) {
			insertText(Shortcuts.ctrlshift[ev.which]);
			ev.preventDefault();
			return false;
		} else if (Shortcuts.ctrlalt[ev.which] !== undefined && ev.ctrlKey && !ev.shiftKey && ev.altKey) {
			insertText(Shortcuts.ctrlalt[ev.which]);
			ev.preventDefault();
			return false;
		} else if (Shortcuts.altshift[ev.which] !== undefined && !ev.ctrlKey && ev.shiftKey && ev.altKey) {
			insertText(Shortcuts.altshift[ev.which]);
			ev.preventDefault();
			return false;
		}
	}
});
$("#chatbtn").on("click", function() {
	msg0 = $("#chatline").val();
	msg = $("#chatline").val();
	if (msg0 === '/reload' && CLIENT.rank < 3) {
		alert('You have no permission to reload the channel.');
		return;
	}
	if (msg.trim()) {
		msg.indexOf('fc2.com') > -1 ? BLLINK = true : '';
		msg = prepareMessage(msg.trim());
		if (COMMAND) {
			socket.emit("chatMsg", {msg:msg0});
			msg = '➥ ' + msg;
			COMMAND = false;
		}
		socket.emit("chatMsg", {msg:msg});
		BLLINK ? userChatStats(msg) : userChatStats(msg0);
		BLLINK = false;
		$("#chatline").val('');
	}
});

$("#cs-motdtext").on("keydown", function(ev) {
	if (ev.which == 83 && ev.ctrlKey && !ev.shiftKey && !ev.altKey) {
		socket.emit("setMotd", {
			motd: $("#cs-motdtext").val()
		});
		return false;
	}
});

$("#cs-csstext").on("keydown", function(ev) {
	if (ev.which == 83 && ev.ctrlKey && !ev.shiftKey && !ev.altKey) {
		socket.emit("setChannelCSS", {
			css: $("#cs-csstext").val()
		});
		return false;
	}
});

$("#cs-jstext").on("keydown", function(ev) {
	if (ev.which == 83 && ev.ctrlKey && !ev.shiftKey && !ev.altKey) {
		socket.emit("setChannelJS", {
			js: $("#cs-jstext").val()
		});
		return false;
	}
});

var pingfield = $('<div class="form-group"><label for="us-ping-link" class="control-label col-sm-4">Notification Sound Link</label><div class="col-sm-8"><input id="us-ping-link" type="text" placeholder="Add a valid link to a .mp3, .ogg, .wav  file." class="form-control cs-textbox"></div></div>')
	.insertBefore($('label[for="us-sendbtn"]').parent().parent().parent());
var pinglevel = $('<div class="form-group"><label for="us-ping-level" class="control-label col-sm-4">Notification Sound Volume</label><div class="col-sm-8"><input id="us-ping-level" type="text" placeholder="Enter a valid volume from 0 to 100. Default is 100." class="form-control" onblur=""></div></div>')
	.insertAfter(pingfield);

$("#us-ping-link").val(PINGLINK).on("keyup", function() {
	PINGLINK = $(this).val();
	$(CHATSOUND).attr("src",PINGLINK !== "" ? PINGLINK : "/boop.wav");
	setOpt(CHANNEL.name + "_PINGLINK", PINGLINK);
});
PINGLINK !== "" ? $(CHATSOUND).attr("src",PINGLINK) : '';

$("#us-ping-level").val(PINGVOL*100).on("keyup", function() {
	var pvol = $(this).val();
	if (isNaN(pvol)) {
		$(this).val("");
	} else {
		PINGVOL = parseFloat(pvol !== "" ? pvol : 100)/100;
		if (PINGVOL > 1) {
			PINGVOL = 1;
			$(this).val(100);
		} else if (PINGVOL < 0) {
			PINGVOL = 0;
			$(this).val(0);
		}
		CHATSOUND.volume = PINGVOL;
		setOpt(CHANNEL.name + "_PINGVOL", PINGVOL);
		CHATSOUND.play();
	}
}).focusout(function() {
	CHATSOUND.pause();
});
CHATSOUND.volume = PINGVOL;

// optional chat joining message
if (UI_JoinText === 1) {
	JoinText_Message === "" ? JoinText_Message = "joined" : '';
	//socket.emit("chatMsg", {msg: '/me [CH' + SUBCHAN + ']' + JoinText_Message});
	socket.emit("chatMsg", {msg: '/me ' + JoinText_Message});
	CLIENT.name !== "" ? JOINED = true : '';
}

// optional chat leaving message
if (UI_LeaveText === 1) {
	window.onbeforeunload = function() {
		if (!LEFT) {
			LeaveText_Message === "" ? LeaveText_Message = "left" : '';
			//socket.emit("chatMsg", {msg: '/me [CH' + SUBCHAN + ']' + LeaveText_Message});
			socket.emit("chatMsg", {msg: '/me ' + LeaveText_Message});
			LEFT = true;
		}
	};
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function chatStuff() {
	if (UI_PixelChange === 1) {
		$(".channel-emote").each(function() {	// Edit/add links at the top of the file.
			var name = $(this).attr("title").toLowerCase();
			var checklink = $(this).attr("src");
			if (PCL[name] !== undefined && checklink === PCL[name].link) {
				var linknum = Math.floor(Math.random() * PCL[name].linkArray.length);
				$(this).attr("src", PCL[name].linkArray[linknum]);
			}
		});
	}
	/*$(".subchannel").each(function() { //SUBCHANNEL
		var sc = $(this);
		var scp = sc.parent();
		if (scp.attr("title") === undefined) {
			var curchan = sc.attr("title");
			if (curchan != SUBCHAN && SUBCHAN !== 3) {
				scp.hide();
			} else {
				scp.show();
			}
			scp.attr("title", scp.attr("class").replace(/chat-msg-| nick-hover/g,"") + " wrote this in the " + SCNAMES[parseInt(curchan)-1] + " Channel (" + curchan + ").");
		}
	});*/
	SPOILER ? rmvSpoil() : '';
	colorAdmins();
	createWEBM();
}

// setting global sockets
socket.on("pm",chatStuff);
socket.on("chatMsg", chatStuff);
socket.on("setMotd", function(data) {
	UI_Schedule === 1 ? loadScheduleButtons() : '';
	clearTimeout(UPDTOUT);
	updateCurrentlyAiring();
	if (hidemotdbtn.hasClass("btn-danger") && data !== MOTDCACHE) {
		hidemotdbtn.click();
	}
	MOTDCACHE = data;
	setOpt(CHANNEL.name + "_MOTDCACHE", MOTDCACHE);
});
socket.on("channelOpts", setUserCSS);
socket.on("channelCSSJS", setUserCSS);
socket.on("setPermissions", function() {
	if (UI_Func === 1) {
		chatfunc.detach();
		CHATFUNC = false;
	}
});
var q240480 = $('li[title="240"],li[title="480"]');
socket.on("mediaUpdate", function() {
	if (PLAYER.mediaType == "gd") {
		q240480.hide();
	} else if (q240480.css("display") == "none") {
		q240480.show();
	}
});
socket.on("usercount", function() {
	colorAdmins();
	updatePixels();
	//autoMod();
	showProfiles();
});
socket.on("setAFK", function() {
	showProfiles();
});
socket.on("addUser", function() {
	showProfiles();
	emoteMuteBtns();
});
socket.on("changeMedia", function(data) {
	UI_TitleBarDescription === 1 ? changeTitle() : '';
	// UI_DisplayModeSel === 1 ? setModeAfterVideoChange() : '';
	$("#findtime").text() !== 'Video Time' ? $("#findtime").click() : '';
	if (!$("#videowrap").length) {
		TitleBarDescription_Caption.length < 1 ? TitleBarDescription_Caption = 'Currently Playing:' : '';
		$("#currenttitle").text(TitleBarDescription_Caption + " " + data.title);
	}
});
socket.on("setUserRank", function() {
	toggleClearBtn();
	showProfiles();
	if (UI_Func === 1) {
		chatfunc.detach();
		CHATFUNC = false;
	}
});
socket.on("login", function() {
	patchWrap();
	if (UI_JoinText === 1 && CLIENT.name && CLIENT.guest && !JOINED) {
		//socket.emit("chatMsg", {msg: '/me [CH' + SUBCHAN + ']' + JoinText_Message});
		socket.emit("chatMsg", {msg: '/me ' + JoinText_Message});
		JOINED = true;
	}
});
// setting final layout after loading
setLayout();
scrollChat();
scrollQueue();
setUserCSS();

/* ----- END OF LIBRARY ----- */

createWEBM();
toggleUNTZ();
if (!FLUID) {
	toggleFluidLayout();
	fluidbtn.removeClass('btn-success');
}
if (!LAYOUTBOX) {
	toggleDiv(configwrap);
	layoutbtn.removeClass('btn-success');
}
if (HIDEPLAYER) {
	hideplayer.addClass('btn-danger')
	coverPlayer();
}
if (HIDEMOTD) {
	toggleDiv("#motdrow");
	hidemotdbtn.addClass('btn-danger');
	hidemotdbtn.attr("title","Show MOTD");
}
if (HIDEANN) {
	toggleDiv("#announcements");
	hideannbtn.addClass('btn-danger');
	hideannbtn.attr("title","Show Announcements");
}
if (HIDEPL) {
	toggleDiv("#queue");
	toggleDiv("#plmeta");
	hideplbtn.addClass('btn-danger');
	hideplbtn.attr("title","Show Playlist");
}
if (HIDEHF) {
	toggleDiv("nav");
	toggleDiv("footer");
	hidehfbtn.addClass('btn-danger');
	hidehfbtn.attr("title","Show Header and Footer");
}
if (HIDEIMG) {
	hideimgbtn.addClass('btn-danger');
	hideimgbtn.attr("title", "Show Images");
}
$("#messagebuffer.linewrap img, .pm-buffer.linewrap img").css({"max-height": MAXH + "px","max-width": MAXW + "px"});
function currentVideoTime(data) {
	clearInterval(ADDONESECOND);
	hour = Math.floor(data.currentTime / 3600);
	minute = Math.floor(data.currentTime / 60 % 60);
	second = Math.floor(data.currentTime % 60);
	second < 10 ? second = '0' + second : '';
	if (hour === 0) {
		$("#findtime").text(minute + ':' + second);
	} else {
		minute < 10 ? minute = '0' + minute : '';
		$("#findtime").text(hour + ':' + minute + ':' + second);
	}
	ADDONESECOND = setInterval(function() {
		if (!PLAYER.paused) {
			second = parseInt(second, 10) + 1;
			minute = parseInt(minute, 10);
			if (second === 60) {
				second = 0;
				minute++;
				if (minute === 60) {
					minute = 0;
					hour = parseInt(hour, 10) + 1;
				}
			}
			second < 10 ? second = '0' + second : '';
			if (hour === 0) {
				$("#findtime").text(minute + ':' + second);
			} else {
				minute < 10 ? minute = '0' + minute : '';
				$("#findtime").text(hour + ':' + minute + ':' + second);
			}
		}
	}, 1000);
}

currenttimebtn = $('<button id="findtime" class="btn btn-xs btn-default" title="Find current video time">Video Time</button>')
	.appendTo("#chatheader")
	.on("click", function() {
		if ($(this).text() !== 'Video Time') {
			$(this).text('Video Time');
			clearInterval(ADDONESECOND);
			socket.removeListener("mediaUpdate", currentVideoTime);
		} else {
			socket.on("mediaUpdate", currentVideoTime);
		}
});
function updatePixels() {
	if (UI_Pixel === 1 && Object.keys(WC).length > 0) {
		$("div.userlist_item").each(function() {
			for (name in WC) {
				if ($(this).children("span").eq(1).text() == name) {
					$(this).children("span").eq(1).html('<img src="' + WC[name].pix + '" height="16"/>'+ name);
					break;
				}
			}
		});
	} else {
		setTimeout(updatePixels,125);
	}
}
updatePixels();

function checkRank(currentstreamer, nextstreamer, WEEKEND, WEEKENDMODS) {
	WEEKENDMODS = WEEKENDMODS.split(" ");
	currentstreamer = currentstreamer.toLowerCase();
	nextstreamer = nextstreamer.toLowerCase();
	var slice2 = Array.prototype.slice;
	var list2 = slice2.call($("#userlist .userlist_item"));
	for (item in list2) {
		NAME = $(list2[item]).data("name");
		RANK = $(list2[item]).data("rank");
		WEEKENDMOD = false;
		if (WEEKEND === "TRUE") {
			for (zzz in WEEKENDMODS) {
				if (NAME.toLowerCase() === WEEKENDMODS[zzz].toLowerCase()) {
					WEEKENDMOD = true;
					break;
				}
			}
		}
		if (FruitBowl[NAME] === undefined) {
			NAME = NAME.toLowerCase();
			console.log(NAME + "\t" + currentstreamer + "\t" + nextstreamer);
			if (NAME !== currentstreamer && NAME !== nextstreamer && RANK > 1 && RANK < 4 && !WEEKENDMOD) {
				socket.emit("chatMsg",{msg:"/rank " + NAME + " " + 1});
			} else if ((RANK < 3 && NAME === currentstreamer) || (WEEKENDMOD && RANK === 1)) {
				socket.emit("chatMsg",{msg:"/rank " + NAME + " " + 3});
			} else if (RANK <= 3 && RANK !== 2 && NAME === nextstreamer && NAME !== currentstreamer && !WEEKENDMOD) {
				socket.emit("chatMsg",{msg:"/rank " + NAME + " " + 2});
			}
		}
	}
}

(function runWC() {
	if (UI_WC === 1 && Object.keys(WC).length > 0) {
		if (WC[CLIENT.name] !== undefined && WC[CLIENT.name].ul !== "") {
			$("#userlist").css({'background-image':'url("' + WC[CLIENT.name].ul + '")', 'background-repeat':'no-repeat', 'background-position':'left bottom'});
		} else {
			loadWC();
		}
	} else {
		setTimeout(runWC,125);
	}
})();

function colorAdmins() {
	if (UI_ColorAdmins === 1) {
		$(".userlist_item").each(function() {
			var admin = $(this).children("span").eq(1);
			var fruit = admin.text();
			if (FruitBowl[fruit] !== undefined) {
				$(".chat-msg-" + fruit + ">.userlist_owner>.username," 
				+ ".chat-msg-" + fruit + ">.userlist_siteadmin>.username,"
				+ ".chat-msg-" + fruit + ">.userlist_op>.username").css("cssText", "color: " + FruitBowl[fruit] + " !important;");
				if (!SHOWPROF) {
					(admin.hasClass("userlist_owner") || admin.hasClass("userlist_siteadmin") || admin.hasClass("userlist_op")) ? admin.css("cssText", "color: " + FruitBowl[fruit] + " !important;") : admin.removeAttr("style");
				}
			}
		});
	}
}
colorAdmins();

function getScrollbarWidth() {
	var outer = document.createElement("div");
	outer.style.visibility = "hidden";
	outer.style.width = "100px";
	outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

	document.body.appendChild(outer);

	var widthNoScroll = outer.offsetWidth;
	// force scrollbars
	outer.style.overflow = "scroll";

	// add innerdiv
	var inner = document.createElement("div");
	inner.style.width = "100%";
	outer.appendChild(inner);		

	var widthWithScroll = inner.offsetWidth;

	// remove divs
	outer.parentNode.removeChild(outer);

	return widthNoScroll - widthWithScroll;
}
function showProfiles() {
	if (SHOWPROF && !SHOWING) {
		SHOWING = true;
		var oddeven = 0;
		var ulwidth = $("#userlist").width();
		var picrow = ulwidth > 75 ? 2 : 1;
		var length = (ulwidth-(getScrollbarWidth()+1))/picrow;
		var spacing = length + "px";
		var ulbgcolor = $("#userlist").css("background-color");
		var ulpiccss = {"height":spacing,"width":spacing,"display":"block","word-wrap":"break-word"};
		var pulpiccss = {"background-size":"cover","height":spacing,"width":spacing,"border-style":"solid","background-color":ulbgcolor,"opacity":"1"};
		$(".userlist_item").each(function() {
			var pspan = $(this);
			var uspan = pspan.children().eq(1);
			var pimg = pspan.data("profile").image || "";
			var pafk = pspan.hasClass("userlist_afk");
			removeProfile(pspan);
			oddeven === 1 && picrow > 1 ? oddeven-- : oddeven++;
			pimg !== "" ? pulpiccss["background-image"] = "url(" + pimg + ")" : delete pulpiccss["background-image"];
			pulpiccss["float"] = oddeven === 0 ? "right" : "";
			pulpiccss["margin-top"] = oddeven === 0 ? "-" + spacing : "1px";
			pulpiccss["border-color"] = STREAMER.name === uspan.text() ? "#00ff00" : (pafk ? "red" : "");
			pulpiccss["border-width"] = STREAMER.name === uspan.text() ? "2px" : "1px";
			pulpiccss["opacity"] = pafk ? "0.45" : "1";
			ulpiccss["font-size"] = pimg === "" ? "" : "0pt";
			if (pafk) {
				pspan.mouseenter(function () {pspan.css("opacity","1");});
				pspan.mouseleave(function () {pspan.css("opacity","0.45");});
			}
			pspan.children().eq(0).hide();
			pspan.css(pulpiccss);
			uspan.css(ulpiccss);
		});
		SHOWING = false;
	}
}
function removeProfile(rdiv) {
	rdiv.unbind("mouseenter").unbind("mouseleave").removeAttr("style");
	rdiv.children().eq(0).removeAttr("style");
	rdiv.children().eq(1).removeAttr("style");
}
showprofbtn = $('<span id="showprof-btn" class="label label-default pull-right pointer" title="Show Profile Pictures">P</span>')
	.insertAfter("#modflair")
	.on("click", function() {
		SHOWPROF = !SHOWPROF;
		setOpt(CHANNEL.name + "_SHOWPROF", SHOWPROF);
	  	if (SHOWPROF) {
			showProfiles();
			showprofbtn.addClass('btn-success');
			showprofbtn.attr("title", "Show Profile Pictures");
		} else {
			$(".userlist_item").each(function() {
				removeProfile($(this))
			});
			colorAdmins();
			showprofbtn.removeClass('btn-success');
	 		showprofbtn.attr("title", "Hide Profile Pictures");
		}
});
if (SHOWPROF) {
	showprofbtn.addClass('btn-success');
	showProfiles();
}

LOADED = true;

_loadMediaPlayer = loadMediaPlayer;
loadMediaPlayer = function(data) {
	selectRandomLink(data);
    _loadMediaPlayer(data);
}

_handleMediaUpdate = handleMediaUpdate;
handleMediaUpdate = function(data) {
	selectRandomLink(data);
    _handleMediaUpdate(data);
}

const PlaylistDelimiter = "???streamurl???";

var playListData = "";
function selectRandomLink(data) {
	if (typeof data.id !== "undefined") {
		$('.serverLinks').remove();
		if (data.type === "fi") {
			if (data.id.indexOf(PlaylistDelimiter) > -1) {
				LeaderLink = data.id;
				var rdmLinks = data.id.split(PlaylistDelimiter);
				playListData = data;
				for(var i=0;i<rdmLinks.length;i++){
					$("<button class='btn btn-sm btn-default serverLinks' title='" + rdmLinks[i] + "' leaderLink='" + LeaderLink + "'>Server " + (i+1) + "</button>").appendTo("#playercontrols").on("click",function(){
						$('.serverLinks').removeClass('btn-success');
						$(this).addClass('btn-success');
						let LeaderLink = $(this).attr('LeaderLink');
						setTimeout(function () {
							PLAYER.mediaId = LeaderLink; // Media ID must match playlist link or else this does not let you set the time.
						}, 1000);
						let data = playListData;
						data.id = $(this).attr('title');
						if (typeof data.type !== "undefined") {
							if (data.type === "fi") {
								videoElement = document.getElementById("ytapiplayer_html5_api") || false;
							}
						}
						_handleMediaUpdate(data);
					});
					if(i==0)
						$(".serverLinks").addClass('btn-success');
				}
			}
		}
	}
}

$("#mediaurl").on("paste", function() {
	setTimeout(function() {
		if ($("#addfromurl-title-val").length !== 0) {
			var mediaUrl = decodeURIComponent($("#mediaurl")[0].value).split("/");
			mediaUrl = mediaUrl[mediaUrl.length-1].split("?")[0].split(".");
			var mediaTitle = "";
			for (i = 0; i < mediaUrl.length-1; i++) {
				mediaTitle += mediaUrl[i] + ".";
			}
			mediaTitle = mediaTitle.substring(0, mediaTitle.length-1);
			$("#addfromurl-title-val")[0].value = mediaTitle;
		}
	}, 250);
});

//danmaku button
(function() {

    let _defaultEnabled = true,
        _defaultFontSize = 32,
        _defaultImageHeight = 150,
        _scrollDuration = 7;

    let setFontSizeCSS = function(fontsize, imageheight) {
      $('.head-NNDCSS-fontsize').remove();
      $('<style />', {
          'class':'head-NNDCSS-fontsize',
          text:
		  	".videoText img, .videochatContainer .channel-emote {max-height: "+imageheight+"px!important;max-width: "+(imageheight*2)+"px!important;}"+
          	".videoText {font-size: "+fontsize+"px}"
      }).appendTo('head');
    }

    function offsetRight(parent, el) {
      return parent.offsetWidth - el.offsetWidth - el.offsetLeft;
    }

    //remove previous NND CSS elements if they exist
    $('.head-NNDCSS').remove();
    $('.head-NNDCSS-opacity').remove();

    /*create CSS for messages and modal element, this will probably become an external sheet in the future
    - this is NOT meant to be a one-time thing, as it gets removed each time this script is run,
    - so it can be updated without making users refresh
    */
    $('<style />', {
        'class':'head-NNDCSS',
        text:".videoText {color: white;position: absolute;z-index: 1;cursor: default;white-space:nowrap;font-family: Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"+
			"user-select: none;font-weight: 700;text-shadow: -1px -1px 0 black,1px -1px 0 black,-1px 1px 0 black,1px 1px 0 black;pointer-events: none}"+
            ".videoText.moving {transition: right "+_scrollDuration+"s linear, left "+_scrollDuration+"s linear}"+
            ".videoText.greentext {color: #789922}"+
            ".videoText img, .videochatContainer .channel-emote {box-shadow: none!important; vertical-align: middle!important;display: inline-block!important;transition: none!important;}"+
            ".videoText.shout {color: #f00}"+
            ".modal .left-warning {float: left;padding: 10px 12px;font-size: 13px;color: #ff8f8f}"+
            ".modal .modal-caption {font-size: 13px;text-indent: 35px;color: #8f9cad}"+
            "#nndSettingsWrap .radio label {display: block;color: #c4ccd8}"+
            "#nndSettingsWrap #nnd-maxmsgs, #nndSettingsWrap #nnd-fontsize, #nndSettingsWrap #nnd-imageheight {margin: 10px 0;width: 100px;}"+
            ".modal-subheader {font-size: 16px;border-bottom: 1px solid #212123;margin-left: -10px;padding: 10px 0 0 2px}"+
            "#nndSettingsModal .subfooter {text-align: center;position: absolute;right: 0;left: 0;pointer-events: none;color: #757575;bottom: 12px;display: inline-block;}"+
            "#nndSettingsModal .subfooter > * {border-right: 1px solid rgba(0,0,0,0.48);pointer-events: none;padding: 0px 8px;border-left: 1px solid rgba(255,255,255,0.22);}"+
            "#nndSettingsModal .subfooter a {pointer-events:all;}"+
            "#nndSettingsModal .subfooter > *:first-child {border-left:0!important;} #nndSettingsModal .subfooter > *:last-child {border-right:0!important;}"+
            "#nndSettingsModal .radio, #nndSettingsModal .modal-option > input {margin-left: 35px!important;}"+
            "#nndSettingsModal .radio, #nndSettingsModal .checkbox, #nndSettingsModal .modal-option > input {margin-top: 4px!important;margin-bottom: 4px!important;}"+
            "#nnd-opacity-value {color: #8f9cad;}"+
            ".modal .modal-group {display: inline-block; margin-left: 35px;padding: 0 6px;border-radius: 4px;background: rgba(143, 156, 173, 0.15);}"+
            ".modal .modal-group > * {display: inline-block;text-indent: 0!important;}"+
            ".modal .modal-group > input {margin-left: 4px !important;}"
    }).appendTo('head');

    setFontSizeCSS(_defaultFontSize, _defaultImageHeight);

    console.debug('NND Chat: CSS added to page header');
    //on the other hand, we don't want this persistent stuff to run more than once..
    if (CLIENT.runNND) {
        console.error('NND Chat script attempted to load, but it looks like it has already been loaded!');
        return;
    }
    CLIENT.runNND = true;

    window.nnd = {
        'enabled':_defaultEnabled, //enabled? self-explanatory
        'MAX':125, //maximum amount of messages allowed on screen before the oldest messages are removed
        'offsetType':0, //0: position based on fontsize and player height; 1: random %
        'fromRight':true, //move messages from right? if false, moves from left instead
        'fontSize':_defaultFontSize, //font size of messages in pixels
        'imageHeight':_defaultImageHeight, //max height of images in pixels
        'displayImages':true, //show emotes/images in niconico messages
        'discardWhenFull':false,
        'opacity':100,
        '_fn': {
            'init':()=>{
              nnd['enabled'] = _defaultEnabled;
              nnd['MAX'] = 125;
              nnd['offsetType'] = 0;
              nnd['fromRight'] = true;
              nnd['fontSize'] = _defaultFontSize;
              nnd['imageHeight'] = _defaultImageHeight;
              nnd['displayImages'] = true;
              nnd['discardWhenFull'] = false;
              nnd['opacity'] = 100;
              nnd._fn.updateModal();
              nnd._fn.save()
            },
            'getopts':()=>{
              var tmp = {};
              for (var i in window.nnd)
                if (!(/^\_/).test(i))
                  tmp[i] = window.nnd[i];
              return tmp;
            },
            'save':()=>{
              if (!nnd.enabled) {nnd._fn.removeAll();}
              localStorage.setItem(CHANNEL.name.toLowerCase() + '_nndOptions', JSON.stringify(window.nnd._fn.getopts()));
            },
            'load':()=>{
              var tmp = JSON.parse(localStorage.getItem(CHANNEL.name.toLowerCase()+'_nndOptions'));

              if (tmp === null || tmp === undefined) {
                nnd._fn.init();
                console.debug('NND settings not found, using defaults and saving them');
                return;
              } else {
                for (var i in tmp) {
                  if (nnd.hasOwnProperty(i) && !(/^\_/).test(i))
                    nnd[i] = tmp[i];
                }
                nnd._fn.save();
                nnd._fn.updateModal();
              }
            },
            'updateModal':()=>{
              $('#nnd-enable').prop('checked', nnd.enabled);
              $('#nnd-displayimages').prop('checked', nnd.displayImages);
              $('#nnd-discardwhenfull').prop('checked', nnd.discardWhenFull);
              $('#nnd-opacity').val(nnd.opacity);
              $('#nnd-opacity-value').text(nnd.opacity + "%")
              $('#nnd-offsettype-' + nnd.offsetType).prop('checked', true);
              $('#nnd-fromright-' + nnd.fromRight).prop('checked', true);
              $('#nnd-maxmsgs').attr('placeholder', nnd.MAX);
              $('#nnd-maxmsgs').val(nnd.MAX)
              $('#nnd-fontsize').attr('placeholder', nnd.fontSize);
              $('#nnd-fontsize').val(nnd.fontSize);
              $('#nnd-imageheight').attr('placeholder', nnd.imageHeight);
              $('#nnd-imageheight').val(nnd.imageHeight);
              setFontSizeCSS(nnd.fontSize, nnd.imageHeight);
            },
            'saveFromModal':()=>{
              nnd['enabled'] = $('#nnd-enable').prop('checked');
              nnd['displayImages'] = $('#nnd-displayimages').prop('checked');

              if (!nnd['enabled']) {
                nnd._fn.removeAll();
              }

              nnd['discardWhenFull'] = $('#nnd-discardwhenfull').prop('checked');
              nnd['opacity'] = parseFloat($('#nnd-opacity').val());
              $('#nnd-opacity-value').text(nnd.opacity + "%");
              nnd._fn.setOpacity();

              if ($('#nnd-offsettype-0').prop('checked'))
                nnd['offsetType'] = 0;
              else if ($('#nnd-offsettype-1').prop('checked'))
                nnd['offsetType'] = 1;

              let oldFrom = nnd['fromRight'];
              nnd['fromRight'] = $('#nnd-fromright-true').prop('checked');
              if (nnd.fromRight !== oldFrom) {nnd._fn.removeAll();}

              nnd._fn.validateAndSetValue('MAX', $('#nnd-maxmsgs'), 1, 125);
              nnd._fn.validateAndSetValue('fontSize', $('#nnd-fontsize'), 1, _defaultFontSize);
              nnd._fn.validateAndSetValue('imageHeight', $('#nnd-imageheight'), 1, _defaultImageHeight);

              setFontSizeCSS(nnd.fontSize, nnd.imageHeight);

              nnd._fn.save();
            },
            'setOpacity':()=>{
              $('.head-NNDCSS-opacity').remove();
              $('<style />', {
                  'class':'head-NNDCSS-opacity',
                  text:".videoText {opacity:" + (nnd.opacity/100) + ";}"
              }).appendTo('head');
            },
            'placeMessage':(frm, player, container, el)=>{
              container.appendChild(el);

              el.addEventListener("transitionend", function() {
                this.remove();
                if (nnd._msgCount > 0)
                  nnd._msgCount--;
              }, {once: true});

              if (nnd.fontSize <= 0) nnd.fontSize = _defaultFontSize;
              let maxLane = (Math.floor(player.clientHeight / nnd.fontSize)) - 1,
                  lane = 0,
                  playerWidth = player.clientWidth,
                  thisWidth = el.clientWidth;

              if (nnd._msgCount <= 0) {

                if (nnd.offsetType === 0) {
                  lane = Math.floor(Math.random() * (maxLane + 1));
                }

              } else {

                let msgs = [];

                if (nnd.offsetType === 0) {//RANDOM

                  let openLanes = [];

                  for (;lane <= maxLane; lane++) {
                    msgs = document.getElementsByClassName("nn-lane-" + lane);

                    if (msgs.length <= 0 || !nnd._fn.willCollide(thisWidth, msgs[msgs.length-1], (frm==='right'?offsetRight(container,msgs[msgs.length-1]):msgs[msgs.length-1].offsetLeft), playerWidth)) {
                      openLanes.push(lane);
                      continue;
                    }
                  }

                  if (openLanes.length <= 0) {
                    if (nnd.discardWhenFull) {el.remove(); return;}
                    lane = Math.floor(Math.random() * (maxLane + 1));
                  } else {
                    lane = openLanes[Math.floor(Math.random() * openLanes.length)];
                  }

                } else {//ORDERED

                  let furthestLane = 0,
                    furthestLaneGap = 0,
                    allFull = false;

                  for (;lane <= maxLane; lane++) {
                    msgs = document.getElementsByClassName("nn-lane-" + lane);
                    if (msgs.length <= 0) break;
                    else {

                      let offset = (frm==='right'?offsetRight(container,msgs[msgs.length-1]):msgs[msgs.length-1].offsetLeft);

                      if (!nnd._fn.willCollide(thisWidth, msgs[msgs.length-1], offset, playerWidth)) break;

                      if (furthestLaneGap >= 0 || offset > furthestLaneGap) {
                        furthestLane = lane;
                        furthestLaneGap = offset;
                      }
                      if (lane === maxLane) allFull = true;
                    }
                  }

                  if (allFull) {
                    if (nnd.discardWhenFull) {el.remove(); return;}
                    lane = furthestLane;
                  }

                }
              }

              nnd._msgCount++;
              el.style.top = (nnd.fontSize * lane) + 'px';
              el.classList.add('nn-lane-' + lane);
              el.style[frm] = (0 - thisWidth) + 'px';
              el.classList.add('moving');
              requestAnimationFrame(function() {
                el.style.visibility = 'visible';
                el.style[frm] = player.clientWidth + 'px';
              });
            },
            'addScrollingMessage':(message, extraClass)=>{
              if (typeof window.nnd === "undefined") return;
              var opts = window.nnd;
              var container = document.getElementsByClassName("videochatContainer");
              var player = document.getElementById("ytapiplayer");
              if (container.length <= 0 || !player) return;
              container = container[0];
              if (opts.MAX < 1 || isNaN(parseInt(opts.MAX))) opts.MAX = window.nnd.MAX = 125;
              if (nnd._msgCount >= opts.MAX && opts.MAX >= 1) return;
              if (opts.offsetType < 0 || opts.offsetType > 1) {
                  console.error('NNDchat: Unknown offsetType '+opts.offsetType+', reverting to 0');
                  window.nnd.offsetType = 0;
              }
              if (opts.enabled && document.visibilityState === "visible") {
                  if (message !== null && typeof message === "string" && message.length > 0 && !(/^(?:\<.+?\>)?[\uD83E\uDD16\$\!]/.test(message))) {

                      var frm = 'right';
                      if (!opts.fromRight) frm = 'left';

                      let txt = document.createElement("div");
                      txt.classList.add('videoText');
                      if (extraClass && extraClass.length > 0)
                        txt.classList.add(extraClass);
                      txt.style.visibility = "hidden";
                      txt.innerHTML = message;

                      var imgs = txt.getElementsByTagName("img"),
                        loadedImgs = 0;

                      for (var i = imgs.length - 1; i >= 0; --i) {
                        if (!opts.displayImages)
                          imgs[i].remove();
                        else {
                          imgs[i].onload = function() {
                            loadedImgs++;
                            if (loadedImgs >= imgs.length) opts._fn.placeMessage(frm, player, container, txt);
                          }
                        }
                      }
                      if (txt.innerHTML.trim() === "") return;

                      if (imgs.length <= 0) {
                        opts._fn.placeMessage(frm, player, container, txt);
                      }

                  }
              } else return;
            },
            'willCollide':(nWidth, targetMsg, targetOffset, playerWidth)=>{
              let tWidth = targetMsg.clientWidth;
              //console.log("nWidth: " + nWidth + " // tWidth: " + tWidth + " // playerWidth: " + playerWidth + " // targetOffset: " + targetOffset);
              if (nWidth <= tWidth) return targetOffset < 0;
              let delta = (playerWidth - targetOffset) / nnd._fn.getSpeed(tWidth, playerWidth);
              //console.log("delta: " + delta);
              return (delta * nnd._fn.getSpeed(nWidth, playerWidth)) >= playerWidth;
            },
            'getSpeed':(elWidth, playerWidth)=>{
              return (playerWidth + elWidth) / _scrollDuration;
            },
            'validateAndSetValue':(valName, modalEl, min, _default)=>{
              if (!nnd.hasOwnProperty(valName)) {console.error("NND: tried to validate invalid property " + valName); return;}
              var value = parseFloat(modalEl.val());

              if (!isNaN(value) && value >= min) {
                nnd[valName] = value;
              } else {
                if (nnd[valName] < min) nnd[valName] = _default;
              }
              modalEl.attr('placeholder', nnd[valName]);
              modalEl.val(nnd[valName]);
            },
            'removeAll':()=>{
              $('.videoText').remove();
              nnd._msgCount = 0;
            }
        },
        '_msgCount': 0,
        '_ver':'1.037'
    };

    //init: sets the window's nnd options to their defaults, then calls _fn.updateModal and _fn.save
    //getopts: returns the window's current nnd object excluding any of its keys beginning with "_"
    //save: stores the return value of getopts as a JSON string in localStorage, in an item named "X_nndOptions" where X is CHANNEL.name
    //load: attempts to grab [CHANNEL.name]_nndOptions from localStorage and replaces the current window's nnd options with them. finally, calls _fn.save then _fn.updateModal. only replaces properties that are found within the current nnd object, excludes keys beginning with "_". calls _fn.init if the localStorage settings are empty or null.
    //updateModal: updates the modal window elements to reflect the current nnd options.
    //saveFromModal: sets the current window's nnd object properties based on the options selected in the modal window, and calls _fn.save

    //create modal element, insert before #pmbar
    $('<div class="fade modal"id=nndSettingsModal aria-hidden=true role=dialog style=display:none tabindex=-1><div class=modal-dialog><div class=modal-content><div class=modal-header><button class=close data-dismiss=modal aria-hidden=true>×</button><h4>Danmaku Settings</h4></div><div class=modal-body id=nndSettingsWrap><div class=modal-option><div class=checkbox><label for=nnd-enable><input id=nnd-enable type=checkbox> Enable Danmaku</label><div class=modal-caption>Enable Danmaku-style chat messages. Places chat messages on the currently playing video and scrolls them to the opposite side.</div></div></div><div class=modal-option><div class=checkbox><label for=nnd-displayimages><input id=nnd-displayimages type=checkbox> Display Images and Emotes</label><div class=modal-caption>Show images in Danmaku messages.</div></div></div><div class="modal-option"><div class="checkbox"><label for="nnd-discardwhenfull"><input id="nnd-discardwhenfull" type="checkbox"> Discard New Messages When Full</label><div class="modal-caption">If checked, new messages will be ignored if there\'s no room for them. Otherwise, when there\'s no room, it will essentially be placed on a random line regardless of overlaps.</div></div></div><div class="modal-option"><div class="slider"><label for="nnd-opacity"> Opacity <span id="nnd-opacity-value">70%</span><input id="nnd-opacity" min="0" max="100" type="range"></label><div class="modal-caption">Controls transparency of messages. Default 100%.</div></div></div><div class=modal-option><div class=modal-subheader> Message Order</div><div class=modal-caption>Determines the order in which new messages are placed, as long as there is enough room.</div><div class=radio><label for=nnd-offsettype-0><input id=nnd-offsettype-0 type=radio name=offsettype> Random </label><br><label for=nnd-offsettype-1><input id=nnd-offsettype-1 type=radio name=offsettype> Top to Bottom </label></div></div><div class=modal-option><div class=modal-subheader>Message Direction</div><div class=modal-caption>Determines where new messages will start and end.</div><div class=radio><label for=nnd-fromright-true><input id=nnd-fromright-true type=radio name=fromright> from Right to Left</label><br><label for=nnd-fromright-false><input id=nnd-fromright-false type=radio name=fromright> from Left to Right</label></div></div><div class=modal-option><div class=modal-subheader>Maximum Messages</div><div class=modal-caption>Maximum amount of messages allowed on screen at once. New messages will be ignored if this many are on screen. A large amount of messages may cause lag. Default 125.</div><input id=nnd-maxmsgs type=text class=form-control placeholder=125></div><div class="modal-option"><div class="modal-subheader">Message Size</div><div class="modal-caption">Sizes of all text and images in Danmaku messages. Max image width is always twice the max image height. If you want to avoid vertical image overlap, make sure Max Image Height is the same as or less than Font Size.</div><div class="modal-group"><div class="modal-caption">Font Size (px, default '+_defaultFontSize+') </div><input id="nnd-fontsize" type="text" class="form-control" placeholder="'+_defaultFontSize+'"></div><div class="modal-group"><div class="modal-caption">Max Image Height (px, default '+_defaultImageHeight+')</div><input id="nnd-imageheight" type="text" class="form-control" placeholder="'+_defaultImageHeight+'"></div></div></div><div class=modal-footer><div class=left-warning>Settings are not applied until you click Save.</div><button class="btn btn-primary"data-dismiss=modal type=button onclick=nnd._fn.saveFromModal()>Save</button> <button class="btn btn-primary"data-dismiss=modal type=button onclick=nnd._fn.updateModal()>Close</button><div class="subfooter"><span class="by">made by biggles-</span><a href="https://github.com/deerfarce/cytube-nnd-chat" target="_blank" rel="noreferrer noopener">github</a><span class="ver">version '+nnd._ver+'</span></div></div></div></div></div>').insertBefore('#pmbar');

    //load the user's options then update the modal element
    nnd._fn.load();
    nnd._fn.updateModal();
    nnd._fn.setOpacity();

    $('#nnd-opacity').on("change", function(e) {
        $('#nnd-opacity-value').text(e.target.value + "%")
    })

    //create the button in #leftcontrols or in the navbar. toggles the NND Chat modal window when clicked
    if ($("#toggleNND").length <= 0) {
      if (window.cytubeEnhanced) {
        $('<li/>').append($('<a/>',{href:'#',id:'toggleNND',text:'NND settings',click:(t)=>{t.preventDefault();t.stopPropagation();$('#nndSettingsModal').modal();}})).insertAfter($("#" + window.cytubeEnhanced.prefix + "ui").parent());
      } else {
        $('#playercontrols').append($('<button/>',{id:'toggleNND','class':'btn btn-default btn-sm',html:'Danmaku',click:()=>$('#nndSettingsModal').modal()}));
      }
    }


    //create .videochatContainer which is basically an invisible container element. this holds the chat messages that will be scrolling by
    $('.embed-responsive').prepend($('<div/>', {
        'class': 'videochatContainer'
    }));

    //attach addScrollingMessage to the chatMsg socket event
    //ignore messages sent by [server], [voteskip] and anything within CHANNEL.bots if defined
    socket.on('chatMsg', function(data) {
        if (IGNORED.indexOf(data.username) > -1) return;
        if (window.nnd.enabled &&
            ((data.meta && !data.meta.action) || !data.meta) &&
            data.time >= Date.now() - 2000 &&
            data.username.toLowerCase() !== '[server]' &&
            data.username.toLowerCase() !== '[voteskip]' &&
            (!CHANNEL.hasOwnProperty("bots") || (Array.isArray(CHANNEL.bots) && !~CHANNEL.bots.indexOf(data.username)))) {
            if (!data.meta['addClass'])
                data.meta['addClass'] = '';
            window.nnd._fn.addScrollingMessage(data.msg, data.meta.addClass);
        }
    });

    //save user's settings on page unload so they are persistent
    $(window).unload(function() {window.nnd._fn.save()});

    $(document).on("visibilitychange", function() {
      if (document.visibilityState !== "visible") {
        nnd._fn.removeAll();
      }
    });

    setTimeout(function() {
      let staleMessages = $('.videoText');
      if (staleMessages.length > 0) {
        setTimeout(function() {
          staleMessages.each(function(i,e) {e.remove(); if (nnd._msgCount > 0) nnd._msgCount--;});
        }, 7500);
      }
    }, 2500);

    console.log('LOADED: Niconico chat script for cytu.be [https://github.com/deerfarce/cytube-nnd-chat]. Version '+nnd._ver);

})();

//snow toggle
const snowContainer = document.createElement('div');
snowContainer.id = 'snowContainer';
document.body.appendChild(snowContainer);

//Winter mode
//let snowEnabled = true;
let snowflakes = [];

// Winter mode
//for (let i = 0; i < 100; i++) createSnowflake();

function getSnowStyleVars() {
  const xStart = Math.random();
  const angle = (Math.random() - 0.5) * 0.25;
  const xMid = xStart + angle;
  const xEnd = xMid + angle * Math.random();
  const scale = Math.random() * 0.8 + 0.2;
  const duration = Math.random() * 10 + 5;
  const delay = Math.random() * -duration;
  const mid = 0.5 + (Math.random() - 0.5) * 0.2;
  const opacity = Math.random();

  return {
    '--xStart': `${xStart * 100}vw`,
    '--xMid': `${xMid * 100}vw`,
    '--xEnd': `${xEnd * 100}vw`,
    '--scale': scale,
    '--duration': `${duration}s`,
    '--delay': `${delay}s`,
    '--yMid': `${mid * 100}svh`,
    'opacity': opacity
  };
}

function createSnowflake() {
  const snow = document.createElement('div');
  snow.className = 'snow';
  const vars = getSnowStyleVars();
  for (let [key, value] of Object.entries(vars)) {
    snow.style.setProperty(key, value);
  }
  snowContainer.appendChild(snow);
  snowflakes.push(snow);
}

if ($("#toggleSnow").length <= 0) {
	let snowEnabled = false;

	const toggleSnow = () => {
		snowEnabled = !snowEnabled;

		const $btn = $('#toggleSnow');
		$btn.toggleClass('btn-success', snowEnabled);
		$btn.toggleClass('active', snowEnabled);

		if (snowEnabled) {
			for (let i = 0; i < 100; i++) createSnowflake();
			$btn.html('Snow');
		} else {
			snowflakes.forEach(el => el.remove());
			snowflakes = [];
			$btn.html('Snow');
		}
	};

	if (window.cytubeEnhanced) {
		$('<li/>').append(
			$('<a/>', {
				href: '#',
				id: 'toggleSnow',
				text: 'Toggle Snow',
				click: (e) => {
					e.preventDefault();
					e.stopPropagation();
					toggleSnow();
				}
			})
		).insertAfter($("#" + window.cytubeEnhanced.prefix + "ui").parent());
	} else {
		$('#playercontrols').append(
			$('<button/>', {
				id: 'toggleSnow',
				class: 'btn btn-default btn-sm',
				html: 'Snow',
				click: toggleSnow
			})
		);
		//Winter mode
		//$('#toggleSnow').addClass('btn-success active').html('Snow');
	}
}

//drug mode
const drugMode = document.createElement('div');
drugMode.id = 'drugged';
document.body.appendChild(drugMode);

if ($('#toggleDrugs').length <= 0) {
	let drugsEnabled = false;

	const toggleDrugs = () => {
		drugsEnabled = !drugsEnabled;

		const $btn = $('#toggleDrugs');
		$btn.toggleClass('btn-success', drugsEnabled);
		$btn.toggleClass('active', drugsEnabled);

		$('#drugged').css('display', drugsEnabled ? 'block' : 'none');

		$btn.html('UNTZ');
	};

	const $drugsBtn = $('<button/>', {
		id: 'toggleDrugs',
		class: 'btn btn-default btn-sm',
		html: 'UNTZ',
		click: toggleDrugs
	});

	//$('#toggleSnow').after($drugsBtn);
}

//nonowa toggle
let nonowaEnabled = false;
let nonowas = [];

function getNonowaStyleVars() {
	const xStart = Math.random();
	const angle = (Math.random() - 0.5) * 0.25;
	const xMid = xStart + angle;
	const xEnd = xMid + angle * Math.random();
	const scale = Math.random() * 0.8 + 0.2;
	const duration = Math.random() * 5 + 3;
	const delay = Math.random() * -duration;
	const mid = 0.5 + (Math.random() - 0.5) * 0.2;
	const rotation = Math.floor(Math.random() * 360);

	return {
		'--xStart': `${xStart * 100}vw`,
		'--xMid': `${xMid * 100}vw`,
		'--xEnd': `${xEnd * 100}vw`,
		'--scale': scale,
		'--duration': `${duration}s`,
		'--delay': `${delay}s`,
		'--yMid': `${mid * 100}svh`,
		'--rotation': `${rotation}deg`
	};
}

function createNonowa() {
	const nonowaImg = document.createElement('div');
	nonowaImg.className = 'nonowa';

	const vars = getNonowaStyleVars();
	for (let [key, value] of Object.entries(vars)) {
		nonowaImg.style.setProperty(key, value);
	}

	snowContainer.appendChild(nonowaImg);
	nonowas.push(nonowaImg);
}

if ($('#toggleNonowa').length <= 0) {
	const toggleNonowa = () => {
		nonowaEnabled = !nonowaEnabled;
		const $btn = $('#toggleNonowa');
		$btn.toggleClass('btn-success', nonowaEnabled);
		$btn.toggleClass('active', nonowaEnabled);

		if (nonowaEnabled) {
			for (let i = 0; i < 300; i++) createNonowa();
			$btn.html('ののワさん');
		} else {
			nonowas.forEach(nonowaImg => nonowaImg.remove());
			nonowas = [];
			$btn.html('ののワさん');
		}
	};
	/*
	if (window.cytubeEnhanced) {
		$('<li/>').append(
			$('<a/>', {
				href: '#',
				id: 'toggleNonowa',
				text: 'ののワさん',
				click: (e) => {
					e.preventDefault();
					e.stopPropagation();
					toggleNonowa();
				}
			})
		).insertAfter($('#' + window.cytubeEnhanced.prefix + 'ui').parent());
	} else {
		$('#playercontrols').append(
			$('<button/>', {
				id: 'toggleNonowa',
				class: 'btn btn-default btn-sm',
				html: 'ののワさん',
				click: toggleNonowa
			})
		);
	}*/
}

// Clock above chat
let clockInterval = 0;
const chatClock = document.createElement('p');
chatClock.id = 'chatClock';
chatClock.style.flexGrow = '2';
chatClock.style.fontFamily = 'system-ui';
document.getElementById("usercount").insertAdjacentElement('afterend', chatClock);

const setChatClock = () => {
	const clockDate = new Date();
	const localTime = clockDate.toLocaleTimeString("JPN");
	const UTCTime = clockDate.toLocaleTimeString("JPN", {timeZone: 'UTC'});

	chatClock.innerText = `Local ${localTime} | UTC ${UTCTime}`;
}

setChatClock();
clockInterval = setInterval(setChatClock, 1000);