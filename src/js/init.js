//Init functions
$(document).ready(function(){
    preloader = new $.materialPreloader({
        position: 'top',
        col_1: '#f44336!important',
        col_2: '#ffeb3b!important',
        col_3: '#03a9f4!important',
        col_4: '#4caf50!important',
        fadeIn: 30
    });
    $('.dropdown-button').dropdown({
      constrain_width: false,
      hover: false,
      belowOrigin: true,
      alignment: 'left'
    });
    $('ul.tabs').tabs();
    picker = $('.datepicker').pickadate({
      monthsFull: ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombeie', 'Noimebrie', 'Decembrie'],
      weekdaysShort: ['Dum', 'Lun', 'Mar', 'Mie', 'Joi', 'Vin', 'Sâm'],
      weekdaysFull: ['Dum', 'Lun', 'Mar', 'Mie', 'Joi', 'Vin', 'Sâm'],
      firstDay: 1,
      today: 'azi',
      clear: 'șterge',
      close: 'închide',
      formatSubmit: 'dd/mm/yyyy',
      container: 'body'
    });
});
