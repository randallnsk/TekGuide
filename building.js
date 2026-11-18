/* Your building: photos and exact manuals for the units your techs actually work on.
   This repository is public. Do NOT add addresses, phone numbers, staff names, door codes,
   or photos that show the building's location.
   Keys are "system/equipment-id" (see drawings.js for the full list). */
window.TG_BUILDING = {
  photos: {
    "hvac/rtu": [
      { src: "photos/hvac-rtu-york.jpg", caption: "YORK packaged rooftop unit. Condenser coils sit in V shapes behind the wire guards. The access doors on the right open into the air side of the unit." }
    ]
  },
  /* Code flowcharts for your units. Written in plain words from the maker's manual.
     Never paste the maker's tables here: they are copyrighted. */
  codeGuides: {
    "hvac/rtu": [
      {
        title: "YORK YPAL controller codes",
        source: "Based on the YORK YPAL 70 to 105 Ton Mod G IOM manual, pages 216 to 220 (warnings, auto resets and lockouts). Look up your exact code there. The manual is the final word.",
        start: "The unit display shows a code. Write it down exactly, word and number, and take a photo.",
        question: "What does the code start with?",
        branches: [
          { key: "wrn", code: "WRN-", name: "Warning",
            means: "Something is out of range, usually a sensor, damper or fan. The unit usually keeps running, sometimes at lower capacity.",
            steps: ["Report it today.", "Look for easy causes, like a stuck damper or a loose sensor wire. Look only. Do not open electrical panels."],
            watch: "WRN-FREEZESTAT TRIP: if it does not clear within 5 minutes, it becomes a hot water heating lockout. Call now." },
          { key: "auto", code: "AUTO RESET-", name: "Auto reset",
            means: "The controller stopped part of the unit. It restarts on its own once the problem clears.",
            steps: ["Do not reset anything. Let it recover.", "Check back and note whether it came back on."],
            watch: "TRIP 1 and TRIP 2 count compressor safety trips. A 3rd trip within 2 hours, or no reset within 60 minutes, becomes a LOCKOUT. POWER FAIL means the unit lost power while running." },
          { key: "lock", code: "LOCKOUT-", name: "Lockout",
            means: "Part or all of the unit is shut down and stays off until someone resets it.",
            steps: ["Do not reset it. Call a senior tech.", "Give them the exact code and what you saw, heard and smelled."],
            watch: "LOCKOUT-MANUAL STOP means the unit was stopped: the unit switch is off, the BAS sent a stop, or the phase monitor tripped. Ask before turning anything back on." }
        ],
        end: "Log it in the work order: the code, the time, what you checked and who you called.",
        rules: ["Never jumper or bypass a safety.", "Never reset a lockout without a senior tech.", "Never clear codes just to make them go away."]
      }
    ]
  },
  manuals: {
    "hvac/rtu": [
      { title: "YORK YPAL 70 to 105 Ton Single Packaged Rooftop Units, Mod G: Installation, Operation and Maintenance Manual", note: "Pages 216 to 220 list the warning and fault codes the unit's controller shows. Get it from YORK's professional resources or the RTU Toolkit (scan the QR code on the unit).", url: "https://www.york.com/commercial-equipment/professionals" },
      { title: "YORK YPAL Series 100 Single Package, 120 to 150 Tons: Engineering Guide (Form 100.50-EG11)", note: "Physical data, wiring and general arrangement drawings. Get it from YORK's professional resources.", url: "https://www.york.com/commercial-equipment/professionals" }
    ]
  }
};
