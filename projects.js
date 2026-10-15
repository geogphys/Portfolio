const PROJECTS = [
  {
    "title": "Healthy Texas Women: Provider Access",
    "category": "Health & services",
    "year": "Professional",
    "summary": "Evaluates whether clients meet distance criteria for primary care physicians and pharmacies across metropolitan, micropolitan, and rural areas.",
    "method": "Geodesic buffers, spatial joins, Excel pivot tables, and an interactive Experience Builder map. Static and interactive versions are documented in the work portfolio.",
    "links": [],
    "image": null,
    "featured": true
  },
  {
    "title": "Aging Services & Facility Access",
    "category": "Health & services",
    "year": "Professional",
    "summary": "Compares network and straight-line distances from Area Agencies on Aging offices to nursing and assisted living facilities, highlighting trips beyond 50 miles.",
    "method": "Network analysis and the Near tool match facilities to their agency region; demographic mapping adds context for Texans over age 60.",
    "links": [],
    "image": null,
    "featured": false
  },
  {
    "title": "Rural Children\u2019s Mental Health",
    "category": "Health & services",
    "year": "Professional",
    "summary": "Maps the estimated share of children with one or more mental health conditions in rural Texas counties by local mental health service area.",
    "method": "Choropleth mapping by LMHA and LBHA local service area.",
    "links": [],
    "image": null,
    "featured": false
  },
  {
    "title": "Hispanic Medicaid Enrollment",
    "category": "Health & services",
    "year": "June 2023",
    "summary": "Shows the geographic distribution of Hispanic participation in an eight-month Medicaid enrollment measure.",
    "method": "A five-class choropleth map presents regional percentage patterns.",
    "links": [],
    "image": null,
    "featured": false
  },
  {
    "title": "Unknown Race & Ethnicity in Medicaid",
    "category": "Health & services",
    "year": "June 2023",
    "summary": "Maps the percentage of Medicaid enrollment records with unknown race or ethnicity to show geographic patterns in reporting.",
    "method": "A five-class choropleth map summarizes the eight-month enrollment measure.",
    "links": [],
    "image": null,
    "featured": false
  },
  {
    "title": "Office Space & Telework",
    "category": "Health & services",
    "year": "Professional",
    "summary": "Maps office-building space allocated to workers in settings with both teleworkers and non-teleworkers.",
    "method": "Proportional symbols communicate square footage by office location.",
    "links": [],
    "image": null,
    "featured": false
  },
  {
    "title": "Geriatric Physician Distribution",
    "category": "Health & services",
    "year": "Professional",
    "summary": "Maps geriatric physicians across Texas, showing concentrations around metropolitan areas.",
    "method": "Point distribution mapping highlights the geography of provider locations.",
    "links": [],
    "image": null,
    "featured": false
  },
  {
    "title": "Texas SNAP Participation",
    "category": "Health & services",
    "year": "Professional",
    "summary": "Maps SNAP recipients by Texas county to communicate differences in participation across the state.",
    "method": "SPSS extraction, Excel-to-table conversion, county FIPS joins, and five-class natural-breaks symbology in ArcGIS Pro.",
    "links": [],
    "image": null,
    "featured": false
  },
  {
    "title": "Community Resilience Indicators",
    "category": "Health & services",
    "year": "Professional",
    "summary": "Maps the human well-being, cultural, and social component of the Baseline Resilience Indicators for Communities index.",
    "method": "County-level thematic cartography presents the documented BRIC indicator.",
    "links": [],
    "image": null,
    "featured": false
  },
  {
    "title": "Texas Social Vulnerability",
    "category": "Health & services",
    "year": "Professional",
    "summary": "Shows the overall Social Vulnerability Index across Texas counties, providing geographic context for community needs.",
    "method": "County-level choropleth mapping of overall SVI.",
    "links": [],
    "image": null,
    "featured": false
  },
  {
    "title": "Automated Layout Exports",
    "category": "Automation",
    "year": "Professional",
    "summary": "Uses Python to export every layout in the current ArcGIS Pro project to PDF or JPEG.",
    "method": "ArcPy\u2019s arcpy.mp module iterates through project layouts and creates consistently named outputs.",
    "links": [],
    "image": null,
    "featured": false
  },
  {
    "title": "Noise Across the Built Environment",
    "category": "Imagery & environment",
    "year": "2024",
    "summary": "Compares ambient sound in Balcones District Park and an adjacent Austin neighborhood using field measurements and interpolated surfaces.",
    "method": "ArcGIS Field Maps, NIOSH sound measurements, LiDAR-derived elevation, and deterministic and geostatistical interpolation.",
    "links": [
      {
        "url": "materials/noise-across-the-built-environment.pdf",
        "label": "Read document",
        "reader": "viewer.html?doc=noise-across-the-built-environment"
      }
    ],
    "image": "assets/noise-across-the-built-environment.webp",
    "featured": true
  },
  {
    "title": "Human Settlements & Deep Learning",
    "category": "Imagery & environment",
    "year": "2024",
    "summary": "Compares Landsat 8 and Sentinel-2 deep learning workflows for detecting human settlements near Kindu and Lokandu in the Democratic Republic of the Congo.",
    "method": "Tests model settings and detection extent; documents successful Landsat detections and limitations in rural and Sentinel-2 results.",
    "links": [
      {
        "url": "materials/human-settlements-deep-learning.pdf",
        "label": "Read document",
        "reader": "viewer.html?doc=human-settlements-deep-learning"
      }
    ],
    "image": "assets/human-settlements-deep-learning.webp",
    "featured": true
  },
  {
    "title": "Highland Lakes Land-Cover Change",
    "category": "Imagery & environment",
    "year": "2024",
    "summary": "Compares 1987 and 2011 Landsat imagery around the Highland Lakes to explore changes in development, vegetation, water, and other land cover.",
    "method": "Supervised and unsupervised classification with training samples, spectral signatures, and accuracy assessment.",
    "links": [
      {
        "url": "materials/highland-lakes-land-cover-change.pdf",
        "label": "Read document",
        "reader": "viewer.html?doc=highland-lakes-land-cover-change"
      },
      {
        "url": "materials/Highland Lakes Study/Project Summary Report Project 4 Henry Reissig GISC 1421.htm",
        "label": "View follow-up report"
      }
    ],
    "image": "assets/highland-lakes-land-cover-change.webp",
    "featured": false
  },
  {
    "title": "Barton Springs Video",
    "category": "Imagery & environment",
    "year": "2024",
    "summary": "A video presentation focused on Barton Springs, included as a multimedia example in the submitted portfolio.",
    "method": "View the submitted video for the project\u2019s full visual narrative.",
    "links": [
      {
        "url": "materials/barton-springs-video.mp4",
        "label": "Watch video"
      }
    ],
    "image": null,
    "featured": false
  },
  {
    "title": "Jitney Pilot: Southwest Austin",
    "category": "Cities & mobility",
    "year": "2024",
    "summary": "Compares fixed and semi-fixed jitney service areas in ZIP code 78749 to assess potential household and business coverage.",
    "method": "Walking-distance buffers and driving service areas compare coverage for alternative transit designs.",
    "links": [
      {
        "url": "materials/jitney-pilot-southwest-austin.pdf",
        "label": "Read document",
        "reader": "viewer.html?doc=jitney-pilot-southwest-austin"
      }
    ],
    "image": "assets/jitney-pilot-southwest-austin.webp",
    "featured": true
  },
  {
    "title": "Austin B-Cycle Connections",
    "category": "Cities & mobility",
    "year": "2017",
    "summary": "Maps existing and proposed B-cycle stations alongside bike-trail access, transit stops, and Imagine Austin corridors.",
    "method": "Five-minute walksheds explore connections between bicycle infrastructure and Capital Metro stations.",
    "links": [
      {
        "url": "materials/austin-b-cycle-connections.pdf",
        "label": "Read document",
        "reader": "viewer.html?doc=austin-b-cycle-connections"
      }
    ],
    "image": "assets/austin-b-cycle-connections.webp",
    "featured": false
  },
  {
    "title": "Arlington Stadium Parking",
    "category": "Cities & mobility",
    "year": "2017",
    "summary": "Maps parking, buildings, streets, and ecological features around Arlington\u2019s stadium and event-center area.",
    "method": "A collaborative data acquisition and analysis project with Ken Haenel and Nathan Wright.",
    "links": [
      {
        "url": "materials/arlington-stadium-parking.pdf",
        "label": "Read document",
        "reader": "viewer.html?doc=arlington-stadium-parking"
      }
    ],
    "image": "assets/arlington-stadium-parking.webp",
    "featured": false
  },
  {
    "title": "Crestview Transit-Oriented Development",
    "category": "Cities & mobility",
    "year": "Academic",
    "summary": "Proposes an integrated residential and retail development with transit access, child care, community gardens, and rainwater capture.",
    "method": "Site context, demographic comparison, and a mixed-use concept plan inform the team\u2019s design rationale.",
    "links": [
      {
        "url": "materials/crestview-transit-oriented-development.docx",
        "label": "Read document",
        "reader": "viewer.html?doc=crestview-transit-oriented-development"
      },
      {
        "url": "materials/crestview-transit-oriented-development-1.pdf",
        "label": "Read document",
        "reader": "viewer.html?doc=crestview-transit-oriented-development-1"
      }
    ],
    "image": "assets/crestview-transit-oriented-development-1.webp",
    "featured": false
  },
  {
    "title": "Wimberley & Martindale Area Study",
    "category": "Cities & mobility",
    "year": "2008",
    "summary": "Compares the history, demographics, and development challenges of Wimberley and Martindale, including the divide along Interstate 35.",
    "method": "Community histories, visitor observations, and demographic comparison explore preservation, growth, and revitalization.",
    "links": [
      {
        "url": "materials/wimberley-martindale-area-study.pdf",
        "label": "Read document",
        "reader": "viewer.html?doc=wimberley-martindale-area-study"
      }
    ],
    "image": null,
    "featured": false
  },
  {
    "title": "Public Space & Urban Interaction",
    "category": "Research",
    "year": "2011",
    "summary": "Explores how downtown design can support everyday social interaction through accessible public space, housing, transportation, and community activity.",
    "method": "Urban design essay examining how integrated places support living, working, shopping, and gathering.",
    "links": [
      {
        "url": "materials/public-space-urban-interaction.docx",
        "label": "Read document",
        "reader": "viewer.html?doc=public-space-urban-interaction"
      }
    ],
    "image": null,
    "featured": false
  },
  {
    "title": "Rebuilding After Hurricane Katrina",
    "category": "Research",
    "year": "2011",
    "summary": "Discusses disaster prevention, neighborhood culture, and funding considerations in the rebuilding of New Orleans.",
    "method": "Planning essay examining flood protection, natural buffers, and community-sensitive reconstruction.",
    "links": [
      {
        "url": "materials/rebuilding-after-hurricane-katrina.docx",
        "label": "Read document",
        "reader": "viewer.html?doc=rebuilding-after-hurricane-katrina"
      }
    ],
    "image": null,
    "featured": false
  },
  {
    "title": "Austin City Council District Profiles",
    "category": "Cartography",
    "year": "2017",
    "summary": "Combines 2013 American Community Survey data with council district boundaries to map age, income, education, and households with children.",
    "method": "A coordinated demographic map series supports comparisons across Austin districts.",
    "links": [
      {
        "url": "materials/austin-city-council-district-profiles.pdf",
        "label": "Read document",
        "reader": "viewer.html?doc=austin-city-council-district-profiles"
      }
    ],
    "image": "assets/austin-city-council-district-profiles.webp",
    "featured": true
  },
  {
    "title": "Texas: A Century of Growth",
    "category": "Cartography",
    "year": "2017",
    "summary": "Visualizes Texas population change from 1920 through 2010 with four complementary views across successive decades.",
    "method": "Population-density maps, dot density, and mean population centers use U.S. Census data.",
    "links": [
      {
        "url": "materials/texas-a-century-of-growth.pdf",
        "label": "Read document",
        "reader": "viewer.html?doc=texas-a-century-of-growth"
      }
    ],
    "image": "assets/texas-a-century-of-growth.webp",
    "featured": false
  },
  {
    "title": "South America\u2019s Major River Basins",
    "category": "Cartography",
    "year": "2017",
    "summary": "Maps the Amazon, Orinoco, and Paran\u00e1 basins, emphasizing river systems and the geography of freshwater resources.",
    "method": "Custom orthographic map views use Global Runoff Data Centre basin data and Natural Earth basemaps.",
    "links": [
      {
        "url": "materials/south-america-s-major-river-basins.pdf",
        "label": "Read document",
        "reader": "viewer.html?doc=south-america-s-major-river-basins"
      }
    ],
    "image": "assets/south-america-s-major-river-basins.webp",
    "featured": false
  },
  {
    "title": "Colorado Bend State Park",
    "category": "Cartography",
    "year": "2017",
    "summary": "Creates a visitor-oriented map showing trails, terrain, vegetation, roads, and park amenities.",
    "method": "Cartographic hierarchy, contour lines, trail difficulty, and amenity symbols organize detailed park information.",
    "links": [
      {
        "url": "materials/colorado-bend-state-park.pdf",
        "label": "Read document",
        "reader": "viewer.html?doc=colorado-bend-state-park"
      }
    ],
    "image": "assets/colorado-bend-state-park.webp",
    "featured": false
  },
  {
    "title": "Madagascar & the African Coast",
    "category": "Cartography",
    "year": "2017",
    "summary": "A classic reference map of Madagascar and the neighboring African coast featuring cities, rivers, and geographic labels.",
    "method": "Mercator projection, graticules, and layered reference data demonstrate traditional map composition.",
    "links": [
      {
        "url": "materials/madagascar-the-african-coast.pdf",
        "label": "Read document",
        "reader": "viewer.html?doc=madagascar-the-african-coast"
      }
    ],
    "image": "assets/madagascar-the-african-coast.webp",
    "featured": false
  },
  {
    "title": "Gentrification & Crime in Austin",
    "category": "Research",
    "year": "2015\u20132016",
    "summary": "Examines changes in property, violent, and non-indexed crime from 2003 to 2013 in gentrified and comparison census tracts.",
    "method": "Master of Applied Geography directed research compares 24 gentrified and 24 non-gentrified tracts; includes a research report and poster.",
    "links": [
      {
        "url": "materials/gentrification-crime-in-austin.pdf",
        "label": "Read document",
        "reader": "viewer.html?doc=gentrification-crime-in-austin"
      },
      {
        "url": "materials/gentrification-crime-in-austin-1.pdf",
        "label": "Read document",
        "reader": "viewer.html?doc=gentrification-crime-in-austin-1"
      }
    ],
    "image": null,
    "featured": true
  },
  {
    "title": "Travis County Congressional Districts",
    "category": "Research",
    "year": "2018",
    "summary": "Examines differences in demographics and voting patterns between the Travis County portions of congressional districts and the areas outside the county.",
    "method": "Voting-tabulation geography, election data, demographic comparisons, and district shape measures. This study concerns historical district boundaries.",
    "links": [
      {
        "url": "materials/travis-county-congressional-districts.pdf",
        "label": "Read document",
        "reader": "viewer.html?doc=travis-county-congressional-districts"
      },
      {
        "url": "materials/travis-county-congressional-districts-1.pdf",
        "label": "Read document",
        "reader": "viewer.html?doc=travis-county-congressional-districts-1"
      },
      {
        "url": "materials/travis-county-congressional-districts-2.docx",
        "label": "Read document",
        "reader": "viewer.html?doc=travis-county-congressional-districts-2"
      }
    ],
    "image": "assets/travis-county-congressional-districts.webp",
    "featured": false
  },
  {
    "title": "Austin Crime Change: 2004\u20132009",
    "category": "Research",
    "year": "2010",
    "summary": "Explores where recorded crime changed across Austin between 2004 and 2009, using census-tract mapping and spatial surfaces.",
    "method": "Joins police records to census geography, interpolates crime surfaces, and compares years with raster calculations.",
    "links": [
      {
        "url": "materials/austin-crime-change-2004-2009.docx",
        "label": "Read document",
        "reader": "viewer.html?doc=austin-crime-change-2004-2009"
      },
      {
        "url": "materials/austin-crime-change-2004-2009-1.pptx",
        "label": "Read presentation",
        "reader": "viewer.html?doc=austin-crime-change-2004-2009-1"
      }
    ],
    "image": null,
    "featured": false
  },
  {
    "title": "Factors Affecting U.S. Crime Rates",
    "category": "Research",
    "year": "2009",
    "summary": "Tests relationships between violent crime and thirteen demographic and socioeconomic factors across forty U.S. cities.",
    "method": "Multiple regression analysis combines FBI crime statistics and U.S. Census demographic data.",
    "links": [
      {
        "url": "materials/factors-affecting-u-s-crime-rates.docx",
        "label": "Read document",
        "reader": "viewer.html?doc=factors-affecting-u-s-crime-rates"
      }
    ],
    "image": null,
    "featured": false
  },
  {
    "title": "Metropolitan Opportunity & Poverty",
    "category": "Research",
    "year": "2009",
    "summary": "Reviews research on the segregation of poverty in major U.S. metropolitan areas between 1970 and 1990.",
    "method": "Executive summary and article presentation explain dissimilarity and isolation indices and their planning implications.",
    "links": [
      {
        "url": "materials/metropolitan-opportunity-poverty.docx",
        "label": "Read document",
        "reader": "viewer.html?doc=metropolitan-opportunity-poverty"
      },
      {
        "url": "materials/metropolitan-opportunity-poverty-1.pptx",
        "label": "Read presentation",
        "reader": "viewer.html?doc=metropolitan-opportunity-poverty-1"
      }
    ],
    "image": null,
    "featured": false
  },
  {
    "title": "Conservation Corridor Planning",
    "category": "Research",
    "year": "2013",
    "summary": "Reviews how conservation corridors connect fragmented habitats while balancing urban growth and environmental needs.",
    "method": "Literature review organized around biological benefits, design, policy, community issues, and GIScience.",
    "links": [
      {
        "url": "materials/conservation-corridor-planning.docx",
        "label": "Read document",
        "reader": "viewer.html?doc=conservation-corridor-planning"
      },
      {
        "url": "materials/conservation-corridor-planning-1.docx",
        "label": "Read document",
        "reader": "viewer.html?doc=conservation-corridor-planning-1"
      },
      {
        "url": "materials/conservation-corridor-planning-2.docx",
        "label": "Read document",
        "reader": "viewer.html?doc=conservation-corridor-planning-2"
      }
    ],
    "image": null,
    "featured": false
  },
  {
    "title": "Hydraulic Fracturing & the Environment",
    "category": "Research",
    "year": "2012",
    "summary": "Examines hydraulic fracturing technology and its environmental and legal implications, with attention to Texas shale development.",
    "method": "Environmental law research paper discussing extraction methods, risks, and regulatory concerns.",
    "links": [
      {
        "url": "materials/hydraulic-fracturing-the-environment.docx",
        "label": "Read document",
        "reader": "viewer.html?doc=hydraulic-fracturing-the-environment"
      }
    ],
    "image": null,
    "featured": false
  },
  {
    "title": "Avian Influenza: A Spatial Review",
    "category": "Research",
    "year": "2009",
    "summary": "Critically reviews research on H5N1 outbreaks in Thailand and geographic relationships among poultry, land use, and people.",
    "method": "Article critique assesses spatial risk-factor analysis and the use of autologistic regression.",
    "links": [
      {
        "url": "materials/avian-influenza-a-spatial-review.docx",
        "label": "Read document",
        "reader": "viewer.html?doc=avian-influenza-a-spatial-review"
      }
    ],
    "image": null,
    "featured": false
  }
];
