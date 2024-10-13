import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  Box,
} from "@mui/material";

const ActivityFeed = ({ data }) => {
  const groupedByDate = data.reduce((acc, activity) => {
    if (!acc[activity.date]) {
      acc[activity.date] = [];
    }
    acc[activity.date].push(activity);
    return acc;
  }, {});

  return (
    <Card sx={{ height: "29rem", overflow: "auto" }}>
      <CardContent>
        <Typography variant="h6">Activity Feed</Typography>
        <Box sx={{ height: "100%", overflow: "auto", mt: 2 }}>
          <List>
            {Object.entries(groupedByDate).length > 0
              ? Object.entries(groupedByDate).map(
                  ([date, activities], index) => (
                    <div className="mb-5" key={index}>
                      <div className="flex items-center">
                        <ListItem sx={{ m: 0, p: 0 }}>
                          <Box sx={{ textAlign: "start", width: "100%" }}>
                            <Typography fontWeight="bold">{date}</Typography>
                          </Box>
                        </ListItem>
                        <ListItem sx={{ m: 0, p: 0 }}>
                          <Box sx={{ textAlign: "start", width: "100%" }}>
                            <Typography>{activities[0].user}</Typography>
                          </Box>
                        </ListItem>
                      </div>

                      {activities.map((activity) => (
                        <React.Fragment key={activity._id}>
                          {activity.entries.map((entry) => (
                            <ListItem key={entry._id} sx={{ m: 0, p: 0 }}>
                              <Box sx={{ textAlign: "start", width: "50%" }}>
                                <Typography
                                  fontWeight={20}
                                  fontSize={15}
                                  color="grey"
                                >
                                  {entry.time}
                                </Typography>
                              </Box>
                              <Box sx={{ textAlign: "start", width: "50%" }}>
                                <Typography
                                  fontWeight={20}
                                  fontSize={15}
                                  color="grey"
                                >
                                  {entry.description}
                                </Typography>
                              </Box>
                            </ListItem>
                          ))}
                        </React.Fragment>
                      ))}
                    </div>
                  )
                )
              : "No data found"}
          </List>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ActivityFeed;
