import React, { ReactNode } from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { green, red } from '@mui/material/colors';
import { Fonts } from '@devdocs/constants/AppEnums';
import AppCard from '@devdocs/components/AppCard';
import type { CoinType } from '@devdocs/types/models/dashboards/Crypto';
import Image from 'next/image';

type Props = {
  icon: string;
  bgColor: string;
  data: CoinType;
  heading: React.ReactNode;
};

const CoinStats = ({
  icon,
  bgColor = '',
  data = {
    price: '',
    increment: 0,
  },
  heading,
}: Props) => {
  return (
    <AppCard
      sxStyle={{
        borderRadius: (theme: any) =>
          theme.components.MuiCard.styleOverrides.root.borderRadius / 4,
      }}
      className='card-hover'
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Avatar
          sx={{
            p: 3,
            fontSize: { xs: 30, md: 42 },
            height: { xs: 44, md: 48, xl: 52 },
            width: { xs: 44, md: 48, xl: 52 },
            backgroundColor: bgColor,
          }}
        >
          <Image alt='' src={`${icon}`} width={24} height={31} />
        </Avatar>

        <Box
          sx={{
            position: 'relative',
            ml: 4,
          }}
        >
          <Box
            component='p'
            sx={{
              fontSize: 14,
              color: 'text.secondary',
              // mb: 2,
            }}
          >
            {heading}
          </Box>
          <Box
            component='h3'
            sx={{
              display: 'inline-block',
              fontWeight: Fonts.MEDIUM,
              fontSize: 18,
              mr: 3,
            }}
          >
            ${data.price}
          </Box>
        </Box>
        <Box sx={{ ml: 'auto' }}>
          <Box
            component='p'
            sx={{
              fontSize: 16,
              fontWeight: Fonts.MEDIUM,
              color: data.increment > 0.0 ? green[500] : red[500],
              textAlign: 'right',
            }}
          >
            {data.increment}%
          </Box>
          <Box
            sx={{
              fontSize: 14,
              color: 'text.secondary',
            }}
          >
            vs last 30 days
          </Box>
        </Box>
      </Box>
    </AppCard>
  );
};

export default CoinStats;