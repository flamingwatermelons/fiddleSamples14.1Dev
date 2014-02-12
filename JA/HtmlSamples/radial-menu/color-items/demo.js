$(function () {
            function rgbaToRgb(rgbaColor) {
                // remove the "a" from "rgba"
                var result = rgbaColor.replace("rgba(", "rgb(");
                // remove the alpha channel
                result = result.replace(",1)", ")");
                return result;
            }

            function setForeColor(color) {
                $("#htmlEditor").igHtmlEditor("executeAction", "forecolor", color);
            }

            function setBackColor(color) {
                $("#htmlEditor").igHtmlEditor("executeAction", "backcolor", color);
            }

            // create the html editor
            $("#htmlEditor").igHtmlEditor({
                width: "98%",
                height: "450px"
            });

            $("#htmlEditor").igHtmlEditor("setContent", "$$(ContentText)", "html");

            // create the radial menu
            $('#radialMenu').igRadialMenu({
                width: "300px",
                height: "300px",
                items:
                [
                    {
                        // defining color item 1
                        type: "coloritem",
                        header: "$$(btnForeground)",
                        iconUri: "http://jp.dev.igniteui.local/14-1/images/samples/radial-menu/FColor.png",
                        color: "rgba(0,0,0,1)",
                        colorChanged: function (evt) {
                            var colValue = evt.newValue;
                            colValue = rgbaToRgb(colValue);
                            setForeColor(colValue);
                        },
                        // defining color wells as sub-items for color item 1
                        items:
                        [
                            {
                                type: "colorwell",
                                color: "#FFFF00"
                            },
                            {
                                type: "colorwell",
                                color: "#C00000"
                            },
                            {
                                type: "colorwell",
                                color: "#008000"
                            },
                            {
                                type: "colorwell",
                                color: "#002060"
                            },
                            {
                                type: "colorwell",
                                color: "#000000"
                            },
                            {
                                type: "colorwell",
                                color: "#FFFFFF"
                            },
                        ]
                    },
                    {
                        // defining color item 2
                        type: "coloritem",
                        header: "$$(btnBackground)",
                        iconUri: "http://jp.dev.igniteui.local/14-1/images/samples/radial-menu/BColor.png",
                        color: "rgba(255,255,255,1)",
                        colorChanged: function (evt) {
                            var colValue = evt.newValue;
                            colValue = rgbaToRgb(colValue);
                            setBackColor(colValue);
                        },
                        // defining color wells as sub-items for color item 2
                        items:
                        [
                            {
                                type: "colorwell",
                                color: "#FFFF00"
                            },
                            {
                                type: "colorwell",
                                color: "#C00000"
                            },
                            {
                                type: "colorwell",
                                color: "#008000"
                            },
                            {
                                type: "colorwell",
                                color: "#002060"
                            },
                            {
                                type: "colorwell",
                                color: "#000000"
                            },
                            {
                                type: "colorwell",
                                color: "#FFFFFF"
                            },
                        ]
                    }
                ]
            });
        });