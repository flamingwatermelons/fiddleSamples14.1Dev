$(function () {
function toggleBold() {
            $("#htmlEditor").igHtmlEditor("executeAction", "bold");
            var cbElement = document.getElementById("cbCloseOnClick");
            if (cbElement && cbElement.checked) {
                $("#radialMenu").igRadialMenu("option", "isOpen", false);
            }
        }

        function toggleItalic() {
            $("#htmlEditor").igHtmlEditor("executeAction", "italic");
            var cbElement = document.getElementById("cbCloseOnClick");
            if (cbElement && cbElement.checked) {
                $("#radialMenu").igRadialMenu("option", "isOpen", false);
            }
        }

        // create the html editor
        $("#htmlEditor").igHtmlEditor({
            width: "98%",
            height: "450px"
        });

        $("#htmlEditor").igHtmlEditor("setContent", "some text some text some text some text ", "html");

        // create the radial menu
        $("#radialMenu").igRadialMenu({
            width: "300px",
            height: "300px",
            items:
            [
                {
                    name: "button1",
                    header: "Bold",
                    iconUri: "http://dev.igniteui.local/14-1/images/samples/radial-menu/Bold.png",
                    click: function () { toggleBold(); }
                },
                {
                    name: "button2",
                    header: "Italic",
                    iconUri: "http://dev.igniteui.local/14-1/images/samples/radial-menu/Italic.png",
                    click: function () { toggleItalic(); }
                },
            ]
        });
});