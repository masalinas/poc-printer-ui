import { useState } from 'react'

import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import {generateReport} from './services/PrinterService'

import './App.css'

function App() {
  const [sampleId, setSampleId] = useState('')

  const handleGenerateReportChange = (event: any) => {
    setSampleId(event.target.value)
  }

  const handleGenerateReportClick = async () => {
    console.log("Generating the report with sample Id: " + sampleId)

    try {
      const file = await generateReport(sampleId)
     
      // convert file stream to blob object
      var blob = new Blob([file], { type: 'application/pdf' });
      var url = URL.createObjectURL(blob);

      console.log("Report generated for Sample ID: " + sampleId)

      // show blob result
      window.open(url);          
    } catch(error) {
      console.warn("Resport not generated for Sample ID: " + sampleId)

      console.error(error)
    }    
  }

  return (
    <Grid container>
      <Grid item>
        <TextField label="Select Sample ID" variant="outlined" onChange={handleGenerateReportChange} />
      </Grid>

      <Grid item alignItems="stretch" style={{ display: "flex" }}>
        <Button color="secondary" onClick={handleGenerateReportClick} variant="contained">
          Generate report
        </Button>
      </Grid>
    </Grid>
  )
}

export default App
