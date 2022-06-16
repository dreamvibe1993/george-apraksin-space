export const apiAddress =
  // eslint-disable-next-line no-undef
  process.env.NEXT_PUBLIC_ENV === "development"
    ? // eslint-disable-next-line no-undef
      process.env.NEXT_PUBLIC_API_URL_LOCAL
    : // eslint-disable-next-line no-undef
      process.env.NEXT_PUBLIC_API_URL;
