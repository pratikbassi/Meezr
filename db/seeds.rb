# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
names = ['Roxy Skillen',
  'Zilvia Peto',
  'Padgett Tandy',
  'Nadeen Dils',
  'Edmund Kilvington',
  'Dari Halegarth',
  'Valina Siggens',
  'Dion Snowden',
  'Kerwin Plumer',
  'Esteban Stenett',
  'Jorie Dyble',
  'Sue Doldon',
  'Bendicty Yurkov',
  'Cordelia Dodle',
  'Garret Martinovic',
  'Masha Bungey',
  'Tripp Cabrer',
  'Westleigh Laux',
  'Wakefield Isitt',
  'Vern Galbraith',
  'Jaquelin Ketteman',
  'Berthe De Hooch',
  'Dunstan Crate',
  'Coretta Rickson',
  'Delores Rohlfing',
  'Retha Maruska',
  'Jodie Peele',
  'Hughie Rees',
  'Justus Hartridge',
  'Leoine Poe',
  'Loleta Antonioni',
  'Lucia Yewdale',
  'Nate Duprey',
  'Pru Kernley',
  'Allayne Cassey',
  'Clair Trotter',
  'Arleen Sandell',
  'Harris Krzysztof',
  'Jamey Bartaloni',
  'Tobey Lenoir',
  'Lanni Cockrill',
  'Horace Cumming',
  'Griz Larter',
  'Lanny Wilce',
  'Avery Senter',
  'Goldie Denne',
  'Toma Fortman',
  'Mindy McLewd',
  'Shane Bracknall',
  'Letitia Francklin',
  'Chrysa Heddan',
  'Hannie Endean',
  'Mattie Penella',
  'Lucita Rolling',
  'Scottie Bertome',
  'Malinda Goggin',
  'Riordan Havenhand',
  'Eadith Lere',
  'Lindi Keiling',
  'Shannan Armitage',
  'Olivie Seaward',
  'Trenton Yonge',
  'Reynolds Klimke',
  'Shaun Knoton',
  'Barbe Brunelleschi',
  'Ophelia Bidewel',
  'Rhiamon Stoate',
  'Constanta Chalkly',
  'Edwina Rust',
  'Damien Cowins',
  'Corena Jeanequin',
  'Montague Elsegood',
  'Nicolina Wharton',
  'Jennifer Farraway',
  'Georgina Seals',
  'Hetti Jayne',
  'Vanessa MacGillavery',
  'Kerrill Binfield',
  'Christine Filyushkin',
  'Hobie Gregoraci',
  'Perla Sharpe',
  'Chalmers Lowres',
  'Tove Charer',
  'Albert Brownscombe',
  'Nobe Cronshaw',
  'Corri McLeary',
  'Bill Lared',
  'Meyer Trahmel',
  'Harland Cornuau',
  'Edan Doidge',
  'Martguerita Tattershaw',
  'Sanford Evamy',
  'Frank Tunnacliffe',
  'Melisandra Anthoin',
  'Jay Dyett',
  'Esther Keal',
  'Clay Shovelbottom',
  'Mariann Arnet',
  'Itch Dallywater',
  'Rafa Whiten'
  ]
emails = ['rtimothy0@mashable.com',
  'gtixier1@columbia.edu',
  'vpurchon2@who.int',
  'ababe3@slate.com',
  'ddat4@storify.com',
  'nbourton5@wikimedia.org',
  'fdome6@unblog.fr',
  'dsyddon7@dagondesign.com',
  'mcamin8@1und1.de',
  'bsimeons9@zimbio.com',
  'dspeakea@paginegialle.it',
  'slearoydb@umn.edu',
  'dbenionc@stanford.edu',
  'bswaned@wordpress.com',
  'lmccrossane@senate.gov',
  'owoodrofff@jiathis.com',
  'lballching@twitpic.com',
  'sporteoush@nifty.com',
  'klangfati@a8.net',
  'amccutheonj@bigcartel.com',
  'bwaythingk@cnbc.com',
  'gloyl@washingtonpost.com',
  'bmaggiorem@nyu.edu',
  'hcobleighn@squarespace.com',
  'eskatchero@so-net.ne.jp',
  'rsemoninp@admin.ch',
  'nopdenorthq@studiopress.com',
  'lcorwinr@ed.gov',
  'fregiss@shop-pro.jp',
  'bcastelint@tumblr.com',
  'atetlau@1688.com',
  'bmeltonv@lulu.com',
  'iwhopplesw@shinystat.com',
  'ddavillex@lycos.com',
  'arymery@netscape.com',
  'cbarwickz@e-recht24.de',
  'tkuschek10@webs.com',
  'twooffinden11@plala.or.jp',
  'urollings12@fc2.com',
  'jposkitt13@mysql.com',
  'cbowell14@goo.ne.jp',
  'diskower15@adobe.com',
  'rbabcock16@soup.io',
  'dwoollard17@businessinsider.com',
  'aemerson18@un.org',
  'rtison19@skyrock.com',
  'dbonsall1a@livejournal.com',
  'sgowanson1b@acquirethisname.com',
  'kdruitt1c@odnoklassniki.ru',
  'lkleinsmuntz1d@woothemes.com',
  'cshutt1e@instagram.com',
  'gmengue1f@canalblog.com',
  'bdeluca1g@earthlink.net',
  'smctague1h@wisc.edu',
  'aateggart1i@jugem.jp',
  'rshemwell1j@smugmug.com',
  'lould1k@webs.com',
  'adew1l@cnbc.com',
  'vchisolm1m@desdev.cn',
  'gburr1n@ask.com',
  'polfert1o@merriam-webster.com',
  'kmusla1p@google.co.uk',
  'awonfar1q@free.fr',
  'tludgrove1r@blogspot.com',
  'gmessom1s@devhub.com',
  'ghoyer1t@google.com.hk',
  'abohlsen1u@over-blog.com',
  'lcowthard1v@wordpress.com',
  'nmassingberd1w@wsj.com',
  'rdibson1x@tinyurl.com',
  'dargente1y@creativecommons.org',
  'amckiernan1z@cocolog-nifty.com',
  'horknay20@bbc.co.uk',
  'ftroni21@netlog.com',
  'kbrundall22@newyorker.com',
  'nyakunkin23@uol.com.br',
  'ckimm24@flickr.com',
  'abrough25@digg.com',
  'mbudd26@jalbum.net',
  'pcowdrey27@tmall.com',
  'kitter28@baidu.com',
  'pgershom29@europa.eu',
  'jead2a@live.com',
  'csallowaye2b@about.me',
  'bborkin2c@cpanel.net',
  'rribbon2d@bloglovin.com',
  'lbagehot2e@wired.com',
  'sbuffham2f@globo.com',
  'erannells2g@indiegogo.com',
  'bgraalmans2h@si.edu',
  'jdavidovitz2i@sciencedirect.com',
  'tfuzzard2j@auda.org.au',
  'bbritton2k@blogspot.com',
  'mmallam2l@loc.gov',
  'sgrealy2m@tripadvisor.com',
  'ngreenlees2n@unblog.fr',
  'hwarlow2o@xrea.com',
  'lgraves2p@qq.com',
  'kpepperd2q@prnewswire.com',
  'dgagg2r@blinklist.com'
  ]
passwords = ['Rosaceae',
  'Iridaceae',
  'Cannaceae',
  'Brassicaceae',
  'Loganiaceae',
  'Cyperaceae',
  'Physciaceae',
  'Polytrichaceae',
  'Myrtaceae',
  'Asteraceae',
  'Pottiaceae',
  'Asteraceae',
  'Loasaceae',
  'Fabaceae',
  'Lythraceae',
  'Melastomataceae',
  'Acanthaceae',
  'Malvaceae',
  'Valerianaceae',
  'Asteraceae',
  'Fabaceae',
  'Cyperaceae',
  'Fabaceae',
  'Fabaceae',
  'Campanulaceae',
  'Asteraceae',
  'Asteraceae',
  'Asteraceae',
  'Collemataceae',
  'Brassicaceae',
  'Asteraceae',
  'Iridaceae',
  'Asteraceae',
  'Asteraceae',
  'Polygonaceae',
  'Solanaceae',
  'Saxifragaceae',
  'Peltulaceae',
  'Convolvulaceae',
  'Polygonaceae',
  'Cyrillaceae',
  'Euphorbiaceae',
  'Fabaceae',
  'Lecanoraceae',
  'Rosaceae',
  'Sphagnaceae',
  'Cupressaceae',
  'Fabaceae',
  'Rosaceae',
  'Moraceae',
  'Polygonaceae',
  'Andreaeaceae',
  'Graphidaceae',
  'Rosaceae',
  'Cupressaceae',
  'Parmeliaceae',
  'Asteraceae',
  'Hymenophyllaceae',
  'Urticaceae',
  'Smilacaceae',
  'Cyperaceae',
  'Rosaceae',
  'Solanaceae',
  'Brassicaceae',
  'Ranunculaceae',
  'Rosaceae',
  'Linaceae',
  'Asteraceae',
  'Verrucariaceae',
  'Polygonaceae',
  'Asteraceae',
  'Rubiaceae',
  'Saxifragaceae',
  'Fabaceae',
  'Myrtaceae',
  'Lauraceae',
  'Apiaceae',
  'Iridaceae',
  'Apiaceae',
  'Aceraceae',
  'Celastraceae',
  'Ranunculaceae',
  'Agavaceae',
  'Fabaceae',
  'Cyperaceae',
  'Lythraceae',
  'Asteraceae',
  'Oxalidaceae',
  'Boraginaceae',
  'Caryophyllaceae',
  'Brassicaceae',
  'Saxifragaceae',
  'Convolvulaceae',
  'Asteraceae',
  'Asteraceae',
  'Rosaceae',
  'Violaceae',
  'Oleaceae',
  'Apiaceae',
  'Ranunculaceae'
  ]
images = ['http://dummyimage.com/750x589.png/ff4444/ffffff',
  'http://dummyimage.com/367x478.bmp/cc0000/ffffff',
  'http://dummyimage.com/923x934.png/5fa2dd/ffffff',
  'http://dummyimage.com/501x648.jpg/5fa2dd/ffffff',
  'http://dummyimage.com/728x706.jpg/dddddd/000000',
  'http://dummyimage.com/789x474.bmp/5fa2dd/ffffff',
  'http://dummyimage.com/722x523.bmp/cc0000/ffffff',
  'http://dummyimage.com/793x570.bmp/cc0000/ffffff',
  'http://dummyimage.com/345x589.bmp/dddddd/000000',
  'http://dummyimage.com/551x313.jpg/5fa2dd/ffffff',
  'http://dummyimage.com/520x922.png/dddddd/000000',
  'http://dummyimage.com/441x705.jpg/ff4444/ffffff',
  'http://dummyimage.com/843x866.jpg/5fa2dd/ffffff',
  'http://dummyimage.com/924x624.png/ff4444/ffffff',
  'http://dummyimage.com/944x620.bmp/ff4444/ffffff',
  'http://dummyimage.com/736x400.bmp/5fa2dd/ffffff',
  'http://dummyimage.com/965x400.png/cc0000/ffffff',
  'http://dummyimage.com/304x335.bmp/cc0000/ffffff',
  'http://dummyimage.com/365x372.png/dddddd/000000',
  'http://dummyimage.com/479x898.png/ff4444/ffffff',
  'http://dummyimage.com/408x791.bmp/ff4444/ffffff',
  'http://dummyimage.com/595x430.jpg/dddddd/000000',
  'http://dummyimage.com/615x768.jpg/5fa2dd/ffffff',
  'http://dummyimage.com/394x430.bmp/dddddd/000000',
  'http://dummyimage.com/657x759.bmp/dddddd/000000',
  'http://dummyimage.com/555x791.bmp/5fa2dd/ffffff',
  'http://dummyimage.com/736x337.png/dddddd/000000',
  'http://dummyimage.com/874x407.jpg/dddddd/000000',
  'http://dummyimage.com/773x505.bmp/5fa2dd/ffffff',
  'http://dummyimage.com/756x862.bmp/5fa2dd/ffffff',
  'http://dummyimage.com/849x329.jpg/dddddd/000000',
  'http://dummyimage.com/404x856.png/cc0000/ffffff',
  'http://dummyimage.com/549x326.jpg/cc0000/ffffff',
  'http://dummyimage.com/380x487.bmp/5fa2dd/ffffff',
  'http://dummyimage.com/453x971.jpg/cc0000/ffffff',
  'http://dummyimage.com/915x328.jpg/dddddd/000000',
  'http://dummyimage.com/482x497.png/ff4444/ffffff',
  'http://dummyimage.com/428x790.png/5fa2dd/ffffff',
  'http://dummyimage.com/350x321.jpg/dddddd/000000',
  'http://dummyimage.com/735x351.jpg/ff4444/ffffff',
  'http://dummyimage.com/844x529.bmp/5fa2dd/ffffff',
  'http://dummyimage.com/425x318.png/cc0000/ffffff',
  'http://dummyimage.com/867x880.jpg/ff4444/ffffff',
  'http://dummyimage.com/575x316.bmp/dddddd/000000',
  'http://dummyimage.com/763x650.jpg/5fa2dd/ffffff',
  'http://dummyimage.com/671x501.jpg/dddddd/000000',
  'http://dummyimage.com/339x685.jpg/cc0000/ffffff',
  'http://dummyimage.com/539x682.png/cc0000/ffffff',
  'http://dummyimage.com/699x309.jpg/ff4444/ffffff',
  'http://dummyimage.com/671x739.png/cc0000/ffffff',
  'http://dummyimage.com/614x739.jpg/5fa2dd/ffffff',
  'http://dummyimage.com/581x788.png/5fa2dd/ffffff',
  'http://dummyimage.com/850x459.jpg/dddddd/000000',
  'http://dummyimage.com/698x944.bmp/cc0000/ffffff',
  'http://dummyimage.com/683x327.jpg/5fa2dd/ffffff',
  'http://dummyimage.com/763x373.bmp/cc0000/ffffff',
  'http://dummyimage.com/511x316.bmp/cc0000/ffffff',
  'http://dummyimage.com/547x348.jpg/dddddd/000000',
  'http://dummyimage.com/572x525.jpg/ff4444/ffffff',
  'http://dummyimage.com/864x843.png/ff4444/ffffff',
  'http://dummyimage.com/475x640.png/cc0000/ffffff',
  'http://dummyimage.com/729x657.jpg/dddddd/000000',
  'http://dummyimage.com/907x562.png/cc0000/ffffff',
  'http://dummyimage.com/906x812.png/dddddd/000000',
  'http://dummyimage.com/939x885.bmp/ff4444/ffffff',
  'http://dummyimage.com/871x381.jpg/5fa2dd/ffffff',
  'http://dummyimage.com/784x311.jpg/cc0000/ffffff',
  'http://dummyimage.com/971x663.jpg/ff4444/ffffff',
  'http://dummyimage.com/318x753.jpg/cc0000/ffffff',
  'http://dummyimage.com/896x518.bmp/dddddd/000000',
  'http://dummyimage.com/993x338.jpg/dddddd/000000',
  'http://dummyimage.com/620x521.jpg/5fa2dd/ffffff',
  'http://dummyimage.com/664x909.jpg/cc0000/ffffff',
  'http://dummyimage.com/1000x993.jpg/dddddd/000000',
  'http://dummyimage.com/998x546.jpg/dddddd/000000',
  'http://dummyimage.com/855x342.png/cc0000/ffffff',
  'http://dummyimage.com/791x468.bmp/5fa2dd/ffffff',
  'http://dummyimage.com/433x512.png/ff4444/ffffff',
  'http://dummyimage.com/900x492.jpg/5fa2dd/ffffff',
  'http://dummyimage.com/867x782.png/5fa2dd/ffffff',
  'http://dummyimage.com/643x629.jpg/5fa2dd/ffffff',
  'http://dummyimage.com/640x784.bmp/5fa2dd/ffffff',
  'http://dummyimage.com/450x414.jpg/cc0000/ffffff',
  'http://dummyimage.com/944x494.bmp/dddddd/000000',
  'http://dummyimage.com/573x713.bmp/dddddd/000000',
  'http://dummyimage.com/907x880.png/ff4444/ffffff',
  'http://dummyimage.com/502x363.bmp/cc0000/ffffff',
  'http://dummyimage.com/410x460.png/cc0000/ffffff',
  'http://dummyimage.com/848x713.png/cc0000/ffffff',
  'http://dummyimage.com/824x338.bmp/ff4444/ffffff',
  'http://dummyimage.com/859x724.png/dddddd/000000',
  'http://dummyimage.com/452x805.bmp/cc0000/ffffff',
  'http://dummyimage.com/311x912.bmp/ff4444/ffffff',
  'http://dummyimage.com/555x969.bmp/5fa2dd/ffffff',
  'http://dummyimage.com/877x614.png/5fa2dd/ffffff',
  'http://dummyimage.com/342x675.png/dddddd/000000',
  'http://dummyimage.com/979x378.png/5fa2dd/ffffff',
  'http://dummyimage.com/708x385.png/ff4444/ffffff',
  'http://dummyimage.com/789x580.bmp/cc0000/ffffff',
  'http://dummyimage.com/399x382.jpg/dddddd/000000'
  ]

foods = ['Bread - Triangle White',
  'Energy Drink - Redbull 355ml',
  'Quail - Eggs, Fresh',
  'Veal - Inside Round / Top, Lean',
  'Cake - Sheet Strawberry',
  'Lobster - Live',
  'Coffee - Colombian, Portioned',
  'Wine - Cahors Ac 2000, Clos',
  'Cheese - Brie Roitelet',
  'Godiva White Chocolate',
  'Seabream Whole Farmed',
  'Fish - Halibut, Cold Smoked',
  'Pear - Asian',
  'Sauce - Hp',
  'Veal - Shank, Pieces',
  'Barley - Pearl',
  'Bread - Bistro Sour',
  'Ecolab - Hobart Washarm End Cap',
  'Triple Sec - Mcguinness',
  'Pickles - Gherkins',
  'Beef Dry Aged Tenderloin Aaa',
  'Nut - Pecan, Pieces',
  'Sauce - Cranberry',
  'Coconut Milk - Unsweetened',
  'Rosemary - Fresh',
  'Dried Figs',
  'Trout - Rainbow, Fresh',
  'Coffee - Colombian, Portioned',
  'Bar Bran Honey Nut',
  'Worcestershire Sauce',
  'Flour - Rye',
  'Salsify, Organic',
  'Nut - Walnut, Chopped',
  'Wine - Red, Metus Rose',
  'Wine - Pinot Noir Pond Haddock',
  'Turkey - Breast, Smoked',
  'Water - San Pellegrino',
  'Pepper - Orange',
  'Wanton Wrap',
  'Pasta - Spaghetti, Dry',
  'Vaccum Bag 10x13',
  'Pancetta',
  'Filter - Coffee',
  'Beer - Maudite',
  'Tuna - Loin',
  'Wine - Vovray Sec Domaine Huet',
  'Dawn Professionl Pot And Pan',
  'Yeast Dry - Fleischman',
  'Appetizer - Southwestern',
  'Monkfish Fresh - Skin Off',
  'Butter - Pod',
  'Mustard - Dijon',
  'Juice - Mango',
  'Bouq All Italian - Primerba',
  'Pork - Backs - Boneless',
  'Trueblue - Blueberry 12x473ml',
  'Pasta - Angel Hair',
  'Pepper - Orange',
  'Breakfast Quesadillas',
  'Soup - Campbells, Chix Gumbo',
  'Lettuce - Sea / Sea Asparagus',
  'Marjoram - Fresh',
  'Ecolab - Balanced Fusion',
  'Island Oasis - Pina Colada',
  'Bag Clear 10 Lb',
  'Energy Drink',
  'Neckerchief Blck',
  'Salmon - Whole, 4 - 6 Pounds',
  'Beer - Rickards Red',
  'Cheese - Pied De Vents',
  'Eel - Smoked',
  'Muffin Hinge - 211n',
  'Glaze - Clear',
  'Crab Brie In Phyllo',
  'Garam Masala Powder',
  'Spaghetti Squash',
  'Container - Clear 16 Oz',
  'Compound - Strawberry',
  'Honey - Lavender',
  'Soup - Campbells Chicken',
  'Pasta - Elbows, Macaroni, Dry',
  'Mushroom - Shitake, Dry',
  'Bok Choy - Baby',
  'Mix - Cocktail Strawberry Daiquiri',
  'Hot Chocolate - Individual',
  'Wine - Riesling Alsace Ac 2001',
  'Wine - Savigny - Les - Beaune',
  'Halibut - Fletches',
  'Towel Dispenser',
  'Beets - Mini Golden',
  'Sauce - Soya, Light',
  'Wine - Rioja Campo Viejo',
  'Chicken - Whole',
  'Cake - Lemon Chiffon',
  'Wine - Pinot Noir Pond Haddock',
  'Juice - V8 Splash',
  'Garbage Bag - Clear',
  'Currants',
  'Scallops - 20/30',
  'Coffee - Dark Roast']

bool_list = [true, false]

store_cats = [
  'Home',
'Kids',
'Outdoors',
'Movies',
'Baby',
'Kids',
'Clothing',
'Computers',
'Outdoors',
'Movies',
'Electronics',
'Books',
'Clothing',
'Games',
'Toys',
'Sports',
'Beauty',
'Movies',
'Baby',
'Jewelery',
'Sports',
'Beauty',
'Outdoors',
'Outdoors',
'Sports',
'Electronics',
'Kids',
'Industrial',
'Home',
'Computers',
'Games',
'Books',
'Games',
'Outdoors',
'Shoes',
'Grocery',
'Books',
'Movies',
'Jewelery',
'Kids',
'Automotive',
'Games',
'Kids',
'Kids',
'Automotive',
'Tools',
'Tools',
'Industrial',
'Electronics',
'Electronics',
'Books',
'Industrial',
'Baby',
'Beauty',
'Games',
'Tools',
'Beauty',
'Electronics',
'Computers',
'Kids',
'Toys',
'Toys',
'Automotive',
'Automotive',
'Computers',
'Beauty',
'Tools',
'Games',
'Beauty',
'Music',
'Shoes',
'Movies',
'Toys',
'Games',
'Health',
'Beauty',
'Clothing',
'Jewelery',
'Games',
'Electronics',
'Computers',
'Toys',
'Home',
'Clothing',
'Home',
'Games',
'Music',
'Industrial',
'Grocery',
'Home',
'Garden',
'Computers',
'Industrial',
'Grocery',
'Clothing',
'Books',
'Grocery',
'Health',
'Sports',
'Tools'
]
def create_nut
  nutrition = 
                  {"nutrients"=>
                    [{"title"=>"Calories",
                      "amount"=>rand(1000),
                      "unit"=>"cal",
                      "percentOfDailyNeeds"=>2.5},
                    {"title"=>"Fat",
                      "amount"=>rand(1000),
                      "unit"=>"g",
                      "percentOfDailyNeeds"=>0.18},
                    {"title"=>"Saturated Fat",
                      "amount"=>rand(1000),
                      "unit"=>"g",
                      "percentOfDailyNeeds"=>0.06},
                    {"title"=>"Carbohydrates",
                      "amount"=>rand(1000),
                      "unit"=>"g",
                      "percentOfDailyNeeds"=>4.37},
                    {"title"=>"Net Carbohydrates",
                      "amount"=>rand(1000),
                      "unit"=>"g",
                      "percentOfDailyNeeds"=>4.26},
                    {"title"=>"Sugar",
                      "amount"=>rand(1000),
                      "unit"=>"g",
                      "percentOfDailyNeeds"=>10.94},
                    {"title"=>"Cholesterol",
                      "amount"=>0.0,
                      "unit"=>"mg",
                      "percentOfDailyNeeds"=>0.0},
                    {"title"=>"Sodium",
                      "amount"=>rand(1000),
                      "unit"=>"mg",
                      "percentOfDailyNeeds"=>0.04},
                    {"title"=>"Protein",
                      "amount"=>rand(1000),
                      "unit"=>"g",
                      "percentOfDailyNeeds"=>1.08},
                    {"title"=>"Vitamin C",
                      "amount"=>rand(1000),
                      "unit"=>"mg",
                      "percentOfDailyNeeds"=>57.94},
                    {"title"=>"Manganese",
                      "amount"=>rand(1000),
                      "unit"=>"mg",
                      "percentOfDailyNeeds"=>46.35},
                    {"title"=>"Vitamin B6",
                      "amount"=>rand(1000),
                      "unit"=>"mg",
                      "percentOfDailyNeeds"=>5.6},
                    {"title"=>"Fiber",
                      "amount"=>rand(1000),
                      "unit"=>"g",
                      "percentOfDailyNeeds"=>5.6},
                    {"title"=>"Copper",
                      "amount"=>rand(1000),
                      "unit"=>"mg",
                      "percentOfDailyNeeds"=>5.5},
                    {"title"=>"Vitamin B1",
                      "amount"=>rand(1000),
                      "unit"=>"mg",
                      "percentOfDailyNeeds"=>5.27},
                    {"title"=>"Folate",
                      "amount"=>rand(1000),
                      "unit"=>"µg",
                      "percentOfDailyNeeds"=>4.5},
                    {"title"=>"Potassium",
                      "amount"=>rand(1000),
                      "unit"=>"mg",
                      "percentOfDailyNeeds"=>3.11},
                    {"title"=>"Magnesium",
                      "amount"=>rand(1000),
                      "unit"=>"mg",
                      "percentOfDailyNeeds"=>3.0},
                    {"title"=>"Vitamin B3",
                      "amount"=>rand(1000),
                      "unit"=>"mg",
                      "percentOfDailyNeeds"=>2.5},
                    {"title"=>"Vitamin B5",
                      "amount"=>rand(1000),
                      "unit"=>"mg",
                      "percentOfDailyNeeds"=>2.13},
                    {"title"=>"Vitamin B2",
                      "amount"=>rand(1000),
                      "unit"=>"mg",
                      "percentOfDailyNeeds"=>1.88},
                    {"title"=>"Iron",
                      "amount"=>rand(1000),
                      "unit"=>"mg",
                      "percentOfDailyNeeds"=>1.61},
                    {"title"=>"Calcium",
                      "amount"=>rand(1000),
                      "unit"=>"mg",
                      "percentOfDailyNeeds"=>1.3},
                    {"title"=>"Vitamin A",
                      "amount"=>rand(1000),
                      "unit"=>"IU",
                      "percentOfDailyNeeds"=>1.16}],
                  "caloricBreakdown"=> {"percentProtein"=>3.88, "percentFat"=>1.94, "percentCarbs"=>94.18},
                  "weightPerServing"=> {"amount"=>100, "unit"=>"g"}}
  return nutrition
end


puts("===SEEDING DATABASE! PLEASE BE PATIENT===")
for i in 1..100 do
  User.create(
    user_name: names[rand(99)], 
    email: emails[rand(99)], 
    user_password: passwords[rand(99)],
    bmi: rand(10..250))
end
puts("===Users complete===")


for i in 1..100 do
  Meal.create(
    user_id: rand(1..100),
    is_public: bool_list.sample,
    is_deleted: bool_list.sample,
    title: foods[rand(99)],
    desc: foods[rand(99)] * 5
  )
end
puts("===Meals complete===")

for i in 1..100 do
  Favorite.create(
    user_id: i,
    meal_id: rand(1..100)
  )
end
puts("===Favorites complete===")

for i in 1..100 do
  MealPhoto.create(
    image_url: images[rand(99)],
    meal_id: i
  )
end
puts("===Meal photos complete===")

for i in 1..100 do
  MealIngredient.create(
    meal_id: rand(1..100),
    product: foods[rand(99)], 
    nut_info: create_nut(),
    serving_size: rand(99)
  )
end
puts("=== mealingredients complete===")


for i in 1..100 do
  MealCategory.create(
    meal_id: i,
    category: store_cats[rand(99)]
  )
end
puts("=== mealcategories complete===")

for i in 1..100 do
  UserPreference.create(
    user_id: rand(1..100),
    meal_ingredient_id: i,
    is_disliked: bool_list.sample
  )
end
puts("=== userprefs complete===")
puts("=== seeding complete===")