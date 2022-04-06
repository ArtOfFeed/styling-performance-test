import React from 'react';
import {Item, TabList, TabPanels, Tabs, ProgressBar, TextField, Checkbox, Switch, Provider, defaultTheme} from '@adobe/react-spectrum';
import Add from '@spectrum-icons/workflow/Add';
import { blockItemStyles } from './styles';

const BlockItem = () => {
    return (
        <div style={blockItemStyles as React.CSSProperties}>
            <ProgressBar label="" value={50} />
            <TextField label="" />
            <Checkbox>Default Checkbox</Checkbox>
            <Switch></Switch>
            <Add aria-label="icon" />
        </div>
    )
}

export const Adobe = () => {
    return (
        <Provider theme={defaultTheme} colorScheme="light">
            <Tabs aria-label="History of Ancient Rome">
                <TabList>
                    <Item key="FoR">Tab 1</Item>
                    <Item key="MaR">Tab 2</Item>
                    <Item key="Emp">Tab 3</Item>
                </TabList>
                <TabPanels>
                    <Item key="FoR">
                        <BlockItem />
                    </Item>
                    <Item key="MaR">
                        <BlockItem />
                    </Item>
                    <Item key="Emp">
                        <BlockItem />
                    </Item>
                </TabPanels>
            </Tabs>
        </Provider>
    )
}