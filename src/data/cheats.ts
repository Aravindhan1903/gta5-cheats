export type Cheat = {
  id: string;
  name: string;
  code: string;
  description: string;
};

export type Category = {
  id: string;
  name: string;
  cheats: Cheat[];
};

export type Platform = {
  id: string;
  slug: string;
  label: string;
  shortLabel: string;
  heading: string;
  intro: string;
  inputHint: string;
  categories: Category[];
};

// ---------------------------------------------------------------------------
// PC cheat codes (typed into the console with ~ key, or dialed on the phone)
// ---------------------------------------------------------------------------
const pcPlayer: Cheat[] = [
  { id: "pc-painkiller", name: "Invincibility (5 min)", code: "PAINKILLER", description: "Become immune to damage for five minutes." },
  { id: "pc-turtle", name: "Full Health & Armor", code: "TURTLE", description: "Instantly refill health and body armor." },
  { id: "pc-catchme", name: "Fast Run", code: "CATCHME", description: "Increases your on-foot running speed." },
  { id: "pc-gotgills", name: "Fast Swim", code: "GOTGILLS", description: "Lets you swim noticeably faster." },
  { id: "pc-hoptoit", name: "Super Jump", code: "HOPTOIT", description: "Hold the jump key to leap far higher than normal." },
  { id: "pc-powerup", name: "Recharge Special Ability", code: "POWERUP", description: "Instantly refills your character's special ability meter." },
  { id: "pc-skyfall", name: "Skyfall", code: "SKYFALL", description: "Teleports you high into the sky and drops you in freefall." },
  { id: "pc-skydive", name: "Give Parachute", code: "SKYDIVE", description: "Adds a parachute to your inventory." },
  { id: "pc-liquor", name: "Drunk Mode", code: "LIQUOR", description: "Makes your character stumble around as if drunk." },
  { id: "pc-floater", name: "Moon Gravity", code: "FLOATER", description: "Reduces gravity so you float and leap in slow motion." },
  { id: "pc-fugitive", name: "Raise Wanted Level", code: "FUGITIVE", description: "Adds one star to your current wanted level." },
  { id: "pc-lawyerup", name: "Lower Wanted Level", code: "LAWYERUP", description: "Removes one star from your current wanted level." },
];

const pcWeapons: Cheat[] = [
  { id: "pc-toolup", name: "Give Weapons & Ammo", code: "TOOLUP", description: "Grants a full weapon loadout with ammo, from pistols to an RPG." },
  { id: "pc-hothands", name: "Explosive Melee", code: "HOTHANDS", description: "Every punch and kick becomes explosive." },
  { id: "pc-highex", name: "Explosive Bullets", code: "HIGHEX", description: "Rounds explode on impact. Requires a weapon equipped." },
  { id: "pc-incendiary", name: "Flaming Bullets", code: "INCENDIARY", description: "Sets anything you shoot on fire." },
  { id: "pc-deadeye", name: "Slow Motion Aim", code: "DEADEYE", description: "Enter up to three times to stack a Dead Eye style aiming slow-mo." },
];

const pcVehicles: Cheat[] = [
  { id: "pc-buzzoff", name: "Spawn Buzzard Attack Chopper", code: "BUZZOFF", description: "Spawns an armed Buzzard helicopter nearby." },
  { id: "pc-comet", name: "Spawn Pfister Comet", code: "COMET", description: "Spawns the Comet sports car." },
  { id: "pc-rapidgt", name: "Spawn Rapid GT", code: "RAPIDGT", description: "Spawns the Rapid GT sports car." },
  { id: "pc-vinewood", name: "Spawn Limousine", code: "VINEWOOD", description: "Spawns a stretch limo, great for blocking traffic." },
  { id: "pc-holein1", name: "Spawn Golf Caddy", code: "HOLEIN1", description: "Spawns a golf cart." },
  { id: "pc-trashed", name: "Spawn Garbage Truck", code: "TRASHED", description: "Spawns a Trashmaster garbage truck." },
  { id: "pc-bandit", name: "Spawn BMX", code: "BANDIT", description: "Spawns a BMX bicycle." },
  { id: "pc-offroad", name: "Spawn Sanchez Dirt Bike", code: "OFFROAD", description: "Spawns a Sanchez off-road motorcycle." },
  { id: "pc-rocket", name: "Spawn PCJ-600", code: "ROCKET", description: "Spawns the PCJ-600 street motorcycle." },
  { id: "pc-deathcar", name: "Spawn Duke O'Death", code: "DEATHCAR", description: "Spawns the armored Duke O'Death muscle car." },
  { id: "pc-barnstorm", name: "Spawn Mallard Stunt Plane", code: "BARNSTORM", description: "Spawns a Mallard stunt plane." },
  { id: "pc-flyspray", name: "Spawn Crop Duster", code: "FLYSPRAY", description: "Spawns a Duster crop-dusting plane." },
  { id: "pc-extinct", name: "Spawn Dodo Seaplane", code: "EXTINCT", description: "Spawns the Dodo seaplane." },
  { id: "pc-bubbles", name: "Spawn Kraken Submarine", code: "BUBBLES", description: "Spawns the Kraken submarine (must unlock it first)." },
];

const pcWorld: Cheat[] = [
  { id: "pc-makeitrain", name: "Change Weather", code: "MAKEITRAIN", description: "Cycles through nine weather types, from sunny to thundery." },
  { id: "pc-snowday", name: "Slippery Cars", code: "SNOWDAY", description: "Vehicles lose grip and slide around like it's icy." },
  { id: "pc-slowmo", name: "Slow Motion", code: "SLOWMO", description: "Slows the whole game down. Repeat up to three times to stack it." },
];

const pcPhone: Cheat[] = [
  { id: "pc-phone-painkiller", name: "Invincibility", code: "1-999-724-654-5537", description: "Dial on the in-game phone for five minutes of invincibility." },
  { id: "pc-phone-turtle", name: "Full Health & Armor", code: "1-999-887-853", description: "Dial to instantly refill health and armor." },
  { id: "pc-phone-liquor", name: "Drunk Mode", code: "1-999-547-861", description: "Dial to trigger the drunk-walk effect." },
  { id: "pc-phone-powerup", name: "Recharge Special Ability", code: "1-999-769-3787", description: "Dial to refill your special ability meter." },
  { id: "pc-phone-slowmo", name: "Slow Motion", code: "1-999-756-966", description: "Dial to slow the game down; repeat to stack the effect." },
  { id: "pc-phone-deadeye", name: "Slow Motion Aim", code: "1-999-332-3393", description: "Dial for Dead Eye style aiming slow-mo." },
  { id: "pc-phone-weather", name: "Change Weather", code: "1-999-625-348-7246", description: "Dial to cycle to the next weather type." },
  { id: "pc-phone-snowday", name: "Slippery Cars", code: "1-999-766-9329", description: "Dial to make every vehicle slide like it's on ice." },
];

const pcPlatform: Platform = {
  id: "pc",
  slug: "pc",
  label: "PC",
  shortLabel: "PC",
  heading: "GTA 5 PC Cheat Codes",
  intro: "Press ~ (the key above Tab, to the left of the 1 key) to open the console, then type any code below and hit enter. No need to pause.",
  inputHint: "Type on keyboard",
  categories: [
    { id: "pc-player", name: "Player", cheats: pcPlayer },
    { id: "pc-weapons", name: "Weapons", cheats: pcWeapons },
    { id: "pc-vehicles", name: "Vehicles", cheats: pcVehicles },
    { id: "pc-world", name: "World", cheats: pcWorld },
    { id: "pc-phone", name: "Phone Cheats", cheats: pcPhone },
  ],
};

// ---------------------------------------------------------------------------
// PlayStation (PS5 / PS4) button-combo cheats — identical combos on both
// ---------------------------------------------------------------------------
const psPlayer: Cheat[] = [
  { id: "ps-invincible", name: "Invincibility (5 min)", code: "RIGHT, X, RIGHT, LEFT, RIGHT, R1, RIGHT, LEFT, X, TRIANGLE", description: "Become immune to damage for five minutes." },
  { id: "ps-health", name: "Max Health & Armor", code: "CIRCLE, L1, TRIANGLE, R2, X, SQUARE, CIRCLE, RIGHT, SQUARE, L1, L1, L1", description: "Instantly refill health and body armor." },
  { id: "ps-fastrun", name: "Fast Run", code: "TRIANGLE, LEFT, RIGHT, RIGHT, L2, L1, SQUARE", description: "Increases your on-foot running speed." },
  { id: "ps-fastswim", name: "Fast Swim", code: "LEFT, LEFT, L1, RIGHT, RIGHT, R2, LEFT, L2, RIGHT", description: "Lets you swim noticeably faster." },
  { id: "ps-superjump", name: "Super Jump", code: "LEFT, LEFT, TRIANGLE, TRIANGLE, RIGHT, RIGHT, LEFT, RIGHT, SQUARE, R1, R2", description: "Leap far higher than normal." },
  { id: "ps-recharge", name: "Recharge Special Ability", code: "X, X, SQUARE, R1, L1, X, RIGHT, LEFT, X", description: "Instantly refills your special ability meter." },
  { id: "ps-skyfall", name: "Skyfall", code: "L1, L2, R1, R2, LEFT, RIGHT, LEFT, RIGHT, L1, L2, R1, R2, LEFT, RIGHT, LEFT, RIGHT", description: "Teleports you high into the sky and drops you in freefall." },
  { id: "ps-parachute", name: "Give Parachute", code: "LEFT, RIGHT, L1, L2, R1, R2, R2, LEFT, LEFT, RIGHT, L1", description: "Adds a parachute to your inventory." },
  { id: "ps-drunk", name: "Drunk Mode", code: "TRIANGLE, RIGHT, RIGHT, LEFT, RIGHT, SQUARE, CIRCLE, LEFT", description: "Makes your character stumble around as if drunk." },
  { id: "ps-moongravity", name: "Moon Gravity", code: "LEFT, LEFT, L1, R1, L1, RIGHT, LEFT, L1, LEFT", description: "Reduces gravity so you float and leap in slow motion." },
  { id: "ps-raisewanted", name: "Raise Wanted Level", code: "R1, R1, CIRCLE, R2, LEFT, RIGHT, LEFT, RIGHT, LEFT, RIGHT", description: "Adds one star to your current wanted level." },
  { id: "ps-lowerwanted", name: "Lower Wanted Level", code: "R1, R1, CIRCLE, R2, RIGHT, LEFT, RIGHT, LEFT, RIGHT, LEFT", description: "Removes one star from your current wanted level." },
];

const psWeapons: Cheat[] = [
  { id: "ps-weapons", name: "Give Weapons & Ammo", code: "TRIANGLE, R2, LEFT, L1, X, RIGHT, TRIANGLE, DOWN, SQUARE, L1, L1, L1", description: "Grants a full weapon loadout with ammo." },
  { id: "ps-explosivemelee", name: "Explosive Melee", code: "RIGHT, LEFT, X, TRIANGLE, R1, CIRCLE, CIRCLE, CIRCLE, L2", description: "Every punch and kick becomes explosive." },
  { id: "ps-explosivebullets", name: "Explosive Bullets", code: "RIGHT, SQUARE, X, LEFT, R1, R2, LEFT, RIGHT, RIGHT, L1, L1, L1", description: "Rounds explode on impact. Requires a weapon equipped." },
  { id: "ps-flamingbullets", name: "Flaming Bullets", code: "L1, R1, SQUARE, R1, LEFT, R2, R1, LEFT, SQUARE, RIGHT, L1, L1", description: "Sets anything you shoot on fire." },
  { id: "ps-slowaim", name: "Slow Motion Aim", code: "SQUARE, L2, R1, TRIANGLE, LEFT, SQUARE, L2, RIGHT, X", description: "Enter up to three times for stacking Dead Eye style slow-mo." },
];

const psVehicles: Cheat[] = [
  { id: "ps-duster", name: "Spawn Duster Plane", code: "RIGHT, LEFT, R1, R1, LEFT, TRIANGLE, TRIANGLE, X, CIRCLE, L1", description: "Spawns a Duster crop-dusting plane." },
  { id: "ps-golfcart", name: "Spawn Golf Cart", code: "CIRCLE, L1, LEFT, R1, L2, X, R1, L1, CIRCLE, X", description: "Spawns a golf cart." },
  { id: "ps-sanchez", name: "Spawn Moto Sanchez", code: "LEFT, LEFT, RIGHT, RIGHT, LEFT, RIGHT, SQUARE, CIRCLE, TRIANGLE, R1, R2", description: "Spawns a Sanchez off-road motorcycle." },
  { id: "ps-rapidgt", name: "Spawn Rapid GT", code: "R2, L1, CIRCLE, RIGHT, L1, R1, RIGHT, LEFT, CIRCLE, R2", description: "Spawns the Rapid GT sports car." },
  { id: "ps-pcj600", name: "Spawn PCJ-600", code: "R1, RIGHT, LEFT, R2, LEFT, RIGHT, SQUARE, L2, L1", description: "Spawns the PCJ-600 street motorcycle." },
  { id: "ps-garbage", name: "Spawn Garbage Truck", code: "CIRCLE, R1, CIRCLE, R1, R1, LEFT, LEFT, R1, L1, CIRCLE, RIGHT", description: "Spawns a Trashmaster garbage truck." },
  { id: "ps-limo", name: "Spawn Limousine", code: "R2, RIGHT, L2, LEFT, LEFT, LEFT, R1, L1, CIRCLE, RIGHT", description: "Spawns a stretch limo." },
];

const psWorld: Cheat[] = [
  { id: "ps-weather", name: "Change Weather", code: "Phone: 1-999-625-348-7246", description: "Dial on the in-game phone to cycle through nine weather types." },
  { id: "ps-slippery", name: "Slippery Cars", code: "Phone: 1-999-766-9329", description: "Dial to make every vehicle slide like it's on ice." },
];

const psPhone: Cheat[] = [
  { id: "ps-phone-painkiller", name: "Invincibility", code: "1-999-724-654-5537", description: "Open your phone and dial for five minutes of invincibility." },
  { id: "ps-phone-turtle", name: "Full Health & Armor", code: "1-999-887-853", description: "Dial to instantly refill health and armor." },
  { id: "ps-phone-liquor", name: "Drunk Mode", code: "1-999-547-861", description: "Dial to trigger the drunk-walk effect." },
  { id: "ps-phone-powerup", name: "Recharge Special Ability", code: "1-999-769-3787", description: "Dial to refill your special ability meter." },
  { id: "ps-phone-slowmo", name: "Slow Motion", code: "1-999-756-966", description: "Dial to slow the game down; repeat to stack the effect." },
  { id: "ps-phone-deadeye", name: "Slow Motion Aim", code: "1-999-332-3393", description: "Dial for Dead Eye style aiming slow-mo." },
  { id: "ps-phone-highex", name: "Explosive Bullets", code: "1-999-444-439", description: "Dial for exploding ammo rounds." },
  { id: "ps-phone-hothands", name: "Explosive Melee", code: "1-999-4684-2637", description: "Dial to make your punches and kicks explosive." },
  { id: "ps-phone-incendiary", name: "Flaming Bullets", code: "1-999-462-363-4279", description: "Dial to set your rounds on fire." },
  { id: "ps-phone-lawyerup", name: "Lower Wanted Level", code: "1-999-5299-3787", description: "Dial to remove one star from your wanted level." },
  { id: "ps-phone-fugitive", name: "Raise Wanted Level", code: "1-999-3844-8483", description: "Dial to add one star to your wanted level." },
  { id: "ps-phone-buzzard", name: "Spawn Buzzard", code: "1-999-289-9633", description: "Dial to spawn an armed Buzzard helicopter." },
  { id: "ps-phone-caddy", name: "Spawn Golf Caddy", code: "1-999-4653-461", description: "Dial to spawn a golf cart." },
  { id: "ps-phone-duster", name: "Spawn Duster", code: "1-999-359-77729", description: "Dial to spawn a crop-dusting plane." },
  { id: "ps-phone-limo", name: "Spawn Limo", code: "1-999-846-39663", description: "Dial to spawn a stretch limo." },
  { id: "ps-phone-rapidgt", name: "Spawn Rapid GT", code: "1-999-727-4348", description: "Dial to spawn the Rapid GT sports car." },
  { id: "ps-phone-offroad", name: "Spawn Sanchez", code: "1-999-633-7623", description: "Dial to spawn a dirt bike." },
];

function makePsPlatform(id: "ps5" | "ps4", label: string): Platform {
  return {
    id,
    slug: id,
    label,
    shortLabel: label,
    heading: `GTA 5 ${label} Cheat Codes`,
    intro: "Enter the button combination quickly during gameplay — no need to pause. You can also dial the matching number on your in-game phone.",
    inputHint: "Controller combo",
    categories: [
      { id: `${id}-player`, name: "Player", cheats: psPlayer },
      { id: `${id}-weapons`, name: "Weapons", cheats: psWeapons },
      { id: `${id}-vehicles`, name: "Vehicles", cheats: psVehicles },
      { id: `${id}-world`, name: "World", cheats: psWorld },
      { id: `${id}-phone`, name: "Phone Cheats", cheats: psPhone },
    ],
  };
}

// ---------------------------------------------------------------------------
// Xbox (One / Series X|S) button-combo cheats — identical combos on both
// ---------------------------------------------------------------------------
const xbPlayer: Cheat[] = [
  { id: "xb-invincible", name: "Invincibility (5 min)", code: "RIGHT, A, RIGHT, LEFT, RIGHT, RB, RIGHT, LEFT, A, Y", description: "Become immune to damage for five minutes." },
  { id: "xb-health", name: "Max Health & Armor", code: "B, LB, Y, RT, A, X, B, RIGHT, X, LB, LB, LB", description: "Instantly refill health and body armor." },
  { id: "xb-fastrun", name: "Fast Run", code: "Y, LEFT, RIGHT, RIGHT, LT, LB, X", description: "Increases your on-foot running speed." },
  { id: "xb-fastswim", name: "Fast Swim", code: "LEFT, LEFT, LB, RIGHT, RIGHT, RT, LEFT, LT, RIGHT", description: "Lets you swim noticeably faster." },
  { id: "xb-superjump", name: "Super Jump", code: "LEFT, LEFT, Y, Y, RIGHT, RIGHT, LEFT, RIGHT, X, RB, RT", description: "Leap far higher than normal." },
  { id: "xb-recharge", name: "Recharge Special Ability", code: "A, A, X, RB, LB, A, RIGHT, LEFT, A", description: "Instantly refills your special ability meter." },
  { id: "xb-skyfall", name: "Skyfall", code: "LB, LT, RB, RT, LEFT, RIGHT, LEFT, RIGHT, LB, LT, RB, RT, LEFT, RIGHT, LEFT, RIGHT", description: "Teleports you high into the sky and drops you in freefall." },
  { id: "xb-parachute", name: "Give Parachute", code: "LEFT, RIGHT, LB, LT, RB, RT, RT, LEFT, LEFT, RIGHT, LB", description: "Adds a parachute to your inventory." },
  { id: "xb-drunk", name: "Drunk Mode", code: "Y, RIGHT, RIGHT, LEFT, RIGHT, X, B, LEFT", description: "Makes your character stumble around as if drunk." },
  { id: "xb-moongravity", name: "Moon Gravity", code: "LEFT, LEFT, LB, RB, LB, RIGHT, LEFT, LB, LEFT", description: "Reduces gravity so you float and leap in slow motion." },
  { id: "xb-raisewanted", name: "Raise Wanted Level", code: "RB, RB, B, RT, LEFT, RIGHT, LEFT, RIGHT, LEFT, RIGHT", description: "Adds one star to your current wanted level." },
  { id: "xb-lowerwanted", name: "Lower Wanted Level", code: "RB, RB, B, RT, RIGHT, LEFT, RIGHT, LEFT, RIGHT, LEFT", description: "Removes one star from your current wanted level." },
];

const xbWeapons: Cheat[] = [
  { id: "xb-weapons", name: "Give Weapons & Ammo", code: "Y, RT, LEFT, LB, A, RIGHT, Y, DOWN, X, LB, LB, LB", description: "Grants a full weapon loadout with ammo." },
  { id: "xb-explosivemelee", name: "Explosive Melee", code: "RIGHT, LEFT, A, Y, RB, B, B, B, LT", description: "Every punch and kick becomes explosive." },
  { id: "xb-explosivebullets", name: "Explosive Bullets", code: "RIGHT, X, A, LEFT, RB, RT, LEFT, RIGHT, RIGHT, LB, LB, LB", description: "Rounds explode on impact. Requires a weapon equipped." },
  { id: "xb-flamingbullets", name: "Flaming Bullets", code: "LB, RB, X, RB, LEFT, RT, RB, LEFT, X, RIGHT, LB, LB", description: "Sets anything you shoot on fire." },
  { id: "xb-slowaim", name: "Slow Motion Aim", code: "X, LT, RB, Y, LEFT, X, LT, RIGHT, A", description: "Enter up to three times for stacking Dead Eye style slow-mo." },
];

const xbVehicles: Cheat[] = [
  { id: "xb-duster", name: "Spawn Duster Plane", code: "RIGHT, LEFT, RB, RB, LEFT, Y, Y, A, B, LB", description: "Spawns a Duster crop-dusting plane." },
  { id: "xb-golfcart", name: "Spawn Golf Cart", code: "B, LB, LEFT, RB, LT, A, RB, LB, B, A", description: "Spawns a golf cart." },
  { id: "xb-sanchez", name: "Spawn Moto Sanchez", code: "LEFT, LEFT, RIGHT, RIGHT, LEFT, RIGHT, X, B, Y, RB, RT", description: "Spawns a Sanchez off-road motorcycle." },
  { id: "xb-rapidgt", name: "Spawn Rapid GT", code: "RT, LB, B, RIGHT, LB, RB, RIGHT, LEFT, B, RT", description: "Spawns the Rapid GT sports car." },
  { id: "xb-pcj600", name: "Spawn PCJ-600", code: "RB, RIGHT, LEFT, RIGHT, RT, LEFT, RIGHT, X, RIGHT, LT, LB, LB", description: "Spawns the PCJ-600 street motorcycle." },
  { id: "xb-garbage", name: "Spawn Garbage Truck", code: "B, RB, B, RB, RB, LEFT, LEFT, RB, LB, B, RIGHT", description: "Spawns a Trashmaster garbage truck." },
  { id: "xb-limo", name: "Spawn Limousine", code: "RT, RIGHT, LT, LEFT, LEFT, LEFT, RB, LB, B, RIGHT", description: "Spawns a stretch limo." },
];

const xbWorld: Cheat[] = [
  { id: "xb-weather", name: "Change Weather", code: "Phone: 1-999-625-348-7246", description: "Dial on the in-game phone to cycle through nine weather types." },
  { id: "xb-slippery", name: "Slippery Cars", code: "Phone: 1-999-766-9329", description: "Dial to make every vehicle slide like it's on ice." },
];

const xbPhone: Cheat[] = psPhone.map((c) => ({ ...c, id: c.id.replace("ps-", "xb-") }));

const xbPlatform: Platform = {
  id: "xbox",
  slug: "xbox",
  label: "Xbox",
  shortLabel: "Xbox",
  heading: "GTA 5 Xbox Cheat Codes",
  intro: "Enter the button combination quickly during gameplay — no need to pause. Works on Xbox One and Xbox Series X/S. You can also dial the matching number on your in-game phone.",
  inputHint: "Controller combo",
  categories: [
    { id: "xb-player", name: "Player", cheats: xbPlayer },
    { id: "xb-weapons", name: "Weapons", cheats: xbWeapons },
    { id: "xb-vehicles", name: "Vehicles", cheats: xbVehicles },
    { id: "xb-world", name: "World", cheats: xbWorld },
    { id: "xb-phone", name: "Phone Cheats", cheats: xbPhone },
  ],
};

// Order matters: PC must render first, then PS5, PS4, Xbox.
export const platforms: Platform[] = [
  pcPlatform,
  makePsPlatform("ps5", "PS5"),
  makePsPlatform("ps4", "PS4"),
  xbPlatform,
];
