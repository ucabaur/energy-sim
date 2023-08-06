import { PageFull } from "@/components/layout/PageFull";
import dynamic from "next/dynamic";

import { csv } from "d3-request";
import { useEffect, useState } from "react";

// Source data CSV
const DATA_URL =
  "https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/3d-heatmap/heatmap-data.csv"; // eslint-disable-line

const MapFullScreen = dynamic(() => import("../components/map/MapFullScreen"), {
  ssr: false,
});

export default function Home() {
  const [data, setData] = useState<any[] | null>(null);

  useEffect(() => {
    csv(DATA_URL, (error: any, csvData: any[]) => {
      if (error) {
        console.error("Error loading the CSV file", error);
        return;
      }
      const dataValues = csvData.map((d) => ({
        COORDINATES: [Number(d.lng), Number(d.lat)],
      }));
      console.log(dataValues);
      setData(dataValues);
    });
  }, []);

  return (
    <PageFull>
      {data && data.length > 0 ? (
        <MapFullScreen data={data} />
      ) : (
        <p>Loading ...</p>
      )}
    </PageFull>
  );
}
