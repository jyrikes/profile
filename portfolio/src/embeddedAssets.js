const svgData = (title, subtitle, accent, panels) => {
  const panelMarkup = panels.map((panel, index) => {
    const x = 56 + (index % 2) * 338
    const y = 168 + Math.floor(index / 2) * 145
    return `<rect x="${x}" y="${y}" width="300" height="112" rx="12" fill="#111827" stroke="#334155"/><rect x="${x + 18}" y="${y + 18}" width="72" height="8" rx="4" fill="${accent}"/><rect x="${x + 18}" y="${y + 40}" width="220" height="7" rx="3.5" fill="#475569"/><rect x="${x + 18}" y="${y + 58}" width="180" height="7" rx="3.5" fill="#334155"/><path d="M${x + 18} ${y + 91} C ${x + 65} ${y + 62}, ${x + 112} ${y + 105}, ${x + 160} ${y + 74} S ${x + 245} ${y + 88}, ${x + 278} ${y + 55}" fill="none" stroke="${accent}" stroke-width="4"/>`
  }).join('')

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="768" height="520" viewBox="0 0 768 520"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#020617"/><stop offset="1" stop-color="#111827"/></linearGradient></defs><rect width="768" height="520" rx="22" fill="url(#bg)"/><rect x="32" y="32" width="704" height="456" rx="18" fill="#0f172a" stroke="#334155"/><circle cx="62" cy="62" r="6" fill="#ef4444"/><circle cx="82" cy="62" r="6" fill="#f59e0b"/><circle cx="102" cy="62" r="6" fill="#22c55e"/><text x="56" y="112" fill="#f8fafc" font-family="Arial, sans-serif" font-size="28" font-weight="700">${title}</text><text x="56" y="140" fill="#94a3b8" font-family="Arial, sans-serif" font-size="15">${subtitle}</text>${panelMarkup}<rect x="56" y="452" width="656" height="1" fill="#334155"/><text x="56" y="476" fill="#64748b" font-family="Arial, sans-serif" font-size="12">Sanitized technical visualization — proprietary data omitted</text></svg>`
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

export const industrialAnalyticsImage = svgData(
  'Industrial Process Analytics',
  'Time-series integration, process-state synchronization and operational reporting',
  '#38bdf8',
  ['Process state', 'Formation time', 'Cooling analysis', 'Section comparison'],
)

export const measurementPlatformImage = svgData(
  'Industrial Measurement Platform',
  'Multi-device acquisition, configurable cycles and real-time supervision',
  '#a78bfa',
  ['Device status', 'Live measurements', 'Reference ranges', 'Historical export'],
)

export const observabilityDashboardImage = svgData(
  'Infrastructure Observability',
  'Distributed monitoring across industrial, corporate and cloud environments',
  '#34d399',
  ['Hosts and proxies', 'Service availability', 'Alerts', 'Cloud resources'],
)

export const detailedEnglishCv = '/profile/Jose_Yrikes_Detailed_English_CV.html'
