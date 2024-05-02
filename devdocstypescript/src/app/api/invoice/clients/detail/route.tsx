import { clientList } from '@devdocs/fakedb/invoice';
import { NextRequest } from 'next/server';
import { ClientType } from '@devdocs/types/models/invoice';

let clientsData = clientList;
export const GET = async (config: NextRequest) => {
  try {
    const params = Object.fromEntries(config.nextUrl.searchParams);
    const response = clientsData.find((client) => client.id === params.id);

    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    return new Response('Internal Server Error', { status: 500 });
  }
};
