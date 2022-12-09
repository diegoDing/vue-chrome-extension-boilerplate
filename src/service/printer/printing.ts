async function getPrinters() {
  chrome.printing.getPrinters((Printer) => {
    console.log(Printer)
  })
}
export default {
  getPrinters
}
