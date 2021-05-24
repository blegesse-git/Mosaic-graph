import React, { Component } from 'react';
import { cloudy } from './mosaicCSV';
import { Plot } from '@influxdata/giraffe';

export class PlotRenderer extends Component {

  render() {

    const mosaicLayer = {
      type: "mosaic",
      x: "_time",
      y: ["city"],
      yLabelColumns: ["city"],
      yLabelColumnSeparator: "",
      fill: ["_value"],
      hoverDimension: "xy",
      colors: ["#31C0F6", "#BC00B8", "#FF7E27"]
    };


    const config = {
      fluxResponse: cloudy,
      legendFont: "12px sans-serif",
      legendOrientationThreshold: 5,
      showAxes: true,
      tickFont: "10px sans-serif",
      layers: [mosaicLayer]
    };

    return (
      <div
        style={{
          width: 'calc(100vw - 100px)',
          height: 'calc(100vh - 125px)',
          margin: '50px',
        }}
      >
        <Plot config = { config } />
       </div>
    )

  }
}

