/* Fire & life safety content. Edit the words here; the app builds the pages from this file.
   Tip: wrap words in **double stars** to make them bold. */
window.TG_CONTENT = window.TG_CONTENT || {};
window.TG_CONTENT.fire = {
  overview: {
    lead: "Fire and life safety systems protect people's lives. Your job here is mostly to look, log and call. Most repairs on these systems must be done by licensed or certified contractors.",
    paragraphs: [
      "**Detect:** smoke detectors, heat detectors, pull stations and sprinkler flow switches sense a fire and report it to the **fire alarm control panel**.",
      "**Warn:** the panel sounds horns and flashes strobe lights so people get out. It usually calls a monitoring company, which calls the fire department.",
      "**Control:** sprinklers spray water on the fire. Fire doors close to stop smoke and fire from spreading. Fans may shut down or switch to clear smoke.",
      "**Escape:** exit signs, emergency lights and clear exit paths help people get out, even in the dark.",
      "Rules for these systems come from fire codes and the local fire department (called the AHJ). Never turn off, cover, block or bypass any part of a fire system unless your supervisor has started the proper procedure."
    ],
    flowLabel: "What happens in a fire",
    flow: ["Smoke or heat", "Detector or sprinkler", "Fire alarm panel", "Horns and strobes", "Monitoring company", "Fire department"],
    flowNote: "A single sprinkler head opens only where it gets hot. Sprinklers do not all go off at once like in the movies."
  },

  equipment: [
    {
      id: "facp", name: "Fire alarm control panel", tag: "FACP",
      what: "The brain of the fire alarm system. It watches every detector and device and shows one of four states: normal, alarm, supervisory or trouble.",
      where: "Fire command room, lobby, security desk or main electrical room. A smaller display called an annunciator may be at the front entrance.",
      check: ["Shows normal, with only the green power light on", "No alarm, supervisory or trouble lights", "Write down any message exactly as shown", "Do not press buttons unless trained and authorized"]
    },
    {
      id: "detectors", name: "Smoke and heat detectors", tag: "SD",
      what: "Sensors on ceilings that report smoke or heat to the panel. Duct detectors sit in air ducts and can shut down fans.",
      where: "Ceilings throughout the building, elevator lobbies, mechanical rooms and inside air ducts.",
      check: ["Not covered, painted or damaged", "Covers removed after any dusty work"]
    },
    {
      id: "pull", name: "Pull stations", tag: "PS",
      what: "Manual handles people pull to set off the fire alarm.",
      where: "Near exits and stairways.",
      check: ["Not blocked or damaged", "Clear signage"]
    },
    {
      id: "notify", name: "Horns and strobes", tag: "H/S",
      what: "The loud horns, speakers and flashing lights that warn people to leave.",
      where: "Walls and ceilings throughout the building, including restrooms.",
      check: ["Not damaged, covered or blocked"]
    },
    {
      id: "heads", name: "Sprinkler heads", tag: "SPK",
      what: "Small nozzles on pipes in the ceiling. Each one has a glass bulb or metal link that breaks from heat, letting water spray out over that spot.",
      where: "Ceilings throughout most commercial buildings.",
      check: ["Not painted, damaged, leaking or covered", "Nothing hanging from heads or sprinkler pipes", "At least 18 inches of clear space below the heads in storage areas"]
    },
    {
      id: "riser", name: "Sprinkler riser and control valves", tag: "RISER",
      what: "The main vertical pipe that feeds the sprinklers, with the control valves, gauges, a flow switch and a test drain. Control valves must stay open.",
      where: "A riser room or closet, often on the ground floor. Floor control valves may be in stairwells.",
      check: ["Control valves open and sealed or locked", "Gauges show normal pressure", "No leaks", "Room and valves clear of storage"]
    },
    {
      id: "dry", name: "Dry-pipe system", tag: "DRY",
      what: "A sprinkler system filled with air instead of water, used where pipes could freeze, like parking garages and loading docks. Water only enters when a head opens.",
      where: "Unheated areas. The dry valve and the small air pump that keeps the pipes filled with air are in a heated room nearby.",
      check: ["Air pressure gauge in the normal range", "Air pump working", "Room heated in winter"]
    },
    {
      id: "fdc", name: "Fire department connection", tag: "FDC",
      what: "Hose connections on the outside of the building where the fire department pumps extra water into the sprinklers or standpipes.",
      where: "Outside wall, usually near the street or fire lane.",
      check: ["Caps in place", "Not blocked by plants, snow, cars or dumpsters", "Clear sign"]
    },
    {
      id: "pump", name: "Fire pump", tag: "FP",
      what: "A pump that boosts water pressure to the sprinklers and standpipes in tall or large buildings. It is usually tested weekly or monthly by a contractor.",
      where: "Fire pump room, usually on the ground floor or basement.",
      check: ["Controller shows normal, no alarms", "Room heated and clear", "Do not change controller settings"]
    },
    {
      id: "ext", name: "Fire extinguishers", tag: "EXT",
      what: "Portable tanks for putting out small fires. The label shows which fires each one is for. Kitchens use special Class K extinguishers.",
      where: "Hallways, near exits, kitchens, mechanical and electrical rooms.",
      check: ["In its place and easy to see", "Gauge needle in the green", "Pin and tamper seal in place", "No damage or rust", "Monthly check tag initialed"]
    },
    {
      id: "exit", name: "Exit signs and emergency lights", tag: "EM",
      what: "Lighted signs that show the way out, and lights that turn on by battery or generator when the power fails.",
      where: "Exits, hallways, stairwells and large rooms.",
      check: ["Exit signs lit and readable", "Press the test button: the emergency light comes on", "Not blocked by signs or decorations"]
    },
    {
      id: "doors", name: "Fire doors", tag: "FD",
      what: "Heavy doors that slow fire and smoke. They must close and latch by themselves. Some are held open by magnets that release when the alarm goes off.",
      where: "Stairwells, corridors and around mechanical and electrical rooms.",
      check: ["Closes and latches by itself", "Not propped open with wedges or blocks", "Label on the edge not painted over"]
    },
    {
      id: "hood", name: "Kitchen hood suppression", tag: "KS",
      what: "A system above cooking equipment that sprays chemicals and shuts off the gas or power if a fire starts on the stove or fryer.",
      where: "Commercial kitchens, above the cooking line.",
      check: ["Pull handle not blocked", "Nozzle caps in place", "Inspection tag current"]
    }
  ],

  guides: [
    {
      id: "trouble", title: "Fire alarm panel shows trouble",
      symptom: "The panel is beeping and a yellow trouble light is on.",
      loto: false,
      steps: [
        "**Read the display.** Write down the exact message, device and location. Take a photo.",
        "**Understand what trouble means.** The system found a problem with itself, like a cut wire, a dead battery or a disconnected device. It may not detect a fire in that area.",
        "**Silence the buzzer** only if your site allows it. This stops the beeping but does not fix the problem.",
        "**Look for an obvious cause.** Was someone working near that device? Was the power just out? Did a contractor disconnect something?",
        "**Call your supervisor or the fire alarm contractor** and give them the exact message.",
        "**Log it:** date, time, message, who you called and what they said.",
        "**Do not reset** the panel or disconnect anything to make the trouble go away."
      ],
      stopIf: [
        "Always. Repairs go to the fire alarm contractor.",
        "Many troubles at once, or the panel says it is on battery power"
      ],
      tip: "Learn your panel's normal screen on day one. Then any change jumps out at you."
    },
    {
      id: "alarm", title: "Fire alarm goes off",
      symptom: "Horns are sounding and strobes are flashing.",
      loto: false,
      steps: [
        "**Treat every alarm as real.** Never assume it is false.",
        "**Follow your building's emergency plan.** Your role may be to evacuate, to help others out, or to go to the panel. Know your role before your first alarm.",
        "**If your role is the panel:** read the location of the device in alarm. Do not go into smoke to check it.",
        "**Meet the fire department** at the entrance with keys and the location from the panel.",
        "**Do not silence or reset the alarm** until the fire department or your supervisor says it is OK.",
        "**After the event,** write down what device went off and why, if known. Report devices set off by dust, steam or cooking so they can be looked at."
      ],
      stopIf: [
        "You see fire or smoke: get out and call 911",
        "Anyone asks you to reset before the fire department clears the building"
      ],
      tip: "Contractors doing dusty or hot work can set off detectors. Hot work like welding usually needs a permit from your supervisor first."
    },
    {
      id: "supervisory", title: "Supervisory signal",
      symptom: "The panel shows a supervisory light, often about a sprinkler valve or air pressure.",
      loto: false,
      steps: [
        "**Read the display** and write down the device and location.",
        "**Know what it means.** A supervisory signal says part of the fire protection system is not ready. Common causes: a sprinkler valve was partly closed, low air pressure on a dry system, or a fire pump problem.",
        "**Ask if anyone is working** on the sprinkler system. A contractor may have closed a valve on purpose.",
        "**Look, but do not touch.** Check that the valve is open and the gauges look normal. Never open or close sprinkler valves on your own.",
        "**Call your supervisor** right away. If a valve is closed, part of the building may have no sprinkler protection."
      ],
      stopIf: [
        "Always. Your supervisor decides what happens next."
      ],
      tip: "A closed sprinkler valve is one of the most common reasons sprinklers fail in a real fire. Supervisory signals matter."
    },
    {
      id: "head", title: "Sprinkler head leaking or broken",
      symptom: "A head is dripping, damaged, or spraying water.",
      loto: false,
      steps: [
        "**If it is spraying, check for fire.** If there is any chance of fire, pull the alarm, get out and call 911. Do not close any valve.",
        "**If it was broken by accident** (hit by a ladder or cart), call your supervisor immediately. Water flow from a sprinkler is heavy and will set off the fire alarm.",
        "**Protect people and property.** Keep people away, move electronics, and watch for water near electrical equipment.",
        "**Only a trained, authorized person closes a sprinkler control valve.** Closing it means that area has no sprinkler protection. Your supervisor follows the impairment procedure, which may include a fire watch.",
        "**A dripping head:** put a bucket under it, take a photo and report it. Do not tighten, paint or cover it.",
        "**Replacement** is done by a sprinkler contractor with the matching head from the spare head cabinet."
      ],
      stopIf: [
        "Always. Sprinkler repairs go to a licensed contractor."
      ],
      tip: "Learn where the riser room and floor control valves are, so you can lead your supervisor or the fire department there fast."
    },
    {
      id: "emlight", title: "Exit sign or emergency light not working",
      symptom: "An exit sign is dark, or an emergency light does not come on when tested.",
      loto: true,
      steps: [
        "**Press the test button** on the unit, if it has one. Watch whether the light comes on.",
        "**Check the indicator light.** Many units have a small light showing they are charged and ready.",
        "**Check the breaker** for that circuit. Emergency and exit circuits are often in a separate panel.",
        "**Replace the battery or lamp** only if you have been trained. Turn power off at the breaker and lock it out first.",
        "**After a repair,** test it again and log it.",
        "**Report it the same day.** A dark exit sign is a code violation and a safety problem."
      ],
      stopIf: [
        "The unit still fails after a new battery",
        "Several units on the same circuit are out",
        "The unit is fed from the generator and you are not trained on that system"
      ],
      tip: "Emergency lights are commonly tested monthly for 30 seconds and yearly for 90 minutes. Ask if your site keeps a test log."
    },
    {
      id: "extinguisher", title: "Monthly fire extinguisher check",
      symptom: "Your route includes extinguisher checks, or one has been used or is missing.",
      loto: false,
      steps: [
        "**Is it there?** In its marked spot, easy to see and reach.",
        "**Check the gauge.** The needle should be in the green.",
        "**Check the pin and seal.** The pull pin and plastic tamper seal should be in place.",
        "**Look it over.** No dents, rust, cracked hose or damaged label.",
        "**Initial the tag** with the date, if that is your site's practice.",
        "**Used even a little?** It must be recharged or replaced. A partly used extinguisher may not work next time. Take it out of service and report it.",
        "**Missing?** Report it right away and get a temporary replacement."
      ],
      stopIf: [
        "The gauge is out of the green",
        "The pin or seal is missing",
        "It is damaged, or the yearly service tag is out of date"
      ],
      tip: "Know the PASS method: Pull the pin, Aim at the base of the fire, Squeeze the handle, Sweep side to side. Only fight a small fire if you are trained and have a clear way out."
    }
  ],

  safety: {
    warnings: [
      { level: "danger", title: "Never bypass a fire system", text: "Do not turn off, silence, cover, disconnect or reset any part of a fire system on your own. A disabled system can mean people die in a fire." },
      { level: "danger", title: "Every alarm is real", text: "Follow your building's emergency plan every time. Do not go into smoke. Get out and let the fire department handle it." },
      { level: "danger", title: "Exits stay clear", text: "Never block, lock or store anything in exits, stairwells or exit paths. Never chain or lock an exit door." },
      { level: "warn", title: "Fire doors close", text: "Never prop open a fire door with wedges, chairs or boxes. Report doors that do not close and latch by themselves." },
      { level: "warn", title: "Keep sprinklers clear", text: "Do not hang anything from sprinkler heads or pipes, and do not paint heads. Keep storage at least 18 inches below sprinkler heads." },
      { level: "warn", title: "Dust and hot work", text: "Dusty work, welding or cutting can set off detectors or start fires. Hot work needs a permit. Detector covers must come off at the end of each day." },
      { level: "warn", title: "Keep equipment reachable", text: "Keep fire extinguishers, pull stations, alarm panels, riser valves and fire department connections clear and easy to see." },
      { level: "warn", title: "Licensed work", text: "Most fire alarm and sprinkler work requires a license or certificate. Rules vary by state and city. When in doubt, it goes to the contractor." }
    ],
    loto: {
      label: "Fire system out of service",
      title: "Impairments",
      intro: "When any part of a fire system is shut down or not working, it is called an impairment. Do not lock out fire systems the way you would other equipment. Your supervisor follows a written impairment procedure. Here is what usually happens, so you know your part.",
      steps: [
        "**Report it.** Tell your supervisor right away about any shut valve, trouble or supervisory signal, or system that is not working.",
        "**Plan it.** Your supervisor decides how long it will be out and what areas are affected.",
        "**Notify.** The fire department, monitoring company, insurance company and building occupants may need to be told, depending on local rules.",
        "**Tag it.** An impairment tag is placed on the valve or panel so everyone knows the system is out.",
        "**Fire watch.** If the system will be out for a while, someone may walk the affected area on a schedule watching for fire. You may be asked to do this.",
        "**Fix it fast.** The contractor repairs it as quickly as possible.",
        "**Restore and test.** The system is turned back on, tested, and everyone who was notified is told it is back in service."
      ]
    }
  },

  glossary: [
    { term: "FACP", match: ["FACP", "fire alarm control panel"], def: "Fire alarm control panel. The brain of the fire alarm system." },
    { term: "Annunciator", match: ["annunciator"], def: "A smaller display, often at the front entrance, that shows the same information as the fire alarm panel." },
    { term: "Alarm signal", match: ["alarm signal"], def: "The panel has detected a possible fire. Horns and strobes go off." },
    { term: "Supervisory signal", match: ["supervisory signal", "supervisory"], def: "Part of the fire protection system is not ready, like a closed sprinkler valve or low air pressure." },
    { term: "Trouble signal", match: ["trouble signal"], def: "The fire alarm system found a problem with itself, like a broken wire or dead battery." },
    { term: "Pull station", match: ["pull station", "pull stations"], def: "A handle on the wall that people pull to set off the fire alarm." },
    { term: "Duct detector", match: ["duct detector", "duct detectors"], def: "A smoke detector inside an air duct that can shut down fans to stop smoke from spreading." },
    { term: "Sprinkler head", match: ["sprinkler head", "sprinkler heads"], def: "A nozzle that opens from heat and sprays water on a fire." },
    { term: "Riser", match: ["riser", "riser room"], def: "The main vertical sprinkler pipe with the control valves, gauges and alarm devices." },
    { term: "Control valve", match: ["control valve", "control valves"], def: "A valve that turns water on or off to the sprinklers. It must stay open." },
    { term: "Tamper switch", match: ["tamper switch"], def: "A switch on a sprinkler valve that sends a supervisory signal if the valve is closed." },
    { term: "Flow switch", match: ["flow switch", "flow switches"], def: "A switch in a sprinkler pipe that sets off the alarm when water starts flowing." },
    { term: "Wet-pipe system", match: ["wet-pipe"], def: "A sprinkler system with water in the pipes all the time. The most common kind." },
    { term: "Dry-pipe system", match: ["dry-pipe", "dry system"], def: "A sprinkler system filled with air, used where pipes could freeze." },
    { term: "FDC", match: ["FDC", "fire department connection", "fire department connections"], def: "Fire department connection. Where firefighters pump water into the building's sprinkler system." },
    { term: "Standpipe", match: ["standpipe", "standpipes"], def: "A pipe in stairwells with hose connections for firefighters." },
    { term: "Fire pump", match: ["fire pump"], def: "A pump that boosts water pressure for sprinklers and standpipes." },
    { term: "Impairment", match: ["impairment", "impairments"], def: "Any time part of a fire system is shut off or not working." },
    { term: "Fire watch", match: ["fire watch"], def: "A person who walks an area on a schedule watching for fire while a fire system is out of service." },
    { term: "Fire door", match: ["fire door", "fire doors"], def: "A door built to slow fire and smoke. It must close and latch by itself." },
    { term: "Hot work", match: ["hot work"], def: "Work that makes sparks or flames, like welding, cutting or grinding. Usually needs a permit." },
    { term: "PASS method", match: ["PASS method"], def: "How to use a fire extinguisher: Pull, Aim, Squeeze, Sweep." },
    { term: "AHJ", match: ["AHJ"], def: "Authority having jurisdiction. The local fire department or official who enforces fire codes for your building." },
    { term: "NFPA", match: ["NFPA"], def: "National Fire Protection Association. Writes the fire and electrical safety standards used across the U.S." }
  ]
};
