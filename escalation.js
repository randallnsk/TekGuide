/* When to stop and call for help. */
window.TG_ESCALATION = {
  universal: [
    { title: "You smell gas", text: "Do not flip switches or use your phone near the smell. Leave, then call 911 or the gas company from a safe place, and tell your supervisor." },
    { title: "Smoke, fire or sparks", text: "Pull the fire alarm, get out and call 911. Do not try to fight anything bigger than a small fire you have been trained to handle." },
    { title: "Someone is hurt", text: "Call 911 first if it is serious. Then tell your supervisor." },
    { title: "Water near electricity", text: "Keep people away and do not touch it. A qualified person needs to shut the power off." },
    { title: "Any alarm you do not understand", text: "Do not silence or reset it to make it stop. Write down what it says and call." },
    { title: "You have not been trained on it", text: "Not knowing is normal when you are new. Guessing is how people get hurt. Stop and ask." },
    { title: "Someone else's lock or tag is on it", text: "Never remove it. Only the person who put it on removes it." },
    { title: "Something is getting worse", text: "Growing leaks, louder noises, rising heat or smoke. Do not wait until the end of your shift to report it." }
  ],
  whoToCall: [
    { who: "911", when: "Fire, smoke, gas smell, someone hurt, anyone in danger." },
    { who: "Senior tech or supervisor", when: "Anything you are unsure about, any equipment down, any alarm." },
    { who: "Licensed contractor", when: "Work that requires a license or certificate, like refrigerant or high-voltage work. Your supervisor arranges this." }
  ],
  whoToCallNote: "Ask your supervisor for the exact numbers for your building and save them in your phone on day one.",
  systems: {
    hvac: [
      "Any gas smell, or a CO or refrigerant alarm",
      "Anything that needs refrigerant added, removed or repaired. In the U.S., this requires EPA Section 608 certification.",
      "A boiler that locks out again after one reset",
      "A breaker that trips a second time",
      "A safety switch that has tripped and you do not know why",
      "Electrical work inside a unit beyond your training",
      "Any chiller alarm",
      "Water leaking from a pipe, not a drain pan",
      "Burning smell, smoke or scorch marks"
    ],
    plumbing: [
      "Several fixtures backing up at once, or sewage coming up through floor drains",
      "A leak you cannot stop with a nearby shutoff valve",
      "Any leak on a fire sprinkler pipe (red pipe)",
      "Water near electrical equipment",
      "A dripping or spraying T&P relief valve, or a leaking water heater tank",
      "Scalding hot water at a tap",
      "A pump pit close to overflowing, or a pump that will not run",
      "Anything that means entering a pit, tank, manhole or other confined space",
      "Strong sewer smell, or feeling dizzy or getting a headache near drains"
    ],
    electrical: [
      "Any work on or near exposed live parts. This is for qualified electricians only.",
      "A breaker that trips again after one reset",
      "Hot, buzzing, sparking or burnt-smelling outlets, switches, panels or equipment",
      "Anything that means removing a panel cover or opening switchgear",
      "Water on or near electrical equipment",
      "A generator that did not start during an outage, or shows an alarm",
      "Someone stuck in an elevator. Call the elevator company, and 911 if anyone is hurt.",
      "A motor that hums but will not turn"
    ],
    fire: [
      "Every fire alarm panel trouble, supervisory or alarm signal",
      "Any sprinkler head that is leaking, damaged or spraying",
      "Any closed or partly closed sprinkler valve",
      "Any request to silence, reset, disconnect or cover part of a fire system",
      "An exit sign or emergency light you cannot get working",
      "A used, damaged or missing fire extinguisher",
      "A fire door that will not close and latch",
      "Kitchen hood suppression system that has gone off or looks damaged"
    ]
  }
};
