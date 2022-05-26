import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { memo } from 'react';

function Widget9(props) {
  return (
    <Card className="w-256 rounded-md shadow">
      <div className="px-8 py-20 flex flex-row items-start justify-between">
        <Typography className="h3 font-medium px-12">
          Patient Information
        </Typography>

        <div className="-mt-12">
          <IconButton aria-label="more" size="large">
            <Icon>more_vert</Icon>
          </IconButton>
        </div>
      </div>

      <table className="simple clickable">
        <thead>
          <tr>
            {/* <th aria-label="title" /> */}
            <th className="text-right">
              <Typography color="textSecondary" className="font-semibold">
                Age
              </Typography>
            </th>
            <th className="text-right">
              <Typography color="textSecondary" className="font-semibold">
                Gender
              </Typography>
            </th>
            <th className="text-right">
              <Typography color="textSecondary" className="font-semibold">
                Weight
              </Typography>
            </th>
            <th className="text-right">
              <Typography color="textSecondary" className="font-semibold">
                Height
              </Typography>
            </th>
          </tr>
        </thead>
        <tbody>
          {/* {props.data.rows.map((row) => (
            <tr key={row.title}>
              <td className="font-semibold">{row.title}</td>
              <td className="text-right">{row.clicks}</td>
              <td className="text-right">{row.conversion}</td>
            </tr>
          ))} */}
          <tr key="age">
            <td className="font-semibold text-center">64</td>
            <td className="font-semibold text-center">Male</td>
            <td className="font-semibold text-center">72</td>
            <td className="font-semibold text-center">220</td>
            {/* <td className="text-right">64</td> */}
          </tr>
          {/* <tr key="gender">
            <td className="font-semibold">Gender</td>
            <td className="text-right">Male</td>
          </tr>
          <tr key="height">
            <td className="font-semibold">Height</td>
            <td className="text-right">64</td>
          </tr>
          <tr key="weight">
            <td className="font-semibold">Weight</td>
            <td className="text-right">64</td>
          </tr> */}
        </tbody>
      </table>

      <Divider className="card-divider w-full" />
    </Card>
  );
}

export default memo(Widget9);
