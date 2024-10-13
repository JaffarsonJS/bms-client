import { Card, CardContent, Typography, Box } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";

const CasesGraph = ({ data }) => {
  const transformedData = data.statusCards.map((item) => ({
    id: item.title,
    label: item.title,
    value: item.record[0].value,
  }));

  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h6">Cases Graph</Typography>
          <Box sx={{ height: "160px", mt: 2 }}>
            {transformedData.length > 0 ? (
              <ResponsivePie
                data={transformedData}
                margin={{ top: 10, right: 10, bottom: 20, left: 90 }}
                innerRadius={0.5}
                cornerRadius={3}
                colors={{ scheme: "nivo" }}
                borderWidth={1}
                borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#333333"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: "color" }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{
                  from: "color",
                  modifiers: [["darker", 2]],
                }}
              />
            ) : (
              <div className="">No data found</div>
            )}
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default CasesGraph;
