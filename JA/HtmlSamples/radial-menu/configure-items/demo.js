$(function () {
var lastCliked = null;

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

        function setWedgeIndex(_index) {
            if (lastCliked == null) return;
            if (isNaN(_index))
            {
                alert("$$(errIntegerValue)");
                return;
            }
            $("#radialMenu").igRadialMenu("itemOption", lastCliked, "wedgeIndex", _index);
        }

        function setWedgeSpan(_span) {
            if (lastCliked == null) return;
            if (isNaN(_span) || _span<-1)
            {
                alert("$$(errIntegerValue1More)");
                return;
            }
            $("#radialMenu").igRadialMenu("itemOption", lastCliked, "wedgeSpan", _span);
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
                    click: function (evt, ui) {
                        lastCliked = evt.item.name;
                        toggleBold();
                    }
                },
                {
                    name: "button2",
                    header: "$$(btnItalic)",
                    iconUri: "http://jp.dev.igniteui.local/14-1/images/samples/radial-menu/Italic.png",
                    click: function (evt, ui) {
                        lastCliked = evt.item.name;
                        toggleItalic();
                    }
                },
            ]
        });

        // create slider for the radial menu minimum wedges
        $("#minWedgeSlider").slider({
            min: 1,
            max: 16,
            value: 8,
            step: 1,
            slide: function (evt, ui) {
                $("#radialMenu").igRadialMenu("option", "minWedgeCount", ui.value);
                $("#labMinWedgeSlider").text(ui.value);
            }
        });

        // create slider for the radial menu start angle of wedges
        $("#startAngleSlider").slider({
            min: -180,
            max: 180,
            value: -90,
            step: 1,
            slide: function (evt, ui) {
                $("#radialMenu").igRadialMenu("option", "rotationInDegrees", ui.value);
                $("#labStartAngleSlider").text(ui.value);
            }
        });
});