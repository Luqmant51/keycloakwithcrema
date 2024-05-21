import { useState } from 'react';
import WorkspaceCard from '../components/workspace';
import { DevButton } from '../components/Button';
import { WorkspaceType, UserType } from '../../../types/node-env';
import { createMockWorkspace } from '@/fixtures/factory/workspace';
import { useSession } from 'next-auth/react';
import { createMockUser } from '@/fixtures/factory/user';
import { faker } from '@faker-js/faker';

const Workspace = () => {
  const user = createMockUser({
    id: '12345',
    name: 'Muhammad Luqman',
    email: 'luqmant51@gmail.com',
    identity_id: faker.string.uuid(),
  });
  const { data: session } = useSession();
  const userName = session ? session?.user?.name : user.name;

  const initialPrivateWorkspace: WorkspaceType = createMockWorkspace(userName!, false);
  const initialPublicWorkspace: WorkspaceType = createMockWorkspace(userName!, true);

  const [workspaces, setWorkspaces] = useState<WorkspaceType[]>([initialPrivateWorkspace, initialPublicWorkspace]);

  const addPublicWorkspace = () => {
    const newPublicWorkspace = createMockWorkspace(user.name, true);
    setWorkspaces([...workspaces, newPublicWorkspace]);
  };

  return (
    <div>
      <h1>Welcome to the Dev Docs</h1>
      <WorkspaceCard workspaces={workspaces} user={user} />
      <DevButton
        variant='contained'
        color='primary'
        label='Add Public Workspace'
        size='medium'
        onClick={addPublicWorkspace}
      />

    </div>
  );
};

export default Workspace;
