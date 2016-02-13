
//City Constructor pulls data from database and builds cities
//based off of ajax'd data

define(['react', 'game/city/cityConstructor'], function(React, City) {
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

            return (
                <div className = "MainSheet">
                    This is a test: {y}
                </div>
            );
        }
    });

    return MainSheet;
});
