const { zipFunctions } = require('@netlify/zip-it-and-ship-it')

const zipNetlifyFunctions = async function () {
    const archives = await zipFunctions('functions', 'functions-dist', {
      archiveFormat: 'zip',
    })
  
    return archives
  }