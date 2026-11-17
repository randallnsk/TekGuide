/* Daily rounds checklist items, grouped by system.
   Each item: text = what to do, why = one short reason. */
window.TG_ROUNDS = {
  hvac: [
    { text: "Walk each mechanical room: look, listen and smell", why: "New noises, leaks and smells are the earliest warning signs." },
    { text: "Check the BAS for active alarms and write them down", why: "Alarms that sit overnight turn into comfort calls by morning." },
    { text: "Boiler: gauges normal, no alarm or lockout light", why: "Heating season. Catch a lockout before the building gets cold." },
    { text: "Chiller: no alarms on the control screen", why: "Cooling season. Chiller trips affect the whole building." },
    { text: "Pumps: the right ones running, no leaks at the seals", why: "A stopped pump means no heating or cooling reaches the floors." },
    { text: "Air handlers: running on schedule, drain pans not overflowing", why: "Overflowing pans cause ceiling leaks." },
    { text: "Read and log the filter gauges, flag any that are high", why: "Clogged filters cause weak airflow and frozen coils." },
    { text: "Refrigerant and CO alarm panels show normal", why: "These protect your life. Only check them if your building has them." },
    { text: "Roof (if on today's route): units running, panels closed, nothing blocking coils", why: "Trash and leaves on the outdoor coils make units work harder and trip." }
  ],
  plumbing: [
    { text: "Walk the restrooms: no leaks, no running toilets or urinals, no clogs", why: "Running fixtures waste thousands of gallons a day." },
    { text: "Water heaters: no leaks, no alarms, T&P relief valve not dripping", why: "A dripping relief valve means pressure or temperature is too high." },
    { text: "Sump and sewage pump panels show normal, pit levels low", why: "A failed pump can flood a basement in hours." },
    { text: "Backflow preventers: not dripping or dumping water", why: "Constant dumping means a part is failing and the device may not protect the water." },
    { text: "Mechanical room floor drains: clear, and refilled with water weekly", why: "Dry traps let sewer gas into the building." },
    { text: "Roof drains clear (if on today's route)", why: "Clogged roof drains cause ponding and roof leaks." }
  ],
  electrical: [
    { text: "Electrical rooms: no buzzing, crackling or hot smell, doors locked", why: "Sounds and smells are early signs of a failing connection." },
    { text: "Nothing stored within 3 feet in front of any panel", why: "People need clear space to work safely and to shut power off fast." },
    { text: "List any lights that are out or flickering, by room", why: "One parts run instead of five." },
    { text: "Generator: switch in Auto, no alarm lights, battery charger on", why: "If it is not in Auto, it will not start in an outage." },
    { text: "UPS units in IT rooms: no alarms or beeping", why: "A failed UPS battery is only found during an outage, unless you look." },
    { text: "Outdoor lights: off in daytime, on at night", why: "Wrong timing wastes power or leaves parking areas dark." }
  ],
  fire: [
    { text: "Fire alarm panel shows normal: no alarm, supervisory or trouble", why: "A trouble or supervisory signal can mean part of the building is unprotected." },
    { text: "Exits and stairwells clear, exit signs lit", why: "People need a clear way out, even in the dark." },
    { text: "Fire doors close and latch, none propped open", why: "An open fire door lets smoke spread through the building." },
    { text: "Fire extinguishers in place, gauges in the green", why: "A missing or empty extinguisher is useless in an emergency." },
    { text: "Sprinkler riser: control valves open, gauges normal", why: "A closed valve means no sprinkler protection." },
    { text: "Storage at least 18 inches below sprinkler heads", why: "Sprinklers need room to spray water over the fire." },
    { text: "Fire department connections and hydrants not blocked", why: "Firefighters lose time if they cannot reach them." }
  ]
};
