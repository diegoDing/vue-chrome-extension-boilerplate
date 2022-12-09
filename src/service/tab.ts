export async function getAllTabs() {
  return await chrome.tabs.query({})
}
