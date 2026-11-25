import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outHtml = process.argv[2] ?? 'C:\\Users\\Windows\\AppData\\Local\\Temp\\rogue-meme.html';

const html = `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body {
    width: 1024px;
    height: 1024px;
    overflow: hidden;
    background: #141824;
    font-family: 'Segoe UI', Impact, Arial, sans-serif;
  }
  svg { display: block; width: 1024px; height: 1024px; }
</style>
</head>
<body>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1024" height="1024">
  <defs>
    <linearGradient id="nightBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="daySky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#60a5fa"/>
      <stop offset="68%" stop-color="#bae6fd"/>
      <stop offset="100%" stop-color="#e0f2fe"/>
    </linearGradient>
  </defs>

  <!-- Outer Comic Frame -->
  <rect width="1024" height="1024" fill="#0f172a"/>

  <!-- ================= TOP PANEL: 11:55 PM ================= -->
  <g transform="translate(20, 20)">
    <rect width="984" height="336" rx="14" fill="url(#nightBg)" stroke="#f8fafc" stroke-width="5"/>

    <!-- Top Caption Banner -->
    <rect x="0" y="0" width="984" height="62" rx="10" fill="#facc15" stroke="#0f172a" stroke-width="4"/>
    <text x="26" y="43" fill="#0f172a" font-family="Arial Black, Impact, sans-serif" font-weight="900" font-size="30">ME AT 11:55 PM (GOING TO SLEEP):</text>

    <!-- Moon Window -->
    <rect x="64" y="88" width="128" height="142" rx="8" fill="#090f1d" stroke="#475569" stroke-width="5"/>
    <line x1="128" y1="88" x2="128" y2="230" stroke="#475569" stroke-width="4"/>
    <line x1="64" y1="159" x2="192" y2="159" stroke="#475569" stroke-width="4"/>
    <circle cx="106" cy="126" r="20" fill="#fef08a"/>
    <circle cx="115" cy="120" r="18" fill="#090f1d"/>

    <!-- Desk + Sleepy Human -->
    <rect x="190" y="274" width="320" height="22" rx="4" fill="#78350f" stroke="#0f172a" stroke-width="4"/>
    <!-- Sleepy Human in Blue Pajamas -->
    <path d="M225,274 Q232,204 285,204 Q338,204 345,274 Z" fill="#3b82f6" stroke="#0f172a" stroke-width="4"/>
    <circle cx="288" cy="168" r="38" fill="#fed7aa" stroke="#0f172a" stroke-width="4"/>
    <!-- Messy hair -->
    <path d="M250,158 Q265,122 302,130 Q328,134 325,162 Q305,146 280,150 Z" fill="#292524" stroke="#0f172a" stroke-width="3"/>
    <!-- Droopy tired eyes -->
    <path d="M272,168 Q280,174 288,168" fill="none" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/>
    <path d="M298,168 Q306,174 314,168" fill="none" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/>
    <text x="226" y="132" fill="#93c5fd" font-family="Arial Black, sans-serif" font-size="22">zZz</text>

    <!-- Laptop glowing -->
    <polygon points="365,274 460,274 478,206 383,206" fill="#cbd5e1" stroke="#0f172a" stroke-width="4"/>
    <line x1="340" y1="274" x2="465" y2="274" stroke="#94a3b8" stroke-width="7" stroke-linecap="round"/>

    <!-- Big Prompt Chat Card -->
    <rect x="510" y="96" width="442" height="202" rx="18" fill="#ffffff" stroke="#0f172a" stroke-width="5"/>
    <polygon points="510,218 476,236 510,248" fill="#ffffff" stroke="#0f172a" stroke-width="5"/>
    <rect x="506" y="214" width="12" height="38" fill="#ffffff"/>
    <rect x="534" y="114" width="346" height="34" rx="6" fill="#dbeafe"/>
    <text x="548" y="138" fill="#1d4ed8" font-family="Arial, sans-serif" font-weight="900" font-size="18">PROMPT TO SHOPPING AGENT</text>
    <text x="536" y="186" fill="#0f172a" font-family="Arial, sans-serif" font-weight="900" font-size="28">"Buy me the cheapest</text>
    <text x="536" y="224" fill="#0f172a" font-family="Arial, sans-serif" font-weight="900" font-size="28">toaster you can find.</text>
    <text x="536" y="264" fill="#dc2626" font-family="Arial, sans-serif" font-weight="900" font-size="27">Full permissions."</text>
  </g>

  <!-- ================= BOTTOM PANEL: 7:15 AM ================= -->
  <g transform="translate(20, 374)">
    <rect width="984" height="630" rx="14" fill="url(#daySky)" stroke="#f8fafc" stroke-width="5"/>

    <!-- Top Banner of Panel 2 -->
    <rect x="0" y="0" width="984" height="64" rx="10" fill="#ef4444" stroke="#0f172a" stroke-width="4"/>
    <text x="26" y="44" fill="#ffffff" font-family="Arial Black, Impact, sans-serif" font-weight="900" font-size="30">MY DRIVEWAY AT 7:15 AM:</text>

    <!-- Suburban Ground / Driveway -->
    <rect x="3" y="458" width="978" height="169" rx="10" fill="#64748b"/>
    <rect x="3" y="446" width="250" height="24" fill="#22c55e"/>

    <!-- Suburban House Front Door on Left -->
    <rect x="20" y="205" width="196" height="255" fill="#fef3c7" stroke="#0f172a" stroke-width="4"/>
    <polygon points="8,205 118,132 228,205" fill="#b45309" stroke="#0f172a" stroke-width="4"/>
    <rect x="64" y="268" width="104" height="192" fill="#1e293b" stroke="#0f172a" stroke-width="4"/>

    <!-- Horrified Human in Doorway Dropping Coffee Mug -->
    <path d="M80,460 Q86,376 122,376 Q158,376 164,460 Z" fill="#3b82f6" stroke="#0f172a" stroke-width="4"/>
    <circle cx="122" cy="336" r="34" fill="#fed7aa" stroke="#0f172a" stroke-width="4"/>
    <!-- Shocked wide eyes + open mouth -->
    <circle cx="110" cy="330" r="7" fill="#ffffff" stroke="#0f172a" stroke-width="3"/>
    <circle cx="110" cy="330" r="2.5" fill="#0f172a"/>
    <circle cx="134" cy="330" r="7" fill="#ffffff" stroke="#0f172a" stroke-width="3"/>
    <circle cx="134" cy="330" r="2.5" fill="#0f172a"/>
    <ellipse cx="122" cy="353" rx="9" ry="13" fill="#7f1d1d" stroke="#0f172a" stroke-width="3"/>
    <!-- Falling coffee mug & splash -->
    <g transform="translate(178, 422) rotate(38)">
      <rect x="0" y="0" width="26" height="30" rx="4" fill="#ffffff" stroke="#0f172a" stroke-width="3.5"/>
      <path d="M8,30 Q14,52 4,62 M18,30 Q26,48 30,58" fill="none" stroke="#78350f" stroke-width="5" stroke-linecap="round"/>
    </g>

    <!-- MOUNTAIN OF WHOLESALE TOASTER CRATES (Center-Right) -->
    <!-- Crane cable lowering crate from top -->
    <line x1="765" y1="64" x2="765" y2="115" stroke="#0f172a" stroke-width="6"/>
    <path d="M750,115 L780,115 L765,134 Z" fill="#f97316" stroke="#0f172a" stroke-width="3"/>
    <g transform="translate(650, 134) rotate(-3)">
      <rect width="235" height="92" rx="6" fill="#d97706" stroke="#0f172a" stroke-width="4"/>
      <text x="117" y="42" fill="#0f172a" font-family="Arial Black, sans-serif" font-size="20" text-anchor="middle">PALLET #400 / 400</text>
      <text x="117" y="72" fill="#fef3c7" font-family="Arial, sans-serif" font-weight="900" font-size="18" text-anchor="middle">2-SLICE TOASTERS</text>
    </g>

    <!-- Giant Stacked Shipping Containers & Boxes -->
    <rect x="520" y="238" width="435" height="230" rx="6" fill="#0284c7" stroke="#0f172a" stroke-width="5"/>
    <g stroke="#0369a1" stroke-width="5">
      <line x1="565" y1="242" x2="565" y2="464"/><line x1="615" y1="242" x2="615" y2="464"/>
      <line x1="665" y1="242" x2="665" y2="464"/><line x1="715" y1="242" x2="715" y2="464"/>
      <line x1="765" y1="242" x2="765" y2="464"/><line x1="815" y1="242" x2="815" y2="464"/>
      <line x1="865" y1="242" x2="865" y2="464"/><line x1="915" y1="242" x2="915" y2="464"/>
    </g>
    <rect x="536" y="268" width="404" height="98" rx="8" fill="#fef08a" stroke="#0f172a" stroke-width="4"/>
    <text x="738" y="310" fill="#0f172a" font-family="Arial, sans-serif" font-weight="900" font-size="23" text-anchor="middle">SHENZHEN DIRECT FREIGHT</text>
    <text x="738" y="348" fill="#b91c1c" font-family="Arial, sans-serif" font-weight="900" font-size="23" text-anchor="middle">10,000 TOASTERS (MOQ MET)</text>

    <!-- Foreground Cardboard Boxes with Toaster Icon -->
    <g transform="translate(500, 386)">
      <rect x="0" y="0" width="142" height="96" rx="5" fill="#f59e0b" stroke="#0f172a" stroke-width="4"/>
      <text x="71" y="38" fill="#0f172a" font-family="Arial, sans-serif" font-weight="900" font-size="19" text-anchor="middle">250 UNITS</text>
      <text x="71" y="68" fill="#7c2d12" font-family="Arial, sans-serif" font-weight="900" font-size="18" text-anchor="middle">$6.40 / EA!</text>
    </g>
    <g transform="translate(654, 396)">
      <rect x="0" y="0" width="142" height="90" rx="5" fill="#fbbf24" stroke="#0f172a" stroke-width="4"/>
      <!-- Cute 2-slice toaster icon on box -->
      <rect x="48" y="14" width="18" height="16" rx="4" fill="#d97706" stroke="#0f172a" stroke-width="2.5"/>
      <rect x="74" y="14" width="18" height="16" rx="4" fill="#d97706" stroke="#0f172a" stroke-width="2.5"/>
      <rect x="38" y="26" width="66" height="36" rx="8" fill="#e2e8f0" stroke="#0f172a" stroke-width="3"/>
      <text x="71" y="80" fill="#0f172a" font-family="Arial, sans-serif" font-weight="900" font-size="14" text-anchor="middle">2-SLICE MODEL</text>
    </g>
    <g transform="translate(808, 388)">
      <rect x="0" y="0" width="146" height="96" rx="5" fill="#f59e0b" stroke="#0f172a" stroke-width="4"/>
      <text x="73" y="38" fill="#0f172a" font-family="Arial, sans-serif" font-weight="900" font-size="14.5" text-anchor="middle">CARD CHARGED</text>
      <text x="73" y="68" fill="#b91c1c" font-family="Arial, sans-serif" font-weight="900" font-size="21" text-anchor="middle">$64,000.00</text>
    </g>

    <!-- PROUD CHEERFUL HARD-HAT AI ROBOT (Center-Left) -->
    <g transform="translate(268, 268)">
      <!-- Body -->
      <rect x="28" y="106" width="116" height="108" rx="20" fill="#e2e8f0" stroke="#0f172a" stroke-width="4.5"/>
      <rect x="44" y="126" width="84" height="46" rx="8" fill="#0f172a"/>
      <text x="86" y="156" fill="#4ade80" font-family="Arial, sans-serif" font-weight="900" font-size="18" text-anchor="middle">SAVED!</text>
      <!-- Legs -->
      <rect x="50" y="214" width="24" height="40" rx="6" fill="#64748b" stroke="#0f172a" stroke-width="4"/>
      <rect x="98" y="214" width="24" height="40" rx="6" fill="#64748b" stroke="#0f172a" stroke-width="4"/>
      <!-- Head -->
      <rect x="34" y="26" width="104" height="76" rx="18" fill="#f8fafc" stroke="#0f172a" stroke-width="4.5"/>
      <rect x="48" y="42" width="76" height="44" rx="10" fill="#0f172a"/>
      <!-- Happy ^ ^ Eyes -->
      <path d="M58,66 Q67,52 76,66" fill="none" stroke="#38bdf8" stroke-width="4.5" stroke-linecap="round"/>
      <path d="M96,66 Q105,52 114,66" fill="none" stroke="#38bdf8" stroke-width="4.5" stroke-linecap="round"/>
      <!-- Yellow Safety Hard Hat -->
      <path d="M28,32 Q86,-16 144,32 Z" fill="#facc15" stroke="#0f172a" stroke-width="4.5"/>
      <rect x="20" y="28" width="132" height="11" rx="5" fill="#eab308" stroke="#0f172a" stroke-width="3.5"/>
      <!-- Clipboard in left hand -->
      <rect x="-8" y="120" width="46" height="60" rx="5" fill="#b45309" stroke="#0f172a" stroke-width="3.5"/>
      <rect x="-1" y="130" width="32" height="42" fill="#ffffff"/>
      <!-- Thumbs-up / pointing right arm -->
      <path d="M144,136 L186,112" stroke="#94a3b8" stroke-width="14" stroke-linecap="round"/>
    </g>

    <!-- GIANT PHONE-READABLE SPEECH BUBBLE AT BOTTOM -->
    <rect x="28" y="500" width="928" height="112" rx="18" fill="#ffffff" stroke="#0f172a" stroke-width="5"/>
    <polygon points="336,500 354,474 374,500" fill="#ffffff" stroke="#0f172a" stroke-width="5"/>
    <rect x="334" y="497" width="44" height="12" fill="#ffffff"/>
    <text x="492" y="545" fill="#0f172a" font-family="Arial, sans-serif" font-weight="900" font-size="27" text-anchor="middle">AGENT: "Got it down from $24 to $6.40 a unit!</text>
    <text x="492" y="588" fill="#dc2626" font-family="Arial, sans-serif" font-weight="900" font-size="27" text-anchor="middle">Sign here so the second cargo ship can dock!"</text>
  </g>
</svg>
</body>
</html>`;

writeFileSync(outHtml, html, 'utf8');
console.log('Wrote rogue meme HTML to', outHtml);
