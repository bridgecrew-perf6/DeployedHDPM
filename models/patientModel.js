import mongoose from 'mongoose';

const Schema = mongoose.Schema;
let  patientSchema = new Schema({

    fullName: {
        type: String,
        required: true,
    },
    fullNameAr: {
        type: String
    },
    Age: {
        type: String,
        required:true,
    },
    Height: {
        type: String,
        required: true
    },
    bldGrp: {
        type: String,
        required: true,
    },
    kAllergies: {
        type:String,
        required: true
    },
    Hospital: {
        type: String,
        required: true,
    },
    contactInfo: {
        type: String,
        required: true
    },
    Gender: {
        type: String,
        required: true,
        enum: ['Male','Female'],
    },
    n_ID: {
        type: String,
        required: true,
        unique: true
    },
    Nationality: {
        type: String,
        required: true

    },
    submittedBy: {
        type: String,
        rerquired: true,
    },

    dosDialysis: {
        type: String
    },
    oKidneyDisease: {
        type: String
    },
    otherKD: {
        type: String
    },
    surgHist1: {
        type: String
    },
    surgHist2: {
        type: String
    },
    morbHype: {
        type: Boolean
    },
    morbDM: {
        type: Boolean
    },
    morbIHD: {
        type: Boolean
    },
    morbEpi: {
        type: Boolean
    },
    coMorbOther: {
        type: String
    },
    previousTr: {
        type: String
    },
    prevTrGS:{
        type: String
    },
    fitForTr: {
        type: String    
    },
    fitForTrReason: {
        type: String    
    },
    potentialRDonors: {
        type: String
    },
    currentAccess1:{
        type: String
    },
    currentAccess2:{
        type: String
    },
    currentAccess3:{
        type: String
    },
    dOfAccessCreation:{
        type: String
    },
    compInsuf: {
        type: Boolean
    },
    compInf: {
        type: Boolean
    },
    compAD: {
        type: Boolean
    },
    compDC: {
        type: Boolean
    },
    compOther:{
        type: String
    },
    previousAccess1:{
        type: String,
        Default: 'None'
    },
    previousAccess2:{
        type: String,
        Default: 'None'
    },
    previousAccess3:{
        type: String,
        Default: 'None'
    },
    previousAccess4:{
        type: String,
        Default: 'None'
    },
    Frequency:{
        type: String
    },
    Duration:{
        type: String
    },
    Dialyser:{
        type: String
    },
    antiCoagulation:{
        type: String
    },
    antiCoYes:{
        type: String
    },
    hInit: {
        type: String
    },
    hMaint:{
        type: String
    },
    LMWHval: {
        type: String
    },
    antiCoReason: {
        type: String
    },
    dryWt: {
        type: String
    },
    avgWtGain: {
        type: String
    },
    avgBP: {
        type: String
    },
    avgPulse: {
        type: String
    },
    dialAdeq :{
        type: String
    },
    dCompHead: {
        type: Boolean
    },
    dCompHG: {
        type: Boolean
    },
    dCompHOT: {
        type: Boolean
    },
    dCompHET: {
        type: Boolean
    },
    dCompMC : {
        type: Boolean
    },
    dCompAC : {
        type: Boolean
    },
    dCompVom: {
        type: Boolean
    },
    dCompSZ: {
        type: Boolean
    },
    dCompHS: {
        type: Boolean
    },
    dCompIt: {
        type: Boolean
    },
    dCompOther: {
        type: String
    },
    labDate: {
        type: String
    },
    cbcHB: {
        type: String
    },
    cbcWBC: {
        type: String
    },
    cbcPlatelets: {
        type: String
    },
    chemCrePre: {
        type: String
    },
    chemUreaPre: {
        type: String
    },
    chemCrePost: {
        type: String
    },
    chemUreaPost: {
        type: String
    },
    chemSod: {
        type: String
    },
    chemPot: {
        type: String
    },
    chemCal: {
        type: String
    },
    chemPhos: {
        type: String
    },
    chemAST: {
        type: String
    },
    chemALT: {
        type: String
    },
    chemMag:{
        type: String
    },
    chemAlb: {
        type: String
    },
    chemAlph: {
        type: String
    },
    chemOther: {
        type: String,
    },
    Siron: {
        type: String
    },
    TIBC: {
        type: String
    },
    Sferitin: {
        type: String
    },
    TSAT: {
        type: String
    },
    hormPTH: {
        type: String
    },
    hormVITD: {
        type: String
    },
    hormOther: {
        type: String
    },
    hbsAg: {
        type: String
    },
    hcvAb: {
        type: String
    },
    hcvPCR: {
        type: String
    },
    hivI_II:{
        type: String
    },
    othrSer: {
        type: String
    },
    coagPT: {
        type: String
    },
    coagPPT: {
        type: String
    },
    coagINR: {
        type: String
    },
    cMD1: {
        type: String
    },
    cMD2: {
        type: String
    },
    cMD3: {
        type: String
    },
    cMD4: {
        type: String
    },
    cMD5: {
        type: String
    },
    cMD6: {
        type: String
    },
    cMD7: {
        type: String
    },
    cMD8: {
        type: String
    },
    cMD9: {
        type: String
    },
    cMD10: {
        type: String
    },
    cMD11: {
        type: String
    },
    cMD12: {
        type: String
    },
    cMD13: {
        type: String
    },
    cMD14: {
        type: String
    },
    cMD15: {
        type: String
    },
    cMD16: {
        type: String
    },
    HepBV: {
        type: String
    },
    HepBVDate: {
        type: String
    },
    InfV: {
        type: String
    },
    InfVDate: {
        type: String
    },
    otherVC: {
        type: String
    },
    progNotes: {
        type: String
    },
    consNotes: {
        type: String
    },
    Referrals: {
        type: String
    }

    

});
export default mongoose.model('Patient',patientSchema);
