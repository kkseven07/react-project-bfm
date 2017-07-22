const {BrowserWindow} = require('electron-prebuilt')
let win = new BrowserWindow({width: 800, height: 600})
win.on('closed', () => {
  win = null
})

win.loadURL('https://github.com')
// const pdfOptions={pageSize:{width:500,height:500}}
// win.webContents.printToPDF(pdfOptions,()=>console.log("done"))

win.webContents.on('did-finish-load', () => {
  // Use default printing options
  win.webContents.printToPDF({}, (error, data) => {
    if (error) throw error
    fs.writeFile('/tmp/print.pdf', data, (error) => {
      if (error) throw error
      console.log('Write PDF successfully.')
    })
  })
})