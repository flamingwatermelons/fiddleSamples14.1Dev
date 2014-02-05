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

        $("#htmlEditor").igHtmlEditor("setContent", "$$(ContentText)", "html");

        // create the radial menu
        $("#radialMenu").igRadialMenu({
            width: "300px",
            height: "300px",
            items:
            [
                {
                    name: "button1",
                    header: "$$(btnBold)",
                    iconUri: "http://jp.dev.igniteui.local/14-1/images/samples/radial-menu/Bold.png",
                    click: function () { toggleBold(); }
                },
                {
                    name: "button2",
                    header: "$$(btnItalic)",
                    iconUri: "http://jp.dev.igniteui.local/14-1/images/samples/radial-menu/Italic.png",
                    click: function () { toggleItalic(); }
                },
            ]
        });

        // create slider for the horizontal radial menu sizing
        $("#sliderWidth").slider({
            min: 100,
            max: 600,
            value: 300,
            step: 1,
            slide: function (evt, ui) {
                $("#radialMenu").igRadialMenu("option", "width", ui.value);
                $("#labSliderWidth").text(ui.value);
            }
        });

        // create slider for the vertical radial menu sizing
        $("#sliderHeight").slider({
            min: 100,
            max: 600,
            value: 300,
            step: 1,
            slide: function (evt, ui) {
                $("#radialMenu").igRadialMenu("option", "height", ui.value);
                $("#labSliderHeight").text(ui.value);
            }
        });
});