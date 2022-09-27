/* tslint:disable */
/* eslint-disable */

export type CreatePatientInput = {
  id?: string | null
  location?: LocationInput | null
  title?: Title | null
  firstName?: string | null
  middleName?: string | null
  lastName?: string | null
  dob?: string | null
  sex?: Sex | null
  ssn?: string | null
  email?: string | null
  mailingAddress?: AddressInput | null
  physicalAddress?: AddressInput | null
  sameAsMailing?: boolean | null
  distance?: number | null
  profilePicture?: string | null
  patientPhoneOtherId?: string | null
  patientCommunicationPreferenceId?: string | null
}

export type LocationInput = {
  code: string
  name?: string | null
  address?: AddressInput | null
  phone1?: string | null
  phone2?: string | null
  phone3?: string | null
  email?: string | null
  license1?: string | null
  license2?: string | null
  license3?: string | null
  license4?: string | null
}

export type AddressInput = {
  street?: string | null
  city?: string | null
  state?: string | null
  zip?: string | null
}

export enum Title {
  Mr = 'Mr',
  Mrs = 'Mrs',
  Miss = 'Miss',
}

export enum Sex {
  Male = 'Male',
  Female = 'Female',
}

export type ModelPatientConditionInput = {
  title?: ModelTitleInput | null
  firstName?: ModelStringInput | null
  middleName?: ModelStringInput | null
  lastName?: ModelStringInput | null
  dob?: ModelStringInput | null
  sex?: ModelSexInput | null
  ssn?: ModelStringInput | null
  email?: ModelStringInput | null
  sameAsMailing?: ModelBooleanInput | null
  distance?: ModelFloatInput | null
  profilePicture?: ModelStringInput | null
  and?: Array<ModelPatientConditionInput | null> | null
  or?: Array<ModelPatientConditionInput | null> | null
  not?: ModelPatientConditionInput | null
  patientPhoneOtherId?: ModelIDInput | null
  patientCommunicationPreferenceId?: ModelIDInput | null
}

export type ModelTitleInput = {
  eq?: Title | null
  ne?: Title | null
}

export type ModelStringInput = {
  ne?: string | null
  eq?: string | null
  le?: string | null
  lt?: string | null
  ge?: string | null
  gt?: string | null
  contains?: string | null
  notContains?: string | null
  between?: Array<string | null> | null
  beginsWith?: string | null
  attributeExists?: boolean | null
  attributeType?: ModelAttributeTypes | null
  size?: ModelSizeInput | null
}

export enum ModelAttributeTypes {
  binary = 'binary',
  binarySet = 'binarySet',
  bool = 'bool',
  list = 'list',
  map = 'map',
  number = 'number',
  numberSet = 'numberSet',
  string = 'string',
  stringSet = 'stringSet',
  _null = '_null',
}

export type ModelSizeInput = {
  ne?: number | null
  eq?: number | null
  le?: number | null
  lt?: number | null
  ge?: number | null
  gt?: number | null
  between?: Array<number | null> | null
}

export type ModelSexInput = {
  eq?: Sex | null
  ne?: Sex | null
}

export type ModelBooleanInput = {
  ne?: boolean | null
  eq?: boolean | null
  attributeExists?: boolean | null
  attributeType?: ModelAttributeTypes | null
}

export type ModelFloatInput = {
  ne?: number | null
  eq?: number | null
  le?: number | null
  lt?: number | null
  ge?: number | null
  gt?: number | null
  between?: Array<number | null> | null
  attributeExists?: boolean | null
  attributeType?: ModelAttributeTypes | null
}

export type ModelIDInput = {
  ne?: string | null
  eq?: string | null
  le?: string | null
  lt?: string | null
  ge?: string | null
  gt?: string | null
  contains?: string | null
  notContains?: string | null
  between?: Array<string | null> | null
  beginsWith?: string | null
  attributeExists?: boolean | null
  attributeType?: ModelAttributeTypes | null
  size?: ModelSizeInput | null
}

export type Patient = {
  __typename: 'Patient'
  id: string
  phoneOther?: PhoneOther | null
  communicationPreference?: CommunicationPreference | null
  location?: Location | null
  patientInsurances?: ModelPatientInsuranceConnection | null
  contacts?: ModelContactConnection | null
  patientProviders?: ModelPatientProviderConnection | null
  patientEmployers?: ModelPatientEmployerConnection | null
  appointments?: ModelAppointmentConnection | null
  forms?: ModelFormConnection | null
  allergies?: ModelAllergyConnection | null
  vitals?: ModelVitalConnection | null
  educations?: ModelEducationConnection | null
  problems?: ModelProblemConnection | null
  documents?: ModelDocumentConnection | null
  title?: Title | null
  firstName?: string | null
  middleName?: string | null
  lastName?: string | null
  dob?: string | null
  sex?: Sex | null
  ssn?: string | null
  email?: string | null
  mailingAddress?: Address | null
  physicalAddress?: Address | null
  sameAsMailing?: boolean | null
  distance?: number | null
  profilePicture?: string | null
  createdAt: string
  updatedAt: string
  patientPhoneOtherId?: string | null
  patientCommunicationPreferenceId?: string | null
}

export type PhoneOther = {
  __typename: 'PhoneOther'
  id: string
  patientPhoneOtherId?: string | null
  patient?: Patient | null
  phoneType1?: PhoneType | null
  phoneType2?: PhoneType | null
  phoneType3?: PhoneType | null
  phone1?: string | null
  phone2?: string | null
  phone3?: string | null
  isPreferred1?: boolean | null
  isPreferred2?: boolean | null
  isPreferred3?: boolean | null
  ok1?: boolean | null
  ok2?: boolean | null
  ok3?: boolean | null
  heardFrom?: HeardFrom | null
  specify?: string | null
  genderPronoun?: GenderPronoun | null
  genderIdentity?: GenderIdentity | null
  sexualOrientation?: SexualOrientation | null
  maritalStatus?: MaritalStatus | null
  employmentStatus?: EmploymentStatus | null
  preferredLanguage?: PreferredLanguage | null
  race?: Race | null
  ethnicity?: Ethnicity | null
  annualIncome?: number | null
  numberInHousehold?: number | null
  communicateElectronically?: boolean | null
  createdAt: string
  updatedAt: string
  phoneOtherPatientId?: string | null
}

export enum PhoneType {
  Home = 'Home',
  Work = 'Work',
  Cell = 'Cell',
}

export enum HeardFrom {
  Family = 'Family',
  Friend = 'Friend',
}

export enum GenderPronoun {
  He = 'He',
  She = 'She',
  They = 'They',
  Per = 'Per',
  Xe = 'Xe',
  Ze = 'Ze',
}

export enum GenderIdentity {
  IdentifiesAsMale = 'IdentifiesAsMale',
  IdentifiesAsFemale = 'IdentifiesAsFemale',
  FTM = 'FTM',
  MTF = 'MTF',
  GenderQueer = 'GenderQueer',
  Additional = 'Additional',
}

export enum SexualOrientation {
  Straight = 'Straight',
  Bisexual = 'Bisexual',
  DontKnow = 'DontKnow',
  Unrevealed = 'Unrevealed',
  Homosexual = 'Homosexual',
  SomethingElse = 'SomethingElse',
}

export enum MaritalStatus {
  Married = 'Married',
  Divorced = 'Divorced',
  Single = 'Single',
  Separated = 'Separated',
  Unknown = 'Unknown',
  Widowed = 'Widowed',
}

export enum EmploymentStatus {
  ActiveMilitary = 'ActiveMilitary',
  FullTime = 'FullTime',
  None = 'None',
  PartTime = 'PartTime',
  Retired = 'Retired',
  SelfEmployed = 'SelfEmployed',
}

export enum PreferredLanguage {
  English = 'English',
  Spanish = 'Spanish',
}

export enum Race {
  AmericanIndian = 'AmericanIndian',
  Asian = 'Asian',
  Black = 'Black',
  NativeHawaiianOrOther = 'NativeHawaiianOrOther',
}

export enum Ethnicity {
  Hispanic = 'Hispanic',
  NotHispanic = 'NotHispanic',
  Unknown = 'Unknown',
}

export type CommunicationPreference = {
  __typename: 'CommunicationPreference'
  id: string
  patientCommunicationPreferenceId?: string | null
  patient?: Patient | null
  appointmentInformation?: Array<CommunicationPreferenceType1 | null> | null
  healthInformation?: Array<CommunicationPreferenceType1 | null> | null
  patientSurvey?: Array<CommunicationPreferenceType2 | null> | null
  visitSummary?: Array<CommunicationPreferenceType2 | null> | null
  receivePaperlessStatement?: boolean | null
  paperlessStatement?: Array<CommunicationPreferenceType2 | null> | null
  staffTextMessaging?: boolean | null
  checkinProcessTextMessaging?: boolean | null
  agreed?: boolean | null
  createdAt: string
  updatedAt: string
  communicationPreferencePatientId?: string | null
}

export enum CommunicationPreferenceType1 {
  Email = 'Email',
  Text = 'Text',
  Phone = 'Phone',
  No = 'No',
}

export enum CommunicationPreferenceType2 {
  Email = 'Email',
  Text = 'Text',
  No = 'No',
}

export type Location = {
  __typename: 'Location'
  code: string
  name?: string | null
  address?: Address | null
  phone1?: string | null
  phone2?: string | null
  phone3?: string | null
  email?: string | null
  license1?: string | null
  license2?: string | null
  license3?: string | null
  license4?: string | null
}

export type Address = {
  __typename: 'Address'
  street?: string | null
  city?: string | null
  state?: string | null
  zip?: string | null
}

export type ModelPatientInsuranceConnection = {
  __typename: 'ModelPatientInsuranceConnection'
  items: Array<PatientInsurance | null>
  nextToken?: string | null
}

export type PatientInsurance = {
  __typename: 'PatientInsurance'
  id: string
  patient?: Patient | null
  patientPatientInsurancesId: string
  insurance?: Insurance | null
  insurancePatientInsurancesId: string
  cards?: ModelCardConnection | null
  effectiveDate?: string | null
  ssid?: string | null
  group?: string | null
  hmo?: string | null
  copay?: string | null
  amount?: number | null
  relationship?: string | null
  firstName?: string | null
  lastName?: string | null
  address?: Address | null
  phone?: string | null
  dob?: string | null
  sex?: Sex | null
  createdAt: string
  updatedAt: string
}

export type Insurance = {
  __typename: 'Insurance'
  id: string
  patientInsurances?: ModelPatientInsuranceConnection | null
  name?: string | null
  address?: Address | null
  phone1?: string | null
  phone2?: string | null
  phone3?: string | null
  email?: string | null
  createdAt: string
  updatedAt: string
}

export type ModelCardConnection = {
  __typename: 'ModelCardConnection'
  items: Array<Card | null>
  nextToken?: string | null
}

export type Card = {
  __typename: 'Card'
  id: string
  patientInsurance?: PatientInsurance | null
  patientInsuranceCardsId: string
  insuranceCardBackUrl?: string | null
  insuranceCardFrontUrl?: string | null
  cardType?: CardType | null
  date?: string | null
  createdAt: string
  updatedAt: string
}

export enum CardType {
  Primary = 'Primary',
  Secondary = 'Secondary',
}

export type ModelContactConnection = {
  __typename: 'ModelContactConnection'
  items: Array<Contact | null>
  nextToken?: string | null
}

export type Contact = {
  __typename: "Contact",
  id: string,
  patientContactsId: string,
  contactType?: ContactType | null,
  firstName?: string | null,
  middleName?: string | null,
  lastName?: string | null,
  address?: Address | null,
  phoneType1?: PhoneType | null,
  phoneType2?: PhoneType | null,
  phoneType3?: PhoneType | null,
  phone1?: string | null,
  phone2?: string | null,
  phone3?: string | null,
  isPreferred1?: boolean | null,
  isPreferred2?: boolean | null,
  isPreferred3?: boolean | null,
  ok1?: boolean | null,
  ok2?: boolean | null,
  ok3?: boolean | null,
  isPreferred?: boolean | null,
  email?: string | null,
  flags?: Array< FlagType | null > | null,
  createdAt: string,
  updatedAt: string,
};
export enum ContactType {
  Parent = 'Parent',
  Guardian = 'Guardian',
}
export enum FlagType {
  Emergency = "Emergency",
  Parent = "Parent",
  Primary = "Primary",
}


export type ModelPatientProviderConnection = {
  __typename: 'ModelPatientProviderConnection'
  items: Array<PatientProvider | null>
  nextToken?: string | null
}

export type PatientProvider = {
  __typename: 'PatientProvider'
  id: string
  patient?: Patient | null
  patientPatientProvidersId: string
  provider?: Provider | null
  providerPatientProvidersId: string
  isPrimary?: boolean | null
  createdAt: string
  updatedAt: string
}

export type Provider = {
  __typename: 'Provider'
  id: string
  patientProviders?: ModelPatientProviderConnection | null
  appointments?: ModelAppointmentConnection | null
  problems?: ModelProblemConnection | null
  firstName?: string | null
  lastName?: string | null
  phone1?: string | null
  phone2?: string | null
  phone3?: string | null
  address?: Address | null
  createdAt: string
  updatedAt: string
}

export type ModelAppointmentConnection = {
  __typename: 'ModelAppointmentConnection'
  items: Array<Appointment | null>
  nextToken?: string | null
}

export type Appointment = {
  __typename: 'Appointment'
  id: string
  patient?: Patient | null
  patientAppointmentsId: string
  provider?: Provider | null
  providerAppointmentsId: string
  appointmentType?: AppointmentType | null
  appointmentTypeAppointmentsId: string
  date?: string | null
  time?: string | null
  length?: number | null
  comment?: string | null
  checkin?: string | null
  checkout?: string | null
  isMissed?: boolean | null
  status?: AppointmentStatus | null
  createdAt: string
  updatedAt: string
}

export type AppointmentType = {
  __typename: 'AppointmentType'
  id: string
  appointment?: ModelAppointmentConnection | null
  code?: string | null
  description?: string | null
  comment?: string | null
  slot?: number | null
  limit?: string | null
  createdAt: string
  updatedAt: string
}

export enum AppointmentStatus {
  Confirmed = 'Confirmed',
  Missed = 'Missed',
  Completed = 'Completed',
}

export type ModelProblemConnection = {
  __typename: 'ModelProblemConnection'
  items: Array<Problem | null>
  nextToken?: string | null
}

export type Problem = {
  __typename: 'Problem'
  id: string
  patient?: Patient | null
  patientProblemsId: string
  provider?: Provider | null
  providerProblemsId: string
  date?: string | null
  updatedDate?: string | null
  description?: string | null
  code?: string | null
  severity?: ProblemSeverity | null
  status?: ProblemStatus | null
  createdAt: string
  updatedAt: string
}

export enum ProblemSeverity {
  Normal = 'Normal',
  Bad = 'Bad',
}

export enum ProblemStatus {
  Ongoing = 'Ongoing',
  Solved = 'Solved',
}

export type ModelPatientEmployerConnection = {
  __typename: 'ModelPatientEmployerConnection'
  items: Array<PatientEmployer | null>
  nextToken?: string | null
}

export type PatientEmployer = {
  __typename: 'PatientEmployer'
  id: string
  patient?: Patient | null
  patientPatientEmployersId: string
  employer?: Employer | null
  employerPatientEmployersId: string
  occupation?: string | null
  createdAt: string
  updatedAt: string
}

export type Employer = {
  __typename: 'Employer'
  id: string
  patientEmployers?: ModelPatientEmployerConnection | null
  name?: string | null
  phone1?: string | null
  phone2?: string | null
  phone3?: string | null
  address?: Address | null
  email?: string | null
  createdAt: string
  updatedAt: string
}

export type ModelFormConnection = {
  __typename: 'ModelFormConnection'
  items: Array<Form | null>
  nextToken?: string | null
}

export type Form = {
  __typename: 'Form'
  id: string
  patient?: Patient | null
  patientFormsId: string
  name?: string | null
  date?: string | null
  status?: FormStatus | null
  url?: string | null
  createdAt: string
  updatedAt: string
}

export enum FormStatus {
  Signed = 'Signed',
  Completed = 'Completed',
}

export type ModelAllergyConnection = {
  __typename: 'ModelAllergyConnection'
  items: Array<Allergy | null>
  nextToken?: string | null
}

export type Allergy = {
  __typename: 'Allergy'
  id: string
  patient?: Patient | null
  patientAllergiesId: string
  allergen?: string | null
  reaction?: string | null
  comment?: string | null
  date?: string | null
  severity?: AllergySeverity | null
  createdAt: string
  updatedAt: string
}

export enum AllergySeverity {
  Normal = 'Normal',
  Mild = 'Mild',
}

export type ModelVitalConnection = {
  __typename: 'ModelVitalConnection'
  items: Array<Vital | null>
  nextToken?: string | null
}

export type Vital = {
  __typename: 'Vital'
  id: string
  patient?: Patient | null
  patientVitalsId: string
  date?: string | null
  height?: number | null
  weight?: number | null
  bmi?: number | null
  bpd?: number | null
  bps?: number | null
  pulse?: number | null
  temp?: number | null
  createdAt: string
  updatedAt: string
}

export type ModelEducationConnection = {
  __typename: 'ModelEducationConnection'
  items: Array<Education | null>
  nextToken?: string | null
}

export type Education = {
  __typename: 'Education'
  id: string
  patient?: Patient | null
  patientEducationsId: string
  date?: string | null
  description?: string | null
  url?: string | null
  createdAt: string
  updatedAt: string
}

export type ModelDocumentConnection = {
  __typename: 'ModelDocumentConnection'
  items: Array<Document | null>
  nextToken?: string | null
}

export type Document = {
  __typename: 'Document'
  id: string
  patient?: Patient | null
  patientDocumentsId: string
  date?: string | null
  subject?: string | null
  name?: string | null
  url?: string | null
  createdAt: string
  updatedAt: string
}

export type UpdatePatientInput = {
  id: string
  location?: LocationInput | null
  title?: Title | null
  firstName?: string | null
  middleName?: string | null
  lastName?: string | null
  dob?: string | null
  sex?: Sex | null
  ssn?: string | null
  email?: string | null
  mailingAddress?: AddressInput | null
  physicalAddress?: AddressInput | null
  sameAsMailing?: boolean | null
  distance?: number | null
  profilePicture?: string | null
  patientPhoneOtherId?: string | null
  patientCommunicationPreferenceId?: string | null
}

export type DeletePatientInput = {
  id: string
}

export type CreateUserInput = {
  id?: string | null
  userPatientId?: string | null
  email: string
  role?: UserRole | null
}

export enum UserRole {
  Patient = 'Patient',
  Guardian = 'Guardian',
}

export type ModelUserConditionInput = {
  userPatientId?: ModelIDInput | null
  email?: ModelStringInput | null
  role?: ModelUserRoleInput | null
  and?: Array<ModelUserConditionInput | null> | null
  or?: Array<ModelUserConditionInput | null> | null
  not?: ModelUserConditionInput | null
}

export type ModelUserRoleInput = {
  eq?: UserRole | null
  ne?: UserRole | null
}

export type User = {
  __typename: 'User'
  id: string
  userPatientId?: string | null
  patient?: Patient | null
  userSettings?: ModelUserSettingConnection | null
  email: string
  role?: UserRole | null
  createdAt: string
  updatedAt: string
}

export type ModelUserSettingConnection = {
  __typename: 'ModelUserSettingConnection'
  items: Array<UserSetting | null>
  nextToken?: string | null
}

export type UserSetting = {
  __typename: 'UserSetting'
  id: string
  user?: User | null
  userUserSettingsId: string
  key?: string | null
  value?: string | null
  userWorkflows?: ModelUserWorkflowConnection | null
  createdAt: string
  updatedAt: string
}

export type ModelUserWorkflowConnection = {
  __typename: 'ModelUserWorkflowConnection'
  items: Array<UserWorkflow | null>
  nextToken?: string | null
}

export type UserWorkflow = {
  __typename: 'UserWorkflow'
  id: string
  userSetting?: UserSetting | null
  userSettingUserWorkflowsId: string
  type?: WorkflowType | null
  status?: string | null
  createdAt: string
  updatedAt: string
}

export enum WorkflowType {
  Authentication = 'Authentication',
}

export type UpdateUserInput = {
  id: string
  userPatientId?: string | null
  email?: string | null
  role?: UserRole | null
}

export type DeleteUserInput = {
  id: string
}

export type CreateUserSettingInput = {
  id?: string | null
  userUserSettingsId: string
  key?: string | null
  value?: string | null
}

export type ModelUserSettingConditionInput = {
  userUserSettingsId?: ModelIDInput | null
  key?: ModelStringInput | null
  value?: ModelStringInput | null
  and?: Array<ModelUserSettingConditionInput | null> | null
  or?: Array<ModelUserSettingConditionInput | null> | null
  not?: ModelUserSettingConditionInput | null
}

export type UpdateUserSettingInput = {
  id: string
  userUserSettingsId?: string | null
  key?: string | null
  value?: string | null
}

export type DeleteUserSettingInput = {
  id: string
}

export type CreateUserWorkflowInput = {
  id?: string | null
  userSettingUserWorkflowsId: string
  type?: WorkflowType | null
  status?: string | null
}

export type ModelUserWorkflowConditionInput = {
  userSettingUserWorkflowsId?: ModelIDInput | null
  type?: ModelWorkflowTypeInput | null
  status?: ModelStringInput | null
  and?: Array<ModelUserWorkflowConditionInput | null> | null
  or?: Array<ModelUserWorkflowConditionInput | null> | null
  not?: ModelUserWorkflowConditionInput | null
}

export type ModelWorkflowTypeInput = {
  eq?: WorkflowType | null
  ne?: WorkflowType | null
}

export type UpdateUserWorkflowInput = {
  id: string
  userSettingUserWorkflowsId?: string | null
  type?: WorkflowType | null
  status?: string | null
}

export type DeleteUserWorkflowInput = {
  id: string
}

export type CreatePhoneOtherInput = {
  id?: string | null
  patientPhoneOtherId?: string | null
  phoneType1?: PhoneType | null
  phoneType2?: PhoneType | null
  phoneType3?: PhoneType | null
  phone1?: string | null
  phone2?: string | null
  phone3?: string | null
  isPreferred1?: boolean | null
  isPreferred2?: boolean | null
  isPreferred3?: boolean | null
  ok1?: boolean | null
  ok2?: boolean | null
  ok3?: boolean | null
  heardFrom?: HeardFrom | null
  specify?: string | null
  genderPronoun?: GenderPronoun | null
  genderIdentity?: GenderIdentity | null
  sexualOrientation?: SexualOrientation | null
  maritalStatus?: MaritalStatus | null
  employmentStatus?: EmploymentStatus | null
  preferredLanguage?: PreferredLanguage | null
  race?: Race | null
  ethnicity?: Ethnicity | null
  annualIncome?: number | null
  numberInHousehold?: number | null
  communicateElectronically?: boolean | null
  phoneOtherPatientId?: string | null
}

export type ModelPhoneOtherConditionInput = {
  patientPhoneOtherId?: ModelIDInput | null
  phoneType1?: ModelPhoneTypeInput | null
  phoneType2?: ModelPhoneTypeInput | null
  phoneType3?: ModelPhoneTypeInput | null
  phone1?: ModelStringInput | null
  phone2?: ModelStringInput | null
  phone3?: ModelStringInput | null
  isPreferred1?: ModelBooleanInput | null
  isPreferred2?: ModelBooleanInput | null
  isPreferred3?: ModelBooleanInput | null
  ok1?: ModelBooleanInput | null
  ok2?: ModelBooleanInput | null
  ok3?: ModelBooleanInput | null
  heardFrom?: ModelHeardFromInput | null
  specify?: ModelStringInput | null
  genderPronoun?: ModelGenderPronounInput | null
  genderIdentity?: ModelGenderIdentityInput | null
  sexualOrientation?: ModelSexualOrientationInput | null
  maritalStatus?: ModelMaritalStatusInput | null
  employmentStatus?: ModelEmploymentStatusInput | null
  preferredLanguage?: ModelPreferredLanguageInput | null
  race?: ModelRaceInput | null
  ethnicity?: ModelEthnicityInput | null
  annualIncome?: ModelFloatInput | null
  numberInHousehold?: ModelIntInput | null
  communicateElectronically?: ModelBooleanInput | null
  and?: Array<ModelPhoneOtherConditionInput | null> | null
  or?: Array<ModelPhoneOtherConditionInput | null> | null
  not?: ModelPhoneOtherConditionInput | null
  phoneOtherPatientId?: ModelIDInput | null
}

export type ModelPhoneTypeInput = {
  eq?: PhoneType | null
  ne?: PhoneType | null
}

export type ModelHeardFromInput = {
  eq?: HeardFrom | null
  ne?: HeardFrom | null
}

export type ModelGenderPronounInput = {
  eq?: GenderPronoun | null
  ne?: GenderPronoun | null
}

export type ModelGenderIdentityInput = {
  eq?: GenderIdentity | null
  ne?: GenderIdentity | null
}

export type ModelSexualOrientationInput = {
  eq?: SexualOrientation | null
  ne?: SexualOrientation | null
}

export type ModelMaritalStatusInput = {
  eq?: MaritalStatus | null
  ne?: MaritalStatus | null
}

export type ModelEmploymentStatusInput = {
  eq?: EmploymentStatus | null
  ne?: EmploymentStatus | null
}

export type ModelPreferredLanguageInput = {
  eq?: PreferredLanguage | null
  ne?: PreferredLanguage | null
}

export type ModelRaceInput = {
  eq?: Race | null
  ne?: Race | null
}

export type ModelEthnicityInput = {
  eq?: Ethnicity | null
  ne?: Ethnicity | null
}

export type ModelIntInput = {
  ne?: number | null
  eq?: number | null
  le?: number | null
  lt?: number | null
  ge?: number | null
  gt?: number | null
  between?: Array<number | null> | null
  attributeExists?: boolean | null
  attributeType?: ModelAttributeTypes | null
}

export type UpdatePhoneOtherInput = {
  id: string
  patientPhoneOtherId?: string | null
  phoneType1?: PhoneType | null
  phoneType2?: PhoneType | null
  phoneType3?: PhoneType | null
  phone1?: string | null
  phone2?: string | null
  phone3?: string | null
  isPreferred1?: boolean | null
  isPreferred2?: boolean | null
  isPreferred3?: boolean | null
  ok1?: boolean | null
  ok2?: boolean | null
  ok3?: boolean | null
  heardFrom?: HeardFrom | null
  specify?: string | null
  genderPronoun?: GenderPronoun | null
  genderIdentity?: GenderIdentity | null
  sexualOrientation?: SexualOrientation | null
  maritalStatus?: MaritalStatus | null
  employmentStatus?: EmploymentStatus | null
  preferredLanguage?: PreferredLanguage | null
  race?: Race | null
  ethnicity?: Ethnicity | null
  annualIncome?: number | null
  numberInHousehold?: number | null
  communicateElectronically?: boolean | null
  phoneOtherPatientId?: string | null
}

export type DeletePhoneOtherInput = {
  id: string
}

export type CreateCommunicationPreferenceInput = {
  id?: string | null
  patientCommunicationPreferenceId?: string | null
  appointmentInformation?: Array<CommunicationPreferenceType1 | null> | null
  healthInformation?: Array<CommunicationPreferenceType1 | null> | null
  patientSurvey?: Array<CommunicationPreferenceType2 | null> | null
  visitSummary?: Array<CommunicationPreferenceType2 | null> | null
  receivePaperlessStatement?: boolean | null
  paperlessStatement?: Array<CommunicationPreferenceType2 | null> | null
  staffTextMessaging?: boolean | null
  checkinProcessTextMessaging?: boolean | null
  agreed?: boolean | null
  communicationPreferencePatientId?: string | null
}

export type ModelCommunicationPreferenceConditionInput = {
  patientCommunicationPreferenceId?: ModelIDInput | null
  appointmentInformation?: ModelCommunicationPreferenceType1ListInput | null
  healthInformation?: ModelCommunicationPreferenceType1ListInput | null
  patientSurvey?: ModelCommunicationPreferenceType2ListInput | null
  visitSummary?: ModelCommunicationPreferenceType2ListInput | null
  receivePaperlessStatement?: ModelBooleanInput | null
  paperlessStatement?: ModelCommunicationPreferenceType2ListInput | null
  staffTextMessaging?: ModelBooleanInput | null
  checkinProcessTextMessaging?: ModelBooleanInput | null
  agreed?: ModelBooleanInput | null
  and?: Array<ModelCommunicationPreferenceConditionInput | null> | null
  or?: Array<ModelCommunicationPreferenceConditionInput | null> | null
  not?: ModelCommunicationPreferenceConditionInput | null
  communicationPreferencePatientId?: ModelIDInput | null
}

export type ModelCommunicationPreferenceType1ListInput = {
  eq?: Array<CommunicationPreferenceType1 | null> | null
  ne?: Array<CommunicationPreferenceType1 | null> | null
  contains?: CommunicationPreferenceType1 | null
  notContains?: CommunicationPreferenceType1 | null
}

export type ModelCommunicationPreferenceType2ListInput = {
  eq?: Array<CommunicationPreferenceType2 | null> | null
  ne?: Array<CommunicationPreferenceType2 | null> | null
  contains?: CommunicationPreferenceType2 | null
  notContains?: CommunicationPreferenceType2 | null
}

export type UpdateCommunicationPreferenceInput = {
  id: string
  patientCommunicationPreferenceId?: string | null
  appointmentInformation?: Array<CommunicationPreferenceType1 | null> | null
  healthInformation?: Array<CommunicationPreferenceType1 | null> | null
  patientSurvey?: Array<CommunicationPreferenceType2 | null> | null
  visitSummary?: Array<CommunicationPreferenceType2 | null> | null
  receivePaperlessStatement?: boolean | null
  paperlessStatement?: Array<CommunicationPreferenceType2 | null> | null
  staffTextMessaging?: boolean | null
  checkinProcessTextMessaging?: boolean | null
  agreed?: boolean | null
  communicationPreferencePatientId?: string | null
}

export type DeleteCommunicationPreferenceInput = {
  id: string
}

export type CreateInsuranceInput = {
  id?: string | null
  name?: string | null
  address?: AddressInput | null
  phone1?: string | null
  phone2?: string | null
  phone3?: string | null
  email?: string | null
}

export type ModelInsuranceConditionInput = {
  name?: ModelStringInput | null
  phone1?: ModelStringInput | null
  phone2?: ModelStringInput | null
  phone3?: ModelStringInput | null
  email?: ModelStringInput | null
  and?: Array<ModelInsuranceConditionInput | null> | null
  or?: Array<ModelInsuranceConditionInput | null> | null
  not?: ModelInsuranceConditionInput | null
}

export type UpdateInsuranceInput = {
  id: string
  name?: string | null
  address?: AddressInput | null
  phone1?: string | null
  phone2?: string | null
  phone3?: string | null
  email?: string | null
}

export type DeleteInsuranceInput = {
  id: string
}

export type CreatePatientInsuranceInput = {
  id?: string | null
  patientPatientInsurancesId: string
  insurancePatientInsurancesId: string
  effectiveDate?: string | null
  ssid?: string | null
  group?: string | null
  hmo?: string | null
  copay?: string | null
  amount?: number | null
  relationship?: string | null
  firstName?: string | null
  lastName?: string | null
  address?: AddressInput | null
  phone?: string | null
  dob?: string | null
  sex?: Sex | null
}

export type ModelPatientInsuranceConditionInput = {
  patientPatientInsurancesId?: ModelIDInput | null
  insurancePatientInsurancesId?: ModelIDInput | null
  effectiveDate?: ModelStringInput | null
  ssid?: ModelStringInput | null
  group?: ModelStringInput | null
  hmo?: ModelStringInput | null
  copay?: ModelStringInput | null
  amount?: ModelFloatInput | null
  relationship?: ModelStringInput | null
  firstName?: ModelStringInput | null
  lastName?: ModelStringInput | null
  phone?: ModelStringInput | null
  dob?: ModelStringInput | null
  sex?: ModelSexInput | null
  and?: Array<ModelPatientInsuranceConditionInput | null> | null
  or?: Array<ModelPatientInsuranceConditionInput | null> | null
  not?: ModelPatientInsuranceConditionInput | null
}

export type UpdatePatientInsuranceInput = {
  id: string
  patientPatientInsurancesId?: string | null
  insurancePatientInsurancesId?: string | null
  effectiveDate?: string | null
  ssid?: string | null
  group?: string | null
  hmo?: string | null
  copay?: string | null
  amount?: number | null
  relationship?: string | null
  firstName?: string | null
  lastName?: string | null
  address?: AddressInput | null
  phone?: string | null
  dob?: string | null
  sex?: Sex | null
}

export type DeletePatientInsuranceInput = {
  id: string
}

export type CreateCardInput = {
  id?: string | null
  patientInsuranceCardsId: string
  insuranceCardBackUrl?: string | null
  insuranceCardFrontUrl?: string | null
  cardType?: CardType | null
  date?: string | null
}

export type ModelCardConditionInput = {
  patientInsuranceCardsId?: ModelIDInput | null
  insuranceCardBackUrl?: ModelStringInput | null
  insuranceCardFrontUrl?: ModelStringInput | null
  cardType?: ModelCardTypeInput | null
  date?: ModelStringInput | null
  and?: Array<ModelCardConditionInput | null> | null
  or?: Array<ModelCardConditionInput | null> | null
  not?: ModelCardConditionInput | null
}

export type ModelCardTypeInput = {
  eq?: CardType | null
  ne?: CardType | null
}

export type UpdateCardInput = {
  id: string
  patientInsuranceCardsId?: string | null
  insuranceCardBackUrl?: string | null
  insuranceCardFrontUrl?: string | null
  cardType?: CardType | null
  date?: string | null
}

export type DeleteCardInput = {
  id: string
}

export type CreateContactInput = {
  id?: string | null,
  patientContactsId: string,
  contactType?: ContactType | null,
  firstName?: string | null,
  middleName?: string | null,
  lastName?: string | null,
  address?: AddressInput | null,
  phoneType1?: PhoneType | null,
  phoneType2?: PhoneType | null,
  phoneType3?: PhoneType | null,
  phone1?: string | null,
  phone2?: string | null,
  phone3?: string | null,
  isPreferred1?: boolean | null,
  isPreferred2?: boolean | null,
  isPreferred3?: boolean | null,
  ok1?: boolean | null,
  ok2?: boolean | null,
  ok3?: boolean | null,
  isPreferred?: boolean | null,
  email?: string | null,
  flags?: Array< FlagType | null > | null,
};

export type ModelContactConditionInput = {
  patientContactsId?: ModelIDInput | null
  contactType?: ModelContactTypeInput | null
  firstName?: ModelStringInput | null
  middleName?: ModelStringInput | null
  lastName?: ModelStringInput | null
  phone1?: ModelStringInput | null
  phone2?: ModelStringInput | null
  phone3?: ModelStringInput | null
  ok1?: ModelBooleanInput | null
  ok2?: ModelBooleanInput | null
  ok3?: ModelBooleanInput | null
  isPreferred?: ModelBooleanInput | null
  email?: ModelStringInput | null
  and?: Array<ModelContactConditionInput | null> | null
  or?: Array<ModelContactConditionInput | null> | null
  not?: ModelContactConditionInput | null
}

export type ModelContactTypeInput = {
  eq?: ContactType | null
  ne?: ContactType | null
}

export type UpdateContactInput = {
  id: string,
  patientContactsId?: string | null,
  contactType?: ContactType | null,
  firstName?: string | null,
  middleName?: string | null,
  lastName?: string | null,
  address?: AddressInput | null,
  phoneType1?: PhoneType | null,
  phoneType2?: PhoneType | null,
  phoneType3?: PhoneType | null,
  phone1?: string | null,
  phone2?: string | null,
  phone3?: string | null,
  isPreferred1?: boolean | null,
  isPreferred2?: boolean | null,
  isPreferred3?: boolean | null,
  ok1?: boolean | null,
  ok2?: boolean | null,
  ok3?: boolean | null,
  isPreferred?: boolean | null,
  email?: string | null,
  flags?: Array< FlagType | null > | null,
};

export type DeleteContactInput = {
  id: string
}

export type CreateProviderInput = {
  id?: string | null
  firstName?: string | null
  lastName?: string | null
  phone1?: string | null
  phone2?: string | null
  phone3?: string | null
  address?: AddressInput | null
}

export type ModelProviderConditionInput = {
  firstName?: ModelStringInput | null
  lastName?: ModelStringInput | null
  phone1?: ModelStringInput | null
  phone2?: ModelStringInput | null
  phone3?: ModelStringInput | null
  and?: Array<ModelProviderConditionInput | null> | null
  or?: Array<ModelProviderConditionInput | null> | null
  not?: ModelProviderConditionInput | null
}

export type UpdateProviderInput = {
  id: string
  firstName?: string | null
  lastName?: string | null
  phone1?: string | null
  phone2?: string | null
  phone3?: string | null
  address?: AddressInput | null
}

export type DeleteProviderInput = {
  id: string
}

export type CreatePatientProviderInput = {
  id?: string | null
  patientPatientProvidersId: string
  providerPatientProvidersId: string
  isPrimary?: boolean | null
}

export type ModelPatientProviderConditionInput = {
  patientPatientProvidersId?: ModelIDInput | null
  providerPatientProvidersId?: ModelIDInput | null
  isPrimary?: ModelBooleanInput | null
  and?: Array<ModelPatientProviderConditionInput | null> | null
  or?: Array<ModelPatientProviderConditionInput | null> | null
  not?: ModelPatientProviderConditionInput | null
}

export type UpdatePatientProviderInput = {
  id: string
  patientPatientProvidersId?: string | null
  providerPatientProvidersId?: string | null
  isPrimary?: boolean | null
}

export type DeletePatientProviderInput = {
  id: string
}

export type CreateEmployerInput = {
  id?: string | null
  name?: string | null
  phone1?: string | null
  phone2?: string | null
  phone3?: string | null
  address?: AddressInput | null
  email?: string | null
}

export type ModelEmployerConditionInput = {
  name?: ModelStringInput | null
  phone1?: ModelStringInput | null
  phone2?: ModelStringInput | null
  phone3?: ModelStringInput | null
  email?: ModelStringInput | null
  and?: Array<ModelEmployerConditionInput | null> | null
  or?: Array<ModelEmployerConditionInput | null> | null
  not?: ModelEmployerConditionInput | null
}

export type UpdateEmployerInput = {
  id: string
  name?: string | null
  phone1?: string | null
  phone2?: string | null
  phone3?: string | null
  address?: AddressInput | null
  email?: string | null
}

export type DeleteEmployerInput = {
  id: string
}

export type CreatePatientEmployerInput = {
  id?: string | null
  patientPatientEmployersId: string
  employerPatientEmployersId: string
  occupation?: string | null
}

export type ModelPatientEmployerConditionInput = {
  patientPatientEmployersId?: ModelIDInput | null
  employerPatientEmployersId?: ModelIDInput | null
  occupation?: ModelStringInput | null
  and?: Array<ModelPatientEmployerConditionInput | null> | null
  or?: Array<ModelPatientEmployerConditionInput | null> | null
  not?: ModelPatientEmployerConditionInput | null
}

export type UpdatePatientEmployerInput = {
  id: string
  patientPatientEmployersId?: string | null
  employerPatientEmployersId?: string | null
  occupation?: string | null
}

export type DeletePatientEmployerInput = {
  id: string
}

export type CreateAppointmentTypeInput = {
  id?: string | null
  code?: string | null
  description?: string | null
  comment?: string | null
  slot?: number | null
  limit?: string | null
}

export type ModelAppointmentTypeConditionInput = {
  code?: ModelStringInput | null
  description?: ModelStringInput | null
  comment?: ModelStringInput | null
  slot?: ModelFloatInput | null
  limit?: ModelStringInput | null
  and?: Array<ModelAppointmentTypeConditionInput | null> | null
  or?: Array<ModelAppointmentTypeConditionInput | null> | null
  not?: ModelAppointmentTypeConditionInput | null
}

export type UpdateAppointmentTypeInput = {
  id: string
  code?: string | null
  description?: string | null
  comment?: string | null
  slot?: number | null
  limit?: string | null
}

export type DeleteAppointmentTypeInput = {
  id: string
}

export type CreateAppointmentInput = {
  id?: string | null
  patientAppointmentsId: string
  providerAppointmentsId: string
  appointmentTypeAppointmentsId: string
  date?: string | null
  time?: string | null
  length?: number | null
  comment?: string | null
  checkin?: string | null
  checkout?: string | null
  isMissed?: boolean | null
  status?: AppointmentStatus | null
}

export type ModelAppointmentConditionInput = {
  patientAppointmentsId?: ModelIDInput | null
  providerAppointmentsId?: ModelIDInput | null
  appointmentTypeAppointmentsId?: ModelIDInput | null
  date?: ModelStringInput | null
  time?: ModelStringInput | null
  length?: ModelFloatInput | null
  comment?: ModelStringInput | null
  checkin?: ModelStringInput | null
  checkout?: ModelStringInput | null
  isMissed?: ModelBooleanInput | null
  status?: ModelAppointmentStatusInput | null
  and?: Array<ModelAppointmentConditionInput | null> | null
  or?: Array<ModelAppointmentConditionInput | null> | null
  not?: ModelAppointmentConditionInput | null
}

export type ModelAppointmentStatusInput = {
  eq?: AppointmentStatus | null
  ne?: AppointmentStatus | null
}

export type UpdateAppointmentInput = {
  id: string
  patientAppointmentsId?: string | null
  providerAppointmentsId?: string | null
  appointmentTypeAppointmentsId?: string | null
  date?: string | null
  time?: string | null
  length?: number | null
  comment?: string | null
  checkin?: string | null
  checkout?: string | null
  isMissed?: boolean | null
  status?: AppointmentStatus | null
}

export type DeleteAppointmentInput = {
  id: string
}

export type CreateFormInput = {
  id?: string | null
  patientFormsId: string
  name?: string | null
  date?: string | null
  status?: FormStatus | null
  url?: string | null
}

export type ModelFormConditionInput = {
  patientFormsId?: ModelIDInput | null
  name?: ModelStringInput | null
  date?: ModelStringInput | null
  status?: ModelFormStatusInput | null
  url?: ModelStringInput | null
  and?: Array<ModelFormConditionInput | null> | null
  or?: Array<ModelFormConditionInput | null> | null
  not?: ModelFormConditionInput | null
}

export type ModelFormStatusInput = {
  eq?: FormStatus | null
  ne?: FormStatus | null
}

export type UpdateFormInput = {
  id: string
  patientFormsId?: string | null
  name?: string | null
  date?: string | null
  status?: FormStatus | null
  url?: string | null
}

export type DeleteFormInput = {
  id: string
}

export type CreateAllergyInput = {
  id?: string | null
  patientAllergiesId: string
  allergen?: string | null
  reaction?: string | null
  comment?: string | null
  date?: string | null
  severity?: AllergySeverity | null
}

export type ModelAllergyConditionInput = {
  patientAllergiesId?: ModelIDInput | null
  allergen?: ModelStringInput | null
  reaction?: ModelStringInput | null
  comment?: ModelStringInput | null
  date?: ModelStringInput | null
  severity?: ModelAllergySeverityInput | null
  and?: Array<ModelAllergyConditionInput | null> | null
  or?: Array<ModelAllergyConditionInput | null> | null
  not?: ModelAllergyConditionInput | null
}

export type ModelAllergySeverityInput = {
  eq?: AllergySeverity | null
  ne?: AllergySeverity | null
}

export type UpdateAllergyInput = {
  id: string
  patientAllergiesId?: string | null
  allergen?: string | null
  reaction?: string | null
  comment?: string | null
  date?: string | null
  severity?: AllergySeverity | null
}

export type DeleteAllergyInput = {
  id: string
}

export type CreateVitalInput = {
  id?: string | null
  patientVitalsId: string
  date?: string | null
  height?: number | null
  weight?: number | null
  bmi?: number | null
  bpd?: number | null
  bps?: number | null
  pulse?: number | null
  temp?: number | null
}

export type ModelVitalConditionInput = {
  patientVitalsId?: ModelIDInput | null
  date?: ModelStringInput | null
  height?: ModelFloatInput | null
  weight?: ModelFloatInput | null
  bmi?: ModelFloatInput | null
  bpd?: ModelFloatInput | null
  bps?: ModelFloatInput | null
  pulse?: ModelFloatInput | null
  temp?: ModelFloatInput | null
  and?: Array<ModelVitalConditionInput | null> | null
  or?: Array<ModelVitalConditionInput | null> | null
  not?: ModelVitalConditionInput | null
}

export type UpdateVitalInput = {
  id: string
  patientVitalsId?: string | null
  date?: string | null
  height?: number | null
  weight?: number | null
  bmi?: number | null
  bpd?: number | null
  bps?: number | null
  pulse?: number | null
  temp?: number | null
}

export type DeleteVitalInput = {
  id: string
}

export type CreateEducationInput = {
  id?: string | null
  patientEducationsId: string
  date?: string | null
  description?: string | null
  url?: string | null
}

export type ModelEducationConditionInput = {
  patientEducationsId?: ModelIDInput | null
  date?: ModelStringInput | null
  description?: ModelStringInput | null
  url?: ModelStringInput | null
  and?: Array<ModelEducationConditionInput | null> | null
  or?: Array<ModelEducationConditionInput | null> | null
  not?: ModelEducationConditionInput | null
}

export type UpdateEducationInput = {
  id: string
  patientEducationsId?: string | null
  date?: string | null
  description?: string | null
  url?: string | null
}

export type DeleteEducationInput = {
  id: string
}

export type CreateProblemInput = {
  id?: string | null
  patientProblemsId: string
  providerProblemsId: string
  date?: string | null
  updatedDate?: string | null
  description?: string | null
  code?: string | null
  severity?: ProblemSeverity | null
  status?: ProblemStatus | null
}

export type ModelProblemConditionInput = {
  patientProblemsId?: ModelIDInput | null
  providerProblemsId?: ModelIDInput | null
  date?: ModelStringInput | null
  updatedDate?: ModelStringInput | null
  description?: ModelStringInput | null
  code?: ModelStringInput | null
  severity?: ModelProblemSeverityInput | null
  status?: ModelProblemStatusInput | null
  and?: Array<ModelProblemConditionInput | null> | null
  or?: Array<ModelProblemConditionInput | null> | null
  not?: ModelProblemConditionInput | null
}

export type ModelProblemSeverityInput = {
  eq?: ProblemSeverity | null
  ne?: ProblemSeverity | null
}

export type ModelProblemStatusInput = {
  eq?: ProblemStatus | null
  ne?: ProblemStatus | null
}

export type UpdateProblemInput = {
  id: string
  patientProblemsId?: string | null
  providerProblemsId?: string | null
  date?: string | null
  updatedDate?: string | null
  description?: string | null
  code?: string | null
  severity?: ProblemSeverity | null
  status?: ProblemStatus | null
}

export type DeleteProblemInput = {
  id: string
}

export type CreateDocumentInput = {
  id?: string | null
  patientDocumentsId: string
  date?: string | null
  subject?: string | null
  name?: string | null
  url?: string | null
}

export type ModelDocumentConditionInput = {
  patientDocumentsId?: ModelIDInput | null
  date?: ModelStringInput | null
  subject?: ModelStringInput | null
  name?: ModelStringInput | null
  url?: ModelStringInput | null
  and?: Array<ModelDocumentConditionInput | null> | null
  or?: Array<ModelDocumentConditionInput | null> | null
  not?: ModelDocumentConditionInput | null
}

export type UpdateDocumentInput = {
  id: string
  patientDocumentsId?: string | null
  date?: string | null
  subject?: string | null
  name?: string | null
  url?: string | null
}

export type DeleteDocumentInput = {
  id: string
}

export type Locations = {
  __typename: 'Locations'
  count?: number | null
  records?: Array<Location | null> | null
}

export type GetProviderSlotsInput = {
  show?: string | null,
  providerId: string,
  onlyNotOccupied?: boolean | null,
  date: string,
};

export type ProviderSlots = {
  __typename: "ProviderSlots",
  count?: number | null,
  providerId?: string | null,
  records?:  Array<ProviderSlot | null > | null,
};

export type ProviderSlot = {
  __typename: "ProviderSlot",
  id: string,
  date?: string | null,
  time?: string | null,
  length?: number | null,
  isOccupied?: boolean | null,
};

export type AccessLogs = {
  __typename: "AccessLogs",
  count?: number | null,
  userId?: string | null,
  records?:  Array<AccessLog | null > | null,
};

export type AccessLog = {
  __typename: "AccessLog",
  id: string,
  date?: string | null,
  time?: string | null,
  person?: string | null,
  type?: string | null,
  area?: string | null,
  action?: string | null,
};

export type ModelPatientFilterInput = {
  id?: ModelIDInput | null
  title?: ModelTitleInput | null
  firstName?: ModelStringInput | null
  middleName?: ModelStringInput | null
  lastName?: ModelStringInput | null
  dob?: ModelStringInput | null
  sex?: ModelSexInput | null
  ssn?: ModelStringInput | null
  email?: ModelStringInput | null
  sameAsMailing?: ModelBooleanInput | null
  distance?: ModelFloatInput | null
  profilePicture?: ModelStringInput | null
  and?: Array<ModelPatientFilterInput | null> | null
  or?: Array<ModelPatientFilterInput | null> | null
  not?: ModelPatientFilterInput | null
  patientPhoneOtherId?: ModelIDInput | null
  patientCommunicationPreferenceId?: ModelIDInput | null
}

export type ModelPatientConnection = {
  __typename: 'ModelPatientConnection'
  items: Array<Patient | null>
  nextToken?: string | null
}

export type ModelUserFilterInput = {
  id?: ModelIDInput | null
  userPatientId?: ModelIDInput | null
  email?: ModelStringInput | null
  role?: ModelUserRoleInput | null
  and?: Array<ModelUserFilterInput | null> | null
  or?: Array<ModelUserFilterInput | null> | null
  not?: ModelUserFilterInput | null
}

export type ModelUserConnection = {
  __typename: 'ModelUserConnection'
  items: Array<User | null>
  nextToken?: string | null
}

export type ModelUserSettingFilterInput = {
  id?: ModelIDInput | null
  userUserSettingsId?: ModelIDInput | null
  key?: ModelStringInput | null
  value?: ModelStringInput | null
  and?: Array<ModelUserSettingFilterInput | null> | null
  or?: Array<ModelUserSettingFilterInput | null> | null
  not?: ModelUserSettingFilterInput | null
}

export type ModelUserWorkflowFilterInput = {
  id?: ModelIDInput | null
  userSettingUserWorkflowsId?: ModelIDInput | null
  type?: ModelWorkflowTypeInput | null
  status?: ModelStringInput | null
  and?: Array<ModelUserWorkflowFilterInput | null> | null
  or?: Array<ModelUserWorkflowFilterInput | null> | null
  not?: ModelUserWorkflowFilterInput | null
}

export type ModelPhoneOtherFilterInput = {
  id?: ModelIDInput | null
  patientPhoneOtherId?: ModelIDInput | null
  phoneType1?: ModelPhoneTypeInput | null
  phoneType2?: ModelPhoneTypeInput | null
  phoneType3?: ModelPhoneTypeInput | null
  phone1?: ModelStringInput | null
  phone2?: ModelStringInput | null
  phone3?: ModelStringInput | null
  isPreferred1?: ModelBooleanInput | null
  isPreferred2?: ModelBooleanInput | null
  isPreferred3?: ModelBooleanInput | null
  ok1?: ModelBooleanInput | null
  ok2?: ModelBooleanInput | null
  ok3?: ModelBooleanInput | null
  heardFrom?: ModelHeardFromInput | null
  specify?: ModelStringInput | null
  genderPronoun?: ModelGenderPronounInput | null
  genderIdentity?: ModelGenderIdentityInput | null
  sexualOrientation?: ModelSexualOrientationInput | null
  maritalStatus?: ModelMaritalStatusInput | null
  employmentStatus?: ModelEmploymentStatusInput | null
  preferredLanguage?: ModelPreferredLanguageInput | null
  race?: ModelRaceInput | null
  ethnicity?: ModelEthnicityInput | null
  annualIncome?: ModelFloatInput | null
  numberInHousehold?: ModelIntInput | null
  communicateElectronically?: ModelBooleanInput | null
  and?: Array<ModelPhoneOtherFilterInput | null> | null
  or?: Array<ModelPhoneOtherFilterInput | null> | null
  not?: ModelPhoneOtherFilterInput | null
  phoneOtherPatientId?: ModelIDInput | null
}

export type ModelPhoneOtherConnection = {
  __typename: 'ModelPhoneOtherConnection'
  items: Array<PhoneOther | null>
  nextToken?: string | null
}

export type ModelCommunicationPreferenceFilterInput = {
  id?: ModelIDInput | null
  patientCommunicationPreferenceId?: ModelIDInput | null
  appointmentInformation?: ModelCommunicationPreferenceType1ListInput | null
  healthInformation?: ModelCommunicationPreferenceType1ListInput | null
  patientSurvey?: ModelCommunicationPreferenceType2ListInput | null
  visitSummary?: ModelCommunicationPreferenceType2ListInput | null
  receivePaperlessStatement?: ModelBooleanInput | null
  paperlessStatement?: ModelCommunicationPreferenceType2ListInput | null
  staffTextMessaging?: ModelBooleanInput | null
  checkinProcessTextMessaging?: ModelBooleanInput | null
  agreed?: ModelBooleanInput | null
  and?: Array<ModelCommunicationPreferenceFilterInput | null> | null
  or?: Array<ModelCommunicationPreferenceFilterInput | null> | null
  not?: ModelCommunicationPreferenceFilterInput | null
  communicationPreferencePatientId?: ModelIDInput | null
}

export type ModelCommunicationPreferenceConnection = {
  __typename: 'ModelCommunicationPreferenceConnection'
  items: Array<CommunicationPreference | null>
  nextToken?: string | null
}

export type ModelInsuranceFilterInput = {
  id?: ModelIDInput | null
  name?: ModelStringInput | null
  phone1?: ModelStringInput | null
  phone2?: ModelStringInput | null
  phone3?: ModelStringInput | null
  email?: ModelStringInput | null
  and?: Array<ModelInsuranceFilterInput | null> | null
  or?: Array<ModelInsuranceFilterInput | null> | null
  not?: ModelInsuranceFilterInput | null
}

export type ModelInsuranceConnection = {
  __typename: 'ModelInsuranceConnection'
  items: Array<Insurance | null>
  nextToken?: string | null
}

export type ModelPatientInsuranceFilterInput = {
  id?: ModelIDInput | null
  patientPatientInsurancesId?: ModelIDInput | null
  insurancePatientInsurancesId?: ModelIDInput | null
  effectiveDate?: ModelStringInput | null
  ssid?: ModelStringInput | null
  group?: ModelStringInput | null
  hmo?: ModelStringInput | null
  copay?: ModelStringInput | null
  amount?: ModelFloatInput | null
  relationship?: ModelStringInput | null
  firstName?: ModelStringInput | null
  lastName?: ModelStringInput | null
  phone?: ModelStringInput | null
  dob?: ModelStringInput | null
  sex?: ModelSexInput | null
  and?: Array<ModelPatientInsuranceFilterInput | null> | null
  or?: Array<ModelPatientInsuranceFilterInput | null> | null
  not?: ModelPatientInsuranceFilterInput | null
}

export type ModelCardFilterInput = {
  id?: ModelIDInput | null
  patientInsuranceCardsId?: ModelIDInput | null
  insuranceCardBackUrl?: ModelStringInput | null
  insuranceCardFrontUrl?: ModelStringInput | null
  cardType?: ModelCardTypeInput | null
  date?: ModelStringInput | null
  and?: Array<ModelCardFilterInput | null> | null
  or?: Array<ModelCardFilterInput | null> | null
  not?: ModelCardFilterInput | null
}

export type ModelContactFilterInput = {
  id?: ModelIDInput | null
  patientContactsId?: ModelIDInput | null
  contactType?: ModelContactTypeInput | null
  firstName?: ModelStringInput | null
  middleName?: ModelStringInput | null
  lastName?: ModelStringInput | null
  phone1?: ModelStringInput | null
  phone2?: ModelStringInput | null
  phone3?: ModelStringInput | null
  ok1?: ModelBooleanInput | null
  ok2?: ModelBooleanInput | null
  ok3?: ModelBooleanInput | null
  isPreferred?: ModelBooleanInput | null
  email?: ModelStringInput | null
  and?: Array<ModelContactFilterInput | null> | null
  or?: Array<ModelContactFilterInput | null> | null
  not?: ModelContactFilterInput | null
}

export type ModelProviderFilterInput = {
  id?: ModelIDInput | null
  firstName?: ModelStringInput | null
  lastName?: ModelStringInput | null
  phone1?: ModelStringInput | null
  phone2?: ModelStringInput | null
  phone3?: ModelStringInput | null
  and?: Array<ModelProviderFilterInput | null> | null
  or?: Array<ModelProviderFilterInput | null> | null
  not?: ModelProviderFilterInput | null
}

export type ModelProviderConnection = {
  __typename: 'ModelProviderConnection'
  items: Array<Provider | null>
  nextToken?: string | null
}

export type ModelPatientProviderFilterInput = {
  id?: ModelIDInput | null
  patientPatientProvidersId?: ModelIDInput | null
  providerPatientProvidersId?: ModelIDInput | null
  isPrimary?: ModelBooleanInput | null
  and?: Array<ModelPatientProviderFilterInput | null> | null
  or?: Array<ModelPatientProviderFilterInput | null> | null
  not?: ModelPatientProviderFilterInput | null
}

export type ModelEmployerFilterInput = {
  id?: ModelIDInput | null
  name?: ModelStringInput | null
  phone1?: ModelStringInput | null
  phone2?: ModelStringInput | null
  phone3?: ModelStringInput | null
  email?: ModelStringInput | null
  and?: Array<ModelEmployerFilterInput | null> | null
  or?: Array<ModelEmployerFilterInput | null> | null
  not?: ModelEmployerFilterInput | null
}

export type ModelEmployerConnection = {
  __typename: 'ModelEmployerConnection'
  items: Array<Employer | null>
  nextToken?: string | null
}

export type ModelPatientEmployerFilterInput = {
  id?: ModelIDInput | null
  patientPatientEmployersId?: ModelIDInput | null
  employerPatientEmployersId?: ModelIDInput | null
  occupation?: ModelStringInput | null
  and?: Array<ModelPatientEmployerFilterInput | null> | null
  or?: Array<ModelPatientEmployerFilterInput | null> | null
  not?: ModelPatientEmployerFilterInput | null
}

export type ModelAppointmentTypeFilterInput = {
  id?: ModelIDInput | null
  code?: ModelStringInput | null
  description?: ModelStringInput | null
  comment?: ModelStringInput | null
  slot?: ModelFloatInput | null
  limit?: ModelStringInput | null
  and?: Array<ModelAppointmentTypeFilterInput | null> | null
  or?: Array<ModelAppointmentTypeFilterInput | null> | null
  not?: ModelAppointmentTypeFilterInput | null
}

export type ModelAppointmentTypeConnection = {
  __typename: 'ModelAppointmentTypeConnection'
  items: Array<AppointmentType | null>
  nextToken?: string | null
}

export type ModelAppointmentFilterInput = {
  id?: ModelIDInput | null
  patientAppointmentsId?: ModelIDInput | null
  providerAppointmentsId?: ModelIDInput | null
  appointmentTypeAppointmentsId?: ModelIDInput | null
  date?: ModelStringInput | null
  time?: ModelStringInput | null
  length?: ModelFloatInput | null
  comment?: ModelStringInput | null
  checkin?: ModelStringInput | null
  checkout?: ModelStringInput | null
  isMissed?: ModelBooleanInput | null
  status?: ModelAppointmentStatusInput | null
  and?: Array<ModelAppointmentFilterInput | null> | null
  or?: Array<ModelAppointmentFilterInput | null> | null
  not?: ModelAppointmentFilterInput | null
}

export type ModelFormFilterInput = {
  id?: ModelIDInput | null
  patientFormsId?: ModelIDInput | null
  name?: ModelStringInput | null
  date?: ModelStringInput | null
  status?: ModelFormStatusInput | null
  url?: ModelStringInput | null
  and?: Array<ModelFormFilterInput | null> | null
  or?: Array<ModelFormFilterInput | null> | null
  not?: ModelFormFilterInput | null
}

export type ModelAllergyFilterInput = {
  id?: ModelIDInput | null
  patientAllergiesId?: ModelIDInput | null
  allergen?: ModelStringInput | null
  reaction?: ModelStringInput | null
  comment?: ModelStringInput | null
  date?: ModelStringInput | null
  severity?: ModelAllergySeverityInput | null
  and?: Array<ModelAllergyFilterInput | null> | null
  or?: Array<ModelAllergyFilterInput | null> | null
  not?: ModelAllergyFilterInput | null
}

export type ModelVitalFilterInput = {
  id?: ModelIDInput | null
  patientVitalsId?: ModelIDInput | null
  date?: ModelStringInput | null
  height?: ModelFloatInput | null
  weight?: ModelFloatInput | null
  bmi?: ModelFloatInput | null
  bpd?: ModelFloatInput | null
  bps?: ModelFloatInput | null
  pulse?: ModelFloatInput | null
  temp?: ModelFloatInput | null
  and?: Array<ModelVitalFilterInput | null> | null
  or?: Array<ModelVitalFilterInput | null> | null
  not?: ModelVitalFilterInput | null
}

export type ModelEducationFilterInput = {
  id?: ModelIDInput | null
  patientEducationsId?: ModelIDInput | null
  date?: ModelStringInput | null
  description?: ModelStringInput | null
  url?: ModelStringInput | null
  and?: Array<ModelEducationFilterInput | null> | null
  or?: Array<ModelEducationFilterInput | null> | null
  not?: ModelEducationFilterInput | null
}

export type ModelProblemFilterInput = {
  id?: ModelIDInput | null
  patientProblemsId?: ModelIDInput | null
  providerProblemsId?: ModelIDInput | null
  date?: ModelStringInput | null
  updatedDate?: ModelStringInput | null
  description?: ModelStringInput | null
  code?: ModelStringInput | null
  severity?: ModelProblemSeverityInput | null
  status?: ModelProblemStatusInput | null
  and?: Array<ModelProblemFilterInput | null> | null
  or?: Array<ModelProblemFilterInput | null> | null
  not?: ModelProblemFilterInput | null
}

export type ModelDocumentFilterInput = {
  id?: ModelIDInput | null
  patientDocumentsId?: ModelIDInput | null
  date?: ModelStringInput | null
  subject?: ModelStringInput | null
  name?: ModelStringInput | null
  url?: ModelStringInput | null
  and?: Array<ModelDocumentFilterInput | null> | null
  or?: Array<ModelDocumentFilterInput | null> | null
  not?: ModelDocumentFilterInput | null
}

export enum ModelSortDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}

export type ModelStringKeyConditionInput = {
  eq?: string | null
  le?: string | null
  lt?: string | null
  ge?: string | null
  gt?: string | null
  between?: Array<string | null> | null
  beginsWith?: string | null
}

export type CreatePatientMutationVariables = {
  input: CreatePatientInput
  condition?: ModelPatientConditionInput | null
}

export type CreatePatientMutation = {
  createPatient?: {
    __typename: 'Patient'
    id: string
    phoneOther?: {
      __typename: 'PhoneOther'
      id: string
      patientPhoneOtherId?: string | null
      phoneType1?: PhoneType | null
      phoneType2?: PhoneType | null
      phoneType3?: PhoneType | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      isPreferred1?: boolean | null
      isPreferred2?: boolean | null
      isPreferred3?: boolean | null
      ok1?: boolean | null
      ok2?: boolean | null
      ok3?: boolean | null
      heardFrom?: HeardFrom | null
      specify?: string | null
      genderPronoun?: GenderPronoun | null
      genderIdentity?: GenderIdentity | null
      sexualOrientation?: SexualOrientation | null
      maritalStatus?: MaritalStatus | null
      employmentStatus?: EmploymentStatus | null
      preferredLanguage?: PreferredLanguage | null
      race?: Race | null
      ethnicity?: Ethnicity | null
      annualIncome?: number | null
      numberInHousehold?: number | null
      communicateElectronically?: boolean | null
      createdAt: string
      updatedAt: string
      phoneOtherPatientId?: string | null
    } | null
    communicationPreference?: {
      __typename: 'CommunicationPreference'
      id: string
      patientCommunicationPreferenceId?: string | null
      appointmentInformation?: Array<CommunicationPreferenceType1 | null> | null
      healthInformation?: Array<CommunicationPreferenceType1 | null> | null
      patientSurvey?: Array<CommunicationPreferenceType2 | null> | null
      visitSummary?: Array<CommunicationPreferenceType2 | null> | null
      receivePaperlessStatement?: boolean | null
      paperlessStatement?: Array<CommunicationPreferenceType2 | null> | null
      staffTextMessaging?: boolean | null
      checkinProcessTextMessaging?: boolean | null
      agreed?: boolean | null
      createdAt: string
      updatedAt: string
      communicationPreferencePatientId?: string | null
    } | null
    location?: {
      __typename: 'Location'
      code: string
      name?: string | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      email?: string | null
      license1?: string | null
      license2?: string | null
      license3?: string | null
      license4?: string | null
    } | null
    patientInsurances?: {
      __typename: 'ModelPatientInsuranceConnection'
      nextToken?: string | null
    } | null
    contacts?: {
      __typename: 'ModelContactConnection'
      nextToken?: string | null
    } | null
    patientProviders?: {
      __typename: 'ModelPatientProviderConnection'
      nextToken?: string | null
    } | null
    patientEmployers?: {
      __typename: 'ModelPatientEmployerConnection'
      nextToken?: string | null
    } | null
    appointments?: {
      __typename: 'ModelAppointmentConnection'
      nextToken?: string | null
    } | null
    forms?: {
      __typename: 'ModelFormConnection'
      nextToken?: string | null
    } | null
    allergies?: {
      __typename: 'ModelAllergyConnection'
      nextToken?: string | null
    } | null
    vitals?: {
      __typename: 'ModelVitalConnection'
      nextToken?: string | null
    } | null
    educations?: {
      __typename: 'ModelEducationConnection'
      nextToken?: string | null
    } | null
    problems?: {
      __typename: 'ModelProblemConnection'
      nextToken?: string | null
    } | null
    documents?: {
      __typename: 'ModelDocumentConnection'
      nextToken?: string | null
    } | null
    title?: Title | null
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    dob?: string | null
    sex?: Sex | null
    ssn?: string | null
    email?: string | null
    mailingAddress?: {
      __typename: 'Address'
      street?: string | null
      city?: string | null
      state?: string | null
      zip?: string | null
    } | null
    physicalAddress?: {
      __typename: 'Address'
      street?: string | null
      city?: string | null
      state?: string | null
      zip?: string | null
    } | null
    sameAsMailing?: boolean | null
    distance?: number | null
    profilePicture?: string | null
    createdAt: string
    updatedAt: string
    patientPhoneOtherId?: string | null
    patientCommunicationPreferenceId?: string | null
  } | null
}

export type UpdatePatientMutationVariables = {
  input: UpdatePatientInput
  condition?: ModelPatientConditionInput | null
}

export type UpdatePatientMutation = {
  updatePatient?: {
    __typename: 'Patient'
    id: string
    phoneOther?: {
      __typename: 'PhoneOther'
      id: string
      patientPhoneOtherId?: string | null
      phoneType1?: PhoneType | null
      phoneType2?: PhoneType | null
      phoneType3?: PhoneType | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      isPreferred1?: boolean | null
      isPreferred2?: boolean | null
      isPreferred3?: boolean | null
      ok1?: boolean | null
      ok2?: boolean | null
      ok3?: boolean | null
      heardFrom?: HeardFrom | null
      specify?: string | null
      genderPronoun?: GenderPronoun | null
      genderIdentity?: GenderIdentity | null
      sexualOrientation?: SexualOrientation | null
      maritalStatus?: MaritalStatus | null
      employmentStatus?: EmploymentStatus | null
      preferredLanguage?: PreferredLanguage | null
      race?: Race | null
      ethnicity?: Ethnicity | null
      annualIncome?: number | null
      numberInHousehold?: number | null
      communicateElectronically?: boolean | null
      createdAt: string
      updatedAt: string
      phoneOtherPatientId?: string | null
    } | null
    communicationPreference?: {
      __typename: 'CommunicationPreference'
      id: string
      patientCommunicationPreferenceId?: string | null
      appointmentInformation?: Array<CommunicationPreferenceType1 | null> | null
      healthInformation?: Array<CommunicationPreferenceType1 | null> | null
      patientSurvey?: Array<CommunicationPreferenceType2 | null> | null
      visitSummary?: Array<CommunicationPreferenceType2 | null> | null
      receivePaperlessStatement?: boolean | null
      paperlessStatement?: Array<CommunicationPreferenceType2 | null> | null
      staffTextMessaging?: boolean | null
      checkinProcessTextMessaging?: boolean | null
      agreed?: boolean | null
      createdAt: string
      updatedAt: string
      communicationPreferencePatientId?: string | null
    } | null
    location?: {
      __typename: 'Location'
      code: string
      name?: string | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      email?: string | null
      license1?: string | null
      license2?: string | null
      license3?: string | null
      license4?: string | null
    } | null
    patientInsurances?: {
      __typename: 'ModelPatientInsuranceConnection'
      nextToken?: string | null
    } | null
    contacts?: {
      __typename: 'ModelContactConnection'
      nextToken?: string | null
    } | null
    patientProviders?: {
      __typename: 'ModelPatientProviderConnection'
      nextToken?: string | null
    } | null
    patientEmployers?: {
      __typename: 'ModelPatientEmployerConnection'
      nextToken?: string | null
    } | null
    appointments?: {
      __typename: 'ModelAppointmentConnection'
      nextToken?: string | null
    } | null
    forms?: {
      __typename: 'ModelFormConnection'
      nextToken?: string | null
    } | null
    allergies?: {
      __typename: 'ModelAllergyConnection'
      nextToken?: string | null
    } | null
    vitals?: {
      __typename: 'ModelVitalConnection'
      nextToken?: string | null
    } | null
    educations?: {
      __typename: 'ModelEducationConnection'
      nextToken?: string | null
    } | null
    problems?: {
      __typename: 'ModelProblemConnection'
      nextToken?: string | null
    } | null
    documents?: {
      __typename: 'ModelDocumentConnection'
      nextToken?: string | null
    } | null
    title?: Title | null
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    dob?: string | null
    sex?: Sex | null
    ssn?: string | null
    email?: string | null
    mailingAddress?: {
      __typename: 'Address'
      street?: string | null
      city?: string | null
      state?: string | null
      zip?: string | null
    } | null
    physicalAddress?: {
      __typename: 'Address'
      street?: string | null
      city?: string | null
      state?: string | null
      zip?: string | null
    } | null
    sameAsMailing?: boolean | null
    distance?: number | null
    profilePicture?: string | null
    createdAt: string
    updatedAt: string
    patientPhoneOtherId?: string | null
    patientCommunicationPreferenceId?: string | null
  } | null
}

export type DeletePatientMutationVariables = {
  input: DeletePatientInput
  condition?: ModelPatientConditionInput | null
}

export type DeletePatientMutation = {
  deletePatient?: {
    __typename: 'Patient'
    id: string
    phoneOther?: {
      __typename: 'PhoneOther'
      id: string
      patientPhoneOtherId?: string | null
      phoneType1?: PhoneType | null
      phoneType2?: PhoneType | null
      phoneType3?: PhoneType | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      isPreferred1?: boolean | null
      isPreferred2?: boolean | null
      isPreferred3?: boolean | null
      ok1?: boolean | null
      ok2?: boolean | null
      ok3?: boolean | null
      heardFrom?: HeardFrom | null
      specify?: string | null
      genderPronoun?: GenderPronoun | null
      genderIdentity?: GenderIdentity | null
      sexualOrientation?: SexualOrientation | null
      maritalStatus?: MaritalStatus | null
      employmentStatus?: EmploymentStatus | null
      preferredLanguage?: PreferredLanguage | null
      race?: Race | null
      ethnicity?: Ethnicity | null
      annualIncome?: number | null
      numberInHousehold?: number | null
      communicateElectronically?: boolean | null
      createdAt: string
      updatedAt: string
      phoneOtherPatientId?: string | null
    } | null
    communicationPreference?: {
      __typename: 'CommunicationPreference'
      id: string
      patientCommunicationPreferenceId?: string | null
      appointmentInformation?: Array<CommunicationPreferenceType1 | null> | null
      healthInformation?: Array<CommunicationPreferenceType1 | null> | null
      patientSurvey?: Array<CommunicationPreferenceType2 | null> | null
      visitSummary?: Array<CommunicationPreferenceType2 | null> | null
      receivePaperlessStatement?: boolean | null
      paperlessStatement?: Array<CommunicationPreferenceType2 | null> | null
      staffTextMessaging?: boolean | null
      checkinProcessTextMessaging?: boolean | null
      agreed?: boolean | null
      createdAt: string
      updatedAt: string
      communicationPreferencePatientId?: string | null
    } | null
    location?: {
      __typename: 'Location'
      code: string
      name?: string | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      email?: string | null
      license1?: string | null
      license2?: string | null
      license3?: string | null
      license4?: string | null
    } | null
    patientInsurances?: {
      __typename: 'ModelPatientInsuranceConnection'
      nextToken?: string | null
    } | null
    contacts?: {
      __typename: 'ModelContactConnection'
      nextToken?: string | null
    } | null
    patientProviders?: {
      __typename: 'ModelPatientProviderConnection'
      nextToken?: string | null
    } | null
    patientEmployers?: {
      __typename: 'ModelPatientEmployerConnection'
      nextToken?: string | null
    } | null
    appointments?: {
      __typename: 'ModelAppointmentConnection'
      nextToken?: string | null
    } | null
    forms?: {
      __typename: 'ModelFormConnection'
      nextToken?: string | null
    } | null
    allergies?: {
      __typename: 'ModelAllergyConnection'
      nextToken?: string | null
    } | null
    vitals?: {
      __typename: 'ModelVitalConnection'
      nextToken?: string | null
    } | null
    educations?: {
      __typename: 'ModelEducationConnection'
      nextToken?: string | null
    } | null
    problems?: {
      __typename: 'ModelProblemConnection'
      nextToken?: string | null
    } | null
    documents?: {
      __typename: 'ModelDocumentConnection'
      nextToken?: string | null
    } | null
    title?: Title | null
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    dob?: string | null
    sex?: Sex | null
    ssn?: string | null
    email?: string | null
    mailingAddress?: {
      __typename: 'Address'
      street?: string | null
      city?: string | null
      state?: string | null
      zip?: string | null
    } | null
    physicalAddress?: {
      __typename: 'Address'
      street?: string | null
      city?: string | null
      state?: string | null
      zip?: string | null
    } | null
    sameAsMailing?: boolean | null
    distance?: number | null
    profilePicture?: string | null
    createdAt: string
    updatedAt: string
    patientPhoneOtherId?: string | null
    patientCommunicationPreferenceId?: string | null
  } | null
}

export type CreateUserMutationVariables = {
  input: CreateUserInput
  condition?: ModelUserConditionInput | null
}

export type CreateUserMutation = {
  createUser?: {
    __typename: 'User'
    id: string
    userPatientId?: string | null
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    userSettings?: {
      __typename: 'ModelUserSettingConnection'
      nextToken?: string | null
    } | null
    email: string
    role?: UserRole | null
    createdAt: string
    updatedAt: string
  } | null
}

export type UpdateUserMutationVariables = {
  input: UpdateUserInput
  condition?: ModelUserConditionInput | null
}

export type UpdateUserMutation = {
  updateUser?: {
    __typename: 'User'
    id: string
    userPatientId?: string | null
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    userSettings?: {
      __typename: 'ModelUserSettingConnection'
      nextToken?: string | null
    } | null
    email: string
    role?: UserRole | null
    createdAt: string
    updatedAt: string
  } | null
}

export type DeleteUserMutationVariables = {
  input: DeleteUserInput
  condition?: ModelUserConditionInput | null
}

export type DeleteUserMutation = {
  deleteUser?: {
    __typename: 'User'
    id: string
    userPatientId?: string | null
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    userSettings?: {
      __typename: 'ModelUserSettingConnection'
      nextToken?: string | null
    } | null
    email: string
    role?: UserRole | null
    createdAt: string
    updatedAt: string
  } | null
}

export type CreateUserSettingMutationVariables = {
  input: CreateUserSettingInput
  condition?: ModelUserSettingConditionInput | null
}

export type CreateUserSettingMutation = {
  createUserSetting?: {
    __typename: 'UserSetting'
    id: string
    user?: {
      __typename: 'User'
      id: string
      userPatientId?: string | null
      email: string
      role?: UserRole | null
      createdAt: string
      updatedAt: string
    } | null
    userUserSettingsId: string
    key?: string | null
    value?: string | null
    userWorkflows?: {
      __typename: 'ModelUserWorkflowConnection'
      nextToken?: string | null
    } | null
    createdAt: string
    updatedAt: string
  } | null
}

export type UpdateUserSettingMutationVariables = {
  input: UpdateUserSettingInput
  condition?: ModelUserSettingConditionInput | null
}

export type UpdateUserSettingMutation = {
  updateUserSetting?: {
    __typename: 'UserSetting'
    id: string
    user?: {
      __typename: 'User'
      id: string
      userPatientId?: string | null
      email: string
      role?: UserRole | null
      createdAt: string
      updatedAt: string
    } | null
    userUserSettingsId: string
    key?: string | null
    value?: string | null
    userWorkflows?: {
      __typename: 'ModelUserWorkflowConnection'
      nextToken?: string | null
    } | null
    createdAt: string
    updatedAt: string
  } | null
}

export type DeleteUserSettingMutationVariables = {
  input: DeleteUserSettingInput
  condition?: ModelUserSettingConditionInput | null
}

export type DeleteUserSettingMutation = {
  deleteUserSetting?: {
    __typename: 'UserSetting'
    id: string
    user?: {
      __typename: 'User'
      id: string
      userPatientId?: string | null
      email: string
      role?: UserRole | null
      createdAt: string
      updatedAt: string
    } | null
    userUserSettingsId: string
    key?: string | null
    value?: string | null
    userWorkflows?: {
      __typename: 'ModelUserWorkflowConnection'
      nextToken?: string | null
    } | null
    createdAt: string
    updatedAt: string
  } | null
}

export type CreateUserWorkflowMutationVariables = {
  input: CreateUserWorkflowInput
  condition?: ModelUserWorkflowConditionInput | null
}

export type CreateUserWorkflowMutation = {
  createUserWorkflow?: {
    __typename: 'UserWorkflow'
    id: string
    userSetting?: {
      __typename: 'UserSetting'
      id: string
      userUserSettingsId: string
      key?: string | null
      value?: string | null
      createdAt: string
      updatedAt: string
    } | null
    userSettingUserWorkflowsId: string
    type?: WorkflowType | null
    status?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type UpdateUserWorkflowMutationVariables = {
  input: UpdateUserWorkflowInput
  condition?: ModelUserWorkflowConditionInput | null
}

export type UpdateUserWorkflowMutation = {
  updateUserWorkflow?: {
    __typename: 'UserWorkflow'
    id: string
    userSetting?: {
      __typename: 'UserSetting'
      id: string
      userUserSettingsId: string
      key?: string | null
      value?: string | null
      createdAt: string
      updatedAt: string
    } | null
    userSettingUserWorkflowsId: string
    type?: WorkflowType | null
    status?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type DeleteUserWorkflowMutationVariables = {
  input: DeleteUserWorkflowInput
  condition?: ModelUserWorkflowConditionInput | null
}

export type DeleteUserWorkflowMutation = {
  deleteUserWorkflow?: {
    __typename: 'UserWorkflow'
    id: string
    userSetting?: {
      __typename: 'UserSetting'
      id: string
      userUserSettingsId: string
      key?: string | null
      value?: string | null
      createdAt: string
      updatedAt: string
    } | null
    userSettingUserWorkflowsId: string
    type?: WorkflowType | null
    status?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type CreatePhoneOtherMutationVariables = {
  input: CreatePhoneOtherInput
  condition?: ModelPhoneOtherConditionInput | null
}

export type CreatePhoneOtherMutation = {
  createPhoneOther?: {
    __typename: 'PhoneOther'
    id: string
    patientPhoneOtherId?: string | null
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    phoneType1?: PhoneType | null
    phoneType2?: PhoneType | null
    phoneType3?: PhoneType | null
    phone1?: string | null
    phone2?: string | null
    phone3?: string | null
    isPreferred1?: boolean | null
    isPreferred2?: boolean | null
    isPreferred3?: boolean | null
    ok1?: boolean | null
    ok2?: boolean | null
    ok3?: boolean | null
    heardFrom?: HeardFrom | null
    specify?: string | null
    genderPronoun?: GenderPronoun | null
    genderIdentity?: GenderIdentity | null
    sexualOrientation?: SexualOrientation | null
    maritalStatus?: MaritalStatus | null
    employmentStatus?: EmploymentStatus | null
    preferredLanguage?: PreferredLanguage | null
    race?: Race | null
    ethnicity?: Ethnicity | null
    annualIncome?: number | null
    numberInHousehold?: number | null
    communicateElectronically?: boolean | null
    createdAt: string
    updatedAt: string
    phoneOtherPatientId?: string | null
  } | null
}

export type UpdatePhoneOtherMutationVariables = {
  input: UpdatePhoneOtherInput
  condition?: ModelPhoneOtherConditionInput | null
}

export type UpdatePhoneOtherMutation = {
  updatePhoneOther?: {
    __typename: 'PhoneOther'
    id: string
    patientPhoneOtherId?: string | null
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    phoneType1?: PhoneType | null
    phoneType2?: PhoneType | null
    phoneType3?: PhoneType | null
    phone1?: string | null
    phone2?: string | null
    phone3?: string | null
    isPreferred1?: boolean | null
    isPreferred2?: boolean | null
    isPreferred3?: boolean | null
    ok1?: boolean | null
    ok2?: boolean | null
    ok3?: boolean | null
    heardFrom?: HeardFrom | null
    specify?: string | null
    genderPronoun?: GenderPronoun | null
    genderIdentity?: GenderIdentity | null
    sexualOrientation?: SexualOrientation | null
    maritalStatus?: MaritalStatus | null
    employmentStatus?: EmploymentStatus | null
    preferredLanguage?: PreferredLanguage | null
    race?: Race | null
    ethnicity?: Ethnicity | null
    annualIncome?: number | null
    numberInHousehold?: number | null
    communicateElectronically?: boolean | null
    createdAt: string
    updatedAt: string
    phoneOtherPatientId?: string | null
  } | null
}

export type DeletePhoneOtherMutationVariables = {
  input: DeletePhoneOtherInput
  condition?: ModelPhoneOtherConditionInput | null
}

export type DeletePhoneOtherMutation = {
  deletePhoneOther?: {
    __typename: 'PhoneOther'
    id: string
    patientPhoneOtherId?: string | null
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    phoneType1?: PhoneType | null
    phoneType2?: PhoneType | null
    phoneType3?: PhoneType | null
    phone1?: string | null
    phone2?: string | null
    phone3?: string | null
    isPreferred1?: boolean | null
    isPreferred2?: boolean | null
    isPreferred3?: boolean | null
    ok1?: boolean | null
    ok2?: boolean | null
    ok3?: boolean | null
    heardFrom?: HeardFrom | null
    specify?: string | null
    genderPronoun?: GenderPronoun | null
    genderIdentity?: GenderIdentity | null
    sexualOrientation?: SexualOrientation | null
    maritalStatus?: MaritalStatus | null
    employmentStatus?: EmploymentStatus | null
    preferredLanguage?: PreferredLanguage | null
    race?: Race | null
    ethnicity?: Ethnicity | null
    annualIncome?: number | null
    numberInHousehold?: number | null
    communicateElectronically?: boolean | null
    createdAt: string
    updatedAt: string
    phoneOtherPatientId?: string | null
  } | null
}

export type CreateCommunicationPreferenceMutationVariables = {
  input: CreateCommunicationPreferenceInput
  condition?: ModelCommunicationPreferenceConditionInput | null
}

export type CreateCommunicationPreferenceMutation = {
  createCommunicationPreference?: {
    __typename: 'CommunicationPreference'
    id: string
    patientCommunicationPreferenceId?: string | null
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    appointmentInformation?: Array<CommunicationPreferenceType1 | null> | null
    healthInformation?: Array<CommunicationPreferenceType1 | null> | null
    patientSurvey?: Array<CommunicationPreferenceType2 | null> | null
    visitSummary?: Array<CommunicationPreferenceType2 | null> | null
    receivePaperlessStatement?: boolean | null
    paperlessStatement?: Array<CommunicationPreferenceType2 | null> | null
    staffTextMessaging?: boolean | null
    checkinProcessTextMessaging?: boolean | null
    agreed?: boolean | null
    createdAt: string
    updatedAt: string
    communicationPreferencePatientId?: string | null
  } | null
}

export type UpdateCommunicationPreferenceMutationVariables = {
  input: UpdateCommunicationPreferenceInput
  condition?: ModelCommunicationPreferenceConditionInput | null
}

export type UpdateCommunicationPreferenceMutation = {
  updateCommunicationPreference?: {
    __typename: 'CommunicationPreference'
    id: string
    patientCommunicationPreferenceId?: string | null
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    appointmentInformation?: Array<CommunicationPreferenceType1 | null> | null
    healthInformation?: Array<CommunicationPreferenceType1 | null> | null
    patientSurvey?: Array<CommunicationPreferenceType2 | null> | null
    visitSummary?: Array<CommunicationPreferenceType2 | null> | null
    receivePaperlessStatement?: boolean | null
    paperlessStatement?: Array<CommunicationPreferenceType2 | null> | null
    staffTextMessaging?: boolean | null
    checkinProcessTextMessaging?: boolean | null
    agreed?: boolean | null
    createdAt: string
    updatedAt: string
    communicationPreferencePatientId?: string | null
  } | null
}

export type DeleteCommunicationPreferenceMutationVariables = {
  input: DeleteCommunicationPreferenceInput
  condition?: ModelCommunicationPreferenceConditionInput | null
}

export type DeleteCommunicationPreferenceMutation = {
  deleteCommunicationPreference?: {
    __typename: 'CommunicationPreference'
    id: string
    patientCommunicationPreferenceId?: string | null
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    appointmentInformation?: Array<CommunicationPreferenceType1 | null> | null
    healthInformation?: Array<CommunicationPreferenceType1 | null> | null
    patientSurvey?: Array<CommunicationPreferenceType2 | null> | null
    visitSummary?: Array<CommunicationPreferenceType2 | null> | null
    receivePaperlessStatement?: boolean | null
    paperlessStatement?: Array<CommunicationPreferenceType2 | null> | null
    staffTextMessaging?: boolean | null
    checkinProcessTextMessaging?: boolean | null
    agreed?: boolean | null
    createdAt: string
    updatedAt: string
    communicationPreferencePatientId?: string | null
  } | null
}

export type CreateInsuranceMutationVariables = {
  input: CreateInsuranceInput
  condition?: ModelInsuranceConditionInput | null
}

export type CreateInsuranceMutation = {
  createInsurance?: {
    __typename: 'Insurance'
    id: string
    patientInsurances?: {
      __typename: 'ModelPatientInsuranceConnection'
      nextToken?: string | null
    } | null
    name?: string | null
    address?: {
      __typename: 'Address'
      street?: string | null
      city?: string | null
      state?: string | null
      zip?: string | null
    } | null
    phone1?: string | null
    phone2?: string | null
    phone3?: string | null
    email?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type UpdateInsuranceMutationVariables = {
  input: UpdateInsuranceInput
  condition?: ModelInsuranceConditionInput | null
}

export type UpdateInsuranceMutation = {
  updateInsurance?: {
    __typename: 'Insurance'
    id: string
    patientInsurances?: {
      __typename: 'ModelPatientInsuranceConnection'
      nextToken?: string | null
    } | null
    name?: string | null
    address?: {
      __typename: 'Address'
      street?: string | null
      city?: string | null
      state?: string | null
      zip?: string | null
    } | null
    phone1?: string | null
    phone2?: string | null
    phone3?: string | null
    email?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type DeleteInsuranceMutationVariables = {
  input: DeleteInsuranceInput
  condition?: ModelInsuranceConditionInput | null
}

export type DeleteInsuranceMutation = {
  deleteInsurance?: {
    __typename: 'Insurance'
    id: string
    patientInsurances?: {
      __typename: 'ModelPatientInsuranceConnection'
      nextToken?: string | null
    } | null
    name?: string | null
    address?: {
      __typename: 'Address'
      street?: string | null
      city?: string | null
      state?: string | null
      zip?: string | null
    } | null
    phone1?: string | null
    phone2?: string | null
    phone3?: string | null
    email?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type CreatePatientInsuranceMutationVariables = {
  input: CreatePatientInsuranceInput
  condition?: ModelPatientInsuranceConditionInput | null
}

export type CreatePatientInsuranceMutation = {
  createPatientInsurance?: {
    __typename: 'PatientInsurance'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientPatientInsurancesId: string
    insurance?: {
      __typename: 'Insurance'
      id: string
      name?: string | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      email?: string | null
      createdAt: string
      updatedAt: string
    } | null
    insurancePatientInsurancesId: string
    cards?: {
      __typename: 'ModelCardConnection'
      nextToken?: string | null
    } | null
    effectiveDate?: string | null
    ssid?: string | null
    group?: string | null
    hmo?: string | null
    copay?: string | null
    amount?: number | null
    relationship?: string | null
    firstName?: string | null
    lastName?: string | null
    address?: {
      __typename: 'Address'
      street?: string | null
      city?: string | null
      state?: string | null
      zip?: string | null
    } | null
    phone?: string | null
    dob?: string | null
    sex?: Sex | null
    createdAt: string
    updatedAt: string
  } | null
}

export type UpdatePatientInsuranceMutationVariables = {
  input: UpdatePatientInsuranceInput
  condition?: ModelPatientInsuranceConditionInput | null
}

export type UpdatePatientInsuranceMutation = {
  updatePatientInsurance?: {
    __typename: 'PatientInsurance'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientPatientInsurancesId: string
    insurance?: {
      __typename: 'Insurance'
      id: string
      name?: string | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      email?: string | null
      createdAt: string
      updatedAt: string
    } | null
    insurancePatientInsurancesId: string
    cards?: {
      __typename: 'ModelCardConnection'
      nextToken?: string | null
    } | null
    effectiveDate?: string | null
    ssid?: string | null
    group?: string | null
    hmo?: string | null
    copay?: string | null
    amount?: number | null
    relationship?: string | null
    firstName?: string | null
    lastName?: string | null
    address?: {
      __typename: 'Address'
      street?: string | null
      city?: string | null
      state?: string | null
      zip?: string | null
    } | null
    phone?: string | null
    dob?: string | null
    sex?: Sex | null
    createdAt: string
    updatedAt: string
  } | null
}

export type DeletePatientInsuranceMutationVariables = {
  input: DeletePatientInsuranceInput
  condition?: ModelPatientInsuranceConditionInput | null
}

export type DeletePatientInsuranceMutation = {
  deletePatientInsurance?: {
    __typename: 'PatientInsurance'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientPatientInsurancesId: string
    insurance?: {
      __typename: 'Insurance'
      id: string
      name?: string | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      email?: string | null
      createdAt: string
      updatedAt: string
    } | null
    insurancePatientInsurancesId: string
    cards?: {
      __typename: 'ModelCardConnection'
      nextToken?: string | null
    } | null
    effectiveDate?: string | null
    ssid?: string | null
    group?: string | null
    hmo?: string | null
    copay?: string | null
    amount?: number | null
    relationship?: string | null
    firstName?: string | null
    lastName?: string | null
    address?: {
      __typename: 'Address'
      street?: string | null
      city?: string | null
      state?: string | null
      zip?: string | null
    } | null
    phone?: string | null
    dob?: string | null
    sex?: Sex | null
    createdAt: string
    updatedAt: string
  } | null
}

export type CreateCardMutationVariables = {
  input: CreateCardInput
  condition?: ModelCardConditionInput | null
}

export type CreateCardMutation = {
  createCard?: {
    __typename: 'Card'
    id: string
    patientInsurance?: {
      __typename: 'PatientInsurance'
      id: string
      patientPatientInsurancesId: string
      insurancePatientInsurancesId: string
      effectiveDate?: string | null
      ssid?: string | null
      group?: string | null
      hmo?: string | null
      copay?: string | null
      amount?: number | null
      relationship?: string | null
      firstName?: string | null
      lastName?: string | null
      phone?: string | null
      dob?: string | null
      sex?: Sex | null
      createdAt: string
      updatedAt: string
    } | null
    patientInsuranceCardsId: string
    insuranceCardBackUrl?: string | null
    insuranceCardFrontUrl?: string | null
    cardType?: CardType | null
    date?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type UpdateCardMutationVariables = {
  input: UpdateCardInput
  condition?: ModelCardConditionInput | null
}

export type UpdateCardMutation = {
  updateCard?: {
    __typename: 'Card'
    id: string
    patientInsurance?: {
      __typename: 'PatientInsurance'
      id: string
      patientPatientInsurancesId: string
      insurancePatientInsurancesId: string
      effectiveDate?: string | null
      ssid?: string | null
      group?: string | null
      hmo?: string | null
      copay?: string | null
      amount?: number | null
      relationship?: string | null
      firstName?: string | null
      lastName?: string | null
      phone?: string | null
      dob?: string | null
      sex?: Sex | null
      createdAt: string
      updatedAt: string
    } | null
    patientInsuranceCardsId: string
    insuranceCardBackUrl?: string | null
    insuranceCardFrontUrl?: string | null
    cardType?: CardType | null
    date?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type DeleteCardMutationVariables = {
  input: DeleteCardInput
  condition?: ModelCardConditionInput | null
}

export type DeleteCardMutation = {
  deleteCard?: {
    __typename: 'Card'
    id: string
    patientInsurance?: {
      __typename: 'PatientInsurance'
      id: string
      patientPatientInsurancesId: string
      insurancePatientInsurancesId: string
      effectiveDate?: string | null
      ssid?: string | null
      group?: string | null
      hmo?: string | null
      copay?: string | null
      amount?: number | null
      relationship?: string | null
      firstName?: string | null
      lastName?: string | null
      phone?: string | null
      dob?: string | null
      sex?: Sex | null
      createdAt: string
      updatedAt: string
    } | null
    patientInsuranceCardsId: string
    insuranceCardBackUrl?: string | null
    insuranceCardFrontUrl?: string | null
    cardType?: CardType | null
    date?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type CreateContactMutationVariables = {
  input: CreateContactInput
  condition?: ModelContactConditionInput | null
}

export type CreateContactMutation = {
  createContact?:  {
    __typename: "Contact",
    id: string,
    patientContactsId: string,
    contactType?: ContactType | null,
    firstName?: string | null,
    middleName?: string | null,
    lastName?: string | null,
    address?:  {
      __typename: "Address",
      street?: string | null,
      city?: string | null,
      state?: string | null,
      zip?: string | null,
    } | null,
    phoneType1?: PhoneType | null,
    phoneType2?: PhoneType | null,
    phoneType3?: PhoneType | null,
    phone1?: string | null,
    phone2?: string | null,
    phone3?: string | null,
    isPreferred1?: boolean | null,
    isPreferred2?: boolean | null,
    isPreferred3?: boolean | null,
    ok1?: boolean | null,
    ok2?: boolean | null,
    ok3?: boolean | null,
    isPreferred?: boolean | null,
    email?: string | null,
    flags?: Array< FlagType | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateContactMutationVariables = {
  input: UpdateContactInput
  condition?: ModelContactConditionInput | null
}

export type UpdateContactMutation = {
  updateContact?:  {
    __typename: "Contact",
    id: string,
    patientContactsId: string,
    contactType?: ContactType | null,
    firstName?: string | null,
    middleName?: string | null,
    lastName?: string | null,
    address?:  {
      __typename: "Address",
      street?: string | null,
      city?: string | null,
      state?: string | null,
      zip?: string | null,
    } | null,
    phoneType1?: PhoneType | null,
    phoneType2?: PhoneType | null,
    phoneType3?: PhoneType | null,
    phone1?: string | null,
    phone2?: string | null,
    phone3?: string | null,
    isPreferred1?: boolean | null,
    isPreferred2?: boolean | null,
    isPreferred3?: boolean | null,
    ok1?: boolean | null,
    ok2?: boolean | null,
    ok3?: boolean | null,
    isPreferred?: boolean | null,
    email?: string | null,
    flags?: Array< FlagType | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteContactMutationVariables = {
  input: DeleteContactInput
  condition?: ModelContactConditionInput | null
}

export type DeleteContactMutation = {
  deleteContact?:  {
    __typename: "Contact",
    id: string,
    patientContactsId: string,
    contactType?: ContactType | null,
    firstName?: string | null,
    middleName?: string | null,
    lastName?: string | null,
    address?:  {
      __typename: "Address",
      street?: string | null,
      city?: string | null,
      state?: string | null,
      zip?: string | null,
    } | null,
    phoneType1?: PhoneType | null,
    phoneType2?: PhoneType | null,
    phoneType3?: PhoneType | null,
    phone1?: string | null,
    phone2?: string | null,
    phone3?: string | null,
    isPreferred1?: boolean | null,
    isPreferred2?: boolean | null,
    isPreferred3?: boolean | null,
    ok1?: boolean | null,
    ok2?: boolean | null,
    ok3?: boolean | null,
    isPreferred?: boolean | null,
    email?: string | null,
    flags?: Array< FlagType | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProviderMutationVariables = {
  input: CreateProviderInput
  condition?: ModelProviderConditionInput | null
}

export type CreateProviderMutation = {
  createProvider?: {
    __typename: 'Provider'
    id: string
    patientProviders?: {
      __typename: 'ModelPatientProviderConnection'
      nextToken?: string | null
    } | null
    appointments?: {
      __typename: 'ModelAppointmentConnection'
      nextToken?: string | null
    } | null
    problems?: {
      __typename: 'ModelProblemConnection'
      nextToken?: string | null
    } | null
    firstName?: string | null
    lastName?: string | null
    phone1?: string | null
    phone2?: string | null
    phone3?: string | null
    address?: {
      __typename: 'Address'
      street?: string | null
      city?: string | null
      state?: string | null
      zip?: string | null
    } | null
    createdAt: string
    updatedAt: string
  } | null
}

export type UpdateProviderMutationVariables = {
  input: UpdateProviderInput
  condition?: ModelProviderConditionInput | null
}

export type UpdateProviderMutation = {
  updateProvider?: {
    __typename: 'Provider'
    id: string
    patientProviders?: {
      __typename: 'ModelPatientProviderConnection'
      nextToken?: string | null
    } | null
    appointments?: {
      __typename: 'ModelAppointmentConnection'
      nextToken?: string | null
    } | null
    problems?: {
      __typename: 'ModelProblemConnection'
      nextToken?: string | null
    } | null
    firstName?: string | null
    lastName?: string | null
    phone1?: string | null
    phone2?: string | null
    phone3?: string | null
    address?: {
      __typename: 'Address'
      street?: string | null
      city?: string | null
      state?: string | null
      zip?: string | null
    } | null
    createdAt: string
    updatedAt: string
  } | null
}

export type DeleteProviderMutationVariables = {
  input: DeleteProviderInput
  condition?: ModelProviderConditionInput | null
}

export type DeleteProviderMutation = {
  deleteProvider?: {
    __typename: 'Provider'
    id: string
    patientProviders?: {
      __typename: 'ModelPatientProviderConnection'
      nextToken?: string | null
    } | null
    appointments?: {
      __typename: 'ModelAppointmentConnection'
      nextToken?: string | null
    } | null
    problems?: {
      __typename: 'ModelProblemConnection'
      nextToken?: string | null
    } | null
    firstName?: string | null
    lastName?: string | null
    phone1?: string | null
    phone2?: string | null
    phone3?: string | null
    address?: {
      __typename: 'Address'
      street?: string | null
      city?: string | null
      state?: string | null
      zip?: string | null
    } | null
    createdAt: string
    updatedAt: string
  } | null
}

export type CreatePatientProviderMutationVariables = {
  input: CreatePatientProviderInput
  condition?: ModelPatientProviderConditionInput | null
}

export type CreatePatientProviderMutation = {
  createPatientProvider?: {
    __typename: 'PatientProvider'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientPatientProvidersId: string
    provider?: {
      __typename: 'Provider'
      id: string
      firstName?: string | null
      lastName?: string | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      createdAt: string
      updatedAt: string
    } | null
    providerPatientProvidersId: string
    isPrimary?: boolean | null
    createdAt: string
    updatedAt: string
  } | null
}

export type UpdatePatientProviderMutationVariables = {
  input: UpdatePatientProviderInput
  condition?: ModelPatientProviderConditionInput | null
}

export type UpdatePatientProviderMutation = {
  updatePatientProvider?: {
    __typename: 'PatientProvider'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientPatientProvidersId: string
    provider?: {
      __typename: 'Provider'
      id: string
      firstName?: string | null
      lastName?: string | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      createdAt: string
      updatedAt: string
    } | null
    providerPatientProvidersId: string
    isPrimary?: boolean | null
    createdAt: string
    updatedAt: string
  } | null
}

export type DeletePatientProviderMutationVariables = {
  input: DeletePatientProviderInput
  condition?: ModelPatientProviderConditionInput | null
}

export type DeletePatientProviderMutation = {
  deletePatientProvider?: {
    __typename: 'PatientProvider'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientPatientProvidersId: string
    provider?: {
      __typename: 'Provider'
      id: string
      firstName?: string | null
      lastName?: string | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      createdAt: string
      updatedAt: string
    } | null
    providerPatientProvidersId: string
    isPrimary?: boolean | null
    createdAt: string
    updatedAt: string
  } | null
}

export type CreateEmployerMutationVariables = {
  input: CreateEmployerInput
  condition?: ModelEmployerConditionInput | null
}

export type CreateEmployerMutation = {
  createEmployer?: {
    __typename: 'Employer'
    id: string
    patientEmployers?: {
      __typename: 'ModelPatientEmployerConnection'
      nextToken?: string | null
    } | null
    name?: string | null
    phone1?: string | null
    phone2?: string | null
    phone3?: string | null
    address?: {
      __typename: 'Address'
      street?: string | null
      city?: string | null
      state?: string | null
      zip?: string | null
    } | null
    email?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type UpdateEmployerMutationVariables = {
  input: UpdateEmployerInput
  condition?: ModelEmployerConditionInput | null
}

export type UpdateEmployerMutation = {
  updateEmployer?: {
    __typename: 'Employer'
    id: string
    patientEmployers?: {
      __typename: 'ModelPatientEmployerConnection'
      nextToken?: string | null
    } | null
    name?: string | null
    phone1?: string | null
    phone2?: string | null
    phone3?: string | null
    address?: {
      __typename: 'Address'
      street?: string | null
      city?: string | null
      state?: string | null
      zip?: string | null
    } | null
    email?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type DeleteEmployerMutationVariables = {
  input: DeleteEmployerInput
  condition?: ModelEmployerConditionInput | null
}

export type DeleteEmployerMutation = {
  deleteEmployer?: {
    __typename: 'Employer'
    id: string
    patientEmployers?: {
      __typename: 'ModelPatientEmployerConnection'
      nextToken?: string | null
    } | null
    name?: string | null
    phone1?: string | null
    phone2?: string | null
    phone3?: string | null
    address?: {
      __typename: 'Address'
      street?: string | null
      city?: string | null
      state?: string | null
      zip?: string | null
    } | null
    email?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type CreatePatientEmployerMutationVariables = {
  input: CreatePatientEmployerInput
  condition?: ModelPatientEmployerConditionInput | null
}

export type CreatePatientEmployerMutation = {
  createPatientEmployer?: {
    __typename: 'PatientEmployer'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientPatientEmployersId: string
    employer?: {
      __typename: 'Employer'
      id: string
      name?: string | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      email?: string | null
      createdAt: string
      updatedAt: string
    } | null
    employerPatientEmployersId: string
    occupation?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type UpdatePatientEmployerMutationVariables = {
  input: UpdatePatientEmployerInput
  condition?: ModelPatientEmployerConditionInput | null
}

export type UpdatePatientEmployerMutation = {
  updatePatientEmployer?: {
    __typename: 'PatientEmployer'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientPatientEmployersId: string
    employer?: {
      __typename: 'Employer'
      id: string
      name?: string | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      email?: string | null
      createdAt: string
      updatedAt: string
    } | null
    employerPatientEmployersId: string
    occupation?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type DeletePatientEmployerMutationVariables = {
  input: DeletePatientEmployerInput
  condition?: ModelPatientEmployerConditionInput | null
}

export type DeletePatientEmployerMutation = {
  deletePatientEmployer?: {
    __typename: 'PatientEmployer'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientPatientEmployersId: string
    employer?: {
      __typename: 'Employer'
      id: string
      name?: string | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      email?: string | null
      createdAt: string
      updatedAt: string
    } | null
    employerPatientEmployersId: string
    occupation?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type CreateAppointmentTypeMutationVariables = {
  input: CreateAppointmentTypeInput
  condition?: ModelAppointmentTypeConditionInput | null
}

export type CreateAppointmentTypeMutation = {
  createAppointmentType?: {
    __typename: 'AppointmentType'
    id: string
    appointment?: {
      __typename: 'ModelAppointmentConnection'
      nextToken?: string | null
    } | null
    code?: string | null
    description?: string | null
    comment?: string | null
    slot?: number | null
    limit?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type UpdateAppointmentTypeMutationVariables = {
  input: UpdateAppointmentTypeInput
  condition?: ModelAppointmentTypeConditionInput | null
}

export type UpdateAppointmentTypeMutation = {
  updateAppointmentType?: {
    __typename: 'AppointmentType'
    id: string
    appointment?: {
      __typename: 'ModelAppointmentConnection'
      nextToken?: string | null
    } | null
    code?: string | null
    description?: string | null
    comment?: string | null
    slot?: number | null
    limit?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type DeleteAppointmentTypeMutationVariables = {
  input: DeleteAppointmentTypeInput
  condition?: ModelAppointmentTypeConditionInput | null
}

export type DeleteAppointmentTypeMutation = {
  deleteAppointmentType?: {
    __typename: 'AppointmentType'
    id: string
    appointment?: {
      __typename: 'ModelAppointmentConnection'
      nextToken?: string | null
    } | null
    code?: string | null
    description?: string | null
    comment?: string | null
    slot?: number | null
    limit?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type CreateAppointmentMutationVariables = {
  input: CreateAppointmentInput
  condition?: ModelAppointmentConditionInput | null
}

export type CreateAppointmentMutation = {
  createAppointment?: {
    __typename: 'Appointment'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientAppointmentsId: string
    provider?: {
      __typename: 'Provider'
      id: string
      firstName?: string | null
      lastName?: string | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      createdAt: string
      updatedAt: string
    } | null
    providerAppointmentsId: string
    appointmentType?: {
      __typename: 'AppointmentType'
      id: string
      code?: string | null
      description?: string | null
      comment?: string | null
      slot?: number | null
      limit?: string | null
      createdAt: string
      updatedAt: string
    } | null
    appointmentTypeAppointmentsId: string
    date?: string | null
    time?: string | null
    length?: number | null
    comment?: string | null
    checkin?: string | null
    checkout?: string | null
    isMissed?: boolean | null
    status?: AppointmentStatus | null
    createdAt: string
    updatedAt: string
  } | null
}

export type UpdateAppointmentMutationVariables = {
  input: UpdateAppointmentInput
  condition?: ModelAppointmentConditionInput | null
}

export type UpdateAppointmentMutation = {
  updateAppointment?: {
    __typename: 'Appointment'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientAppointmentsId: string
    provider?: {
      __typename: 'Provider'
      id: string
      firstName?: string | null
      lastName?: string | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      createdAt: string
      updatedAt: string
    } | null
    providerAppointmentsId: string
    appointmentType?: {
      __typename: 'AppointmentType'
      id: string
      code?: string | null
      description?: string | null
      comment?: string | null
      slot?: number | null
      limit?: string | null
      createdAt: string
      updatedAt: string
    } | null
    appointmentTypeAppointmentsId: string
    date?: string | null
    time?: string | null
    length?: number | null
    comment?: string | null
    checkin?: string | null
    checkout?: string | null
    isMissed?: boolean | null
    status?: AppointmentStatus | null
    createdAt: string
    updatedAt: string
  } | null
}

export type DeleteAppointmentMutationVariables = {
  input: DeleteAppointmentInput
  condition?: ModelAppointmentConditionInput | null
}

export type DeleteAppointmentMutation = {
  deleteAppointment?: {
    __typename: 'Appointment'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientAppointmentsId: string
    provider?: {
      __typename: 'Provider'
      id: string
      firstName?: string | null
      lastName?: string | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      createdAt: string
      updatedAt: string
    } | null
    providerAppointmentsId: string
    appointmentType?: {
      __typename: 'AppointmentType'
      id: string
      code?: string | null
      description?: string | null
      comment?: string | null
      slot?: number | null
      limit?: string | null
      createdAt: string
      updatedAt: string
    } | null
    appointmentTypeAppointmentsId: string
    date?: string | null
    time?: string | null
    length?: number | null
    comment?: string | null
    checkin?: string | null
    checkout?: string | null
    isMissed?: boolean | null
    status?: AppointmentStatus | null
    createdAt: string
    updatedAt: string
  } | null
}

export type CreateFormMutationVariables = {
  input: CreateFormInput
  condition?: ModelFormConditionInput | null
}

export type CreateFormMutation = {
  createForm?: {
    __typename: 'Form'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientFormsId: string
    name?: string | null
    date?: string | null
    status?: FormStatus | null
    url?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type UpdateFormMutationVariables = {
  input: UpdateFormInput
  condition?: ModelFormConditionInput | null
}

export type UpdateFormMutation = {
  updateForm?: {
    __typename: 'Form'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientFormsId: string
    name?: string | null
    date?: string | null
    status?: FormStatus | null
    url?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type DeleteFormMutationVariables = {
  input: DeleteFormInput
  condition?: ModelFormConditionInput | null
}

export type DeleteFormMutation = {
  deleteForm?: {
    __typename: 'Form'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientFormsId: string
    name?: string | null
    date?: string | null
    status?: FormStatus | null
    url?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type CreateAllergyMutationVariables = {
  input: CreateAllergyInput
  condition?: ModelAllergyConditionInput | null
}

export type CreateAllergyMutation = {
  createAllergy?: {
    __typename: 'Allergy'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientAllergiesId: string
    allergen?: string | null
    reaction?: string | null
    comment?: string | null
    date?: string | null
    severity?: AllergySeverity | null
    createdAt: string
    updatedAt: string
  } | null
}

export type UpdateAllergyMutationVariables = {
  input: UpdateAllergyInput
  condition?: ModelAllergyConditionInput | null
}

export type UpdateAllergyMutation = {
  updateAllergy?: {
    __typename: 'Allergy'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientAllergiesId: string
    allergen?: string | null
    reaction?: string | null
    comment?: string | null
    date?: string | null
    severity?: AllergySeverity | null
    createdAt: string
    updatedAt: string
  } | null
}

export type DeleteAllergyMutationVariables = {
  input: DeleteAllergyInput
  condition?: ModelAllergyConditionInput | null
}

export type DeleteAllergyMutation = {
  deleteAllergy?: {
    __typename: 'Allergy'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientAllergiesId: string
    allergen?: string | null
    reaction?: string | null
    comment?: string | null
    date?: string | null
    severity?: AllergySeverity | null
    createdAt: string
    updatedAt: string
  } | null
}

export type CreateVitalMutationVariables = {
  input: CreateVitalInput
  condition?: ModelVitalConditionInput | null
}

export type CreateVitalMutation = {
  createVital?: {
    __typename: 'Vital'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientVitalsId: string
    date?: string | null
    height?: number | null
    weight?: number | null
    bmi?: number | null
    bpd?: number | null
    bps?: number | null
    pulse?: number | null
    temp?: number | null
    createdAt: string
    updatedAt: string
  } | null
}

export type UpdateVitalMutationVariables = {
  input: UpdateVitalInput
  condition?: ModelVitalConditionInput | null
}

export type UpdateVitalMutation = {
  updateVital?: {
    __typename: 'Vital'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientVitalsId: string
    date?: string | null
    height?: number | null
    weight?: number | null
    bmi?: number | null
    bpd?: number | null
    bps?: number | null
    pulse?: number | null
    temp?: number | null
    createdAt: string
    updatedAt: string
  } | null
}

export type DeleteVitalMutationVariables = {
  input: DeleteVitalInput
  condition?: ModelVitalConditionInput | null
}

export type DeleteVitalMutation = {
  deleteVital?: {
    __typename: 'Vital'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientVitalsId: string
    date?: string | null
    height?: number | null
    weight?: number | null
    bmi?: number | null
    bpd?: number | null
    bps?: number | null
    pulse?: number | null
    temp?: number | null
    createdAt: string
    updatedAt: string
  } | null
}

export type CreateEducationMutationVariables = {
  input: CreateEducationInput
  condition?: ModelEducationConditionInput | null
}

export type CreateEducationMutation = {
  createEducation?: {
    __typename: 'Education'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientEducationsId: string
    date?: string | null
    description?: string | null
    url?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type UpdateEducationMutationVariables = {
  input: UpdateEducationInput
  condition?: ModelEducationConditionInput | null
}

export type UpdateEducationMutation = {
  updateEducation?: {
    __typename: 'Education'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientEducationsId: string
    date?: string | null
    description?: string | null
    url?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type DeleteEducationMutationVariables = {
  input: DeleteEducationInput
  condition?: ModelEducationConditionInput | null
}

export type DeleteEducationMutation = {
  deleteEducation?: {
    __typename: 'Education'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientEducationsId: string
    date?: string | null
    description?: string | null
    url?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type CreateProblemMutationVariables = {
  input: CreateProblemInput
  condition?: ModelProblemConditionInput | null
}

export type CreateProblemMutation = {
  createProblem?: {
    __typename: 'Problem'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientProblemsId: string
    provider?: {
      __typename: 'Provider'
      id: string
      firstName?: string | null
      lastName?: string | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      createdAt: string
      updatedAt: string
    } | null
    providerProblemsId: string
    date?: string | null
    updatedDate?: string | null
    description?: string | null
    code?: string | null
    severity?: ProblemSeverity | null
    status?: ProblemStatus | null
    createdAt: string
    updatedAt: string
  } | null
}

export type UpdateProblemMutationVariables = {
  input: UpdateProblemInput
  condition?: ModelProblemConditionInput | null
}

export type UpdateProblemMutation = {
  updateProblem?: {
    __typename: 'Problem'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientProblemsId: string
    provider?: {
      __typename: 'Provider'
      id: string
      firstName?: string | null
      lastName?: string | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      createdAt: string
      updatedAt: string
    } | null
    providerProblemsId: string
    date?: string | null
    updatedDate?: string | null
    description?: string | null
    code?: string | null
    severity?: ProblemSeverity | null
    status?: ProblemStatus | null
    createdAt: string
    updatedAt: string
  } | null
}

export type DeleteProblemMutationVariables = {
  input: DeleteProblemInput
  condition?: ModelProblemConditionInput | null
}

export type DeleteProblemMutation = {
  deleteProblem?: {
    __typename: 'Problem'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientProblemsId: string
    provider?: {
      __typename: 'Provider'
      id: string
      firstName?: string | null
      lastName?: string | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      createdAt: string
      updatedAt: string
    } | null
    providerProblemsId: string
    date?: string | null
    updatedDate?: string | null
    description?: string | null
    code?: string | null
    severity?: ProblemSeverity | null
    status?: ProblemStatus | null
    createdAt: string
    updatedAt: string
  } | null
}

export type CreateDocumentMutationVariables = {
  input: CreateDocumentInput
  condition?: ModelDocumentConditionInput | null
}

export type CreateDocumentMutation = {
  createDocument?: {
    __typename: 'Document'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientDocumentsId: string
    date?: string | null
    subject?: string | null
    name?: string | null
    url?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type UpdateDocumentMutationVariables = {
  input: UpdateDocumentInput
  condition?: ModelDocumentConditionInput | null
}

export type UpdateDocumentMutation = {
  updateDocument?: {
    __typename: 'Document'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientDocumentsId: string
    date?: string | null
    subject?: string | null
    name?: string | null
    url?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type DeleteDocumentMutationVariables = {
  input: DeleteDocumentInput
  condition?: ModelDocumentConditionInput | null
}

export type DeleteDocumentMutation = {
  deleteDocument?: {
    __typename: 'Document'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientDocumentsId: string
    date?: string | null
    subject?: string | null
    name?: string | null
    url?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type GetLocationQueryVariables = {
  code?: string | null
}

export type GetLocationQuery = {
  getLocation?: {
    __typename: 'Location'
    code: string
    name?: string | null
    address?: {
      __typename: 'Address'
      street?: string | null
      city?: string | null
      state?: string | null
      zip?: string | null
    } | null
    phone1?: string | null
    phone2?: string | null
    phone3?: string | null
    email?: string | null
    license1?: string | null
    license2?: string | null
    license3?: string | null
    license4?: string | null
  } | null
}

export type ListLocationsQueryVariables = {
  show?: string | null
  city?: string | null
}

export type ListLocationsQuery = {
  listLocations?: {
    __typename: 'Locations'
    count?: number | null
    records?: Array<{
      __typename: 'Location'
      code: string
      name?: string | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      email?: string | null
      license1?: string | null
      license2?: string | null
      license3?: string | null
      license4?: string | null
    } | null> | null
  } | null
}
export type ListLocationsDBQueryVariables = {
  show?: string | null,
  city?: string | null,
};

export type ListLocationsDBQuery = {
  listLocationsDB?:  {
    __typename: "Locations",
    count?: number | null,
    records?:  Array< {
      __typename: "Location",
      code: string,
      name?: string | null,
      city?: string | null,
      state?: string | null,
      zip?: string | null,
      phone1?: string | null,
      phone2?: string | null,
      phone3?: string | null,
      email?: string | null,
      license1?: string | null,
      license2?: string | null,
      license3?: string | null,
      license4?: string | null,
    } | null > | null,
  } | null,
};

export type GetProviderSlotsQueryVariables = {
  input?: GetProviderSlotsInput | null,
};

export type GetProviderSlotsQuery = {
  getProviderSlots?:  {
    __typename: "ProviderSlots",
    count?: number | null,
    providerId?: string | null,
    records?:  Array< {
      __typename: "ProviderSlot",
      id: string,
      date?: string | null,
      time?: string | null,
      length?: number | null,
      isOccupied?: boolean | null,
    } | null > | null,
  } | null,
};

export type GetAccessLogsQueryVariables = {
  userId?: string | null,
};

export type GetAccessLogsQuery = {
  getAccessLogs?:  {
    __typename: "AccessLogs",
    count?: number | null,
    userId?: string | null,
    records?:  Array< {
      __typename: "AccessLog",
      id: string,
      date?: string | null,
      time?: string | null,
      person?: string | null,
      type?: string | null,
      area?: string | null,
      action?: string | null,
    } | null > | null,
  } | null,
};

export type GetPatientQueryVariables = {
  id: string
}

export type GetPatientQuery = {
  getPatient?: {
    __typename: 'Patient'
    id: string
    phoneOther?: {
      __typename: 'PhoneOther'
      id: string
      patientPhoneOtherId?: string | null
      phoneType1?: PhoneType | null
      phoneType2?: PhoneType | null
      phoneType3?: PhoneType | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      isPreferred1?: boolean | null
      isPreferred2?: boolean | null
      isPreferred3?: boolean | null
      ok1?: boolean | null
      ok2?: boolean | null
      ok3?: boolean | null
      heardFrom?: HeardFrom | null
      specify?: string | null
      genderPronoun?: GenderPronoun | null
      genderIdentity?: GenderIdentity | null
      sexualOrientation?: SexualOrientation | null
      maritalStatus?: MaritalStatus | null
      employmentStatus?: EmploymentStatus | null
      preferredLanguage?: PreferredLanguage | null
      race?: Race | null
      ethnicity?: Ethnicity | null
      annualIncome?: number | null
      numberInHousehold?: number | null
      communicateElectronically?: boolean | null
      createdAt: string
      updatedAt: string
      phoneOtherPatientId?: string | null
    } | null
    communicationPreference?: {
      __typename: 'CommunicationPreference'
      id: string
      patientCommunicationPreferenceId?: string | null
      appointmentInformation?: Array<CommunicationPreferenceType1 | null> | null
      healthInformation?: Array<CommunicationPreferenceType1 | null> | null
      patientSurvey?: Array<CommunicationPreferenceType2 | null> | null
      visitSummary?: Array<CommunicationPreferenceType2 | null> | null
      receivePaperlessStatement?: boolean | null
      paperlessStatement?: Array<CommunicationPreferenceType2 | null> | null
      staffTextMessaging?: boolean | null
      checkinProcessTextMessaging?: boolean | null
      agreed?: boolean | null
      createdAt: string
      updatedAt: string
      communicationPreferencePatientId?: string | null
    } | null
    location?: {
      __typename: 'Location'
      code: string
      name?: string | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      email?: string | null
      license1?: string | null
      license2?: string | null
      license3?: string | null
      license4?: string | null
    } | null
    patientInsurances?: {
      __typename: 'ModelPatientInsuranceConnection'
      nextToken?: string | null
    } | null
    contacts?: {
      __typename: 'ModelContactConnection'
      nextToken?: string | null
    } | null
    patientProviders?: {
      __typename: 'ModelPatientProviderConnection'
      nextToken?: string | null
    } | null
    patientEmployers?: {
      __typename: 'ModelPatientEmployerConnection'
      nextToken?: string | null
    } | null
    appointments?: {
      __typename: 'ModelAppointmentConnection'
      nextToken?: string | null
    } | null
    forms?: {
      __typename: 'ModelFormConnection'
      nextToken?: string | null
    } | null
    allergies?: {
      __typename: 'ModelAllergyConnection'
      nextToken?: string | null
    } | null
    vitals?: {
      __typename: 'ModelVitalConnection'
      nextToken?: string | null
    } | null
    educations?: {
      __typename: 'ModelEducationConnection'
      nextToken?: string | null
    } | null
    problems?: {
      __typename: 'ModelProblemConnection'
      nextToken?: string | null
    } | null
    documents?: {
      __typename: 'ModelDocumentConnection'
      nextToken?: string | null
    } | null
    title?: Title | null
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    dob?: string | null
    sex?: Sex | null
    ssn?: string | null
    email?: string | null
    mailingAddress?: {
      __typename: 'Address'
      street?: string | null
      city?: string | null
      state?: string | null
      zip?: string | null
    } | null
    physicalAddress?: {
      __typename: 'Address'
      street?: string | null
      city?: string | null
      state?: string | null
      zip?: string | null
    } | null
    sameAsMailing?: boolean | null
    distance?: number | null
    profilePicture?: string | null
    createdAt: string
    updatedAt: string
    patientPhoneOtherId?: string | null
    patientCommunicationPreferenceId?: string | null
  } | null
}

export type ListPatientsQueryVariables = {
  filter?: ModelPatientFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListPatientsQuery = {
  listPatients?: {
    __typename: 'ModelPatientConnection'
    items: Array<{
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null>
    nextToken?: string | null
  } | null
}

export type GetUserQueryVariables = {
  id: string
}

export type GetUserQuery = {
  getUser?: {
    __typename: 'User'
    id: string
    userPatientId?: string | null
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    userSettings?: {
      __typename: 'ModelUserSettingConnection'
      nextToken?: string | null
    } | null
    email: string
    role?: UserRole | null
    createdAt: string
    updatedAt: string
  } | null
}

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListUsersQuery = {
  listUsers?: {
    __typename: 'ModelUserConnection'
    items: Array<{
      __typename: 'User'
      id: string
      userPatientId?: string | null
      email: string
      role?: UserRole | null
      createdAt: string
      updatedAt: string
    } | null>
    nextToken?: string | null
  } | null
}

export type GetUserSettingQueryVariables = {
  id: string
}

export type GetUserSettingQuery = {
  getUserSetting?: {
    __typename: 'UserSetting'
    id: string
    user?: {
      __typename: 'User'
      id: string
      userPatientId?: string | null
      email: string
      role?: UserRole | null
      createdAt: string
      updatedAt: string
    } | null
    userUserSettingsId: string
    key?: string | null
    value?: string | null
    userWorkflows?: {
      __typename: 'ModelUserWorkflowConnection'
      nextToken?: string | null
    } | null
    createdAt: string
    updatedAt: string
  } | null
}

export type ListUserSettingsQueryVariables = {
  filter?: ModelUserSettingFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListUserSettingsQuery = {
  listUserSettings?: {
    __typename: 'ModelUserSettingConnection'
    items: Array<{
      __typename: 'UserSetting'
      id: string
      userUserSettingsId: string
      key?: string | null
      value?: string | null
      createdAt: string
      updatedAt: string
    } | null>
    nextToken?: string | null
  } | null
}

export type GetUserWorkflowQueryVariables = {
  id: string
}

export type GetUserWorkflowQuery = {
  getUserWorkflow?: {
    __typename: 'UserWorkflow'
    id: string
    userSetting?: {
      __typename: 'UserSetting'
      id: string
      userUserSettingsId: string
      key?: string | null
      value?: string | null
      createdAt: string
      updatedAt: string
    } | null
    userSettingUserWorkflowsId: string
    type?: WorkflowType | null
    status?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type ListUserWorkflowsQueryVariables = {
  filter?: ModelUserWorkflowFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListUserWorkflowsQuery = {
  listUserWorkflows?: {
    __typename: 'ModelUserWorkflowConnection'
    items: Array<{
      __typename: 'UserWorkflow'
      id: string
      userSettingUserWorkflowsId: string
      type?: WorkflowType | null
      status?: string | null
      createdAt: string
      updatedAt: string
    } | null>
    nextToken?: string | null
  } | null
}

export type GetPhoneOtherQueryVariables = {
  id: string
}

export type GetPhoneOtherQuery = {
  getPhoneOther?: {
    __typename: 'PhoneOther'
    id: string
    patientPhoneOtherId?: string | null
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    phoneType1?: PhoneType | null
    phoneType2?: PhoneType | null
    phoneType3?: PhoneType | null
    phone1?: string | null
    phone2?: string | null
    phone3?: string | null
    isPreferred1?: boolean | null
    isPreferred2?: boolean | null
    isPreferred3?: boolean | null
    ok1?: boolean | null
    ok2?: boolean | null
    ok3?: boolean | null
    heardFrom?: HeardFrom | null
    specify?: string | null
    genderPronoun?: GenderPronoun | null
    genderIdentity?: GenderIdentity | null
    sexualOrientation?: SexualOrientation | null
    maritalStatus?: MaritalStatus | null
    employmentStatus?: EmploymentStatus | null
    preferredLanguage?: PreferredLanguage | null
    race?: Race | null
    ethnicity?: Ethnicity | null
    annualIncome?: number | null
    numberInHousehold?: number | null
    communicateElectronically?: boolean | null
    createdAt: string
    updatedAt: string
    phoneOtherPatientId?: string | null
  } | null
}

export type ListPhoneOthersQueryVariables = {
  filter?: ModelPhoneOtherFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListPhoneOthersQuery = {
  listPhoneOthers?: {
    __typename: 'ModelPhoneOtherConnection'
    items: Array<{
      __typename: 'PhoneOther'
      id: string
      patientPhoneOtherId?: string | null
      phoneType1?: PhoneType | null
      phoneType2?: PhoneType | null
      phoneType3?: PhoneType | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      isPreferred1?: boolean | null
      isPreferred2?: boolean | null
      isPreferred3?: boolean | null
      ok1?: boolean | null
      ok2?: boolean | null
      ok3?: boolean | null
      heardFrom?: HeardFrom | null
      specify?: string | null
      genderPronoun?: GenderPronoun | null
      genderIdentity?: GenderIdentity | null
      sexualOrientation?: SexualOrientation | null
      maritalStatus?: MaritalStatus | null
      employmentStatus?: EmploymentStatus | null
      preferredLanguage?: PreferredLanguage | null
      race?: Race | null
      ethnicity?: Ethnicity | null
      annualIncome?: number | null
      numberInHousehold?: number | null
      communicateElectronically?: boolean | null
      createdAt: string
      updatedAt: string
      phoneOtherPatientId?: string | null
    } | null>
    nextToken?: string | null
  } | null
}

export type GetCommunicationPreferenceQueryVariables = {
  id: string
}

export type GetCommunicationPreferenceQuery = {
  getCommunicationPreference?: {
    __typename: 'CommunicationPreference'
    id: string
    patientCommunicationPreferenceId?: string | null
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    appointmentInformation?: Array<CommunicationPreferenceType1 | null> | null
    healthInformation?: Array<CommunicationPreferenceType1 | null> | null
    patientSurvey?: Array<CommunicationPreferenceType2 | null> | null
    visitSummary?: Array<CommunicationPreferenceType2 | null> | null
    receivePaperlessStatement?: boolean | null
    paperlessStatement?: Array<CommunicationPreferenceType2 | null> | null
    staffTextMessaging?: boolean | null
    checkinProcessTextMessaging?: boolean | null
    agreed?: boolean | null
    createdAt: string
    updatedAt: string
    communicationPreferencePatientId?: string | null
  } | null
}

export type ListCommunicationPreferencesQueryVariables = {
  filter?: ModelCommunicationPreferenceFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListCommunicationPreferencesQuery = {
  listCommunicationPreferences?: {
    __typename: 'ModelCommunicationPreferenceConnection'
    items: Array<{
      __typename: 'CommunicationPreference'
      id: string
      patientCommunicationPreferenceId?: string | null
      appointmentInformation?: Array<CommunicationPreferenceType1 | null> | null
      healthInformation?: Array<CommunicationPreferenceType1 | null> | null
      patientSurvey?: Array<CommunicationPreferenceType2 | null> | null
      visitSummary?: Array<CommunicationPreferenceType2 | null> | null
      receivePaperlessStatement?: boolean | null
      paperlessStatement?: Array<CommunicationPreferenceType2 | null> | null
      staffTextMessaging?: boolean | null
      checkinProcessTextMessaging?: boolean | null
      agreed?: boolean | null
      createdAt: string
      updatedAt: string
      communicationPreferencePatientId?: string | null
    } | null>
    nextToken?: string | null
  } | null
}

export type GetInsuranceQueryVariables = {
  id: string
}

export type GetInsuranceQuery = {
  getInsurance?: {
    __typename: 'Insurance'
    id: string
    patientInsurances?: {
      __typename: 'ModelPatientInsuranceConnection'
      nextToken?: string | null
    } | null
    name?: string | null
    address?: {
      __typename: 'Address'
      street?: string | null
      city?: string | null
      state?: string | null
      zip?: string | null
    } | null
    phone1?: string | null
    phone2?: string | null
    phone3?: string | null
    email?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type ListInsurancesQueryVariables = {
  filter?: ModelInsuranceFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListInsurancesQuery = {
  listInsurances?: {
    __typename: 'ModelInsuranceConnection'
    items: Array<{
      __typename: 'Insurance'
      id: string
      name?: string | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      email?: string | null
      createdAt: string
      updatedAt: string
    } | null>
    nextToken?: string | null
  } | null
}

export type GetPatientInsuranceQueryVariables = {
  id: string
}

export type GetPatientInsuranceQuery = {
  getPatientInsurance?: {
    __typename: 'PatientInsurance'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientPatientInsurancesId: string
    insurance?: {
      __typename: 'Insurance'
      id: string
      name?: string | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      email?: string | null
      createdAt: string
      updatedAt: string
    } | null
    insurancePatientInsurancesId: string
    cards?: {
      __typename: 'ModelCardConnection'
      nextToken?: string | null
    } | null
    effectiveDate?: string | null
    ssid?: string | null
    group?: string | null
    hmo?: string | null
    copay?: string | null
    amount?: number | null
    relationship?: string | null
    firstName?: string | null
    lastName?: string | null
    address?: {
      __typename: 'Address'
      street?: string | null
      city?: string | null
      state?: string | null
      zip?: string | null
    } | null
    phone?: string | null
    dob?: string | null
    sex?: Sex | null
    createdAt: string
    updatedAt: string
  } | null
}

export type ListPatientInsurancesQueryVariables = {
  filter?: ModelPatientInsuranceFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListPatientInsurancesQuery = {
  listPatientInsurances?: {
    __typename: 'ModelPatientInsuranceConnection'
    items: Array<{
      __typename: 'PatientInsurance'
      id: string
      patientPatientInsurancesId: string
      insurancePatientInsurancesId: string
      effectiveDate?: string | null
      ssid?: string | null
      group?: string | null
      hmo?: string | null
      copay?: string | null
      amount?: number | null
      relationship?: string | null
      firstName?: string | null
      lastName?: string | null
      phone?: string | null
      dob?: string | null
      sex?: Sex | null
      createdAt: string
      updatedAt: string
    } | null>
    nextToken?: string | null
  } | null
}

export type GetCardQueryVariables = {
  id: string
}

export type GetCardQuery = {
  getCard?: {
    __typename: 'Card'
    id: string
    patientInsurance?: {
      __typename: 'PatientInsurance'
      id: string
      patientPatientInsurancesId: string
      insurancePatientInsurancesId: string
      effectiveDate?: string | null
      ssid?: string | null
      group?: string | null
      hmo?: string | null
      copay?: string | null
      amount?: number | null
      relationship?: string | null
      firstName?: string | null
      lastName?: string | null
      phone?: string | null
      dob?: string | null
      sex?: Sex | null
      createdAt: string
      updatedAt: string
    } | null
    patientInsuranceCardsId: string
    insuranceCardBackUrl?: string | null
    insuranceCardFrontUrl?: string | null
    cardType?: CardType | null
    date?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type ListCardsQueryVariables = {
  filter?: ModelCardFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListCardsQuery = {
  listCards?: {
    __typename: 'ModelCardConnection'
    items: Array<{
      __typename: 'Card'
      id: string
      patientInsuranceCardsId: string
      insuranceCardBackUrl?: string | null
      insuranceCardFrontUrl?: string | null
      cardType?: CardType | null
      date?: string | null
      createdAt: string
      updatedAt: string
    } | null>
    nextToken?: string | null
  } | null
}

export type GetContactQueryVariables = {
  id: string
}

export type GetContactQuery = {
  getContact?: {
    __typename: 'Contact'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientContactsId: string
    contactType?: ContactType | null
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    address?: {
      __typename: 'Address'
      street?: string | null
      city?: string | null
      state?: string | null
      zip?: string | null
    } | null
    phone1?: string | null
    phone2?: string | null
    phone3?: string | null
    ok1?: boolean | null
    ok2?: boolean | null
    ok3?: boolean | null
    isPreferred?: boolean | null
    email?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type ListContactsQueryVariables = {
  filter?: ModelContactFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListContactsQuery = {
  listContacts?:  {
    __typename: "ModelContactConnection",
    items:  Array< {
      __typename: "Contact",
      id: string,
      patientContactsId: string,
      contactType?: ContactType | null,
      firstName?: string | null,
      middleName?: string | null,
      lastName?: string | null,
      phoneType1?: PhoneType | null,
      phoneType2?: PhoneType | null,
      phoneType3?: PhoneType | null,
      phone1?: string | null,
      phone2?: string | null,
      phone3?: string | null,
      isPreferred1?: boolean | null,
      isPreferred2?: boolean | null,
      isPreferred3?: boolean | null,
      ok1?: boolean | null,
      ok2?: boolean | null,
      ok3?: boolean | null,
      isPreferred?: boolean | null,
      email?: string | null,
      flags?: Array< FlagType | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProviderQueryVariables = {
  id: string
}

export type GetProviderQuery = {
  getProvider?: {
    __typename: 'Provider'
    id: string
    patientProviders?: {
      __typename: 'ModelPatientProviderConnection'
      nextToken?: string | null
    } | null
    appointments?: {
      __typename: 'ModelAppointmentConnection'
      nextToken?: string | null
    } | null
    problems?: {
      __typename: 'ModelProblemConnection'
      nextToken?: string | null
    } | null
    firstName?: string | null
    lastName?: string | null
    phone1?: string | null
    phone2?: string | null
    phone3?: string | null
    address?: {
      __typename: 'Address'
      street?: string | null
      city?: string | null
      state?: string | null
      zip?: string | null
    } | null
    createdAt: string
    updatedAt: string
  } | null
}

export type ListProvidersQueryVariables = {
  filter?: ModelProviderFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListProvidersQuery = {
  listProviders?: {
    __typename: 'ModelProviderConnection'
    items: Array<{
      __typename: 'Provider'
      id: string
      firstName?: string | null
      lastName?: string | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      createdAt: string
      updatedAt: string
    } | null>
    nextToken?: string | null
  } | null
}

export type GetPatientProviderQueryVariables = {
  id: string
}

export type GetPatientProviderQuery = {
  getPatientProvider?: {
    __typename: 'PatientProvider'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientPatientProvidersId: string
    provider?: {
      __typename: 'Provider'
      id: string
      firstName?: string | null
      lastName?: string | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      createdAt: string
      updatedAt: string
    } | null
    providerPatientProvidersId: string
    isPrimary?: boolean | null
    createdAt: string
    updatedAt: string
  } | null
}

export type ListPatientProvidersQueryVariables = {
  filter?: ModelPatientProviderFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListPatientProvidersQuery = {
  listPatientProviders?: {
    __typename: 'ModelPatientProviderConnection'
    items: Array<{
      __typename: 'PatientProvider'
      id: string
      patientPatientProvidersId: string
      providerPatientProvidersId: string
      isPrimary?: boolean | null
      createdAt: string
      updatedAt: string
    } | null>
    nextToken?: string | null
  } | null
}

export type GetEmployerQueryVariables = {
  id: string
}

export type GetEmployerQuery = {
  getEmployer?: {
    __typename: 'Employer'
    id: string
    patientEmployers?: {
      __typename: 'ModelPatientEmployerConnection'
      nextToken?: string | null
    } | null
    name?: string | null
    phone1?: string | null
    phone2?: string | null
    phone3?: string | null
    address?: {
      __typename: 'Address'
      street?: string | null
      city?: string | null
      state?: string | null
      zip?: string | null
    } | null
    email?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type ListEmployersQueryVariables = {
  filter?: ModelEmployerFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListEmployersQuery = {
  listEmployers?: {
    __typename: 'ModelEmployerConnection'
    items: Array<{
      __typename: 'Employer'
      id: string
      name?: string | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      email?: string | null
      createdAt: string
      updatedAt: string
    } | null>
    nextToken?: string | null
  } | null
}

export type GetPatientEmployerQueryVariables = {
  id: string
}

export type GetPatientEmployerQuery = {
  getPatientEmployer?: {
    __typename: 'PatientEmployer'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientPatientEmployersId: string
    employer?: {
      __typename: 'Employer'
      id: string
      name?: string | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      email?: string | null
      createdAt: string
      updatedAt: string
    } | null
    employerPatientEmployersId: string
    occupation?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type ListPatientEmployersQueryVariables = {
  filter?: ModelPatientEmployerFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListPatientEmployersQuery = {
  listPatientEmployers?: {
    __typename: 'ModelPatientEmployerConnection'
    items: Array<{
      __typename: 'PatientEmployer'
      id: string
      patientPatientEmployersId: string
      employerPatientEmployersId: string
      occupation?: string | null
      createdAt: string
      updatedAt: string
    } | null>
    nextToken?: string | null
  } | null
}

export type GetAppointmentTypeQueryVariables = {
  id: string
}

export type GetAppointmentTypeQuery = {
  getAppointmentType?: {
    __typename: 'AppointmentType'
    id: string
    appointment?: {
      __typename: 'ModelAppointmentConnection'
      nextToken?: string | null
    } | null
    code?: string | null
    description?: string | null
    comment?: string | null
    slot?: number | null
    limit?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type ListAppointmentTypesQueryVariables = {
  filter?: ModelAppointmentTypeFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListAppointmentTypesQuery = {
  listAppointmentTypes?: {
    __typename: 'ModelAppointmentTypeConnection'
    items: Array<{
      __typename: 'AppointmentType'
      id: string
      code?: string | null
      description?: string | null
      comment?: string | null
      slot?: number | null
      limit?: string | null
      createdAt: string
      updatedAt: string
    } | null>
    nextToken?: string | null
  } | null
}

export type GetAppointmentQueryVariables = {
  id: string
}

export type GetAppointmentQuery = {
  getAppointment?: {
    __typename: 'Appointment'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientAppointmentsId: string
    provider?: {
      __typename: 'Provider'
      id: string
      firstName?: string | null
      lastName?: string | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      createdAt: string
      updatedAt: string
    } | null
    providerAppointmentsId: string
    appointmentType?: {
      __typename: 'AppointmentType'
      id: string
      code?: string | null
      description?: string | null
      comment?: string | null
      slot?: number | null
      limit?: string | null
      createdAt: string
      updatedAt: string
    } | null
    appointmentTypeAppointmentsId: string
    date?: string | null
    time?: string | null
    length?: number | null
    comment?: string | null
    checkin?: string | null
    checkout?: string | null
    isMissed?: boolean | null
    status?: AppointmentStatus | null
    createdAt: string
    updatedAt: string
  } | null
}

export type ListAppointmentsQueryVariables = {
  filter?: ModelAppointmentFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListAppointmentsQuery = {
  listAppointments?: {
    __typename: 'ModelAppointmentConnection'
    items: Array<{
      __typename: 'Appointment'
      id: string
      patientAppointmentsId: string
      providerAppointmentsId: string
      appointmentTypeAppointmentsId: string
      date?: string | null
      time?: string | null
      length?: number | null
      comment?: string | null
      checkin?: string | null
      checkout?: string | null
      isMissed?: boolean | null
      status?: AppointmentStatus | null
      createdAt: string
      updatedAt: string
    } | null>
    nextToken?: string | null
  } | null
}

export type GetFormQueryVariables = {
  id: string
}

export type GetFormQuery = {
  getForm?: {
    __typename: 'Form'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientFormsId: string
    name?: string | null
    date?: string | null
    status?: FormStatus | null
    url?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type ListFormsQueryVariables = {
  filter?: ModelFormFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListFormsQuery = {
  listForms?: {
    __typename: 'ModelFormConnection'
    items: Array<{
      __typename: 'Form'
      id: string
      patientFormsId: string
      name?: string | null
      date?: string | null
      status?: FormStatus | null
      url?: string | null
      createdAt: string
      updatedAt: string
    } | null>
    nextToken?: string | null
  } | null
}

export type GetAllergyQueryVariables = {
  id: string
}

export type GetAllergyQuery = {
  getAllergy?: {
    __typename: 'Allergy'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientAllergiesId: string
    allergen?: string | null
    reaction?: string | null
    comment?: string | null
    date?: string | null
    severity?: AllergySeverity | null
    createdAt: string
    updatedAt: string
  } | null
}

export type ListAllergiesQueryVariables = {
  filter?: ModelAllergyFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListAllergiesQuery = {
  listAllergies?: {
    __typename: 'ModelAllergyConnection'
    items: Array<{
      __typename: 'Allergy'
      id: string
      patientAllergiesId: string
      allergen?: string | null
      reaction?: string | null
      comment?: string | null
      date?: string | null
      severity?: AllergySeverity | null
      createdAt: string
      updatedAt: string
    } | null>
    nextToken?: string | null
  } | null
}

export type GetVitalQueryVariables = {
  id: string
}

export type GetVitalQuery = {
  getVital?: {
    __typename: 'Vital'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientVitalsId: string
    date?: string | null
    height?: number | null
    weight?: number | null
    bmi?: number | null
    bpd?: number | null
    bps?: number | null
    pulse?: number | null
    temp?: number | null
    createdAt: string
    updatedAt: string
  } | null
}

export type ListVitalsQueryVariables = {
  filter?: ModelVitalFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListVitalsQuery = {
  listVitals?: {
    __typename: 'ModelVitalConnection'
    items: Array<{
      __typename: 'Vital'
      id: string
      patientVitalsId: string
      date?: string | null
      height?: number | null
      weight?: number | null
      bmi?: number | null
      bpd?: number | null
      bps?: number | null
      pulse?: number | null
      temp?: number | null
      createdAt: string
      updatedAt: string
    } | null>
    nextToken?: string | null
  } | null
}

export type GetEducationQueryVariables = {
  id: string
}

export type GetEducationQuery = {
  getEducation?: {
    __typename: 'Education'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientEducationsId: string
    date?: string | null
    description?: string | null
    url?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type ListEducationsQueryVariables = {
  filter?: ModelEducationFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListEducationsQuery = {
  listEducations?: {
    __typename: 'ModelEducationConnection'
    items: Array<{
      __typename: 'Education'
      id: string
      patientEducationsId: string
      date?: string | null
      description?: string | null
      url?: string | null
      createdAt: string
      updatedAt: string
    } | null>
    nextToken?: string | null
  } | null
}

export type GetProblemQueryVariables = {
  id: string
}

export type GetProblemQuery = {
  getProblem?: {
    __typename: 'Problem'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientProblemsId: string
    provider?: {
      __typename: 'Provider'
      id: string
      firstName?: string | null
      lastName?: string | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      createdAt: string
      updatedAt: string
    } | null
    providerProblemsId: string
    date?: string | null
    updatedDate?: string | null
    description?: string | null
    code?: string | null
    severity?: ProblemSeverity | null
    status?: ProblemStatus | null
    createdAt: string
    updatedAt: string
  } | null
}

export type ListProblemsQueryVariables = {
  filter?: ModelProblemFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListProblemsQuery = {
  listProblems?: {
    __typename: 'ModelProblemConnection'
    items: Array<{
      __typename: 'Problem'
      id: string
      patientProblemsId: string
      providerProblemsId: string
      date?: string | null
      updatedDate?: string | null
      description?: string | null
      code?: string | null
      severity?: ProblemSeverity | null
      status?: ProblemStatus | null
      createdAt: string
      updatedAt: string
    } | null>
    nextToken?: string | null
  } | null
}

export type GetDocumentQueryVariables = {
  id: string
}

export type GetDocumentQuery = {
  getDocument?: {
    __typename: 'Document'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientDocumentsId: string
    date?: string | null
    subject?: string | null
    name?: string | null
    url?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type ListDocumentsQueryVariables = {
  filter?: ModelDocumentFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListDocumentsQuery = {
  listDocuments?: {
    __typename: 'ModelDocumentConnection'
    items: Array<{
      __typename: 'Document'
      id: string
      patientDocumentsId: string
      date?: string | null
      subject?: string | null
      name?: string | null
      url?: string | null
      createdAt: string
      updatedAt: string
    } | null>
    nextToken?: string | null
  } | null
}

export type UserByEmailQueryVariables = {
  email: string
  sortDirection?: ModelSortDirection | null
  filter?: ModelUserFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type UserByEmailQuery = {
  userByEmail?: {
    __typename: 'ModelUserConnection'
    items: Array<{
      __typename: 'User'
      id: string
      userPatientId?: string | null
      email: string
      role?: UserRole | null
      createdAt: string
      updatedAt: string
    } | null>
    nextToken?: string | null
  } | null
}

export type UserSettingByUserQueryVariables = {
  userUserSettingsId: string
  sortDirection?: ModelSortDirection | null
  filter?: ModelUserSettingFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type UserSettingByUserQuery = {
  userSettingByUser?: {
    __typename: 'ModelUserSettingConnection'
    items: Array<{
      __typename: 'UserSetting'
      id: string
      userUserSettingsId: string
      key?: string | null
      value?: string | null
      createdAt: string
      updatedAt: string
    } | null>
    nextToken?: string | null
  } | null
}

export type UserSettingByKeyQueryVariables = {
  key: string
  sortDirection?: ModelSortDirection | null
  filter?: ModelUserSettingFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type UserSettingByKeyQuery = {
  userSettingByKey?: {
    __typename: 'ModelUserSettingConnection'
    items: Array<{
      __typename: 'UserSetting'
      id: string
      userUserSettingsId: string
      key?: string | null
      value?: string | null
      createdAt: string
      updatedAt: string
    } | null>
    nextToken?: string | null
  } | null
}

export type UserWorkflowByUserSettingQueryVariables = {
  userSettingUserWorkflowsId: string
  sortDirection?: ModelSortDirection | null
  filter?: ModelUserWorkflowFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type UserWorkflowByUserSettingQuery = {
  userWorkflowByUserSetting?: {
    __typename: 'ModelUserWorkflowConnection'
    items: Array<{
      __typename: 'UserWorkflow'
      id: string
      userSettingUserWorkflowsId: string
      type?: WorkflowType | null
      status?: string | null
      createdAt: string
      updatedAt: string
    } | null>
    nextToken?: string | null
  } | null
}

export type PhoneOtherByPatientQueryVariables = {
  patientPhoneOtherId: string
  sortDirection?: ModelSortDirection | null
  filter?: ModelPhoneOtherFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type PhoneOtherByPatientQuery = {
  phoneOtherByPatient?: {
    __typename: 'ModelPhoneOtherConnection'
    items: Array<{
      __typename: 'PhoneOther'
      id: string
      patientPhoneOtherId?: string | null
      phoneType1?: PhoneType | null
      phoneType2?: PhoneType | null
      phoneType3?: PhoneType | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      isPreferred1?: boolean | null
      isPreferred2?: boolean | null
      isPreferred3?: boolean | null
      ok1?: boolean | null
      ok2?: boolean | null
      ok3?: boolean | null
      heardFrom?: HeardFrom | null
      specify?: string | null
      genderPronoun?: GenderPronoun | null
      genderIdentity?: GenderIdentity | null
      sexualOrientation?: SexualOrientation | null
      maritalStatus?: MaritalStatus | null
      employmentStatus?: EmploymentStatus | null
      preferredLanguage?: PreferredLanguage | null
      race?: Race | null
      ethnicity?: Ethnicity | null
      annualIncome?: number | null
      numberInHousehold?: number | null
      communicateElectronically?: boolean | null
      createdAt: string
      updatedAt: string
      phoneOtherPatientId?: string | null
    } | null>
    nextToken?: string | null
  } | null
}

export type CommunicationPreferenceByPatientQueryVariables = {
  patientCommunicationPreferenceId: string
  sortDirection?: ModelSortDirection | null
  filter?: ModelCommunicationPreferenceFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type CommunicationPreferenceByPatientQuery = {
  communicationPreferenceByPatient?: {
    __typename: 'ModelCommunicationPreferenceConnection'
    items: Array<{
      __typename: 'CommunicationPreference'
      id: string
      patientCommunicationPreferenceId?: string | null
      appointmentInformation?: Array<CommunicationPreferenceType1 | null> | null
      healthInformation?: Array<CommunicationPreferenceType1 | null> | null
      patientSurvey?: Array<CommunicationPreferenceType2 | null> | null
      visitSummary?: Array<CommunicationPreferenceType2 | null> | null
      receivePaperlessStatement?: boolean | null
      paperlessStatement?: Array<CommunicationPreferenceType2 | null> | null
      staffTextMessaging?: boolean | null
      checkinProcessTextMessaging?: boolean | null
      agreed?: boolean | null
      createdAt: string
      updatedAt: string
      communicationPreferencePatientId?: string | null
    } | null>
    nextToken?: string | null
  } | null
}

export type PatientInsuranceByPatientQueryVariables = {
  patientPatientInsurancesId: string
  sortDirection?: ModelSortDirection | null
  filter?: ModelPatientInsuranceFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type PatientInsuranceByPatientQuery = {
  patientInsuranceByPatient?: {
    __typename: 'ModelPatientInsuranceConnection'
    items: Array<{
      __typename: 'PatientInsurance'
      id: string
      patientPatientInsurancesId: string
      insurancePatientInsurancesId: string
      effectiveDate?: string | null
      group?: string | null
      hmo?: string | null
      copay?: string | null
      amount?: number | null
      relationship?: string | null
      firstName?: string | null
      lastName?: string | null
      phone?: string | null
      dob?: string | null
      sex?: Sex | null
      createdAt: string
      updatedAt: string
    } | null>
    nextToken?: string | null
  } | null
}

export type PatientInsuranceByInsuranceQueryVariables = {
  insurancePatientInsurancesId: string
  ssid?: ModelStringKeyConditionInput | null
  sortDirection?: ModelSortDirection | null
  filter?: ModelPatientInsuranceFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type PatientInsuranceByInsuranceQuery = {
  patientInsuranceByInsurance?: {
    __typename: 'ModelPatientInsuranceConnection'
    items: Array<{
      __typename: 'PatientInsurance'
      id: string
      patientPatientInsurancesId: string
      insurancePatientInsurancesId: string
      effectiveDate?: string | null
      ssid?: string | null
      group?: string | null
      hmo?: string | null
      copay?: string | null
      amount?: number | null
      relationship?: string | null
      firstName?: string | null
      lastName?: string | null
      phone?: string | null
      dob?: string | null
      sex?: Sex | null
      createdAt: string
      updatedAt: string
    } | null>
    nextToken?: string | null
  } | null
}

export type CardByPatientInsuranceQueryVariables = {
  patientInsuranceCardsId: string
  date?: ModelStringKeyConditionInput | null
  sortDirection?: ModelSortDirection | null
  filter?: ModelCardFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type CardByPatientInsuranceQuery = {
  cardByPatientInsurance?: {
    __typename: 'ModelCardConnection'
    items: Array<{
      __typename: 'Card'
      id: string
      patientInsuranceCardsId: string
      insuranceCardBackUrl?: string | null
      insuranceCardFrontUrl?: string | null
      cardType?: CardType | null
      date?: string | null
      createdAt: string
      updatedAt: string
    } | null>
    nextToken?: string | null
  } | null
}

export type ContactByPatientQueryVariables = {
  patientContactsId: string
  email?: ModelStringKeyConditionInput | null
  sortDirection?: ModelSortDirection | null
  filter?: ModelContactFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ContactByPatientQuery = {
  contactByPatient?: {
    __typename: 'ModelContactConnection'
    items: Array<{
      __typename: 'Contact'
      id: string
      patientContactsId: string
      contactType?: ContactType | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      ok1?: boolean | null
      ok2?: boolean | null
      ok3?: boolean | null
      isPreferred?: boolean | null
      email?: string | null
      createdAt: string
      updatedAt: string
    } | null>
    nextToken?: string | null
  } | null
}

export type PatientProviderByPatientQueryVariables = {
  patientPatientProvidersId: string
  sortDirection?: ModelSortDirection | null
  filter?: ModelPatientProviderFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type PatientProviderByPatientQuery = {
  patientProviderByPatient?: {
    __typename: 'ModelPatientProviderConnection'
    items: Array<{
      __typename: 'PatientProvider'
      id: string
      patientPatientProvidersId: string
      providerPatientProvidersId: string
      isPrimary?: boolean | null
      createdAt: string
      updatedAt: string
    } | null>
    nextToken?: string | null
  } | null
}

export type PatientProviderByProviderQueryVariables = {
  providerPatientProvidersId: string
  sortDirection?: ModelSortDirection | null
  filter?: ModelPatientProviderFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type PatientProviderByProviderQuery = {
  patientProviderByProvider?: {
    __typename: 'ModelPatientProviderConnection'
    items: Array<{
      __typename: 'PatientProvider'
      id: string
      patientPatientProvidersId: string
      providerPatientProvidersId: string
      isPrimary?: boolean | null
      createdAt: string
      updatedAt: string
    } | null>
    nextToken?: string | null
  } | null
}

export type PatientEmployerByPatientQueryVariables = {
  patientPatientEmployersId: string
  sortDirection?: ModelSortDirection | null
  filter?: ModelPatientEmployerFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type PatientEmployerByPatientQuery = {
  patientEmployerByPatient?: {
    __typename: 'ModelPatientEmployerConnection'
    items: Array<{
      __typename: 'PatientEmployer'
      id: string
      patientPatientEmployersId: string
      employerPatientEmployersId: string
      occupation?: string | null
      createdAt: string
      updatedAt: string
    } | null>
    nextToken?: string | null
  } | null
}

export type PatientEmployerByEmployerQueryVariables = {
  employerPatientEmployersId: string
  sortDirection?: ModelSortDirection | null
  filter?: ModelPatientEmployerFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type PatientEmployerByEmployerQuery = {
  patientEmployerByEmployer?: {
    __typename: 'ModelPatientEmployerConnection'
    items: Array<{
      __typename: 'PatientEmployer'
      id: string
      patientPatientEmployersId: string
      employerPatientEmployersId: string
      occupation?: string | null
      createdAt: string
      updatedAt: string
    } | null>
    nextToken?: string | null
  } | null
}

export type AppointmentByPatientQueryVariables = {
  patientAppointmentsId: string
  sortDirection?: ModelSortDirection | null
  filter?: ModelAppointmentFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type AppointmentByPatientQuery = {
  appointmentByPatient?: {
    __typename: 'ModelAppointmentConnection'
    items: Array<{
      __typename: 'Appointment'
      id: string
      patientAppointmentsId: string
      providerAppointmentsId: string
      appointmentTypeAppointmentsId: string
      date?: string | null
      time?: string | null
      length?: number | null
      comment?: string | null
      checkin?: string | null
      checkout?: string | null
      isMissed?: boolean | null
      status?: AppointmentStatus | null
      createdAt: string
      updatedAt: string
    } | null>
    nextToken?: string | null
  } | null
}

export type AppointmentByProviderQueryVariables = {
  providerAppointmentsId: string
  sortDirection?: ModelSortDirection | null
  filter?: ModelAppointmentFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type AppointmentByProviderQuery = {
  appointmentByProvider?: {
    __typename: 'ModelAppointmentConnection'
    items: Array<{
      __typename: 'Appointment'
      id: string
      patientAppointmentsId: string
      providerAppointmentsId: string
      appointmentTypeAppointmentsId: string
      date?: string | null
      time?: string | null
      length?: number | null
      comment?: string | null
      checkin?: string | null
      checkout?: string | null
      isMissed?: boolean | null
      status?: AppointmentStatus | null
      createdAt: string
      updatedAt: string
    } | null>
    nextToken?: string | null
  } | null
}

export type AppointmentByAppointmentTypeQueryVariables = {
  appointmentTypeAppointmentsId: string
  sortDirection?: ModelSortDirection | null
  filter?: ModelAppointmentFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type AppointmentByAppointmentTypeQuery = {
  appointmentByAppointmentType?: {
    __typename: 'ModelAppointmentConnection'
    items: Array<{
      __typename: 'Appointment'
      id: string
      patientAppointmentsId: string
      providerAppointmentsId: string
      appointmentTypeAppointmentsId: string
      date?: string | null
      time?: string | null
      length?: number | null
      comment?: string | null
      checkin?: string | null
      checkout?: string | null
      isMissed?: boolean | null
      status?: AppointmentStatus | null
      createdAt: string
      updatedAt: string
    } | null>
    nextToken?: string | null
  } | null
}

export type FormByPatientQueryVariables = {
  patientFormsId: string
  name?: ModelStringKeyConditionInput | null
  sortDirection?: ModelSortDirection | null
  filter?: ModelFormFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type FormByPatientQuery = {
  formByPatient?: {
    __typename: 'ModelFormConnection'
    items: Array<{
      __typename: 'Form'
      id: string
      patientFormsId: string
      name?: string | null
      date?: string | null
      status?: FormStatus | null
      url?: string | null
      createdAt: string
      updatedAt: string
    } | null>
    nextToken?: string | null
  } | null
}

export type AllergyByPatientQueryVariables = {
  patientAllergiesId: string
  allergen?: ModelStringKeyConditionInput | null
  sortDirection?: ModelSortDirection | null
  filter?: ModelAllergyFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type AllergyByPatientQuery = {
  allergyByPatient?: {
    __typename: 'ModelAllergyConnection'
    items: Array<{
      __typename: 'Allergy'
      id: string
      patientAllergiesId: string
      allergen?: string | null
      reaction?: string | null
      comment?: string | null
      date?: string | null
      severity?: AllergySeverity | null
      createdAt: string
      updatedAt: string
    } | null>
    nextToken?: string | null
  } | null
}

export type VitalByPatientQueryVariables = {
  patientVitalsId: string
  date?: ModelStringKeyConditionInput | null
  sortDirection?: ModelSortDirection | null
  filter?: ModelVitalFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type VitalByPatientQuery = {
  vitalByPatient?: {
    __typename: 'ModelVitalConnection'
    items: Array<{
      __typename: 'Vital'
      id: string
      patientVitalsId: string
      date?: string | null
      height?: number | null
      weight?: number | null
      bmi?: number | null
      bpd?: number | null
      bps?: number | null
      pulse?: number | null
      temp?: number | null
      createdAt: string
      updatedAt: string
    } | null>
    nextToken?: string | null
  } | null
}

export type EducationByPatientQueryVariables = {
  patientEducationsId: string
  date?: ModelStringKeyConditionInput | null
  sortDirection?: ModelSortDirection | null
  filter?: ModelEducationFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type EducationByPatientQuery = {
  educationByPatient?: {
    __typename: 'ModelEducationConnection'
    items: Array<{
      __typename: 'Education'
      id: string
      patientEducationsId: string
      date?: string | null
      description?: string | null
      url?: string | null
      createdAt: string
      updatedAt: string
    } | null>
    nextToken?: string | null
  } | null
}

export type ProblemByPatientQueryVariables = {
  patientProblemsId: string
  date?: ModelStringKeyConditionInput | null
  sortDirection?: ModelSortDirection | null
  filter?: ModelProblemFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ProblemByPatientQuery = {
  problemByPatient?: {
    __typename: 'ModelProblemConnection'
    items: Array<{
      __typename: 'Problem'
      id: string
      patientProblemsId: string
      providerProblemsId: string
      date?: string | null
      updatedDate?: string | null
      description?: string | null
      code?: string | null
      severity?: ProblemSeverity | null
      status?: ProblemStatus | null
      createdAt: string
      updatedAt: string
    } | null>
    nextToken?: string | null
  } | null
}

export type ProblemByProviderQueryVariables = {
  providerProblemsId: string
  date?: ModelStringKeyConditionInput | null
  sortDirection?: ModelSortDirection | null
  filter?: ModelProblemFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ProblemByProviderQuery = {
  problemByProvider?: {
    __typename: 'ModelProblemConnection'
    items: Array<{
      __typename: 'Problem'
      id: string
      patientProblemsId: string
      providerProblemsId: string
      date?: string | null
      updatedDate?: string | null
      description?: string | null
      code?: string | null
      severity?: ProblemSeverity | null
      status?: ProblemStatus | null
      createdAt: string
      updatedAt: string
    } | null>
    nextToken?: string | null
  } | null
}

export type DocumentByPatientQueryVariables = {
  patientDocumentsId: string
  date?: ModelStringKeyConditionInput | null
  sortDirection?: ModelSortDirection | null
  filter?: ModelDocumentFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type DocumentByPatientQuery = {
  documentByPatient?: {
    __typename: 'ModelDocumentConnection'
    items: Array<{
      __typename: 'Document'
      id: string
      patientDocumentsId: string
      date?: string | null
      subject?: string | null
      name?: string | null
      url?: string | null
      createdAt: string
      updatedAt: string
    } | null>
    nextToken?: string | null
  } | null
}

export type OnCreatePatientSubscription = {
  onCreatePatient?: {
    __typename: 'Patient'
    id: string
    phoneOther?: {
      __typename: 'PhoneOther'
      id: string
      patientPhoneOtherId?: string | null
      phoneType1?: PhoneType | null
      phoneType2?: PhoneType | null
      phoneType3?: PhoneType | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      isPreferred1?: boolean | null
      isPreferred2?: boolean | null
      isPreferred3?: boolean | null
      ok1?: boolean | null
      ok2?: boolean | null
      ok3?: boolean | null
      heardFrom?: HeardFrom | null
      specify?: string | null
      genderPronoun?: GenderPronoun | null
      genderIdentity?: GenderIdentity | null
      sexualOrientation?: SexualOrientation | null
      maritalStatus?: MaritalStatus | null
      employmentStatus?: EmploymentStatus | null
      preferredLanguage?: PreferredLanguage | null
      race?: Race | null
      ethnicity?: Ethnicity | null
      annualIncome?: number | null
      numberInHousehold?: number | null
      communicateElectronically?: boolean | null
      createdAt: string
      updatedAt: string
      phoneOtherPatientId?: string | null
    } | null
    communicationPreference?: {
      __typename: 'CommunicationPreference'
      id: string
      patientCommunicationPreferenceId?: string | null
      appointmentInformation?: Array<CommunicationPreferenceType1 | null> | null
      healthInformation?: Array<CommunicationPreferenceType1 | null> | null
      patientSurvey?: Array<CommunicationPreferenceType2 | null> | null
      visitSummary?: Array<CommunicationPreferenceType2 | null> | null
      receivePaperlessStatement?: boolean | null
      paperlessStatement?: Array<CommunicationPreferenceType2 | null> | null
      staffTextMessaging?: boolean | null
      checkinProcessTextMessaging?: boolean | null
      agreed?: boolean | null
      createdAt: string
      updatedAt: string
      communicationPreferencePatientId?: string | null
    } | null
    location?: {
      __typename: 'Location'
      code: string
      name?: string | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      email?: string | null
      license1?: string | null
      license2?: string | null
      license3?: string | null
      license4?: string | null
    } | null
    patientInsurances?: {
      __typename: 'ModelPatientInsuranceConnection'
      nextToken?: string | null
    } | null
    contacts?: {
      __typename: 'ModelContactConnection'
      nextToken?: string | null
    } | null
    patientProviders?: {
      __typename: 'ModelPatientProviderConnection'
      nextToken?: string | null
    } | null
    patientEmployers?: {
      __typename: 'ModelPatientEmployerConnection'
      nextToken?: string | null
    } | null
    appointments?: {
      __typename: 'ModelAppointmentConnection'
      nextToken?: string | null
    } | null
    forms?: {
      __typename: 'ModelFormConnection'
      nextToken?: string | null
    } | null
    allergies?: {
      __typename: 'ModelAllergyConnection'
      nextToken?: string | null
    } | null
    vitals?: {
      __typename: 'ModelVitalConnection'
      nextToken?: string | null
    } | null
    educations?: {
      __typename: 'ModelEducationConnection'
      nextToken?: string | null
    } | null
    problems?: {
      __typename: 'ModelProblemConnection'
      nextToken?: string | null
    } | null
    documents?: {
      __typename: 'ModelDocumentConnection'
      nextToken?: string | null
    } | null
    title?: Title | null
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    dob?: string | null
    sex?: Sex | null
    ssn?: string | null
    email?: string | null
    mailingAddress?: {
      __typename: 'Address'
      street?: string | null
      city?: string | null
      state?: string | null
      zip?: string | null
    } | null
    physicalAddress?: {
      __typename: 'Address'
      street?: string | null
      city?: string | null
      state?: string | null
      zip?: string | null
    } | null
    sameAsMailing?: boolean | null
    distance?: number | null
    profilePicture?: string | null
    createdAt: string
    updatedAt: string
    patientPhoneOtherId?: string | null
    patientCommunicationPreferenceId?: string | null
  } | null
}

export type OnUpdatePatientSubscription = {
  onUpdatePatient?: {
    __typename: 'Patient'
    id: string
    phoneOther?: {
      __typename: 'PhoneOther'
      id: string
      patientPhoneOtherId?: string | null
      phoneType1?: PhoneType | null
      phoneType2?: PhoneType | null
      phoneType3?: PhoneType | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      isPreferred1?: boolean | null
      isPreferred2?: boolean | null
      isPreferred3?: boolean | null
      ok1?: boolean | null
      ok2?: boolean | null
      ok3?: boolean | null
      heardFrom?: HeardFrom | null
      specify?: string | null
      genderPronoun?: GenderPronoun | null
      genderIdentity?: GenderIdentity | null
      sexualOrientation?: SexualOrientation | null
      maritalStatus?: MaritalStatus | null
      employmentStatus?: EmploymentStatus | null
      preferredLanguage?: PreferredLanguage | null
      race?: Race | null
      ethnicity?: Ethnicity | null
      annualIncome?: number | null
      numberInHousehold?: number | null
      communicateElectronically?: boolean | null
      createdAt: string
      updatedAt: string
      phoneOtherPatientId?: string | null
    } | null
    communicationPreference?: {
      __typename: 'CommunicationPreference'
      id: string
      patientCommunicationPreferenceId?: string | null
      appointmentInformation?: Array<CommunicationPreferenceType1 | null> | null
      healthInformation?: Array<CommunicationPreferenceType1 | null> | null
      patientSurvey?: Array<CommunicationPreferenceType2 | null> | null
      visitSummary?: Array<CommunicationPreferenceType2 | null> | null
      receivePaperlessStatement?: boolean | null
      paperlessStatement?: Array<CommunicationPreferenceType2 | null> | null
      staffTextMessaging?: boolean | null
      checkinProcessTextMessaging?: boolean | null
      agreed?: boolean | null
      createdAt: string
      updatedAt: string
      communicationPreferencePatientId?: string | null
    } | null
    location?: {
      __typename: 'Location'
      code: string
      name?: string | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      email?: string | null
      license1?: string | null
      license2?: string | null
      license3?: string | null
      license4?: string | null
    } | null
    patientInsurances?: {
      __typename: 'ModelPatientInsuranceConnection'
      nextToken?: string | null
    } | null
    contacts?: {
      __typename: 'ModelContactConnection'
      nextToken?: string | null
    } | null
    patientProviders?: {
      __typename: 'ModelPatientProviderConnection'
      nextToken?: string | null
    } | null
    patientEmployers?: {
      __typename: 'ModelPatientEmployerConnection'
      nextToken?: string | null
    } | null
    appointments?: {
      __typename: 'ModelAppointmentConnection'
      nextToken?: string | null
    } | null
    forms?: {
      __typename: 'ModelFormConnection'
      nextToken?: string | null
    } | null
    allergies?: {
      __typename: 'ModelAllergyConnection'
      nextToken?: string | null
    } | null
    vitals?: {
      __typename: 'ModelVitalConnection'
      nextToken?: string | null
    } | null
    educations?: {
      __typename: 'ModelEducationConnection'
      nextToken?: string | null
    } | null
    problems?: {
      __typename: 'ModelProblemConnection'
      nextToken?: string | null
    } | null
    documents?: {
      __typename: 'ModelDocumentConnection'
      nextToken?: string | null
    } | null
    title?: Title | null
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    dob?: string | null
    sex?: Sex | null
    ssn?: string | null
    email?: string | null
    mailingAddress?: {
      __typename: 'Address'
      street?: string | null
      city?: string | null
      state?: string | null
      zip?: string | null
    } | null
    physicalAddress?: {
      __typename: 'Address'
      street?: string | null
      city?: string | null
      state?: string | null
      zip?: string | null
    } | null
    sameAsMailing?: boolean | null
    distance?: number | null
    profilePicture?: string | null
    createdAt: string
    updatedAt: string
    patientPhoneOtherId?: string | null
    patientCommunicationPreferenceId?: string | null
  } | null
}

export type OnDeletePatientSubscription = {
  onDeletePatient?: {
    __typename: 'Patient'
    id: string
    phoneOther?: {
      __typename: 'PhoneOther'
      id: string
      patientPhoneOtherId?: string | null
      phoneType1?: PhoneType | null
      phoneType2?: PhoneType | null
      phoneType3?: PhoneType | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      isPreferred1?: boolean | null
      isPreferred2?: boolean | null
      isPreferred3?: boolean | null
      ok1?: boolean | null
      ok2?: boolean | null
      ok3?: boolean | null
      heardFrom?: HeardFrom | null
      specify?: string | null
      genderPronoun?: GenderPronoun | null
      genderIdentity?: GenderIdentity | null
      sexualOrientation?: SexualOrientation | null
      maritalStatus?: MaritalStatus | null
      employmentStatus?: EmploymentStatus | null
      preferredLanguage?: PreferredLanguage | null
      race?: Race | null
      ethnicity?: Ethnicity | null
      annualIncome?: number | null
      numberInHousehold?: number | null
      communicateElectronically?: boolean | null
      createdAt: string
      updatedAt: string
      phoneOtherPatientId?: string | null
    } | null
    communicationPreference?: {
      __typename: 'CommunicationPreference'
      id: string
      patientCommunicationPreferenceId?: string | null
      appointmentInformation?: Array<CommunicationPreferenceType1 | null> | null
      healthInformation?: Array<CommunicationPreferenceType1 | null> | null
      patientSurvey?: Array<CommunicationPreferenceType2 | null> | null
      visitSummary?: Array<CommunicationPreferenceType2 | null> | null
      receivePaperlessStatement?: boolean | null
      paperlessStatement?: Array<CommunicationPreferenceType2 | null> | null
      staffTextMessaging?: boolean | null
      checkinProcessTextMessaging?: boolean | null
      agreed?: boolean | null
      createdAt: string
      updatedAt: string
      communicationPreferencePatientId?: string | null
    } | null
    location?: {
      __typename: 'Location'
      code: string
      name?: string | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      email?: string | null
      license1?: string | null
      license2?: string | null
      license3?: string | null
      license4?: string | null
    } | null
    patientInsurances?: {
      __typename: 'ModelPatientInsuranceConnection'
      nextToken?: string | null
    } | null
    contacts?: {
      __typename: 'ModelContactConnection'
      nextToken?: string | null
    } | null
    patientProviders?: {
      __typename: 'ModelPatientProviderConnection'
      nextToken?: string | null
    } | null
    patientEmployers?: {
      __typename: 'ModelPatientEmployerConnection'
      nextToken?: string | null
    } | null
    appointments?: {
      __typename: 'ModelAppointmentConnection'
      nextToken?: string | null
    } | null
    forms?: {
      __typename: 'ModelFormConnection'
      nextToken?: string | null
    } | null
    allergies?: {
      __typename: 'ModelAllergyConnection'
      nextToken?: string | null
    } | null
    vitals?: {
      __typename: 'ModelVitalConnection'
      nextToken?: string | null
    } | null
    educations?: {
      __typename: 'ModelEducationConnection'
      nextToken?: string | null
    } | null
    problems?: {
      __typename: 'ModelProblemConnection'
      nextToken?: string | null
    } | null
    documents?: {
      __typename: 'ModelDocumentConnection'
      nextToken?: string | null
    } | null
    title?: Title | null
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    dob?: string | null
    sex?: Sex | null
    ssn?: string | null
    email?: string | null
    mailingAddress?: {
      __typename: 'Address'
      street?: string | null
      city?: string | null
      state?: string | null
      zip?: string | null
    } | null
    physicalAddress?: {
      __typename: 'Address'
      street?: string | null
      city?: string | null
      state?: string | null
      zip?: string | null
    } | null
    sameAsMailing?: boolean | null
    distance?: number | null
    profilePicture?: string | null
    createdAt: string
    updatedAt: string
    patientPhoneOtherId?: string | null
    patientCommunicationPreferenceId?: string | null
  } | null
}

export type OnCreateUserSubscription = {
  onCreateUser?: {
    __typename: 'User'
    id: string
    userPatientId?: string | null
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    userSettings?: {
      __typename: 'ModelUserSettingConnection'
      nextToken?: string | null
    } | null
    email: string
    role?: UserRole | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnUpdateUserSubscription = {
  onUpdateUser?: {
    __typename: 'User'
    id: string
    userPatientId?: string | null
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    userSettings?: {
      __typename: 'ModelUserSettingConnection'
      nextToken?: string | null
    } | null
    email: string
    role?: UserRole | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnDeleteUserSubscription = {
  onDeleteUser?: {
    __typename: 'User'
    id: string
    userPatientId?: string | null
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    userSettings?: {
      __typename: 'ModelUserSettingConnection'
      nextToken?: string | null
    } | null
    email: string
    role?: UserRole | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnCreateUserSettingSubscription = {
  onCreateUserSetting?: {
    __typename: 'UserSetting'
    id: string
    user?: {
      __typename: 'User'
      id: string
      userPatientId?: string | null
      email: string
      role?: UserRole | null
      createdAt: string
      updatedAt: string
    } | null
    userUserSettingsId: string
    key?: string | null
    value?: string | null
    userWorkflows?: {
      __typename: 'ModelUserWorkflowConnection'
      nextToken?: string | null
    } | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnUpdateUserSettingSubscription = {
  onUpdateUserSetting?: {
    __typename: 'UserSetting'
    id: string
    user?: {
      __typename: 'User'
      id: string
      userPatientId?: string | null
      email: string
      role?: UserRole | null
      createdAt: string
      updatedAt: string
    } | null
    userUserSettingsId: string
    key?: string | null
    value?: string | null
    userWorkflows?: {
      __typename: 'ModelUserWorkflowConnection'
      nextToken?: string | null
    } | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnDeleteUserSettingSubscription = {
  onDeleteUserSetting?: {
    __typename: 'UserSetting'
    id: string
    user?: {
      __typename: 'User'
      id: string
      userPatientId?: string | null
      email: string
      role?: UserRole | null
      createdAt: string
      updatedAt: string
    } | null
    userUserSettingsId: string
    key?: string | null
    value?: string | null
    userWorkflows?: {
      __typename: 'ModelUserWorkflowConnection'
      nextToken?: string | null
    } | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnCreateUserWorkflowSubscription = {
  onCreateUserWorkflow?: {
    __typename: 'UserWorkflow'
    id: string
    userSetting?: {
      __typename: 'UserSetting'
      id: string
      userUserSettingsId: string
      key?: string | null
      value?: string | null
      createdAt: string
      updatedAt: string
    } | null
    userSettingUserWorkflowsId: string
    type?: WorkflowType | null
    status?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnUpdateUserWorkflowSubscription = {
  onUpdateUserWorkflow?: {
    __typename: 'UserWorkflow'
    id: string
    userSetting?: {
      __typename: 'UserSetting'
      id: string
      userUserSettingsId: string
      key?: string | null
      value?: string | null
      createdAt: string
      updatedAt: string
    } | null
    userSettingUserWorkflowsId: string
    type?: WorkflowType | null
    status?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnDeleteUserWorkflowSubscription = {
  onDeleteUserWorkflow?: {
    __typename: 'UserWorkflow'
    id: string
    userSetting?: {
      __typename: 'UserSetting'
      id: string
      userUserSettingsId: string
      key?: string | null
      value?: string | null
      createdAt: string
      updatedAt: string
    } | null
    userSettingUserWorkflowsId: string
    type?: WorkflowType | null
    status?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnCreatePhoneOtherSubscription = {
  onCreatePhoneOther?: {
    __typename: 'PhoneOther'
    id: string
    patientPhoneOtherId?: string | null
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    phoneType1?: PhoneType | null
    phoneType2?: PhoneType | null
    phoneType3?: PhoneType | null
    phone1?: string | null
    phone2?: string | null
    phone3?: string | null
    isPreferred1?: boolean | null
    isPreferred2?: boolean | null
    isPreferred3?: boolean | null
    ok1?: boolean | null
    ok2?: boolean | null
    ok3?: boolean | null
    heardFrom?: HeardFrom | null
    specify?: string | null
    genderPronoun?: GenderPronoun | null
    genderIdentity?: GenderIdentity | null
    sexualOrientation?: SexualOrientation | null
    maritalStatus?: MaritalStatus | null
    employmentStatus?: EmploymentStatus | null
    preferredLanguage?: PreferredLanguage | null
    race?: Race | null
    ethnicity?: Ethnicity | null
    annualIncome?: number | null
    numberInHousehold?: number | null
    communicateElectronically?: boolean | null
    createdAt: string
    updatedAt: string
    phoneOtherPatientId?: string | null
  } | null
}

export type OnUpdatePhoneOtherSubscription = {
  onUpdatePhoneOther?: {
    __typename: 'PhoneOther'
    id: string
    patientPhoneOtherId?: string | null
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    phoneType1?: PhoneType | null
    phoneType2?: PhoneType | null
    phoneType3?: PhoneType | null
    phone1?: string | null
    phone2?: string | null
    phone3?: string | null
    isPreferred1?: boolean | null
    isPreferred2?: boolean | null
    isPreferred3?: boolean | null
    ok1?: boolean | null
    ok2?: boolean | null
    ok3?: boolean | null
    heardFrom?: HeardFrom | null
    specify?: string | null
    genderPronoun?: GenderPronoun | null
    genderIdentity?: GenderIdentity | null
    sexualOrientation?: SexualOrientation | null
    maritalStatus?: MaritalStatus | null
    employmentStatus?: EmploymentStatus | null
    preferredLanguage?: PreferredLanguage | null
    race?: Race | null
    ethnicity?: Ethnicity | null
    annualIncome?: number | null
    numberInHousehold?: number | null
    communicateElectronically?: boolean | null
    createdAt: string
    updatedAt: string
    phoneOtherPatientId?: string | null
  } | null
}

export type OnDeletePhoneOtherSubscription = {
  onDeletePhoneOther?: {
    __typename: 'PhoneOther'
    id: string
    patientPhoneOtherId?: string | null
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    phoneType1?: PhoneType | null
    phoneType2?: PhoneType | null
    phoneType3?: PhoneType | null
    phone1?: string | null
    phone2?: string | null
    phone3?: string | null
    isPreferred1?: boolean | null
    isPreferred2?: boolean | null
    isPreferred3?: boolean | null
    ok1?: boolean | null
    ok2?: boolean | null
    ok3?: boolean | null
    heardFrom?: HeardFrom | null
    specify?: string | null
    genderPronoun?: GenderPronoun | null
    genderIdentity?: GenderIdentity | null
    sexualOrientation?: SexualOrientation | null
    maritalStatus?: MaritalStatus | null
    employmentStatus?: EmploymentStatus | null
    preferredLanguage?: PreferredLanguage | null
    race?: Race | null
    ethnicity?: Ethnicity | null
    annualIncome?: number | null
    numberInHousehold?: number | null
    communicateElectronically?: boolean | null
    createdAt: string
    updatedAt: string
    phoneOtherPatientId?: string | null
  } | null
}

export type OnCreateCommunicationPreferenceSubscription = {
  onCreateCommunicationPreference?: {
    __typename: 'CommunicationPreference'
    id: string
    patientCommunicationPreferenceId?: string | null
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    appointmentInformation?: Array<CommunicationPreferenceType1 | null> | null
    healthInformation?: Array<CommunicationPreferenceType1 | null> | null
    patientSurvey?: Array<CommunicationPreferenceType2 | null> | null
    visitSummary?: Array<CommunicationPreferenceType2 | null> | null
    receivePaperlessStatement?: boolean | null
    paperlessStatement?: Array<CommunicationPreferenceType2 | null> | null
    staffTextMessaging?: boolean | null
    checkinProcessTextMessaging?: boolean | null
    agreed?: boolean | null
    createdAt: string
    updatedAt: string
    communicationPreferencePatientId?: string | null
  } | null
}

export type OnUpdateCommunicationPreferenceSubscription = {
  onUpdateCommunicationPreference?: {
    __typename: 'CommunicationPreference'
    id: string
    patientCommunicationPreferenceId?: string | null
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    appointmentInformation?: Array<CommunicationPreferenceType1 | null> | null
    healthInformation?: Array<CommunicationPreferenceType1 | null> | null
    patientSurvey?: Array<CommunicationPreferenceType2 | null> | null
    visitSummary?: Array<CommunicationPreferenceType2 | null> | null
    receivePaperlessStatement?: boolean | null
    paperlessStatement?: Array<CommunicationPreferenceType2 | null> | null
    staffTextMessaging?: boolean | null
    checkinProcessTextMessaging?: boolean | null
    agreed?: boolean | null
    createdAt: string
    updatedAt: string
    communicationPreferencePatientId?: string | null
  } | null
}

export type OnDeleteCommunicationPreferenceSubscription = {
  onDeleteCommunicationPreference?: {
    __typename: 'CommunicationPreference'
    id: string
    patientCommunicationPreferenceId?: string | null
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    appointmentInformation?: Array<CommunicationPreferenceType1 | null> | null
    healthInformation?: Array<CommunicationPreferenceType1 | null> | null
    patientSurvey?: Array<CommunicationPreferenceType2 | null> | null
    visitSummary?: Array<CommunicationPreferenceType2 | null> | null
    receivePaperlessStatement?: boolean | null
    paperlessStatement?: Array<CommunicationPreferenceType2 | null> | null
    staffTextMessaging?: boolean | null
    checkinProcessTextMessaging?: boolean | null
    agreed?: boolean | null
    createdAt: string
    updatedAt: string
    communicationPreferencePatientId?: string | null
  } | null
}

export type OnCreateInsuranceSubscription = {
  onCreateInsurance?: {
    __typename: 'Insurance'
    id: string
    patientInsurances?: {
      __typename: 'ModelPatientInsuranceConnection'
      nextToken?: string | null
    } | null
    name?: string | null
    address?: {
      __typename: 'Address'
      street?: string | null
      city?: string | null
      state?: string | null
      zip?: string | null
    } | null
    phone1?: string | null
    phone2?: string | null
    phone3?: string | null
    email?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnUpdateInsuranceSubscription = {
  onUpdateInsurance?: {
    __typename: 'Insurance'
    id: string
    patientInsurances?: {
      __typename: 'ModelPatientInsuranceConnection'
      nextToken?: string | null
    } | null
    name?: string | null
    address?: {
      __typename: 'Address'
      street?: string | null
      city?: string | null
      state?: string | null
      zip?: string | null
    } | null
    phone1?: string | null
    phone2?: string | null
    phone3?: string | null
    email?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnDeleteInsuranceSubscription = {
  onDeleteInsurance?: {
    __typename: 'Insurance'
    id: string
    patientInsurances?: {
      __typename: 'ModelPatientInsuranceConnection'
      nextToken?: string | null
    } | null
    name?: string | null
    address?: {
      __typename: 'Address'
      street?: string | null
      city?: string | null
      state?: string | null
      zip?: string | null
    } | null
    phone1?: string | null
    phone2?: string | null
    phone3?: string | null
    email?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnCreatePatientInsuranceSubscription = {
  onCreatePatientInsurance?: {
    __typename: 'PatientInsurance'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientPatientInsurancesId: string
    insurance?: {
      __typename: 'Insurance'
      id: string
      name?: string | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      email?: string | null
      createdAt: string
      updatedAt: string
    } | null
    insurancePatientInsurancesId: string
    cards?: {
      __typename: 'ModelCardConnection'
      nextToken?: string | null
    } | null
    effectiveDate?: string | null
    ssid?: string | null
    group?: string | null
    hmo?: string | null
    copay?: string | null
    amount?: number | null
    relationship?: string | null
    firstName?: string | null
    lastName?: string | null
    address?: {
      __typename: 'Address'
      street?: string | null
      city?: string | null
      state?: string | null
      zip?: string | null
    } | null
    phone?: string | null
    dob?: string | null
    sex?: Sex | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnUpdatePatientInsuranceSubscription = {
  onUpdatePatientInsurance?: {
    __typename: 'PatientInsurance'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientPatientInsurancesId: string
    insurance?: {
      __typename: 'Insurance'
      id: string
      name?: string | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      email?: string | null
      createdAt: string
      updatedAt: string
    } | null
    insurancePatientInsurancesId: string
    cards?: {
      __typename: 'ModelCardConnection'
      nextToken?: string | null
    } | null
    effectiveDate?: string | null
    ssid?: string | null
    group?: string | null
    hmo?: string | null
    copay?: string | null
    amount?: number | null
    relationship?: string | null
    firstName?: string | null
    lastName?: string | null
    address?: {
      __typename: 'Address'
      street?: string | null
      city?: string | null
      state?: string | null
      zip?: string | null
    } | null
    phone?: string | null
    dob?: string | null
    sex?: Sex | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnDeletePatientInsuranceSubscription = {
  onDeletePatientInsurance?: {
    __typename: 'PatientInsurance'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientPatientInsurancesId: string
    insurance?: {
      __typename: 'Insurance'
      id: string
      name?: string | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      email?: string | null
      createdAt: string
      updatedAt: string
    } | null
    insurancePatientInsurancesId: string
    cards?: {
      __typename: 'ModelCardConnection'
      nextToken?: string | null
    } | null
    effectiveDate?: string | null
    ssid?: string | null
    group?: string | null
    hmo?: string | null
    copay?: string | null
    amount?: number | null
    relationship?: string | null
    firstName?: string | null
    lastName?: string | null
    address?: {
      __typename: 'Address'
      street?: string | null
      city?: string | null
      state?: string | null
      zip?: string | null
    } | null
    phone?: string | null
    dob?: string | null
    sex?: Sex | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnCreateCardSubscription = {
  onCreateCard?: {
    __typename: 'Card'
    id: string
    patientInsurance?: {
      __typename: 'PatientInsurance'
      id: string
      patientPatientInsurancesId: string
      insurancePatientInsurancesId: string
      effectiveDate?: string | null
      ssid?: string | null
      group?: string | null
      hmo?: string | null
      copay?: string | null
      amount?: number | null
      relationship?: string | null
      firstName?: string | null
      lastName?: string | null
      phone?: string | null
      dob?: string | null
      sex?: Sex | null
      createdAt: string
      updatedAt: string
    } | null
    patientInsuranceCardsId: string
    insuranceCardBackUrl?: string | null
    insuranceCardFrontUrl?: string | null
    cardType?: CardType | null
    date?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnUpdateCardSubscription = {
  onUpdateCard?: {
    __typename: 'Card'
    id: string
    patientInsurance?: {
      __typename: 'PatientInsurance'
      id: string
      patientPatientInsurancesId: string
      insurancePatientInsurancesId: string
      effectiveDate?: string | null
      ssid?: string | null
      group?: string | null
      hmo?: string | null
      copay?: string | null
      amount?: number | null
      relationship?: string | null
      firstName?: string | null
      lastName?: string | null
      phone?: string | null
      dob?: string | null
      sex?: Sex | null
      createdAt: string
      updatedAt: string
    } | null
    patientInsuranceCardsId: string
    insuranceCardBackUrl?: string | null
    insuranceCardFrontUrl?: string | null
    cardType?: CardType | null
    date?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnDeleteCardSubscription = {
  onDeleteCard?: {
    __typename: 'Card'
    id: string
    patientInsurance?: {
      __typename: 'PatientInsurance'
      id: string
      patientPatientInsurancesId: string
      insurancePatientInsurancesId: string
      effectiveDate?: string | null
      ssid?: string | null
      group?: string | null
      hmo?: string | null
      copay?: string | null
      amount?: number | null
      relationship?: string | null
      firstName?: string | null
      lastName?: string | null
      phone?: string | null
      dob?: string | null
      sex?: Sex | null
      createdAt: string
      updatedAt: string
    } | null
    patientInsuranceCardsId: string
    insuranceCardBackUrl?: string | null
    insuranceCardFrontUrl?: string | null
    cardType?: CardType | null
    date?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnCreateContactSubscription = {
  onCreateContact?: {
    __typename: 'Contact'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientContactsId: string
    contactType?: ContactType | null
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    address?: {
      __typename: 'Address'
      street?: string | null
      city?: string | null
      state?: string | null
      zip?: string | null
    } | null
    phone1?: string | null
    phone2?: string | null
    phone3?: string | null
    ok1?: boolean | null
    ok2?: boolean | null
    ok3?: boolean | null
    isPreferred?: boolean | null
    email?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnUpdateContactSubscription = {
  onUpdateContact?:  {
    __typename: "Contact",
    id: string,
    patient?:  {
      __typename: "Patient",
      id: string,
      phoneOther?:  {
        __typename: "PhoneOther",
        id: string,
        patientPhoneOtherId?: string | null,
        phoneType1?: PhoneType | null,
        phoneType2?: PhoneType | null,
        phoneType3?: PhoneType | null,
        phone1?: string | null,
        phone2?: string | null,
        phone3?: string | null,
        isPreferred1?: boolean | null,
        isPreferred2?: boolean | null,
        isPreferred3?: boolean | null,
        ok1?: boolean | null,
        ok2?: boolean | null,
        ok3?: boolean | null,
        heardFrom?: HeardFrom | null,
        specify?: string | null,
        genderPronoun?: GenderPronoun | null,
        genderIdentity?: GenderIdentity | null,
        sexualOrientation?: SexualOrientation | null,
        maritalStatus?: MaritalStatus | null,
        employmentStatus?: EmploymentStatus | null,
        preferredLanguage?: PreferredLanguage | null,
        race?: Race | null,
        ethnicity?: Ethnicity | null,
        annualIncome?: number | null,
        numberInHousehold?: number | null,
        communicateElectronically?: boolean | null,
        createdAt: string,
        updatedAt: string,
        phoneOtherPatientId?: string | null,
      } | null,
      communicationPreference?:  {
        __typename: "CommunicationPreference",
        id: string,
        patientCommunicationPreferenceId?: string | null,
        appointmentInformation?: Array< CommunicationPreferenceType1 | null > | null,
        healthInformation?: Array< CommunicationPreferenceType1 | null > | null,
        patientSurvey?: Array< CommunicationPreferenceType2 | null > | null,
        visitSummary?: Array< CommunicationPreferenceType2 | null > | null,
        receivePaperlessStatement?: boolean | null,
        paperlessStatement?: Array< CommunicationPreferenceType2 | null > | null,
        staffTextMessaging?: boolean | null,
        checkinProcessTextMessaging?: boolean | null,
        agreed?: boolean | null,
        createdAt: string,
        updatedAt: string,
        communicationPreferencePatientId?: string | null,
      } | null,
      location?:  {
        __typename: "Location",
        code: string,
        name?: string | null,
        phone1?: string | null,
        phone2?: string | null,
        phone3?: string | null,
        email?: string | null,
        license1?: string | null,
        license2?: string | null,
        license3?: string | null,
        license4?: string | null,
      } | null,
      patientInsurances?:  {
        __typename: "ModelPatientInsuranceConnection",
        nextToken?: string | null,
      } | null,
      contacts?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      patientProviders?:  {
        __typename: "ModelPatientProviderConnection",
        nextToken?: string | null,
      } | null,
      patientEmployers?:  {
        __typename: "ModelPatientEmployerConnection",
        nextToken?: string | null,
      } | null,
      appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
      } | null,
      forms?:  {
        __typename: "ModelFormConnection",
        nextToken?: string | null,
      } | null,
      allergies?:  {
        __typename: "ModelAllergyConnection",
        nextToken?: string | null,
      } | null,
      vitals?:  {
        __typename: "ModelVitalConnection",
        nextToken?: string | null,
      } | null,
      educations?:  {
        __typename: "ModelEducationConnection",
        nextToken?: string | null,
      } | null,
      problems?:  {
        __typename: "ModelProblemConnection",
        nextToken?: string | null,
      } | null,
      documents?:  {
        __typename: "ModelDocumentConnection",
        nextToken?: string | null,
      } | null,
      title?: Title | null,
      firstName?: string | null,
      middleName?: string | null,
      lastName?: string | null,
      dob?: string | null,
      sex?: Sex | null,
      ssn?: string | null,
      email?: string | null,
      mailingAddress?:  {
        __typename: "Address",
        street?: string | null,
        city?: string | null,
        state?: string | null,
        zip?: string | null,
      } | null,
      physicalAddress?:  {
        __typename: "Address",
        street?: string | null,
        city?: string | null,
        state?: string | null,
        zip?: string | null,
      } | null,
      sameAsMailing?: boolean | null,
      distance?: number | null,
      profilePicture?: string | null,
      createdAt: string,
      updatedAt: string,
      patientPhoneOtherId?: string | null,
      patientCommunicationPreferenceId?: string | null,
    } | null,
    patientContactsId: string,
    contactType?: ContactType | null,
    firstName?: string | null,
    middleName?: string | null,
    lastName?: string | null,
    address?:  {
      __typename: "Address",
      street?: string | null,
      city?: string | null,
      state?: string | null,
      zip?: string | null,
    } | null,
    phone1?: string | null,
    phone2?: string | null,
    phone3?: string | null,
    ok1?: boolean | null,
    ok2?: boolean | null,
    ok3?: boolean | null,
    isPreferred?: boolean | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteContactSubscription = {
  onDeleteContact?: {
    __typename: 'Contact'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientContactsId: string
    contactType?: ContactType | null
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    address?: {
      __typename: 'Address'
      street?: string | null
      city?: string | null
      state?: string | null
      zip?: string | null
    } | null
    phone1?: string | null
    phone2?: string | null
    phone3?: string | null
    ok1?: boolean | null
    ok2?: boolean | null
    ok3?: boolean | null
    isPreferred?: boolean | null
    email?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnCreateProviderSubscription = {
  onCreateProvider?: {
    __typename: 'Provider'
    id: string
    patientProviders?: {
      __typename: 'ModelPatientProviderConnection'
      nextToken?: string | null
    } | null
    appointments?: {
      __typename: 'ModelAppointmentConnection'
      nextToken?: string | null
    } | null
    problems?: {
      __typename: 'ModelProblemConnection'
      nextToken?: string | null
    } | null
    firstName?: string | null
    lastName?: string | null
    phone1?: string | null
    phone2?: string | null
    phone3?: string | null
    address?: {
      __typename: 'Address'
      street?: string | null
      city?: string | null
      state?: string | null
      zip?: string | null
    } | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnUpdateProviderSubscription = {
  onUpdateProvider?: {
    __typename: 'Provider'
    id: string
    patientProviders?: {
      __typename: 'ModelPatientProviderConnection'
      nextToken?: string | null
    } | null
    appointments?: {
      __typename: 'ModelAppointmentConnection'
      nextToken?: string | null
    } | null
    problems?: {
      __typename: 'ModelProblemConnection'
      nextToken?: string | null
    } | null
    firstName?: string | null
    lastName?: string | null
    phone1?: string | null
    phone2?: string | null
    phone3?: string | null
    address?: {
      __typename: 'Address'
      street?: string | null
      city?: string | null
      state?: string | null
      zip?: string | null
    } | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnDeleteProviderSubscription = {
  onDeleteProvider?: {
    __typename: 'Provider'
    id: string
    patientProviders?: {
      __typename: 'ModelPatientProviderConnection'
      nextToken?: string | null
    } | null
    appointments?: {
      __typename: 'ModelAppointmentConnection'
      nextToken?: string | null
    } | null
    problems?: {
      __typename: 'ModelProblemConnection'
      nextToken?: string | null
    } | null
    firstName?: string | null
    lastName?: string | null
    phone1?: string | null
    phone2?: string | null
    phone3?: string | null
    address?: {
      __typename: 'Address'
      street?: string | null
      city?: string | null
      state?: string | null
      zip?: string | null
    } | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnCreatePatientProviderSubscription = {
  onCreatePatientProvider?: {
    __typename: 'PatientProvider'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientPatientProvidersId: string
    provider?: {
      __typename: 'Provider'
      id: string
      firstName?: string | null
      lastName?: string | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      createdAt: string
      updatedAt: string
    } | null
    providerPatientProvidersId: string
    isPrimary?: boolean | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnUpdatePatientProviderSubscription = {
  onUpdatePatientProvider?: {
    __typename: 'PatientProvider'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientPatientProvidersId: string
    provider?: {
      __typename: 'Provider'
      id: string
      firstName?: string | null
      lastName?: string | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      createdAt: string
      updatedAt: string
    } | null
    providerPatientProvidersId: string
    isPrimary?: boolean | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnDeletePatientProviderSubscription = {
  onDeletePatientProvider?: {
    __typename: 'PatientProvider'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientPatientProvidersId: string
    provider?: {
      __typename: 'Provider'
      id: string
      firstName?: string | null
      lastName?: string | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      createdAt: string
      updatedAt: string
    } | null
    providerPatientProvidersId: string
    isPrimary?: boolean | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnCreateEmployerSubscription = {
  onCreateEmployer?: {
    __typename: 'Employer'
    id: string
    patientEmployers?: {
      __typename: 'ModelPatientEmployerConnection'
      nextToken?: string | null
    } | null
    name?: string | null
    phone1?: string | null
    phone2?: string | null
    phone3?: string | null
    address?: {
      __typename: 'Address'
      street?: string | null
      city?: string | null
      state?: string | null
      zip?: string | null
    } | null
    email?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnUpdateEmployerSubscription = {
  onUpdateEmployer?: {
    __typename: 'Employer'
    id: string
    patientEmployers?: {
      __typename: 'ModelPatientEmployerConnection'
      nextToken?: string | null
    } | null
    name?: string | null
    phone1?: string | null
    phone2?: string | null
    phone3?: string | null
    address?: {
      __typename: 'Address'
      street?: string | null
      city?: string | null
      state?: string | null
      zip?: string | null
    } | null
    email?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnDeleteEmployerSubscription = {
  onDeleteEmployer?: {
    __typename: 'Employer'
    id: string
    patientEmployers?: {
      __typename: 'ModelPatientEmployerConnection'
      nextToken?: string | null
    } | null
    name?: string | null
    phone1?: string | null
    phone2?: string | null
    phone3?: string | null
    address?: {
      __typename: 'Address'
      street?: string | null
      city?: string | null
      state?: string | null
      zip?: string | null
    } | null
    email?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnCreatePatientEmployerSubscription = {
  onCreatePatientEmployer?: {
    __typename: 'PatientEmployer'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientPatientEmployersId: string
    employer?: {
      __typename: 'Employer'
      id: string
      name?: string | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      email?: string | null
      createdAt: string
      updatedAt: string
    } | null
    employerPatientEmployersId: string
    occupation?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnUpdatePatientEmployerSubscription = {
  onUpdatePatientEmployer?: {
    __typename: 'PatientEmployer'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientPatientEmployersId: string
    employer?: {
      __typename: 'Employer'
      id: string
      name?: string | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      email?: string | null
      createdAt: string
      updatedAt: string
    } | null
    employerPatientEmployersId: string
    occupation?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnDeletePatientEmployerSubscription = {
  onDeletePatientEmployer?: {
    __typename: 'PatientEmployer'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientPatientEmployersId: string
    employer?: {
      __typename: 'Employer'
      id: string
      name?: string | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      email?: string | null
      createdAt: string
      updatedAt: string
    } | null
    employerPatientEmployersId: string
    occupation?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnCreateAppointmentTypeSubscription = {
  onCreateAppointmentType?: {
    __typename: 'AppointmentType'
    id: string
    appointment?: {
      __typename: 'ModelAppointmentConnection'
      nextToken?: string | null
    } | null
    code?: string | null
    description?: string | null
    comment?: string | null
    slot?: number | null
    limit?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnUpdateAppointmentTypeSubscription = {
  onUpdateAppointmentType?: {
    __typename: 'AppointmentType'
    id: string
    appointment?: {
      __typename: 'ModelAppointmentConnection'
      nextToken?: string | null
    } | null
    code?: string | null
    description?: string | null
    comment?: string | null
    slot?: number | null
    limit?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnDeleteAppointmentTypeSubscription = {
  onDeleteAppointmentType?: {
    __typename: 'AppointmentType'
    id: string
    appointment?: {
      __typename: 'ModelAppointmentConnection'
      nextToken?: string | null
    } | null
    code?: string | null
    description?: string | null
    comment?: string | null
    slot?: number | null
    limit?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnCreateAppointmentSubscription = {
  onCreateAppointment?: {
    __typename: 'Appointment'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientAppointmentsId: string
    provider?: {
      __typename: 'Provider'
      id: string
      firstName?: string | null
      lastName?: string | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      createdAt: string
      updatedAt: string
    } | null
    providerAppointmentsId: string
    appointmentType?: {
      __typename: 'AppointmentType'
      id: string
      code?: string | null
      description?: string | null
      comment?: string | null
      slot?: number | null
      limit?: string | null
      createdAt: string
      updatedAt: string
    } | null
    appointmentTypeAppointmentsId: string
    date?: string | null
    time?: string | null
    length?: number | null
    comment?: string | null
    checkin?: string | null
    checkout?: string | null
    isMissed?: boolean | null
    status?: AppointmentStatus | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnUpdateAppointmentSubscription = {
  onUpdateAppointment?: {
    __typename: 'Appointment'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientAppointmentsId: string
    provider?: {
      __typename: 'Provider'
      id: string
      firstName?: string | null
      lastName?: string | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      createdAt: string
      updatedAt: string
    } | null
    providerAppointmentsId: string
    appointmentType?: {
      __typename: 'AppointmentType'
      id: string
      code?: string | null
      description?: string | null
      comment?: string | null
      slot?: number | null
      limit?: string | null
      createdAt: string
      updatedAt: string
    } | null
    appointmentTypeAppointmentsId: string
    date?: string | null
    time?: string | null
    length?: number | null
    comment?: string | null
    checkin?: string | null
    checkout?: string | null
    isMissed?: boolean | null
    status?: AppointmentStatus | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnDeleteAppointmentSubscription = {
  onDeleteAppointment?: {
    __typename: 'Appointment'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientAppointmentsId: string
    provider?: {
      __typename: 'Provider'
      id: string
      firstName?: string | null
      lastName?: string | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      createdAt: string
      updatedAt: string
    } | null
    providerAppointmentsId: string
    appointmentType?: {
      __typename: 'AppointmentType'
      id: string
      code?: string | null
      description?: string | null
      comment?: string | null
      slot?: number | null
      limit?: string | null
      createdAt: string
      updatedAt: string
    } | null
    appointmentTypeAppointmentsId: string
    date?: string | null
    time?: string | null
    length?: number | null
    comment?: string | null
    checkin?: string | null
    checkout?: string | null
    isMissed?: boolean | null
    status?: AppointmentStatus | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnCreateFormSubscription = {
  onCreateForm?: {
    __typename: 'Form'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientFormsId: string
    name?: string | null
    date?: string | null
    status?: FormStatus | null
    url?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnUpdateFormSubscription = {
  onUpdateForm?: {
    __typename: 'Form'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientFormsId: string
    name?: string | null
    date?: string | null
    status?: FormStatus | null
    url?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnDeleteFormSubscription = {
  onDeleteForm?: {
    __typename: 'Form'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientFormsId: string
    name?: string | null
    date?: string | null
    status?: FormStatus | null
    url?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnCreateAllergySubscription = {
  onCreateAllergy?: {
    __typename: 'Allergy'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientAllergiesId: string
    allergen?: string | null
    reaction?: string | null
    comment?: string | null
    date?: string | null
    severity?: AllergySeverity | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnUpdateAllergySubscription = {
  onUpdateAllergy?: {
    __typename: 'Allergy'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientAllergiesId: string
    allergen?: string | null
    reaction?: string | null
    comment?: string | null
    date?: string | null
    severity?: AllergySeverity | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnDeleteAllergySubscription = {
  onDeleteAllergy?: {
    __typename: 'Allergy'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientAllergiesId: string
    allergen?: string | null
    reaction?: string | null
    comment?: string | null
    date?: string | null
    severity?: AllergySeverity | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnCreateVitalSubscription = {
  onCreateVital?: {
    __typename: 'Vital'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientVitalsId: string
    date?: string | null
    height?: number | null
    weight?: number | null
    bmi?: number | null
    bpd?: number | null
    bps?: number | null
    pulse?: number | null
    temp?: number | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnUpdateVitalSubscription = {
  onUpdateVital?: {
    __typename: 'Vital'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientVitalsId: string
    date?: string | null
    height?: number | null
    weight?: number | null
    bmi?: number | null
    bpd?: number | null
    bps?: number | null
    pulse?: number | null
    temp?: number | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnDeleteVitalSubscription = {
  onDeleteVital?: {
    __typename: 'Vital'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientVitalsId: string
    date?: string | null
    height?: number | null
    weight?: number | null
    bmi?: number | null
    bpd?: number | null
    bps?: number | null
    pulse?: number | null
    temp?: number | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnCreateEducationSubscription = {
  onCreateEducation?: {
    __typename: 'Education'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientEducationsId: string
    date?: string | null
    description?: string | null
    url?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnUpdateEducationSubscription = {
  onUpdateEducation?: {
    __typename: 'Education'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientEducationsId: string
    date?: string | null
    description?: string | null
    url?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnDeleteEducationSubscription = {
  onDeleteEducation?: {
    __typename: 'Education'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientEducationsId: string
    date?: string | null
    description?: string | null
    url?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnCreateProblemSubscription = {
  onCreateProblem?: {
    __typename: 'Problem'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientProblemsId: string
    provider?: {
      __typename: 'Provider'
      id: string
      firstName?: string | null
      lastName?: string | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      createdAt: string
      updatedAt: string
    } | null
    providerProblemsId: string
    date?: string | null
    updatedDate?: string | null
    description?: string | null
    code?: string | null
    severity?: ProblemSeverity | null
    status?: ProblemStatus | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnUpdateProblemSubscription = {
  onUpdateProblem?: {
    __typename: 'Problem'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientProblemsId: string
    provider?: {
      __typename: 'Provider'
      id: string
      firstName?: string | null
      lastName?: string | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      createdAt: string
      updatedAt: string
    } | null
    providerProblemsId: string
    date?: string | null
    updatedDate?: string | null
    description?: string | null
    code?: string | null
    severity?: ProblemSeverity | null
    status?: ProblemStatus | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnDeleteProblemSubscription = {
  onDeleteProblem?: {
    __typename: 'Problem'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientProblemsId: string
    provider?: {
      __typename: 'Provider'
      id: string
      firstName?: string | null
      lastName?: string | null
      phone1?: string | null
      phone2?: string | null
      phone3?: string | null
      createdAt: string
      updatedAt: string
    } | null
    providerProblemsId: string
    date?: string | null
    updatedDate?: string | null
    description?: string | null
    code?: string | null
    severity?: ProblemSeverity | null
    status?: ProblemStatus | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnCreateDocumentSubscription = {
  onCreateDocument?: {
    __typename: 'Document'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientDocumentsId: string
    date?: string | null
    subject?: string | null
    name?: string | null
    url?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnUpdateDocumentSubscription = {
  onUpdateDocument?: {
    __typename: 'Document'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientDocumentsId: string
    date?: string | null
    subject?: string | null
    name?: string | null
    url?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnDeleteDocumentSubscription = {
  onDeleteDocument?: {
    __typename: 'Document'
    id: string
    patient?: {
      __typename: 'Patient'
      id: string
      title?: Title | null
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      dob?: string | null
      sex?: Sex | null
      ssn?: string | null
      email?: string | null
      sameAsMailing?: boolean | null
      distance?: number | null
      profilePicture?: string | null
      createdAt: string
      updatedAt: string
      patientPhoneOtherId?: string | null
      patientCommunicationPreferenceId?: string | null
    } | null
    patientDocumentsId: string
    date?: string | null
    subject?: string | null
    name?: string | null
    url?: string | null
    createdAt: string
    updatedAt: string
  } | null
}
