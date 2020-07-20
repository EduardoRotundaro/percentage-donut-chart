// Author: Eduardo Henrique Rotundaro
// Version: 1.0.0
(function(window){
    function percentageDonutChart() {
        var _percentageDonutChart = {
            createElement() {
                var tags = '<div class="svxmji">';
                tags += '<div class="wqzglk fwedya"></div>';
                tags += '<div class="wqzglk ynpsbf"></div>';
                tags += '<div class="vpfqka"><span></span></div>';
                tags += '</div>';
                return tags;
            },
            calculateCirclesShift(value) {
                var shifts = { ynpsbf: null, fwedya: null };
                var degrees = null;
                if(value>=50){
                    degrees = (360 * value) / 100;
                    shifts.ynpsbf = degrees.toFixed(1);
                    shifts.fwedya = '90';
                    return shifts;
                }
                degrees = ((90 * value) / 25) + 90;
                shifts.ynpsbf = '0';
                shifts.fwedya = degrees.toFixed(1);
                return shifts;
            },
            createStyle(options) {
                var totalShifts = this.calculateCirclesShift(options.value);
                var styleTag = '<style>';
                styleTag += '.svxmji { -webkit-box-sizing: border-box; box-sizing: border-box; position: relative; border-radius: 50%; overflow: hidden; width: 200px; height: 200px; background: ' + options.backgroundColor + '; } ';
                styleTag += '.svxmji .wqzglk { position: absolute; top: 0; left: 0; width: 100%; height: 100%; } ';
                styleTag += '.svxmji .vpfqka { position: absolute; border-radius: 50%; top: 25px; left: 25px; width: 150px; height: 150px; background: ' + options.textBackgroundColor + '; } ';
                styleTag += '.svxmji .vpfqka span { display: block; text-align: center; font-size: 40px; line-height: 150px; color: ' + options.textColor + '; } ';
                styleTag += '.svxmji .vpfqka span:after { content: "' + options.value + '%"; font-family: Arial, Helvetica, sans-serif; font-weight: bold; } ';
                if(options.value>=50){
                    styleTag += '.svxmji .wqzglk.fwedya { clip: rect(0 200px 100px 0); -webkit-transform: rotate(' + totalShifts.fwedya + 'deg); -ms-transform: rotate(' + totalShifts.fwedya + 'deg); transform: rotate(' + totalShifts.fwedya + 'deg); background: ' + options.chartColor + '; } ';
                    styleTag += '.svxmji .wqzglk.ynpsbf { clip: rect(0 100px 200px 0); -webkit-transform: rotate(' + totalShifts.ynpsbf + 'deg); -ms-transform: rotate(' + totalShifts.ynpsbf + 'deg); transform: rotate(' + totalShifts.ynpsbf + 'deg); background: ' + options.chartColor + '; } ';
                }
                else{
                    styleTag += '.svxmji .wqzglk.fwedya { clip: rect(0 200px 100px 0); -webkit-transform: rotate(' + totalShifts.fwedya + 'deg); -ms-transform: rotate(' + totalShifts.fwedya + 'deg); transform: rotate(' + totalShifts.fwedya + 'deg); background: ' + options.backgroundColor + '; } ';
                    styleTag += '.svxmji .wqzglk.ynpsbf { clip: rect(0 100px 200px 0); -webkit-transform: rotate(' + totalShifts.ynpsbf + 'deg); -ms-transform: rotate(' + totalShifts.ynpsbf + 'deg); transform: rotate(' + totalShifts.ynpsbf + 'deg); background: ' + options.backgroundColor + '; } ';
                    styleTag += '.svxmji { background: ' + options.chartColor + '; } ';
                }
                styleTag += '</style>';
                return styleTag;
            },
            validateOptions(options) {
                var error = null;
                var onlyNumbers = new RegExp(/^\d+$/);
                if(!options) error = 'The options object is required. See README.md file for more information.';
                if(!options.targetId) error = 'The target ID is required. See README.md file for more information.';
                if(!options.value===null || !options.value===undefined) error = 'The value of percentage is required. See README.md file for more information.';
                if(!onlyNumbers.test(options.value.toString()) || (options.value<0 || options.value>100)) error = 'The value of percentage must be an integer from 0 to 100. See README.md file for more information.';
                if(error) throw new Error(error);
            },
            getStyleSettings(options) {
                var settings = {};
                settings.value = options.value;
                settings.chartColor = options.chartColor? options.chartColor : '#212F3C';
                settings.backgroundColor = options.backgroundColor? options.backgroundColor : '#e1e1e1';
                settings.textBackgroundColor = options.textBackgroundColor? options.textBackgroundColor : '#fff';
                settings.textColor = options.textColor? options.textColor : '#212F3C';
                return settings;
            },
            create(options) {
                this.validateOptions(options);
                var styleSettings = this.getStyleSettings(options);
                var style = this.createStyle(styleSettings);
                var element = this.createElement(styleSettings);
                document.getElementById(options.targetId).innerHTML = (style + element);
            }
        }
        return _percentageDonutChart;
    }
    if(typeof(window.PercentageDonutChart) === 'undefined'){
        window.PercentageDonutChart = percentageDonutChart();
    }
})(window);