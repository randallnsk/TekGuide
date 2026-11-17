/* Plumbing content. Edit the words here; the app builds the pages from this file.
   Tip: wrap words in **double stars** to make them bold. */
window.TG_CONTENT = window.TG_CONTENT || {};
window.TG_CONTENT.plumbing = {
  overview: {
    lead: "Plumbing brings clean water into the building and carries used water and waste out. Two separate pipe systems do these two jobs, and they must never mix.",
    paragraphs: [
      "**Supply side:** clean drinking water (called potable water) comes in from the city under pressure. It passes a main shutoff valve and a backflow preventer, then splits into cold and hot. A water heater makes the hot water.",
      "**Drain side:** used water flows out by gravity, downhill, through drain pipes to the sewer. Vent pipes run up through the roof so the drains flow smoothly and sewer gas goes outside instead of into the building.",
      "Some buildings also have pumps: booster pumps to push water up to high floors, and sump pumps or sewage ejector pumps to lift water out of basements that sit lower than the sewer.",
      "Your main jobs as a new tech: fix clogs and running toilets, catch leaks early, know where the shutoff valves are, and keep an eye on water heaters and pump pits."
    ],
    flowLabel: "How the water moves",
    flow: ["City water", "Main shutoff", "Backflow preventer", "Cold and hot pipes", "Sinks and toilets", "Drains", "Sewer"],
    flowNote: "Clean water arrives under pressure. Dirty water leaves by gravity. The backflow preventer stops dirty water from ever flowing back into the clean side."
  },

  equipment: [
    {
      id: "main", name: "Main water shutoff", tag: "MSV",
      what: "The valve that shuts off water to the whole building. In a big leak, finding it fast matters more than anything else.",
      where: "Usually where the water line enters the building: a basement, a mechanical room, or a closet on the ground floor.",
      check: ["You know exactly where it is", "It has a clear label", "Nothing is stored in front of it", "Know that shutting it off affects the whole building, so get your supervisor's OK first unless it is an emergency"]
    },
    {
      id: "backflow", name: "Backflow preventer", tag: "BFP",
      what: "A set of valves that stops dirty water from flowing backward into the city's clean water. Many are required by law and must be tested by a certified tester, usually once a year.",
      where: "Near the main water entry, and on lines that feed boilers, irrigation, fire sprinklers and chemical equipment.",
      check: ["Not dripping or spraying from the relief port", "Test tag is current", "Area around it can drain if it dumps water"]
    },
    {
      id: "prv", name: "Pressure reducing valve", tag: "PRV",
      what: "Lowers city water pressure to a safe level for the building's pipes and fixtures.",
      where: "Near the main water entry, often with a pressure gauge on each side.",
      check: ["Gauge readings match your normal log", "No leaks", "No banging pipes, which can mean pressure problems"]
    },
    {
      id: "wh", name: "Water heater", tag: "WH",
      what: "Heats water for sinks and showers. Can be gas or electric, a tank, or a tankless unit. Large buildings may have several.",
      where: "Mechanical rooms, janitor closets, or above ceilings for small units.",
      check: ["No water leaking from the tank or fittings", "The T&P relief valve is not dripping", "No alarm or error on the display", "Gas units: flue connected, no gas smell, nothing stored nearby"]
    },
    {
      id: "mix", name: "Mixing valve", tag: "TMV",
      what: "Blends very hot water with cold water so the water at the tap is warm but safe. This lets the water heater run hot enough to control bacteria without scalding people.",
      where: "Near the water heater, or under sinks and in showers.",
      check: ["Thermometer reading matches your normal log", "No leaks"]
    },
    {
      id: "booster", name: "Booster pump", tag: "BP",
      what: "Increases water pressure so water reaches the upper floors of tall buildings.",
      where: "Basement or ground-floor mechanical room.",
      check: ["Running normally, no alarms", "No leaks at the pump seals", "Pressure gauges in the normal range"]
    },
    {
      id: "sump", name: "Sump pump", tag: "SP",
      what: "Pumps rainwater or groundwater out of a pit in the basement floor so the basement does not flood.",
      where: "Pits in basement floors, elevator pits and low mechanical rooms.",
      check: ["Alarm panel shows normal", "Water level in the pit is low", "Float moves freely, nothing caught on it"]
    },
    {
      id: "ejector", name: "Sewage ejector pump", tag: "SE",
      what: "Like a sump pump, but for sewage. It lifts waste from basement restrooms up to the sewer line.",
      where: "A sealed basin in the basement floor, usually with a vent pipe and an alarm panel.",
      check: ["Alarm panel shows normal", "No sewage smell in the room", "Basin lid sealed"]
    },
    {
      id: "flush", name: "Flush valves", tag: "FV",
      what: "The chrome valves on commercial toilets and urinals. Some use a handle, some use a sensor. They are the source of most running toilet calls.",
      where: "On every commercial toilet and urinal.",
      check: ["Not running or leaking", "Sensor units: flush when you step away"]
    },
    {
      id: "grease", name: "Grease interceptor", tag: "GI",
      what: "A tank that catches grease from kitchen drains before it clogs the sewer. Usually pumped out by a service company on a schedule.",
      where: "Under kitchen sinks for small ones, or buried outside with a manhole lid for large ones.",
      check: ["No backups in kitchen drains", "No strong odor", "Pump-out schedule is up to date"]
    },
    {
      id: "drains", name: "Floor and roof drains", tag: "FD",
      what: "Floor drains catch water in restrooms and mechanical rooms. Roof drains carry rainwater off the roof.",
      where: "Restroom and mechanical room floors, and low spots on the roof.",
      check: ["Grates in place and not clogged", "Floor drains not smelly (see sewer smell guide)", "Roof drains clear of leaves and trash"]
    },
    {
      id: "iso", name: "Shutoff valves", tag: "V",
      what: "Smaller valves that shut off water to one area, one fixture or one piece of equipment, so you can make a repair without shutting down the whole building.",
      where: "Under sinks, behind access panels, above ceilings and on branch pipes.",
      check: ["Labeled where possible", "Not leaking at the stem"]
    }
  ],

  guides: [
    {
      id: "clog", title: "Clogged toilet or urinal",
      symptom: "Water rises in the bowl or drains very slowly.",
      loto: false,
      steps: [
        "**Stop more water.** Do not flush again. If the bowl is close to overflowing, close the control stop on the flush valve.",
        "**Put on gloves and eye protection.** Sewage carries germs.",
        "**Use a flange plunger** (the kind with a rubber sleeve on the bottom). Make a good seal and push and pull firmly 10 to 15 times.",
        "**If the plunger does not work, use a closet auger.** Feed it in gently and crank to break up or pull back the clog. A closet auger has a guard that protects the porcelain.",
        "**Do not use chemical drain cleaners.** They can splash and burn you, damage pipes, and make the next repair dangerous for whoever does it.",
        "**Check nearby fixtures.** If several toilets, floor drains or sinks are backing up at the same time, the problem is the main drain line, not the toilet.",
        "**Clean and disinfect** the area. Wash your hands well."
      ],
      stopIf: [
        "Several fixtures are backing up at once (main line problem)",
        "Sewage is coming up through floor drains",
        "The auger is stuck or the clog will not clear"
      ],
      tip: "Kids' toys, phones and paper towels cause many urinal and toilet clogs. If the auger hits something hard, the toilet may need to be pulled."
    },
    {
      id: "running", title: "Toilet or urinal keeps running",
      symptom: "Water flows nonstop into the bowl, or the fixture flushes over and over.",
      loto: false,
      steps: [
        "**Find out which type it is.** Handle or sensor?",
        "**Sensor type:** press the small override button if it has one. Check the batteries. Wipe the sensor eye clean. Some sensors flush repeatedly when the eye is dirty or blocked.",
        "**Shut off the water at the control stop.** It is the small valve on the side of the flush valve, usually with a slotted screw. Count the turns as you close it so you can set it back the same way.",
        "**Open the top cover** of the flush valve. Inside is a rubber diaphragm.",
        "**Look at the diaphragm.** A small hole in it (the bypass) can clog with grit, or the rubber can wear out. Rinse it clean or replace it with the matching repair kit.",
        "**Put it back together,** open the control stop the same number of turns, and test-flush a few times.",
        "**Adjust the control stop** if needed so the bowl clears without splashing."
      ],
      stopIf: [
        "The control stop will not close or is leaking",
        "You do not have the right repair kit for that brand",
        "Water is leaking from the wall or floor"
      ],
      tip: "Flush valve repair kits are brand-specific. Take a photo of the brand name and model before you go to the parts room."
    },
    {
      id: "pipe-leak", title: "Leaking pipe or valve",
      symptom: "Water dripping or spraying from a pipe, valve or fitting.",
      loto: false,
      steps: [
        "**Protect people and property.** Bucket, towels, wet floor sign. Move computers and papers.",
        "**If water is near lights, outlets or electrical equipment,** keep people away and do not touch it. Call your supervisor.",
        "**Find the closest shutoff valve** upstream of the leak and close it. Close it slowly to avoid banging pipes.",
        "**Old valves can break.** If a valve is stiff, do not force it with a long wrench. Go to the next valve up the line.",
        "**If you cannot find a closer valve,** call your supervisor before closing the main shutoff. It affects the whole building. In a true emergency, close it and then call.",
        "**Never close valves on red pipes.** Red pipes are usually fire sprinkler lines. See the fire section.",
        "**Report** what you shut off, where, and when. Tag the closed valve so nobody opens it by mistake."
      ],
      stopIf: [
        "The leak is from a fire sprinkler pipe",
        "The leak is large and you cannot stop it with a nearby valve",
        "Water is near electrical equipment",
        "The pipe is hot water or steam and you could get burned"
      ],
      tip: "Walk the building on your first week and photograph every shutoff valve. You will be glad you did during your first big leak."
    },
    {
      id: "hot-water", title: "No hot water or water too hot",
      symptom: "Taps run cold, or water comes out hot enough to hurt.",
      loto: true,
      steps: [
        "**Check if it is one sink or the whole area.** One sink usually means a problem with that faucet or its mixing valve.",
        "**Go to the water heater.** Look for an error code or alarm on the display and write it down.",
        "**Electric heater:** check its breaker. If it is tripped, the rules in the electrical section apply: reset once at most.",
        "**Gas heater:** check that the gas valve is open and the unit is not in lockout. If you smell gas, leave and call.",
        "**Check the mixing valve thermometer** if there is one.",
        "**Do not change the temperature setting on your own.** Water heaters are often set hot on purpose to control bacteria like Legionella, with a mixing valve to make the tap water safe.",
        "**Water too hot at the tap is urgent.** Hot water can scald skin in seconds. Put up a sign, tell your supervisor, and keep people from using that fixture."
      ],
      stopIf: [
        "The T&P relief valve is dripping or spraying",
        "The tank is leaking",
        "You smell gas",
        "Water at the tap is scalding hot"
      ],
      tip: "A dripping T&P relief valve is a warning that pressure or temperature is too high. Never cap or plug it."
    },
    {
      id: "drain-smell", title: "Slow drain or sewer smell",
      symptom: "A sink or floor drain drains slowly, or a room smells like sewage.",
      loto: false,
      steps: [
        "**Smell first.** A sewer smell from a floor drain is usually a dry trap. The water in the trap has evaporated and sewer gas is coming up.",
        "**Pour a bucket of water into each floor drain** in the area. This refills the trap and often fixes the smell right away.",
        "**For a slow sink,** clean the drain stopper and strainer first. Hair and grit build up there.",
        "**Still slow?** Put a bucket under the P-trap, put on gloves, and take the trap apart to clean it out. Put it back with the washers in the same order.",
        "**Run water** for a minute and check for leaks under the sink.",
        "**If the smell is strong in a closed room,** open doors, leave, and report it. Sewer gas can contain hydrogen sulfide, which is poisonous in high amounts."
      ],
      stopIf: [
        "The smell is strong, or you feel dizzy or get a headache",
        "Several drains are slow at the same time",
        "The smell comes from a wall or ceiling, which can mean a broken vent or drain pipe"
      ],
      tip: "Add floor drains in rarely used rooms to your weekly rounds. A bucket of water every week or two keeps the traps full."
    },
    {
      id: "pump-alarm", title: "Sump or sewage pump alarm",
      symptom: "A high-water alarm is sounding, or a pump pit is filling up.",
      loto: true,
      steps: [
        "**Silence the alarm horn** if there is a silence button. This does not fix anything. Keep going.",
        "**Look at the water level** without leaning into the pit. Is it close to the top?",
        "**Check the pump's breaker** and the alarm panel for lights or messages.",
        "**Look for a stuck float.** Debris, a cord or a rag can hold the float down. Do not reach into the pit. A float can be freed with a hook or pole only if your site allows it and the pump is locked out.",
        "**Listen for the pump.** Humming without moving water can mean a jammed or failed pump.",
        "**Sewage ejector pits:** keep the lid on. Sewage carries germs and gas."
      ],
      stopIf: [
        "Water or sewage is near the top of the pit",
        "The pump will not run or trips its breaker",
        "Fixing it means entering or reaching into a pit. Pits can be confined spaces and need special training and permits."
      ],
      tip: "If the pump is down and water is rising, ask your supervisor about stopping water use in that area until it is fixed."
    }
  ],

  safety: {
    warnings: [
      { level: "danger", title: "Water and electricity", text: "Water near lights, outlets, panels or equipment can shock or kill. Keep people away and get the power shut off by a qualified person before cleaning up." },
      { level: "danger", title: "Pits, tanks and manholes", text: "Sump pits, sewage basins, grease interceptors and manholes can have poisonous gas or too little oxygen. They are often permit-required confined spaces under OSHA rules. Never enter or put your head inside one." },
      { level: "danger", title: "Scalding water", text: "Water from the heater side of the system can be hot enough to burn skin in seconds. Let pipes cool and drain pressure before opening them." },
      { level: "warn", title: "Sewage germs", text: "Wear gloves and eye protection for any drain work. Wash your hands well before eating, drinking or touching your face." },
      { level: "warn", title: "Gas water heaters", text: "Gas water heaters can leak gas or make carbon monoxide. If you smell rotten eggs or a CO alarm sounds, leave and call." },
      { level: "warn", title: "Drain chemicals", text: "Do not use chemical drain cleaners. They can burn skin and eyes and splash back. Always tell the next person if chemicals were used." },
      { level: "warn", title: "Clean water stays clean", text: "Never stick a hose into a bucket, drain or chemical tank. If the water pressure drops, dirty water can be sucked back into the drinking water." },
      { level: "warn", title: "Heavy lifting", text: "Toilets, water heaters and pumps are heavy and awkward. Get help, and lift with your legs." }
    ],
    loto: {
      intro: "Lockout/tagout (LOTO) is not just for electricity. Water under pressure, hot water and pumps that start on their own all count. Only do LOTO after your employer has trained you, and follow your site's written procedure.",
      steps: [
        "**Prepare.** List every energy source: electric power to pumps or heaters, gas, and water pressure.",
        "**Notify** the people who use the area that water or hot water will be off.",
        "**Shut it down** the normal way.",
        "**Isolate it.** Close the water valves on both sides, turn off gas, and switch off the power to pumps or electric heaters.",
        "**Lock and tag** each valve handle and disconnect with your own lock and tag.",
        "**Relieve pressure and heat.** Open a faucet or drain valve to let pressure out. Let hot water cool down.",
        "**Verify.** Make sure no water flows and the pump cannot start.",
        "**When you finish,** remove tools, close drains, tell everyone, remove your lock, then open valves slowly and check for leaks."
      ]
    }
  },

  glossary: [
    { term: "Potable water", match: ["potable water", "potable"], def: "Water that is safe to drink." },
    { term: "Backflow", match: ["backflow"], def: "When dirty water flows backward into the clean water supply. Backflow preventers stop it." },
    { term: "Cross-connection", match: ["cross-connection"], def: "Any place where clean water pipes could connect to something dirty, like a hose in a bucket of chemicals." },
    { term: "PRV", match: ["PRV", "pressure reducing valve"], def: "Pressure reducing valve. Lowers incoming water pressure to a safe level." },
    { term: "PSI", match: ["PSI"], def: "Pounds per square inch. The unit used to measure water pressure." },
    { term: "T&P relief valve", match: ["T&P relief valve", "T&P"], def: "Temperature and pressure relief valve. A safety valve on a water heater that opens if the water gets too hot or the pressure too high. Never plug it." },
    { term: "Mixing valve", match: ["mixing valve", "mixing valves"], def: "A valve that blends hot and cold water to a safe temperature." },
    { term: "Legionella", match: ["Legionella"], def: "Bacteria that can grow in warm water and make people very sick if they breathe in the mist." },
    { term: "Flush valve", match: ["flush valve", "flush valves"], def: "The chrome valve on a commercial toilet or urinal that releases water to flush. Also called a flushometer." },
    { term: "Control stop", match: ["control stop"], def: "The small shutoff valve on the side of a flush valve." },
    { term: "Diaphragm", match: ["diaphragm"], def: "A rubber disc inside a flush valve that controls the flush. The most common repair part." },
    { term: "P-trap", match: ["P-trap", "P-traps", "dry trap"], def: "A U-shaped bend in a drain pipe. It holds water so sewer gas cannot come up into the room." },
    { term: "Vent pipe", match: ["vent pipe", "vent pipes"], def: "A pipe that runs up through the roof and lets air into the drains so they flow well and sewer gas goes outside." },
    { term: "Cleanout", match: ["cleanout", "cleanouts"], def: "A capped opening in a drain line where a drain snake can be put in to clear a clog." },
    { term: "Closet auger", match: ["closet auger"], def: "A short hand-cranked snake made for clearing toilets without scratching the bowl." },
    { term: "Sump pump", match: ["sump pump", "sump pumps"], def: "A pump that removes rainwater or groundwater from a pit in a basement floor." },
    { term: "Sewage ejector", match: ["sewage ejector", "ejector"], def: "A pump that lifts sewage from basement restrooms up to the sewer line." },
    { term: "Float", match: ["float"], def: "A floating switch in a tank or pit that turns a pump on and off as the water rises and falls." },
    { term: "Grease interceptor", match: ["grease interceptor", "grease interceptors"], def: "A tank that traps kitchen grease before it reaches the sewer." },
    { term: "Water hammer", match: ["water hammer", "banging pipes"], def: "A loud bang in the pipes when water stops suddenly, often after a valve closes fast." },
    { term: "Booster pump", match: ["booster pump", "booster pumps"], def: "A pump that raises water pressure for upper floors." },
    { term: "Confined space", match: ["confined space", "confined spaces"], def: "A space like a pit, tank or manhole that is big enough to enter but not meant for people to work in. It can have dangerous air. Entering needs special training and often a permit." }
  ]
};
