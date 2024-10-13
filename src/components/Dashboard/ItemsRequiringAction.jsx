import { Card, CardContent, Typography, Box } from "@mui/material";
import { HardHat, List, User, Wrench } from "lucide-react";

const ItemsRequiringAction = ({ data }) => {
  return (
    <Card sx={{ height: "100%", background: "#6d8dff", color: "white" }}>
      <CardContent>
        <Typography variant="h6">Items Requiring Action</Typography>
        <Box
          sx={{ height: "100%", overflow: "auto", mt: 2 }}
          className="space-y-5"
        >
          <div
            className="flex items-center justify-between p-3"
            style={{ background: "#7b97fe" }}
          >
            <div>
              <Wrench className="h-6 w-6 mb-2" />
              <Typography>Overdue cases: </Typography>
            </div>
            <div className="text-2xl">
              {" "}
              {data && data[0]?.overdueCases ? data[0]?.overdueCases : 0}{" "}
            </div>
          </div>

          <div
            className="flex items-center justify-between p-3"
            style={{ background: "#7b97fe" }}
          >
            <div>
              <HardHat className="h-6 w-6 mb-2" />
              <Typography>Contractor Insurance Expiring: </Typography>
            </div>
            <div className="text-2xl">
              {" "}
              {data && data[0]?.contractorInsurance
                ? data[0]?.contractorInsurance
                : 0}
            </div>
          </div>

          <div
            className="flex items-center justify-between p-3"
            style={{ background: "#7b97fe" }}
          >
            <div>
              <User className="h-6 w-6 mb-2" />
              <Typography>Resident Info Requests: </Typography>
            </div>
            <div className="text-2xl">
              {" "}
              {data && data[0]?.residentInfo ? data[0]?.residentInfo : 0}{" "}
            </div>
          </div>

          <div
            className="flex items-center justify-between p-3"
            style={{ background: "#7b97fe" }}
          >
            <div>
              <List className="h-6 w-6 mb-2" />
              <Typography>Overdue Maintenance: </Typography>
            </div>
            <div className="text-2xl">
              {" "}
              {data && data[0]?.overdueMaintenance
                ? data[0]?.overdueMaintenance
                : 0}
            </div>
          </div>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ItemsRequiringAction;
