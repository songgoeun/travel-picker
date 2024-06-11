import React, { useEffect, useState } from 'react';

// Place Photos
// function createPhotoMarker(place) {
//   var photos = place.photos;
//   if (!photos) {
//     return;
//   }

//   var marker = new google.maps.Marker({
//     map: map,
//     position: place.geometry.location,
//     title: place.name,
//     icon: photos[0].getUrl({maxWidth: 35, maxHeight: 35})
//   });
// }

const Marker: React.FC<google.maps.MarkerOptions> = ({ ...options }) => {
  const [marker, setMarker] = useState<google.maps.Marker>();

  useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  useEffect(() => {
    if (marker) {
      marker.setOptions(options);
    }
  }, [marker, options]);

  return null;
};

export default Marker;
