var showNotifications = false
var myInterval

function triggerPush() {
    console.log("Fired!");
    Push.create('Hello world!', {
        body: 'How\'s it hangin\'?',
        icon: '/images/icon.png',
        link: '/#',
        timeout: 4000,
        onClick: function () {
            console.log("Fired!");
            window.focus();
            this.close();
        },
        vibrate: [200, 100, 200, 100, 200, 100, 200]
    });
}

function timedtriggerPush() {
    console.log("Timed")
    myInterval = setInterval(triggerPush,6000);
//    triggerPush()
}

$(document).ready(function() {
    $("#demo_notify").click(triggerPush);

    var triggerPushBtn = document.getElementById('timed_notify');
    triggerPushBtn.addEventListener('click', () => {
        timedtriggerPush()
    })

    $(document).on("click", "form.search", function() {
	    var e = $(this).find("input[name='q']"), k = e.val();
	    if (k.length ==0) {
            e.attr("error", true);
            return false;
	    }
	});
});
