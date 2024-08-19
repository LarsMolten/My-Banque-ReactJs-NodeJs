/* eslint-disable no-unused-vars */
import React from "react";
import {
  
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  ShoppingBagIcon,
  InboxIcon,
  UsersIcon,
  ArrowLongLeftIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function Sidebar() {
  // const [open, setOpen] = React.useState(0);

  // const handleOpen = (value) => {
  //   setOpen(open === value ? 0 : value);
  // };

  return (
    <div className="h-[calc(100vh)] w-full max-w-[20rem] p-4 shadow-xl bg-gray-900 shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="white">
          MON-BANQUE
        </Typography>
      </div>
      <List className="text-white">
        <ListItem>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Dashboard
        </ListItem>
        <Link to="/client">
          <ListItem>
            <ListItemPrefix>
              <UserGroupIcon className="h-5 w-5" />
            </ListItemPrefix>
            Client
          </ListItem>
        </Link>
        <Link to="/transaction">
          <ListItem>
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            Transaction
          </ListItem>
        </Link>
        <Link to={"/ClientNew"}>
          New Client
        </Link>
        {/* _____________________________________________________ */}
      </List>
      <div className=" flex flex-col sticky bottom-0 mt-[70%]">
      <hr/>
        <List className="text-white">
          <ListItem>
            <ListItemPrefix>
              <UsersIcon className="h-5 w-5" />
            </ListItemPrefix>
            Utilisateurs
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <ArrowLongLeftIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </div>
    </div>
  );
}

export default Sidebar;
