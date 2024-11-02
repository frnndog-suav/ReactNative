import { Button, Text } from "@gluestack-ui/themed";
import { ComponentProps } from "react";

type TProps = ComponentProps<typeof Button> & {
  name: string;
  isActive: boolean;
};

export function Group({ isActive, name, ...rest }: TProps) {
  return (
    <Button
      {...rest}
      minWidth={48}
      backgroundColor="#202024"
      borderRadius={4}
      justifyContent="center"
      alignItems="center"
      borderColor="#00B37E"
      borderWidth={isActive ? 1 : 0}
      sx={{
        ":active": {
          borderWidth: 1,
        },
      }}
    >
      <Text
        color={isActive ? "#00B37E" : "#C4C4CC"}
        textTransform="uppercase"
        fontSize={14}
        paddingVertical={10}
      >
        {name}
      </Text>
    </Button>
  );
}
