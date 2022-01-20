import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";


export default function Footer () {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);


  return (
		<Box sx={{ pb: 7, marginTop: 30 }} ref={ref}>
			<Paper
				sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
				elevation={3}
			>
				<BottomNavigation
					showLabels
					value={value}
					onChange={(event, newValue) => {
						setValue(newValue);
					}}
				>
					<BottomNavigationAction label="Home" />
					<BottomNavigationAction label="Account" />
				</BottomNavigation>
				<Typography
					variant="subtitle2"
					gutterBottom component="div"
					sx={{ textAlign: "center", fontSize: "small" }}
					>
					&copy; Copyright CodeYourFuture. All rights reserved.
				</Typography>
			</Paper>
		</Box>
	);
}