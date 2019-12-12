var showNotifications = false
var myInterval

function triggerPush(userText=null) {
    if (userText){
        subject = "Hey!"
        body = userText
    }
    else{
        subject = 'Hello world!'
        body = "How's it hangin'?"
    }
    return function(){
        console.log("Fired!");
        Push.create(subject, {
            body: body,
            icon: '/template/assets/images/icon.png',
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

function timedtriggerPush(userText, delay) {
    Push.create('Hey', {
        body: userText,
        icon: '/template/assets/images/icon.png',
        link: '/#',
        timeout: 60000,
        onClick: function () {
            console.log("Fired!");
            window.focus();
            this.close();
        },
        vibrate: [200, 100, 200, 100, 200, 100, 200]
    });
    console.log("Timed")
    myInterval = setInterval(triggerPush(userText), delay);

}

function clearNotifications(){
    window.clearInterval(myInterval);
}

$(document).ready(function() {
    // Demo button
    $("#demo_notify").click(triggerPush());

    $("#clear_notifications").click(clearNotifications);

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
            var idElement = document.getElementById("time-value");
            var timeElementValue = idElement.options[idElement.selectedIndex].value;
            console.log("Time Value: " + timeElementValue)

            var idTimeElement = document.getElementById("time-element");
            var timeElementType = idTimeElement.options[idTimeElement.selectedIndex].value;
            console.log("Time Element: " + timeElementType)
            // Milliseconds
            var delay = timeElementValue * timeElementType
            timedtriggerPush(userText, delay)
        }

    })
});
