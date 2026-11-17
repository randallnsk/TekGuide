/* Labeled equipment drawings. Each drawing is simple shapes plus numbered marks.
   Marks: [x, y, "what to look for"]. The app numbers them and lists them under the picture.
   These show a TYPICAL layout. Real units vary by brand and size. */
(function () {
  'use strict';
  function a(o) { var s = ''; for (var k in o) s += ' ' + k + '="' + o[k] + '"'; return s; }
  var R = function (x, y, w, h, c, rx) { return '<rect' + a({ x: x, y: y, width: w, height: h, rx: rx || 0, 'class': 'd-' + (c || 'b') }) + '/>'; };
  var C = function (x, y, r, c) { return '<circle' + a({ cx: x, cy: y, r: r, 'class': 'd-' + (c || 'b') }) + '/>'; };
  var E = function (x, y, rx, ry, c) { return '<ellipse' + a({ cx: x, cy: y, rx: rx, ry: ry, 'class': 'd-' + (c || 'b') }) + '/>'; };
  var L = function (x1, y1, x2, y2, c) { return '<line' + a({ x1: x1, y1: y1, x2: x2, y2: y2, 'class': 'd-' + (c || 'l') }) + '/>'; };
  var P = function (d, c) { return '<path' + a({ d: d, 'class': 'd-' + (c || 'l') }) + '/>'; };
  var T = function (x, y, s, c, size) { return '<text' + a({ x: x, y: y, 'class': 'd-' + (c || 't'), 'font-size': size || 12, 'text-anchor': 'middle' }) + '>' + s + '</text>'; };
  // vertical / horizontal grille lines inside a box
  var VG = function (x, y, w, h, n, c) { var s = ''; for (var i = 1; i <= n; i++) { var xx = x + i * w / (n + 1); s += L(xx, y + 3, xx, y + h - 3, c || 's'); } return s; };
  var HG = function (x, y, w, h, n, c) { var s = ''; for (var i = 1; i <= n; i++) { var yy = y + i * h / (n + 1); s += L(x + 3, yy, x + w - 3, yy, c || 'l'); } return s; };
  var FLOOR = function (y) { return L(0, y, 320, y, 'g'); };
  var gauge = function (x, y) { return C(x, y, 7, 'b') + L(x, y, x + 4, y - 4, 's'); };

  var D = {};

  /* ---------------- HVAC ---------------- */
  D['hvac/rtu'] = { art: [
      FLOOR(162), R(30, 140, 250, 22, 'b'), R(20, 60, 270, 80, 'b'),
      R(28, 70, 92, 62, 'p'), VG(28, 70, 92, 62, 9),
      P('M38 60v-8h34v8', 'b'), E(55, 52, 17, 3, 's'), P('M82 60v-8h34v8', 'b'), E(99, 52, 17, 3, 's'),
      R(130, 70, 42, 62), R(178, 70, 42, 62), R(226, 70, 42, 62),
      C(166, 101, 2, 'k'), C(214, 101, 2, 'k'), C(262, 101, 2, 'k'),
      R(240, 78, 14, 10, 'p'), P('M290 66 l22 12 v36 h-22', 'b'), HG(292, 82, 18, 30, 3),
      R(3, 86, 14, 22, 'e'), P('M268 140 v6 a4 4 0 0 0 8 0 v-3 h8', 'w')],
    marks: [[77, 42, 'Condenser fans on top. You can see the blades through the guards.'],
      [74, 101, 'Condenser coil behind a wire grille. Keep it clear of trash and leaves.'],
      [151, 101, 'Filter access door.'], [199, 101, 'Blower (supply fan) door.'],
      [247, 74, 'Gas heat flue, on gas units only. It gets hot.'],
      [306, 96, 'Outside air hood (economizer).'], [10, 120, 'Disconnect switch on the side or end.'],
      [282, 150, 'Condensate drain with a U-shaped trap.'], [150, 151, 'Roof curb the unit sits on.']] };

  D['hvac/ahu'] = { art: [
      FLOOR(162), R(20, 50, 285, 95), L(85, 50, 85, 145, 'l'), L(145, 50, 145, 145, 'l'), L(215, 50, 215, 145, 'l'),
      R(28, 62, 48, 70, 'p'), HG(28, 62, 48, 70, 6, 's'),
      P('M92 62 l8 10 l-8 10 l8 10 l-8 10 l8 10 l-8 10', 's'), P('M112 62 l8 10 l-8 10 l8 10 l-8 10 l8 10 l-8 10', 's'),
      R(152, 60, 56, 70, 'p'), VG(152, 60, 56, 70, 7), P('M150 134 h62', 'w'), L(170, 145, 170, 168, 'w'), L(190, 145, 190, 168, 'w'),
      C(258, 97, 30, 'p'), L(258, 67, 258, 127, 's'), L(228, 97, 288, 97, 's'), C(258, 97, 5, 'k'),
      R(98, 34, 26, 12), L(111, 40, 116, 37, 's')],
    marks: [[52, 97, 'Outside air and return air dampers.'], [111, 26, 'Filter gauge. A high reading means dirty filters.'],
      [115, 120, 'Filter bank.'], [180, 52, 'Coil (hot or chilled water) with pipes below.'],
      [212, 134, 'Drain pan under the coil.'], [258, 140, 'Supply fan and motor.']] };

  D['hvac/vav'] = { art: [
      L(0, 140, 320, 140, 'g'), R(20, 82, 58, 24, 'b'), E(20, 94, 4, 12, 's'), L(36, 86, 36, 102, 's'), L(30, 94, 42, 94, 's'),
      R(78, 72, 128, 44), L(120, 78, 140, 110, 's'), R(112, 42, 40, 26, 'e'),
      R(206, 72, 32, 44, 'p'), VG(206, 72, 32, 44, 4), L(214, 116, 214, 132, 'w'), L(228, 116, 228, 132, 'w'),
      R(238, 78, 60, 32), P('M268 110 v30', 'l'), R(250, 140, 36, 6, 'b')],
    marks: [[50, 74, 'Round inlet duct from the main supply.'], [36, 115, 'Airflow sensor (cross shape) in the inlet.'],
      [130, 94, 'Damper inside the box opens and closes.'], [132, 34, 'Controller box. Wires go to the BAS.'],
      [222, 64, 'Reheat coil (hot water or electric) on some boxes.'], [268, 156, 'Duct to the diffusers in the room.'],
      [20, 150, 'Ceiling tiles. The box hides above them.']] };

  D['hvac/boiler'] = { art: [
      FLOOR(165), R(90, 45, 120, 120, 'b', 6), R(140, 12, 20, 33, 'b'), R(115, 62, 44, 24, 'p'),
      gauge(186, 72), L(205, 45, 205, 32, 'w'), P('M199 32 h12', 'w'),
      L(210, 100, 300, 100, 'w'), L(210, 135, 300, 135, 'w'), L(20, 150, 90, 150, 'e'), R(45, 144, 12, 12, 'e'),
      R(108, 112, 84, 36, 'b')],
    marks: [[150, 26, 'Flue (exhaust) pipe. It must be connected and not damaged.'], [137, 74, 'Display. Look for alarm or lockout lights.'],
      [186, 88, 'Pressure and temperature gauge.'], [218, 28, 'Relief valve on top.'], [260, 116, 'Hot water supply and return pipes.'],
      [51, 132, 'Gas valve on the gas line.'], [150, 130, 'Burner access panel.']] };

  D['hvac/chiller'] = { art: [
      FLOOR(160), R(20, 140, 220, 20, 'b'), R(30, 102, 200, 34, 'b', 17), R(30, 62, 200, 34, 'b', 17),
      R(80, 26, 80, 36), R(250, 50, 50, 105, 'e'), R(258, 60, 34, 24, 'p'),
      L(30, 79, 8, 79, 'w'), L(30, 119, 8, 119, 'w'), L(230, 79, 245, 79, 'w')],
    marks: [[120, 18, 'Compressor on top.'], [130, 79, 'Condenser barrel.'], [130, 119, 'Evaporator barrel. Chilled water comes from here.'],
      [275, 72, 'Control panel and screen. Check for alarms.'], [10, 98, 'Water connections at the ends.']] };

  D['hvac/tower'] = { art: [
      FLOOR(168), R(60, 52, 200, 98), R(120, 24, 80, 28, 'p'), L(130, 30, 190, 30, 's'),
      R(66, 80, 80, 60, 'p'), HG(66, 80, 80, 60, 6, 's'), R(174, 80, 80, 60, 'p'), HG(174, 80, 80, 60, 6, 's'),
      R(55, 150, 210, 16, 'b'), P('M70 158 h180', 'w'), L(265, 158, 300, 158, 'w'), C(250, 152, 5, 'w')],
    marks: [[160, 16, 'Fan stack on top. Air goes up and out.'], [106, 110, 'Air inlet louvers on the sides.'],
      [160, 162, 'Basin full of water at the bottom.'], [284, 148, 'Makeup water valve keeps the basin full.']] };

  D['hvac/pump'] = { art: [
      FLOOR(130), R(50, 112, 220, 12, 'b'), C(90, 82, 28, 'p'), R(118, 70, 30, 24, 'b'),
      R(148, 60, 92, 46, 'b', 4), VG(148, 60, 92, 46, 8, 'l'), L(90, 54, 90, 22, 'w'), L(62, 82, 20, 82, 'w'),
      gauge(90, 30), gauge(30, 72)],
    marks: [[90, 82, 'Pump casing (volute).'], [133, 60, 'Coupling guard. Never run it with the guard off.'],
      [194, 52, 'Motor. Feel for heat from a distance.'], [120, 102, 'Shaft seal area. Look for drips.'],
      [60, 30, 'Pressure gauges on each side.'], [160, 120, 'Base or pad.']] };

  D['hvac/exhaust'] = { art: [
      L(0, 150, 320, 150, 'g'), R(100, 110, 120, 40, 'b'), R(90, 92, 140, 18, 'p'), P('M80 92 Q160 22 240 92 Z', 'b'),
      R(150, 50, 20, 20, 'b')],
    marks: [[160, 40, 'Dome or hood. The motor and belt are under it.'], [235, 101, 'Gap where air blows out (downblast).'],
      [160, 132, 'Roof curb.']] };

  D['hvac/split'] = { art: [
      R(20, 28, 140, 40, 'b', 10), HG(30, 50, 120, 14, 2, 's'), P('M150 68 v40 h40', 'l'), P('M30 68 v60', 'w'),
      FLOOR(165), R(190, 92, 110, 70, 'b'), C(245, 127, 26, 'p'), L(245, 101, 245, 153, 's'), L(219, 127, 271, 127, 's'),
      R(176, 70, 12, 18, 'e')],
    marks: [[90, 20, 'Indoor unit high on the wall.'], [90, 60, 'Air louver at the bottom.'],
      [168, 100, 'Refrigerant line set to the outdoor unit.'], [30, 138, 'Condensate drain line.'],
      [245, 127, 'Outdoor unit fan.'], [182, 62, 'Disconnect for the outdoor unit.']] };

  D['hvac/tstat'] = { art: [
      R(110, 30, 100, 120, 'b', 12), R(124, 46, 72, 44, 'p'), T(160, 74, '72°', 's', 18),
      C(140, 112, 7), C(180, 112, 7), L(130, 136, 190, 136, 'l'), L(130, 141, 190, 141, 'l')],
    marks: [[160, 38, 'Display shows temperature and setpoint.'], [160, 112, 'Up and down buttons (if it is adjustable).'],
      [160, 152, 'Vent slots so it can sense room air.']] };

  D['hvac/filters'] = { art: [
      R(60, 38, 200, 112, 'b'), P('M70 48 l12 92 l12 -92 l12 92 l12 -92 l12 92 l12 -92 l12 92 l12 -92 l12 92 l12 -92 l12 92 l12 -92 l12 92 l12 -92 l12 92', 's'),
      R(70, 26, 70, 12, 'p'), P('M275 94 h30 m-8 -6 l8 6 l-8 6', 's')],
    marks: [[105, 18, 'Label with size, rating and date.'], [160, 94, 'Pleated filter material.'],
      [290, 112, 'Arrow on the frame points toward the fan.']] };

  /* ---------------- Plumbing ---------------- */
  D['plumbing/main'] = { art: [
      L(40, 20, 40, 170, 'g'), L(40, 100, 300, 100, 'w'), R(90, 86, 40, 28, 'b', 4), R(170, 88, 30, 24, 'b'),
      L(185, 88, 185, 60, 'l'), C(185, 56, 12, 'p'), R(230, 110, 40, 18, 'p')],
    marks: [[20, 100, 'Water line comes in through the wall or floor.'], [110, 76, 'Water meter.'],
      [185, 40, 'Main shutoff valve handle or wheel.'], [250, 140, 'Label tag. Make sure it is there.']] };

  D['plumbing/backflow'] = { art: [
      FLOOR(168), L(10, 80, 310, 80, 'w'), R(40, 68, 22, 24, 'b'), L(51, 68, 51, 50, 'l'), C(51, 46, 8, 'p'),
      R(258, 68, 22, 24, 'b'), L(269, 68, 269, 50, 'l'), C(269, 46, 8, 'p'),
      R(100, 62, 50, 36, 'b', 6), R(170, 62, 50, 36, 'b', 6), R(150, 98, 20, 20, 'b'),
      P('M152 118 l8 10 l8 -10', 'w'), P('M146 142 h28 l-6 14 h-16 z', 'b'), C(90, 68, 3, 'k'), C(160, 66, 3, 'k'), C(230, 68, 3, 'k')],
    marks: [[51, 30, 'Shutoff valve on each end.'], [125, 54, 'First check valve.'], [195, 54, 'Second check valve.'],
      [184, 112, 'Relief port. Water dumps here when there is a problem.'], [160, 164, 'Air gap funnel to a drain.'],
      [230, 58, 'Small test cocks for the yearly test.']] };

  D['plumbing/prv'] = { art: [
      L(10, 110, 310, 110, 'w'), R(130, 96, 60, 28, 'b', 6), P('M140 96 Q160 30 180 96 Z', 'b'), L(160, 50, 160, 30, 'l'), R(154, 22, 12, 10, 'b'),
      gauge(70, 92), L(70, 99, 70, 110, 'w'), gauge(250, 92), L(250, 99, 250, 110, 'w')],
    marks: [[160, 76, 'Bell-shaped valve body.'], [178, 24, 'Adjusting screw on top. Do not touch.'],
      [70, 72, 'Gauge before: high city pressure.'], [250, 72, 'Gauge after: lower building pressure.']] };

  D['plumbing/wh'] = { art: [
      FLOOR(168), R(110, 26, 100, 140, 'b', 14), R(150, 6, 20, 20, 'b'), L(125, 26, 125, 8, 'w'), L(195, 26, 195, 8, 'w'),
      R(210, 50, 14, 12, 'b'), P('M224 56 h16 v108', 'w'), R(130, 120, 40, 24, 'e'), R(140, 156, 12, 10, 'b')],
    marks: [[160, 0, 'Flue on top (gas heaters).'], [110, 8, 'Cold in and hot out pipes.'], [230, 44, 'T&P relief valve.'],
      [250, 150, 'Relief discharge pipe runs down near the floor.'], [150, 132, 'Gas control or electric panel.'],
      [146, 178, 'Drain valve at the bottom.']] };

  D['plumbing/mix'] = { art: [
      L(20, 70, 120, 70, 'r'), L(20, 130, 120, 130, 'w'), P('M120 130 h20 v-30', 'w'), P('M120 70 h20 v20', 'rp'),
      R(130, 80, 60, 40, 'b', 6), C(160, 100, 12, 'p'), L(190, 100, 300, 100, 's'), gauge(250, 82)],
    marks: [[60, 58, 'Hot water in.'], [60, 142, 'Cold water in.'], [160, 100, 'Valve body with a temperature dial.'],
      [250, 62, 'Thermometer on the mixed water outlet.'], [290, 112, 'Safe, warm water out to fixtures.']] };

  D['plumbing/booster'] = { art: [
      FLOOR(160), R(30, 150, 200, 10, 'b'), R(50, 90, 40, 60, 'b'), R(110, 90, 40, 60, 'b'), R(170, 90, 40, 60, 'b'),
      L(20, 70, 230, 70, 'w'), L(70, 70, 70, 90, 'w'), L(130, 70, 130, 90, 'w'), L(190, 70, 190, 90, 'w'),
      R(245, 50, 55, 100, 'e'), R(253, 60, 39, 22, 'p')],
    marks: [[130, 120, 'Two or more pumps side by side.'], [40, 60, 'Shared header pipe.'], [272, 100, 'Control panel with display.']] };

  D['plumbing/sump'] = { art: [
      L(0, 70, 320, 70, 'g'), R(100, 70, 120, 100, 'b'), P('M104 120 h112', 'w'), R(140, 130, 40, 36, 'b'),
      L(195, 130, 195, 110, 'l'), C(195, 106, 6, 'p'), L(160, 130, 160, 20, 'w'), R(154, 40, 12, 14, 'b'), R(250, 20, 40, 30, 'e')],
    marks: [[230, 92, 'Pit in the floor. Never reach in.'], [160, 148, 'Pump at the bottom.'], [212, 106, 'Float switch turns the pump on.'],
      [176, 46, 'Check valve on the discharge pipe.'], [270, 60, 'High water alarm box.']] };

  D['plumbing/ejector'] = { art: [
      L(0, 70, 320, 70, 'g'), R(100, 70, 120, 100, 'b'), R(96, 62, 128, 8, 'p'), L(130, 62, 130, 18, 'l'),
      L(190, 62, 190, 18, 'w'), R(184, 34, 12, 14, 'b'), L(20, 100, 100, 100, 'w'), R(250, 20, 40, 30, 'e')],
    marks: [[160, 54, 'Sealed lid. Keep it closed.'], [130, 30, 'Vent pipe up through the roof.'], [208, 40, 'Discharge pipe with check valve.'],
      [50, 88, 'Waste comes in from the basement restrooms.'], [270, 60, 'Alarm panel.']] };

  D['plumbing/flush'] = { art: [
      L(30, 10, 30, 170, 'g'), L(30, 50, 90, 50, 'w'), R(60, 42, 20, 16, 'b'), R(90, 34, 30, 60, 'b', 6),
      L(120, 70, 150, 70, 'l'), L(105, 94, 105, 120, 'w'), P('M70 120 h120 q20 0 20 20 q0 26 -50 26 h-70 z', 'b')],
    marks: [[70, 30, 'Control stop with a screwdriver slot.'], [105, 22, 'Valve body. The rubber diaphragm is inside.'],
      [150, 60, 'Handle, or a sensor on automatic models.'], [118, 108, 'Flush tube down to the bowl.']] };

  D['plumbing/grease'] = { art: [
      FLOOR(160), R(90, 90, 140, 70, 'b'), R(86, 84, 148, 8, 'p'), L(20, 110, 90, 110, 'w'), L(230, 130, 300, 130, 'w'),
      P('M94 140 h132', 's'), L(160, 92, 160, 130, 'l')],
    marks: [[160, 74, 'Lid. Bolted or clamped shut.'], [50, 98, 'Inlet from kitchen sinks.'], [270, 118, 'Outlet to the sewer.'],
      [130, 150, 'Grease floats on top and stays inside.']] };

  D['plumbing/drains'] = { art: [
      L(0, 90, 150, 90, 'g'), R(40, 84, 70, 8, 'p'), L(50, 88, 100, 88, 's'), P('M65 92 v30 a10 10 0 0 0 20 0 v-10', 'w'),
      L(170, 120, 320, 120, 'g'), P('M205 120 Q245 50 285 120 Z', 'b'), VG(215, 80, 60, 40, 5, 's')],
    marks: [[75, 74, 'Floor drain grate.'], [95, 130, 'Trap under the floor holds water.'], [245, 60, 'Roof drain dome strainer.']] };

  D['plumbing/iso'] = { art: [
      L(10, 70, 140, 70, 'w'), R(55, 60, 30, 20, 'b'), L(70, 60, 120, 60, 's'),
      L(180, 120, 310, 120, 'w'), R(230, 108, 30, 24, 'b'), L(245, 108, 245, 80, 'l'), C(245, 72, 14, 'p')],
    marks: [[110, 48, 'Ball valve: lever in line with the pipe means open.'], [245, 52, 'Gate or globe valve with a round wheel.']] };

  /* ---------------- Electrical ---------------- */
  D['electrical/gear'] = { art: [
      FLOOR(165), R(20, 30, 70, 135), R(90, 30, 70, 135), R(160, 30, 70, 135), R(230, 30, 70, 135),
      R(35, 50, 40, 26, 'e'), R(105, 50, 40, 26, 'e'), R(175, 50, 40, 26, 'e'), R(245, 50, 40, 26, 'e'), R(245, 100, 40, 20, 'p'), R(30, 130, 50, 20, 'e')],
    marks: [[125, 22, 'Row of tall metal cabinets.'], [55, 92, 'Large breakers behind the doors.'], [265, 128, 'Meter or display.'],
      [55, 160, 'Arc flash warning label. Do not open.']] };

  D['electrical/xfmr'] = { art: [
      FLOOR(165), R(90, 30, 140, 135), HG(100, 40, 120, 20, 3), HG(100, 135, 120, 20, 3), R(130, 80, 60, 30, 'p'), L(160, 30, 160, 8, 'e')],
    marks: [[160, 20, 'Conduit with big wires on top or side.'], [160, 94, 'Nameplate with voltages.'],
      [160, 146, 'Vents. Keep them clear.']] };

  D['electrical/panel'] = { art: [
      R(80, 20, 130, 150), R(120, 30, 50, 18, 'e'),
      R(100, 56, 40, 8, 'k2'), R(150, 56, 40, 8, 'k2'), R(100, 70, 40, 8, 'k2'), R(150, 70, 40, 8, 'k2'), R(100, 84, 40, 8, 'k2'), R(150, 84, 40, 8, 'k2'),
      R(100, 98, 40, 8, 'k2'), R(150, 98, 40, 8, 'k2'), R(100, 112, 40, 8, 'k2'), R(150, 112, 40, 8, 'k2'), R(100, 126, 40, 8, 'k2'), R(150, 126, 40, 8, 'k2'),
      R(10, 30, 60, 90, 'p'), HG(10, 30, 60, 90, 6), P('M230 100 h70 m-8 -6 l8 6 l-8 6 m-70 -12 l-8 6 l8 6', 's')],
    marks: [[145, 14, 'Main breaker at the top.'], [145, 152, 'Rows of breakers.'], [40, 132, 'Directory card on the door.'],
      [265, 88, 'Keep 3 feet clear in front.']] };

  D['electrical/breaker'] = { art: [
      R(40, 40, 60, 100, 'b', 4), R(60, 50, 20, 26, 'e'), T(70, 160, 'ON', 't'),
      R(130, 40, 60, 100, 'b', 4), R(150, 78, 20, 24, 'e'), T(160, 160, 'TRIPPED', 't'),
      R(220, 40, 60, 100, 'b', 4), R(240, 104, 20, 26, 'e'), T(250, 160, 'OFF', 't')],
    marks: [[70, 30, 'Handle up: on.'], [160, 30, 'Handle in the middle: tripped.'], [250, 30, 'Handle down: off.']] };

  D['electrical/disc'] = { art: [
      R(110, 40, 90, 110, 'b', 4), L(200, 80, 230, 60, 'e'), R(226, 52, 12, 16, 'e'), R(130, 60, 50, 20, 'p'),
      L(155, 150, 155, 175, 'l'), L(155, 40, 155, 10, 'l'), R(120, 120, 70, 16, 'k2')],
    marks: [[246, 46, 'Handle on the side. Down is off.'], [155, 70, 'Label shows what it feeds.'], [155, 128, 'Hasp for a lockout padlock.'],
      [170, 10, 'Conduit to the equipment.']] };

  D['electrical/vfd'] = { art: [
      R(100, 20, 120, 150, 'b', 6), R(130, 40, 60, 30, 'p'), C(140, 88, 5), C(160, 88, 5), C(180, 88, 5),
      HG(110, 130, 100, 30, 4), R(120, 105, 80, 14, 'e')],
    marks: [[160, 32, 'Display shows speed or fault codes.'], [200, 88, 'Keypad buttons.'], [160, 112, 'Warning label: stored energy.'],
      [160, 162, 'Cooling vents. Keep them clear.']] };

  D['electrical/starter'] = { art: [
      R(100, 20, 120, 150, 'b', 6), C(130, 60, 14, 'p'), L(130, 60, 138, 50, 's'), T(108, 44, 'H', 't', 10), T(130, 40, 'O', 't', 10), T(152, 44, 'A', 't', 10),
      C(180, 54, 7, 'k'), C(200, 54, 7, 'p'), C(160, 120, 10, 'b'), T(160, 124, 'R', 't', 10)],
    marks: [[130, 84, 'Hand-Off-Auto switch. Leave it in Auto.'], [190, 72, 'Run and fault lights.'], [182, 130, 'Overload reset button.']] };

  D['electrical/gen'] = { art: [
      FLOOR(165), R(20, 135, 280, 30, 'b'), R(20, 50, 280, 85), HG(30, 60, 80, 65, 6, 'l'), R(130, 62, 60, 60, 'e'),
      R(140, 72, 40, 22, 'p'), R(230, 22, 14, 28, 'b')],
    marks: [[70, 92, 'Air louvers.'], [160, 84, 'Control panel. Switch must be in Auto.'], [237, 14, 'Exhaust. Carbon monoxide.'],
      [160, 152, 'Fuel tank under the base on many units.']] };

  D['electrical/ats'] = { art: [
      FLOOR(165), R(100, 20, 120, 145, 'b'), R(120, 36, 80, 30, 'p'), C(135, 86, 7, 'k'), C(185, 86, 7, 'b'),
      T(135, 106, 'N', 't', 11), T(185, 106, 'E', 't', 11)],
    marks: [[160, 28, 'Display or controller.'], [120, 86, 'Normal (utility) source light.'], [200, 86, 'Emergency (generator) source light.']] };

  D['electrical/ups'] = { art: [
      FLOOR(168), R(80, 20, 70, 148, 'b', 4), R(92, 34, 46, 26, 'p'), R(170, 40, 70, 128, 'b', 4), HG(176, 40, 58, 128, 6)],
    marks: [[115, 26, 'Display. Check for alarms.'], [205, 30, 'Battery cabinet.'], [115, 150, 'Beeping means it is on battery or has a problem.']] };

  D['electrical/gfci'] = { art: [
      R(110, 20, 100, 150, 'b', 10), R(130, 34, 60, 40, 'b', 6), R(130, 116, 60, 40, 'b', 6), R(138, 82, 20, 22, 'p'), R(162, 82, 20, 22, 'e'),
      L(150, 46, 150, 58, 'l'), L(170, 46, 170, 58, 'l'), C(160, 66, 3, 'l')],
    marks: [[120, 92, 'TEST button.'], [200, 92, 'RESET button. Press firmly.'], [160, 140, 'May also protect other outlets on the circuit.']] };

  D['electrical/lighting'] = { art: [
      L(0, 40, 320, 40, 'g'), R(30, 40, 120, 16, 'p'), HG(30, 40, 120, 16, 2, 's'), E(200, 46, 14, 8, 'b'),
      R(240, 90, 30, 46, 'b', 4), R(250, 102, 10, 20, 'k2'), C(70, 140, 10, 'b'), L(70, 150, 70, 172, 'l')],
    marks: [[90, 70, 'Light fixture in the ceiling.'], [200, 66, 'Occupancy sensor.'], [255, 152, 'Wall switch or sensor.'],
      [92, 140, 'Photocell for outdoor lights.']] };

  /* ---------------- Fire & life safety ---------------- */
  D['fire/facp'] = { art: [
      R(80, 15, 160, 155, 'r', 6), R(110, 32, 100, 40, 'p'), C(110, 92, 6, 'gl'), C(140, 92, 6, 'rl'), C(170, 92, 6, 'yl'), C(200, 92, 6, 'yl'),
      R(110, 116, 100, 30, 'b', 4), C(222, 158, 5, 'b')],
    marks: [[160, 52, 'Display shows messages.'], [110, 106, 'Green power light. Normal.'], [140, 106, 'Red: alarm.'],
      [185, 106, 'Yellow: supervisory and trouble.'], [160, 131, 'Buttons. Only press if trained.'], [234, 166, 'Key lock.']] };

  D['fire/detectors'] = { art: [
      L(0, 30, 320, 30, 'g'), R(40, 30, 50, 8, 'b'), E(65, 44, 26, 8, 'b'), C(65, 46, 2, 'rl'),
      R(140, 30, 40, 6, 'b'), E(160, 40, 18, 6, 'b'), R(200, 90, 110, 40, 'b'), R(230, 70, 40, 22, 'b'), L(250, 92, 250, 120, 's')],
    marks: [[65, 64, 'Smoke detector with a small light.'], [160, 58, 'Heat detector.'], [250, 140, 'Duct detector on an air duct.']] };

  D['fire/pull'] = { art: [
      R(110, 30, 100, 130, 'r', 6), R(130, 70, 60, 26, 'b', 4), T(160, 60, 'FIRE', 'rt', 14), T(160, 88, 'PULL', 't', 12)],
    marks: [[160, 112, 'Handle. Pull down to set off the alarm.'], [160, 20, 'Red box near exits and stairs.']] };

  D['fire/notify'] = { art: [
      R(110, 40, 100, 110, 'r', 8), C(160, 76, 22, 'b'), R(130, 110, 60, 26, 'p'), T(160, 128, 'FIRE', 'rt', 12)],
    marks: [[160, 76, 'Horn or speaker.'], [204, 124, 'Strobe light that flashes.']] };

  D['fire/heads'] = { art: [
      L(0, 30, 320, 30, 'g'), L(20, 20, 300, 20, 'r'), L(160, 20, 160, 46, 'r'), R(150, 46, 20, 8, 'b'),
      E(160, 60, 4, 8, 'rl'), L(146, 72, 174, 72, 's'), L(40, 82, 280, 82, 'g'), R(60, 110, 200, 60, 'b')],
    marks: [[148, 46, 'Escutcheon (trim ring).'], [182, 60, 'Glass bulb. It breaks from heat.'], [160, 88, 'Deflector spreads the water.'],
      [276, 96, '18 inches clear below the heads.'], [160, 140, 'Storage stays below this line.']] };

  D['fire/riser'] = { art: [
      FLOOR(170), L(140, 10, 140, 170, 'r'), R(126, 120, 28, 30, 'b'), L(140, 120, 140, 80, 'l'), C(140, 84, 14, 'p'),
      R(154, 128, 18, 14, 'e'), R(126, 60, 28, 16, 'b'), R(154, 62, 18, 12, 'e'), gauge(110, 40), L(117, 40, 140, 40, 'r'), L(140, 100, 220, 100, 'r'), R(200, 92, 12, 16, 'b')],
    marks: [[110, 84, 'Control valve. Must stay open.'], [180, 136, 'Tamper switch on the valve.'], [180, 60, 'Flow switch.'],
      [90, 40, 'Pressure gauge.'], [230, 112, 'Main drain and test valve.']] };

  D['fire/dry'] = { art: [
      FLOOR(170), L(130, 10, 130, 170, 'r'), R(104, 80, 52, 52, 'b', 10), gauge(80, 64), gauge(80, 140), L(87, 64, 104, 90, 'l'),
      R(210, 120, 70, 50, 'b'), C(235, 130, 10, 'p'), L(210, 145, 156, 110, 'l')],
    marks: [[130, 106, 'Dry pipe valve body.'], [60, 64, 'Air pressure gauge (top).'], [60, 140, 'Water pressure gauge (bottom).'],
      [245, 112, 'Air compressor keeps the pipes filled with air.']] };

  D['fire/fdc'] = { art: [
      L(60, 10, 60, 170, 'g'), R(60, 80, 60, 30, 'b'), C(140, 80, 16, 'r'), C(140, 120, 16, 'r'), R(70, 30, 110, 26, 'p'), T(125, 48, 'FDC', 't', 12)],
    marks: [[176, 100, 'Two hose inlets with caps.'], [125, 20, 'Sign. Keep plants, snow and cars away.']] };

  D['fire/pump'] = { art: [
      FLOOR(150), R(30, 140, 190, 10, 'b'), C(70, 110, 26, 'r'), R(96, 98, 20, 24, 'b'), R(116, 88, 80, 46, 'b', 4), VG(116, 88, 80, 46, 6, 'l'),
      R(240, 40, 60, 110, 'e'), R(250, 52, 40, 22, 'p')],
    marks: [[70, 110, 'Fire pump.'], [156, 80, 'Motor or diesel engine.'], [270, 92, 'Pump controller. Do not change settings.']] };

  D['fire/ext'] = { art: [
      R(130, 50, 60, 120, 'r', 14), R(150, 30, 20, 20, 'b'), L(150, 30, 190, 22, 'l'), C(178, 40, 7, 'p'), L(164, 36, 174, 42, 's'),
      P('M150 44 q-40 10 -36 70', 'l'), R(200, 90, 30, 50, 'p')],
    marks: [[160, 18, 'Handle and pull pin with a tamper seal.'], [190, 54, 'Pressure gauge. Needle in the green.'],
      [112, 120, 'Hose and nozzle.'], [215, 150, 'Inspection tag.']] };

  D['fire/exit'] = { art: [
      R(60, 30, 200, 60, 'b', 4), T(140, 72, 'EXIT', 'rt', 28), P('M220 60 l14 0 m-6 -6 l6 6 l-6 6', 'rp'),
      R(100, 120, 120, 30, 'b', 4), C(95, 130, 14, 'p'), C(225, 130, 14, 'p'), C(160, 142, 4, 'k')],
    marks: [[60, 20, 'Exit sign. Must be lit.'], [74, 154, 'Emergency light heads.'], [160, 164, 'Test button.']] };

  D['fire/doors'] = { art: [
      L(60, 20, 60, 170, 'g'), R(60, 20, 140, 150, 'b'), L(70, 34, 150, 28, 'l'), R(70, 28, 24, 10, 'b'), R(196, 80, 6, 30, 'p'),
      C(180, 100, 5, 'b'), R(240, 90, 30, 20, 'e')],
    marks: [[110, 44, 'Door closer pulls it shut.'], [214, 74, 'Fire rating label on the edge.'], [180, 120, 'Latch must catch.'],
      [255, 124, 'Magnetic hold-open releases on alarm.']] };

  D['fire/hood'] = { art: [
      P('M40 30 h240 l-30 50 h-180 z', 'b'), L(80, 80, 80, 92, 'r'), L(160, 80, 160, 92, 'r'), L(240, 80, 240, 92, 'r'),
      R(60, 130, 200, 40, 'b'), R(290, 90, 20, 30, 'r', 3)],
    marks: [[160, 50, 'Hood over the cooking line.'], [80, 104, 'Nozzles aimed at the cooking equipment.'],
      [300, 130, 'Pull handle to set it off by hand.'], [160, 150, 'Fryers, griddles and ranges.']] };

  window.TG_DRAWINGS = D;
})();
