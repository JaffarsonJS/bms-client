import city from "../../assets/image.png";
import { faCheckToSlot, faList } from "@fortawesome/free-solid-svg-icons";
import {
  Archive,
  Building2,
  Calendar,
  HardHat,
  Key,
  PanelsTopLeft,
  User,
  Wrench,
  X,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NavLink } from "react-router-dom";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { GridExpandMoreIcon } from "@mui/x-data-grid";

const SidebarContent = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <>
      <div className="flex flex-col w-64">
        <div className="flex flex-col h-0 flex-1">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <div className="flex flex-col border-none outline-none">
                <img src={city} alt="" className="border-none outline-none" />
                <Accordion
                  expanded={expanded}
                  onChange={handleExpansion}
                  slotProps={{ transition: { timeout: 400 } }}
                >
                  <AccordionSummary
                    className="font-medium border-none outline-none"
                    expandIcon={<GridExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography
                      className="font-medium border-none outline-none"
                      fontSize={15}
                    >
                      Cebu Towers
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="text-gray-400" fontSize={10}>
                      200 George Street <br /> Sydney NSW 2000
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>

            <nav className="mt-5 flex-1 px-2 space-y-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? "border-l-4 rounded-none border-blue-600 "
                      : "text-gray-400 hover:bg-blue-600 hover:text-white"
                  }`
                }
              >
                <PanelsTopLeft className="mr-3 h-6 w-6" />
                Dashboard
              </NavLink>
              <NavLink
                to="/cases"
                className={({ isActive }) =>
                  `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? "border-l-4 rounded-none border-blue-600 "
                      : "text-gray-400 hover:bg-blue-600 hover:text-white"
                  }`
                }
              >
                <Wrench className="mr-3 h-6 w-6" />
                Cases
              </NavLink>
              <NavLink
                to="/work-order"
                className={({ isActive }) =>
                  `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? "border-l-4 rounded-none border-blue-600 "
                      : "text-gray-400 hover:bg-blue-600 hover:text-white"
                  }`
                }
              >
                <FontAwesomeIcon
                  icon={faCheckToSlot}
                  className="mr-3 h-6 w-6"
                />
                Work Order Sent
              </NavLink>

              <NavLink
                to="/calendar"
                className={({ isActive }) =>
                  `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? "border-l-4 rounded-none border-blue-600 "
                      : "text-gray-400 hover:bg-blue-600 hover:text-white"
                  }`
                }
              >
                <Calendar className="mr-3 h-6 w-6" />
                Calendar
              </NavLink>
              <NavLink
                to="/maintenance-schedule"
                className={({ isActive }) =>
                  `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? "border-l-4 rounded-none border-blue-600 "
                      : "text-gray-400 hover:bg-blue-600 hover:text-white"
                  }`
                }
              >
                <FontAwesomeIcon icon={faList} className="mr-3 h-6 w-6" />
                Maintenance Schedule
              </NavLink>
              <NavLink
                to="/building"
                className={({ isActive }) =>
                  `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? "border-l-4 rounded-none border-blue-600 "
                      : "text-gray-400 hover:bg-blue-600 hover:text-white"
                  }`
                }
              >
                <Building2 className="mr-3 h-6 w-6" />
                Building
              </NavLink>
              <NavLink
                to="/residents"
                className={({ isActive }) =>
                  `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? "border-l-4 rounded-none border-blue-600 "
                      : "text-gray-400 hover:bg-blue-600 hover:text-white"
                  }`
                }
              >
                <User className="mr-3 h-6 w-6" />
                Residents
              </NavLink>
              <NavLink
                to="/keys"
                className={({ isActive }) =>
                  `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? "border-l-4 rounded-none border-blue-600 "
                      : "text-gray-400 hover:bg-blue-600 hover:text-white"
                  }`
                }
              >
                <Key className="mr-3 h-6 w-6" />
                Keys
              </NavLink>
              <NavLink
                to="/parcels"
                className={({ isActive }) =>
                  `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? "border-l-4 rounded-none border-blue-600 "
                      : "text-gray-400 hover:bg-blue-600 hover:text-white"
                  }`
                }
              >
                <Archive className="mr-3 h-6 w-6" />
                Parcels
              </NavLink>
              <NavLink
                to="/contractors"
                className={({ isActive }) =>
                  `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? "border-l-4 rounded-none border-blue-600 "
                      : "text-gray-400 hover:bg-blue-600 hover:text-white"
                  }`
                }
              >
                <HardHat className="mr-3 h-6 w-6" />
                Contractors
              </NavLink>
              <NavLink
                to="/cloud-sense"
                className={({ isActive }) =>
                  `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? "border-l-4 rounded-none border-blue-600 "
                      : "text-gray-400 hover:bg-blue-600 hover:text-white"
                  }`
                }
              >
                <Archive className="mr-3 h-6 w-6" />
                Cloud Sense
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarContent;
