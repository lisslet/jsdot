type Target = Dates | Date;

const suffixes = [null, 'st', 'nd', 'rd'];
const lastDate = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const lastDateSum = [31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
const apm = ['am', 'pm', 'am'];
const APM = ['AM', 'PM', 'AM'];

export class Dates extends Date {
    /**
     * format a local time/date
     * @see https://www.php.net/manual/en/function.date.php
     * @param format
     * @param date
     */
    static format(format: string, date: Target = new Date) {
        const end = format.length;
        let current = -1;
        let char;
        let converted = '';
        while (++current < end) {
            char = format.charAt(current);
            converted += Dates[char] ? Dates[char](date) : char;
        }
        return converted;
    }

    /**
     * format a local time/date
     * @see https://www.php.net/manual/en/function.date.php
     * @param format
     */
    format(format: string) {
        return Dates.format(format, this);
    }

    //////////////////////////////
    // Day
    //////////////////////////////

    /**
     * Day of the month, 2 digits with leading zeros
     * @param date
     */
    static d(date: Target) {
        return zerofill(date.getDate());
    }

    /**
     * Day of the month, 2 digits with leading zeros
     */
    d() {
        return zerofill(this.getDate());
    }

    /*
    static D(date: Target){
        return date.getDate();
    }
    D(){
        return date.getDate();
    }
    */

    /**
     * Day of the month without leading zeros
     * @param date
     */
    static j(date: Target) {
        return date.getDate();
    }

    /**
     * Day of the month without leading zeros
     */
    j() {
        return this.getDate();
    }

    /*
    static l(date:Target){

    }
    l(){

    }
    */

    /**
     * ISO-8601 numeric representation of the day of the week
     * @param date
     */
    static N(date: Target) {
        return date.getDay() || 7;
    }

    /**
     * ISO-8601 numeric representation of the day of the week
     */
    N() {
        return this.getDay() || 7;
    }

    /**
     * English ordinal suffix for the day of the month, 2 characters
     * @param date
     */
    static S(date: Target) {
        const value = date.getDate();
        return value < 4 ?
            suffixes[value] :
            'th';
    }

    /**
     * English ordinal suffix for the day of the month, 2 characters
     */
    S() {
        return Dates.S(this);
    }

    /**
     * Numeric representation of the day of the week
     * @param date
     */
    static w(date: Date) {
        return date.getDay();
    }

    /**
     * Numeric representation of the day of the week
     */
    w() {
        return this.getDay();
    }

    //////////////////////////////
    // Week
    //////////////////////////////

    /**
     * ISO-8601 week number of year, weeks starting on Monday
     * @param date
     */
    /*
    static W(date: Target) {

    }

    W() {
        return Dates.W(this);
    }
    */

    //////////////////////////////
    // Month
    //////////////////////////////

    /**
     * A full textual representation of a month, such as January or March
     * @param date
     */

    /*
    static F(date: Target){

    }
    F(){
      return Dates.F(this);
    }
     */

    /**
     * Numeric representation of a month, with leading zeros
     * @param date
     */
    static m(date: Target) {
        return zerofill(date.getUTCMonth());
    }

    /**
     * Numeric representation of a month, with leading zeros
     */
    m() {
        return zerofill(this.getUTCMonth());
    }

    /**
     * A short textual representation of a month, three letters
     * @param date
     */

    /*
    static M(date: Target){

    }

    M(){

    }
     */

    /**
     * Numeric representation of a month, without leading zeros
     * @param date
     */
    static n(date: Target) {
        return date.getMonth() + 1;
    }

    /**
     * Numeric representation of a month, without leading zeros
     */
    n() {
        return this.getMonth() + 1;
    }

    /**
     * Number of days in the given month
     * @param date
     */
    static t(date: Target) {
        //todo: leap year
        return lastDate[date.getMonth()];
    }

    /**
     * Number of days in the given month
     */
    t() {
        return Dates.t(this);
    }


    /**
     * The day of the year (starting from 0)
     * @param date
     */
    static z(date: Target) {
        const m = date.getMonth();
        let days = date.getDate();
        if (m) {
            days += lastDateSum[m];
            // todo: + 1 for leap years
        }
        return days;
    }

    /**
     * The day of the year (starting from 0)
     */
    z() {
        return Dates.z(this);
    }

    //////////////////////////////
    // Year
    //////////////////////////////

    /**
     * Whether it's a leap year
     * @param date
     */
    static L(date: Target) {
        // todo: leap year
        return 0;
    }

    /**
     * Whether it's a leap year
     */
    L() {
        return Dates.L(this);
    }

    /**
     * ISO-8601 week-numbering year. This has the same value as Y, except that if the ISO week number (W) belongs to the previous or next year, that year is used instead.
     * @param date
     */
    static o(date: Target) {
        return date.getFullYear()
    }

    /**
     * ISO-8601 week-numbering year. This has the same value as Y, except that if the ISO week number (W) belongs to the previous or next year, that year is used instead.
     */
    o() {
        return this.getFullYear()
    }

    /**
     * A full numeric representation of a year, 4 digits
     * @param date
     * @constructor
     */
    static Y(date: Target) {
        return date.getFullYear();
    }

    /**
     * A full numeric representation of a year, 4 digits
     */
    Y() {
        return this.getFullYear();
    }

    /**
     * A two digit representation of a year
     * @param date
     */
    static y(date: Target) {
        return String(date.getFullYear()).slice(2);
    }

    /**
     * A two digit representation of a year
     */
    y() {
        return String(this.getFullYear()).slice(2);
    }

    //////////////////////////////
    // Time
    //////////////////////////////

    /**
     * Lowercase Ante meridiem and Post meridiem
     * @param date
     */
    static a(date: Target) {
        return apm[Math.floor(date.getHours() / 12)];
    }

    /**
     * Uppercase Ante meridiem and Post meridiem
     */
    a() {
        return Dates.a(this);
    }

    /**
     * Uppercase Ante meridiem and Post meridiem
     * @param date
     */
    static A(date: Target) {
        return APM[Math.floor(date.getHours() / 12)];
    }

    /**
     * Lowercase Ante meridiem and Post meridiem
     */
    A() {
        return Dates.A(this);
    }

    /**
     * B, what is it internet time ?
     */

    /**
     * 12-hour format of an hour without leading zeros
     * @param date
     */
    static g(date: Target) {
        return Math.floor(date.getHours() % 12);
    }

    /**
     * 12-hour format of an hour without leading zeros
     */
    g() {
        return Dates.g(this);
    }

    /**
     * 24-hour format of an hour without leading zeros
     * @param date
     */
    static G(date: Target) {
        return date.getHours() % 12;
    }

    /**
     * 24-hour format of an hour without leading zeros
     */
    G() {
        return Dates.G(this);
    }

    /**
     * 12-hour format of an hour with leading zeros
     * @param date
     */
    static h(date: Target) {
        return zerofill(Dates.g(date));
    }

    /**
     * 12-hour format of an hour with leading zeros
     */
    h() {
        return Dates.h(this);
    }

    /**
     * 24-hour format of an hour with leading zeros
     * @param date
     */
    static H(date: Target) {
        return zerofill(Dates.G(date));
    }

    /**
     * 24-hour format of an hour with leading zeros
     */
    H() {
        return Dates.H(this);
    }

    /**
     * Minutes with leading zeros
     * @param date
     */
    static i(date: Target) {
        return zerofill(date.getMinutes());
    }

    /**
     * Minutes with leading zeros
     * @param date
     */
    i() {
        return Dates.i(this);
    }

    /**
     * Seconds with leading zeros
     * @param date
     */
    static s(date: Target) {
        return zerofill(date.getSeconds());
    }

    /**
     * Seconds with leading zeros
     * @param date
     */
    s() {
        return Dates.s(this);
    }


    /**
     * Microseconds
     * @example 654321
     * @param date
     */
    static u(date: Target) {
        // todo check
        return date.getMilliseconds();
    }

    /**
     * Microseconds
     * @example 654321
     * @param date
     */
    u() {
        return Dates.u(this);
    }

    /**
     * Microseconds
     * @example 654
     * @param date
     */
    static v(date: Target) {
        // todo check
        return date.getMilliseconds();
    }

    v() {
        return Dates.v(this);
    }

    //////////////////////////////
    // Timezone
    //////////////////////////////
    // e
    // I
    // O
    // P
    // T
    // Z

    //////////////////////////////
    // Full Date/Time
    //////////////////////////////
    // c
    // r
    // U
}

function zerofill(value: number) {
    return value < 10 ?
        '0' + value :
        value;
}