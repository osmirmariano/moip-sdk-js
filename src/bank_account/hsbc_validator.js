(function(window) {
  var Moip = window.Moip || {};
  window.Moip = Moip;

  function HSBCValidator() {
    if ( !( this instanceof HSBCValidator ) ) {
      return new HSBCValidator();
    }
  }

  HSBCValidator.prototype = {
    agencyNumberIsValid: function(agencyNumber) {
      return Moip.CommonBankAccountValidator.agencyNumberIsValid(agencyNumber);
    },

    agencyCheckNumberIsValid: function(agencyCheckNumber) {
      return Moip.CommonBankAccountValidator.agencyCheckNumberIsValid(agencyCheckNumber);
    },

    accountNumberIsValid: function(accountNumber) {
      return accountNumber.length == 11 && Moip.CommonBankAccountValidator.accountNumberIsValid(accountNumber);
    },

    accountCheckNumberIsValid: function(accountCheckNumber) {
      return accountCheckNumber.length == 2 && Moip.GenericBankAccountValidator.accountCheckNumberIsValid(accountCheckNumber);
    }
  };

  Moip.HSBCValidator = HSBCValidator();

})(window);