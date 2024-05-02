import React, { createRef, useEffect } from 'react';
import MailDetailHeader from './MailDetailHeader';
import MailDetailBody from './MailDetailBody';
import { useParams } from 'next/navigation';
import AppsContent from '@devdocs/components/AppsContainer/AppsContent';
import AppsHeader from '@devdocs/components/AppsContainer/AppsHeader';
import AppAnimate from '@devdocs/components/AppAnimate';
import { MailDetailSkeleton } from '@devdocs/components/AppSkeleton/MailDetailSkeleton';
import Box from '@mui/material/Box';
import { useGetDataApi } from '@devdocs/hooks/APIHooks';
import { MailType } from '@devdocs/types/models/apps/Mail';

const MailDetail = () => {
  const contentRef = createRef();
  const params = useParams();
  const { all } = params;
  const [{ apiData: selectedMail }, { setQueryParams, setData }] =
    useGetDataApi<MailType>('/mail/detail', undefined, {}, false);

  useEffect(() => {
    setQueryParams({ id: all?.slice(-1)[0] });
  }, [all]);

  const onUpdateSelectedMail = (data: MailType) => {
    setData(data);
  };

  if (!selectedMail) {
    return <MailDetailSkeleton />;
  }

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
      ref={contentRef}
    >
      <AppsHeader>
        <MailDetailHeader
          selectedMail={selectedMail}
          onUpdateSelectedMail={onUpdateSelectedMail}
        />
      </AppsHeader>
      <AppsContent isDetailView>
        <AppAnimate animatoin='transition.slideUpIn'>
          <MailDetailBody
            selectedMail={selectedMail}
            key={'mail_detail'}
            onUpdateSelectedMail={onUpdateSelectedMail}
          />
        </AppAnimate>
      </AppsContent>
    </Box>
  );
};

export default MailDetail;
