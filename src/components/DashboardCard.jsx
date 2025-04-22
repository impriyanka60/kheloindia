import React from 'react';
import { Box, Typography, Grid } from '@mui/material'; // Fixed import from '@mui/material'
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import Diversity3Icon from '@mui/icons-material/Diversity3';

const cardData = [
  {
    title: 'Total Applicants',
    value: 120,
    icon: <GroupsIcon fontSize="large" className="text-blue-600" />,
    bgColor: 'bg-blue-50',
  },
  {
    title: 'Total Beneficiaries',
    value: 270,
    icon: <Diversity3Icon fontSize="large" className="text-green-600" />,
    bgColor: 'bg-green-50',
  },
  {
    title: 'Unique Applicants',
    value: 102,
    icon: <FingerprintIcon fontSize="large" className="text-orange-600" />,
    bgColor: 'bg-orange-50',
  },
  {
    title: 'Yojnas Covered',
    value: 5,
    icon: <EmojiPeopleIcon fontSize="large" className="text-purple-600" />,
    bgColor: 'bg-purple-50',
  },
];

const DashboardCards = () => {
  return (
    <Box className="mt-10 pt-3 px-3">
      <Grid container spacing={4}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <div
              className={`p-4 rounded-xl shadow-md transition-transform transform hover:scale-105 ${card.bgColor}`}
            >
              <div className="flex items-center gap-4">
                <div>{card.icon}</div>
                <div>
                  <Typography className="text-sm font-serif italic text-gray-600">
                    {card.title}
                  </Typography>
                  <Typography className="text-xl font-bold">
                    {card.value}
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DashboardCards;
