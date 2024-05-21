import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import WorkspaceCard from '@/modules/components/workspace';
import PrimaryAppBar from '@/@devdocs/components/AppLayout/DefaultLayout/AppHeaderCustom';
import Workspace from '@/modules/workspace';
import { SessionProvider } from 'next-auth/react';

export default {
  title: 'Components/WorkspaceCard',
  component: WorkspaceCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta;

export const WorkSpacesStory: StoryObj<typeof WorkspaceCard> = {
  render: (args) => {
    return (<>
      <PrimaryAppBar />
      <SessionProvider>
        <Workspace />
      </SessionProvider>
    </>
    );
  }
};
