// To add a new project, copy an object below and update its fields.
const projects = [
  {
    "title": "Classic Cartography Map",
    "category": "Cartography",
    "subtitle": "Cartographic design · 2017",
    "description": "A cartographic map illustrating geographic features and map design techniques.",
    "tags": [
      "Cartography",
      "Map design"
    ],
    "url": "pdfs/2017-07-19_Henry_Reissig_Classic_Carto.pdf",
    "image": "images/2017-07-19_Henry_Reissig_Classic_Carto.png",
    "symbol": "▤",
    "status": "PDF project"
  },
  {
    "title": "South American River Basins",
    "category": "Cartography",
    "subtitle": "Amazon · Orinoco · Paraná",
    "description": "The three major South American river basins, presented as a thematic reference map.",
    "tags": [
      "Hydrology",
      "Cartography"
    ],
    "url": "pdfs/2017-07-27_Henry_Reissig_GISC1491_River_Basins.pdf",
    "image": "images/2017-07-27_Henry_Reissig_GISC1491_River_Basins.png",
    "symbol": "▤",
    "status": "PDF project"
  },
  {
    "title": "Colorado Bend State Park Map",
    "category": "Cartography",
    "subtitle": "Colorado Bend State Park · Texas",
    "description": "Trail and amenity map of Colorado Bend State Park with terrain and recreation features.",
    "tags": [
      "Recreation",
      "Cartography"
    ],
    "url": "pdfs/2017-08-11_Henry_Reissig_GISC_1491_Colorado_Bend_State_Park_Redo2.pdf",
    "image": "images/2017-08-11_Henry_Reissig_GISC_1491_Colorado_Bend_State_Park_Redo2.png",
    "symbol": "▤",
    "status": "PDF project"
  },
  {
    "title": "Texas: A Century of Population Growth",
    "category": "Demographics",
    "subtitle": "Texas · 1920–2010",
    "description": "A multi-decade visualization of county population density and demographic change in Texas.",
    "tags": [
      "Population",
      "Historical GIS"
    ],
    "url": "pdfs/2017-08_02_Henry_Reissig_GISC_1491_Project_03_Texas_Century_of_Growth.pdf",
    "image": "images/2017-08_02_Henry_Reissig_GISC_1491_Project_03_Texas_Century_of_Growth.png",
    "symbol": "▤",
    "status": "PDF project"
  },
  {
    "title": "Austin B-cycle Site Analysis",
    "category": "Spatial Analysis",
    "subtitle": "Austin, Texas · 2017",
    "description": "Bike-share station and proposed-site analysis using five-minute walksheds, trail access, transit stations, and Imagine Austin corridors.",
    "tags": [
      "Walksheds",
      "Transportation"
    ],
    "url": "pdfs/2017-12-14_B-Cycle_Final Presentation for Executive Summary.pdf",
    "image": "images/2017-12-14_B-Cycle_Final Presentation for Executive Summary.png",
    "symbol": "▤",
    "status": "PDF project"
  },
  {
    "title": "Austin City Council District Profile",
    "category": "Cartography",
    "subtitle": "Austin council districts · 2013",
    "description": "District locations and a city council district profile map.",
    "tags": [
      "Districts",
      "Austin"
    ],
    "url": "pdfs/2017_09_14_Henry_Reissig_Austin_District_Profile.pdf",
    "image": "images/2017_09_14_Henry_Reissig_Austin_District_Profile.png",
    "symbol": "▤",
    "status": "PDF project"
  },
  {
    "title": "Arlington Stadium Parking Analysis",
    "category": "Spatial Analysis",
    "subtitle": "Arlington, Texas · 2017",
    "description": "Stadium and event-center parking analysis with mapped buildings, pavement, streets, and environmental features.",
    "tags": [
      "Parking",
      "Urban GIS"
    ],
    "url": "pdfs/2017_10_12Arlington_Parking_Analysis.pdf",
    "image": "images/2017_10_12Arlington_Parking_Analysis.png",
    "symbol": "▤",
    "status": "PDF project"
  },
  {
    "title": "Congressional Districts: Presentation",
    "category": "Spatial Analysis",
    "subtitle": "Travis County · 2018",
    "description": "Presentation examining Travis County congressional district boundaries and possible gerrymandering.",
    "tags": [
      "Elections",
      "GIS"
    ],
    "url": "pdfs/2018-05-04_Presentation_Henry_Reissig.pdf",
    "image": "images/2018-05-04_Presentation_Henry_Reissig.png",
    "symbol": "▤",
    "status": "PDF project"
  },
  {
    "title": "Congressional Districts: Project Report",
    "category": "Spatial Analysis",
    "subtitle": "Travis County · 2018",
    "description": "Written report on possible gerrymandering using voting tabulation districts and congressional district geography.",
    "tags": [
      "Elections",
      "Research"
    ],
    "url": "pdfs/2018-05-11_Henry_Reissig_Project_Summary_Report.pdf",
    "image": "images/2018-05-11_Henry_Reissig_Project_Summary_Report.png",
    "symbol": "▤",
    "status": "PDF project"
  },
  {
    "title": "Gentrification and Crime: Research Poster",
    "category": "Research",
    "subtitle": "Austin · 2003–2013",
    "description": "Research poster comparing crime changes across gentrified and non-gentrified census tracts in Austin.",
    "tags": [
      "Census tracts",
      "Crime"
    ],
    "url": "pdfs/Gentrification and Crime Poster - Final.pdf",
    "image": "images/Gentrification and Crime Poster - Final.png",
    "symbol": "▤",
    "status": "PDF project"
  },
  {
    "title": "Gentrification and Crime: Graduate Research",
    "category": "Research",
    "subtitle": "Austin · 2003–2013",
    "description": "Master of Applied Geography directed research investigating relationships between gentrification and crime in Austin.",
    "tags": [
      "Research",
      "Demographics"
    ],
    "url": "pdfs/THE RELATIONSHIP BETWEEN GENTRIFICATION AND CRIME IN AUSTIN TEXAS FROM 2003 TO 2013.pdf",
    "image": "images/THE RELATIONSHIP BETWEEN GENTRIFICATION AND CRIME IN AUSTIN TEXAS FROM 2003 TO 2013.png",
    "symbol": "▤",
    "status": "PDF project"
  },
  {
    "title": "Asian Grocery Store & Demographic Analysis",
    "category": "Demographics",
    "subtitle": "Travis, Williamson & Hays Counties",
    "description": "Asian grocery locations, census demographics, buffers and proposed site analysis.",
    "tags": [
      "ArcGIS Pro",
      "Census",
      "Site selection"
    ],
    "url": "",
    "image": "",
    "symbol": "◎",
    "status": "Project overview"
  },
  {
    "title": "Interactive Web GIS Applications",
    "category": "Web GIS",
    "subtitle": "JavaScript and ArcGIS",
    "description": "Interactive web mapping with demographic popups, map layers and custom controls.",
    "tags": [
      "JavaScript",
      "ArcGIS SDK"
    ],
    "url": "",
    "image": "",
    "symbol": "⌘",
    "status": "Project overview"
  },
  {
    "title": "Remote Sensing & Environmental Analysis",
    "category": "Remote Sensing",
    "subtitle": "Landsat imagery",
    "description": "Satellite imagery and spectral indices including NDVI and NDBI.",
    "tags": [
      "Landsat",
      "Raster GIS"
    ],
    "url": "",
    "image": "",
    "symbol": "◈",
    "status": "Methods overview"
  }
];
