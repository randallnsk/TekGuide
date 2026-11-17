/* HVAC content. Edit the words here; the app builds the pages from this file.
   Tip: wrap words in **double stars** to make them bold. */
window.TG_CONTENT = window.TG_CONTENT || {};
window.TG_CONTENT.hvac = {
  overview: {
    lead: "HVAC stands for heating, ventilation and air conditioning. It keeps people comfortable and keeps the air inside the building fresh.",
    paragraphs: [
      "Think of it as three jobs. **Heating** adds warmth. **Cooling** removes heat and moisture from the air. **Ventilation** brings in outside air and pushes stale air out.",
      "In most commercial buildings, big machines on the roof or in a mechanical room make warm or cool air, or hot or cold water. Fans and ducts carry the air to each room. Pumps and pipes carry the water.",
      "A computer system called the BAS usually turns equipment on and off on a schedule and watches for problems. Many complaints that look like broken equipment are really a schedule or setpoint problem.",
      "Your main jobs as a new tech: walk the equipment, notice what is different from normal, keep filters and drains clean, answer comfort calls, and know when to stop and call for help."
    ],
    flowLabel: "How the air moves",
    flow: ["Outside air", "Filter", "Coil heats or cools", "Fan", "Supply ducts", "Your room", "Return air"],
    flowNote: "Air moves in a loop. Most of it comes back through return grilles and goes around again, with some fresh outside air mixed in."
  },

  equipment: [
    {
      id: "rtu", name: "Rooftop unit", tag: "RTU",
      what: "An all-in-one box on the roof that heats, cools and blows air for part of the building. Most small and mid-size commercial buildings use these.",
      where: "On the roof, sitting on a curb over a hole that connects to the ducts below.",
      check: ["Running when it should be, by the schedule", "No new noises or shaking", "Access panels closed and latched", "Nothing blocking the outdoor coil (leaves, trash, plastic)", "Water draining from the condensate line in cooling season"]
    },
    {
      id: "ahu", name: "Air handling unit", tag: "AHU",
      what: "A large box with filters, coils and a big fan. Unlike an RTU, it usually does not make its own heat or cold. It uses hot water from a boiler or cold water from a chiller.",
      where: "Mechanical rooms, penthouses, and sometimes the roof.",
      check: ["Fan running, belt not squealing", "Filter gauge reading in the normal range", "Drain pan not full or overflowing", "No water on the floor around it", "No unusual shaking"]
    },
    {
      id: "vav", name: "VAV box", tag: "VAV",
      what: "A metal box in the ceiling with a damper inside. It controls how much air goes into one area, called a zone. Some have a small heating coil to warm the air before it enters the room.",
      where: "Above the ceiling tiles, usually one or more per zone.",
      check: ["Usually checked only when someone in that zone complains", "Listen for whistling or rattling above the ceiling"]
    },
    {
      id: "boiler", name: "Boiler", tag: "BLR",
      what: "Heats water (or makes steam) that is pumped through the building for heat. Most burn natural gas. Some are electric.",
      where: "Boiler room or mechanical room, often in the basement or on the roof.",
      check: ["Pressure and temperature gauges in the normal range for your site", "No alarm or lockout light on the display", "No water leaking, no gas smell", "Exhaust pipe (flue) connected and not damaged", "Area around it clear of storage"]
    },
    {
      id: "chiller", name: "Chiller", tag: "CH",
      what: "A large machine that makes cold water for cooling big buildings. The cold water goes to the air handlers.",
      where: "Mechanical room (water-cooled) or outdoors on a pad or the roof (air-cooled).",
      check: ["No alarms on the control screen", "No oil or water leaks", "Log readings if your site asks you to", "Refrigerant alarm panel shows normal"]
    },
    {
      id: "tower", name: "Cooling tower", tag: "CT",
      what: "An outdoor tower that gets rid of heat from a water-cooled chiller by letting some of the water evaporate, a bit like sweat cooling your skin.",
      where: "Outdoors, usually on the roof or beside the building.",
      check: ["Fans running in cooling season", "Water level in the basin normal", "No trash or heavy buildup in the basin", "Water treatment equipment working"]
    },
    {
      id: "pump", name: "Pumps", tag: "P",
      what: "Push hot water or chilled water through the pipes to the air handlers and VAV boxes.",
      where: "Mechanical and boiler rooms, often in pairs so one can back up the other.",
      check: ["The right pumps are running", "No water dripping at the shaft seal", "No grinding or screeching", "Motor not too hot to keep your hand near"]
    },
    {
      id: "exhaust", name: "Exhaust fans", tag: "EF",
      what: "Pull stale or smelly air out of restrooms, kitchens, garages and janitor closets and blow it outside.",
      where: "On the roof, in walls, or in the ceiling of the room they serve.",
      check: ["Running when they should be", "No squealing belt or rattling", "Restrooms not smelly or stuffy"]
    },
    {
      id: "split", name: "Split or ductless unit", tag: "DX",
      what: "A small system with an indoor part and an outdoor part. Often used to keep server rooms, IT closets and elevator rooms cool around the clock.",
      where: "Indoor unit high on a wall or in the ceiling. Outdoor unit on the roof or a pad.",
      check: ["Room temperature normal", "No water dripping from the indoor unit", "Outdoor unit running and not blocked"]
    },
    {
      id: "tstat", name: "Thermostats and sensors", tag: "T",
      what: "Tell the equipment what each area needs. Some you can adjust. Many are only sensors that report to the BAS.",
      where: "On walls in each zone.",
      check: ["Display working", "Setpoint matches your site standard", "Not covered, blocked or sitting next to a heat source like a coffee maker"]
    },
    {
      id: "filters", name: "Air filters", tag: "F",
      what: "Trap dust before it gets into the equipment and the air people breathe. A clogged filter is the most common cause of weak airflow.",
      where: "Inside RTUs, AHUs, ductless units and some return grilles.",
      check: ["Date written on the filter or a tag", "Filter gauge reading, if there is one", "Not bent, wet or sucked out of place"]
    }
  ],

  guides: [
    {
      id: "hot-cold", title: "Too hot or too cold",
      symptom: "Someone says their area is uncomfortable. This is the most common call you will get.",
      loto: false,
      steps: [
        "**Talk to the person.** Ask where exactly, since when, and whether it is the whole area or one spot. Write down the room number.",
        "**Check the thermostat.** Is it in the right mode (heat, cool or auto)? Is the setpoint your site's standard? Is the display working?",
        "**Check the schedule.** Is the building in occupied mode right now? After-hours calls are often a schedule problem. Check the BAS if you have access, or ask a senior tech.",
        "**Feel the air at the supply diffuser.** Is air coming out? Is it warm or cool? Use a thermometer if you have one and write down the reading.",
        "**Look for blockers.** Boxes or furniture on the diffusers or return grilles, a closed diffuser, a space heater, strong sun through windows, or a door propped open.",
        "**Ask the neighbors.** If the whole floor feels wrong, the problem is likely the main unit, not the room. Go to the unit that serves that area and use the guide called **Unit won't run**.",
        "**Close the loop.** Tell the person what you found and what happens next. Write it in the work order."
      ],
      stopIf: [
        "The thermostat is blank and fixing it means opening wiring",
        "You would need to change BAS settings you have not been given permission to change",
        "The main unit is down and you are not trained on it"
      ],
      tip: "Write the time and temperature in the work order. Patterns like every afternoon or every Monday help senior techs find the cause."
    },
    {
      id: "no-run", title: "Unit won't run",
      symptom: "A rooftop unit or air handler is off when it should be on.",
      loto: true,
      steps: [
        "**Confirm there is a call.** Is the thermostat or BAS actually asking for heating, cooling or fan right now?",
        "**Check for alarms.** Look at the BAS and the unit's own display. Write down alarm codes exactly as shown.",
        "**Check the disconnect switch** next to the unit. If it is OFF, find out why before turning it on. Someone may have shut it off to work on it. **Never remove someone else's lock or tag.**",
        "**Check the breaker** at the electrical panel. Before resetting, look for a reason it tripped, like water in the unit or a burnt smell. If your site allows it, you may reset it once. If it trips again, stop.",
        "**Look and listen.** Is the fan belt broken or loose? Is there water in the bottom of the unit? Ice on the coil? A burnt smell?",
        "**Know the safety switches.** Many units shut off on purpose when something is wrong: a full drain pan, high pressure, a freezing coil, or smoke in the ducts. **Never bypass or jumper a safety switch.** Find out why it tripped.",
        "**Report** what you found, including alarm codes, before you leave the unit."
      ],
      stopIf: [
        "You would need to open an electrical compartment and you are not trained and authorized for it",
        "A breaker trips a second time",
        "You smell burning or see scorch marks",
        "A safety switch has tripped and you do not know why"
      ],
      tip: "A unit that was shut off and locked by someone else is not broken. Ask your supervisor who owns the lock."
    },
    {
      id: "airflow", title: "Weak airflow or ice on the coil",
      symptom: "Little air coming out of the vents, or frost and ice on the indoor coil or refrigerant pipes.",
      loto: true,
      steps: [
        "**Check the filter first.** A dirty filter is the number one cause of weak air. Turn the unit off before changing it, and write the date on the new one.",
        "**Check the diffusers and return grilles.** Make sure they are open and not blocked.",
        "**Check the fan.** Is it running? A squealing sound often means a slipping belt. **Lock out the unit before you touch or inspect a belt.** Fans can start on their own at any time.",
        "**If you see ice:** switch cooling off and leave the fan on so the ice melts. This can take a few hours. Put down towels or a bucket, because melting ice makes a lot of water.",
        "**After it thaws,** replace a dirty filter and check the airflow again.",
        "**If the ice comes back,** stop and call. It usually means low refrigerant or a bigger airflow problem."
      ],
      stopIf: [
        "The ice comes back after thawing",
        "The fix involves refrigerant. In the U.S., only an EPA Section 608 certified tech may handle it.",
        "The fan motor is very hot or smells burnt"
      ],
      tip: "Never chip ice off a coil. The fins and tubes are thin and easy to puncture."
    },
    {
      id: "leak", title: "Water leaking from a unit or ceiling",
      symptom: "Dripping from an air handler, a ductless unit, or a ceiling tile, usually during cooling season.",
      loto: true,
      steps: [
        "**Protect people and property first.** Put out a bucket, towels and a wet floor sign. Move computers and papers away.",
        "**If water is near lights, outlets or electrical equipment,** keep people away and do not touch it. Call your supervisor. Power may need to be shut off by a qualified person.",
        "**Find the source.** Air conditioners make water (condensate) when they cool. If water comes from a pipe instead, that is a plumbing, hot water or chilled water leak. Call it in.",
        "**Check the drain pan.** Is it full? Is the drain line clogged? A float switch may have shut the unit off. That is its job: it stops the unit before the pan overflows.",
        "**Turn the unit off and lock it out before reaching inside.** A common safe fix is to clear the drain line from its outside end with a wet/dry vacuum. Then clean out the pan.",
        "**Check the trap** on the drain line. It should be in one piece and not cracked.",
        "**Restart and watch** it drain for 10 to 15 minutes.",
        "**Report wet ceiling tiles.** They should be replaced. Wet tiles can grow mold, and they get heavy and can fall."
      ],
      stopIf: [
        "Water is coming from a pipe, not a drain pan",
        "Water is near electrical equipment",
        "The leak is large or you cannot find where it comes from",
        "You see mold on a large area"
      ],
      tip: "Leaks often come back on hot, humid days. Add the unit to your watch list for the next week."
    },
    {
      id: "noise-smell", title: "Strange noise, smell or shaking",
      symptom: "Something sounds, smells or feels different from normal.",
      loto: true,
      steps: [
        "**Gas smell (like rotten eggs): stop now.** Do not flip switches or use your phone near the smell. Leave the area, then call 911 or the gas company from a safe place, and tell your supervisor.",
        "**Burning smell or smoke:** if it is safe, turn the unit off at the thermostat, BAS or disconnect, then leave and call it in. If you see fire or heavy smoke, pull the fire alarm, get out and call 911.",
        "**Squealing:** usually a loose or worn belt. Lock out the unit before you inspect it.",
        "**Grinding or rumbling:** often a bearing or motor wearing out. Report it the same day. It can fail without warning.",
        "**Rattling:** often a loose panel or screw. You may tighten panel screws with the unit off if it is easy and safe.",
        "**Banging pipes or clanking in a boiler:** report it. Do not try to fix it yourself.",
        "**Musty smell:** often a dirty coil, a dirty drain pan or wet duct lining. Report it."
      ],
      stopIf: [
        "Gas smell of any kind",
        "Smoke, sparks or burning smell",
        "Shaking that is getting worse or moving the unit"
      ],
      tip: "When you report a noise, record it on your phone. A 10-second clip saves a senior tech a trip."
    },
    {
      id: "boiler", title: "No heat from the boiler",
      symptom: "Rooms are cold in heating season and the building uses a boiler for heat.",
      loto: false,
      steps: [
        "**Check the BAS.** Is heating turned on? Many buildings block heating when it is warm outside. Check the schedule too.",
        "**Go to the boiler room.** Look at the boiler's display. Is there an alarm or lockout light? Write down the code exactly.",
        "**Check the emergency stop switch.** Many boiler rooms have a red emergency shutoff switch by the door. Make sure it has not been bumped or pressed.",
        "**Check the pumps.** If the pumps are off, heat cannot move through the building even if the boiler is hot.",
        "**Check the gauges** against your normal readings. Low water pressure can stop a boiler. Do not add water unless you have been trained to.",
        "**Lockout reset:** only if your site allows it and someone has shown you how, you may press reset **once**. If it locks out again, stop and call. Repeated resets can be dangerous."
      ],
      stopIf: [
        "You smell gas",
        "The boiler locks out again after one reset",
        "The relief valve is spraying or dripping",
        "Water is leaking from the boiler",
        "Gauges are outside the normal range"
      ],
      tip: "Keep a photo of the boiler display and gauges on a normal day. It makes spotting a problem much easier."
    }
  ],

  safety: {
    warnings: [
      { level: "danger", title: "Gas smell means leave", text: "If you smell rotten eggs, do not use switches, phones or anything that could spark near the smell. Get out, then call 911 or the gas company and your supervisor." },
      { level: "danger", title: "Equipment starts on its own", text: "The BAS, timers and thermostats can start fans and compressors at any moment. Turning a unit off at the thermostat is not safe enough for hands-on work. Use lockout/tagout." },
      { level: "danger", title: "Electricity inside the unit", text: "Units have high voltage inside. Some parts, like capacitors, can still hold a shock after the power is off. Only open electrical compartments if you are trained and authorized." },
      { level: "warn", title: "Roofs and ladders", text: "Stay back from roof edges, hatches and skylights. Skylights are not strong enough to stand on. Follow your site's fall protection rules. On ladders, keep three points of contact." },
      { level: "warn", title: "Hot and cold surfaces", text: "Boilers, steam pipes and flues can burn you. Refrigerant lines can freeze skin. Wear gloves and do not lean on pipes." },
      { level: "warn", title: "Refrigerant in closed rooms", text: "A large refrigerant leak can push oxygen out of a room. If the refrigerant alarm sounds in a chiller room, leave and report it." },
      { level: "warn", title: "Carbon monoxide", text: "Fuel-burning equipment can make carbon monoxide, a gas you cannot see or smell. If a CO alarm sounds, leave and call it in." },
      { level: "warn", title: "Chemicals", text: "Cooling towers and boilers use water treatment chemicals. Read the safety data sheet (SDS) and wear the gloves and eye protection it lists." }
    ],
    loto: {
      intro: "Lockout/tagout (LOTO) means locking the energy off so nobody can start the equipment while you work on it. In the U.S., OSHA's rule 29 CFR 1910.147 requires it. Only do LOTO after your employer has trained you, and always follow your site's written procedure.",
      steps: [
        "**Prepare.** Know every type of energy the equipment has: electricity, gas, water pressure, springs, or parts that can move or fall.",
        "**Notify.** Tell people who use or work near the equipment that you are shutting it down.",
        "**Shut it down** the normal way, with the thermostat, BAS or stop button.",
        "**Isolate it.** Open the disconnect switch, close the valves, and block anything that could move.",
        "**Lock and tag it.** Put your own lock and tag on each shutoff. Your lock, your key. Nobody else holds it.",
        "**Release stored energy.** Let fans stop spinning, bleed off pressure, and let hot parts cool down.",
        "**Verify.** Try to start the equipment to prove it will not run. Then set the controls back to off.",
        "**When you finish,** remove your tools, put guards back, make sure people are clear, tell everyone, and then remove your own lock."
      ]
    }
  },

  glossary: [
    { term: "BAS", match: ["BAS"], def: "Building automation system. The computer that controls and watches the building's equipment. Also called BMS or EMS." },
    { term: "Setpoint", match: ["setpoint", "setpoints"], def: "The temperature (or other value) the system is trying to reach. If the setpoint is 72°F, the system heats or cools to get the room to 72°F." },
    { term: "RTU", match: ["RTU", "RTUs", "rooftop unit"], def: "Rooftop unit. An all-in-one heating and cooling unit that sits on the roof." },
    { term: "AHU", match: ["AHU", "AHUs", "air handler", "air handlers"], def: "Air handling unit. A big fan box with filters and coils that moves air through the ducts." },
    { term: "VAV box", match: ["VAV", "VAV box", "VAV boxes"], def: "Variable air volume box. A box in the ceiling that changes how much air goes into one zone." },
    { term: "Zone", match: ["zone"], def: "An area of the building controlled by one thermostat or sensor." },
    { term: "Damper", match: ["damper", "dampers"], def: "A movable plate inside a duct that opens and closes to control airflow, like a door for air." },
    { term: "Diffuser", match: ["diffuser", "diffusers", "supply diffuser"], def: "The vent in the ceiling or wall where air comes out into the room." },
    { term: "Return grille", match: ["return grille", "return grilles"], def: "The vent where room air goes back to the unit." },
    { term: "Coil", match: ["coil", "coils"], def: "A bundle of thin tubes and metal fins. Air passes through it to be heated or cooled." },
    { term: "Condensate", match: ["condensate"], def: "Water that drips off a cooling coil, like water on the outside of a cold drink. It drains away through a pipe." },
    { term: "Drain pan", match: ["drain pan"], def: "The tray under a cooling coil that catches condensate." },
    { term: "Float switch", match: ["float switch"], def: "A safety switch that shuts the unit off if the drain pan fills with water." },
    { term: "Trap", match: ["trap"], def: "A U-shaped bend in a drain line. It holds a little water so air does not get sucked through the drain." },
    { term: "Refrigerant", match: ["refrigerant"], def: "The special fluid that carries heat in air conditioners and chillers. Handling it requires certification." },
    { term: "Compressor", match: ["compressor", "compressors"], def: "The pump that squeezes refrigerant and moves it through the cooling system. Often called the heart of an AC unit." },
    { term: "Chiller", match: ["chiller", "chillers"], def: "A machine that makes cold water to cool large buildings." },
    { term: "Boiler", match: ["boiler", "boilers"], def: "A machine that heats water or makes steam to heat the building." },
    { term: "Lockout (boiler)", match: ["lockout light", "locks out"], def: "When a boiler shuts itself down after a problem and stays off until someone resets it. This is different from lockout/tagout." },
    { term: "Disconnect", match: ["disconnect switch", "disconnect switches"], def: "A switch next to a piece of equipment that cuts its power so it can be worked on safely." },
    { term: "Lockout/tagout", match: ["lockout/tagout", "LOTO"], def: "The safety process of locking and tagging energy sources off before you work on equipment." },
    { term: "Flue", match: ["flue", "flues"], def: "The exhaust pipe that carries combustion gases from a boiler or furnace to the outside." },
    { term: "Relief valve", match: ["relief valve"], def: "A safety valve that opens to let out water or steam if pressure gets too high." },
    { term: "Occupied mode", match: ["occupied mode"], def: "The schedule setting for when people are in the building. Equipment runs to keep it comfortable." },
    { term: "Ton (of cooling)", match: ["tons of cooling", "ton of cooling"], def: "A size for cooling equipment. One ton removes 12,000 BTUs of heat per hour." },
    { term: "BTU", match: ["BTU", "BTUs"], def: "British thermal unit. A measure of heat energy." },
    { term: "MERV", match: ["MERV"], def: "A rating for how well a filter catches dust. A higher number catches smaller particles." },
    { term: "EPA Section 608", match: ["EPA Section 608", "EPA 608"], def: "The U.S. certification required to buy or work with refrigerant." },
    { term: "SDS", match: ["SDS", "safety data sheet"], def: "Safety data sheet. A document that explains a chemical's dangers and how to protect yourself." }
  ]
};
