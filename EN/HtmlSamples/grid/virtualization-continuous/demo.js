$(function () {
            $("#grid").igGrid({
                autoGenerateColumns: false,
                autofitLastColumn : false,
                renderCheckboxes: true,
                width: "100%",
                height: "400px",
                virtualization: true,
                virtualizationMode: "continuous",
                columns: [
                   { headerText: "Order ID", key: "OrderID", dataType: "number", width: "7%" },
                   { headerText: "Order Date", key: "OrderDate", dataType: "date", width: "10%" },
                   { headerText: "Product Name", key: "ProductName", dataType: "string", width: "15%" },
                   { headerText: "Ship Name", key: "ShipName", dataType: "string", width: "15%" },
                   { headerText: "Total Price", key: "ExtendedPrice", dataType: "number", format: "currency", width: "8%" },
                   { headerText: "Ship Address", key: "ShipAddress", dataType: "string", width: "14%" },
                   { headerText: "Ship City", key: "ShipCity", dataType: "string", width: "11%" },
                   { headerText: "Ship Country", key: "ShipCountry", dataType: "string", width: "10%" },
                   { headerText: "Postal Code", key: "ShipPostalCode", dataType: "string", width: "10%" }
                ],
                dataSource: northwindInvoices,
                features:
                [
                    {
                        name: "Responsive",
                        enableVerticalRendering: false,
                        columnSettings: [
                            {
                                columnKey: "OrderID",
                                classes: "ui-hidden-phone"
                            },
                            {
                                columnKey: "OrderDate",
                                classes: "ui-hidden-phone"
                            },
                            {
                                columnKey: "ExtendedPrice",
                                classes: "ui-hidden-phone"
                            },
                            {
                                columnKey: "ShipAddress",
                                classes: "ui-hidden-phone"
                            },
                            {
                                columnKey: "ShipCity",
                                classes: "ui-hidden-phone"
                            },
                            {
                                columnKey: "ShipCountry",
                                classes: "ui-hidden-phone"
                            },
                            {
                                columnKey: "ShipPostalCode",
                                classes: "ui-hidden-phone"
                            }
                        ]
                    }
                ]
            });
        });