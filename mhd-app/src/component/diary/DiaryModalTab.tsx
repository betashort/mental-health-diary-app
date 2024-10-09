import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import React from 'react'
import DiaryForm from './DiaryForm';
import ColumnForm from './ColumnForm';
import MentalForm from './MentalForm';



function DiaryModalTab() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="日記" value="1" />
            <Tab label="コラム法" value="2" />
            <Tab label="体調レベル" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <DiaryForm/>
        </TabPanel>
        <TabPanel value="2">
          <ColumnForm />
        </TabPanel>
        <TabPanel value="3">
          <MentalForm />
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default DiaryModalTab