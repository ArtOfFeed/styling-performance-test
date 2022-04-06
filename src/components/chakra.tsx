import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, ChakraProvider, Progress, Input, Checkbox, Switch} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { blockItemStyles } from './styles';

const BlockItem = () => {
    return (
        <div style={blockItemStyles as React.CSSProperties}>
            <Progress value={40} />
            <Input placeholder='Basic usage' />
            <Checkbox>Default checkbox</Checkbox>
            <Switch id='email-alerts' />
            <AddIcon />
        </div>
    )
}

export const Chakra = () => {
    return (
        <ChakraProvider>
            <Tabs>
                <TabList>
                    <Tab>Tab 1</Tab>
                    <Tab>Tab 2</Tab>
                    <Tab>Tab 3</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <BlockItem />
                    </TabPanel>
                    <TabPanel>
                        <BlockItem />
                    </TabPanel>
                    <TabPanel>
                        <BlockItem />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </ChakraProvider>
    )
}
