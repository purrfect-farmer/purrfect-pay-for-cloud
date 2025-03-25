export function getSearchParam(key) {
  const url = new URL(location.href);
  const value = url.searchParams.get(key);

  return value;
}

export function getAccessCode() {
  return getSearchParam("accessCode");
}

export function getRedirectURL() {
  return getSearchParam("url");
}
