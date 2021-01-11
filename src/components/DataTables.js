import React from 'react'
import { ReactSession } from 'react-client-session';
import DataTable, { createTheme } from 'react-data-table-component';
import * as RiIcons from "react-icons/ri";
import Sidenav from './Sidenav';

const DataTables = () => {

  createTheme('solarized', {
    text: {
      primary: '#268bd2',
      secondary: '#2aa198',
    },
    background: {
      default: '#d6d6d6',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    divider: {
      default: '#073642',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  });



    const sortIcon = <RiIcons.RiArrowDownSFill />;
    const columns = [
        {
          name: 'firstName',
          selector: 'firstName',
          sortable: true,
          width: "100px"
        },
        {
          name: 'lastName',
          selector: 'lastName',
          sortable: true,
        },
        {
          name: 'emailAddress',
          selector: 'emailAddress',
          sortable: true,
        },
      ];
       
        const data = [
            
              {
                "userId": 1,
                "firstName": "Krish",
                "lastName": "Lee",
                "phoneNumber": "123456",
                "emailAddress": "krish.lee@learningcontainer.com"
              },
              {
                "userId": 2,
                "firstName": "racks",
                "lastName": "jacson",
                "phoneNumber": "123456",
                "emailAddress": "racks.jacson@learningcontainer.com"
              },
              {
                "userId": 3,
                "firstName": "denial",
                "lastName": "roast",
                "phoneNumber": "33333333",
                "emailAddress": "denial.roast@learningcontainer.com"
              },
              {
                "userId": 4,
                "firstName": "devid",
                "lastName": "neo",
                "phoneNumber": "222222222",
                "emailAddress": "devid.neo@learningcontainer.com"
              },
              {
                "userId": 5,
                "firstName": "jone",
                "lastName": "mac",
                "phoneNumber": "111111111",
                "emailAddress": "jone.mac@learningcontainer.com"
              },
              {
                "userId": 1,
                "firstName": "Krish",
                "lastName": "Lee",
                "phoneNumber": "123456",
                "emailAddress": "krish.lee@learningcontainer.com"
              },
              {
                "userId": 2,
                "firstName": "racks",
                "lastName": "jacson",
                "phoneNumber": "123456",
                "emailAddress": "racks.jacson@learningcontainer.com"
              },
              {
                "userId": 3,
                "firstName": "denial",
                "lastName": "roast",
                "phoneNumber": "33333333",
                "emailAddress": "denial.roast@learningcontainer.com"
              },
              {
                "userId": 4,
                "firstName": "devid",
                "lastName": "neo",
                "phoneNumber": "222222222",
                "emailAddress": "devid.neo@learningcontainer.com"
              },
              {
                "userId": 5,
                "firstName": "jone",
                "lastName": "mac",
                "phoneNumber": "111111111",
                "emailAddress": "jone.mac@learningcontainer.com"
              },
              {
                "userId": 1,
                "firstName": "Krish",
                "lastName": "Lee",
                "phoneNumber": "123456",
                "emailAddress": "krish.lee@learningcontainer.com"
              },
              {
                "userId": 2,
                "firstName": "racks",
                "lastName": "jacson",
                "phoneNumber": "123456",
                "emailAddress": "racks.jacson@learningcontainer.com"
              },
              {
                "userId": 3,
                "firstName": "denial",
                "lastName": "roast",
                "phoneNumber": "33333333",
                "emailAddress": "denial.roast@learningcontainer.com"
              },
              {
                "userId": 4,
                "firstName": "devid",
                "lastName": "neo",
                "phoneNumber": "222222222",
                "emailAddress": "devid.neo@learningcontainer.com"
              },
              {
                "userId": 5,
                "firstName": "jone",
                "lastName": "mac",
                "phoneNumber": "111111111",
                "emailAddress": "jone.mac@learningcontainer.com"
              },
              {
                "userId": 1,
                "firstName": "Krish",
                "lastName": "Lee",
                "phoneNumber": "123456",
                "emailAddress": "krish.lee@learningcontainer.com"
              },
              {
                "userId": 2,
                "firstName": "racks",
                "lastName": "jacson",
                "phoneNumber": "123456",
                "emailAddress": "racks.jacson@learningcontainer.com"
              },
              {
                "userId": 3,
                "firstName": "denial",
                "lastName": "roast",
                "phoneNumber": "33333333",
                "emailAddress": "denial.roast@learningcontainer.com"
              },
              {
                "userId": 4,
                "firstName": "devid",
                "lastName": "neo",
                "phoneNumber": "222222222",
                "emailAddress": "devid.neo@learningcontainer.com"
              },
              {
                "userId": 5,
                "firstName": "jone",
                "lastName": "mac",
                "phoneNumber": "111111111",
                "emailAddress": "jone.mac@learningcontainer.com"
              }
            ]


    return (
      <><Sidenav token={ReactSession.get("token")} userid={ReactSession.get("userid")} fname={ReactSession.get("fname")} image={ReactSession.get("image")} />
        <DataTable 
        title="Data Tables"
        theme="solarized"
        columns={columns}
        data={data}
        striped={true}
        sortIcon={sortIcon}
        highlightOnHover={true}
        pointerOnHover={true}
        responsive={true}
        overflowY={true}
        pagination={true}
        fixedHeader={true}
      />
      </>
    )
}

export default DataTables
