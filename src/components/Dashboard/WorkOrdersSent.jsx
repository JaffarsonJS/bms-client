import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import pdfPng from "../../assets/png/pdf.png";

const WorkOrdersSent = ({ data }) => {
  return (
    <Card sx={{ height: "29rem", overflow: "scroll" }}>
      <CardContent>
        <Typography variant="h6">Latest Work Orders Sent</Typography>
        <Box>
          <List>
            {data.length > 0
              ? data
                  .filter((order) => order.type === "wor") // Filter for 'wor' type
                  .map((order, index) => (
                    <div className="flex hover:bg-blue-50 p-1 py-2" key={index}>
                      <img
                        src={pdfPng}
                        alt="PDF icon"
                        width={25}
                        style={{ objectFit: "contain" }}
                      />
                      <ListItem>
                        <ListItemText
                          primary={order.name}
                          secondary={`Sent: ${new Date(
                            order.created
                          ).toLocaleDateString()}`}
                        />
                        <Typography color="blue" variant="body2">
                          {/* {order._id} */}
                          WO-A#513
                        </Typography>
                      </ListItem>
                    </div>
                  ))
              : "No data found"}
          </List>
        </Box>
      </CardContent>
    </Card>
  );
};

export default WorkOrdersSent;
