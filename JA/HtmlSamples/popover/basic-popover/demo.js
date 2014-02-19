$( function ()
        {
            var igShare = $( '#ig' );
            var popOver = $( '#popoverTooltip' ).igPopover( {
                direction: "right",
                position: "start",
                headerTemplate:{
                    closeButton: true,
                    title: 'Google Map を使用して市の位置を表示します。',
                },
                closeOnBlur: false,
                animationDuration: 0,
                maxHeight: null,
                maxWidth: 260,
                contentTemplate: contentFunction,
                selectors: "[title]",
                containment: $( '#popoverTooltip' ),
                showOn: "focus"
            } );
        } );
        function contentFunction()
        {
            var imgTemplate = "<img class='map' alt='${value}' src='http://maps.google.com/maps/api/staticmap?zoom=10&size=250x250&maptype=terrain&sensor=false&center=${value}'>";
            var element = $( this );
            var data = [{ value: element[0].value }];
            return $.ig.tmpl( imgTemplate, data );
        }