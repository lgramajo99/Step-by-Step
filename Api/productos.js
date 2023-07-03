const products = [
  {
    item_number: "NIDR7882-700",
    name: "Zapatillas Urbanas Nike Court Vision Mid Winter Hombre",
    description:
      "Si te gusta destacarte entre la multitud, las Zapatillas Urbanas Nike Court Vision Mid Winter Hombre son para vos. Inspirado en el básquetbol de los años 80 te permite llevar tu estilo retro a la temporada de invierno. Los colores clásicos, las lengüetas grandes y el cuello con amortiguación adicional ofrecen un look premium de última moda para que brilles en todo momento. La mezcla de materiales duraderos y acolchados suma calidez a tu outfit para que te sientas cómodo en todo momento. Además, la suela de goma posee un patrón gráfico actualizado para mejorar la tracción y durabilidad. Vestite con un look canchero y elegante.",
    price: 54.99,
    discount_percentage: 0,
    rating: [1, 2, 3, 4, 5],
    stock: 50,
    brand: ["nike"], //[1]
    category: ["casual"],
    images: ["...", "...", "...", "..."],
    size: [34, 35, 37, 38, 39, 40, 42, 43, 44, 45],
    color: ["brown"],
    gender: ["men"],

    sold_count: 0,
  },
  {
    item_number: "NICD5432-03",
    name: "Zapatillas Nike Air Max Excee",
    description:
      "Lucí con estilo en tus entrenamientos o en tu día a día gracias a las Zapatillas Nike Air Max Excee, su tecnología Air max te brinda mejores y amortiguadas pisadas que te harán sentir seguro y confiado en cualquier momento que las lleves puestas.",
    price: 57.99,
    discount_percentage: 0,
    rating: [4],
    stock: 50,
    brand: ["nike"],
    category: ["training", "casual"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw56df9706/products/NI_CD5432-003/NI_CD5432-003-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw8011ab4c/products/NI_CD5432-003/NI_CD5432-003-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw888a9341/products/NI_CD5432-003/NI_CD5432-003-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw44aa7830/products/NI_CD5432-003/NI_CD5432-003-6.JPG",
    ],
    size: [34, 35, 37, 38, 39, 40, 42, 43],
    color: ["black"],
    gender: ["women"],

    sold_count: 0,
  },
  {
    item_number: "NIDC3729-502",
    name: "Zapatillas Nike Revolution 6 Next Nature",
    description:
      "Las Zapatillas Nike Revolution 6 Next Nature son el calzado de running del futuro. La malla extra aporta comodidad a tus pies y los materiales adicionales brindan durabilidad a la capellada. La mediasuela de espuma te da una sensación de confort y suavidad únicas en cada pisada. Para una mayor flexibilidad, la suela está diseñada en computadora y optimiza la tracción para que disfrutes de todas tus carreras.",
    price: 54.99,
    discount_percentage: 0,
    rating: [4],
    stock: 50,
    brand: ["nike"],
    category: ["training"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw61742a4b/products/NI_DC3729-502/NI_DC3729-502-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw74974026/products/NI_DC3729-502/NI_DC3729-502-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw22512755/products/NI_DC3729-502/NI_DC3729-502-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw6ac9f231/products/NI_DC3729-502/NI_DC3729-502-6.JPG",
    ],
    size: [34, 35, 37, 38, 39, 40, 42, 43],
    color: ["pink"],
    gender: ["men"],

    sold_count: 0,
  },
  {
    item_number: "NIDR2402-100",
    name: "Zapatillas Nike Air Max Excee Mujer",
    description:
      "Cámara de aire que amortigua y absorbe el impacto en la pisada",
    price: 57.49,
    discount_percentage: 0,
    rating: [5],
    stock: 50,
    brand: ["nike"],
    category: ["all day"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw226f9998/products/NIDR2402-100/NIDR2402-100-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw4535eaad/products/NIDR2402-100/NIDR2402-100-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw75748567/products/NIDR2402-100/NIDR2402-100-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw7f7a0022/products/NIDR2402-100/NIDR2402-100-6.JPG",
    ],
    size: [34, 35, 37, 38, 39, 40, 42, 43],
    color: ["white"],
    gender: ["women"],

    sold_count: 0,
  },
  {
    item_number: "NICW4555-006",
    name: "Zapatillas Nike Air Max Sc",
    description:
      "Las Zapatillas Nike Air Max Sc son simples y modernas. Están diseñadas para acompañarte en tu rutina cuidando tus pisadas gracias a su amortiguación eficaz en la unidad Air. La capellada mezcla materiales de alta calidad como cuero, malla y sintético que mejorar la transpirabilidad y soportan el uso diario a la perfección. La entresuela de espuma mejora aún más la amortiguación y la suela de goma ofrece tracción a todos tus pasos para que te dirijas a tu destino en pleno confort.",
    price: 50.59,
    discount_percentage: 0,
    rating: [4],
    stock: 50,
    brand: ["nike"],
    category: ["all day"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw4d5af313/products/NI_CW4555-006/NI_CW4555-006-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw8067ce43/products/NI_CW4555-006/NI_CW4555-006-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwb7a2d842/products/NI_CW4555-006/NI_CW4555-006-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw805dd7d6/products/NI_CW4555-006/NI_CW4555-006-6.JPG",
    ],
    size: [38, 39, 40, 42, 43, 44, 45],
    color: [
      "blac",
      "white",
      "red",
      "yellow",
      "blue",
      "green",
      "brown",
      "pink",
      "gray",
    ],
    gender: ["men"],

    sold_count: 0,
  },
  {
    item_number: "NIDA9492-100",
    name: "Zapatillas Entrenamiento Nike Air Zoom Superrep 3 Mujer",
    description:
      "Las Zapatillas Entrenamiento Nike Air Zoom Superrep 3 Mujer combinan durabilidad con un diseño hecho para que superes tus marcas personales. ¿El resultado? Un calzado construido para un corredor, pero adaptable a tus rutinas de entrenamiento diarias. La espuma Nike Zoom X en la plantilla brinda el retorno de energía que tu pie necesita en cada pisada y la unidad Zoom Air visible proporciona una amortiguación sensible, y le da un toque moderno a la suela. La tecnología Nike React, por su parte, ayuda a mantener el pie acolchado y seguro en cada paso, mientras que la suela de goma presenta un diseño creado con datos de cientos de corredores para una excelente calidad.",
    price: 68.99,
    discount_percentage: 0,
    rating: [4],
    stock: 50,
    brand: ["nike"],
    category: ["training"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwca20cdb0/products/NIDA9492-100/NIDA9492-100-6.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwef4f5c97/products/NIDA9492-100/NIDA9492-100-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwdfe9ab89/products/NIDA9492-100/NIDA9492-100-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwca20cdb0/products/NIDA9492-100/NIDA9492-100-6.JPG",
    ],
    size: [34, 35, 37, 38, 39, 40, 42, 43],
    color: ["white"],
    gender: ["women"],

    sold_count: 0,
  },
  {
    item_number: "NIDC3728-401",
    name: "Zapatillas Nike Revolution 6 Next Nature",
    description:
      "Suma más y más kilómetros con tus Zapatillas Nike Revolution 6 Next Nature, que aportan amortiguación y confort a cada paso que des. Su capellada transpirable y suela diseñada por computadora para una mejor tracción son ideales hasta para los corredores más exigentes.",
    price: 34.99,
    discount_percentage: 0,
    rating: [3],
    stock: 50,
    brand: ["nike"],
    category: ["training"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw56e2737c/products/NI_DC3728-401/NI_DC3728-401-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwf27bce00/products/NI_DC3728-401/NI_DC3728-401-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwa67bced5/products/NI_DC3728-401/NI_DC3728-401-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw74de5241/products/NI_DC3728-401/NI_DC3728-401-6.JPG",
    ],
    size: [34, 35, 37, 38, 39, 40, 42, 43, 44, 45],
    color: ["blue"],
    gender: ["unisex"],

    sold_count: 0,
  },
  {
    item_number: "NIDH3158-104",
    name: "Zapatillas Nike Court Vision Low Next Nature",
    description: "...",
    price: 38.99,
    discount_percentage: 0,
    rating: [3],
    stock: 50,
    brand: ["nike"],
    category: ["casual"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw369f43a2/products/NIDH3158-104/NIDH3158-104-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw0f0270a8/products/NIDH3158-104/NIDH3158-104-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwa7de6be0/products/NIDH3158-104/NIDH3158-104-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw600defd5/products/NIDH3158-104/NIDH3158-104-6.JPG",
    ],
    size: [34, 35, 37, 38, 39, 40, 42, 43, 44, 45],
    color: ["white"],
    gender: ["unisex"],

    sold_count: 0,
  },
  {
    item_number: "NIDM7590-001",
    name: "Zapatillas Nike Court Legacy Lift Mujer",
    description: "...",
    price: 41.99,
    discount_percentage: 0,
    rating: [4],
    stock: 50,
    brand: ["nike", "adidas", "puma", "reebok", "sketchers", "converse"],
    category: ["casual"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwf26be3c4/products/NIDM7590-001/NIDM7590-001-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw8467e671/products/NIDM7590-001/NIDM7590-001-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwda674a1d/products/NIDM7590-001/NIDM7590-001-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw7bbe46ae/products/NIDM7590-001/NIDM7590-001-6.JPG",
    ],
    size: [34, 35, 37, 38, 39, 40, 42, 43, 44, 45],
    color: ["black"],
    gender: ["men"],

    sold_count: 0,
  },
  {
    item_number: "NIDR2552-100",
    name: "Zapatillas Nike Air Max SC Mujer",
    description:
      "Las Zapatillas Nike Air Max SC Mujer son un calzado deportivo de alta calidad diseñado para ofrecer comodidad y estilo en cada paso. Con una parte superior de malla transpirable y una suela de goma duradera, proporcionan una excelente ventilación y tracción en cualquier superficie. La tecnología Air Max en la suela ofrece una amortiguación suave y cómoda en cada pisada, reduciendo el impacto en las articulaciones y brindando una sensación de ligereza al caminar o correr. Su diseño incluye el icónico logotipo de Nike en el costado y en la lengüeta, lo que las convierte en un accesorio de moda imprescindible para cualquier guardarropa deportivo o casual.",
    price: 52.99,
    discount_percentage: 0,
    rating: [5],
    stock: 50,
    brand: ["nike"],
    category: ["all day"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw6f212815/products/NIDR2552-100/NIDR2552-100-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw6f212815/products/NIDR2552-100/NIDR2552-100-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw35ae7ac8/products/NIDR2552-100/NIDR2552-100-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw9d66e81e/products/NIDR2552-100/NIDR2552-100-6.JPG",
    ],
    size: [34, 35, 37, 38, 39, 40, 42, 43, 44, 45],
    color: ["white"],
    gender: ["women"],

    sold_count: 0,
  },

  {
    item_number: "PU389002-03",
    name: "Zapatillas Puma Rbd Game Low Unisex",
    description:
      "Las Zapatillas Puma Rbd Game Unisex son la combinación perfecta entre el estilo deportivo y la moda. Confeccionadas con materiales sintéticos de alta calidad que te brindan confort y durabilidad. Con un diseño que se adapta a todos tus outfits.",
    price: 32.99,
    discount_percentage: 0,
    rating: [3],
    stock: 50,
    brand: ["puma"],
    category: ["all day"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw8f1838cb/products/PU389002-03/PU389002-03-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwdf9df17c/products/PU389002-03/PU389002-03-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwcc73ca17/products/PU389002-03/PU389002-03-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw08e124b7/products/PU389002-03/PU389002-03-6.JPG",
    ],
    size: [37, 38, 39, 40, 42, 43, 44, 45],
    color: ["black"],
    gender: ["unisex"],

    sold_count: 0,
  },
  {
    item_number: "PU378835-01",
    name: "Zapatillas Entrenamiento Puma Disperse Xt 2 Tiger Camo Unisex",
    description:
      "Sumale a tus rutinas de entrenamiento o carreras las Zapatillas Puma Disperse Xt 2 Tiger Camo Unisex. Su plantilla de goma te brinda mejor agarre y resistencia sobre cualquier superficie y su capellada de mesh hace el calzado más ligero sumado a que se ajusta perfecto a tu pie. Combinalas con las prendas que más te gusten y salí a entrenar sin límites.",
    price: 25.99,
    discount_percentage: 0,
    rating: [3],
    stock: 50,
    brand: ["puma"],
    category: ["training"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwd047f5ef/products/PU378835-01/PU378835-01-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwd247243d/products/PU378835-01/PU378835-01-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw279d4d21/products/PU378835-01/PU378835-01-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw30c5d346/products/PU378835-01/PU378835-01-6.JPG",
    ],
    size: [34, 35, 37, 38, 39, 40, 42, 43, 44, 45],
    color: ["black"],
    gender: ["unisex"],

    sold_count: 0,
  },
  {
    item_number: "PU377701-07",
    name: "Zapatillas Puma Softride Ruby",
    description: "...",
    price: 32.99,
    discount_percentage: 0,
    rating: [1, 2, 3, 4, 5],
    stock: 50,
    brand: ["puma"],
    category: ["training"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwc850a05f/products/PU377701-07/PU377701-07-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw4a19e24b/products/PU377701-07/PU377701-07-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwb0606d1e/products/PU377701-07/PU377701-07-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwf43b72f0/products/PU377701-07/PU377701-07-6.JPG",
    ],
    size: [34, 35, 37, 38, 39, 40, 42, 43, 44, 45],
    color: ["black"],
    gender: ["women"],

    sold_count: 0,
  },
  {
    item_number: " PU386497-13",
    name: "Zapatillas Puma R22",
    description:
      "Las Zapatillas Puma R22 llevan el clásico del running a tu silueta urbana con una actualización energética y moderna. Su fabricación con un exterior de pana con recortes en sintético y textiles, crean un diseño que completa tu look volviéndote el más canchero del grupo. La mediasuela CMEVA moldeada por compresión, sumada a la plantilla SoftFoam+ te ofrecen una pisada cómoda, instantánea y duradera que no podrás dejar de usar. Tu look cotidiano, se fue a las nubes con este par.",
    price: 33.99,
    discount_percentage: 0,
    rating: [3],
    stock: 50,
    brand: ["puma"],
    category: ["casual"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw747360f2/products/PU_386497-13/PU_386497-13-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwd4d89397/products/PU_386497-13/PU_386497-13-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw553ba44c/products/PU_386497-13/PU_386497-13-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwf0ac4cf6/products/PU_386497-13/PU_386497-13-6.JPG",
    ],
    size: [34, 35, 37, 38, 39, 40, 42, 43, 44, 45],
    color: ["white"],
    gender: ["unisex"],

    sold_count: 0,
  },
  {
    item_number: " PU381811-01",
    name: "Zapatillas Puma R78",
    description:
      "Las zapatillas Puma R78 están confeccionadas con materiales que hacen que tus pies estén cómodos y frescos. Su capellada en malla y sintético junto a la suela exterior de goma que mejora tu amortiguación en casa pisada, se fusionan con un diseño 100% urbano para que combines con cualquier outfit.",
    price: 27.99,
    discount_percentage: 0,
    rating: [3],
    stock: 50,
    brand: ["puma"],
    category: ["all day"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwa8b1f0b3/products/PU_381811-01/PU_381811-01-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw621f0a94/products/PU_381811-01/PU_381811-01-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw5eb018bf/products/PU_381811-01/PU_381811-01-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwe86a8476/products/PU_381811-01/PU_381811-01-6.JPG",
    ],
    size: [34, 35, 37, 38, 39, 40, 42, 43, 44, 45],
    color: ["black"],
    gender: ["unisex"],

    sold_count: 0,
  },
  {
    item_number: "PU378833-04",
    name: "Zapatillas Running Puma Cell Vive Alt Unisex",
    description: "...",
    price: 32.49,
    discount_percentage: 0,
    rating: [3],
    stock: 50,
    brand: ["puma"],
    category: ["training"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwe769fa8f/products/PU378833-04/PU378833-04-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw54de9b82/products/PU378833-04/PU378833-04-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwf5ed7b2d/products/PU378833-04/PU378833-04-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw64d3dcee/products/PU378833-04/PU378833-04-6.JPG",
    ],
    size: [34, 35, 37, 38, 39, 40, 42, 43, 44, 45],
    color: ["gray"],
    gender: ["women"],
    is_active: true,
    sold_count: 0,
  },
  {
    item_number: "PU378842-01",
    name: "Zapatillas Running Infusion Unisex",
    description:
      "Las Zapatillas Running Infusion Unisex combinan estética y deporte para que puedas vestir tus looks casuales y deportivos y mantener la comodidad en todo momento. Hechas en un mesh cómodo y liviano que mejora tus movimientos y una suela que se combina con la entresuela PROFOAM de EVA para brindar amortiguación a cada paso. Cuentan con un refuerzo de TPU en el talón para ofrecer un soporte seguro. El calzado que estabas esperando supera tus expectativas.",
    price: 28.16,
    discount_percentage: 0,
    rating: [3],
    stock: 50,
    brand: ["puma"],
    category: ["training", "trekking", "casual", "all day"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwc174ee92/products/PU378842-01/PU378842-01-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw2257c0a0/products/PU378842-01/PU378842-01-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw1dc12444/products/PU378842-01/PU378842-01-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw5e0433c6/products/PU378842-01/PU378842-01-6.JPG",
    ],
    size: [34, 35, 37, 38, 39, 40, 42, 43, 44, 45],
    color: ["black"],
    gender: ["unisex"],
    is_active: true,
    sold_count: 0,
  },
  {
    item_number: "PU195653-04",
    name: "Zapatillas Puma Resolve Street",
    description:
      "Las Zapatillas Puma Resolve Street son perfectas para los runners amantes de la ciudad. La plantilla SoftFoam+ brinda una comodidad duradera y una amortiguación suave en cada paso; la capellada de malla favorece la ventilación y los refuerzos a los lados mejoran tu estabilidad para que des todo de vos en cada kilómetro que recorras.",
    price: 23.63,
    discount_percentage: 0,
    rating: [3],
    stock: 50,
    brand: ["puma"],
    category: ["all day"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwa2d70451/products/PU_195653-04/PU_195653-04-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw66a9687e/products/PU_195653-04/PU_195653-04-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwbcd2b9cd/products/PU_195653-04/PU_195653-04-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwb2a8dec6/products/PU_195653-04/PU_195653-04-6.JPG",
    ],
    size: [34, 35, 37, 38, 39, 40, 42, 43, 44, 45],
    color: ["black"],
    gender: ["women"],
    is_active: true,
    sold_count: 0,
  },
  {
    item_number: "PU377970-01",
    name: "Zapatillas Running Puma Power Frame Tr 2 Hombre",
    description:
      "¡Desafiá tus límites con las nuevas zapatillas Running Puma Power Frame Tr 2! Con un diseño moderno y dinámico, estas zapatillas te ofrecen la mejor combinación entre estilo y rendimiento. Cuenta con la tecnología Power Frame, que ofrece una excelente estabilidad y soporte durante tus entrenamientos más intensos. Además, su suela de goma antideslizante te brinda un mejor agarre en cualquier superficie, ya sea en asfalto o en una plaza. Son ideales para corredores y corredoras que buscan mejorar su desempeño y alcanzar nuevos objetivos, ya sea que estés entrenando para una maratón o simplemente disfrutando de un trote al aire libre. No esperes más para experimentar la comodidad y la innovación de las zapatillas Running Puma Power Frame Tr 2.",
    price: 35.02,
    discount_percentage: 0,
    rating: [4],
    stock: 50,
    brand: ["puma"],
    category: ["training"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwd52439db/products/PU377970-01/PU377970-01-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwe1cf95b0/products/PU377970-01/PU377970-01-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw3129fa70/products/PU377970-01/PU377970-01-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw12c11dc0/products/PU377970-01/PU377970-01-6.JPG",
    ],
    size: [34, 35, 37, 38, 39, 40, 42, 43, 44, 45],
    color: ["black"],
    gender: ["men"],
    is_active: true,
    sold_count: 0,
  },
  {
    item_number: " PU386494-01",
    name: "Zapatillas Puma Graviton Pro",
    description:
      "Conocé las renovadad Zapatillas Puma Graviton Pro, el magnífico complemento de todos tus outfits. Con una capellada de mesh y cuero sintético, poseen suela de goma que se adhiere a todo tipo de superficies. Confeccionadas con materiales altamente transpirables, son cómodas, livianas y dueñas de un estilo único.",
    price: 30.44,
    discount_percentage: 0,
    rating: [1, 2, 3, 4, 5],
    stock: 50,
    brand: ["puma"],
    category: ["all day"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwdf2363f1/products/PU_386494-01/PU_386494-01-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw8ee9e1ae/products/PU_386494-01/PU_386494-01-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw8ee9e1ae/products/PU_386494-01/PU_386494-01-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw8ee9e1ae/products/PU_386494-01/PU_386494-01-2.JPG",
    ],
    size: [34, 35, 37, 38, 39, 40, 42, 43, 44, 45],
    color: ["black"],
    gender: ["unisex"],
    is_active: true,
    sold_count: 0,
  },
  {
    item_number: "PU378853-05",
    name: "Zapatillas Training Puma Softride Ruby Luxe Better Mujer",
    description:
      "Las Zapatillas Training Puma Softride Ruby Luxe Better Mujer combinan estilo y rendimiento en un solo calzado. Con su diseño elegante y moderno, destacan en el gimnasio y en la moda urbana. La tecnología Softride proporciona una amortiguación suave y receptiva, brindando comodidad en cada paso. Además, su parte superior de calidad ofrece sujeción y transpirabilidad. Ya sea para entrenamientos intensos o para lucir un estilo deportivo, te brindan confort y estilo durante todo el día.",
    price: 32.6,
    discount_percentage: 0,
    rating: [3],
    stock: 50,
    brand: ["puma"],
    category: ["training"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwdae62bd9/products/PU378853-05/PU378853-05-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwcb5f3389/products/PU378853-05/PU378853-05-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw17991bd0/products/PU378853-05/PU378853-05-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwfca66398/products/PU378853-05/PU378853-05-6.JPG",
    ],
    size: [34, 35, 37, 38, 39, 40, 42, 43, 44, 45],
    color: ["gray"],
    gender: ["women"],
    is_active: true,
    sold_count: 0,
  },

  {
    item_number: "MG110MT304710R1",
    name: "Zapatillas Montagne Trail Infinite Pro",
    description:
      "No importa cuán difícil sea el camino, siempre será seguro con las Zapatillas Montagne Trail Infinite Pro. Este calzado está hecho con materiales de alta calidad que aseguran durabilidad y resistencia al uso y desgaste. Confeccionadas en una capellada en mesh sin costuras y con una suela AMORED RUB que las vuelve un par muy firme, seguro y con buena estabilidad. Su base de HALFLOAT suma amortiguación a estas zapatillas convirtiéndolas en tu compañía perfecta de aventuras.",
    price: 25.19,
    discount_percentage: 0,
    rating: [3],
    stock: 50,
    brand: ["montagne"],
    category: ["all day"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw53bbcfab/products/MG_110MT304710R1/MG_110MT304710R1-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwf343d426/products/MG_110MT304710R1/MG_110MT304710R1-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw87e39f3c/products/MG_110MT304710R1/MG_110MT304710R1-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw87e39f3c/products/MG_110MT304710R1/MG_110MT304710R1-4.JPG",
    ],
    size: [34, 35, 37, 38, 39, 40, 42, 43, 44, 45],
    color: ["black"],
    gender: ["men"],
    is_active: true,
    sold_count: 0,
  },

  {
    item_number: " MG110MT304710R1",
    name: "Zapatillas Montagne Trail Infinite Pro",
    description:
      "No importa cuán difícil sea el camino, siempre será seguro con las Zapatillas Montagne Trail Infinite Pro. Este calzado está hecho con materiales de alta calidad que aseguran durabilidad y resistencia al uso y desgaste. Confeccionadas en una capellada en mesh sin costuras y con una suela AMORED RUB que las vuelve un par muy firme, seguro y con buena estabilidad. Su base de HALFLOAT suma amortiguación a estas zapatillas convirtiéndolas en tu compañía perfecta de aventuras.",
    price: 25.19,
    discount_percentage: 0,
    rating: [3],
    stock: 50,
    brand: ["montagne"],
    category: ["trekking"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw53bbcfab/products/MG_110MT304710R1/MG_110MT304710R1-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwf343d426/products/MG_110MT304710R1/MG_110MT304710R1-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw87e39f3c/products/MG_110MT304710R1/MG_110MT304710R1-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwe6c1355a/products/MG_110MT304710R1/MG_110MT304710R1-6.JPG",
    ],
    size: [34, 35, 37, 38, 39, 40, 42, 43, 44, 45],
    color: ["black"],
    gender: ["unisex"],
    is_active: true,
    sold_count: 0,
  },

  {
    item_number: "MG110MT306624W2",
    name: "Zapatillas Montagne Utah",
    description:
      "Si sos amante del senderismo y la vida en la montaña, las Zapatillas Montagne Utah serán tus aliadas. Hechas para ofrecer agarre y soporte están confeccionadas con una parte superior en una estructura de sintético duradero, resistente a los obstáculos del camino y que se construye sobre una malla amplia para ofrecer ventilación a tus pies, y así hacer más confortable la experiencia. Ponételas y hacé que tus momentos sean inolvidables.",
    price: 28.89,
    discount_percentage: 0,
    rating: [4],
    stock: 50,
    brand: ["montagne"],
    category: ["trekking"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwad45748b/products/MG_110MT306624W2/MG_110MT306624W2-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwaae90c43/products/MG_110MT306624W2/MG_110MT306624W2-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw17c29580/products/MG_110MT306624W2/MG_110MT306624W2-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw246c975b/products/MG_110MT306624W2/MG_110MT306624W2-6.JPG",
    ],
    size: [34, 35, 37, 38, 39, 40, 42, 43],
    color: ["gray"],
    gender: ["women"],
    is_active: true,
    sold_count: 0,
  },

  {
    item_number: " MG210MT326710R1",
    name: "Zapatillas Outdoor Montagne City Stride Hombre",
    description:
      "Las Zapatillas Outdoor Montagne City Stride Hombre se convertirán en tus favoritas para las actividades al aire libre. Su capellada de sintético y malla brinda la protección necesaria al mismo tiempo que permite que el pie respire, manteniéndolo fresco y seco uso tras uso. Además, cuenta con tecnología HALFLOAT de alto rendimiento que proporciona una pisada confortable con gran amortiguación para que tu única preocupación sea pensar en tu nueva aventura.",
    price: 24.69,
    discount_percentage: 0,
    rating: [1, 2, 3, 4, 5],
    stock: 50,
    brand: ["montagne"],
    category: ["trekking"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw6e2c6fce/products/MG210MT326710R1/MG210MT326710R1-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw8c64b6e6/products/MG210MT326710R1/MG210MT326710R1-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwc25028f5/products/MG210MT326710R1/MG210MT326710R1-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw84fafdcb/products/MG210MT326710R1/MG210MT326710R1-6.JPG",
    ],
    size: [37, 38, 39, 40, 42, 43, 44, 45],
    color: ["gray"],
    gender: ["men"],
    is_active: true,
    sold_count: 0,
  },

  {
    item_number: " MG010MT1336J2W2",
    name: "Zapatillas Outdoor Montagne City Fire T3 Mujer",
    description: "...",
    price: 54.99,
    discount_percentage: 0,
    rating: [3],
    stock: 50,
    brand: ["montagne"],
    category: ["trekking"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwca2c8fe3/products/MG010MT1336J2W2/MG010MT1336J2W2-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw8ca678d6/products/MG010MT1336J2W2/MG010MT1336J2W2-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwdf23c20d/products/MG010MT1336J2W2/MG010MT1336J2W2-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw716c13d8/products/MG010MT1336J2W2/MG010MT1336J2W2-6.JPG",
    ],
    size: [34, 35, 37, 38, 39, 40, 42, 43],
    color: ["gray"],
    gender: ["women"],
    is_active: true,
    sold_count: 0,
  },

  {
    item_number: "MG210MT3446ZJW2",
    name: "Botas Outdoor Montagne Lorster Mujer",
    description:
      "Las Botas Outdoor Montagne Lorster Mujer son ideales para todo tipo de terreno. Cuentan con tecnología ARMORED K que amortigua tus pisadas y hace que tus pasos sean más cómodos. Además, su tecnología AQUACLEVER repele el agua, manteniendo el pie seco, al mismo tiempo que permite la evaporación de la transpiración. Combinalas con tus prendas favoritas y salí a buscar una nueva aventura.",
    price: 42.99,
    discount_percentage: 0,
    rating: [3],
    stock: 50,
    brand: ["montagne"],
    category: ["trekking"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw386d2b37/products/MG210MT3446ZJW2/MG210MT3446ZJW2-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw618fb6f6/products/MG210MT3446ZJW2/MG210MT3446ZJW2-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw297d8759/products/MG210MT3446ZJW2/MG210MT3446ZJW2-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwfb8722f8/products/MG210MT3446ZJW2/MG210MT3446ZJW2-6.JPG",
    ],
    size: [34, 35, 37, 38, 39, 40, 42, 43, 44, 45],
    color: ["blue"],
    gender: ["unisex"],
    is_active: true,
    sold_count: 0,
  },

  {
    item_number: "MG110MT1817Y8R1",
    name: "Botas Outdoor Montagne Philgrim Hombre",
    description:
      "Con las Botas Outdoor Montagne Philgrim Hombre mantenete cómodo y seguro vayas donde vayas. Fabricadas especialmente para realizar trekking y senderismo, este calzado proporciona máxima durabilidad y resistencia capaz de atravesar cualquier terreno. Posee tecnología HALFLOAT que absorbe los impactos de los caminos sinuosos, mientras que la capellada diseñada con el sistema AQUACLEVER aumenta su resistencia y mantiene el pie fresco y seco. Aventurate a un nuevo destino con seguridad.",
    price: 41.89,
    discount_percentage: 0,
    rating: [3],
    stock: 50,
    brand: ["montagne"],
    category: ["trekking"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw1931e64f/products/MG110MT1817Y8R1/MG110MT1817Y8R1-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwb4d53d0f/products/MG110MT1817Y8R1/MG110MT1817Y8R1-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw7665a50c/products/MG110MT1817Y8R1/MG110MT1817Y8R1-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwde5364f9/products/MG110MT1817Y8R1/MG110MT1817Y8R1-6.JPG",
    ],
    size: [37, 38, 39, 40, 42, 43, 44, 45],
    color: ["gray"],
    gender: ["unisex"],
    is_active: true,
    sold_count: 0,
  },

  {
    item_number: "MG210MT3226Z0W2",
    name: "Zapatillas Outdoor Montagne City Clifton Mujer",
    description:
      "Las Zapatillas Outdoor Montagne City Clifton Mujer son la opción ideal para tus aventuras al aire libre. Su capellada de poliéster lo hace un calzado sumamente resistente y durable. Además, su suela de múltiples agarres lo convierte en un modelo ideal para todo tipo de actividades outdoor y proporciona la estructura perfecta para brindar soporte estratégico en cada zona del pie, mientras absorbe el impacto en cada pisada. Su tecnología ARMORED K proporciona protección en las zonas que más necesitás.",
    price: 54.99,
    discount_percentage: 0,
    rating: [4],
    stock: 50,
    brand: ["montagne"],
    category: ["trekking"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw042cf834/products/MG210MT3226Z0W2/MG210MT3226Z0W2-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw932aa80f/products/MG210MT3226Z0W2/MG210MT3226Z0W2-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwf4a67209/products/MG210MT3226Z0W2/MG210MT3226Z0W2-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw1a3c3244/products/MG210MT3226Z0W2/MG210MT3226Z0W2-6.JPG",
    ],
    size: [34, 35, 37, 38, 39, 40, 42, 43],
    color: ["brown"],
    gender: ["women"],
    is_active: true,
    sold_count: 0,
  },

  {
    item_number: "MG210MT342734R1",
    name: "Zapatillas Outdoor Montagne Sensse T4 Hombre",
    description:
      "Las Zapatillas Outdoor Montagne Sensse T4 Hombre cuentan con una base trasera que aporta la amortiguación necesaria para un mayor impulso en la zona del talón. Además, la suela delantera ofrece máxima estabilidad en cada movimiento, generando un efecto resorte necesario para aprovechar al máximo cada actividad. Sentirás la protección que te merecés con el refuerzo ARMORED K en el talón, puntera y laterales para que te desplaces libremente sobre cualquier superficie. Combiná confort y estilo en un solo calzado.",
    price: 37.59,
    discount_percentage: 0,
    rating: [5],
    stock: 50,
    brand: ["montagne"],
    category: ["trekking"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwd37e87a0/products/MG210MT342734R1/MG210MT342734R1-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwfdd8c7b0/products/MG210MT342734R1/MG210MT342734R1-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw4323dd18/products/MG210MT342734R1/MG210MT342734R1-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw4c7f6386/products/MG210MT342734R1/MG210MT342734R1-6.JPG",
    ],
    size: [37, 38, 39, 40, 42, 43, 44, 45],
    color: ["blue"],
    gender: ["men"],
    is_active: true,
    sold_count: 0,
  },

  {
    item_number: "MG110MT150621W2",
    name: "Zapatillas Outdoor Montagne City Fire T3 Mujer",
    description:
      "Transitá cualquier camino con la seguridad de las Zapatillas Outdoor Montagne City Fire T3 Mujer. Movete en todo tipo de terrenos, irregulares, exigentes o mantenete firme en tu día a día. La capellada de poliéster mantendrá tus pies secos y cómodos en todo momento.",
    price: 25.69,
    discount_percentage: 0,
    rating: [3],
    stock: 50,
    brand: ["montagne"],
    category: ["trekking"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw65612add/products/MG110MT150621W2/MG110MT150621W2-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwa73d9931/products/MG110MT150621W2/MG110MT150621W2-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwdc684bdf/products/MG110MT150621W2/MG110MT150621W2-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw2c2455ed/products/MG110MT150621W2/MG110MT150621W2-6.JPG",
    ],
    size: [34, 35, 37, 38, 39, 40, 42, 43, 44, 45],
    color: [
      "blac",
      "white",
      "red",
      "yellow",
      "blue",
      "green",
      "brown",
      "pink",
      "gray",
    ],
    gender: ["unisex"],
    is_active: true,
    sold_count: 0,
  },
  {
    item_number: "FI11U335X-5024",
    name: "Zapatillas Fila Euro Jogger Sport",
    description:
      "Las zapatillas Fila Euro Jogger Sport están confeccionadas con materiales que las hacen más cómodas y transpirables para que las puedas usar durante todo el día. Su ajuste con cordones, mediasuela y suela de goma ofrecen amortiguación y agarre sobre cualquier superficie, mientras que su diseño se inspira en líneas deportivas para un uso urbano.",
    price: 19.58,
    discount_percentage: 0,
    rating: [5],
    stock: 23,
    brand: ["fila"],
    category: ["casual"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwabda08cd/products/FI_11U335X-5024/FI_11U335X-5024-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwd1325873/products/FI_11U335X-5024/FI_11U335X-5024-3.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwfe78027d/products/FI_11U335X-5024/FI_11U335X-5024-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw2db5562f/products/FI_11U335X-5024/FI_11U335X-5024-6.JPG",
    ],
    size: [42, 44, 45],
    color: ["pink"],
    gender: ["men"],
    is_active: true,
    sold_count: 0,
  },
  {
    item_number: "FI51U335X-4704",
    name: "Zapatillas Fila Euro Jogger Sport",
    description:
      "Las Zapatillas Fila Euro Jogger Sport están confeccionadas con materiales que las hacen más cómodas y transpirables para que las puedas usar durante todo el día. Su ajuste con cordones, mediasuela y suela de goma ofrecen amortiguación y agarre sobre cualquier superficie, mientras que su diseño se inspira en líneas deportivas para un uso urbano que destacará y completará todos tus looks.",
    price: 16.86,
    discount_percentage: 0,
    rating: [3, 4],
    stock: 46,
    brand: ["fila"],
    category: ["casual"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwdacfff1d/products/FI_51U335X-4704/FI_51U335X-4704-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwe9f59dbd/products/FI_51U335X-4704/FI_51U335X-4704-3.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw87e5b1a9/products/FI_51U335X-4704/FI_51U335X-4704-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwc6d1b895/products/FI_51U335X-4704/FI_51U335X-4704-6.JPG",
    ],
    size: [34, 39, 40],
    color: ["  light-pink"],
    gender: ["women"],
    is_active: true,
    sold_count: 0,
  },
  {
    item_number: "FIF02L025-156",
    name: "Zapatilla Fila Classic",
    description:
      "Las zapatillas Fila Classic son modernas y prácticas, ideal para el día a día. Confeccionadas con materiales de calidad y un diseño con dos bandas elásticas para un mejor ajuste y adaptación del pie.",
    price: 21.54,
    discount_percentage: 0,
    rating: [3, 4],
    stock: 24,
    brand: ["fila"],
    category: ["streetwear"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwc08cb863/products/FIF02L025-156/FIF02L025-156-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw4b58760a/products/FIF02L025-156/FIF02L025-156-3.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw0ac6d894/products/FIF02L025-156/FIF02L025-156-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwea5ddd20/products/FIF02L025-156/FIF02L025-156-6.JPG",
    ],
    size: [35, 37, 38, 39, 40],
    color: ["white"],
    gender: ["women"],
    is_active: true,
    sold_count: 0,
  },
  {
    item_number: "FIF01R031-2299",
    name: "Zapatillas Running Fila Heating",
    description:
      "Las Zapatillas Running Fila Heating son una opción perfecta para los corredores que buscan comodidad y rendimiento. Presentan una parte superior de malla transpirable que permite una óptima ventilación del pie durante la actividad física. Cuentan con una entresuela acolchada que brinda una excelente amortiguación y absorción de impactos, para una experiencia de carrera más suave y cómoda. La suela de goma duradera ofrece tracción y agarre en diferentes superficies, mientras que el cierre de cordones asegura un ajuste seguro. Además, su diseño moderno y elegante las convierte en una opción estilizada para cualquier corredor.",
    price: 20.37,
    discount_percentage: 0,
    rating: [3, 4, 5],
    stock: 15,
    brand: ["fila"],
    category: ["running"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw0c79bd15/products/FIF01R031-2299/FIF01R031-2299-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw63b8f412/products/FIF01R031-2299/FIF01R031-2299-3.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw3a75c90a/products/FIF01R031-2299/FIF01R031-2299-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw9cbe8af6/products/FIF01R031-2299/FIF01R031-2299-6.JPG",
    ],
    size: [39, 40, 44, 45, 46],
    color: ["black"],
    gender: ["women"],
    is_active: true,
    sold_count: 0,
  },
  {
    item_number: "FIF01AT00064-943",
    name: "Zapatillas Entrenamiento Fila Split",
    description:
      "Las Zapatillas Training Fila Split son perfectas para tus sesiones de entrenamiento en el gimnasio o al aire libre. Con su diseño versátil y su suela duradera, te brindan estabilidad y tracción en cada movimiento. Su parte superior transpirable y suave ofrece comodidad durante tus ejercicios. Disfruta de un rendimiento óptimo y un estilo moderno con este par.",
    price: 19.07,
    discount_percentage: 0,
    rating: [4, 5],
    stock: 35,
    brand: ["fila"],
    category: ["all day"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwce220a38/products/FIF01AT00064-943/FIF01AT00064-943-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw3befbbf8/products/FIF01AT00064-943/FIF01AT00064-943-3.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwe89e9083/products/FIF01AT00064-943/FIF01AT00064-943-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw6a809d74/products/FIF01AT00064-943/FIF01AT00064-943-6.JPG",
    ],
    size: [38, 39, 40, 41, 44, 45],
    color: ["black"],
    gender: ["men"],
    is_active: true,
    sold_count: 0,
  },
  {
    item_number: "FIF01R00080-979",
    name: "Zapatillas Running Fila Progress",
    description:
      "Perfectas para tus días más activos las Zapatillas Running Fila Progress  ideales para vos que tenés la exigencia de un profesional, su construcción en malla liviana y sintético las hace ligeras y transpirables dándole a tus pies la comodidad y frescura en los momentos de mayor esfuerzo. Su diseño te hará rendir mejor en entrenamiento o en las calles de la ciudad, mientras que la espuma de doble densidad y suela de caucho con ranuras flexibles amortigua cada pisada dándote estabilidad y mejor tracción a la hora de usarlos.",
    price: 23.71,
    discount_percentage: 0,
    rating: [4, 5],
    stock: 11,
    brand: ["fila"],
    category: ["training"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw94a3e6e1/products/FIF01R00080-979/FIF01R00080-979-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw52e34ec7/products/FIF01R00080-979/FIF01R00080-979-3.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw3b2a76d6/products/FIF01R00080-979/FIF01R00080-979-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwd88fbfa6/products/FIF01R00080-979/FIF01R00080-979-6.JPG",
    ],
    size: [38, 39, 40, 42, 43, 44, 45, 46],
    color: ["black"],
    gender: ["women"],
    is_active: true,
    sold_count: 0,
  },
  {
    item_number: "FIF01AT004144-943",
    name: "Zapatillas Fila Presence",
    description:
      "Las Zapatillas Training Fila Presence fueron diseñadas pensando en los atletas. Su capellada de malla y sintético aporta el confort que necesitas para dar el 100% en cada carrera. Además, la suela de goma mejora la tracción y facilita la flexibilidad para que puedas deslizarte sobre distintas superficies las veces que quieras. Con su diseño clásico y moderno vas a poder elevar tu look deportivo a otro nivel.",
    price: 16.18,
    discount_percentage: 0,
    rating: [2, 3],
    stock: 50,
    brand: ["fila"],
    category: ["training"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwdf3de8bf/products/FIF01AT004144-943/FIF01AT004144-943-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw6cc1c7e8/products/FIF01AT004144-943/FIF01AT004144-943-3.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw7e161c9d/products/FIF01AT004144-943/FIF01AT004144-943-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw479d0644/products/FIF01AT004144-943/FIF01AT004144-943-6.JPG",
    ],
    size: [40, 45],
    color: ["black"],
    gender: ["unisex"],
  },
  {
    item_number: "FIF02AT00069-882",
    name: "Zapatilla Fila Tracer",
    description:
      "La zapatilla Fila Tracer se inspira en las zapatillas deportivas de los años 90. Con un diseño moderno y robusto, sigue la tendencia actual del streetwear. La parte superior está construida con doble malla, que proporciona una mayor respiración para el pie. Cuenta con una superposición de piezas sintéticas y de microfibra con piezas de refuerzo y resistencia en PVC. Cuenta con una correa muy resistente en la parte trasera que facilita el calce",
    price: 24.02,
    discount_percentage: 0,
    rating: [3, 4, 5],
    stock: 50,
    brand: ["fila"],
    category: ["casual"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw4d57c39d/products/FIF02AT00069-882/FIF02AT00069-882-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw84809cfd/products/FIF02AT00069-882/FIF02AT00069-882-3.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw855d43d7/products/FIF02AT00069-882/FIF02AT00069-882-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw858a55af/products/FIF02AT00069-882/FIF02AT00069-882-6.JPG",
    ],
    size: [35, 37, 38, 39, 40, 41],
    color: ["white"],
    gender: ["unisex"],
    is_active: true,
    sold_count: 0,
  },
  {
    item_number: "FI11J728X-972",
    name: "Zapatillas Running Fila Recovery",
    description:
      "Con las Zapatillas Running Fila Recovery vas a salir a correr sin importar los kilómetros que hagas. Su capellada de malla proporciona máxima transpirabilidad para que mantengas tus pies frescos y secos durante todo el entrenamiento. Además, su suela de goma brinda mayor tracción para que tus pisadas sean más firmes y seguras. Ya sea que quieras salir a caminar por la ciudad o entrenar, estas zapatillas son para vos.",
    price: 41.99,
    discount_percentage: 0,
    rating: [4],
    stock: 53,
    brand: ["fila"],
    category: ["running"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwd37906ab/products/FI11J728X-972/FI11J728X-972-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwa5acfa76/products/FI11J728X-972/FI11J728X-972-3.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw925622b3/products/FI11J728X-972/FI11J728X-972-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw476f685b/products/FI11J728X-972/FI11J728X-972-6.JPG",
    ],
    size: [38, 39, 40, 42, 43, 44, 45, 46],
    color: ["black"],
    gender: ["men"],
    is_active: true,
    sold_count: 0,
  },
  {
    item_number: "FI11U386X-397",
    name: "Zapatillas Fila D-Formation",
    description:
      "Las Zapatillas Fila D-Formation son un modelo pensado para la vida urbana. Fáciles de lucir, combinan confort y estilo para cualquier tipo de ocasión y temporada. Confeccionadas en cuero sintético, poseen una lengüeta acolchada y entresuela de EVA, con una importante suela extra gruesa de goma.",
    price: 27.59,
    discount_percentage: 0,
    rating: [1, 2, 3],
    stock: 50,
    brand: ["fila"],
    category: ["all day"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw722fd677/products/FI_11U386X-397/FI_11U386X-397-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwf6a9d24b/products/FI_11U386X-397/FI_11U386X-397-3.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw48ef5538/products/FI_11U386X-397/FI_11U386X-397-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw8220fab9/products/FI_11U386X-397/FI_11U386X-397-6.JPG",
    ],
    size: [40, 42, 43, 44, 45],
    color: ["black"],
    gender: ["women"],
    is_active: true,
    sold_count: 0,
  },
  {
    item_number: "REFV1606",
    name: "Zapatillas Running Reebok Runner 4.0",
    description:
      "Las Zapatillas Running Reebok Runner 4.0 Hombre son ideales para los hombres que buscan comodidad y rendimiento en sus carreras. Confeccionadas con materiales transpirables y ligeros, te mantienen fresco y cómodo durante tus sesiones de running. Su diseño moderno y elegante, combinado con la tecnología de amortiguación y tracción de Reebok, te brinda el soporte necesario para alcanzar tus metas de running. Disfrutá de una experiencia de carrera excepcional con este par.",
    price: 22.69,
    discount_percentage: 0,
    rating: [4],
    stock: 50,
    brand: ["reebok"],
    category: ["training", "casual"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw140ecc1b/products/REFV1606/REFV1606-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwb2784ef1/products/REFV1606/REFV1606-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwcb81543b/products/REFV1606/REFV1606-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwf7012a05/products/REFV1606/REFV1606-6.JPG",
    ],
    size: [38, 39, 40, 41, 42, 43, 44, 45, 47],
    color: ["black"],
    gender: ["men"],
    is_active: true,
    sold_count: 0,
  },
  {
    item_number: "REGW5148",
    name: "Zapatillas Reebok Nano X2",
    description: "Sin Descripción",
    price: 56.69,
    discount_percentage: 0,
    rating: [5],
    stock: 50,
    brand: ["reebok"],
    category: ["training"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwce2f0202/products/REGW5148/REGW5148-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw32c0662b/products/REGW5148/REGW5148-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwc23c8667/products/REGW5148/REGW5148-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw80dcaccb/products/REGW5148/REGW5148-6.JPG",
    ],
    size: [38, 39, 40, 41, 42, 43, 44],
    color: ["black", "pink", "yellow"],
    gender: ["men"],
    is_active: true,
    sold_count: 0,
  },
  {
    item_number: "RE1475M",
    name: "Zapatillas Entrenamiento Reebok Princess",
    description: "Sin Descripción",
    price: 25.89,
    discount_percentage: 0,
    rating: [3],
    stock: 50,
    brand: ["reebok"],
    category: ["training"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw4eb604f4/products/RE1475M/RE1475M-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwa66c2c7c/products/RE1475M/RE1475M-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw94a698bb/products/RE1475M/RE1475M-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwa4e00478/products/RE1475M/RE1475M-6.JPG",
    ],
    size: [35, 37, 38, 40, 41],
    color: ["white"],
    gender: ["women"],
    is_active: true,
    sold_count: 0,
  },
  {
    item_number: "REGY0956",
    name: "Zapatillas Running Reebok Classic Leather",
    description: "Sin Descripción",
    price: 30.19,
    discount_percentage: 0,
    rating: [3],
    stock: 50,
    brand: ["reebok"],
    category: ["all day"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw3cfd525c/products/REGY0956/REGY0956-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwce38efcc/products/REGY0956/REGY0956-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw4374a6d8/products/REGY0956/REGY0956-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw8c958ac9/products/REGY0956/REGY0956-6.JPG",
    ],
    size: [34, 36, 38, 39, 40, 41],
    color: ["white"],
    gender: ["women"],
  },
  {
    item_number: "REGY7762",
    name: "Zapatillas Running Reebok Energylux 3",
    description:
      "Las Zapatillas Running Reebok Energylux 3 Mujer son la combinación perfecta de comodidad y estilo para tus carreras y entrenamientos. Con su diseño moderno y tecnología de amortiguación, te brindan una pisada suave y cómoda. Su parte superior de malla transpirable y suela de goma duradera ofrecen transpirabilidad y tracción en cada paso. Superá tus metas y disfrutá de una experiencia de running excepcional con tus nuevas elegidas!",
    price: 23.09,
    discount_percentage: 0,
    rating: [4],
    stock: 50,
    brand: ["reebok"],
    category: ["training"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw3b7ae1e0/products/RE_GY7762/RE_GY7762-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw53039e70/products/RE_GY7762/RE_GY7762-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwd4e997a2/products/RE_GY7762/RE_GY7762-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwe2f86503/products/RE_GY7762/RE_GY7762-6.JPG",
    ],
    size: [36, 38, 39, 40, 41],
    color: ["grey"],
    gender: ["women"],
    is_active: true,
    sold_count: 0,
  },
  {
    item_number: "REIE1942",
    name: "Zapatillas Reebok Energen Lite Vector Hombre",
    description:
      "Con las Zapatillas Reebok Energen Lite Vector Hombre tus pisadas van a ser mucho más livianas. La parte inferior FuelFoam amortigua cada paso y brinda comodidad durante todo el día. Tus pies se mantienen frescos gracias a la parte superior de malla transpirable, y las superposiciones específicas en el talón y la puntera agregan una sensación de apoyo a tu paso.",
    price: 17.09,
    discount_percentage: 0,
    rating: [3],
    stock: 50,
    brand: ["reebok"],
    category: ["all day"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw1f4779a3/products/REIE1942/REIE1942-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw46aa92d8/products/REIE1942/REIE1942-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw997dfd73/products/REIE1942/REIE1942-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwfffdd2b1/products/REIE1942/REIE1942-6.JPG",
    ],
    size: [39, 40, 41, 42, 43, 44, 45, 46],
    color: ["blue"],
    gender: ["men"],
    is_active: true,
    sold_count: 0,
  },
  {
    item_number: "REGW5152",
    name: "Zapatillas Reebok Nano X2",
    description: "Sin descripción",
    price: 56.699,
    discount_percentage: 0,
    rating: [5],
    stock: 50,
    brand: ["reebok"],
    category: ["training"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwb523701f/products/REGW5152/REGW5152-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw9cff098d/products/REGW5152/REGW5152-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw687892d1/products/REGW5152/REGW5152-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwccff7348/products/REGW5152/REGW5152-6.JPG",
    ],
    size: [36, 37, 38, 39, 40, 41],
    color: ["cyan", "green", "pink", "yellow"],
    gender: ["women"],
    is_active: true,
    sold_count: 0,
  },
  {
    item_number: "REGX8757",
    name: "Zapatillas Reebok Nano X2",
    description:
      "Las Zapatillas Reebok Nano X2 llevan tu entrenamiento al siguiente nivel. Mantenete seguro dentro o fuera del gimnasio. Tienen una parte superior tejida Flexweave® que es transpirable y duradera, con soporte integrado para un movimiento estable en todas las direcciones. La suela exterior de goma te brinda una tracción segura",
    price: 56.69,
    discount_percentage: 0,
    rating: [5],
    stock: 50,
    brand: ["reebok"],
    category: ["all day"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw41a88130/products/REGX8757/REGX8757-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw08b3f6e4/products/REGX8757/REGX8757-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwc2feffba/products/REGX8757/REGX8757-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw4e8b37f2/products/REGX8757/REGX8757-6.JPG",
    ],
    size: [38, 39, 40, 41, 42, 43, 44, 45, 47],
    color: ["red", "black", "white"],
    gender: ["men"],
    is_active: true,
    sold_count: 0,
  },
  {
    item_number: "REGY7716",
    name: "Zapatillas Reebok Ztaur Run Hombre",
    description:
      "Experimenta el poder de la velocidad con las Zapatillas Reebok Ztaur Run. Diseñadas para llevar tu rendimiento al máximo nivel, estas zapatillas son el sueño de todo corredor. Su capellada transpirable te mantiene fresco y seco incluso en los entrenamientos más intensos, mientras que el diseño sin costuras garantiza un ajuste perfecto y sin molestias. La suela de caucho ofrece tracción y durabilidad excepcionales, brindándote la confianza necesaria para conquistar cada paso. Ya sea que estés corriendo en el asfalto o desafiando senderos, ponete en movimiento y alcanza nuevas velocidades con estas zapatillas de alto rendimiento que te llevarán más allá de tus límites.",
    price: 26.29,
    discount_percentage: 0,
    rating: [5],
    stock: 50,
    brand: ["reebok"],
    category: ["all day"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw21970ea6/products/REGY7716/REGY7716-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw82a7fd18/products/REGY7716/REGY7716-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw0dbd7002/products/REGY7716/REGY7716-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwb1a12473/products/REGY7716/REGY7716-6.JPG",
    ],
    size: [40, 41, 42, 43, 44],
    color: ["blue"],
    gender: ["men"],
    is_active: true,
    sold_count: 0,
  },
  {
    item_number: "REGY5197",
    name: "Zapatillas Reebok Energen Lite Hombre",
    description:
      "Las Zapatillas Reebok Energen Lite Hombre son ideales para tus actividades deportivas y diarias. Confeccionadas con materiales ligeros y transpirables, te brindan comodidad y amortiguación en cada paso. Su diseño moderno y versátil se combina con una suela resistente para una tracción confiable. Tanto si las usas para correr, entrenar o para tu estilo urbano, te ofrecen rendimiento y estilo en un mismo combo.",
    price: 19.49,
    discount_percentage: 0,
    rating: [5],
    stock: 50,
    brand: ["reebok"],
    category: ["all day", "casual"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw5e2cd53c/products/REGY5197/REGY5197-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw5e2cd53c/products/REGY5197/REGY5197-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw3b2fda9c/products/REGY5197/REGY5197-4.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw2d7ca11f/products/REGY5197/REGY5197-6.JPG",
    ],
    size: [38, 39, 40, 41, 42, 43, 44, 45, 47, 49],
    color: ["blue"],
    gender: ["men"],
    is_active: true,
    sold_count: 0,
  },
  {
    item_number: "UA458FR",
    name: "Zapatillas Under Armour Charged Slight",
    description:
      "Las Zapatillas Under Armour Charged Slight tiene un diseño limpio que proporciona un aspecto moderno y versátil. La capaellada con superposición de laminado de TPU translúcido y cerrado, realzando la parte superior. La tecnología Charged te otorga mayor comodidad y propulsión.",
    price: 32.49,
    discount_percentage: 0,
    rating: [1],
    stock: 30,
    brand: ["Under Armour"],
    category: ["all day"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw18354b6e/products/UA_3025920-001/UA_3025920-001-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwbc1fced8/products/UA_3025920-001/UA_3025920-001-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwa4862093/products/UA_3025920-001/UA_3025920-001-3.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwa8fbb8de/products/UA_3025920-001/UA_3025920-001-4.JPG",
    ],
    size: [39, 40, 42, 43, 44, 45],
    color: ["black"],
    gender: ["men"],
    is_active: true,
    sold_count: 0,
  },
  {
    item_number: "UA45SF",
    name: "Zapatillas Under Armour Charged Slight Lam",
    description:
      "Las Zapatillas Under Armour Charged Slight Lam tiene un diseño limpio que proporciona un aspecto moderno y versátil. La capaellada con superposición de laminado de TPU translúcido y cerrado, realzando la parte superior. La tecnología Charged te otorga mayor comodidad y propulsión.",
    price: 33.59,
    discount_percentage: 0,
    rating: [6],
    stock: 20,
    brand: ["Under Armour"],
    category: ["running"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwef306bce/products/UA3025920-103/UA3025920-103-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwbb7f36f6/products/UA3025920-103/UA3025920-103-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwfbce5833/products/UA3025920-103/UA3025920-103-3.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwb4b0586b/products/UA3025920-103/UA3025920-103-4.JPG",
    ],
    size: [39, 40, 42, 43, 44, 45],
    color: ["grey"],
    gender: ["men"],
    is_active: true,
    sold_count: 0,
  },
  {
    item_number: "UAF245",
    name: "Zapatillas Training Under Armour Charged Engage 2 Hombre",
    description:
      "Las Zapatillas Training Under Amour Charged Engage 2 Hombre tienen una suela de goma resistente y una parte superior de malla transpirable que proporciona comodidad y soporte durante los entrenamientos. La tecnología Charged Cushioning en la entresuela ofrece una amortiguación receptiva, mientras que la suela exterior de goma proporciona tracción y durabilidad. Perfectas para entrenamientos de alta intensidad, son especiales si estás buscando elevar tus entrenamientos a un próximo nivel",
    price: 35.99,
    discount_percentage: 0,
    rating: [7],
    stock: 25,
    brand: ["Under Armour"],
    category: ["training"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwa5511b90/products/UA3025527-600/UA3025527-600-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwe7b5306e/products/UA3025527-600/UA3025527-600-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw1f9f3758/products/UA3025527-600/UA3025527-600-3.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwc9a37ebd/products/UA3025527-600/UA3025527-600-4.JPG",
    ],
    size: [37, 38, 39, 40, 42, 43, 44, 45],
    color: ["red"],
    gender: ["men"],
    is_active: true,
    sold_count: 0,
  },
  {
    item_number: "UA354df",
    name: "Zapatillas Under Armour Hovr Phantom",
    description:
      "Si buscas un calzado para mejorar tu estabilidad, con un tejido flexible y amortiguación eficaz, las Zapatillas Under Armour Hovr Phantom son para vos. La tecnología UA HOVR™ ofrece suavidad a tus pisadas y un excelente retorno de energía. El tejido IntelliKnit es ligero y ultra-transpirable, además de aporta ligereza y flexibilidad para mejorar el calce. La suela de goma optimiza la tracción y la durabilidad y las piezas rígidas mejoran tu estabilidad para que nada te frene.",
    price: 59.99,
    discount_percentage: 0,
    rating: [2],
    stock: 30,
    brand: ["Under Armour"],
    category: ["running"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw47f71e74/products/UA_3024936-100/UA_3024936-100-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw120bbe77/products/UA_3024936-100/UA_3024936-100-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwc7aa50bd/products/UA_3024936-100/UA_3024936-100-3.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw2afdc52c/products/UA_3024936-100/UA_3024936-100-4.JPG",
    ],
    size: [34, 35, 37, 38, 39, 40, 42, 43, 44, 45],
    color: ["white"],
    gender: ["men"],
    is_active: true,
    sold_count: 0,
  },
  {
    item_number: "UA4560D",
    name: "Zapatillas Under Armour Charged Pursuit 3",
    description:
      "Atravesá tus límites con las Zapatillas Under Armour Charged Pursuit 3, un calzado que promete ligereza y flexibilidad. Hechas con mesh liviano que asegura libertad de tus movimientos y comodidad, mientras que sus recortes sintéticos son el soporte necesario para garantizar durabilidad y un buen ajuste. Cuenta con una plantilla de espuma que mejora tus pisadas haciendo que no puedas parar de usarlas. La tecología Charged Cushioning es la frutilla del postre en estas zapatillas: ofrece máxima durabilidad y reactividad cuando estás dando tu máximo esfuerzo. La suela de goma crea una tracción perfecta a la superficie, para que no tengas nada de qué preocuparte. ¿No esperabas tanto de unas zapatillas de entrenamiento, no?",
    price: 26.99,
    discount_percentage: 0,
    rating: [8],
    stock: 10,
    brand: ["Under Armour"],
    category: ["training"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwdf7d4a93/products/UA_3024878-401/UA_3024878-401-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwde1a7204/products/UA_3024878-401/UA_3024878-401-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw25016403/products/UA_3024878-401/UA_3024878-401-3.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw1a594767/products/UA_3024878-401/UA_3024878-401-4.JPG",
    ],
    size: [36, 37, 38, 39, 40, 42, 43],
    color: ["blue"],
    gender: ["men"],
  },
  {
    item_number: "UA23F4",
    name: "Zapatilla Running Under Armour Phade Rn Hombre",
    description:
      "Mejorá tus marcas con las Zapatillas Running Under Armour Phade Rn Hombre. Un par que te mantiene listo para cada carrera gracias a su parte superior en mesh ligero que te brinda libertad de movimiento y la amortiguación que mejora cada uno de tus aterrizajes. Una suela de goma ofrece tracción en cada superficie. Con este par se renuevan los objetivos!",
    price: 24.99,
    discount_percentage: 0,
    rating: [3],
    stock: 20,
    brand: ["Under Armour"],
    category: ["running"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw67626899/products/UA3024880-002/UA3024880-002-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw176ae2b2/products/UA3024880-002/UA3024880-002-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw9b144c11/products/UA3024880-002/UA3024880-002-3.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw553f8b17/products/UA3024880-002/UA3024880-002-4.JPG",
    ],
    size: [39, 40, 42, 43, 44, 45],
    color: ["black"],
    gender: ["men"],
    is_active: true,
    sold_count: 0,
  },
  {
    item_number: "UA423FS",
    name: "Zapatillas Training Under Armour Hovr Sonic 5 Hombre",
    description:
      "Las Zapatillas Training Under Armour HOVR Sonic 5 Hombre tienen un diseño moderno y aerodinámico, con tecnología UA HOVR para una sensación de gravedad cero que devuelve la energía y reduce el impacto en cada pisada. También cuentan con una suela exterior de goma resistente para mayor durabilidad y tracción, y una parte superior de malla transpirable para mantener tus pies frescos y cómodos durante todo el entrenamiento.",
    price: 53.99,
    discount_percentage: 0,
    rating: [4],
    stock: 35,
    brand: ["Under Armour"],
    category: ["running"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw92fc37c0/products/UA3024898-601/UA3024898-601-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw9e224df9/products/UA3024898-601/UA3024898-601-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw9b20cf44/products/UA3024898-601/UA3024898-601-3.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw1d9d76b3/products/UA3024898-601/UA3024898-601-4.JPG",
    ],
    size: [35, 37, 38, 39, 40, 42, 43, 44, 45],
    color: ["orange"],
    gender: ["men"],
    is_active: true,
    sold_count: 0,
  },
  {
    item_number: "UAF6A5",
    name: "Zapatilla Running Under Armour Charged Rogue Hombre",
    description:
      "Las Zapatillas Running Under Armour Charged Rogue Hombre están confeccionadas en su parte superior con malla especialmente creada para convertirse ligera y transpirable, además de tener soportes estratégicos en donde más los necesitás. La entresuela doble combina Micro G® con Charged Cushioning® para proporcionar la mejor combinación entre comodidad y retorno de energía. La suela de goma protege tus pies de mayor impacto y brinda una mayor durabilidad. Hechas para correr kilómetros, sin importar día ni horario.",
    price: 28.99,
    discount_percentage: 0,
    rating: [9],
    stock: 20,
    brand: ["Under Armour"],
    category: ["training"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw1ce08be4/products/UA3024877-402/UA3024877-402-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw45d16134/products/UA3024877-402/UA3024877-402-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw297d77a0/products/UA3024877-402/UA3024877-402-3.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw0b5800e4/products/UA3024877-402/UA3024877-402-4.JPG",
    ],
    size: [34, 35, 37, 38, 39, 40, 42, 43, 44, 45],
    color: ["violet"],
    gender: ["women"],
    is_active: true,
    sold_count: 0,
  },
  {
    item_number: "UA544D",
    name: "Zapatillas Under Armour Project Rock 5 Black Adam",
    description:
      "Las Zapatillas Under Armour Project Rock te alistan para alcanzar tus límites e incluso, superarlos. Su estructura hecha en una parte superior de malla transpirable, es la mejor opción para que te mantengas concentrado en duplicar tus objetivos, sin preocupaciones. Entrega libertad al movimiento, frescura y ligereza. Al mismo tiempo, un cuello acolchado te brinda el confort necesario para tu tiempo de entrenamiento y la amortiguación UA HOVR ofrece una capacidad de respuesta, disminuyendo el impacto, devuelvonviendo la energía gastada y te impulsa hacia adelante. La UA TriBase es una suela que facilita el contacto con el suelo y el movimiento natural a la vez que flexibiliza el movimiento para el agarre de levantamiento. ¿Tenés alguna duda de que esta es el calzado que buscabas?",
    price: 27.99,
    discount_percentage: 0,
    rating: [4],
    stock: 20,
    brand: ["Under Armour"],
    category: ["casual"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw752973cf/products/AD_GW0396/AD_GW0396-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw224db5ba/products/AD_GW0396/AD_GW0396-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw2e049f86/products/AD_GW0396/AD_GW0396-3.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwb6fb96b3/products/AD_GW0396/AD_GW0396-4.JPG",
    ],
    size: [40, 42, 43, 44, 45],
    color: ["black"],
    gender: ["men"],
    is_active: true,
    sold_count: 0,
  },
  {
    item_number: "UA523F",
    name: "Zapatillas Under Armour Proyect Rock Rock",
    description: "...",
    price: 39.99,
    discount_percentage: 0,
    rating: [6],
    stock: 25,
    brand: ["Under Armour"],
    category: ["training"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw4f2a5981/products/UA_3025767-400/UA_3025767-400-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw272fb87a/products/UA_3025767-400/UA_3025767-400-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw73dbfc7a/products/UA_3025767-400/UA_3025767-400-3.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw35ceab0f/products/UA_3025767-400/UA_3025767-400-4.JPG",
    ],
    size: [34, 35, 37, 38, 39, 40, 42, 43, 44, 45],
    color: ["blue"],
    gender: ["men"],
    is_active: true,
    sold_count: 0,
  },
  {
    item_number: "UA1456D",
    name: "Zapatillas Training Under Armour Project Rock 5 Disrupt Hombre",
    description:
      "Con las Zapatillas Training de Entrenamiento Project Rock Disrupt Hombre te convertirás en el más fuerte. Están confeccionadas en una parte superior de mesh resistente pero te permite ejecutar tus movimientos libremente y sin incomodidad. Incorpora un soporte de TPU para mejorar la estructura y estabilidad en cada una de tus posiciones y levantamientos mientras que la amortiguación UA HOVR reduce el impacto y te devuelve energía para que sigas dando lo mejor de vos. Como si no fuera suficiente, se suma la tecnología UA TriBase para maximizar el contacto con el suelo y mejora tu movilidad haciéndola más natural y menos forzada. Su diseño te destaca dentro y fuera del gimnasio. Dejá atrás tus marcas viejas y anotá las nuevas con este par!",
    price: 58.99,
    discount_percentage: 0,
    rating: [10],
    stock: 15,
    brand: ["Under Armour"],
    category: ["training", "running"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw6b21bcc8/products/UA3025976-401/UA3025976-401-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwbb46fbce/products/UA3025976-401/UA3025976-401-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw663862e4/products/UA3025976-401/UA3025976-401-3.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw440ccb7b/products/UA3025976-401/UA3025976-401-4.JPG",
    ],
    size: [34, 35, 37, 38, 39, 40, 42, 43, 44, 45],
    color: ["violet"],
    gender: ["men"],
    is_active: true,
    sold_count: 0,
  },
  {
    item_number: "C658E",
    name: "Zapatillas Converse Chuck Taylor All Star Lift Hi",
    description:
      "Las Zapatillas Converse Chuck Taylor All Star Lift Hi están confeccionadas en lona con un diseño elegante y caña media. El ajuste con sistema de cordones te ofrece el control necesario para todos tus días y su clásica suela marca un estilo de herencia para lucir con todos tus outfits.",
    price: 34.49,
    discount_percentage: 0,
    rating: [1],
    stock: 30,
    brand: ["Converse"],
    category: ["all day"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwa560c5aa/products/CO_166582C/CO_166582C-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwc3ecb35b/products/CO_166582C/CO_166582C-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwdf94b3ad/products/CO_166582C/CO_166582C-3.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw73c34200/products/CO_166582C/CO_166582C-4.JPG",
    ],
    size: [35, 36, 37, 38, 39, 40, 42, 43, 44, 45],
    color: ["black"],
    gender: ["unisex"],
  },
  {
    item_number: "C654Fd",
    name: "Zapatillas Converse Chuck Taylor All Star Lift Ox",
    description:
      "Las Zapatillas Converse Chuck Taylor All Star Lift son un clásico que no puede faltar en tu ropero. Su diseño moderno es ideal para lucir hasta en las salidas menos planeadas gracias a su capellada de lona resistente y una plataforma digna de Converse.",
    price: 33.59,
    discount_percentage: 0,
    rating: [6],
    stock: 40,
    brand: ["Converse"],
    category: ["all day"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwfa893671/products/CO_166585C/CO_166585C-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw4d954fcd/products/CO_166585C/CO_166585C-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw546b2bf4/products/CO_166585C/CO_166585C-3.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwa52fc6ed/products/CO_166585C/CO_166585C-4.JPG",
    ],
    size: [35, 36, 37, 38, 39, 40, 42, 43, 44, 45],
    color: ["black"],
    gender: ["unisex"],
    is_active: true,
    sold_count: 0,
  },
  {
    item_number: "C354D",
    name: "Zapatillas Converse Chuck Taylor All Star Core Ox",
    description:
      "Si buscas unas zapatillas para usar a toda hora y en todo lugar, las Zapatillas Converse Chuck Taylor All Star Core Ox son para vos. Te dan la versatilidad que quieres para combinarlas con lo mejor que tengas en el ropero sin perder el estilo y la comodidad.",
    price: 35.99,
    discount_percentage: 0,
    rating: [7],
    stock: 25,
    brand: ["Converse"],
    category: ["all day", "casual"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw4bcdd626/products/CO_157196C/CO_157196C-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw4f756868/products/CO_157196C/CO_157196C-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwbfc9d86c/products/CO_157196C/CO_157196C-3.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwe9c8ac25/products/CO_157196C/CO_157196C-4.JPG",
    ],
    size: [37, 38, 39, 40, 42, 43, 44, 45],
    color: ["black"],
    gender: ["unisex"],
    is_active: true,
    sold_count: 0,
  },
  {
    item_number: "C456S",
    name: "Zapatillas Converse Ct All Star Platform Hi",
    description:
      "Si buscas un calzado para mejorar tu estabilidad, con un tejido flexible y amortiguación eficaz, las Zapatillas Converse son para vos.",
    price: 29.99,
    discount_percentage: 0,
    rating: [2],
    stock: 30,
    brand: ["Converse"],
    category: ["all day", "casual"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw45761d03/products/CO_166584C/CO_166584C-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwf08fce6b/products/CO_166584C/CO_166584C-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwc8b23518/products/CO_166584C/CO_166584C-3.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw97540e80/products/CO_166584C/CO_166584C-4.JPG",
    ],
    size: [34, 35, 37, 38, 39, 40, 42, 43, 44, 45],
    color: ["white"],
    gender: ["unisex"],
    is_active: true,
    sold_count: 0,
  },
  {
    item_number: "CD875",
    name: "Zapatillas Converse Chuck Taylor Core Ox",
    description:
      "Si buscas unas zapatillas para usar a toda hora y en todo lugar, las Zapatillas Converse Chuck Taylor Core Ox son para vos. Te dan la versatilidad que quieres para combinarlas con lo mejor que tengas en el ropero sin perder el estilo y la comodidad.",
    price: 26.99,
    discount_percentage: 0,
    rating: [8],
    stock: 25,
    brand: ["Converse"],
    category: ["all day", "casual"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwcb483c87/products/CO_156994C/CO_156994C-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw748de718/products/CO_156994C/CO_156994C-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw1a77a665/products/CO_156994C/CO_156994C-3.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwa9a7941d/products/CO_156994C/CO_156994C-4.JPG",
    ],
    size: [36, 37, 38, 39, 40, 42, 43],
    color: ["white"],
    gender: ["unisex"],
    is_active: true,
    sold_count: 0,
  },
  {
    item_number: "Co492483-900",
    name: "Zapatillas Converse Chuck Taylor All Star Lift Ox",
    description:
      "Las Zapatillas Converse Chuck Taylor All Star Lift son un clásico que no puede faltar en tu ropero. Su diseño moderno es ideal para lucir hasta en las salidas menos planeadas gracias a su capellada de lona resistente y una plataforma digna de Converse.",
    price: 33.59,
    discount_percentage: 0,
    rating: [6],
    stock: 40,
    brand: ["Converse"],
    category: ["all day"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwfa893671/products/CO_166585C/CO_166585C-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw4d954fcd/products/CO_166585C/CO_166585C-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw546b2bf4/products/CO_166585C/CO_166585C-3.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwa52fc6ed/products/CO_166585C/CO_166585C-4.JPG",
    ],
    size: [35, 36, 37, 38, 39, 40, 42, 43, 44, 45],
    color: ["black"],
    gender: ["unisex"],
    is_active: true,
    sold_count: 0,
  },
  {
    item_number: "Co438928-500",
    name: "Zapatillas Converse Chuck Taylor All Star Core Ox",
    description:
      "Si buscas unas zapatillas para usar a toda hora y en todo lugar, las Zapatillas Converse Chuck Taylor All Star Core Ox son para vos. Te dan la versatilidad que quieres para combinarlas con lo mejor que tengas en el ropero sin perder el estilo y la comodidad.",
    price: 35.99,
    discount_percentage: 0,
    rating: [7],
    stock: 25,
    brand: ["Converse"],
    category: ["all day", "casual"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw4bcdd626/products/CO_157196C/CO_157196C-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw4f756868/products/CO_157196C/CO_157196C-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwbfc9d86c/products/CO_157196C/CO_157196C-3.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwe9c8ac25/products/CO_157196C/CO_157196C-4.JPG",
    ],
    size: [37, 38, 39, 40, 42, 43, 44, 45],
    color: ["black"],
    gender: ["unisex"],
    is_active: true,
    sold_count: 0,
  },
  {
    item_number: "Co4925803-400",
    name: "Zapatillas Converse Ct All Star Platform Hi",
    description:
      "Si buscas un calzado para mejorar tu estabilidad, con un tejido flexible y amortiguación eficaz, las Zapatillas Converse son para vos.",
    price: 29.99,
    discount_percentage: 0,
    rating: [2],
    stock: 30,
    brand: ["Converse"],
    category: ["all day", "casual"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw45761d03/products/CO_166584C/CO_166584C-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwf08fce6b/products/CO_166584C/CO_166584C-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwc8b23518/products/CO_166584C/CO_166584C-3.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw97540e80/products/CO_166584C/CO_166584C-4.JPG",
    ],
    size: [34, 35, 37, 38, 39, 40, 42, 43, 44, 45],
    color: ["white"],
    gender: ["unisex"],
    is_active: true,
    sold_count: 0,
  },
  {
    item_number: "co4543985-700",
    name: "Zapatillas Converse Chuck Taylor Core Ox",
    description:
      "Si buscas unas zapatillas para usar a toda hora y en todo lugar, las Zapatillas Converse Chuck Taylor Core Ox son para vos. Te dan la versatilidad que quieres para combinarlas con lo mejor que tengas en el ropero sin perder el estilo y la comodidad.",
    price: 26.99,
    discount_percentage: 0,
    rating: [8],
    stock: 25,
    brand: ["Converse"],
    category: ["all day", "casual"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwcb483c87/products/CO_156994C/CO_156994C-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw748de718/products/CO_156994C/CO_156994C-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw1a77a665/products/CO_156994C/CO_156994C-3.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwa9a7941d/products/CO_156994C/CO_156994C-4.JPG",
    ],
    size: [36, 37, 38, 39, 40, 42, 43],
    color: ["white"],
    gender: ["unisex"],
    is_active: true,
    sold_count: 0,
  },
  {
    item_number: "co435454-100",
    name: "Zapatillas Converse Chuck Taylor All Star Lift Ox",
    description:
      "Las Zapatillas Converse Chuck Taylor All Star Lift Ox son un clásico que no puede faltar en tu ropero. Su diseño moderno es ideal para lucir hasta en las salidas menos planeadas gracias a su capellada de lona resistente y una plataforma digna de Converse.",
    price: 34.99,
    discount_percentage: 0,
    rating: [3],
    stock: 30,
    brand: ["Converse"],
    category: ["all day"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw6e443e0e/products/CO_166587C/CO_166587C-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwd947cd7d/products/CO_166587C/CO_166587C-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwa3463c92/products/CO_166587C/CO_166587C-3.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw5c078dce/products/CO_166587C/CO_166587C-4.JPG",
    ],
    size: [35, 36, 37, 38, 39, 40, 42, 43, 44, 45],
    color: ["white"],
    gender: ["unisex"],
  },
  {
    item_number: "co354244-150",
    name: "Zapatillas Converse Ct All Star Platform Ox",
    description:
      "Las Zapatillas Converse Chuck Taylor All Star Lift Ox son un clásico que no puede faltar en tu ropero. Su diseño moderno es ideal para lucir hasta en las salidas menos planeadas gracias a su capellada de lona resistente y una plataforma digna de Converse.",
    price: 33.99,
    discount_percentage: 0,
    rating: [4],
    stock: 35,
    brand: ["Converse"],
    category: ["all day"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwa4e9db9f/products/CO_166586C/CO_166586C-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw15b98e76/products/CO_166586C/CO_166586C-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw1ea3f115/products/CO_166586C/CO_166586C-3.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwf384288d/products/CO_166586C/CO_166586C-4.JPG",
    ],
    size: [35, 37, 38, 39, 40, 42, 43, 44, 45],
    color: ["red"],
    gender: ["men", "women", "unisex"],
  },
  {
    item_number: "co637737-670",
    name: "Zapatillas Converse Chuck Taylor Core Ox",
    description:
      "Si buscas unas zapatillas para usar a toda hora y en todo lugar, las Zapatillas Converse Chuck Taylor Core Ox son para vos. Te dan la versatilidad que quieres para combinarlas con lo mejor que tengas en el ropero sin perder el estilo y la comodidad.",
    price: 34.99,
    discount_percentage: 0,
    rating: [9],
    stock: 20,
    brand: ["Converse"],
    category: ["all day"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw55ddd25c/products/CO_157004C/CO_157004C-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw0b05a02d/products/CO_157004C/CO_157004C-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwae6a4438/products/CO_157004C/CO_157004C-3.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwc2d2bba4/products/CO_157004C/CO_157004C-4.JPG",
    ],
    size: [34, 35, 37, 38, 39, 40, 42, 43, 44, 45],
    color: ["black"],
    gender: ["unisex", "men", "women"],
  },
  {
    item_number: "co637737-270",
    name: "Zapatillas Converse Pro Blaze V2 Hombre",
    description:
      "Las Zapatillas Converse Pro Blaze V2 Hombre presentan una silueta inspirada en el estilo urbano. Converse Pro Blaze, con una correa de nylon ajustable y extraíble que te mantiene a vos y a tu estilo seguros. Una suela exterior de goma inspirada en la cancha le brinda la tracción adecuada, con una plantilla Converse Comfort Cushioning para brindar soporte a cada paso.",
    price: 42.99,
    discount_percentage: 0,
    rating: [4],
    stock: 20,
    brand: ["Converse"],
    category: ["all day", "running"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw306316f6/products/COA00985C/COA00985C-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw7950c23a/products/COA00985C/COA00985C-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwb4a96dcd/products/COA00985C/COA00985C-3.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw301b06f0/products/COA00985C/COA00985C-4.JPG",
    ],
    size: [39, 40, 42, 43, 44, 45],
    color: ["white"],
    gender: ["men"],
  },
  {
    item_number: "co637737-470",
    name: "Zapatillas Converse Chuck Taylor All Star Malden Street Mid Hombre",
    description: "...",
    price: 39.99,
    discount_percentage: 0,
    rating: [6],
    stock: 25,
    brand: ["Converse"],
    category: ["all day", "casual"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw2726e4af/products/COA05774C/COA05774C-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw5548a929/products/COA05774C/COA05774C-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwa74dd18d/products/COA05774C/COA05774C-3.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw31a36a99/products/COA05774C/COA05774C-4.JPG",
    ],
    size: [34, 35, 37, 38, 39, 40, 42, 43, 44, 45],
    color: ["grey"],
    gender: ["men"],
  },
  {
    item_number: "co637737-890",
    name: "Zapatillas Converse All Star Bb Jet Sun Gradient Hombre",
    description:
      "Las Zapatillas Converse All Star Bb Jet Sun Gradient Hombre están diseñadas para que te destaques paso a paso. Confeccionada con malla deportiva ligera y transpirable. La amortiguación Nike Zoom en el talón y la parte delantera del pie brinda soporte reactivo, mientras que una placa Converse Speed ​​Plate adicional en la parte delantera del pie te otorga rapidez y agilidad.",
    price: 78.99,
    discount_percentage: 0,
    rating: [10],
    stock: 10,
    brand: ["Converse"],
    category: ["training", "running"],
    images: [
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwca457b22/products/COA00404C/COA00404C-1.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw0a135467/products/COA00404C/COA00404C-2.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw6ae5c2f5/products/COA00404C/COA00404C-3.JPG",
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw542b78ee/products/COA00404C/COA00404C-4.JPG",
    ],
    size: [42, 43, 44, 45],
    color: ["white"],
    gender: ["men"],
  },
];

const getAllCategories = products.map((p) => p.category).flat();
const categories = [...new Set(getAllCategories)].map((b) => b.toLowerCase());

// console.log("category", categories);
const sizes = [34, 35, 37, 38, 39, 40, 42, 43, 44, 45];
const getAllBrands = products
  .map((p) => p.brand)

  .flat();
// .toLowerCase();
const brands = [...new Set(getAllBrands)].map((b) => b.toLowerCase());
// console.log("brands", brands);

const gender = ["men", "women", "unisex"];
const rating = [1, 2, 3, 4, 5];

const getAllColors = products.map((p) => p.color).flat();

const colors = [...new Set(getAllColors)].map((b) => b.toLowerCase().trim());

const images = products.map((p, j) =>
  p.images.map((c, i) => {
    return { productId: j + 1, image: p.images[i] };
  })
);

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

const netProducts = [
  {
    item_number: "NIDR7882-700",
    model: "Zapatillas Urbanas Nike Court Vision Mid Winter Hombre",
    description:
      "Si te gusta destacarte entre la multitud, las Zapatillas Urbanas Nike Court Vision Mid Winter Hombre son para vos. Inspirado en el básquetbol de los años 80 te permite llevar tu estilo retro a la temporada de invierno. Los colores clásicos, las lengüetas grandes y el cuello con amortiguación adicional ofrecen un look premium de última moda para que brilles en todo momento. La mezcla de materiales duraderos y acolchados suma calidez a tu outfit para que te sientas cómodo en todo momento. Además, la suela de goma posee un patrón gráfico actualizado para mejorar la tracción y durabilidad. Vestite con un look canchero y elegante.",
    price: 54.99,
    discount_percentage: 0,

    stock: 50,

    sold_count: 0,
  },
  {
    item_number: "NICD5432-03",
    model: "Zapatillas Nike Air Max Excee",
    description:
      "Lucí con estilo en tus entrenamientos o en tu día a día gracias a las Zapatillas Nike Air Max Excee, su tecnología Air max te brinda mejores y amortiguadas pisadas que te harán sentir seguro y confiado en cualquier momento que las lleves puestas.",
    price: 57.99,
    discount_percentage: 0,

    stock: 50,

    is_active: true,
    sold_count: 0,
  },
  {
    item_number: "NIDC3729-502",
    model: "Zapatillas Nike Revolution 6 Next Nature",
    description:
      "Las Zapatillas Nike Revolution 6 Next Nature son el calzado de running del futuro. La malla extra aporta comodidad a tus pies y los materiales adicionales brindan durabilidad a la capellada. La mediasuela de espuma te da una sensación de confort y suavidad únicas en cada pisada. Para una mayor flexibilidad, la suela está diseñada en computadora y optimiza la tracción para que disfrutes de todas tus carreras.",
    price: 54.99,
    discount_percentage: 0,

    stock: 50,

    is_active: true,
    sold_count: 0,
  },
  {
    item_number: "NIDR2402-100",
    model: "Zapatillas Nike Air Max Excee Mujer",
    description:
      "Cámara de aire que amortigua y absorbe el impacto en la pisada",
    price: 57.49,
    discount_percentage: 0,

    stock: 50,

    sold_count: 0,
  },
  {
    item_number: "NICW4555-006",
    model: "Zapatillas Nike Air Max Sc",
    description:
      "Las Zapatillas Nike Air Max Sc son simples y modernas. Están diseñadas para acompañarte en tu rutina cuidando tus pisadas gracias a su amortiguación eficaz en la unidad Air. La capellada mezcla materiales de alta calidad como cuero, malla y sintético que mejorar la transpirabilidad y soportan el uso diario a la perfección. La entresuela de espuma mejora aún más la amortiguación y la suela de goma ofrece tracción a todos tus pasos para que te dirijas a tu destino en pleno confort.",
    price: 50.59,
    discount_percentage: 0,

    stock: 50,

    sold_count: 0,
  },
  {
    item_number: "NIDA9492-100",
    model: "Zapatillas Entrenamiento Nike Air Zoom Superrep 3 Mujer",
    description:
      "Las Zapatillas Entrenamiento Nike Air Zoom Superrep 3 Mujer combinan durabilidad con un diseño hecho para que superes tus marcas personales. ¿El resultado? Un calzado construido para un corredor, pero adaptable a tus rutinas de entrenamiento diarias. La espuma Nike Zoom X en la plantilla brinda el retorno de energía que tu pie necesita en cada pisada y la unidad Zoom Air visible proporciona una amortiguación sensible, y le da un toque moderno a la suela. La tecnología Nike React, por su parte, ayuda a mantener el pie acolchado y seguro en cada paso, mientras que la suela de goma presenta un diseño creado con datos de cientos de corredores para una excelente calidad.",
    price: 68.99,
    discount_percentage: 0,

    stock: 50,

    sold_count: 0,
  },
  {
    item_number: "NIDC3728-401",
    model: "Zapatillas Nike Revolution 6 Next Nature",
    description:
      "Suma más y más kilómetros con tus Zapatillas Nike Revolution 6 Next Nature, que aportan amortiguación y confort a cada paso que des. Su capellada transpirable y suela diseñada por computadora para una mejor tracción son ideales hasta para los corredores más exigentes.",
    price: 34.99,
    discount_percentage: 0,

    stock: 50,

    sold_count: 0,
  },
  {
    item_number: "NIDH3158-104",
    model: "Zapatillas Nike Court Vision Low Next Nature",
    description: "...",
    price: 38.99,
    discount_percentage: 0,

    stock: 50,

    sold_count: 0,
  },
  {
    item_number: "NIDM7590-001",
    model: "Zapatillas Nike Court Legacy Lift Mujer",
    description: "...",
    price: 41.99,
    discount_percentage: 0,

    stock: 50,

    sold_count: 0,
  },
  {
    item_number: "NIDR2552-100",
    model: "Zapatillas Nike Air Max SC Mujer",
    description:
      "Las Zapatillas Nike Air Max SC Mujer son un calzado deportivo de alta calidad diseñado para ofrecer comodidad y estilo en cada paso. Con una parte superior de malla transpirable y una suela de goma duradera, proporcionan una excelente ventilación y tracción en cualquier superficie. La tecnología Air Max en la suela ofrece una amortiguación suave y cómoda en cada pisada, reduciendo el impacto en las articulaciones y brindando una sensación de ligereza al caminar o correr. Su diseño incluye el icónico logotipo de Nike en el costado y en la lengüeta, lo que las convierte en un accesorio de moda imprescindible para cualquier guardarropa deportivo o casual.",
    price: 52.99,
    discount_percentage: 0,

    stock: 50,

    sold_count: 0,
  },

  {
    item_number: "PU389002-03",
    model: "Zapatillas Puma Rbd Game Low Unisex",
    description:
      "Las Zapatillas Puma Rbd Game Unisex son la combinación perfecta entre el estilo deportivo y la moda. Confeccionadas con materiales sintéticos de alta calidad que te brindan confort y durabilidad. Con un diseño que se adapta a todos tus outfits.",
    price: 32.99,
    discount_percentage: 0,

    stock: 50,

    sold_count: 0,
  },
  {
    item_number: "PU378835-01",
    model: "Zapatillas Entrenamiento Puma Disperse Xt 2 Tiger Camo Unisex",
    description:
      "Sumale a tus rutinas de entrenamiento o carreras las Zapatillas Puma Disperse Xt 2 Tiger Camo Unisex. Su plantilla de goma te brinda mejor agarre y resistencia sobre cualquier superficie y su capellada de mesh hace el calzado más ligero sumado a que se ajusta perfecto a tu pie. Combinalas con las prendas que más te gusten y salí a entrenar sin límites.",
    price: 25.99,
    discount_percentage: 0,

    stock: 50,

    sold_count: 0,
  },
  {
    item_number: "PU377701-07",
    model: "Zapatillas Puma Softride Ruby",
    description: "...",
    price: 32.99,
    discount_percentage: 0,

    stock: 50,

    sold_count: 0,
  },
  {
    item_number: " PU386497-13",
    model: "Zapatillas Puma R22",
    description:
      "Las Zapatillas Puma R22 llevan el clásico del running a tu silueta urbana con una actualización energética y moderna. Su fabricación con un exterior de pana con recortes en sintético y textiles, crean un diseño que completa tu look volviéndote el más canchero del grupo. La mediasuela CMEVA moldeada por compresión, sumada a la plantilla SoftFoam+ te ofrecen una pisada cómoda, instantánea y duradera que no podrás dejar de usar. Tu look cotidiano, se fue a las nubes con este par.",
    price: 33.99,
    discount_percentage: 0,

    stock: 50,

    sold_count: 0,
  },
  {
    item_number: " PU381811-01",
    model: "Zapatillas Puma R78",
    description:
      "Las zapatillas Puma R78 están confeccionadas con materiales que hacen que tus pies estén cómodos y frescos. Su capellada en malla y sintético junto a la suela exterior de goma que mejora tu amortiguación en casa pisada, se fusionan con un diseño 100% urbano para que combines con cualquier outfit.",
    price: 27.99,
    discount_percentage: 0,

    stock: 50,

    sold_count: 0,
  },
  {
    item_number: "PU378833-04",
    model: "Zapatillas Running Puma Cell Vive Alt Unisex",
    description: "...",
    price: 32.49,
    discount_percentage: 0,

    stock: 50,

    sold_count: 0,
  },
  {
    item_number: "PU378842-01",
    model: "Zapatillas Running Infusion Unisex",
    description:
      "Las Zapatillas Running Infusion Unisex combinan estética y deporte para que puedas vestir tus looks casuales y deportivos y mantener la comodidad en todo momento. Hechas en un mesh cómodo y liviano que mejora tus movimientos y una suela que se combina con la entresuela PROFOAM de EVA para brindar amortiguación a cada paso. Cuentan con un refuerzo de TPU en el talón para ofrecer un soporte seguro. El calzado que estabas esperando supera tus expectativas.",
    price: 28.16,
    discount_percentage: 0,

    stock: 50,

    sold_count: 0,
  },
  {
    item_number: "PU195653-04",
    model: "Zapatillas Puma Resolve Street",
    description:
      "Las Zapatillas Puma Resolve Street son perfectas para los runners amantes de la ciudad. La plantilla SoftFoam+ brinda una comodidad duradera y una amortiguación suave en cada paso; la capellada de malla favorece la ventilación y los refuerzos a los lados mejoran tu estabilidad para que des todo de vos en cada kilómetro que recorras.",
    price: 23.63,
    discount_percentage: 0,

    stock: 50,

    sold_count: 0,
  },
  {
    item_number: "PU377970-01",
    model: "Zapatillas Running Puma Power Frame Tr 2 Hombre",
    description:
      "¡Desafiá tus límites con las nuevas zapatillas Running Puma Power Frame Tr 2! Con un diseño moderno y dinámico, estas zapatillas te ofrecen la mejor combinación entre estilo y rendimiento. Cuenta con la tecnología Power Frame, que ofrece una excelente estabilidad y soporte durante tus entrenamientos más intensos. Además, su suela de goma antideslizante te brinda un mejor agarre en cualquier superficie, ya sea en asfalto o en una plaza. Son ideales para corredores y corredoras que buscan mejorar su desempeño y alcanzar nuevos objetivos, ya sea que estés entrenando para una maratón o simplemente disfrutando de un trote al aire libre. No esperes más para experimentar la comodidad y la innovación de las zapatillas Running Puma Power Frame Tr 2.",
    price: 35.02,
    discount_percentage: 0,

    stock: 50,

    sold_count: 0,
  },
  {
    item_number: " PU386494-01",
    model: "Zapatillas Puma Graviton Pro",
    description:
      "Conocé las renovadad Zapatillas Puma Graviton Pro, el magnífico complemento de todos tus outfits. Con una capellada de mesh y cuero sintético, poseen suela de goma que se adhiere a todo tipo de superficies. Confeccionadas con materiales altamente transpirables, son cómodas, livianas y dueñas de un estilo único.",
    price: 30.44,
    discount_percentage: 0,

    stock: 50,

    sold_count: 0,
  },
  {
    item_number: "PU378853-05",
    model: "Zapatillas Training Puma Softride Ruby Luxe Better Mujer",
    description:
      "Las Zapatillas Training Puma Softride Ruby Luxe Better Mujer combinan estilo y rendimiento en un solo calzado. Con su diseño elegante y moderno, destacan en el gimnasio y en la moda urbana. La tecnología Softride proporciona una amortiguación suave y receptiva, brindando comodidad en cada paso. Además, su parte superior de calidad ofrece sujeción y transpirabilidad. Ya sea para entrenamientos intensos o para lucir un estilo deportivo, te brindan confort y estilo durante todo el día.",
    price: 32.6,
    discount_percentage: 0,

    stock: 50,

    sold_count: 0,
  },

  {
    item_number: "MG110MT304710R1",
    model: "Zapatillas Montagne Trail Infinite Pro",
    description:
      "No importa cuán difícil sea el camino, siempre será seguro con las Zapatillas Montagne Trail Infinite Pro. Este calzado está hecho con materiales de alta calidad que aseguran durabilidad y resistencia al uso y desgaste. Confeccionadas en una capellada en mesh sin costuras y con una suela AMORED RUB que las vuelve un par muy firme, seguro y con buena estabilidad. Su base de HALFLOAT suma amortiguación a estas zapatillas convirtiéndolas en tu compañía perfecta de aventuras.",
    price: 25.19,
    discount_percentage: 0,

    stock: 50,

    sold_count: 0,
  },

  {
    item_number: " MG110MT304710R1",
    model: "Zapatillas Montagne Trail Infinite Pro",
    description:
      "No importa cuán difícil sea el camino, siempre será seguro con las Zapatillas Montagne Trail Infinite Pro. Este calzado está hecho con materiales de alta calidad que aseguran durabilidad y resistencia al uso y desgaste. Confeccionadas en una capellada en mesh sin costuras y con una suela AMORED RUB que las vuelve un par muy firme, seguro y con buena estabilidad. Su base de HALFLOAT suma amortiguación a estas zapatillas convirtiéndolas en tu compañía perfecta de aventuras.",
    price: 25.19,
    discount_percentage: 0,

    stock: 50,

    sold_count: 0,
  },

  {
    item_number: "MG110MT306624W2",
    model: "Zapatillas Montagne Utah",
    description:
      "Si sos amante del senderismo y la vida en la montaña, las Zapatillas Montagne Utah serán tus aliadas. Hechas para ofrecer agarre y soporte están confeccionadas con una parte superior en una estructura de sintético duradero, resistente a los obstáculos del camino y que se construye sobre una malla amplia para ofrecer ventilación a tus pies, y así hacer más confortable la experiencia. Ponételas y hacé que tus momentos sean inolvidables.",
    price: 28.89,
    discount_percentage: 0,

    stock: 50,

    sold_count: 0,
  },

  {
    item_number: " MG210MT326710R1",
    model: "Zapatillas Outdoor Montagne City Stride Hombre",
    description:
      "Las Zapatillas Outdoor Montagne City Stride Hombre se convertirán en tus favoritas para las actividades al aire libre. Su capellada de sintético y malla brinda la protección necesaria al mismo tiempo que permite que el pie respire, manteniéndolo fresco y seco uso tras uso. Además, cuenta con tecnología HALFLOAT de alto rendimiento que proporciona una pisada confortable con gran amortiguación para que tu única preocupación sea pensar en tu nueva aventura.",
    price: 24.69,
    discount_percentage: 0,

    stock: 50,

    sold_count: 0,
  },

  {
    item_number: " MG010MT1336J2W2",
    model: "Zapatillas Outdoor Montagne City Fire T3 Mujer",
    description: "...",
    price: 54.99,
    discount_percentage: 0,

    stock: 50,

    sold_count: 0,
  },

  {
    item_number: "MG210MT3446ZJW2",
    model: "Botas Outdoor Montagne Lorster Mujer",
    description:
      "Las Botas Outdoor Montagne Lorster Mujer son ideales para todo tipo de terreno. Cuentan con tecnología ARMORED K que amortigua tus pisadas y hace que tus pasos sean más cómodos. Además, su tecnología AQUACLEVER repele el agua, manteniendo el pie seco, al mismo tiempo que permite la evaporación de la transpiración. Combinalas con tus prendas favoritas y salí a buscar una nueva aventura.",
    price: 42.99,
    discount_percentage: 0,

    stock: 50,

    sold_count: 0,
  },

  {
    item_number: "MG110MT1817Y8R1",
    model: "Botas Outdoor Montagne Philgrim Hombre",
    description:
      "Con las Botas Outdoor Montagne Philgrim Hombre mantenete cómodo y seguro vayas donde vayas. Fabricadas especialmente para realizar trekking y senderismo, este calzado proporciona máxima durabilidad y resistencia capaz de atravesar cualquier terreno. Posee tecnología HALFLOAT que absorbe los impactos de los caminos sinuosos, mientras que la capellada diseñada con el sistema AQUACLEVER aumenta su resistencia y mantiene el pie fresco y seco. Aventurate a un nuevo destino con seguridad.",
    price: 41.89,
    discount_percentage: 0,

    stock: 50,

    sold_count: 0,
  },

  {
    item_number: "MG210MT3226Z0W2",
    model: "Zapatillas Outdoor Montagne City Clifton Mujer",
    description:
      "Las Zapatillas Outdoor Montagne City Clifton Mujer son la opción ideal para tus aventuras al aire libre. Su capellada de poliéster lo hace un calzado sumamente resistente y durable. Además, su suela de múltiples agarres lo convierte en un modelo ideal para todo tipo de actividades outdoor y proporciona la estructura perfecta para brindar soporte estratégico en cada zona del pie, mientras absorbe el impacto en cada pisada. Su tecnología ARMORED K proporciona protección en las zonas que más necesitás.",
    price: 54.99,
    discount_percentage: 0,

    stock: 50,

    sold_count: 0,
  },

  {
    item_number: "MG210MT342734R1",
    model: "Zapatillas Outdoor Montagne Sensse T4 Hombre",
    description:
      "Las Zapatillas Outdoor Montagne Sensse T4 Hombre cuentan con una base trasera que aporta la amortiguación necesaria para un mayor impulso en la zona del talón. Además, la suela delantera ofrece máxima estabilidad en cada movimiento, generando un efecto resorte necesario para aprovechar al máximo cada actividad. Sentirás la protección que te merecés con el refuerzo ARMORED K en el talón, puntera y laterales para que te desplaces libremente sobre cualquier superficie. Combiná confort y estilo en un solo calzado.",
    price: 37.59,
    discount_percentage: 0,

    stock: 50,

    sold_count: 0,
  },

  {
    item_number: "MG110MT150621W2",
    model: "Zapatillas Outdoor Montagne City Fire T3 Mujer",
    description:
      "Transitá cualquier camino con la seguridad de las Zapatillas Outdoor Montagne City Fire T3 Mujer. Movete en todo tipo de terrenos, irregulares, exigentes o mantenete firme en tu día a día. La capellada de poliéster mantendrá tus pies secos y cómodos en todo momento.",
    price: 25.69,
    discount_percentage: 0,

    stock: 50,

    sold_count: 0,
  },
  {
    item_number: "FI11U335X-5024",
    model: "Zapatillas Fila Euro Jogger Sport",
    description:
      "Las zapatillas Fila Euro Jogger Sport están confeccionadas con materiales que las hacen más cómodas y transpirables para que las puedas usar durante todo el día. Su ajuste con cordones, mediasuela y suela de goma ofrecen amortiguación y agarre sobre cualquier superficie, mientras que su diseño se inspira en líneas deportivas para un uso urbano.",
    price: 19.58,
    discount_percentage: 0,

    stock: 23,

    sold_count: 0,
  },
  {
    item_number: "FI51U335X-4704",
    model: "Zapatillas Fila Euro Jogger Sport",
    description:
      "Las Zapatillas Fila Euro Jogger Sport están confeccionadas con materiales que las hacen más cómodas y transpirables para que las puedas usar durante todo el día. Su ajuste con cordones, mediasuela y suela de goma ofrecen amortiguación y agarre sobre cualquier superficie, mientras que su diseño se inspira en líneas deportivas para un uso urbano que destacará y completará todos tus looks.",
    price: 16.86,
    discount_percentage: 0,

    stock: 46,

    sold_count: 0,
  },
  {
    item_number: "FIF02L025-156",
    model: "Zapatilla Fila Classic",
    description:
      "Las zapatillas Fila Classic son modernas y prácticas, ideal para el día a día. Confeccionadas con materiales de calidad y un diseño con dos bandas elásticas para un mejor ajuste y adaptación del pie.",
    price: 21.54,
    discount_percentage: 0,

    stock: 24,

    sold_count: 0,
  },
  {
    item_number: "FIF01R031-2299",
    model: "Zapatillas Running Fila Heating",
    description:
      "Las Zapatillas Running Fila Heating son una opción perfecta para los corredores que buscan comodidad y rendimiento. Presentan una parte superior de malla transpirable que permite una óptima ventilación del pie durante la actividad física. Cuentan con una entresuela acolchada que brinda una excelente amortiguación y absorción de impactos, para una experiencia de carrera más suave y cómoda. La suela de goma duradera ofrece tracción y agarre en diferentes superficies, mientras que el cierre de cordones asegura un ajuste seguro. Además, su diseño moderno y elegante las convierte en una opción estilizada para cualquier corredor.",
    price: 20.37,
    discount_percentage: 0,

    stock: 15,

    sold_count: 0,
  },
  {
    item_number: "FIF01AT00064-943",
    model: "Zapatillas Entrenamiento Fila Split",
    description:
      "Las Zapatillas Training Fila Split son perfectas para tus sesiones de entrenamiento en el gimnasio o al aire libre. Con su diseño versátil y su suela duradera, te brindan estabilidad y tracción en cada movimiento. Su parte superior transpirable y suave ofrece comodidad durante tus ejercicios. Disfruta de un rendimiento óptimo y un estilo moderno con este par.",
    price: 19.07,
    discount_percentage: 0,

    stock: 35,

    sold_count: 0,
  },
  {
    item_number: "FIF01R00080-979",
    model: "Zapatillas Running Fila Progress",
    description:
      "Perfectas para tus días más activos las Zapatillas Running Fila Progress  ideales para vos que tenés la exigencia de un profesional, su construcción en malla liviana y sintético las hace ligeras y transpirables dándole a tus pies la comodidad y frescura en los momentos de mayor esfuerzo. Su diseño te hará rendir mejor en entrenamiento o en las calles de la ciudad, mientras que la espuma de doble densidad y suela de caucho con ranuras flexibles amortigua cada pisada dándote estabilidad y mejor tracción a la hora de usarlos.",
    price: 23.71,
    discount_percentage: 0,

    stock: 11,

    sold_count: 0,
  },
  {
    item_number: "FIF01AT004144-943",
    model: "Zapatillas Fila Presence",
    description:
      "Las Zapatillas Training Fila Presence fueron diseñadas pensando en los atletas. Su capellada de malla y sintético aporta el confort que necesitas para dar el 100% en cada carrera. Además, la suela de goma mejora la tracción y facilita la flexibilidad para que puedas deslizarte sobre distintas superficies las veces que quieras. Con su diseño clásico y moderno vas a poder elevar tu look deportivo a otro nivel.",
    price: 16.18,
    discount_percentage: 0,

    stock: 50,

    sold_count: 0,
  },
  {
    item_number: "FIF02AT00069-882",
    model: "Zapatilla Fila Tracer",
    description:
      "La zapatilla Fila Tracer se inspira en las zapatillas deportivas de los años 90. Con un diseño moderno y robusto, sigue la tendencia actual del streetwear. La parte superior está construida con doble malla, que proporciona una mayor respiración para el pie. Cuenta con una superposición de piezas sintéticas y de microfibra con piezas de refuerzo y resistencia en PVC. Cuenta con una correa muy resistente en la parte trasera que facilita el calce",
    price: 24.02,
    discount_percentage: 0,

    stock: 50,

    sold_count: 0,
  },
  {
    item_number: "FI11J728X-972",
    model: "Zapatillas Running Fila Recovery",
    description:
      "Con las Zapatillas Running Fila Recovery vas a salir a correr sin importar los kilómetros que hagas. Su capellada de malla proporciona máxima transpirabilidad para que mantengas tus pies frescos y secos durante todo el entrenamiento. Además, su suela de goma brinda mayor tracción para que tus pisadas sean más firmes y seguras. Ya sea que quieras salir a caminar por la ciudad o entrenar, estas zapatillas son para vos.",
    price: 41.99,
    discount_percentage: 0,

    stock: 53,

    sold_count: 0,
  },
  {
    item_number: "FI11U386X-397",
    model: "Zapatillas Fila D-Formation",
    description:
      "Las Zapatillas Fila D-Formation son un modelo pensado para la vida urbana. Fáciles de lucir, combinan confort y estilo para cualquier tipo de ocasión y temporada. Confeccionadas en cuero sintético, poseen una lengüeta acolchada y entresuela de EVA, con una importante suela extra gruesa de goma.",
    price: 27.59,
    discount_percentage: 0,

    stock: 50,

    sold_count: 0,
  },
  {
    item_number: "REFV1606",
    model: "Zapatillas Running Reebok Runner 4.0",
    description:
      "Las Zapatillas Running Reebok Runner 4.0 Hombre son ideales para los hombres que buscan comodidad y rendimiento en sus carreras. Confeccionadas con materiales transpirables y ligeros, te mantienen fresco y cómodo durante tus sesiones de running. Su diseño moderno y elegante, combinado con la tecnología de amortiguación y tracción de Reebok, te brinda el soporte necesario para alcanzar tus metas de running. Disfrutá de una experiencia de carrera excepcional con este par.",
    price: 22.69,
    discount_percentage: 0,

    stock: 50,

    sold_count: 0,
  },
  {
    item_number: "REGW5148",
    model: "Zapatillas Reebok Nano X2",
    description: "Sin Descripción",
    price: 56.69,
    discount_percentage: 0,

    stock: 50,

    sold_count: 0,
  },
  {
    item_number: "RE1475M",
    model: "Zapatillas Entrenamiento Reebok Princess",
    description: "Sin Descripción",
    price: 25.89,
    discount_percentage: 0,

    stock: 50,

    sold_count: 0,
  },
  {
    item_number: "REGY0956",
    model: "Zapatillas Running Reebok Classic Leather",
    description: "Sin Descripción",
    price: 30.19,
    discount_percentage: 0,

    stock: 50,

    sold_count: 0,
  },
  {
    item_number: "REGY7762",
    model: "Zapatillas Running Reebok Energylux 3",
    description:
      "Las Zapatillas Running Reebok Energylux 3 Mujer son la combinación perfecta de comodidad y estilo para tus carreras y entrenamientos. Con su diseño moderno y tecnología de amortiguación, te brindan una pisada suave y cómoda. Su parte superior de malla transpirable y suela de goma duradera ofrecen transpirabilidad y tracción en cada paso. Superá tus metas y disfrutá de una experiencia de running excepcional con tus nuevas elegidas!",
    price: 23.09,
    discount_percentage: 0,

    stock: 50,

    sold_count: 0,
  },
  {
    item_number: "REIE1942",
    model: "Zapatillas Reebok Energen Lite Vector Hombre",
    description:
      "Con las Zapatillas Reebok Energen Lite Vector Hombre tus pisadas van a ser mucho más livianas. La parte inferior FuelFoam amortigua cada paso y brinda comodidad durante todo el día. Tus pies se mantienen frescos gracias a la parte superior de malla transpirable, y las superposiciones específicas en el talón y la puntera agregan una sensación de apoyo a tu paso.",
    price: 17.09,
    discount_percentage: 0,
    stock: 50,

    sold_count: 0,
  },
  {
    item_number: "REGW5152",
    model: "Zapatillas Reebok Nano X2",
    description: "Sin descripción",
    price: 56.699,
    discount_percentage: 0,

    stock: 50,

    sold_count: 0,
  },
  {
    item_number: "REGX8757",
    model: "Zapatillas Reebok Nano X2",
    description:
      "Las Zapatillas Reebok Nano X2 llevan tu entrenamiento al siguiente nivel. Mantenete seguro dentro o fuera del gimnasio. Tienen una parte superior tejida Flexweave® que es transpirable y duradera, con soporte integrado para un movimiento estable en todas las direcciones. La suela exterior de goma te brinda una tracción segura",
    price: 56.69,
    discount_percentage: 0,

    stock: 50,

    sold_count: 0,
  },
  {
    item_number: "REGY7716",
    model: "Zapatillas Reebok Ztaur Run Hombre",
    description:
      "Experimenta el poder de la velocidad con las Zapatillas Reebok Ztaur Run. Diseñadas para llevar tu rendimiento al máximo nivel, estas zapatillas son el sueño de todo corredor. Su capellada transpirable te mantiene fresco y seco incluso en los entrenamientos más intensos, mientras que el diseño sin costuras garantiza un ajuste perfecto y sin molestias. La suela de caucho ofrece tracción y durabilidad excepcionales, brindándote la confianza necesaria para conquistar cada paso. Ya sea que estés corriendo en el asfalto o desafiando senderos, ponete en movimiento y alcanza nuevas velocidades con estas zapatillas de alto rendimiento que te llevarán más allá de tus límites.",
    price: 26.29,
    discount_percentage: 0,

    stock: 50,

    sold_count: 0,
  },
  {
    item_number: "REGY5197",
    model: "Zapatillas Reebok Energen Lite Hombre",
    description:
      "Las Zapatillas Reebok Energen Lite Hombre son ideales para tus actividades deportivas y diarias. Confeccionadas con materiales ligeros y transpirables, te brindan comodidad y amortiguación en cada paso. Su diseño moderno y versátil se combina con una suela resistente para una tracción confiable. Tanto si las usas para correr, entrenar o para tu estilo urbano, te ofrecen rendimiento y estilo en un mismo combo.",
    price: 19.49,
    discount_percentage: 0,

    stock: 50,

    sold_count: 0,
  },
  {
    item_number: "UA458FR",
    model: "Zapatillas Under Armour Charged Slight",
    description:
      "Las Zapatillas Under Armour Charged Slight tiene un diseño limpio que proporciona un aspecto moderno y versátil. La capaellada con superposición de laminado de TPU translúcido y cerrado, realzando la parte superior. La tecnología Charged te otorga mayor comodidad y propulsión.",
    price: 32.49,
    discount_percentage: 0,

    stock: 30,

    sold_count: 0,
  },
  {
    item_number: "UA45SF",
    model: "Zapatillas Under Armour Charged Slight Lam",
    description:
      "Las Zapatillas Under Armour Charged Slight Lam tiene un diseño limpio que proporciona un aspecto moderno y versátil. La capaellada con superposición de laminado de TPU translúcido y cerrado, realzando la parte superior. La tecnología Charged te otorga mayor comodidad y propulsión.",
    price: 33.59,
    discount_percentage: 0,

    stock: 20,

    sold_count: 0,
  },
  {
    item_number: "UAF245",
    model: "Zapatillas Training Under Armour Charged Engage 2 Hombre",
    description:
      "Las Zapatillas Training Under Amour Charged Engage 2 Hombre tienen una suela de goma resistente y una parte superior de malla transpirable que proporciona comodidad y soporte durante los entrenamientos. La tecnología Charged Cushioning en la entresuela ofrece una amortiguación receptiva, mientras que la suela exterior de goma proporciona tracción y durabilidad. Perfectas para entrenamientos de alta intensidad, son especiales si estás buscando elevar tus entrenamientos a un próximo nivel",
    price: 35.99,
    discount_percentage: 0,

    stock: 25,

    sold_count: 0,
  },
  {
    item_number: "UA354df",
    model: "Zapatillas Under Armour Hovr Phantom",
    description:
      "Si buscas un calzado para mejorar tu estabilidad, con un tejido flexible y amortiguación eficaz, las Zapatillas Under Armour Hovr Phantom son para vos. La tecnología UA HOVR™ ofrece suavidad a tus pisadas y un excelente retorno de energía. El tejido IntelliKnit es ligero y ultra-transpirable, además de aporta ligereza y flexibilidad para mejorar el calce. La suela de goma optimiza la tracción y la durabilidad y las piezas rígidas mejoran tu estabilidad para que nada te frene.",
    price: 59.99,
    discount_percentage: 0,

    stock: 30,

    sold_count: 0,
  },
  {
    item_number: "UA4560D",
    model: "Zapatillas Under Armour Charged Pursuit 3",
    description:
      "Atravesá tus límites con las Zapatillas Under Armour Charged Pursuit 3, un calzado que promete ligereza y flexibilidad. Hechas con mesh liviano que asegura libertad de tus movimientos y comodidad, mientras que sus recortes sintéticos son el soporte necesario para garantizar durabilidad y un buen ajuste. Cuenta con una plantilla de espuma que mejora tus pisadas haciendo que no puedas parar de usarlas. La tecología Charged Cushioning es la frutilla del postre en estas zapatillas: ofrece máxima durabilidad y reactividad cuando estás dando tu máximo esfuerzo. La suela de goma crea una tracción perfecta a la superficie, para que no tengas nada de qué preocuparte. ¿No esperabas tanto de unas zapatillas de entrenamiento, no?",
    price: 26.99,
    discount_percentage: 0,

    stock: 10,

    sold_count: 0,
  },
  {
    item_number: "UA23F4",
    model: "Zapatilla Running Under Armour Phade Rn Hombre",
    description:
      "Mejorá tus marcas con las Zapatillas Running Under Armour Phade Rn Hombre. Un par que te mantiene listo para cada carrera gracias a su parte superior en mesh ligero que te brinda libertad de movimiento y la amortiguación que mejora cada uno de tus aterrizajes. Una suela de goma ofrece tracción en cada superficie. Con este par se renuevan los objetivos!",
    price: 24.99,
    discount_percentage: 0,

    stock: 20,

    sold_count: 0,
  },
  {
    item_number: "UA423FS",
    model: "Zapatillas Training Under Armour Hovr Sonic 5 Hombre",
    description:
      "Las Zapatillas Training Under Armour HOVR Sonic 5 Hombre tienen un diseño moderno y aerodinámico, con tecnología UA HOVR para una sensación de gravedad cero que devuelve la energía y reduce el impacto en cada pisada. También cuentan con una suela exterior de goma resistente para mayor durabilidad y tracción, y una parte superior de malla transpirable para mantener tus pies frescos y cómodos durante todo el entrenamiento.",
    price: 53.99,
    discount_percentage: 0,

    stock: 35,

    sold_count: 0,
  },
  {
    item_number: "UAF6A5",
    model: "Zapatilla Running Under Armour Charged Rogue Hombre",
    description:
      "Las Zapatillas Running Under Armour Charged Rogue Hombre están confeccionadas en su parte superior con malla especialmente creada para convertirse ligera y transpirable, además de tener soportes estratégicos en donde más los necesitás. La entresuela doble combina Micro G® con Charged Cushioning® para proporcionar la mejor combinación entre comodidad y retorno de energía. La suela de goma protege tus pies de mayor impacto y brinda una mayor durabilidad. Hechas para correr kilómetros, sin importar día ni horario.",
    price: 28.99,
    discount_percentage: 0,

    stock: 20,

    sold_count: 0,
  },
  {
    item_number: "UA544D",
    model: "Zapatillas Under Armour Project Rock 5 Black Adam",
    description:
      "Las Zapatillas Under Armour Project Rock te alistan para alcanzar tus límites e incluso, superarlos. Su estructura hecha en una parte superior de malla transpirable, es la mejor opción para que te mantengas concentrado en duplicar tus objetivos, sin preocupaciones. Entrega libertad al movimiento, frescura y ligereza. Al mismo tiempo, un cuello acolchado te brinda el confort necesario para tu tiempo de entrenamiento y la amortiguación UA HOVR ofrece una capacidad de respuesta, disminuyendo el impacto, devuelvonviendo la energía gastada y te impulsa hacia adelante. La UA TriBase es una suela que facilita el contacto con el suelo y el movimiento natural a la vez que flexibiliza el movimiento para el agarre de levantamiento. ¿Tenés alguna duda de que esta es el calzado que buscabas?",
    price: 27.99,
    discount_percentage: 0,

    stock: 20,

    sold_count: 0,
  },
  {
    item_number: "UA523F",
    model: "Zapatillas Under Armour Proyect Rock Rock",
    description: "...",
    price: 39.99,
    discount_percentage: 0,

    stock: 25,

    sold_count: 0,
  },
  {
    item_number: "UA1456D",
    model: "Zapatillas Training Under Armour Project Rock 5 Disrupt Hombre",
    description:
      "Con las Zapatillas Training de Entrenamiento Project Rock Disrupt Hombre te convertirás en el más fuerte. Están confeccionadas en una parte superior de mesh resistente pero te permite ejecutar tus movimientos libremente y sin incomodidad. Incorpora un soporte de TPU para mejorar la estructura y estabilidad en cada una de tus posiciones y levantamientos mientras que la amortiguación UA HOVR reduce el impacto y te devuelve energía para que sigas dando lo mejor de vos. Como si no fuera suficiente, se suma la tecnología UA TriBase para maximizar el contacto con el suelo y mejora tu movilidad haciéndola más natural y menos forzada. Su diseño te destaca dentro y fuera del gimnasio. Dejá atrás tus marcas viejas y anotá las nuevas con este par!",
    price: 58.99,
    discount_percentage: 0,

    stock: 15,

    sold_count: 0,
  },
  {
    item_number: "C658E",
    model: "Zapatillas Converse Chuck Taylor All Star Lift Hi",
    description:
      "Las Zapatillas Converse Chuck Taylor All Star Lift Hi están confeccionadas en lona con un diseño elegante y caña media. El ajuste con sistema de cordones te ofrece el control necesario para todos tus días y su clásica suela marca un estilo de herencia para lucir con todos tus outfits.",
    price: 34.49,
    discount_percentage: 0,

    stock: 30,

    sold_count: 0,
  },
  {
    item_number: "C654Fd",
    model: "Zapatillas Converse Chuck Taylor All Star Lift Ox",
    description:
      "Las Zapatillas Converse Chuck Taylor All Star Lift son un clásico que no puede faltar en tu ropero. Su diseño moderno es ideal para lucir hasta en las salidas menos planeadas gracias a su capellada de lona resistente y una plataforma digna de Converse.",
    price: 33.59,
    discount_percentage: 0,

    stock: 40,

    sold_count: 0,
  },
  {
    item_number: "C354D",
    model: "Zapatillas Converse Chuck Taylor All Star Core Ox",
    description:
      "Si buscas unas zapatillas para usar a toda hora y en todo lugar, las Zapatillas Converse Chuck Taylor All Star Core Ox son para vos. Te dan la versatilidad que quieres para combinarlas con lo mejor que tengas en el ropero sin perder el estilo y la comodidad.",
    price: 35.99,
    discount_percentage: 0,

    stock: 25,

    sold_count: 0,
  },
  {
    item_number: "C456S",
    model: "Zapatillas Converse Ct All Star Platform Hi",
    description:
      "Si buscas un calzado para mejorar tu estabilidad, con un tejido flexible y amortiguación eficaz, las Zapatillas Converse son para vos.",
    price: 29.99,
    discount_percentage: 0,

    stock: 30,

    sold_count: 0,
  },
  {
    item_number: "CD875",
    model: "Zapatillas Converse Chuck Taylor Core Ox",
    description:
      "Si buscas unas zapatillas para usar a toda hora y en todo lugar, las Zapatillas Converse Chuck Taylor Core Ox son para vos. Te dan la versatilidad que quieres para combinarlas con lo mejor que tengas en el ropero sin perder el estilo y la comodidad.",
    price: 26.99,
    discount_percentage: 0,

    stock: 25,

    sold_count: 0,
  },
  {
    item_number: "Co492483-900",
    model: "Zapatillas Converse Chuck Taylor All Star Lift Ox",
    description:
      "Las Zapatillas Converse Chuck Taylor All Star Lift son un clásico que no puede faltar en tu ropero. Su diseño moderno es ideal para lucir hasta en las salidas menos planeadas gracias a su capellada de lona resistente y una plataforma digna de Converse.",
    price: 33.59,
    discount_percentage: 0,

    stock: 40,

    sold_count: 0,
  },
  {
    item_number: "Co438928-500",
    model: "Zapatillas Converse Chuck Taylor All Star Core Ox",
    description:
      "Si buscas unas zapatillas para usar a toda hora y en todo lugar, las Zapatillas Converse Chuck Taylor All Star Core Ox son para vos. Te dan la versatilidad que quieres para combinarlas con lo mejor que tengas en el ropero sin perder el estilo y la comodidad.",
    price: 35.99,
    discount_percentage: 0,

    stock: 25,

    sold_count: 0,
  },
  {
    item_number: "Co4925803-400",
    model: "Zapatillas Converse Ct All Star Platform Hi",
    description:
      "Si buscas un calzado para mejorar tu estabilidad, con un tejido flexible y amortiguación eficaz, las Zapatillas Converse son para vos.",
    price: 29.99,
    discount_percentage: 0,

    stock: 30,

    sold_count: 0,
  },
  {
    item_number: "co4543985-700",
    model: "Zapatillas Converse Chuck Taylor Core Ox",
    description:
      "Si buscas unas zapatillas para usar a toda hora y en todo lugar, las Zapatillas Converse Chuck Taylor Core Ox son para vos. Te dan la versatilidad que quieres para combinarlas con lo mejor que tengas en el ropero sin perder el estilo y la comodidad.",
    price: 26.99,
    discount_percentage: 0,

    stock: 25,

    sold_count: 0,
  },
  {
    item_number: "co435454-100",
    model: "Zapatillas Converse Chuck Taylor All Star Lift Ox",
    description:
      "Las Zapatillas Converse Chuck Taylor All Star Lift Ox son un clásico que no puede faltar en tu ropero. Su diseño moderno es ideal para lucir hasta en las salidas menos planeadas gracias a su capellada de lona resistente y una plataforma digna de Converse.",
    price: 34.99,
    discount_percentage: 0,

    stock: 30,

    sold_count: 0,
  },
  {
    item_number: "co354244-150",
    model: "Zapatillas Converse Ct All Star Platform Ox",
    description:
      "Las Zapatillas Converse Chuck Taylor All Star Lift Ox son un clásico que no puede faltar en tu ropero. Su diseño moderno es ideal para lucir hasta en las salidas menos planeadas gracias a su capellada de lona resistente y una plataforma digna de Converse.",
    price: 33.99,
    discount_percentage: 0,

    stock: 35,
  },
  {
    item_number: "co637737-670",
    model: "Zapatillas Converse Chuck Taylor Core Ox",
    description:
      "Si buscas unas zapatillas para usar a toda hora y en todo lugar, las Zapatillas Converse Chuck Taylor Core Ox son para vos. Te dan la versatilidad que quieres para combinarlas con lo mejor que tengas en el ropero sin perder el estilo y la comodidad.",
    price: 34.99,
    discount_percentage: 0,

    stock: 20,

    sold_count: 0,
  },
  {
    item_number: "co637737-270",
    model: "Zapatillas Converse Pro Blaze V2 Hombre",
    description:
      "Las Zapatillas Converse Pro Blaze V2 Hombre presentan una silueta inspirada en el estilo urbano. Converse Pro Blaze, con una correa de nylon ajustable y extraíble que te mantiene a vos y a tu estilo seguros. Una suela exterior de goma inspirada en la cancha le brinda la tracción adecuada, con una plantilla Converse Comfort Cushioning para brindar soporte a cada paso.",
    price: 42.99,
    discount_percentage: 0,

    stock: 20,
    sold_count: 0,
  },
  {
    item_number: "co637737-470",
    model: "Zapatillas Converse Chuck Taylor All Star Malden Street Mid Hombre",
    description: "...",
    price: 39.99,
    discount_percentage: 0,

    stock: 25,
    sold_count: 0,
  },
  {
    item_number: "co637737-890",
    model: "Zapatillas Converse All Star Bb Jet Sun Gradient Hombre",
    description:
      "Las Zapatillas Converse All Star Bb Jet Sun Gradient Hombre están diseñadas para que te destaques paso a paso. Confeccionada con malla deportiva ligera y transpirable. La amortiguación Nike Zoom en el talón y la parte delantera del pie brinda soporte reactivo, mientras que una placa Converse Speed ​​Plate adicional en la parte delantera del pie te otorga rapidez y agilidad.",
    price: 78.99,
    discount_percentage: 0,

    stock: 10,
    sold_count: 0,
  },
];
module.exports = {
  netProducts,
  products,
  colors,
  brands,
  categories,
  rating,
  gender,
  sizes,
  images,
};
