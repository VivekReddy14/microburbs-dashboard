import axios from "axios";

const BASE_URL = "/report_generator/api/suburb";


const sampleres={
  properties: [
    {
      "address": {
        "sa1": "11101120605",
        "sal": "Belmont North",
        "state": "NSW",
        "street": "82 Old Belmont Road"
      },
      "area_level": "address",
      "area_name": "82 Old Belmont Road, Belmont North, NSW",
      "attributes": {
        "bathrooms": 3,
        "bedrooms": 4,
        "building_size": "nan",
        "description": "Crisply contemporary and flawlessly renovated, this home delivers a lifestyle that feels equal parts luxury and ease, positioned in a premium pocket edged by leafy reserve. Defined by clean architectural lines and a refined palette, its four-bedroom layout flows around open-plan living, where the island kitchen takes centre stage. Two hotel-worthy bathrooms - including a beautifully appointed master ensuite  elevate the daily routine, while ducted air-conditioning keeps every season comfortable. Outside, a superb entertainers deck surveys the sparkling pool and spa framed by travertine and glass, creating an irresistible resort vibe. Completing the picture is a huge garage with mezzanine, bathroom and kitchen - perfect for working from home, a teen retreat or creative studio.\n\n-\tFully renovated family-sized home ready to move straight into and enjoy\n-\tBeautiful from the street and framed by neatly landscaped gardens\n-\tOpen-style living and dining areas grounded by engineered timber flooring\n-\tIsland kitchen featuring smooth stone benchtops and modern appliances\n-\tFour restful bedrooms, each with a walk/built-in robe and plush carpet underfoot\n-\tTwo fully tiled bathrooms finished to perfection  the main features a deep bath\n-\tSuperb outdoor deck for weekend entertaining or casual family meals\n-\tGorgeous inground pool with luxe spa, the ultimate welcome-home moment\n-\tModern and oversized shed with kitchen and bathroom offers great versatility\n-\tMoments to Jewellstown shopping centre or Belmont shops and foreshore\n-\tJoin the Fernleigh Track in only minutes and cycle to stunning Redhead or Glenrock",
        "garage_spaces": 4,
        "land_size": "940.0"
      },
      "coordinates": {
        "latitude": -33.01774677,
        "longitude": 151.67214997
      },
      "gnaf_pid": "GANSW704072217",
      "listing_date": "2025-11-05",
      "price": 1300000,
      "property_type": "House"
    },
    {
      "address": {
        "sa1": "11101120624",
        "sal": "Belmont North",
        "state": "NSW",
        "street": "17 Dulungra Avenue"
      },
      "area_level": "address",
      "area_name": "17 Dulungra Avenue, Belmont North, NSW",
      "attributes": {
        "bathrooms": 3,
        "bedrooms": 5,
        "building_size": "None",
        "description": "This beautifully presented five-bedroom, three-bathroom home combines generous proportions, modern finishes, and a flexible design, creating the perfect haven for growing families. With multiple living zones, a well-planned floor layout, and both indoor and outdoor spaces for relaxation and entertaining, it offers the ideal balance of lifestyle and convenience.\nAt the heart of the home is the contemporary kitchen, complete with stone benchtops, sleek appliances, a walk-in pantry, and abundant preparation space. Overlooking the open-plan dining and living areas, it creates a natural hub for family gatherings. The adjoining undercover entertaining area and fully fenced backyard can be viewed directly from the kitchen-perfect for hosting friends or keeping an eye on children at play.\nThe five bedrooms are all generously sized, including a luxurious master suite with two walk-in wardrobes and a private ensuite. Two additional bathrooms service the home, ensuring family practicality. Multiple living zones offer flexibility for relaxation, work, or play, while an elevated front balcony captures a leafy outlook, providing yet another retreat.\nEveryday comfort is assured with air conditioning, ceiling fans, and thoughtful design throughout, while ample storage is cleverly integrated across the home. A secure double garage with internal access and a large under-house storage area provide plenty of room for vehicles and equipment, with the bonus of an extra parking space at the top of the driveway. Energy efficiency and peace of mind are built in, thanks to solar panels, a security alarm system, water tank, and block-out window awnings.\nPerfectly located, you'll be approx. 500m to Floraville Public School and 3.3km to Belmont High School, with Jewells Plaza just 2.2km away and major retail options at Bennetts Green Homemakers Centre (approx. 3.5km) and Belmont Central (approx. 4.3km). Weekends are made for lifestyle, with Belmont Baths only approx. 4km away, Redhead Beach approx. 6.2km, and Warners Bay Foreshore approx. 7km.\nA true family sanctuary offering space, style, and a prime location-this is a home that will adapt with your family and deliver the lifestyle you've been searching for.\nThe information contained herein has been provided by people we believe to be reliable, however all interested parties must rely on their own enquiries.",
        "garage_spaces": 2,
        "land_size": "605 m²"
      },
      "coordinates": {
        "latitude": -33.01204354,
        "longitude": 151.66851581
      },
      "gnaf_pid": "GANSW715835616",
      "listing_date": "2025-10-08",
      "price": 1350000,
      "property_type": "House"
    },
    {
      "address": {
        "sa1": "11101120614",
        "sal": "Belmont North",
        "state": "NSW",
        "street": "6 Brabham Close"
      },
      "area_level": "address",
      "area_name": "6 Brabham Close, Belmont North, NSW",
      "attributes": {
        "bathrooms": 1,
        "bedrooms": 3,
        "building_size": "nan",
        "description": "Tucked away in a peaceful cul-de-sac, this beautifully cared for home is the perfect match for first-home buyers or young families looking to settle into a quality neighbourhood. Elevated to catch the breezes and filled with natural light, it's a home that feels instantly welcoming.\n\nTwo separate living areas and a modernised bathroom add comfort and flexibility, while the standout feature is the backyard—a fully landscaped, multi-terraced space that's both private and practical. With open lawn areas, established gardens and a covered deck to watch over it all, it's a haven for active families and children to explore, play and enjoy the outdoors.\n\n*\tThree air conditioners for year-round comfort\n*\tAll bedrooms with built-in robes\n*\tTwo generous living spaces for growing families\n*\tStylish, updated bathroom with modern finishes\n*\tDeck at rear overlooking terraced gardens\n*\tPrivate backyard perfect for outdoor play and family time\n*\tDouble garage with good storage space\n*\tRoof refurbishment (2023) and new hot water system (2019)\n*\tQuiet, family-friendly cul-de-sac with an elevated outlook\n\nConveniently located for easy access to good schools, sporting fields, and green open space, and just minutes to Redhead Beach, Lake Macquarie and Belmont shopping. This home delivers lifestyle, convenience and comfort in equal measure—ready for its next chapter with a new family to love it.\n\nPEST AND BUILDING REPORTS AVAILABLE UPON INSPECTION\n\nZoning: R2 Low Density Residential\nLand Area: 708sqm approx\nCouncil: Lake Macquarie\nLand Rates: $2414pa approx\nWater Rates: $859pa approx\n\n'PREVIEW'\nThis means the property has just been listed and is in the first weeks of marketing. If you inspect the home, you will be amongst the first buyers to view the property. The sellers have not yet formally set a price for the property as they want to obtain feedback from the market prior to promoting a price. Century 21 will provide you with information on recently sold properties in the area whilst the property is being promoted for sale by Preview. You can definitely buy a property during the 'Preview' promotion, there is no barrier to making an offer to purchase the property. The seller can accept an offer at any time. \n\nWe have obtained all information from sources we believe to be reliable; however, we cannot guarantee its accuracy. Prospective purchasers are advised to carry out their own investigations. Photos maybe digitally edited and include virtual furniture.",
        "garage_spaces": 2,
        "land_size": "708.0"
      },
      "coordinates": {
        "latitude": -33.01752803,
        "longitude": 151.67557993
      },
      "gnaf_pid": "GANSW704076631",
      "listing_date": "2025-11-03",
      "price": 900000,
      "property_type": "House"
    },
    {
      "address": {
        "sa1": "11101120613",
        "sal": "Belmont North",
        "state": "NSW",
        "street": "75 Buttaba Avenue"
      },
      "area_level": "address",
      "area_name": "75 Buttaba Avenue, Belmont North, NSW",
      "attributes": {
        "bathrooms": 2,
        "bedrooms": 3,
        "building_size": "113 m²",
        "description": "This is the one that keeps everyone happy...\nThe one where both halves of the couple nod in agreement ...\nWhere the heart of the home is beautifully finished, stylish and move-in ready, and out the back lies the kind of setup that dreams (and weekends) are made of.\nEvery inch of this home has been renovated and refreshed with care. From the street, it's perfectly presented and elevated for privacy, framed by stone retaining, hedged gardens and a crisp coastal faade that catches the light. Step inside and it instantly feels right, bright, balanced and beautifully proportioned. All on one easy level, it's not too big, not too small, just the perfect size for comfortable, effortless living. Real timber floors bring warmth underfoot, soft neutral tones add calm, and every surface, fitting and finish feels fresh and new.\nThe open plan living, dining and kitchen zone is the heart of the home, a beautifully connected space designed for conversation, comfort and everyday flow. The kitchen is a highlight, complete with sleek stone benchtops, soft-close cabinetry, full-height storage and a smart mix of matte and timber textures. Quality stainless-steel appliances tie the space together, while the breakfast bar becomes a natural gathering point for morning coffees or evening drinks. Wide windows and glass sliders keep the home bright and breezy, opening directly onto the covered deck where indoor and outdoor living merge seamlessly.\nAnd then there's the shed...\nThe kind that makes grown men grin. Twelve metres wide and seven deep, with roller doors tall enough to accommodate a caravan or boat, it's more than a workspace, it's a playground. There's room for the project car, the bikes, the gym, the tools, the workbench and the weekend toys, with a mezzanine above for storage. Out back, a bar adds the finishing touch, a space for mates to gather, with lights glowing across the lawn and music spilling softly from the shed. It's the sort of setup that turns weekends into occasions and sheds into sanctuaries.\nFrom the deck to the backyard, from the firepit to the shed, the flow just works, open, level and effortless. The block has been fully landscaped and retained to create a flat, north-facing yard where everything feels accessible, practical and perfectly planned.\nThe bedroom wing sits quietly away from the living zones for added privacy. The master suite is calm and inviting with a walk-in robe, a renovated ensuite and soft carpet underfoot. Both additional bedrooms are generous in size, fitted with built-in robes, split-system air-conditioning and modern finishes that tie the home together. The main bathroom is equally impressive, with a dual rainfall shower, freestanding bath, and a sleek floating vanity. Stylish, functional and easy to love.\nEven from the street, this home makes an impression. The elevated faade and manicured gardens give it confidence and charm, while side access with brand new gate makes life practical as you drive up beside the house and step straight onto the undercover deck with no stairs at all.\nAnd the location is the final drawcard. Nestled in one of Belmont North's most peaceful pockets, right on the cusp of Redhead and Jewells, this is where suburbia meets surfside serenity. You can walk to the Fernleigh Track, wander through the wetlands, or follow the sandy trails to Third Creek and the vast stretch of Redhead Beach. You're minutes from Lake Macquarie for paddleboarding and sailing, yet only 25 minutes to Newcastle and less than 90 minutes to Sydney. It's a lifestyle carved from sea, sky and sunshine, where every day starts and ends with fresh air and freedom.\nHere's what you'll love:\n Fully renovated, move-in ready home with nothing left to do but enjoy.\n Single-level living with a perfect balance of space and flow throughout.\n Elevated coastal faade framed by stone retaining and manicured hedges for privacy and presence.\n Real timber floors bringing warmth and texture to every living space.\n Freshly painted interiors in a timeless neutral palette.\n Open plan living and dining filled with natural light and cool sea breezes.\n Contemporary kitchen with stone benchtops, soft-close cabinetry and designer finishes.\n Quality stainless-steel appliances including wall oven, microwave and dishwasher.\n Integrated black-glass cooktop and sleek splashback for a contemporary touch.\n Breakfast bar for casual meals or entertaining.\n Covered entertaining deck perfect for year round use\n Flat, north-facing backyard ideal for gatherings, pets and play.\n Beautifully landscaped gardens with easy-care lawn and retaining.\n Firepit zone for relaxed nights under the stars.\n 12 m x 7 m shed with power, high roller doors and mezzanine storage.\n Bar area behind the shed, the ultimate hangout or party spot.\n Drive-through side access via brand new gates, perfect for boats or caravans.\n Single garage under the home plus extra driveway parking.\n Private master suite with walk-in robe, ensuite and split-system air-conditioning.\n Ensuite with walk-in shower, wall-hung vanity and floor-to-ceiling tiling.\n Two additional bedrooms with built-ins, air-conditioning and ceiling fans.\n Main bathroom with dual rainfall showers, a deep freestanding bath and modern fittings.\n Laundry positioned for convenience with direct outdoor access.\n All new lighting, downlights and ceiling fans throughout.\n New blinds and window furnishings complementing the fresh coastal aesthetic.\n Elevated position with glimpses of the ocean and cool summer breezes.\n Minutes to Lake Macquarie, Belmont 16s, cafs, supermarkets and schools.\n Stroll to the Fernleigh Track, Redhead wetlands and beach access at Third Creek.\n Approximately 25 minutes to Newcastle CBD and under 90 minutes to Sydney.\nFor those chasing the perfect mix of beautiful home and ultimate lifestyle, this one does it all. Inside, it's stylish, comfortable and completely finished, a home where everything has already been done. \nOutside, it's freedom at its best, space for projects, parties, hobbies and downtime, all in a setting that's calm, coastal and connected to everything that matters.\nCome & Besold...",
        "garage_spaces": 6,
        "land_size": "696 m²"
      },
      "coordinates": {
        "latitude": -33.02082227,
        "longitude": 151.67228953
      },
      "gnaf_pid": "GANSW704083961",
      "listing_date": "2025-10-23",
      "price": 1100000,
      "property_type": "House"
    },
    {
      "address": {
        "sa1": "11101120605",
        "sal": "Belmont North",
        "state": "NSW",
        "street": "38 Buttaba Avenue"
      },
      "area_level": "address",
      "area_name": "38 Buttaba Avenue, Belmont North, NSW",
      "attributes": {
        "bathrooms": 1,
        "bedrooms": 2,
        "building_size": "66.0",
        "description": "Let's be straight...opportunities like this don't hang around. This is off-market, fully renovated, and future-ready. The kind of property that sets you up now, and sets you free later.\n\nSitting proudly in a quiet Belmont North street, this beautiful coastal cottage has been rebuilt from the ground up, new kitchen, new bathroom, new everything, and it's already home to a fantastic tenant who treats it like their own. Every inch feels solid, fresh, and done right.\n\nBut the real kicker? Out the back.\n\nA completely level, fenced, cleared block, already separated, with power and plumbing installed...giving you a shortcut straight to a granny flat, a second home, or even a genuine subdivision (STCA).\n Or keep it simple: build the shed of your dreams, park every toy you own, and still have space to turn a caravan around.\n\nThis isn't theoretical potential, it's ready-to-go potential. The legwork's done, the groundwork's finished, and the setup's perfect. Whether you're an investor chasing dual-income returns or a first-home buyer looking for leverage to grow your position later, this one is your fast-track move.\n\nHere's what you'll love:\n\nFully renovated home with new cladding, fresh paint, new roof, and manicured gardens.\n\nBright open-plan living with downlights, high ceilings, and glass sliders opening to the backyard.\n\nSleek designer kitchen with gloss cabinetry, soft-close drawers, stainless steel appliances, and dishwasher.\n\nSplit-system air-conditioning and hybrid timber flooring for effortless, low-maintenance comfort.\n\nModern bathroom with floor-to-ceiling tiles, frameless shower, and built-in laundry zone.\n\nFreshly carpeted bedrooms with new blinds and natural light pouring in from every angle.\n\nFully fenced, completely level block with new boundary lines already separating the two areas.\n\nRear section cleared and ready, with power and plumbing connected, ideal for a granny flat, second dwelling, or full subdivision (STCA).\n\nWide side access for vehicles, boats, trailers, or construction, plus full turning space at the rear.\n\nOptional space for a large shed, home workshop, or backyard retreat.\n\nQuality tenant in place offering instant rental income and flexibility to plan your next step.\n\nPrime position: walking distance to Redhead Beach, minutes to Lake Macquarie, 15 minutes to Newcastle, and just 90 minutes to Sydney.\n\n\nThis is smart investing 101. It's neat, it's new, and it's loaded with future upside. You can't fake this kind of setup  and you definitely can't wait for it to hit the open market.\n\nWhen the rest of the market sees it, it's gone.\n\nSo don't wait for the crowd. Don't think about it. Don't sleep on it.\n\nDo your sums.\n\nBring your offer. And if it stacks up...we'll sell it to you before anyone else even knows it's for sale.\n\nMessage now for the off-market details  smart buyers move early...\n\nCome & Besold...\n\n\n-",
        "garage_spaces": 2,
        "land_size": "675.0"
      },
      "coordinates": {
        "latitude": -33.02083507,
        "longitude": 151.67619156
      },
      "gnaf_pid": "GANSW704078796",
      "listing_date": "2025-10-30",
      "price": 900000,
      "property_type": "House"
    },
    {
      "address": {
        "sa1": "11101120604",
        "sal": "Belmont North",
        "state": "NSW",
        "street": "5 Pinnaroo Close"
      },
      "area_level": "address",
      "area_name": "5 Pinnaroo Close, Belmont North, NSW",
      "attributes": {
        "bathrooms": 3,
        "bedrooms": 4,
        "building_size": "nan",
        "description": "This large family home offers many applications - positioned on the high side of the road enables you to take advantage of the sea breezes and lovely view to Lake Macquarie.\n\n\nFreshly painted the home is ready for you to move in and enjoy. Light-filled interiors are complemented by multiple indoor and outdoor living areas, perfect for family life and entertaining. Thoughtfully designed for family living, the homes layout flows effortlessly across levels and provides the new owner with opportunities to accommodate generations.\n\nIncluded in this lovely home:\n\tFormal entry and living space with stunning Cathedral Ceiling -\nflowing into an open plan living room and dining room all leading out to front deck with views to the lake\n\tKitchen with Caesarstone benchtops, double sink, Miele dishwasher and Electrolux oven and microwave\n\tFormal lounge\n\tMain bedroom has walk in robe, renovated ensuite and fan\n\tBedrooms 2 and 3 have built in robes and fans\n\tWalk in linen press\n\tMain bathroom features a corner spa and large shower\n\tAlfresco area and grassed back yard\n\nDownstairs\n\t4th bedroom with built in robes\n\tFamily room with split system air conditioning and a 3rd bathroom\n\tOversized double garage with storage room\n\t9m x 5m carport\n\tSolar electricity\n\nPositioned for both convenience and lifestyle, this home is just moments from local schools, shopping, the lake, and some of the regions best beaches and walking trails.  1.2 km to Jewells Primary School  2.1 km to Belmont Christian College  3.5 km to Belmont High School  Close to Jewells Shopping Centre, Redhead Beach, Lake Macquarie, the Fernleigh Track and major link roads to Newcastle and Sydney.\n\n\nDont miss your chance to secure a family home in a tightly held enclave with captivating views and room to grow.\n\nDisclaimer: We have obtained all information provided here from sources we believe to be reliable; however, we cannot guarantee its accuracy. Prospective purchasers are advised to carry out their own investigations and satisfy themselves of all aspects of such information including and without limitation, any income, rentals, dimensions, areas, zoning, inclusions and exclusions.",
        "garage_spaces": 3,
        "land_size": "768.0"
      },
      "coordinates": {
        "latitude": -33.02006063,
        "longitude": 151.6800542
      },
      "gnaf_pid": "GANSW704079805",
      "listing_date": "2025-10-13",
      "price": 1150000,
      "property_type": "House"
    },
    {
      "address": {
        "sa1": "11101120610",
        "sal": "Belmont North",
        "state": "NSW",
        "street": "30 John Fisher Road"
      },
      "area_level": "address",
      "area_name": "30 John Fisher Road, Belmont North, NSW",
      "attributes": {
        "bathrooms": 1,
        "bedrooms": 3,
        "building_size": "None",
        "description": "Welcome to 30 John Fisher Drive, Belmont North - a beautifully presented family home combining comfort, character, and convenience. Set on a 556.4m block in a quiet, well-regarded street with a leafy outlook, this residence offers a warm and inviting atmosphere with ample space for the whole family.\n\nKey Features:\n Three generous bedrooms, all with built-in robes\n Main bathroom plus 2nd WC off the spacious laundry\n Two large living areas, perfect for family relaxation and entertaining\n Stunning high ceilings with exposed beams in the rear living area\n Abundance of natural light throughout the home\n Ceiling fan in the main bedroom\n Split-system air conditioner in the second living space\n Spacious kitchen with ample storage and bench space\n Tandem double garage with lots of under-house storage\n Additional shed at the rear providing extra storage options\n Well-sized, low-maintenance yard ideal for families or hobby gardeners\n\nLocation & Lifestyle:\n Directly opposite a peaceful, scenic outlook\n 0.5km to Belmont Christian College\n 2.5km to Belmont Central Shopping Centre\n 2.5km to Belmont High School\n 4.5km to Redhead Beach\n Easy access to local parks, transport, and recreational facilities",
        "garage_spaces": 3,
        "land_size": "556 m²"
      },
      "coordinates": {
        "latitude": -33.02311367,
        "longitude": 151.66921469
      },
      "gnaf_pid": "GANSW704076321",
      "listing_date": "2025-10-20",
      "price": 925000,
      "property_type": "House"
    },
    {
      "address": {
        "sa1": "11101120610",
        "sal": "Belmont North",
        "state": "NSW",
        "street": "57 John Darling Avenue"
      },
      "area_level": "address",
      "area_name": "57 John Darling Avenue, Belmont North, NSW",
      "attributes": {
        "bathrooms": 3,
        "bedrooms": 4,
        "building_size": "None",
        "description": "Tucked away in a peaceful, leafy pocket opposite lush coastal bushland and the Fernleigh Track, this one-owner, bespoke C2011 home is a true sanctuary. Just moments from the sound of waves rolling onto Nine Mile Beach, it offers the perfect escape from everyday life, delivering a private haven where serenity begins the moment you step through the door.\nImmaculately presented, this brick residence welcomes you with a calm, light-filled interior, lofty ceilings, and a soft, contemporary palette. Stunning spotted gum flooring, plantation shutters, and premium window treatments enhance the home's luxurious feel, while ducted air-conditioning ensures year-round comfort. Add to that a resort style pool and entertaining area and you'll never want to leave.\nDesigned for modern family lifestyles, the home features three spacious living areas, including a sensational media room with built-in storage, a versatile kids' retreat, and an expansive open-plan family and dining zone beneath dramatic high ceilings. At its heart lies a sleek designer kitchen, complete with premium appliances, a vast stone island, and a generous butler's pantry - perfect for everything from gourmet entertaining to casual family mealtimes.\nAccommodation is equally impressive, with four large bedrooms including a guest suite with private bathroom. A separate bedroom wing houses two of the bedrooms, each with ample storage, sharing a stunning main bathroom with freestanding bath, walk-in shower, and concealed toilet. Meanwhile the master is a lavish retreat featuring a capacious walk-in robe and luxury dressing space, along with an elegant ensuite with twin vanities.\nEveryday household needs are thoughtfully catered for, with a fitted laundry offering excellent storage and two additional linen cupboards ensuring there's a place for everything. A generous double garage with internal access and gated trailer or boat storage add extra convenience, while twenty solar panels efficiently power the home, providing clean energy and keeping running costs to a minimum.\nLove alfresco living? Entertain family and friends in the resort-style yard, complete with a large paved and covered terrace and a sparkling north-facing pool, surrounded by lush landscaping and lawns. Imagine hosting a gathering here - mixing up elaborate drinks while your partner tends the BBQ. Guests mingle in the cool shade of the alfresco area, while the kids splash in the pool or play freely on the level lawn. With so much on offer, it's easy to forget just how close you are to the beach - only minutes away from catching waves or soaking up the sun before returning home for a lazy afternoon by the pool.\nSet amid acres of bushland and just minutes from fabulous beaches, the lake, and some of the region's most beloved coastal destinations, this home offers an unbeatable lifestyle. Enjoy morning surfs, bike rides along the Fernleigh Track, or family 4WD adventures on the sand - all within easy reach. Families will appreciate proximity to excellent schools, including Belmont Christian College within walking distance, as well as nearby parks, playing fields, cafes, and restaurants. Charlestown Square is only 12 minutes away for your major retail needs, while commuters will love the convenient access to the Pacific Highway and the Bypass.\nImmaculate, versatile, and brimming with light, this exceptional home delivers elevated family living in one of the area's most connected and sought-after pockets. Seize this once-in-a-lifetime opportunity - inspect today and prepare to fall in love.\nFeatures include:\n- Immaculate C2011, one-owner brick home nestled in a peaceful, leafy pocket opposite the Fernleigh Track and coastal bushland, moments from the region's best beaches.\n- Calm, light-filled interiors with soaring ceilings, spotted gum flooring, plantation shutters, and ducted air-conditioning throughout, plus 20 solar panels powering the home efficiently.\n- Three generous living areas including a media room, kids' retreat, and expansive open-plan family and dining zone.\n- Sleek designer kitchen featuring premium appliances including a Bosch integrated dishwasher, dual Siemens ovens, a large stone-topped island, and a spacious butler's pantry with wine fridge.\n- Four large bedrooms include a luxurious master retreat with walk-in robe and elegant ensuite, two further bedrooms for family members, along with a private guest suite.\n- Three bathrooms include a stylish main with freestanding bath, walk-in shower, and concealed toilet, a private guest bathroom and an ensuite to the master.\n- Fully fitted laundry with abundant storage plus two additional linen cupboards.\n- Resort-style alfresco entertaining area overlooking a north-facing pool, outdoor kitchen, landscaped gardens, and level lawns.\n- Double garage with internal access, plus gated trailer or boat storage.\n- Superb location near beaches, the lake, schools, shops, and eateries. Zoned for Belmont North Primary and Belmont High School, and within easy walking distance to Belmont Christian College.\nOutgoings:\nCouncil Rates - $2,696.86 approx. per annum\nWater Rates - $858.33 approx. per annum\nDisclaimer: \nAll information provided by Presence Real Estate in the promotion of a property for either sale or lease has been gathered from various third-party sources that we believe to be reliable. However, Presence Real Estate cannot guarantee its accuracy, and we accept no responsibility and disclaim all liability in respect of any errors, omissions, inaccuracies or misstatements in the information provided. Prospective purchasers and renters are advised to carry out their own investigations and rely on their own inquiries. All images, measurements, diagrams, renderings and data are indicative and for illustrative purposes only and are subject to change. The information provided by Presence Real Estate is general in nature and does not take into account the individual circumstances of the person or persons objective financial situation or needs.",
        "garage_spaces": 2,
        "land_size": "788 m²"
      },
      "coordinates": {
        "latitude": -33.02577519,
        "longitude": 151.67572522
      },
      "gnaf_pid": "GANSW717995751",
      "listing_date": "2025-10-24",
      "price": 1700000,
      "property_type": "House"
    },
    {
      "address": {
        "sa1": "11101120634",
        "sal": "Belmont North",
        "state": "NSW",
        "street": "380-384 Pacific Highway"
      },
      "area_level": "address",
      "area_name": "380-384 Pacific Highway, Belmont North, NSW",
      "attributes": {
        "bathrooms": null,
        "bedrooms": null,
        "building_size": "1377.0",
        "description": "A rare strategic offering providing a prominent sought after northbound corner site location poised to capitalise on burgeoning local development.\n\n 1,377m* Site area\n\n Zone MU1: Mixed use\n\n Substantial 47.5m* Pacific Highway frontage\n\n Fenced hardstand yard\n\n Site office\n\n\nFor Sale: Contact Agent\n\n\n\n\n*Approximately",
        "garage_spaces": null,
        "land_size": "1377.0"
      },
      "coordinates": {
        "latitude": -33.02305765,
        "longitude": 151.66381854
      },
      "gnaf_pid": "GANSW716483968",
      "listing_date": "2025-09-23",
      "price": 1800000,
      "property_type": "Unit"
    }
  ],

  risk: {
  "results": [
    {
      "area_level": "Layer",
      "area_name": "Risk Layer",
      "name": "Fire",
      "value": "",
      "value_unit": null
    },
    {
      "area_level": "Layer",
      "area_name": "Risk Layer",
      "name": "Flood",
      "value": "",
      "value_unit": null
    },
    {
      "area_level": "Layer",
      "area_name": "Risk Layer",
      "name": "Heritage",
      "value": "",
      "value_unit": null
    },
    {
      "area_level": "Layer",
      "area_name": "Risk Layer",
      "name": "Public Housing",
      "value": "6.3%",
      "value_unit": "Properties Proportion"
    },
    {
      "area_level": "Layer",
      "area_name": "Risk Layer",
      "name": "Public Housing",
      "value": "36.9%",
      "value_unit": "Properties Proportion"
    },
    {
      "area_level": "Layer",
      "area_name": "Risk Layer",
      "name": "Public Housing",
      "value": "28.7%",
      "value_unit": "Properties Proportion"
    },
    {
      "area_level": "Layer",
      "area_name": "Risk Layer",
      "name": "Public Housing",
      "value": "2.5%",
      "value_unit": "Properties Proportion"
    },
    {
      "area_level": "Layer",
      "area_name": "Risk Layer",
      "name": "Public Housing",
      "value": "15.7%",
      "value_unit": "Properties Proportion"
    },
    {
      "area_level": "Layer",
      "area_name": "Risk Layer",
      "name": "Public Housing",
      "value": "6.2%",
      "value_unit": "Properties Proportion"
    },
    {
      "area_level": "Layer",
      "area_name": "Risk Layer",
      "name": "Public Housing",
      "value": "2.2%",
      "value_unit": "Properties Proportion"
    }
  ]
}
  
}

const microburbsAPI = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Authorization": "Bearer test", // test token for sandbox
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});

export const SuburbsAPI = async (suburb, endpoint) => {
  try {
    const response = await microburbsAPI.get(`/${endpoint}`, {
      params: { suburb },
    });
    // debugger
    if (typeof response.data == 'string'){
      const data = JSON.parse(response.data);
    }
    else return response.data;
  } catch (error) {
    console.log("API Error:", error);
    return sampleres[endpoint];
  }
};
