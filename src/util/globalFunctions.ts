import { UrlPaths } from '@/constants/UrlConstants';
import { LocalStorageKey } from '@/services/storage/LocalStorageApi';
import moment from 'moment';
import { LOGGER, WoiCandidateModule } from '../../module';

const REGEX_URL_WITHOUT_PROTOCOL_SUBDOMAIN: RegExp =
  /(?:https?:\/\/)?(?:www\d?\.)?(.*?)(?:\/|$)/;

export function getBaseDomainFromUrl(url: string): string {
  let urlMatch;
  try {
    urlMatch = new URL(url).hostname;
  } catch (e: any) {
    // if the URL is not valid, try getting the base domain from the string without it having http/https
    const match = url?.match(REGEX_URL_WITHOUT_PROTOCOL_SUBDOMAIN);
    if (match) {
      urlMatch = match[0];
    } else {
      LOGGER.error(`getBaseDomainFromUrl() Invalid URL: ${url}, error: ${e}`);
      return '';
    }
  }

  // if the urlMatch has a subdomain (eg. 'www', 'app', etc.) remove it
  const parts = urlMatch.split('.');
  if (parts.length > 2) {
    urlMatch = parts.slice(1).join('.');
  }

  // remove any path from the urlMatch
  const pathIndex = urlMatch.indexOf('/');
  if (pathIndex > 0) {
    urlMatch = urlMatch.substring(0, pathIndex);
  }

  if (urlMatch === '/') urlMatch = '';

  return urlMatch;
}

export function getClosingDate(value: number) {
  if (!value) {
    return '';
  }

  const date = new Date(value);
  const month = date.toLocaleString('en-US', { month: 'long' });
  const year = date.getFullYear();

  const formattedDate = `${month}, ${year}`;

  return formattedDate;
}

export const getYear = (millies: any) => {
  const foundingDate = new Date(millies);
  const yearFounded = foundingDate.getFullYear();
  return yearFounded;
};

export const isValidEmailFormat = (input: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailRegex.test(input);
  return isValid;
};

export const isValidLinkedInUrlFormat = (input: string): boolean => {
  const linkedInUrlRegex =
    /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?$/;
  return linkedInUrlRegex.test(input);
};

export const isOtpValidFormat = (input: string): boolean => {
  // Check if the input is empty
  if (input === '') {
    return false; // Return false for empty strings
  }

  // Define the regex pattern for numeric values
  const OtpRegex = /^[0-9]*$/;

  // Test if the input matches the regex pattern
  const isValid = OtpRegex.test(input);

  return isValid; // Return the result of the regex test
};
export const formatNumber = (value: any) => {
  const suffixes = ['', 'k', 'm', 'b', 't'];
  let suffixNum = 0;

  value = parseInt(value, 10);
  while (value >= 1000 && suffixNum < suffixes.length - 1) {
    value /= 1000;
    suffixNum++;
  }
  return value?.toFixed(1).replace(/\.0$/, '') + suffixes[suffixNum];
};

export function isNullOrEmpty(obj?: any | null | undefined) {
  return obj === null || typeof obj === 'undefined' || !obj;
}

export function returnSafely(str?: string | null | undefined): string {
  if (isNullOrEmpty(str)) return '';
  //eslint-disable-next-line
  else return str!!;
}

export function containsNullOrEmpty(list: any[]): boolean {
  for (const element of list) {
    if (isNullOrEmpty(element)) return true;
  }
  return false;
}

export function listContains<T>(value: T, list: T[]) {
  return list.indexOf(value) !== -1;
}

// Return if the text contains the substring
export function stringContains(
  str?: string | null | undefined,
  val?: string | null | undefined,
): boolean {
  if (isNullOrEmpty(str) || isNullOrEmpty(val)) return false;

  //eslint-disable-next-line
  return str!!.indexOf(val!!) !== -1;
}

// Return if the text contains any of the substrings
export function stringContainsValues(
  str?: string | null | undefined,
  values?: string[] | null | undefined,
): boolean {
  if (isNullOrEmpty(str) || isNullOrEmpty(values)) return false;

  //eslint-disable-next-line
  for (let i = 0; i <= values!!.length; i++) {
    //eslint-disable-next-line
    const substring = values!![i];
    //eslint-disable-next-line
    if (str!!.indexOf(substring) !== -1) {
      return true;
    }
  }
  return false;
}

export function replaceAll(
  str: string,
  textReplacements: { [token: string]: string },
): string {
  for (const token in textReplacements) {
    str = str.replaceAll(token, textReplacements[token]);
  }
  return str;
}

// Get a list of all the values that are in the text
export function getAllInstancesInString(
  str?: string | null | undefined,
  values?: string[] | null | undefined,
): string[] {
  if (isNullOrEmpty(str) || isNullOrEmpty(values) || values?.length === 0) {
    return [];
  }

  const subset: string[] = [];

  values?.forEach(function (val: string | null | undefined) {
    if (stringContains(str, val)) {
      //eslint-disable-next-line
      subset.push(val!!);
    }
  });

  return subset;
}

export function trimText(text: string, length: number): string {
  return text?.substring(0, Math.min(text.length, length));
}

/**
 * Capitalize the first letter of the text
 *
 * @param text the text to capitalize
 * @returns the text with the first letter capitalized
 */
export function capitalizeFirstLetter(text: string): string {
  if (isNullOrEmpty(text)) return '';
  else if (text.length === 1) return text.toUpperCase();
  else return text.charAt(0).toUpperCase() + text.slice(1);
}

// get a random subset from an array
export function getRandomSubSet(arr: any[], n: number) {
  let len = arr.length;
  const result = new Array(n);
  const taken = new Array(len);
  let count = n;

  if (n > len) {
    throw new RangeError('getRandom: more elements taken than available');
  }
  while (count--) {
    const x = Math.floor(Math.random() * len);
    result[count] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

export function getRandomInt(max: number, not: number = -1): number {
  let rand: number | null = null;
  while (rand === null || rand === not) {
    rand = Math.floor(Math.random() * Math.floor(max));
  }
  return rand;
}

export function getRandomBoolean(): boolean {
  return Math.random() < 0.5;
}

// Returns an integer random number between min (included) and max (included):
export function randomInteger(
  minIncluded: number,
  maxIncluded: number,
): number {
  return (
    Math.floor(Math.random() * (maxIncluded - minIncluded + 1)) + minIncluded
  );
}

/* Randomize array in-place using Durstenfeld shuffle algorithm */
export function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

export function getCurrentMillis(): number {
  return Date.now();
}

export function deleteValues(obj: any, valueNames: string[]): any {
  valueNames.forEach(function (name) {
    if (Object.prototype.hasOwnProperty.call(obj, name)) {
      delete obj[name];
    }
  });
  return obj;
}

export function chunkArray(arr: any[], perChunk: number): any[][] {
  return arr.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);
}

export function objectEquals(x: any, y: any) {
  if (x === y) return true;
  // if both x and y are null or undefined and exactly the same

  if (!(x instanceof Object) || !(y instanceof Object)) return false;
  // if they are not strictly equal, they both need to be Objects

  if (x.constructor !== y.constructor) return false;
  // they must have the exact same prototype chain, the closest we can do is
  // test there constructor.

  for (const p in x) {
    if (!Object.prototype.hasOwnProperty.call(x, p)) continue;
    // other properties were tested using x.constructor === y.constructor

    if (!Object.prototype.hasOwnProperty.call(y, p)) return false;
    // allows to compare x[ p ] and y[ p ] when set to undefined

    if (x[p] === y[p]) continue;
    // if they have the same strict value or identity then they are equal

    if (typeof x[p] !== 'object') return false;
    // Numbers, Strings, Functions, Booleans must be strictly equal

    if (!objectEquals(x[p], y[p])) return false;
    // Objects and Arrays must be tested recursively
  }

  for (const p in y) {
    if (
      Object.prototype.hasOwnProperty.call(y, p) &&
      !Object.prototype.hasOwnProperty.call(x, p)
    ) {
      return false;
    }
    // allows x[ p ] to be set to undefined
  }

  return true;
}

let lastDeviceId: string = '';

/**
 * If the user has a device ID stored in local storage, return it. Otherwise, generate a new device ID and store it in local storage.
 *
 * TODO: move this to a separate DeviceHelper file
 *
 * @returns a unique device ID for the user's device
 */
export const getDeviceId = (): string => {
  let deviceId = WoiCandidateModule.localStorage().getString(
    LocalStorageKey.deviceId,
  );
  if (!isNullOrEmpty(deviceId)) {
    if (lastDeviceId !== deviceId) {
      //eslint-disable-next-line
      lastDeviceId = deviceId!!;
      LOGGER.trace(`getDeviceId() Found existing deviceId=${deviceId}`);
    }
    //eslint-disable-next-line
    return deviceId!!;
  }

  // Get the user's operating system and browser information
  const userOperatingSystem = window.navigator.platform;
  const userBrowser = window.navigator.userAgent;

  // Extract relevant information from user-agent string
  const browserMatches = userBrowser.match(
    /(Chrome|Firefox|Safari|Edge|Opera)/,
  );
  const userBrowserName = browserMatches ? browserMatches[0] : 'Browser';

  // Extract relevant information from platform string
  const osMatches = userOperatingSystem.match(/(Win|Mac|Linux|Android|iOS)/);
  const userOperatingSystemName = osMatches ? osMatches[0] : 'OS';

  // Generate a random 4-digit code
  const randomCode = Math.floor(1000 + Math.random() * 9000);

  // Construct the device ID
  deviceId = `${userOperatingSystemName}-${userBrowserName}-${randomCode}`;
  WoiCandidateModule.localStorage().setString(
    LocalStorageKey.deviceId,
    deviceId,
  );
  LOGGER.debug(`getDeviceId() Generated and saved deviceId=${deviceId}`);
  return deviceId;
};

/**
 * Do a local logout by clearing the local storage.
 *
 * Then updates the URL path to take the user back to the auth page.
 */
export const localLogout = () => {
  WoiCandidateModule.localStorage().clear();
  // update URL path to take user back to the auth page
  window.location.pathname = UrlPaths.Auth;
};

export const formatFinancialValue = (value: number | undefined): string => {
  if (isNullOrEmpty(value)) return '0';

  // format the value in shorthand with a k, m, b, etc. suffix
  return formatNumber(value?.toString() || '0');
};

export function isEnumContainValue<T>(
  enumObject: { [key: string]: T },
  value: any,
): boolean {
  return Object.values(enumObject).includes(value);
}

/**
 * Formats a number string with commas
 *
 * @param value the value to format
 * @returns the value with commas added back
 */
export const formatNumberWithCommas = (value: string): string => {
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ','); // Add commas back
};

/**
 * Check if the value is a single non-numeric character (eg. "a", "A", "!", "£", etc.)
 *
 * @param value the value to check
 * @returns TRUE: if the value is a single non-numeric character
 */
export const isSingleNonNumericChar = (value: string): boolean => {
  if (value.length === 1) {
    const regexChar =
      /[A-Za-z,_.\!\"\£\$\%\^\&\*\(\)\@\'\#\~\]\[\{\}\<\>\|\\\`\¬\+ ]+$/g;
    return value.match(regexChar) != null;
  }
  return false;
};

/**
 * @param obj the object to check
 * @returns TRUE: if the object is empty
 */
export const isObjectEmpty = (obj: any | null | undefined): boolean => {
  return isNullOrEmpty(obj) || Object.keys(obj).length === 0;
};

export function replaceNewLinesForHtml(str: string) {
  str = str.replace(/\n/g, '<br>');
  return str;
}

export function formatTimestampToDate(timestamp: number) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const date = new Date(timestamp);
  const monthName = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  return `${monthName} ${day}, ${year}`;
}

export function truncateText(text: string, limit: number) {
  if (text.length > limit) {
    return `${text.slice(0, limit)}...`;
  } else {
    return text;
  }
}

const now = new Date();
const endTime = new Date(now.getTime() + 30 * 60000);
export const defaultTimeSlot = {
  start: now,
  end: endTime,
};

export function formatDate(isoString: any) {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  };
  return new Date(isoString).toLocaleDateString('en-US', options);
}

export function formatTime(isoString: any) {
  const options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };
  return new Date(isoString).toLocaleTimeString('en-US', options);
}

export const generateTimeArray = () => {
  const times = [];
  const formatTime = (hour: any) => {
    const period = hour < 12 ? 'AM' : 'PM';
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
    return `${formattedHour}:00 ${period}`;
  };

  for (let hour = 0; hour < 24; hour++) {
    times.push(formatTime(hour));
  }

  return times;
};

export const getInterviewStageName = (
  id: string,
  stages: { id: string; name: string }[],
) => {
  const stage = stages.find((stage) => stage.id === id);
  return stage ? stage.name : '';
};

export const getInterviewTeamName = (
  id: string,
  teams: { id: string; name: string }[],
) => {
  const team = teams.find((team) => team.id === id);
  return team ? team.name : '';
};

export const convertToUnix = (timeString: string, popupInfo: any) => {
  return moment(timeString, 'hh:mm A')
    .set({
      year: popupInfo.start.getFullYear(),
      month: popupInfo.start.getMonth(),
      date: popupInfo.start.getDate(),
    })
    .unix();
};

export const convertTimeStringToUnix = (timeString: string, date: any) => {
  return moment(timeString, 'hh:mm A')
    .set({
      year: date.getFullYear(),
      month: date.getMonth(),
      date: date.getDate(),
    })
    .unix();
};
