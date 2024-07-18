const moment = require("moment");

checkTrial = (trialDays, trialStartDate) => {
    const trialDate = moment(trialStartDate, 'DD-MM-YYYY');
    const today = moment();
    let dateDiff = today.diff(trialDate, 'days');
    
    
    return trialDays - dateDiff;
};

module.exports = { checkTrial };
