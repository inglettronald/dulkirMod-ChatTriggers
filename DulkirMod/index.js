const storageBind = new KeyBind("Open Storage", Keyboard.KEY_NONE, "Noob")
const petsBind = new KeyBind("Pets", Keyboard.KEY_NONE, "Noob")
const warpBind = new KeyBind("Warp Menu", Keyboard.KEY_NONE, "Noob")
const wardrobeBind = new KeyBind("Wardrobe", Keyboard.KEY_NONE, "Noob")
const kuudraBind = new KeyBind ("Kuudra", Keyboard.KEY_NONE, "Noob")
const tombBind = new KeyBind ("Smold", Keyboard.KEY_NONE, "Noob")
const m7Bind = new KeyBind ("m7 command", Keyboard.KEY_NONE, "Noob")
const m6Bind = new KeyBind ("m6 command", Keyboard.KEY_NONE, "Noob")
const pwarpBind = new KeyBind ("pwarp", Keyboard.KEY_NONE, "Noob")
const equipmentBind = new KeyBind ("equipment", Keyboard.KEY_NONE, "Noob")
const auctionBind = new KeyBind ("ah", Keyboard.KEY_NONE, "Noob")
const rpBind = new KeyBind("Reparty", Keyboard.KEY_NONE, "Noob")

register("tick", () => {
    if (rpBind.isPressed()) {
        ChatLib.command("rp", true);
    }
    if (petsBind.isPressed()) {
        ChatLib.command("pets");
    }
    if (warpBind.isPressed()) {
        ChatLib.command("warp");
    }
    if (wardrobeBind.isPressed()) {
        ChatLib.command("wardrobe");
    }
    if (kuudraBind.isPressed()) {
        ChatLib.command("warp kuudra");
    }
    if (tombBind.isPressed()) {
        ChatLib.command("warp smold");
    }
    if (m7Bind.isPressed()) {
        ChatLib.command("joindungeon master_catacombs 7");
    }
    if (m6Bind.isPressed()) {
        ChatLib.command("joindungeon master_catacombs 6");
    }
    if (pwarpBind.isPressed()){
        ChatLib.command("p warp")
    }
    if (equipmentBind.isPressed()) {
        ChatLib.command("equipment");
    }
    if (auctionBind.isPressed()) {
        ChatLib.command("ah");
    }
    if (storageBind.isPressed()) {
        ChatLib.command("storage")
    }

    //test
    //const ArmorStand = Java.type("net.minecraft.entity.item.EntityArmorStand")

    //World.getAllEntitiesOfType(ArmorStand).forEach(stand => {
    //    if(stand.distanceTo(Player.getPlayer()) < 10) {
            
    //    }    
    //})
})


// Command shortcuts not included in bloom module! This steals his code though
let commands = {
    "at": "attributetransfer",
    "pai":"p settings allinvite"
}
Object.keys(commands).forEach(cmd => {
    register("command", (...args) => {
        ChatLib.command(`${commands[cmd]} ${args.join(" ")}`)
    }).setName(cmd)
})


// TODO: make this it's own file
const uselessMsgs = [
    /Your .+ hit .+ for [\d,.]+ damage\./,
    /There are blocks in the way!/,
    /You do not have enough mana to do this!/,
    /\[NPC\] Mort: .+/,
    /\+\d+ Kill Combo.+/,
    /Thunderstorm is ready to use! Press DROP to activate it!/,
    /.+ healed you for .+ health!/,
    /You earned .+ GEXP from playing .+!/,
    /.+ unlocked .+ Essence x\d+!/,
    /This ability is on cooldown for 1s\./,
    /You do not have the key for this door!/,
    /The Stormy .+ struck you for .+ damage!/,
    /Please wait a few seconds between refreshing!/,
    /This chest has already been searched!/,
    /You cannot move the silverfish in that direction!/,
    /You cannot hit the silverfish while it's moving!/,
    /Your Kill Combo has expired! You reached a .+ Kill Combo!/,
    /Your active Potion Effects have been paused and stored. They will be restored when you leave Dungeons! You are not allowed to use existing Potion Effects while in Dungeons\./,
    /.+ has obtained Blood Key!/,
    /The Flamethrower hit you for .+ damage!/,
    /.+ found a Wither Essence! Everyone gains an extra essence!/,
    /\[BOSS\].+/,
    /This ability is on cooldown for .+/,
    /.{0,10} Milestone .: You have dealt .+ Damage so far!.+/,
    /Tank Milestone .: You have tanked and dealt \d+ Total Damage so far!.+/,
    /Healer Milestone .: You have healed \d+ Damage so far!.+/,
    /DUNGEON BUFF! .+ found a Blessing of .+!/,
    /     Granted you .+\./,
    /     Grants you .+\./,
    /.+ has obtained Blessing of .+!/,
    /DUNGEON BUFF! A Blessing of .+ was found! .+/,
    /A Blessing of .+ was picked up!/,
    /RIGHT CLICK on the BLOOD DOOR to open it\. This key can only be used to open 1 door\!/,
    /RIGHT CLICK on a WITHER door to open it\. This key can only be used to open 1 door\!/,
    /.+ opened a WITHER door\!/,
    /You are playing on profile: Banana (Co-op)/,
    /You earned \d+ GEXP \+ \d+ Event EXP from playing SkyBlock\!/,
    /You earned \d+ GEXP from playing SkyBlock\!/,
    /.+ has started the dungeon countdown\. The dungeon will begin in 1 minute\./,
    /.+ is now ready\!/,
    /Dungeon starts in \d+ seconds\./,
    /The BLOOD DOOR has been opened\!/,
    /A shiver runs down your spine\.\.\./,
    /You tipped \d+ players\!/,
    /.+ has obtained Superboom TNT\!/,
    /.+ has obtained Wither Key\!/,
    /.+ has obtained Revive Stone\!/,
    /You cannot use abilities in this room\!/,
    /You cannot do that in this room\!/,
    /BUFF! You have gained .+/,
    /{"success":false,"cause":"Invalid API key"}/,
    /TypeError: Cannot read property "members" from null/
]

// Filters useless messages.
register("chat", (message, event) => {
    if (uselessMsgs.some(a => message.match(a))) cancel(event);
}).setCriteria("${message}")

// Hides enchant rune particles and heart particles (HEALER BULLSHIT).
register("spawnParticle", (particle, particleType, event) => {
    if (particleType.toString() == "ENCHANTMENT_TABLE" || particleType.toString() == "HEART") {
        cancel(event);
    }
})

const throttling = "This menu has been throttled! Please slow down...";
// Party notifier if throttling
register("chat", (message, event) => {
    if (message == "This menu has been throttled! Please slow down...") {
        cancel(event);
        ChatLib.command("pc Hi I am being throttled zzzzz");
    }
}).setCriteria("${message}")