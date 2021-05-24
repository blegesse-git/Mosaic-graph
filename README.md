# Giraffe Mosaic Graph 

This is a an example React app that uses Giraffe to generate a Mosaic graph using results from a Flux query. 

## Quick Start

Giraffe can be used in a simple index.html page without any advanced configuration. Even though Giraffe is designed to work with React apps, you won't need React or Node.js. However, for this sample app, we are going to create this project using React. 

Step 1 
```
Run npx create-react-app my-app in your terminal 
cd my-app
npm start
```

Step 2
In app.js, start off by importing the following: 
```
import React, { Component } from 'react';
import { Plot } from '@influxdata/giraffe';
```

Step 3
In the src folder, create a new file. This is where you'll save the comma seperated values (CSV) from the Flux query.
Once this step is complete, import the csv file into your app.js 
```
import { cloudy } from './mosaicCSV';
```

Step 4
In the render method of app.js, we will create a mosaic layer config object with the following properties: 
```
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
```

Step 5
Next, we will need to create a configuration object that tells Giraffe to render a mosaic graph. Add the following code into the config object: 
```
    const config = {
      fluxResponse: cloudy,
      legendFont: "12px sans-serif",
      legendOrientationThreshold: 5,
      showAxes: true,
      tickFont: "10px sans-serif",
      layers: [mosaicLayer]
    };
```
Step 6
Our last step is to add <Plot> in the return statement and pass in the config object as prop. 
```
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
```
