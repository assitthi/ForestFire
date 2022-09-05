var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_2019_750_kernel_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "2019_750_kernel",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/2019_750_kernel_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11048714.759220, 2154235.304695, 11194087.841914, 2326010.588050]
                            })
                        });
var format_8Tambonarea_2 = new ol.format.GeoJSON();
var features_8Tambonarea_2 = format_8Tambonarea_2.readFeatures(json_8Tambonarea_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_8Tambonarea_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_8Tambonarea_2.addFeatures(features_8Tambonarea_2);
var lyr_8Tambonarea_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_8Tambonarea_2, 
                style: style_8Tambonarea_2,
                interactive: true,
                title: '<img src="styles/legend/8Tambonarea_2.png" /> 8 Tambon area'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_2019_750_kernel_1.setVisible(true);lyr_8Tambonarea_2.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_2019_750_kernel_1,lyr_8Tambonarea_2];
lyr_8Tambonarea_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'P_CODE': 'P_CODE', 'A_CODE': 'A_CODE', 'T_CODE': 'T_CODE', 'P_NAME_T': 'P_NAME_T', 'P_NAME_E': 'P_NAME_E', 'A_NAME_T': 'A_NAME_T', 'A_NAME_E': 'A_NAME_E', 'T_NAME_T': 'T_NAME_T', 'T_NAME_E': 'T_NAME_E', });
lyr_8Tambonarea_2.set('fieldImages', {'OBJECTID': 'Range', 'P_CODE': 'TextEdit', 'A_CODE': 'TextEdit', 'T_CODE': 'TextEdit', 'P_NAME_T': 'TextEdit', 'P_NAME_E': 'TextEdit', 'A_NAME_T': 'TextEdit', 'A_NAME_E': 'TextEdit', 'T_NAME_T': 'TextEdit', 'T_NAME_E': 'TextEdit', });
lyr_8Tambonarea_2.set('fieldLabels', {'OBJECTID': 'no label', 'P_CODE': 'no label', 'A_CODE': 'no label', 'T_CODE': 'no label', 'P_NAME_T': 'no label', 'P_NAME_E': 'no label', 'A_NAME_T': 'no label', 'A_NAME_E': 'no label', 'T_NAME_T': 'inline label', 'T_NAME_E': 'no label', });
lyr_8Tambonarea_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});