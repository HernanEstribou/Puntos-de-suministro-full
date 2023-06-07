var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_20230515direccionesnormalizadascongeorefcompletas_1 = new ol.format.GeoJSON();
var features_20230515direccionesnormalizadascongeorefcompletas_1 = format_20230515direccionesnormalizadascongeorefcompletas_1.readFeatures(json_20230515direccionesnormalizadascongeorefcompletas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20230515direccionesnormalizadascongeorefcompletas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20230515direccionesnormalizadascongeorefcompletas_1.addFeatures(features_20230515direccionesnormalizadascongeorefcompletas_1);
var lyr_20230515direccionesnormalizadascongeorefcompletas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_20230515direccionesnormalizadascongeorefcompletas_1, 
                style: style_20230515direccionesnormalizadascongeorefcompletas_1,
                interactive: true,
                title: '<img src="styles/legend/20230515direccionesnormalizadascongeorefcompletas_1.png" /> 20230515 -direcciones normalizadas con georef completas'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_20230515direccionesnormalizadascongeorefcompletas_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_20230515direccionesnormalizadascongeorefcompletas_1];
lyr_20230515direccionesnormalizadascongeorefcompletas_1.set('fieldAliases', {'nroclie': 'nroclie', 'nombre': 'nombre', 'direccion': 'direccion', 'direccion_normalizada': 'direccion_normalizada', 'Pais': 'Pais', 'Provincia': 'Provincia', 'Ciudad': 'Ciudad', });
lyr_20230515direccionesnormalizadascongeorefcompletas_1.set('fieldImages', {'nroclie': '', 'nombre': '', 'direccion': '', 'direccion_normalizada': '', 'Pais': '', 'Provincia': '', 'Ciudad': '', });
lyr_20230515direccionesnormalizadascongeorefcompletas_1.set('fieldLabels', {'nroclie': 'no label', 'nombre': 'no label', 'direccion': 'no label', 'direccion_normalizada': 'no label', 'Pais': 'no label', 'Provincia': 'no label', 'Ciudad': 'no label', });
lyr_20230515direccionesnormalizadascongeorefcompletas_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});