import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { equalIcon, caret_down, caret_up } from "assets/icons/Icons";
import Calendar from "../components/Dashboard/Calendar";
import dayjs from "dayjs";
import {
  ActivityFeed,
  CasesGraph,
  ItemsRequiringAction,
  ManagementReports,
  Notes,
  StatusCard,
  WeatherCard,
  WorkOrdersSent,
} from "../components/Dashboard/index";

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [dashboardData, setDashboardData] = useState({
    statusCards: [],
    itemsRequiringAction: [],
    notes: [],
    weather: {},
    filteredReports: [],
    activityFeed: [],
  });

  useEffect(() => {
    fetchDashboardData();
  }, [selectedDate]);

  const fetchDashboardData = async () => {
    try {
      const formattedDate = selectedDate.format("YYYY-MM-DD");
      const response = await fetch(
        // `http://localhost:5001/api/dashboard-data?date=2023-09-20T18:00:00.000Z`
        // `http://localhost:5001/api/dashboard-data?date=${formattedDate}`
        // `https://bms-server-l9z344lsr-jaffarsonjs-projects.vercel.app/api/dashboard-data?date=${formattedDate}`
        `http://localhost:5001/api/dashboard-data?date=${formattedDate}`
      );
      const data = await response.json();
      // console.log('data',data);
      setDashboardData(data);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  if (!dashboardData) return <div>Loading...</div>;

  return (
    <div className="bg-[#f7f8fb] p-4">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          <StatusCard
            title="Residents"
            value={dashboardData?.statusCards[0]?.record[0]?.value || 0}
            icon={equalIcon}
          />
          <StatusCard
            title="Assets"
            value={dashboardData?.statusCards[1]?.record[0].value || 0}
            icon={caret_down}
          />
          <StatusCard
            title="Contractors"
            value={dashboardData?.statusCards[2]?.record[0].value || 0}
            icon={caret_down}
          />
          <StatusCard
            title="Active Cases"
            value={dashboardData?.statusCards[3]?.record[0].value || 0}
            icon={caret_up}
          />
          <StatusCard
            title="Work Orders Sent"
            value={dashboardData?.statusCards[4]?.record[0].value || 0}
            icon={caret_down}
          />
        </div>
        <div className="mt-4 md:mt-0 md:w-[300px]">
          <Calendar
            selectedDate={selectedDate}
            onDateChange={handleDateChange}
          />
        </div>
      </div>

      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <Box sx={{ height: "100%" }}>
              <ItemsRequiringAction data={dashboardData.itemsRequiringAction} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box sx={{ height: "100%" }}>
              <Notes data={dashboardData.notes} />
            </Box>
          </Grid>
          <Grid item xs={12} md={12} lg={4}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <WeatherCard data={dashboardData.weather} />
              <CasesGraph data={dashboardData} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box sx={{ height: "100%" }}>
              <ManagementReports data={dashboardData.filteredReports} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box sx={{ height: "100%" }}>
              <WorkOrdersSent data={dashboardData.filteredReports} />
            </Box>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Box sx={{ height: "100%" }}>
              <ActivityFeed data={dashboardData.activityFeed} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Dashboard;
