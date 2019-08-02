const SCHOOLS = [
  {
    name: 'Test School 1',
    type: 'Middle School',
    size: 1200,
    public: true,
    curriculum: 'AP',
    location: 'Chengdu',
    notableFacts: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in suscipit tortor, eu dignissim ante. Nulla fringilla blandit ligula sit amet laoreet. Donec sagittis nisi tortor, a malesuada lacus iaculis eu. In felis est, consectetur a lorem a, efficitur hendrerit orci. Sed nibh tellus, porta id sapien in, gravida pulvinar dui. Maecenas congue dui in ante tincidunt congue. Etiam id blandit ipsum. Cras quis libero rhoncus, gravida nisi id, venenatis sapien. Integer non nunc elit. Proin hendrerit dignissim lacus, at porttitor felis pellentesque in. Donec dictum molestie lectus fringilla egestas. Aliquam erat volutpat. Curabitur ullamcorper dolor non dui accumsan elementum. Curabitur pretium, velit ac volutpat laoreet, lacus sem tempus lectus, vel dignissim nunc leo vel arcu. Morbi quis pretium magna.',
    schoolWebsite: 'www.google.com',
    housingInformation: {
      apartmentProvided: true,
      housingAssistance: 'Will help teacher find housing.',
      size: '2 Bed/2 Bath',
      shared: true,
      private: false,
      housingNotes: 'Shared living room with 1 other teacher',
      housingOnOrOff: 'Off Campus',
      timeToGetToClass: '10 minute walk',
      distanceToPublicTrans: '10 minute walk to nearest subway stop',
      schoolChargeRent: false,
      schoolRent: 'No rent',
      schoolChargeUtils: false,
      schoolUtils: 'No charge',
      furnished: true,
      furnishedNotes: 'Queen-size bed, writing desk, six chairs',
      appliancesIncluded: 'Refrigerator, microwave, gas stove, television, air conditioner, washing machine',
      internet: 'Wired and wireless; wireless only; can be installed; no.',
      computerIncluded: 'Desktop'
    },
    insuranceInformation: {
      schoolProvideHealthInsurance: true,
      providedInsuranceNotes: 'Up to ¥1,000,000 annual coverage; no',
      medicalExpenesesPaid: '¥1,000 deductible',
      disabilityInsurance: false,
      otherInsurance: false
    },
    visaInformation: {
      assistanceObtainingWorkVisa: true,
      schoolPayWorkVisa: 'Yes',
      schoolReimburseCostsForObtainingVisaInUs: true
    },
    otherServices: {
      assistanceOpeningChineseBankAccount: true,
      assistanceShoppingAndSettlingIn: true,
      organizedTripsForTeachers: true
    },
    lifestyleInformation: {
      otherWesternTeachersAtSchool: 3,
      westernAmenitiesAvailableNearSchoolTown: 'Restaurants, shopping, bars'
    }
  },
  {
    name: 'Test School 2',
    type: 'High School',
    size: 500,
    public: false,
    curriculum: 'IGCSE',
    location: 'Sichuan',
    notableFacts: 'Maecenas pharetra libero at metus mattis blandit et eu urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean iaculis, purus in ultrices tempus, augue elit ultrices odio, eget tempus dui neque scelerisque nibh. Phasellus egestas eros congue posuere vehicula. Quisque eu urna magna. Donec eget nisl vel est lacinia malesuada. Phasellus porta dignissim nisl, id ultricies leo consequat non. Mauris in purus tortor. In ullamcorper suscipit efficitur. Donec eget libero laoreet, condimentum tellus sed, cursus tortor.',
    schoolWebsite: 'www.facebook.com',
    housingInformation: {
      apartmentProvided: false, //rest is not applicable since apartment not included
      // housingAssistance: 'Will help teacher find housing.',
      // size: '',
      // shared: null,
      // private: null,
      // housingNotes: '',
      // housingOnOrOff: '',
      // timeToGetToClass: '10 minute walk',
      // distanceToPublicTrans: '10 minute walk to nearest subway stop',
      // schoolChargeRent: false,
      // schoolRent: 'No rent',
      // schoolChargeUtils: false,
      // schoolUtils: 'No charge',
      // furnished: true,
      // furnishedNotes: 'Queen-size bed, writing desk, six chairs',
      // appliancesIncluded: 'Refrigerator, microwave, gas stove, television, air conditioner, washing machine',
      // internet: 'Wired and wireless; wireless only; can be installed; no.',
      // computerIncluded: 'Desktop'
    },
    insuranceInformation: {
      schoolProvideHealthInsurance: false, //commented out below cause false
      // providedInsuranceNotes: '',
      // medicalExpenesesPaid: '¥1,000 deductible',
      disabilityInsurance: false,
      otherInsurance: false
    },
    visaInformation: {
      assistanceObtainingWorkVisa: true,
      schoolPayWorkVisa: 'Yes',
      schoolReimburseCostsForObtainingVisaInUs: true
    },
    otherServices: {
      assistanceOpeningChineseBankAccount: true,
      assistanceShoppingAndSettlingIn: true,
      organizedTripsForTeachers: true
    },
    lifestyleInformation: {
      otherWesternTeachersAtSchool: 4,
      westernAmenitiesAvailableNearSchoolTown: 'Restaurants, shopping, bars'
    }
  }
]

module.exports = SCHOOLS;