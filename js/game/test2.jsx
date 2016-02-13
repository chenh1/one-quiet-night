//DELETE THIS FILE ONCE SET UP

define(['react', 'game/test3'], function(React, x) {

    x = x;

    var MainSheet = React.createClass({
        render: function(){
            /** @type {Array} yearNodes Renders YearSheet and passes down year and months to YearSheet */
            var y = this.props.data.map(function(dataObj, i){
                return (
                    <div key = {i}>
                        {dataObj.id}
                        {dataObj.name}
                    </div>
                );
            });

            console.log(y);

            return (
                <div className = "MainSheet">
                    This is a test: {y}
                </div>
            );
        }
    });

    return MainSheet;
});
