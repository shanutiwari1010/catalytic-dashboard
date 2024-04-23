import Bargraph from "@/components/Charts/Bargraph";
import LineGraph from "@/components/Charts/Linegraph";
import Areagraph from "@/components/Charts/Areagraph";
import Explorer from "@/components/Charts/Explorer";
import MapView from "@/components/Charts/MapView";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

function Home() {
  const [reportingData, setReportingData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getReportingData = async () => {
      try {
        const dataReq = await fetch("http://localhost:3000/data");
        if (!dataReq.ok) {
          throw new Error("Failed to fetch data");
        }
        const dataRes = await dataReq.json();
        setReportingData(dataRes);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching data:", error);
      }
    };
    getReportingData();
  }, []);

  console.log(reportingData, "data");
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!reportingData || reportingData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="h-screen bg-black border-x-2 border-sky-700 ">
        <div className="flex justify-evenly">
          <Button>Shanu</Button>
          <Bargraph
            data={reportingData.reports}
            legend={true}
            categories={["1 day", "7 days", "30 days"]}
            text={reportingData.reports[3].text}
          />

          <LineGraph
            data={reportingData.theft}
            type="Theft"
            text={"in theft/date"}
          />
          <Bargraph
            data={reportingData.deviceCount}
            legend={true}
            categories={["cus1", "cus2", "cus3"]}
            text={reportingData.deviceCount[2].text}
          />
          <Bargraph
            data={reportingData.vehicleCount}
            legend={true}
            categories={["cus1", "cus2", "cus3"]}
            text={reportingData.vehicleCount[2].text}
          />
          <Areagraph
            data={reportingData.deviceInfo}
            legend={true}
            text={"new/installed/active/total devices"}
          />
        </div>
        <Explorer />
        <MapView />

        <div className="flex justify-evenly items-center">
          <LineGraph
            data={reportingData.deviceBattery}
            type="deviceBattery"
            text={"device bettry"}
          />
          <LineGraph
            data={reportingData.vehicleBattery}
            type="vehicleBattery"
            text={"vehicle bettry"}
          />

          <Bargraph />
          <div className="text-white text-3xl max-w-72 ">
            Device and Vehicle details(SN, IMEI, VIN , Owner etc)
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
