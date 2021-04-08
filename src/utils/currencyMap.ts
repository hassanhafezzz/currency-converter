type CurrencyMap = {
  [key: string]: {
    currency: string;
    country: string;
  };
};

const currencyMap: CurrencyMap = {
  AED: {
    currency: 'UAE Dirham',
    country: 'United Arab Emirates (The)',
  },
  AFN: { currency: 'Afghani', country: 'Afghanistan' },
  ALL: {
    currency: 'Lek',
    country: 'Albania',
  },
  AMD: { currency: 'Armenian Dram', country: 'Armenia' },
  ANG: { currency: 'Netherlands Antillean Guilder', country: 'Curacao' },
  AOA: { currency: 'Kwanza', country: 'Angola' },
  ARS: { currency: 'Argentine Peso', country: 'Argentina' },
  AUD: { currency: 'Australian Dollar', country: 'Australia' },
  AWG: { currency: 'Aruban Florin', country: 'Aruba' },
  AZN: { currency: 'Azerbaijan Manat', country: 'Azerbaijan' },
  BAM: {
    currency: 'Convertible Mark',
    country: 'Bosnia and Herzegovina',
  },

  BBD: {
    currency: 'Barbados Dollar',
    country: 'Barbados',
  },

  BDT: {
    currency: 'Taka',
    country: 'Bangladesh',
  },

  BGN: {
    currency: 'Bulgarian Lev',
    country: 'Bulgaria',
  },

  BHD: {
    currency: 'Bahraini Dinar',
    country: 'Bahrain',
  },

  BIF: {
    currency: 'Burundi Franc',
    country: 'Burundi',
  },

  BMD: {
    currency: 'Bermudian Dollar',
    country: 'Bermuda',
  },

  BND: {
    currency: 'Brunei Dollar',
    country: 'Brunei Darussalam',
  },
  BOB: {
    currency: 'Boliviano',
    country: 'Bolivia (Plurinational State Of)',
  },

  BRL: {
    currency: 'Brazilian Real',
    country: 'Brazil',
  },
  BSD: {
    currency: 'Bahamian Dollar',
    country: 'Bahamas (The)',
  },
  BTN: {
    currency: 'Ngultrum',
    country: 'Bhutan',
  },
  BWP: {
    currency: 'Pula',
    country: 'Botswana',
  },
  BYN: {
    currency: 'Belarusian Ruble',
    country: 'Belarus',
  },
  BZD: {
    currency: 'Belize Dollar',
    country: 'Belize',
  },
  CAD: {
    currency: 'Canadian Dollar',
    country: 'Canada',
  },
  CDF: {
    currency: 'Congolese Franc',
    country: 'Congo (The Democratic Republic of The)',
  },

  CHE: {
    currency: 'WIR Euro',
    country: 'Switzerland',
  },
  CHF: {
    currency: 'Swiss Franc',
    country: 'Switzerland',
  },

  CHW: {
    currency: 'WIR Franc',
    country: 'Switzerland',
  },

  CLF: {
    currency: 'Unidad de Fomento',
    country: 'Chile',
  },

  CLP: {
    currency: 'Chilean Peso',
    country: 'Chile',
  },

  CNY: {
    currency: 'Yuan Renminbi',
    country: 'China',
  },

  COP: {
    currency: 'Colombian Peso',
    country: 'Colombia',
  },

  COU: {
    currency: 'Unidad de Valor Real',
    country: 'Colombia',
  },
  CRC: {
    currency: 'Costa Rican Colon',
    country: 'Costa Rica',
  },
  CUC: {
    currency: 'Peso Convertible',
    country: 'Cuba',
  },

  CUP: {
    currency: 'Cuban Peso',
    country: 'Cuba',
  },

  CVE: {
    currency: 'Cabo Verde Escudo',
    country: 'Cabo Verde',
  },

  CZK: {
    currency: 'Czech Koruna',
    country: 'Czechia',
  },

  DJF: {
    currency: 'Djibouti Franc',
    country: 'Djibouti',
  },

  DKK: {
    currency: 'Danish Krone',
    country: 'Denmark',
  },
  DOP: {
    currency: 'Dominican Peso',
    country: 'Dominican Republic (The)',
  },
  DZD: {
    currency: 'Algerian Dinar',
    country: 'Algeria',
  },
  EGP: {
    currency: 'Egyptian Pound',
    country: 'Egypt',
  },
  ERN: {
    currency: 'Nakfa',
    country: 'Eritrea',
  },
  ETB: {
    currency: 'Ethiopian Birr',
    country: 'Ethiopia',
  },
  EUR: {
    currency: 'Euro',
    country: 'Euro',
  },

  FJD: {
    currency: 'Fiji Dollar',
    country: 'Fiji',
  },

  FKP: {
    currency: 'Falkland Islands Pound',
    country: ' Falkland Islands',
  },
  GBP: {
    currency: 'Pound Sterling',
    country: 'United Kingdom',
  },

  GEL: {
    currency: 'Lari',
    country: 'Georgia',
  },

  GHS: {
    currency: 'Ghana Cedi',
    country: 'Ghana',
  },

  GIP: {
    currency: 'Gibraltar Pound',
    country: 'Gibraltar',
  },

  GMD: {
    currency: 'Dalasi',
    country: 'Gambia (The)',
  },

  GNF: {
    currency: 'Guinean Franc',
    country: 'Guinea',
  },
  GTQ: {
    currency: 'Quetzal',
    country: 'Guatemala',
  },

  GYD: {
    currency: 'Guyana Dollar',
    country: 'Guyana',
  },

  HKD: {
    currency: 'Hong Kong Dollar',
    country: 'Hong Kong',
  },

  HNL: {
    currency: 'Lempira',
    country: 'Honduras',
  },

  HRK: {
    currency: 'Kuna',
    country: 'Croatia',
  },

  HTG: {
    currency: 'Gourde',
    country: 'Haiti',
  },

  HUF: {
    currency: 'Forint',
    country: 'Hungary',
  },
  IDR: {
    currency: 'Rupiah',
    country: 'Indonesia',
  },

  ILS: {
    currency: 'New Israeli Sheqel',
    country: 'Israel',
  },
  INR: {
    currency: 'Indian Rupee',
    country: 'India',
  },

  IQD: {
    currency: 'Iraqi Dinar',
    country: 'Iraq',
  },

  IRR: {
    currency: 'Iranian Rial',
    country: 'Iran (Islamic Republic Of)',
  },

  ISK: {
    currency: 'Iceland Krona',
    country: 'Iceland',
  },

  JMD: {
    currency: 'Jamaican Dollar',
    country: 'Jamaica',
  },
  JOD: {
    currency: 'Jordanian Dinar',
    country: 'Jordan',
  },

  JPY: {
    currency: 'Yen',
    country: 'Japan',
  },

  KES: {
    currency: 'Kenyan Shilling',
    country: 'Kenya',
  },

  KGS: {
    currency: 'Som',
    country: 'Kyrgyzstan',
  },

  KHR: {
    currency: 'Riel',
    country: 'Cambodia',
  },

  KMF: {
    currency: 'Comorian Franc ',
    country: 'Comoros (The)',
  },

  KPW: {
    currency: 'North Korean Won',
    country: 'Korea (The Democratic People’s Republic Of)',
  },

  KRW: {
    currency: 'Won',
    country: 'Korea (The Republic Of)',
  },

  KWD: {
    currency: 'Kuwaiti Dinar',
    country: 'Kuwait',
  },
  KYD: {
    currency: 'Cayman Islands Dollar',
    country: 'Cayman Islands (The)',
  },

  KZT: {
    currency: 'Tenge',
    country: 'Kazakhstan',
  },

  LAK: {
    currency: 'Lao Kip',
    country: 'Lao People’s Democratic Republic (The)',
  },

  LBP: {
    currency: 'Lebanese Pound',
    country: 'Lebanon',
  },

  LKR: {
    currency: 'Sri Lanka Rupee',
    country: 'Sri Lanka',
  },

  LRD: {
    currency: 'Liberian Dollar',
    country: 'Liberia',
  },

  LSL: {
    currency: 'Loti',
    country: 'Lesotho',
  },

  LYD: {
    currency: 'Libyan Dinar',
    country: 'Libya',
  },

  MAD: {
    currency: 'Moroccan Dirham',
    country: 'Morocco',
  },

  MDL: {
    currency: 'Moldovan Leu',
    country: 'Moldova (The Republic Of)',
  },

  MGA: {
    currency: 'Malagasy Ariary',
    country: 'Madagascar',
  },

  MKD: {
    currency: 'Denar',
    country: 'Macedonia (The Former Yugoslav Republic Of)',
  },

  MMK: {
    currency: 'Kyat',
    country: 'Myanmar',
  },

  MNT: {
    currency: 'Tugrik',
    country: 'Mongolia',
  },

  MOP: {
    currency: 'Pataca',
    country: 'Macao',
  },

  MRU: {
    currency: 'Ouguiya',
    country: 'Mauritania',
  },

  MUR: {
    currency: 'Mauritius Rupee',
    country: 'Mauritius',
  },

  MVR: {
    currency: 'Rufiyaa',
    country: 'Maldives',
  },

  MWK: {
    currency: 'Malawi Kwacha',
    country: 'Malawi',
  },

  MXN: {
    currency: 'Mexican Peso',
    country: 'Mexico',
  },

  MXV: {
    currency: 'Mexican Unidad de Inversion (UDI)',
    country: 'Mexico',
  },

  MYR: {
    currency: 'Malaysian Ringgit',
    country: 'Malaysia',
  },

  MZN: {
    currency: 'Mozambique Metical',
    country: 'Mozambique',
  },

  NAD: {
    currency: 'Namibia Dollar',
    country: 'Namibia',
  },

  NGN: {
    currency: 'Naira',
    country: 'Nigeria',
  },

  NIO: {
    currency: 'Cordoba Oro',
    country: 'Nicaragua',
  },
  NOK: {
    currency: 'Norwegian Krone',
    country: 'Norway',
  },

  NPR: {
    currency: 'Nepalese Rupee',
    country: 'Nepal',
  },

  NZD: {
    currency: 'New Zealand Dollar',
    country: 'New Zealand',
  },

  OMR: {
    currency: 'Rial Omani',
    country: 'Oman',
  },

  PAB: {
    currency: 'Balboa',
    country: 'Panama',
  },
  PEN: {
    currency: 'Sol',
    country: 'Peru',
  },

  PGK: {
    currency: 'Kina',
    country: 'Papua New Guinea',
  },

  PHP: {
    currency: 'Philippine Peso',
    country: 'Philippines (The)',
  },

  PKR: {
    currency: 'Pakistan Rupee',
    country: 'Pakistan',
  },

  PLN: {
    currency: 'Zloty',
    country: 'Poland',
  },

  PYG: {
    currency: 'Guarani',
    country: 'Paraguay',
  },

  QAR: {
    currency: 'Qatari Rial',
    country: 'Qatar',
  },

  RON: {
    currency: 'Romanian Leu',
    country: 'Romania',
  },

  RSD: {
    currency: 'Serbian Dinar',
    country: 'Serbia',
  },

  RUB: {
    currency: 'Russian Ruble',
    country: 'Russian Federation (The)',
  },

  RWF: {
    currency: 'Rwanda Franc',
    country: 'Rwanda',
  },

  SAR: {
    currency: 'Saudi Riyal',
    country: 'Saudi Arabia',
  },

  SBD: {
    currency: 'Solomon Islands Dollar',
    country: 'Solomon Islands',
  },

  SCR: {
    currency: 'Seychelles Rupee',
    country: 'Seychelles',
  },

  SDG: {
    currency: 'Sudanese Pound',
    country: 'Sudan (The)',
  },

  SEK: {
    currency: 'Swedish Krona',
    country: 'Sweden',
  },

  SGD: {
    currency: 'Singapore Dollar',
    country: 'Singapore',
  },

  SHP: {
    currency: 'Saint Helena Pound',
    country: 'Saint Helena, Ascension and Tristan Da Cunha',
  },

  SLL: {
    currency: 'Leone',
    country: 'Sierra Leone',
  },

  SOS: {
    currency: 'Somali Shilling',
    country: 'Somalia',
  },

  SRD: {
    currency: 'Surinam Dollar',
    country: 'Suriname',
  },

  SSP: {
    currency: 'South Sudanese Pound',
    country: 'South Sudan',
  },
  STN: {
    currency: 'Dobra',
    country: 'Sao Tome and Principe',
  },
  SVC: {
    currency: 'El Salvador Colon',
    country: 'El Salvador',
  },
  SYP: {
    currency: 'Syrian Pound',
    country: 'Syrian Arab Republic',
  },
  SZL: {
    currency: 'Lilangeni',
    country: 'Eswatini',
  },
  THB: {
    currency: 'Baht',
    country: 'Thailand',
  },
  TJS: {
    currency: 'Somoni',
    country: 'Tajikistan',
  },
  TMT: {
    currency: 'Turkmenistan New Manat',
    country: 'Turkmenistan',
  },
  TND: {
    currency: 'Tunisian Dinar',
    country: 'Tunisia',
  },
  TOP: {
    currency: 'Pa’anga',
    country: 'Tonga',
  },
  TRY: {
    currency: 'Turkish Lira',
    country: 'Turkey',
  },
  TTD: {
    currency: 'Trinidad and Tobago Dollar',
    country: 'Trinidad and Tobago',
  },
  TWD: {
    currency: 'New Taiwan Dollar',
    country: 'Taiwan (Province of China)',
  },
  TZS: {
    currency: 'Tanzanian Shilling',
    country: 'Tanzania, United Republic Of',
  },
  UAH: {
    currency: 'Hryvnia',
    country: 'Ukraine',
  },
  UGX: {
    currency: 'Uganda Shilling',
    country: 'Uganda',
  },
  USD: {
    currency: 'US Dollar',
    country: 'United States of America (The)',
  },

  UYI: {
    currency: 'Uruguay Peso en Unidades Indexadas (UI)',
    country: 'Uruguay',
  },
  UYU: {
    currency: 'Peso Uruguayo',
    country: 'Uruguay',
  },
  UYW: {
    currency: 'Unidad Previsional',
    country: 'Uruguay',
  },
  UZS: {
    currency: 'Uzbekistan Sum',
    country: 'Uzbekistan',
  },
  VES: {
    currency: 'Bolívar Soberano',
    country: 'Venezuela (Bolivarian Republic Of)',
  },
  VND: {
    currency: 'Dong',
    country: 'Viet Nam',
  },
  VUV: {
    currency: 'Vatu',
    country: 'Vanuatu',
  },
  WST: {
    currency: 'Tala',
    country: 'Samoa',
  },
  XAF: {
    currency: 'CFA Franc BEAC',
    country: 'Cameroon',
  },
  XAG: {
    currency: 'Silver',
    country: 'silver',
  },
  XAU: {
    currency: 'Gold',
    country: 'gold',
  },

  XCD: {
    currency: 'East Caribbean Dollar',
    country: 'Anguilla',
  },
  XDR: {
    currency: 'SDR (Special Drawing Right)',
    country: 'International Monetary Fund (Imf) ',
  },
  XOF: {
    currency: 'CFA Franc BCEAO',
    country: "Côte d'Ivoire",
  },

  YER: {
    currency: 'Yemeni Rial',
    country: 'Yemen',
  },
  ZAR: {
    currency: 'Rand',
    country: 'South Africa',
  },
  ZMW: {
    currency: 'Zambian Kwacha',
    country: 'Zambia',
  },
  ZWL: {
    currency: 'Zimbabwe Dollar',
    country: 'Zimbabwe',
  },
};

export default currencyMap;
