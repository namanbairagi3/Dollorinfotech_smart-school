$(document).ready(function () {
    $(document).on('change', '#currencySwitcher', function (e) {
        $.ajax({
            type: 'POST',
            url: baseurl + 'admin/currency/change_currency',
            data: {
                currency_id: $(this).val()
            },
            dataType: 'JSON',
            beforeSend: function () {
                // Add any pre-request logic here if needed
            },
            success: function (data) {
                successMsg(data.message);
                if (data.status) {
                    window.location.reload(true);
                }
            },
            error: function (xhr) {
                // if error occurred
                alert("Error occurred. Please try again.");
            },
            complete: function () {
                // Add any post-request logic here if needed
            }
        });
    });

    var $calendar_event = $('#calendar_event');

    $calendar_event.fullCalendar({
        viewRender: function (view, element) {
            // Add any view render logic here if needed
        },
        header: {
            center: 'title',
            right: '',
            left: 'prev,next'
        },
        firstDay: start_week,
        displayEventTime: false,
        defaultDate: today,
        defaultView: viewtitle,
        selectable: true,
        selectHelper: true,
        views: {
            month: {
                // name of view
                titleFormat: 'MMMM YYYY'
                // other view-specific options here
            }
        },
        timezone: 'UTC',
        draggable: false,
        locale: 'en',
        editable: false,
        eventLimit: false, // allow "more" link when too many events
        events: {
            url: base_url + 'admin/alumni/getevent'
        },
        eventRender: function (event, element) {
            element.attr('title', event.title);
            element.attr('data-toggle', 'tooltip');
            element.click(function () {
                view_event_data(event.id);
            });
        }
    });
});