import moment from "moment";

export interface MinsAndSeconds {
    mins: string;
    secs: string;
}

/**
 * Convert milliseconds to seconds
 * @param millis the milliseconds to convert
 * @returns the millis in seconds (rounded to nearest second)
 */
export function convertMillisToSeconds(millis: number): number {
    return Math.round(millis / 1000);
}

export function convertMinsToMinsAndSeconds(mins: number): MinsAndSeconds {
    return convertSecondsToMinsAndSeconds(mins * 60);
}

export function convertSecondsToMinsAndSeconds(seconds: number): MinsAndSeconds {
    return {
        mins: String(Math.floor(seconds / 60)).padStart(2, '0'),
        secs: String(seconds % 60).padStart(2, '0'),
    }
}

export function getYYY_MM_DD_HH_mm_SSForTimestamp(timestamp: number): string {
    const d = new Date();
    d.setTime(timestamp);

    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0'); //January is 0!
    const dd = String(d.getDate()).padStart(2, '0');
    const hh = String(d.getHours()).padStart(2, '0');
    const mn = String(d.getMinutes()).padStart(2, '0');
    const zz = String(d.getMilliseconds()).padStart(3, '0');
    return `${yyyy}-${mm}-${dd} ${hh}:${mn}:${zz}`;
}

export function getHH_mm_ForTimestamp(timestamp: number): string {
    const d = new Date();
    d.setTime(timestamp);
    return String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0');
}

export function getHH_mm_ZZZ_ForTimestamp(timestamp: number): string {
    const d = new Date();
    d.setTime(timestamp);
    return String(d.getHours()).padStart(2, '0')
        + ":"
        + String(d.getMinutes()).padStart(2, '0')
        + ":"
        + String(d.getMilliseconds()).padStart(3, '0');
}

export function formatDate(date: string, formatIn: string, formatOut: string): string {
    return moment(date, formatIn).format(formatOut);
}

export function parseDate(date: string, formatIn: string): Date {
    return moment(date, formatIn).toDate();
}

export function getCurrentMillis(): number { return Date.now(); }

export function formatTimeElapsedString(intervalValue: number, intervalUnit: string): string {
    const roundedValue = Math.floor(intervalValue);
    return `${roundedValue} ${intervalUnit}${roundedValue > 1 ? 's' : ''} ago`;
}

export function formatTimeSince(timestamp: number): string {
    const secondsElapsed = Math.floor((getCurrentMillis() - timestamp) / 1000);

    if (secondsElapsed < 3600) {
        return "just now";
    }

    const timeIntervals = [
        { interval: 31536000, unit: 'year' },
        { interval: 2592000, unit: 'month' },
        { interval: 604800, unit: 'week' },
        { interval: 86400, unit: 'day' },
        { interval: 3600, unit: 'hour' },
        { interval: 60, unit: 'minute' },
    ];

    for (const { interval, unit } of timeIntervals) {
        const timeValue = secondsElapsed / interval;
        if (timeValue > 1) {
            return formatTimeElapsedString(timeValue, unit);
        }
    }

    return `${secondsElapsed} second${secondsElapsed > 1 ? 's' : ''} ago`;
}