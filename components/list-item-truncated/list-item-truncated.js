import React from "react";
import { Link, ListIcon, ListItem } from "@chakra-ui/react";

import { FaTelegram } from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

export const ListItemTruncated = (props) => {
  const { contact, source, href } = props;
  const icons = [
    { source: "telegram", icon: FaTelegram },
    { source: "phone", icon: AiOutlinePhone },
    { source: "email", icon: AiOutlineMail },
  ];

  if (!contact || !source || !href) return null;
  
  return (
    <ListItem
      display="block"
      textOverflow="ellipsis"
      whiteSpace="nowrap"
      overflow="hidden"
    >
      <ListIcon as={icons.find((icon) => icon.source === source).icon} />
      <Link as="a" href={href}>
        {contact}
      </Link>
    </ListItem>
  );
};
