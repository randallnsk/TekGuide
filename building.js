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
  manuals: {
    "hvac/rtu": [
      { title: "YORK YPAL 70 to 105 Ton Single Packaged Rooftop Units, Mod G: Installation, Operation and Maintenance Manual", note: "Pages 216 to 220 list the warning and fault codes the unit's controller shows. Get it from YORK's professional resources or the RTU Toolkit (scan the QR code on the unit).", url: "https://www.york.com/commercial-equipment/professionals" },
      { title: "YORK YPAL Series 100 Single Package, 120 to 150 Tons: Engineering Guide (Form 100.50-EG11)", note: "Physical data, wiring and general arrangement drawings. Get it from YORK's professional resources.", url: "https://www.york.com/commercial-equipment/professionals" }
    ]
  }
};
