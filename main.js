console.log("Ook hallo wereld vanaf Javascript!");

import * as maplibregl from "https://esm.sh/maplibre-gl";

const map = new maplibregl.Map({
    container: 'mijnkaart', // container id
    style: './assets/style.json',
    center: [51.96857, 5.66509], // starting position [lng, lat]
    zoom: 13 // starting zoom
});

import { Protocol } from "https://esm.sh/pmtiles";
const protocol = new Protocol();
maplibregl.addProtocol("pmtiles", protocol.tile);