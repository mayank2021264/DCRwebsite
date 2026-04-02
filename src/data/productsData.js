// ── All product data lives here ──
// specifications now use a grade-table format:
// { headers: ["Element", "Grade A"] or ["Element", "Grade A", "Grade B"] }
// rows: [["Si", "65-75%", "72-80%"]] — Grade B column is optional

export const categories = [
  {
    id: "ferro-alloys",
    label: "Ferro Alloys",
    description: "Quality ferro alloys used as deoxidizers and alloying agents in steel and cast iron manufacturing.",
  },
  {
    id: "non-ferrous",
    label: "Non Ferrous Metals",
    description: "A wide range of non-ferrous metals supplying to manufacturing and industrial sectors with certified quality.",
  },
  {
    id: "ores-minerals",
    label: "Ores & Minerals",
    description: "Industrial ores and minerals sourced from certified suppliers for diverse manufacturing requirements.",
  },
  {
    id: "refractories",
    label: "Refractories",
    description: "High-performance refractory materials engineered for extreme temperature applications in steel, foundry and ceramic industries.",
  },
  {
    id: "Carbon-products",
    label: "Carbon Products",
    description: "High-performance carbon materials engineered for extreme temperature applications in steel, foundry and ceramic industries.",
  },
  {
    id: "Other-products",
    label: "Other Products",
    description: "A variety of other products catering to diverse industrial needs.",
  },
];

export const products = [
  // ── REFRACTORIES ──
  {
    id: 1,
    category: "refractories",
    name: "Ladle Nozzles",
    image: "/img/LadleNozzles.png",
    details: {
      description:
        "Ladle Nozzles are high-temperature refractory components used to control and regulate the flow of molten metal from steel ladles during casting operations.",
      applications: ["Steel ladle bottom pouring", "Molten metal flow control", "Continuous casting systems","Foundry pouring operations"],
      specifications: {
        type: "custom",
        message: "Available in different sizes and grades as per your requirements.",
      },
    },
  },
  {
    id: 2,
    category: "refractories",
    name: "Collector Nozzles",
    image: "/img/CollectorNozzles.png",
    details: {
      description:
        "Collector Nozzles are critical flow control components used between ladle and tundish systems to ensure smooth and controlled transfer of molten metal. They are designed to withstand extreme temperatures and corrosive environments while maintaining optimal flow characteristics.",
      applications: ["Ladle to tundish connection", "Continuous casting machines", "Steel plant operations","High-temperature flow systems"],
      specifications: {
        type: "custom",
        message: "Available in different sizes and grades as per your requirements.",
      },
    },
  },
  {
    id: 3,
    category: "refractories",
    name: "Graphite Stopper Heads",
    image: "/img/GraphiteStopperHead.jpeg",
    details: {
      description:
        "Graphite Stopper Heads are precision-engineered refractory components used for accurate control of molten metal flow in ladle systems. They are designed to withstand extreme temperatures and corrosive environments while providing reliable performance in steelmaking and foundry applications.",
      applications: ["Steel ladle flow control", "Foundry operations", "Molten metal discharge regulation"],
      specifications: {
        type: "custom",
        message: "Available in different sizes and grades as per your requirements.",
      },
    },
  },
  {
    id: 4,
    category: "refractories",
    name: "Ladle Sleeves",
    image: "/img/LadleSleeves.jpeg",
    details: {
      description:
        "Ladle Sleeves is one of the Refractories  component being used in for Pouring the molten metal  flow while providing thermal insulation and protection to surrounding equipment.",
      applications: ["Steel ladle pouring systems"],
      specifications: {
        type: "custom",
        message: "Available in different sizes and grades as per your requirements.",
      },
    },
  },
  {
    id: 5,
    category: "refractories",
    name: "High Alumina Bricks",
    image: "/img/HAbricks.jpeg",
    details: {
      description:
        "Alumina Bricks are high-performance refractory bricks with excellent thermal stability, high strength, and resistance to high temperature (molten metal).",
      applications: ["Furnace linings", "Kilns and reactors", "Steel and cement industries","High-temperature industrial processes"],
      specifications: {
        type: "custom",
        message: "Available in different sizes and grades as per your requirements.",
      },
    },
  },
  {
    id: 6,
    category: "refractories",
    name: "High Alumina Castables",
    image: "/img/HACastables.jpeg",
    details: {
      description:
        "High Alumina Castables are versatile refractory materials used for monolithic linings, offering high strength and excellent resistance to thermal shock. They are ideal for applications in steel, cement, and petrochemical industries where durability and performance are critical.",
      applications: ["Furnace linings", "Kiln linings", "Boilers and reactors","Steel and non-ferrous industries"],
      specifications: {
        type: "custom",
        message: "Available in different sizes and grades as per your requirements.",
      },
    },
  },

  // ── FERRO ALLOYS ──
  {
    id: 7,
    category: "ferro-alloys",
    name: "Ferro Vanadium",
    image: "/images/Ferrovanadium.jpg",
    details: {
      description:
        "Ferro Vanadium is a high-strength alloying additive used in steel production to improve tensile strength, hardness and wear resistance.",
      applications: ["Structural steel manufacturing", "Tool and high-speed steel", "Automotive components", "Aerospace alloys"],
      specifications: {
        headers: ["Element", "Standard Grade"],
        rows: [
          ["Vanadium (V)", "50% min"],
          ["Carbon (C)", "0.08% max"],
          ["Silicon (Si)", "1.50% max"],
          ["Phosphorus (P)", "0.05% max"],
          ["Sulphur (S)", "0.02% max"],
        ],
      },
    },
  },
  {
    id: 8,
    category: "ferro-alloys",
    name: "Ferro Molybdenum",
    image: "/img/FerroMolybdenum.jpeg",
    details: {
      description:
        "Ferro Molybdenum is an alloy additive that enhances corrosion resistance, strength at high temperatures and hardenability in alloy steels. It is widely used in stainless steel and high-strength low-alloy (HSLA) steel production.",
      applications: ["Oil & Gas equipments", "Stainless steel production", "Alloy steel","Pressure vessels"],
      specifications: {
        headers: ["Element", "Standard Grade"],
        rows: [
          ["Molybdenum (Mo)", "60% min"],
          ["Carbon (C)", "0.10% max"],
          ["Silicon (Si)", "1.00% max"],
          ["Phosphorus (P)", "0.05% max"],
          ["Sulphur (S)", "0.12% max"],
          ["Size", "10-60 mm"],
        ],
      },
    },
  },
  {
    id: 9,
    category: "ferro-alloys",
    name: "Ferro Titanium",
    image: "/img/Titanium.jpeg",
    details: {
      description:
        "Ferro Titanium is used as a deoxidizer and grain refiner in steel manufacturing, improving toughness and corrosion resistance.",
      applications: ["Stainless steel", "Tool steel", "High-speed steel","Deoxidizing agent in steel plants"],
      specifications: {
        headers: ["Element", "Standard Grade"],
        rows: [
          ["Titanium (Ti)", "65-70% min"],
          ["Carbon (C)", "0.15% max"],
          ["Silicon (Si)", "2.00% max"],
          ["Phosphorus (P)", "0.015% max"],
          ["Sulphur (S)", "0.05% max"],
        ],
      },
    },
  },
  {
    id: 10,
    category: "ferro-alloys",
    name: "Ferro Aluminium",
    image: "/img/FerroAluminium.jpeg",
    details: {
      description:
        "Ferro Aluminium is widely used as a powerful deoxidizer in steel and iron production to improve metal cleanliness and performance. It also enhances corrosion resistance and mechanical properties in various steel grades.",
      applications: ["Steel deoxidation (AOD)", "Alloy steel production", "Foundry casting processes","Desulphurization"],
      specifications: {
        headers: ["Element", "30-35% Grade", "35-40% Grade"],
        rows: [
          ["Aluminium (Al)", "30-35%", "35-40%"],
          ["Carbon (C)", "0.10% max", "0.10% max"],
          ["Phosphorus (P)", "0.03% max", "0.03% max"],
          ["Sulphur (S)", "0.03% max","0.03% max"],
          ["Manganese (Mn)", "1.00% max", "1.00% max"],
        ],
      },
    },
  },
  {
    id: 11,
    category: "ferro-alloys",
    name: "Ferro Silicon Calcium",
    image: "/img/FerroSiliconCalcium.jpeg",
    details: {
      description:
        "Ferro Silicon Calcium is a high-performance alloy used for deoxidation, desulphurization and inclusion control in steel production. It enhances steel cleanliness, improves mechanical properties and reduces casting defects.",
      applications: ["Secondary steel refining", "Clean steel production", "Continuous casting","Ladle treatment"],
      specifications: {
        headers: ["Element", "Standard Grade"],
        rows: [
          ["Calcium (Ca)", "28-32% min"],
          ["Silicon (Si)", "57-65% min"],
          ["Carbon (C)", "1.00% max"],
          ["Phosphorus (P)", "0.50% max"],
          ["Sulphur (S)", "0.50% max"],
          ["Aluminium (Al)", "1.50% max"],
        ],
      },
    },
  },
  {
    id: 12,
    category: "ferro-alloys",
    name: "Silicon Magnesium (inoculants/nodulizers)",
    image: "/img/FerroSiliconMagnesium.jpeg",
    details: {
      description:
        "Silicon Magnesium alloys are used primarily in the production of ductile iron to improve nodularity and mechanical properties. They act as inoculants and nodulizers, enhancing the strength, ductility and machinability of cast iron products.",
      applications: ["Ductile iron casting","Automotive castings","Heavy machinery components","Foundry applications"],
      specifications: {
        headers: ["Element", "Standard Grade"],
        rows: [
          ["Magnesium (Mg)", "5-10%"],
          ["Silicon (Si)", "40-50%"],
          ["Rare Earth", "1-3%"],
          ["Calcium (Ca)", "1-2%"],
          ["Aluminium (Al)", "1.00% max"],
        ],
      },
    },
  },

  // ── NON FERROUS METALS ──
  {
    id: 13,
    category: "non-ferrous",
    name: "Copper Ingots",
    image: "/img/CopperPunching.jpeg",
    details: {
      description:
        "Copper is a highly conductive non‑ferrous metal with excellent thermal and electrical properties, widely used in industrial and consumer applications.",
      applications: ["Electrical wiring", "Heat exchangers", "Bronze and brass alloys", "Plumbing and roofing"],
      specifications: {
        headers: ["Element", "StandardGrade"],
        rows: [
          ["Copper (Cu)", "99.9% min"],
          ["Oxygen (O)", "0.05% max"],
          ["Lead (Pb)", "0.005% max"],
          ["Iron (Fe)", "0.005% max"],
        ],
      },
    },
  },
  {
    id: 14,
    category: "non-ferrous",
    name: "Tin",
    image: "/images/Tin.png",
    details: {
      description:
        "Tin is a soft, ductile non‑ferrous metal valued for its resistance to corrosion and ability to form protective coatings.",
      applications: ["Tin plating for food cans", "Bronze (tin + copper) alloys", "Glass production", "Soldering materials"],
      specifications: {
        headers: ["Element", "Standard Grade"],
        rows: [
          ["Tin (Sn)", "99.9% min"],
          ["Lead (Pb)", "0.05% max"],
          ["Arsenic (As)", "0.01% max"],
          ["Iron (Fe)", "0.01% max"],
        ],
      },
    },
  },
  {
    id: 15,
    category: "non-ferrous",
    name: "Nickel",
    image: "/img/Nickel.jpeg",
    details: {
      description:
        "Nickel is a versatile non‑ferrous metal known for its corrosion resistance, toughness, and ability to form alloys with superior mechanical properties.",
      applications: ["Stainless steel production", "Electroplating", "Batteries", "Superalloys for aerospace"],
      specifications: {
        headers: ["Element", "Standard Grade"],
        rows: [
          ["Nickel (Ni)", "99.% min"],
          ["Carbon (C)", "0.10% max"],
          ["Iron (Fe)", "0.50% max"],
          ["Sulphur (S)", "0.01% max"],
        ],
      },
    },
  },
  

  // ── ORES & MINERALS ──
  {
    id: 16,
    category: "ores-minerals",
    name: "Zircon Sand",
    image: "/img/ZirconSand.jpeg",
    details: {
      description:
        "Zircon Sand is a premium refractory mineral known for its high melting point, low thermal expansion and excellent chemical stability. It is widely used in foundry, ceramic and refractory applications.",
      applications: ["Foundry casting", "Ceramic manufacturing", "Glass industry", "Refractory production"],
      specifications: {
        headers: ["Component", "Percentage"],
        rows: [
          ["Zircon (ZrO₂ + HfO₂)", "65% min"],
          ["SiO₂", "32-33% max"],
          ["Fe2O3", "0.2% max"],
          ["TiO2", "0.2% max"],
        ],
      },
    },
  },
  {
    id: 17,
    category: "ores-minerals",
    name: "Zircon flour",
    image: "/img/ZirconFlour.jpeg",
    details: {
      description:
        "Zircon Flour is finely milled zircon used in precision casting and ceramic applications requiring smooth surface finish and thermal resistance. It offers high purity and consistent particle size for optimal performance.",
      applications: ["Investment casting", "Ceramic glazes", "Refractory coatings", "Core and mould coatings"],
      specifications: {
        headers: ["Element", "Percentage"],
        rows: [
          ["Zircon (ZrO₂ + HfO₂)", "65% min"],
          ["SiO₂", "32-33% max"],
          ["TiO₂", "0.40% max"],
          ["Fe₂O₃", "0.13% max"],
        ],
      },
    },
  },
  {
    id: 18,
    category: "ores-minerals",
    name: "Chromite Sand",
    image: "/img/ChromiteSand.jpeg",
    details: {
      description:
        "Chromite Sand is a high-performance moulding sand used in foundries due to its high refractoriness and thermal conductivity. It provides excellent resistance to thermal shock and chemical attack, making it ideal for casting ferrous and non-ferrous metals.",
      applications: ["Steel casting", "Heavy casting moulds", "moulding sand mixtures"],
      specifications: {
        headers: ["Element", "Percentage"],
        rows: [
          ["Chromite (Cr₂O₃)", "46% min"],
          ["FeO", "26-28% max"],
          ["Al₂O₃", "15% max"],
          ["SiO₂", "1% max"],
        ],
      },
    },
  },
  {
    id: 19,
    category: "ores-minerals",
    name: "Olivine Sand",
    image: "/img/OlivineSand.jpeg",
    details: {
      description:
        "Olivine Sand is a natural mineral sand used in foundries due to its low thermal expansion and resistance to metal penetration. And is widely used in manganese steel castings.",
      applications: ["Moulding sand", "Steel casting", "Core sand", "Slag conditioning"],
      specifications: {
        headers: ["Element", "Percentage"],
        rows: [
          ["SiO₂", "40.38% max"],
          ["MgO", "44.81% max"],
          ["Fe₂O₃", "9.30% max"],
          ["Al₂O₃", "2.24% max"],
          ["CaO", "1.33% max"],
        ],
      },
    },
  },
  {
    id: 20,
    category: "ores-minerals",
    name: "Sillimanite Sand",
    image: "/img/SilimaniteSand.jpeg",
    details: {
      description:
        "Sillimanite Sand is a high-alumina refractory mineral used in high-temperature applications due to its excellent thermal stability. It is commonly used in foundries for moulding sand and core sand, as well as in steel casting processes where resistance to thermal shock and chemical attack is required.",
      applications: ["Refractory bricks", "Kiln linings", "Furnace linings", "Ceramic industry"],
      specifications: {
        headers: ["Element", "Percentage"],
        rows: [
          ["Al₂O₃", "57-58% max"],
          ["SiO₂", "37-39% max"],
          ["Fe₂O₃", "0.8% max"],
          ["TiO₂", "0.6% max"],
        ],
      },
    },
  },
  {
    id: 21,
    category: "ores-minerals",
    name: "Perlite Slax-30",
    image: "/img/PerliteSlax-30.jpeg",
    details: {
      description:
        "Expanded Perlite is a lightweight volcanic mineral used for insulation and refractory applications due to its low density and thermal resistance.",
      applications: ["Refractory backfill", "Construction materials","Slag removing"],
      specifications: {
        headers: ["Element", "Percentage"],
        rows: [
          ["SiO₂", "70-75% max"],
          ["Al₂O₃", "12-15% max"],
          ["Fe₂O₃", "2.00% max"],
          ["CaO", "4.00% max"],
          ["K₂O + Na₂O", "3-8% max"],
        ],
      },
    },
  },

  /* carbon based products */
  {
    id: 22,
    category: "Carbon-products",
    name: "Calcined Petroleum Coke (CPC)",
    image: "/img/CPC.jpeg",
    details: {
      description:
        " Calcined Petroleum Coke (CPC) is a high-carbon material produced by calcining green petroleum coke at high temperatures. It is widely used as a carbon additive in steel and foundry industries.",
      applications: ["Rising carbon in steel production", "Foundry iron casting", "Aluminium smelting","Recarburizing agent"],
      specifications: {
        headers: ["Element", "Standard Grade"],
        rows: [
          ["Fixed Carbon", "98.5% min"],
          ["Sulphur (S)", "0.5% max"],
          ["Ash", "0.5% max"],
          ["Volatile Matter", "0.5% max"],
          ["Moisture", "0.5% max"],
        ],
      },
    },
  },
  {
    id: 23,
    category: "Carbon-products",
    name: "Graphite Granules",
    image: "/img/GraphiteGranules.jpeg",
    details: {
      description:
        "Graphite granules are high-purity carbon materials used in metallurgical and foundry processes for enhancing carbon content and improving metal quality. They offer excellent thermal conductivity and chemical stability.",
      applications: ["Steel melting", "Carbon additive","Recarburizing agent", "Lubrication applications"],
      specifications: {
        headers: ["Element", "Standard Grade"],
        rows: [
          ["Fixed Carbon", "98-99% min"],
          ["Sulphur (S)", "0.03% max"],
          ["Ash", "1.00% max"],
          ["Moisture", "0.5% max"],
        ],
      },
    },
  },
  {
    id: 24,
    category: "Carbon-products",
    name: "Carbon Raisers",
    image: "/img/CarbonRaisers.jpeg",
    details: {
      description:
        " Carbon Raisers are high-carbon additives used in steel and iron production to increase carbon content efficiently during melting processes. They are designed to provide consistent carbon levels while minimizing impurities, making them ideal for foundry and steelmaking applications.",
      applications: ["Steel refining", "Grey iron casting", "Ductile iron production","Desulphurization"],
      specifications: {
        headers: ["Element", "Standard Grade", "Premium Grade"],
        rows: [
          ["Fixed Carbon", "90-91%", "94-95%"],
          ["Sulphur (S)", "0.30% max","0.20% max"],
          ["Ash", "1-3.00% max", "1.00% max"],
          ["Volatile Matter", "1.00% max", "0.50% max"],
        ],
      },
    },
  },

  /* Other products */
  {
    id: 25,
    category: "Other-products",
    name: "Tungsten Metal",
    image: "/img/Tungsten.jpeg",
    details: {
      description:
        " Tungsten Metal is a high-density, high-melting-point material known for its exceptional strength, heat resistance, and durability in extreme temperature conditions.",
      applications: ["High-temperature alloys & superalloys", "Aerospace and defense components", "Electrical & electronic applications","Tool steels"],
      specifications: {
        headers: ["Element", "Standard Grade"],
        rows: [
          ["Tungsten (W)", "99.9% min"],
        ],
      },
    },
  },
  {
    id: 26,
    category: "Other-products",
    name: "Selenium Granules",
    image: "/img/SeleniumGranules.jpeg",
    details: {
      description:
        " Selenium Granules are high-purity materials used as alloying and additive elements in metallurgical and glass industries, known for improving machinability and specific material properties.",
      applications: ["Free-machining steels", "Glass manufacturing", "Pigment & chemical industries","Metallurgical additives"],
      specifications: {
        headers: ["Element", "Standard Grade"],
        rows: [
          ["Selenium (Se)", "99% min"],
          ["Impurities", "Trace"],
        ],
      },
    },
  },
  {
    id: 27,
    category: "Other-products",
    name: "LC Ferro Chrome",
    image: "/img/LCFerroChrome.jpeg",
    details: {
      description:
        " Low Carbon Ferro Chrome is an essential alloying material used in stainless steel production to enhance corrosion resistance and strength while maintaining low carbon content.",
      applications: ["Stainless steel manufacturing", "Alloy steel production", "special steel grades","Foundry applications"],
      specifications: {
        headers: ["Element", "Standard Grade"],
        rows: [
          ["Chromium (Cr)", "60-70% min"],
          ["Carbon (C)", "0.05-0.10% max"],
          ["Silicon (Si)", "1.00% max"],
          ["Phosphorus (P)", "0.03% max"],
          ["Sulphur (S)", "0.03% max"],
        ],
      },
    },
  },
  {
    id: 28,
    category: "Other-products",
    name: "Silicon Metal",
    image: "/img/SiliconMetal.jpeg",
    details: {
      description:
        " Silicon Metal is a high-purity industrial material widely used as an alloying element and deoxidizer in steel, aluminum and chemical industries.",
      applications: ["Aluminium alloy production", "Steel deoxidation", "Silicon & chemical manufacturing","Foundry applications"],
      specifications: {
        headers: ["Element", "Standard Grade"],
        rows: [
          ["Silicon (Si)", "98-99% min"],
          ["Aluminum (Al)", "0.3-0.5% max"],
          ["Calcium (Ca)", "0.1-0.3% max"],
        ],
      },
    },
  },
  
  {
    id: 29,
    category: "Other-products",
    name: "Chromium Metal",
    image: "/img/ChromiumMetal.jpeg",
    details: {
      description:
        " Chromium Metal is a high-purity metallic element used as an alloying material to enhance hardness, corrosion resistance, and high-temperature strength in steel and superalloys.",
      applications: ["Stainless steel production", "Superalloys & special alloys", "Aerospace & defense components","Chemical & refractory industries"],
      specifications: {
        headers: ["Element", "Standard Grade"],
        rows: [
          ["Chromium (Cr)", "99% min"],
          ["Carbon (C)", "0.05% max"],
          ["Silicon (Si)", "0.1-0.3% max"],
          ["Aluminium (Al)", "0.1% max"],
        ],
      },
    },
  },
];