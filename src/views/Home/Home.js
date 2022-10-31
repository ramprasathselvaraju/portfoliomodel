import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import * as api from "../Config/ApiDetails";

export default function CellHeaderStyling(props) {

  const [flag, setflag] = useState(false);

  const [data, setdata] = useState([]);

  useEffect(() => {
      const getStocksData = {
        url: api.GETSTOCKS,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // data: JSON.stringify(getStocksDataid)
      };
      axios(getStocksData)
        .then((response) => {
          setdata(response.data);
        })
        .catch(function (e) {
          if (e.message === "Network Error") {
            alert("No Internet Found. Please check your internet connection");
          } else {
            alert(
              "Sorry, something went wrong. Please try again after sometime. If the issue still persists contact support."
            );
          }
        });
    
  }, [flag]);



  const createModal = () => {
    props.history.push("./AddModal");
  };

  return (
    <div>
      <Button
        variant="contained"
        style={{
          backgroundColor: "#3067bf",
          color: "white",
          padding: 15,
          marginLeft: "90%",
          marginTop: 10,
        }}
        type="submit"
        component="span"
        onClick={createModal}
      >
        Create
      </Button>

      <div style={{ marginTop: 10 }}>
        <MaterialTable
          title="All Modals"
          columns={[
            { title: "Name", field: "name" },
            { title: "Risk Category", field: "risk_category" },
          ]}
          data={data}
          options={{
            headerStyle: {
              backgroundColor: "#3067bf",
              color: "#FFF",
              fontSize: 22,
              fontWeight: "bold",
            },
            actionsColumnIndex: -1,
            sorting: true,
            exportButton: true,
            pageSize: 10,
            exportAllData: true,
            exportFileName: "ModalsDetails",
          }}
          actions={[
            {
              icon: "edit",
              tooltip: "Edit Modal",
              iconProps: { style: { color: "#3067bf" } },
              onClick: (event, rowData) => {


                localStorage.setItem("ModalEditData",JSON.stringify(rowData))
                
                props.history.push("./EditModal");
              },
            },

            {
              icon: "delete",
              tooltip: "Delete Modal",
              iconProps: { style: { color: "#3067bf" } },
              onClick: (event, rowData) => {
                console.log("first");
                confirmAlert({
                  title: "Delete",
                  message: "Are you sure to do this ?",
                  buttons: [
                    {
                      label: "Yes",
                      onClick: () => {
                        const options = {
                        	url: api.CREATE_STOCK + rowData._id,
                        	method: 'DELETE',
                        	headers: {
                        		'Content-Type': 'application/json',
                        		// 'Authorization': 'Bearer ' + window.localStorage.getItem('codeofauth')
                        	}
                        };
                        axios(options)
                        	.then(response => {
                        		// console.log(response);
                        		setflag(!flag)
                        	})
                        	.catch(function (e) {
                        		if (e.message === 'Network Error') {
                        			alert("No Internet Found. Please check your internet connection")
                        		}
                        		else {
                        			alert("Sorry, something went wrong. Please try again after sometime. If the issue still persists contact support.")
                        		}
                        	});
                      },
                    },
                    {
                      label: "No",
                      onClick: () => {},
                    },
                  ],
                });
              },
            },
          ]}
          localization={{
            header: {
              actions: "Actions",
            },
          }}
        />
      </div>
    </div>
  );
}
