import React, { useState } from 'react';
import AppList from '@devdocs/components/AppList';
import AddressCell from './AddressCell';
import { AddressesType } from '@devdocs/types/models/ecommerce/EcommerceApp';
import { addresses } from '@devdocs/fakedb';

const DeliveryAddress = () => {
  const [selectedAddress, setSelectAddress] = useState<AddressesType>(
    addresses[1],
  );
  return (
    <AppList
      delay={200}
      data={addresses}
      renderRow={(address) => (
        <AddressCell
          key={address.id}
          address={address}
          selectedAddress={selectedAddress}
          setSelectAddress={setSelectAddress}
        />
      )}
    />
  );
};

export default DeliveryAddress;
