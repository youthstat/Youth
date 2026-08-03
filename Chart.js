const STORAGE_KEY = 'cybersafe_stats';
const DEFAULT_DATA = { total: 287, ... }; // keep the mock numbers as seed

function getData() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try { return JSON.parse(stored); } catch(e) { /* fall through */ }
  }
  // Seed default data
  const defaultData = { ...DEFAULT_DATA, lastUpdated: Date.now() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData));
  return defaultData;
}

function saveData(data) {
  data.lastUpdated = Date.now();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
const stats = getData(); // load current
stats.total += 1;
stats.countries[country] = (stats.countries[country] || 0) + 1;
stats.experienced[experienced] = (stats.experienced[experienced] || 0) + 1;
stats.witnessed[witnessed] = (stats.witnessed[witnessed] || 0) + 1;
stats.reporting[reporting] = (stats.reporting[reporting] || 0) + 1;
stats.confidence[currentConfidence] = (stats.confidence[currentConfidence] || 0) + 1;
saveData(stats);
renderAll(stats);
