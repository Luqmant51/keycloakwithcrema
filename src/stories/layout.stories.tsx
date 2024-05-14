import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { fn } from '@storybook/test';
import PrimaryAppBar from '@/@devdocs/components/AppLayout/DefaultLayout/AppHeaderCustom';

const meta: Meta<typeof Button> = {
    title: 'Example/PrimaryAppBarStory',
    component: PrimaryAppBar,
    args: { onClick: fn() },
};

export default meta;

export const PrimaryAppBarStoryCloseMenu: StoryObj<typeof PrimaryAppBar> = {
    render: (args) => (
        <div>
            <PrimaryAppBar />
        </div>
    ),
};
export const PrimaryAppBarStoryOpenMenu: StoryObj<typeof PrimaryAppBar> = {
    render: (args) => (
        <div>
            <PrimaryAppBar open={true} />
        </div>
    ),
};
