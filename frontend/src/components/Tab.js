import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Card from './Card';
export default function Navbar() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <div style={{'backgroundColor' : 'lightgray', 'boxShadow' : '5px 10px #888888', 'borderRadius' : '10px', 'padding' : '2%'}}>
        <TabContext value={value} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Summarizer" value="1" style={{'fontFamily' : 'Lexend'}}/>
            <Tab label="Paraphraser" value="2" style={{'fontFamily' : 'Lexend'}}/>
          </TabList>
        </Box>
        <TabPanel value="1" style={{'padding' : '1% auto 2% auto'}}><Card /></TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
      </TabContext>
      </div>
  );
}