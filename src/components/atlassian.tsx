import React from 'react';
import ProgressBar from '@atlaskit/progress-bar';
import Tabs, { Tab, TabList, TabPanel } from '@atlaskit/tabs';
import Textfield from '@atlaskit/textfield';
import { Checkbox } from '@atlaskit/checkbox';
import Toggle from '@atlaskit/toggle';
import AddIcon from '@atlaskit/icon/glyph/add';
import { blockItemStyles } from './styles';

const BlockItem = () => {
    return (
        <div style={blockItemStyles as React.CSSProperties}>
            <ProgressBar value={0.4} ariaLabel="Progress bar label" />
            <Textfield name="basic" aria-label="default text field" />
            <Checkbox
                value="default checkbox"
                label="Default checkbox"
                onChange={() => {}}
                name="checkbox-default"
                testId="cb-default"
            />
            <Toggle id="toggle-default" />
            <AddIcon label="icon" />
        </div>
    )
}


export const Atlassian = () => {
  return (
    <Tabs
      onChange={(index) => console.log('Selected Tab', index + 1)}
      id="default"
    >
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabList>
      <TabPanel>
        <BlockItem />
      </TabPanel>
      <TabPanel>
        <BlockItem />
      </TabPanel>
      <TabPanel>
        <BlockItem />
      </TabPanel>
    </Tabs>
  );
}