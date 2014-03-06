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

            $("#htmlEditor").igHtmlEditor("setContent", "Radial Menu コントロールは、中央ボタンの周りに項目を表示するコンテキスト メニューです。項目を円形に配置することで項目をすばやく選択できます。各項目は中央に対して均等に配置されます。Radial Menu は、数値、色値、または操作を実行する項目タイプをサポートします。サブ項目もサポートします。<br/>デフォルトで、Radial Menu の中央ボタンのみを表示します。ユーザーが中央ボタンをクリックすると、Radial Menu が開き、ルート レベルのメニュー項目を表示します。ルート レベル項目が表示されたときに中央ボタンをクリックすると、Radial Menu が閉じます。サブ項目に移動するには、外部リングの矢印をクリックし対応するサブ項目グループを表示します。サブ項目グループが表示されたときに中央ボタンをクリックすると、以前のレベルの項目を表示します。", "html");

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
                                    setFontSize(evt.newValue);
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