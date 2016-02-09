//DELETE THIS FILE ONCE SET UP

define(['react', 'game/test3'], function(React, x) {

    x = x;

    var MainSheet = React.createClass({
        render: function(){
            /** @type {Array} yearNodes Renders YearSheet and passes down year and months to YearSheet */
            var yearNodes = this.props.data.map(function(data){
                return (
                    <div>
                        {data}
                        {x}
                    </div>
                );
            });
            return (
                <div className = "yearNodes">
                    {yearNodes}
                </div>
            );
        }
    });

    return MainSheet;
});
