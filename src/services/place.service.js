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
        
        // To fix the issue of dealing with 0 & undefined
        places[0].id = 1;
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
function generatePlace(location='', i=0) {
  return {
    id: (i)? i + 1 : undefined, 
    name: `${location}`,
    position: { lat: 32-0.1*i, lng: 35.4+0.1*i },
    tags: ['fun', 'super fun']
  }
}

function savePlace(place) {
  console.log('saving: ',place);
  if (place.id === undefined) {
    console.log('place does not exist: ',places);
    place.id = calcNewId();
    console.log('place going into list: ',place);
    places.push(place);
    console.log('now the places list: ',places);
  } else {
    let idx = places.findIndex(currPlace => currPlace.id === place.id);
    console.log('place exist in index: ',idx);
    places.splice(idx, 1, place);
  }

  // var idx = places.findIndex(currPlace => currPlace.id === place.id);
  // if (idx !== -1) {
  //   console.log('place exist in index: ',idx);
  //   places.splice(idx, 1, place);
  // } else {
  //   console.log('place does not exist: ',places);
  //   place.id = calcNewId();
  //   console.log('place going into list: ',place);
  //   places.push(place);
  //   console.log('now the places list: ',places);
  // }
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

const getEmptyPlace = generatePlace;

export default {
  getPlaces,
  generatePlaces,
  savePlace,
  deletePlace,
  getEmptyPlace
}