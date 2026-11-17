/* Manual links.
   LIBRARIES: official manufacturer pages, each confirmed to exist before it was added.
   BY_EQUIPMENT: which libraries to show for each equipment card ("system/id").
   To add a link: add it to LIBRARIES first, then list its key under the equipment. */
window.TG_MANUALS = {
  libraries: {
    york: { name: "YORK", what: "Professional resources: HVAC Navigator for IOM manuals, and the RTU Toolkit (scan the QR code or enter the serial number).", url: "https://www.york.com/commercial-equipment/professionals" },
    carrier: { name: "Carrier", what: "Commercial product documents: installation guides, owner's manuals and product data.", url: "https://www.carrier.com/commercial/en/us/literature/" },
    trane: { name: "Trane", what: "Trane e-Library. Search by model number or literature number.", url: "https://elibrary.tranetechnologies.com/public/search" },
    lennox: { name: "Lennox", what: "Commercial products. Each product page has manuals, service literature and wiring diagrams.", url: "https://www.lennox.com/commercial/products" },
    daikin: { name: "Daikin Applied", what: "IOM manual library, sorted by product line.", url: "https://www.daikinapplied.com/resources/IOM-Manuals" },
    bac: { name: "Baltimore Aircoil (BAC)", what: "Knowledge Center with operation and maintenance manuals.", url: "https://baltimoreaircoil.com/resources" },
    grundfos: { name: "Grundfos", what: "How to find any Grundfos installation and operating manual.", url: "https://www.grundfos.com/us/support/how-to-guides/how-to-find-installation-and-operation-manuals-online" },
    mitsubishi: { name: "Mitsubishi Electric Trane", what: "Pro resources: product data, submittals and installation manuals.", url: "https://www.mitsubishicomfort.com/for-pros" },
    aosmith: { name: "A. O. Smith", what: "Find manuals, spec sheets and diagrams by model.", url: "https://www.hotwater.com/find-documents-and-videos" },
    zoeller: { name: "Zoeller", what: "Service literature and installation instructions.", url: "https://zoellerpumps.com/service-literature/" },
    sloan: { name: "Sloan", what: "Regal flushometer repair parts (diaphragms, handles, control stops).", url: "https://www.sloan.com/products/part-groupings/regal-flushometer" },
    zurn: { name: "Zurn", what: "Aquaflush Z6000 flush valve page with install and care sheets.", url: "https://www.zurn.com/products/finish-plumbing/manual-flush-valves/diaphragm/z6000" },
    watts009: { name: "Watts", what: "Series 009 reduced pressure backflow preventer, a very common model. Install sheets on the page.", url: "https://www.watts.com/products/plumbing-flow-control-solutions/backflow-preventers/reduced-pressure-zone-assemblies/009" },
    squared: { name: "Square D (Schneider Electric)", what: "Safety switch (disconnect) user manual.", url: "https://www.se.com/us/en/download/document/GEX75737/" },
    asco: { name: "ASCO", what: "Transfer switches. Manuals are in the ASCO download center.", url: "https://ascopower.com/us/en/products/transfer-switches.jsp" },
    generac: { name: "Generac", what: "Generac does not post industrial generator manuals publicly. This page explains how to get one through a certified dealer.", url: "https://support.generac.com/s/article/Where-Can-I-Get-a-Copy-of-the-User-Manual-for-an-Industrial-Generator" },
    simplex: { name: "Simplex", what: "Simplex Knowledge Exchange. Example: the 4010ES panel documentation index.", url: "https://docs.johnsoncontrols.com/simplex/r/Simplex/en-US/4010ES-fire-alarm-control-unit-documentation-index/A" },
    tyco: { name: "Tyco Fire Protection", what: "Technical data book for sprinklers and valves.", url: "https://www.tyco-fire.com/technical-resources" },
    amerex: { name: "Amerex", what: "Fire extinguisher owner's and service manuals.", url: "https://amerex-fire.com/learning-center/manuals" }
  },
  byEquipment: {
    "hvac/rtu": ["york", "carrier", "trane", "lennox", "daikin"],
    "hvac/ahu": ["trane", "carrier", "daikin", "york"],
    "hvac/vav": ["trane"],
    "hvac/chiller": ["trane", "carrier", "york", "daikin"],
    "hvac/tower": ["bac"],
    "hvac/pump": ["grundfos"],
    "hvac/split": ["mitsubishi"],
    "hvac/tstat": ["trane", "carrier"],
    "plumbing/backflow": ["watts009"],
    "plumbing/wh": ["aosmith"],
    "plumbing/booster": ["grundfos"],
    "plumbing/sump": ["zoeller"],
    "plumbing/ejector": ["zoeller"],
    "plumbing/flush": ["sloan", "zurn"],
    "electrical/disc": ["squared"],
    "electrical/gen": ["generac"],
    "electrical/ats": ["asco"],
    "fire/facp": ["simplex"],
    "fire/heads": ["tyco"],
    "fire/riser": ["tyco"],
    "fire/dry": ["tyco"],
    "fire/ext": ["amerex"]
  },
  howToFind: [
    "Find the **nameplate** on the unit. Write down the brand, model number and serial number, or take a photo.",
    "Search the maker's own website for the model number plus **IOM** (installation, operation and maintenance).",
    "Only trust manuals from the maker's website or your senior tech. Third-party manual sites can be old or wrong.",
    "Check that the model number and revision on the manual match your unit.",
    "Send the nameplate photo to whoever keeps this app, so your unit's manual gets added under **Your building**."
  ]
};
