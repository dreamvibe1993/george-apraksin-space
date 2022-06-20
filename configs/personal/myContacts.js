export const myContacts = [
  {
    source: "telegram",
    // eslint-disable-next-line no-undef
    contact: process.env.NEXT_PUBLIC_MY_TG,
    // eslint-disable-next-line no-undef
    href: process.env.NEXT_PUBLIC_MY_TG,
  },
  {
    source: "phone",
    // eslint-disable-next-line no-undef
    contact: process.env.NEXT_PUBLIC_MY_PHONE,
    // eslint-disable-next-line no-undef
    href: `tel:${process.env.NEXT_PUBLIC_MY_PHONE}`,
  },
  {
    source: "email",
    // eslint-disable-next-line no-undef
    contact: process.env.NEXT_PUBLIC_MY_EMAIL,
    // eslint-disable-next-line no-undef
    href: `mailto:${process.env.NEXT_PUBLIC_MY_EMAIL}`,
  },
];
