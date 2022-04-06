import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import LinearProgress from '@mui/material/LinearProgress';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import AddIcon from '@mui/icons-material/Add';
import { blockItemStyles } from './styles';

const BlockItem = () => {
    return (
        <div style={blockItemStyles as React.CSSProperties}>
            <LinearProgress variant="determinate" value={40} />
            <TextField id="filled-basic" label="" variant="outlined" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Default checkbox" />
            <Switch />
            <AddIcon />
        </div>
    )
}

export const Material = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Tab 1" value="1" />
            <Tab label="Tab 2" value="2" />
            <Tab label="Tab 3" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
            <BlockItem />
        </TabPanel>
        <TabPanel value="2">
            <BlockItem />
        </TabPanel>
        <TabPanel value="3">
            <BlockItem />
        </TabPanel>
      </TabContext>
    </Box>
  );
}