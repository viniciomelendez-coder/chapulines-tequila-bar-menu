// ============================================================
// CHAPULINES TEQUILA BAR — MENU DATA
// Edita precios, fotos, ingredientes y descripciones aquí.
// Las imágenes van en: /public/assets/drinks/
// ============================================================

export const categories = [
  { id: "tragos",     label: "Los Tragos",     emoji: "🍹", subtitle: "para brindar bonito" },
  { id: "margaritas", label: "Margaritas",      emoji: "🍋", subtitle: "clásicas & especiales" },
  { id: "mezcal",     label: "Mezcal Drinks",  emoji: "🥃", subtitle: "artesanal & con alma" },
  { id: "cervezas",   label: "Cervezas",        emoji: "🍺", subtitle: "una chela bien fría" },
];

// ── TAGS disponibles ──────────────────────────────────────
// Fresh | Spicy | Classic | Premium | House Favorite |
// Tropical | Smoky | Floral | Bold | Light | Frozen

export const tragos = [
  {
    id: "zenzonte-paloma",
    name: "Zenzonte Paloma",
    price: 9,
    image: "/assets/drinks/zenzonte-paloma.jpg",
    tags: ["Fresh", "Classic", "House Favorite"],
    ingredients: ["Zenzonte Blanco Tequila", "Jugo de limón fresco", "Soda de toronja", "Sal"],
    spirit: {
      name: "Zenzonte Blanco",
      type: "Tequila Blanco 100% Agave Azul",
      origin: "Jalisco, México",
      notes: "Cítrico, floral, limpio y con un final suave. Ideal para cócteles frutales."
    },
    description: "La versión mexicana del Paloma clásico — refrescante, ligera y perfecta para el calor.",
    preparation: "Se construye directamente en vaso con hielo. Tequila + limón fresco, se agrega la soda de toronja lentamente para conservar el gas y se termina con una pizca de sal en el borde.",
    history: "La Paloma es uno de los cócteles más populares de México, posiblemente más consumida en el país que la margarita misma. Su nombre, que significa 'paloma', evoca ligereza y frescura.",
    funFact: "En muchas cantinas del norte de México, la Paloma se prepara con Squirt en lugar de soda de toronja artesanal.",
    pairing: "Tacos de camarón, ceviche, ensaladas frescas.",
    levels: { sweetness: 3, acidity: 4, intensity: 2, spice: 0 },
    responsibleMessage: "Disfruta con responsabilidad. No manejes después de consumir alcohol."
  },
  {
    id: "michelada",
    name: "Michelada",
    price: 8,
    image: "/assets/drinks/michelada.jpg",
    tags: ["Spicy", "Classic", "House Favorite"],
    ingredients: ["Cerveza lager", "Santos Miche Mix", "Jugo de limón", "Salsa picante"],
    spirit: {
      name: "Cerveza Lager",
      type: "Cerveza de Malta",
      origin: "México",
      notes: "Ligera, carbonatada y de sabor suave, ideal para mezclar con cítricos y chile."
    },
    description: "El cóctel de cerveza más icónico de México. Sabor intenso, picante y profundamente satisfactorio.",
    preparation: "Vaso chelero escarchado con limón y sal. Se mezcla el miche mix con limón y salsa al gusto en el fondo. Se vierte la cerveza fría poco a poco para conservar el gas.",
    history: "Aunque su origen exacto no está completamente documentado, la michelada forma parte de la cultura popular mexicana desde mediados del siglo XX. Se popularizó como el remedio perfecto para la 'cruda' y se convirtió en símbolo de las mañanas dominicales.",
    funFact: "El nombre posiblemente viene de 'Mi chela helada' — 'mi cerveza helada' en el argot mexicano.",
    pairing: "Tacos, mariscos, comida picante en general.",
    levels: { sweetness: 1, acidity: 3, intensity: 3, spice: 4 },
    responsibleMessage: "Disfruta con responsabilidad. No manejes después de consumir alcohol."
  },
  {
    id: "cantarito",
    name: "Cantarito",
    price: 14,
    image: "/assets/drinks/cantarito.jpg",
    tags: ["Classic", "Premium", "Fresh"],
    ingredients: ["Tapatio Blanco Tequila", "Jugo de limón", "Jugo de naranja", "Soda de toronja"],
    spirit: {
      name: "Tapatio Blanco",
      type: "Tequila Blanco 100% Agave",
      origin: "La Magdalena, Jalisco, México",
      notes: "Robusto, herbáceo, con notas de agave cocido. Carácter auténtico y artesanal."
    },
    description: "El trago festivo por excelencia de las ferias y mercados de Jalisco. Servido en barro para una experiencia auténtica.",
    preparation: "Los jugos cítricos van primero, luego el tequila, se completa con soda de toronja. El barro de la copa aporta minerales únicos y mantiene el trago frío por más tiempo.",
    history: "El cantarito nació en las ferias populares de Jalisco, donde los vendedores ambulantes lo servían en pequeñas vasijas de barro. El barro le da un sabor mineral único que ningún vaso de vidrio puede replicar.",
    funFact: "Tapatio es una de las destilerías más respetadas de México, conocida por producir tequila de manera semi-artesanal con métodos tradicionales.",
    pairing: "Carnitas, pozole, birria.",
    levels: { sweetness: 3, acidity: 4, intensity: 3, spice: 0 },
    responsibleMessage: "Disfruta con responsabilidad. No manejes después de consumir alcohol."
  },
  {
    id: "old-fashion",
    name: "Old Fashion",
    price: 12,
    image: "/assets/drinks/old-fashion.jpg",
    tags: ["Classic", "Premium", "Bold"],
    ingredients: ["Bourbon americano", "Angostura bitters", "Cáscara de naranja", "Cereza maraschino"],
    spirit: {
      name: "Bourbon Americano",
      type: "Whiskey de Maíz Añejado en Roble",
      origin: "Kentucky / Tennessee, EE.UU.",
      notes: "Vainilla, caramelo, especias cálidas. Roble al final. Suave y complejo."
    },
    description: "Uno de los cócteles más antiguos documentados en la historia. Minimalismo puro y sabor impecable.",
    preparation: "Azúcar con bitters y unas gotas de agua se muelen en el vaso. Se añade el bourbon sobre hielo grande y se revuelve despacio — nunca se agita — para enfriar sin diluir. Se exprime la piel de naranja sobre la copa.",
    history: "El Old Fashioned es considerado el cóctel original, documentado por primera vez en 1806. Su nombre viene de las instrucciones que los bebedores daban a los bartenders: 'prepárame uno a la antigua'.",
    funFact: "La receta del Old Fashioned tiene más de 200 años y prácticamente no ha cambiado desde su creación.",
    pairing: "Carne asada, quesos maduros, chocolates oscuros.",
    levels: { sweetness: 2, acidity: 1, intensity: 5, spice: 1 },
    responsibleMessage: "Disfruta con responsabilidad. No manejes después de consumir alcohol."
  },
  {
    id: "zenzonte-water",
    name: "Zenzonte Water",
    price: 9,
    image: "/assets/drinks/zenzonte-water.jpg",
    tags: ["Fresh", "Light", "Classic"],
    ingredients: ["Ocho Blanco Tequila", "Topo Chico", "Jugo de limón", "Sal"],
    spirit: {
      name: "Ocho Blanco",
      type: "Tequila Blanco de Añada Única (Vintage)",
      origin: "Arandas, Jalisco, México",
      notes: "Vegetal, cítrico, mineral. Cada botella indica el año y rancho de cosecha. Carácter de agave puro."
    },
    description: "Highball minimalista que deja brillar al tequila premium. Elegante y sin complicaciones.",
    preparation: "Tequila Ocho sobre hielo grande. Topo Chico frío vertido despacio para conservar las burbujas. Limón exprimido al momento. Pizca de sal. Sin adornos — la calidad del tequila habla sola.",
    history: "Ocho es un tequila pionero en el concepto de 'añada' o 'vintage' — similar a como se etiquetan los vinos. Cada expresión refleja el terroir específico del rancho y el año de cosecha.",
    funFact: "Topo Chico, el agua mineral que lo acompaña, tiene más de 120 años de historia y es originaria de Monterrey, México.",
    pairing: "Sushi, aguachile, ensaladas de mar.",
    levels: { sweetness: 1, acidity: 3, intensity: 2, spice: 0 },
    responsibleMessage: "Disfruta con responsabilidad. No manejes después de consumir alcohol."
  },
  {
    id: "vampiro",
    name: "Vampiro",
    price: 10,
    image: "/assets/drinks/vampiro.jpg",
    tags: ["Spicy", "Bold", "House Favorite"],
    ingredients: ["Agaveal Blanco Tequila", "Sangrita artesanal", "Jugo de limón", "Pizca de sal", "Tajín rim"],
    spirit: {
      name: "Agaveal Blanco",
      type: "Tequila Blanco 100% Agave Azul",
      origin: "Jalisco, México",
      notes: "Herbáceo, mineral, con notas de agave fresco. Limpio y versátil."
    },
    description: "Un cóctel multidimensional: cítrico, picante, dulce y con notas de chile — todo al mismo tiempo.",
    preparation: "Copa escarchada con Tajín. Se mezcla el tequila con la sangrita picante y el limón en coctelera con hielo. Se sirve en copa fría. El Tajín en el borde potencia el picante en cada sorbo.",
    history: "La sangrita es la acompañante histórica del tequila en México, especialmente en Jalisco. La combinación de tequila con sangrita en un mismo vaso da origen al Vampiro, un trago de cantina con décadas de historia.",
    funFact: "La sangrita original se hacía con jugo de granada, naranja agria y chile — la receta varía por región y familia.",
    pairing: "Tacos de barbacoa, enchiladas rojas, mole.",
    levels: { sweetness: 2, acidity: 3, intensity: 3, spice: 4 },
    responsibleMessage: "Disfruta con responsabilidad. No manejes después de consumir alcohol."
  },
  {
    id: "charro-negro",
    name: "Charro Negro",
    price: 10,
    image: "/assets/drinks/charro-negro.jpg",
    tags: ["Classic", "Bold", "House Favorite"],
    ingredients: ["El Tequileño Blanco", "Mexican Coke", "Jugo de limón", "Sal"],
    spirit: {
      name: "El Tequileño Blanco",
      type: "Tequila Blanco 100% Agave",
      origin: "Tequila, Jalisco, México — desde 1959",
      notes: "Intenso, con notas de agave cocido y un final herbáceo. Carácter de destilería tradicional."
    },
    description: "El cóctel favorito de los charros. Tequila intenso con el dulzor único del Coca-Cola mexicana.",
    preparation: "Hielo en vaso alto, tequila, limón exprimido y el Mexican Coke se vierte lentamente por el costado del vaso. El Coke de México usa azúcar de caña real — diferente y mejor que el jarabe de maíz.",
    history: "El Charro Negro es una variante tequilera del Cuba Libre, adaptada con tequila blanco y el Mexican Coke icónico. Su nombre evoca la figura del charro mexicano — elegante, audaz y con carácter.",
    funFact: "El Coca-Cola embotellado en México con azúcar de caña tiene una fórmula diferente al de EE.UU. y un sabor notablemente distinto.",
    pairing: "Quesadillas, carne asada, tortas.",
    levels: { sweetness: 3, acidity: 2, intensity: 3, spice: 0 },
    responsibleMessage: "Disfruta con responsabilidad. No manejes después de consumir alcohol."
  },
  {
    id: "acapulco-de-noche",
    name: "Acapulco de Noche",
    price: 11,
    image: "/assets/drinks/acapulco-de-noche.jpg",
    tags: ["Tropical", "Bold", "Fresh"],
    ingredients: ["Agaveal Blanco Tequila", "Ron caribeño", "Jugo de naranja", "Piña fresca", "Sugar rim"],
    spirit: {
      name: "Agaveal Blanco",
      type: "Tequila Blanco 100% Agave Azul",
      origin: "Jalisco, México",
      notes: "Herbáceo, mineral, con notas de agave fresco. Limpio y versátil."
    },
    description: "Fusión audaz entre el agave mexicano y el ron caribeño. Un trago que te lleva al malecón de Acapulco.",
    preparation: "Escarchazo de azúcar en el borde. En coctelera con hielo: tequila, ron, OJ y piña fresca. Agitar 15 segundos para integrar bien. Servir en vaso con hielo y decorar con rodaja de piña.",
    history: "Aunque su origen exacto no está completamente documentado, este trago forma parte de la cultura popular mexicana de las décadas de los 70s y 80s, evocando la era dorada del turismo en Acapulco.",
    funFact: "Acapulco fue el destino turístico más glamoroso de México en los 60s y 70s, frecuentado por celebridades internacionales como Frank Sinatra y John Wayne.",
    pairing: "Mariscos, ceviche, cocteles de frutas.",
    levels: { sweetness: 4, acidity: 3, intensity: 3, spice: 0 },
    responsibleMessage: "Disfruta con responsabilidad. No manejes después de consumir alcohol."
  },
];

export const margaritas = [
  {
    id: "frozen",
    name: "Frozen",
    price: 8,
    image: "/assets/drinks/frozen-margarita.jpg",
    tags: ["Frozen", "Classic", "Fresh"],
    options: ["Lime", "Tamarind"],
    ingredients: ["Gold Tequila", "Orange Liqueur", "Sweet & Sour mix", "Sal", "Opción: Limón o Tamarindo"],
    spirit: {
      name: "Gold Tequila",
      type: "Tequila Joven / Gold",
      origin: "Jalisco, México",
      notes: "Suave, con coloración natural de caramel. Accesible y perfecto para mezclar en frozen."
    },
    description: "La margarita más festiva. Textura de nieve, sabor clásico, temperatura perfecta.",
    preparation: "Todo al blender con hielo abundante: tequila, licor de naranja y la mezcla sweet & sour. Blend hasta textura nieve perfecta. Copa escarchada con sal. Elige limón clásico o tamarindo para el sabor.",
    history: "La margarita frozen fue popularizada en 1971 cuando Mariano Martinez, en Dallas Texas, adaptó una máquina de Slurpee para hacer margaritas. Su invención democratizó el cóctel y lo llevó a todo el mundo.",
    funFact: "La máquina de margaritas frozen original de Mariano Martinez está exhibida en el Smithsonian Institution en Washington D.C.",
    pairing: "Nachos, guacamole, alitas.",
    levels: { sweetness: 4, acidity: 3, intensity: 2, spice: 0 },
    responsibleMessage: "Disfruta con responsabilidad. No manejes después de consumir alcohol."
  },
  {
    id: "skinny",
    name: "Skinny",
    price: 9,
    image: "/assets/drinks/skinny-margarita.jpg",
    tags: ["Fresh", "Light", "Classic"],
    ingredients: ["Zenzonte Blanco Tequila", "Jugo de limón", "Jugo de limón amarillo", "Orange Liqueur", "Salt rim"],
    spirit: {
      name: "Zenzonte Blanco",
      type: "Tequila Blanco 100% Agave Azul",
      origin: "Jalisco, México",
      notes: "Cítrico, floral, limpio. Ideal para versiones 'skinny' con menos calorías y más sabor real."
    },
    description: "Sin azúcar añadida ni mezclas artificiales. Solo tequila premium y cítricos frescos.",
    preparation: "Coctelera con hielo: tequila, ambos jugos y licor de naranja. Agitar fuerte 12 segundos. Doble colar en copa escarchada con sal. Limpia, brillante y honesta.",
    history: "La Skinny Margarita nació de la tendencia health-conscious de los años 2000, eliminando jarabes y mezclas artificiales para reducir calorías sin sacrificar sabor.",
    funFact: "Una margarita clásica puede tener hasta 400 calorías. La versión skinny ronda las 150-180.",
    pairing: "Ensaladas, sashimi, aguachile ligero.",
    levels: { sweetness: 2, acidity: 5, intensity: 2, spice: 0 },
    responsibleMessage: "Disfruta con responsabilidad. No manejes después de consumir alcohol."
  },
  {
    id: "black-berrie",
    name: "Black Berrie",
    price: 9,
    image: "/assets/drinks/black-berrie.jpg",
    tags: ["Fresh", "Floral", "House Favorite"],
    ingredients: ["El Tequileño Blanco", "Moras frescas (muddled)", "Orange Liqueur", "Jugo de limón", "Agave syrup", "Salt rim"],
    spirit: {
      name: "El Tequileño Blanco",
      type: "Tequila Blanco 100% Agave",
      origin: "Tequila, Jalisco, México — desde 1959",
      notes: "Intenso, herbáceo. Sus notas fuertes contrastan perfecto con la dulzura natural de las moras."
    },
    description: "Color morado intenso, sabor frutal y sofisticado. Las moras se muelen al momento para máximo frescor.",
    preparation: "Las moras se muelen (muddle) en la coctelera para liberar su jugo naturalmente. Se añaden los demás ingredientes con hielo. Shake vigoroso. Doble colar para textura suave. El color morado intenso es completamente natural.",
    history: "La tendencia de incorporar frutas de temporada frescas a las margaritas clásicas es relativamente moderna, surgida en los años 90s con el movimiento de coctelería artesanal.",
    funFact: "Las moras contienen antioxidantes naturales que le dan a esta margarita un color morado vibrante sin colorantes artificiales.",
    pairing: "Quesos frescos, charcutería, chocolate.",
    levels: { sweetness: 4, acidity: 3, intensity: 2, spice: 0 },
    responsibleMessage: "Disfruta con responsabilidad. No manejes después de consumir alcohol."
  },
  {
    id: "spicy",
    name: "Spicy",
    price: 9,
    image: "/assets/drinks/spicy-margarita.jpg",
    tags: ["Spicy", "Bold", "House Favorite"],
    ingredients: ["Tanteo Jalapeño Tequila", "Orange Liqueur", "Jugo de limón fresco", "Agave syrup", "Tajín rim"],
    spirit: {
      name: "Tanteo Jalapeño",
      type: "Tequila 100% Agave Infusionado con Jalapeño",
      origin: "Jalisco, México",
      notes: "Picante natural y progresivo, sin abrumar. Notas de jalapeño fresco. Pionero en tequilas infusionados."
    },
    description: "El picante llega gradual y crece en cada sorbo. Copa escarchada con Tajín que intensifica el calor.",
    preparation: "Copa escarchada con Tajín. Coctelera con hielo: tequila jalapeño, licor de naranja, limón fresco y un toque de agave para equilibrar el picante. Agitar fuerte. El calor del chile aparece gradual.",
    history: "El tequila infusionado con jalapeño es un concepto relativamente reciente en el mundo de la coctelería, popularizado en EE.UU. durante los años 2010s con el auge de las margaritas picantes.",
    funFact: "Tanteo fue uno de los primeros tequilas en mercadear activamente el concepto de 'infused tequila' a nivel masivo.",
    pairing: "Mariscos picantes, alitas bufalo, elote con chile.",
    levels: { sweetness: 2, acidity: 3, intensity: 3, spice: 5 },
    responsibleMessage: "Disfruta con responsabilidad. No manejes después de consumir alcohol."
  },
  {
    id: "sassy-rita",
    name: "Sassy Rita",
    price: 11,
    image: "/assets/drinks/sassy-rita.jpg",
    tags: ["Floral", "Premium", "Fresh"],
    ingredients: ["Ocho Reposado Tequila", "St-Germain Elderflower", "Jugo de limón", "Agave syrup", "Salt rim"],
    spirit: {
      name: "Ocho Reposado",
      type: "Tequila Reposado de Añada Única",
      origin: "Arandas, Jalisco, México",
      notes: "Añejado 8 semanas en barrica de roble. Notas de vainilla y especias suaves que complementan las flores."
    },
    description: "La margarita más elegante. El tequila reposado y el St-Germain floral crean una combinación inesperadamente perfecta.",
    preparation: "Coctelera con hielo: tequila, St-Germain, limón fresco y agave. Shake fuerte. Copa escarchada con sal. El resultado: floral en nariz, cítrica en paladar, con cuerpo del roble al final.",
    history: "St-Germain, el licor de flor de saúco francés, fue lanzado en 2007 y rápidamente se convirtió en el ingrediente favorito de bartenders creativos alrededor del mundo para elevar cócteles clásicos.",
    funFact: "St-Germain se elabora con flores de saúco cosechadas a mano cada primavera en los Alpes franceses. La ventana de cosecha dura solo pocas semanas.",
    pairing: "Mariscos frescos, quesos suaves, sushi.",
    levels: { sweetness: 3, acidity: 3, intensity: 2, spice: 0 },
    responsibleMessage: "Disfruta con responsabilidad. No manejes después de consumir alcohol."
  },
  {
    id: "presidente",
    name: "Presidente",
    price: 12,
    image: "/assets/drinks/presidente-margarita.jpg",
    tags: ["Premium", "Bold", "Classic"],
    ingredients: ["Degollado Reposado", "Brandy Presidente", "Orange Liqueur", "Jugo de limón", "Agave syrup", "Salt rim"],
    spirit: {
      name: "Degollado Reposado + Brandy Presidente",
      type: "Tequila Reposado + Brandy de Uva",
      origin: "Jalisco, México / México",
      notes: "Doble espirituoso mexicano. El reposado aporta agave y roble. El Brandy Presidente añade profundidad frutal."
    },
    description: "La más imponente. Doble base de espirituosos mexicanos: reposado + brandy. Carácter y presencia en cada sorbo.",
    preparation: "La mezcla del reposado con el brandy se hace primero. Luego se añade limón fresco y agave. Shake fuerte con hielo. Copa con sal. Una margarita con cuerpo, presencia y personalidad propia.",
    history: "Brandy Presidente es el brandy más vendido de México desde los años 70s. Su inclusión en una margarita crea una versión profunda y compleja que rinde homenaje a la cultura vinícola mexicana.",
    funFact: "El Brandy Presidente se elabora en la región vinícola de Aguascalientes, México, con uvas locales.",
    pairing: "Carnes rojas, mole negro, postres de chocolate.",
    levels: { sweetness: 3, acidity: 2, intensity: 4, spice: 0 },
    responsibleMessage: "Disfruta con responsabilidad. No manejes después de consumir alcohol."
  },
  {
    id: "jp-cadillac",
    name: "JP Cadillac",
    price: 15,
    image: "/assets/drinks/jp-cadillac.jpg",
    tags: ["Premium", "Classic", "Bold"],
    ingredients: ["Alma Jaguar 101 Tequila", "Grand Gala Triple Sec", "Lemon lime juice", "Agave syrup"],
    spirit: {
      name: "Alma Jaguar 101",
      type: "Tequila Extra Premium 101 Proof (50.5% ABV)",
      origin: "Jalisco, México",
      notes: "Intenso, complejo, largo en boca. Notas de agave cocido, especias y un final largo y memorable."
    },
    description: "La margarita de los conocedores. Ingredientes de primera línea. Sin escarchas — el sabor habla solo.",
    preparation: "Ingredientes de primera únicamente. Alma Jaguar 101, Grand Gala premium, jugo cítrico fresco y agave. Coctelera con hielo abundante. Shake largo y vigoroso. Copa grande sin escarcha.",
    history: "La Cadillac Margarita se considera el estándar máximo de calidad en el mundo de las margaritas. Debe su nombre a la idea de que así como el Cadillac es el mejor coche, esta es la mejor margarita.",
    funFact: "Grand Gala es un triple sec importado de Italia, con base de cognac y naranja natural — muy superior al triple sec estándar.",
    pairing: "Mariscos premium, sashimi de atún, quesos artesanales.",
    levels: { sweetness: 2, acidity: 3, intensity: 5, spice: 0 },
    responsibleMessage: "Disfruta con responsabilidad. No manejes después de consumir alcohol."
  },
];

export const mezcal = [
  {
    id: "mezcalita",
    name: "Mezcalita",
    price: 8,
    image: "/assets/drinks/mezcalita.jpg",
    tags: ["Smoky", "Fresh", "House Favorite"],
    ingredients: ["2 oz Mezcal artesanal", "1 oz Purée de frutos rojos", "0.5 oz Jugo de limón", "0.5 oz Agave syrup"],
    spirit: {
      name: "Mezcal Artesanal",
      type: "Mezcal de Agave Espadín",
      origin: "Oaxaca, México",
      notes: "Ahumado, con notas de fruta y tierra. El proceso de cocción en hornos de tierra le da su carácter único."
    },
    description: "El ahumado del mezcal crea un contraste sorprendente y adictivo con la dulzura de los frutos rojos.",
    preparation: "Coctelera con hielo: mezcal, purée de frutos rojos, limón y agave. Shake fuerte para integrar el purée denso. Sirve en copa con sal o Tajín.",
    history: "El mezcal es el espíritu madre del tequila — todos los tequilas son mezcales, pero no todos los mezcales son tequilas. Su historia se remonta a más de 400 años en las comunidades indígenas de Oaxaca.",
    funFact: "El mezcal puede elaborarse con más de 30 variedades de agave. El tequila solo puede usar agave azul (Weber azul).",
    pairing: "Quesos ahumados, charcutería, mole negro.",
    levels: { sweetness: 3, acidity: 3, intensity: 4, spice: 0 },
    responsibleMessage: "Disfruta con responsabilidad. No manejes después de consumir alcohol."
  },
  {
    id: "bad-bunny",
    name: "Bad Bunny",
    price: 10,
    image: "/assets/drinks/bad-bunny.jpg",
    tags: ["Tropical", "Fresh", "House Favorite"],
    ingredients: ["2 oz 400 Conejos Mezcal Joven", "1 oz Jugo de piña", "0.75 oz Guava syrup", "0.75 oz Jugo de limón", "Tajín rim", "Garnish de hojas de piña (las orejas)"],
    spirit: {
      name: "400 Conejos Mezcal Joven",
      type: "Mezcal Joven 100% Agave Espadín",
      origin: "Oaxaca, México",
      notes: "Ahumado suave y accesible con notas frutales. Perfecto para quienes se inician en el mezcal."
    },
    description: "El más fotogénico de la carta. El garnish de hojas de piña recrea las orejas del Bad Bunny. ¡Un mezcal festivo!",
    preparation: "Shake fuerte con todos los ingredientes. Sirve en copa escarchada con Tajín. Las hojas de piña se insertan como garnish imitando las icónicas orejas. Un mezcal que seduce hasta a quien no bebe mezcal.",
    history: "400 Conejos toma su nombre de los 400 dioses del pulque en la mitología azteca — entidades que representaban la embriaguez y el placer. Un homenaje al espíritu festivo de México.",
    funFact: "El nombre 400 Conejos (Centzon Totochtin) representa en la cosmología azteca una cantidad infinita — 400 era sinónimo de 'innumerable'.",
    pairing: "Mariscos tropicales, ceviche de mango, tacos al pastor.",
    levels: { sweetness: 4, acidity: 3, intensity: 3, spice: 2 },
    responsibleMessage: "Disfruta con responsabilidad. No manejes después de consumir alcohol."
  },
  {
    id: "spicy-mezcalita",
    name: "Spicy Mezcalita",
    price: null,
    priceNote: "Consultar precio",
    image: "/assets/drinks/spicy-mezcalita.jpg",
    tags: ["Spicy", "Smoky", "Bold"],
    ingredients: ["2 oz Mezcal", "2 oz Jugo de toronja", "0.5 oz Jugo de limón", "0.5 oz Agave syrup", "Splash de agua mineral", "Rodaja de jalapeño", "Chili salt rim", "Rodaja de toronja garnish"],
    spirit: {
      name: "Mezcal Artesanal",
      type: "Mezcal de Agave Espadín",
      origin: "Oaxaca, México",
      notes: "Ahumado intenso que potencia el picante del jalapeño. Una combinación audaz y memorable."
    },
    description: "El ahumado y el picante se multiplican. Bebe despacio — el calor aparece gradual.",
    preparation: "Rim con sal de chile. Mezcal, toronja y limón frescos con agave en coctelera con hielo. Sirve con splash de agua mineral. Jalapeño fresco adentro y rodaja de toronja para el garnish.",
    history: "Aunque su origen exacto no está completamente documentado, este trago forma parte de la nueva ola de cócteles artesanales que combinan el carácter del mezcal con el calor del chile mexicano.",
    funFact: "El mezcal potencia el picante del jalapeño de manera diferente al tequila — el humo crea una capa de sabor que hace que el calor del chile sea más complejo y duradero.",
    pairing: "Tacos de carnitas, guacamole picante, tlayudas oaxaqueñas.",
    levels: { sweetness: 1, acidity: 4, intensity: 4, spice: 5 },
    responsibleMessage: "Disfruta con responsabilidad. No manejes después de consumir alcohol."
  },
  {
    id: "oaxaca-mule",
    name: "Oaxaca Mule",
    price: null,
    priceNote: "Consultar precio",
    image: "/assets/drinks/oaxaca-mule.jpg",
    tags: ["Tropical", "Smoky", "Fresh"],
    ingredients: ["2 oz Mezcal de Oaxaca", "0.50 oz Agave syrup", "0.75 oz Jugo de limón", "0.75 oz Maracuyá", "Ginger beer premium"],
    spirit: {
      name: "Mezcal de Oaxaca",
      type: "Mezcal Artesanal",
      origin: "Oaxaca, México",
      notes: "Estado con mayor diversidad de agaves del mundo. Más de 30 variedades se producen ahí."
    },
    description: "El jengibre picante y el humo del mezcal se encuentran con el maracuyá tropical. Inesperadamente perfecto.",
    preparation: "Mezcal, agave, limón y maracuyá en vaso tipo mule con hielo. Terminar con ginger beer frío por encima sin revolver — los sabores se estratifican y se descubren sip a sip.",
    history: "El Moscow Mule original (vodka + ginger beer) fue creado en los años 40s. La versión Oaxaca sustituye el vodka por mezcal y añade maracuyá, creando una fusión México-mundo única.",
    funFact: "Oaxaca tiene la mayor biodiversidad de agaves silvestres del mundo — más de 30 variedades crecen ahí de forma natural.",
    pairing: "Mariscos, ceviche tropical, quesillo oaxaqueño.",
    levels: { sweetness: 3, acidity: 3, intensity: 4, spice: 1 },
    responsibleMessage: "Disfruta con responsabilidad. No manejes después de consumir alcohol."
  },
];

export const cervezas = {
  draft: [
    {
      id: "yee-haw-lager",
      name: "Yee Haw Lager",
      price: 5,
      image: "/assets/drinks/yee-haw.jpg",
      tags: ["Light", "Classic"],
      type: "American Craft Lager",
      origin: "Johnson City, Tennessee, EE.UU.",
      abv: "4.5%",
      description: "Cervecería artesanal del sur de EE.UU. Ligera, crujiente y muy refrescante. Diseñada para tomarse bien fría con comida o sin ella.",
      pairing: "Hamburguesas, alitas, nachos.",
      responsibleMessage: "Disfruta con responsabilidad. No manejes después de consumir alcohol."
    },
    {
      id: "modelo",
      name: "Modelo",
      price: 5,
      image: "/assets/drinks/modelo.jpg",
      tags: ["Classic", "House Favorite"],
      type: "Pale Lager / Pilsner",
      origin: "Ciudad de México, México — est. 1925",
      abv: "4.4%",
      description: "La cerveza más vendida en EE.UU. Cuerpo medio, dulzura suave de malta, final limpio. Funciona con absolutamente todo.",
      pairing: "Street tacos, mariscos, comida mexicana en general.",
      responsibleMessage: "Disfruta con responsabilidad. No manejes después de consumir alcohol."
    },
    {
      id: "xx-amber",
      name: "XX Amber",
      price: 5,
      image: "/assets/drinks/xx-amber.jpg",
      tags: ["Bold", "Classic"],
      type: "Vienna Lager / Amber",
      origin: "Monterrey, México — est. 1897",
      abv: "4.7%",
      description: "Creada por un cervecero alemán en 1897. Estilo Vienna: malta tostada con notas de caramelo y pan. La más compleja de las lagers mexicanas mainstream.",
      pairing: "Carnes a la parrilla, quesadillas, enchiladas.",
      responsibleMessage: "Disfruta con responsabilidad. No manejes después de consumir alcohol."
    },
    {
      id: "pacifico",
      name: "Pacífico",
      price: 5,
      image: "/assets/drinks/pacifico.jpg",
      tags: ["Light", "Fresh"],
      type: "Pale Lager",
      origin: "Mazatlán, Sinaloa, México",
      abv: "4.5%",
      description: "Nacida en la costa del Pacífico de Mazatlán. El faro del puerto aparece en su etiqueta. Ligera y muy carbonatada. Perfecta con mariscos.",
      pairing: "Mariscos, ceviche, camarones al ajillo.",
      responsibleMessage: "Disfruta con responsabilidad. No manejes después de consumir alcohol."
    },
    {
      id: "ultra",
      name: "Ultra",
      price: 4.5,
      image: "/assets/drinks/ultra.jpg",
      tags: ["Light"],
      type: "Light Lager",
      origin: "EE.UU. — Anheuser-Busch",
      abv: "4.2%",
      description: "Michelob Ultra, la light beer favorita de quienes cuidan calorías. Mínima amargura, cuerpo muy ligero. Solo 95 calorías por porción.",
      pairing: "Ensaladas, comida ligera, snacks.",
      responsibleMessage: "Disfruta con responsabilidad. No manejes después de consumir alcohol."
    },
    {
      id: "local-ipa",
      name: "Local IPA",
      price: 6,
      image: "/assets/drinks/local-ipa.jpg",
      tags: ["Bold", "Fresh"],
      type: "India Pale Ale",
      origin: "Producción Local / Craft",
      abv: "~6%",
      description: "IPA artesanal de producción local. Abundante lúpulo con aromas florales, cítricos o pinativos. Más cuerpo y carácter que cualquier lager.",
      pairing: "Burgers, quesos maduros, comida especiada.",
      responsibleMessage: "Disfruta con responsabilidad. No manejes después de consumir alcohol."
    },
  ],
  bottles: [
    {
      id: "corona-extra",
      name: "Corona Extra",
      price: 5,
      image: "/assets/drinks/corona.jpg",
      tags: ["Light", "Classic"],
      type: "Pale Lager",
      origin: "Ciudad de México, México — est. 1925",
      abv: "4.5%",
      description: "La cerveza más exportada del mundo. Pale lager ligera y cristalina. La botella transparente muestra su color dorado brillante. Clásicamente servida con limón.",
      pairing: "Mariscos, comida mexicana, limón y sal.",
      responsibleMessage: "Disfruta con responsabilidad. No manejes después de consumir alcohol."
    },
    {
      id: "negra-modelo",
      name: "Negra Modelo",
      price: 5,
      image: "/assets/drinks/negra-modelo.jpg",
      tags: ["Bold", "Classic"],
      type: "Munich Dunkel / Vienna Dark Lager",
      origin: "Ciudad de México, México — est. 1926",
      abv: "5.4%",
      description: "'La crema de las cervezas' en México. Estilo Munich Dunkel introducido por inmigrantes austriacos. Oscura, suave y cremosa con notas de caramelo y malta tostada.",
      pairing: "Carnes rojas, quesos añejos, mole.",
      responsibleMessage: "Disfruta con responsabilidad. No manejes después de consumir alcohol."
    },
    {
      id: "local-brew-porter",
      name: "Local Brew Porter",
      price: null,
      priceNote: "Consultar precio",
      image: "/assets/drinks/local-porter.jpg",
      tags: ["Bold"],
      type: "Porter",
      origin: "Producción Local / Artesanal",
      abv: "~5.5%",
      description: "Porter artesanal local. Estilo inglés: notas de chocolate amargo, café y caramelo oscuro. Cuerpo medio-alto y amargor suave.",
      pairing: "Carnes estofadas, quesos azules, postres de chocolate.",
      responsibleMessage: "Disfruta con responsabilidad. No manejes después de consumir alcohol."
    },
    {
      id: "local-brew-lager",
      name: "Local Brew Lager",
      price: null,
      priceNote: "Consultar precio",
      image: "/assets/drinks/local-lager.jpg",
      tags: ["Light", "Fresh"],
      type: "Craft Lager",
      origin: "Producción Local / Artesanal",
      abv: "~4.8%",
      description: "Lager artesanal local. Más carácter que las industriales, manteniendo la accesibilidad de una lager. Disponibilidad limitada.",
      pairing: "Ensaladas, mariscos frescos, comida ligera.",
      responsibleMessage: "Disfruta con responsabilidad. No manejes después de consumir alcohol."
    },
    {
      id: "victoria-32",
      name: "Victoria 32oz",
      price: 10,
      image: "/assets/drinks/victoria.jpg",
      tags: ["Classic", "House Favorite"],
      type: "Vienna Lager",
      origin: "Toluca, Estado de México — est. 1865",
      abv: "4.0%",
      description: "La cerveza más antigua de México desde 1865. Estilo Vienna traído por emigrantes austriacos. Ligeramente dulce, color ámbar pálido, cuerpo suave. Perfecto para compartir.",
      pairing: "Botanas mexicanas, antojitos, comida casera.",
      responsibleMessage: "Disfruta con responsabilidad. No manejes después de consumir alcohol."
    },
    {
      id: "tecate",
      name: "Tecate",
      price: 5,
      image: "/assets/drinks/tecate.jpg",
      tags: ["Classic"],
      type: "American Lager",
      origin: "Tecate, Baja California, México — est. 1944",
      abv: "4.5%",
      description: "Nació en la ciudad fronteriza de Tecate, BC. Lager de mediano cuerpo con sabor más pronunciado que Corona. Icónica en el norte de México. El anillo rojo la hace inconfundible.",
      pairing: "Carne asada, frijoles, botanas norteñas.",
      responsibleMessage: "Disfruta con responsabilidad. No manejes después de consumir alcohol."
    },
    {
      id: "bohemia",
      name: "Bohemia",
      price: 5,
      image: "/assets/drinks/bohemia.jpg",
      tags: ["Premium", "Bold"],
      type: "Czech-style Pilsner",
      origin: "Monterrey, México — est. 1905",
      abv: "5.2%",
      description: "La cerveza premium más antigua de México y la más premiada. Elaborada con lúpulo Saaz auténtico de República Checa desde 1905. Más amarga, aromática y compleja que cualquier lager mexicana mainstream.",
      pairing: "Mariscos premium, quesos artesanales, sushi.",
      responsibleMessage: "Disfruta con responsabilidad. No manejes después de consumir alcohol."
    },
    {
      id: "bud-light",
      name: "Bud Light",
      price: 3.5,
      image: "/assets/drinks/bud-light.jpg",
      tags: ["Light"],
      type: "Light Lager",
      origin: "St. Louis, Missouri, EE.UU.",
      abv: "4.2%",
      description: "La light beer más popular de América. Sabor muy neutro, baja amargura, alta carbonatación. Solo 110 calorías. La elección para quienes prefieren algo completamente suave.",
      pairing: "Snacks, comida ligera, botanas.",
      responsibleMessage: "Disfruta con responsabilidad. No manejes después de consumir alcohol."
    },
    {
      id: "miller-lite",
      name: "Miller Lite",
      price: 3.5,
      image: "/assets/drinks/miller-lite.jpg",
      tags: ["Light"],
      type: "Light Pilsner",
      origin: "Milwaukee, Wisconsin, EE.UU. — est. 1975",
      abv: "4.2%",
      description: "La primera light beer americana exitosa, creada en 1975. Ligeramente más carácter que Bud Light con el mismo cuerpo ligero. Solo 96 calorías. Para los que quieren light pero con un poco más de sabor.",
      pairing: "Snacks, comida ligera, botanas.",
      responsibleMessage: "Disfruta con responsabilidad. No manejes después de consumir alcohol."
    },
  ]
};
