import React from "react";
import { Link, ListIcon, ListItem } from "@chakra-ui/react";

import { FaTelegram } from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";

export const ListItemTruncated = (props) => {
  const { contact, source } = props;
  const icons = [
    { source: "telegram", icon: FaTelegram },
    { source: "phone", icon: AiOutlinePhone },
  ];
  return (
    <ListItem
      display="block"
      textOverflow="ellipsis"
      whiteSpace="nowrap"
      overflow="hidden"
    >
      <ListIcon as={icons.find((icon) => icon.source === source).icon} />
      <Link as="a" href={contact}>
        {contact}
      </Link>
    </ListItem>
  );
};
