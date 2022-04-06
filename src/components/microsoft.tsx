import * as React from 'react';
import { Label, Pivot, PivotItem } from '@fluentui/react';
import { ProgressIndicator } from '@fluentui/react/lib/ProgressIndicator';
import { TextField } from '@fluentui/react/lib/TextField';
import { Checkbox } from '@fluentui/react/lib/Checkbox';
import { Toggle } from '@fluentui/react/lib/Toggle';
import { FontIcon } from '@fluentui/react/lib/Icon';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import { blockItemStyles } from './styles';

initializeIcons();

const BlockItem = () => {
    return (
        <div style={blockItemStyles as React.CSSProperties}>
            <ProgressIndicator percentComplete={0.4} />
            <TextField />
            <Checkbox label="Default checkbox" />
            <Toggle />
            <FontIcon iconName="Add" />
        </div>
    )
}

export const Microsoft: React.FunctionComponent = () => {
  return (
    <Pivot aria-label="Basic Pivot Example">
      <PivotItem headerText="Tab 1">
        <Label>
            <BlockItem />
        </Label>
      </PivotItem>
      <PivotItem headerText="Tab 2">
        <Label>
            <BlockItem />
        </Label>
      </PivotItem>
      <PivotItem headerText="Tab 3">
        <Label>
            <BlockItem />
        </Label>
      </PivotItem>
    </Pivot>
  );
};