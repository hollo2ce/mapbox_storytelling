var config = {
    style: 'mapbox://styles/hollo2ce/cm98uw2aw001501qn2d6o3gq2',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiaG9sbG8yY2UiLCJhIjoiY205OHR5azRhMDZ0cjJsb25mdXhwNTlzOCJ9.go09KSQGSBTIQF3cpHqXhQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'The Color Purple',
    subtitle: 'Economic Movement across the South',
    byline: 'Chloe Holloway',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'opening',
            alignment: 'centered',
            hidden: false,
            title: 'The Color Purple by Alice Walker',
            image: './assets/color_purple_cover.jpg',
            description: 'A story of sisterly love and self discovery',
            location: {
                center: [-90.3150946, 38.6605671],
                zoom: 4,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter-one',
            alignment: 'right',
            hidden: false,
            title: 'Someplace Georgia',
            image: './assets/rockingham_county_courthouse (1).jpeg',
            description: 'Court House<br>in Harrisonburg VA.',
            location: {
                center: [-83.5573651, 32.5573651], 
                zoom: 6.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-two',
            alignment: 'left',
            hidden: false,
            title: 'Olinka',
            image: './assets/firestone_farm.jpg',
            description: 'Description of the Olinka people',
            location: {
                center: [-10.378889436404226, 6.251275915595865], 
                zoom: 8.00,
                pitch: 45.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-three',
            alignment: 'fully',
            hidden: false,
            title: 'End',
            image: './assets/color_purple_field.jpg',
            description: 'Close of the novel.',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 3,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
