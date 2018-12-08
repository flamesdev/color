var hexElement;
var nameElement;
var hexCode = "";

var colors = [{
        Color: "4C4F56",
        Name: "Abbey"
    },
    {
        Color: "1B1404",
        Name: "Acadia"
    },
    {
        Color: "7CB0A1",
        Name: "Acapulco"
    },
    {
        Color: "C9FFE5",
        Name: "Aero Blue"
    },
    {
        Color: "714693",
        Name: "Affair"
    },
    {
        Color: "D4C4A8",
        Name: "Akaroa"
    },
    {
        Color: "FAFAFA",
        Name: "Alabaster"
    },
    {
        Color: "F5E9D3",
        Name: "Albescent White"
    },
    {
        Color: "93DFB8",
        Name: "Algae Green"
    },
    {
        Color: "F0F8FF",
        Name: "Alice Blue"
    },
    {
        Color: "E32636",
        Name: "Alizarin Crimson"
    },
    {
        Color: "0076A3",
        Name: "Allports"
    },
    {
        Color: "EED9C4",
        Name: "Almond"
    },
    {
        Color: "907B71",
        Name: "Almond Frost"
    },
    {
        Color: "AF8F2C",
        Name: "Alpine"
    },
    {
        Color: "DBDBDB",
        Name: "Alto"
    },
    {
        Color: "A9ACB6",
        Name: "Aluminium"
    },
    {
        Color: "E52B50",
        Name: "Amaranth"
    },
    {
        Color: "3B7A57",
        Name: "Amazon"
    },
    {
        Color: "FFBF00",
        Name: "Amber"
    },
    {
        Color: "87756E",
        Name: "Americano"
    },
    {
        Color: "9966CC",
        Name: "Amethyst"
    },
    {
        Color: "A397B4",
        Name: "Amethyst Smoke"
    },
    {
        Color: "F9EAF3",
        Name: "Amour"
    },
    {
        Color: "7B9F80",
        Name: "Amulet"
    },
    {
        Color: "9DE5FF",
        Name: "Anakiwa"
    },
    {
        Color: "C88A65",
        Name: "Antique Brass"
    },
    {
        Color: "704A07",
        Name: "Antique Bronze"
    },
    {
        Color: "E0B646",
        Name: "Anzac"
    },
    {
        Color: "DFBE6F",
        Name: "Apache"
    },
    {
        Color: "4FA83D",
        Name: "Apple"
    },
    {
        Color: "AF4D43",
        Name: "Apple Blossom"
    },
    {
        Color: "E2F3EC",
        Name: "Apple Green"
    },
    {
        Color: "EB9373",
        Name: "Apricot"
    },
    {
        Color: "FBCEB1",
        Name: "Apricot Peach"
    },
    {
        Color: "FFFEEC",
        Name: "Apricot White"
    },
    {
        Color: "014B43",
        Name: "Aqua Deep"
    },
    {
        Color: "5FA777",
        Name: "Aqua Forest"
    },
    {
        Color: "EDF5F5",
        Name: "Aqua Haze"
    },
    {
        Color: "A1DAD7",
        Name: "Aqua Island"
    },
    {
        Color: "EAF9F5",
        Name: "Aqua Spring"
    },
    {
        Color: "E8F5F2",
        Name: "Aqua Squeeze"
    },
    {
        Color: "7FFFD4",
        Name: "Aquamarine"
    },
    {
        Color: "71D9E2",
        Name: "Aquamarine Blue"
    },
    {
        Color: "110C6C",
        Name: "Arapawa"
    },
    {
        Color: "433E37",
        Name: "Armadillo"
    },
    {
        Color: "948771",
        Name: "Arrowtown"
    },
    {
        Color: "C6C3B5",
        Name: "Ash"
    },
    {
        Color: "7BA05B",
        Name: "Asparagus"
    },
    {
        Color: "130A06",
        Name: "Asphalt"
    },
    {
        Color: "FAEAB9",
        Name: "Astra"
    },
    {
        Color: "327DA0",
        Name: "Astral"
    },
    {
        Color: "283A77",
        Name: "Astronaut"
    },
    {
        Color: "013E62",
        Name: "Astronaut Blue"
    },
    {
        Color: "EEF0F3",
        Name: "Athens Gray"
    },
    {
        Color: "ECEBCE",
        Name: "Aths Special"
    },
    {
        Color: "97CD2D",
        Name: "Atlantis"
    },
    {
        Color: "0A6F75",
        Name: "Atoll"
    },
    {
        Color: "FF9966",
        Name: "Atomic Tangerine"
    },
    {
        Color: "97605D",
        Name: "Au Chico"
    },
    {
        Color: "3B0910",
        Name: "Aubergine"
    },
    {
        Color: "F5FFBE",
        Name: "Australian Mint"
    },
    {
        Color: "888D65",
        Name: "Avocado"
    },
    {
        Color: "4E6649",
        Name: "Axolotl"
    },
    {
        Color: "F7C8DA",
        Name: "Azalea"
    },
    {
        Color: "0D1C19",
        Name: "Aztec"
    },
    {
        Color: "315BA1",
        Name: "Azure"
    },
    {
        Color: "007FFF",
        Name: "Azure Radiance"
    },
    {
        Color: "E0FFFF",
        Name: "Baby Blue"
    },
    {
        Color: "026395",
        Name: "Bahama Blue"
    },
    {
        Color: "A5CB0C",
        Name: "Bahia"
    },
    {
        Color: "FFF8D1",
        Name: "Baja White"
    },
    {
        Color: "859FAF",
        Name: "Bali Hai"
    },
    {
        Color: "2A2630",
        Name: "Baltic Sea"
    },
    {
        Color: "DA6304",
        Name: "Bamboo"
    },
    {
        Color: "FBE7B2",
        Name: "Banana Mania"
    },
    {
        Color: "858470",
        Name: "Bandicoot"
    },
    {
        Color: "DED717",
        Name: "Barberry"
    },
    {
        Color: "A68B5B",
        Name: "Barley Corn"
    },
    {
        Color: "FFF4CE",
        Name: "Barley White"
    },
    {
        Color: "44012D",
        Name: "Barossa"
    },
    {
        Color: "292130",
        Name: "Bastille"
    },
    {
        Color: "828F72",
        Name: "Battleship Gray"
    },
    {
        Color: "7DA98D",
        Name: "Bay Leaf"
    },
    {
        Color: "273A81",
        Name: "Bay of Many"
    },
    {
        Color: "98777B",
        Name: "Bazaar"
    },
    {
        Color: "3D0C02",
        Name: "Bean  "
    },
    {
        Color: "EEC1BE",
        Name: "Beauty Bush"
    },
    {
        Color: "926F5B",
        Name: "Beaver"
    },
    {
        Color: "FEF2C7",
        Name: "Beeswax"
    },
    {
        Color: "F5F5DC",
        Name: "Beige"
    },
    {
        Color: "7DD8C6",
        Name: "Bermuda"
    },
    {
        Color: "6B8BA2",
        Name: "Bermuda Gray"
    },
    {
        Color: "DEE5C0",
        Name: "Beryl Green"
    },
    {
        Color: "FCFBF3",
        Name: "Bianca"
    },
    {
        Color: "162A40",
        Name: "Big Stone"
    },
    {
        Color: "327C14",
        Name: "Bilbao"
    },
    {
        Color: "B2A1EA",
        Name: "Biloba Flower"
    },
    {
        Color: "373021",
        Name: "Birch"
    },
    {
        Color: "D4CD16",
        Name: "Bird Flower"
    },
    {
        Color: "1B3162",
        Name: "Biscay"
    },
    {
        Color: "497183",
        Name: "Bismark"
    },
    {
        Color: "C1B7A4",
        Name: "Bison Hide"
    },
    {
        Color: "3D2B1F",
        Name: "Bistre"
    },
    {
        Color: "868974",
        Name: "Bitter"
    },
    {
        Color: "CAE00D",
        Name: "Bitter Lemon"
    },
    {
        Color: "FE6F5E",
        Name: "Bittersweet"
    },
    {
        Color: "EEDEDA",
        Name: "Bizarre"
    },
    {
        Color: "000000",
        Name: "Black"
    },
    {
        Color: "081910",
        Name: "Black Bean"
    },
    {
        Color: "0B1304",
        Name: "Black Forest"
    },
    {
        Color: "F6F7F7",
        Name: "Black Haze"
    },
    {
        Color: "3E2C1C",
        Name: "Black Marlin"
    },
    {
        Color: "242E16",
        Name: "Black Olive"
    },
    {
        Color: "041322",
        Name: "Black Pearl"
    },
    {
        Color: "0D0332",
        Name: "Black Rock"
    },
    {
        Color: "67032D",
        Name: "Black Rose"
    },
    {
        Color: "0A001C",
        Name: "Black Russian"
    },
    {
        Color: "F2FAFA",
        Name: "Black Squeeze"
    },
    {
        Color: "FFFEF6",
        Name: "Black White"
    },
    {
        Color: "4D0135",
        Name: "Blackberry"
    },
    {
        Color: "32293A",
        Name: "Blackcurrant"
    },
    {
        Color: "FF6600",
        Name: "Blaze Orange"
    },
    {
        Color: "FEF3D8",
        Name: "Bleach White"
    },
    {
        Color: "2C2133",
        Name: "Bleached Cedar"
    },
    {
        Color: "A3E3ED",
        Name: "Blizzard Blue"
    },
    {
        Color: "DCB4BC",
        Name: "Blossom"
    },
    {
        Color: "0000FF",
        Name: "Blue"
    },
    {
        Color: "496679",
        Name: "Blue Bayoux"
    },
    {
        Color: "9999CC",
        Name: "Blue Bell"
    },
    {
        Color: "F1E9FF",
        Name: "Blue Chalk"
    },
    {
        Color: "010D1A",
        Name: "Blue Charcoal"
    },
    {
        Color: "0C8990",
        Name: "Blue Chill"
    },
    {
        Color: "380474",
        Name: "Blue Diamond"
    },
    {
        Color: "204852",
        Name: "Blue Dianne"
    },
    {
        Color: "2C0E8C",
        Name: "Blue Gem"
    },
    {
        Color: "BFBED8",
        Name: "Blue Haze"
    },
    {
        Color: "017987",
        Name: "Blue Lagoon"
    },
    {
        Color: "7666C6",
        Name: "Blue Marguerite"
    },
    {
        Color: "0066FF",
        Name: "Blue Ribbon"
    },
    {
        Color: "D2F6DE",
        Name: "Blue Romance"
    },
    {
        Color: "748881",
        Name: "Blue Smoke"
    },
    {
        Color: "016162",
        Name: "Blue Stone"
    },
    {
        Color: "6456B7",
        Name: "Blue Violet"
    },
    {
        Color: "042E4C",
        Name: "Blue Whale"
    },
    {
        Color: "13264D",
        Name: "Blue Zodiac"
    },
    {
        Color: "18587A",
        Name: "Blumine"
    },
    {
        Color: "B44668",
        Name: "Blush"
    },
    {
        Color: "FF6FFF",
        Name: "Blush Pink"
    },
    {
        Color: "AFB1B8",
        Name: "Bombay"
    },
    {
        Color: "E5E0E1",
        Name: "Bon Jour"
    },
    {
        Color: "0095B6",
        Name: "Bondi Blue"
    },
    {
        Color: "E4D1C0",
        Name: "Bone"
    },
    {
        Color: "5C0120",
        Name: "Bordeaux"
    },
    {
        Color: "4E2A5A",
        Name: "Bossanova"
    },
    {
        Color: "3B91B4",
        Name: "Boston Blue"
    },
    {
        Color: "C7DDE5",
        Name: "Botticelli"
    },
    {
        Color: "093624",
        Name: "Bottle Green"
    },
    {
        Color: "7A7A7A",
        Name: "Boulder"
    },
    {
        Color: "AE809E",
        Name: "Bouquet"
    },
    {
        Color: "BA6F1E",
        Name: "Bourbon"
    },
    {
        Color: "4A2A04",
        Name: "Bracken"
    },
    {
        Color: "DEC196",
        Name: "Brandy"
    },
    {
        Color: "CD8429",
        Name: "Brandy Punch"
    },
    {
        Color: "BB8983",
        Name: "Brandy Rose"
    },
    {
        Color: "5DA19F",
        Name: "Breaker Bay"
    },
    {
        Color: "C62D42",
        Name: "Brick Red"
    },
    {
        Color: "FFFAF4",
        Name: "Bridal Heath"
    },
    {
        Color: "FEF0EC",
        Name: "Bridesmaid"
    },
    {
        Color: "3C4151",
        Name: "Bright Gray"
    },
    {
        Color: "66FF00",
        Name: "Bright Green"
    },
    {
        Color: "B10000",
        Name: "Bright Red"
    },
    {
        Color: "FED33C",
        Name: "Bright Sun"
    },
    {
        Color: "08E8DE",
        Name: "Bright Turquoise"
    },
    {
        Color: "F653A6",
        Name: "Brilliant Rose"
    },
    {
        Color: "FB607F",
        Name: "Brink Pink"
    },
    {
        Color: "ABA196",
        Name: "Bronco"
    },
    {
        Color: "3F2109",
        Name: "Bronze"
    },
    {
        Color: "4E420C",
        Name: "Bronze Olive"
    },
    {
        Color: "4D400F",
        Name: "Bronzetone"
    },
    {
        Color: "FFEC13",
        Name: "Broom"
    },
    {
        Color: "964B00",
        Name: "Brown"
    },
    {
        Color: "592804",
        Name: "Brown Bramble"
    },
    {
        Color: "492615",
        Name: "Brown Derby"
    },
    {
        Color: "401801",
        Name: "Brown Pod"
    },
    {
        Color: "AF593E",
        Name: "Brown Rust"
    },
    {
        Color: "37290E",
        Name: "Brown Tumbleweed"
    },
    {
        Color: "E7FEFF",
        Name: "Bubbles"
    },
    {
        Color: "622F30",
        Name: "Buccaneer"
    },
    {
        Color: "A8AE9C",
        Name: "Bud"
    },
    {
        Color: "C1A004",
        Name: "Buddha Gold"
    },
    {
        Color: "F0DC82",
        Name: "Buff"
    },
    {
        Color: "480607",
        Name: "Bulgarian Rose"
    },
    {
        Color: "864D1E",
        Name: "Bull Shot"
    },
    {
        Color: "0D1117",
        Name: "Bunker"
    },
    {
        Color: "151F4C",
        Name: "Bunting"
    },
    {
        Color: "900020",
        Name: "Burgundy"
    },
    {
        Color: "002E20",
        Name: "Burnham"
    },
    {
        Color: "FF7034",
        Name: "Burning Orange"
    },
    {
        Color: "D99376",
        Name: "Burning Sand"
    },
    {
        Color: "420303",
        Name: "Burnt Maroon"
    },
    {
        Color: "CC5500",
        Name: "Burnt Orange"
    },
    {
        Color: "E97451",
        Name: "Burnt Sienna"
    },
    {
        Color: "8A3324",
        Name: "Burnt Umber"
    },
    {
        Color: "0D2E1C",
        Name: "Bush"
    },
    {
        Color: "F3AD16",
        Name: "Buttercup"
    },
    {
        Color: "A1750D",
        Name: "Buttered Rum"
    },
    {
        Color: "624E9A",
        Name: "Butterfly Bush"
    },
    {
        Color: "FFF1B5",
        Name: "Buttermilk"
    },
    {
        Color: "FFFCEA",
        Name: "Buttery White"
    },
    {
        Color: "4D0A18",
        Name: "Cab Sav"
    },
    {
        Color: "D94972",
        Name: "Cabaret"
    },
    {
        Color: "3F4C3A",
        Name: "Cabbage Pont"
    },
    {
        Color: "587156",
        Name: "Cactus"
    },
    {
        Color: "A9B2C3",
        Name: "Cadet Blue"
    },
    {
        Color: "B04C6A",
        Name: "Cadillac"
    },
    {
        Color: "6F440C",
        Name: "Cafe Royale"
    },
    {
        Color: "E0C095",
        Name: "Calico"
    },
    {
        Color: "FE9D04",
        Name: "California"
    },
    {
        Color: "31728D",
        Name: "Calypso"
    },
    {
        Color: "00581A",
        Name: "Camarone"
    },
    {
        Color: "893456",
        Name: "Camelot"
    },
    {
        Color: "D9B99B",
        Name: "Cameo"
    },
    {
        Color: "3C3910",
        Name: "Camouflage"
    },
    {
        Color: "78866B",
        Name: "Camouflage Green"
    },
    {
        Color: "D591A4",
        Name: "Can Can"
    },
    {
        Color: "F3FB62",
        Name: "Canary"
    },
    {
        Color: "FCD917",
        Name: "Candlelight"
    },
    {
        Color: "FBEC5D",
        Name: "Candy Corn"
    },
    {
        Color: "251706",
        Name: "Cannon Black"
    },
    {
        Color: "894367",
        Name: "Cannon Pink"
    },
    {
        Color: "3C4443",
        Name: "Cape Cod"
    },
    {
        Color: "FEE5AC",
        Name: "Cape Honey"
    },
    {
        Color: "A26645",
        Name: "Cape Palliser"
    },
    {
        Color: "DCEDB4",
        Name: "Caper"
    },
    {
        Color: "FFDDAF",
        Name: "Caramel"
    },
    {
        Color: "EEEEE8",
        Name: "Cararra"
    },
    {
        Color: "01361C",
        Name: "Cardin Green"
    },
    {
        Color: "C41E3A",
        Name: "Cardinal"
    },
    {
        Color: "8C055E",
        Name: "Cardinal Pink"
    },
    {
        Color: "D29EAA",
        Name: "Careys Pink"
    },
    {
        Color: "00CC99",
        Name: "Caribbean Green"
    },
    {
        Color: "EA88A8",
        Name: "Carissma"
    },
    {
        Color: "F3FFD8",
        Name: "Carla"
    },
    {
        Color: "960018",
        Name: "Carmine"
    },
    {
        Color: "5C2E01",
        Name: "Carnaby Tan"
    },
    {
        Color: "F95A61",
        Name: "Carnation"
    },
    {
        Color: "FFA6C9",
        Name: "Carnation Pink"
    },
    {
        Color: "F9E0ED",
        Name: "Carousel Pink"
    },
    {
        Color: "ED9121",
        Name: "Carrot Orange"
    },
    {
        Color: "F8B853",
        Name: "Casablanca"
    },
    {
        Color: "2F6168",
        Name: "Casal"
    },
    {
        Color: "8BA9A5",
        Name: "Cascade"
    },
    {
        Color: "E6BEA5",
        Name: "Cashmere"
    },
    {
        Color: "ADBED1",
        Name: "Casper"
    },
    {
        Color: "52001F",
        Name: "Castro"
    },
    {
        Color: "062A78",
        Name: "Catalina Blue"
    },
    {
        Color: "EEF6F7",
        Name: "Catskill White"
    },
    {
        Color: "E3BEBE",
        Name: "Cavern Pink"
    },
    {
        Color: "3E1C14",
        Name: "Cedar"
    },
    {
        Color: "711A00",
        Name: "Cedar Wood Finish"
    },
    {
        Color: "ACE1AF",
        Name: "Celadon"
    },
    {
        Color: "B8C25D",
        Name: "Celery"
    },
    {
        Color: "D1D2CA",
        Name: "Celeste"
    },
    {
        Color: "1E385B",
        Name: "Cello"
    },
    {
        Color: "163222",
        Name: "Celtic"
    },
    {
        Color: "8D7662",
        Name: "Cement"
    },
    {
        Color: "FCFFF9",
        Name: "Ceramic"
    },
    {
        Color: "DA3287",
        Name: "Cerise"
    },
    {
        Color: "DE3163",
        Name: "Cerise Red"
    },
    {
        Color: "02A4D3",
        Name: "Cerulean"
    },
    {
        Color: "2A52BE",
        Name: "Cerulean Blue"
    },
    {
        Color: "FFF4F3",
        Name: "Chablis"
    },
    {
        Color: "516E3D",
        Name: "Chalet Green"
    },
    {
        Color: "EED794",
        Name: "Chalky"
    },
    {
        Color: "354E8C",
        Name: "Chambray"
    },
    {
        Color: "EDDCB1",
        Name: "Chamois"
    },
    {
        Color: "FAECCC",
        Name: "Champagne"
    },
    {
        Color: "F8C3DF",
        Name: "Chantilly"
    },
    {
        Color: "292937",
        Name: "Charade"
    },
    {
        Color: "FFF3F1",
        Name: "Chardon"
    },
    {
        Color: "FFCD8C",
        Name: "Chardonnay"
    },
    {
        Color: "BAEEF9",
        Name: "Charlotte"
    },
    {
        Color: "D47494",
        Name: "Charm"
    },
    {
        Color: "7FFF00",
        Name: "Chartreuse"
    },
    {
        Color: "DFFF00",
        Name: "Chartreuse Yellow"
    },
    {
        Color: "40A860",
        Name: "Chateau Green"
    },
    {
        Color: "BDB3C7",
        Name: "Chatelle"
    },
    {
        Color: "175579",
        Name: "Chathams Blue"
    },
    {
        Color: "83AA5D",
        Name: "Chelsea Cucumber"
    },
    {
        Color: "9E5302",
        Name: "Chelsea Gem"
    },
    {
        Color: "DFCD6F",
        Name: "Chenin"
    },
    {
        Color: "FCDA98",
        Name: "Cherokee"
    },
    {
        Color: "2A0359",
        Name: "Cherry Pie"
    },
    {
        Color: "651A14",
        Name: "Cherrywood"
    },
    {
        Color: "F8D9E9",
        Name: "Cherub"
    },
    {
        Color: "B94E48",
        Name: "Chestnut"
    },
    {
        Color: "CD5C5C",
        Name: "Chestnut Rose"
    },
    {
        Color: "8581D9",
        Name: "Chetwode Blue"
    },
    {
        Color: "5D5C58",
        Name: "Chicago"
    },
    {
        Color: "F1FFC8",
        Name: "Chiffon"
    },
    {
        Color: "F77703",
        Name: "Chilean Fire"
    },
    {
        Color: "FFFDE6",
        Name: "Chilean Heath"
    },
    {
        Color: "FCFFE7",
        Name: "China Ivory"
    },
    {
        Color: "CEC7A7",
        Name: "Chino"
    },
    {
        Color: "A8E3BD",
        Name: "Chinook"
    },
    {
        Color: "370202",
        Name: "Chocolate"
    },
    {
        Color: "33036B",
        Name: "Christalle"
    },
    {
        Color: "67A712",
        Name: "Christi"
    },
    {
        Color: "E7730A",
        Name: "Christine"
    },
    {
        Color: "E8F1D4",
        Name: "Chrome White"
    },
    {
        Color: "0E0E18",
        Name: "Cinder"
    },
    {
        Color: "FDE1DC",
        Name: "Cinderella"
    },
    {
        Color: "E34234",
        Name: "Cinnabar"
    },
    {
        Color: "7B3F00",
        Name: "Cinnamon"
    },
    {
        Color: "55280C",
        Name: "Cioccolato"
    },
    {
        Color: "FAF7D6",
        Name: "Citrine White"
    },
    {
        Color: "9EA91F",
        Name: "Citron"
    },
    {
        Color: "A1C50A",
        Name: "Citrus"
    },
    {
        Color: "480656",
        Name: "Clairvoyant"
    },
    {
        Color: "D4B6AF",
        Name: "Clam Shell"
    },
    {
        Color: "7F1734",
        Name: "Claret"
    },
    {
        Color: "FBCCE7",
        Name: "Classic Rose"
    },
    {
        Color: "BDC8B3",
        Name: "Clay Ash"
    },
    {
        Color: "8A8360",
        Name: "Clay Creek"
    },
    {
        Color: "E9FFFD",
        Name: "Clear Day"
    },
    {
        Color: "E96E00",
        Name: "Clementine"
    },
    {
        Color: "371D09",
        Name: "Clinker"
    },
    {
        Color: "C7C4BF",
        Name: "Cloud"
    },
    {
        Color: "202E54",
        Name: "Cloud Burst"
    },
    {
        Color: "ACA59F",
        Name: "Cloudy"
    },
    {
        Color: "384910",
        Name: "Clover"
    },
    {
        Color: "0047AB",
        Name: "Cobalt"
    },
    {
        Color: "481C1C",
        Name: "Cocoa Bean"
    },
    {
        Color: "301F1E",
        Name: "Cocoa Brown"
    },
    {
        Color: "F8F7DC",
        Name: "Coconut Cream"
    },
    {
        Color: "0B0B0B",
        Name: "Cod Gray"
    },
    {
        Color: "706555",
        Name: "Coffee"
    },
    {
        Color: "2A140E",
        Name: "Coffee Bean"
    },
    {
        Color: "9F381D",
        Name: "Cognac"
    },
    {
        Color: "3F2500",
        Name: "Cola"
    },
    {
        Color: "ABA0D9",
        Name: "Cold Purple"
    },
    {
        Color: "CEBABA",
        Name: "Cold Turkey"
    },
    {
        Color: "FFEDBC",
        Name: "Colonial White"
    },
    {
        Color: "5C5D75",
        Name: "Comet"
    },
    {
        Color: "517C66",
        Name: "Como"
    },
    {
        Color: "C9D9D2",
        Name: "Conch"
    },
    {
        Color: "7C7B7A",
        Name: "Concord"
    },
    {
        Color: "F2F2F2",
        Name: "Concrete"
    },
    {
        Color: "E9D75A",
        Name: "Confetti"
    },
    {
        Color: "593737",
        Name: "Congo Brown"
    },
    {
        Color: "02478E",
        Name: "Congress Blue"
    },
    {
        Color: "ACDD4D",
        Name: "Conifer"
    },
    {
        Color: "C6726B",
        Name: "Contessa"
    },
    {
        Color: "B87333",
        Name: "Copper"
    },
    {
        Color: "7E3A15",
        Name: "Copper Canyon"
    },
    {
        Color: "996666",
        Name: "Copper Rose"
    },
    {
        Color: "944747",
        Name: "Copper Rust"
    },
    {
        Color: "DA8A67",
        Name: "Copperfield"
    },
    {
        Color: "FF7F50",
        Name: "Coral"
    },
    {
        Color: "FF4040",
        Name: "Coral Red"
    },
    {
        Color: "C7BCA2",
        Name: "Coral Reef"
    },
    {
        Color: "A86B6B",
        Name: "Coral Tree"
    },
    {
        Color: "606E68",
        Name: "Corduroy"
    },
    {
        Color: "C4D0B0",
        Name: "Coriander"
    },
    {
        Color: "40291D",
        Name: "Cork"
    },
    {
        Color: "E7BF05",
        Name: "Corn"
    },
    {
        Color: "F8FACD",
        Name: "Corn Field"
    },
    {
        Color: "8B6B0B",
        Name: "Corn Harvest"
    },
    {
        Color: "93CCEA",
        Name: "Cornflower"
    },
    {
        Color: "6495ED",
        Name: "Cornflower Blue"
    },
    {
        Color: "FFB0AC",
        Name: "Cornflower Lilac"
    },
    {
        Color: "FAD3A2",
        Name: "Corvette"
    },
    {
        Color: "76395D",
        Name: "Cosmic"
    },
    {
        Color: "FFD8D9",
        Name: "Cosmos"
    },
    {
        Color: "615D30",
        Name: "Costa Del Sol"
    },
    {
        Color: "FFB7D5",
        Name: "Cotton Candy"
    },
    {
        Color: "C2BDB6",
        Name: "Cotton Seed"
    },
    {
        Color: "01371A",
        Name: "County Green"
    },
    {
        Color: "4D282D",
        Name: "Cowboy"
    },
    {
        Color: "B95140",
        Name: "Crail"
    },
    {
        Color: "DB5079",
        Name: "Cranberry"
    },
    {
        Color: "462425",
        Name: "Crater Brown"
    },
    {
        Color: "FFFDD0",
        Name: "Cream"
    },
    {
        Color: "FFE5A0",
        Name: "Cream Brulee"
    },
    {
        Color: "F5C85C",
        Name: "Cream Can"
    },
    {
        Color: "1E0F04",
        Name: "Creole"
    },
    {
        Color: "737829",
        Name: "Crete"
    },
    {
        Color: "DC143C",
        Name: "Crimson"
    },
    {
        Color: "736D58",
        Name: "Crocodile"
    },
    {
        Color: "771F1F",
        Name: "Crown of Thorns"
    },
    {
        Color: "1C1208",
        Name: "Crowshead"
    },
    {
        Color: "B5ECDF",
        Name: "Cruise"
    },
    {
        Color: "004816",
        Name: "Crusoe"
    },
    {
        Color: "FD7B33",
        Name: "Crusta"
    },
    {
        Color: "924321",
        Name: "Cumin"
    },
    {
        Color: "FDFFD5",
        Name: "Cumulus"
    },
    {
        Color: "FBBEDA",
        Name: "Cupid"
    },
    {
        Color: "2596D1",
        Name: "Curious Blue"
    },
    {
        Color: "507672",
        Name: "Cutty Sark"
    },
    {
        Color: "00FFFF",
        Name: "Cyan / Aqua"
    },
    {
        Color: "003E40",
        Name: "Cyprus"
    },
    {
        Color: "012731",
        Name: "Daintree"
    },
    {
        Color: "F9E4BC",
        Name: "Dairy Cream"
    },
    {
        Color: "4F2398",
        Name: "Daisy Bush"
    },
    {
        Color: "6E4B26",
        Name: "Dallas"
    },
    {
        Color: "FED85D",
        Name: "Dandelion"
    },
    {
        Color: "6093D1",
        Name: "Danube"
    },
    {
        Color: "0000C8",
        Name: "Dark Blue"
    },
    {
        Color: "770F05",
        Name: "Dark Burgundy"
    },
    {
        Color: "3C2005",
        Name: "Dark Ebony"
    },
    {
        Color: "0A480D",
        Name: "Dark Fern"
    },
    {
        Color: "661010",
        Name: "Dark Tan"
    },
    {
        Color: "A6A29A",
        Name: "Dawn"
    },
    {
        Color: "F3E9E5",
        Name: "Dawn Pink"
    },
    {
        Color: "7AC488",
        Name: "De York"
    },
    {
        Color: "D2DA97",
        Name: "Deco"
    },
    {
        Color: "220878",
        Name: "Deep Blue"
    },
    {
        Color: "E47698",
        Name: "Deep Blush"
    },
    {
        Color: "4A3004",
        Name: "Deep Bronze"
    },
    {
        Color: "007BA7",
        Name: "Deep Cerulean"
    },
    {
        Color: "051040",
        Name: "Deep Cove"
    },
    {
        Color: "002900",
        Name: "Deep Fir"
    },
    {
        Color: "182D09",
        Name: "Deep Forest Green"
    },
    {
        Color: "1B127B",
        Name: "Deep Koamaru"
    },
    {
        Color: "412010",
        Name: "Deep Oak"
    },
    {
        Color: "082567",
        Name: "Deep Sapphire"
    },
    {
        Color: "01826B",
        Name: "Deep Sea"
    },
    {
        Color: "095859",
        Name: "Deep Sea Green"
    },
    {
        Color: "003532",
        Name: "Deep Teal"
    },
    {
        Color: "B09A95",
        Name: "Del Rio"
    },
    {
        Color: "396413",
        Name: "Dell"
    },
    {
        Color: "A4A49D",
        Name: "Delta"
    },
    {
        Color: "7563A8",
        Name: "Deluge"
    },
    {
        Color: "1560BD",
        Name: "Denim"
    },
    {
        Color: "FFEED8",
        Name: "Derby"
    },
    {
        Color: "AE6020",
        Name: "Desert"
    },
    {
        Color: "EDC9AF",
        Name: "Desert Sand"
    },
    {
        Color: "F8F8F7",
        Name: "Desert Storm"
    },
    {
        Color: "EAFFFE",
        Name: "Dew"
    },
    {
        Color: "DB995E",
        Name: "Di Serria"
    },
    {
        Color: "130000",
        Name: "Diesel"
    },
    {
        Color: "5D7747",
        Name: "Dingley"
    },
    {
        Color: "871550",
        Name: "Disco"
    },
    {
        Color: "E29418",
        Name: "Dixie"
    },
    {
        Color: "1E90FF",
        Name: "Dodger Blue"
    },
    {
        Color: "F9FF8B",
        Name: "Dolly"
    },
    {
        Color: "646077",
        Name: "Dolphin"
    },
    {
        Color: "8E775E",
        Name: "Domino"
    },
    {
        Color: "5D4C51",
        Name: "Don Juan"
    },
    {
        Color: "A69279",
        Name: "Donkey Brown"
    },
    {
        Color: "6B5755",
        Name: "Dorado"
    },
    {
        Color: "EEE3AD",
        Name: "Double Colonial White"
    },
    {
        Color: "FCF4D0",
        Name: "Double Pearl Lusta"
    },
    {
        Color: "E6D7B9",
        Name: "Double Spanish White"
    },
    {
        Color: "6D6C6C",
        Name: "Dove Gray"
    },
    {
        Color: "092256",
        Name: "Downriver"
    },
    {
        Color: "6FD0C5",
        Name: "Downy"
    },
    {
        Color: "AF8751",
        Name: "Driftwood"
    },
    {
        Color: "FDF7AD",
        Name: "Drover"
    },
    {
        Color: "A899E6",
        Name: "Dull Lavender"
    },
    {
        Color: "383533",
        Name: "Dune"
    },
    {
        Color: "E5CCC9",
        Name: "Dust Storm"
    },
    {
        Color: "A8989B",
        Name: "Dusty Gray"
    },
    {
        Color: "B6BAA4",
        Name: "Eagle"
    },
    {
        Color: "C9B93B",
        Name: "Earls Green"
    },
    {
        Color: "FFF9E6",
        Name: "Early Dawn"
    },
    {
        Color: "414C7D",
        Name: "East Bay"
    },
    {
        Color: "AC91CE",
        Name: "East Side"
    },
    {
        Color: "1E9AB0",
        Name: "Eastern Blue"
    },
    {
        Color: "E9E3E3",
        Name: "Ebb"
    },
    {
        Color: "0C0B1D",
        Name: "Ebony"
    },
    {
        Color: "26283B",
        Name: "Ebony Clay"
    },
    {
        Color: "311C17",
        Name: "Eclipse"
    },
    {
        Color: "F5F3E5",
        Name: "Ecru White"
    },
    {
        Color: "FA7814",
        Name: "Ecstasy"
    },
    {
        Color: "105852",
        Name: "Eden"
    },
    {
        Color: "C8E3D7",
        Name: "Edgewater"
    },
    {
        Color: "A2AEAB",
        Name: "Edward"
    },
    {
        Color: "FFF4DD",
        Name: "Egg Sour"
    },
    {
        Color: "FFEFC1",
        Name: "Egg White"
    },
    {
        Color: "614051",
        Name: "Eggplant"
    },
    {
        Color: "1E1708",
        Name: "El Paso"
    },
    {
        Color: "8F3E33",
        Name: "El Salva"
    },
    {
        Color: "CCFF00",
        Name: "Electric Lime"
    },
    {
        Color: "8B00FF",
        Name: "Electric Violet"
    },
    {
        Color: "123447",
        Name: "Elephant"
    },
    {
        Color: "088370",
        Name: "Elf Green"
    },
    {
        Color: "1C7C7D",
        Name: "Elm"
    },
    {
        Color: "50C878",
        Name: "Emerald"
    },
    {
        Color: "6C3082",
        Name: "Eminence"
    },
    {
        Color: "514649",
        Name: "Emperor"
    },
    {
        Color: "817377",
        Name: "Empress"
    },
    {
        Color: "0056A7",
        Name: "Endeavour"
    },
    {
        Color: "F8DD5C",
        Name: "Energy Yellow"
    },
    {
        Color: "022D15",
        Name: "English Holly"
    },
    {
        Color: "3E2B23",
        Name: "English Walnut"
    },
    {
        Color: "8BA690",
        Name: "Envy"
    },
    {
        Color: "E1BC64",
        Name: "Equator"
    },
    {
        Color: "612718",
        Name: "Espresso"
    },
    {
        Color: "211A0E",
        Name: "Eternity"
    },
    {
        Color: "278A5B",
        Name: "Eucalyptus"
    },
    {
        Color: "CFA39D",
        Name: "Eunry"
    },
    {
        Color: "024E46",
        Name: "Evening Sea"
    },
    {
        Color: "1C402E",
        Name: "Everglade"
    },
    {
        Color: "427977",
        Name: "Faded Jade"
    },
    {
        Color: "FFEFEC",
        Name: "Fair Pink"
    },
    {
        Color: "7F626D",
        Name: "Falcon"
    },
    {
        Color: "ECEBBD",
        Name: "Fall Green"
    },
    {
        Color: "801818",
        Name: "Falu Red"
    },
    {
        Color: "FAF3F0",
        Name: "Fantasy"
    },
    {
        Color: "796A78",
        Name: "Fedora"
    },
    {
        Color: "9FDD8C",
        Name: "Feijoa"
    },
    {
        Color: "63B76C",
        Name: "Fern"
    },
    {
        Color: "657220",
        Name: "Fern Frond"
    },
    {
        Color: "4F7942",
        Name: "Fern Green"
    },
    {
        Color: "704F50",
        Name: "Ferra"
    },
    {
        Color: "FBE96C",
        Name: "Festival"
    },
    {
        Color: "F0FCEA",
        Name: "Feta"
    },
    {
        Color: "B35213",
        Name: "Fiery Orange"
    },
    {
        Color: "626649",
        Name: "Finch"
    },
    {
        Color: "556D56",
        Name: "Finlandia"
    },
    {
        Color: "692D54",
        Name: "Finn"
    },
    {
        Color: "405169",
        Name: "Fiord"
    },
    {
        Color: "AA4203",
        Name: "Fire"
    },
    {
        Color: "E89928",
        Name: "Fire Bush"
    },
    {
        Color: "0E2A30",
        Name: "Firefly"
    },
    {
        Color: "DA5B38",
        Name: "Flame Pea"
    },
    {
        Color: "FF7D07",
        Name: "Flamenco"
    },
    {
        Color: "F2552A",
        Name: "Flamingo"
    },
    {
        Color: "EEDC82",
        Name: "Flax"
    },
    {
        Color: "7B8265",
        Name: "Flax Smoke"
    },
    {
        Color: "FFCBA4",
        Name: "Flesh"
    },
    {
        Color: "6F6A61",
        Name: "Flint"
    },
    {
        Color: "A2006D",
        Name: "Flirt"
    },
    {
        Color: "CA3435",
        Name: "Flush Mahogany"
    },
    {
        Color: "FF7F00",
        Name: "Flush Orange"
    },
    {
        Color: "D8FCFA",
        Name: "Foam"
    },
    {
        Color: "D7D0FF",
        Name: "Fog"
    },
    {
        Color: "CBCAB6",
        Name: "Foggy Gray"
    },
    {
        Color: "228B22",
        Name: "Forest Green"
    },
    {
        Color: "FFF1EE",
        Name: "Forget Me Not"
    },
    {
        Color: "56B4BE",
        Name: "Fountain Blue"
    },
    {
        Color: "FFDEB3",
        Name: "Frangipani"
    },
    {
        Color: "BDBDC6",
        Name: "French Gray"
    },
    {
        Color: "ECC7EE",
        Name: "French Lilac"
    },
    {
        Color: "BDEDFD",
        Name: "French Pass"
    },
    {
        Color: "F64A8A",
        Name: "French Rose"
    },
    {
        Color: "990066",
        Name: "Fresh Eggplant"
    },
    {
        Color: "807E79",
        Name: "Friar Gray"
    },
    {
        Color: "B1E2C1",
        Name: "Fringy Flower"
    },
    {
        Color: "F57584",
        Name: "Froly"
    },
    {
        Color: "EDF5DD",
        Name: "Frost"
    },
    {
        Color: "DBFFF8",
        Name: "Frosted Mint"
    },
    {
        Color: "E4F6E7",
        Name: "Frostee"
    },
    {
        Color: "4F9D5D",
        Name: "Fruit Salad"
    },
    {
        Color: "7A58C1",
        Name: "Fuchsia Blue"
    },
    {
        Color: "C154C1",
        Name: "Fuchsia Pink"
    },
    {
        Color: "BEDE0D",
        Name: "Fuego"
    },
    {
        Color: "ECA927",
        Name: "Fuel Yellow"
    },
    {
        Color: "1959A8",
        Name: "Fun Blue"
    },
    {
        Color: "016D39",
        Name: "Fun Green"
    },
    {
        Color: "54534D",
        Name: "Fuscous Gray"
    },
    {
        Color: "C45655",
        Name: "Fuzzy Wuzzy Brown"
    },
    {
        Color: "163531",
        Name: "Gable Green"
    },
    {
        Color: "EFEFEF",
        Name: "Gallery"
    },
    {
        Color: "DCB20C",
        Name: "Galliano"
    },
    {
        Color: "E49B0F",
        Name: "Gamboge"
    },
    {
        Color: "D18F1B",
        Name: "Geebung"
    },
    {
        Color: "15736B",
        Name: "Genoa"
    },
    {
        Color: "FB8989",
        Name: "Geraldine"
    },
    {
        Color: "D4DFE2",
        Name: "Geyser"
    },
    {
        Color: "C7C9D5",
        Name: "Ghost"
    },
    {
        Color: "523C94",
        Name: "Gigas"
    },
    {
        Color: "B8B56A",
        Name: "Gimblet"
    },
    {
        Color: "E8F2EB",
        Name: "Gin"
    },
    {
        Color: "FFF9E2",
        Name: "Gin Fizz"
    },
    {
        Color: "F8E4BF",
        Name: "Givry"
    },
    {
        Color: "80B3C4",
        Name: "Glacier"
    },
    {
        Color: "61845F",
        Name: "Glade Green"
    },
    {
        Color: "726D4E",
        Name: "Go Ben"
    },
    {
        Color: "3D7D52",
        Name: "Goblin"
    },
    {
        Color: "FFD700",
        Name: "Gold"
    },
    {
        Color: "F18200",
        Name: "Gold Drop"
    },
    {
        Color: "E6BE8A",
        Name: "Gold Sand"
    },
    {
        Color: "DEBA13",
        Name: "Gold Tips"
    },
    {
        Color: "E28913",
        Name: "Golden Bell"
    },
    {
        Color: "F0D52D",
        Name: "Golden Dream"
    },
    {
        Color: "F5FB3D",
        Name: "Golden Fizz"
    },
    {
        Color: "FDE295",
        Name: "Golden Glow"
    },
    {
        Color: "DAA520",
        Name: "Golden Grass"
    },
    {
        Color: "F0DB7D",
        Name: "Golden Sand"
    },
    {
        Color: "FFCC5C",
        Name: "Golden Tainoi"
    },
    {
        Color: "FCD667",
        Name: "Goldenrod"
    },
    {
        Color: "261414",
        Name: "Gondola"
    },
    {
        Color: "0B1107",
        Name: "Gordons Green"
    },
    {
        Color: "FFF14F",
        Name: "Gorse"
    },
    {
        Color: "069B81",
        Name: "Gossamer"
    },
    {
        Color: "D2F8B0",
        Name: "Gossip"
    },
    {
        Color: "6D92A1",
        Name: "Gothic"
    },
    {
        Color: "2F3CB3",
        Name: "Governor Bay"
    },
    {
        Color: "E4D5B7",
        Name: "Grain Brown"
    },
    {
        Color: "FFD38C",
        Name: "Grandis"
    },
    {
        Color: "8D8974",
        Name: "Granite Green"
    },
    {
        Color: "D5F6E3",
        Name: "Granny Apple"
    },
    {
        Color: "84A0A0",
        Name: "Granny Smith"
    },
    {
        Color: "9DE093",
        Name: "Granny Smith Apple"
    },
    {
        Color: "381A51",
        Name: "Grape"
    },
    {
        Color: "251607",
        Name: "Graphite"
    },
    {
        Color: "4A444B",
        Name: "Gravel"
    },
    {
        Color: "808080",
        Name: "Gray"
    },
    {
        Color: "465945",
        Name: "Gray Asparagus"
    },
    {
        Color: "A2AAB3",
        Name: "Gray Chateau"
    },
    {
        Color: "C3C3BD",
        Name: "Gray Nickel"
    },
    {
        Color: "E7ECE6",
        Name: "Gray Nurse"
    },
    {
        Color: "A9A491",
        Name: "Gray Olive"
    },
    {
        Color: "C1BECD",
        Name: "Gray Suit"
    },
    {
        Color: "00FF00",
        Name: "Green"
    },
    {
        Color: "01A368",
        Name: "Green Haze"
    },
    {
        Color: "24500F",
        Name: "Green House"
    },
    {
        Color: "25311C",
        Name: "Green Kelp"
    },
    {
        Color: "436A0D",
        Name: "Green Leaf"
    },
    {
        Color: "CBD3B0",
        Name: "Green Mist"
    },
    {
        Color: "1D6142",
        Name: "Green Pea"
    },
    {
        Color: "A4AF6E",
        Name: "Green Smoke"
    },
    {
        Color: "B8C1B1",
        Name: "Green Spring"
    },
    {
        Color: "032B52",
        Name: "Green Vogue"
    },
    {
        Color: "101405",
        Name: "Green Waterloo"
    },
    {
        Color: "E8EBE0",
        Name: "Green White"
    },
    {
        Color: "ADFF2F",
        Name: "Green Yellow"
    },
    {
        Color: "D54600",
        Name: "Grenadier"
    },
    {
        Color: "BA0101",
        Name: "Guardsman Red"
    },
    {
        Color: "051657",
        Name: "Gulf Blue"
    },
    {
        Color: "80B3AE",
        Name: "Gulf Stream"
    },
    {
        Color: "9DACB7",
        Name: "Gull Gray"
    },
    {
        Color: "B6D3BF",
        Name: "Gum Leaf"
    },
    {
        Color: "7CA1A6",
        Name: "Gumbo"
    },
    {
        Color: "414257",
        Name: "Gun Powder"
    },
    {
        Color: "828685",
        Name: "Gunsmoke"
    },
    {
        Color: "9A9577",
        Name: "Gurkha"
    },
    {
        Color: "98811B",
        Name: "Hacienda"
    },
    {
        Color: "6B2A14",
        Name: "Hairy Heath"
    },
    {
        Color: "1B1035",
        Name: "Haiti"
    },
    {
        Color: "85C4CC",
        Name: "Half Baked"
    },
    {
        Color: "FDF6D3",
        Name: "Half Colonial White"
    },
    {
        Color: "FEF7DE",
        Name: "Half Dutch White"
    },
    {
        Color: "FEF4DB",
        Name: "Half Spanish White"
    },
    {
        Color: "FFFEE1",
        Name: "Half and Half"
    },
    {
        Color: "E5D8AF",
        Name: "Hampton"
    },
    {
        Color: "3FFF00",
        Name: "Harlequin"
    },
    {
        Color: "E6F2EA",
        Name: "Harp"
    },
    {
        Color: "E0B974",
        Name: "Harvest Gold"
    },
    {
        Color: "5590D9",
        Name: "Havelock Blue"
    },
    {
        Color: "9D5616",
        Name: "Hawaiian Tan"
    },
    {
        Color: "D4E2FC",
        Name: "Hawkes Blue"
    },
    {
        Color: "541012",
        Name: "Heath"
    },
    {
        Color: "B7C3D0",
        Name: "Heather"
    },
    {
        Color: "B6B095",
        Name: "Heathered Gray"
    },
    {
        Color: "2B3228",
        Name: "Heavy Metal"
    },
    {
        Color: "DF73FF",
        Name: "Heliotrope"
    },
    {
        Color: "5E5D3B",
        Name: "Hemlock"
    },
    {
        Color: "907874",
        Name: "Hemp"
    },
    {
        Color: "B6316C",
        Name: "Hibiscus"
    },
    {
        Color: "6F8E63",
        Name: "Highland"
    },
    {
        Color: "ACA586",
        Name: "Hillary"
    },
    {
        Color: "6A5D1B",
        Name: "Himalaya"
    },
    {
        Color: "E6FFE9",
        Name: "Hint of Green"
    },
    {
        Color: "FBF9F9",
        Name: "Hint of Red"
    },
    {
        Color: "FAFDE4",
        Name: "Hint of Yellow"
    },
    {
        Color: "589AAF",
        Name: "Hippie Blue"
    },
    {
        Color: "53824B",
        Name: "Hippie Green"
    },
    {
        Color: "AE4560",
        Name: "Hippie Pink"
    },
    {
        Color: "A1ADB5",
        Name: "Hit Gray"
    },
    {
        Color: "FFAB81",
        Name: "Hit Pink"
    },
    {
        Color: "C8A528",
        Name: "Hokey Pokey"
    },
    {
        Color: "65869F",
        Name: "Hoki"
    },
    {
        Color: "011D13",
        Name: "Holly"
    },
    {
        Color: "F400A1",
        Name: "Hollywood Cerise"
    },
    {
        Color: "4F1C70",
        Name: "Honey Flower"
    },
    {
        Color: "EDFC84",
        Name: "Honeysuckle"
    },
    {
        Color: "D06DA1",
        Name: "Hopbush"
    },
    {
        Color: "5A87A0",
        Name: "Horizon"
    },
    {
        Color: "604913",
        Name: "Horses Neck"
    },
    {
        Color: "D2691E",
        Name: "Hot Cinnamon"
    },
    {
        Color: "FF69B4",
        Name: "Hot Pink"
    },
    {
        Color: "B38007",
        Name: "Hot Toddy"
    },
    {
        Color: "CFF9F3",
        Name: "Humming Bird"
    },
    {
        Color: "161D10",
        Name: "Hunter Green"
    },
    {
        Color: "877C7B",
        Name: "Hurricane"
    },
    {
        Color: "B7A458",
        Name: "Husk"
    },
    {
        Color: "B1F4E7",
        Name: "Ice Cold"
    },
    {
        Color: "DAF4F0",
        Name: "Iceberg"
    },
    {
        Color: "F6A4C9",
        Name: "Illusion"
    },
    {
        Color: "B0E313",
        Name: "Inch Worm"
    },
    {
        Color: "C3B091",
        Name: "Indian Khaki"
    },
    {
        Color: "4D1E01",
        Name: "Indian Tan"
    },
    {
        Color: "4F69C6",
        Name: "Indigo"
    },
    {
        Color: "C26B03",
        Name: "Indochine"
    },
    {
        Color: "002FA7",
        Name: "International Klein Blue"
    },
    {
        Color: "FF4F00",
        Name: "International Orange"
    },
    {
        Color: "5F3D26",
        Name: "Irish Coffee"
    },
    {
        Color: "433120",
        Name: "Iroko"
    },
    {
        Color: "D4D7D9",
        Name: "Iron"
    },
    {
        Color: "676662",
        Name: "Ironside Gray"
    },
    {
        Color: "86483C",
        Name: "Ironstone"
    },
    {
        Color: "FFFCEE",
        Name: "Island Spice"
    },
    {
        Color: "FFFFF0",
        Name: "Ivory"
    },
    {
        Color: "2E0329",
        Name: "Jacaranda"
    },
    {
        Color: "3A2A6A",
        Name: "Jacarta"
    },
    {
        Color: "2E1905",
        Name: "Jacko Bean"
    },
    {
        Color: "20208D",
        Name: "Jacksons Purple"
    },
    {
        Color: "00A86B",
        Name: "Jade"
    },
    {
        Color: "EF863F",
        Name: "Jaffa"
    },
    {
        Color: "C2E8E5",
        Name: "Jagged Ice"
    },
    {
        Color: "350E57",
        Name: "Jagger"
    },
    {
        Color: "080110",
        Name: "Jaguar"
    },
    {
        Color: "5B3013",
        Name: "Jambalaya"
    },
    {
        Color: "F4EBD3",
        Name: "Janna"
    },
    {
        Color: "0A6906",
        Name: "Japanese Laurel"
    },
    {
        Color: "780109",
        Name: "Japanese Maple"
    },
    {
        Color: "D87C63",
        Name: "Japonica"
    },
    {
        Color: "1FC2C2",
        Name: "Java"
    },
    {
        Color: "A50B5E",
        Name: "Jazzberry Jam"
    },
    {
        Color: "297B9A",
        Name: "Jelly Bean"
    },
    {
        Color: "B5D2CE",
        Name: "Jet Stream"
    },
    {
        Color: "126B40",
        Name: "Jewel"
    },
    {
        Color: "3B1F1F",
        Name: "Jon"
    },
    {
        Color: "EEFF9A",
        Name: "Jonquil"
    },
    {
        Color: "8AB9F1",
        Name: "Jordy Blue"
    },
    {
        Color: "544333",
        Name: "Judge Gray"
    },
    {
        Color: "7C7B82",
        Name: "Jumbo"
    },
    {
        Color: "29AB87",
        Name: "Jungle Green"
    },
    {
        Color: "B4CFD3",
        Name: "Jungle Mist"
    },
    {
        Color: "6D9292",
        Name: "Juniper"
    },
    {
        Color: "ECCDB9",
        Name: "Just Right"
    },
    {
        Color: "5E483E",
        Name: "Kabul"
    },
    {
        Color: "004620",
        Name: "Kaitoke Green"
    },
    {
        Color: "C6C8BD",
        Name: "Kangaroo"
    },
    {
        Color: "1E1609",
        Name: "Karaka"
    },
    {
        Color: "FFEAD4",
        Name: "Karry"
    },
    {
        Color: "507096",
        Name: "Kashmir Blue"
    },
    {
        Color: "454936",
        Name: "Kelp"
    },
    {
        Color: "7C1C05",
        Name: "Kenyan Copper"
    },
    {
        Color: "3AB09E",
        Name: "Keppel"
    },
    {
        Color: "BFC921",
        Name: "Key Lime Pie"
    },
    {
        Color: "F0E68C",
        Name: "Khaki"
    },
    {
        Color: "E1EAD4",
        Name: "Kidnapper"
    },
    {
        Color: "240C02",
        Name: "Kilamanjaro"
    },
    {
        Color: "3A6A47",
        Name: "Killarney"
    },
    {
        Color: "736C9F",
        Name: "Kimberly"
    },
    {
        Color: "3E0480",
        Name: "Kingfisher Daisy"
    },
    {
        Color: "E79FC4",
        Name: "Kobi"
    },
    {
        Color: "6E6D57",
        Name: "Kokoda"
    },
    {
        Color: "8F4B0E",
        Name: "Korma"
    },
    {
        Color: "FFBD5F",
        Name: "Koromiko"
    },
    {
        Color: "FFE772",
        Name: "Kournikova"
    },
    {
        Color: "886221",
        Name: "Kumera"
    },
    {
        Color: "368716",
        Name: "La Palma"
    },
    {
        Color: "B3C110",
        Name: "La Rioja"
    },
    {
        Color: "C6E610",
        Name: "Las Palmas"
    },
    {
        Color: "C8B568",
        Name: "Laser"
    },
    {
        Color: "FFFF66",
        Name: "Laser Lemon"
    },
    {
        Color: "749378",
        Name: "Laurel"
    },
    {
        Color: "B57EDC",
        Name: "Lavender"
    },
    {
        Color: "BDBBD7",
        Name: "Lavender Gray"
    },
    {
        Color: "EE82EE",
        Name: "Lavender Magenta"
    },
    {
        Color: "FBAED2",
        Name: "Lavender Pink"
    },
    {
        Color: "967BB6",
        Name: "Lavender Purple"
    },
    {
        Color: "FBA0E3",
        Name: "Lavender Rose"
    },
    {
        Color: "FFF0F5",
        Name: "Lavender blush"
    },
    {
        Color: "967059",
        Name: "Leather"
    },
    {
        Color: "FDE910",
        Name: "Lemon"
    },
    {
        Color: "FFFACD",
        Name: "Lemon Chiffon"
    },
    {
        Color: "AC9E22",
        Name: "Lemon Ginger"
    },
    {
        Color: "9B9E8F",
        Name: "Lemon Grass"
    },
    {
        Color: "FDD5B1",
        Name: "Light Apricot"
    },
    {
        Color: "E29CD2",
        Name: "Light Orchid"
    },
    {
        Color: "C9A0DC",
        Name: "Light Wisteria"
    },
    {
        Color: "FCC01E",
        Name: "Lightning Yellow"
    },
    {
        Color: "C8A2C8",
        Name: "Lilac"
    },
    {
        Color: "9874D3",
        Name: "Lilac Bush"
    },
    {
        Color: "C8AABF",
        Name: "Lily"
    },
    {
        Color: "E7F8FF",
        Name: "Lily White"
    },
    {
        Color: "76BD17",
        Name: "Lima"
    },
    {
        Color: "BFFF00",
        Name: "Lime"
    },
    {
        Color: "6F9D02",
        Name: "Limeade"
    },
    {
        Color: "747D63",
        Name: "Limed Ash"
    },
    {
        Color: "AC8A56",
        Name: "Limed Oak"
    },
    {
        Color: "394851",
        Name: "Limed Spruce"
    },
    {
        Color: "FAF0E6",
        Name: "Linen"
    },
    {
        Color: "D9E4F5",
        Name: "Link Water"
    },
    {
        Color: "AB0563",
        Name: "Lipstick"
    },
    {
        Color: "423921",
        Name: "Lisbon Brown"
    },
    {
        Color: "4D282E",
        Name: "Livid Brown"
    },
    {
        Color: "EEF4DE",
        Name: "Loafer"
    },
    {
        Color: "BDC9CE",
        Name: "Loblolly"
    },
    {
        Color: "2C8C84",
        Name: "Lochinvar"
    },
    {
        Color: "007EC7",
        Name: "Lochmara"
    },
    {
        Color: "A8AF8E",
        Name: "Locust"
    },
    {
        Color: "242A1D",
        Name: "Log Cabin"
    },
    {
        Color: "AAA9CD",
        Name: "Logan"
    },
    {
        Color: "DFCFDB",
        Name: "Lola"
    },
    {
        Color: "BEA6C3",
        Name: "London Hue"
    },
    {
        Color: "6D0101",
        Name: "Lonestar"
    },
    {
        Color: "863C3C",
        Name: "Lotus"
    },
    {
        Color: "460B41",
        Name: "Loulou"
    },
    {
        Color: "AF9F1C",
        Name: "Lucky"
    },
    {
        Color: "1A1A68",
        Name: "Lucky Point"
    },
    {
        Color: "3C493A",
        Name: "Lunar Green"
    },
    {
        Color: "A7882C",
        Name: "Luxor Gold"
    },
    {
        Color: "697E9A",
        Name: "Lynch"
    },
    {
        Color: "D9F7FF",
        Name: "Mabel"
    },
    {
        Color: "FFB97B",
        Name: "Macaroni and Cheese"
    },
    {
        Color: "B7F0BE",
        Name: "Madang"
    },
    {
        Color: "09255D",
        Name: "Madison"
    },
    {
        Color: "3F3002",
        Name: "Madras"
    },
    {
        Color: "FF00FF",
        Name: "Magenta / Fuchsia"
    },
    {
        Color: "AAF0D1",
        Name: "Magic Mint"
    },
    {
        Color: "F8F4FF",
        Name: "Magnolia"
    },
    {
        Color: "4E0606",
        Name: "Mahogany"
    },
    {
        Color: "B06608",
        Name: "Mai Tai"
    },
    {
        Color: "F5D5A0",
        Name: "Maize"
    },
    {
        Color: "897D6D",
        Name: "Makara"
    },
    {
        Color: "444954",
        Name: "Mako"
    },
    {
        Color: "0BDA51",
        Name: "Malachite"
    },
    {
        Color: "7DC8F7",
        Name: "Malibu"
    },
    {
        Color: "233418",
        Name: "Mallard"
    },
    {
        Color: "BDB2A1",
        Name: "Malta"
    },
    {
        Color: "8E8190",
        Name: "Mamba"
    },
    {
        Color: "8D90A1",
        Name: "Manatee"
    },
    {
        Color: "AD781B",
        Name: "Mandalay"
    },
    {
        Color: "E25465",
        Name: "Mandy"
    },
    {
        Color: "F2C3B2",
        Name: "Mandys Pink"
    },
    {
        Color: "E77200",
        Name: "Mango Tango"
    },
    {
        Color: "F5C999",
        Name: "Manhattan"
    },
    {
        Color: "74C365",
        Name: "Mantis"
    },
    {
        Color: "8B9C90",
        Name: "Mantle"
    },
    {
        Color: "EEEF78",
        Name: "Manz"
    },
    {
        Color: "350036",
        Name: "Mardi Gras"
    },
    {
        Color: "B98D28",
        Name: "Marigold"
    },
    {
        Color: "FBE870",
        Name: "Marigold Yellow"
    },
    {
        Color: "286ACD",
        Name: "Mariner"
    },
    {
        Color: "800000",
        Name: "Maroon"
    },
    {
        Color: "C32148",
        Name: "Maroon Flush"
    },
    {
        Color: "520C17",
        Name: "Maroon Oak"
    },
    {
        Color: "0B0F08",
        Name: "Marshland"
    },
    {
        Color: "AFA09E",
        Name: "Martini"
    },
    {
        Color: "363050",
        Name: "Martinique"
    },
    {
        Color: "F8DB9D",
        Name: "Marzipan"
    },
    {
        Color: "403B38",
        Name: "Masala"
    },
    {
        Color: "1B659D",
        Name: "Matisse"
    },
    {
        Color: "B05D54",
        Name: "Matrix"
    },
    {
        Color: "4E3B41",
        Name: "Matterhorn"
    },
    {
        Color: "E0B0FF",
        Name: "Mauve"
    },
    {
        Color: "F091A9",
        Name: "Mauvelous"
    },
    {
        Color: "D8C2D5",
        Name: "Maverick"
    },
    {
        Color: "AF4035",
        Name: "Medium Carmine"
    },
    {
        Color: "9370DB",
        Name: "Medium Purple"
    },
    {
        Color: "BB3385",
        Name: "Medium Red Violet"
    },
    {
        Color: "E4C2D5",
        Name: "Melanie"
    },
    {
        Color: "300529",
        Name: "Melanzane"
    },
    {
        Color: "FEBAAD",
        Name: "Melon"
    },
    {
        Color: "C7C1FF",
        Name: "Melrose"
    },
    {
        Color: "E5E5E5",
        Name: "Mercury"
    },
    {
        Color: "F6F0E6",
        Name: "Merino"
    },
    {
        Color: "413C37",
        Name: "Merlin"
    },
    {
        Color: "831923",
        Name: "Merlot"
    },
    {
        Color: "49371B",
        Name: "Metallic Bronze"
    },
    {
        Color: "71291D",
        Name: "Metallic Copper"
    },
    {
        Color: "D07D12",
        Name: "Meteor"
    },
    {
        Color: "3C1F76",
        Name: "Meteorite"
    },
    {
        Color: "A72525",
        Name: "Mexican Red"
    },
    {
        Color: "5F5F6E",
        Name: "Mid Gray"
    },
    {
        Color: "011635",
        Name: "Midnight"
    },
    {
        Color: "003366",
        Name: "Midnight Blue"
    },
    {
        Color: "041004",
        Name: "Midnight Moss"
    },
    {
        Color: "2D2510",
        Name: "Mikado"
    },
    {
        Color: "FAFFA4",
        Name: "Milan"
    },
    {
        Color: "B81104",
        Name: "Milano Red"
    },
    {
        Color: "FFF6D4",
        Name: "Milk Punch"
    },
    {
        Color: "594433",
        Name: "Millbrook"
    },
    {
        Color: "F8FDD3",
        Name: "Mimosa"
    },
    {
        Color: "E3F988",
        Name: "Mindaro"
    },
    {
        Color: "323232",
        Name: "Mine Shaft"
    },
    {
        Color: "3F5D53",
        Name: "Mineral Green"
    },
    {
        Color: "36747D",
        Name: "Ming"
    },
    {
        Color: "3F307F",
        Name: "Minsk"
    },
    {
        Color: "98FF98",
        Name: "Mint Green"
    },
    {
        Color: "F1EEC1",
        Name: "Mint Julep"
    },
    {
        Color: "C4F4EB",
        Name: "Mint Tulip"
    },
    {
        Color: "161928",
        Name: "Mirage"
    },
    {
        Color: "D1D2DD",
        Name: "Mischka"
    },
    {
        Color: "C4C4BC",
        Name: "Mist Gray"
    },
    {
        Color: "7F7589",
        Name: "Mobster"
    },
    {
        Color: "6E1D14",
        Name: "Moccaccino"
    },
    {
        Color: "782D19",
        Name: "Mocha"
    },
    {
        Color: "C04737",
        Name: "Mojo"
    },
    {
        Color: "FFA194",
        Name: "Mona Lisa"
    },
    {
        Color: "8B0723",
        Name: "Monarch"
    },
    {
        Color: "4A3C30",
        Name: "Mondo"
    },
    {
        Color: "B5A27F",
        Name: "Mongoose"
    },
    {
        Color: "8A8389",
        Name: "Monsoon"
    },
    {
        Color: "83D0C6",
        Name: "Monte Carlo"
    },
    {
        Color: "C7031E",
        Name: "Monza"
    },
    {
        Color: "7F76D3",
        Name: "Moody Blue"
    },
    {
        Color: "FCFEDA",
        Name: "Moon Glow"
    },
    {
        Color: "DCDDCC",
        Name: "Moon Mist"
    },
    {
        Color: "D6CEF6",
        Name: "Moon Raker"
    },
    {
        Color: "9EDEE0",
        Name: "Morning Glory"
    },
    {
        Color: "441D00",
        Name: "Morocco Brown"
    },
    {
        Color: "504351",
        Name: "Mortar"
    },
    {
        Color: "036A6E",
        Name: "Mosque"
    },
    {
        Color: "ADDFAD",
        Name: "Moss Green"
    },
    {
        Color: "1AB385",
        Name: "Mountain Meadow"
    },
    {
        Color: "959396",
        Name: "Mountain Mist"
    },
    {
        Color: "997A8D",
        Name: "Mountbatten Pink"
    },
    {
        Color: "B78E5C",
        Name: "Muddy Waters"
    },
    {
        Color: "AA8B5B",
        Name: "Muesli"
    },
    {
        Color: "C54B8C",
        Name: "Mulberry"
    },
    {
        Color: "5C0536",
        Name: "Mulberry Wood"
    },
    {
        Color: "8C472F",
        Name: "Mule Fawn"
    },
    {
        Color: "4E4562",
        Name: "Mulled Wine"
    },
    {
        Color: "FFDB58",
        Name: "Mustard"
    },
    {
        Color: "D69188",
        Name: "My Pink"
    },
    {
        Color: "FFB31F",
        Name: "My Sin"
    },
    {
        Color: "E2EBED",
        Name: "Mystic"
    },
    {
        Color: "4B5D52",
        Name: "Nandor"
    },
    {
        Color: "ACA494",
        Name: "Napa"
    },
    {
        Color: "EDF9F1",
        Name: "Narvik"
    },
    {
        Color: "8B8680",
        Name: "Natural Gray"
    },
    {
        Color: "FFDEAD",
        Name: "Navajo White"
    },
    {
        Color: "000080",
        Name: "Navy Blue"
    },
    {
        Color: "CBDBD6",
        Name: "Nebula"
    },
    {
        Color: "FFE2C5",
        Name: "Negroni"
    },
    {
        Color: "FF9933",
        Name: "Neon Carrot"
    },
    {
        Color: "8EABC1",
        Name: "Nepal"
    },
    {
        Color: "7CB7BB",
        Name: "Neptune"
    },
    {
        Color: "140600",
        Name: "Nero"
    },
    {
        Color: "646E75",
        Name: "Nevada"
    },
    {
        Color: "F3D69D",
        Name: "New Orleans"
    },
    {
        Color: "D7837F",
        Name: "New York Pink"
    },
    {
        Color: "06A189",
        Name: "Niagara"
    },
    {
        Color: "1F120F",
        Name: "Night Rider"
    },
    {
        Color: "AA375A",
        Name: "Night Shadz"
    },
    {
        Color: "193751",
        Name: "Nile Blue"
    },
    {
        Color: "B7B1B1",
        Name: "Nobel"
    },
    {
        Color: "BAB1A2",
        Name: "Nomad"
    },
    {
        Color: "A8BD9F",
        Name: "Norway"
    },
    {
        Color: "C59922",
        Name: "Nugget"
    },
    {
        Color: "81422C",
        Name: "Nutmeg"
    },
    {
        Color: "683600",
        Name: "Nutmeg Wood Finish"
    },
    {
        Color: "FEEFCE",
        Name: "Oasis"
    },
    {
        Color: "02866F",
        Name: "Observatory"
    },
    {
        Color: "41AA78",
        Name: "Ocean Green"
    },
    {
        Color: "CC7722",
        Name: "Ochre"
    },
    {
        Color: "E6F8F3",
        Name: "Off Green"
    },
    {
        Color: "FEF9E3",
        Name: "Off Yellow"
    },
    {
        Color: "281E15",
        Name: "Oil"
    },
    {
        Color: "901E1E",
        Name: "Old Brick"
    },
    {
        Color: "724A2F",
        Name: "Old Copper"
    },
    {
        Color: "CFB53B",
        Name: "Old Gold"
    },
    {
        Color: "FDF5E6",
        Name: "Old Lace"
    },
    {
        Color: "796878",
        Name: "Old Lavender"
    },
    {
        Color: "C08081",
        Name: "Old Rose"
    },
    {
        Color: "808000",
        Name: "Olive"
    },
    {
        Color: "6B8E23",
        Name: "Olive Drab"
    },
    {
        Color: "B5B35C",
        Name: "Olive Green"
    },
    {
        Color: "8B8470",
        Name: "Olive Haze"
    },
    {
        Color: "716E10",
        Name: "Olivetone"
    },
    {
        Color: "9AB973",
        Name: "Olivine"
    },
    {
        Color: "CDF4FF",
        Name: "Onahau"
    },
    {
        Color: "2F270E",
        Name: "Onion"
    },
    {
        Color: "A9C6C2",
        Name: "Opal"
    },
    {
        Color: "8E6F70",
        Name: "Opium"
    },
    {
        Color: "377475",
        Name: "Oracle"
    },
    {
        Color: "FF681F",
        Name: "Orange"
    },
    {
        Color: "FFA000",
        Name: "Orange Peel"
    },
    {
        Color: "C45719",
        Name: "Orange Roughy"
    },
    {
        Color: "FEFCED",
        Name: "Orange White"
    },
    {
        Color: "DA70D6",
        Name: "Orchid"
    },
    {
        Color: "FFFDF3",
        Name: "Orchid White"
    },
    {
        Color: "9B4703",
        Name: "Oregon"
    },
    {
        Color: "015E85",
        Name: "Orient"
    },
    {
        Color: "C69191",
        Name: "Oriental Pink"
    },
    {
        Color: "F3FBD4",
        Name: "Orinoco"
    },
    {
        Color: "878D91",
        Name: "Oslo Gray"
    },
    {
        Color: "E9F8ED",
        Name: "Ottoman"
    },
    {
        Color: "2D383A",
        Name: "Outer Space"
    },
    {
        Color: "FF6037",
        Name: "Outrageous Orange"
    },
    {
        Color: "384555",
        Name: "Oxford Blue"
    },
    {
        Color: "779E86",
        Name: "Oxley"
    },
    {
        Color: "DAFAFF",
        Name: "Oyster Bay"
    },
    {
        Color: "E9CECD",
        Name: "Oyster Pink"
    },
    {
        Color: "A65529",
        Name: "Paarl"
    },
    {
        Color: "776F61",
        Name: "Pablo"
    },
    {
        Color: "009DC4",
        Name: "Pacific Blue"
    },
    {
        Color: "778120",
        Name: "Pacifika"
    },
    {
        Color: "411F10",
        Name: "Paco"
    },
    {
        Color: "ADE6C4",
        Name: "Padua"
    },
    {
        Color: "FFFF99",
        Name: "Pale Canary"
    },
    {
        Color: "C0D3B9",
        Name: "Pale Leaf"
    },
    {
        Color: "988D77",
        Name: "Pale Oyster"
    },
    {
        Color: "FDFEB8",
        Name: "Pale Prim"
    },
    {
        Color: "FFE1F2",
        Name: "Pale Rose"
    },
    {
        Color: "6E7783",
        Name: "Pale Sky"
    },
    {
        Color: "C3BFC1",
        Name: "Pale Slate"
    },
    {
        Color: "09230F",
        Name: "Palm Green"
    },
    {
        Color: "19330E",
        Name: "Palm Leaf"
    },
    {
        Color: "F4F2EE",
        Name: "Pampas"
    },
    {
        Color: "EAF6EE",
        Name: "Panache"
    },
    {
        Color: "EDCDAB",
        Name: "Pancho"
    },
    {
        Color: "FFEFD5",
        Name: "Papaya Whip"
    },
    {
        Color: "8D0226",
        Name: "Paprika"
    },
    {
        Color: "317D82",
        Name: "Paradiso"
    },
    {
        Color: "F1E9D2",
        Name: "Parchment"
    },
    {
        Color: "FFF46E",
        Name: "Paris Daisy"
    },
    {
        Color: "26056A",
        Name: "Paris M"
    },
    {
        Color: "CADCD4",
        Name: "Paris White"
    },
    {
        Color: "134F19",
        Name: "Parsley"
    },
    {
        Color: "77DD77",
        Name: "Pastel Green"
    },
    {
        Color: "FFD1DC",
        Name: "Pastel Pink"
    },
    {
        Color: "639A8F",
        Name: "Patina"
    },
    {
        Color: "DEF5FF",
        Name: "Pattens Blue"
    },
    {
        Color: "260368",
        Name: "Paua"
    },
    {
        Color: "D7C498",
        Name: "Pavlova"
    },
    {
        Color: "FFE5B4",
        Name: "Peach"
    },
    {
        Color: "FFF0DB",
        Name: "Peach Cream"
    },
    {
        Color: "FFCC99",
        Name: "Peach Orange"
    },
    {
        Color: "FFDCD6",
        Name: "Peach Schnapps"
    },
    {
        Color: "FADFAD",
        Name: "Peach Yellow"
    },
    {
        Color: "782F16",
        Name: "Peanut"
    },
    {
        Color: "D1E231",
        Name: "Pear"
    },
    {
        Color: "E8E0D5",
        Name: "Pearl Bush"
    },
    {
        Color: "FCF4DC",
        Name: "Pearl Lusta"
    },
    {
        Color: "716B56",
        Name: "Peat"
    },
    {
        Color: "3EABBF",
        Name: "Pelorous"
    },
    {
        Color: "E3F5E1",
        Name: "Peppermint"
    },
    {
        Color: "A9BEF2",
        Name: "Perano"
    },
    {
        Color: "D0BEF8",
        Name: "Perfume"
    },
    {
        Color: "E1E6D6",
        Name: "Periglacial Blue"
    },
    {
        Color: "CCCCFF",
        Name: "Periwinkle"
    },
    {
        Color: "C3CDE6",
        Name: "Periwinkle Gray"
    },
    {
        Color: "1C39BB",
        Name: "Persian Blue"
    },
    {
        Color: "00A693",
        Name: "Persian Green"
    },
    {
        Color: "32127A",
        Name: "Persian Indigo"
    },
    {
        Color: "F77FBE",
        Name: "Persian Pink"
    },
    {
        Color: "701C1C",
        Name: "Persian Plum"
    },
    {
        Color: "CC3333",
        Name: "Persian Red"
    },
    {
        Color: "FE28A2",
        Name: "Persian Rose"
    },
    {
        Color: "FF6B53",
        Name: "Persimmon"
    },
    {
        Color: "7F3A02",
        Name: "Peru Tan"
    },
    {
        Color: "7C7631",
        Name: "Pesto"
    },
    {
        Color: "DB9690",
        Name: "Petite Orchid"
    },
    {
        Color: "96A8A1",
        Name: "Pewter"
    },
    {
        Color: "A3807B",
        Name: "Pharlap"
    },
    {
        Color: "FFF39D",
        Name: "Picasso"
    },
    {
        Color: "6E4826",
        Name: "Pickled Bean"
    },
    {
        Color: "314459",
        Name: "Pickled Bluewood"
    },
    {
        Color: "45B1E8",
        Name: "Picton Blue"
    },
    {
        Color: "FDD7E4",
        Name: "Pig Pink"
    },
    {
        Color: "AFBDD9",
        Name: "Pigeon Post"
    },
    {
        Color: "4B0082",
        Name: "Pigment Indigo"
    },
    {
        Color: "6D5E54",
        Name: "Pine Cone"
    },
    {
        Color: "C7CD90",
        Name: "Pine Glade"
    },
    {
        Color: "01796F",
        Name: "Pine Green"
    },
    {
        Color: "171F04",
        Name: "Pine Tree"
    },
    {
        Color: "FFC0CB",
        Name: "Pink"
    },
    {
        Color: "FF66FF",
        Name: "Pink Flamingo"
    },
    {
        Color: "E1C0C8",
        Name: "Pink Flare"
    },
    {
        Color: "FFDDF4",
        Name: "Pink Lace"
    },
    {
        Color: "FFF1D8",
        Name: "Pink Lady"
    },
    {
        Color: "FF91A4",
        Name: "Pink Salmon"
    },
    {
        Color: "BEB5B7",
        Name: "Pink Swan"
    },
    {
        Color: "C96323",
        Name: "Piper"
    },
    {
        Color: "FEF4CC",
        Name: "Pipi"
    },
    {
        Color: "FFE1DF",
        Name: "Pippin"
    },
    {
        Color: "BA7F03",
        Name: "Pirate Gold"
    },
    {
        Color: "9DC209",
        Name: "Pistachio"
    },
    {
        Color: "C0D8B6",
        Name: "Pixie Green"
    },
    {
        Color: "FF9000",
        Name: "Pizazz"
    },
    {
        Color: "C99415",
        Name: "Pizza"
    },
    {
        Color: "27504B",
        Name: "Plantation"
    },
    {
        Color: "843179",
        Name: "Plum"
    },
    {
        Color: "8F021C",
        Name: "Pohutukawa"
    },
    {
        Color: "E5F9F6",
        Name: "Polar"
    },
    {
        Color: "8DA8CC",
        Name: "Polo Blue"
    },
    {
        Color: "F34723",
        Name: "Pomegranate"
    },
    {
        Color: "660045",
        Name: "Pompadour"
    },
    {
        Color: "EFF2F3",
        Name: "Porcelain"
    },
    {
        Color: "EAAE69",
        Name: "Porsche"
    },
    {
        Color: "251F4F",
        Name: "Port Gore"
    },
    {
        Color: "FFFFB4",
        Name: "Portafino"
    },
    {
        Color: "8B9FEE",
        Name: "Portage"
    },
    {
        Color: "F9E663",
        Name: "Portica"
    },
    {
        Color: "F5E7E2",
        Name: "Pot Pourri"
    },
    {
        Color: "8C5738",
        Name: "Potters Clay"
    },
    {
        Color: "BCC9C2",
        Name: "Powder Ash"
    },
    {
        Color: "B0E0E6",
        Name: "Powder Blue"
    },
    {
        Color: "9A3820",
        Name: "Prairie Sand"
    },
    {
        Color: "D0C0E5",
        Name: "Prelude"
    },
    {
        Color: "F0E2EC",
        Name: "Prim"
    },
    {
        Color: "EDEA99",
        Name: "Primrose"
    },
    {
        Color: "FEF5F1",
        Name: "Provincial Pink"
    },
    {
        Color: "003153",
        Name: "Prussian Blue"
    },
    {
        Color: "CC8899",
        Name: "Puce"
    },
    {
        Color: "7D2C14",
        Name: "Pueblo"
    },
    {
        Color: "3FC1AA",
        Name: "Puerto Rico"
    },
    {
        Color: "C2CAC4",
        Name: "Pumice"
    },
    {
        Color: "FF7518",
        Name: "Pumpkin"
    },
    {
        Color: "B1610B",
        Name: "Pumpkin Skin"
    },
    {
        Color: "DC4333",
        Name: "Punch"
    },
    {
        Color: "4D3D14",
        Name: "Punga"
    },
    {
        Color: "660099",
        Name: "Purple"
    },
    {
        Color: "652DC1",
        Name: "Purple Heart"
    },
    {
        Color: "9678B6",
        Name: "Purple Mountain's Majesty"
    },
    {
        Color: "FF00CC",
        Name: "Purple Pizzazz"
    },
    {
        Color: "E7CD8C",
        Name: "Putty"
    },
    {
        Color: "FFFDF4",
        Name: "Quarter Pearl Lusta"
    },
    {
        Color: "F7F2E1",
        Name: "Quarter Spanish White"
    },
    {
        Color: "BD978E",
        Name: "Quicksand"
    },
    {
        Color: "D6D6D1",
        Name: "Quill Gray"
    },
    {
        Color: "623F2D",
        Name: "Quincy"
    },
    {
        Color: "0C1911",
        Name: "Racing Green"
    },
    {
        Color: "FF355E",
        Name: "Radical Red"
    },
    {
        Color: "EADAB8",
        Name: "Raffia"
    },
    {
        Color: "B9C8AC",
        Name: "Rainee"
    },
    {
        Color: "F7B668",
        Name: "Rajah"
    },
    {
        Color: "2E3222",
        Name: "Rangitoto"
    },
    {
        Color: "1C1E13",
        Name: "Rangoon Green"
    },
    {
        Color: "727B89",
        Name: "Raven"
    },
    {
        Color: "D27D46",
        Name: "Raw Sienna"
    },
    {
        Color: "734A12",
        Name: "Raw Umber"
    },
    {
        Color: "FF33CC",
        Name: "Razzle Dazzle Rose"
    },
    {
        Color: "E30B5C",
        Name: "Razzmatazz"
    },
    {
        Color: "3C1206",
        Name: "Rebel"
    },
    {
        Color: "FF0000",
        Name: "Red"
    },
    {
        Color: "7B3801",
        Name: "Red Beech"
    },
    {
        Color: "8E0000",
        Name: "Red Berry"
    },
    {
        Color: "DA6A41",
        Name: "Red Damask"
    },
    {
        Color: "860111",
        Name: "Red Devil"
    },
    {
        Color: "FF3F34",
        Name: "Red Orange"
    },
    {
        Color: "6E0902",
        Name: "Red Oxide"
    },
    {
        Color: "ED0A3F",
        Name: "Red Ribbon"
    },
    {
        Color: "80341F",
        Name: "Red Robin"
    },
    {
        Color: "D05F04",
        Name: "Red Stage"
    },
    {
        Color: "C71585",
        Name: "Red Violet"
    },
    {
        Color: "5D1E0F",
        Name: "Redwood"
    },
    {
        Color: "C9FFA2",
        Name: "Reef"
    },
    {
        Color: "9F821C",
        Name: "Reef Gold"
    },
    {
        Color: "013F6A",
        Name: "Regal Blue"
    },
    {
        Color: "86949F",
        Name: "Regent Gray"
    },
    {
        Color: "AAD6E6",
        Name: "Regent St Blue"
    },
    {
        Color: "FEEBF3",
        Name: "Remy"
    },
    {
        Color: "A86515",
        Name: "Reno Sand"
    },
    {
        Color: "002387",
        Name: "Resolution Blue"
    },
    {
        Color: "2C1632",
        Name: "Revolver"
    },
    {
        Color: "2E3F62",
        Name: "Rhino"
    },
    {
        Color: "FFFEF0",
        Name: "Rice Cake"
    },
    {
        Color: "EEFFE2",
        Name: "Rice Flower"
    },
    {
        Color: "A85307",
        Name: "Rich Gold"
    },
    {
        Color: "BBD009",
        Name: "Rio Grande"
    },
    {
        Color: "F4D81C",
        Name: "Ripe Lemon"
    },
    {
        Color: "410056",
        Name: "Ripe Plum"
    },
    {
        Color: "8BE6D8",
        Name: "Riptide"
    },
    {
        Color: "434C59",
        Name: "River Bed"
    },
    {
        Color: "EAC674",
        Name: "Rob Roy"
    },
    {
        Color: "00CCCC",
        Name: "Robin's Egg Blue"
    },
    {
        Color: "4D3833",
        Name: "Rock"
    },
    {
        Color: "9EB1CD",
        Name: "Rock Blue"
    },
    {
        Color: "BA450C",
        Name: "Rock Spray"
    },
    {
        Color: "C9B29B",
        Name: "Rodeo Dust"
    },
    {
        Color: "747D83",
        Name: "Rolling Stone"
    },
    {
        Color: "DE6360",
        Name: "Roman"
    },
    {
        Color: "795D4C",
        Name: "Roman Coffee"
    },
    {
        Color: "FFFEFD",
        Name: "Romance"
    },
    {
        Color: "FFD2B7",
        Name: "Romantic"
    },
    {
        Color: "ECC54E",
        Name: "Ronchi"
    },
    {
        Color: "A62F20",
        Name: "Roof Terracotta"
    },
    {
        Color: "8E4D1E",
        Name: "Rope"
    },
    {
        Color: "FF007F",
        Name: "Rose"
    },
    {
        Color: "FBB2A3",
        Name: "Rose Bud"
    },
    {
        Color: "800B47",
        Name: "Rose Bud Cherry"
    },
    {
        Color: "E7BCB4",
        Name: "Rose Fog"
    },
    {
        Color: "FFF6F5",
        Name: "Rose White"
    },
    {
        Color: "BF5500",
        Name: "Rose of Sharon"
    },
    {
        Color: "65000B",
        Name: "Rosewood"
    },
    {
        Color: "C6A84B",
        Name: "Roti"
    },
    {
        Color: "A23B6C",
        Name: "Rouge"
    },
    {
        Color: "4169E1",
        Name: "Royal Blue"
    },
    {
        Color: "AB3472",
        Name: "Royal Heath"
    },
    {
        Color: "6B3FA0",
        Name: "Royal Purple"
    },
    {
        Color: "796989",
        Name: "Rum"
    },
    {
        Color: "F9F8E4",
        Name: "Rum Swizzle"
    },
    {
        Color: "80461B",
        Name: "Russet"
    },
    {
        Color: "755A57",
        Name: "Russett"
    },
    {
        Color: "B7410E",
        Name: "Rust"
    },
    {
        Color: "480404",
        Name: "Rustic Red"
    },
    {
        Color: "86560A",
        Name: "Rusty Nail"
    },
    {
        Color: "4C3024",
        Name: "Saddle"
    },
    {
        Color: "583401",
        Name: "Saddle Brown"
    },
    {
        Color: "F4C430",
        Name: "Saffron"
    },
    {
        Color: "F9BF58",
        Name: "Saffron Mango"
    },
    {
        Color: "9EA587",
        Name: "Sage"
    },
    {
        Color: "B7A214",
        Name: "Sahara"
    },
    {
        Color: "F1E788",
        Name: "Sahara Sand"
    },
    {
        Color: "B8E0F9",
        Name: "Sail"
    },
    {
        Color: "097F4B",
        Name: "Salem"
    },
    {
        Color: "FF8C69",
        Name: "Salmon"
    },
    {
        Color: "FEDB8D",
        Name: "Salomie"
    },
    {
        Color: "685E6E",
        Name: "Salt Box"
    },
    {
        Color: "F1F7F2",
        Name: "Saltpan"
    },
    {
        Color: "3A2010",
        Name: "Sambuca"
    },
    {
        Color: "0B6207",
        Name: "San Felix"
    },
    {
        Color: "304B6A",
        Name: "San Juan"
    },
    {
        Color: "456CAC",
        Name: "San Marino"
    },
    {
        Color: "826F65",
        Name: "Sand Dune"
    },
    {
        Color: "AA8D6F",
        Name: "Sandal"
    },
    {
        Color: "AB917A",
        Name: "Sandrift"
    },
    {
        Color: "796D62",
        Name: "Sandstone"
    },
    {
        Color: "F5E7A2",
        Name: "Sandwisp"
    },
    {
        Color: "FFEAC8",
        Name: "Sandy Beach"
    },
    {
        Color: "F4A460",
        Name: "Sandy brown"
    },
    {
        Color: "92000A",
        Name: "Sangria"
    },
    {
        Color: "8D3D38",
        Name: "Sanguine Brown"
    },
    {
        Color: "B16D52",
        Name: "Santa Fe"
    },
    {
        Color: "9FA0B1",
        Name: "Santas Gray"
    },
    {
        Color: "DED4A4",
        Name: "Sapling"
    },
    {
        Color: "2F519E",
        Name: "Sapphire"
    },
    {
        Color: "555B10",
        Name: "Saratoga"
    },
    {
        Color: "E6E4D4",
        Name: "Satin Linen"
    },
    {
        Color: "FFF5F3",
        Name: "Sauvignon"
    },
    {
        Color: "FFF4E0",
        Name: "Sazerac"
    },
    {
        Color: "675FA6",
        Name: "Scampi"
    },
    {
        Color: "CFFAF4",
        Name: "Scandal"
    },
    {
        Color: "FF2400",
        Name: "Scarlet"
    },
    {
        Color: "431560",
        Name: "Scarlet Gum"
    },
    {
        Color: "950015",
        Name: "Scarlett"
    },
    {
        Color: "585562",
        Name: "Scarpa Flow"
    },
    {
        Color: "A9B497",
        Name: "Schist"
    },
    {
        Color: "FFD800",
        Name: "School bus Yellow"
    },
    {
        Color: "8B847E",
        Name: "Schooner"
    },
    {
        Color: "0066CC",
        Name: "Science Blue"
    },
    {
        Color: "2EBFD4",
        Name: "Scooter"
    },
    {
        Color: "695F62",
        Name: "Scorpion"
    },
    {
        Color: "FFFBDC",
        Name: "Scotch Mist"
    },
    {
        Color: "66FF66",
        Name: "Screamin' Green"
    },
    {
        Color: "FBA129",
        Name: "Sea Buckthorn"
    },
    {
        Color: "2E8B57",
        Name: "Sea Green"
    },
    {
        Color: "C5DBCA",
        Name: "Sea Mist"
    },
    {
        Color: "78A39C",
        Name: "Sea Nymph"
    },
    {
        Color: "ED989E",
        Name: "Sea Pink"
    },
    {
        Color: "80CCEA",
        Name: "Seagull"
    },
    {
        Color: "731E8F",
        Name: "Seance"
    },
    {
        Color: "F1F1F1",
        Name: "Seashell"
    },
    {
        Color: "FFF5EE",
        Name: "Seashell Peach"
    },
    {
        Color: "1B2F11",
        Name: "Seaweed"
    },
    {
        Color: "F0EEFD",
        Name: "Selago"
    },
    {
        Color: "FFBA00",
        Name: "Selective Yellow"
    },
    {
        Color: "704214",
        Name: "Sepia"
    },
    {
        Color: "2B0202",
        Name: "Sepia Black"
    },
    {
        Color: "9E5B40",
        Name: "Sepia Skin"
    },
    {
        Color: "FFF4E8",
        Name: "Serenade"
    },
    {
        Color: "837050",
        Name: "Shadow"
    },
    {
        Color: "9AC2B8",
        Name: "Shadow Green"
    },
    {
        Color: "AAA5A9",
        Name: "Shady Lady"
    },
    {
        Color: "4EABD1",
        Name: "Shakespeare"
    },
    {
        Color: "FBFFBA",
        Name: "Shalimar"
    },
    {
        Color: "33CC99",
        Name: "Shamrock"
    },
    {
        Color: "25272C",
        Name: "Shark"
    },
    {
        Color: "004950",
        Name: "Sherpa Blue"
    },
    {
        Color: "02402C",
        Name: "Sherwood Green"
    },
    {
        Color: "E8B9B3",
        Name: "Shilo"
    },
    {
        Color: "6B4E31",
        Name: "Shingle Fawn"
    },
    {
        Color: "788BBA",
        Name: "Ship Cove"
    },
    {
        Color: "3E3A44",
        Name: "Ship Gray"
    },
    {
        Color: "B20931",
        Name: "Shiraz"
    },
    {
        Color: "E292C0",
        Name: "Shocking"
    },
    {
        Color: "FC0FC0",
        Name: "Shocking Pink"
    },
    {
        Color: "5F6672",
        Name: "Shuttle Gray"
    },
    {
        Color: "646A54",
        Name: "Siam"
    },
    {
        Color: "F3E7BB",
        Name: "Sidecar"
    },
    {
        Color: "BDB1A8",
        Name: "Silk"
    },
    {
        Color: "C0C0C0",
        Name: "Silver"
    },
    {
        Color: "ACACAC",
        Name: "Silver Chalice"
    },
    {
        Color: "C9C0BB",
        Name: "Silver Rust"
    },
    {
        Color: "BFC1C2",
        Name: "Silver Sand"
    },
    {
        Color: "66B58F",
        Name: "Silver Tree"
    },
    {
        Color: "9FD7D3",
        Name: "Sinbad"
    },
    {
        Color: "7A013A",
        Name: "Siren"
    },
    {
        Color: "718080",
        Name: "Sirocco"
    },
    {
        Color: "D3CBBA",
        Name: "Sisal"
    },
    {
        Color: "CAE6DA",
        Name: "Skeptic"
    },
    {
        Color: "76D7EA",
        Name: "Sky Blue"
    },
    {
        Color: "708090",
        Name: "Slate Gray"
    },
    {
        Color: "003399",
        Name: "Smalt"
    },
    {
        Color: "51808F",
        Name: "Smalt Blue"
    },
    {
        Color: "605B73",
        Name: "Smoky"
    },
    {
        Color: "F7FAF7",
        Name: "Snow Drift"
    },
    {
        Color: "E4FFD1",
        Name: "Snow Flurry"
    },
    {
        Color: "D6FFDB",
        Name: "Snowy Mint"
    },
    {
        Color: "E2D8ED",
        Name: "Snuff"
    },
    {
        Color: "FFFBF9",
        Name: "Soapstone"
    },
    {
        Color: "D1C6B4",
        Name: "Soft Amber"
    },
    {
        Color: "F5EDEF",
        Name: "Soft Peach"
    },
    {
        Color: "893843",
        Name: "Solid Pink"
    },
    {
        Color: "FEF8E2",
        Name: "Solitaire"
    },
    {
        Color: "EAF6FF",
        Name: "Solitude"
    },
    {
        Color: "FD7C07",
        Name: "Sorbus"
    },
    {
        Color: "CEB98F",
        Name: "Sorrell Brown"
    },
    {
        Color: "6A6051",
        Name: "Soya Bean"
    },
    {
        Color: "819885",
        Name: "Spanish Green"
    },
    {
        Color: "2F5A57",
        Name: "Spectra"
    },
    {
        Color: "6A442E",
        Name: "Spice"
    },
    {
        Color: "885342",
        Name: "Spicy Mix"
    },
    {
        Color: "74640D",
        Name: "Spicy Mustard"
    },
    {
        Color: "816E71",
        Name: "Spicy Pink"
    },
    {
        Color: "B6D1EA",
        Name: "Spindle"
    },
    {
        Color: "79DEEC",
        Name: "Spray"
    },
    {
        Color: "00FF7F",
        Name: "Spring Green"
    },
    {
        Color: "578363",
        Name: "Spring Leaves"
    },
    {
        Color: "ACCBB1",
        Name: "Spring Rain"
    },
    {
        Color: "F6FFDC",
        Name: "Spring Sun"
    },
    {
        Color: "F8F6F1",
        Name: "Spring Wood"
    },
    {
        Color: "C1D7B0",
        Name: "Sprout"
    },
    {
        Color: "AAABB7",
        Name: "Spun Pearl"
    },
    {
        Color: "8F8176",
        Name: "Squirrel"
    },
    {
        Color: "2D569B",
        Name: "St Tropaz"
    },
    {
        Color: "8A8F8A",
        Name: "Stack"
    },
    {
        Color: "9F9F9C",
        Name: "Star Dust"
    },
    {
        Color: "E5D7BD",
        Name: "Stark White"
    },
    {
        Color: "ECF245",
        Name: "Starship"
    },
    {
        Color: "4682B4",
        Name: "Steel Blue"
    },
    {
        Color: "262335",
        Name: "Steel Gray"
    },
    {
        Color: "9C3336",
        Name: "Stiletto"
    },
    {
        Color: "928573",
        Name: "Stonewall"
    },
    {
        Color: "646463",
        Name: "Storm Dust"
    },
    {
        Color: "717486",
        Name: "Storm Gray"
    },
    {
        Color: "000741",
        Name: "Stratos"
    },
    {
        Color: "D4BF8D",
        Name: "Straw"
    },
    {
        Color: "956387",
        Name: "Strikemaster"
    },
    {
        Color: "325D52",
        Name: "Stromboli"
    },
    {
        Color: "714AB2",
        Name: "Studio"
    },
    {
        Color: "BAC7C9",
        Name: "Submarine"
    },
    {
        Color: "F9FFF6",
        Name: "Sugar Cane"
    },
    {
        Color: "C1F07C",
        Name: "Sulu"
    },
    {
        Color: "96BBAB",
        Name: "Summer Green"
    },
    {
        Color: "FBAC13",
        Name: "Sun"
    },
    {
        Color: "C9B35B",
        Name: "Sundance"
    },
    {
        Color: "FFB1B3",
        Name: "Sundown"
    },
    {
        Color: "E4D422",
        Name: "Sunflower"
    },
    {
        Color: "E16865",
        Name: "Sunglo"
    },
    {
        Color: "FFCC33",
        Name: "Sunglow"
    },
    {
        Color: "FE4C40",
        Name: "Sunset Orange"
    },
    {
        Color: "FF9E2C",
        Name: "Sunshade"
    },
    {
        Color: "FFC901",
        Name: "Supernova"
    },
    {
        Color: "BBD7C1",
        Name: "Surf"
    },
    {
        Color: "CFE5D2",
        Name: "Surf Crest"
    },
    {
        Color: "0C7A79",
        Name: "Surfie Green"
    },
    {
        Color: "87AB39",
        Name: "Sushi"
    },
    {
        Color: "888387",
        Name: "Suva Gray"
    },
    {
        Color: "001B1C",
        Name: "Swamp"
    },
    {
        Color: "ACB78E",
        Name: "Swamp Green"
    },
    {
        Color: "DCF0EA",
        Name: "Swans Down"
    },
    {
        Color: "FBEA8C",
        Name: "Sweet Corn"
    },
    {
        Color: "FD9FA2",
        Name: "Sweet Pink"
    },
    {
        Color: "D3CDC5",
        Name: "Swirl"
    },
    {
        Color: "DDD6D5",
        Name: "Swiss Coffee"
    },
    {
        Color: "908D39",
        Name: "Sycamore"
    },
    {
        Color: "A02712",
        Name: "Tabasco"
    },
    {
        Color: "EDB381",
        Name: "Tacao"
    },
    {
        Color: "D6C562",
        Name: "Tacha"
    },
    {
        Color: "E97C07",
        Name: "Tahiti Gold"
    },
    {
        Color: "EEF0C8",
        Name: "Tahuna Sands"
    },
    {
        Color: "B32D29",
        Name: "Tall Poppy"
    },
    {
        Color: "A8A589",
        Name: "Tallow"
    },
    {
        Color: "991613",
        Name: "Tamarillo"
    },
    {
        Color: "341515",
        Name: "Tamarind"
    },
    {
        Color: "D2B48C",
        Name: "Tan"
    },
    {
        Color: "FA9D5A",
        Name: "Tan Hide"
    },
    {
        Color: "D9DCC1",
        Name: "Tana"
    },
    {
        Color: "03163C",
        Name: "Tangaroa"
    },
    {
        Color: "F28500",
        Name: "Tangerine"
    },
    {
        Color: "ED7A1C",
        Name: "Tango"
    },
    {
        Color: "7B7874",
        Name: "Tapa"
    },
    {
        Color: "B05E81",
        Name: "Tapestry"
    },
    {
        Color: "E1F6E8",
        Name: "Tara"
    },
    {
        Color: "073A50",
        Name: "Tarawera"
    },
    {
        Color: "CFDCCF",
        Name: "Tasman"
    },
    {
        Color: "483C32",
        Name: "Taupe"
    },
    {
        Color: "B3AF95",
        Name: "Taupe Gray"
    },
    {
        Color: "692545",
        Name: "Tawny Port"
    },
    {
        Color: "1E433C",
        Name: "Te Papa Green"
    },
    {
        Color: "C1BAB0",
        Name: "Tea"
    },
    {
        Color: "D0F0C0",
        Name: "Tea Green"
    },
    {
        Color: "B19461",
        Name: "Teak"
    },
    {
        Color: "008080",
        Name: "Teal"
    },
    {
        Color: "044259",
        Name: "Teal Blue"
    },
    {
        Color: "3B000B",
        Name: "Temptress"
    },
    {
        Color: "CD5700",
        Name: "Tenn"
    },
    {
        Color: "FFE6C7",
        Name: "Tequila"
    },
    {
        Color: "E2725B",
        Name: "Terracotta"
    },
    {
        Color: "F8F99C",
        Name: "Texas"
    },
    {
        Color: "FFB555",
        Name: "Texas Rose"
    },
    {
        Color: "B69D98",
        Name: "Thatch"
    },
    {
        Color: "403D19",
        Name: "Thatch Green"
    },
    {
        Color: "D8BFD8",
        Name: "Thistle"
    },
    {
        Color: "CCCAA8",
        Name: "Thistle Green"
    },
    {
        Color: "33292F",
        Name: "Thunder"
    },
    {
        Color: "C02B18",
        Name: "Thunderbird"
    },
    {
        Color: "C1440E",
        Name: "Tia Maria"
    },
    {
        Color: "C3D1D1",
        Name: "Tiara"
    },
    {
        Color: "063537",
        Name: "Tiber"
    },
    {
        Color: "FC80A5",
        Name: "Tickle Me Pink"
    },
    {
        Color: "F1FFAD",
        Name: "Tidal"
    },
    {
        Color: "BFB8B0",
        Name: "Tide"
    },
    {
        Color: "16322C",
        Name: "Timber Green"
    },
    {
        Color: "D9D6CF",
        Name: "Timberwolf"
    },
    {
        Color: "F0EEFF",
        Name: "Titan White"
    },
    {
        Color: "9A6E61",
        Name: "Toast"
    },
    {
        Color: "715D47",
        Name: "Tobacco Brown"
    },
    {
        Color: "3A0020",
        Name: "Toledo"
    },
    {
        Color: "1B0245",
        Name: "Tolopea"
    },
    {
        Color: "3F583B",
        Name: "Tom Thumb"
    },
    {
        Color: "E79F8C",
        Name: "Tonys Pink"
    },
    {
        Color: "7C778A",
        Name: "Topaz"
    },
    {
        Color: "FD0E35",
        Name: "Torch Red"
    },
    {
        Color: "0F2D9E",
        Name: "Torea Bay"
    },
    {
        Color: "1450AA",
        Name: "Tory Blue"
    },
    {
        Color: "8D3F3F",
        Name: "Tosca"
    },
    {
        Color: "991B07",
        Name: "Totem Pole"
    },
    {
        Color: "A9BDBF",
        Name: "Tower Gray"
    },
    {
        Color: "5FB3AC",
        Name: "Tradewind"
    },
    {
        Color: "E6FFFF",
        Name: "Tranquil"
    },
    {
        Color: "FFFDE8",
        Name: "Travertine"
    },
    {
        Color: "FC9C1D",
        Name: "Tree Poppy"
    },
    {
        Color: "3B2820",
        Name: "Treehouse"
    },
    {
        Color: "7C881A",
        Name: "Trendy Green"
    },
    {
        Color: "8C6495",
        Name: "Trendy Pink"
    },
    {
        Color: "E64E03",
        Name: "Trinidad"
    },
    {
        Color: "C3DDF9",
        Name: "Tropical Blue"
    },
    {
        Color: "00755E",
        Name: "Tropical Rain Forest"
    },
    {
        Color: "4A4E5A",
        Name: "Trout"
    },
    {
        Color: "8A73D6",
        Name: "True V"
    },
    {
        Color: "363534",
        Name: "Tuatara"
    },
    {
        Color: "FFDDCD",
        Name: "Tuft Bush"
    },
    {
        Color: "EAB33B",
        Name: "Tulip Tree"
    },
    {
        Color: "DEA681",
        Name: "Tumbleweed"
    },
    {
        Color: "353542",
        Name: "Tuna"
    },
    {
        Color: "4A4244",
        Name: "Tundora"
    },
    {
        Color: "FAE600",
        Name: "Turbo"
    },
    {
        Color: "B57281",
        Name: "Turkish Rose"
    },
    {
        Color: "CABB48",
        Name: "Turmeric"
    },
    {
        Color: "30D5C8",
        Name: "Turquoise"
    },
    {
        Color: "6CDAE7",
        Name: "Turquoise Blue"
    },
    {
        Color: "2A380B",
        Name: "Turtle Green"
    },
    {
        Color: "BD5E2E",
        Name: "Tuscany"
    },
    {
        Color: "EEF3C3",
        Name: "Tusk"
    },
    {
        Color: "C5994B",
        Name: "Tussock"
    },
    {
        Color: "FFF1F9",
        Name: "Tutu"
    },
    {
        Color: "E4CFDE",
        Name: "Twilight"
    },
    {
        Color: "EEFDFF",
        Name: "Twilight Blue"
    },
    {
        Color: "C2955D",
        Name: "Twine"
    },
    {
        Color: "66023C",
        Name: "Tyrian Purple"
    },
    {
        Color: "120A8F",
        Name: "Ultramarine"
    },
    {
        Color: "D84437",
        Name: "Valencia"
    },
    {
        Color: "350E42",
        Name: "Valentino"
    },
    {
        Color: "2B194F",
        Name: "Valhalla"
    },
    {
        Color: "49170C",
        Name: "Van Cleef"
    },
    {
        Color: "D1BEA8",
        Name: "Vanilla"
    },
    {
        Color: "F3D9DF",
        Name: "Vanilla Ice"
    },
    {
        Color: "FFF6DF",
        Name: "Varden"
    },
    {
        Color: "72010F",
        Name: "Venetian Red"
    },
    {
        Color: "055989",
        Name: "Venice Blue"
    },
    {
        Color: "928590",
        Name: "Venus"
    },
    {
        Color: "5D5E37",
        Name: "Verdigris"
    },
    {
        Color: "495400",
        Name: "Verdun Green"
    },
    {
        Color: "FF4D00",
        Name: "Vermilion"
    },
    {
        Color: "B14A0B",
        Name: "Vesuvius"
    },
    {
        Color: "534491",
        Name: "Victoria"
    },
    {
        Color: "549019",
        Name: "Vida Loca"
    },
    {
        Color: "64CCDB",
        Name: "Viking"
    },
    {
        Color: "983D61",
        Name: "Vin Rouge"
    },
    {
        Color: "CB8FA9",
        Name: "Viola"
    },
    {
        Color: "290C5E",
        Name: "Violent Violet"
    },
    {
        Color: "240A40",
        Name: "Violet"
    },
    {
        Color: "991199",
        Name: "Violet Eggplant"
    },
    {
        Color: "F7468A",
        Name: "Violet Red"
    },
    {
        Color: "40826D",
        Name: "Viridian"
    },
    {
        Color: "678975",
        Name: "Viridian Green"
    },
    {
        Color: "FFEFA1",
        Name: "Vis Vis"
    },
    {
        Color: "8FD6B4",
        Name: "Vista Blue"
    },
    {
        Color: "FCF8F7",
        Name: "Vista White"
    },
    {
        Color: "FF9980",
        Name: "Vivid Tangerine"
    },
    {
        Color: "803790",
        Name: "Vivid Violet"
    },
    {
        Color: "533455",
        Name: "Voodoo"
    },
    {
        Color: "10121D",
        Name: "Vulcan"
    },
    {
        Color: "DECBC6",
        Name: "Wafer"
    },
    {
        Color: "5A6E9C",
        Name: "Waikawa Gray"
    },
    {
        Color: "363C0D",
        Name: "Waiouru"
    },
    {
        Color: "773F1A",
        Name: "Walnut"
    },
    {
        Color: "788A25",
        Name: "Wasabi"
    },
    {
        Color: "A1E9DE",
        Name: "Water Leaf"
    },
    {
        Color: "056F57",
        Name: "Watercourse"
    },
    {
        Color: "7B7C94",
        Name: "Waterloo "
    },
    {
        Color: "DCD747",
        Name: "Wattle"
    },
    {
        Color: "FFDDCF",
        Name: "Watusi"
    },
    {
        Color: "FFC0A8",
        Name: "Wax Flower"
    },
    {
        Color: "F7DBE6",
        Name: "We Peep"
    },
    {
        Color: "FFA500",
        Name: "Web Orange"
    },
    {
        Color: "4E7F9E",
        Name: "Wedgewood"
    },
    {
        Color: "B43332",
        Name: "Well Read"
    },
    {
        Color: "625119",
        Name: "West Coast"
    },
    {
        Color: "FF910F",
        Name: "West Side"
    },
    {
        Color: "DCD9D2",
        Name: "Westar"
    },
    {
        Color: "F19BAB",
        Name: "Wewak"
    },
    {
        Color: "F5DEB3",
        Name: "Wheat"
    },
    {
        Color: "F3EDCF",
        Name: "Wheatfield"
    },
    {
        Color: "D59A6F",
        Name: "Whiskey"
    },
    {
        Color: "F7F5FA",
        Name: "Whisper"
    },
    {
        Color: "FFFFFF",
        Name: "White"
    },
    {
        Color: "DDF9F1",
        Name: "White Ice"
    },
    {
        Color: "F8F7FC",
        Name: "White Lilac"
    },
    {
        Color: "F8F0E8",
        Name: "White Linen"
    },
    {
        Color: "FEF8FF",
        Name: "White Pointer"
    },
    {
        Color: "EAE8D4",
        Name: "White Rock"
    },
    {
        Color: "7A89B8",
        Name: "Wild Blue Yonder"
    },
    {
        Color: "ECE090",
        Name: "Wild Rice"
    },
    {
        Color: "F4F4F4",
        Name: "Wild Sand"
    },
    {
        Color: "FF3399",
        Name: "Wild Strawberry"
    },
    {
        Color: "FD5B78",
        Name: "Wild Watermelon"
    },
    {
        Color: "B9C46A",
        Name: "Wild Willow"
    },
    {
        Color: "3A686C",
        Name: "William"
    },
    {
        Color: "DFECDA",
        Name: "Willow Brook"
    },
    {
        Color: "65745D",
        Name: "Willow Grove"
    },
    {
        Color: "3C0878",
        Name: "Windsor"
    },
    {
        Color: "591D35",
        Name: "Wine Berry"
    },
    {
        Color: "D5D195",
        Name: "Winter Hazel"
    },
    {
        Color: "FEF4F8",
        Name: "Wisp Pink"
    },
    {
        Color: "9771B5",
        Name: "Wisteria"
    },
    {
        Color: "A4A6D3",
        Name: "Wistful"
    },
    {
        Color: "FFFC99",
        Name: "Witch Haze"
    },
    {
        Color: "261105",
        Name: "Wood Bark"
    },
    {
        Color: "4D5328",
        Name: "Woodland"
    },
    {
        Color: "302A0F",
        Name: "Woodrush"
    },
    {
        Color: "0C0D0F",
        Name: "Woodsmoke"
    },
    {
        Color: "483131",
        Name: "Woody Brown"
    },
    {
        Color: "738678",
        Name: "Xanadu"
    },
    {
        Color: "FFFF00",
        Name: "Yellow"
    },
    {
        Color: "C5E17A",
        Name: "Yellow Green"
    },
    {
        Color: "716338",
        Name: "Yellow Metal"
    },
    {
        Color: "FFAE42",
        Name: "Yellow Orange"
    },
    {
        Color: "FEA904",
        Name: "Yellow Sea"
    },
    {
        Color: "FFC3C0",
        Name: "Your Pink"
    },
    {
        Color: "7B6608",
        Name: "Yukon Gold"
    },
    {
        Color: "CEC291",
        Name: "Yuma"
    },
    {
        Color: "685558",
        Name: "Zambezi"
    },
    {
        Color: "DAECD6",
        Name: "Zanah"
    },
    {
        Color: "E5841B",
        Name: "Zest"
    },
    {
        Color: "292319",
        Name: "Zeus"
    },
    {
        Color: "BFDBE2",
        Name: "Ziggurat"
    },
    {
        Color: "EBC2AF",
        Name: "Zinnwaldite"
    },
    {
        Color: "F4F8FF",
        Name: "Zircon"
    },
    {
        Color: "E4D69B",
        Name: "Zombie"
    },
    {
        Color: "A59B91",
        Name: "Zorba"
    },
    {
        Color: "044022",
        Name: "Zuccini"
    },
    {
        Color: "EDF6FF",
        Name: "Zumthor"
    }
];

window.onload = function() {
    hexElement = document.getElementById("hex");
    nameElement = document.getElementById("name");
};

document.addEventListener('keydown', (event) => {
    var keyName = event.key.toLowerCase();
    var length = hexCode.length;

    if (event.keyCode != 8) {
        if (length < 6 &&
            "0123456789abcdef".split('').includes(keyName))
            hexCode += keyName;
    } else
        hexCode = hexCode.substring(0, length - 2);

    hexElement.innerHTML = "#" + hexCode;
    if (hexCode.length === 6)
        document.body.style.backgroundColor = "#" + hexCode;
    else
        document.body.style.backgroundColor = "black";

    var rgb = Functions.hexToRGB(hexCode);
    var color;
    if (Functions.getAverage(rgb) / 255 >= 0.5)
        color = "black";
    else
        color = "white";
    hexElement.style.color = color;
    nameElement.style.color = color;
    var displayColor = "";
    if (hexCode.length === 6) {
        var closest = -1;
        Array.prototype.forEach.call(colors, item => {
            var color = Functions.hexToRGB(item.Color);
            var similarity = Math.abs(color[0] - rgb[0]) +
                Math.abs(color[1] - rgb[1]) +
                Math.abs(color[2] - rgb[2]);
            console.log(item.Name + " " + similarity);
            if (closest === -1 || similarity < closest) {
                closest = similarity;
                displayColor = item.Name;
            }
        });
    }
    nameElement.innerHTML = displayColor;
});

class Functions {
    static hexToRGB(hex) {
        if (hex[0] === '#')
            hex = hex.substring(1);
        if (hex.length !== 6)
            return false;
        var values = hex.split(''),
            r, g, b;

        if (hex.length === 6) {
            r = parseInt(values[0].toString() + values[1].toString(), 16);
            g = parseInt(values[2].toString() + values[3].toString(), 16);
            b = parseInt(values[4].toString() + values[5].toString(), 16);
        } else
            return false;
        return [r, g, b];
    }

    static getAverage(numbers) {
        return this.getTotal(numbers) / numbers.length;
    }

    static getTotal(numbers) {
        var val = 0;
        Array.prototype.forEach.call(numbers, number => {
            val += number;
        });
        return val;
    }
}
