# react-google-streetview

A simple [Street View](https://developers.google.com/maps/documentation/javascript/streetview) react component.

## Table of Contents

- [Installing](#installing)
- [Examples](#examples)
- [Props](#props)
- [Issues](#issues)
- [Contributing](#contributing)
- [Licensing](#licensing)

## Installing

```
npm install --save react-google-streetview
```

Then, just import to your React component:

```jsx
import Streetview from 'react-google-streetview';
```

## Examples

A demo can be found [here](https://alexus37.github.io/react-google-streetview/)

## Props

| Name                      | Type     | Default | Description                                                                                                                                                                                                         |
| :------------------------ | :------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| apiKey                    | string   |         | API key for the google streetview. Can be found [here](https://developers.google.com/maps/documentation/javascript)                                                                                                 |
| googleMaps                | object   |         | Google maps object, needed if no apiKey is provided or streetview is used multiple times                                                                                                                            |
| streetViewPanoramaOptions | object   |         | Options defining the properties of a StreetViewPanorama object. More infos [here](https://developers.google.com/maps/documentation/javascript/reference/street-view#StreetViewPanoramaOptions)                      |
| onPositionChanged         | function |         | This event is fired when the panorama's position changes. The position changes as the user navigates through the panorama or the position is set manually.                                                          |
| onPovChanged              | function |         | This event is fired when the panorama's point-of-view changes. The point of view changes as the pitch, zoom, or heading changes.                                                                                    |
| onZoomChanged             | function |         | This event is fired when the panorama's zoom level changes.                                                                                                                                                         |
| onPanoChanged             | function |         | This event is fired when the panorama's pano id changes. The pano may change as the user navigates through the panorama or the position is manually set. Note that not all position changes trigger a pano_changed. |
| onVisibleChanged          | function |         | This event is fired when the panorama's visibility changes. The visibility is changed when the Pegman is dragged onto the map, the close button is clicked.                                                         |

## Issues

Find a bug or want to request a new feature? Please let us know by submitting an issue.

## Contributing

Contributions are welcome from anyone and everyone.

## Licensing

Copyright 2020

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's [license.txt](/license.txt) file.
