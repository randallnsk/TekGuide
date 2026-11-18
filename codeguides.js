/* "Display shows a problem" flowcharts for equipment with alarm displays.
   General guidance that works for any brand. Brand-specific code charts live in building.js.
   Branch keys set the color: "lock" = red (stop), "wrn" = yellow (caution), "auto" = blue (watch). */
(function () {
  var ALWAYS = "Never jumper or bypass a safety.";
  var LOG = "Log it in the work order: what the display said, the time, what you checked and who you called.";
  var SRC = "General guidance for any brand. The unit's manual explains its exact codes.";

  var sumpChart = {
    title: "Pump alarm flowchart",
    start: "The pump alarm is sounding or its light is on. Silence the horn if there is a silence button. That does not fix anything.",
    question: "What is the water doing?",
    branches: [
      { key: "lock", code: "RISING", name: "Water is rising",
        means: "The pump is not keeping up or is not running at all.",
        steps: ["Check the pump's breaker. Reset it once at most.", "Listen for the pump. Humming with no water moving means it is jammed or failed.", "Call now. For a sewage pump, ask about stopping water use in that area."],
        watch: "Never reach into the pit. Pits can have bad air and need confined space training." },
      { key: "wrn", code: "LOW", name: "Alarm but water is low",
        means: "The alarm float may be stuck or tilted, or the alarm itself has a problem.",
        steps: ["Look for debris or a cord holding a float. Look only.", "Report it today."] },
      { key: "auto", code: "NONSTOP", name: "Pump never shuts off",
        means: "A stuck float or a failed check valve can make the pump run without stopping. That wears it out fast.",
        steps: ["Report it today.", "Note if you hear water rushing back into the pit after the pump stops."] }
    ],
    end: LOG,
    rules: [ALWAYS, "Never put your hands or head into a pump pit."],
    source: SRC
  };

  window.TG_CODEGUIDES = {
    "hvac/boiler": [{
      title: "Boiler alarm flowchart",
      start: "The boiler display shows an alarm, an error code or a lockout light. Write it down exactly and take a photo.",
      question: "What do you see?",
      branches: [
        { key: "lock", code: "GAS / CO", name: "Gas smell or CO alarm",
          means: "Danger to people. This comes before anything on the display.",
          steps: ["Leave. Do not use switches or your phone near the smell.", "Call 911 or the gas company from a safe place, then your supervisor."] },
        { key: "lock", code: "LOCKOUT", name: "Boiler is locked out",
          means: "The boiler shut itself down and stays off until someone resets it.",
          steps: ["Reset once only if your site allows it and you were shown how.", "If it locks out again, stop and call. Repeated resets can be dangerous."] },
        { key: "wrn", code: "ALARM", name: "Alarm, still running",
          means: "Something is out of range, such as temperature, water flow or a sensor.",
          steps: ["Check that the pumps are running.", "Compare the gauges to your normal readings.", "Report it today."] }
      ],
      end: LOG,
      rules: [ALWAYS, "Never keep resetting a boiler that keeps locking out.", "Do not add water to a boiler unless you were trained to."],
      source: SRC
    }],

    "hvac/chiller": [{
      title: "Chiller alarm flowchart",
      start: "The chiller screen shows an alarm. Write down the exact text and take a photo of the screen.",
      question: "What is happening?",
      branches: [
        { key: "lock", code: "REFRIG", name: "Refrigerant alarm",
          means: "The room's refrigerant monitor found a leak. A big leak can push the oxygen out of the room.",
          steps: ["Leave the room and keep others out.", "Call your supervisor."] },
        { key: "lock", code: "TRIPPED", name: "Chiller stopped",
          means: "A safety shut it down. The building may lose cooling.",
          steps: ["Do not reset it.", "Check that the chilled water and condenser water pumps are running. Chillers shut down without water flow.", "Call now."] },
        { key: "wrn", code: "WARNING", name: "Warning, still running",
          means: "Something is drifting out of range.",
          steps: ["Write down the readings on the screen.", "Report it today."] }
      ],
      end: LOG,
      rules: [ALWAYS, "Only trained techs reset chillers or change settings.", "Refrigerant work needs EPA Section 608 certification."],
      source: SRC
    }],

    "electrical/vfd": [{
      title: "VFD fault flowchart",
      start: "The drive display shows a code or message. Write it down exactly. Codes are different for every brand.",
      question: "Is the motor still running?",
      branches: [
        { key: "lock", code: "STOPPED", name: "Motor stopped (fault)",
          means: "The drive shut the motor off to protect it.",
          steps: ["Do not press reset. Resetting can restart the motor instantly.", "Call a senior tech with the exact code."] },
        { key: "wrn", code: "RUNNING", name: "Warning, still running",
          means: "The drive sees a problem but is still running, sometimes at lower speed.",
          steps: ["Check that the drive's cooling vents and fan are not blocked.", "Report it today."] },
        { key: "auto", code: "BLANK", name: "Display is dark",
          means: "The drive may have no power.",
          steps: ["Check the breaker or disconnect that feeds it. One reset at most.", "If it stays dark, call."] }
      ],
      end: LOG,
      rules: [ALWAYS, "Never open a VFD. It holds a deadly charge after the power is off.", "Make sure nobody is near the fan or pump before anyone resets a drive."],
      source: SRC
    }],

    "electrical/gen": [{
      title: "Generator alarm flowchart",
      start: "The generator control panel shows an alarm or warning light. Write it down and take a photo.",
      question: "What is the situation?",
      branches: [
        { key: "auto", code: "RUNNING", name: "Running in an outage",
          means: "It is doing its job.",
          steps: ["Do not shut it down.", "Check that the transfer switch shows emergency power.", "Report the outage and keep an eye on fuel."] },
        { key: "lock", code: "NOT AUTO", name: "Switch not in Auto",
          means: "The generator will not start by itself in an outage.",
          steps: ["Tell your supervisor now.", "Only change the switch if you were trained and told to."] },
        { key: "wrn", code: "ALARM", name: "Alarm or fault light",
          means: "Examples: failed to start, low fuel, battery charger problem.",
          steps: ["Write down every light that is on.", "Call your supervisor or the generator service company."] }
      ],
      end: LOG,
      rules: [ALWAYS, "Generators can start at any moment. Stay clear of moving parts.", "Exhaust has carbon monoxide. Never run one indoors or near air intakes."],
      source: SRC
    }],

    "electrical/ats": [{
      title: "Transfer switch flowchart",
      start: "Check the transfer switch lights or display. Write down what it shows.",
      question: "What is it showing?",
      branches: [
        { key: "auto", code: "ON GEN", name: "On generator, utility is back",
          means: "Many switches wait several minutes on purpose before switching back.",
          steps: ["Note the time.", "If it has not switched back in a reasonable time, call."] },
        { key: "lock", code: "NO XFER", name: "Outage, did not switch",
          means: "Utility power is out but emergency circuits did not move to the generator.",
          steps: ["Check whether the generator started.", "Call now. Emergency lights and life safety loads may be dark."] },
        { key: "wrn", code: "ALARM", name: "Alarm or not in Auto",
          means: "The switch may not work in the next outage.",
          steps: ["Write down the lights and messages.", "Call your supervisor."] }
      ],
      end: LOG,
      rules: [ALWAYS, "Never operate a transfer switch by hand unless trained."],
      source: SRC
    }],

    "electrical/ups": [{
      title: "UPS alarm flowchart",
      start: "The UPS is beeping or showing a message. Write down what the screen says.",
      question: "What does it say?",
      branches: [
        { key: "lock", code: "ON BATTERY", name: "Running on battery",
          means: "The UPS lost its incoming power. The batteries only last a short time.",
          steps: ["Check whether there is a power outage or a tripped breaker feeding it.", "Tell IT right away so they can protect their equipment."] },
        { key: "wrn", code: "BATTERY", name: "Battery or fault alarm",
          means: "The batteries may be weak, or the UPS has an internal problem.",
          steps: ["Write it down.", "Report it to IT and your supervisor today."] },
        { key: "auto", code: "OVERLOAD", name: "Overload",
          means: "Too much equipment is plugged into it.",
          steps: ["Look for anything new plugged in, like a heater or fan.", "Do not unplug IT equipment without IT's OK."] }
      ],
      end: LOG,
      rules: [ALWAYS, "Never open UPS or battery cabinets. Batteries hold high energy even with power off."],
      source: SRC
    }],

    "plumbing/wh": [{
      title: "Water heater alarm flowchart",
      start: "The water heater shows an error code or light. Write it down exactly and take a photo.",
      question: "What do you see?",
      branches: [
        { key: "lock", code: "GAS / CO", name: "Gas smell or CO alarm",
          means: "Danger to people.",
          steps: ["Leave. Do not use switches or your phone near the smell.", "Call 911 or the gas company, then your supervisor."] },
        { key: "lock", code: "LEAK", name: "T&P valve dripping or tank leaking",
          means: "Pressure or temperature is too high, or the tank is failing.",
          steps: ["Never cap or plug the T&P valve.", "Call now."] },
        { key: "wrn", code: "ERROR", name: "Error code or no hot water",
          means: "The heater shut itself off or cannot heat.",
          steps: ["Electric: check its breaker. One reset at most.", "Gas: check the gas valve is open. Reset once only if your site allows it.", "If it comes back, call."] }
      ],
      end: LOG,
      rules: [ALWAYS, "Do not change the temperature setting on your own."],
      source: SRC
    }],

    "plumbing/booster": [{
      title: "Booster pump alarm flowchart",
      start: "The booster pump panel shows an alarm. Write down the message and take a photo.",
      question: "What is happening?",
      branches: [
        { key: "lock", code: "NO WATER", name: "Low or no pressure upstairs",
          means: "Upper floors may lose water.",
          steps: ["Check that the supply valves to the pumps are open.", "Call now."] },
        { key: "wrn", code: "PUMP FAULT", name: "One pump failed",
          means: "The other pump may be carrying the load alone, with no backup.",
          steps: ["Write down which pump is down.", "Report it today."] },
        { key: "auto", code: "PRESSURE", name: "High pressure alarm",
          means: "Pressure is above the set limit. This can stress pipes and fixtures.",
          steps: ["Compare the gauges to your normal readings.", "Report it today."] }
      ],
      end: LOG,
      rules: [ALWAYS, "Do not change pressure settings on the panel."],
      source: SRC
    }],

    "plumbing/sump": [sumpChart],
    "plumbing/ejector": [sumpChart],

    "fire/facp": [{
      title: "Fire alarm panel flowchart",
      start: "The panel is beeping or a light is on. Read the display and write down the exact message and location.",
      question: "Which light is on?",
      branches: [
        { key: "lock", code: "ALARM", name: "Red alarm light",
          means: "The panel detected a possible fire. Horns and strobes are going.",
          steps: ["Follow your building's emergency plan. Treat it as real.", "Meet the fire department with the location from the panel.", "Do not silence or reset until they say so."] },
        { key: "wrn", code: "SUPERVISORY", name: "Supervisory light",
          means: "Part of the fire protection is not ready, often a closed sprinkler valve or low air pressure.",
          steps: ["Ask if anyone is working on the sprinkler system.", "Look, but do not touch any valve.", "Call your supervisor now."] },
        { key: "auto", code: "TROUBLE", name: "Trouble light",
          means: "The system found a problem with itself, like a broken wire or dead battery. That area may not detect a fire.",
          steps: ["Silence the buzzer only if your site allows it.", "Call your supervisor or the fire alarm contractor."] }
      ],
      end: LOG,
      rules: [ALWAYS, "Never reset, disconnect or cover any part of a fire system on your own.", "Every alarm is real until the fire department says otherwise."],
      source: "Alarm, supervisory and trouble mean the same on every fire alarm panel. The panel's manual explains its exact messages."
    }],

    "fire/pump": [{
      title: "Fire pump controller flowchart",
      start: "The fire pump is running or its controller shows an alarm light. Write down every light and message.",
      question: "What is happening?",
      branches: [
        { key: "lock", code: "RUNNING", name: "Pump is running",
          means: "Pressure dropped, often from sprinklers flowing water, or it is a scheduled test.",
          steps: ["Never stop it.", "Check the fire alarm panel for an alarm.", "Call your supervisor now."] },
        { key: "wrn", code: "ALARM", name: "Alarm light, not running",
          means: "Examples: power or phase problem, or the pump failed to start. The pump may not work in a fire.",
          steps: ["Call your supervisor and the fire protection contractor now.", "This may be an impairment. Your supervisor decides next steps."] }
      ],
      end: LOG,
      rules: [ALWAYS, "Never change controller settings or turn off a fire pump."],
      source: SRC
    }]
  };
})();
