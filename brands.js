/* Brand directory: official websites and tech support numbers.
   Every link and number was found on, or credited to, the company's own website by web search in November 2026.
   Numbers change. Where sources disagreed or a listing looked old, the "note" says so.
   makes: equipment keys ("system/id") so each equipment panel can show who to call.
   manuals: a key from manuals.js libraries, if the brand has a confirmed manual library. */
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
    { id: "rheem", name: "Rheem", aka: "Also sold as Ruud", search: "Ruud", website: "https://www.rheem.com/help-and-support/",
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
      note: "Big YORK rooftop units have a QR code. Scan it with the RTU Toolkit for unit-specific information." }
  ]
};
