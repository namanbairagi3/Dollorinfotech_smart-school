var baseurl = "https://demo.smart-school.in/";
            var start_week = 1;
            var chk_validate = "XC34Y6-T8RM64-3D4DM5-dHVybmIrbldVN0hLdlJiQ010WEYzczdmTjQrRmFFT1dCNmJzYjNDNzlhOD0=";
 
            $.widget.bridge('uibutton', $.ui.button);

            $('body').tooltip({
                selector: '[data-toggle]',
                trigger: 'click hover',
                placement: 'top',
                delay: {
                    show: 50,
                    hide: 400
                }
            })

            $(function () {
                $('.languageselectpicker').selectpicker();
            });

            $(document).ready(function () {
                $(".studentsidebar").mCustomScrollbar({
                    theme: "minimal"
                });

                $('.studentsideclose, .overlay').on('click', function () {
                    $('.studentsidebar').removeClass('active');
                    $('.overlay').fadeOut();
                });

                $('#sidebarCollapse').on('click', function () {
                    $('.studentsidebar').addClass('active');
                    $('.overlay').fadeIn();
                    $('.collapse.in').toggleClass('in');
                    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
                });
            });