export interface StateOption {
    value: string;
    label: string;
  }
  
  export const countries: Record<string, StateOption[]> = {
    usa: [
      { value: 'alabama', label: 'Alabama' },
      { value: 'alaska', label: 'Alaska' },
      { value: 'arizona', label: 'Arizona' },
      { value: 'arkansas', label: 'Arkansas' },
      { value: 'california', label: 'California' },
      { value: 'colorado', label: 'Colorado' },
      { value: 'connecticut', label: 'Connecticut' },
      { value: 'delaware', label: 'Delaware' },
      { value: 'florida', label: 'Florida' },
      { value: 'georgia', label: 'Georgia' },
      { value: 'hawaii', label: 'Hawaii' },
      { value: 'idaho', label: 'Idaho' },
      { value: 'illinois', label: 'Illinois' },
      { value: 'indiana', label: 'Indiana' },
      { value: 'iowa', label: 'Iowa' },
      { value: 'kansas', label: 'Kansas' },
      { value: 'kentucky', label: 'Kentucky' },
      { value: 'louisiana', label: 'Louisiana' },
      { value: 'maine', label: 'Maine' },
      { value: 'maryland', label: 'Maryland' },
      { value: 'massachusetts', label: 'Massachusetts' },
      { value: 'michigan', label: 'Michigan' },
      { value: 'minnesota', label: 'Minnesota' },
      { value: 'mississippi', label: 'Mississippi' },
      { value: 'missouri', label: 'Missouri' },
      { value: 'montana', label: 'Montana' },
      { value: 'nebraska', label: 'Nebraska' },
      { value: 'nevada', label: 'Nevada' },
      { value: 'new-hampshire', label: 'New Hampshire' },
      { value: 'new-jersey', label: 'New Jersey' },
      { value: 'new-mexico', label: 'New Mexico' },
      { value: 'new-york', label: 'New York' },
      { value: 'north-carolina', label: 'North Carolina' },
      { value: 'north-dakota', label: 'North Dakota' },
      { value: 'ohio', label: 'Ohio' },
      { value: 'oklahoma', label: 'Oklahoma' },
      { value: 'oregon', label: 'Oregon' },
      { value: 'pennsylvania', label: 'Pennsylvania' },
      { value: 'rhode-island', label: 'Rhode Island' },
      { value: 'south-carolina', label: 'South Carolina' },
      { value: 'south-dakota', label: 'South Dakota' },
      { value: 'tennessee', label: 'Tennessee' },
      { value: 'texas', label: 'Texas' },
      { value: 'utah', label: 'Utah' },
      { value: 'vermont', label: 'Vermont' },
      { value: 'virginia', label: 'Virginia' },
      { value: 'washington', label: 'Washington' },
      { value: 'west-virginia', label: 'West Virginia' },
      { value: 'wisconsin', label: 'Wisconsin' },
      { value: 'wyoming', label: 'Wyoming' },
    ],
    canada: [
      { value: 'alberta', label: 'Alberta' },
      { value: 'british-columbia', label: 'British Columbia' },
      { value: 'manitoba', label: 'Manitoba' },
      { value: 'new-brunswick', label: 'New Brunswick' },
      { value: 'newfoundland-and-labrador', label: 'Newfoundland and Labrador' },
      { value: 'nova-scotia', label: 'Nova Scotia' },
      { value: 'ontario', label: 'Ontario' },
      { value: 'prince-edward-island', label: 'Prince Edward Island' },
      { value: 'quebec', label: 'Quebec' },
      { value: 'saskatchewan', label: 'Saskatchewan' },
      { value: 'northwest-territories', label: 'Northwest Territories' },
      { value: 'nunavut', label: 'Nunavut' },
      { value: 'yukon', label: 'Yukon' },
    ],
    nigeria: [
      { value: 'abia', label: 'Abia' },
      { value: 'abuja', label: 'Abuja' },
      { value: 'adamawa', label: 'Adamawa' },
      { value: 'akwa-ibom', label: 'Akwa Ibom' },
      { value: 'anambra', label: 'Anambra' },
      { value: 'bauchi', label: 'Bauchi' },
      { value: 'bayelsa', label: 'Bayelsa' },
      { value: 'benue', label: 'Benue' },
      { value: 'borno', label: 'Borno' },
      { value: 'cross-river', label: 'Cross River' },
      { value: 'delta', label: 'Delta' },
      { value: 'ebonyi', label: 'Ebonyi' },
      { value: 'edo', label: 'Edo' },
      { value: 'ekiti', label: 'Ekiti' },
      { value: 'enugu', label: 'Enugu' },
      { value: 'gombe', label: 'Gombe' },
      { value: 'imo', label: 'Imo' },
      { value: 'jigawa', label: 'Jigawa' },
      { value: 'kaduna', label: 'Kaduna' },
      { value: 'kano', label: 'Kano' },
      { value: 'katsina', label: 'Katsina' },
      { value: 'kebbi', label: 'Kebbi' },
      { value: 'kogi', label: 'Kogi' },
      { value: 'kwara', label: 'Kwara' },
      { value: 'lagos', label: 'Lagos' },
      { value: 'nasarawa', label: 'Nasarawa' },
      { value: 'niger', label: 'Niger' },
      { value: 'ogun', label: 'Ogun' },
      { value: 'ondo', label: 'Ondo' },
      { value: 'osun', label: 'Osun' },
      { value: 'oyo', label: 'Oyo' },
      { value: 'plateau', label: 'Plateau' },
      { value: 'rivers', label: 'Rivers' },
      { value: 'sokoto', label: 'Sokoto' },
      { value: 'taraba', label: 'Taraba' },
      { value: 'yobe', label: 'Yobe' },
      { value: 'zamfara', label: 'Zamfara' },
    ],
    uk: [
      { value: 'england', label: 'England' },
      { value: 'scotland', label: 'Scotland' },
      { value: 'wales', label: 'Wales' },
      { value: 'northern-ireland', label: 'Northern Ireland' },
    ],
    ghana: [
      { value: 'ashanti', label: 'Ashanti' },
      { value: 'brong-ahafo', label: 'Brong-Ahafo' },
      { value: 'central', label: 'Central' },
      { value: 'eastern', label: 'Eastern' },
      { value: 'greater-accra', label: 'Greater Accra' },
      { value: 'northern', label: 'Northern' },
      { value: 'upper-east', label: 'Upper East' },
      { value: 'upper-west', label: 'Upper West' },
      { value: 'volta', label: 'Volta' },
      { value: 'western', label: 'Western' },
    ],
    southAfrica: [
      { value: 'eastern-cape', label: 'Eastern Cape' },
      { value: 'free-state', label: 'Free State' },
      { value: 'gauteng', label: 'Gauteng' },
      { value: 'kwazulu-natal', label: 'KwaZulu-Natal' },
      { value: 'limpopo', label: 'Limpopo' },
      { value: 'mpumalanga', label: 'Mpumalanga' },
      { value: 'northern-cape', label: 'Northern Cape' },
      { value: 'north-west', label: 'North West' },
      { value: 'western-cape', label: 'Western Cape' },
    ],
    kenya: [
      { value: 'baringo', label: 'Baringo' },
      { value: 'bungoma', label: 'Bungoma' },
      { value: 'busia', label: 'Busia' },
      { value: 'elgeyo-marakwet', label: 'Elgeyo-Marakwet' },
      { value: 'embu', label: 'Embu' },
      { value: 'garissa', label: 'Garissa' },
      { value: 'homa-bay', label: 'Homa Bay' },
      { value: 'isiolo', label: 'Isiolo' },
      { value: 'kajiado', label: 'Kajiado' },
      { value: 'kakamega', label: 'Kakamega' },
      { value: 'kericho', label: 'Kericho' },
      { value: 'kiambu', label: 'Kiambu' },
      { value: 'kilifi', label: 'Kilifi' },
      { value: 'kirinyaga', label: 'Kirinyaga' },
      { value: 'kisii', label: 'Kisii' },
      { value: 'kisumu', label: 'Kisumu' },
      { value: 'kitui', label: 'Kitui' },
      { value: 'kwale', label: 'Kwale' },
      { value: 'laikipia', label: 'Laikipia' },
      { value: 'lamu', label: 'Lamu' },
      { value: 'machakos', label: 'Machakos' },
      { value: 'makueni', label: 'Makueni' },
      { value: 'mandera', label: 'Mandera' },
      { value: 'meru', label: 'Meru' },
      { value: 'migori', label: 'Migori' },
      { value: 'mombasa', label: 'Mombasa' },
      { value: 'muranga', label: 'Murang’a' },
      { value: 'nairobi', label: 'Nairobi' },
      { value: 'nakuru', label: 'Nakuru' },
      { value: 'nandi', label: 'Nandi' },
      { value: 'narok', label: 'Narok' },
      { value: 'nyamira', label: 'Nyamira' },
      { value: 'nyandarua', label: 'Nyandarua' },
      { value: 'nyeri', label: 'Nyeri' },
      { value: 'samburu', label: 'Samburu' },
      { value: 'siaya', label: 'Siaya' },
      { value: 'taita-taveta', label: 'Taita-Taveta' },
      { value: 'tana-river', label: 'Tana River' },
      { value: 'tharaka-nithi', label: 'Tharaka-Nithi' },
      { value: 'trans-nzoia', label: 'Trans-Nzoia' },
      { value: 'turkana', label: 'Turkana' },
      { value: 'uasin-gishu', label: 'Uasin Gishu' },
      { value: 'vihiga', label: 'Vihiga' },
      { value: 'wajir', label: 'Wajir' },
      { value: 'west-pokot', label: 'West Pokot' },
    ],
    egypt: [
      { value: 'alexandria', label: 'Alexandria' },
      { value: 'aswan', label: 'Aswan' },
      { value: 'asyut', label: 'Asyut' },
      { value: 'beheira', label: 'Beheira' },
      { value: 'beni-suef', label: 'Beni Suef' },
      { value: 'cairo', label: 'Cairo' },
      { value: 'dakahlia', label: 'Dakahlia' },
      { value: 'damietta', label: 'Damietta' },
      { value: 'faiyum', label: 'Faiyum' },
      { value: 'giza', label: 'Giza' },
      { value: 'ismailia', label: 'Ismailia' },
      { value: 'kafr-el-sheikh', label: 'Kafr El Sheikh' },
      { value: 'luxor', label: 'Luxor' },
      { value: 'matruh', label: 'Matruh' },
      { value: 'minya', label: 'Minya' },
      { value: 'monufia', label: 'Monufia' },
      { value: 'new-valley', label: 'New Valley' },
      { value: 'north-sinai', label: 'North Sinai' },
      { value: 'port-said', label: 'Port Said' },
      { value: 'qalyubia', label: 'Qalyubia' },
      { value: 'qalubiya', label: 'Qalubiya' },
      { value: 'qena', label: 'Qena' },
      { value: 'red-sea', label: 'Red Sea' },
      { value: 'sharqia', label: 'Sharqia' },
      { value: 'sohag', label: 'Sohag' },
      { value: 'south-sinai', label: 'South Sinai' },
      { value: 'suez', label: 'Suez' },
    ],
    tanzania: [
      { value: 'arusha', label: 'Arusha' },
      { value: 'dar-es-salaam', label: 'Dar es Salaam' },
      { value: 'dodoma', label: 'Dodoma' },
      { value: 'geita', label: 'Geita' },
      { value: 'iringa', label: 'Iringa' },
      { value: 'kagera', label: 'Kagera' },
      { value: 'katavi', label: 'Katavi' },
      { value: 'kigoma', label: 'Kigoma' },
      { value: 'kilimanjaro', label: 'Kilimanjaro' },
      { value: 'lindi', label: 'Lindi' },
      { value: 'manyara', label: 'Manyara' },
      { value: 'mara', label: 'Mara' },
      { value: 'mbeya', label: 'Mbeya' },
      { value: 'morogoro', label: 'Morogoro' },
      { value: 'mwanza', label: 'Mwanza' },
      { value: 'njombe', label: 'Njombe' },
      { value: 'pemba-north', label: 'Pemba North' },
      { value: 'pemba-south', label: 'Pemba South' },
      { value: 'pwani', label: 'Pwani' },
      { value: 'rukwa', label: 'Rukwa' },
      { value: 'ruvuma', label: 'Ruvuma' },
      { value: 'shinyanga', label: 'Shinyanga' },
      { value: 'simiyu', label: 'Simiyu' },
      { value: 'singida', label: 'Singida' },
      { value: 'tabora', label: 'Tabora' },
      { value: 'tanga', label: 'Tanga' },
      { value: 'unguja-north', label: 'Unguja North' },
      { value: 'unguja-south', label: 'Unguja South' },
    ],
    uganda: [
      { value: 'abim', label: 'Abim' },
      { value: 'adjumani', label: 'Adjumani' },
      { value: 'amolatar', label: 'Amolatar' },
      { value: 'amuria', label: 'Amuria' },
      { value: 'amuru', label: 'Amuru' },
      { value: 'apac', label: 'Apac' },
      { value: 'arua', label: 'Arua' },
      { value: 'budaka', label: 'Budaka' },
      { value: 'bududa', label: 'Bududa' },
      { value: 'bugiri', label: 'Bugiri' },
      { value: 'bukwa', label: 'Bukwa' },
      { value: 'buliisa', label: 'Buliisa' },
      { value: 'bundibugyo', label: 'Bundibugyo' },
      { value: 'bushenyi', label: 'Bushenyi' },
      { value: 'busia', label: 'Busia' },
      { value: 'butaleja', label: 'Butaleja' },
      { value: 'dokolo', label: 'Dokolo' },
      { value: 'gulu', label: 'Gulu' },
      { value: 'hoima', label: 'Hoima' },
      { value: 'ibanda', label: 'Ibanda' },
      { value: 'iganga', label: 'Iganga' },
      { value: 'isingiro', label: 'Isingiro' },
      { value: 'jinja', label: 'Jinja' },
      { value: 'kaabong', label: 'Kaabong' },
      { value: 'kabale', label: 'Kabale' },
      { value: 'kabongo', label: 'Kabongo' },
      { value: 'kabula', label: 'Kabula' },
      { value: 'kalangala', label: 'Kalangala' },
      { value: 'kalungu', label: 'Kalungu' },
      { value: 'kampala', label: 'Kampala' },
      { value: 'kamuli', label: 'Kamuli' },
      { value: 'kapchorwa', label: 'Kapchorwa' },
      { value: 'kasese', label: 'Kasese' },
      { value: 'katakwi', label: 'Katakwi' },
      { value: 'kiboga', label: 'Kiboga' },
      { value: 'kibuku', label: 'Kibuku' },
      { value: 'kiruhura', label: 'Kiruhura' },
      { value: 'kisoro', label: 'Kisoro' },
      { value: 'kitgum', label: 'Kitgum' },
      { value: 'koboko', label: 'Koboko' },
      { value: 'kotido', label: 'Kotido' },
      { value: 'kumi', label: 'Kumi' },
      { value: 'kyegegwa', label: 'Kyegegwa' },
      { value: 'kibale', label: 'Kibale' },
      { value: 'kiryandongo', label: 'Kiryandongo' },
      { value: 'kirinya', label: 'Kirinya' },
      { value: 'kyankwanzi', label: 'Kyankwanzi' },
      { value: 'kyenjojo', label: 'Kyenjojo' },
      { value: 'lamwo', label: 'Lamwo' },
      { value: 'lira', label: 'Lira' },
      { value: 'luuka', label: 'Luuka' },
      { value: 'luwero', label: 'Luwero' },
      { value: 'lyantonde', label: 'Lyantonde' },
      { value: 'malaba', label: 'Malaba' },
      { value: 'maracha', label: 'Maracha' },
      { value: 'masaka', label: 'Masaka' },
      { value: 'masindi', label: 'Masindi' },
      { value: 'mayuge', label: 'Mayuge' },
      { value: 'mbale', label: 'Mbale' },
      { value: 'mbarara', label: 'Mbarara' },
      { value: 'mitooma', label: 'Mitooma' },
      { value: 'mityana', label: 'Mityana' },
      { value: 'moroto', label: 'Moroto' },
      { value: 'moyo', label: 'Moyo' },
      { value: 'mpigi', label: 'Mpigi' },
      { value: 'mubende', label: 'Mubende' },
      { value: 'mukono', label: 'Mukono' },
      { value: 'nabilatuk', label: 'Nabilatuk' },
      { value: 'nakapiripirit', label: 'Nakapiripirit' },
      { value: 'nakaseke', label: 'Nakaseke' },
      { value: 'nakasongola', label: 'Nakasongola' },
      { value: 'namayingo', label: 'Namayingo' },
      { value: 'namisindwa', label: 'Namisindwa' },
      { value: 'napak', label: 'Napak' },
      { value: 'nebbi', label: 'Nebbi' },
      { value: 'ngora', label: 'Ngora' },
      { value: 'ntungamo', label: 'Ntungamo' },
      { value: 'oyam', label: 'Oyam' },
      { value: 'pader', label: 'Pader' },
      { value: 'pallisa', label: 'Pallisa' },
      { value: 'rakai', label: 'Rakai' },
      { value: 'rukiga', label: 'Rukiga' },
      { value: 'rukungiri', label: 'Rukungiri' },
      { value: 'serere', label: 'Serere' },
      { value: 'sironko', label: 'Sironko' },
      { value: 'soroti', label: 'Soroti' },
      { value: 'tororo', label: 'Tororo' },
      { value: 'wakiso', label: 'Wakiso' },
      { value: 'yamumono', label: 'Yamumono' },
    ],
    zimbabwe: [
      { value: 'bulawayo', label: 'Bulawayo' },
      { value: 'harare', label: 'Harare' },
      { value: 'manicaland', label: 'Manicaland' },
      { value: 'mashonaland-central', label: 'Mashonaland Central' },
      { value: 'mashonaland-east', label: 'Mashonaland East' },
      { value: 'mashonaland-west', label: 'Mashonaland West' },
      { value: 'masvingo', label: 'Masvingo' },
      { value: 'matabeleland-north', label: 'Matabeleland North' },
      { value: 'matabeleland-south', label: 'Matabeleland South' },
      { value: 'midlands', label: 'Midlands' },
    ],
    australia: [
      { value: 'new-south-wales', label: 'New South Wales' },
      { value: 'queensland', label: 'Queensland' },
      { value: 'south-australia', label: 'South Australia' },
      { value: 'tasmania', label: 'Tasmania' },
      { value: 'victoria', label: 'Victoria' },
      { value: 'western-australia', label: 'Western Australia' },
      { value: 'northern-territory', label: 'Northern Territory' },
      { value: 'australian-capital-territory', label: 'Australian Capital Territory' },
    ],
    argentina: [
      { value: 'buenos-aires', label: 'Buenos Aires' },
      { value: 'catamarca', label: 'Catamarca' },
      { value: 'chaco', label: 'Chaco' },
      { value: 'chubut', label: 'Chubut' },
      { value: 'cordoba', label: 'Cordoba' },
      { value: 'corrientes', label: 'Corrientes' },
      { value: 'entre-rios', label: 'Entre Rios' },
      { value: 'formosa', label: 'Formosa' },
      { value: 'jujuy', label: 'Jujuy' },
      { value: 'la-pampa', label: 'La Pampa' },
      { value: 'la-rioja', label: 'La Rioja' },
      { value: 'mendoza', label: 'Mendoza' },
      { value: 'misiones', label: 'Misiones' },
      { value: 'neuquen', label: 'Neuquen' },
      { value: 'rio-negro', label: 'Rio Negro' },
      { value: 'salta', label: 'Salta' },
      { value: 'san-juan', label: 'San Juan' },
      { value: 'san-luis', label: 'San Luis' },
      { value: 'santa-cruz', label: 'Santa Cruz' },
      { value: 'santa-fe', label: 'Santa Fe' },
      { value: 'santiago-del-estero', label: 'Santiago del Estero' },
      { value: 'tierra-del-fuego', label: 'Tierra del Fuego' },
      { value: 'tucuman', label: 'Tucuman' },
    ],
    china: [
      { value: 'anhui', label: 'Anhui' },
      { value: 'beijing', label: 'Beijing' },
      { value: 'chongqing', label: 'Chongqing' },
      { value: 'fujian', label: 'Fujian' },
      { value: 'gansu', label: 'Gansu' },
      { value: 'guangdong', label: 'Guangdong' },
      { value: 'guangxi', label: 'Guangxi' },
      { value: 'guizhou', label: 'Guizhou' },
      { value: 'hainan', label: 'Hainan' },
      { value: 'hebei', label: 'Hebei' },
      { value: 'heilongjiang', label: 'Heilongjiang' },
      { value: 'henan', label: 'Henan' },
      { value: 'hong-kong', label: 'Hong Kong' },
      { value: 'hubei', label: 'Hubei' },
      { value: 'hunan', label: 'Hunan' },
      { value: 'jiangsu', label: 'Jiangsu' },
      { value: 'jiangxi', label: 'Jiangxi' },
      { value: 'jilin', label: 'Jilin' },
      { value: 'liaoning', label: 'Liaoning' },
      { value: 'macau', label: 'Macau' },
      { value: 'neimenggu', label: 'Nei Mongol (Inner Mongolia)' },
      { value: 'ningxia', label: 'Ningxia' },
      { value: 'qinghai', label: 'Qinghai' },
      { value: 'shaanxi', label: 'Shaanxi' },
      { value: 'shandong', label: 'Shandong' },
      { value: 'shanghai', label: 'Shanghai' },
      { value: 'shanxi', label: 'Shanxi' },
      { value: 'sichuan', label: 'Sichuan' },
      { value: 'taiwan', label: 'Taiwan' },
      { value: 'tianjin', label: 'Tianjin' },
      { value: 'xinjiang', label: 'Xinjiang' },
      { value: 'xizang', label: 'Xizang (Tibet)' },
      { value: 'yunnan', label: 'Yunnan' },
      { value: 'zhejiang', label: 'Zhejiang' },
    ],
    brazil: [
      { value: 'acre', label: 'Acre' },
      { value: 'alagoas', label: 'Alagoas' },
      { value: 'amapa', label: 'Amapa' },
      { value: 'amazonas', label: 'Amazonas' },
      { value: 'bahia', label: 'Bahia' },
      { value: 'ceara', label: 'Ceara' },
      { value: 'distrito-federal', label: 'Distrito Federal' },
      { value: 'espirito-santo', label: 'Espirito Santo' },
      { value: 'goias', label: 'Goias' },
      { value: 'maranhao', label: 'Maranhao' },
      { value: 'mato-grosso', label: 'Mato Grosso' },
      { value: 'mato-grosso-do-sul', label: 'Mato Grosso do Sul' },
      { value: 'minas-gerais', label: 'Minas Gerais' },
      { value: 'para', label: 'Para' },
      { value: 'paraiba', label: 'Paraiba' },
      { value: 'parana', label: 'Parana' },
      { value: 'pernambuco', label: 'Pernambuco' },
      { value: 'piaui', label: 'Piaui' },
      { value: 'rio-de-janeiro', label: 'Rio de Janeiro' },
      { value: 'rio-grande-do-norte', label: 'Rio Grande do Norte' },
      { value: 'rio-grande-do-sul', label: 'Rio Grande do Sul' },
      { value: 'rondonia', label: 'Rondonia' },
      { value: 'roraima', label: 'Roraima' },
      { value: 'santa-catarina', label: 'Santa Catarina' },
      { value: 'sao-paulo', label: 'Sao Paulo' },
      { value: 'sergipe', label: 'Sergipe' },
      { value: 'tocantins', label: 'Tocantins' },
    ],
    india: [
      { value: 'andhra-pradesh', label: 'Andhra Pradesh' },
      { value: 'arunachal-pradesh', label: 'Arunachal Pradesh' },
      { value: 'assam', label: 'Assam' },
      { value: 'bihar', label: 'Bihar' },
      { value: 'chhattisgarh', label: 'Chhattisgarh' },
      { value: 'goa', label: 'Goa' },
      { value: 'gujarat', label: 'Gujarat' },
      { value: 'haryana', label: 'Haryana' },
      { value: 'himachal-pradesh', label: 'Himachal Pradesh' },
      { value: 'jammu-and-kashmir', label: 'Jammu and Kashmir' },
      { value: 'jharkhand', label: 'Jharkhand' },
      { value: 'karnataka', label: 'Karnataka' },
      { value: 'kerala', label: 'Kerala' },
      { value: 'madhya-pradesh', label: 'Madhya Pradesh' },
      { value: 'maharashtra', label: 'Maharashtra' },
      { value: 'manipur', label: 'Manipur' },
      { value: 'meghalaya', label: 'Meghalaya' },
      { value: 'mizoram', label: 'Mizoram' },
      { value: 'nagaland', label: 'Nagaland' },
      { value: 'odisha', label: 'Odisha' },
      { value: 'punjab', label: 'Punjab' },
      { value: 'rajasthan', label: 'Rajasthan' },
      { value: 'sikkim', label: 'Sikkim' },
      { value: 'tamil-nadu', label: 'Tamil Nadu' },
      { value: 'telangana', label: 'Telangana' },
      { value: 'tripura', label: 'Tripura' },
      { value: 'uttar-pradesh', label: 'Uttar Pradesh' },
      { value: 'uttarakhand', label: 'Uttarakhand' },
      { value: 'west-bengal', label: 'West Bengal' },
    ],
    russia: [
      { value: 'adygea', label: 'Adygea' },
      { value: 'altai-krai', label: 'Altai Krai' },
      { value: 'altai-republic', label: 'Altai Republic' },
      { value: 'amur-oblast', label: 'Amur Oblast' },
      { value: 'arkhangelsk-oblast', label: 'Arkhangelsk Oblast' },
      { value: 'astrakhan-oblast', label: 'Astrakhan Oblast' },
      { value: 'bashkortostan', label: 'Bashkortostan' },
      { value: 'belgorod-oblast', label: 'Belgorod Oblast' },
      { value: 'bryansk-oblast', label: 'Bryansk Oblast' },
      { value: 'buryatia', label: 'Buryatia' },
      { value: 'chechnya', label: 'Chechnya' },
      { value: 'chelyabinsk-oblast', label: 'Chelyabinsk Oblast' },
      { value: 'chukotka', label: 'Chukotka' },
      { value: 'chuvashia', label: 'Chuvashia' },
      { value: 'dagestan', label: 'Dagestan' },
      { value: 'irkutsk-oblast', label: 'Irkutsk Oblast' },
      { value: 'ivanovo-oblast', label: 'Ivanovo Oblast' },
      { value: 'jewish-autonomous-oblast', label: 'Jewish Autonomous Oblast' },
      { value: 'kabardino-balkaria', label: 'Kabardino-Balkaria' },
      { value: 'kaliningrad-oblast', label: 'Kaliningrad Oblast' },
      { value: 'kalmykia', label: 'Kalmykia' },
      { value: 'kaluga-oblast', label: 'Kaluga Oblast' },
      { value: 'kamchatka-krai', label: 'Kamchatka Krai' },
      { value: 'karachay-cherkessia', label: 'Karachay-Cherkessia' },
      { value: 'karelia', label: 'Karelia' },
      { value: 'kemerovo-oblast', label: 'Kemerovo Oblast' },
      { value: 'khabarovsk-krai', label: 'Khabarovsk Krai' },
      { value: 'khakassia', label: 'Khakassia' },
      { value: 'khanty-mansi-autonomous-okrug', label: 'Khanty-Mansi Autonomous Okrug' },
      { value: 'kirov-oblast', label: 'Kirov Oblast' },
      { value: 'komi', label: 'Komi' },
      { value: 'kostroma-oblast', label: 'Kostroma Oblast' },
      { value: 'krasnodar-krai', label: 'Krasnodar Krai' },
      { value: 'krasnoyarsk-krai', label: 'Krasnoyarsk Krai' },
      { value: 'kurgan-oblast', label: 'Kurgan Oblast' },
      { value: 'kursk-oblast', label: 'Kursk Oblast' },
      { value: 'leningrad-oblast', label: 'Leningrad Oblast' },
      { value: 'lipetsk-oblast', label: 'Lipetsk Oblast' },
      { value: 'magadan-oblast', label: 'Magadan Oblast' },
      { value: 'mari-el', label: 'Mari El' },
      { value: 'mordovia', label: 'Mordovia' },
      { value: 'moscow-oblast', label: 'Moscow Oblast' },
      { value: 'murmansk-oblast', label: 'Murmansk Oblast' },
      { value: 'nenets-autonomous-okrug', label: 'Nenets Autonomous Okrug' },
      { value: 'nizhny-novgorod-oblast', label: 'Nizhny Novgorod Oblast' },
      { value: 'novgorod-oblast', label: 'Novgorod Oblast' },
      { value: 'novosibirsk-oblast', label: 'Novosibirsk Oblast' },
      { value: 'omsk-oblast', label: 'Omsk Oblast' },
      { value: 'orenburg-oblast', label: 'Orenburg Oblast' },
      { value: 'oryol-oblast', label: 'Oryol Oblast' },
      { value: 'penza-oblast', label: 'Penza Oblast' },
      { value: 'perm-krai', label: 'Perm Krai' },
      { value: 'primorsky-krai', label: 'Primorsky Krai' },
      { value: 'pskov-oblast', label: 'Pskov Oblast' },
      { value: 'rostov-oblast', label: 'Rostov Oblast' },
      { value: 'ryazan-oblast', label: 'Ryazan Oblast' },
      { value: 'sakha-republic', label: 'Sakha Republic (Yakutia)' },
      { value: 'sakhalin-oblast', label: 'Sakhalin Oblast' },
      { value: 'samara-oblast', label: 'Samara Oblast' },
      { value: 'saratov-oblast', label: 'Saratov Oblast' },
      { value: 'smolensk-oblast', label: 'Smolensk Oblast' },
      { value: 'stavropol-krai', label: 'Stavropol Krai' },
      { value: 'sverdlovsk-oblast', label: 'Sverdlovsk Oblast' },
      { value: 'tambov-oblast', label: 'Tambov Oblast' },
      { value: 'tatarstan', label: 'Tatarstan' },
      { value: 'tver-oblast', label: 'Tver Oblast' },
      { value: 'tomsk-oblast', label: 'Tomsk Oblast' },
      { value: 'tuva', label: 'Tuva' },
      { value: 'tula-oblast', label: 'Tula Oblast' },
      { value: 'tyumen-oblast', label: 'Tyumen Oblast' },
      { value: 'udmurtia', label: 'Udmurtia' },
      { value: 'ulyanovsk-oblast', label: 'Ulyanovsk Oblast' },
      { value: 'vladimir-oblast', label: 'Vladimir Oblast' },
      { value: 'volgograd-oblast', label: 'Volgograd Oblast' },
      { value: 'vologda-oblast', label: 'Vologda Oblast' },
      { value: 'voronezh-oblast', label: 'Voronezh Oblast' },
      { value: 'yakutia', label: 'Yakutia' },
      { value: 'yaroslavl-oblast', label: 'Yaroslavl Oblast' },
      { value: 'yugra', label: 'Yugra' },
      { value: 'zabaykalsky-krai', label: 'Zabaykalsky Krai' },
    ],
    france: [
      { value: 'auvergne-rhone-alpes', label: 'Auvergne-Rhône-Alpes' },
      { value: 'bourgogne-franche-comte', label: 'Bourgogne-Franche-Comté' },
      { value: 'brittany', label: 'Brittany' },
      { value: 'centre-val-de-loire', label: 'Centre-Val de Loire' },
      { value: 'corsica', label: 'Corsica' },
      { value: 'grand-est', label: 'Grand Est' },
      { value: 'hauts-de-france', label: 'Hauts-de-France' },
      { value: 'ile-de-france', label: 'Île-de-France' },
      { value: 'normandy', label: 'Normandy' },
      { value: 'nouvelle-aquitaine', label: 'Nouvelle-Aquitaine' },
      { value: 'occitanie', label: 'Occitanie' },
      { value: 'pays-de-la-loire', label: 'Pays de la Loire' },
      { value: 'provence-alpes-cote-dazur', label: 'Provence-Alpes-Côte d\'Azur' },
    ],
    germany: [
      { value: 'baden-wurttemberg', label: 'Baden-Württemberg' },
      { value: 'bavaria', label: 'Bavaria' },
      { value: 'berlin', label: 'Berlin' },
      { value: 'brandenburg', label: 'Brandenburg' },
      { value: 'bremen', label: 'Bremen' },
      { value: 'hamburg', label: 'Hamburg' },
      { value: 'hesse', label: 'Hesse' },
      { value: 'lower-saxony', label: 'Lower Saxony' },
      { value: 'mecklenburg-vorpommern', label: 'Mecklenburg-Vorpommern' },
      { value: 'north-rhine-westphalia', label: 'North Rhine-Westphalia' },
      { value: 'rhineland-palatinate', label: 'Rhineland-Palatinate' },
      { value: 'saarland', label: 'Saarland' },
      { value: 'saxony', label: 'Saxony' },
      { value: 'saxony-anhalt', label: 'Saxony-Anhalt' },
      { value: 'schleswig-holstein', label: 'Schleswig-Holstein' },
      { value: 'thuringia', label: 'Thuringia' },
    ],
    italy: [
      { value: 'abruzzo', label: 'Abruzzo' },
      { value: 'basilicata', label: 'Basilicata' },
      { value: 'calabria', label: 'Calabria' },
      { value: 'campania', label: 'Campania' },
      { value: 'emilia-romagna', label: 'Emilia-Romagna' },
      { value: 'friuli-venezia-giulia', label: 'Friuli Venezia Giulia' },
      { value: 'lazio', label: 'Lazio' },
      { value: 'liguria', label: 'Liguria' },
      { value: 'lombardy', label: 'Lombardy' },
      { value: 'marche', label: 'Marche' },
      { value: 'molise', label: 'Molise' },
      { value: 'piedmont', label: 'Piedmont' },
      { value: 'puglia', label: 'Puglia' },
      { value: 'sardinia', label: 'Sardinia' },
      { value: 'sicily', label: 'Sicily' },
      { value: 'trentino-alto-adige', label: 'Trentino-Alto Adige' },
      { value: 'tuscany', label: 'Tuscany' },
      { value: 'umbria', label: 'Umbria' },
      { value: 'valle-daosta', label: 'Valle d\'Aosta' },
      { value: 'veneto', label: 'Veneto' },
    ],
    japan: [
      { value: 'aichi', label: 'Aichi' },
      { value: 'akita', label: 'Akita' },
      { value: 'aomori', label: 'Aomori' },
      { value: 'chiba', label: 'Chiba' },
      { value: 'ehime', label: 'Ehime' },
      { value: 'fukui', label: 'Fukui' },
      { value: 'fukuoka', label: 'Fukuoka' },
      { value: 'fukushima', label: 'Fukushima' },
      { value: 'gifu', label: 'Gifu' },
      { value: 'gunma', label: 'Gunma' },
      { value: 'hiroshima', label: 'Hiroshima' },
      { value: 'hokkaido', label: 'Hokkaido' },
      { value: 'hyogo', label: 'Hyogo' },
      { value: 'ibaraki', label: 'Ibaraki' },
      { value: 'ishikawa', label: 'Ishikawa' },
      { value: 'iwate', label: 'Iwate' },
      { value: 'kagawa', label: 'Kagawa' },
      { value: 'kagoshima', label: 'Kagoshima' },
      { value: 'kanagawa', label: 'Kanagawa' },
      { value: 'kochi', label: 'Kochi' },
      { value: 'kumamoto', label: 'Kumamoto' },
      { value: 'kyoto', label: 'Kyoto' },
      { value: 'mie', label: 'Mie' },
      { value: 'miyagi', label: 'Miyagi' },
      { value: 'miyazaki', label: 'Miyazaki' },
      { value: 'nagano', label: 'Nagano' },
      { value: 'nagasaki', label: 'Nagasaki' },
      { value: 'nara', label: 'Nara' },
      { value: 'niigata', label: 'Niigata' },
      { value: 'oita', label: 'Oita' },
      { value: 'okayama', label: 'Okayama' },
      { value: 'okinawa', label: 'Okinawa' },
      { value: 'osaka', label: 'Osaka' },
      { value: 'saga', label: 'Saga' },
      { value: 'saitama', label: 'Saitama' },
      { value: 'shiga', label: 'Shiga' },
      { value: 'shimane', label: 'Shimane' },
      { value: 'shizuoka', label: 'Shizuoka' },
      { value: 'tochigi', label: 'Tochigi' },
      { value: 'tokushima', label: 'Tokushima' },
      { value: 'tokyo', label: 'Tokyo' },
      { value: 'tottori', label: 'Tottori' },
      { value: 'toyama', label: 'Toyama' },
      { value: 'wakayama', label: 'Wakayama' },
      { value: 'yamagata', label: 'Yamagata' },
      { value: 'yamaguchi', label: 'Yamaguchi' },
      { value: 'yamanashi', label: 'Yamanashi' },
    ],
    // Add more countries as needed
  };
  
