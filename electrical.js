/* Electrical content. Edit the words here; the app builds the pages from this file.
   Tip: wrap words in **double stars** to make them bold. */
window.TG_CONTENT = window.TG_CONTENT || {};
window.TG_CONTENT.electrical = {
  overview: {
    lead: "Electricity powers everything in the building. It is also the system most likely to seriously hurt you. Learn how it works, and learn your limits.",
    paragraphs: [
      "Power comes from the utility company to a **transformer**, then into the building's main **switchgear**. From there, big wires feed **electrical panels** on each floor. Each panel holds **breakers**, and each breaker feeds a **circuit**: a group of lights, outlets or one piece of equipment.",
      "Commercial buildings in the U.S. usually have two voltage levels. Large equipment and many light fixtures run on 480 or 277 volts. Outlets run on 120 volts. Higher voltage is more dangerous, but 120 volts can kill too.",
      "Breakers are safety devices. They shut a circuit off when too much current flows, before the wires overheat. A breaker that trips is telling you something is wrong.",
      "Your main jobs as a new tech: change lamps and simple parts with the power off, reset tripped breakers safely, report anything hot, buzzing or burning, and keep electrical rooms clear. Work on live parts is for qualified electricians only."
    ],
    flowLabel: "How the power moves",
    flow: ["Utility", "Transformer", "Main switchgear", "Floor panels", "Breaker", "Circuit", "Lights and outlets"],
    flowNote: "Each step down the line feeds smaller loads. Shutting off a breaker only kills the circuits below it, never the ones above."
  },

  equipment: [
    {
      id: "gear", name: "Main switchgear", tag: "MSG",
      what: "The large metal cabinets where power enters the building and is split up. It holds the main breakers for the whole building.",
      where: "Main electrical room, usually on the ground floor or in the basement.",
      check: ["Room door closed and locked", "No buzzing, crackling or hot smell", "Nothing stored in the room", "Do not open the doors. Qualified electricians only."]
    },
    {
      id: "xfmr", name: "Transformer", tag: "XFMR",
      what: "Changes voltage from one level to another, for example 480 volts down to 120 volts for outlets. A low hum is normal.",
      where: "Electrical rooms and closets. Large ones may be outdoors on a pad.",
      check: ["Normal steady hum, not loud buzzing", "Vents not blocked", "Not much hotter than usual", "Nothing leaning against it"]
    },
    {
      id: "panel", name: "Electrical panel", tag: "PNL",
      what: "A metal box with a door that holds the breakers for one area. Each panel has a label and a directory card listing what each breaker feeds.",
      where: "Electrical closets on each floor, mechanical rooms and corridors.",
      check: ["Door closes and latches", "Directory card filled in and readable", "At least 3 feet clear in front, nothing stored there", "No missing breakers leaving open slots"]
    },
    {
      id: "breaker", name: "Circuit breaker", tag: "CB",
      what: "A switch that turns off by itself when a circuit draws too much power. When it trips, the handle usually moves to the middle position.",
      where: "Inside electrical panels and switchgear.",
      check: ["No breakers tripped that should be on", "No warm or discolored breakers"]
    },
    {
      id: "disc", name: "Disconnect switch", tag: "DS",
      what: "A switch in a box next to a piece of equipment that cuts its power so it can be worked on. Most can hold a padlock in the off position.",
      where: "Next to rooftop units, pumps, fans, water heaters and other equipment.",
      check: ["Handle in the expected position", "Cover closed", "Label shows what it feeds"]
    },
    {
      id: "vfd", name: "Variable frequency drive", tag: "VFD",
      what: "An electronic box that controls how fast a motor spins. Common on fans and pumps. It shows fault codes when something is wrong.",
      where: "Mounted on the wall near the fan or pump it controls.",
      check: ["Display shows running or ready, no fault", "Cooling fan and vents not blocked", "Write down any fault code exactly"]
    },
    {
      id: "starter", name: "Motor starter and HOA switch", tag: "MS",
      what: "Turns a motor on and off. Many have a Hand-Off-Auto switch. Auto lets the BAS control it. Hand runs it no matter what. Off stops it.",
      where: "Near the motor or in a motor control panel.",
      check: ["HOA switch in Auto unless told otherwise", "No buzzing or burnt smell"]
    },
    {
      id: "gen", name: "Emergency generator", tag: "GEN",
      what: "An engine that makes power when the utility power fails. It feeds emergency lights, fire alarm, elevators and other critical loads. Most start themselves once a week to test.",
      where: "Outdoors in an enclosure, on the roof, or in a generator room.",
      check: ["Control switch in Auto", "No alarm lights", "Fuel level per your site's normal", "Battery charger light on", "Nothing stored around it"]
    },
    {
      id: "ats", name: "Automatic transfer switch", tag: "ATS",
      what: "Switches the building's emergency circuits from utility power to the generator during an outage, and back again when power returns.",
      where: "Electrical room, near the generator feed.",
      check: ["Shows normal source (utility) when power is on", "No alarm lights"]
    },
    {
      id: "ups", name: "UPS (battery backup)", tag: "UPS",
      what: "A battery system that keeps computers and IT equipment running for a short time during a power loss.",
      where: "Server rooms, IT closets and security desks.",
      check: ["Display shows normal, no alarms or beeping", "Room is cool", "Batteries not swollen or leaking"]
    },
    {
      id: "gfci", name: "GFCI outlets", tag: "GFCI",
      what: "Outlets with Test and Reset buttons. They shut off in a split second if electricity leaks to ground, like through a person. Required near water.",
      where: "Restrooms, kitchens, break rooms, outdoors, roofs and mechanical rooms.",
      check: ["Reset button pushed in", "Press Test then Reset to make sure it trips and resets"]
    },
    {
      id: "lighting", name: "Lighting and controls", tag: "LTG",
      what: "Fixtures plus the things that control them: switches, occupancy sensors, timers and photocells that turn outdoor lights on at dusk.",
      where: "Everywhere. Lighting control panels are often in electrical closets.",
      check: ["Note any lights that are out or flickering", "Outdoor lights off in daytime and on at night"]
    }
  ],

  guides: [
    {
      id: "lights-out", title: "Lights out in an area",
      symptom: "One fixture, a row or a whole room is dark.",
      loto: true,
      steps: [
        "**Is it one fixture or many?** One fixture usually means a bad lamp, ballast or LED driver. A whole room usually means a switch, sensor, timer or breaker.",
        "**Check the controls.** Flip the switch. Wave your arms to wake up an occupancy sensor. After hours, lights may be off on a schedule.",
        "**Check the breaker.** Use the panel directory card to find the right one. See the **Breaker tripped** guide before resetting.",
        "**Replacing a lamp:** turn the fixture off at its breaker and lock it out. A wall switch is not enough, because the switch may not cut every wire. Let the old lamp cool before touching it.",
        "**Match the new lamp** to the old one exactly. LED tubes come in types that work differently. Using the wrong type can make the fixture fail or become unsafe.",
        "**Old fluorescent tubes** contain mercury. Do not break them or put them in the trash. Follow your site's recycling procedure."
      ],
      stopIf: [
        "The fixture needs a new ballast or LED driver and you are not trained to change it",
        "You see burnt wires or melted parts",
        "The breaker trips again"
      ],
      tip: "Keep a running list of lights that are out by room and floor. It makes one trip to the parts room instead of five."
    },
    {
      id: "breaker", title: "Breaker tripped",
      symptom: "Power is out to a few outlets, lights or one piece of equipment.",
      loto: false,
      steps: [
        "**Find the cause first.** Look for what was just plugged in: space heaters, microwaves and coffee makers are common. Unplug extra loads.",
        "**Look and smell around the outlets and equipment.** Any burnt smell, scorching or water? If so, stop. Do not reset.",
        "**At the panel,** find the tripped breaker. Its handle is usually in the middle, not fully on or off.",
        "**Stand to the side** of the panel, not straight in front of it, and look away as you switch.",
        "**Push the handle all the way to OFF,** then back to ON. Many breakers will not reset unless you go fully to OFF first.",
        "**Reset it only once.** If it trips again, something is wrong. Leave it off and report it.",
        "**On 480-volt panels,** many sites require arc flash protective gear even to switch a breaker. Follow your site's rules. If you are not sure, do not touch it."
      ],
      stopIf: [
        "It trips again after one reset",
        "You smell burning or see scorch marks",
        "The breaker is hot, cracked or will not stay on",
        "You would need to take the panel cover off"
      ],
      tip: "Never tape a breaker on or hold it on. It trips to protect the wires from catching fire."
    },
    {
      id: "gfci", title: "Outlet is dead (GFCI)",
      symptom: "An outlet in a restroom, kitchen, roof or outdoor area has no power.",
      loto: false,
      steps: [
        "**Look for a Reset button** on that outlet. Press it firmly.",
        "**No button on that outlet?** It may be protected by a GFCI outlet somewhere else, often the first outlet on the circuit, nearby on the same wall, or in the next room.",
        "**Press Reset on nearby GFCI outlets** until the power comes back.",
        "**If it will not reset,** check the breaker. A GFCI cannot reset without power.",
        "**If it trips again** right away, unplug everything from it. If it holds with nothing plugged in, the problem is the equipment that was plugged in. Tag that equipment and report it.",
        "**Check for water.** Wet outlet boxes on roofs and outdoors are a common reason GFCIs trip."
      ],
      stopIf: [
        "The GFCI trips with nothing plugged in",
        "The outlet is wet, cracked or scorched",
        "It will not reset and the breaker is on"
      ],
      tip: "GFCIs wear out. If one will not trip when you press Test, it is not protecting anyone. Report it."
    },
    {
      id: "hot-outlet", title: "Hot, buzzing or burnt-smelling outlet or switch",
      symptom: "A cover plate is warm, crackles, buzzes, sparks or smells like burning plastic.",
      loto: true,
      steps: [
        "**Treat this as urgent.** Loose or damaged connections can start fires inside the wall.",
        "**If you see smoke or fire,** pull the fire alarm, get out and call 911.",
        "**Stop using it.** If you can do it without touching anything damaged, unplug what is plugged in.",
        "**Turn off its breaker** if the directory card clearly shows which one it is. Lock and tag it.",
        "**Tag the outlet or switch** DO NOT USE, so nobody plugs back in.",
        "**Report it right away.** An electrician needs to replace it and check the wiring."
      ],
      stopIf: [
        "Always. This one goes to a qualified electrician."
      ],
      tip: "Heavy plugs that sag out of an outlet are an early warning. A loose fit means worn contacts. Report it before it gets hot."
    },
    {
      id: "motor", title: "Motor won't start",
      symptom: "A fan or pump is off and the BAS says it should be running.",
      loto: true,
      steps: [
        "**Check the HOA switch.** Is it in Auto? Someone may have left it in Off after a repair. Ask before switching it if you do not know why it is there.",
        "**Check the VFD display** if it has one. Write down the fault code exactly as shown.",
        "**Check the disconnect switch.** If it is off, look for a lock or tag. **Never remove someone else's lock or tag.**",
        "**Check the breaker** that feeds it. Same rule: one reset at most.",
        "**Look and listen.** Burnt smell? Humming but not turning? Belt broken? Do not touch the motor shaft or belt unless it is locked out.",
        "**Report** the codes and what you found."
      ],
      stopIf: [
        "Fixing it means opening the VFD, starter or motor wiring",
        "The motor hums but does not turn",
        "There is a burnt smell or the motor is very hot",
        "The breaker trips again"
      ],
      tip: "Clearing a VFD fault can restart the motor instantly. Make sure nobody is near the fan or pump before anyone presses reset."
    },
    {
      id: "outage", title: "Power outage",
      symptom: "Power is out to the whole building or a large part of it.",
      loto: false,
      steps: [
        "**Stay calm and get a flashlight.** Emergency lights should come on within seconds.",
        "**Check for trapped people.** If someone is stuck in an elevator, talk to them, call the elevator company, and call 911 if anyone is hurt or panicking. **Never try to open elevator doors or move the car yourself.**",
        "**Find out how big it is.** Are nearby buildings and streetlights out too? If so, it is probably a utility outage. Report it to the utility and your supervisor.",
        "**Check the generator.** Did it start? Is the transfer switch showing generator power?",
        "**Do not turn breakers on and off** trying to fix a building-wide outage.",
        "**When power returns,** walk the building. Make sure air handlers, pumps, water heaters, the BAS and the fire alarm panel came back and show no alarms."
      ],
      stopIf: [
        "The generator did not start or shows an alarm",
        "Only part of the building is out and you smell burning",
        "Anything involving the main switchgear"
      ],
      tip: "Check freezers, server rooms and sump pumps first after an outage. They cause the most damage if they stay down."
    }
  ],

  safety: {
    warnings: [
      { level: "danger", title: "Qualified people only", text: "Only a qualified person, someone trained to recognize and avoid electrical hazards, may work on or near exposed energized parts. If that is not you yet, do not open panels, switchgear or equipment wiring." },
      { level: "danger", title: "Arc flash", text: "A short circuit can cause an explosion of heat and light called an arc flash. It can burn, blind and kill people standing in front of the equipment. Stand to the side when switching, and wear the gear your site requires." },
      { level: "danger", title: "Test before you touch", text: "Never trust a switch or label. A qualified person must test with a working meter to prove the power is off before anyone touches wires." },
      { level: "danger", title: "Stored energy", text: "VFDs, capacitors and UPS units can hold a deadly charge after the power is off. Follow the waiting time on the label before anyone opens them." },
      { level: "warn", title: "Keep panels clear", text: "Keep at least 3 feet clear in front of electrical panels and switchgear. Never store carts, boxes or ladders there." },
      { level: "warn", title: "Water and electricity", text: "Never touch electrical equipment while standing in water or with wet hands. Keep people away from wet electrical equipment until a qualified person shuts it off." },
      { level: "warn", title: "Ladders and tools", text: "Use fiberglass ladders around electrical work, never metal. Take off rings, watches and metal jewelry." },
      { level: "warn", title: "Generators start on their own", text: "Generators start automatically for outages and weekly tests. Treat them as running at all times. They also make carbon monoxide." }
    ],
    loto: {
      intro: "Lockout/tagout (LOTO) keeps a circuit from being turned back on while someone is working on it. In the U.S., OSHA's rule 29 CFR 1910.147 requires it. Only do LOTO after your employer has trained you, and follow your site's written procedure.",
      steps: [
        "**Prepare.** Know which breaker or disconnect feeds the equipment. Do not guess from an old label. Ask if you are not sure.",
        "**Notify** the people who use the equipment or area that the power will be off.",
        "**Shut it down** the normal way first.",
        "**Isolate it.** Switch the breaker or disconnect to OFF, standing to the side.",
        "**Lock and tag** it with your own lock and tag. Use a breaker lockout device if needed.",
        "**Release stored energy.** Wait the time shown on VFD or capacitor labels.",
        "**Verify it is dead.** Try the normal on switch. Then a qualified person tests with a meter that was checked on a known live source before and after.",
        "**When you finish,** remove tools, put covers back, tell everyone, remove your lock, then switch the power back on."
      ]
    }
  },

  glossary: [
    { term: "Volt", match: ["volt", "volts", "voltage"], def: "The push that moves electricity through a wire. Higher voltage pushes harder and is more dangerous." },
    { term: "Amp", match: ["amp", "amps"], def: "How much electricity is flowing. Too many amps on a circuit trips the breaker." },
    { term: "Circuit", match: ["circuit", "circuits"], def: "A loop of wire from a breaker out to lights, outlets or equipment and back." },
    { term: "Breaker", match: ["breaker", "breakers", "circuit breaker"], def: "A switch that shuts off a circuit automatically when too much current flows." },
    { term: "Electrical panel", match: ["electrical panel", "electrical panels", "panelboard"], def: "A metal box that holds the breakers for an area. Also called a panelboard." },
    { term: "Directory card", match: ["directory card"], def: "The list inside a panel door that says what each breaker feeds." },
    { term: "Switchgear", match: ["switchgear"], def: "The large main cabinets where power enters the building and is divided up." },
    { term: "Transformer", match: ["transformer", "transformers"], def: "A device that changes electricity from one voltage to another." },
    { term: "GFCI", match: ["GFCI", "GFCIs"], def: "Ground fault circuit interrupter. An outlet or breaker that shuts off fast if electricity leaks to ground, such as through a person." },
    { term: "Ground", match: ["grounding", "ground wire"], def: "The safe path back to the earth for stray electricity. The round prong on a plug is the ground." },
    { term: "Short circuit", match: ["short circuit"], def: "When electricity takes a shortcut it should not, like two wires touching. It causes a big rush of current and can cause an arc flash." },
    { term: "Arc flash", match: ["arc flash"], def: "An explosion of heat and light from a short circuit. It can cause severe burns." },
    { term: "Qualified person", match: ["qualified person", "qualified electrician", "qualified electricians"], def: "Someone trained to recognize and avoid electrical hazards on specific equipment. Your employer decides who is qualified." },
    { term: "Energized", match: ["energized"], def: "Connected to power. Also called live or hot." },
    { term: "VFD", match: ["VFD", "VFDs"], def: "Variable frequency drive. Controls how fast a motor spins." },
    { term: "HOA switch", match: ["HOA", "HOA switch", "Hand-Off-Auto"], def: "Hand-Off-Auto switch. Hand runs the motor no matter what. Off stops it. Auto lets the BAS control it." },
    { term: "Ballast", match: ["ballast"], def: "The part inside a fluorescent light fixture that controls power to the tubes." },
    { term: "LED driver", match: ["LED driver"], def: "The part inside an LED fixture that controls power to the LEDs." },
    { term: "Generator", match: ["generator", "generators"], def: "An engine that makes electricity during a power outage." },
    { term: "ATS", match: ["ATS", "transfer switch"], def: "Automatic transfer switch. Moves emergency circuits to generator power during an outage." },
    { term: "UPS", match: ["UPS"], def: "Uninterruptible power supply. A battery backup that keeps equipment running for a short time." },
    { term: "Occupancy sensor", match: ["occupancy sensor", "occupancy sensors"], def: "A sensor that turns lights on when it detects people and off when the room is empty." },
    { term: "Photocell", match: ["photocell", "photocells"], def: "A light sensor that turns outdoor lights on at dusk and off at dawn." },
    { term: "NFPA 70E", match: ["NFPA 70E"], def: "The U.S. safety standard for working around electricity, including arc flash protection." }
  ]
};
