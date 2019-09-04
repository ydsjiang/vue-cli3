/**
 * Author:bing wang
 * Date  :2019/7/29
 */


export const topNav = {
    systemName: 'PLM-Risk Repository Management System',
    languageSelection: 'Please select language',
    strExit: 'Exit'
}

export const cmmConfirm = {
    title: 'Delete confirm',
    delContent: 'Are you sure to delete the record？',
    cancel: 'Cancel',
    ok: 'OK'
}

//改这个页面字段前，需全局搜索确定一遍影响
export const common = {//公共部分
    selectText: "Please select",
    selectTextoth: "Please",
    selectDate: "Select date",
    langInputPlaceholder: "Please enter",
    confirm: "Confirm",
    cancle: "Cancel",
    tableSN: "No.",
    riskSeverity: {
        s1: "S=1，Negligible",
        s2: "S=2，Minor",
        s3: "S=3，Serious",
        s4: "S=4，Critical",
        s5: "S=5，Catastrophic"
    },
    productLine: {
        Anesthesia: "Anesthesia",
        BiochemistryAnalyzer: "Biochemistry Analyzer",
        BiochemicalReagents: "Biochemical Reagents",
        CLIAReagents: "CLIA Reagents",
        Common: "Common",
        DigitalRadiography: "Digital Radiography",
        HematologyAnalyzer: "Hematology Analyzer",
        HematologyReagents: "Hematology Reagents",
        InfusionPump: "Infusion Pump",
        PatientMonitoring: "Patient Monitoring",
        Ultrasound: "Ultrasound"
    }
};
export const report = {
    langBtnSave: "Save",
    rightTip: 'Please select/create record',
    leftTitle: 'Public Reports',
    leftTitlePrivate: 'Private Reports',
    inputPlaceholder: 'Enter folder name',
    hadleRightMenu1: "Create folder",
    hadleRightMenu2: "Create report",
    hadleRightMenu3: "Rename",
    hadleRightMenu4: "Move up",
    hadleRightMenu5: "Move down",
    hadleRightMenu6: "Delete folder",
    hadleRightMenu7: "Edit report",
    hadleRightMenu8: "Delete report",
    hadleRightCopy: "Copy",
    hadleRightPaste: "Paste",
    export: "Export",
    listHeadPart1: "Create",
    listHeadPart2: "Edit",
    listHeadPart3: "Report",
    listHead2: "Filters:",
    listHead3: "Output Fields:",
    listHead4: "All",
    listHead5: "Selected",
    listName: "Report Name：",
    inputPlaceholder2: "Please enter report name",
    listErrorText1: "Report name can't be empty",
    listErrorText2: "Please enter filter condition setting",
    listErrorText3: "Submit failure",
    listErrorText4: "Delect failure because server error",
    listErrorText5: "Need to choose  one condition at least",
    langExistLinkComplaint: "All complaints  with CIR",
    cirStatus: {
        Initialize: "Initialize",
        Closed: "Closed",
        Processing: "Investigation Pending",
        ReCreate: "Rejected",
        REVIEW: "Review",
        Cancelled: "Cancelled"
    },
    attrisnull: {
        TRUE: true,
        FALSE: false
    },
    langcontainInput: "example,example"
}
export const cirSubtask = {//cir新建或者处理流程表单总字段
    langCliniealRiskSeverity: "Clinical Risk Severity",
    langBtnTransfer: "Transfer",
    langTransferHead: " Please assign user",
    langTip1: "at least four characters",//Please enter user name/ID
    langSignTip: " Need to do signature",
    langTittle1: "Information",
    langTittle2: "Assignment",
    langTittle3: "Investigation",
    langTittle4: "Part 806 Memo",
    // langTittle5: "Investigation",
    langTittle6: "Actions",
    langCirTaskNumber: "Document Number",
    langProductLine: "Product Line",
    langSource: "Source",
    langSourceNumber: "Source Number",
    langPartNumber: "Part Number",
    langSerialNumber: "Serial Number",
    langEffectivenessDate: "Effectiveness Date",
    langPartDescription: "Part Description",
    langHandleUser: "Assignee",
    langUdi: "UDI",
    langCirTaskTitle: "Title",
    langMaterialCollectedForAnalysis: "Material Collected For Analysis",
    langCirTaskDescription: "Description",
    langSolvingOrganization: "CIR Investigation Organization",
    langRoute: "Investigation",
    langAccept: "Assign Investigation To QA",
    langReject: "Reject Investigation Assignment",
    langRd: "Assign Investigation To R&D",
    langRemark: "Remarks",
    langAassignUser: "Assign User ",
    langAssignTime: "Assign Time",
    formRulesTip: {//用户填错/不填时的一些提示
        sourceNumber: "This field is required",
        productLine: "This field is required",
        source: "This field is required",
        SourceNum: "This field is required",
        partNumber: "This field is required",
        serialNumber: "This field is required",
        partDescription: "This field is required",
        udi: "This field is required",
        cirTaskDescription: "This field is required",
        cirTaskTitle: "This field is required",
        handleUser: "This field is required",
        route: "This field is required",
        materialCollectedForAnalysis: "Please choose at least one option",
        surveyProcessingResult: "This field is required",
        anyCorrectiveActionTaken: "Please choose one",
        actionReason: "This field is required",
        whetherCorrectiveTaken: "Please choose one",
        correctiveTakenDispositionA: "Please choose one",
        part806Memo: "This field is required",
        cliniealRiskSeverity: "This field is required",
        faultsNumber: "please fill in the required numbers",
        comment: "This field is required",
        transferUser: "This field is required",
        effectivenessDate: "This field is required"
    },
    langSurveyProcessingResult: "Investigation details",
    langFaultsNumber: "Faults Number",
    langAnyCorrectiveActionTaken: "Any Corrective Action Taken?",
    langActionReason: "Action Details",
    langinvestigatingUser: "Investigator",
    langinvestigatingTime: "Investigation Time",
    langRdInvestigatingUser: "R&D Investigator",
    langRdInvestigatingTime: "R&D Investigation Time",
    langNaQaReviewUser: "CIR Approval",
    langNaQaReviewTime: "Approval time",
    langqaReviewUser: "QA Reviewer",
    langqaReviewTime: "Review Time",
    langRdEngineer: "R&D Engineer",
    langComment: "Remarks",
    solvingOrganization: [//有很多默认是以这个数组第一位0为判断依据,不要改第一位的位置labei可改
        {
            label: "North America",
            keyName: "North America"
        }, {
            label: "Shenzhen",
            keyName: "Shenzhen"
        }
    ]
}
export const attachments = {
    fileName: "File Name",
    fileSize: "File Size（B）",
    createaUser: "Created By",
    modifyTime: "Created Date",
    operation: "Operation",
    add: "Create",
    update: "Update",
    delete: "Delete",
    errorText: "Are you sure to delete records?"
};
export const history = {
    property: "Property",
    unmodification: "Before Modification",
    modificationed: "After Modification",
    createdBy: "Modified By",//"Created By",
    createTime: "Modified Time"//"CreateTime"
};

//------------------------------Mr Yang----------------------------------
export const cmm = {
    langSysName: 'PLM-Quality Management System',

    langOk: 'ok',
    langCancel: 'cancel',

    langAlertTitle: "Tips",
    langErrorTitle: "Error",

    langMsgFormSubmitSuccessfully: 'Form submits successfully',
    langMsgNoResult: 'No Result',
    langMsgError: 'Error',
    langMsgCheckFormInfo: 'Please check form information!',
    langMsgPwdValidatedNot: 'The password is not validated!',
    langMsgDateUpdateSucces: 'Record updated',

    langCmmExport: 'Export',
    langCmmAllFields: 'All Fields',
    langCmmCurPageFields: 'Current Page Fields',

    langCmmYes: 'YES',
    langCmmNo: 'NO',
    langCmmUnknown: 'Unknown',
    langCmmNA: 'N/A',

    langCmmSelectionNotMade: 'Selection not made',

    langCmmAdd: 'Add',
    langCmmCreate: 'Create',

    langPhPleaseInputsContent: 'Please inputs content.',

    langMsgAlertSave: 'Please save date to the server before page close.',

    langCmmNotStrDotSend: "The empty value is not send to the server,so you can not get data.",

    langCirTblOperation: 'Operation',
    langCmmDelete: 'Delete',
    langCmmUnAssociate: "Unassociate"
};

export const country = {
    'AD': "AD - Andorra",
    'AE': "AE - Utd.Arab Emir.",
    'AF': "AF - Afghanistan",
    'AG': "AG - Antigua/Barbuda",
    'AI': "AI - Anguilla",
    'AL': "AL - Albania",
    'AM': "AM - Armenia",
    'AN': "AN - Dutch Antilles",
    'AO': "AO - Angola",
    'AQ': "AQ - Antarctica",
    'AR': "AR - Argentina",
    'AS': "AS - Samoa, America",
    'AT': "AT - Austria",
    'AU': "AU - Australia",
    'AW': "AW - Aruba",
    'AX': "AX - Aland Islands",
    'AZ': "AZ - Azerbaijan",
    'BA': "BA - Bosnia-Herz.",
    'BB': "BB - Barbados",
    'BD': "BD - Bangladesh",
    'BE': "BE - Belgium",
    'BF': "BF - Burkina Faso",
    'BG': "BG - Bulgaria",
    'BH': "BH - Bahrain",
    'BI': "BI - Burundi",
    'BJ': "BJ - Benin",
    'BL': "BL - Blue",
    'BM': "BM - Bermuda",
    'BN': "BN - Brunei Daruss.",
    'BO': "BO - Bolivia",
    'BQ': "BQ - Bonaire",
    'BR': "BR - Brazil",
    'BS': "BS - Bahamas",
    'BT': "BT - Bhutan",
    'BV': "BV - Bouvet Islands",
    'BW': "BW - Botswana",
    'BY': "BY - Belarus",
    'BZ': "BZ - Belize",
    'CA': "CA - Canada",
    'CC': "CC - Coconut Islands",
    'CD': "CD - Dem. Rep. Congo",
    'CF': "CF - CAR",
    'CG': "CG - Rep.of Congo",
    'CH': "CH - Switzerland",
    'CI': "CI - Cote d'Ivoire",
    'CK': "CK - Cook Islands",
    'CL': "CL - Chile",
    'CM': "CM - Cameroon",
    'CN': "CN - China",
    'CO': "CO - Colombia",
    'CR': "CR - Costa Rica",
    'CS': "CS - Serbia/Monten.",
    'CU': "CU - Cuba",
    'CV': "CV - Cape Verde",
    'CW': "CW - Curaçao",
    'CX': "CX - Christmas Islnd",
    'CY': "CY - Cyprus",
    'CZ': "CZ - Czech Republic",
    'DE': "DE - Germany",
    'DJ': "DJ - Djibouti",
    'DK': "DK - Denmark",
    'DM': "DM - Dominica",
    'DO': "DO - Dominican Rep.",
    'DZ': "DZ - Algeria",
    'EC': "EC - Ecuador",
    'EE': "EE - Estonia",
    'EG': "EG - Egypt",
    'EH': "EH - West Sahara",
    'ER': "ER - Eritrea",
    'ES': "ES - Spain",
    'ET': "ET - Ethiopia",
    'EU': "EU - European Union",
    'FI': "FI - Finland",
    'FJ': "FJ - Fiji",
    'FK': "FK - Falkland Islnds",
    'FM': "FM - Micronesia",
    'FO': "FO - Faroe Islands",
    'FR': "FR - France",
    'GA': "GA - Gabon",
    'GB': "GB - United Kingdom",
    'GD': "GD - Grenada",
    'GE': "GE - Georgia",
    'GF': "GF - French Guayana",
    'GG': "GG - Guernsey",
    'GH': "GH - Ghana",
    'GI': "GI - Gibraltar",
    'GL': "GL - Greenland",
    'GM': "GM - Gambia",
    'GN': "GN - Guinea",
    'GP': "GP - Guadeloupe",
    'GQ': "GQ - Equatorial Guin",
    'GR': "GR - Greece",
    'GS': "GS - S. Sandwich Ins",
    'GT': "GT - Guatemala",
    'GU': "GU - Guam",
    'GW': "GW - Guinea-Bissau",
    'GY': "GY - Guyana",
    'HK': "HK - Hong Kong",
    'HM': "HM - Heard/McDon.Isl",
    'HN': "HN - Honduras",
    'HR': "HR - Croatia",
    'HT': "HT - Haiti",
    'HU': "HU - Hungary",
    'ID': "ID - Indonesia",
    'IE': "IE - Ireland",
    'IL': "IL - Israel",
    'IM': "IM - Isle Of Man",
    'IN': "IN - India",
    'IO': "IO - Brit.Ind.Oc.Ter",
    'IQ': "IQ - Iraq",
    'IR': "IR - Iran",
    'IS': "IS - Iceland",
    'IT': "IT - Italy",
    'JE': "JE - Jersey",
    'JM': "JM - Jamaica",
    'JO': "JO - Jordan",
    'JP': "JP - Japan",
    'KE': "KE - Kenya",
    'KG': "KG - Kyrgyzstan",
    'KH': "KH - Cambodia",
    'KI': "KI - Kiribati",
    'KM': "KM - Comoros",
    'KN': "KN - St Kitts&Nevis",
    'KP': "KP - North Korea",
    'KR': "KR - South Korea",
    'KW': "KW - Kuwait",
    'KY': "KY - Cayman Islands",
    'KZ': "KZ - Kazakhstan",
    'LA': "LA - Laos",
    'LB': "LB - Lebanon",
    'LC': "LC - St. Lucia",
    'LI': "LI - Liechtenstein",
    'LK': "LK - Sri Lanka",
    'LR': "LR - Liberia",
    'LS': "LS - Lesotho",
    'LT': "LT - Lithuania",
    'LU': "LU - Luxembourg",
    'LV': "LV - Latvia",
    'LY': "LY - Libya",
    'MA': "MA - Morocco",
    'MC': "MC - Monaco",
    'MD': "MD - Moldova",
    'ME': "ME - Montenegro",
    'MF': "MF - Saint Martin",
    'MG': "MG - Madagascar",
    'MH': "MH - Marshall Islnds",
    'MK': "MK - Macedonia",
    'ML': "ML - Mali",
    'MM': "MM - Burma",
    'MN': "MN - Mongolia",
    'MO': "MO - Macau",
    'MP': "MP - N.Mariana Islnd",
    'MQ': "MQ - Martinique",
    'MR': "MR - Mauretania",
    'MS': "MS - Montserrat",
    'MT': "MT - Malta",
    'MU': "MU - Mauritius",
    'MV': "MV - Maldives",
    'MW': "MW - Malawi",
    'MX': "MX - Mexico",
    'MY': "MY - Malaysia",
    'MZ': "MZ - Mozambique",
    'NA': "NA - Namibia",
    'NC': "NC - New Caledonia",
    'NE': "NE - Niger",
    'NF': "NF - Norfolk Islands",
    'NG': "NG - Nigeria",
    'NI': "NI - Nicaragua",
    'NL': "NL - Netherlands",
    'NO': "NO - Norway",
    'NP': "NP - Nepal",
    'NR': "NR - Nauru",
    'NT': "NT - NATO",
    'NU': "NU - Niue",
    'NZ': "NZ - New Zealand",
    'OM': "OM - Oman",
    'OR': "OR - Orange",
    'PA': "PA - Panama",
    'PE': "PE - Peru",
    'PF': "PF - Frenc.Polynesia",
    'PG': "PG - Pap. New Guinea",
    'PH': "PH - Philippines",
    'PK': "PK - Pakistan",
    'PL': "PL - Poland",
    'PM': "PM - St.Pier,Miquel.",
    'PN': "PN - Pitcairn Islnds",
    'PR': "PR - Puerto Rico",
    'PS': "PS - Palestine",
    'PT': "PT - Portugal",
    'PW': "PW - Palau",
    'PY': "PY - Paraguay",
    'QA': "QA - Qatar",
    'RE': "RE - Reunion",
    'RO': "RO - Romania",
    'RS': "RS - Serbia",
    'RU': "RU - Russian Fed.",
    'RW': "RW - Rwanda",
    'SA': "SA - Saudi Arabia",
    'SB': "SB - Solomon Islands",
    'SC': "SC - Seychelles",
    'SD': "SD - Sudan",
    'SE': "SE - Sweden",
    'SG': "SG - Singapore",
    'SH': "SH - Saint Helena",
    'SI': "SI - Slovenia",
    'SJ': "SJ - Svalbard",
    'SK': "SK - Slovakia",
    'SL': "SL - Sierra Leone",
    'SM': "SM - San Marino",
    'SN': "SN - Senegal",
    'SO': "SO - Somalia",
    'SR': "SR - Suriname",
    'SS': "SS - South Sudan",
    'ST': "ST - S.Tome,Principe",
    'SV': "SV - El Salvador",
    'SX': "SX - Sint Maarten",
    'SY': "SY - Syria",
    'SZ': "SZ - Swaziland",
    'TC': "TC - Turksh Caicosin",
    'TD': "TD - Chad",
    'TF': "TF - French S.Territ",
    'TG': "TG - Togo",
    'TH': "TH - Thailand",
    'TJ': "TJ - Tajikistan",
    'TK': "TK - Tokelau Islands",
    'TL': "TL - East Timor",
    'TM': "TM - Turkmenistan",
    'TN': "TN - Tunisia",
    'TO': "TO - Tonga",
    'TP': "TP - East Timor",
    'TR': "TR - Turkey",
    'TT': "TT - Trinidad,Tobago",
    'TV': "TV - Tuvalu",
    'TW': "TW - Taiwan",
    'TZ': "TZ - Tanzania",
    'UA': "UA - Ukraine",
    'UG': "UG - Uganda",
    'UM': "UM - Minor Outl.Isl.",
    'UN': "UN - United Nations",
    'US': "US - USA",
    'UY': "UY - Uruguay",
    'UZ': "UZ - Uzbekistan",
    'VA': "VA - Vatican City",
    'VC': "VC - St. Vincent",
    'VE': "VE - Venezuela",
    'VG': "VG - Brit.Virgin Is.",
    'VI': "VI - Amer.Virgin Is.",
    'VN': "VN - Vietnam",
    'VU': "VU - Vanuatu",
    'WF': "WF - Wallis,Futuna",
    'WS': "WS - Samoa",
    'XK': "XK - Kosovo",
    'XM': "XM - Montenegro",
    'XS': "XS - Serbia",
    'YE': "YE - Yemen",
    'YT': "YT - Mayotte",
    'ZA': "ZA - South Africa",
    'ZM': "ZM - Zambia",
    'ZW': "ZW - Zimbabwe"
};

export const home = {
    langHmCustomerComplaint: 'Customer Complaint',
    langHmServiceWorkOrders: 'Service Work Orders',
    langHmSupportCase: 'Support Case',
};

export const nav = {
    langNavComplaint: 'Complaint',
    langNavReport: 'Report',
    langNavCIR: 'CIR',
};

export const qms = {
    langTblSN: 'S/N',
    langTblUniqueIdentifier: 'Document Number',
    langTblAwarenessDate: 'Become Aware Date',
    langTblComplainantFacilityName: 'Facility Name',
    langTblInvestigationDetails: 'Investigation Details',
    langTblModelName: 'Model Name',
    langTblProblemDescription: 'Complaint',

    langTblStatus: 'Status',
    langTblBYMDRPD: 'MDR Pending',
    langTblMINDRAYINVESTIGATING: 'Investigation Pending',
    langTblEVALUATION: 'Closure Pending',
    langTblMINDRAYCLOSEDPENDING: 'Closure Pending',//'Completion Pending',
    langTblCLOSED: 'Closed'
};

export const cirInCmpl = {
    langBtnSearchCirInCmpl: 'Associate CIR',
    langDlgTitle: 'Search for CIR',
    langPlhdIptCode: 'Please input CIR Number',
    langLblExistCIR: 'Exist CIR'
};

export const cmplInCirDlg = {
    langBtnSearchCmplInCir: 'Associate Complaint',
    langDlgTitle: 'Search for complaints',
    langPlhdIptCode: 'Please input Complaint Number',
    langLblExistCmpl: 'Exist Complaint'
};

export const search = {
    langSearchTxt: 'Search text:',
    langPlhIpt: 'Please input Document Number of complaint or Number of CIR',
    langSearchResult: 'The table displays the result that you searchs "{search}".',

    langSearchTblNumber: 'Document Number',
    langSearchTblStatus: 'Status',
    langSearchTblCreator: 'Creator',
    langSearchTblCreateTime: 'Create Time'
};

export const detail = {
    langSNInformation: 'Information',
    langSNAttachments: 'Attachments',
    langSNCIR: 'Related CIR',
    langAssociatedComplaints: 'Related Complaints',
    langSNHistory: 'History',
    langProcessLog: 'Process Log',

    langBtnPrint: 'Print',
    langBtnUpdate: 'Save',
    langBtnUpdateAndClose: 'Save and close',
    langBtnSubmit: 'Submit / Sign',
};

export const complaint = {
    langOk: 'ok',
    langCancel: 'cancel',
    langDocumentNumber: 'Document Number',

    langStatus: 'Status',
    langDateCreated: 'Date Created',
    langLastModified: 'Last Modified',

    langTitleComplaintInformation: 'COMPLAINT INFORMATION',
    langTitleComplaintReview: 'COMPLAINT REVIEW',
    langTitleMDRDecisionTree: 'MDR DECISION TREE',

    langTitleSubTitle: 'COMPLAINANT',

    langTitleComplaintDetails: 'COMPLAINT DETAILS',
    langTitleSourceListInformation: 'ADDITIONAL INFORMATION',

    langAlertTitle: "Tips",
    langErrorTitle: "Error",

    langMsgFormSubmitSuccessfully: '{complaintNumber} has been successfully submitted.',
    langMsgNoResult: 'No Result',
    langMsgError: 'Error',
    langMsgCheckFormInfo: 'Please check form information!',
    langMsgNoWorkItemId: "'workitemId' is empty,please hold on a moment,go back the index page,and enter into again. ",
    langMsgCurPageReadOnly: "The current page is read static only!",

    langFmLblSource: "Source",
    langFmLblCC: "Customer Complaint",
    langFmLblSC: "Support Case",
    langFmLblSWO: "Service Work Order",

    langFmLblSourceIndentiFier: 'Source ID',
    langFmLblSerialNumber: 'Serial Number',
    langFmLblProductLine: 'Product Line',
    langFmLblModelName: 'Model Name',
    langFmLblPartNumber: 'Part Number',
    langFmLblUDI: 'UDI',
    langFmLblComplainantFacilityName: 'Facility Name',
    langFmLblPartDescription: 'Product Description',
    langFmLblAwarenessDate: 'Become Aware Date',
    langFmPlhdPlsSlcDate: 'Please select a date.',
    langFmLblEventDate: 'Complaint Date',
    langFmLblInitiatorName: 'Complainant Initiator',

    langFmLblComplainantName: 'Complainant Name',
    langFmLblComplainantPhoneNumber: 'Telephone Number',
    langFmLblComplainantEmailAddress: 'Email Address',

    langFmLblComplainantCity: 'City',
    langFmLblComplainantStateTerritory: 'State/Territory',
    langFmLblComplainantCountry: 'Country',
    langFmLblComplainantZipCode: 'Postal Code',
    langFmLblComplainantStreetAddress: 'Street',

    langFmLblComplainantTitle: 'Occupation',

    langFmVldEarlierThanNow: 'Complaint Date need to be earlier than today.',//'The Value must be earlier than now.',
    langFmVldEarlierThanBecomeAwareDate: 'Complaint Date need to be earlier than Become Aware Date.',//'The Value must be earlier than now.',
    langFmVldLaterThanNow: 'The value must be later than or same as Complaint Date attribute.',// 'The value must be later than or same as Complaint Date attribute.',
};

export const cmplReview = {
    langFmBtnClearMDRTree: 'Clear MDR Tree',
    langFmLblComplaintQuestion: 'Is this a written, electronic, or oral communication that alleges deficiencies\n' +
        'related to the identity, quality, durability, reliability, safety, effectiveness, or\n' +
        'performance of this device after it was released for distribution?',

    langFmLblNoncomplaintJustification: 'Justification',
    langFmLblPleaseInputsContent: 'Please enter a justification',

    langFmLblMDRSubmitted: 'MDR Submitted',
    langFmLblMDRDetermination: 'MDR Determination',

    langFmLblUserName: 'UserName',
    langFmLblDateTime: 'Date Time',

    langFmLblMDRApproval: 'MDR Approval',
    langFmLblRecordApproval: 'Record Approval',

    langFmLblMDRApprovalTime: 'MDR Approval Time',
    langFmLblRecordApprovalTime: 'Record Approval Time',

    langFmLblClosureAppoval: 'Closure Approval',
    langFmLblClosureAppovalTime: 'Closure Approval Time',


    //新9题
    q1: 'Is Mindray considered to be the manufacturer, importer or responsible for the product?',
    q2: 'Is the device marketed in the US or similar to a device marketed in the US?',
    q3: 'Does the event necessitate remedial action to prevent an unreasonable risk of substantial harm to the public health, or has Mindray received a written request for submission of a 5-day report from the FDA?',
    q4: 'Was there death, did the patient sustain a life threatening injury or illness; have a permanent impairment of a body function or permanent damage to a body structure; or was medical or surgical intervention required to preclude permanent impairment of a body function or permanent damage to a body structure?',
    q5: 'Is there detailed information confirming that the device did NOT cause or contribute, directly or indirectly, to the event?',
    q6: 'Has the device malfunctioned where it failed to meet a performance specification or failed to perform as intended?',
    q7: 'Is it likely to cause or contribute to a death or serious injury if the malfunction were to recur?',
    q8: 'Is there reliable evidence that suggests the malfunction had been solely caused by user error?',

    rq1: 'Did the device fail to meet specifications?',
    rq2: 'Was the device being used for treatment or diagnosis?',
    rq3: 'Was there a patient adverse event reported?',
    rq4: 'Was the event attributable to the device?',

    rqTitle: 'The relationship, if any, of the device to the reported event',

    langFmLblMDRComments: 'MDR Comments',

    langFmOptPending: 'Pending',
    langFmOptMDRNotRequired: 'MDR Not Required',
    langFmOpt30DayMDRRequired: '30 Day MDR Required',
    langFmOpt5DayMDRRequired: '5 Day MDR Required',
    langFmOptFileASR: 'File ASR',
};

export const cmplDetail = {
    langFmLblAnyCorrectiveActionTaken: 'Any corrective action taken?',
    langFmLblAnyReplyToComplainant: 'Any reply to complainant?',
    langFmLblReportedIssueResult: 'Is the reported issue a result of MRNA operations or service activity?',
    langFmLblProblemDescription: 'Complaint',
    langFmLblInvestigationDetails: 'Investigation',

    langFmLblCauseCodes: 'Cause Codes',

    langFmBtn: 'Add',

    langFmTblModelName: 'Model Name',
    langFmTblModelNumber: 'Process Number',
    langFmTblCause: 'Cause',
    langFmTblCauseCode: 'Cause Code',

    langFmTblDelete: 'Delete',

    langFmLblUserName: 'UserName',
    langFmLblDateTime: 'Date Time',

    langFmLblMDRApproval: 'Closure Approval',//'Complaint Approval',
    langFmLblRecordApproval: 'Record Approval',

    langFmLblMDRApprovalTime: 'Closure Approval Time',//'Complaint Approval Time',
    langFmLblRecordApprovalTime: 'Record Approval Time',

};

export const cmplScLst = {
    langFmLblWorkOrderStatus: 'SWO Status',
    langFmLblTechnician: 'Technician',
    langFmLblServiceRegion: 'Service Region',
    langFmLblCallType: 'Call Type',
    langFmLblActivityType: 'Activity Type',
    langFmLblProblemReproduced: 'Reported Problem Reproduced',
    langFmLblInternalNotes: 'Internal Notes',
    langFmLblWorkOrderDetails: 'Work Order Line Items',

    langTblLineNumber: 'Line Number',
    langTblWorkOrderNumber: 'Work Order Number',
    langTblLineQuantity: 'Quantity',
    langTblPartRemovedPartNumber: 'Installed Part Number',
    langTblPartRemovedPartName: 'Installed Part Description',

    langFmLblCaseStatus: 'Case Status',
    langFmLblCallDisposition: 'Call Disposition',
    langFmLblServiceActivity: 'Service Activity'
};

export const pwdVld = {
    langFmLblMdrSignature: 'Signature',
    langFmLblPwdIsInCorrect: 'password is incorrect',
    langFmPlEnterPwd: 'Enter Password'
};

export const cplAttachments = {
    langAttachmentsTitle: 'Attachments'
}

export const cirIndex = {
    langCirLblStatic: 'Status',
    langCirTblNumber: 'Document Number',
    langCirTblNoDot: 'NO.',
    langCirTblSource: 'Source',
    langCirTblSourceNumber: 'Source Number',
    langCirTblStatus: 'Status',
    langCirTblJobTitle: 'Title',
    langCirTblSecondarySector: 'Secondary Sector',
    langCirTblCurrentHandler: 'Current Handler',
    langCirTblTaskHandler: 'Task Handler',
    langCirTblSubmiter: 'Submitter',
    langCirTblSubmitTime: 'Submit Time',

    langCirSvNoReponseUrl: 'The server does not response a url.',

    langAlertMsgNotDeleteRecord: 'The CIR could not be deleted from the list for it\'s initiated by this complaint.'
};

export const fmVldTypeMsg = {
    langVmEmailAddress: 'Email Address is not a valid email'
};

export const fmVldtRequireMsg = {
    //complaint information form
    langVmSource: 'Source is required',
    langVmSourceIdentifier: 'Source ID is required',
    langVmSerialNumber: 'Serial Number is required',
    langVmProductLine: 'Product Line is required',
    langVmModelName: 'Model Name is required',
    langVmPartNumber: 'Part Number is required',
    langVmUdi: 'UDI is required',
    langVmComplainantFacilityName: 'Facility Name is required',
    langVmPartDescription: 'Product Description is required',
    langVmAwarenessDate: 'Become Aware Date is required',
    langVmEventDate: 'Complaint Date is required',
    langVmInitiatorName: 'Complainant Initiator is required',
    langVmComplainantName: 'Complainant Name is required',
    langVmComplainantPhoneNumber: 'Telephone Number is required',
    langVmComplainantEmailAddress: 'Email Address is required',
    langVmComplainantZipCode: 'Postal Code is required',
    langVmStreet: 'Street is required',
    langVmTitle: 'Title is required',
    langVmCity: 'City is required',
    langVmComplainantState: 'State/Territory is required',
    langVmComplainantCountry: 'Country is required',

    //review
    langVmComplaintQuestion: 'Complaint Question is required',
    langVmNonComplaintJustification: 'Justification is required',

    //MDR DECISION TREE
    langVmQ1: 'Question is required',
    langVmQ2: 'Question is required',
    langVmQ3: 'Question is required',
    langVmQ4: 'Question is required',
    langVmQ5: 'Question is required',
    langVmQ6: 'Question is required',
    langVmQ7: 'Question is required',
    langVmQ8: 'Question is required',
    langVmQ9: 'Question is required',
    langVmQ10: 'Question is required',
    // isRequiredQ11: null,
    langVmRq1: 'Question is required',
    langVmRq2: 'Question is required',
    langVmRq3: 'Question is required',
    langVmRq4: 'Question is required',
    langVmWhetherNeedReport: 'Whether Need Report is required',
    // mdrTreeProcess:'',//判定树的结果
    langVmMdrComments: 'Mdr Comments is required',

    langVmAnyCorrectiveActionTaken: 'Any Corrective Action Taken is required',
    langVmAnyReplyToComplainant: 'Any Reply To Complainant is required',
    langVmAnyReportedIssueResult: 'This field is required',

    langVmProblemDescription: 'Complaint is required',
    langVmInvestigationDetails: 'Investigation is required',

    langVmCaseCodeTbl: 'A Cause Code is required to close the complaint.',

    //source list
    langVmWorkOrderStatus: 'SWO Status is required',
    langVmTechnician: 'Technician is required',
    langVmServiceRegion: 'Service Region is required',
    langVmCallType: 'Call Type is required',
    langVmActivityType: 'Activity Type is required',
    langVmProblemReproduced: 'Reported Problem Reproduced is required',

    langVmServiceActivity: 'Service Activity is required',

    // langVmProblemDescription: true,
    // langVmInvestigationDetails: true,
    langVmInternalNotes: 'Internal Notes is required',
    // isRequiredWorkOrderDetails: true,
    langVmCaseStatus: 'Case Status is required',
    langVmCallDisposition: 'Call Disposition is required',

    swo: {
        //complaint information form
        langVmSerialNumber: 'Work Order SN Not Found',
        langVmModelName: 'Work Order Model Name Not Found',
    },

    sc: {
        //complaint information form
        langVmModelName: 'Support Case Model Name Not Found',
        langVmSerialNumber: 'Support Case SN Not Found',
        langVmComplainantFacilityName: 'Support Case Account Name Not Found',
        langVmComplainantName: 'Support Case Contact Not Found',
        langVmComplainantPhoneNumber: 'Support Case Contact # Not Found',
        langVmComplainantEmailAddress: 'Support Case Contact Email Not Found',
        langVmStreet: 'Support Case Street Not Found',
        langVmTitle: 'Support Case Title Not Found',
        langVmCity: 'Support Case City Not Found field',
        langVmComplainantState: 'Support Case State Not Found',
        langVmComplainantZipCode: 'Support Case Zip Not Found',
        langVmComplainantCountry: 'Support Case Country Not Found'
    },

    langVmPwdChk: 'Signature is required',
    langVmPassword: 'Password is required'

};

export const processLog = {
    langPLIndex: 'No.',
    langPLNamenode: 'Action',//'Node name',
    langPLType: 'Operation',//'Operation type',
    langPLOpinion: 'Remarks',
    langPLOperation: 'User',//'Operator',
    langPLOperating: 'Date / Time',//'Operating time'
};

  //--------------------------End Mr Yang----------------------------------


