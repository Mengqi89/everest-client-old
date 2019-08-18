const SCHOOLS = [
  {
    username: 'TestSchool1',
    password: 'passwordTestSchool1',
    school_name: 'Test School 1',
    school_type: 'Middle School',
    school_size: 1300,
    public_or_private: 'private',
    curriculum: 'AP',
    location: 'Chengdu',
    notable_facts:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in suscipit tortor, eu dignissim ante. Nulla fringilla blandit ligula sit amet laoreet. Donec sagittis nisi tortor, a malesuada lacus iaculis eu. In felis est, consectetur a lorem a, efficitur hendrerit orci. Sed nibh tellus, porta id sapien in, gravida pulvinar dui. Maecenas congue dui in ante tincidunt congue. Etiam id blandit ipsum. Cras quis libero rhoncus, gravida nisi id, venenatis sapien. Integer non nunc elit. Proin hendrerit dignissim lacus, at porttitor felis pellentesque in. Donec dictum molestie lectus fringilla egestas. Aliquam erat volutpat. Curabitur ullamcorper dolor non dui accumsan elementum. Curabitur pretium, velit ac volutpat laoreet, lacus sem tempus lectus, vel dignissim nunc leo vel arcu. Morbi quis pretium magna.',
    school_website: 'www.google.com',
    housingInformation: {
      apartment_provided: true,
      housing_assistance: 'Will help teacher find housing.',
      size_of_housing: '2 Bed/2 Bath',
      // "shared_room": true,
      // "private_room": false,
      shared_or_private_living_space: 'Shared',
      housing_notes: 'Shared living room with 1 other teacher',
      housing_on_or_off: 'Off Campus',
      time_to_get_to_class: '10 minute walk',
      distance_to_public_trans: '10 minute walk to nearest subway stop',
      school_charge_rent: false,
      school_rent_notes: 'No rent',
      school_charge_utils: false,
      school_utils_notes: 'No charge',
      furnished: true,
      furnished_notes: 'Queen-size bed, writing desk, six chairs',
      appliances_included:
        'Refrigerator, microwave, gas stove, television, air conditioner, washing machine',
      internet: 'Wired and wireless; wireless only; can be installed; no.',
      computer_included: 'Desktop'
    },
    insuranceInformation: {
      school_provide_health_insurance: true,
      provided_insurance_notes: 'Up to ¥1,000,000 annual coverage; no',
      medical_expeneses_paid: '¥1,000 deductible',
      disability_insurance: false,
      other_insurance: false
    },
    visaInformation: {
      assistance_obtaining_work_visa: true,
      school_pay_work_visa: 'Yes',
      school_reimburse_costs_for_obtaining_visa_in_us: true
    },
    otherServices: {
      assistance_opening_chinese_bank_account: true,
      assistance_shopping_and_settling_in: true,
      organized_trips_for_teachers: true
    },
    lifestyleInformation: {
      other_western_teachers_at_school: 3,
      western_amenities_available_near_school_town:
        'Restaurants, shopping, bars'
    }
  },
  {
    username: 'TestSchool2',
    password: 'passwordTestSchool2',
    school_name: 'Test School 2',
    school_type: 'High School',
    school_size: 1200,
    public_or_private: 'public',
    curriculum: 'AP',
    location: 'Chengdu',
    notable_facts:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in suscipit tortor, eu dignissim ante. Nulla fringilla blandit ligula sit amet laoreet. Donec sagittis nisi tortor, a malesuada lacus iaculis eu. In felis est, consectetur a lorem a, efficitur hendrerit orci. Sed nibh tellus, porta id sapien in, gravida pulvinar dui. Maecenas congue dui in ante tincidunt congue. Etiam id blandit ipsum. Cras quis libero rhoncus, gravida nisi id, venenatis sapien. Integer non nunc elit. Proin hendrerit dignissim lacus, at porttitor felis pellentesque in. Donec dictum molestie lectus fringilla egestas. Aliquam erat volutpat. Curabitur ullamcorper dolor non dui accumsan elementum. Curabitur pretium, velit ac volutpat laoreet, lacus sem tempus lectus, vel dignissim nunc leo vel arcu. Morbi quis pretium magna.',
    school_website: 'www.google.com',
    housingInformation: {
      apartment_provided: true,
      housing_assistance: 'Will help teacher find housing.',
      size_of_housing: '2 Bed/2 Bath',
      shared_room: true,
      private_room: false,
      housing_notes: 'Shared living room with 1 other teacher',
      housing_on_or_off: 'Off Campus',
      time_to_get_to_class: '10 minute walk',
      distance_to_public_trans: '10 minute walk to nearest subway stop',
      school_charge_rent: false,
      school_rent_notes: 'No rent',
      school_charge_utils: false,
      school_utils_notes: 'No charge',
      furnished: true,
      furnished_notes: 'Queen-size bed, writing desk, six chairs',
      appliances_included:
        'Refrigerator, microwave, gas stove, television, air conditioner, washing machine',
      internet: 'Wired and wireless; wireless only; can be installed; no.',
      computer_included: 'Desktop'
    },
    insuranceInformation: {
      school_provide_health_insurance: true,
      provided_insurance_notes: 'Up to ¥1,000,000 annual coverage; no',
      medical_expeneses_paid: '¥1,000 deductible',
      disability_insurance: false,
      other_insurance: false
    },
    visaInformation: {
      assistance_obtaining_work_visa: true,
      school_pay_work_visa: 'Yes',
      school_reimburse_costs_for_obtaining_visa_in_us: true
    },
    otherServices: {
      assistance_opening_chinese_bank_account: true,
      assistance_shopping_and_settling_in: true,
      organized_trips_for_teachers: true
    },
    lifestyleInformation: {
      other_western_teachers_at_school: 3,
      western_amenities_available_near_school_town:
        'Restaurants, shopping, bars'
    }
  }
]

module.exports = SCHOOLS
