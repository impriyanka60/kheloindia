import React, { useState } from 'react';
import { IconButton, Tooltip, Divider, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import ApplicantFormModal from './ApplicantFormModal';

const Sidebar = ({ selectedView, setSelectedView }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleFormSubmit = (data) => {
    console.log('Submitted Data:', data);
    // Send to backend here
  };

  const navItems = [
    { label: 'dashboard', icon: <DashboardIcon />, text: 'Dashboard' },
    { label: 'home', icon: <HomeIcon />, text: 'Home' },
    { label: 'applicants', icon: <PeopleIcon />, text: 'Applicants' },
    { label: 'reports', icon: <BarChartIcon />, text: 'Reports' },
    { label: 'settings', icon: <SettingsIcon />, text: 'Settings' },
  ];

  return (
    <>
      <div className="w-60 fixed left-0 top-0 bottom-0 bg-gray-100 border-r border-gray-300 flex flex-col z-20">
        {/* Header */}
        <div className="flex items-center justify-center p-4 border-b border-gray-300">
          <Typography variant="h6" className="font-bold">
            Saran Yojna
          </Typography>
        </div>

        {/* Add Applicant Button */}
        <div className="flex justify-center py-4">
          <Tooltip title="Add New Applicant" placement="right">
            <IconButton
              onClick={() => setModalOpen(true)}
              className="w-10 h-10 border border-gray-300 rounded-xl"
            >
              <AddIcon />
            </IconButton>
          </Tooltip>
        </div>

        <Divider className="my-2" />

        {/* Navigation Items */}
        <div className="flex flex-col space-y-2 px-2">
          {navItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedView(item.label)}
              className={`flex items-center space-x-3 p-2 rounded-md cursor-pointer ${
                selectedView === item.label
                  ? 'bg-indigo-100 text-indigo-700 font-semibold'
                  : 'hover:bg-indigo-50 text-gray-700'
              }`}
            >
              {item.icon}
              <Typography variant="body1">{item.text}</Typography>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto text-center py-4 border-t border-gray-300">
          <Typography className="text-sm text-gray-500">Logged in as Admin</Typography>
        </div>
      </div>

      <ApplicantFormModal
        open={modalOpen}
        handleClose={() => setModalOpen(false)}
        handleSubmit={handleFormSubmit}
      />
    </>
  );
};

export default Sidebar;
