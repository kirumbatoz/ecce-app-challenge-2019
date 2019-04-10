// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define({"widgets/Screening/setting/nls/strings":{units:{feetUnit:"Pies / Pies cuadrados",milesUnit:"Millas / Acres",metersUnit:"Metros / Metros cuadrados",kilometersUnit:"Kil\u00f3metros / Kil\u00f3metros cuadrados",hectaresUnit:"Kil\u00f3metros / Hect\u00e1reas"},analysisTab:{analysisTabLabel:"An\u00e1lisis",selectAnalysisLayerLabel:"Capas de an\u00e1lisis",addLayerLabel:"Agregar capas",noValidLayersForAnalysis:"No se ha encontrado ninguna capa en el mapa web seleccionado.",noValidFieldsForAnalysis:"No se ha encontrado ning\u00fan campo v\u00e1lido en el mapa web seleccionado. Elimine la capa seleccionada.",
addLayersHintText:"Sugerencia: Seleccione las capas y los campos que desea incluir en el an\u00e1lisis y el informe",addLayerNameTitle:"Nombre de capa",addFieldsLabel:"Agregar campo",addFieldsPopupTitle:"Selecciona campos",addFieldsNameTitle:"Nombres de campo",aoiToolsLegendLabel:"Herramientas de \u00c1rea de inter\u00e9s",aoiToolsDescriptionLabel:"Elija y etiquete las herramientas disponibles para crear el \u00e1rea de inter\u00e9s.",placenameLabel:"Nombre de lugar",drawToolsLabel:"Elegir herramientas de dibujo",
uploadShapeFileLabel:"Cargar shapefile",coordinatesLabel:"Coordenadas",coordinatesDrpDwnHintText:"Sugerencia: Seleccione una unidad para mostrar los trazados poligonales introducidos",coordinatesBearingDrpDwnHintText:"Sugerencia: Seleccione un rumbo para mostrar los trazados poligonales introducidos",allowShapefilesUploadLabel:"Permitir a los usuarios cargar shapefiles para incluirlos en el an\u00e1lisis",allowShapefilesUploadLabelHintText:"Sugerencia: Agregue una opci\u00f3n a la pesta\u00f1a Informe en la que los usuarios puedan cargar sus propios datos como shapefile para incluirlo en el informe de an\u00e1lisis",
allowVisibleLayerAnalysisLabel:"No analizar ni ofrecer resultados sobre capas no visibles",allowVisibleLayerAnalysisHintText:"Sugerencia: Las capas desactivadas o no visibles debido a la configuraci\u00f3n de la visibilidad de la escala no se analizar\u00e1n ni se incluir\u00e1n en los resultados impresos o descargados.",areaUnitsLabel:"Unidades de resultados de an\u00e1lisis",maxFeatureForAnalysisLabel:"N\u00famero m\u00e1ximo de entidades a analizar",maxFeatureForAnalysisHintText:"Sugerencia: Defina el n\u00famero m\u00e1ximo de entidades que se incluir\u00e1n en el an\u00e1lisis",
searchToleranceLabelText:"Tolerancia de b\u00fasqueda",searchToleranceHint:"Sugerencia: La tolerancia de b\u00fasqueda se utiliza al analizar entradas de puntos y l\u00edneas",placenameButtonText:"Nombre de lugar",drawToolsButtonText:"Dibujar",shapefileButtonText:"Shapefile",coordinatesButtonText:"Coordenadas",invalidLayerErrorMsg:"Configure los campos de",drawToolSelectableLayersLabel:"Elegir capas seleccionables",drawToolSelectableLayersHint:"Sugerencia: Seleccione las capas que contienen las entidades que se pueden seleccionar con la herramienta de dibujo Seleccionar",
drawToolsSettingsFieldsetLabel:"Herramientas de dibujo",drawToolPointLabel:"Point",drawToolPolylineLabel:"Polil\u00ednea",drawToolExtentLabel:"Extensi\u00f3n",drawToolPolygonLabel:"Pol\u00edgono",selectDrawToolsText:"Elegir las herramientas de dibujo disponibles para crear el \u00e1rea de inter\u00e9s",selectingDrawToolErrorMessage:"Elija al menos una herramienta de dibujo o capa de selecci\u00f3n para poder utilizar la opci\u00f3n Herramientas de dibujo en Herramientas AOI."},downloadTab:{downloadLegend:"Configuraci\u00f3n de descarga",
reportLegend:"Ajustes de informe",downloadTabLabel:"Descargar",syncEnableOptionLabel:"Capas de entidades",syncEnableOptionHint:"Sugerencia: Seleccione las capas que se pueden descargar y especifique los formatos en que cada capa est\u00e1 disponible. Los datasets descargados incluir\u00e1n aquellas entidades que intersequen el \u00e1rea de inter\u00e9s.",syncEnableOptionNote:"Nota: Las descargas de shapefiles y geodatabases de archivos requieren capas de entidades con la sincronizaci\u00f3n habilitada. El formato de shapefile solo es compatible con las capas de entidades alojadas de ArcGIS Online.",
extractDataTaskOptionLabel:"Servicio de geoprocesamiento Tarea de extracci\u00f3n de datos",extractDataTaskOptionHint:"Sugerencia: Use un servicio de geoprocesamiento Tarea de extracci\u00f3n de datos publicado para descargar las entidades que se intersequen con el \u00e1rea de inter\u00e9s en los formatos de geodatabase de archivos o shapefile.",cannotDownloadOptionLabel:"Deshabilitar descarga",syncEnableTableHeaderTitle:{layerNameLabel:"Nombre de capa",csvFileFormatLabel:"CSV",fileGDBFormatLabel:"Geodatabase de archivos",
ShapefileFormatLabel:"Shapefile",allowDownloadLabel:"Permitir descarga"},setButtonLabel:"Establecer",GPTaskLabel:"Especificar la direcci\u00f3n URL del servicio de geoprocesamiento",printGPServiceLabel:"URL del servicio de impresi\u00f3n",setGPTaskTitle:"Especificar la direcci\u00f3n URL del servicio de geoprocesamiento requerido",logoLabel:"Logo",logoChooserHint:"Sugerencia: Haga clic en el icono de la imagen para cambiar el logotipo que aparece en la esquina superior izquierda del informe",footnoteLabel:"Nota a pie de p\u00e1gina",
columnTitleColorPickerLabel:"Color de t\u00edtulo de la columna del informe",reportTitleLabel:"T\u00edtulo del informe",errorMessages:{invalidGPTaskURL:"Servicio de geoprocesamiento no v\u00e1lido. Seleccione un servicio de geoprocesamiento que contenga una Tarea de extracci\u00f3n de datos.",noExtractDataTaskURL:"Seleccione un servicio de geoprocesamiento que contenga una Tarea de extracci\u00f3n de datos.",duplicateCustomOption:"Existe una entrada duplicada para ${duplicateValueSizeName}.",invalidLayoutWidth:"Anchura no v\u00e1lida introducida para ${customLayoutOptionValue}.",
invalidLayoutHeight:"Altura no v\u00e1lida introducida para ${customLayoutOptionValue}.",invalidLayoutPageUnits:"Unidad de p\u00e1gina no v\u00e1lida seleccionada para ${customLayoutOptionValue}.",failtofetchbuddyTaskDimension:"Error al obtener informaci\u00f3n de dimensi\u00f3n de la tarea de acompa\u00f1amiento. Int\u00e9ntelo de nuevo.",failtofetchbuddyTaskName:"Error al obtener el nombre de la tarea de acompa\u00f1amiento. Int\u00e9ntelo de nuevo.",failtofetchChoiceList:"Error al obtener la lista de opciones del servicio de impresi\u00f3n. Int\u00e9ntelo de nuevo.",
invalidWidth:"Ancho no v\u00e1lido.",invalidHeight:"Altura no v\u00e1lida."},addCustomLayoutTitle:"Agregar dise\u00f1o personalizado",customLayoutOptionHint:"Sugerencia: Agregue un dise\u00f1o de su servicio de impresi\u00f3n a la lista de opciones de impresi\u00f3n.",reportDefaultOptionLabel:"Dise\u00f1o predeterminado",pageSizeUnits:{millimeters:"Mil\u00edmetros",points:"Puntos"},noDataTextRepresentation:"Valor sin datos",naTextRepresentation:"Valor no aplicable",noDataDefaultText:"No hay datos",
notApplicableDefaultText:"N/A"},generalTab:{generalTabLabel:"General",tabLabelsLegend:"Etiquetas del panel",tabLabelsHint:"Sugerencia: especifique las etiquetas",AOITabLabel:"Panel \u00c1rea de inter\u00e9s",ReportTabLabel:"Panel Informe",bufferSettingsLegend:"Configuraci\u00f3n de la zona de influencia",defaultBufferDistanceLabel:"Distancia de zona de influencia predeterminada",defaultBufferUnitsLabel:"Unidades de zona de influencia",generalBufferSymbologyHint:"Sugerencia: La simbolog\u00eda se utilizar\u00e1 para indicar el \u00e1rea de zona de influencia alrededor del \u00e1rea de inter\u00e9s definida",
aoiGraphicsSymbologyLegend:"Simbolog\u00eda de \u00c1rea de inter\u00e9s",aoiGraphicsSymbologyHint:"Sugerencia: La simbolog\u00eda se utilizar\u00e1 para indicar \u00e1reas de inter\u00e9s de pol\u00edgonos, l\u00edneas y puntos",pointSymbologyLabel:"Punto",previewLabel:"Previsualizaci\u00f3n",lineSymbologyLabel:"L\u00ednea",polygonSymbologyLabel:"Pol\u00edgono",aoiBufferSymbologyLabel:"Simbolog\u00eda de zona de influencia",pointSymbolChooserPopupTitle:"S\u00edmbolo de direcci\u00f3n o ubicaci\u00f3n de punto",
polygonSymbolChooserPopupTitle:"S\u00edmbolo de pol\u00edgono",lineSymbolChooserPopupTitle:"S\u00edmbolo de l\u00ednea",aoiSymbolChooserPopupTitle:"S\u00edmbolo de zona de influencia",aoiTabText:"AOI",reportTabText:"Informe",invalidSymbolValue:"Valor de s\u00edmbolo no v\u00e1lido."},searchSourceSetting:{searchSourceSettingTabTitle:"Configuraci\u00f3n de fuente de b\u00fasqueda",searchSourceSettingTitle:"Configuraci\u00f3n de fuente de b\u00fasqueda",searchSourceSettingTitleHintText:"Agrega y configura servicios de geocodificaci\u00f3n o capas de entidades como fuentes de b\u00fasqueda. Estas fuentes especificadas determinan qu\u00e9 se puede buscar en el cuadro de b\u00fasqueda",
addSearchSourceLabel:"Agregar origen de b\u00fasqueda",featureLayerLabel:"Capa de entidades",geocoderLabel:"Geocodificador",generalSettingLabel:"Configuraci\u00f3n general",allPlaceholderLabel:"Texto del marcador de posici\u00f3n para buscar en todo:",allPlaceholderHintText:"Sugerencia: escriba el texto que se va a mostrar como marcador de posici\u00f3n mientras busca todas las capas y el geocodificador",generalSettingCheckboxLabel:"Mostrar ventana emergente de la entidad o la ubicaci\u00f3n encontrada",
countryCode:"C\u00f3digo(s) de pa\u00eds o regi\u00f3n",countryCodeEg:"p. ej., ",countryCodeHint:"Si se deja este valor en blanco, se buscar\u00e1 en todos los pa\u00edses y regiones",questionMark:"?",searchInCurrentMapExtent:"Buscar solo en la extensi\u00f3n de mapa actual",locatorUrl:"Direcci\u00f3n URL del geocodificador",locatorName:"Nombre del geocodificador",locatorExample:"Ejemplo",locatorWarning:"No se admite esta versi\u00f3n del servicio de geocodificaci\u00f3n. El widget admite servicios de geocodificaci\u00f3n 10.0 y superiores.",
locatorTips:"No hay sugerencias disponibles porque el servicio de geocodificaci\u00f3n no admite la opci\u00f3n de sugerencias.",layerSource:"Origen de capa",setLayerSource:"Establecer origen de capa",setGeocoderURL:"Establecer direcci\u00f3n URL de geocodificador",searchLayerTips:"No hay sugerencias disponibles porque el servicio de entidades no admite la opci\u00f3n de paginaci\u00f3n.",placeholder:"Texto del marcador de posici\u00f3n",searchFields:"Campos de b\u00fasqueda",displayField:"Mostrar campo",
exactMatch:"Coincidencia exacta",maxSuggestions:"M\u00e1ximo de sugerencias",maxResults:"Resultados m\u00e1ximos",enableLocalSearch:"Habilitar b\u00fasqueda local",minScale:"Escala M\u00ednima",minScaleHint:"Si la escala del mapa es mayor que esta escala, se aplicar\u00e1 la b\u00fasqueda local",radius:"Radio",radiusHint:"Permite especificar el radio de un \u00e1rea alrededor del centro del mapa actual que se utilizar\u00e1 para mejorar la clasificaci\u00f3n de los candidatos de geocodificaci\u00f3n a fin de que se devuelvan primero aquellos m\u00e1s cercanos a la ubicaci\u00f3n",
setSearchFields:"Establecer campos de b\u00fasqueda",set:"Establecer",invalidUrlTip:"No se puede acceder a la direcci\u00f3n URL ${URL} o bien no es v\u00e1lida.",invalidSearchSources:"Configuraci\u00f3n de fuente de b\u00fasqueda no v\u00e1lida"},errorMsg:{textboxFieldsEmptyErrorMsg:"Rellene los campos obligatorios",bufferDistanceFieldsErrorMsg:"Introduzca valores v\u00e1lidos",invalidSearchToleranceErrorMsg:"Introduzca un valor v\u00e1lido para la tolerancia de b\u00fasqueda",atLeastOneCheckboxCheckedErrorMsg:"Configuraci\u00f3n no v\u00e1lida: se requiere al menos una herramienta de \u00c1rea de inter\u00e9s.",
noLayerAvailableErrorMsg:"No hay capas disponibles",layerNotSupportedErrorMsg:"No compatible ",noFieldSelected:"Use la acci\u00f3n de editar para seleccionar los campos para el an\u00e1lisis.",duplicateFieldsLabels:'Se ha agregado una etiqueta duplicada "${labelText}" para: "${itemNames}"',noLayerSelected:"Seleccione al menos una capa para el an\u00e1lisis.",errorInSelectingLayer:"No se puede seleccionar la capa. Int\u00e9ntelo de nuevo.",errorInMaxFeatureCount:"Introduzca un recuento m\u00e1ximo de entidades v\u00e1lido para el an\u00e1lisis."},
_localized:{}}});