import { Image } from "@gluestack-ui/themed";
import { ComponentProps } from "react";

type TProps = ComponentProps<typeof Image>;

export function UserPhoto({ ...rest }: TProps) {
  return (
    <Image
      borderRadius={999}
      borderWidth={4}
      borderColor="#323238"
      backgroundColor="#29292E"
      {...rest}
    />
  );
}
