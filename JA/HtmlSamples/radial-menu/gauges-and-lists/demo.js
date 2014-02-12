$(function () {
function setFontSize(_size) {
            if (_size == null) return;
            $("#htmlEditor").igHtmlEditor("executeAction", "fontsize", _size);
        }

        function setFontFamily(_font) {
            if (_font == null) return;
            $("#htmlEditor").igHtmlEditor("executeAction", "fontname", _font);
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
            minWedgeCount: 1,
            items:
            [
                {
                    type: "numericitem",
                    header: "Font Size",
                    iconUri: "http://jp.dev.igniteui.local/14-1/images/samples/radial-menu/Size.png",
                    value: "8",
                    items:
                    [
                        {
                            name: "gauge1",
                            type: "numericgauge",
                            ticks: "8pt,9pt,10pt,12pt,14pt,16pt,18pt",
                            value: 8,
                            valueChanged: function (evt, ui) {
                                alert("valueChanged - " + evt.newValue);
                                //setFontSize(evt.newValue);
                            }
                        }
                    ]
                },
                {
                    type: "list",
                    header: "Font",
                    iconUri: "http://jp.dev.igniteui.local/14-1/images/samples/radial-menu/Font.png",
                    items:
                    [
                        {
                            header: "Arial",
                            tag: "Arial",
                            click: function (evt, ui) { setFontFamily(evt.item.tag); }
                        },
                        {
                            header: "Calibri",
                            tag: "Calibri",
                            click: function (evt, ui) { setFontFamily(evt.item.tag); }
                        },
                        {
                            header: "Comic Sans",
                            tag: "Comic Sans MS",
                            click: function (evt, ui) { setFontFamily(evt.item.tag); }
                        },
                        {
                            header: "Consolas",
                            tag: "Consolas",
                            click: function (evt, ui) { setFontFamily(evt.item.tag); }
                        },
                        {
                            header: "Courier New",
                            tag: "Courier New",
                            click: function (evt, ui) { setFontFamily(evt.item.tag); }
                        },
                        {
                            header: "Segoe",
                            tag: "Segoe UI",
                            click: function (evt, ui) { setFontFamily(evt.item.tag); }
                        },
                        {
                            header: "Tahoma",
                            tag: "Tahoma",
                            click: function (evt, ui) { setFontFamily(evt.item.tag); }
                        },
                        {
                            header: "Times",
                            tag: "Times New Roman",
                            click: function (evt, ui) { setFontFamily(evt.item.tag); }
                        },
                        {
                            header: "Verdana",
                            tag: "Verdana",
                            click: function (evt, ui) { setFontFamily(evt.item.tag); }
                        }
                    ]
                },
            ]
        });
});