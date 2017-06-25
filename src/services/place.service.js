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
  const locations = ['Home', 'Working place', 'Library', 'School'];

  return locations.map(generatePlace);
}

// id, name, lat, lng, tags (fun / food / work / anything…) 
function generatePlace(location, i) {
  return {
    id: i + 1,
    name: `${location}`,
    position: { lat: 32-0.1*i, lng: 35.4+0.1*i },
    position: { lat: 32-0.1*i, lng: 35.4+0.1*i },
    tags: ['fun', 'super fun']
  }
}

function savePlace(place) {
  var idx = places.findIndex(currPlace => currPlace.id === place.id);
  if (idx !== -1) {
    places.splice(idx, 1, place);
  } else {
    place.id = calcNewId();
    places.push(place);
  }
}

function calcNewId() {
  var newId = places.length;
  places.forEach(place => {
    if (place.id >= newId) newId++;
  }, this);

  return newId;
}

function deletePlace(place) {
  console.log('Deleting place:', place)
  var idx = places.indexOf(place)
  places.splice(idx, 1);
}

export default {
  getPlaces,
  generatePlaces,
  savePlace,
  deletePlace
}