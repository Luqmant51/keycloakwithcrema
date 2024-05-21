import { useSession } from 'next-auth/react';
import WorkspaceCard from '../components/workspace';
import { WorkspaceType } from '../../../types/node-env';
import { createMockWorkspace } from '@/fixtures/factory/workspace';
import { useState } from 'react';

const Welcome = async () => {
  const { data: session } = useSession();
  const userName = session?.user?.name;
  const user = session?.user;

  const initialPrivateWorkspace: WorkspaceType = createMockWorkspace(userName!, false);
  const initialPublicWorkspace: WorkspaceType = createMockWorkspace(userName!, true);

  const [workspaces, setWorkspaces] = useState<WorkspaceType[]>([initialPrivateWorkspace, initialPublicWorkspace]);

  const addPublicWorkspace = () => {
    const newPublicWorkspace = createMockWorkspace(userName!, true);
    setWorkspaces([...workspaces, newPublicWorkspace]);
  };
  return (<>
    <WorkspaceCard workspaces={workspaces} user={user} />
  </>
  );
};

export default Welcome;
