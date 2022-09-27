/* tslint:disable */
/* eslint-disable */

export const getLocation = /* GraphQL */ `
  query GetLocation($code: String) {
    getLocation(code: $code) {
      code
      name
      phone1
      phone2
      phone3
      email
      license1
      license2
      license3
      license4
    }
  }
`
export const listLocations = /* GraphQL */ `
  query ListLocations($show: String, $city: String) {
    listLocations(show: $show, city: $city) {
      count
      records {
        code
        name
        address {
          street
          city
          state
          zip
        }
        phone1
        phone2
        phone3
        email
        license1
        license2
        license3
        license4
      }
    }
  }
`
export const listLocationsDB = /* GraphQL */ `
  query ListLocationsDB($show: String, $city: String) {
    listLocationsDB(show: $show, city: $city) {
      count
      records {
        code
        name
        city
        state
        zip
        phone1
        phone2
        phone3
        email
        license1
        license2
        license3
        license4
      }
    }
  }
`;

export const getProviderSlots = /* GraphQL */ `
  query GetProviderSlots($input: GetProviderSlotsInput) {
    getProviderSlots(input: $input) {
      count
      providerId
      records {
        id
        date
        time
        length
        isOccupied
      }
    }
  }
`
export const getAccessLogs = /* GraphQL */ `
  query GetAccessLogs($userId: ID) {
    getAccessLogs(userId: $userId) {
      count
      userId
      records {
        id
        date
        time
        person
        type
        area
        action
      }
    }
  }
`
export const getPatient = /* GraphQL */ `
  query GetPatient($id: ID!) {
    getPatient(id: $id) {
      id
      phoneOther {
        id
        patientPhoneOtherId
        phoneType1
        phoneType2
        phoneType3
        phone1
        phone2
        phone3
        isPreferred1
        isPreferred2
        isPreferred3
        ok1
        ok2
        ok3
        heardFrom
        specify
        genderPronoun
        genderIdentity
        sexualOrientation
        maritalStatus
        employmentStatus
        preferredLanguage
        race
        ethnicity
        annualIncome
        numberInHousehold
        communicateElectronically
        createdAt
        updatedAt
        phoneOtherPatientId
      }
      communicationPreference {
        id
        patientCommunicationPreferenceId
        appointmentInformation
        healthInformation
        patientSurvey
        visitSummary
        receivePaperlessStatement
        paperlessStatement
        staffTextMessaging
        checkinProcessTextMessaging
        agreed
        createdAt
        updatedAt
        communicationPreferencePatientId
      }
      location {
        code
        name
        phone1
        phone2
        phone3
        email
        license1
        license2
        license3
        license4
      }
      patientInsurances {
        nextToken
      }
      contacts {
        nextToken
      }
      patientProviders {
        nextToken
      }
      patientEmployers {
        nextToken
      }
      appointments {
        nextToken
      }
      forms {
        nextToken
      }
      allergies {
        nextToken
      }
      vitals {
        nextToken
      }
      educations {
        nextToken
      }
      problems {
        nextToken
      }
      documents {
        nextToken
      }
      title
      firstName
      middleName
      lastName
      dob
      sex
      ssn
      email
      mailingAddress {
        street
        city
        state
        zip
      }
      physicalAddress {
        street
        city
        state
        zip
      }
      sameAsMailing
      distance
      profilePicture
      createdAt
      updatedAt
      patientPhoneOtherId
      patientCommunicationPreferenceId
    }
  }
`
export const listPatients = /* GraphQL */ `
  query ListPatients(
    $filter: ModelPatientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPatients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      nextToken
    }
  }
`
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      userPatientId
      patient {
        id
        phoneOther {
          id
          patientPhoneOtherId
          patient {
            id
            phoneOther {
              id
              patientPhoneOtherId
              phoneType1
              phoneType2
              phoneType3
              phone1
              phone2
              phone3
              isPreferred1
              isPreferred2
              isPreferred3
              ok1
              ok2
              ok3
              heardFrom
              specify
              genderPronoun
              genderIdentity
              sexualOrientation
              maritalStatus
              employmentStatus
              preferredLanguage
              race
              ethnicity
              annualIncome
              numberInHousehold
              communicateElectronically
              createdAt
              updatedAt
              phoneOtherPatientId
            }
            communicationPreference {
              id
              patientCommunicationPreferenceId
              appointmentInformation
              healthInformation
              patientSurvey
              visitSummary
              receivePaperlessStatement
              paperlessStatement
              staffTextMessaging
              checkinProcessTextMessaging
              agreed
              createdAt
              updatedAt
              communicationPreferencePatientId
            }
            location {
              code
              name
              phone1
              phone2
              phone3
              email
              license1
              license2
              license3
              license4
            }
            patientInsurances {
              nextToken
            }
            contacts {
              nextToken
            }
            patientProviders {
              nextToken
            }
            patientEmployers {
              nextToken
            }
            appointments {
              nextToken
            }
            forms {
              nextToken
            }
            allergies {
              nextToken
            }
            vitals {
              nextToken
            }
            educations {
              nextToken
            }
            problems {
              nextToken
            }
            documents {
              nextToken
            }
            title
            firstName
            middleName
            lastName
            dob
            sex
            ssn
            email
            mailingAddress {
              street
              city
              state
              zip
            }
            physicalAddress {
              street
              city
              state
              zip
            }
            sameAsMailing
            distance
            profilePicture
            createdAt
            updatedAt
            patientPhoneOtherId
            patientCommunicationPreferenceId
          }
          phoneType1
          phoneType2
          phoneType3
          phone1
          phone2
          phone3
          isPreferred1
          isPreferred2
          isPreferred3
          ok1
          ok2
          ok3
          heardFrom
          specify
          genderPronoun
          genderIdentity
          sexualOrientation
          maritalStatus
          employmentStatus
          preferredLanguage
          race
          ethnicity
          annualIncome
          numberInHousehold
          communicateElectronically
          createdAt
          updatedAt
          phoneOtherPatientId
        }
        communicationPreference {
          id
          patientCommunicationPreferenceId
          patient {
            id
            phoneOther {
              id
              patientPhoneOtherId
              phoneType1
              phoneType2
              phoneType3
              phone1
              phone2
              phone3
              isPreferred1
              isPreferred2
              isPreferred3
              ok1
              ok2
              ok3
              heardFrom
              specify
              genderPronoun
              genderIdentity
              sexualOrientation
              maritalStatus
              employmentStatus
              preferredLanguage
              race
              ethnicity
              annualIncome
              numberInHousehold
              communicateElectronically
              createdAt
              updatedAt
              phoneOtherPatientId
            }
            communicationPreference {
              id
              patientCommunicationPreferenceId
              appointmentInformation
              healthInformation
              patientSurvey
              visitSummary
              receivePaperlessStatement
              paperlessStatement
              staffTextMessaging
              checkinProcessTextMessaging
              agreed
              createdAt
              updatedAt
              communicationPreferencePatientId
            }
            location {
              code
              name
              phone1
              phone2
              phone3
              email
              license1
              license2
              license3
              license4
            }
            patientInsurances {
              nextToken
            }
            contacts {
              nextToken
            }
            patientProviders {
              nextToken
            }
            patientEmployers {
              nextToken
            }
            appointments {
              nextToken
            }
            forms {
              nextToken
            }
            allergies {
              nextToken
            }
            vitals {
              nextToken
            }
            educations {
              nextToken
            }
            problems {
              nextToken
            }
            documents {
              nextToken
            }
            title
            firstName
            middleName
            lastName
            dob
            sex
            ssn
            email
            mailingAddress {
              street
              city
              state
              zip
            }
            physicalAddress {
              street
              city
              state
              zip
            }
            sameAsMailing
            distance
            profilePicture
            createdAt
            updatedAt
            patientPhoneOtherId
            patientCommunicationPreferenceId
          }
          appointmentInformation
          healthInformation
          patientSurvey
          visitSummary
          receivePaperlessStatement
          paperlessStatement
          staffTextMessaging
          checkinProcessTextMessaging
          agreed
          createdAt
          updatedAt
          communicationPreferencePatientId
        }
        location {
          code
          name
          address {
            street
            city
            state
            zip
          }
          phone1
          phone2
          phone3
          email
          license1
          license2
          license3
          license4
        }
        patientInsurances {
          items {
            id
            patient {
              id
              title
              firstName
              middleName
              lastName
              dob
              sex
              ssn
              email
              sameAsMailing
              distance
              profilePicture
              createdAt
              updatedAt
              patientPhoneOtherId
              patientCommunicationPreferenceId
            }
            patientPatientInsurancesId
            insurance {
              id
              name
              phone1
              phone2
              phone3
              email
              createdAt
              updatedAt
            }
            insurancePatientInsurancesId
            cards {
              nextToken
            }
            effectiveDate
            ssid
            group
            hmo
            copay
            amount
            relationship
            firstName
            lastName
            address {
              street
              city
              state
              zip
            }
            phone
            dob
            sex
            createdAt
            updatedAt
          }
          nextToken
        }
        contacts {
          items {
            id
            patient {
              id
              title
              firstName
              middleName
              lastName
              dob
              sex
              ssn
              email
              sameAsMailing
              distance
              profilePicture
              createdAt
              updatedAt
              patientPhoneOtherId
              patientCommunicationPreferenceId
            }
            patientContactsId
            contactType
            firstName
            middleName
            lastName
            address {
              street
              city
              state
              zip
            }
            phone1
            phone2
            phone3
            ok1
            ok2
            ok3
            isPreferred
            email
            createdAt
            updatedAt
          }
          nextToken
        }
        patientProviders {
          items {
            id
            patient {
              id
              title
              firstName
              middleName
              lastName
              dob
              sex
              ssn
              email
              sameAsMailing
              distance
              profilePicture
              createdAt
              updatedAt
              patientPhoneOtherId
              patientCommunicationPreferenceId
            }
            patientPatientProvidersId
            provider {
              id
              firstName
              lastName
              phone1
              phone2
              phone3
              createdAt
              updatedAt
            }
            providerPatientProvidersId
            isPrimary
            createdAt
            updatedAt
          }
          nextToken
        }
        patientEmployers {
          items {
            id
            patient {
              id
              title
              firstName
              middleName
              lastName
              dob
              sex
              ssn
              email
              sameAsMailing
              distance
              profilePicture
              createdAt
              updatedAt
              patientPhoneOtherId
              patientCommunicationPreferenceId
            }
            patientPatientEmployersId
            employer {
              id
              name
              phone1
              phone2
              phone3
              email
              createdAt
              updatedAt
            }
            employerPatientEmployersId
            occupation
            createdAt
            updatedAt
          }
          nextToken
        }
        appointments {
          items {
            id
            patient {
              id
              title
              firstName
              middleName
              lastName
              dob
              sex
              ssn
              email
              sameAsMailing
              distance
              profilePicture
              createdAt
              updatedAt
              patientPhoneOtherId
              patientCommunicationPreferenceId
            }
            patientAppointmentsId
            provider {
              id
              firstName
              lastName
              phone1
              phone2
              phone3
              createdAt
              updatedAt
            }
            providerAppointmentsId
            appointmentType {
              id
              code
              description
              comment
              slot
              limit
              createdAt
              updatedAt
            }
            appointmentTypeAppointmentsId
            date
            time
            length
            comment
            checkin
            checkout
            isMissed
            status
            createdAt
            updatedAt
          }
          nextToken
        }
        forms {
          items {
            id
            patient {
              id
              title
              firstName
              middleName
              lastName
              dob
              sex
              ssn
              email
              sameAsMailing
              distance
              profilePicture
              createdAt
              updatedAt
              patientPhoneOtherId
              patientCommunicationPreferenceId
            }
            patientFormsId
            name
            date
            status
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        allergies {
          items {
            id
            patient {
              id
              title
              firstName
              middleName
              lastName
              dob
              sex
              ssn
              email
              sameAsMailing
              distance
              profilePicture
              createdAt
              updatedAt
              patientPhoneOtherId
              patientCommunicationPreferenceId
            }
            patientAllergiesId
            allergen
            reaction
            comment
            date
            severity
            createdAt
            updatedAt
          }
          nextToken
        }
        vitals {
          items {
            id
            patient {
              id
              title
              firstName
              middleName
              lastName
              dob
              sex
              ssn
              email
              sameAsMailing
              distance
              profilePicture
              createdAt
              updatedAt
              patientPhoneOtherId
              patientCommunicationPreferenceId
            }
            patientVitalsId
            date
            height
            weight
            bmi
            bpd
            bps
            pulse
            temp
            createdAt
            updatedAt
          }
          nextToken
        }
        educations {
          items {
            id
            patient {
              id
              title
              firstName
              middleName
              lastName
              dob
              sex
              ssn
              email
              sameAsMailing
              distance
              profilePicture
              createdAt
              updatedAt
              patientPhoneOtherId
              patientCommunicationPreferenceId
            }
            patientEducationsId
            date
            description
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        problems {
          items {
            id
            patient {
              id
              title
              firstName
              middleName
              lastName
              dob
              sex
              ssn
              email
              sameAsMailing
              distance
              profilePicture
              createdAt
              updatedAt
              patientPhoneOtherId
              patientCommunicationPreferenceId
            }
            patientProblemsId
            provider {
              id
              firstName
              lastName
              phone1
              phone2
              phone3
              createdAt
              updatedAt
            }
            providerProblemsId
            date
            updatedDate
            description
            code
            severity
            status
            createdAt
            updatedAt
          }
          nextToken
        }
        documents {
          items {
            id
            patient {
              id
              title
              firstName
              middleName
              lastName
              dob
              sex
              ssn
              email
              sameAsMailing
              distance
              profilePicture
              createdAt
              updatedAt
              patientPhoneOtherId
              patientCommunicationPreferenceId
            }
            patientDocumentsId
            date
            subject
            name
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        title
        firstName
        middleName
        lastName
        dob
        sex
        ssn
        email
        mailingAddress {
          street
          city
          state
          zip
        }
        physicalAddress {
          street
          city
          state
          zip
        }
        sameAsMailing
        distance
        profilePicture
        createdAt
        updatedAt
        patientPhoneOtherId
        patientCommunicationPreferenceId
      }
      userSettings {
        items {
          id
          user {
            id
            userPatientId
            patient {
              id
              title
              firstName
              middleName
              lastName
              dob
              sex
              ssn
              email
              sameAsMailing
              distance
              profilePicture
              createdAt
              updatedAt
              patientPhoneOtherId
              patientCommunicationPreferenceId
            }
            userSettings {
              nextToken
            }
            email
            role
            createdAt
            updatedAt
          }
          userUserSettingsId
          key
          value
          userWorkflows {
            items {
              id
              userSettingUserWorkflowsId
              type
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      email
      role
      createdAt
      updatedAt
    }
  }
`
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      nextToken
    }
  }
`
export const getUserSetting = /* GraphQL */ `
  query GetUserSetting($id: ID!) {
    getUserSetting(id: $id) {
      id
      userUserSettingsId
      key
      value
      createdAt
      updatedAt
    }
  }
`
export const listUserSettings = /* GraphQL */ `
  query ListUserSettings(
    $filter: ModelUserSettingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserSettings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      nextToken
    }
  }
`
export const getUserWorkflow = /* GraphQL */ `
  query GetUserWorkflow($id: ID!) {
    getUserWorkflow(id: $id) {
      id
      userSettingUserWorkflowsId
      type
      status
      createdAt
      updatedAt
    }
  }
`
export const listUserWorkflows = /* GraphQL */ `
  query ListUserWorkflows(
    $filter: ModelUserWorkflowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserWorkflows(filter: $filter, limit: $limit, nextToken: $nextToken) {
      nextToken
    }
  }
`
export const getPhoneOther = /* GraphQL */ `
  query GetPhoneOther($id: ID!) {
    getPhoneOther(id: $id) {
      id
      patientPhoneOtherId
      phoneType1
      phoneType2
      phoneType3
      phone1
      phone2
      phone3
      isPreferred1
      isPreferred2
      isPreferred3
      ok1
      ok2
      ok3
      heardFrom
      specify
      genderPronoun
      genderIdentity
      sexualOrientation
      maritalStatus
      employmentStatus
      preferredLanguage
      race
      ethnicity
      annualIncome
      numberInHousehold
      communicateElectronically
      createdAt
      updatedAt
      phoneOtherPatientId
    }
  }
`
export const listPhoneOthers = /* GraphQL */ `
  query ListPhoneOthers(
    $filter: ModelPhoneOtherFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPhoneOthers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      nextToken
    }
  }
`
export const getCommunicationPreference = /* GraphQL */ `
  query GetCommunicationPreference($id: ID!) {
    getCommunicationPreference(id: $id) {
      id
      patientCommunicationPreferenceId
      appointmentInformation
      healthInformation
      patientSurvey
      visitSummary
      receivePaperlessStatement
      paperlessStatement
      staffTextMessaging
      checkinProcessTextMessaging
      agreed
      createdAt
      updatedAt
      communicationPreferencePatientId
    }
  }
`
export const listCommunicationPreferences = /* GraphQL */ `
  query ListCommunicationPreferences(
    $filter: ModelCommunicationPreferenceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommunicationPreferences(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      nextToken
    }
  }
`
export const getInsurance = /* GraphQL */ `
  query GetInsurance($id: ID!) {
    getInsurance(id: $id) {
      id
      name
      phone1
      phone2
      phone3
      email
      createdAt
      updatedAt
    }
  }
`
export const listInsurances = /* GraphQL */ `
  query ListInsurances(
    $filter: ModelInsuranceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInsurances(filter: $filter, limit: $limit, nextToken: $nextToken) {
      nextToken
    }
  }
`
export const getPatientInsurance = /* GraphQL */ `
  query GetPatientInsurance($id: ID!) {
    getPatientInsurance(id: $id) {
      id
      patientPatientInsurancesId
      insurancePatientInsurancesId
      effectiveDate
      ssid
      group
      hmo
      copay
      amount
      relationship
      firstName
      lastName
      phone
      dob
      sex
      createdAt
      updatedAt
    }
  }
`
export const listPatientInsurances = /* GraphQL */ `
  query ListPatientInsurances(
    $filter: ModelPatientInsuranceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPatientInsurances(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      nextToken
    }
  }
`
export const getCard = /* GraphQL */ `
  query GetCard($id: ID!) {
    getCard(id: $id) {
      id
      patientInsuranceCardsId
      insuranceCardBackUrl
      insuranceCardFrontUrl
      cardType
      date
      createdAt
      updatedAt
    }
  }
`
export const listCards = /* GraphQL */ `
  query ListCards(
    $filter: ModelCardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      nextToken
    }
  }
`
export const getContact = /* GraphQL */ `
  query GetContact($id: ID!) {
    getContact(id: $id) {
      id
      patientContactsId
      contactType
      firstName
      middleName
      lastName
      phone1
      phone2
      phone3
      ok1
      ok2
      ok3
      isPreferred
      email
      createdAt
      updatedAt
    }
  }
`
export const listContacts = /* GraphQL */ `
  query ListContacts(
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        patient {
          id
          phoneOther {
            id
            patientPhoneOtherId
            patient {
              id
              title
              firstName
              middleName
              lastName
              dob
              sex
              ssn
              email
              sameAsMailing
              distance
              profilePicture
              createdAt
              updatedAt
              patientPhoneOtherId
              patientCommunicationPreferenceId
            }
            phoneType1
            phoneType2
            phoneType3
            phone1
            phone2
            phone3
            isPreferred1
            isPreferred2
            isPreferred3
            ok1
            ok2
            ok3
            heardFrom
            specify
            genderPronoun
            genderIdentity
            sexualOrientation
            maritalStatus
            employmentStatus
            preferredLanguage
            race
            ethnicity
            annualIncome
            numberInHousehold
            communicateElectronically
            createdAt
            updatedAt
            phoneOtherPatientId
          }
          communicationPreference {
            id
            patientCommunicationPreferenceId
            patient {
              id
              title
              firstName
              middleName
              lastName
              dob
              sex
              ssn
              email
              sameAsMailing
              distance
              profilePicture
              createdAt
              updatedAt
              patientPhoneOtherId
              patientCommunicationPreferenceId
            }
            appointmentInformation
            healthInformation
            patientSurvey
            visitSummary
            receivePaperlessStatement
            paperlessStatement
            staffTextMessaging
            checkinProcessTextMessaging
            agreed
            createdAt
            updatedAt
            communicationPreferencePatientId
          }
          location {
            code
            name
            address {
              street
              city
              state
              zip
            }
            phone1
            phone2
            phone3
            email
            license1
            license2
            license3
            license4
          }
          patientInsurances {
            items {
              id
              patientPatientInsurancesId
              insurancePatientInsurancesId
              effectiveDate
              ssid
              group
              hmo
              copay
              amount
              relationship
              firstName
              lastName
              phone
              dob
              sex
              createdAt
              updatedAt
            }
            nextToken
          }
          contacts {
            items {
              id
              patientContactsId
              contactType
              firstName
              middleName
              lastName
              phoneType1
              phoneType2
              phoneType3
              phone1
              phone2
              phone3
              isPreferred1
              isPreferred2
              isPreferred3
              ok1
              ok2
              ok3
              isPreferred
              email
              flags
              createdAt
              updatedAt
            }
            nextToken
          }
          patientProviders {
            items {
              id
              patientPatientProvidersId
              providerPatientProvidersId
              isPrimary
              createdAt
              updatedAt
            }
            nextToken
          }
          patientEmployers {
            items {
              id
              patientPatientEmployersId
              employerPatientEmployersId
              occupation
              createdAt
              updatedAt
            }
            nextToken
          }
          appointments {
            items {
              id
              patientAppointmentsId
              providerAppointmentsId
              appointmentTypeAppointmentsId
              date
              time
              length
              comment
              checkin
              checkout
              isMissed
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          forms {
            items {
              id
              patientFormsId
              name
              date
              status
              url
              createdAt
              updatedAt
            }
            nextToken
          }
          allergies {
            items {
              id
              patientAllergiesId
              allergen
              reaction
              comment
              date
              severity
              createdAt
              updatedAt
            }
            nextToken
          }
          vitals {
            items {
              id
              patientVitalsId
              date
              height
              weight
              bmi
              bpd
              bps
              pulse
              temp
              createdAt
              updatedAt
            }
            nextToken
          }
          educations {
            items {
              id
              patientEducationsId
              date
              description
              url
              createdAt
              updatedAt
            }
            nextToken
          }
          problems {
            items {
              id
              patientProblemsId
              providerProblemsId
              date
              updatedDate
              description
              code
              severity
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          documents {
            items {
              id
              patientDocumentsId
              date
              subject
              name
              url
              createdAt
              updatedAt
            }
            nextToken
          }
          title
          firstName
          middleName
          lastName
          dob
          sex
          ssn
          email
          mailingAddress {
            street
            city
            state
            zip
          }
          physicalAddress {
            street
            city
            state
            zip
          }
          sameAsMailing
          distance
          profilePicture
          createdAt
          updatedAt
          patientPhoneOtherId
          patientCommunicationPreferenceId
        }
        patientContactsId
        contactType
        firstName
        middleName
        lastName
        address {
          street
          city
          state
          zip
        }
        phoneType1
        phoneType2
        phoneType3
        phone1
        phone2
        phone3
        isPreferred1
        isPreferred2
        isPreferred3
        ok1
        ok2
        ok3
        isPreferred
        email
        flags
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`
export const getProvider = /* GraphQL */ `
  query GetProvider($id: ID!) {
    getProvider(id: $id) {
      id
      firstName
      lastName
      phone1
      phone2
      phone3
      createdAt
      updatedAt
    }
  }
`
export const listProviders = /* GraphQL */ `
  query ListProviders(
    $filter: ModelProviderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProviders(filter: $filter, limit: $limit, nextToken: $nextToken) {
        items {
            id
            firstName
            lastName
        }
      nextToken
    }
  }
`
export const getPatientProvider = /* GraphQL */ `
  query GetPatientProvider($id: ID!) {
    getPatientProvider(id: $id) {
      id
      patientPatientProvidersId
      providerPatientProvidersId
      isPrimary
      createdAt
      updatedAt
    }
  }
`
export const listPatientProviders = /* GraphQL */ `
  query ListPatientProviders(
    $filter: ModelPatientProviderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPatientProviders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      nextToken
    }
  }
`
export const getEmployer = /* GraphQL */ `
  query GetEmployer($id: ID!) {
    getEmployer(id: $id) {
      id
      name
      phone1
      phone2
      phone3
      email
      createdAt
      updatedAt
    }
  }
`
export const listEmployers = /* GraphQL */ `
  query ListEmployers(
    $filter: ModelEmployerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      nextToken
    }
  }
`
export const getPatientEmployer = /* GraphQL */ `
  query GetPatientEmployer($id: ID!) {
    getPatientEmployer(id: $id) {
      id
      patientPatientEmployersId
      employerPatientEmployersId
      occupation
      createdAt
      updatedAt
    }
  }
`
export const listPatientEmployers = /* GraphQL */ `
  query ListPatientEmployers(
    $filter: ModelPatientEmployerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPatientEmployers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      nextToken
    }
  }
`
export const getAppointmentType = /* GraphQL */ `
  query GetAppointmentType($id: ID!) {
    getAppointmentType(id: $id) {
      id
      code
      description
      comment
      slot
      limit
      createdAt
      updatedAt
    }
  }
`
export const listAppointmentTypes = /* GraphQL */ `
  query ListAppointmentTypes(
    $filter: ModelAppointmentTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppointmentTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
        items {
            id
            code
            comment
            description
        }
      nextToken
    }
  }
`
export const getAppointment = /* GraphQL */ `
  query GetAppointment($id: ID!) {
    getAppointment(id: $id) {
      id
      patientAppointmentsId
      providerAppointmentsId
      appointmentTypeAppointmentsId
      date
      time
      length
      comment
      checkin
      checkout
      isMissed
      status
      createdAt
      updatedAt
    }
  }
`
export const listAppointments = /* GraphQL */ `
  query ListAppointments(
    $filter: ModelAppointmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppointments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      nextToken
    }
  }
`
export const getForm = /* GraphQL */ `
  query GetForm($id: ID!) {
    getForm(id: $id) {
      id
      patientFormsId
      name
      date
      status
      url
      createdAt
      updatedAt
    }
  }
`
export const listForms = /* GraphQL */ `
  query ListForms(
    $filter: ModelFormFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      nextToken
    }
  }
`
export const getAllergy = /* GraphQL */ `
  query GetAllergy($id: ID!) {
    getAllergy(id: $id) {
      id
      patientAllergiesId
      allergen
      reaction
      comment
      date
      severity
      createdAt
      updatedAt
    }
  }
`
export const listAllergies = /* GraphQL */ `
  query ListAllergies(
    $filter: ModelAllergyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAllergies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      nextToken
    }
  }
`
export const getVital = /* GraphQL */ `
  query GetVital($id: ID!) {
    getVital(id: $id) {
      id
      patientVitalsId
      date
      height
      weight
      bmi
      bpd
      bps
      pulse
      temp
      createdAt
      updatedAt
    }
  }
`
export const listVitals = /* GraphQL */ `
  query ListVitals(
    $filter: ModelVitalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVitals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      nextToken
    }
  }
`
export const getEducation = /* GraphQL */ `
  query GetEducation($id: ID!) {
    getEducation(id: $id) {
      id
      patientEducationsId
      date
      description
      url
      createdAt
      updatedAt
    }
  }
`
export const listEducations = /* GraphQL */ `
  query ListEducations(
    $filter: ModelEducationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEducations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      nextToken
    }
  }
`
export const getProblem = /* GraphQL */ `
  query GetProblem($id: ID!) {
    getProblem(id: $id) {
      id
      patientProblemsId
      providerProblemsId
      date
      updatedDate
      description
      code
      severity
      status
      createdAt
      updatedAt
    }
  }
`
export const listProblems = /* GraphQL */ `
  query ListProblems(
    $filter: ModelProblemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProblems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      nextToken
    }
  }
`
export const getDocument = /* GraphQL */ `
  query GetDocument($id: ID!) {
    getDocument(id: $id) {
      id
      patientDocumentsId
      date
      subject
      name
      url
      createdAt
      updatedAt
    }
  }
`
export const listDocuments = /* GraphQL */ `
  query ListDocuments(
    $filter: ModelDocumentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDocuments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      nextToken
    }
  }
`
export const userByEmail = /* GraphQL */ `
  query UserByEmail(
    $email: AWSEmail!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      nextToken
    }
  }
`
export const userSettingByUser = /* GraphQL */ `
  query UserSettingByUser(
    $userUserSettingsId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserSettingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userSettingByUser(
      userUserSettingsId: $userUserSettingsId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      nextToken
    }
  }
`
export const userSettingByKey = /* GraphQL */ `
  query UserSettingByKey(
    $key: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserSettingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userSettingByKey(
      key: $key
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      nextToken
    }
  }
`
export const userWorkflowByUserSetting = /* GraphQL */ `
  query UserWorkflowByUserSetting(
    $userSettingUserWorkflowsId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserWorkflowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userWorkflowByUserSetting(
      userSettingUserWorkflowsId: $userSettingUserWorkflowsId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      nextToken
    }
  }
`
export const phoneOtherByPatient = /* GraphQL */ `
  query PhoneOtherByPatient(
    $patientPhoneOtherId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPhoneOtherFilterInput
    $limit: Int
    $nextToken: String
  ) {
    phoneOtherByPatient(
      patientPhoneOtherId: $patientPhoneOtherId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      nextToken
    }
  }
`
export const communicationPreferenceByPatient = /* GraphQL */ `
  query CommunicationPreferenceByPatient(
    $patientCommunicationPreferenceId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCommunicationPreferenceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    communicationPreferenceByPatient(
      patientCommunicationPreferenceId: $patientCommunicationPreferenceId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      nextToken
    }
  }
`
export const patientInsuranceByPatient = /* GraphQL */ `
  query PatientInsuranceByPatient(
    $patientPatientInsurancesId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPatientInsuranceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    patientInsuranceByPatient(
      patientPatientInsurancesId: $patientPatientInsurancesId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        patientPatientInsurancesId
        insurancePatientInsurancesId
        effectiveDate
        ssid
        group
        hmo
        copay
        amount
        relationship
        firstName
        lastName
        phone
        dob
        sex
        createdAt
        updatedAt
        cards {
          items {
            cardType
            createdAt
            date
            id
            insuranceCardBackUrl
            insuranceCardFrontUrl
            patientInsuranceCardsId
            updatedAt
          }
        }
        insurance {
          address {
            city
            state
            street
            zip
          }
          createdAt
          email
          id
          name
          phone1
          phone2
          phone3
          updatedAt
        }
      }
      nextToken
    }
  }
`
export const patientInsuranceByInsurance = /* GraphQL */ `
  query PatientInsuranceByInsurance(
    $insurancePatientInsurancesId: ID!
    $ssid: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPatientInsuranceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    patientInsuranceByInsurance(
      insurancePatientInsurancesId: $insurancePatientInsurancesId
      ssid: $ssid
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      nextToken
    }
  }
`
export const cardByPatientInsurance = /* GraphQL */ `
  query CardByPatientInsurance(
    $patientInsuranceCardsId: ID!
    $date: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cardByPatientInsurance(
      patientInsuranceCardsId: $patientInsuranceCardsId
      date: $date
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      nextToken
    }
  }
`
export const contactByPatient = /* GraphQL */ `
  query ContactByPatient(
    $patientContactsId: ID!
    $email: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    contactByPatient(
      patientContactsId: $patientContactsId
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      nextToken
    }
  }
`
export const patientProviderByPatient = /* GraphQL */ `
  query PatientProviderByPatient(
    $patientPatientProvidersId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPatientProviderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    patientProviderByPatient(
      patientPatientProvidersId: $patientPatientProvidersId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        patient {
          id
          phoneOther {
            id
            patientPhoneOtherId
            patient {
              id
              title
              firstName
              middleName
              lastName
              dob
              sex
              ssn
              email
              sameAsMailing
              distance
              profilePicture
              createdAt
              updatedAt
              patientPhoneOtherId
              patientCommunicationPreferenceId
            }
            phoneType1
            phoneType2
            phoneType3
            phone1
            phone2
            phone3
            isPreferred1
            isPreferred2
            isPreferred3
            ok1
            ok2
            ok3
            heardFrom
            specify
            genderPronoun
            genderIdentity
            sexualOrientation
            maritalStatus
            employmentStatus
            preferredLanguage
            race
            ethnicity
            annualIncome
            numberInHousehold
            communicateElectronically
            createdAt
            updatedAt
            phoneOtherPatientId
          }
          communicationPreference {
            id
            patientCommunicationPreferenceId
            patient {
              id
              title
              firstName
              middleName
              lastName
              dob
              sex
              ssn
              email
              sameAsMailing
              distance
              profilePicture
              createdAt
              updatedAt
              patientPhoneOtherId
              patientCommunicationPreferenceId
            }
            appointmentInformation
            healthInformation
            patientSurvey
            visitSummary
            receivePaperlessStatement
            paperlessStatement
            staffTextMessaging
            checkinProcessTextMessaging
            agreed
            createdAt
            updatedAt
            communicationPreferencePatientId
          }
          location {
            code
            name
            address {
              street
              city
              state
              zip
            }
            phone1
            phone2
            phone3
            email
            license1
            license2
            license3
            license4
          }
          patientInsurances {
            items {
              id
              patientPatientInsurancesId
              insurancePatientInsurancesId
              effectiveDate
              ssid
              group
              hmo
              copay
              amount
              relationship
              firstName
              lastName
              phone
              dob
              sex
              createdAt
              updatedAt
            }
            nextToken
          }
          contacts {
            items {
              id
              patientContactsId
              contactType
              firstName
              middleName
              lastName
              phone1
              phone2
              phone3
              ok1
              ok2
              ok3
              isPreferred
              email
              createdAt
              updatedAt
            }
            nextToken
          }
          patientProviders {
            items {
              id
              patientPatientProvidersId
              providerPatientProvidersId
              isPrimary
              createdAt
              updatedAt
            }
            nextToken
          }
          patientEmployers {
            items {
              id
              patientPatientEmployersId
              employerPatientEmployersId
              occupation
              createdAt
              updatedAt
            }
            nextToken
          }
          appointments {
            items {
              id
              patientAppointmentsId
              providerAppointmentsId
              appointmentTypeAppointmentsId
              date
              time
              length
              comment
              checkin
              checkout
              isMissed
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          forms {
            items {
              id
              patientFormsId
              name
              date
              status
              url
              createdAt
              updatedAt
            }
            nextToken
          }
          allergies {
            items {
              id
              patientAllergiesId
              allergen
              reaction
              comment
              date
              severity
              createdAt
              updatedAt
            }
            nextToken
          }
          vitals {
            items {
              id
              patientVitalsId
              date
              height
              weight
              bmi
              bpd
              bps
              pulse
              temp
              createdAt
              updatedAt
            }
            nextToken
          }
          educations {
            items {
              id
              patientEducationsId
              date
              description
              url
              createdAt
              updatedAt
            }
            nextToken
          }
          problems {
            items {
              id
              patientProblemsId
              providerProblemsId
              date
              updatedDate
              description
              code
              severity
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          documents {
            items {
              id
              patientDocumentsId
              date
              subject
              name
              url
              createdAt
              updatedAt
            }
            nextToken
          }
          title
          firstName
          middleName
          lastName
          dob
          sex
          ssn
          email
          mailingAddress {
            street
            city
            state
            zip
          }
          physicalAddress {
            street
            city
            state
            zip
          }
          sameAsMailing
          distance
          profilePicture
          createdAt
          updatedAt
          patientPhoneOtherId
          patientCommunicationPreferenceId
        }
        patientPatientProvidersId
        provider {
          id
          patientProviders {
            items {
              id
              patientPatientProvidersId
              providerPatientProvidersId
              isPrimary
              createdAt
              updatedAt
            }
            nextToken
          }
          appointments {
            items {
              id
              patientAppointmentsId
              providerAppointmentsId
              appointmentTypeAppointmentsId
              date
              time
              length
              comment
              checkin
              checkout
              isMissed
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          problems {
            items {
              id
              patientProblemsId
              providerProblemsId
              date
              updatedDate
              description
              code
              severity
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          firstName
          lastName
          phone1
          phone2
          phone3
          address {
            street
            city
            state
            zip
          }
          createdAt
          updatedAt
        }
        providerPatientProvidersId
        isPrimary
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`
export const patientProviderByProvider = /* GraphQL */ `
  query PatientProviderByProvider(
    $providerPatientProvidersId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPatientProviderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    patientProviderByProvider(
      providerPatientProvidersId: $providerPatientProvidersId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      nextToken
    }
  }
`
export const patientEmployerByPatient = /* GraphQL */ `
  query PatientEmployerByPatient(
    $patientPatientEmployersId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPatientEmployerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    patientEmployerByPatient(
      patientPatientEmployersId: $patientPatientEmployersId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        patient {
          id
          phoneOther {
            id
            patientPhoneOtherId
            patient {
              id
              title
              firstName
              middleName
              lastName
              dob
              sex
              ssn
              email
              sameAsMailing
              distance
              profilePicture
              createdAt
              updatedAt
              patientPhoneOtherId
              patientCommunicationPreferenceId
            }
            phoneType1
            phoneType2
            phoneType3
            phone1
            phone2
            phone3
            isPreferred1
            isPreferred2
            isPreferred3
            ok1
            ok2
            ok3
            heardFrom
            specify
            genderPronoun
            genderIdentity
            sexualOrientation
            maritalStatus
            employmentStatus
            preferredLanguage
            race
            ethnicity
            annualIncome
            numberInHousehold
            communicateElectronically
            createdAt
            updatedAt
            phoneOtherPatientId
          }
          communicationPreference {
            id
            patientCommunicationPreferenceId
            patient {
              id
              title
              firstName
              middleName
              lastName
              dob
              sex
              ssn
              email
              sameAsMailing
              distance
              profilePicture
              createdAt
              updatedAt
              patientPhoneOtherId
              patientCommunicationPreferenceId
            }
            appointmentInformation
            healthInformation
            patientSurvey
            visitSummary
            receivePaperlessStatement
            paperlessStatement
            staffTextMessaging
            checkinProcessTextMessaging
            agreed
            createdAt
            updatedAt
            communicationPreferencePatientId
          }
          location {
            code
            name
            address {
              street
              city
              state
              zip
            }
            phone1
            phone2
            phone3
            email
            license1
            license2
            license3
            license4
          }
          patientInsurances {
            items {
              id
              patientPatientInsurancesId
              insurancePatientInsurancesId
              effectiveDate
              ssid
              group
              hmo
              copay
              amount
              relationship
              firstName
              lastName
              phone
              dob
              sex
              createdAt
              updatedAt
            }
            nextToken
          }
          contacts {
            items {
              id
              patientContactsId
              contactType
              firstName
              middleName
              lastName
              phone1
              phone2
              phone3
              ok1
              ok2
              ok3
              isPreferred
              email
              createdAt
              updatedAt
            }
            nextToken
          }
          patientProviders {
            items {
              id
              patientPatientProvidersId
              providerPatientProvidersId
              isPrimary
              createdAt
              updatedAt
            }
            nextToken
          }
          patientEmployers {
            items {
              id
              patientPatientEmployersId
              employerPatientEmployersId
              occupation
              createdAt
              updatedAt
            }
            nextToken
          }
          appointments {
            items {
              id
              patientAppointmentsId
              providerAppointmentsId
              appointmentTypeAppointmentsId
              date
              time
              length
              comment
              checkin
              checkout
              isMissed
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          forms {
            items {
              id
              patientFormsId
              name
              date
              status
              url
              createdAt
              updatedAt
            }
            nextToken
          }
          allergies {
            items {
              id
              patientAllergiesId
              allergen
              reaction
              comment
              date
              severity
              createdAt
              updatedAt
            }
            nextToken
          }
          vitals {
            items {
              id
              patientVitalsId
              date
              height
              weight
              bmi
              bpd
              bps
              pulse
              temp
              createdAt
              updatedAt
            }
            nextToken
          }
          educations {
            items {
              id
              patientEducationsId
              date
              description
              url
              createdAt
              updatedAt
            }
            nextToken
          }
          problems {
            items {
              id
              patientProblemsId
              providerProblemsId
              date
              updatedDate
              description
              code
              severity
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          documents {
            items {
              id
              patientDocumentsId
              date
              subject
              name
              url
              createdAt
              updatedAt
            }
            nextToken
          }
          title
          firstName
          middleName
          lastName
          dob
          sex
          ssn
          email
          mailingAddress {
            street
            city
            state
            zip
          }
          physicalAddress {
            street
            city
            state
            zip
          }
          sameAsMailing
          distance
          profilePicture
          createdAt
          updatedAt
          patientPhoneOtherId
          patientCommunicationPreferenceId
        }
        patientPatientEmployersId
        employer {
          id
          patientEmployers {
            items {
              id
              patientPatientEmployersId
              employerPatientEmployersId
              occupation
              createdAt
              updatedAt
            }
            nextToken
          }
          name
          phone1
          phone2
          phone3
          address {
            street
            city
            state
            zip
          }
          email
          createdAt
          updatedAt
        }
        employerPatientEmployersId
        occupation
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`
export const patientEmployerByEmployer = /* GraphQL */ `
  query PatientEmployerByEmployer(
    $employerPatientEmployersId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPatientEmployerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    patientEmployerByEmployer(
      employerPatientEmployersId: $employerPatientEmployersId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      nextToken
    }
  }
`
export const appointmentByPatient = /* GraphQL */ `
  query AppointmentByPatient(
    $patientAppointmentsId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAppointmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    appointmentByPatient(
      patientAppointmentsId: $patientAppointmentsId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
        items {
            date
            id
            createdAt
            provider {
              firstName
              lastName
              id
            }
            time
            length
            status
          }
      nextToken
    }
  }
`
export const appointmentByProvider = /* GraphQL */ `
  query AppointmentByProvider(
    $providerAppointmentsId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAppointmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    appointmentByProvider(
      providerAppointmentsId: $providerAppointmentsId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      nextToken
    }
  }
`
export const appointmentByAppointmentType = /* GraphQL */ `
  query AppointmentByAppointmentType(
    $appointmentTypeAppointmentsId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAppointmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    appointmentByAppointmentType(
      appointmentTypeAppointmentsId: $appointmentTypeAppointmentsId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      nextToken
    }
  }
`
export const formByPatient = /* GraphQL */ `
  query FormByPatient(
    $patientFormsId: ID!
    $name: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelFormFilterInput
    $limit: Int
    $nextToken: String
  ) {
    formByPatient(
      patientFormsId: $patientFormsId
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      nextToken
    }
  }
`
export const allergyByPatient = /* GraphQL */ `
  query AllergyByPatient(
    $patientAllergiesId: ID!
    $allergen: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAllergyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    allergyByPatient(
      patientAllergiesId: $patientAllergiesId
      allergen: $allergen
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      nextToken
    }
  }
`
export const vitalByPatient = /* GraphQL */ `
  query VitalByPatient(
    $patientVitalsId: ID!
    $date: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelVitalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    vitalByPatient(
      patientVitalsId: $patientVitalsId
      date: $date
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      nextToken
    }
  }
`
export const educationByPatient = /* GraphQL */ `
  query EducationByPatient(
    $patientEducationsId: ID!
    $date: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEducationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    educationByPatient(
      patientEducationsId: $patientEducationsId
      date: $date
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      nextToken
    }
  }
`
export const problemByPatient = /* GraphQL */ `
  query ProblemByPatient(
    $patientProblemsId: ID!
    $date: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProblemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    problemByPatient(
      patientProblemsId: $patientProblemsId
      date: $date
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      nextToken
    }
  }
`
export const problemByProvider = /* GraphQL */ `
  query ProblemByProvider(
    $providerProblemsId: ID!
    $date: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProblemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    problemByProvider(
      providerProblemsId: $providerProblemsId
      date: $date
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      nextToken
    }
  }
`
export const documentByPatient = /* GraphQL */ `
  query DocumentByPatient(
    $patientDocumentsId: ID!
    $date: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelDocumentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    documentByPatient(
      patientDocumentsId: $patientDocumentsId
      date: $date
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      nextToken
    }
  }
`
