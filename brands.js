/* Brand directory: official websites and tech support numbers.
   Every link and number was found on, or credited to, the company's own website by web search in November 2026.
   Numbers change. Where sources disagreed or a listing looked old, the "note" says so.
   makes: equipment keys ("system/id") so each equipment panel can show who to call.
   manuals: a key from manuals.js libraries, if the brand has a confirmed manual library.
   trades: which tabs the brand shows under (hvac, plumbing, electrical). Missing means hvac. */
window.TG_BRANDS = {
  checked: "November 2026",
  beforeYouCall: [
    "Get the **model and serial number** from the nameplate. Every line asks for them first.",
    "Have the **exact fault code** and what you already checked.",
    "Most factory lines only help **licensed or trained techs**. When you are new, your senior tech usually makes the call. Ask first."
  ],
  list: [
    { id: "aaon", name: "AAON", website: "https://www.aaon.com/resources/how-to-contact-support",
      makes: ["hvac/rtu", "hvac/ahu", "hvac/chiller"], makesText: "Rooftop units, air handlers, chillers",
      phones: [
        { label: "Tech support (mechanical)", number: "918-382-6450", email: "technical.support@aaon.com" },
        { label: "Controls support", number: "866-918-1100", hours: "Mon to Fri, 7 AM to 5 PM Central", email: "support.controls@aaon.com" },
        { label: "Customer service", number: "918-382-6430" }] },
    { id: "american-standard", name: "American Standard", aka: "Part of Trane Technologies", website: "https://www.americanstandardair.com/",
      makes: ["hvac/split"], makesText: "Heat pumps, split systems, light commercial",
      phones: [{ label: "Customer care", number: "844-955-4401", hours: "Mon to Fri, 7 AM to 5 PM Central", note: "Mainly for owners. For a specific system, American Standard sends you to the local dealer." }] },
    { id: "bard", name: "Bard", website: "https://www.bardhvac.com/contact-us/",
      makes: [], makesText: "Wall-mount packaged units (schools, telecom shelters)",
      phones: [
        { label: "Technical service", number: "419-636-0439", email: "techservice@bardhvac.com" },
        { label: "Main office", number: "419-636-1194" }] },
    { id: "carrier", name: "Carrier", website: "https://www.carrier.com/us/en/commercial/contact-us/", manuals: "carrier",
      makes: ["hvac/rtu", "hvac/ahu", "hvac/chiller", "hvac/split", "hvac/tstat"], makesText: "Rooftop units, air handlers, chillers, splits, controls",
      phones: [
        { label: "24/7 commercial service", number: "800-379-6484", hours: "24 hours, 7 days" },
        { label: "General (1-800-CARRIER)", number: "800-227-7437" }],
      note: "For product tech support on light commercial equipment, Carrier says the local Carrier distributor is the best resource." },
    { id: "daikin-applied", name: "Daikin Applied", aka: "Formerly McQuay (and AAF-McQuay)", search: "McQuay AAF", website: "https://www.daikinapplied.com/", manuals: "daikin",
      makes: ["hvac/rtu", "hvac/ahu", "hvac/chiller"], makesText: "Chillers, rooftop units, air handlers (commercial)",
      phones: [
        { label: "Find your local service office", number: "800-432-1342" },
        { label: "Controls support", number: "866-462-7829", note: "MicroTech controllers, BACnet and Modbus questions." },
        { label: "Parts (800-37PARTS)", number: "800-377-2787" }],
      note: "Old McQuay units are supported through Daikin Applied. Older McQuay catalogs list numbers that may no longer work." },
    { id: "daikin-comfort", name: "Daikin Comfort", aka: "Daikin's residential and light commercial side. Also owns Goodman and Amana.", website: "https://daikincomfort.com/contact-us",
      makes: ["hvac/split", "hvac/rtu"], makesText: "Ductless, VRV, splits, packaged units",
      phones: [
        { label: "Tech support (licensed techs)", number: "855-324-5461", note: "An older Daikin page lists 866-432-4546 instead. Use 855-324-5461 first." },
        { label: "General", number: "866-588-6454" }] },
    { id: "fujitsu", name: "Fujitsu General", aka: "Now GENERAL HVAC Solutions America (AIRSTAGE)", search: "AIRSTAGE General", website: "https://www.fujitsugeneral.com/us/contact/index.html",
      makes: ["hvac/split"], makesText: "Ductless mini-splits, VRF",
      phones: [
        { label: "Technical support", number: "866-952-8324", hours: "8 AM to 8 PM Eastern", email: "servicehvac@fujitsugeneral.com" },
        { label: "General", number: "888-888-3424" }] },
    { id: "goodman", name: "Goodman", aka: "Part of Daikin Comfort Technologies. Also Amana HVAC.", search: "Amana", website: "https://www.goodmanmfg.com/support",
      makes: ["hvac/split", "hvac/rtu"], makesText: "Splits, heat pumps, packaged units",
      phones: [
        { label: "Customer and warranty support", number: "877-254-4729" },
        { label: "Technical support hotline (option 5)", number: "888-593-9988", note: "From an older, undated Goodman brochure. Confirm it still works." }] },
    { id: "greenheck", name: "Greenheck", website: "https://www.greenheck.com/shop/support/contact-us", search: "fans DOAS",
      makes: ["hvac/exhaust", "hvac/ahu"], makesText: "Exhaust and supply fans, dampers, DOAS units",
      phones: [
        { label: "Customer care and parts", number: "800-355-5354", hours: "Mon to Fri, 7 AM to 5 PM Central" },
        { label: "DOAS technical support", number: "866-478-2574", email: "DOAS@greenheck.com" }] },
    { id: "jci", name: "Johnson Controls", aka: "Parent company of YORK, Simplex and Tyco", search: "JCI Metasys", website: "https://www.johnsoncontrols.com/",
      makes: ["hvac/chiller", "hvac/tstat", "fire/facp", "fire/heads", "fire/riser"], makesText: "Building controls (BAS), chillers, fire alarm and sprinkler products",
      phones: [{ label: "HVAC customer service", number: "866-227-2750" }],
      note: "For YORK units, use the YORK entry. For Simplex fire panels and Tyco sprinklers, the manual links are in each equipment panel." },
    { id: "lennox", name: "Lennox", website: "https://www.lennox.com/commercial/technical-support", manuals: "lennox",
      makes: ["hvac/rtu", "hvac/split"], makesText: "Rooftop units, splits, heat pumps",
      phones: [
        { label: "Commercial tech support (800-4-LENNOX)", number: "800-453-6669", hours: "Mon to Fri, 8 AM to 5 PM Central" },
        { label: "National accounts", number: "800-367-6285" }] },
    { id: "lg", name: "LG", aka: "LG Air Conditioning Technologies", website: "https://www.lg.com/us/support/business/contact",
      makes: ["hvac/split"], makesText: "VRF, ductless, PTAC",
      phones: [
        { label: "Commercial AC and VRF support", number: "888-346-1923", hours: "Mon to Fri, 7 AM to 5 PM Central" },
        { label: "PTAC and commercial general", number: "888-865-3026" }] },
    { id: "mitsubishi", name: "Mitsubishi Electric Trane HVAC", aka: "Mitsubishi Electric ductless and VRF in the U.S.", search: "Mitsubishi METUS City Multi", website: "https://www.mitsubishicomfort.com/for-pros", manuals: "mitsubishi",
      makes: ["hvac/split"], makesText: "Ductless mini-splits, VRF",
      phones: [{ label: "Customer care and tech support", number: "800-433-4822", email: "customercare@hvac.mea.com", note: "They only support contractors who hold the right state license." }] },
    { id: "modine", name: "Modine", website: "https://www.modinehvac.com/resources/technical-support/",
      makes: [], makesText: "Unit heaters, makeup air, school ventilators",
      phones: [{ label: "Technical support (800-828-HEAT)", number: "800-828-4328" }] },
    { id: "reznor", name: "Reznor", aka: "Part of Nortek", website: "https://www.reznorhvac.com/contact-us/",
      makes: [], makesText: "Gas unit heaters, makeup air units",
      phones: [{ label: "Sales and technical info", number: "800-695-1901", email: "ReznorInquiry@nortek.com" }] },
    { id: "rheem", trades: ["hvac", "plumbing"], name: "Rheem", aka: "Also sold as Ruud", search: "Ruud", website: "https://www.rheem.com/help-and-support/",
      makes: ["hvac/rtu", "hvac/split", "plumbing/wh"], makesText: "Packaged units, splits, water heaters",
      phones: [{ label: "Technical support", number: "800-432-8373", hours: "Mon to Fri, 7 AM to 7 PM Central" }] },
    { id: "trane", name: "Trane", aka: "Trane Technologies. American Standard is a sister brand.", website: "https://support.trane.com/hc/en-us/articles/45121131579661-Trane-Commercial-Customer-Help-Center-Overview-Self-Service-Live-Factory-Support", manuals: "trane",
      makes: ["hvac/rtu", "hvac/ahu", "hvac/vav", "hvac/chiller", "hvac/tstat"], makesText: "Rooftop units, air handlers, VAV boxes, chillers, controls",
      phones: [{ label: "Commercial factory support", number: "310-878-0059", hours: "Mon to Fri, 7:30 AM to 4:30 PM Central",
        note: "You must register at support.trane.com first. Covers light commercial units shipped in the last 18 months, and you usually get a call back. For older equipment, call your local Trane commercial office." }] },
    { id: "york", name: "YORK", aka: "Johnson Controls", website: "https://www.york.com/commercial-equipment/professionals", manuals: "york",
      makes: ["hvac/rtu", "hvac/ahu", "hvac/chiller", "hvac/split"], makesText: "Rooftop units, air handlers, chillers, splits",
      phones: [
        { label: "Ducted systems tech support (rooftop units)", number: "877-874-7378", email: "cg-upgtechsupport@jci.com", note: "From Johnson Controls service bulletins dated 2019 to 2022. Confirm it is current." },
        { label: "Air handler (airside) tech support", number: "800-524-1330", note: "From an older warranty letter. Confirm it is current." },
        { label: "YORK HVAC service", number: "844-628-2529" }],
      note: "Big YORK rooftop units have a QR code. Scan it with the RTU Toolkit for unit-specific information." },
    /* ---------- Plumbing ---------- */
    { id: "aosmith", trades: ["plumbing"], name: "A. O. Smith", aka: "Also owns Lochinvar", website: "https://www.hotwater.com/contact/", manuals: "aosmith",
      makes: ["plumbing/wh"], makesText: "Commercial and residential water heaters",
      phones: [
        { label: "Technical information (commercial)", number: "800-527-1953" },
        { label: "Customer support", number: "877-552-0010", hours: "Mon to Fri, 8 AM to 10 PM Eastern. Sat and Sun, 9 AM to 6 PM Eastern" }],
      note: "The rating plate on newer A. O. Smith heaters has a QR code that links to that unit's documents." },
    { id: "bellgossett", trades: ["hvac", "plumbing"], name: "Bell & Gossett", aka: "Part of Xylem", search: "B&G Xylem", website: "https://www.xylem.com/bellgossett",
      makes: ["hvac/pump"], makesText: "Hydronic pumps, circulators, heat exchangers",
      phones: [{ label: "Main office (Morton Grove, IL)", number: "847-966-3700", note: "No separate tech support line was found. Bell & Gossett literature points you to your local B&G representative." }] },
    { id: "bradfordwhite", trades: ["plumbing"], name: "Bradford White", website: "https://forthepro.bradfordwhite.com/contact-us/",
      makes: ["plumbing/wh"], makesText: "Commercial and residential water heaters, boilers",
      phones: [
        { label: "Technical support (24/7)", number: "800-334-3393", email: "techsupport@bradfordwhite.com", note: "For plumbing professionals only." },
        { label: "Parts", number: "800-532-4020", note: "An older document lists 800-538-2020. The pro website lists 800-532-4020." },
        { label: "Warranty", number: "800-531-2111" }] },
    { id: "grundfos", trades: ["hvac", "plumbing"], name: "Grundfos", website: "https://www.grundfos.com/us/support/contact-service", manuals: "grundfos",
      makes: ["plumbing/booster", "hvac/pump"], makesText: "Booster pump systems, circulators, pumps",
      phones: [{ label: "Service", number: "844-994-2850", email: "service-us@servicesupport.grundfos.com", note: "Found on a Grundfos U.S. page made for one distributor. Confirm it on the contact page. Grundfos also sends you to your local distributor." }] },
    { id: "liberty", trades: ["plumbing"], name: "Liberty Pumps", website: "https://www.libertypumps.com/en-us/lep/dom/Services/Repairs",
      makes: ["plumbing/sump", "plumbing/ejector"], makesText: "Sump, sewage and grinder pumps",
      phones: [{ label: "Technical support", number: "800-543-2550", email: "support@LibertyPumps.com", note: "Manuals list different hours (7 AM to 6 PM or 8 AM to 5 PM Eastern)." }] },
    { id: "lochinvar", trades: ["hvac", "plumbing"], name: "Lochinvar", aka: "Part of A. O. Smith", website: "https://www.lochinvar.com/en_US/contact.html",
      makes: ["hvac/boiler", "plumbing/wh"], makesText: "Boilers and commercial water heaters",
      phones: [
        { label: "Technical service (contractors)", number: "800-722-2101" },
        { label: "Residential tank water heaters", number: "800-527-1953" },
        { label: "Customer service (distributors and reps)", number: "877-554-5544" }] },
    { id: "sloan", trades: ["plumbing"], name: "Sloan", website: "https://onesloan.sloan.com/contact-us", manuals: "sloan", search: "flushometer Royal Regal",
      makes: ["plumbing/flush"], makesText: "Flush valves (flushometers), faucets",
      phones: [
        { label: "Technical support (1-888-SLOAN-14)", number: "888-756-2614", email: "techsupport@sloan.com" },
        { label: "Customer care", number: "800-982-5839", hours: "Mon to Fri, 7 AM to 5 PM Central" }] },
    { id: "watts", trades: ["plumbing"], name: "Watts", search: "tekmar Ames", website: "https://www.watts.com/support", manuals: "watts009",
      makes: ["plumbing/backflow", "plumbing/prv", "plumbing/mix"], makesText: "Backflow preventers, pressure reducing valves, mixing valves",
      phones: [
        { label: "Plumbing, heating and drainage (press 2 for tech support)", number: "978-689-6066" },
        { label: "tekmar controls", number: "800-438-3903" }] },
    { id: "zoeller", trades: ["plumbing"], name: "Zoeller", website: "https://zoellerpumps.com/contact-us/", manuals: "zoeller",
      makes: ["plumbing/sump", "plumbing/ejector"], makesText: "Sump and sewage pumps, alarm panels",
      phones: [{ label: "Product support (1-800-928-PUMP)", number: "800-928-7867", email: "zcotechnical@zoeller.com" }] },
    { id: "zurn", trades: ["plumbing"], name: "Zurn", aka: "Also Wilkins backflow preventers", search: "Wilkins Aquaflush", website: "https://www.zurn.com/us/en/support.html", manuals: "zurn",
      makes: ["plumbing/flush", "plumbing/backflow"], makesText: "Flush valves, backflow preventers (Wilkins), drains",
      phones: [{ label: "Customer support (1-855-ONE-ZURN)", number: "855-663-9876" }] },

    /* ---------- Electrical ---------- */
    { id: "abb", trades: ["electrical"], name: "ABB", search: "ACH580 ACS580 drives", website: "https://electrification.us.abb.com/customer-service",
      makes: ["electrical/vfd"], makesText: "Variable frequency drives (VFDs), electrical gear",
      phones: [
        { label: "Customer service (1-800-HELP-365), option 4 for drives", number: "800-435-7365", email: "AutomationSupportLine@us.abb.com" },
        { label: "Drive services", number: "800-752-0696", note: "From an older ABB drives document (option 1, 1, 3). Confirm it is current." }] },
    { id: "apc", trades: ["electrical"], name: "APC", aka: "Part of Schneider Electric", website: "https://www.apc.com/us/en/support/contact-us",
      makes: ["electrical/ups"], makesText: "UPS battery backups",
      phones: [
        { label: "Tech support (Schneider Electric)", number: "877-342-5173" },
        { label: "Tech support, option 4", number: "800-800-4272", note: "APC and Schneider pages list different numbers. Try 877-342-5173 first." }] },
    { id: "asco", trades: ["electrical"], name: "ASCO Power", aka: "Part of Schneider Electric", website: "https://www.ascopower.com/us/en/services-and-support/contact-us/contact-support-ascopower.jsp", manuals: "asco",
      makes: ["electrical/ats"], makesText: "Automatic transfer switches",
      phones: [{ label: "Technical support", number: "800-800-2726", hours: "Mon to Fri, 9 AM to 6 PM Eastern", note: "Many ASCO pages also show 877-342-5173 (Schneider Electric tech support)." }],
      note: "Have the serial number and catalog number from the switch nameplate ready." },
    { id: "cummins", trades: ["electrical"], name: "Cummins", search: "Onan", website: "https://www.cummins.com/en-na/customer-assistance",
      makes: ["electrical/gen", "electrical/ats"], makesText: "Generators, transfer switches",
      phones: [
        { label: "Customer assistance (1-800-CUMMINS)", number: "800-286-6467", hours: "24 hours" },
        { label: "Schedule generator service", number: "800-832-4282" }] },
    { id: "danfoss", trades: ["electrical"], name: "Danfoss", search: "VLT drives", website: "https://www.danfoss.com/en-us/service-and-support/fix-and-troubleshooting/drives-support/",
      makes: ["electrical/vfd"], makesText: "VLT variable frequency drives",
      phones: [{ label: "1-888-DANFOSS: press 2 for drives, then 2 for tech support", number: "888-326-3677" }] },
    { id: "eaton", trades: ["electrical"], name: "Eaton", search: "Cutler-Hammer", website: "https://www.eaton.com/us/en-us/support/eatoncare.html",
      makes: ["electrical/gear", "electrical/panel", "electrical/breaker", "electrical/disc", "electrical/vfd"], makesText: "Panels, breakers, switchgear, disconnects, drives",
      phones: [
        { label: "Technical Resource Center (877-ETN-CARE), option 2", number: "877-386-2273", email: "trc@eaton.com", note: "Also handles after-hours emergencies. For drives: option 2, then option 7." },
        { label: "Engineering services (urgent field help)", number: "800-498-2678" }] },
    { id: "generac", trades: ["electrical"], name: "Generac", website: "https://www.generac.com/about/contact-us/", manuals: "generac",
      makes: ["electrical/gen", "electrical/ats"], makesText: "Generators, transfer switches",
      phones: [
        { label: "Customer support (1-888-GENERAC)", number: "888-436-3722", hours: "24/7" },
        { label: "Technical service, option 3", number: "800-926-9768", email: "mobiletechsupport@generac.com", note: "From Generac's service policy manual. Confirm it is current." }],
      note: "Industrial generator manuals and tech support go through certified Generac dealers." },
    { id: "kohler", trades: ["electrical"], name: "Kohler generators", aka: "Now sold under Rehlko", search: "Rehlko", website: "https://www.kohlerhomeenergy.rehlko.com/owner-support",
      makes: ["electrical/gen", "electrical/ats"], makesText: "Generators, transfer switches",
      phones: [{ label: "Owner support (home generators)", number: "833-393-6650", hours: "Mon to Fri, 8 AM to 4:30 PM Central", note: "No public line for industrial generators was found. Those go through Kohler's authorized distributors." }] },
    { id: "leviton", trades: ["electrical"], name: "Leviton", website: "https://www.leviton.com/en/support/contact-us/product-support",
      makes: ["electrical/gfci", "electrical/lighting"], makesText: "GFCI outlets, switches, lighting controls, occupancy sensors",
      phones: [{ label: "Technical support: option 1 commercial and industrial, option 2 lighting controls", number: "800-824-3005" }] },
    { id: "siemens", trades: ["electrical"], name: "Siemens", website: "https://www.siemens.com/us/en/products/energy/product-support.html",
      makes: ["electrical/gear", "electrical/panel", "electrical/breaker", "electrical/disc", "electrical/vfd"], makesText: "Panels, breakers, switchgear, disconnects, drives",
      phones: [
        { label: "Power distribution support", number: "800-347-6659" },
        { label: "Industry customer care (drives, controls)", number: "800-333-7421", hours: "24/7" }] },
    { id: "squared", trades: ["electrical"], name: "Square D", aka: "Part of Schneider Electric", search: "Schneider QO", website: "https://www.se.com/us/en/brands/squared/", manuals: "squared",
      makes: ["electrical/gear", "electrical/panel", "electrical/breaker", "electrical/disc"], makesText: "Panels, breakers, switchgear, disconnects",
      phones: [
        { label: "Product and tech support (888-SQUARED)", number: "888-778-2733" },
        { label: "Schneider Electric tech support", number: "877-342-5173", hours: "Chat Mon to Fri, 8 AM to 8 PM Eastern" }] }
  ]
};
