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

            $("#htmlEditor").igHtmlEditor("setContent", "The xamRadialMenu control is essentially a context menu presenting its items in a circular arrangement around a center button. The circular arrangement of the items speeds up items selection, because each item is equally positioned in relation to the center. The xamRadialMenu supports different item types for choosing numerical values, color values or performs actions. Sub-Items are also supported.<br/>By default the only visible part of the xamRadialMenu is the center button. When the user click on the center button, the xamRadialMenu opens and shows the root level menu items. Clicking on the center button when the root level items are shown closes the xamRadialMenu. To navigate Sub-Items the user should click the arrows in the outer ring and the corresponding sub-items group will be displayed. Clicking on the center button when a sub-items group is shown will display the items on the previous level.", "html");

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
                        iconUri: "http://dev.igniteui.local/14-1/images/samples/radial-menu/Size.png",
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
                        iconUri: "http://dev.igniteui.local/14-1/images/samples/radial-menu/Font.png",
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