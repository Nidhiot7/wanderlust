 mapboxgl.accessToken = mapToken;

      const map = new mapboxgl.Map({
        container: "map", // container ID
        // Choose from Mapbox's core styles, or make your own style with mapbox studio 
        style: "mapbox://styles/mapbox/streets-v12", // style URL
        center: [77.2090, 28.6139],                      // starting position [lng], lat]
        zoom: 9,                            // starting zoom
      });
    