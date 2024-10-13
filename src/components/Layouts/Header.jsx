import {
  Avatar,
  Box,
  Stack,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import OptionsMenu from "./OptionsMenu";
import avatar from "../../assets/deadpoolAvatar.png";
import { Calculator, Megaphone, Monitor, Printer } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "center" },
          justifyContent: "space-between",
          gap: { xs: 2, md: 0 },
          py: 2,
          px: { xs: 1, sm: 2, md: 4 },
          mt: { xs: 10, sm: 5, md: 1, lg: 1 },
          background: "#f7f8fb",
        }}
      >
        <Box>
          <Typography variant="h5" component="div">
            Overview
          </Typography>
          <Typography color="text.secondary">Cubu Towers</Typography>
        </Box>

        <Stack
          direction={{ xs: "row", md: "row" }}
          spacing={{ xs: 12, md: 4 }}
          alignItems={{ xs: "flex-start", md: "center" }}
          className="space-x-20"
        >
          <Stack
            direction="row"
            spacing={isTablet ? 1 : 2}
            sx={{
              "& .MuiIconButton-root": {
                transition: "all 0.3s",
                "&:hover": {
                  bgcolor: "primary.main",
                  color: "white",
                  borderRadius: "50%",
                },
              },
            }}
          >
            <IconButton
              size={isMobile ? "small" : "medium"}
              sx={{ color: "primary.main" }}
            >
              <Calculator />
            </IconButton>
            <IconButton
              size={isMobile ? "small" : "medium"}
              sx={{ color: "primary.main" }}
            >
              <FontAwesomeIcon icon={faGlobe} />
            </IconButton>
            <IconButton
              size={isMobile ? "small" : "medium"}
              sx={{ color: "success.main" }}
            >
              <Megaphone />
            </IconButton>
            <IconButton
              size={isMobile ? "small" : "medium"}
              sx={{ color: "secondary.main" }}
            >
              <Printer />
            </IconButton>
            <IconButton
              size={isMobile ? "small" : "medium"}
              sx={{ color: "warning.main" }}
            >
              <Monitor />
            </IconButton>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar
              alt=""
              src={avatar}
              sx={{
                width: { xs: 32, md: 36 },
                height: { xs: 32, md: 36 },
              }}
            />
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 500,
                  lineHeight: "16px",
                  color: "text.secondary",
                }}
              >
                Building Management
              </Typography>
            </Box>
            <OptionsMenu />
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Header;
