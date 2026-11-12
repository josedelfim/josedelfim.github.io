export default {
  "schemaVersion": 1,
  "ids": [
    "cifrao",
    "zbum",
    "zept",
    "zehauze",
    "zezen"
  ],
  "axes": [
    {
      "id": "abertura",
      "label": "Abertura",
      "scale": 10,
      "currentlyUsedByEncounter": false
    },
    {
      "id": "disciplina",
      "label": "Disciplina",
      "scale": 10,
      "currentlyUsedByEncounter": false
    },
    {
      "id": "extroversao",
      "label": "Extroversão",
      "scale": 10,
      "currentlyUsedByEncounter": true
    },
    {
      "id": "afabilidade",
      "label": "Afabilidade",
      "scale": 10,
      "currentlyUsedByEncounter": true
    },
    {
      "id": "calma",
      "label": "Calma",
      "scale": 10,
      "currentlyUsedByEncounter": true
    },
    {
      "id": "energia",
      "label": "Energia",
      "scale": 10,
      "currentlyUsedByEncounter": false
    }
  ],
  "personas": [
    {
      "id": "cifrao",
      "name": "Cifrão",
      "class": "Warlock",
      "traits": {
        "abertura": 1,
        "disciplina": 9,
        "extroversao": 9,
        "afabilidade": 1,
        "calma": 1,
        "energia": 6
      },
      "moodOrigin": "neutro-media",
      "moods": {
        "bom-alta": "Lucro!",
        "bom-media": "Pensando em investir",
        "bom-baixa": "Contando moedas",
        "neutro-alta": "Refazendo contas",
        "neutro-media": "Economizando",
        "neutro-baixa": "Cochilando no cofre",
        "ruim-alta": "Pare de gastar!",
        "ruim-media": "Ligando pro Banco",
        "ruim-baixa": "Eu sou pobre"
      },
      "dailyRelationshipReturn": 0.2
    },
    {
      "id": "zbum",
      "name": "ZBum",
      "class": "Warrior",
      "traits": {
        "abertura": 9,
        "disciplina": 8,
        "extroversao": 10,
        "afabilidade": 9,
        "calma": 5,
        "energia": 10
      },
      "moodOrigin": "bom-media",
      "moods": {
        "bom-alta": "Pré-treino bateu",
        "bom-media": "Motivado",
        "bom-baixa": "Orgulhoso",
        "neutro-alta": "Melhor que ontem!",
        "neutro-media": "No pain no gain",
        "neutro-baixa": "Um dia de cada vez",
        "ruim-alta": "Apitando",
        "ruim-media": "Decepcionado",
        "ruim-baixa": "Exausto"
      },
      "dailyRelationshipReturn": 0.03
    },
    {
      "id": "zept",
      "name": "Zept",
      "class": "Ladino",
      "traits": {
        "abertura": 10,
        "disciplina": 2,
        "extroversao": 1,
        "afabilidade": 2,
        "calma": 8,
        "energia": 1
      },
      "moodOrigin": "neutro-baixa",
      "moods": {
        "bom-alta": "Genial",
        "bom-media": "Como previsto",
        "bom-baixa": "Pesquisando na internet",
        "neutro-alta": "Concentrado",
        "neutro-media": "Subaproveitado",
        "neutro-baixa": "Cabeça nas nuvens",
        "ruim-alta": "Venenoso",
        "ruim-media": "Que saco",
        "ruim-baixa": "Marvin total"
      },
      "dailyRelationshipReturn": 0.15
    },
    {
      "id": "zehauze",
      "name": "Zehauze",
      "class": "Artífice",
      "traits": {
        "abertura": 6,
        "disciplina": 9,
        "extroversao": 5,
        "afabilidade": 5,
        "calma": 3,
        "energia": 8
      },
      "moodOrigin": "neutro-alta",
      "moods": {
        "bom-alta": "Nível Fibonacci",
        "bom-media": "Em ordem",
        "bom-baixa": "Modo jardim",
        "neutro-alta": "Executando rotina",
        "neutro-media": "Monitorando",
        "neutro-baixa": "Recarregando",
        "ruim-alta": "Alarme disparado",
        "ruim-media": "Preocupado",
        "ruim-baixa": "Sobrecarregado"
      },
      "dailyRelationshipReturn": 0.25
    },
    {
      "id": "zezen",
      "name": "Zezen",
      "class": "Monge",
      "traits": {
        "abertura": 2,
        "disciplina": 10,
        "extroversao": 7,
        "afabilidade": 8,
        "calma": 10,
        "energia": 3
      },
      "moodOrigin": "bom-media",
      "moods": {
        "bom-alta": "Nirvana",
        "bom-media": "Chakras alinhados",
        "bom-baixa": "Meditando",
        "neutro-alta": "Contando história",
        "neutro-media": "Em paz",
        "neutro-baixa": "Refletindo",
        "ruim-alta": "Você precisa ser parado",
        "ruim-media": "Mente nublada",
        "ruim-baixa": "Taciturno"
      },
      "dailyRelationshipReturn": 0.07
    }
  ],
  "relationship": {
    "directed": true,
    "min": -100,
    "max": 100,
    "rowMeans": "from",
    "columnMeans": "to",
    "order": [
      "cifrao",
      "zbum",
      "zept",
      "zehauze",
      "zezen"
    ],
    "initialMatrix": [
      [
        null,
        20,
        60,
        40,
        0
      ],
      [
        100,
        null,
        100,
        100,
        100
      ],
      [
        60,
        0,
        null,
        -20,
        0
      ],
      [
        40,
        0,
        -20,
        null,
        70
      ],
      [
        0,
        70,
        0,
        70,
        null
      ]
    ],
    "initialIsNotCurrent": true,
    "bands": [
      {
        "id": "hostil",
        "label": "Hostil",
        "min": -100,
        "max": -60
      },
      {
        "id": "frio",
        "label": "Frio",
        "min": -59,
        "max": -20
      },
      {
        "id": "neutro",
        "label": "Neutro",
        "min": -19,
        "max": 19
      },
      {
        "id": "amigo",
        "label": "Amigo",
        "min": 20,
        "max": 59
      },
      {
        "id": "intimo",
        "label": "Íntimo",
        "min": 60,
        "max": 100
      }
    ],
    "pairReturn": "r_ab = initial_ab + (r_ab - initial_ab) * (1-dailyReturn_a)^(minutes/1440)",
    "userReturn": "r_aUser = r_aUser * (1-dailyReturn_a)^(minutes/1440)",
    "important": "Directed relationships are distinct; ZBum→Cifrão100 and Cifrão→ZBum20. Encounter uses their mean60."
  },
  "authoredDesignNotFullyImplemented": {
    "moodCells": 9,
    "totalNamedMoodCells": 45,
    "calmMovement": [
      {
        "id": "cifrao",
        "strongEventCells": 2,
        "returnHours": 12
      },
      {
        "id": "zehauze",
        "strongEventCells": 2,
        "returnHours": 8
      },
      {
        "id": "zbum",
        "strongEventCells": 1,
        "returnHours": 6
      },
      {
        "id": "zept",
        "strongEventCells": 1,
        "eventQualifier": "strong only",
        "returnHours": 3
      },
      {
        "id": "zezen",
        "strongEventCells": 1,
        "eventQualifier": "verystrong only",
        "returnHours": 2
      }
    ],
    "moodTies": [
      "Zehauze follows Zezen's wellbeing",
      "Zept mirrors user's calm, demonstrate with fictional sampleonly"
    ],
    "traitsNotUsedByEncounterWeights": [
      "abertura",
      "disciplina",
      "energia"
    ]
  },
  "provenance": {
    "traits": "Authored V2 design, 29 October 2026",
    "relations": "Documented starting relationships, not current live state",
    "runtime": "Browser adaptation of encounter weighting; scripted dialogue is separate",
    "limitations": [
      "Openness, discipline and energy are authored traits, not inputs to encounter weighting.",
      "Nine mood cells are authored; current encounter code uses three mood states.",
      "Redacted configured action deltas are not reconstructed."
    ]
  }
};
