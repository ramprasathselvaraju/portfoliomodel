import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Card,
  Form,
  Button
} from "react-bootstrap";
import Chart from "chart.js";
import MaterialTable from "material-table";
import * as api from "../Config/ApiDetails";
import axios from "axios";
import Multiselect from "multiselect-react-dropdown";
import ReactApexChart from "react-apexcharts";

export default function AddModal(props) {
  const [assetdata, setassetdata] = useState([0, 0, 0]);
  const [flag, setflag] = useState(false);
  const [name, setname] = useState("");
  const [riskCategory, setriskCategory] = useState("");
  const [addSecurity, setaddSecurity] = useState([]);
  const [addSecuritylist, setaddSecuritylist] = useState(JSON.parse(localStorage.getItem("Stockslist")));

  useEffect(() => {
    console.log("page relpaded");
  }, [flag]);

  let data = {
    series: [
      assetdata[0],
      assetdata[1],
      assetdata[2],
      Number(100 - Number(assetdata[0] + assetdata[1] + assetdata[2])),
    ],

    options: {
      fill: {
        colors: ["#ed9e2f", "#2d47f7", "#2fed3c", "grey"],
        opacity: 0.9,
        type: "solid",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 100],
          colorStops: [],
        },
      },
      labels: ["NTPC", "HDFC Bank", "MARUTI", "OTHERS"],
      colors: ["#ed9e2f", "#2d47f7", "#2fed3c", "#2fedd4"],
      legend: {
        show: true,
        showForSingleSeries: false,
        showForNullSeries: true,
        showForZeroSeries: true,
        position: "bottom",
        horizontalAlign: "center",
        floating: false,
        fontSize: "14px",
        fontFamily: "Poppins-SemiBold",
        fontWeight: 400,
        formatter: undefined,
        inverseOrder: false,
        width: undefined,
        height: undefined,
        tooltipHoverFormatter: undefined,
        customLegendItems: [],
        offsetX: -8,
        offsetY: 0,
        labels: {
          colors: undefined,
          useSeriesColors: true,
        },
        markers: {
          width: 12,
          height: 12,
          strokeWidth: 0,
          strokeColor: "#fff",
          fillColors: ["#ed9e2f", "#2d47f7", "#2fed3c", "#2fedd4"],
          radius: 12,
          customHTML: undefined,
          onClick: undefined,
          offsetX: 0,
          offsetY: 0,
        },
        itemMargin: {
          horizontal: 5,
          vertical: 0,
        },
        onItemClick: {
          toggleDataSeries: true,
        },
        onItemHover: {
          highlightDataSeries: true,
        },
      },

      dataLabels: {
        enabled: false,
        enabledOnSeries: undefined,
        formatter: function (val, opts) {
          return val;
        },
      },
      plotOptions: {
        pie: {
          startAngle: 0,
          endAngle: 360,
          expandOnClick: true,
          offsetX: 0,
          offsetY: 0,
          customScale: 1,
          dataLabels: {
            offset: 0,
            minAngleToShowLabel: 10,
          },

          donut: {
            size: "85%",
            background: "transparent",
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: "22px",
                fontFamily: "Poppins-SemiBold",
                fontWeight: 600,
                color: undefined,
                offsetY: -10,
                formatter: function (val) {
                  return val;
                },
              },
              value: {
                show: true,
                fontSize: "36px",
                fontFamily: "Poppins-SemiBold",
                fontWeight: 400,
                color: undefined,
                offsetY: 16,
                formatter: function (val) {
                  return val;
                },
              },
              total: {
                show: true,
                showAlways: true,
                label: "Total",
                fontSize: "18px",
                fontFamily: "Poppins-Medium",
                color: "#7e7e7e",
                formatter: function (w) {
                  const sum = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                  const final =
                    Number(Number(assetdata[0] + assetdata[1] + assetdata[2])) +
                    "%";
                  return final;
                },
              },
            },
          },
        },
      },
    },
  };

  const cancelModal = () => {
    props.history.push("./Home");
  };

  return (
    <div>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h5
                style={{ fontSize: 27, color: "darkblue", fontWeight: "bold" }}
              >
                Create Modal{" "}
              </h5>
              <hr />
              <Row>
                <Col md={6}>
                  {/* <Form> */}
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label
                      style={{
                        color: "darkblue",
                        fontSize: 22,
                      }}
                    >
                      Name *
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Modal Name"
                      autoComplete="off"
                      value={name}
                      onChange={(event) => {
                        setname(event.target.value);
                      }}
                      style={{
                        heigh: 55,
                        backgroundColor: "white",
                        color: "darkblue",
                        fontSize: 20,
                      }}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Label
                      style={{
                        color: "darkblue",
                        fontSize: 22,
                      }}
                    >
                      Risk Category *
                    </Form.Label>
                    <Form.Control
                      placeholder="Enter Risk Category"
                      autoComplete="off"
                      value={riskCategory}
                      onChange={(event) => {
                        setriskCategory(event.target.value);
                      }}
                      style={{
                        heigh: 55,
                        backgroundColor: "white",
                        color: "darkblue",
                        fontSize: 20,
                      }}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Label
                      style={{
                        color: "darkblue",
                        fontSize: 22,
                      }}
                    >
                      Add Security To Your Modal*
                    </Form.Label>

                    <Multiselect
                      options={addSecuritylist} // Options to display in the dropdown
                      onSelect={(selectedList, selectedItem) => {
                        if (selectedList.length <= 3) {

                            setaddSecurity(selectedList);

                   
                        } 
                       
                        
                        else {
                          alert("Only Three Stocks can be added.");
                        }
                      }} // Preselected value to persist in dropdown
                      selectedValues={addSecurity} // Function will trigger on select event
                      onRemove={(selectedList, selectedItem) =>{

                        setaddSecurity(selectedList)

                        let newdata = assetdata;
                        newdata[selectedItem.id] = Number(
                          0
                        );
                        setassetdata(newdata);
                        setflag(!flag);
                        console.log(selectedItem)
                      }
                      } 
                      displayValue="name" // Property name to display in the dropdown options
                    />
                  </Form.Group>

                  <div style={{ marginTop: "20%" }}>
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "#3067bf",
                        color: "white",
                        padding: 15,
                        marginTop: 10,
                        width: 200,
                        fontSize: 22,
                        fontWeight: "bold",
                      }}
                      type="submit"
                      component="span"
                      onClick={(e) => {
                        const stock_details = {
                          name: name,
                          risk_category: riskCategory,
                          ntpc_value: Number(assetdata[0]),
                          hdfc_value: Number(assetdata[1]),
                          maruti_value: Number(assetdata[2]),
                          add_security_value: addSecurity,
                        };

                        console.log(stock_details);

                        if (
                          name !== "" &&
                          riskCategory !== "" &&
                          Number(assetdata[0]) !== 0 &&
                          Number(assetdata[1]) !== 0 &&
                          Number(assetdata[2]) !== 0
                        ) {
                          if (
                            Number(
                              assetdata[0] + assetdata[1] + assetdata[2]
                            ) == 100
                          ) {
                            const stock_details = {
                              name: name,
                              risk_category: riskCategory,
                              ntpc_value: Number(assetdata[0]),
                              hdfc_value: Number(assetdata[1]),
                              maruti_value: Number(assetdata[2]),
                              add_security_value: addSecurity,
                            };

                            const options = {
                              url: api.CREATE_STOCK,
                              method: "POST",
                              headers: {
                                "Content-Type": "application/json",
                                // 'Authorization': 'Bearer ' + window.localStorage.getItem('codeofauth')
                              },
                              data: JSON.stringify(stock_details),
                            };


                            axios(options)
                              .then((response) => {
                                console.log(response.data);

                                props.history.push("./Home");
                              })
                              .catch(function (e) {
                                props.callback();
                                if (e.message === "Network Error") {
                                  alert(
                                    "No Internet Found. Please check your internet connection"
                                  );
                                } else {
                                  alert(
                                    "Sorry, something went wrong. Please try again after sometime. If the issue still persists contact support."
                                  );
                                }
                              });
                          } else {
                            alert("Total Percentage should be 100.");
                          }
                        } else {
                          alert("Please fill out all required fields.");
                        }
                      }}
                    >
                      Save
                    </Button>

                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "#3067bf",
                        color: "white",
                        padding: 15,
                        marginTop: 10,
                        marginLeft: 20,
                        width: 200,
                        fontSize: 22,
                        fontWeight: "bold",
                      }}
                      type="submit"
                      component="span"
                      onClick={cancelModal}
                    >
                      Cancel
                    </Button>
                  </div>
                  {/* </Form> */}
                </Col>

                <Col md={6}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <ReactApexChart
                      options={data.options}
                      series={data.series}
                      type="donut"
                      width="380"
                    />
                  </div>

                  <div style={{ marginTop: 10 }}>
                    <MaterialTable
                      title="Asset Details"
                      columns={[
                        { title: "Name", field: "name" },
                        {
                          title: "Asset Allocation",
                          field: "name",
                          render: (rowData) => {
                            if (rowData.id == 3) {
                              return (
                                <Form.Control
                                  type="number"
                                  placeholder={rowData.placeholder}
                                  autoComplete="off"
                                  value={Number(
                                    Number(
                                      assetdata[0] + assetdata[1] + assetdata[2]
                                    )
                                  )}
                                />
                              );
                            } else {
                              return (
                                <Form.Control
                                  type="number"
                                  placeholder={rowData.placeholder}
                                  autoComplete="off"
                                  onChange={(event) => {
                                    let newdata = assetdata;
                                    newdata[rowData.id] = Number(
                                      event.target.value
                                    );
                                    setassetdata(newdata);
                                    setflag(!flag);
                                  }}
                                />
                              );
                            }
                          },
                        },
                      ]}
                      data={addSecurity.concat({
                        name: "Total*",
                        id: 3,
                        placeholder: "Enter Total Value",
                      })}
                      localization={{
                        header: {
                          actions: "Actions",
                        },
                      }}
                      options={{
                        headerStyle: {
                          backgroundColor: "#3067bf",
                          color: "#FFF",
                          fontSize: 22,
                          fontWeight: "bold",
                        },
                      }}
                    />
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
