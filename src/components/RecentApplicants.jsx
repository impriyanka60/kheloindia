import React from "react";
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Paper,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const recentApplicants = [
  {
    name: "Aman Sharma",
    fatherName: "Ramesh Sharma",
    yojna: "PM Awas Yojna",
    gender: "Male",
  },
  {
    name: "Pooja Verma",
    fatherName: "Suresh Verma",
    yojna: "Ujjwala Yojna",
    gender: "Female",
  },
  {
    name: "Rahul Yadav",
    fatherName: "Mahesh Yadav",
    yojna: "PM Kisan",
    gender: "Male",
  },
  {
    name: "Kavita Kumari",
    fatherName: "Rajeev Kumar",
    yojna: "Ayushman Bharat",
    gender: "Female",
  },
];

const RecentApplicants = () => {
  return (
    <Paper elevation={3} className="rounded-2xl mt-6">
      <div className="p-6">
        <Typography
          variant="h6"
          className="mb-4 font-semibold text-gray-800"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Recent Applicants
        </Typography>

        <List disablePadding>
          {recentApplicants.map((applicant, index) => (
            <React.Fragment key={index}>
              <ListItem
                alignItems="flex-start"
                className="hover:bg-gray-50 transition-all duration-200 rounded-lg px-2"
              >
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "#4f46e5" }}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>

                <ListItemText
                  primary={
                    <Typography
                      variant="subtitle1"
                      className="font-medium text-gray-900"
                      style={{ fontFamily: "Nunito, sans-serif" }}
                    >
                      {applicant.name}
                    </Typography>
                  }
                  secondary={
                    <>
                      <Typography
                        component="span"
                        variant="body2"
                        color="text.secondary"
                        className="block"
                        style={{ fontFamily: "Nunito, sans-serif" }}
                      >
                        Father's Name: {applicant.fatherName}
                      </Typography>
                      <Typography
                        component="span"
                        variant="body2"
                        color="text.secondary"
                        className="italic text-sm text-gray-500"
                      >
                        {applicant.yojna} • {applicant.gender}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
              {index < recentApplicants.length - 1 && (
                <Divider component="li" className="my-2" />
              )}
            </React.Fragment>
          ))}
        </List>
      </div>
    </Paper>
  );
};

export default RecentApplicants;
