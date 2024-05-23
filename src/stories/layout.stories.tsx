import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import PrimaryAppBar from '@/@devdocs/components/AppLayout/DefaultLayout/AppHeaderCustom';

const meta: Meta<typeof PrimaryAppBar> = {
  title: 'Components/PrimaryAppBarStory',
  component: PrimaryAppBar,
  // parameters: {
  //     layout: 'centered',
  // },
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export default meta;

export const PrimaryAppBarStoryCloseMenu: StoryObj<typeof PrimaryAppBar> = {
  render: () => (
    <div>
      <PrimaryAppBar />
    </div>
  ),
};
export const PrimaryAppBarStoryOpenMenu: StoryObj<typeof PrimaryAppBar> = {
  render: () => (
    <div>
      <PrimaryAppBar open={true} />
    </div>
  ),
};
