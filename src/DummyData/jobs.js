const job = {
  jobDuties: {
    jobTitle: 'English Instructor',
    courses: 'Honors English',
    gradeLevel: '11th grade',
    textbookUsed: 'NULL',
    numberOfCoursesToTeach: 2,
    numberOfSections: 6,
    maxClassSize: 25,
    totalHoursOfClassPerWeek: 20,
    extraDutiesRequired: 'office hours',
    hoursOfExtraDutiesPerWeek: 5
  },
  qualifications: {
    minimumDegreeRequired: 'BA',
    preferredDegree: 'MA',
    minimumExperienceRequired: 1,
    preferredExperienceLevel: 3,
    nativeEnglishSpeaker: true,
    otherQualification: 'preferred experience teaching abroad'
  },
  salary: {
    basePayPerMonth: '10,000',
    bonuses: true,
    planeTicketProvidedToChina: true,
    planeTicketProvidedFromChina: true,
    planeTicketReimbursment: false,
    paidTimeOff: false,
    sickDays: 10,
    personalDays: 5,
    TimeOffForHolidays: false,
    TotalSalary: '115,000'
  },
  Housing: {
    doesTheSchoolProvideApartmentsOrHousingAssistance: 'apartment',
    size: '40sq m',
    numberOfRooms: 4,
    sharedLivingSpace: true,
    onCampus: true,
    distanceFromSchool: 1,
    rentPrice: 0,
    utilities: 0,
    furnished: false,
    applianciesIncluded: true,
    internetAccess: true,
    computerIncluded: true
  },
  Insurance: {
    healthCareProvided: true,
    disabilityInsuranceProvided: true
  },
  Visa: {
    visaAssistanceProvided: true,
    visaFeesProvided: false,
    visaReimbursed: true
  },
  OtherServices: {
    assistanceWithOpeningBankAccount: false,
    assistanceShopping: false,
    organizedTripsForTeachers: false
  },
  Lifestyle: {
    numberOfWesternTeachersAtSchool: 4,
    westernAmenitiesNearSchool: false
  }
};

module.exports = job;
