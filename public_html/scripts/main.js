var showNotifications = false
var myInterval

function triggerPush(userText=null) {
    if (userText)
        body = userText
    else
        body = "How's it hangin'?"
    return function(){
        console.log("Fired!");
        Push.create('Hello world!', {
            body: body,
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
}

function timedtriggerPush(userText) {
    console.log("Timed")
    myInterval = setInterval(triggerPush(userText), 6000);

}

$(document).ready(function() {
    // Demo button
    $("#demo_notify").click(triggerPush());

    // Timed Button
    var triggerPushBtn = document.getElementById('timed_notify');
    triggerPushBtn.addEventListener('click', () => {
        // Check if there is any text in the text box
        var e = $(this).find("input[name='q']"), userText = e.val();
	    if (userText.length ==0) {
            e.attr("error", true);
            return false;
            }
        else{
            // There is text in the box
            timedtriggerPush(userText)
        }

    })
});
