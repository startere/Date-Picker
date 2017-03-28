function solve() {
    $.fn.datepicker = function () {
        var MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var WEEK_DAY_NAMES = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

        Date.prototype.getMonthName = function () {
            return MONTH_NAMES[this.getMonth()];
        };

        Date.prototype.getDayName = function () {
            return WEEK_DAY_NAMES[this.getDay()];
        };

        // you are welcome :)
        var date = new Date();
        console.log(date.getDayName());
        console.log(date.getMonthName());

        var $Date = $('#date')[0];

        var datePickerWrapper = document.createElement('div');

        datePickerWrapper.className = 'datepicker-wrapper';

        var $DateClone = $Date.cloneNode(true);

        $Date.replaceWith(datePickerWrapper);
        
        datePickerWrapper.appendChild($DateClone);

        console.log($DateClone);
    };
}

module.exports = solve;