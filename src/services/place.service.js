var places = [];

function getPlaces() {
  return new Promise(resolve => {
    // simple caching mechanism
    if (places.length) {
      resolve(places);
    }
    else {
      setTimeout(() => {
        places = generatePlaces();

        // places = places.map(place => {
        //   place.name = 'ttt';
        //   place.id = 1;
        //   place.lat = 35,
        //   place.lng = 34,
        //   place.tags = ['fun','super fun'];
        //   return place;
        // })
        
        resolve(places);
      }, 500);
    }

  });
}

// Used to create local data and without AJAX
function generatePlaces() {
  const locations = ['Home', 'Working place'];

  return locations.map(generatePlace);
}

// id, name, lat, lng, tags (fun / food / work / anything…) 
function generatePlace(location, i) {
  return {
    id: i + 1,
    name: `${location}`,
    lat: 35+i,
    lng: 34+i,
    tags: ['fun','super fun']
  }
}

export default{
  getPlaces,
  generatePlaces
}