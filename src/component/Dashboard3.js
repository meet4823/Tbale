
import * as React from "react";
import { Pie } from "@nivo/pie";
import { ThemeProvider, SvgWrapper } from "@nivo/core";
import { BoxLegendSvg } from "@nivo/legends";
import NivoPage from './Nivo/nivoji';
import Head from './Head';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const data = [
  {
    id: "css",
    label: "css (custom)",
    value: 410,
    color: "hsl(19, 70%, 50%)"
  },
  {
    id: "sass",
    label: "sass",
    value: 175,
    color: "hsl(213, 70%, 50%)"
  },
  {
    id: "javascript",
    label: "javascript",
    value: 128,
    color: "hsl(58, 70%, 50%)"
  }
];
function DashboardPage3 () {
  return (
    <>
    <Head/>
  <div style={styles}>
  <Pie
    width={600}
    height={600}
    data={data}
    margin={{
      top: 40,
      right: 80,
      bottom: 80,
      left: 80
    }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    colorBy="id"
    borderColor="inherit:darker(0.6)"
    radialLabelsSkipAngle={10}
    radialLabelsTextXOffset={6}
    radialLabelsTextColor="#333333"
    radialLabelsLinkOffset={0}
    radialLabelsLinkDiagonalLength={16}
    radialLabelsLinkHorizontalLength={24}
    radialLabelsLinkStrokeWidth={1}
    radialLabelsLinkColor="inherit"
    slicesLabelsSkipAngle={10}
    slicesLabelsTextColor="#333333"
    animate={true}
    motionStiffness={90}
    motionDamping={15}
    theme={{
      tooltip: {
        container: {
          fontSize: "13px"
        }
      },
      labels: {
        text: { color: "#555" }
      }
    }}
  />
  <ThemeProvider>
    <SvgWrapper
      height={200}
      width={400}
      margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
    >
      <BoxLegendSvg
        anchor="center"
        data={data}
        containerWidth={400}
        containerHeight={100}
        height={100}
        width={400}
        direction="row"
        // itemDirection="right-to-left"
        itemWidth={90}
        itemHeight={20}
        itemsSpacing={15}
        // itemOpacity={.5}
        padding={10}
        // translateX={-50}
        // translateY={-100}
        symbolSize={12}
        symbolShape="circle"
      />
    </SvgWrapper>
  </ThemeProvider>
  <NivoPage/>
</div>
</>
  );
}
export default DashboardPage3;

