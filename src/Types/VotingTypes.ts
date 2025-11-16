export interface IVotingForm {
  voterPhoneNumber: string;
  voterAge: number;
  voterSex: string;
  voterDistrict: string;
  voterPoliticalParty: string;
}
export interface IFormResults {
  voterDistrict: string;
  voterPoliticalParty: string;
  count: number;
  totalRows: number;
}
