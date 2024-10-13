import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import { ArrowDownToLine } from "lucide-react";
import pdfPng from "../../assets/png/pdf.png";

const ManagementReports = ({ data }) => {
  return (
    <Card sx={{ height: "29rem", overflow: "scroll" }}>
      <CardContent>
        <Typography variant="h6">Management Reports Generated</Typography>
        <Box>
          <List>
            {data.length > 0 ? (
              data
                .filter((report) => report.type === "mr") // Filter for 'mr' type reports
                .map((report, index) => (
                  <div className="flex hover:bg-blue-50 p-1 py-2" key={index}>
                    <img
                      src={pdfPng}
                      alt=""
                      width={25}
                      style={{ objectFit: "contain" }}
                    />
                    {console.log("report?.pdf", report?.pdf)}
                    <ListItem
                      secondaryAction={
                        <a
                          // href={`https://bms-server-git-main-jaffarsonjs-projects.vercel.app/api/download/${
                          href={`http://localhost:5001/api/download/${
                            report?.pdf?.split("src/assets/")[1]
                          }`}
                          target="_blank" // Opens in a new tab to avoid CORS issues
                          rel="noopener noreferrer"
                        >
                          <ArrowDownToLine />
                        </a>
                      }
                    >
                      <ListItemText
                        primary={`Report ${new Date(
                          report.reportStartDate
                        ).toLocaleDateString()} - ${new Date(
                          report.reportEndDate
                        ).toLocaleDateString()}`}
                        secondary={`Created: ${new Date(
                          report.created
                        ).toLocaleDateString()}`}
                      />
                    </ListItem>
                  </div>
                ))
            ) : (
              <div>No data found</div>
            )}
          </List>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ManagementReports;
