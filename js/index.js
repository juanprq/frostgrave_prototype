(function() {
   $(function() {
        $('select').material_select();
        $('.button-collapse').sideNav();
        $('ul.tabs').tabs();

        var wizardTitle = $('#wizard-title'),
            baseTitle = wizardTitle.data('base');
        wizardTitle.text(baseTitle);

        $('input#wizard-name').change(function() {
            var wizardName = $(this).val(),
                newTitle = baseTitle + ': ' + wizardName;

            wizardTitle.text(newTitle);
        });
   });
})();
